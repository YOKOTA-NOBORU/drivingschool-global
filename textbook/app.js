const LANGS={
  vi:"ベトナム語",
  en:"英語",
  zh:"中国語",
  pt:"ポルトガル語",
  id:"インドネシア語",
  ne:"ネパール語",
  my:"ミャンマー語"
};
const KINDS=["教官ワンポイント","検定ポイント","よくある失敗","覚えておきたいこと","教習で使う一言"];
const PDF_KEYS=new Set(["1-1","1-10","1-11","1-12","1-13","1-14","1-15","1-16","1-17","1-18","1-19","1-2","1-20","1-21","1-22","1-3","1-4","1-5","1-6","1-7","1-8","1-9","2-1","2-10","2-11","2-12","2-13","2-14","2-15","2-16","2-2","2-3","2-4","2-5","2-6","2-7","2-8","2-9"]);

let currentStage=1;
let currentKey="";
let visibleKinds=new Set(["説明"]);
let currentSpeechBlock=null;

// 個人編集データ（端末ごとに保存）
const PERSONAL_EDIT_KEY = "drivingTextbookPersonalEdits";

function loadPersonalEdits(){
  try{
    return JSON.parse(localStorage.getItem(PERSONAL_EDIT_KEY) || "{}");
  }catch(e){
    console.warn("個人編集データを読み込めませんでした",e);
    return {};
  }
}

function savePersonalEdits(data){
  try{
    localStorage.setItem(PERSONAL_EDIT_KEY,JSON.stringify(data));
    return true;
  }catch(e){
    alert("保存できませんでした。端末の空き容量を確認してください。");
    console.error(e);
    return false;
  }
}

function cloneLessonData(item){
  return JSON.parse(JSON.stringify(item));
}

const itemSelect=document.getElementById("itemSelect");
const langSelect=document.getElementById("lang");
const headerCard=document.getElementById("headerCard");
const list=document.getElementById("list");
const prevBtn=document.getElementById("prevBtn");
const nextBtn=document.getElementById("nextBtn");

// 教本アプリの選択状態を保存・復元
const LESSON_STATE_KEY = "drivingTextbookState";

function saveLessonState() {
  try {
    localStorage.setItem(LESSON_STATE_KEY, JSON.stringify({
      stage: currentStage,
      key: currentKey,
      lang: langSelect.value,
      visibleKinds: [...visibleKinds]
    }));
  } catch (e) {
    console.warn("教習項目の状態を保存できませんでした", e);
  }
}

function restoreLessonState() {
  try {
    const saved = JSON.parse(
      localStorage.getItem(LESSON_STATE_KEY) || "null"
    );
    if (!saved) return;

    if ([1, 2].includes(Number(saved.stage))) {
      currentStage = Number(saved.stage);
    }

    if (typeof saved.key === "string") {
      currentKey = saved.key;
    }

    if (LANGS[saved.lang]) {
      langSelect.value = saved.lang;
    }

    if (Array.isArray(saved.visibleKinds)) {
      visibleKinds = new Set(
        saved.visibleKinds.filter(
          kind => kind === "説明" || KINDS.includes(kind)
        )
      );
    }
  } catch (e) {
    console.warn("教習項目の状態を復元できませんでした", e);
  }
}

function voiceLang(code){
  return code==="vi" ? "vi-VN" :
         code==="en" ? "en-US" :
         code==="zh" ? "zh-CN" :
         code==="pt" ? "pt-BR" :
         code==="id" ? "id-ID" :
         code==="ne" ? "ne-NP" :
         code==="my" ? "my-MM" :
         "ja-JP";
}

function stopSpeech(){
  if("speechSynthesis" in window) speechSynthesis.cancel();
  if(currentSpeechBlock){
    currentSpeechBlock.classList.remove("playing");
    const hint=currentSpeechBlock.querySelector(".tap-speech-hint");
    if(hint) hint.textContent="🔊 タップで再生";
  }
  currentSpeechBlock=null;
}

