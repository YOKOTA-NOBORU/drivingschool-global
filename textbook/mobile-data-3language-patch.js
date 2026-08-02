/* 教本アプリ：追加3言語を項目番号と並び順で反映 */
(() => {
  "use strict";

  const LABELS = {
    "説明": {
      id: "Penjelasan",
      ne: "व्याख्या",
      my: "ရှင်းလင်းချက်"
    },
    "教官ワンポイント": {
      id: "Poin instruktur",
      ne: "प्रशिक्षकको सुझाव",
      my: "နည်းပြအကြံပြုချက်"
    },
    "検定ポイント": {
      id: "Poin ujian",
      ne: "परीक्षण बुँदा",
      my: "စာမေးပွဲအချက်"
    },
    "よくある失敗": {
      id: "Kesalahan umum",
      ne: "सामान्य गल्तीहरू",
      my: "အဖြစ်များသောအမှားများ"
    },
    "覚えておきたいこと": {
      id: "Hal yang perlu diingat",
      ne: "याद राख्नुपर्ने कुरा",
      my: "မှတ်သားရန်"
    },
    "教習で使う一言": {
      id: "Ungkapan saat pelajaran",
      ne: "प्रशिक्षणमा प्रयोग हुने वाक्य",
      my: "သင်ခန်းစာတွင်သုံးသောစကား"
    }
  };

  if (
    typeof textbookData === "undefined" ||
    !Array.isArray(textbookData)
  ) {
    console.error("textbookData が見つかりません。");
    return;
  }

  if (
    typeof MOBILE_ITEMS === "undefined" ||
    !Array.isArray(MOBILE_ITEMS)
  ) {
    console.error("MOBILE_ITEMS が見つかりません。");
    return;
  }

  function itemKey(item) {
    return `${Number(item.stage || 1)}-${Number(item.id)}`;
  }

  const sourceItems = new Map();

  textbookData.forEach(item => {
    sourceItems.set(itemKey(item), item);
  });

  MOBILE_ITEMS.forEach(mobileItem => {
    const sourceItem = sourceItems.get(itemKey(mobileItem));

    if (!sourceItem) {
      console.warn(
        "翻訳元が見つかりません:",
        itemKey(mobileItem),
        mobileItem.title
      );
      return;
    }

    const targetBlocks = mobileItem.blocks || [];

    /*
      data.jsが sections形式の場合
      1つのsectionを1つの画面カードとして対応させる
    */
    if (Array.isArray(sourceItem.sections)) {
      targetBlocks.forEach((targetBlock, blockIndex) => {
        const sourceSection = sourceItem.sections[blockIndex];
        if (!sourceSection) return;

        const japaneseItems = Array.isArray(targetBlock.ja)
          ? targetBlock.ja
          : [];

        ["id", "ne", "my"].forEach(lang => {
          targetBlock[lang] = japaneseItems.map((entry, entryIndex) => {
            const translatedText =
              entryIndex === 0
                ? sourceSection.translations?.[lang]
                : "";

            return {
              label:
                LABELS[entry.label]?.[lang] ||
                entry.label ||
                "",
              text:
                translatedText ||
                entry.text ||
                ""
            };
          });
        });
      });

      return;
    }

    /*
      data.jsが blocks形式の場合
      ブロック番号と文章番号で対応させる
    */
    if (Array.isArray(sourceItem.blocks)) {
      targetBlocks.forEach((targetBlock, blockIndex) => {
        const sourceBlock = sourceItem.blocks[blockIndex];
        if (!sourceBlock) return;

        const japaneseItems = Array.isArray(targetBlock.ja)
          ? targetBlock.ja
          : [];

        ["id", "ne", "my"].forEach(lang => {
          const sourceForeign = Array.isArray(sourceBlock[lang])
            ? sourceBlock[lang]
            : [];

          targetBlock[lang] = japaneseItems.map((entry, entryIndex) => {
            const translated = sourceForeign[entryIndex];

            return {
              label:
                translated?.label ||
                LABELS[entry.label]?.[lang] ||
                entry.label ||
                "",
              text:
                translated?.text ||
                entry.text ||
                ""
            };
          });
        });
      });
    }
  });

  console.log(
    "教本アプリのインドネシア語・ネパール語・ミャンマー語を反映しました。"
  );
})();