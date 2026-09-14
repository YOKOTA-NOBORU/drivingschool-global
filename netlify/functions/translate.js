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

    const url =
      "https://translate.googleapis.com/translate_a/single" +
      "?client=gtx" +
      "&sl=" + encodeURIComponent(source) +
      "&tl=" + encodeURIComponent(target) +
      "&dt=t" +
      "&q=" + encodeURIComponent(text);

    let response;

    try {
      response = await fetch(url, {
        method: "GET",
        headers: {
          "User-Agent": "Mozilla/5.0"
        }
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

    const contentType = response.headers.get("content-type") || "";
    const rawBody = await response.text();

    console.log(
      logPrefix,
      "Google response",
      JSON.stringify({
        status: response.status,
        ok: response.ok,
        content_type: contentType,
        body_length: rawBody.length
      })
    );

    if (!response.ok) {
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
      Array.isArray(data) && Array.isArray(data[0])
        ? data[0].map(part => part?.[0] || "").join("")
        : "";

    if (!translated) {
      console.error(
        logPrefix,
        "JSON was received, but no translated text was found.",
        JSON.stringify({
          top_level_is_array: Array.isArray(data),
          first_item_is_array: Array.isArray(data?.[0])
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