function toggleSpeech(text,lang,block){
  if(!("speechSynthesis" in window)){
    alert("この端末では音声再生に対応していません。");
    return;
  }
  if(currentSpeechBlock===block && speechSynthesis.speaking){
    stopSpeech();
    return;
  }

  stopSpeech();
  const u=new SpeechSynthesisUtterance(text);
  u.lang=voiceLang(lang);
  u.rate=.9;

  currentSpeechBlock=block;
  block.classList.add("playing");
  const hint=block.querySelector(".tap-speech-hint");
  if(hint) hint.textContent="■ タップで停止";

  u.onend=()=>{if(currentSpeechBlock===block) stopSpeech();};
  u.onerror=()=>{if(currentSpeechBlock===block) stopSpeech();};
  speechSynthesis.speak(u);
}

function addSpeechStyles(){
  if(document.getElementById("tap-speech-style")) return;
  const s=document.createElement("style");
  s.id="tap-speech-style";
  s.textContent=`
    .foreign-block{cursor:pointer;transition:background .18s ease,border-color .18s ease,transform .08s ease;-webkit-tap-highlight-color:transparent}
    .foreign-block:active{transform:scale(.99)}
    .foreign-block.playing{background:#e4f5e9;border-left-color:#2f965c;box-shadow:0 0 0 2px rgba(47,150,92,.14)}
    .tap-speech-hint{margin-top:7px;color:#14532d;font-size:12px;font-weight:800}

    /* 日本語と外国語を1組として表示：完成版 Ver.3 */
    .translation-pair{
      margin:8px 0;
      border:1px solid #d8e7dc;
      border-radius:15px;
      overflow:hidden;
      background:#fff;
      box-shadow:0 3px 12px rgba(17,72,42,.07);
    }
    .translation-pair .jp-block{
      margin:0;
      padding:12px 14px 11px;
      border:0;
      border-radius:0;
      background:#fff;
    }
    .translation-pair .foreign-block{
      display:none;
      margin:0;
      padding:12px 14px;
      border:0;
      border-top:1px solid #d5eadb;
      border-left:7px solid #159447;
      border-radius:0;
      background:linear-gradient(135deg,#eaf8ee,#f6fcf8);
    }
    article.section.show-foreign .translation-pair .foreign-block{
      display:block;
    }

    .translation-pair .jp-label,
    .translation-pair .foreign-label{
      display:inline-flex;
      align-items:center;
      gap:5px;
      min-height:25px;
      padding:4px 9px;
      border-radius:999px;
      font-size:12px;
      font-weight:900;
      letter-spacing:.01em;
    }
    .translation-pair .jp-label{
      color:#31483a;
      background:#eef3ef;
    }
    .translation-pair .foreign-label{
      color:#075f2a;
      background:#d9f1e1;
    }

    .translation-pair .jp-text,
    .translation-pair .foreign-text{
      margin:7px 0 0;
      line-height:1.68;
    }
    .translation-pair .jp-text{
      color:#172033;
      font-weight:700;
    }
    .translation-pair .foreign-text{
      color:#08783a;
      font-weight:850;
      font-size:1.08em;
    }
    .translation-pair .tap-speech-hint{
      margin-top:6px;
      color:#14532d;
      font-size:11px;
      font-weight:900;
      opacity:.88;
    }

    /* 種類ごとの見分けやすいラベル＋アイコン */
    .translation-pair[data-kind="説明"] .jp-label::before{content:"📘"}
    .translation-pair[data-kind="教官ワンポイント"] .jp-label::before{content:"👨‍🏫"}
    .translation-pair[data-kind="検定ポイント"] .jp-label::before{content:"✅"}
    .translation-pair[data-kind="よくある失敗"] .jp-label::before{content:"⚠️"}
    .translation-pair[data-kind="覚えておきたいこと"] .jp-label::before{content:"🧠"}
    .translation-pair[data-kind="教習で使う一言"] .jp-label::before{content:"💬"}

    .translation-pair[data-kind="説明"] .jp-label{background:#edf3f0;color:#31483a}
    .translation-pair[data-kind="教官ワンポイント"] .jp-label{background:#fff3c4;color:#6a4b00}
    .translation-pair[data-kind="検定ポイント"] .jp-label{background:#e7f0ff;color:#174e9b}
    .translation-pair[data-kind="よくある失敗"] .jp-label{background:#ffe7e7;color:#9b1c31}
    .translation-pair[data-kind="覚えておきたいこと"] .jp-label{background:#eee8ff;color:#5c3aa8}
    .translation-pair[data-kind="教習で使う一言"] .jp-label{background:#e5f7f1;color:#07664c}

    @media(max-width:560px){
      .translation-pair{
        margin:9px 0;
        border-radius:14px;
      }
      .translation-pair .jp-block,
      .translation-pair .foreign-block{
        padding:11px 12px;
      }
      .translation-pair .jp-text,
      .translation-pair .foreign-text{
        line-height:1.62;
      }
      .translation-pair .foreign-text{
        font-size:1em;
      }
    }
  `;
  document.head.appendChild(s);
}

