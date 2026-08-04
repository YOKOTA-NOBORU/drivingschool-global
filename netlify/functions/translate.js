const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "Content-Type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Content-Type": "application/json"
};

exports.handler = async function (event) {
  // ブラウザからの事前確認通信
  if (event.httpMethod === "OPTIONS") {
    return {
      statusCode: 204,
      headers: corsHeaders,
      body: ""
    };
  }

  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      headers: corsHeaders,
      body: JSON.stringify({
        error: "POST only"
      })
    };
  }

  try {
    const input = JSON.parse(event.body || "{}");

    const text = String(input.text || "").trim();
    const targetRaw = input.target_lang || "vi";
    const sourceRaw = input.source_lang || "ja";

    if (!text) {
      return {
        statusCode: 400,
        headers: corsHeaders,
        body: JSON.stringify({
          error: "翻訳する文章がありません"
        })
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

    const target =
      map[targetRaw] || String(targetRaw).toLowerCase();

    const source =
      map[sourceRaw] || String(sourceRaw).toLowerCase();

    const url =
      "https://translate.googleapis.com/translate_a/single" +
      "?client=gtx" +
      "&sl=" + encodeURIComponent(source) +
      "&tl=" + encodeURIComponent(target) +
      "&dt=t" +
      "&q=" + encodeURIComponent(text);

    const response = await fetch(url, {
      method: "GET",
      headers: {
        "User-Agent": "Mozilla/5.0"
      }
    });

    const data = await response.json();

    if (!response.ok) {
      return {
        statusCode: response.status,
        headers: corsHeaders,
        body: JSON.stringify({
          error: "Google translation error"
        })
      };
    }

    const translated =
      Array.isArray(data) && Array.isArray(data[0])
        ? data[0].map(part => part[0]).join("")
        : "";

    if (!translated) {
      throw new Error("翻訳結果を取得できませんでした");
    }

    return {
      statusCode: 200,
      headers: corsHeaders,
      body: JSON.stringify({
        text: translated
      })
    };
  } catch (error) {
    return {
      statusCode: 500,
      headers: corsHeaders,
      body: JSON.stringify({
        error: error.message || "Translation failed"
      })
    };
  }
};