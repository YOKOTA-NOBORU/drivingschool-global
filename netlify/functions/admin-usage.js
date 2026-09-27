const admin=require("firebase-admin");
const headers={"Access-Control-Allow-Origin":"*","Access-Control-Allow-Headers":"Content-Type","Access-Control-Allow-Methods":"POST, OPTIONS","Content-Type":"application/json"};
const ret=(statusCode,body)=>({statusCode,headers,body:JSON.stringify(body)});
const nowMonth=()=>new Intl.DateTimeFormat("en-CA",{timeZone:"Asia/Tokyo",year:"numeric",month:"2-digit"}).format(new Date()).slice(0,7);
exports.handler=async event=>{
 if(event.httpMethod==="OPTIONS")return{statusCode:204,headers,body:""};
 if(event.httpMethod!=="POST")return ret(405,{error:"POST only"});
 try{
  const input=JSON.parse(event.body||"{}"), expected=process.env.ADMIN_PASSWORD||"";
  if(!expected)return ret(500,{error:"ADMIN_PASSWORD がNetlifyに設定されていません。"});
  if(String(input.password||"")!==expected)return ret(401,{error:"管理者パスワードが違います。"});
  const projectId=process.env.FIREBASE_PROJECT_ID,clientEmail=process.env.FIREBASE_CLIENT_EMAIL,privateKey=(process.env.FIREBASE_PRIVATE_KEY||"").replace(/\\n/g,"\n");
  if(!projectId||!clientEmail||!privateKey)return ret(500,{error:"Firebase環境変数が設定されていません。"});
  if(!admin.apps.length)admin.initializeApp({credential:admin.credential.cert({projectId,clientEmail,privateKey})});
  const db=admin.firestore(),current=nowMonth(),col=db.collection("translation_usage_devices"),action=String(input.action||"list");
  if(action==="list"){
   const qs=await col.get(),devices=[];
   qs.forEach(s=>{const d=s.data()||{},same=String(d.month||"")===current,used=same?Number(d.used||0):0,limit=Number(d.limit||50000),extra=same?Number(d.extra||0):0;devices.push({deviceId:s.id,month:current,used,limit,extra,totalLimit:limit+extra,remaining:Math.max(0,limit+extra-used)})});
   devices.sort((a,b)=>b.used-a.used); return ret(200,{month:current,devices});
  }
  const deviceId=String(input.deviceId||"").trim();
  if(!/^[A-Za-z0-9_-]{12,100}$/.test(deviceId))return ret(400,{error:"端末IDが正しくありません。"});
  const ref=col.doc(deviceId);
  const result=await db.runTransaction(async tx=>{
   const snap=await tx.get(ref),d=snap.exists?snap.data():{}; let used=Number(d.used||0),limit=Number(d.limit||50000),extra=Number(d.extra||0),month=String(d.month||"");
   if(month!==current){used=0;extra=0;month=current}
   if(action==="addExtra"){const v=Math.floor(Number(input.amount));if(!Number.isFinite(v)||v<=0)throw Error("追加文字数が正しくありません。");extra+=v}
   else if(action==="setExtra"){const v=Math.floor(Number(input.value));if(!Number.isFinite(v)||v<0)throw Error("追加枠が正しくありません。");extra=v}
   else if(action==="setLimit"){const v=Math.floor(Number(input.value));if(!Number.isFinite(v)||v<1)throw Error("基本上限が正しくありません。");limit=v}
   else if(action!=="get")throw Error("不明な操作です。");
   tx.set(ref,{used,limit,extra,month},{merge:true}); const totalLimit=limit+extra;
   return{deviceId,month,used,limit,extra,totalLimit,remaining:Math.max(0,totalLimit-used)};
  }); return ret(200,result);
 }catch(e){console.error("[admin-usage]",e);return ret(500,{error:e.message||"管理画面の処理に失敗しました。"});}
};