function normalizedItems(){
  const src=typeof MOBILE_ITEMS!=="undefined" ? MOBILE_ITEMS : [];
  const seen=new Set();
  return src
    .map((item,index)=>{
      const stage=Number(item.stage||1);
      const id=Number(item.id||index+1);
      return {...item,stage,id,key:`${stage}-${id}`};
    })
    .filter(item=>{
      if(seen.has(item.key)) return false;
      seen.add(item.key);
      return true;
    })
    .sort((a,b)=>(a.stage-b.stage)||(a.id-b.id));
}

function stageItems(){
  return normalizedItems().filter(item=>item.stage===currentStage);
}

function currentItem(){
  const items=stageItems();
  const original=items.find(item=>item.key===currentKey)||items[0]||null;

  if(!original) return null;

  // 元データを直接変更しないよう複製する
  const item=cloneLessonData(original);

  // 個人編集データがあれば、その内容を反映
  const edits=loadPersonalEdits();
  if(edits[item.key] && Array.isArray(edits[item.key].blocks)){
    item.blocks=cloneLessonData(edits[item.key].blocks);
  }

  return item;
}

function displayNo(item){
  return stageItems().findIndex(x=>x.key===item.key)+1;
}

function fillSelect(){
  const items=stageItems();
  if(!items.some(x=>x.key===currentKey)){
    currentKey=items[0]?.key||"";
  }

  itemSelect.innerHTML="";
  items.forEach((item,index)=>{
    const option=document.createElement("option");
    option.value=item.key;
    option.textContent=`教習項目${String(index+1).padStart(2,"0")}　${item.title}`;
    itemSelect.appendChild(option);
  });
  itemSelect.value=currentKey;
}

