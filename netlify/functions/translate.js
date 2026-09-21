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

    for (let attempt = 0; attempt < retryDelays.length; attempt++) {
      if (retryDelays[attempt] > 0) {
        console.log(logPrefix, "Retry wait:", retryDelays[attempt], "ms");
        await new Promise((resolve) => setTimeout(resolve, retryDelays[attempt]));
      }

      try {
        response = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            q: text,
            source: source,
            target: target,
            format: "text"
          })
        });
      } catch (fetchError) {
        console.error(logPrefix, "Google fetch failed:", fetchError);
        return {
          statusCode: 502,
          headers: corsHeaders,
          body: JSON.stringify({
            error: "Google翻訳への接続に失敗しました",
            detail: String(fetchError?.message || fetchError)
          })
        };
      }

      contentType = response.headers.get("content-type") || "";
      rawBody = await response.text();

      console.log(
        logPrefix,
        "Google response",
        JSON.stringify({
          status: response.status,
          ok: response.ok,
          content_type: contentType,
          body_length: rawBody.length,
          attempt: attempt + 1
        })
      );

      if (response.ok) break;

      if (response.status !== 429 || attempt === retryDelays.length - 1) {
        console.error(
          logPrefix,
          "Google returned an error response. Body preview:",
          rawBody.slice(0, 500)
        );
        return {
          statusCode: response.status,
          headers: corsHeaders,
          body: JSON.stringify({
            error: "Google translation error",
            google_status: response.status
          })
        };
      }

      console.warn(logPrefix, "Google returned 429; retrying.");
    }

    let data;
    try {
      data = JSON.parse(rawBody);
    } catch (parseError) {
      console.error(
        logPrefix,
        "Google response was not valid JSON. Body preview:",
        rawBody.slice(0, 500)
      );

      return {
        statusCode: 502,
        headers: corsHeaders,
        body: JSON.stringify({
          error: "Google翻訳の応答をJSONとして読み取れませんでした",
          content_type: contentType
        })
      };
    }

    const translated =
      data &&
      data.data &&
      Array.isArray(data.data.translations) &&
      data.data.translations[0]
        ? String(data.data.translations[0].translatedText || "")
        : "";

    if (!translated) {
      console.error(
        logPrefix,
        "JSON was received, but no translated text was found.",
        JSON.stringify({
          has_data: !!data?.data,
          translations_is_array: Array.isArray(data?.data?.translations)
        })
      );

      return {
        statusCode: 502,
        headers: corsHeaders,
        body: JSON.stringify({
          error: "翻訳結果を取得できませんでした"
        })
      };
    }

    console.log(
      logPrefix,
      "Translation succeeded",
      JSON.stringify({
        translated_length: translated.length,
        source,
        target
      })
    );

    return {
      statusCode: 200,
      headers: corsHeaders,
      body: JSON.stringify({
        text: translated
      })
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
