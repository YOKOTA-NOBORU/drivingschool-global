const admin = require("firebase-admin");

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "Content-Type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Content-Type": "application/json"
};

exports.handler = async function (event) {
  const logPrefix = "[translate-diagnostic]";

  if (event.httpMethod === "OPTIONS") {
    return {
      statusCode: 204,
      headers: corsHeaders,
      body: ""
    };
  }

  if (event.httpMethod !== "POST") {
    console.log(logPrefix, "Rejected non-POST request:", event.httpMethod);
    return {
      statusCode: 405,
      headers: corsHeaders,
      body: JSON.stringify({ error: "POST only" })
    };
  }

  try {
    const input = JSON.parse(event.body || "{}");

    const text = String(input.text || "").trim();
    const targetRaw = input.target_lang || "vi";
    const sourceRaw = input.source_lang || "ja";

    const targets = input.target_langs || null;
    const isBatch = Array.isArray(targets) && targets.length > 0;

    console.log(
      logPrefix,
      "Request received",
      JSON.stringify({
        source_lang: sourceRaw,
        target_lang: targetRaw,
        text_length: text.length
      })
    );

    if (!text) {
      console.log(logPrefix, "No text supplied");
      return {
        statusCode: 400,
        headers: corsHeaders,
        body: JSON.stringify({ error: "翻訳する文章がありません" })
      };
    }

    // Per-device monthly translation limit
    const projectId = process.env.FIREBASE_PROJECT_ID;
    const clientEmail = process.env.FIREBASE_CLIENT_EMAIL;
    const privateKey = (process.env.FIREBASE_PRIVATE_KEY || "").replace(/\\n/g, "\n");
    if (!projectId || !clientEmail || !privateKey) throw new Error("Firebase環境変数が設定されていません");
    if (!admin.apps.length) admin.initializeApp({credential: admin.credential.cert({ projectId, clientEmail, privateKey })});

    const deviceId = String(input.device_id || "").trim();
    if (!/^[A-Za-z0-9_-]{12,100}$/.test(deviceId)) {
      return {statusCode:400,headers:corsHeaders,body:JSON.stringify({error:"端末IDを確認できません。ページを再読み込みしてください。",code:"DEVICE_ID_REQUIRED"})};
    }

    const db = admin.firestore();
    const usageRef = db.collection("translation_usage_devices").doc(deviceId);
    const monthNow = new Intl.DateTimeFormat("en-CA",{timeZone:"Asia/Tokyo",year:"numeric",month:"2-digit"}).format(new Date()).slice(0,7);
    const charCount = text.length;

    const usage = await db.runTransaction(async tx => {
      const snap = await tx.get(usageRef);
      const d = snap.exists ? snap.data() : {};
      let used = Number(d.used || 0);
      const limit = Number(d.limit || 50000);
      let extra = Number(d.extra || 0);
      if (String(d.month || "") !== monthNow) { used = 0; extra = 0; }
      const totalLimit = limit + extra;
      if (used + charCount > totalLimit) {
        return {blocked:true,used,limit,extra,totalLimit,requested:charCount,month:monthNow,deviceId};
      }
      const newUsed = used + charCount;
      tx.set(usageRef,{used:newUsed,limit,extra,month:monthNow,lastUsedAt:admin.firestore.FieldValue.serverTimestamp()},{merge:true});
      return {blocked:false,used:newUsed,limit,extra,totalLimit,requested:charCount,month:monthNow,deviceId};
    });

    if (usage.blocked) {
      return {statusCode:429,headers:corsHeaders,body:JSON.stringify({
        error:"この端末は今月の翻訳文字数上限に達しました。管理者に追加文字数を依頼してください.",
        code:"MONTHLY_LIMIT_REACHED",usage
      })};
    }

    const map = {
      VI: "vi",
      vi: "vi",

      "EN-US": "en",
      EN: "en",
      en: "en",

      ZH: "zh-CN",
      "ZH-CN": "zh-CN",
      zh: "zh-CN",
      "zh-CN": "zh-CN",

      "PT-BR": "pt",
      PT: "pt",
      pt: "pt",

      ID: "id",
      id: "id",
      "id-ID": "id",

      NE: "ne",
      ne: "ne",
      "ne-NP": "ne",

      MY: "my",
      my: "my",
      "my-MM": "my",

      JA: "ja",
      ja: "ja"
    };

    const target = map[targetRaw] || String(targetRaw).toLowerCase();

    const targetList = isBatch
      ? targets.map(code => map[code] || String(code).toLowerCase())
      : [target];

    if (isBatch) {
      const allowedTargets = ["vi", "en", "zh", "pt", "id", "ne", "my"];

      if (
        targets.length !== allowedTargets.length ||
        !allowedTargets.every(code => targets.includes(code))
      ) {
        return {
          statusCode: 400,
          headers: corsHeaders,
          body: JSON.stringify({
            error: "翻訳先の言語指定が正しくありません"
          })
        };
      }
    }

    const source = map[sourceRaw] || String(sourceRaw).toLowerCase();

    // Google Cloud Translation API v2
    const apiKey = process.env.GOOGLE_TRANSLATE_API_KEY;

    if (!apiKey) {
      console.error(logPrefix, "GOOGLE_TRANSLATE_API_KEY is not configured");
      return {
        statusCode: 500,
        headers: corsHeaders,
        body: JSON.stringify({
          error: "GOOGLE_TRANSLATE_API_KEY が設定されていません"
        })
      };
    }

    const url =
      "https://translation.googleapis.com/language/translate/v2" +
      "?key=" + encodeURIComponent(apiKey);

    let response;
    let rawBody = "";
    let contentType = "";

    // GoogleがHTTP 429を返した場合だけ自動再試行
    
    const retryDelays = [0, 800, 1600];

    async function translateForTarget(targetCode) {
      let googleResponse;
      let rawBody = "";

      for (let attempt = 0; attempt < retryDelays.length; attempt++) {
        if (retryDelays[attempt] > 0) {
          await new Promise(resolve =>
            setTimeout(resolve, retryDelays[attempt])
          );
        }

        try {
          googleResponse = await fetch(url, {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              q: text,
              source: source,
              target: targetCode,
              format: "text"
            })
          });
        } catch (error) {
          return {
            ok: false,
            statusCode: 502,
            error: "Google翻訳への接続に失敗しました"
          };
        }

        rawBody = await googleResponse.text();

        if (googleResponse.ok) break;

        if (
          googleResponse.status !== 429 ||
          attempt === retryDelays.length - 1
        ) {
          return {
            ok: false,
            statusCode: googleResponse.status,
            error: "Google translation error"
          };
        }
      }

      let data;
      try {
        data = JSON.parse(rawBody);
      } catch (error) {
        return {
          ok: false,
          statusCode: 502,
          error: "Google翻訳の応答を読み取れませんでした"
        };
      }

      const translated =
        data?.data?.translations?.[0]?.translatedText || "";

      if (!translated) {
        return {
          ok: false,
          statusCode: 502,
          error: "翻訳結果を取得できませんでした"
        };
      }

      return {
        ok: true,
        text: String(translated)
      };
    }

    const translatedTexts = {};

    for (let i = 0; i < targetList.length; i++) {
      const result = await translateForTarget(targetList[i]);

      if (!result.ok) {
        return {
          statusCode: result.statusCode,
          headers: corsHeaders,
          body: JSON.stringify({
            error: result.error,
            google_status: result.statusCode,
            usage
          })
        };
      }

      if (isBatch) {
        const languageCode = String(targets[i]).toLowerCase();
        translatedTexts[languageCode] = result.text;
      } else {
        translatedTexts[String(targetRaw).toLowerCase()] = result.text;
      }
    }

    console.log(
      logPrefix,
      "Translation succeeded",
      JSON.stringify({
        language_count: targetList.length,
        source,
        targets: targetList
      })
    );

    return {
      statusCode: 200,
      headers: corsHeaders,
      body: JSON.stringify(
        isBatch
          ? {
              texts: translatedTexts,
              usage
            }
          : {
              text: translatedTexts[String(targetRaw).toLowerCase()],
              usage
            }
      )
    };

  } catch (error) {
    console.error(logPrefix, "Unhandled error:", error);

    return {
      statusCode: 500,
      headers: corsHeaders,
      body: JSON.stringify({
        error: error.message || "Translation failed"
      })
    };
  }
};