function renderHeader(){

  // 個人編集画面
function openPersonalEditor(item){
  const oldEditor=document.getElementById("personalEditorOverlay");
  if(oldEditor) oldEditor.remove();

  const blocks=cloneLessonData(item.blocks||[]);
  const categories=["説明",...KINDS];

  const overlay=document.createElement("div");
  overlay.id="personalEditorOverlay";
  overlay.className="personal-editor-overlay";

  const panel=document.createElement("div");
  panel.className="personal-editor-panel";

  const heading=document.createElement("h2");
  heading.textContent="✏️ 個人編集";

  const description=document.createElement("p");
  description.textContent=
    "編集した文章は、この端末だけに保存されます。";

  const blockLabel=document.createElement("label");
  blockLabel.textContent="編集する説明";

  const blockSelect=document.createElement("select");
  blocks.forEach((block,index)=>{
    const option=document.createElement("option");
    option.value=String(index);
    option.textContent=`${index+1}. ${block.title||"説明"}`;
    blockSelect.appendChild(option);
  });

  const categoryLabel=document.createElement("label");
  categoryLabel.textContent="編集する種類";

  const categorySelect=document.createElement("select");
  categories.forEach(category=>{
    const option=document.createElement("option");
    option.value=category;
    option.textContent=category;
    categorySelect.appendChild(option);
  });

  const fields=document.createElement("div");
  fields.className="personal-editor-fields";

  const languageCodes=["ja",...Object.keys(LANGS)];
  const languageNames={
    ja:"日本語",
    ...LANGS
  };

  function addTextField(code,value){
    const label=document.createElement("label");
    label.className="personal-editor-field";

    const name=document.createElement("span");
    name.textContent=languageNames[code];

    const textarea=document.createElement("textarea");
    textarea.dataset.lang=code;
    textarea.value=value||"";
    textarea.rows=4;
    textarea.placeholder=`${languageNames[code]}の文章を入力`;

    label.append(name,textarea);
    fields.appendChild(label);
  }

  function renderFields(){
    fields.replaceChildren();

    const block=blocks[Number(blockSelect.value)];
    if(!block) return;

    const category=categorySelect.value;
    let index=(block.ja||[]).findIndex(
      entry=>entry && entry.label===category
    );

    if(index<0) index=categories.indexOf(category);

    languageCodes.forEach(code=>{
      const entry=(block[code]||[])[index];
      addTextField(code,entry?.text||"");
    });
  }

  blockLabel.appendChild(blockSelect);
  categoryLabel.appendChild(categorySelect);

  blockSelect.onchange=renderFields;
  categorySelect.onchange=renderFields;

  const saveButton=document.createElement("button");
  saveButton.type="button";
  saveButton.className="personal-editor-save";
  saveButton.textContent="保存する";

  const cancelButton=document.createElement("button");
  cancelButton.type="button";
  cancelButton.className="personal-editor-cancel";
  cancelButton.textContent="キャンセル";

  function closeEditor(){
    overlay.remove();
  }

  cancelButton.onclick=closeEditor;
  overlay.onclick=event=>{
    if(event.target===overlay) closeEditor();
  };

  saveButton.onclick=()=>{
    const block=blocks[Number(blockSelect.value)];
    const category=categorySelect.value;

    let index=(block.ja||[]).findIndex(
      entry=>entry && entry.label===category
    );

    if(index<0) index=categories.indexOf(category);

    languageCodes.forEach(code=>{
      if(!Array.isArray(block[code])){
        block[code]=[];
      }

      while(block[code].length<=index){
        block[code].push({
          label:code==="ja"
            ? categories[block[code].length]||category
            : languageNames[code],
          text:""
        });
      }

      const textarea=fields.querySelector(
        `textarea[data-lang="${code}"]`
      );

      block[code][index]={
        ...(block[code][index]||{}),
        label:code==="ja"?category:languageNames[code],
        text:textarea?.value||""
      };
    });

    const edits=loadPersonalEdits();
    edits[item.key]={blocks};

    if(savePersonalEdits(edits)){
      closeEditor();
      render();
      alert("個人編集を保存しました。");
    }
  };

  const actions=document.createElement("div");
  actions.className="personal-editor-actions";
  actions.append(saveButton,cancelButton);

  panel.append(
    heading,
    description,
    blockLabel,
    categoryLabel,
    fields,
    actions
  );

  overlay.appendChild(panel);
  document.body.appendChild(overlay);

  renderFields();
}

  const item=currentItem();
  if(!item){
    headerCard.innerHTML="";
    return;
  }

  headerCard.innerHTML=`
    <span class="badge">第${item.stage}段階 ${displayNo(item)}項目</span>
    <div class="title">${item.title}</div>
    <div class="count">${(item.blocks||[]).length} 説明</div>
    <div class="toggle-grid">
      ${KINDS.map(kind=>`<button class="${visibleKinds.has(kind)?"active":""}" data-kind="${kind}">${kind}</button>`).join("")}
      ${PDF_KEYS.has(item.key) ? '<button class="pdf-open-button" data-pdf-open="1">📖 教本PDF</button>' : ''}
    </div>
  `;

  const pdfButton=headerCard.querySelector("[data-pdf-open]");
  if(pdfButton){
    pdfButton.onclick=()=>{
      stopSpeech();
      if(typeof window.openTextbookPdf==="function") window.openTextbookPdf({key:item.key,title:`第${item.stage}段階${displayNo(item)}項目　${item.title}`});
    };
  }

    // 個人編集ボタン
  const editButton=document.createElement("button");
  editButton.type="button";
  editButton.textContent="✏️ 個人編集";
  editButton.className="personal-edit-button";

  headerCard.querySelector(".toggle-grid")
    ?.appendChild(editButton);

  editButton.onclick=()=>{
    stopSpeech();
    openPersonalEditor(item);
  };

  headerCard.querySelectorAll("[data-kind]").forEach(button=>{
    button.onclick=()=>{
      stopSpeech();
      const kind=button.dataset.kind;
      visibleKinds.has(kind)?visibleKinds.delete(kind):visibleKinds.add(kind);
      renderHeader();
      renderList();
    };
  });
}

function renderList(){
  stopSpeech();
  const lang=langSelect.value;
  const item=currentItem();
  list.innerHTML="";
  if(!item) return;

  (item.blocks||[]).forEach((block,index)=>{
    const article=document.createElement("article");
    article.className="section";
    article.dataset.explanationIndex=String(index);

    const pairs=(block.ja||[])
      .map((jp,i)=>({jp,tr:(block[lang]||[])[i]}))
      .filter(({jp})=>jp && visibleKinds.has(jp.label))
      .map(({jp,tr})=>`
        <div class="translation-pair" data-kind="${jp.label}">
          <div class="jp-block">
            <div class="jp-label">${jp.label}</div>
            <p class="jp-text">${jp.text}</p>
          </div>
          ${tr ? `
          <div class="foreign-block"
               role="button"
               tabindex="0"
               data-speech-text="${encodeURIComponent(tr.text||"")}">
            <div class="foreign-label">${tr.label||LANGS[lang]||"外国語"}</div>
            <p class="foreign-text">${tr.text}</p>
            <div class="tap-speech-hint">🔊 タップで再生</div>
          </div>` : ""}
        </div>
      `).join("");

    article.innerHTML=`
      <button class="accordion" type="button" aria-expanded="false">
        <span>${index+1}. ${block.title}</span><span class="mark">▶</span>
      </button>
      <div class="paired-content">${pairs}</div>
    `;

    const accordion=article.querySelector(".accordion");
    const mark=article.querySelector(".mark");

    accordion.onclick=()=>{
      stopSpeech();
      const isOpen=article.classList.toggle("show-foreign");
      accordion.setAttribute("aria-expanded",String(isOpen));
      mark.textContent=isOpen?"▼":"▶";
    };

    article.querySelectorAll(".foreign-block").forEach(blockEl=>{
      const play=()=>toggleSpeech(
        decodeURIComponent(blockEl.dataset.speechText||""),
        lang,
        blockEl
      );
      blockEl.addEventListener("click",play);
      blockEl.addEventListener("keydown",event=>{
        if(event.key==="Enter"||event.key===" "){
          event.preventDefault();
          play();
        }
      });
    });

    list.appendChild(article);
  });
}

function updateNavButtons(){
  const items=stageItems();
  const index=items.findIndex(x=>x.key===currentKey);
  prevBtn.disabled=index<=0;
  nextBtn.disabled=index<0||index>=items.length-1;
  prevBtn.style.opacity=prevBtn.disabled?".45":"1";
  nextBtn.style.opacity=nextBtn.disabled?".45":"1";
}

function render(){
  fillSelect();
  renderHeader();
  renderList();
  updateNavButtons();
  document.querySelectorAll(".stage").forEach(button=>{
    button.classList.toggle("active",Number(button.dataset.stage)===currentStage);
  });
  saveLessonState();
}

addSpeechStyles();

document.querySelectorAll(".stage").forEach(button=>{
  button.onclick=()=>{
    stopSpeech();
    const pdfWasOpen=document.body.classList.contains("pdf-split-open");
    currentStage=Number(button.dataset.stage);
    currentKey=stageItems()[0]?.key||"";
    visibleKinds=new Set(["説明"]);
    render();
    langSelect.dispatchEvent(new Event("change"));
    if(pdfWasOpen) syncOpenPdfToCurrentItem();
    window.scrollTo({top:0,behavior:"smooth"});
  };
});

itemSelect.onchange=()=>{
  stopSpeech();
  currentKey=itemSelect.value;
  visibleKinds=new Set(["説明"]);
  render();
  window.scrollTo({top:0,behavior:"smooth"});
};

langSelect.onchange=()=>{
  stopSpeech();
  renderList();
  saveLessonState();
};

function syncOpenPdfToCurrentItem(){
  if(!document.body.classList.contains("pdf-split-open")) return;
  const item=currentItem();
  if(!item || !PDF_KEYS.has(item.key)) return;
  if(typeof window.openTextbookPdf==="function"){
    window.openTextbookPdf({
      key:item.key,
      title:`第${item.stage}段階${displayNo(item)}項目　${item.title}`
    });
  }
}

prevBtn.onclick=()=>{
  stopSpeech();
  const items=stageItems();
  const index=items.findIndex(x=>x.key===currentKey);
  if(index>0){
    currentKey=items[index-1].key;
    render();
    syncOpenPdfToCurrentItem();
    window.scrollTo({top:0,behavior:"smooth"});
  }
};

nextBtn.onclick=()=>{
  stopSpeech();
  const items=stageItems();
  const index=items.findIndex(x=>x.key===currentKey);
  if(index>=0 && index<items.length-1){
    currentKey=items[index+1].key;
    render();
    syncOpenPdfToCurrentItem();
    window.scrollTo({top:0,behavior:"smooth"});
  }
};


// PDF全体のスクロール量に合わせて、左側の説明も連続的に追従させる。
// ページが変わる瞬間に説明が大きく飛ばないよう、ページ番号ではなく0〜100%の位置を使う。
let pdfFollowAnimationFrame=0;
window.syncExplanationToPdfProgress=function(progress){
  const sections=[...list.querySelectorAll(".section")];
  const lessonPane=document.querySelector(".lesson-pane");
  if(!sections.length||!lessonPane||!document.body.classList.contains("pdf-split-open")) return;

  const safeProgress=Math.min(1,Math.max(0,Number(progress)||0));
  const maxLessonScroll=Math.max(0,lessonPane.scrollHeight-lessonPane.clientHeight);
  const desiredTop=maxLessonScroll*safeProgress;

  // 一度に大きく飛ばず、PDFの指の動きに合わせて少しずつ追従する。
  cancelAnimationFrame(pdfFollowAnimationFrame);
  pdfFollowAnimationFrame=requestAnimationFrame(()=>{
    const difference=desiredTop-lessonPane.scrollTop;
    const maxStep=Math.max(40,lessonPane.clientHeight*0.32);
    const step=Math.max(-maxStep,Math.min(maxStep,difference));
    lessonPane.scrollTop=Math.max(0,Math.min(maxLessonScroll,lessonPane.scrollTop+step));

    // 現在の表示中央に最も近い説明を強調する。
    const paneCenter=lessonPane.getBoundingClientRect().top+lessonPane.clientHeight/2;
    let activeIndex=0;
    let nearest=Infinity;
    sections.forEach((section,index)=>{
      const rect=section.getBoundingClientRect();
      const distance=Math.abs((rect.top+rect.height/2)-paneCenter);
      if(distance<nearest){ nearest=distance; activeIndex=index; }
    });
    sections.forEach((section,index)=>section.classList.toggle("pdf-follow-active",index===activeIndex));
  });
};

// 旧版との互換用。ページ単位の呼び出しが残っていても連続位置へ変換する。
window.syncExplanationToPdfPage=function(pageNumber,totalPages){
  const total=Math.max(1,Number(totalPages)||1);
  const page=Math.min(total,Math.max(1,Number(pageNumber)||1));
  window.syncExplanationToPdfProgress(total<=1?0:(page-1)/(total-1));
};

window.clearPdfExplanationFollow=function(){
  cancelAnimationFrame(pdfFollowAnimationFrame);
  list.querySelectorAll(".pdf-follow-active").forEach(section=>section.classList.remove("pdf-follow-active"));
};

window.addEventListener("pagehide",stopSpeech);

restoreLessonState();

if (!currentKey) {
  currentKey = stageItems()[0]?.key || "";
}

render();

// PWA / オフライン利用
if ("serviceWorker" in navigator) {
  window.addEventListener("load", async () => {
    try {
      const registration = await navigator.serviceWorker.register("./service-worker.js", { updateViaCache: "none" });
      registration.update().catch(() => {});
    } catch (error) {
      console.error("Service Worker registration failed:", error);
    }
  });
}

// 個人編集画面のデザイン
(function addPersonalEditorStyles(){
  if(document.getElementById("personal-editor-style")) return;

  const style=document.createElement("style");
  style.id="personal-editor-style";

  style.textContent=`
    .personal-editor-overlay{
      position:fixed;
      inset:0;
      z-index:10000;
      background:rgba(0,0,0,.55);
      display:flex;
      align-items:center;
      justify-content:center;
      padding:12px;
    }

    .personal-editor-panel{
      width:100%;
      max-width:680px;
      max-height:90vh;
      overflow-y:auto;
      background:#fff;
      border-radius:18px;
      padding:20px;
      box-shadow:0 10px 35px rgba(0,0,0,.25);
    }

    .personal-editor-panel h2{
      margin:0 0 8px;
      color:#14532d;
      font-size:21px;
    }

    .personal-editor-panel p{
      color:#666;
      font-size:13px;
      line-height:1.6;
    }

    .personal-editor-panel label{
      display:block;
      margin-top:14px;
      font-weight:800;
      color:#245438;
    }

    .personal-editor-panel select,
    .personal-editor-panel textarea{
      display:block;
      width:100%;
      box-sizing:border-box;
      margin-top:7px;
      padding:11px;
      border:1px solid #cbded0;
      border-radius:10px;
      font:inherit;
      background:#fff;
    }

    .personal-editor-panel textarea{
      min-height:85px;
      line-height:1.6;
      resize:vertical;
    }

    .personal-editor-field{
      padding:10px;
      background:#f5faf7;
      border-radius:12px;
    }

    .personal-editor-field span{
      font-weight:900;
    }

    .personal-editor-actions{
      display:flex;
      gap:10px;
      margin-top:20px;
    }

    .personal-editor-actions button{
      flex:1;
      min-height:46px;
      border:0;
      border-radius:12px;
      font-size:15px;
      font-weight:900;
      cursor:pointer;
    }

    .personal-editor-save{
      background:#2f965c;
      color:#fff;
    }

    .personal-editor-cancel{
      background:#e9eeeb;
      color:#333;
    }

    .personal-edit-button{
      background:#dff2e6;
      color:#14532d;
      border:1px solid #b9dfc5;
      border-radius:12px;
      padding:9px 12px;
      font-size:14px;
      font-weight:900;
      cursor:pointer;
    }
  `;

  document.head.appendChild(style);
})();