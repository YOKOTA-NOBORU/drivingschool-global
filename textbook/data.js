const textbookData = [
  {
  id: 1,
  stage: 1,
  title: "車の乗り降りと運転姿勢",
  description: "安全を意識した乗り降りと、正しい運転姿勢を身につける。",
  phraseCount: 11,

  sections: [
    {
      key: "point",
      label: "項目の目標",
      japanese: "安全を意識した乗り降りと、正しい運転姿勢を身につける。",
translations: {
        vi: "Hãy kiểm tra an toàn xung quanh, thao tác chậm rãi và làm theo hướng dẫn của giáo viên.",
        en: "Check safety around the vehicle, operate slowly, and follow the instructor's guidance.",
        zh: "确认车辆周围安全，慢慢操作，并按照教练的指导进行。",
        pt: "Verifique a segurança ao redor do veículo, opere devagar e siga as instruções do instrutor.",
        id: "Pelajari cara masuk dan keluar mobil dengan mempertimbangkan keselamatan dan postur mengemudi yang benar.",
        ne: "सुरक्षालाई ध्यानमा राखेर र सही ड्राइभिङ मुद्रामा कार भित्र र बाहिर जाने तरिका जान्नुहोस्।",
        my: "ဘေးကင်းစေရန်နှင့် မှန်ကန်သော မောင်းနှင်မှုပုံစံဖြင့် ကားအဝင်အထွက်ကို မည်သို့လေ့လာပါ။"
      }
    },
    {
      key: "exam",
      label: "車のまわりの安全確認",
      japanese: "車の前後、左右、タイヤの周り、車の下を確認します。",
translations: {
        vi: "Kiểm tra phía trước, phía sau, hai bên, quanh lốp xe và bên dưới xe.",
        en: "Check the front, rear, both sides, around the tires, and under the vehicle.",
        zh: "确认车辆前后、左右、轮胎周围以及车底。",
        pt: "Verifique a frente, a traseira, os lados, ao redor dos pneus e embaixo do veículo.",
        id: "Periksa bagian depan, belakang, samping, sekeliling ban, dan kolong mobil.",
        ne: "अगाडि, पछाडि, छेउ, टायर वरपर, र कार मुनि जाँच गर्नुहोस्।",
        my: "ရှေ့၊ နောက်၊ ဘေး၊ တာယာပတ်လည်၊ ကားအောက်ပိုင်းကို စစ်ဆေးပါ။"
      }
    },
    {
      key: "mistake",
      label: "ドアの開け方",
      japanese: "後方の安全を確認してから、ドアを少し開けます。",
translations: {
        vi: "Kiểm tra an toàn phía sau rồi mở cửa một chút.",
        en: "Check safety behind you, then open the door slightly.",
        zh: "确认后方安全后，稍微打开车门。",
        pt: "Verifique a segurança atrás e abra a porta um pouco.",
        id: "Periksa apakah aman di belakang Anda, lalu buka pintunya sedikit.",
        ne: "यो तपाईंको पछाडि सुरक्षित छ भनेर जाँच गर्नुहोस्, त्यसपछि ढोका थोरै खोल्नुहोस्।",
        my: "သင့်နောက်တွင် ဘေးကင်းကြောင်း စစ်ဆေးပြီးနောက် တံခါးကို အနည်းငယ်ဖွင့်ပါ။"
      }
    },
    {
      key: "remember",
      label: "乗車のしかた",
      japanese: "後方を確認し、すばやく乗車してドアを確実に閉めます。",
translations: {
        vi: "Kiểm tra phía sau, nhanh chóng lên xe và đóng cửa chắc chắn.",
        en: "Check behind, get in promptly, and close the door securely.",
        zh: "确认后方后迅速上车，并确实关好车门。",
        pt: "Verifique atrás, entre rapidamente e feche bem a porta.",
        id: "Lihat ke belakang Anda, cepat masuk ke dalam mobil, dan pastikan untuk menutup pintu.",
        ne: "आफ्नो पछाडि हेर्नुहोस्, छिटो कारमा चढ्नुहोस्, र ढोका बन्द गर्न निश्चित गर्नुहोस्।",
        my: "မင်းနောက်ကိုကြည့်လိုက်၊ ကားပေါ်မြန်မြန်တက်ပြီး တံခါးကို သေချာပိတ်လိုက်။"
      }
    },
    {
      key: "instruction",
      label: "シートの調整",
      japanese: "ブレーキペダルをいっぱいに踏んだとき、ひざが少し曲がる位置に調整します。",
translations: {
        vi: "Điều chỉnh ghế sao cho khi đạp hết phanh, đầu gối hơi cong.",
        en: "Adjust the seat so your knee is slightly bent when the brake pedal is fully pressed.",
        zh: "调整座椅，使踩到底刹车踏板时膝盖稍微弯曲。",
        pt: "Ajuste o banco para que o joelho fique levemente dobrado ao pisar totalmente no freio.",
        id: "Atur posisinya agar lutut sedikit tertekuk saat pedal rem ditekan penuh.",
        ne: "स्थिति समायोजन गर्नुहोस् ताकि तपाईले ब्रेक पेडललाई पूर्ण रूपमा थिच्दा तपाईको घुँडा अलिकति झुकेको छ।",
        my: "ဘရိတ်နင်းခြင်းကို အပြည့်အ၀ဖိသောအခါ ဒူးအနည်းငယ်ကွေးစေရန် အနေအထားကို ချိန်ညှိပါ။"
      }
    },
    {
      key: "point",
      label: "背もたれの調整",
      japanese: "ハンドルを持ったとき、ひじが少し曲がるように背もたれを調整します。",
translations: {
        vi: "Điều chỉnh lưng ghế để khuỷu tay hơi cong khi cầm vô lăng.",
        en: "Adjust the backrest so your elbows are slightly bent when holding the steering wheel.",
        zh: "调整靠背，使握方向盘时手肘稍微弯曲。",
        pt: "Ajuste o encosto para que os cotovelos fiquem levemente dobrados ao segurar o volante.",
        id: "Sesuaikan sandaran sehingga siku sedikit tertekuk saat memegang pegangan.",
        ne: "ब्याकरेस्ट समायोजन गर्नुहोस् ताकि तपाइँ ह्यान्डलहरू समात्दा तपाइँको कुहिनाहरू थोरै झुकेका छन्।",
        my: "လက်ကိုင်များကို ကိုင်ထားသည့်အခါ သင့်တံတောင်ဆစ်များကို အနည်းငယ်ကွေးသွားစေရန် နောက်မှီကို ချိန်ညှိပါ။"
      }
    },
    {
      key: "exam",
      label: "ミラーの調整",
      japanese: "ルームミラーとドアミラーを、正しい姿勢のまま見える位置に調整します。",
translations: {
        vi: "Điều chỉnh gương trong và gương ngoài để nhìn rõ khi ngồi đúng tư thế.",
        en: "Adjust the rearview mirror and side mirrors so you can see clearly in the correct posture.",
        zh: "保持正确姿势，调整车内后视镜和车门后视镜到能看清的位置。",
        pt: "Ajuste o retrovisor interno e os laterais para enxergar bem mantendo a postura correta.",
        id: "Sesuaikan kaca spion dan kaca spion agar terlihat dengan tetap menjaga postur tubuh yang benar.",
        ne: "रियरभ्यू मिरर र डोर मिररहरू समायोजन गर्नुहोस् ताकि तिनीहरू सही मुद्रा कायम गर्दा देख्न सकोस्।",
        my: "မှန်ကန်သော ကိုယ်ဟန်အနေအထားကို ထိန်းသိမ်းထားစဉ်တွင် နောက်ကြည့်မှန်နှင့် တံခါးမှန်များကို ချိန်ညှိပါ။"
      }
    },
    {
      key: "mistake",
      label: "シートベルト",
      japanese: "シートベルトをねじれのないように締め、腰ベルトを低い位置にします。",
translations: {
        vi: "Thắt dây an toàn không bị xoắn và đặt phần dây ngang hông ở vị trí thấp.",
        en: "Fasten the seat belt without twists and keep the lap belt low.",
        zh: "系好安全带，不要扭曲，并将腰带放在较低位置。",
        pt: "Coloque o cinto sem torcer e mantenha a parte da cintura em posição baixa.",
        id: "Kencangkan sabuk pengaman Anda agar tidak terpuntir, dan turunkan sabuk pangkuan Anda.",
        ne: "आफ्नो सिट बेल्ट बाँध्नुहोस् ताकि यो घुमाउन नपरोस्, र आफ्नो ल्याप बेल्ट कम गर्नुहोस्।",
        my: "ထိုင်ခုံခါးပတ်ကို မလိမ်စေရန်နှင့် သင့်ခါးပတ်ကို လျှော့ချပါ။"
      }
    },
    {
      key: "remember",
      label: "正しい運転姿勢",
      japanese: "背中を背もたれにつけ、両手でハンドルを持ち、前方を広く見ます。",
translations: {
        vi: "Tựa lưng vào ghế, cầm vô lăng bằng hai tay và quan sát rộng phía trước.",
        en: "Keep your back against the seat, hold the steering wheel with both hands, and look widely ahead.",
        zh: "背部贴住靠背，双手握方向盘，广泛观察前方。",
        pt: "Apoie as costas no encosto, segure o volante com as duas mãos e observe bem à frente.",
        id: "Sandarkan punggung pada sandaran, pegang setang dengan kedua tangan, dan pandangan lebar ke depan.",
        ne: "आफ्नो पछाडि ब्याकरेस्टको बिरूद्ध राख्नुहोस्, ह्यान्डलबारहरूलाई दुबै हातले समात्नुहोस्, र फराकिलो अगाडि हेर्नुहोस्।",
        my: "သင့်ကျောကို ကျောမှီနှင့် ချထားပါ၊ လက်ကိုင်ဘားများကို လက်နှစ်ဖက်ဖြင့် ကိုင်ထားပြီး ရှေ့ကို ကျယ်ကျယ်ကြည့်ပါ။"
      }
    },
    {
      key: "instruction",
      label: "降車のしかた",
      japanese: "降りる前に後方の安全を確認し、ドアを少し開けてから降ります。",
translations: {
        vi: "Trước khi xuống xe, kiểm tra an toàn phía sau, mở cửa một chút rồi xuống.",
        en: "Before getting out, check behind, open the door slightly, then exit.",
        zh: "下车前确认后方安全，稍微打开车门后再下车。",
        pt: "Antes de sair, verifique atrás, abra um pouco a porta e então saia.",
        id: "Sebelum turun, periksa keamanan di belakang Anda dan buka sedikit pintu sebelum turun.",
        ne: "ओर्लनु अघि, आफ्नो पछाडिको सुरक्षा जाँच गर्नुहोस् र ओर्लनु अघि ढोका थोरै खोल्नुहोस्।",
        my: "မဆင်းမီ သင့်နောက်ကွယ်ရှိ လုံခြုံရေးကို စစ်ဆေးပြီး မဆင်းမီ တံခါးကို အနည်းငယ်ဖွင့်ပါ။"
      }
    },
    {
      key: "point",
      label: "教習で使う一言",
      japanese: "まず車のまわりを確認してから、正しい姿勢に調整しましょう。",
translations: {
        vi: "Trước tiên hãy kiểm tra xung quanh xe, sau đó điều chỉnh tư thế lái đúng.",
        en: "First check around the car, then adjust to the correct driving posture.",
        zh: "首先确认车辆周围，然后调整到正确的驾驶姿势。",
        pt: "Primeiro verifique ao redor do carro e depois ajuste para a postura correta de direção.",
        id: "Periksa dulu sekeliling mobil, lalu atur postur tubuh Anda ke posisi yang benar.",
        ne: "पहिले, कारको वरिपरि जाँच गर्नुहोस्, त्यसपछि सही स्थितिमा आफ्नो मुद्रा समायोजन गर्नुहोस्।",
        my: "ဦးစွာ၊ ကားပတ်ပတ်လည်ကို စစ်ဆေးပြီးနောက် သင်၏ ကိုယ်ဟန်အနေအထားကို မှန်ကန်သော အနေအထားသို့ ချိန်ညှိပါ။"
      }
    }
  ]
},
  {
  id: 2,
  stage: 1,
  phraseCount: 28,
  title: "自動車の機構と運転装置の取扱い",
  description: "運転装置の機能や自動車の走行の原理を理解し、各装置を正しく扱えるようにします。",
  sections: [
    {
      key: "tip",
      label: "教官ワンポイント",
      japanese: "車は「走る・曲がる・止まる」の3つの基本で動いています。",
translations: {
        vi: "Xe hoạt động dựa trên ba điều cơ bản: chạy, rẽ và dừng.",
        en: "A car operates with three basics: moving, turning, and stopping.",
        zh: "汽车的基本动作是行驶、转弯和停车。",
        pt: "O carro funciona com três ações básicas: andar, virar e parar.",
        id: "Mobil beroperasi berdasarkan tiga prinsip dasar: berjalan, berbelok, dan berhenti.",
        ne: "कारहरू तीन आधारभूत सिद्धान्तहरूमा आधारित हुन्छन्: दौडने, घुमाउने र रोक्न।",
        my: "ကားများသည် ပြေးခြင်း၊ ကွေ့ခြင်းနှင့် ရပ်ခြင်း စသည့် အခြေခံမူ သုံးခုအပေါ် အခြေခံ၍ လုပ်ဆောင်သည်။"
      }
    },
    {
      key: "exam",
      label: "検定ポイント",
      japanese: "アクセル・ブレーキ・ハンドルを急に操作せず、なめらかに扱います。",
translations: {
        vi: "Không thao tác ga, phanh và vô lăng đột ngột; hãy điều khiển nhẹ nhàng.",
        en: "Do not operate the accelerator, brake, or steering suddenly. Use them smoothly.",
        zh: "不要突然操作油门、刹车和方向盘，要平稳操作。",
        pt: "Não use acelerador, freio ou volante de forma brusca. Opere suavemente.",
        id: "Jangan mengoperasikan pedal gas, rem, atau pegangan secara tiba-tiba, dan gunakan dengan lancar.",
        ne: "एक्‍सेलेटर, ब्रेक वा ह्यान्डललाई एक्कासी नचलाउनुहोस् र सहज रूपमा प्रयोग गर्नुहोस्।",
        my: "အရှိန်မြှင့်၊ ဘရိတ် သို့မဟုတ် ရုတ်တရက် ကိုင်တွယ်ခြင်းမပြုပါနှင့် ၎င်းတို့ကို ချောမွေ့စွာ အသုံးပြုပါ။"
      }
    },
    {
      key: "failure",
      label: "よくある失敗",
      japanese: "ブレーキやアクセルを強く踏みすぎると、車が不安定になります。",
translations: {
        vi: "Đạp ga hoặc phanh quá mạnh làm xe không ổn định.",
        en: "Pressing the brake or accelerator too hard makes the car unstable.",
        zh: "油门或刹车踩得太重会使车辆不稳定。",
        pt: "Pisar forte demais no freio ou acelerador deixa o carro instável.",
        id: "Jika Anda menekan rem atau akselerator terlalu keras, mobil Anda akan menjadi tidak stabil.",
        ne: "यदि तपाईंले ब्रेक वा एक्सेलेटरलाई धेरै जोरले थिच्नुभयो भने, तपाईंको कार अस्थिर हुनेछ।",
        my: "ဘရိတ် သို့မဟုတ် အရှိန်မြှင့်စက်ကို ပြင်းထန်စွာ နှိပ်ပါက သင့်ကားသည် မတည်မငြိမ်ဖြစ်သွားလိမ့်မည်။"
      }
    },
    {
      key: "memory",
      label: "覚えておきたいこと",
      japanese: "車はエンジンの力で走り、ハンドルで向きを変え、ブレーキで止まります。",
translations: {
        vi: "Xe chạy bằng lực của động cơ, đổi hướng bằng vô lăng và dừng bằng phanh.",
        en: "The car moves by engine power, changes direction with the steering wheel, and stops with the brake.",
        zh: "汽车靠发动机动力行驶，用方向盘改变方向，用刹车停车。",
        pt: "O carro anda pela força do motor, muda de direção pelo volante e para pelo freio.",
        id: "Sebuah mobil berjalan dengan tenaga mesin, berputar dengan kemudi, dan berhenti dengan rem.",
        ne: "एउटा कार इन्जिनको शक्तिले चल्छ, स्टेयरिङ ह्वीलले घुम्छ र ब्रेकले रोकिन्छ।",
        my: "ကားသည် အင်ဂျင်ပါဝါဖြင့် လည်ပတ်ကာ စတီယာရင်ဘီးဖြင့် လှည့်ကာ ဘရိတ်ဖြင့် ရပ်သွားပါသည်။"
      }
    },
    {
      key: "phrase",
      label: "教習で使う一言",
      japanese: "「アクセルとブレーキをやさしく操作します。」",
translations: {
        vi: "Tôi sẽ thao tác ga và phanh nhẹ nhàng.",
        en: "I will operate the accelerator and brake gently.",
        zh: "我会轻柔地操作油门和刹车。",
        pt: "Vou usar o acelerador e o freio suavemente.",
        id: "\"Operasikan pedal gas dan rem perlahan.\"",
        ne: "\"एक्सेलेटर र ब्रेकलाई बिस्तारै चलाउनुहोस्।\"",
        my: "\"အရှိန်မြှင့်ပြီး ဘရိတ်ကို ညင်သာစွာ မောင်းနှင်ပါ။\""
      }
    }
  ]
},
  {
    id: 3,
    stage: 1,
    title: "発進と停止",
    phraseCount: 18,
    description: "正しい操作手順で発進と停止ができるようにします。",
    sections: [
          {
      key: "tip",
      label: "教官ワンポイント",
      japanese: "発進前は、ミラー・周囲・合図・安全確認を落ち着いて行いましょう。",
translations: {
        vi: "Trước khi khởi hành, hãy bình tĩnh kiểm tra gương, xung quanh, xi nhan và an toàn.",
        en: "Before starting, calmly check the mirrors, surroundings, signal, and safety.",
        zh: "起步前，请冷静确认后视镜、周围、转向灯和安全。",
        pt: "Antes de sair, verifique com calma os espelhos, o entorno, a seta e a segurança.",
        id: "Sebelum memulai, dengan tenang periksa kaca spion, lingkungan sekitar, sinyal, dan keselamatan Anda.",
        ne: "सुरु गर्नु अघि, शान्त रूपमा आफ्नो ऐना, वरपर, संकेतहरू, र सुरक्षा जाँच गर्नुहोस्।",
        my: "မစတင်မီ သင်၏မှန်များ၊ ပတ်ဝန်းကျင်၊ အချက်ပြများနှင့် ဘေးကင်းမှုကို တည်ငြိမ်စွာ စစ်ဆေးပါ။"
      }
    },
    {
      key: "exam",
      label: "検定ポイント",
      japanese: "発進と停止は、急な操作をせず、なめらかに行うことが大切です。",
translations: {
        vi: "Khi khởi hành và dừng xe, điều quan trọng là thao tác nhẹ nhàng, không đột ngột.",
        en: "When starting and stopping, it is important to operate smoothly without sudden movement.",
        zh: "起步和停车时，重要的是不要突然操作，要平稳进行。",
        pt: "Ao sair e parar, é importante operar suavemente, sem movimentos bruscos.",
        id: "Penting untuk menghidupkan dan menghentikan kendaraan dengan lancar dan tanpa gerakan tiba-tiba.",
        ne: "यो सजिलै संग र अचानक चाल बिना गाडी सुरु गर्न र रोक्न महत्त्वपूर्ण छ।",
        my: "ကားကို ချောမွေ့စွာနဲ့ ရုတ်တရတ် မလှုပ်မရှားဘဲ စပြီး ရပ်တန့်ဖို့ အရေးကြီးတယ်။"
      }
    },
    {
      key: "failure",
      label: "よくある失敗",
      japanese: "安全確認を忘れたり、ブレーキやアクセルを急に操作してしまうことがあります。",
translations: {
        vi: "Có khi quên kiểm tra an toàn hoặc thao tác phanh và ga quá đột ngột.",
        en: "A common mistake is forgetting safety checks or operating the brake and accelerator suddenly.",
        zh: "常见错误是忘记安全确认，或突然操作刹车和油门。",
        pt: "Um erro comum é esquecer a verificação de segurança ou usar freio e acelerador de forma brusca.",
        id: "Anda mungkin lupa memeriksa keselamatan atau tiba-tiba menginjak rem atau pedal gas.",
        ne: "तपाइँ सुरक्षा जाँच गर्न बिर्सन सक्नुहुन्छ वा अचानक ब्रेक वा एक्सेलेटर लागू गर्न सक्नुहुन्छ।",
        my: "ဘေးကင်းမှုကို စစ်ဆေးရန် သို့မဟုတ် ဘရိတ် သို့မဟုတ် အရှိန်မြှင့်စက်ကို ရုတ်တရက် အသုံးပြုရန် မေ့သွားနိုင်သည်။"
      }
    },
    {
      key: "memory",
      label: "覚えておきたいこと",
      japanese: "発進は『確認・合図・もう一度確認・ゆっくり発進』、停止は『早めの減速・安全な停止』です。",
translations: {
        vi: "Khởi hành: kiểm tra, xi nhan, kiểm tra lại, rồi đi chậm. Dừng xe: giảm tốc sớm và dừng an toàn.",
        en: "Starting: check, signal, check again, then move slowly. Stopping: slow down early and stop safely.",
        zh: "起步：确认、打灯、再次确认、慢慢起步。停车：提前减速、安全停车。",
        pt: "Saída: verificar, sinalizar, verificar novamente e sair devagar. Parada: reduzir cedo e parar com segurança.",
        id: "Memulai adalah ``konfirmasi, memberi sinyal, mengonfirmasi lagi, dan memulai secara perlahan'', dan berhenti adalah ``perlambatan dini dan berhenti aman''.",
        ne: "सुरु गर्नु भनेको ''पुष्टि गर्नुहोस्, संकेत गर्नुहोस्, पुन: पुष्टि गर्नुहोस्, र बिस्तारै सुरु गर्नुहोस्'', र रोक्नु भनेको ''प्रारम्भिक ढिलाइ र सुरक्षित रोक'' हो।",
        my: "စတင်ခြင်းမှာ ``အတည်ပြုပါ၊ အချက်ပြပါ၊ ထပ်မံအတည်ပြုပါ၊ ဖြည်းဖြည်းချင်းစတင်ပါ´ ဖြစ်၍ ရပ်တန့်ခြင်းမှာ ``စောစီးစွာ အရှိန်လျော့ခြင်းနှင့် ဘေးကင်းစွာ ရပ်တန့်ခြင်း´ ဖြစ်သည်။"
      }
    },
    {
      key: "phrase",
      label: "教習で使う一言",
      japanese: "「安全を確認して、ゆっくり発進します。」",
translations: {
        vi: "Tôi sẽ kiểm tra an toàn và khởi hành chậm rãi.",
        en: "I will check safety and start slowly.",
        zh: "我会确认安全后慢慢起步。",
        pt: "Vou verificar a segurança e sair devagar.",
        id: "“Kami akan memastikan semuanya aman dan lepas landas secara perlahan.”",
        ne: "\"हामी यो सुरक्षित छ भनी सुनिश्चित गर्नेछौं र बिस्तारै उड्नेछौं।\"",
        my: "\"ဘေးကင်းကြောင်း သေချာအောင် ဖြည်းဖြည်းချင်း ဆင်းပါ့မယ်။\""
      }
    }
    ]
  },
  {
   id: 4,
   stage: 1,
phraseCount: 14,
title: "速度の調節",
description: "速度の上げ下げや速度を保つことができるようにします。",
    sections: [
          {
      key: "tip",
      label: "教官ワンポイント",
      japanese: "道路やカーブの状況に合わせて、アクセルとブレーキをやさしく操作しましょう。",
translations: {
        vi: "Hãy điều khiển ga và phanh nhẹ nhàng theo tình trạng đường và khúc cua.",
        en: "Use the accelerator and brake gently according to the road and curve conditions.",
        zh: "请根据道路和弯道情况，轻柔地操作油门和刹车。",
        pt: "Use o acelerador e o freio suavemente conforme as condições da via e da curva.",
        id: "Operasikan pedal gas dan rem secara perlahan sesuai dengan kondisi jalan dan tikungan.",
        ne: "सडक र कर्भ अवस्था अनुसार एक्सेलेटर चलाउनुहोस् र बिस्तारै ब्रेक गर्नुहोस्।",
        my: "လမ်းနှင့် မျဉ်းကွေးအခြေအနေအရ အရှိန်မြှင့်ပြီး ဘရိတ်ကို ညင်သာစွာ မောင်းနှင်ပါ။"
      }
    },
    {
      key: "exam",
      label: "検定ポイント",
      japanese: "加速・減速・速度を保つ操作を、急にせず安定して行います。",
translations: {
        vi: "Tăng tốc, giảm tốc và giữ tốc độ ổn định, không thao tác đột ngột.",
        en: "Accelerate, slow down, and maintain speed smoothly without sudden operation.",
        zh: "加速、减速和保持速度时，不要突然操作，要保持稳定。",
        pt: "Acelere, reduza e mantenha a velocidade de forma estável, sem movimentos bruscos.",
        id: "Operasi akselerasi, deselerasi, dan pemeliharaan kecepatan dilakukan secara stabil tanpa tindakan mendadak.",
        ne: "एक्सेलेरेशन, डिलेरेसन, र गति मर्मत कार्यहरू अचानक कार्य बिना स्थिर रूपमा प्रदर्शन गरिन्छ।",
        my: "အရှိန်မြှင့်ခြင်း၊ အရှိန်လျော့ခြင်းနှင့် အရှိန်ထိန်းခြင်း လုပ်ငန်းများကို ရုတ်တရက် လုပ်ဆောင်ခြင်းမရှိဘဲ တည်ငြိမ်စွာ လုပ်ဆောင်ပါသည်။"
      }
    },
    {
      key: "failure",
      label: "よくある失敗",
      japanese: "アクセルやブレーキを急に踏むと、車が不安定になりやすいです。",
translations: {
        vi: "Nếu đạp ga hoặc phanh đột ngột, xe dễ mất ổn định.",
        en: "If you press the accelerator or brake suddenly, the car can become unstable.",
        zh: "突然踩油门或刹车，车辆容易不稳定。",
        pt: "Se pisar no acelerador ou freio de repente, o carro pode ficar instável.",
        id: "Jika Anda menginjak pedal gas atau rem secara tiba-tiba, mobil cenderung tidak stabil.",
        ne: "यदि तपाईंले एक्‍सेलेटरमा पाइला वा ब्रेक लगाउनुभयो भने, कार अस्थिर हुन जान्छ।",
        my: "အရှိန်မြှင့် သို့မဟုတ် ဘရိတ်ကို ရုတ်တရက်နင်းမိပါက ကားသည် မတည်မငြိမ်ဖြစ်တတ်သည်။"
      }
    },
    {
      key: "memory",
      label: "覚えておきたいこと",
      japanese: "速度は『早めに落とす・なめらかに上げる・一定に保つ』を意識します。",
translations: {
        vi: "Hãy nhớ: giảm tốc sớm, tăng tốc nhẹ nhàng và giữ tốc độ ổn định.",
        en: "Remember: slow down early, accelerate smoothly, and keep a steady speed.",
        zh: "记住：提前减速、平稳加速、保持一定速度。",
        pt: "Lembre-se: reduza cedo, acelere suavemente e mantenha velocidade constante.",
        id: "Dalam hal kecepatan, berhati-hatilah untuk ``menurunkannya dengan cepat, meningkatkannya dengan lancar, dan menjaganya tetap konstan.''",
        ne: "जब यो गतिको कुरा आउँदछ, ``छिटो यसलाई घटाउने, यसलाई सहज रूपमा बढाउने, र यसलाई स्थिर राख्ने' बारे सचेत रहनुहोस्।",
        my: "အရှိန်ရလာတဲ့အခါ ``မြန်မြန်နှိမ့်ချ၊ ချောချောမွေ့မွေ့ တိုးလာပြီး မြဲမြံအောင် ထိန်းထား´´ ဆိုတာကို သတိထားပါ။"
      }
    },
    {
      key: "phrase",
      label: "教習で使う一言",
      japanese: "「速度を調節して走行します。」",
translations: {
        vi: "Tôi sẽ điều chỉnh tốc độ khi lái xe.",
        en: "I will drive while adjusting my speed.",
        zh: "我会调整速度行驶。",
        pt: "Vou dirigir ajustando a velocidade.",
        id: "\"Sesuaikan kecepatan dan mengemudimu.\"",
        ne: "\"तपाईंको गति र ड्राइभ समायोजन गर्नुहोस्।\"",
        my: "\"သင့်ရဲ့အမြန်နှုန်းကို ချိန်ညှိပြီး မောင်းနှင်ပါ။\""
      }
    },
    ]
  },
{
  id: 5,
  title: "走行位置と進路",
  blocks: [
    {
      title: "項目の目標",
      ja: [
        { label: "説明", text: "直線やゆるいカーブにあわせた走行位置や進路がとれるようにします。" },
        { label: "教官ワンポイント", text: "車線の中央付近を意識し、進路を早めに確認しましょう。" },
        { label: "検定ポイント", text: "ふらつかず、正しい走行位置を保てるかが大切です。" },
        { label: "よくある失敗", text: "左に寄りすぎたり、中央線に近づきすぎることがあります。" },
        { label: "覚えておきたいこと", text: "遠くを見て、車の位置を早めに修正しましょう。" },
        { label: "教習で使う一言", text: "走行位置を確認して、まっすぐ進みましょう。" }
      ],
      vi: [{ label: "Giải thích", text: "Hãy giữ vị trí xe phù hợp trên đường thẳng và đường cong nhẹ." }],
      en: [{ label: "Explanation", text: "Keep the proper driving position on straight roads and gentle curves." }],
      zh: [{ label: "说明", text: "请在直路和缓弯中保持合适的行驶位置。" }],
      pt: [{ label: "Explicação", text: "Mantenha a posição correta em retas e curvas suaves." }],
      id: [{ label: "Deskripsi", text: "Hal ini memungkinkan Anda menemukan posisi dan jalur mengemudi yang sesuai dengan garis lurus dan tikungan landai." }, { label: "Instruktur satu poin", text: "Tetaplah di tengah jalur dan periksa rute Anda lebih awal." }, { label: "Poin tes", text: "Penting untuk dapat mempertahankan posisi lari yang benar tanpa goyah." }, { label: "kesalahan umum", text: "Anda mungkin terlalu jauh ke kiri atau terlalu dekat dengan garis tengah." }, { label: "Hal-hal yang perlu diingat", text: "Lihatlah jauh ke depan dan segera perbaiki posisi kendaraan Anda." }, { label: "Kata-kata yang digunakan dalam pelajaran", text: "Periksa posisi mengemudi Anda dan lanjutkan lurus." }],
      ne: [{ label: "विवरण", text: "यसले तपाईंलाई ड्राइभिङ स्थिति र पाठ्यक्रम फेला पार्न अनुमति दिन्छ जुन सीधा रेखाहरू र कोमल कर्भहरू अनुरूप हुन्छ।" }, { label: "प्रशिक्षक एक बिन्दु", text: "लेनको बीचमा रहनुहोस् र चाँडै आफ्नो मार्ग जाँच गर्नुहोस्।" }, { label: "परीक्षण अंक", text: "यो wobbling बिना सही दौड स्थिति कायम राख्न सक्षम हुनु महत्त्वपूर्ण छ।" }, { label: "सामान्य गल्तीहरू", text: "तपाईं बायाँ तिर धेरै टाढा वा केन्द्र रेखाको धेरै नजिक हुन सक्नुहुन्छ।" }, { label: "याद राख्नु पर्ने कुराहरु", text: "धेरै अगाडि हेर्नुहोस् र चाँडै आफ्नो गाडीको स्थिति सच्याउनुहोस्।" }, { label: "पाठहरूमा प्रयोग गरिएका शब्दहरू", text: "आफ्नो ड्राइभिङ स्थिति जाँच गर्नुहोस् र सीधा अगाडि बढ्नुहोस्।" }],
      my: [{ label: "ဖော်ပြချက်", text: "၎င်းသည် မျဉ်းဖြောင့်များနှင့် နူးညံ့သိမ်မွေ့သော မျဉ်းကြောင်းများနှင့် ကိုက်ညီသော မောင်းနှင်သည့် အနေအထားနှင့် လမ်းကြောင်းကို ရှာဖွေနိုင်မည်ဖြစ်သည်။" }, { label: "နည်းပြဆရာက အချက်တစ်ချက်", text: "လမ်းကြော၏အလယ်တွင်နေ၍ သင်၏လမ်းကြောင်းကို စောစီးစွာစစ်ဆေးပါ။" }, { label: "စာမေးပွဲအမှတ်များ", text: "မလှုပ်မယှက်ဘဲ မှန်ကန်တဲ့ ပြေးနေတဲ့ အနေအထားကို ထိန်းသိမ်းနိုင်ဖို့ အရေးကြီးတယ်။" }, { label: "ဘုံအမှားများ", text: "သင်သည် ဘယ်ဘက်နှင့် ဝေးလွန်းနေနိုင်သည် သို့မဟုတ် အလယ်မျဉ်းနှင့် အလွန်နီးကပ်နေပေမည်။" }, { label: "မှတ်သားစရာများ", text: "အဝေးကို မျှော်ကြည့်ပြီး သင့်ယာဉ်၏ အနေအထားကို အမြန်ပြင်ပါ။" }, { label: "သင်ခန်းစာများတွင်သုံးသောစကားလုံးများ", text: "သင်၏ မောင်းနှင်နေသော အနေအထားကို စစ်ဆေးပြီး ဖြောင့်တန်းစွာ ဆက်သွားပါ။" }]
    },
    {
      title: "走行位置のとり方",
      ja: [
        { label: "説明", text: "車線の中央付近を走行し、道路の端や中央線に寄りすぎないようにします。" },
        { label: "教官ワンポイント", text: "近くではなく、遠くを見ると車の位置が安定します。" },
        { label: "検定ポイント", text: "道路幅に合わせて安全な位置を保ちます。" },
        { label: "よくある失敗", text: "近くを見すぎて車が左右にふらつくことがあります。" },
        { label: "覚えておきたいこと", text: "目線は遠く、ハンドル操作は小さくしましょう。" },
        { label: "教習で使う一言", text: "車線の中央を意識してください。" }
      ],
      vi: [{ label: "Giải thích", text: "Hãy chạy gần giữa làn đường, không quá sát lề hoặc vạch giữa." }],
      en: [{ label: "Explanation", text: "Drive near the center of the lane, not too close to the edge or center line." }],
      zh: [{ label: "说明", text: "请在车道中央附近行驶，不要太靠边或靠近中心线。" }],
      pt: [{ label: "Explicação", text: "Dirija próximo ao centro da faixa, sem ficar muito perto da borda ou da linha central." }],
      id: [{ label: "Deskripsi", text: "Berkendaralah dekat dengan tengah jalur dan hindari bersandar terlalu dekat dengan tepi jalan atau garis tengah." }, { label: "Instruktur satu poin", text: "Melihat jauh daripada mendekat akan menstabilkan posisi mobil." }, { label: "Poin tes", text: "Tetap pada posisi aman sesuai lebar jalan." }, { label: "kesalahan umum", text: "Jika Anda melihat terlalu dekat, mobil Anda mungkin bergoyang dari sisi ke sisi." }, { label: "Hal-hal yang perlu diingat", text: "Jauhkan pandangan Anda dan kurangi penggunaan kemudi." }, { label: "Kata-kata yang digunakan dalam pelajaran", text: "Waspadai bagian tengah jalur." }],
      ne: [{ label: "विवरण", text: "लेनको केन्द्रको नजिक ड्राइभ गर्नुहोस् र सडकको छेउमा वा केन्द्र रेखाको धेरै नजिक झुकाउनबाट जोगिनुहोस्।" }, { label: "प्रशिक्षक एक बिन्दु", text: "नजिकको सट्टा टाढा हेर्दा कारको स्थिति स्थिर हुनेछ।" }, { label: "परीक्षण अंक", text: "सडकको चौडाइ अनुसार सुरक्षित स्थानमा बस्नुहोस्।" }, { label: "सामान्य गल्तीहरू", text: "यदि तपाइँ धेरै नजिक हेर्नुभयो भने, तपाइँको कार छेउबाट अर्को छेउमा घुम्न सक्छ।" }, { label: "याद राख्नु पर्ने कुराहरु", text: "आफ्नो आँखा टाढा राख्नुहोस् र स्टेयरिङ ह्वील कम प्रयोग गर्नुहोस्।" }, { label: "पाठहरूमा प्रयोग गरिएका शब्दहरू", text: "लेनको केन्द्रको बारेमा सचेत हुनुहोस्।" }],
      my: [{ label: "ဖော်ပြချက်", text: "လမ်း၏အလယ်ဗဟိုသို့ နီးကပ်စွာမောင်းနှင်ပြီး လမ်း၏အစွန်း သို့မဟုတ် အလယ်မျဉ်းနှင့် အလွန်နီးကပ်စွာ တိမ်းရှောင်ခြင်းကို ရှောင်ကြဉ်ပါ။" }, { label: "နည်းပြဆရာက အချက်တစ်ချက်", text: "အနီးကပ်ဆိုတာထက် အဝေးကို ကြည့်ရင် ကားရဲ့ အနေအထားကို တည်ငြိမ်စေပါတယ်။" }, { label: "စာမေးပွဲအမှတ်များ", text: "လမ်းအကျယ်အတိုင်း ဘေးကင်းသော အနေအထားတွင်နေပါ။" }, { label: "ဘုံအမှားများ", text: "အနီးကပ်ကြည့်လျှင် သင့်ကားသည် ဘေးတစ်ဖက်သို့ ရွေ့သွားနိုင်သည်။" }, { label: "မှတ်သားစရာများ", text: "မျက်လုံးကို အဝေးမှာထားပြီး စတီယာရင်ကို လျှော့သုံးပါ။" }, { label: "သင်ခန်းစာများတွင်သုံးသောစကားလုံးများ", text: "လမ်းလယ်ကို သတိထားပါ။" }]
    },
    {
      title: "進路のとり方",
      ja: [
        { label: "説明", text: "進みたい方向を早めに見て、なめらかにハンドルを操作します。" },
        { label: "教官ワンポイント", text: "進路は車のすぐ前ではなく、少し先を見て決めます。" },
        { label: "検定ポイント", text: "急なハンドル操作をせず、安定した進路をとります。" },
        { label: "よくある失敗", text: "見る位置が近すぎて、ハンドル操作が遅れることがあります。" },
        { label: "覚えておきたいこと", text: "見た方向へ車は進みやすいです。" },
        { label: "教習で使う一言", text: "進みたい方向を早めに見てください。" }
      ],
      vi: [{ label: "Giải thích", text: "Hãy nhìn sớm hướng muốn đi và điều khiển vô lăng nhẹ nhàng." }],
      en: [{ label: "Explanation", text: "Look early in the direction you want to go and steer smoothly." }],
      zh: [{ label: "说明", text: "请提前看向想要前进的方向，并平稳操作方向盘。" }],
      pt: [{ label: "Explicação", text: "Olhe cedo para a direção desejada e manobre suavemente." }],
      id: [{ label: "Deskripsi", text: "Lihatlah lebih awal ke arah yang ingin Anda tuju dan operasikan roda kemudi dengan lancar." }, { label: "Instruktur satu poin", text: "Tentukan rute Anda dengan melihat sedikit ke depan mobil, bukan tepat di depannya." }, { label: "Poin tes", text: "Hindari gerakan kemudi yang tiba-tiba dan pertahankan jalur yang stabil." }, { label: "kesalahan umum", text: "Jika Anda melihat terlalu dekat, pengoperasian roda kemudi mungkin tertunda." }, { label: "Hal-hal yang perlu diingat", text: "Mobil dapat dengan mudah bergerak ke arah yang Anda lihat." }, { label: "Kata-kata yang digunakan dalam pelajaran", text: "Lihatlah sekilas ke arah yang ingin Anda tuju." }],
      ne: [{ label: "विवरण", text: "तपाईले जान चाहनु भएको दिशामा चाँडै हेर्नुहोस् र स्टेयरिङ ह्विललाई सहज रूपमा सञ्चालन गर्नुहोस्।" }, { label: "प्रशिक्षक एक बिन्दु", text: "कारको अगाडि नभई अलि अगाडि हेरेर आफ्नो मार्ग निर्धारण गर्नुहोस्।" }, { label: "परीक्षण अंक", text: "अचानक स्टीयरिङ आन्दोलनहरूबाट बच्नुहोस् र एक स्थिर पाठ्यक्रम कायम राख्नुहोस्।" }, { label: "सामान्य गल्तीहरू", text: "यदि तपाईंले धेरै नजिक हेर्नुभयो भने, स्टेयरिङ ह्वील सञ्चालनमा ढिलाइ हुन सक्छ।" }, { label: "याद राख्नु पर्ने कुराहरु", text: "तपाईले देखेको दिशामा कार सजिलैसँग जान सक्छ।" }, { label: "पाठहरूमा प्रयोग गरिएका शब्दहरू", text: "तपाईं जान चाहानु भएको दिशामा द्रुत रूपमा हेर्नुहोस्।" }],
      my: [{ label: "ဖော်ပြချက်", text: "သင်သွားလိုသောလမ်းကြောင်းကို စောစောကြည့်ပြီး စတီယာရင်ဘီးကို ချောမွေ့စွာလည်ပတ်ပါ။" }, { label: "နည်းပြဆရာက အချက်တစ်ချက်", text: "ရှေ့ကို တိုက်ရိုက်မဟုတ်ဘဲ ကားရှေ့သို့ အနည်းငယ်ကြည့်ခြင်းဖြင့် သင့်လမ်းကြောင်းကို ဆုံးဖြတ်ပါ။" }, { label: "စာမေးပွဲအမှတ်များ", text: "ရုတ်တရက် စတီယာရင်လှုပ်ရှားမှုကို ရှောင်ကြဉ်ပြီး တည်ငြိမ်သောလမ်းကို ထိန်းသိမ်းပါ။" }, { label: "ဘုံအမှားများ", text: "အနီးကပ်ကြည့်လျှင် စတီယာရင်ဘီးလည်ပတ်မှု နှောင့်နှေးနိုင်ပါသည်။" }, { label: "မှတ်သားစရာများ", text: "ကားသည် သင်ကြည့်သော ဦးတည်ရာသို့ အလွယ်တကူ ရွေ့လျားနိုင်သည်။" }, { label: "သင်ခန်းစာများတွင်သုံးသောစကားလုံးများ", text: "သင်သွားလိုသော လမ်းကြောင်းကို အမြန်ကြည့်ပါ။" }]
    },
    {
      title: "ゆるいカーブの走行",
      ja: [
        { label: "説明", text: "カーブの先を見て、道路に沿った自然な進路をとります。" },
        { label: "教官ワンポイント", text: "カーブでは内側に寄りすぎないように注意しましょう。" },
        { label: "検定ポイント", text: "速度と走行位置を安定させて通行します。" },
        { label: "よくある失敗", text: "カーブの内側に入りすぎたり、外側へふくらむことがあります。" },
        { label: "覚えておきたいこと", text: "カーブの出口を見ると進路が安定します。" },
        { label: "教習で使う一言", text: "カーブの先を見て、ゆっくり進みましょう。" }
      ],
      vi: [{ label: "Giải thích", text: "Hãy nhìn về phía trước của khúc cua và đi theo đường cong tự nhiên." }],
      en: [{ label: "Explanation", text: "Look ahead through the curve and follow the road naturally." }],
      zh: [{ label: "说明", text: "请看向弯道前方，沿道路自然行驶。" }],
      pt: [{ label: "Explicação", text: "Olhe para a frente da curva e siga naturalmente a via." }],
      id: [{ label: "Deskripsi", text: "Lihatlah sekeliling tikungan dan ikuti jalur alami jalan." }, { label: "Instruktur satu poin", text: "Berhati-hatilah untuk tidak bersandar terlalu jauh ke dalam pada tikungan." }, { label: "Poin tes", text: "Kendaraan melintas dengan tetap menjaga kecepatan dan posisi berkendara stabil." }, { label: "kesalahan umum", text: "Ini mungkin terlalu jauh ke dalam kurva atau menonjol ke luar." }, { label: "Hal-hal yang perlu diingat", text: "Melihat ke pintu keluar tikungan akan menstabilkan jalur Anda." }, { label: "Kata-kata yang digunakan dalam pelajaran", text: "Lihatlah melampaui kurva dan lanjutkan perlahan." }],
      ne: [{ label: "विवरण", text: "घुमाउरो वरिपरि हेर्नुहोस् र सडकको प्राकृतिक पाठ्यक्रम पछ्याउनुहोस्।" }, { label: "प्रशिक्षक एक बिन्दु", text: "कर्भहरूमा धेरै टाढा भित्र झुकाउन सावधान रहनुहोस्।" }, { label: "परीक्षण अंक", text: "स्थिर गति र ड्राइभिङ स्थिति कायम राख्दा सवारी पास हुन्छ।" }, { label: "सामान्य गल्तीहरू", text: "यो वक्र भित्र धेरै टाढा जान सक्छ वा बाहिर बाहिर उभिएको हुन सक्छ।" }, { label: "याद राख्नु पर्ने कुराहरु", text: "कर्भको बाहिर निस्कँदा तपाईंको पाठ्यक्रम स्थिर हुनेछ।" }, { label: "पाठहरूमा प्रयोग गरिएका शब्दहरू", text: "वक्र बाहिर हेर्नुहोस् र बिस्तारै अगाडि बढ्नुहोस्।" }],
      my: [{ label: "ဖော်ပြချက်", text: "အကွေ့အကောက်များကို လှည့်ပတ်ကြည့်ရှုပြီး သဘာဝလမ်းအတိုင်း လိုက်လျှောက်ပါ။" }, { label: "နည်းပြဆရာက အချက်တစ်ချက်", text: "အကွေ့အကောက်များပေါ်တွင် အတွင်းဘက်သို့ အလွန်အလှမ်းမမှီစေရန် သတိထားပါ။" }, { label: "စာမေးပွဲအမှတ်များ", text: "ယာဉ်သည် တည်ငြိမ်သော အမြန်နှုန်းနှင့် မောင်းနှင်သည့် အနေအထားကို ထိန်းသိမ်းထားစဉ် ဖြတ်သန်းသွားသည်။" }, { label: "ဘုံအမှားများ", text: "မျဉ်းကွေးအတွင်း ဝေးလွန်းသည် သို့မဟုတ် အပြင်ဘက်သို့ ဖောင်းထွက်လာနိုင်သည်။" }, { label: "မှတ်သားစရာများ", text: "မျဉ်းကွေး၏ ထွက်ပေါက်ကို ကြည့်ခြင်းသည် သင့်လမ်းစဉ်ကို တည်ငြိမ်စေမည်ဖြစ်သည်။" }, { label: "သင်ခန်းစာများတွင်သုံးသောစကားလုံးများ", text: "မျဉ်းကွေးကို ကျော်လွန်ပြီး ဖြည်းဖြည်းချင်း ဆက်သွားပါ။" }]
    },
    {
      title: "道路端との間隔",
      ja: [
        { label: "説明", text: "道路端、縁石、側溝との間隔を保って走行します。" },
        { label: "教官ワンポイント", text: "左側ばかり見ず、車全体の位置を意識しましょう。" },
        { label: "検定ポイント", text: "道路端に寄りすぎず、安全な側方間隔を保ちます。" },
        { label: "よくある失敗", text: "左側の縁石や側溝に近づきすぎることがあります。" },
        { label: "覚えておきたいこと", text: "車幅感覚を少しずつ身につけましょう。" },
        { label: "教習で使う一言", text: "左側の間隔を確認してください。" }
      ],
      vi: [{ label: "Giải thích", text: "Hãy giữ khoảng cách an toàn với lề đường, bó vỉa và rãnh nước." }],
      en: [{ label: "Explanation", text: "Keep a safe distance from the road edge, curb, and gutter." }],
      zh: [{ label: "说明", text: "请与路边、路缘石和排水沟保持安全距离。" }],
      pt: [{ label: "Explicação", text: "Mantenha distância segura da borda da via, guia e valeta." }],
      id: [{ label: "Deskripsi", text: "Berkendara dengan tetap menjaga jarak dari tepi jalan, tepi jalan, dan selokan." }, { label: "Instruktur satu poin", text: "Jangan hanya melihat ke kiri; Waspadai posisi mobil secara keseluruhan." }, { label: "Poin tes", text: "Jangan menepi terlalu dekat ke tepi jalan dan jaga jarak menyamping yang aman." }, { label: "kesalahan umum", text: "Anda mungkin terlalu dekat dengan tepi jalan atau selokan di sebelah kiri." }, { label: "Hal-hal yang perlu diingat", text: "Secara bertahap rasakan lebar kendaraan." }, { label: "Kata-kata yang digunakan dalam pelajaran", text: "Periksa jarak di sebelah kiri." }],
      ne: [{ label: "विवरण", text: "सडकको किनाराहरू, कर्बहरू र नालीहरूबाट दूरी कायम गर्दै ड्राइभ गर्नुहोस्।" }, { label: "प्रशिक्षक एक बिन्दु", text: "बायाँ तिर मात्र नहेर्नुहोस्; कारको समग्र स्थिति बारे सचेत रहनुहोस्।" }, { label: "परीक्षण अंक", text: "सडकको छेउमा धेरै नजिक नजानुहोस् र सुरक्षित पार्श्व दूरी कायम राख्नुहोस्।" }, { label: "सामान्य गल्तीहरू", text: "तपाईं बाँयामा कर्ब वा नालीको धेरै नजिक हुन सक्नुहुन्छ।" }, { label: "याद राख्नु पर्ने कुराहरु", text: "बिस्तारै गाडीको चौडाइको भावना प्राप्त गर्नुहोस्।" }, { label: "पाठहरूमा प्रयोग गरिएका शब्दहरू", text: "बायाँमा स्पेसिङ जाँच गर्नुहोस्।" }],
      my: [{ label: "ဖော်ပြချက်", text: "လမ်းအစွန်းများ၊ လမ်းများနှင့် ရေမြောင်းများနှင့် အကွာအဝေးကို ထိန်းသိမ်းထားစဉ် မောင်းနှင်ပါ။" }, { label: "နည်းပြဆရာက အချက်တစ်ချက်", text: "ဘယ်ဘက်ကို မကြည့်နဲ့။ ကား၏ အလုံးစုံ အနေအထားကို သတိထားပါ။" }, { label: "စာမေးပွဲအမှတ်များ", text: "လမ်း၏အစွန်းကို အလွန်နီးကပ်စွာ မဆွဲပါနှင့် ဘေးကင်းသော ဘေးအကွာအဝေးကို ထိန်းသိမ်းပါ။" }, { label: "ဘုံအမှားများ", text: "သင်သည် လက်ဝဲဘက်ရှိ ကန့်လန့်ကာ သို့မဟုတ် ရေမြောင်းနှင့် အလွန်နီးကပ်နေပေမည်။" }, { label: "မှတ်သားစရာများ", text: "တဖြည်းဖြည်း ယာဉ်ထည်း အသိကို ဆည်းပူးပါ။" }, { label: "သင်ခန်းစာများတွင်သုံးသောစကားလုံးများ", text: "ဘယ်ဘက်ရှိ အကွာအဝေးကို စစ်ဆေးပါ။" }]
    }
  ]
},
{
  id: 6,
  stage: 1,
phraseCount: 4,
title: "時機をとらえた発進と加速",
description: "タイミングのよい発進と力強い加速ができるようにします。",
  sections: [
  {
    key: "tip",
    label: "教官ワンポイント",
    japanese: "発進前は必ず合図と安全確認を行い、タイミングを見て迷わず発進しましょう。",
translations: {
      vi: "Trước khi khởi hành hãy luôn bật tín hiệu, kiểm tra an toàn và xuất phát đúng thời điểm.",
      en: "Before moving off, always signal, check safety, and start at the right timing.",
      zh: "起步前一定要打转向灯、确认安全，并把握好时机起步。",
      pt: "Antes de sair, sinalize, confirme a segurança e arranque no momento certo.",
      id: "Sebelum memulai, pastikan untuk memberi sinyal dan memastikan keselamatan, dan lepas landas pada waktu yang tepat tanpa ragu-ragu.",
      ne: "सुरु गर्नु अघि, संकेत दिन र सुरक्षा पुष्टि गर्न निश्चित हुनुहोस्, र बिना हिचकिचाहट सही समयमा टेक अफ गर्नुहोस्।",
      my: "မစတင်မီ အချက်ပြပြီး ဘေးကင်းကြောင်းကို သေချာစွာ အတည်ပြုပြီး မဆိုင်းမတွဘဲ အချိန်မှန်တွင် ထွက်ခွာပါ။"
    }
  },
  {
    key: "exam",
    label: "検定ポイント",
    japanese: "合図・安全確認・発進をスムーズにつなげ、交通の流れに合わせて力強く加速します。",
translations: {
      vi: "Kết hợp tín hiệu, kiểm tra an toàn và khởi hành thật mượt, sau đó tăng tốc theo dòng xe.",
      en: "Connect signaling, safety checks and moving off smoothly, then accelerate with traffic.",
      zh: "将转向灯、安全确认和起步连贯完成，并顺应车流加速。",
      pt: "Faça a sinalização, confirme a segurança e saia suavemente, acelerando conforme o fluxo.",
      id: "Sinyal, konfirmasi keselamatan, dan start terhubung dengan lancar, dan kendaraan berakselerasi dengan kuat sesuai dengan arus lalu lintas.",
      ne: "सिग्नल, सुरक्षा पुष्टिकरण, र स्टार्ट सजिलै संग जोडिएको छ, र सवारी ट्राफिक को प्रवाह को अनुसार शक्तिशाली गति बढ्छ।",
      my: "အချက်ပြမှု၊ ဘေးကင်းရေး အတည်ပြုချက်နှင့် စတင်မှုတို့သည် ချောမွေ့စွာ ချိတ်ဆက်ထားပြီး ယာဉ်သည် ယာဉ်ကြောစီးဆင်းမှုနှင့်အညီ အရှိန်ပြင်းစွာ အရှိန်မြှင့်သည်။"
    }
  },
  {
    key: "failure",
    label: "よくある失敗",
    japanese: "安全確認が遅れたり、発進をためらったり、加速不足で後続車の流れを妨げてしまいます。",
translations: {
      vi: "Kiểm tra an toàn chậm, chần chừ khi khởi hành hoặc tăng tốc yếu làm cản trở xe phía sau.",
      en: "Slow safety checks, hesitation, or weak acceleration may obstruct following traffic.",
      zh: "确认安全过慢、起步犹豫或加速不足，会影响后方车辆通行。",
      pt: "Verificações lentas, hesitação ou pouca aceleração podem atrapalhar o trânsito.",
      id: "Hal ini dapat mengakibatkan tertundanya pemeriksaan keselamatan, keragu-raguan dalam memulai, atau kurangnya akselerasi, sehingga dapat menghambat arus kendaraan yang mengikutinya.",
      ne: "यसले सुरक्षा जाँचमा ढिलाइ, सुरु गर्न हिचकिचाहट, वा गतिको कमीको परिणाम हुन सक्छ, जसले निम्न सवारी साधनहरूको प्रवाहमा बाधा पुर्‍याउन सक्छ।",
      my: "၎င်းသည် ဘေးကင်းမှုကို စစ်ဆေးရာတွင် နှောင့်နှေးစေခြင်း၊ စတင်ရာတွင် တုံ့ဆိုင်းခြင်း သို့မဟုတ် အရှိန်မတက်ဘဲ နောက်လိုက်ယာဉ်များ စီးဆင်းမှုကို အဟန့်အတား ဖြစ်စေနိုင်သည်။"
    }
  },
  {
    key: "remember",
    label: "覚えておきたいこと",
    japanese: "発進は『合図・確認・タイミング・加速』の4つを意識しましょう。",
translations: {
      vi: "Hãy nhớ 4 bước: bật tín hiệu, kiểm tra an toàn, chọn thời điểm và tăng tốc.",
      en: "Remember the four steps: Signal, Check, Timing, Accelerate.",
      zh: "牢记四个步骤：转向灯、确认、安全时机、加速。",
      pt: "Lembre-se de quatro passos: sinalizar, confirmar, escolher o momento e acelerar.",
      id: "Saat memulai, perhatikan empat hal: sinyal, konfirmasi, waktu, dan akselerasi.",
      ne: "सुरु गर्दा, चार चीजहरू बारे सचेत रहनुहोस्: संकेत, पुष्टिकरण, समय, र प्रवेग।",
      my: "စတင်သောအခါ၊ အချက်လေးချက်၊ အတည်ပြုချက်၊ အချိန်နှင့် အရှိန်ကို သတိထားပါ။"
    }
  },
  {
    key: "instruction",
    label: "教習で使う一言",
    japanese: "安全確認できました。タイミングを見て発進しましょう。しっかり加速してください。",
translations: {
      vi: "Đã an toàn. Hãy chọn đúng thời điểm để khởi hành và tăng tốc dứt khoát.",
      en: "Safety confirmed. Move off at the right timing and accelerate positively.",
      zh: "确认安全后，把握时机起步，并顺畅加速。",
      pt: "Segurança confirmada. Arranque no momento certo e acelere com firmeza.",
      id: "Saya bisa memastikan keamanannya. Ayo berangkat pada waktu yang tepat. Tolong akselerasi dengan benar.",
      ne: "मैले सुरक्षा पुष्टि गर्न सक्षम भएँ। सहि समयमा उडौं। कृपया राम्रोसँग गति दिनुहोस्।",
      my: "ဘေးကင်းကြောင်း အတည်ပြုနိုင်ခဲ့တယ်။ အချိန်တန်ရင် ဆင်းကြရအောင်။ စနစ်တကျ အရှိန်မြှင့်ပါ။"
    }
  }
]
}
,
{
  id: 7,
  stage: 1,
title: "目標にあわせた停止",
description: "予定した位置に車を停止させることができるようにします。",
phraseCount: 18,
  sections: [
  {
    key: "tip",
    label: "教官ワンポイント",
    japanese: "停止目標は早めに見つけ、余裕を持って減速し、まっすぐ停止しましょう。",
translations: {
      vi: "Hãy xác định điểm dừng sớm, giảm tốc từ từ và dừng xe thẳng.",
      en: "Find the stopping point early, slow down smoothly and stop straight.",
      zh: "尽早确定停车目标，平稳减速，直线停车。",
      pt: "Identifique o ponto de parada cedo, reduza a velocidade suavemente e pare em linha reta.",
      id: "Temukan titik perhentian Anda lebih awal, perlambat dengan banyak waktu, dan berhenti lurus.",
      ne: "आफ्नो रोकिने बिन्दु चाँडै फेला पार्नुहोस्, धेरै समयको साथ ढिलो गर्नुहोस्, र सीधा रोक्नुहोस्।",
      my: "သင်၏မှတ်တိုင်မှတ်တိုင်ကို စောစီးစွာရှာဖွေပါ၊ အချိန်များစွာဖြင့် နှေးကွေးပြီး တည့်တည့်ရပ်ပါ။"
    }
  },
  {
    key: "exam",
    label: "検定ポイント",
    japanese: "停止位置・減速・ブレーキ操作がスムーズで、目標位置へ正確に停止できること。",
translations: {
      vi: "Dừng đúng vị trí, giảm tốc và phanh nhẹ nhàng.",
      en: "Stop accurately with smooth braking and speed control.",
      zh: "准确停车，减速和制动动作平稳。",
      pt: "Pare exatamente no ponto com frenagem suave.",
      id: "Posisi berhenti, deselerasi, dan pengoperasian rem harus mulus, dan produk harus mampu berhenti secara akurat pada posisi target.",
      ne: "रोक्ने स्थिति, ढिलाइ, र ब्रेक अपरेशन सहज हुनुपर्छ, र उत्पादन लक्षित स्थितिमा सही रूपमा रोक्न सक्षम हुनुपर्छ।",
      my: "ရပ်တန့်နေသည့်အနေအထား၊ အရှိန်လျော့ခြင်းနှင့် ဘရိတ်လည်ပတ်မှုတို့သည် ချောမွေ့မှုရှိရမည်ဖြစ်ပြီး ထုတ်ကုန်သည် ပစ်မှတ်အနေအထားတွင် တိကျစွာရပ်တန့်နိုင်ရမည်ဖြစ်သည်။"
    }
  },
  {
    key: "failure",
    label: "よくある失敗",
    japanese: "停止位置を行き過ぎる、手前で止まる、停止時にショックが出ることがあります。",
translations: {
      vi: "Dừng quá điểm, dừng trước điểm hoặc xe bị giật khi dừng.",
      en: "Stopping too far, too early, or with a jerky stop.",
      zh: "停车过头、提前停车或停车时发生顿挫。",
      pt: "Parar além, antes do ponto ou com tranco.",
      id: "Kendaraan dapat melaju terlalu jauh, berhenti pada posisi berhenti, atau mengalami guncangan saat berhenti.",
      ne: "गाडी धेरै टाढा जान सक्छ, स्टप पोजिसनमा कम रोकिन सक्छ, वा रोकिँदा झटका अनुभव हुन सक्छ।",
      my: "ယာဉ်သည် ဝေးလွန်းသွားခြင်း၊ ရပ်တန့်နေသည့် အနေအထားတွင် ရပ်တန့်သွားခြင်း သို့မဟုတ် ရပ်တန့်သည့်အခါ တုန်လှုပ်ခြင်း ခံစားရနိုင်သည်။"
    }
  },
  {
    key: "remember",
    label: "覚えておきたいこと",
    japanese: "『目標を早く見る・減速・ブレーキ調整・静かに停止』を意識しましょう。",
translations: {
      vi: "Hãy nhớ: nhìn điểm dừng sớm, giảm tốc, điều chỉnh phanh và dừng êm.",
      en: "Remember: early target, smooth deceleration, brake adjustment and gentle stop.",
      zh: "牢记：提前看目标、减速、调整刹车、平稳停车。",
      pt: "Lembre-se: veja o alvo cedo, reduza, ajuste o freio e pare suavemente.",
      id: "Waspadai ``melihat target dengan cepat, memperlambat, menyetel rem, dan berhenti dengan tenang.''",
      ne: "``लक्ष्य छिट्टै हेर्ने, ढिलो गर्ने, ब्रेक समायोजन गर्ने र चुपचाप रोकिने' बारे सचेत रहनुहोस्।",
      my: "``ပစ်မှတ်ကို အမြန်မြင်ခြင်း၊ အရှိန်လျှော့ခြင်း၊ ဘရိတ်ချိန်ညှိခြင်းနှင့် ငြိမ်သက်စွာ ရပ်ခြင်း´´ ကို သတိထားပါ။"
    }
  },
  {
    key: "instruction",
    label: "教習で使う一言",
    japanese: "停止目標を見てください。ブレーキを調整しながら、目標で止まりましょう。",
translations: {
      vi: "Hãy nhìn điểm dừng, điều chỉnh phanh và dừng đúng vị trí.",
      en: "Watch the stopping point. Adjust the brake and stop at the target.",
      zh: "看准停车目标，调整刹车，在目标位置停车。",
      pt: "Olhe o ponto de parada, ajuste o freio e pare exatamente no alvo.",
      id: "Lihatlah target berhenti. Sesuaikan rem Anda dan berhenti di target Anda.",
      ne: "रोक्ने लक्ष्यमा हेर्नुहोस्। आफ्नो ब्रेक मिलाउनुहोस् र आफ्नो लक्ष्यमा रोक्नुहोस्।",
      my: "ရပ်တန့်ပစ်မှတ်ကိုကြည့်ပါ။ သင်၏ဘရိတ်များကို ချိန်ညှိပြီး သင့်ပစ်မှတ်တွင် ရပ်ပါ။"
    }
  }
]
}
,
{
  id: 8,
  stage: 1,
  title: "カーブや曲がり角の通行",
  description: "曲がり具合に応じて走行位置を決め、速度を選ぶことができるようにします。",
  phraseCount: 18,
  sections: [
    {
      key: "tip",
      label: "教官ワンポイント",
      japanese: "カーブ全体を早めに見通し、曲がり具合に合わせて十分減速してから進入しましょう。",
translations: {
        vi: "Quan sát toàn bộ khúc cua, giảm tốc đầy đủ rồi mới vào cua.",
        en: "Look through the whole curve, reduce speed sufficiently before entering.",
        zh: "提前观察整个弯道，充分减速后再进入。",
        pt: "Observe toda a curva e reduza bem a velocidade antes de entrar.",
        id: "Lihat seluruh kurva lebih awal dan pelan-pelan untuk menyesuaikan diri dengan kurva sebelum masuk.",
        ne: "पूरै कर्भ प्रारम्भिक हेर्नुहोस् र प्रवेश गर्नु अघि कर्भमा समायोजन गर्न पर्याप्त ढिलो गर्नुहोस्।",
        my: "မျဉ်းကွေးတစ်ခုလုံးကို စောစီးစွာကြည့်ရှုပြီး မဝင်မီ မျဉ်းကွေးကို ချိန်ညှိရန် နှေးကွေးစေပါသည်။"
      }
    },
    {
      key: "exam",
      label: "検定ポイント",
      japanese: "曲がり具合に応じた速度選択、適切な走行位置、スムーズなハンドル操作ができること。",
translations: {
        vi: "Chọn tốc độ phù hợp, giữ đúng vị trí và đánh lái nhẹ nhàng.",
        en: "Choose the proper speed, maintain the correct position and steer smoothly.",
        zh: "根据弯道选择速度，保持正确路线并平稳转向。",
        pt: "Escolha a velocidade correta, mantenha a posição e esterce suavemente.",
        id: "Mampu memilih kecepatan sesuai kondisi tikungan, mencari posisi berkendara yang sesuai, dan mengoperasikan kemudi dengan lancar.",
        ne: "बेन्डको अवस्था अनुसार गति चयन गर्न सक्षम हुनुहोस्, उपयुक्त ड्राइभिङ स्थिति फेला पार्नुहोस्, र स्टेयरिङ ह्विल सहज रूपमा सञ्चालन गर्नुहोस्।",
        my: "အကွေးအခြေအနေအရ အမြန်နှုန်းကို ရွေးချယ်နိုင်ခြင်း၊ သင့်လျော်သော မောင်းနှင်မှုအနေအထားကို ရှာဖွေနိုင်ပြီး စတီယာရင်ဘီးကို ချောမွေ့စွာ လည်ပတ်နိုင်စေပါသည်။"
      }
    },
    {
      key: "failure",
      label: "よくある失敗",
      japanese: "速度が速すぎる、内輪差で縁石に接触する、出口でハンドルを戻すのが遅れることがあります。",
translations: {
        vi: "Vào cua quá nhanh, bánh sau chạm lề hoặc trả lái quá muộn.",
        en: "Entering too fast, hitting the curb with the rear wheel or returning the steering too late.",
        zh: "速度过快、后轮擦到路缘石、回正方向盘太晚。",
        pt: "Entrar rápido demais, tocar a guia ou devolver o volante tarde.",
        id: "Anda mungkin mengemudi terlalu cepat, Anda mungkin menabrak trotoar karena perbedaan antara roda bagian dalam, atau Anda mungkin terlambat mengembalikan kemudi saat keluar.",
        ne: "तपाईं धेरै छिटो ड्राइभ गरिरहनुभएको हुन सक्छ, तपाईं भित्री पाङ्ग्राहरू बीचको भिन्नताको कारणले कर्बमा हिर्काउन सक्नुहुन्छ, वा बाहिर निस्कँदा तपाईंलाई स्टेयरिङ व्हील फर्काउन ढिलाइ हुन सक्छ।",
        my: "သင်သည် အလွန်လျင်မြန်စွာ မောင်းနှင်နေနိုင်ပြီး၊ အတွင်းဘီးများကြား ခြားနားမှုကြောင့် ကန့်လန့်ကာကို တိုက်မိနိုင်သည်၊ သို့မဟုတ် ထွက်သည့်အခါ စတီယာရင်ကို ပြန်ရရန် နှောင့်နှေးနိုင်ပါသည်။"
      }
    },
    {
      key: "remember",
      label: "覚えておきたいこと",
      japanese: "『早めに見る・十分減速・カーブに合わせる・出口でゆっくり戻す』を意識しましょう。",
translations: {
        vi: "Hãy nhớ: nhìn sớm, giảm tốc, bám theo đường cong và trả lái nhẹ nhàng.",
        en: "Remember: look ahead, slow down, follow the curve and unwind the steering smoothly.",
        zh: "牢记：提前观察、充分减速、顺着弯道、平稳回正。",
        pt: "Lembre-se: olhe cedo, reduza, acompanhe a curva e retorne o volante suavemente.",
        id: "Ingatlah untuk melihat lebih awal, memperlambat kecepatan, mengikuti tikungan, dan kembali perlahan di pintu keluar.",
        ne: "चाँडै हेर्न सम्झनुहोस्, पर्याप्त ढिलो गर्नुहोस्, कर्भ पछ्याउनुहोस्, र बाहिर निस्कँदा बिस्तारै फर्कनुहोस्।",
        my: "စောစောကြည့်ရန်၊ နှေးကွေးပြီး မျဉ်းကွေးကို လိုက်ကာ ထွက်ပေါက်တွင် ဖြည်းညင်းစွာ ပြန်လာရန် မမေ့ပါနှင့်။"
      }
    },
    {
      key: "instruction",
      label: "教習で使う一言",
      japanese: "カーブの先を見てください。十分減速して、出口でゆっくりハンドルを戻しましょう。",
translations: {
        vi: "Hãy nhìn về phía trước của khúc cua, giảm tốc đầy đủ và trả lái từ từ.",
        en: "Look through the curve. Slow down sufficiently and unwind the steering at the exit.",
        zh: "看向弯道前方，充分减速，出弯时慢慢回正方向盘。",
        pt: "Olhe para a saída da curva, reduza bem a velocidade e devolva o volante suavemente.",
        id: "Lihatlah melampaui kurva. Pelankan kecepatan secukupnya dan putar kembali kemudi secara perlahan saat keluar.",
        ne: "वक्र बाहिर हेर्नुहोस्। पर्याप्त ढिलो गर्नुहोस् र बाहिर निस्कँदा बिस्तारै स्टेयरिङ ह्वील फर्काउनुहोस्।",
        my: "မျဉ်းကွေးကို ကျော်လွန်ကြည့်ပါ။ အရှိန်လျှော့ပြီး ထွက်သည့်အခါ စတီယာရင်ကို ဖြည်းဖြည်းချင်း ပြန်လှည့်ပါ။"
      }
    }
  ]
}
,
{
  id: 9,
  stage: 1,
  title: "坂道の通行",
  description: "こう配に応じて速度とレンジを選び、坂の途中で停止し、後退することなく発進できるようにします。",
  phraseCount: 18,

  sections: [
    {
      key: "point",
      label: "教官ワンポイント",
      japanese: "坂道では速度を早めに調整し、エンジンブレーキを上手に使いましょう。",
translations: {
        vi: "Trên đường dốc, hãy điều chỉnh tốc độ sớm và sử dụng phanh động cơ hiệu quả.",
        en: "Adjust your speed early and make good use of engine braking on slopes.",
        zh: "在坡道上要提前控制车速，并合理使用发动机制动。",
        pt: "Em ladeiras, reduza a velocidade cedo e utilize o freio motor.",
        id: "Sesuaikan kecepatan Anda sejak awal di tanjakan dan gunakan pengereman mesin dengan bijak.",
        ne: "पहाडहरूमा चाँडै आफ्नो गति समायोजन गर्नुहोस् र इन्जिन ब्रेकिङ बुद्धिमानीपूर्वक प्रयोग गर्नुहोस्।",
        my: "တောင်များပေါ်တွင် စောစီးစွာ သင်၏အရှိန်ကို ချိန်ညှိပြီး အင်ဂျင်ဘရိတ်ကို ပညာရှိစွာ အသုံးပြုပါ။"
      }
    },
    {
      key: "exam",
      label: "検定ポイント",
      japanese: "坂道では速度・ギア選択・停止位置・坂道発進を正確に行います。",
translations: {
        vi: "Trong bài thi, cần chọn tốc độ, số và thực hiện dừng, khởi hành trên dốc chính xác.",
        en: "For the test, correctly select speed, gear, stopping position and hill start.",
        zh: "考试时要正确选择车速、挡位、停车位置及坡道起步。",
        pt: "Na prova, escolha corretamente a velocidade, a marcha, o ponto de parada e a saída em subida.",
        id: "Di lereng, pilih kecepatan, gigi, posisi berhenti, dan mulai di lereng secara akurat.",
        ne: "ढलानहरूमा, गति, गियर, स्टप स्थिति, र ढलानहरूमा सुरू गर्न सही रूपमा चयन गर्नुहोस्।",
        my: "တောင်စောင်းများတွင်၊ အမြန်နှုန်း၊ ဂီယာ၊ ရပ်တန့်သည့်နေရာကို တိကျစွာရွေးချယ်ပြီး တောင်စောင်းများတွင် စတင်ပါ။"
      }
    },
    {
      key: "mistake",
      label: "よくある失敗",
      japanese: "下り坂でブレーキを踏み続けたり、坂道発進で車を後退させてしまいます。",
translations: {
        vi: "Lỗi thường gặp là rà phanh liên tục khi xuống dốc hoặc để xe trôi lùi khi khởi hành.",
        en: "Common mistakes are riding the brakes downhill and rolling backward on a hill start.",
        zh: "常见错误是在下坡时一直踩刹车，或坡道起步时车辆后溜。",
        pt: "Erros comuns são frear continuamente na descida ou deixar o veículo voltar na saída em subida.",
        id: "Menekan rem terus-menerus saat menuruni bukit atau saat start di tanjakan menyebabkan mobil mundur.",
        ne: "डाउनहिलमा जाँदा वा पहाडमा स्टार्ट गर्दा ब्रेक थिच्न जारी राख्दा कार ब्याकअप हुन्छ।",
        my: "ကုန်းဆင်း သို့မဟုတ် ကုန်းပေါ်တက်သည့်အခါ ဘရိတ်ကို ဆက်နှိပ်ခြင်းသည် ကားကို နောက်ပြန်တက်စေပါသည်။"
      }
    },
    {
      key: "remember",
      label: "覚えておきたいこと",
      japanese: "上り坂は早めに加速、下り坂はエンジンブレーキを活用し、坂道発進では後退しないようにします。",
translations: {
        vi: "Hãy tăng tốc sớm khi lên dốc, dùng phanh động cơ khi xuống dốc và không để xe trôi lùi khi khởi hành.",
        en: "Accelerate early uphill, use engine braking downhill, and prevent rollback when starting.",
        zh: "上坡提前加速，下坡利用发动机制动，坡道起步避免后溜。",
        pt: "Acelere cedo na subida, use o freio motor na descida e evite que o veículo recue.",
        id: "Berakselerasilah dengan cepat saat menanjak, gunakan pengereman mesin saat menuruni bukit, dan hindari mundur saat memulai di tanjakan.",
        ne: "उकालोमा जाँदा छिट्टै गति लिनुहोस्, डाउनहिलमा जाँदा इन्जिन ब्रेकिङ प्रयोग गर्नुहोस्, र पहाडमा स्टार्ट गर्दा ब्याकअप नगर्नुहोस्।",
        my: "ကုန်းတက်တဲ့အခါ မြန်မြန်ဆန်ဆန် အရှိန်မြှင့်ပါ၊ ကုန်းဆင်းသွားတဲ့အခါ အင်ဂျင်ဘရိတ်ကို အသုံးပြုပြီး တောင်ကုန်းပေါ်တက်တဲ့အခါ အရန်ကို ရှောင်ပါ။"
      }
    },
    {
      key: "instruction",
      label: "教習で使う一言",
      japanese: "エンジンブレーキを使いましょう。坂道発進では後退しないようにアクセルを少し踏みましょう。",
translations: {
        vi: "Hãy dùng phanh động cơ. Khi khởi hành trên dốc, đạp ga nhẹ để xe không bị trôi lùi.",
        en: "Use engine braking. Press the accelerator slightly to prevent rollback during a hill start.",
        zh: "请使用发动机制动。坡道起步时轻踩油门，避免车辆后溜。",
        pt: "Use o freio motor. Na saída em subida, acelere levemente para evitar que o carro recue.",
        id: "Gunakan pengereman mesin. Saat start di tanjakan, injak pedal gas sedikit agar tidak mundur.",
        ne: "इन्जिन ब्रेकिङ प्रयोग गर्नुहोस्। पहाडमा सुरु गर्दा, ब्याकअपबाट बच्नको लागि एक्सेलेटरमा अलिकति कदम चाल्नुहोस्।",
        my: "အင်ဂျင်ဘရိတ်ကိုသုံးပါ။ တောင်ကုန်းတစ်ခုပေါ်တွင် စတင်သောအခါ အရန်ခုံကိုရှောင်ရန် အရှိန်မြှင့်စက်ကို အနည်းငယ်လှမ်းပါ။"
      }
    }
  ]
},
{
  id: 10,
  stage: 1,
  title: "後退",
  description: "安全確認を行いながら、正確に後退できるようにします。",
  phraseCount: 18,

  sections: [
    {
      key: "point",
      label: "教官ワンポイント",
      japanese: "バックは危険が高いため、必ず安全確認を行い、微速で落ち着いて操作しましょう。",
translations: {
        vi: "Lùi xe có nhiều nguy hiểm. Hãy luôn kiểm tra an toàn và lùi thật chậm.",
        en: "Reversing is hazardous. Always check safety and move at a very low speed.",
        zh: "倒车危险较大，请务必确认安全，并以低速缓慢操作。",
        pt: "Dar marcha à ré é perigoso. Sempre verifique a segurança e mova-se bem devagar.",
        id: "Mencadangkan sangat berbahaya, jadi pastikan untuk memeriksa keselamatan Anda dan mengoperasikannya dengan kecepatan lambat dan tenang.",
        ne: "ब्याकअप गर्नु धेरै खतरनाक छ, त्यसैले आफ्नो सुरक्षा जाँच गर्न र ढिलो गति र शान्त रूपमा सञ्चालन गर्न निश्चित हुनुहोस्।",
        my: "အရန်သိမ်းခြင်းသည် အလွန်အန္တရာယ်များသောကြောင့် သင့်ဘေးကင်းရေးကို သေချာစစ်ဆေးပြီး နှေးကွေးသောအမြန်နှုန်းဖြင့် အေးဆေးစွာ လုပ်ဆောင်ပါ။"
      }
    },
    {
      key: "exam",
      label: "検定ポイント",
      japanese: "後方確認・速度調整・進路修正・停止位置が正確にできることを確認します。",
translations: {
        vi: "Trong bài thi sẽ kiểm tra việc quan sát phía sau, điều chỉnh tốc độ, hướng đi và điểm dừng.",
        en: "The test checks rear observation, speed control, steering correction and stopping position.",
        zh: "考试将确认后方观察、速度控制、方向修正及停车位置。",
        pt: "O exame verifica a observação traseira, controle da velocidade, correção da direção e posição de parada.",
        id: "Pastikan bahwa konfirmasi belakang, penyesuaian kecepatan, koreksi arah, dan posisi berhenti dapat dilakukan secara akurat.",
        ne: "पुष्टि गर्नुहोस् कि पछाडि पुष्टिकरण, गति समायोजन, पाठ्यक्रम सुधार, र रोक्ने स्थिति सही रूपमा प्रदर्शन गर्न सकिन्छ।",
        my: "နောက်ဘက်မှ အတည်ပြုခြင်း၊ အမြန်နှုန်း ချိန်ညှိခြင်း၊ လမ်းကြောင်း ပြုပြင်ခြင်းနှင့် ရပ်တန့်ခြင်း အနေအထားတို့ကို တိကျစွာ လုပ်ဆောင်နိုင်ကြောင်း အတည်ပြုပါ။"
      }
    },
    {
      key: "mistake",
      label: "よくある失敗",
      japanese: "後方確認不足・速度が速い・ハンドル操作が遅れる・進路修正が遅れる。",
translations: {
        vi: "Lỗi thường gặp là quan sát chưa đủ, lùi quá nhanh, đánh lái chậm hoặc sửa hướng quá muộn.",
        en: "Common mistakes are insufficient rear observation, excessive speed, delayed steering and late correction.",
        zh: "常见错误：后方确认不足、速度过快、转向迟缓、修正方向过晚。",
        pt: "Erros comuns: pouca observação traseira, velocidade alta, atraso ao esterçar e correção tardia.",
        id: "Konfirmasi pandangan belakang tidak memadai, kecepatan tinggi, keterlambatan pengoperasian roda kemudi, keterlambatan koreksi arah.",
        ne: "पछाडिको दृश्यको अपर्याप्त पुष्टिकरण, उच्च गति, स्टेयरिङ ह्वील सञ्चालनमा ढिलाइ, पाठ्यक्रम सुधारमा ढिलाइ।",
        my: "နောက်ကြည့်မှန်၊ မြန်နှုန်းမြင့်၊ စတီယာရင်ဘီးလည်ပတ်မှု နှောင့်နှေးမှု၊ သင်တန်းပြင်ဆင်မှုတွင် ကြန့်ကြာမှုတို့ကို အတည်ပြုချက်မလုံလောက်ပါ။"
      }
    },
    {
      key: "remember",
      label: "覚えておきたいこと",
      japanese: "『安全確認・微速・早めの修正・止まれる速度』を意識しましょう。",
translations: {
        vi: "Hãy nhớ: kiểm tra an toàn, lùi thật chậm, sửa hướng sớm và luôn có thể dừng lại.",
        en: "Remember: safety check, very low speed, early correction and always be able to stop.",
        zh: "牢记：确认安全、低速倒车、及早修正、保持随时能停车的速度。",
        pt: "Lembre-se: verifique a segurança, mova-se devagar, corrija cedo e mantenha velocidade para poder parar.",
        id: "Waspadai ``pemeriksaan keselamatan, kecepatan lambat, koreksi awal, dan kecepatan yang memungkinkan Anda berhenti.''",
        ne: "``सुरक्षा जाँचहरू, ढिलो गतिहरू, प्रारम्भिक सुधारहरू, र तपाईंलाई रोक्न अनुमति दिने गतिहरू' बारे सचेत हुनुहोस्।",
        my: "``ဘေးကင်းရေးစစ်ဆေးမှုများ၊ နှေးကွေးသောအမြန်နှုန်းများ၊ စောစီးစွာ ပြုပြင်မှုများနှင့် သင့်အား ရပ်တန့်နိုင်သည့် မြန်နှုန်းများကို သတိထားပါ။"
      }
    },
    {
      key: "instruction",
      label: "教習で使う一言",
      japanese: "後ろを確認してください。ゆっくりバックして、必要なら止まって確認しましょう。",
translations: {
        vi: "Hãy nhìn phía sau. Lùi thật chậm, nếu cần hãy dừng lại để kiểm tra.",
        en: "Check behind you. Reverse slowly and stop to check if necessary.",
        zh: "请确认后方，慢慢倒车，必要时停车确认。",
        pt: "Olhe para trás. Dê marcha à ré devagar e pare para verificar, se necessário.",
        id: "Silakan periksa di belakang Anda. Mundur perlahan dan berhenti untuk memeriksa jika perlu.",
        ne: "कृपया आफ्नो पछाडि जाँच गर्नुहोस्। बिस्तारै ब्याकअप गर्नुहोस् र आवश्यक भएमा जाँच गर्न रोक्नुहोस्।",
        my: "ကျေးဇူးပြုပြီး သင့်နောက်မှာ စစ်ဆေးပါ။ ဖြည်းညှင်းစွာ အရန်ကူးပြီး လိုအပ်ပါက စစ်ဆေးရန် ရပ်ပါ။"
      }
    }
  ]
},
{
  id: 11,
  stage: 1,
  title: "狭路の通行",
  description: "狭い道路で車両感覚を身につけ、適切な走行位置と速度で安全に通行できるようにします。",
  phraseCount: 18,

  sections: [
    {
      key: "point",
      label: "教官ワンポイント",
      japanese: "S字・クランクでは十分減速し、前輪と後輪の位置を意識して通行しましょう。",
translations: {
        vi: "Hãy giảm tốc đủ và luôn chú ý vị trí bánh trước, bánh sau khi đi qua đường hẹp.",
        en: "Slow down sufficiently and be aware of the front and rear wheels in narrow courses.",
        zh: "通过S字和曲折路时要充分减速，并注意前后轮的位置。",
        pt: "Reduza bem a velocidade e observe sempre as rodas dianteiras e traseiras.",
        id: "Pelankan kecepatan secukupnya pada tikungan S dan engkol, dan waspadai posisi roda depan dan belakang Anda.",
        ne: "S-Curves र क्र्याङ्कहरूमा पर्याप्त ढिलो गर्नुहोस्, र तपाईंको अगाडि र पछाडिका पाङ्ग्राहरूको स्थिति बारे सचेत हुनुहोस्।",
        my: "S-curves နှင့် cranks များတွင် လုံလောက်စွာ နှေးကွေးပြီး သင့်ရှေ့နှင့် နောက်ဘီးများ၏ အနေအထားကို သတိထားပါ။"
      }
    },
    {
      key: "exam",
      label: "検定ポイント",
      japanese: "速度調整・走行位置・安全確認・接触しない運転を確認します。",
translations: {
        vi: "Bài thi kiểm tra việc điều chỉnh tốc độ, vị trí xe, quan sát an toàn và không va chạm.",
        en: "The test checks speed control, vehicle position, safety confirmation and avoiding contact.",
        zh: "考试将确认速度控制、行驶位置、安全确认以及无接触通过。",
        pt: "O exame verifica o controle da velocidade, posição do veículo, segurança e ausência de contato.",
        id: "Periksa penyesuaian kecepatan, posisi mengemudi, konfirmasi keselamatan, dan mengemudi non-kontak.",
        ne: "गति समायोजन, ड्राइभिङ स्थिति, सुरक्षा पुष्टिकरण, र गैर-सम्पर्क ड्राइभिङ जाँच गर्नुहोस्।",
        my: "အမြန်နှုန်း ချိန်ညှိမှု၊ မောင်းနှင်မှုအနေအထား၊ ဘေးကင်းကြောင်း အတည်ပြုချက်နှင့် အဆက်အသွယ်မရှိသော မောင်းနှင်မှုတို့ကို စစ်ဆေးပါ။"
      }
    },
    {
      key: "mistake",
      label: "よくある失敗",
      japanese: "速度が速い・内輪差で脱輪する・ポールや縁石に接触する。",
translations: {
        vi: "Lỗi thường gặp là chạy quá nhanh, bánh sau leo lề hoặc va vào cọc, lề đường.",
        en: "Common mistakes are excessive speed, rear wheel dropping off and hitting poles or curbs.",
        zh: "常见错误：速度过快、内轮差导致脱轮、碰撞立杆或路缘石。",
        pt: "Erros comuns: velocidade alta, roda traseira sair da pista ou tocar postes e meio-fio.",
        id: "Kecepatan tinggi, tergelincir karena perbedaan antara roda bagian dalam, kontak dengan tiang atau tepi jalan.",
        ne: "तीव्र गति, भित्री पाङ्ग्राहरू बीचको भिन्नताको कारणले गर्दा, पोल वा कर्बसँग सम्पर्क।",
        my: "အတွင်းဘီးများကြား ခြားနားချက်၊ တိုင် သို့မဟုတ် ကန့်လန့်ကာနှင့် ထိတွေ့မှုကြောင့် အရှိန်မြင့်ခြင်း၊ လမ်းချော်ခြင်း။"
      }
    },
    {
      key: "remember",
      label: "覚えておきたいこと",
      japanese: "『十分減速・前輪を見る・後輪を意識・焦らない』ことが大切です。",
translations: {
        vi: "Hãy nhớ: giảm tốc đủ, nhìn bánh trước, chú ý bánh sau và không vội vàng.",
        en: "Remember: slow down, watch the front wheels, be aware of the rear wheels and stay calm.",
        zh: "牢记：充分减速、观察前轮、注意后轮、不要着急。",
        pt: "Lembre-se: reduza bem, observe as rodas dianteiras, cuide das traseiras e mantenha a calma.",
        id: "Penting untuk ``melambat secukupnya, memperhatikan roda depan, waspada terhadap roda belakang, dan tidak terburu-buru.''",
        ne: "``पर्याप्त ढिलो गर्नु, अगाडिका पाङ्ग्राहरू हेर्नु, पछाडिका पाङ्ग्राहरूप्रति सचेत हुनु र हतार नगर्नु महत्त्वपूर्ण छ।",
        my: "``အရှိန်လျှော့၊ ရှေ့ဘီးတွေကို စောင့်ကြည့်၊ နောက်ဘီးတွေကို သတိနဲ့ အလျင်စလိုမလုပ်မိဖို့ အရေးကြီးတယ်။"
      }
    },
    {
      key: "instruction",
      label: "教習で使う一言",
      japanese: "十分減速してください。前輪を見ながら、ゆっくり進みましょう。",
translations: {
        vi: "Hãy giảm tốc đủ. Quan sát bánh trước và đi thật chậm.",
        en: "Slow down. Watch the front wheels and proceed slowly.",
        zh: "请充分减速，一边观察前轮一边缓慢前进。",
        pt: "Reduza bem a velocidade. Observe as rodas dianteiras e avance devagar.",
        id: "Mohon pelan-pelan saja. Bergerak perlahan dan awasi roda depan.",
        ne: "कृपया पर्याप्त ढिलो गर्नुहोस्। बिस्तारै सार्नुहोस् र अगाडिको पाङ्ग्राहरूमा नजर राख्नुहोस्।",
        my: "ကျေးဇူးပြုပြီး အရှိန်လျှော့ပါ။ ဖြည်းဖြည်းချင်းရွှေ့ပြီး ရှေ့ဘီးတွေကို စောင့်ကြည့်ပါ။"
      }
    }
  ]
},
{
  id: 12,
  stage: 1,
  title: "通行位置の選択と進路変更",
  description: "道路および交通の状況にあった通行位置を選び、タイミングよく進路を変えることができるようにします。",
  phraseCount: 18,

  sections: [
    {
      key: "point",
      label: "教官ワンポイント",
      japanese: "通行位置は交通状況に合わせて選び、進路変更は早めの確認と合図で行いましょう。",
translations: {
        vi: "Hãy chọn vị trí đi phù hợp với tình huống giao thông và đổi hướng sau khi kiểm tra, báo hiệu sớm.",
        en: "Choose your road position according to traffic conditions and change lanes with early checks and signals.",
        zh: "根据交通状况选择行驶位置，变更路线时要提前确认并打转向灯。",
        pt: "Escolha a posição de circulação conforme o trânsito e mude de direção com verificação e sinalização antecipadas.",
        id: "Pilih lokasi rute Anda sesuai dengan kondisi lalu lintas, dan pastikan untuk mengonfirmasi dan memberi sinyal lebih awal saat mengubah arah.",
        ne: "ट्राफिक अवस्था अनुसार आफ्नो मार्ग स्थान छनोट गर्नुहोस्, र दिशा परिवर्तन गर्दा पुष्टि र संकेत चाँडै सुनिश्चित गर्नुहोस्।",
        my: "ယာဉ်ကြောအသွားအလာအခြေအနေအရ သင့်လမ်းကြောင်းတည်နေရာကို ရွေးချယ်ပြီး လမ်းကြောင်းပြောင်းသည့်အခါ စောစောစီးစီး အတည်ပြုပြီး အချက်ပြရန် သေချာပါစေ။"
      }
    },
    {
      key: "exam",
      label: "検定ポイント",
      japanese: "ルームミラー、ドアミラー、目視の順に確認し、進路変更の約3秒前に合図を出します。",
translations: {
        vi: "Kiểm tra theo thứ tự: gương trong, gương ngoài, quan sát trực tiếp, rồi bật tín hiệu khoảng 3 giây trước khi đổi hướng.",
        en: "Check the rearview mirror, door mirror, and shoulder check, then signal about 3 seconds before changing course.",
        zh: "按车内后视镜、车门后视镜、目视的顺序确认，并在变更路线约3秒前打转向灯。",
        pt: "Verifique o retrovisor interno, o espelho lateral e olhe diretamente; sinalize cerca de 3 segundos antes da mudança.",
        id: "Periksa kaca spion, kaca spion, dan visual, serta berikan isyarat kurang lebih 3 detik sebelum berpindah arah.",
        ne: "रियरभ्यू मिरर, डोर मिरर, र भिजुअल रूपमा जाँच गर्नुहोस्, र दिशा परिवर्तन गर्नु अघि लगभग 3 सेकेन्डमा संकेत दिनुहोस्।",
        my: "နောက်ကြည့်မှန်၊ တံခါးမှန်၊ အမြင်အာရုံကို စစ်ဆေးပြီး ဦးတည်ရာမပြောင်းမီ ၃ စက္ကန့်ခန့် အချက်ပြပါ။"
      }
    },
    {
      key: "mistake",
      label: "よくある失敗",
      japanese: "合図が遅い、目視確認を忘れる、後車との距離や速度差を見誤ることがあります。",
translations: {
        vi: "Lỗi thường gặp là bật tín hiệu muộn, quên quan sát trực tiếp hoặc đánh giá sai khoảng cách và tốc độ xe phía sau.",
        en: "Common mistakes are late signaling, forgetting the shoulder check, and misjudging the distance or speed of following vehicles.",
        zh: "常见错误是打灯太晚、忘记目视确认、误判后车距离和速度差。",
        pt: "Erros comuns incluem sinalizar tarde, esquecer de olhar diretamente e avaliar mal a distância ou velocidade do veículo atrás.",
        id: "Anda mungkin lambat memberi sinyal, lupa memeriksa secara visual, atau salah menilai jarak atau perbedaan kecepatan antara Anda dan kendaraan di belakang Anda.",
        ne: "तपाईं संकेत गर्न ढिलो हुन सक्नुहुन्छ, दृश्य जाँच गर्न बिर्सन सक्नुहुन्छ, वा तपाईं र तपाईंको पछाडिको गाडी बीचको दूरी वा गतिको भिन्नतालाई गलत अनुमान गर्न सक्नुहुन्छ।",
        my: "အချက်ပြရန် နှေးကွေးခြင်း၊ အမြင်အာရုံစစ်ဆေးရန် မေ့လျော့ခြင်း သို့မဟုတ် သင်နှင့် သင့်နောက်မှ ယာဉ်ကြား အကွာအဝေး သို့မဟုတ် အမြန်နှုန်း ကွာခြားချက်ကို လွဲမှားစေနိုင်ပါသည်။"
      }
    },
    {
      key: "remember",
      label: "覚えておきたいこと",
      japanese: "『確認・合図・再確認・なめらかに変更』の順番を守りましょう。",
translations: {
        vi: "Hãy nhớ thứ tự: kiểm tra, báo hiệu, kiểm tra lại và đổi hướng nhẹ nhàng.",
        en: "Remember the order: check, signal, check again, and change course smoothly.",
        zh: "请记住顺序：确认、打灯、再次确认、平稳变更。",
        pt: "Lembre-se da ordem: verificar, sinalizar, verificar novamente e mudar suavemente.",
        id: "Pastikan untuk mengikuti urutan ``konfirmasi, sinyal, konfirmasi ulang, dan perubahan dengan lancar.''",
        ne: "``पुष्टि गर्नुहोस्, संकेत गर्नुहोस्, पुन: पुष्टि गर्नुहोस्, र सहज रूपमा परिवर्तन गर्नुहोस्' को आदेश पालना गर्न निश्चित हुनुहोस्।",
        my: "``အတည်ပြု၊ အချက်ပြ၊ ပြန်လည်အတည်ပြုပြီး ချောမွေ့စွာ ပြောင်းလဲခြင်း´ ၏ အမိန့်ကို သေချာလိုက်နာပါ။"
      }
    },
    {
      key: "instruction",
      label: "教習で使う一言",
      japanese: "ルームミラー、ドアミラー、目視で確認してから、合図を出して進路変更しましょう。",
translations: {
        vi: "Hãy kiểm tra gương trong, gương ngoài và quan sát trực tiếp, sau đó bật tín hiệu để đổi hướng.",
        en: "Check the rearview mirror, side mirror, and blind spot, then signal and change course.",
        zh: "请确认车内后视镜、车门后视镜和目视盲区后，打灯变更路线。",
        pt: "Verifique o retrovisor interno, o lateral e olhe diretamente; depois sinalize e mude de direção.",
        id: "Periksa kaca spion, kaca spion, dan visual, lalu beri isyarat dan ubah haluan.",
        ne: "रियरभ्यू मिरर, डोर मिरर, र दृश्यात्मक रूपमा जाँच गर्नुहोस्, त्यसपछि संकेत दिनुहोस् र पाठ्यक्रम परिवर्तन गर्नुहोस्।",
        my: "နောက်ကြည့်မှန်၊ တံခါးမှန်တို့ကို အမြင်အာရုံဖြင့် စစ်ဆေးပါ၊ ထို့နောက် အချက်ပြပြီး လမ်းကြောင်းပြောင်းပါ။"
      }
    }
  ]
},
{
  id: 13,
  stage: 1,
  title: "障害物への対応",
  description: "障害物の状況を早期に読み取り、安全な進路と速度が選べるようにします。",
  phraseCount: 18,

  sections: [
    {
      key: "point",
      label: "教官ワンポイント",
      japanese: "障害物は早めに発見し、対向車や後続車との距離を確認して、安全な方法で通過しましょう。",
translations: {
        vi: "Phát hiện chướng ngại vật sớm, kiểm tra xe đối diện và xe phía sau rồi vượt qua an toàn.",
        en: "Spot obstacles early, check oncoming and following traffic, and pass safely.",
        zh: "提前发现障碍物，确认对向车和后车后安全通过。",
        pt: "Identifique o obstáculo cedo, verifique os veículos em sentido contrário e atrás, e passe com segurança.",
        id: "Temukan rintangan lebih awal, periksa jarak dari kendaraan yang melaju dan mengikuti, dan lewati dengan aman.",
        ne: "बाधाहरू चाँडै पत्ता लगाउनुहोस्, आउँदै गरेको र पछ्याउने सवारीहरूबाट दूरी जाँच गर्नुहोस्, र सुरक्षित रूपमा पास गर्नुहोस्।",
        my: "အတားအဆီးများကို စောစောစီးစီးရှာဖွေပါ၊ ဝင်လာသောနှင့် နောက်လိုက်ယာဉ်များမှ အကွာအဝေးကို စစ်ဆေးပြီး ဘေးကင်းစွာဖြတ်သန်းပါ။"
      }
    },
    {
      key: "exam",
      label: "検定ポイント",
      japanese: "安全確認・合図・進路変更・側方間隔・元の進路へ戻るまでを滑らかに行います。",
translations: {
        vi: "Thực hiện trơn tru: kiểm tra an toàn, bật tín hiệu, đổi hướng, giữ khoảng cách bên hông và trở lại làn đường.",
        en: "Smoothly perform the safety check, signal, lane change, side clearance, and return to your lane.",
        zh: "顺利完成安全确认、打灯、变更路线、保持侧方距离并返回原路线。",
        pt: "Faça suavemente a verificação, sinalize, mude de direção, mantenha distância lateral e retorne à faixa.",
        id: "Kami dengan lancar melakukan pemeriksaan keselamatan, sinyal, perubahan jalur, jarak lateral, dan kembali ke jalur semula.",
        ne: "हामी सहज रूपमा सुरक्षा जाँचहरू, संकेतहरू, पाठ्यक्रम परिवर्तनहरू, पार्श्व स्पेसिङ, र मूल पाठ्यक्रममा फर्कन्छौं।",
        my: "ကျွန်ုပ်တို့သည် လုံခြုံရေးစစ်ဆေးမှုများ၊ အချက်ပြမှုများ၊ သင်တန်းအပြောင်းအလဲများ၊ ဘေးတိုက်အကွာအဝေးကို ချောမွေ့စွာလုပ်ဆောင်ပြီး မူလသင်တန်းသို့ ပြန်သွားပါသည်။"
      }
    },
    {
      key: "mistake",
      label: "よくある失敗",
      japanese: "障害物の直前で進路変更する、側方間隔が狭い、ハンドル操作が急になることがあります。",
translations: {
        vi: "Các lỗi thường gặp là đổi hướng quá muộn, khoảng cách bên hông quá hẹp hoặc đánh lái quá gấp.",
        en: "Common mistakes are changing lanes too late, leaving too little side clearance, or steering abruptly.",
        zh: "常见错误是临近障碍物才变道、侧方距离不足、转向过急。",
        pt: "Erros comuns são mudar de faixa tarde demais, deixar pouca distância lateral ou esterçar bruscamente.",
        id: "Anda mungkin harus mengubah arah tepat sebelum ada rintangan, jarak bebas samping yang sempit, atau harus mengoperasikan setir secara tiba-tiba.",
        ne: "तपाईंले अवरोध हुनुभन्दा ठीक अघि मार्ग परिवर्तन गर्नुपर्ने हुन सक्छ, साँघुरो साइड क्लियरेन्सहरू छन्, वा अचानक स्टेयरिङ ह्वील सञ्चालन गर्नुपर्ने हुन सक्छ।",
        my: "အတားအဆီးမဖြစ်မီ လမ်းစပြောင်းရပါမည်၊ ကျဉ်းမြောင်းသော ဘေးထွက်လမ်းများ ရှိရန်၊ သို့မဟုတ် စတီယာရင်ကို ရုတ်တရက် လည်ပတ်ရပေမည်။"
      }
    },
    {
      key: "remember",
      label: "覚えておきたいこと",
      japanese: "『早めの判断・十分な側方間隔・ゆるやかな進路変更』を意識しましょう。",
translations: {
        vi: "Hãy nhớ: quyết định sớm, giữ khoảng cách bên hông đầy đủ và đổi hướng nhẹ nhàng.",
        en: "Remember: decide early, keep enough side clearance, and change course smoothly.",
        zh: "牢记：提前判断、保持足够侧方距离、平稳变更路线。",
        pt: "Lembre-se: decida cedo, mantenha distância lateral suficiente e mude de direção suavemente.",
        id: "Waspadai ``penilaian awal, jarak lateral yang memadai, dan perubahan arah secara bertahap.''",
        ne: "''प्रारम्भिक निर्णय, पर्याप्त पार्श्व दूरी, र क्रमिक पाठ्यक्रम परिवर्तनहरू'' बारे सचेत हुनुहोस्।",
        my: "``စောစီးစွာ စီရင်ဆုံးဖြတ်ခြင်း၊ လုံလောက်သော ဘေးတိုက်အကွာအဝေးနှင့် ဖြည်းဖြည်းချင်း ပြောင်းလဲခြင်း´ တို့ကို သတိထားပါ။"
      }
    },
    {
      key: "instruction",
      label: "教習で使う一言",
      japanese: "対向車を確認してください。安全なら合図を出して、ゆっくり障害物を避けましょう。",
translations: {
        vi: "Hãy kiểm tra xe đối diện. Nếu an toàn, bật tín hiệu và tránh chướng ngại vật từ từ.",
        en: "Check the oncoming traffic. If it's safe, signal and pass the obstacle slowly.",
        zh: "请确认对向车辆，安全后打转向灯，缓慢避开障碍物。",
        pt: "Verifique o veículo em sentido contrário. Se estiver seguro, sinalize e desvie do obstáculo lentamente.",
        id: "Periksa kendaraan yang melaju. Jika aman untuk melakukannya, berikan sinyal dan hindari rintangan secara perlahan.",
        ne: "आउँदै गरेको सवारी साधनहरूको लागि जाँच गर्नुहोस्। यदि यो गर्न सुरक्षित छ भने, संकेत दिनुहोस् र बिस्तारै अवरोधहरूबाट जोगिन।",
        my: "လာမည့်ယာဉ်များကို စစ်ဆေးပါ။ ထိုသို့ပြုလုပ်ရန် ဘေးကင်းပါက အချက်ပြပေးပြီး အတားအဆီးများကို ဖြည်းညှင်းစွာ ရှောင်ရှားပါ။"
      }
    }
  ]
},
{
  id: 14,
  stage: 1,
  title: "標識・標示に従った走行",
  description: "必要な標識・標示をすばやく読み取り、それに従った走行ができるようにします。",
  phraseCount: 18,

  sections: [
    {
      key: "point",
      label: "教官ワンポイント",
      japanese: "標識や標示は早めに見つけ、意味を理解して運転しましょう。",
translations: {
        vi: "Hãy phát hiện biển báo và vạch kẻ đường sớm, hiểu ý nghĩa và lái xe đúng.",
        en: "Notice traffic signs and road markings early, understand them and drive accordingly.",
        zh: "提前发现交通标志和标线，理解其含义并按规定行驶。",
        pt: "Observe cedo as placas e marcações da via, compreenda seu significado e dirija corretamente.",
        id: "Carilah rambu dan marka sejak dini dan pahami maknanya sebelum berkendara.",
        ne: "संकेत र चिन्हहरू चाँडै खोज्नुहोस् र ड्राइभ गर्नु अघि तिनीहरूको अर्थ बुझ्नुहोस्।",
        my: "ဆိုင်းဘုတ်များနှင့် အမှတ်အသားများကို စောစီးစွာရှာဖွေပြီး ကားမမောင်းမီ ၎င်းတို့၏အဓိပ္ပါယ်များကို နားလည်ပါ။"
      }
    },
    {
      key: "exam",
      label: "検定ポイント",
      japanese: "標識・標示を見落とさず、一時停止・進入禁止・停止線などを正しく守ります。",
translations: {
        vi: "Không bỏ sót biển báo, tuân thủ đúng biển dừng, cấm vào và vạch dừng.",
        en: "Do not overlook traffic signs. Correctly obey stop signs, no-entry signs and stop lines.",
        zh: "不要遗漏交通标志，正确遵守停止、禁止进入及停止线。",
        pt: "Não ignore as placas. Respeite corretamente parada obrigatória, proibido entrar e linha de parada.",
        id: "Jangan mengabaikan rambu dan marka, dan perhatikan dengan baik perhentian sementara, larangan masuk, garis berhenti, dll.",
        ne: "संकेत र चिन्हहरूलाई बेवास्ता नगर्नुहोस्, र अस्थायी स्टपहरू, कुनै प्रविष्टि छैन, स्टप लाइनहरू, आदि राम्ररी अवलोकन गर्नुहोस्।",
        my: "ဆိုင်းဘုတ်များနှင့် အမှတ်အသားများကို လျစ်လျူမရှုပါနှင့် ယာယီမှတ်တိုင်များ၊ အဝင်အထွက်မရှိ၊ မှတ်တိုင်များ စသည်တို့ကို စနစ်တကျ မှတ်သားထားပါ။"
      }
    },
    {
      key: "mistake",
      label: "よくある失敗",
      japanese: "標識を見落とす、一時停止が不十分、停止線を越えて停止してしまうことがあります。",
translations: {
        vi: "Các lỗi thường gặp là bỏ sót biển báo, dừng không hoàn toàn hoặc vượt quá vạch dừng.",
        en: "Common mistakes are missing signs, incomplete stops, and stopping beyond the stop line.",
        zh: "常见错误是漏看标志、未完全停车或越过停止线。",
        pt: "Erros comuns são não perceber as placas, parar de forma incompleta ou ultrapassar a linha de parada.",
        id: "Anda mungkin melewatkan rambu, berhenti sebentar, atau melewati garis berhenti.",
        ne: "तपाईंले चिन्ह छुटाउन सक्नुहुन्छ, पर्याप्त छोटो रोक्नुहोस्, वा स्टप लाइन पार गर्नुहोस्।",
        my: "သင်သည် ဆိုင်းဘုတ်ကို လွတ်သွားသည်၊ လုံလောက်သော တိုတောင်းသော ရပ်ရန် သို့မဟုတ် မှတ်တိုင်မျဉ်းကို ဖြတ်ကျော်နိုင်သည်။"
      }
    },
    {
      key: "remember",
      label: "覚えておきたいこと",
      japanese: "『標識を早めに発見・停止線の直前で停止・標示も確認』を意識しましょう。",
translations: {
        vi: "Hãy nhớ: phát hiện biển báo sớm, dừng trước vạch dừng và chú ý cả vạch kẻ đường.",
        en: "Remember: notice signs early, stop before the stop line, and pay attention to road markings.",
        zh: "牢记：提前发现标志、在停止线前停车，并确认道路标线。",
        pt: "Lembre-se: veja as placas cedo, pare antes da linha de parada e observe também as marcações.",
        id: "Waspadai ``kenali tandanya lebih awal, berhenti tepat sebelum garis berhenti, dan periksa tandanya.''",
        ne: "सचेत रहनुहोस् ``चिन्हहरू चाँडै भेट्नुहोस्, स्टप लाइनको ठीक अघि रोक्नुहोस्, र संकेतहरू जाँच गर्नुहोस्।''",
        my: "''ဆိုင်းဘုတ်တွေကို စောစောစီးစီး ကြိုမှတ်ထား၊ မှတ်တိုင်မရောက်ခင်မှာ ရပ်ပြီး ဆိုင်းဘုတ်တွေကို စစ်ဆေးပါ''"
      }
    },
    {
      key: "instruction",
      label: "教習で使う一言",
      japanese: "前方の標識を確認してください。停止線の手前で確実に停止しましょう。",
translations: {
        vi: "Hãy kiểm tra biển báo phía trước và dừng hẳn trước vạch dừng.",
        en: "Check the traffic sign ahead. Stop completely before the stop line.",
        zh: "请确认前方标志，在停止线前完全停车。",
        pt: "Verifique a placa à frente. Pare completamente antes da linha de parada.",
        id: "Silakan periksa tanda di depan. Pastikan untuk berhenti sebelum garis berhenti.",
        ne: "कृपया अगाडि चिन्ह जाँच गर्नुहोस्। स्टप लाइन अघि रोक्न निश्चित हुनुहोस्।",
        my: "ကျေးဇူးပြု၍ ရှေ့တွင် ဆိုင်းဘုတ်ကို စစ်ဆေးပါ။ မှတ်တိုင်မတိုင်မှီ သေချာစွာရပ်ပါ။"
      }
    }
  ]
},
{
  id: 15,
  stage: 1,
  title: "信号に従った走行",
  description: "信号をすばやく読み取り、適切な判断により信号に従った走行ができるようにします。",
  phraseCount: 18,

  sections: [
    {
      key: "point",
      label: "教官ワンポイント",
      japanese: "信号は遠くから見つけ、変わり目を予測しながら走行しましょう。",
translations: {
        vi: "Hãy quan sát đèn tín hiệu từ xa và dự đoán thời điểm chuyển màu.",
        en: "Observe traffic lights early and anticipate when they will change.",
        zh: "提前观察信号灯，并预测信号变化。",
        pt: "Observe o semáforo de longe e preveja a mudança do sinal.",
        id: "Carilah lampu lalu lintas dari kejauhan dan antisipasi lampu lalu lintas saat Anda mengemudi.",
        ne: "टाढाबाट ट्राफिक लाइटहरू खोज्नुहोस् र तपाईंले ड्राइभ गर्दा ट्राफिक लाइटहरू अनुमान गर्नुहोस्।",
        my: "အဝေးမှ မီးပွိုင့်များကို ရှာဖွေပြီး သင်မောင်းနေစဉ် မီးပွိုင့်ကို ကြိုကြည့်ပါ။"
      }
    },
    {
      key: "exam",
      label: "検定ポイント",
      japanese: "黄色信号では安全に停止できるなら停止し、赤信号では停止線の手前で確実に停止します。",
translations: {
        vi: "Khi đèn vàng, nếu có thể dừng an toàn thì phải dừng. Đèn đỏ phải dừng trước vạch.",
        en: "Stop safely on yellow when possible and always stop before the stop line on red.",
        zh: "黄灯能安全停车时应停车，红灯必须在停止线前停车。",
        pt: "No amarelo, pare se for seguro. No vermelho, pare antes da linha de retenção.",
        id: "Di lampu kuning, berhentilah jika aman untuk melakukannya, dan di lampu merah, pastikan berhenti sebelum garis berhenti.",
        ne: "पहेँलो बत्तीमा, यदि यो गर्न सुरक्षित छ भने रोक्नुहोस्, र रातो बत्तीमा, स्टप लाइन अघि रोक्न निश्चित गर्नुहोस्।",
        my: "အဝါရောင်မီးတွင်၊ ထိုသို့ပြုလုပ်ရန်အန္တရာယ်ကင်းပါကရပ်ပါ၊ နှင့်မီးနီတွင်မှတ်တိုင်လိုင်းရှေ့တွင်ရပ်တန့်ရန်သေချာပါစေ။"
      }
    },
    {
      key: "mistake",
      label: "よくある失敗",
      japanese: "黄色信号で無理に進行したり、停止位置を越えて停止してしまいます。",
translations: {
        vi: "Lỗi thường gặp là cố vượt đèn vàng hoặc dừng quá vạch.",
        en: "Common mistakes are rushing through yellow lights or stopping beyond the stop line.",
        zh: "常见错误是抢黄灯或越过停止线停车。",
        pt: "Erros comuns são avançar no amarelo ou parar além da linha.",
        id: "Melanjutkan secara paksa pada lampu kuning atau berhenti melebihi titik perhentian.",
        ne: "जबरजस्ती पहेंलो बत्तीमा अगाडि बढ्दै वा रोक्ने बिन्दुभन्दा बाहिर रोकिँदै।",
        my: "အဝါရောင်အလင်းတန်းတွင် အတင်းအဓမ္မ မောင်းနှင်ခြင်း သို့မဟုတ် ရပ်တန့်မှတ်ထက်ကျော်လွန်၍ ရပ်တန့်ခြင်း"
      }
    },
    {
      key: "remember",
      label: "覚えておきたいこと",
      japanese: "『早めに信号を確認・変わり目を予測・停止位置を守る』を意識しましょう。",
translations: {
        vi: "Hãy nhớ: quan sát sớm, dự đoán tín hiệu và dừng đúng vị trí.",
        en: "Remember: observe early, anticipate the signal, and stop at the correct position.",
        zh: "牢记：提前观察、预测信号变化、按规定位置停车。",
        pt: "Lembre-se: observe cedo, preveja a mudança do sinal e pare na posição correta.",
        id: "Waspadai ``periksa lampu lalu lintas sejak dini, antisipasi titik balik, dan tetap pada posisi berhenti.''",
        ne: "``ट्राफिक लाइटहरू चाँडै जाँच गर्नुहोस्, टर्निङ प्वाइन्टको अनुमान गर्नुहोस्, र आफ्नो रोक्ने स्थितिमा टाँस्नुहोस्।",
        my: "``မီးပွိုင့်ကို စောစီးစွာစစ်ဆေးပါ၊ ကွေ့မှတ်ကိုကြိုတင်၍ ရပ်တန့်ထားသော အနေအထားတွင် မှီဝဲပါ´´။"
      }
    },
    {
      key: "instruction",
      label: "教習で使う一言",
      japanese: "前方の信号を確認してください。黄色なら安全に停止、赤なら停止線の手前で止まりましょう。",
translations: {
        vi: "Hãy quan sát đèn phía trước. Đèn vàng thì dừng an toàn, đèn đỏ thì dừng trước vạch.",
        en: "Check the traffic light ahead. Stop safely on yellow and stop before the line on red.",
        zh: "请确认前方信号灯。黄灯安全停车，红灯在线前停车。",
        pt: "Verifique o semáforo à frente. No amarelo, pare com segurança; no vermelho, pare antes da linha.",
        id: "Periksa lampu lalu lintas di depan. Jika warnanya kuning, berhentilah dengan aman, jika warnanya merah, berhentilah sebelum garis berhenti.",
        ne: "अगाडि ट्राफिक लाइटहरू जाँच गर्नुहोस्। यदि यो पहेंलो छ भने, सुरक्षित रूपमा रोक्नुहोस्, यदि यो रातो छ भने, स्टप लाइन अघि रोक्नुहोस्।",
        my: "ရှေ့မီးပွိုင့်ကို စစ်ဆေးပါ။ အဝါရောင်ရှိလျှင် ဘေးကင်းစွာရပ်ပါ၊ အနီရောင်ဖြစ်ပါက ရပ်တန့်မျဉ်းရှေ့တွင် ရပ်ပါ။"
      }
    }
  ]
},
{
  id: 16,
  stage: 1,
  title: "交差点の通行（直進）",
  description: "交差点とその付近の交通に対する気配りができ、安全な速度と方法で通行できるようにします。",
  phraseCount: 18,

  sections: [
    {
      key: "point",
      label: "教官ワンポイント",
      japanese: "交差点では信号・標識・対向車・歩行者を早めに確認し、周囲の状況を把握しましょう。",
translations: {
        vi: "Hãy quan sát sớm đèn tín hiệu, biển báo, xe đối diện và người đi bộ trước khi vào giao lộ.",
        en: "Before entering an intersection, check the traffic lights, signs, oncoming vehicles and pedestrians.",
        zh: "进入交叉路口前，请提前确认信号灯、标志、对向车辆和行人。",
        pt: "Antes de entrar no cruzamento, observe os semáforos, placas, veículos em sentido contrário e pedestres.",
        id: "Di persimpangan, pastikan untuk memeriksa lampu lalu lintas, rambu, kendaraan yang melaju, dan pejalan kaki sedini mungkin untuk memahami lingkungan sekitar Anda.",
        ne: "चौराहेहरूमा, ट्राफिक लाइटहरू, संकेतहरू, आउँदै गरेको सवारी साधनहरू, र पैदल यात्रीहरूलाई सकेसम्म चाँडो आफ्नो वरपरको अवस्था बुझ्नको लागि जाँच गर्न निश्चित हुनुहोस्।",
        my: "လမ်းဆုံများတွင် မီးပွိုင့်များ၊ ဆိုင်းဘုတ်များ၊ လာမည့်ယာဉ်များနှင့် လမ်းသွားလမ်းလာများကို သင့်ပတ်ဝန်းကျင်ကို သိရှိနိုင်စေရန် တတ်နိုင်သမျှ စောစောစစ်ဆေးပါ။"
      }
    },
    {
      key: "exam",
      label: "検定ポイント",
      japanese: "交差点へは十分減速し、安全確認を行い、対向右折車の動きにも注意して直進します。",
translations: {
        vi: "Giảm tốc, quan sát an toàn và chú ý xe đối diện rẽ phải trước khi đi thẳng.",
        en: "Slow down, confirm safety, and watch for oncoming right-turning vehicles before proceeding straight.",
        zh: "减速确认安全，并注意对向右转车辆后直行。",
        pt: "Reduza a velocidade, confirme a segurança e observe os veículos que vão virar à direita.",
        id: "Saat mendekati persimpangan, kurangi kecepatannya, periksa keselamatannya, dan terus berjalan lurus sambil memperhatikan kendaraan yang datang berbelok ke kanan.",
        ne: "एक चौराहेमा पुग्दा, पर्याप्त ढिलो गर्नुहोस्, सुरक्षाको लागि जाँच गर्नुहोस्, र दायाँ मोडिँदै आउँदै गरेको गाडीहरूमा ध्यान दिँदै सीधा अगाडि बढ्नुहोस्।",
        my: "လမ်းဆုံတစ်ခုသို့ ချဉ်းကပ်သောအခါ၊ လုံလုံလောက်လောက် အရှိန်လျှော့ပါ၊ ဘေးကင်းစေရန် စစ်ဆေးပြီး ညာဘက်သို့ ကွေ့နေသော ယာဉ်များကို ဂရုပြုနေစဉ် ရှေ့တည့်တည့်သို့ ဆက်သွားပါ။"
      }
    },
    {
      key: "mistake",
      label: "よくある失敗",
      japanese: "信号だけを見て進み、対向右折車や歩行者の確認が遅れることがあります。",
translations: {
        vi: "Chỉ nhìn đèn tín hiệu mà quên quan sát xe đối diện hoặc người đi bộ.",
        en: "Looking only at the traffic light and failing to notice oncoming vehicles or pedestrians.",
        zh: "只看信号灯，没有注意对向车辆或行人。",
        pt: "Olhar apenas o semáforo e esquecer de verificar veículos e pedestres.",
        id: "Anda mungkin tertunda dalam memeriksa kendaraan atau pejalan kaki yang berbelok ke kanan jika Anda hanya berjalan melewati lampu lalu lintas.",
        ne: "ट्राफिक लाइटबाट मात्र अगाडि बढेर दायाँ मोडिने सवारी साधन वा पैदल यात्रीहरूको लागि जाँच गर्न तपाईंलाई ढिलाइ हुन सक्छ।",
        my: "မီးပွိုင့်ဖြင့်သာ ဆက်သွားခြင်းဖြင့် လက်ယာကွေ့ယာဉ်များ သို့မဟုတ် လမ်းသွားလမ်းလာများကို စစ်ဆေးရာတွင် နှောင့်နှေးနိုင်ပါသည်။"
      }
    },
    {
      key: "remember",
      label: "覚えておきたいこと",
      japanese: "『早めの確認・十分減速・安全確認して直進』を意識しましょう。",
translations: {
        vi: "Hãy nhớ: quan sát sớm, giảm tốc đầy đủ và xác nhận an toàn trước khi đi thẳng.",
        en: "Remember: observe early, slow down sufficiently, and proceed only after confirming safety.",
        zh: "牢记：提前观察、充分减速、确认安全后再直行。",
        pt: "Lembre-se: observe cedo, reduza bem a velocidade e siga somente após confirmar a segurança.",
        id: "Berhati-hatilah untuk ``memeriksa lebih awal, memperlambat kecepatan, memastikan keselamatan, dan berjalan lurus.''",
        ne: "``चाँडै जाँच गर्नुहोस्, पर्याप्त ढिलो गर्नुहोस्, सुरक्षा पुष्टि गर्नुहोस्, र सीधा अगाडि बढ्नुहोस्' बारे सचेत हुनुहोस्।",
        my: "``စောစီးစွာ စစ်ဆေးပါ၊ အရှိန်လျှော့ပါ၊ ဘေးကင်းကြောင်း အတည်ပြုပြီး ဖြောင့်တန်းစွာ လျှောက်ပါ´´ ဆိုတာကို သတိထားပါ။"
      }
    },
    {
      key: "instruction",
      label: "教習で使う一言",
      japanese: "交差点です。対向車と歩行者を確認して、安全ならそのまま直進しましょう。",
translations: {
        vi: "Đến giao lộ rồi. Hãy kiểm tra xe đối diện và người đi bộ, nếu an toàn thì đi thẳng.",
        en: "Intersection ahead. Check oncoming vehicles and pedestrians, then proceed straight if safe.",
        zh: "前方是交叉路口，请确认对向车辆和行人，安全后直行。",
        pt: "Há um cruzamento à frente. Verifique os veículos em sentido contrário e os pedestres e siga em frente se for seguro.",
        id: "Ini adalah persimpangan. Periksa kendaraan dan pejalan kaki yang melaju, dan jika aman untuk melakukannya, lanjutkan lurus ke depan.",
        ne: "यो एउटा प्रतिच्छेदन हो। आउँदै गरेको सवारी साधन र पैदल यात्रीहरूको लागि जाँच गर्नुहोस्, र यदि यो गर्न सुरक्षित छ भने, सीधा अगाडि जारी राख्नुहोस्।",
        my: "လမ်းဆုံတစ်ခုဖြစ်သည်။ လာမည့်ယာဉ်များနှင့် လမ်းသွားလမ်းလာများကို စစ်ဆေးပြီး ထိုသို့ပြုလုပ်ရန် အန္တရာယ်ကင်းပါက ရှေ့တည့်တည့်သို့ ဆက်သွားပါ။"
      }
    }
  ]
},
{
  id: 17,
  stage: 1,
  title: "交差点の通行（左折）",
  description: "交差点とその付近の交通に対する気配りができ、安全な速度と方法で左折通行できるようにします。",
  phraseCount: 18,
  sections: [
    {
      key: "point",
      label: "教官ワンポイント",
      japanese: "左折時は十分減速し、左端に寄せ、歩行者・自転車を最優先で確認しましょう。",
translations: {
        vi: "Khi rẽ trái, hãy giảm tốc đầy đủ, đi sát bên trái và ưu tiên kiểm tra người đi bộ, xe đạp.",
        en: "Slow down well, keep close to the left side, and always check for pedestrians and bicycles.",
        zh: "左转时充分减速，靠左侧行驶，优先确认行人和自行车。",
        pt: "Reduza bem a velocidade, mantenha-se à esquerda e verifique pedestres e bicicletas.",
        id: "Saat berbelok ke kiri, kurangi kecepatannya, tarik ke paling kiri, dan utamakan pejalan kaki dan sepeda.",
        ne: "बायाँ मोड गर्दा, पर्याप्त ढिलो गर्नुहोस्, टाढा बायाँ तिर तान्नुहोस्, र पैदल यात्री र साइकललाई प्राथमिकता दिनुहोस्।",
        my: "ဘယ်ဘက်ကွေ့တဲ့အခါ လုံလောက်တဲ့အရှိန်လျှော့၊ ဘယ်ဘက်အစွန်ဆုံးကို ဆွဲထုတ်ပြီး လမ်းသွားလမ်းလာတွေနဲ့ စက်ဘီးတွေကို ဦးစားပေးပါ။"
      }
    },
    {
      key: "check",
      label: "検定ポイント",
      japanese: "左端への寄せ、後方確認、歩行者確認、徐行、安全確認を確実に行います。",
translations: {
        vi: "Kiểm tra việc đi sát lề trái, quan sát phía sau, người đi bộ và rẽ an toàn.",
        en: "Check left positioning, rear safety, pedestrians and complete the turn safely.",
        zh: "确认靠左、后方安全、行人并安全左转。",
        pt: "Confirme o posicionamento à esquerda, o tráfego atrás, os pedestres e faça a curva com segurança.",
        id: "Pastikan untuk menepi ke tepi kiri, periksa di belakang Anda, periksa pejalan kaki, mengemudi perlahan, dan periksa keselamatan.",
        ne: "बायाँ किनारामा तान्नुहोस्, आफ्नो पछाडि जाँच गर्नुहोस्, पैदल यात्रीहरूको लागि जाँच गर्नुहोस्, बिस्तारै ड्राइभ गर्नुहोस्, र सुरक्षा जाँच गर्नुहोस्।",
        my: "ဘယ်ဘက်အစွန်းကို ဆွဲချပါ၊ သင့်နောက်ကို စစ်ဆေးပါ၊ လမ်းသွားလမ်းလာများကို စစ်ဆေးပါ၊ ဖြည်းညှင်းစွာ မောင်းနှင်ပါ၊ လုံခြုံမှုကို စစ်ဆေးပါ။"
      }
    },
    {
      key: "mistake",
      label: "よくある失敗",
      japanese: "左へ寄せ不足、歩行者や自転車の見落とし、速度が速すぎることがあります。",
translations: {
        vi: "Lỗi thường gặp là không áp sát trái, bỏ sót người đi bộ hoặc xe đạp và vào cua quá nhanh.",
        en: "Common mistakes are poor left positioning, missing pedestrians or bicycles, and entering too fast.",
        zh: "常见错误是未靠左、遗漏行人或自行车、速度过快。",
        pt: "Erros comuns: não aproximar à esquerda, não ver pedestres ou bicicletas e entrar rápido demais.",
        id: "Anda mungkin mengemudi terlalu jauh ke kiri, mengabaikan pejalan kaki atau pengendara sepeda, atau mengemudi terlalu cepat.",
        ne: "तपाईं बायाँ तिर धेरै टाढा, पैदल यात्री वा साइकल चालकहरूलाई नदेखी, वा धेरै छिटो ड्राइभ गरिरहनुभएको हुन सक्छ।",
        my: "သင်သည် လမ်းသွားလမ်းလာ သို့မဟုတ် စက်ဘီးစီးသူများကို အပေါ်စီးမှ လက်ဝဲဘက်သို့ ဝေးလွန်းစွာ မောင်းနှင်နေနိုင်သည်၊ သို့မဟုတ် အရှိန်လွန်စွာ မောင်းနှင်နေနိုင်သည်။"
      }
    },
    {
      key: "remember",
      label: "覚えておきたいこと",
      japanese: "左折は『左へ寄せる・十分減速・歩行者確認・徐行』を意識しましょう。",
translations: {
        vi: "Hãy nhớ: áp sát trái, giảm tốc, kiểm tra người đi bộ và rẽ chậm.",
        en: "Remember: move left, slow down, check pedestrians and turn slowly.",
        zh: "牢记：靠左、减速、确认行人、慢速左转。",
        pt: "Lembre-se: aproxime-se da esquerda, reduza, verifique pedestres e vire devagar.",
        id: "Saat berbelok ke kiri, ingatlah untuk ``menarik ke kiri, memperlambat kecepatan, memeriksa pejalan kaki, dan mengemudi perlahan.''",
        ne: "बायाँ मोड लिँदा, ``बायाँतिर तान्नुहोस्, पर्याप्त ढिलो गर्नुहोस्, पैदल यात्रुहरूका लागि जाँच गर्नुहोस्, र बिस्तारै गाडी चलाउनुहोस्' सम्झनुहोस्।",
        my: "ဘယ်ဘက်ကွေ့တဲ့အခါ ``ဘယ်ဘက်ကိုဆွဲ၊ အရှိန်လျှော့၊ လမ်းသွားလမ်းလာတွေကို စစ်ဆေးပြီး ဖြည်းညှင်းစွာ မောင်းနှင်ပါ´ ဆိုတာကို သတိရပါ။"
      }
    },
    {
      key: "instruction",
      label: "教習で使う一言",
      japanese: "左端へ寄せてください。歩行者を確認して、ゆっくり左折しましょう。",
translations: {
        vi: "Hãy đi sát bên trái, kiểm tra người đi bộ và rẽ trái từ từ.",
        en: "Move to the left edge, check for pedestrians, and turn left slowly.",
        zh: "请靠左，确认行人后慢慢左转。",
        pt: "Aproxime-se da esquerda, verifique os pedestres e vire lentamente.",
        id: "Silakan pindahkan ke sisi kiri. Periksa pejalan kaki dan perlahan belok kiri.",
        ne: "कृपया यसलाई बायाँ छेउमा सार्नुहोस्। पैदल यात्रीहरूको लागि जाँच गर्नुहोस् र बिस्तारै बायाँ घुम्नुहोस्।",
        my: "၎င်းကို ဘယ်ဘက်သို့ ရွှေ့ပါ။ လမ်းသွားလမ်းလာများကို စစ်ဆေးပြီး ဘယ်ဘက်သို့ ဖြည်းညှင်းစွာ လှည့်ပါ။"
      }
    }
  ]
},
{
  id: 18,
  stage: 1,
  title: "交差点の通行（右折）",
  description: "交差点とその付近の交通に対する気配りができ、安全な速度と方法で右折通行できるようにします。",
  phraseCount: 18,

  sections: [
    {
      key: "point",
      label: "教官ワンポイント",
      japanese: "右折時は対向車・歩行者・信号を何度も確認し、無理をせず安全なタイミングで曲がりましょう。",
translations: {
        vi: "Khi rẽ phải, hãy kiểm tra nhiều lần xe đối diện, người đi bộ và đèn tín hiệu, rồi rẽ khi an toàn.",
        en: "When turning right, check oncoming vehicles, pedestrians and signals repeatedly, and turn only when safe.",
        zh: "右转时要多次确认对向车、行人和信号，不要勉强，安全时再转弯。",
        pt: "Ao virar à direita, verifique várias vezes veículos em sentido contrário, pedestres e semáforo, e vire apenas quando for seguro.",
        id: "Saat berbelok ke kanan, periksa beberapa kali apakah ada mobil yang melaju, pejalan kaki, dan lampu lalu lintas, dan belok pada waktu yang aman tanpa terlalu memaksakan diri.",
        ne: "दायाँ घुम्दा, आउँदै गरेको कार, पैदल यात्रीहरू र ट्राफिक लाइटहरूका लागि धेरै पटक जाँच गर्नुहोस्, र आफूलाई धेरै जबरजस्ती नगरी सुरक्षित समयमा घुमाउनुहोस्।",
        my: "ညာဘက်ကွေ့သည့်အခါတွင် ဝင်လာသောကားများ၊ လမ်းသွားလမ်းလာများနှင့် မီးပွိုင့်များကို အကြိမ်ပေါင်းများစွာ စစ်ဆေးပြီး သင့်ကိုယ်သင် အလွန်အကျွံမတွန်းလှန်ဘဲ ဘေးကင်းသောအချိန်အတိုင်း အကွေ့ကိုပြုလုပ်ပါ။"
      }
    },
    {
      key: "exam",
      label: "検定ポイント",
      japanese: "中央寄せ、合図、徐行、対向車と歩行者の確認、右折後の進路を正しく行います。",
translations: {
        vi: "Cần posicionar-se no centro, sinalizar, reduzir, verificar veículos opostos e pedestres, e seguir a rota correta após virar.",
        en: "Move toward the center, signal, slow down, check oncoming vehicles and pedestrians, then follow the correct path.",
        zh: "靠近中央、打转向灯、徐行、确认对向车和行人，并正确进入右转后的道路。",
        pt: "Aproxime-se do centro, sinalize, reduza, verifique veículos em sentido contrário e pedestres, e siga a trajetória correta.",
        id: "Tarik ke tengah, beri isyarat, mengemudi perlahan, periksa kendaraan dan pejalan kaki yang melaju, dan ambil jalur yang benar setelah berbelok ke kanan.",
        ne: "केन्द्रमा तान्नुहोस्, संकेत गर्नुहोस्, बिस्तारै ड्राइभ गर्नुहोस्, आउँदै गरेको सवारी साधन र पैदल यात्रीहरूको लागि जाँच गर्नुहोस्, र दायाँ मोडेपछि सही मार्ग लिनुहोस्।",
        my: "ဗဟိုသို့ဆွဲတင်ပါ၊ အချက်ပြပါ၊ ဖြည်းညှင်းစွာမောင်းနှင်ပါ၊ လာမည့်ယာဉ်များနှင့် လမ်းသွားလမ်းလာများကိုစစ်ဆေးပါ၊ ညာဘက်ကွေ့ပြီးနောက် မှန်ကန်သောလမ်းကိုလျှောက်ပါ။"
      }
    },
    {
      key: "mistake",
      label: "よくある失敗",
      japanese: "対向車の判断が遅い、歩行者の確認不足、合図が早すぎる・遅すぎることがあります。",
translations: {
        vi: "Lỗi thường gặp là判断 xe đối diện chậm, quan sát người đi bộ chưa đủ, hoặc bật tín hiệu quá sớm hay quá muộn.",
        en: "Common mistakes are late judgment of oncoming vehicles, insufficient pedestrian checks, and signaling too early or too late.",
        zh: "常见错误是对向车判断迟缓、行人确认不足、转向灯过早或过晚。",
        pt: "Erros comuns são判断 tardio dos veículos em sentido contrário, pouca verificação de pedestres e sinalização cedo ou tarde demais.",
        id: "Anda mungkin lambat dalam menilai kendaraan yang melaju, tidak memeriksa pejalan kaki, atau memberi sinyal terlalu dini atau terlambat.",
        ne: "तपाईं आउँदै गरेको सवारी साधनहरूको न्याय गर्न ढिलो हुन सक्नुहुन्छ, पैदल यात्रीहरूको लागि जाँच नगर्नुहोस्, वा धेरै चाँडो वा धेरै ढिलो संकेत गर्नुहोस्।",
        my: "လာမည့်ယာဉ်များကို စစ်ဆေးရန်၊ လမ်းသွားလမ်းလာများကို စစ်ဆေးခြင်း သို့မဟုတ် အချက်ပြခြင်းမှာ စောလွန်းခြင်း သို့မဟုတ် နောက်ကျလွန်းခြင်းတို့ကြောင့် သင့်တွင် နှေးကွေးနေပေမည်။"
      }
    },
    {
      key: "remember",
      label: "覚えておきたいこと",
      japanese: "右折は『中央寄せ・30m手前の合図・対向車確認・歩行者確認』を意識しましょう。",
translations: {
        vi: "Hãy nhớ: đi gần giữa đường, bật tín hiệu trước khoảng 30m, kiểm tra xe đối diện và người đi bộ.",
        en: "Remember: move toward the center, signal about 30 meters before, and check oncoming vehicles and pedestrians.",
        zh: "牢记：靠近中央、约30米前打灯、确认对向车和行人。",
        pt: "Lembre-se: aproxime-se do centro, sinalize cerca de 30m antes e verifique veículos em sentido contrário e pedestres.",
        id: "Saat berbelok ke kanan, berhati-hatilah untuk ``tarik ke tengah, beri isyarat 30 meter di depan Anda, periksa lalu lintas yang datang, dan periksa pejalan kaki.''",
        ne: "दायाँ मोड लिँदा, ``केन्द्रमा तान्नुहोस्, तपाईंको अगाडि ३० मिटर संकेत गर्नुहोस्, आउँदै गरेको ट्राफिक जाँच गर्नुहोस्, र पैदल यात्रीहरूका लागि जाँच गर्नुहोस्।",
        my: "ညာဘက်ကွေ့တဲ့အခါ ``ဗဟိုကိုဆွဲပါ၊ ရှေ့ မီတာ 30 အကွာမှာ အချက်ပြပါ၊ လာမည့်လမ်းကြောင်းကို စစ်ဆေးပါ၊ လမ်းသွားလမ်းလာများကို စစ်ဆေးပါ´ ဆိုတာကို သတိထားပါ။"
      }
    },
    {
      key: "instruction",
      label: "教習で使う一言",
      japanese: "対向車と歩行者を確認してください。安全なら、ゆっくり右折しましょう。",
translations: {
        vi: "Hãy kiểm tra xe đối diện và người đi bộ. Nếu an toàn, rẽ phải devagar.",
        en: "Check oncoming vehicles and pedestrians. If it is safe, turn right slowly.",
        zh: "请确认对向车和行人。安全后慢慢右转。",
        pt: "Verifique os veículos em sentido contrário e os pedestres. Se estiver seguro, vire à direita devagar.",
        id: "Periksa kendaraan dan pejalan kaki yang melaju. Jika aman untuk melakukannya, belok kanan perlahan.",
        ne: "आउँदै गरेको सवारी साधन र पैदल यात्रीहरूको लागि जाँच गर्नुहोस्। यदि यो गर्न सुरक्षित छ भने, बिस्तारै दायाँ घुम्नुहोस्।",
        my: "လာမည့်ယာဉ်များနှင့် လမ်းသွားလမ်းလာများကို စစ်ဆေးပါ။ ထိုသို့ပြုလုပ်ရန် အန္တရာယ်ကင်းပါက ညာဘက်သို့ ဖြည်းညှင်းစွာ လှည့်ပါ။"
      }
    }
  ]
},
{
  id: 19,
  stage: 1,
  title: "見通しの悪い交差点の通行",
  description: "見通しの悪い交差点の危険性を読み取り、安全な速度と方法で通行できるようにします。",
  phraseCount: 18,

  sections: [
    {
      key: "point",
      label: "教官ワンポイント",
      japanese: "見えない場所には危険があると考え、徐行しながら左右を確認しましょう。",
translations: {
        vi: "Hãy luôn nghĩ rằng nơi không nhìn thấy có thể có nguy hiểm và kiểm tra trái phải khi đi chậm.",
        en: "Assume there is danger where you cannot see. Slow down and check both directions.",
        zh: "看不见的地方可能有危险，要减速并确认左右安全。",
        pt: "Considere que pode haver perigo onde não consegue ver. Reduza a velocidade e verifique os dois lados.",
        id: "Ingatlah bahwa ada bahaya di tempat yang tidak terlihat, jadi periksa kedua sisi saat mengemudi perlahan.",
        ne: "याद गर्नुहोस् कि तपाईंले देख्न नसक्ने ठाउँहरूमा खतरा छ, त्यसैले बिस्तारै ड्राइभ गर्दा दुवै पक्ष जाँच गर्नुहोस्।",
        my: "မမြင်နိုင်သောနေရာများတွင် အန္တရာယ်ရှိကြောင်း သတိပြုပါ၊ ထို့ကြောင့် ဖြည်းညှင်းစွာမောင်းနှင်နေစဉ် နှစ်ဖက်စလုံးကို စစ်ဆေးပါ။"
      }
    },
    {
      key: "exam",
      label: "検定ポイント",
      japanese: "徐行・左右確認・必要なら一時停止・安全確認後に発進できることがポイントです。",
translations: {
        vi: "Điểm kiểm tra là giảm tốc, quan sát hai bên, dừng nếu cần và chỉ khởi hành khi an toàn.",
        en: "Key points are slowing down, checking both sides, stopping if necessary, and moving only when safe.",
        zh: "考试重点是减速、左右确认、必要时停车，确认安全后再起步。",
        pt: "Os pontos principais são reduzir a velocidade, verificar ambos os lados, parar se necessário e seguir somente quando estiver seguro.",
        id: "Kuncinya adalah mengemudi perlahan, periksa kiri dan kanan, berhenti sementara jika perlu, dan bisa memulai setelah memeriksa keamanan.",
        ne: "कुञ्जी भनेको बिस्तारै ड्राइभ गर्नु हो, बायाँ र दायाँ जाँच गर्नुहोस्, आवश्यक भएमा अस्थायी रूपमा रोक्नुहोस्, र सुरक्षा जाँच गरेपछि सुरु गर्न सक्षम हुनुहोस्।",
        my: "သော့ချက်မှာ ဖြည်းညှင်းစွာ မောင်းနှင်ရန်၊ ဘယ်ညာ စစ်ဆေးရန်၊ လိုအပ်ပါက ခေတ္တရပ်ရန်နှင့် ဘေးကင်းမှုကို စစ်ဆေးပြီးနောက် စတင်နိုင်စေရန် ဖြစ်သည်။"
      }
    },
    {
      key: "mistake",
      label: "よくある失敗",
      japanese: "徐行不足、安全確認不足、一時停止後すぐ発進してしまうことがあります。",
translations: {
        vi: "Lỗi thường gặp là giảm tốc chưa đủ, quan sát chưa kỹ hoặc khởi hành ngay sau khi dừng.",
        en: "Common mistakes are not slowing enough, insufficient observation, and moving immediately after stopping.",
        zh: "常见错误是减速不足、确认不足、停车后立即起步。",
        pt: "Erros comuns são reduzir pouco, observar insuficientemente e arrancar logo após parar.",
        id: "Anda mungkin tidak mengemudi dengan cukup lambat, tidak memeriksa keselamatan dengan benar, atau langsung memulai setelah berhenti.",
        ne: "तपाईंले पर्याप्त ढिलो चलाउन सक्नुहुन्न, सुरक्षालाई राम्ररी जाँच नगर्नुहोस्, वा रोकेपछि तुरुन्तै सुरु गर्नुहोस्।",
        my: "ဖြည်းညှင်းစွာ မမောင်းရဘဲ၊ ဘေးကင်းမှုကို မှန်ကန်စွာ မစစ်ဆေးဘဲ သို့မဟုတ် ရပ်ပြီးပြီးချင်း ကားစထွက်ပါ။"
      }
    },
    {
      key: "remember",
      label: "覚えておきたいこと",
      japanese: "『見えない＝危険がある』と考え、少しずつ前へ出て安全を確認しましょう。",
translations: {
        vi: "Hãy nhớ: Không nhìn thấy nghĩa là có thể nguy hiểm. Tiến từng chút để kiểm tra an toàn.",
        en: "Remember: If you cannot see, assume danger. Move forward little by little while checking.",
        zh: "牢记：看不见就意味着可能有危险，要一点一点前进确认安全。",
        pt: "Lembre-se: se não consegue ver, considere que há perigo. Avance aos poucos verificando a segurança.",
        id: "Pikirkan, ``Saya tidak bisa melihat = ada bahaya,'' dan melangkah maju sedikit demi sedikit untuk memastikan Anda aman.",
        ne: "सोच्नुहोस्, ``मैले देख्न सक्दिन = त्यहाँ खतरा छ,' र तपाईं सुरक्षित हुनुहुन्छ भनी सुनिश्चित गर्न अलि-अलि अगाडि बढ्नुहोस्।",
        my: "``မမြင်ရဘူး = အန္တရာယ်ရှိတယ်´´ လို့တွေးပြီး မင်းဘေးကင်းကြောင်း သေချာအောင် ဖြည်းဖြည်းချင်း ရှေ့ကိုတိုးလိုက်ပါ။"
      }
    },
    {
      key: "instruction",
      label: "教習で使う一言",
      japanese: "徐行してください。左右をよく確認して、安全なら進みましょう。",
translations: {
        vi: "Hãy đi chậm. Quan sát kỹ hai bên rồi tiếp tục nếu an toàn.",
        en: "Slow down. Check both directions carefully, and proceed if it is safe.",
        zh: "请减速，认真确认左右，安全后再前进。",
        pt: "Reduza a velocidade. Verifique bem os dois lados e avance se estiver seguro.",
        id: "Silakan mengemudi perlahan. Periksa kedua sisi dengan hati-hati dan lanjutkan jika aman.",
        ne: "कृपया बिस्तारै चलाउनुहोस्। दुबै पक्षलाई सावधानीपूर्वक जाँच गर्नुहोस् र यदि यो सुरक्षित छ भने अगाडि बढ्नुहोस्।",
        my: "ကျေးဇူးပြုပြီး ဖြည်းဖြည်းမောင်းပါ။ နှစ်ဖက်စလုံးကို သေချာစစ်ဆေးပြီး အန္တရာယ်ရှိမရှိ ဆက်လက်လုပ်ဆောင်ပါ။"
      }
    }
  ]
},
{
  id: 20,
  stage: 1,
  title: "踏切の通過",
  description: "一時停止と安全確認を確実に行い、すみやかに通過できるようにします。",
  phraseCount: 18,

  sections: [
    {
      key: "point",
      label: "教官ワンポイント",
      japanese: "踏切では必ず一時停止し、『止まる・見る・聞く』を確実に行いましょう。",
translations: {
        vi: "Tại đường sắt giao cắt, hãy luôn dừng hẳn và thực hiện 'Dừng - Quan sát - Lắng nghe'.",
        en: "Always stop completely at a railroad crossing: Stop, Look and Listen.",
        zh: "通过铁路道口时必须停车，并做到“停车、观察、倾听”。",
        pt: "Sempre pare completamente na passagem de nível: Pare, Olhe e Ouça.",
        id: "Selalu berhenti di perlintasan kereta api dan pastikan untuk \"berhenti, melihat, dan mendengarkan\".",
        ne: "सधैं रेलमार्ग क्रसिङहरूमा रोक्नुहोस् र \"रोक्नुहोस्, हेर्नुहोस्, र सुन्नुहोस्।\"",
        my: "ရထားလမ်းဆုံတွေမှာ အမြဲရပ်ပြီး \"ရပ်၊ ကြည့်၊ နားထောင်\" ဖို့ သေချာပါစေ။"
      }
    },
    {
      key: "exam",
      label: "検定ポイント",
      japanese: "停止線で一時停止し、安全確認後、脱輪しないよう速やかに通過します。",
translations: {
        vi: "Dừng tại vạch dừng, xác nhận an toàn và nhanh chóng đi qua không bị lệch bánh.",
        en: "Stop at the stop line, confirm safety, then cross promptly without stopping on the tracks.",
        zh: "在停止线前停车，确认安全后迅速通过，不要停留在线路上。",
        pt: "Pare na linha de parada, confirme a segurança e atravesse rapidamente sem parar sobre os trilhos.",
        id: "Berhenti sementara di garis berhenti, dan setelah memastikan keselamatan, segera lewati garis tersebut agar tidak terjatuh.",
        ne: "स्टप लाइनमा अस्थायी रूपमा रोक्नुहोस्, र सुरक्षा पुष्टि गरेपछि, खस्नबाट जोगिनको लागि द्रुत रूपमा लाइन पार गर्नुहोस्।",
        my: "မှတ်တိုင်တွင် ခေတ္တရပ်ပြီး ဘေးကင်းကြောင်း အတည်ပြုပြီးနောက် ပြုတ်ကျခြင်းမဖြစ်စေရန် အမြန်ဖြတ်ပါ။"
      }
    },
    {
      key: "mistake",
      label: "よくある失敗",
      japanese: "一時停止不足、安全確認不足、踏切内で停止してしまうことがあります。",
translations: {
        vi: "Các lỗi thường gặp là không dừng hẳn, quan sát chưa đủ hoặc dừng trong đường sắt.",
        en: "Common mistakes are failing to stop completely, insufficient safety checks, or stopping on the tracks.",
        zh: "常见错误是停车不完全、确认不足、停在线路内。",
        pt: "Erros comuns são não parar completamente, verificar insuficientemente ou parar sobre os trilhos.",
        id: "Kendaraan tidak boleh berhenti sementara, tidak memeriksa keselamatan dengan baik, atau berhenti di perlintasan kereta api.",
        ne: "सवारी साधनहरू अस्थायी रूपमा नरोक्न सक्छन्, सुरक्षालाई राम्ररी जाँच नगर्ने वा रेलमार्ग क्रसिङहरूमा नरोक्न सक्छन्।",
        my: "ယာဉ်များသည် ခေတ္တရပ်တန့်ခြင်း မပြုရ၊ လုံခြုံရေးကို ကောင်းမွန်စွာ မစစ်ဆေးခြင်း သို့မဟုတ် ရထားလမ်းဆုံများတွင် ရပ်တန့်ခြင်း မပြုရပါ။"
      }
    },
    {
      key: "remember",
      label: "覚えておきたいこと",
      japanese: "『止まる・見る・聞く・すばやく通過』を必ず守りましょう。",
translations: {
        vi: "Hãy nhớ: Dừng - Quan sát - Lắng nghe - Đi qua nhanh.",
        en: "Remember: Stop, Look, Listen, then cross quickly.",
        zh: "牢记：停车、观察、倾听、迅速通过。",
        pt: "Lembre-se: Pare, Olhe, Ouça e atravesse rapidamente.",
        id: "Pastikan untuk mengikuti aturan ``berhenti, lihat, dengarkan, dan lewati dengan cepat.''",
        ne: "''रोक्नुहोस्, हेर्नुहोस्, सुन्नुहोस् र छिटो पास गर्नुहोस्'' को नियमहरू पालना गर्न निश्चित हुनुहोस्।",
        my: "``ရပ်၊ ကြည့်၊ နားထောင်၊ မြန်မြန် ကျော်ဖြတ်ပါ´ ဟူသော စည်းမျဉ်းများကို သေချာလိုက်နာပါ။"
      }
    },
    {
      key: "instruction",
      label: "教習で使う一言",
      japanese: "一時停止してください。左右を確認して、すばやく通過しましょう。",
translations: {
        vi: "Hãy dừng hẳn, kiểm tra hai bên rồi nhanh chóng đi qua.",
        en: "Stop completely, check both directions, then cross quickly.",
        zh: "请先停车，确认左右安全后迅速通过。",
        pt: "Pare completamente, verifique os dois lados e atravesse rapidamente.",
        id: "Harap jeda. Lihat ke kiri dan ke kanan dan lewati dengan cepat.",
        ne: "कृपया पज गर्नुहोस्। बायाँ र दायाँ हेर्नुहोस् र छिटो पास गर्नुहोस्।",
        my: "ခေတ္တရပ်ပါ။ ဘယ်ညာကြည့်ကာ မြန်မြန်ဖြတ်ပါ။"
      }
    }
  ]
},
{
  id: 21,
  stage: 1,
  title: "急加速と急発進時の措置",
  description: "急加速ができ、急発進したときにただちに停止できるようにします。",
  phraseCount: 18,

  sections: [
    {
      key: "point",
      label: "教官ワンポイント",
      japanese: "アクセルは必要以上に踏み込まず、落ち着いて操作しましょう。",
translations: {
        vi: "Không đạp ga quá mạnh, hãy bình tĩnh điều khiển.",
        en: "Do not press the accelerator excessively. Stay calm and control the vehicle.",
        zh: "不要过度踩油门，保持冷静操作。",
        pt: "Não pressione o acelerador excessivamente. Mantenha a calma.",
        id: "Jangan menginjak pedal gas lebih dari yang diperlukan dan operasikan dengan tenang.",
        ne: "एक्सेलेटरलाई आवश्यकताभन्दा बढी नथिच्नुहोस् र शान्तपूर्वक सञ्चालन गर्नुहोस्।",
        my: "အရှိန်မြှင့်စက်ကို လိုအပ်သည်ထက် ပိုမနှိပ်ပါနှင့် အေးအေးဆေးဆေး လည်ပတ်ပါ။"
      }
    },
    {
      key: "exam",
      label: "検定ポイント",
      japanese: "急加速後はアクセルを戻し、ブレーキで確実に停止します。",
translations: {
        vi: "Sau khi tăng tốc, nhả ga và phanh để dừng chính xác.",
        en: "After accelerating, release the accelerator and stop smoothly with the brake.",
        zh: "加速后立即松开油门并平稳停车。",
        pt: "Após acelerar, solte o acelerador e pare com segurança.",
        id: "Setelah akselerasi mendadak, lepaskan pedal gas dan injak rem untuk memastikan berhenti.",
        ne: "अचानक प्रवेग पछि, एक्सेलेटर छोड्नुहोस् र एक रोक सुनिश्चित गर्न ब्रेकहरू लागू गर्नुहोस्।",
        my: "ရုတ်တရက် အရှိန်မြှင့်ပြီးနောက် အရှိန်မြှင့်စက်ကို လွှတ်လိုက်ပြီး ရပ်တန့်ကြောင်း သေချာစေရန် ဘရိတ်ကို အသုံးပြုပါ။"
      }
    },
    {
      key: "mistake",
      label: "よくある失敗",
      japanese: "アクセルを踏み続ける、ブレーキが遅れる、慌ててしまうことがあります。",
translations: {
        vi: "Lỗi thường gặp là giữ ga quá lâu hoặc đạp phanh chậm.",
        en: "Common mistakes are keeping the accelerator pressed or braking too late.",
        zh: "常见错误是一直踩油门或刹车过晚。",
        pt: "Erros comuns são manter o acelerador pressionado ou frear tarde.",
        id: "Anda mungkin terus menginjak pedal gas, menunda pengereman, atau panik.",
        ne: "तपाईंले एक्सेलेटर थिचिरहन सक्नुहुन्छ, ब्रेक लगाउन ढिलो गर्न सक्नुहुन्छ वा आतंकित हुन सक्नुहुन्छ।",
        my: "သင်သည် အရှိန်မြှင့်စက်ကို ဆက်နှိပ်ခြင်း၊ ဘရိတ်နှောင့်နှေးခြင်း သို့မဟုတ် ထိတ်လန့်ခြင်းတို့ ဖြစ်နိုင်ပါသည်။"
      }
    },
    {
      key: "remember",
      label: "覚えておきたいこと",
      japanese: "『アクセルを戻す・ブレーキを踏む・落ち着く』を意識しましょう。",
translations: {
        vi: "Hãy nhớ: nhả ga, đạp phanh và giữ bình tĩnh.",
        en: "Remember: Release the accelerator, brake, and stay calm.",
        zh: "牢记：松油门、踩刹车、保持冷静。",
        pt: "Lembre-se: solte o acelerador, freie e mantenha a calma.",
        id: "Berhati-hatilah dalam ``mengembalikan pedal gas, menginjak rem, dan menenangkan diri.''",
        ne: "'एक्सलेरेटर फर्काउने, ब्रेकमा स्टेपिङ गर्ने र शान्त हुने' बारे सचेत हुनुहोस्।",
        my: "``အရှိန်မြှင့်၊ ဘရိတ်ကိုနင်းပြီး စိတ်တည်ငြိမ်အောင် ထိန်းပါ´´ ဟူသော သတိရှိပါ။"
      }
    },
    {
      key: "instruction",
      label: "教習で使う一言",
      japanese: "アクセルを戻してください。ブレーキを踏んで止まりましょう。",
translations: {
        vi: "Hãy nhả chân ga và đạp phanh để dừng xe.",
        en: "Release the accelerator and apply the brake.",
        zh: "请松开油门，踩下刹车停车。",
        pt: "Solte o acelerador e pise no freio.",
        id: "Silakan lepaskan akseleratornya. Injak rem dan berhenti.",
        ne: "कृपया एक्सेलेटर छोड्नुहोस्। ब्रेक मा कदम र रोक्नुहोस्।",
        my: "ကျေးဇူးပြု၍ အရှိန်မြှင့်စက်ကို လွှတ်ပါ။ ဘရိတ်ကိုနင်းပြီး ရပ်လိုက်ပါ။"
      }
    }
  ]
},
{
  id: 22,
  stage: 1,
  title: "教習効果の確認（みきわめ）",
  description: "第1段階の内容全般について、安全に気配りしながら、基本的な走行ができるようにします。",
  phraseCount: 18,

  sections: [
    {
      key: "point",
      label: "教官ワンポイント",
      japanese: "今まで学んだ内容を落ち着いて実践しましょう。",
translations: {
        vi: "Hãy bình tĩnh thực hiện những gì đã học.",
        en: "Calmly demonstrate everything you have learned.",
        zh: "冷静地发挥至今学到的内容。",
        pt: "Demonstre com calma tudo o que aprendeu.",
        id: "Tenanglah dan praktikkan apa yang telah Anda pelajari sejauh ini.",
        ne: "शान्त हुनुहोस् र तपाईंले अहिलेसम्म सिकेका कुराहरू व्यवहारमा राख्नुहोस्।",
        my: "အေးအေးဆေးဆေး သင်ယူပြီး လက်တွေ့ အကောင်အထည်ဖော်ပါ။"
      }
    },
    {
      key: "exam",
      label: "検定ポイント",
      japanese: "安全確認・合図・速度・走行位置・停止まで総合的に評価します。",
translations: {
        vi: "Đánh giá tổng hợp việc quan sát an toàn, tín hiệu, tốc độ, vị trí xe và dừng xe.",
        en: "Overall evaluation includes safety checks, signaling, speed, lane position and stopping.",
        zh: "综合评定安全确认、信号、速度、行驶位置及停车。",
        pt: "A avaliação inclui segurança, sinalização, velocidade, posição e parada.",
        id: "Kami mengevaluasi secara komprehensif pemeriksaan keselamatan, sinyal, kecepatan, posisi lari, dan berhenti.",
        ne: "हामी सुरक्षा जाँचहरू, संकेतहरू, गति, दौडने स्थिति, र रोक्नको लागि व्यापक रूपमा मूल्याङ्कन गर्छौं।",
        my: "ကျွန်ုပ်တို့သည် လုံခြုံရေးစစ်ဆေးမှုများ၊ အချက်ပြမှုများ၊ အမြန်နှုန်း၊ ပြေးနေသည့် အနေအထားနှင့် ရပ်တန့်ခြင်းတို့ကို အလုံးစုံ အကဲဖြတ်ပါသည်။"
      }
    },
    {
      key: "mistake",
      label: "よくある失敗",
      japanese: "確認不足や焦りによる操作ミスが多く見られます。",
translations: {
        vi: "Lỗi thường gặp là thiếu quan sát và mất bình tĩnh.",
        en: "Common mistakes are insufficient observation and rushing.",
        zh: "常见错误是确认不足和紧张操作。",
        pt: "Os erros mais comuns são falta de observação e pressa.",
        id: "Banyak kesalahan operasional terjadi karena kurangnya konfirmasi atau ketidaksabaran.",
        ne: "धेरै परिचालन त्रुटिहरू पुष्टिकरण वा अधीरताको कमीको कारण हुन्छ।",
        my: "အတည်ပြုချက်မရှိခြင်း သို့မဟုတ် စိတ်မရှည်ခြင်းတို့ကြောင့် လုပ်ငန်းလည်ပတ်မှုဆိုင်ရာ အမှားအယွင်းများစွာ ဖြစ်ပေါ်ပါသည်။"
      }
    },
    {
      key: "remember",
      label: "覚えておきたいこと",
      japanese: "『安全確認・落ち着いた運転・基本を守る』ことを意識しましょう。",
translations: {
        vi: "Hãy nhớ: quan sát an toàn, lái xe bình tĩnh và tuân thủ những điều cơ bản.",
        en: "Remember: Safety first, stay calm and follow the basics.",
        zh: "牢记：安全确认、沉着驾驶、遵守基本操作。",
        pt: "Lembre-se: segurança, calma e respeito aos fundamentos.",
        id: "Sadarlah dalam ``memeriksa keselamatan, mengemudi dengan tenang, dan mengikuti dasar-dasarnya.''",
        ne: "''सुरक्षा जाँच गर्ने, शान्तपूर्वक ड्राइभिङ गर्ने र आधारभूत कुराहरू पछ्याउने'' बारे सचेत हुनुहोस्।",
        my: "``ဘေးကင်းရေး စစ်ဆေးခြင်း၊ အေးအေးဆေးဆေး မောင်းနှင်ခြင်းနှင့် အခြေခံအချက်များအတိုင်း လိုက်နာဆောင်ရွက်ခြင်း´´ ကို သတိထားပါ။"
      }
    },
    {
      key: "instruction",
      label: "教習で使う一言",
      japanese: "いつもどおり落ち着いて運転してください。",
translations: {
        vi: "Hãy lái xe bình tĩnh như khi luyện tập.",
        en: "Drive calmly as you practiced.",
        zh: "像平时练习一样冷静驾驶。",
        pt: "Dirija com calma, como praticou.",
        id: "Seperti biasa, harap berkendara dengan tenang.",
        ne: "सधैं जस्तै, कृपया शान्त रूपमा ड्राइभ गर्नुहोस्।",
        my: "အစဉ်အတိုင်း အေးအေးဆေးဆေး မောင်းနှင်ပါ။"
      }
    }
  ]
},
{
  id: 23,
  stage: 2,
  title: "路上運転にあたっての注意と路上運転前の準備",
  description: "所内コースと実際の道路の違いを理解するとともに、路上運転をするにあたっての点検・準備を確実に行うことができるようにします。",
  phraseCount: 18,

  sections: [
    {
      key: "point",
      label: "教官ワンポイント",
      japanese: "路上では『認知・判断・操作』を常に意識し、安全確認を最優先にしましょう。",
translations: {
        vi: "Trên đường, hãy luôn ghi nhớ 'Nhận biết - Phán đoán - Điều khiển' và ưu tiên an toàn.",
        en: "On public roads, always focus on Recognition, Judgment and Operation. Safety comes first.",
        zh: "在实际道路驾驶时，要始终做到“认知、判断、操作”，并把安全放在第一位。",
        pt: "Na via pública, mantenha sempre Reconhecimento, Julgamento e Operação. Segurança em primeiro lugar.",
        id: "Di jalan, selalu waspada terhadap ``pengenalan, penilaian, dan pengoperasian'' dan jadikan konfirmasi keselamatan sebagai prioritas utama Anda.",
        ne: "सडकमा, सधैं ``मान्यता, निर्णय, र सञ्चालन'' बारे सचेत रहनुहोस् र सुरक्षा पुष्टिलाई आफ्नो शीर्ष प्राथमिकता बनाउनुहोस्।",
        my: "လမ်းပေါ်တွင် ``အသိအမှတ်ပြုမှု၊ စီရင်ဆုံးဖြတ်မှုနှင့် လုပ်ဆောင်ချက်´ ကို အမြဲသတိထားပြီး ဘေးကင်းကြောင်း အတည်ပြုချက်ကို သင်၏ထိပ်တန်းဦးစားပေးလုပ်ပါ။"
      }
    },
    {
      key: "exam",
      label: "検定ポイント",
      japanese: "車両点検・安全確認・周囲への気配りを行い、落ち着いて運転します。",
translations: {
        vi: "Kiểm tra xe, xác nhận an toàn và lái xe bình tĩnh.",
        en: "Inspect the vehicle, confirm safety and drive calmly.",
        zh: "做好车辆检查、安全确认，沉着驾驶。",
        pt: "Inspecione o veículo, confirme a segurança e dirija com calma.",
        id: "Lakukan inspeksi kendaraan, pemeriksaan keselamatan, perhatikan lingkungan sekitar, dan berkendara dengan tenang.",
        ne: "सवारी साधन निरीक्षण गर्नुहोस्, सुरक्षा जाँच गर्नुहोस्, आफ्नो वरपरको बारेमा विचार गर्नुहोस्, र शान्तपूर्वक ड्राइभ गर्नुहोस्।",
        my: "ယာဉ်စစ်ဆေးခြင်း၊ ဘေးကင်းရေးစစ်ဆေးခြင်း၊ သင့်ပတ်ဝန်းကျင်ကို ဂရုပြုပါ၊ အေးအေးဆေးဆေး မောင်းနှင်ပါ။"
      }
    },
    {
      key: "mistake",
      label: "よくある失敗",
      japanese: "周囲の確認不足や点検漏れ、焦った操作をしてしまうことがあります。",
translations: {
        vi: "Các lỗi thường gặp là kiểm tra chưa đủ hoặc thao tác vội vàng.",
        en: "Common mistakes are insufficient observation, skipped inspections and rushed operation.",
        zh: "常见错误是观察不足、检查遗漏和操作慌张。",
        pt: "Erros comuns são observação insuficiente, falta de inspeção e pressa.",
        id: "Hal ini dapat mengakibatkan kurangnya pemeriksaan terhadap lingkungan sekitar, kelalaian dalam inspeksi, atau pengoperasian yang tergesa-gesa.",
        ne: "यसले परिवेशको अपर्याप्त जाँच, निरीक्षणको बहिष्कार, वा हतार कार्यहरू हुन सक्छ।",
        my: "၎င်းသည် ပတ်ဝန်းကျင်ကို မလုံမလောက်စစ်ဆေးခြင်း၊ စစ်ဆေးခြင်းကို ပျက်ကွက်ခြင်း သို့မဟုတ် အလျင်စလိုလုပ်ဆောင်ခြင်းများကို ဖြစ်ပေါ်စေနိုင်သည်။"
      }
    },
    {
      key: "remember",
      label: "覚えておきたいこと",
      japanese: "『認知・判断・操作』と『点検・安全確認』を忘れないようにしましょう。",
translations: {
        vi: "Hãy luôn nhớ: Nhận biết - Phán đoán - Điều khiển và kiểm tra an toàn.",
        en: "Remember: Recognition, Judgment, Operation and Safety Inspection.",
        zh: "牢记：认知、判断、操作以及安全检查。",
        pt: "Lembre-se: Reconhecimento, Julgamento, Operação e Inspeção de Segurança.",
        id: "Jangan lupakan \"pengenalan, penilaian, dan pengoperasian\" serta \"inspeksi dan konfirmasi keselamatan\".",
        ne: "\"मान्यता, निर्णय, र सञ्चालन\" र \"निरीक्षण र सुरक्षा पुष्टिकरण\" नबिर्सौं।",
        my: "\"အသိအမှတ်ပြုမှု၊ စီရင်ချက်နှင့် ဆောင်ရွက်မှု\" နှင့် \"စစ်ဆေးရေးနှင့် ဘေးကင်းရေး အတည်ပြုချက်\" ကို မမေ့ပါနှင့်။"
      }
    },
    {
      key: "instruction",
      label: "教習で使う一言",
      japanese: "周囲をよく確認して、落ち着いて路上へ出ましょう。",
translations: {
        vi: "Quan sát kỹ xung quanh và bình tĩnh lái ra đường.",
        en: "Check your surroundings carefully and enter the road calmly.",
        zh: "请确认周围安全，冷静驶入道路。",
        pt: "Verifique bem ao redor e entre na via com calma.",
        id: "Periksa sekeliling Anda dengan hati-hati dan tetap tenang sebelum berangkat ke jalan raya.",
        ne: "आफ्नो वरपर सावधानीपूर्वक जाँच गर्नुहोस् र सडकमा निस्कनु अघि शान्त रहनुहोस्।",
        my: "သင့်ပတ်ဝန်းကျင်ကို ဂရုတစိုက်စစ်ဆေးပြီး လမ်းပေါ်မထွက်မီ ငြိမ်သက်နေပါ။"
      }
    }
  ]
},
{
  id: 24,
  stage: 2,
  title: "交通の流れにあわせた走行",
  description: "交通の流れに機敏かつ安全に入ることができ、流れにあわせた速度を選び、適切な車間距離をとることができるようにします。",
  phraseCount: 18,

  sections: [
    {
      key: "point",
      label: "教官ワンポイント",
      japanese: "流れに入るときは、タイミングを見て、力強く加速し、後続車に迷惑をかけないようにしましょう。",
translations: {
        vi: "Khi nhập vào dòng xe, hãy chọn đúng thời điểm, tăng tốc dứt khoát và không gây cản trở xe phía sau.",
        en: "When joining traffic, choose the right timing, accelerate firmly, and avoid disturbing following vehicles.",
        zh: "进入车流时，要把握时机，果断加速，不要影响后方车辆。",
        pt: "Ao entrar no fluxo do trânsito, escolha o momento certo, acelere com firmeza e não atrapalhe os veículos de trás.",
        id: "Saat memasuki arus, pastikan mengatur waktu dan akselerasi dengan kuat agar tidak mengganggu kendaraan di belakang Anda.",
        ne: "प्रवाहमा प्रवेश गर्दा, आफ्नो समय निश्चित गर्नुहोस् र शक्तिशाली रूपमा गति गर्नुहोस् ताकि तपाईंको पछाडिका सवारीहरूलाई बाधा नपरोस्।",
        my: "စီးဆင်းမှုသို့ဝင်ရောက်သည့်အခါ၊ သင့်နောက်ကွယ်ရှိယာဉ်များကို မနှောင့်ယှက်စေရန်အတွက် သင့်အချိန်ကိုသေချာချိန်ပြီး အရှိန်မြှင့်ပါ။"
      }
    },
    {
      key: "exam",
      label: "検定ポイント",
      japanese: "交通の流れにあわせた速度を選び、前車との車間距離を十分に保ちます。",
translations: {
        vi: "Chọn tốc độ phù hợp với dòng xe và giữ khoảng cách an toàn với xe phía trước.",
        en: "Choose a speed that matches traffic flow and keep a safe following distance.",
        zh: "选择与交通流相符的速度，并与前车保持足够车距。",
        pt: "Escolha uma velocidade adequada ao fluxo do trânsito e mantenha distância segura do veículo da frente.",
        id: "Pilih kecepatan yang sesuai dengan arus lalu lintas dan jaga jarak yang cukup dari kendaraan di depan.",
        ne: "ट्राफिकको प्रवाहसँग मेल खाने गति छनोट गर्नुहोस् र अगाडिको गाडीबाट पर्याप्त दूरी कायम गर्नुहोस्।",
        my: "ယာဉ်အသွားအလာ စီးဆင်းမှုနှင့် ကိုက်ညီသော အမြန်နှုန်းကို ရွေးချယ်ပြီး ရှေ့ယာဉ်နှင့် လုံလောက်သော အကွာအဝေးကို ထိန်းသိမ်းပါ။"
      }
    },
    {
      key: "mistake",
      label: "よくある失敗",
      japanese: "合流後の加速が弱い、流れより遅い、車間距離が近すぎることがあります。",
translations: {
        vi: "Lỗi thường gặp là tăng tốc yếu sau khi nhập làn, chạy chậm hơn dòng xe hoặc giữ khoảng cách quá gần.",
        en: "Common mistakes are weak acceleration after merging, driving slower than the flow, or following too closely.",
        zh: "常见错误是汇入后加速不足、速度低于车流、车距过近。",
        pt: "Erros comuns são acelerar pouco após entrar, dirigir mais devagar que o fluxo ou seguir muito perto.",
        id: "Akselerasi setelah penggabungan mungkin lemah, kecepatan mungkin lebih lambat dari arus, atau jarak berikut mungkin terlalu dekat.",
        ne: "मर्ज पछि प्रवेग कमजोर हुन सक्छ, गति वर्तमान भन्दा ढिलो हुन सक्छ, वा निम्न दूरी धेरै नजिक हुन सक्छ।",
        my: "ပေါင်းစပ်ပြီးနောက် အရှိန်သည် အားနည်းနိုင်သည်၊ အရှိန်သည် လက်ရှိထက် နှေးနေနိုင်သည်၊ သို့မဟုတ် အောက်ပါအကွာအဝေးသည် အလွန်နီးကပ်နေနိုင်သည်။"
      }
    },
    {
      key: "remember",
      label: "覚えておきたいこと",
      japanese: "『タイミング・加速・流れに合った速度・安全な車間距離』を意識しましょう。",
translations: {
        vi: "Hãy nhớ: thời điểm, tăng tốc, tốc độ phù hợp với dòng xe và khoảng cách an toàn.",
        en: "Remember: timing, acceleration, speed matching traffic flow, and safe following distance.",
        zh: "牢记：时机、加速、符合车流的速度、安全车距。",
        pt: "Lembre-se: momento certo, aceleração, velocidade adequada ao fluxo e distância segura.",
        id: "Waspadai ``waktu, akselerasi, kecepatan yang sesuai dengan arus, dan jarak aman berikut ini.''",
        ne: "``समय, प्रवेग, प्रवाहसँग मेल खाने गति, र सुरक्षित निम्न दूरी' बारे सचेत रहनुहोस्।",
        my: "``အချိန်၊ အရှိန်၊ စီးဆင်းမှုနှင့် ကိုက်ညီသော အမြန်နှုန်း၊ နှင့် ဘေးကင်းသော အကွာအဝေးကို သတိထားပါ။"
      }
    },
    {
      key: "instruction",
      label: "教習で使う一言",
      japanese: "流れに合わせて加速してください。前の車との車間距離も保ちましょう。",
translations: {
        vi: "Hãy tăng tốc theo dòng xe và giữ khoảng cách với xe phía trước.",
        en: "Accelerate to match the traffic flow and keep distance from the car ahead.",
        zh: "请配合车流加速，并与前车保持车距。",
        pt: "Acelere acompanhando o fluxo e mantenha distância do veículo da frente.",
        id: "Percepat dengan arus. Jaga juga jarak dengan mobil di depan Anda.",
        ne: "प्रवाह संग गति। आफ्नो अगाडिको कारबाट पनि दूरी राख्नुहोस्।",
        my: "စီးဆင်းမှုနှင့်အတူအရှိန်မြှင့်။ ရှေ့ကားနှင့်လည်း ခပ်ဝေးဝေးထားပါ။"
      }
    }
  ]
},
{
  id: 25,
  stage: 2,
  title: "適切な通行位置",
  description: "道路の形状や交通状況に応じて、安全で適切な通行位置を選べるようにします。",
  phraseCount: 18,

  sections: [
    {
      key: "point",
      label: "教官ワンポイント",
      japanese: "道路の形状や障害物、対向車を早く認識し、安全な通行位置を選びましょう。",
translations: {
        vi: "Hãy sớm nhận biết hình dạng đường, chướng ngại vật và xe đối diện để chọn vị trí chạy an toàn.",
        en: "Recognize the road shape, obstacles and oncoming vehicles early, then choose a safe driving position.",
        zh: "提前观察道路形状、障碍物和对向车辆，选择安全的通行位置。",
        pt: "Observe cedo o formato da via, obstáculos e veículos em sentido contrário para escolher uma posição segura.",
        id: "Kenali dengan cepat bentuk jalan, rintangan, dan kendaraan yang melaju, serta pilih posisi jalur yang aman.",
        ne: "द्रुत रूपमा सडकको आकार, अवरोधहरू, र आउँदै गरेको सवारी साधनहरू पहिचान गर्नुहोस्, र सुरक्षित मार्ग स्थान छनौट गर्नुहोस्।",
        my: "လမ်း၏ပုံသဏ္ဍာန်၊ အတားအဆီးများနှင့် လာမည့်ယာဉ်များ၏ ပုံသဏ္ဍာန်ကို လျင်မြန်စွာ မှတ်မိပြီး ဘေးကင်းလုံခြုံသော လမ်းကြောင်းအနေအထားကို ရွေးချယ်ပါ။"
      }
    },
    {
      key: "exam",
      label: "検定ポイント",
      japanese: "道路状況に応じて適切な通行位置を選び、安全な側方間隔を保ちながら走行します。",
translations: {
        vi: "Chọn vị trí phù hợp với tình trạng đường và giữ khoảng cách an toàn khi lái xe.",
        en: "Choose an appropriate road position and maintain safe side clearance.",
        zh: "根据道路情况选择合适的通行位置，并保持安全侧方距离。",
        pt: "Escolha uma posição adequada e mantenha distância lateral segura.",
        id: "Pilih posisi lalu lintas yang sesuai tergantung pada kondisi jalan dan berkendaralah dengan tetap menjaga jarak lateral yang aman.",
        ne: "सडकको अवस्था अनुसार उपयुक्त ट्राफिक स्थिति छनौट गर्नुहोस् र सुरक्षित पार्श्व दूरी कायम गर्दै ड्राइभ गर्नुहोस्।",
        my: "လမ်းအခြေအနေပေါ်မူတည်၍ သင့်လျော်သော ယာဉ်ကြောအနေအထားကို ရွေးချယ်ပြီး ဘေးကင်းသော ဘေးအကွာအဝေးကို ထိန်းသိမ်းထားစဉ် မောင်းနှင်ပါ။"
      }
    },
    {
      key: "mistake",
      label: "よくある失敗",
      japanese: "道路の中央寄りや左寄りになり過ぎたり、障害物との間隔が狭くなることがあります。",
translations: {
        vi: "Thường chạy quá sát giữa đường hoặc quá sát mép đường, khoảng cách với chướng ngại vật quá hẹp.",
        en: "Common mistakes are driving too close to the center or edge, or leaving too little clearance.",
        zh: "常见错误是过于靠近道路中央、路边或障碍物。",
        pt: "Erros comuns são dirigir muito próximo ao centro, à margem ou aos obstáculos.",
        id: "Hal ini dapat menyebabkan Anda bergerak terlalu jauh ke tengah atau kiri jalan, atau jarak antara Anda dan rintangan menjadi sempit.",
        ne: "यसले तपाईंलाई सडकको बीचमा वा बायाँतिर धेरै टाढा जान सक्छ, वा तपाईं र अवरोधहरू बीचको दूरी साँघुरो हुन सक्छ।",
        my: "၎င်းသည် သင့်အား လမ်း၏ဗဟို သို့မဟုတ် ဘယ်ဘက်သို့ ဝေးဝေးရွှေ့သွားစေနိုင်သည်၊ သို့မဟုတ် သင်နှင့် အတားအဆီးများကြားရှိ အကွာအဝေးသည် ကျဉ်းသွားနိုင်သည်။"
      }
    },
    {
      key: "remember",
      label: "覚えておきたいこと",
      japanese: "『認知・判断・操作』を早めに行い、安全な通行位置を維持しましょう。",
translations: {
        vi: "Hãy luôn ghi nhớ: Nhận biết - Phán đoán - Điều khiển để giữ vị trí chạy an toàn.",
        en: "Remember: Recognize, Judge and Operate early to maintain a safe road position.",
        zh: "牢记：提前认知、判断、操作，保持安全通行位置。",
        pt: "Lembre-se: reconhecer, julgar e agir cedo para manter uma posição segura.",
        id: "Pastikan untuk \"mengenali, menilai, dan mengoperasikan\" dengan cepat dan menjaga posisi jalur yang aman.",
        ne: "चाँडै \"चिन्न, न्याय, र सञ्चालन\" र सुरक्षित मार्ग स्थिति कायम राख्न निश्चित हुनुहोस्।",
        my: "လျင်မြန်စွာ \"အသိအမှတ်ပြု၊ စီရင်ခြင်းနှင့် လည်ပတ်ခြင်း\" ကို သေချာစေပြီး လုံခြုံသောလမ်းကြောင်းအနေအထားကို ထိန်းသိမ်းပါ။"
      }
    },
    {
      key: "instruction",
      label: "教習で使う一言",
      japanese: "左側の安全な位置を保って走行してください。",
translations: {
        vi: "Hãy giữ vị trí an toàn bên trái khi lái xe.",
        en: "Keep a safe position on the left side.",
        zh: "请保持左侧安全位置行驶。",
        pt: "Mantenha uma posição segura do lado esquerdo da via.",
        id: "Harap menjaga posisi aman di sisi kiri.",
        ne: "कृपया बायाँ छेउमा सुरक्षित स्थिति राख्नुहोस्।",
        my: "ကျေးဇူးပြု၍ ဘယ်ဘက်ခြမ်းတွင် ဘေးကင်းသော အနေအထားကို ထားပါ။"
      }
    }
  ]
},
{
  id: 26,
  stage: 2,
  title: "進路変更",
  description: "交通の状況を的確に読み取り、タイミングよく進路変更ができるようにします。",
  phraseCount: 18,

  sections: [
    {
      key: "point",
      label: "教官ワンポイント",
      japanese: "進路変更は後方・側方との距離と速度をよく見きわめ、無理をせず早めに判断しましょう。",
translations: {
        vi: "Khi đổi làn, hãy quan sát kỹ khoảng cách và tốc độ của xe phía sau, bên cạnh, rồi quyết định sớm.",
        en: "When changing course, judge the distance and speed of vehicles behind and beside you, and decide early.",
        zh: "变更路线时，要判断后方和侧方车辆的距离与速度，提前做出决定。",
        pt: "Ao mudar de faixa, avalie a distância e a velocidade dos veículos atrás e ao lado, e decida com antecedência.",
        id: "Saat mengubah arah, hati-hati menilai jarak dan kecepatan ke belakang dan samping, dan mengambil keputusan dengan cepat tanpa berlebihan.",
        ne: "पाठ्यक्रम परिवर्तन गर्दा, पछाडि र छेउको दूरी र गतिलाई सावधानीपूर्वक मूल्याङ्कन गर्नुहोस्, र यसलाई अधिक नगरी छिटो निर्णय गर्नुहोस्।",
        my: "သင်တန်းပြောင်းသည့်အခါ အနောက်နှင့် ဘေးနှစ်ဖက်ဆီသို့ အကွာအဝေးနှင့် အမြန်နှုန်းကို ဂရုတစိုက်အကဲဖြတ်ပြီး ၎င်းကို အလွန်အကျွံမလုပ်ဘဲ အမြန်ဆုံးဖြတ်ပါ။"
      }
    },
    {
      key: "exam",
      label: "検定ポイント",
      japanese: "ルームミラー・ドアミラー・目視で確認し、合図を出して、安全なタイミングで進路変更します。",
translations: {
        vi: "Kiểm tra gương trong, gương ngoài và điểm mù, bật tín hiệu rồi đổi làn khi an toàn.",
        en: "Check the rearview mirror, side mirror and blind spot, signal, then change course safely.",
        zh: "确认车内后视镜、车门后视镜和盲区，打灯后在安全时机变更路线。",
        pt: "Verifique o retrovisor interno, lateral e ponto cego, sinalize e mude de faixa com segurança.",
        id: "Periksa kaca spion, kaca spion, dan secara visual, berikan isyarat, dan ubah haluan pada waktu yang aman.",
        ne: "रियरभ्यू मिरर, डोर मिरर, र दृश्यात्मक रूपमा जाँच गर्नुहोस्, संकेत दिनुहोस्, र सुरक्षित समयमा पाठ्यक्रम परिवर्तन गर्नुहोस्।",
        my: "နောက်ကြည့်မှန်၊ တံခါးမှန်၊ အမြင်အာရုံကို စစ်ဆေးပါ၊ အချက်ပြပြီး ဘေးကင်းသောအချိန်တွင် လမ်းကြောင်းပြောင်းပါ။"
      }
    },
    {
      key: "mistake",
      label: "よくある失敗",
      japanese: "合図が遅い、目視確認を忘れる、後続車との距離や速度を見誤ることがあります。",
translations: {
        vi: "Lỗi thường gặp là bật tín hiệu muộn, quên nhìn trực tiếp hoặc đánh giá sai khoảng cách và tốc độ xe phía sau.",
        en: "Common mistakes are late signaling, forgetting the shoulder check, and misjudging distance or speed.",
        zh: "常见错误是打灯过晚、忘记目视确认、误判后车距离和速度。",
        pt: "Erros comuns são sinalizar tarde, esquecer de olhar diretamente e avaliar mal a distância ou velocidade.",
        id: "Anda mungkin lambat memberi sinyal, lupa memeriksa secara visual, atau salah menilai jarak atau kecepatan kendaraan di belakang Anda.",
        ne: "तपाईं संकेत गर्न ढिलो हुन सक्नुहुन्छ, भिजुअल रूपमा जाँच गर्न बिर्सन सक्नुहुन्छ, वा तपाईंको पछाडिको गाडीको दूरी वा गति गलत अनुमान गर्न सक्नुहुन्छ।",
        my: "အချက်ပြရန် နှေးကွေးခြင်း၊ အမြင်အာရုံစစ်ဆေးရန် မေ့လျော့ခြင်း သို့မဟုတ် သင့်နောက်မှ ယာဉ်၏ အကွာအဝေး သို့မဟုတ် အရှိန်ကို လွဲမှားစေနိုင်ပါသည်။"
      }
    },
    {
      key: "remember",
      label: "覚えておきたいこと",
      japanese: "『後続車の有無・距離・速度・動き』をつかんでから進路変更しましょう。",
translations: {
        vi: "Hãy nắm rõ xe phía sau, khoảng cách, tốc độ và chuyển động trước khi đổi làn.",
        en: "Understand the following vehicle, distance, speed and movement before changing course.",
        zh: "变更路线前，要掌握后车有无、距离、速度和动向。",
        pt: "Antes de mudar de faixa, entenda se há veículo atrás, a distância, a velocidade e o movimento.",
        id: "Pastikan untuk memeriksa keberadaan, jarak, kecepatan, dan pergerakan kendaraan berikut sebelum mengubah haluan.",
        ne: "पाठ्यक्रम परिवर्तन गर्नु अघि निम्न गाडीको उपस्थिति, दूरी, गति, र चाल जाँच गर्न निश्चित हुनुहोस्।",
        my: "သင်တန်းမပြောင်းမီ အောက်ပါယာဉ်၏တည်ရှိမှု၊ အကွာအဝေး၊ အရှိန်နှင့် ရွေ့လျားမှုကို သေချာစစ်ဆေးပါ။"
      }
    },
    {
      key: "instruction",
      label: "教習で使う一言",
      japanese: "ミラーと目視で後方を確認してください。安全なら合図を出して進路変更しましょう。",
translations: {
        vi: "Hãy kiểm tra phía sau bằng gương và nhìn trực tiếp. Nếu an toàn, bật tín hiệu và đổi làn.",
        en: "Check behind with the mirrors and shoulder check. If safe, signal and change course.",
        zh: "请通过后视镜和目视确认后方。安全后打灯变更路线。",
        pt: "Verifique atrás pelos espelhos e olhando diretamente. Se estiver seguro, sinalize e mude de faixa.",
        id: "Periksa bagian belakang menggunakan kaca spion dan mata Anda. Jika aman untuk melakukannya, berikan isyarat dan ubah arah.",
        ne: "ऐना र आफ्नो आँखा प्रयोग गरेर पछाडि जाँच गर्नुहोस्। यदि यो गर्न सुरक्षित छ भने, संकेत दिनुहोस् र पाठ्यक्रम परिवर्तन गर्नुहोस्।",
        my: "မှန်နှင့် သင့်မျက်လုံးကို အသုံးပြု၍ အနောက်ကို စစ်ဆေးပါ။ ထိုသို့ပြုလုပ်ရန် အန္တရာယ်ကင်းပါက အချက်ပြပြီး သင်တန်းပြောင်းပါ။"
      }
    }
  ]
},
{
  id: 27,
  stage: 2,
  title: "信号・標識・標示などに従った運転",
  description: "信号・標識・標示などを的確に読み取り、適切に対応できるようにします。",
  phraseCount: 18,

  sections: [
    {
      key: "point",
      label: "教官ワンポイント",
      japanese: "信号だけでなく、標識・標示・歩行者・周囲の状況も同時に確認しましょう。",
translations: {
        vi: "Không chỉ quan sát đèn tín hiệu mà còn phải chú ý biển báo, vạch kẻ đường, người đi bộ và tình hình xung quanh.",
        en: "Watch not only the traffic lights but also road signs, markings, pedestrians and surrounding traffic.",
        zh: "不仅要看信号灯，还要观察标志、标线、行人和周围交通情况。",
        pt: "Observe não apenas os semáforos, mas também as placas, marcas viárias, pedestres e o trânsito ao redor.",
        id: "Periksa tidak hanya lampu lalu lintas, tetapi juga rambu, marka, pejalan kaki, dan kondisi sekitar secara bersamaan.",
        ne: "एकै समयमा ट्राफिक लाइटहरू मात्र होइन, तर चिन्हहरू, चिन्हहरू, पैदल यात्रीहरू र वरपरको अवस्थाहरू पनि जाँच गर्नुहोस्।",
        my: "မီးပွိုင့်များသာမက ဆိုင်းဘုတ်များ၊ အမှတ်အသားများ၊ လမ်းသွားလမ်းလာများနှင့် ပတ်ဝန်းကျင်အခြေအနေများကိုပါ တစ်ပြိုင်နက် စစ်ဆေးပါ။"
      }
    },
    {
      key: "exam",
      label: "検定ポイント",
      japanese: "信号や標識・標示を見落とさず、安全確認を行いながら適切に走行します。",
translations: {
        vi: "Không bỏ sót đèn tín hiệu, biển báo hay vạch kẻ đường và luôn xác nhận an toàn khi lái xe.",
        en: "Do not overlook traffic lights, signs or road markings, and always confirm safety.",
        zh: "不要遗漏信号灯、标志和标线，并始终确认安全。",
        pt: "Não deixe de observar semáforos, placas ou marcas viárias e confirme sempre a segurança.",
        id: "Berkendaralah dengan benar sambil memeriksa keselamatan dan tidak mengabaikan lampu, rambu, dan marka lalu lintas.",
        ne: "सुरक्षा जाँच गर्दा र ट्राफिक बत्ती, संकेत र चिन्हहरूलाई बेवास्ता नगरी उचित रूपमा ड्राइभ गर्नुहोस्।",
        my: "ဘေးအန္တရာယ်ကင်းရှင်းရေး စစ်ဆေးပြီး မီးပွိုင့်များ၊ ဆိုင်းဘုတ်များနှင့် အမှတ်အသားများကို မမြင်ဘဲ သင့်လျော်စွာ မောင်းနှင်ပါ။"
      }
    },
    {
      key: "mistake",
      label: "よくある失敗",
      japanese: "信号だけを見てしまい、標識や標示、歩行者への注意が不足することがあります。",
translations: {
        vi: "Lỗi thường gặp là chỉ nhìn đèn tín hiệu mà bỏ qua biển báo, vạch kẻ đường hoặc người đi bộ.",
        en: "A common mistake is focusing only on the traffic light and missing signs, markings or pedestrians.",
        zh: "常见错误是只看信号灯，而忽略标志、标线或行人。",
        pt: "Um erro comum é olhar apenas o semáforo e ignorar placas, marcas viárias ou pedestres.",
        id: "Anda mungkin hanya melihat lampu lalu lintas dan kurang memperhatikan rambu, marka, dan pejalan kaki.",
        ne: "तपाईंले ट्राफिक लाइटहरू मात्र हेरिरहनुभएको छ र संकेतहरू, चिन्हहरू, र पैदल यात्रुहरूमा पर्याप्त ध्यान दिनुहुन्न।",
        my: "မီးပွိုင့်များကိုသာကြည့်ကာ ဆိုင်းဘုတ်များ၊ အမှတ်အသားများနှင့် လမ်းသွားလမ်းလာများကို လုံလောက်စွာ ဂရုမစိုက်ဘဲ အဆုံးသတ်သွားနိုင်သည်။"
      }
    },
    {
      key: "remember",
      label: "覚えておきたいこと",
      japanese: "道路には多くの情報があります。自分の運転に必要な情報を選んで確認しましょう。",
translations: {
        vi: "Trên đường có rất nhiều thông tin. Hãy chọn và quan sát những thông tin cần thiết cho việc lái xe.",
        en: "There is a lot of information on the road. Select the information necessary for your driving.",
        zh: "道路上信息很多，要选择与自己驾驶有关的重要信息。",
        pt: "Há muitas informações na via. Escolha aquelas que são importantes para sua condução.",
        id: "Ada banyak informasi di jalan. Pilih dan periksa informasi yang Anda butuhkan untuk mengemudi Anda.",
        ne: "बाटोमा धेरै जानकारी छ। आफ्नो ड्राइभिङको लागि आवश्यक जानकारी चयन गर्नुहोस् र जाँच गर्नुहोस्।",
        my: "လမ်းမှာ အချက်အလက်တွေ အများကြီးရှိတယ်။ သင့်ကားမောင်းရန်အတွက် သင်လိုအပ်သော အချက်အလက်များကို ရွေးချယ်ပြီး စစ်ဆေးပါ။"
      }
    },
    {
      key: "instruction",
      label: "教習で使う一言",
      japanese: "信号だけではなく、標識・標示もしっかり確認してください。",
translations: {
        vi: "Đừng chỉ nhìn đèn tín hiệu, hãy kiểm tra cả biển báo và vạch kẻ đường.",
        en: "Check not only the traffic light but also the road signs and markings.",
        zh: "不仅要看信号灯，也请确认标志和标线。",
        pt: "Observe não apenas o semáforo, mas também as placas e as marcas viárias.",
        id: "Pastikan untuk memeriksa tidak hanya lampu lalu lintas, tetapi juga rambu dan marka.",
        ne: "ट्राफिक लाइटहरू मात्र होइन, संकेत र चिन्हहरू पनि जाँच गर्न निश्चित हुनुहोस्।",
        my: "မီးပွိုင့်များသာမက ဆိုင်းဘုတ်များနှင့် အမှတ်အသားများကိုလည်း သေချာစစ်ဆေးပါ။"
      }
    }
  ]
},
{
  id: 28,
  stage: 2,
  title: "交差点の通行",
  description: "交差点とその付近の交通に対する気配りができ、安全な速度と方法で通行できるようにします。",
  phraseCount: 18,

  sections: [
    {
      key: "point",
      label: "教官ワンポイント",
      japanese: "交差点では前車・対向車・歩行者・自転車を早めに確認し、見落としがないようにしましょう。",
translations: {
        vi: "Tại giao lộ, hãy kiểm tra sớm xe phía trước, xe đối diện, người đi bộ và xe đạp để không bỏ sót nguy hiểm.",
        en: "At intersections, check the car ahead, oncoming vehicles, pedestrians and bicycles early.",
        zh: "在交叉路口，要提前确认前车、对向车、行人和自行车，避免遗漏危险。",
        pt: "Nos cruzamentos, verifique cedo o veículo à frente, veículos em sentido contrário, pedestres e bicicletas.",
        id: "Di persimpangan, pastikan untuk memeriksa kendaraan di depan Anda, kendaraan yang melaju, pejalan kaki, dan sepeda lebih awal agar tidak ada yang terlewat.",
        ne: "चौराहेहरूमा, आफ्नो अगाडिका सवारी साधनहरू, आउँदै गरेको सवारी, पैदल यात्रीहरू र साइकलहरू छिट्टै जाँच गर्नुहोस् ताकि तपाईंले केही पनि नछुटाउनुहोला।",
        my: "လမ်းဆုံများတွင် သင့်ရှေ့မှ မော်တော်ယဉ်များ၊ လာမည့်ယာဉ်များ၊ လမ်းသွားလမ်းလာများနှင့် စက်ဘီးများကို စောစီးစွာ စစ်ဆေးပါရန် သတိပြုပါ။"
      }
    },
    {
      key: "exam",
      label: "検定ポイント",
      japanese: "直進・左折・右折それぞれで、安全確認、速度調整、進行方向の確認を確実に行います。",
translations: {
        vi: "Ao seguir em frente, virar à esquerda ou à direita, confirme a segurança, ajuste a velocidade e verifique a direção.",
        en: "For going straight, turning left or right, confirm safety, adjust speed and check your direction.",
        zh: "直行、左转、右转时，都要确认安全、调整速度并确认行进方向。",
        pt: "Ao seguir em frente, virar à esquerda ou à direita, confirme a segurança, ajuste a velocidade e verifique a direção.",
        id: "Saat berjalan lurus, belok kiri, atau belok kanan, kami memeriksa keselamatan dengan andal, menyesuaikan kecepatan, dan memastikan arah perjalanan.",
        ne: "सीधा जाँदा, बायाँ घुम्दा, वा दायाँ घुम्दा, हामी भरपर्दो रूपमा सुरक्षा जाँच गर्छौं, गति समायोजन गर्छौं, र यात्राको दिशा पुष्टि गर्छौं।",
        my: "တည့်တည့်သွားခြင်း၊ ဘယ်ကွေ့ခြင်း သို့မဟုတ် ညာကွေ့သည့်အခါတွင် ကျွန်ုပ်တို့သည် လုံခြုံမှုကို စိတ်ချယုံကြည်စွာ စစ်ဆေးပြီး၊ အမြန်နှုန်းကို ချိန်ညှိကာ ခရီးလမ်းကြောင်းကို အတည်ပြုပါသည်။"
      }
    },
    {
      key: "mistake",
      label: "よくある失敗",
      japanese: "前車だけを見てしまい、横断歩道の歩行者や二輪車、対向車の確認が不足することがあります。",
translations: {
        vi: "Lỗi thường gặp là chỉ nhìn xe phía trước và không quan sát đủ người đi bộ, xe máy hoặc xe đối diện.",
        en: "A common mistake is focusing only on the car ahead and missing pedestrians, motorcycles or oncoming vehicles.",
        zh: "常见错误是只看前车，忽略横断步道上的行人、二轮车和对向车。",
        pt: "Um erro comum é olhar apenas o carro da frente e não verificar pedestres, motos ou veículos em sentido contrário.",
        id: "Anda mungkin hanya melihat kendaraan di depan Anda dan tidak dapat memeriksa pejalan kaki, sepeda motor, atau kendaraan yang melaju di penyeberangan.",
        ne: "तपाईंले आफ्नो अगाडिको गाडीलाई मात्र हेरिरहनु भएको छ र क्रसवाकमा पैदल यात्रीहरू, मोटरसाइकलहरू, वा आउँदै गरेको सवारीहरू जाँच गर्न सक्षम नहुन सक्नुहुन्छ।",
        my: "သင့်ရှေ့က ယာဉ်ကိုသာ ကြည့်နိုင်ပြီး လမ်းသွားလမ်းလာများ၊ ဆိုင်ကယ်များ၊ သို့မဟုတ် လမ်းဆုံလမ်းခွတွင် လာမည့်ယာဉ်များကို စစ်ဆေးနိုင်ခြင်းမရှိပေ။"
      }
    },
    {
      key: "remember",
      label: "覚えておきたいこと",
      japanese: "『前方・左右・後方・死角』をくり返し確認し、迷うときは無理をせず待ちましょう。",
translations: {
        vi: "Hãy kiểm tra nhiều lần phía trước, hai bên, phía sau và điểm mù. Se tiver dúvida, espere sem forçar.",
        en: "Repeatedly check ahead, both sides, behind and blind spots. If unsure, wait and do not force it.",
        zh: "反复确认前方、左右、后方和盲区。犹豫时不要勉强，等待安全时机。",
        pt: "Verifique repetidamente à frente, aos lados, atrás e os pontos cegos. Se tiver dúvida, espere.",
        id: "Periksa bagian depan, kiri dan kanan, belakang, dan titik buta berulang kali, dan bila ragu jangan memaksakan diri dan menunggu.",
        ne: "अगाडि, बायाँ र दायाँ, पछाडि, र अन्धा स्पटहरू बारम्बार जाँच गर्नुहोस्, र शंकामा, आफैलाई बल नगर्नुहोस् र पर्खनुहोस्।",
        my: "ရှေ့၊ ဘယ်၊ညာ၊ နောက်၊ နှင့် မျက်မမြင်အစက်အပြောက်များကို ထပ်ခါတလဲလဲစစ်ဆေးပါ၊ သံသယရှိလျှင် သင့်ကိုယ်သင် အတင်းမစောင့်ပါနှင့်။"
      }
    },
    {
      key: "instruction",
      label: "教習で使う一言",
      japanese: "交差点です。歩行者、自転車、対向車をよく確認して、安全なら進みましょう。",
translations: {
        vi: "Đến giao lộ rồi. Hãy kiểm tra kỹ người đi bộ, xe đạp và xe đối diện. Nếu an toàn, siga em frente.",
        en: "Intersection ahead. Check pedestrians, bicycles and oncoming vehicles carefully, then proceed if safe.",
        zh: "前方是交叉路口。请认真确认行人、自行车和对向车，安全后再前进。",
        pt: "Há um cruzamento à frente. Verifique pedestres, bicicletas e veículos em sentido contrário, e siga se for seguro.",
        id: "Ini adalah persimpangan. Periksa dengan cermat keberadaan pejalan kaki, pengendara sepeda, dan kendaraan yang melaju, dan lanjutkan jika aman untuk melakukannya.",
        ne: "यो एउटा प्रतिच्छेदन हो। पैदल यात्रीहरू, साइकल चालकहरू, र आउँदै गरेको सवारीहरूको लागि सावधानीपूर्वक जाँच गर्नुहोस्, र यदि यो गर्न सुरक्षित छ भने अगाडि बढ्नुहोस्।",
        my: "လမ်းဆုံတစ်ခုဖြစ်သည်။ လမ်းသွားလမ်းလာများ၊ စက်ဘီးစီးသူများနှင့် လာမည့်ယာဉ်များအတွက် ဂရုတစိုက်စစ်ဆေးပြီး ထိုသို့ပြုလုပ်ရန် အန္တရာယ်ရှိမရှိ ဆက်လက်လုပ်ဆောင်ပါ။"
      }
    }
  ]
},
{
  id: 29,
  stage: 2,
  title: "歩行者などの保護",
  description: "歩行者や自転車の動きを的確に読みとり、安全に通行させるための気配りができるようにします。",
  phraseCount: 18,

  sections: [
    {
      key: "point",
      label: "教官ワンポイント",
      japanese: "歩行者や自転車を見つけたら、早めに速度を落とし十分な間隔をあけましょう。",
translations: {
        vi: "Khi thấy người đi bộ hoặc xe đạp, hãy giảm tốc sớm và giữ khoảng cách an toàn.",
        en: "When you see pedestrians or bicycles, slow down early and keep a safe distance.",
        zh: "发现行人或自行车时，要提前减速并保持足够的安全距离。",
        pt: "Ao encontrar pedestres ou bicicletas, reduza a velocidade cedo e mantenha uma distância segura.",
        id: "Jika Anda melihat pejalan kaki atau sepeda, pelankan kecepatan dan beri jarak yang cukup di antara keduanya.",
        ne: "यदि तपाईंले पैदल यात्री वा साइकल देख्नुभयो भने, ढिलो गर्नुहोस् र तिनीहरूको बीचमा पर्याप्त ठाउँ छोड्नुहोस्।",
        my: "လမ်းသွားလမ်းလာ သို့မဟုတ် စက်ဘီးကိုတွေ့ပါက အရှိန်လျှော့ပြီး ၎င်းတို့ကြားတွင် နေရာအလုံအလောက်ချန်ထားပါ။"
      }
    },
    {
      key: "exam",
      label: "検定ポイント",
      japanese: "歩行者・自転車を優先し、安全な間隔と速度で通行できているか確認されます。",
translations: {
        vi: "Trong kỳ thi sẽ kiểm tra việc ưu tiên người đi bộ và xe đạp, đồng thời giữ khoảng cách và tốc độ an toàn.",
        en: "The examiner checks whether you give priority to pedestrians and bicycles and pass safely.",
        zh: "考试时会确认是否礼让行人和自行车，并以安全的速度和间隔通行。",
        pt: "No exame será verificado se você dá prioridade aos pedestres e bicicletas e mantém velocidade e distância seguras.",
        id: "Pejalan kaki dan sepeda akan diprioritaskan, dan pejalan kaki akan diperiksa untuk mengetahui apakah mereka dapat lewat pada jarak dan kecepatan yang aman.",
        ne: "पैदल यात्री र साइकललाई प्राथमिकता दिइनेछ, र पैदल यात्रीहरू सुरक्षित दूरी र गतिमा जान सक्छन् कि भनेर जाँच गरिनेछ।",
        my: "လမ်းသွားလမ်းလာများနှင့် စက်ဘီးများကို ဦးစားပေးမည်ဖြစ်ပြီး လမ်းသွားလမ်းလာများသည် အန္တရာယ်ကင်းသော အကွာအဝေးနှင့် အရှိန်ဖြင့် ဖြတ်သန်းနိုင်သည်ကို စစ်ဆေးမည်ဖြစ်သည်။"
      }
    },
    {
      key: "mistake",
      label: "よくある失敗",
      japanese: "歩行者の近くをそのまま通過したり、自転車の飛び出しへの注意が不足することがあります。",
translations: {
        vi: "Lỗi thường gặp là đi quá gần người đi bộ hoặc không chú ý xe đạp lao ra bất ngờ.",
        en: "A common mistake is passing too close to pedestrians or failing to notice bicycles entering suddenly.",
        zh: "常见错误是贴近行人通过，或没有注意自行车突然出现。",
        pt: "Um erro comum é passar muito perto dos pedestres ou não perceber bicicletas surgindo de repente.",
        id: "Mereka mungkin berpapasan langsung dengan pejalan kaki atau mungkin tidak berhati-hati jika ada sepeda yang melompat ke arah mereka.",
        ne: "तिनीहरू सीधै पैदल यात्रीहरूबाट गुज्रन सक्छन् वा साइकलहरू तिनीहरूबाट हाम फाल्ने बारे सावधान नहुन सक्छन्।",
        my: "လမ်းသွားလမ်းလာများ တိုက်ရိုက်ဖြတ်သွားခြင်း သို့မဟုတ် စက်ဘီးများ ခုန်ထွက်ခြင်းကို သတိမပြုမိခြင်းတို့ ဖြစ်နိုင်ပါသည်။"
      }
    },
    {
      key: "remember",
      label: "覚えておきたいこと",
      japanese: "子ども、高齢者、身体の不自由な方は急な動きをすることがあるため、十分注意しましょう。",
translations: {
        vi: "Trẻ em, người cao tuổi và người khuyết tật có thể có hành động bất ngờ, vì vậy hãy đặc biệt cẩn thận.",
        en: "Children, elderly people and people with disabilities may move unexpectedly, so be especially careful.",
        zh: "儿童、老年人和行动不便的人可能突然移动，要特别注意。",
        pt: "Crianças, idosos e pessoas com deficiência podem agir inesperadamente, portanto tenha atenção redobrada.",
        id: "Anak-anak, orang lanjut usia, dan penyandang disabilitas fisik mungkin melakukan gerakan tiba-tiba, jadi berhati-hatilah.",
        ne: "बालबालिका, वृद्धवृद्धा र शारीरिक अपाङ्गता भएका व्यक्तिहरूले अचानक हिँडडुल गर्न सक्छन्, त्यसैले सावधान रहनुहोस्।",
        my: "ကလေးများ၊ သက်ကြီးရွယ်အိုများနှင့် ရုပ်ပိုင်းဆိုင်ရာ မသန်စွမ်းသူများ ရုတ်တရက် လှုပ်ရှားနိုင်သောကြောင့် သတိထားပါ။"
      }
    },
    {
      key: "instruction",
      label: "教習で使う一言",
      japanese: "歩行者を優先しましょう。速度を落として、安全な間隔をあけて通行してください。",
translations: {
        vi: "Hãy ưu tiên người đi bộ. Giảm tốc và đi qua với khoảng cách an toàn.",
        en: "Give priority to pedestrians. Slow down and pass with a safe distance.",
        zh: "请礼让行人，减速并保持安全距离通过。",
        pt: "Dê prioridade aos pedestres. Reduza a velocidade e passe mantendo uma distância segura.",
        id: "Berikan prioritas kepada pejalan kaki. Mohon pelan-pelan dan jaga jarak aman.",
        ne: "पैदलयात्रीलाई प्राथमिकता दिनुहोस्। कृपया ढिलो गर्नुहोस् र सुरक्षित दूरी राख्नुहोस्।",
        my: "လမ်းသွားလမ်းလာတွေကို ဦးစားပေးပါ။ ကျေးဇူးပြု၍ အရှိန်လျှော့ပြီး ဘေးကင်းသော အကွာအဝေးကို ထားပါ။"
      }
    }
  ]
},
{
  id: 30,
  stage: 2,
  title: "道路および交通の状況にあわせた運転",
  description: "道路や交通の状況を読み取り、その状況に応じた安全な運転ができるようにします。",
  phraseCount: 18,

  sections: [
    {
      key: "point",
      label: "教官ワンポイント",
      japanese: "道路状況を早めに判断し、カーブ・坂道・踏切・渋滞では十分に速度を落として余裕を持って運転しましょう。",
translations: {
        vi: "Hãy quan sát sớm tình hình giao thông, giảm tốc ở khúc cua, dốc, đường sắt và nơi ùn tắc.",
        en: "Read the road conditions early and slow down sufficiently on curves, hills, railroad crossings and in traffic jams.",
        zh: "提前观察道路情况，在弯道、坡道、铁路道口和拥堵路段充分减速。",
        pt: "Observe as condições da via com antecedência e reduza a velocidade em curvas, descidas, passagens de nível e congestionamentos.",
        id: "Periksa kondisi jalan sejak dini dan berkendaralah dengan kecepatan yang cukup dengan memperlambat dan memberikan banyak waktu saat mendekati tikungan, lereng, perlintasan kereta api, dan kemacetan lalu lintas.",
        ne: "सडकको अवस्था चाँडै मूल्याङ्कन गर्नुहोस् र कर्भहरू, ढलानहरू, रेलमार्ग क्रसिङहरू, र ट्राफिक जामहरू नजिक आउँदा ढिलो र प्रशस्त समय दिएर पर्याप्त गतिमा ड्राइभ गर्नुहोस्।",
        my: "လမ်းအခြေအနေများကို စောစီးစွာအကဲဖြတ်ပြီး အရှိန်လျှော့ကာ လမ်းကွေ့များ၊ တောင်စောင်းများ၊ ရထားလမ်းဖြတ်များနှင့် ယာဉ်ကြောပိတ်ဆို့မှုများ နီးကပ်လာသည့်အခါ အချိန်များများပေးခြင်းဖြင့် လုံလောက်သောအရှိန်ဖြင့် မောင်းနှင်ပါ။"
      }
    },
    {
      key: "exam",
      label: "検定ポイント",
      japanese: "道路や交通状況に合わせて適切な速度・安全確認・進路選択ができているか確認されます。",
translations: {
        vi: "Trong kỳ thi sẽ đánh giá khả năng điều chỉnh tốc độ, quan sát và chọn hướng đi phù hợp.",
        en: "The examiner checks whether you adjust your speed, observation and lane position according to traffic conditions.",
        zh: "考试会确认是否能根据道路和交通情况调整速度、观察和行驶位置。",
        pt: "No exame será avaliado se você adapta a velocidade, observação e posição do veículo às condições da via.",
        id: "Ini akan diperiksa untuk melihat apakah Anda telah memilih kecepatan, pemeriksaan keselamatan, dan rute yang sesuai dengan kondisi jalan dan lalu lintas.",
        ne: "तपाईंले सडक र ट्राफिक अवस्था अनुसार उपयुक्त गति, सुरक्षा जाँच, र मार्ग चयन गर्नुभएको छ कि छैन भनेर जाँच गरिनेछ।",
        my: "လမ်းနှင့် ယာဉ်ကြောအခြေအနေအရ သင့်လျော်သောအမြန်နှုန်း၊ ဘေးကင်းမှုစစ်ဆေးခြင်းနှင့် လမ်းကြောင်းတို့ကို ရွေးချယ်ထားခြင်းရှိမရှိ စစ်ဆေးကြည့်ရှုမည်ဖြစ်သည်။"
      }
    },
    {
      key: "mistake",
      label: "よくある失敗",
      japanese: "状況判断が遅れ、カーブや渋滞、踏切などで速度調整が遅れることがあります。",
translations: {
        vi: "Lỗi thường gặp là đánh giá tình huống chậm và giảm tốc quá muộn.",
        en: "A common mistake is judging the situation too late and slowing down too late.",
        zh: "常见错误是判断过晚，减速不及时。",
        pt: "Um erro comum é avaliar a situação tarde demais e reduzir a velocidade muito tarde.",
        id: "Mungkin ada keterlambatan dalam menilai situasi, dan penyesuaian kecepatan mungkin tertunda karena tikungan, kemacetan lalu lintas, perlintasan kereta api, dll.",
        ne: "स्थितिको मूल्याङ्कन गर्न ढिलाइ हुन सक्छ, र गति समायोजन कर्भ, ट्राफिक जाम, रेलमार्ग क्रसिङ, आदि को कारणले ढिलाइ हुन सक्छ।",
        my: "အခြေအနေကို အကဲဖြတ်ရာတွင် နှောင့်နှေးမှုရှိနိုင်ပြီး လမ်းကွေ့များ၊ ယာဉ်ကြောပိတ်ဆို့မှုများ၊ ရထားလမ်းဖြတ်များ စသည်တို့ကြောင့် အရှိန်ထိန်းညှိမှု နှောင့်နှေးနိုင်ပါသည်။"
      }
    },
    {
      key: "remember",
      label: "覚えておきたいこと",
      japanese: "周囲を広く見て、危険を早めに予測することが安全運転の基本です。",
translations: {
        vi: "Quan sát rộng và dự đoán nguy hiểm sớm là nguyên tắc cơ bản của lái xe an toàn.",
        en: "Looking far ahead and predicting hazards early is the foundation of safe driving.",
        zh: "扩大视野、提前预测危险，是安全驾驶的基础。",
        pt: "Observar amplamente e prever os perigos com antecedência é a base da direção segura.",
        id: "Dasar dari berkendara yang aman adalah dengan melihat sekeliling Anda secara luas dan memprediksi bahaya sejak dini.",
        ne: "सुरक्षित ड्राइभिङको आधार भनेको आफ्नो वरपरको विस्तृत दृश्य लिनु र खतराको छिट्टै भविष्यवाणी गर्नु हो।",
        my: "ဘေးကင်းလုံခြုံစွာ မောင်းနှင်ခြင်း၏ အခြေခံမှာ သင့်ပတ်ဝန်းကျင်ကို ကျယ်ကျယ်ပြန့်ပြန့် ရှုမြင်နိုင်ပြီး အန္တရာယ်ကို စောစီးစွာ ကြိုတင်ခန့်မှန်းရန်ဖြစ်သည်။"
      }
    },
    {
      key: "instruction",
      label: "教習で使う一言",
      japanese: "前方の状況をよく見て、速度を調整してください。",
translations: {
        vi: "Hãy quan sát phía trước và điều chỉnh tốc độ.",
        en: "Watch the road ahead and adjust your speed.",
        zh: "注意前方情况，调整车速。",
        pt: "Observe a situação à frente e ajuste a velocidade.",
        id: "Perhatikan baik-baik situasi di depan dan sesuaikan kecepatan Anda.",
        ne: "अगाडिको अवस्थालाई ध्यानपूर्वक हेर्नुहोस् र तदनुसार आफ्नो गति समायोजन गर्नुहोस्।",
        my: "ရှေ့အခြေအနေကို သေချာကြည့်ပြီး သင့်အရှိန်ကို ချိန်ညှိပါ။"
      }
    }
  ]
},
{
  id: 31,
  stage: 2,
  title: "駐・停車",
  description: "道路や交通の状況に応じて駐・停車ができるようにします。",
  phraseCount: 18,

  sections: [
    {
      key: "point",
      label: "教官ワンポイント",
      japanese: "駐停車するときは、禁止場所ではないか、迷惑にならないか、止めやすいかを早めに判断しましょう。",
translations: {
        vi: "Khi dừng hoặc đỗ xe, hãy sớm kiểm tra xem có bị cấm, có gây cản trở không và có dễ dừng không.",
        en: "When stopping or parking, check early whether it is prohibited, whether it will disturb others, and whether it is easy to stop.",
        zh: "停车或临时停车时，要提前确认是否禁止、是否妨碍交通、是否容易停车。",
        pt: "Ao parar ou estacionar, verifique cedo se é proibido, se atrapalha o trânsito e se é fácil parar.",
        id: "Saat parkir atau berhenti, putuskan sesegera mungkin apakah kendaraan berada di area terlarang, apakah akan menimbulkan gangguan, dan apakah mudah untuk diparkir.",
        ne: "पार्किङ गर्दा वा रोकिँदा, जतिसक्दो चाँडो निर्णय गर्नुहोस् कि सवारी साधन निषेधित क्षेत्रमा छ कि छैन, यसले उपद्रव निम्त्याउँछ कि छैन, र पार्क गर्न सजिलो छ कि छैन।",
        my: "ရပ်နားချိန် သို့မဟုတ် ရပ်သည့်အခါ ယာဉ်သည် တားမြစ်ထားသောနေရာတွင် ရှိမရှိ၊ အနှောင့်အယှက်ဖြစ်စေမည်၊ ရပ်နားရန် လွယ်ကူခြင်းရှိ၊ မရှိ အမြန်ဆုံးဆုံးဖြတ်ပါ။"
      }
    },
    {
      key: "exam",
      label: "検定ポイント",
      japanese: "合図を出し、後続車を確認しながら徐々に速度を落とし、安全な位置に寄せて止めます。",
translations: {
        vi: "Bật tín hiệu, kiểm tra xe phía sau, giảm tốc từ từ và parar em posição segura.",
        en: "Signal, check following vehicles, slow down gradually and stop in a safe position.",
        zh: "打灯，确认后方车辆，逐渐减速，并靠到安全位置停车。",
        pt: "Sinalize, verifique os veículos atrás, reduza gradualmente e pare em posição segura.",
        id: "Beri aba-aba, pelan-pelan pelan-pelan sambil memeriksa kendaraan di belakang Anda, lalu tarik ke posisi aman dan berhenti.",
        ne: "सिग्नल दिनुहोस्, तपाईंको पछाडिको गाडी जाँच गर्दा बिस्तारै ढिलो गर्नुहोस्, र त्यसपछि सुरक्षित स्थितिमा तान्नुहोस् र रोक्नुहोस्।",
        my: "အချက်ပြပါ၊ သင့်နောက်ကယာဉ်ကို စစ်ဆေးနေစဉ် ဖြည်းဖြည်းချင်း အရှိန်လျှော့ပါ၊ ထို့နောက် ဘေးကင်းသော အနေအထားသို့ ဆွဲတင်ကာ ရပ်ပါ။"
      }
    },
    {
      key: "mistake",
      label: "よくある失敗",
      japanese: "急に止まる、合図が遅い、後続車の確認不足、左への寄せ方が不十分なことがあります。",
translations: {
        vi: "Lỗi thường gặp là dừng đột ngột, bật tín hiệu muộn, thiếu kiểm tra phía sau hoặc chưa áp sát trái đủ.",
        en: "Common mistakes are stopping suddenly, signaling late, insufficient rear checks, or not moving close enough to the left.",
        zh: "常见错误是突然停车、打灯过晚、后方确认不足、靠左不充分。",
        pt: "Erros comuns são parar de repente, sinalizar tarde, verificar pouco atrás ou não encostar bem à esquerda.",
        id: "Pengemudi mungkin berhenti tiba-tiba, terlambat memberi sinyal, tidak memeriksa kendaraan di belakang, atau kurang menepi ke kiri.",
        ne: "चालकले अचानक रोकिन सक्छ, ढिलो संकेत गर्न सक्छ, गाडी पछाडि जाँच नगर्न वा अपर्याप्त रूपमा बायाँ तिर तान्न सक्छ।",
        my: "ယာဉ်မောင်းသည် ရုတ်တရက်ရပ်တန့်ခြင်း၊ အချက်ပြနောက်ကျခြင်း၊ နောက်မှယာဉ်ကို စစ်ဆေးခြင်းမပြုဘဲ သို့မဟုတ် မလုံလောက်ဘဲ ဘယ်ဘက်သို့ ဆွဲသွားနိုင်သည်။"
      }
    },
    {
      key: "remember",
      label: "覚えておきたいこと",
      japanese: "駐停車禁止場所や交差点付近、横断歩道付近、バス停付近には特に注意しましょう。",
translations: {
        vi: "Hãy chú ý đặc biệt đến nơi cấm dừng đỗ, gần giao lộ, gần vạch sang đường và gần điểm xe buýt.",
        en: "Pay special attention to no-parking areas, intersections, crosswalks and bus stops.",
        zh: "要特别注意禁止停车区域、交叉路口附近、人行横道附近和公交站附近。",
        pt: "Tenha atenção especial a locais proibidos, cruzamentos, faixas de pedestres e pontos de ônibus.",
        id: "Berhati-hatilah terutama di area yang melarang parkir, dekat persimpangan, penyeberangan, dan dekat halte bus.",
        ne: "पार्किङ निषेधित क्षेत्रहरू, चौराहेहरू, क्रसवाकहरू, र बस स्टपहरू नजिकका क्षेत्रमा विशेष गरी सावधान रहनुहोस्।",
        my: "ယာဉ်ရပ်နားရန် တားမြစ်ထားသောနေရာများ၊ လမ်းဆုံများ၊ လူကူးမျဉ်းကြားများနှင့် ဘတ်စ်ကားမှတ်တိုင်များအနီးတွင် အထူးသတိထားပါ။"
      }
    },
    {
      key: "instruction",
      label: "教習で使う一言",
      japanese: "後方を確認して合図を出し、ゆっくり左に寄せて止めましょう。",
translations: {
        vi: "Hãy kiểm tra phía sau, bật tín hiệu, từ từ sát vào bên trái và dừng lại.",
        en: "Check behind, signal, move slowly to the left and stop.",
        zh: "请确认后方，打灯，慢慢靠左停车。",
        pt: "Verifique atrás, sinalize, aproxime-se devagar da esquerda e pare.",
        id: "Periksa di belakang Anda, beri isyarat, lalu tarik perlahan ke kiri dan berhenti.",
        ne: "तपाईंको पछाडि जाँच गर्नुहोस्, संकेत दिनुहोस्, र बिस्तारै बायाँ तिर तान्नुहोस् र रोक्नुहोस्।",
        my: "သင့်အနောက်ကို စစ်ဆေးပါ၊ အချက်ပြပါ၊ ဘယ်ဘက်သို့ ဖြည်းညှင်းစွာဆွဲထုတ်ပြီး ရပ်ပါ။"
      }
    }
  ]
},
{
  id: 32,
  stage: 2,
  title: "方向変換および縦列駐車",
  description: "駐・停車場所にあわせた駐・停車ができるようにします。",
  phraseCount: 18,

  sections: [
    {
      key: "point",
      label: "教官ワンポイント",
      japanese: "バックするときは、後方と周囲の安全を確認し、ゆっくり操作しましょう。",
translations: {
        vi: "Khi lùi xe, hãy kiểm tra an toàn phía sau và xung quanh, rồi thao tác chậm rãi.",
        en: "When reversing, check behind and around the car, then operate slowly.",
        zh: "倒车时，请确认后方和周围安全，然后慢慢操作。",
        pt: "Ao dar ré, verifique a segurança atrás e ao redor do veículo e manobre devagar.",
        id: "Saat membuat cadangan, periksa keamanan di belakang Anda dan di sekitar Anda, dan lanjutkan perlahan.",
        ne: "ब्याकअप गर्दा, आफ्नो पछाडि र वरपर सुरक्षा जाँच गर्नुहोस्, र बिस्तारै अगाडि बढ्नुहोस्।",
        my: "မိတ္တူကူးသည့်အခါ၊ သင့်နောက်နှင့် သင့်ပတ်ဝန်းကျင်တွင် ဘေးကင်းစေရန် စစ်ဆေးပြီး ဖြည်းဖြည်းချင်း ဆက်လက်လုပ်ဆောင်ပါ။"
      }
    },
    {
      key: "exam",
      label: "検定ポイント",
      japanese: "安全確認、ハンドル操作、車体の向き、間隔を見ながら、落ち着いて駐車します。",
translations: {
        vi: "Kiểm tra an toàn, điều khiển vô lăng, quan sát hướng xe và khoảng cách để đỗ xe bình tĩnh.",
        en: "Check safety, control the steering, watch the vehicle angle and spacing, and park calmly.",
        zh: "确认安全，控制方向盘，观察车身方向和间隔，冷静停车。",
        pt: "Confirme a segurança, controle o volante, observe o ângulo do carro e a distância, e estacione com calma.",
        id: "Parkirlah dengan tenang sambil memeriksa keselamatan, pengoperasian roda kemudi, arah kendaraan, dan jarak.",
        ne: "सुरक्षा, स्टेयरिङ ह्वील सञ्चालन, गाडीको दिशा र दूरी जाँच गर्दा शान्तपूर्वक पार्क गर्नुहोस्।",
        my: "ဘေးကင်းမှု၊ စတီယာရင်ဘီးလည်ပတ်မှု၊ ယာဉ်၏ ဦးတည်ရာနှင့် အကွာအဝေးကို စစ်ဆေးနေစဉ် ငြိမ်သက်စွာ ရပ်ပါ။"
      }
    },
    {
      key: "mistake",
      label: "よくある失敗",
      japanese: "ハンドルを切る時期が早すぎたり遅すぎたりして、車体がうまく入らないことがあります。",
translations: {
        vi: "Lỗi thường gặp là xoay vô lăng quá sớm hoặc quá muộn, khiến xe không vào đúng vị trí.",
        en: "A common mistake is turning the steering wheel too early or too late, making the car enter poorly.",
        zh: "常见错误是打方向过早或过晚，导致车身不能顺利进入。",
        pt: "Um erro comum é virar o volante cedo ou tarde demais, fazendo o carro não entrar corretamente.",
        id: "Jika Anda memutar setir terlalu dini atau terlambat, kendaraan mungkin tidak dapat bergerak dengan baik.",
        ne: "यदि तपाईंले स्टेयरिङ ह्विल धेरै चाँडो वा धेरै ढिलो घुमाउनुभयो भने, गाडी राम्ररी नचल्न सक्छ।",
        my: "စတီယာရင်ဘီးကို စောလွန်းခြင်း သို့မဟုတ် နောက်ကျလွန်းပါက၊ ကားသည် ကောင်းစွာမရွေ့နိုင်ပါ။"
      }
    },
    {
      key: "remember",
      label: "覚えておきたいこと",
      japanese: "失敗したときは無理に続けず、失敗する前の位置まで戻ってやり直しましょう。",
translations: {
        vi: "Khi sai, đừng cố tiếp tục. Hãy quay lại vị trí trước khi sai và làm lại.",
        en: "If you make a mistake, do not force it. Return to the previous safe position and try again.",
        zh: "失败时不要勉强继续，要回到失败前的位置重新操作。",
        pt: "Se errar, não force. Volte à posição anterior ao erro e tente novamente.",
        id: "Ketika Anda gagal, jangan memaksakan diri untuk melanjutkan; kembali ke tempat Anda berada sebelum Anda gagal dan coba lagi.",
        ne: "जब तपाईं असफल हुनुहुन्छ, जारी राख्न आफैलाई जबरजस्ती नगर्नुहोस्; तपाईं असफल हुनु अघि जहाँ हुनुहुन्थ्यो त्यहाँ फर्कनुहोस् र फेरि प्रयास गर्नुहोस्।",
        my: "သင်ကျရှုံးသောအခါ၊ ရှေ့ဆက်ရန် သင့်ကိုယ်သင် အတင်းအကျပ်မလုပ်ပါနှင့်။ မအောင်မြင်ခင် သင်ရှိခဲ့တဲ့နေရာကို ပြန်သွားပြီး ထပ်ကြိုးစားပါ။"
      }
    },
    {
      key: "instruction",
      label: "教習で使う一言",
      japanese: "後方をよく見て、ゆっくりバックしてください。車体をまっすぐにしましょう。",
translations: {
        vi: "Hãy nhìn kỹ phía sau và lùi xe chậm. Giữ thân xe thẳng.",
        en: "Look carefully behind and reverse slowly. Straighten the car.",
        zh: "请仔细看后方，慢慢倒车。把车身摆正。",
        pt: "Olhe bem para trás e dê ré devagar. Deixe o carro reto.",
        id: "Lihat ke belakang Anda dan mundur perlahan. Luruskan bodi mobil.",
        ne: "तपाईको पछाडि हेर्नुहोस् र बिस्तारै ब्याक अप गर्नुहोस्। कार शरीर सीधा गर्नुहोस्।",
        my: "သင့်နောက်ကို ကြည့်ပြီး ဖြည်းညှင်းစွာ နောက်ပြန်လှည့်ပါ။ ကားကိုယ်ထည်ကို ဖြောင့်တန်းထားပါ။"
      }
    }
  ]
},
{
  id: 33,
  stage: 2,
  title: "急ブレーキ",
  description: "はやい速度からの急ブレーキによる停止および危険の回避などができるとともに、道路形状にあった速度が選べるようにします。",
  phraseCount: 18,

  sections: [
    {
      key: "point",
      label: "教官ワンポイント",
      japanese: "急ブレーキは最後の手段です。普段は早めに危険を予測し、余裕をもって速度を落としましょう。",
translations: {
        vi: "Phanh gấp là biện pháp cuối cùng. Hằng ngày hãy dự đoán nguy hiểm sớm và giảm tốc với đủ thời gian.",
        en: "Emergency braking is a last resort. Usually, predict hazards early and slow down with enough time.",
        zh: "急刹车是最后手段。平时要提前预测危险，留有余地地减速。",
        pt: "A frenagem brusca é o último recurso. Normalmente, antecipe os perigos e reduza a velocidade com antecedência.",
        id: "Pengereman mendadak adalah pilihan terakhir. Biasanya, Anda harus mengantisipasi bahaya sejak dini dan memperlambatnya dengan banyak waktu luang.",
        ne: "अचानक ब्रेक लगाउने अन्तिम उपाय हो। सामान्यतया, तपाईंले खतराको प्रारम्भिक अनुमान गर्नुपर्छ र प्रशस्त समयको साथ ढिलो गर्नुपर्छ।",
        my: "ရုတ်တရက် ဘရိတ်အုပ်ခြင်းသည် နောက်ဆုံးနည်းလမ်းဖြစ်သည်။ ပုံမှန်အားဖြင့်၊ သင်သည် အန္တရာယ်ကို စောစီးစွာ ကြိုတင်ခန့်မှန်းပြီး အားလပ်ချိန်များစွာဖြင့် အရှိန်လျှော့သင့်သည်။"
      }
    },
    {
      key: "exam",
      label: "検定ポイント",
      japanese: "危険を感じたら素早く強くブレーキを踏み、安全な方向へ回避できるかが大切です。",
translations: {
        vi: "Khi cảm thấy nguy hiểm, điều quan trọng là đạp phanh nhanh và mạnh, rồi tránh về hướng an toàn.",
        en: "When you sense danger, it is important to brake quickly and firmly and avoid toward a safe direction.",
        zh: "感觉到危险时，要迅速有力地踩刹车，并向安全方向避让。",
        pt: "Ao perceber perigo, é importante frear rápido e forte e desviar para uma direção segura.",
        id: "Jika Anda merasakan bahaya, penting untuk mengerem dengan cepat dan tegas dan menghindari situasi ke arah yang aman.",
        ne: "यदि तपाइँ खतरा महसुस गर्नुहुन्छ भने, ब्रेकहरू छिटो र दृढतापूर्वक लागू गर्न र सुरक्षित दिशामा स्थितिबाट बच्न महत्त्वपूर्ण छ।",
        my: "အန္တရာယ်ကို ခံစားရပါက ဘရိတ်ကို လျင်မြန်စွာ ခိုင်ခံ့စွာ အသုံးချပြီး အခြေအနေကို ဘေးကင်းသော ဦးတည်ရာသို့ ရှောင်ရှားရန် အရေးကြီးပါသည်။"
      }
    },
    {
      key: "mistake",
      label: "よくある失敗",
      japanese: "ブレーキが弱い、踏むのが遅い、速度を出しすぎて停止距離が長くなることがあります。",
translations: {
        vi: "Lỗi thường gặp là phanh yếu, đạp phanh muộn hoặc chạy quá nhanh làm quãng đường dừng dài hơn.",
        en: "Common mistakes are weak braking, braking too late, or driving too fast, which increases stopping distance.",
        zh: "常见错误是刹车太弱、踩刹车太晚、速度过快导致停车距离变长。",
        pt: "Erros comuns são frear fraco, frear tarde ou dirigir rápido demais, aumentando a distância de parada.",
        id: "Rem Anda mungkin lemah, Anda mungkin menerapkannya terlalu lambat, atau Anda mungkin mengemudi terlalu cepat, sehingga mengakibatkan jarak berhenti yang lebih jauh.",
        ne: "तपाईंको ब्रेकहरू कमजोर हुन सक्छन्, तपाईंले तिनीहरूलाई धेरै बिस्तारै लागू गर्न सक्नुहुन्छ, वा तपाईंले धेरै छिटो ड्राइभ गरिरहनुभएको हुनसक्छ, जसले गर्दा लामो दूरीमा रोकिनेछ।",
        my: "သင်၏ဘရိတ်များသည် အားနည်းနေနိုင်သည်၊ ၎င်းတို့ကို ဖြည်းညှင်းစွာ အသုံးချနိုင်သည်၊ သို့မဟုတ် သင်သည် အလွန်လျင်မြန်စွာ မောင်းနှင်နေနိုင်ပြီး အကွာအဝေးကို ပိုကြာအောင် ရပ်တန့်သွားနိုင်သည်။"
      }
    },
    {
      key: "remember",
      label: "覚えておきたいこと",
      japanese: "停止距離は速度が上がるほど長くなります。雨やすべりやすい路面ではさらに長くなります。",
translations: {
        vi: "Quãng đường dừng càng dài khi tốc độ càng cao. Khi mưa hoặc đường trơn, quãng đường này còn dài hơn.",
        en: "Stopping distance becomes longer as speed increases. On wet or slippery roads, it becomes even longer.",
        zh: "速度越快，停车距离越长。下雨或路面湿滑时会更长。",
        pt: "A distância de parada aumenta conforme a velocidade aumenta. Em chuva ou piso escorregadio, aumenta ainda mais.",
        id: "Jarak berhenti bertambah seiring bertambahnya kecepatan. Akan lebih lama lagi saat hujan atau jalan licin.",
        ne: "गति बढ्दै जाँदा रोकिने दूरी बढ्छ। यो वर्षामा वा चिप्लो सडकहरूमा अझ लामो हुनेछ।",
        my: "အရှိန်တိုးလာသည်နှင့်အမျှ ရပ်ထားသောအကွာအဝေးသည် တိုးလာသည်။ မိုးရွာတာ ဒါမှမဟုတ် ချောတဲ့လမ်းတွေမှာတောင် ပိုကြာလိမ့်မယ်။"
      }
    },
    {
      key: "instruction",
      label: "教習で使う一言",
      japanese: "危険です。ブレーキを強く踏んでください。止まったら周囲を確認しましょう。",
translations: {
        vi: "Nguy hiểm. Hãy đạp phanh mạnh. Sau khi dừng, hãy kiểm tra xung quanh.",
        en: "Danger. Press the brake firmly. After stopping, check around you.",
        zh: "危险。请用力踩刹车。停车后确认周围安全。",
        pt: "Perigo. Pise forte no freio. Depois de parar, verifique ao redor.",
        id: "Itu berbahaya. Tolong injak remnya. Saat Anda berhenti, periksa sekeliling Anda.",
        ne: "यो खतरनाक छ। कृपया ब्रेक मा स्ल्याम गर्नुहोस्। जब तपाईं रोकिनुहुन्छ, आफ्नो वरपरको जाँच गर्नुहोस्।",
        my: "အန္တရာယ်ရှိတယ်။ ကျေးဇူးပြု၍ ဘရိတ်ကို နင်းပါ။ ရပ်သည့်အခါ သင့်ပတ်ဝန်းကျင်ကို စစ်ဆေးပါ။"
      }
    }
  ]
},
{
  id: 34,
  stage: 2,
  title: "自主経路設定",
  description: "自主的に走行経路を設定し、他の交通に気配りをしながら主体的な運転ができるようにします。",
  phraseCount: 18,

  sections: [
    {
      key: "point",
      label: "教官ワンポイント",
      japanese: "出発前に経路を確認し、目標物や交差点を覚えて余裕をもって運転しましょう。",
translations: {
        vi: "Trước khi xuất phát hãy kiểm tra lộ trình, ghi nhớ các mốc và giao lộ để lái xe bình tĩnh.",
        en: "Check the route before departure and remember landmarks and intersections.",
        zh: "出发前确认路线，记住地标和路口，轻松驾驶。",
        pt: "Antes de sair, confirme o trajeto e memorize pontos de referência e cruzamentos.",
        id: "Periksa rute sebelum Anda berangkat, ingat landmark dan persimpangan, dan berkendaralah dengan banyak waktu.",
        ne: "तपाईंले प्रस्थान गर्नु अघि मार्ग जाँच गर्नुहोस्, स्थलचिह्नहरू र चौराहेहरू सम्झनुहोस्, र प्रशस्त समयको साथ ड्राइभ गर्नुहोस्।",
        my: "သင်မထွက်ခွာမီ လမ်းကြောင်းကို စစ်ဆေးပါ၊ အထင်ကရနေရာများနှင့် လမ်းဆုံများကို မှတ်သားပြီး အချိန်များစွာဖြင့် မောင်းနှင်ပါ။"
      }
    },
    {
      key: "exam",
      label: "検定ポイント",
      japanese: "経路を間違えても慌てず、安全確認をしながら適切に修正できることが重要です。",
translations: {
        vi: "Ngay cả khi đi nhầm đường, điều quan trọng là bình tĩnh và sửa lộ trình an toàn.",
        en: "Even if you take the wrong route, stay calm and correct it safely.",
        zh: "即使走错路，也要冷静并安全修正路线。",
        pt: "Mesmo errando o caminho, mantenha a calma e corrija a rota com segurança.",
        id: "Penting untuk tidak panik meskipun Anda mengambil rute yang salah, dan dapat melakukan koreksi yang tepat sambil memeriksa keselamatan.",
        ne: "यो महत्त्वपूर्ण छ कि तपाईंले गलत मार्ग लिनुभयो भने पनि नडराउनु, र सुरक्षा जाँच गर्दा उपयुक्त सुधार गर्न सक्षम हुन।",
        my: "လမ်းကြောင်းမှားသွားလျှင်တောင် ထိတ်လန့်မနေရန်နှင့် ဘေးကင်းမှုကို စစ်ဆေးနေစဉ် သင့်လျော်သော ပြင်ဆင်မှုများ ပြုလုပ်နိုင်စေရန် အရေးကြီးပါသည်။"
      }
    },
    {
      key: "mistake",
      label: "よくある失敗",
      japanese: "道に迷って急な進路変更や急ブレーキをしてしまうことがあります。",
translations: {
        vi: "Lỗi thường gặp là đổi hướng đột ngột hoặc phanh gấp khi bị lạc đường.",
        en: "A common mistake is making sudden lane changes or braking hard after getting lost.",
        zh: "常见错误是迷路后突然变道或急刹车。",
        pt: "Um erro comum é mudar de direção ou frear bruscamente ao se perder.",
        id: "Anda mungkin tersesat dan tiba-tiba mengubah arah atau mengerem secara tiba-tiba.",
        ne: "तपाईं हराउन सक्नुहुन्छ र अचानक पाठ्यक्रम परिवर्तन वा अचानक ब्रेक गर्न सक्नुहुन्छ।",
        my: "လမ်းပျောက်ပြီး ရုတ်တရက် လမ်းပြောင်းတာ ဒါမှမဟုတ် ရုတ်တရက် ဘရိတ်ပေါက်သွားနိုင်ပါတယ်။"
      }
    },
    {
      key: "remember",
      label: "覚えておきたいこと",
      japanese: "経路を間違えたら無理に戻らず、安全な場所で落ち着いて経路を修正しましょう。",
translations: {
        vi: "Nếu đi nhầm đường, đừng cố quay lại ngay. Hãy dừng ở nơi an toàn và chỉnh lại lộ trình.",
        en: "If you miss the route, do not force your way back. Stop safely and correct the route.",
        zh: "走错路时不要勉强返回，应在安全地点修正路线。",
        pt: "Se errar o caminho, não tente voltar imediatamente. Pare em local seguro e ajuste a rota.",
        id: "Jika Anda mengambil jalan yang salah, jangan memaksakan diri untuk kembali; tetap tenang di tempat yang aman dan perbaiki rute Anda.",
        ne: "यदि तपाईंले गलत बाटो लिनुभयो भने, आफैलाई पछाडि जान बाध्य नगर्नुहोस्; सुरक्षित स्थानमा शान्त रहनुहोस् र आफ्नो मार्ग सच्याउनुहोस्।",
        my: "လမ်းမှားသွားလျှင် နောက်ကြောင်းပြန်ရန် သင့်ကိုယ်သင် တွန်းမတိုက်ပါနှင့်။ လုံခြုံသောနေရာတွင် ငြိမ်သက်စွာနေ၍ သင်၏လမ်းကြောင်းကို ပြုပြင်ပါ။"
      }
    },
    {
      key: "instruction",
      label: "教習で使う一言",
      japanese: "次の交差点を右です。落ち着いて安全確認をして進みましょう。",
translations: {
        vi: "Rẽ phải ở giao lộ tiếp theo. Bình tĩnh, kiểm tra an toàn rồi đi.",
        en: "Turn right at the next intersection. Stay calm and check safety first.",
        zh: "下一个路口右转。冷静确认安全后前进。",
        pt: "Vire à direita no próximo cruzamento. Mantenha a calma e confirme a segurança.",
        id: "Belok kanan di persimpangan berikutnya. Tetap tenang dan periksa keselamatan Anda sebelum melanjutkan.",
        ne: "अर्को चौराहेमा दाँया घुम्नुहोस्। शान्त रहनुहोस् र अगाडि बढ्नु अघि आफ्नो सुरक्षा जाँच गर्नुहोस्।",
        my: "နောက်လမ်းဆုံမှာ ညာဘက်ကွေ့ပါ။ ဆက်လက်မလုပ်ဆောင်မီ စိတ်ငြိမ်ငြိမ်ထားပြီး သင့်လုံခြုံရေးကို စစ်ဆေးပါ။"
      }
    }
  ]
},
{
  id: 35,
  stage: 2,
  title: "危険を予測した運転",
  description: "他の交通とのかかわりにおける危険を的確に予測し、危険を回避する運転行動を選べるようにします。",
  phraseCount: 18,

  sections: [
    {
      key: "point",
      label: "教官ワンポイント",
      japanese: "見えている危険だけでなく、見えない所から出てくる歩行者や自転車も予測しましょう。",
translations: {
        vi: "Không chỉ chú ý nguy hiểm đang thấy, hãy dự đoán cả người đi bộ hoặc xe đạp có thể xuất hiện từ nơi khuất.",
        en: "Predict not only visible hazards but also pedestrians or bicycles that may appear from blind spots.",
        zh: "不仅要注意看得见的危险，也要预测从盲区出现的行人和自行车。",
        pt: "Preveja não apenas os perigos visíveis, mas também pedestres ou bicicletas que podem sair de pontos cegos.",
        id: "Antisipasi tidak hanya bahaya yang terlihat, namun juga pejalan kaki dan sepeda yang mungkin menghalangi.",
        ne: "देखिने खतराहरू मात्र नभई पैदल यात्रीहरू र साइकलहरू जो बाटोबाट बाहिर आउन सक्छन् भनेर अनुमान गर्नुहोस्।",
        my: "မြင်သာသောအန္တရာယ်များသာမက လမ်းသွားလမ်းလာများပါ ထွက်လာနိုင်သည့် စက်ဘီးများနှင့် လမ်းသွားလမ်းလာများကိုလည်း ကြိုတင်ခန့်မှန်းပါ။"
      }
    },
    {
      key: "exam",
      label: "検定ポイント",
      japanese: "危険を早く発見し、速度を落とす、安全な間隔をあける、進路をゆずるなどの対応が重要です。",
translations: {
        vi: "Điều quan trọng là phát hiện nguy hiểm sớm, giảm tốc, giữ khoảng cách an toàn và nhường đường khi cần.",
        en: "It is important to detect hazards early, slow down, keep a safe distance and yield when necessary.",
        zh: "重要的是提前发现危险，减速，保持安全间隔，必要时让行。",
        pt: "É importante perceber o perigo cedo, reduzir a velocidade, manter distância segura e ceder passagem quando necessário.",
        id: "Penting untuk mengenali bahaya sejak dini dan mengambil tindakan seperti memperlambat kecepatan, meninggalkan jarak aman, dan berbelok.",
        ne: "खतरा छिट्टै पत्ता लगाउनु र ढिलो हुने, सुरक्षित दूरी छोड्ने र घुम्ने जस्ता कार्यहरू गर्न महत्त्वपूर्ण छ।",
        my: "အန္တရာယ်ကို စောစီးစွာသိရှိရန်နှင့် အရှိန်လျှော့ရန်၊ ဘေးကင်းသောအကွာအဝေးကို ချန်ထားရန်နှင့် ကွေ့ပတ်ခြင်းကဲ့သို့သော လုပ်ဆောင်ချက်များကို လုပ်ဆောင်ရန် အရေးကြီးပါသည်။"
      }
    },
    {
      key: "mistake",
      label: "よくある失敗",
      japanese: "前の車だけを見てしまい、歩行者、自転車、対向車、駐車車両の死角を見落とすことがあります。",
translations: {
        vi: "Lỗi thường gặp là chỉ nhìn xe phía trước và bỏ sót người đi bộ, xe đạp, xe đối diện hoặc điểm mù của xe đỗ.",
        en: "A common mistake is watching only the car ahead and missing pedestrians, bicycles, oncoming cars or blind spots.",
        zh: "常见错误是只看前车，忽略行人、自行车、对向车和停车车辆的盲区。",
        pt: "Um erro comum é olhar apenas o carro da frente e não perceber pedestres, bicicletas, veículos contrários ou pontos cegos.",
        id: "Anda mungkin hanya melihat mobil di depan Anda dan mengabaikan titik buta pejalan kaki, pengendara sepeda, lalu lintas yang melaju, dan kendaraan yang diparkir.",
        ne: "तपाईंले आफ्नो अगाडिको कारलाई मात्र हेरिरहनुभएको छ र पैदल यात्रीहरू, साइकल चालकहरू, आउँदै गरेको ट्राफिक, र पार्क गरिएका सवारीहरूको अन्धो ठाउँहरू हेरिरहनुभएको छ।",
        my: "သင့်ရှေ့တွင် ကားကိုသာ ကြည့်နေနိုင်ပြီး လမ်းသွားလမ်းလာများ၊ စက်ဘီးစီးသူများ၊ လာနေသော ယာဉ်ကြောပိတ်ဆို့မှုများနှင့် ရပ်ထားသည့် ယာဉ်များ၏ မမြင်နိုင်သောနေရာများကို သင်မြင်နေနိုင်သည်။"
      }
    },
    {
      key: "remember",
      label: "覚えておきたいこと",
      japanese: "雨の日や夜間は見えにくく、止まりにくくなります。いつもより早めに減速しましょう。",
translations: {
        vi: "Khi trời mưa hoặc ban đêm, khó nhìn hơn và khó dừng hơn. Hãy giảm tốc sớm hơn bình thường.",
        en: "In rain or at night, it is harder to see and harder to stop. Slow down earlier than usual.",
        zh: "雨天和夜间更难看清，也更难停车。请比平时更早减速。",
        pt: "Na chuva ou à noite, é mais difícil ver e parar. Reduza a velocidade mais cedo que o normal.",
        id: "Pada hari hujan dan malam hari, sulit untuk melihat dan berhenti. Pelan-pelan lebih awal dari biasanya.",
        ne: "वर्षाको दिन र रातमा, यो हेर्न र रोक्न गाह्रो छ। सामान्य भन्दा पहिले ढिलो गर्नुहोस्।",
        my: "မိုးရွာတဲ့နေ့တွေမှာရော ညဘက်တွေမှာပါ ရပ်တန့်ဖို့ ခက်ခဲပါတယ်။ ပုံမှန်ထက်စောပြီး အရှိန်လျှော့ပါ။"
      }
    },
    {
      key: "instruction",
      label: "教習で使う一言",
      japanese: "歩行者が出てくるかもしれません。速度を落として、広く確認してください。",
translations: {
        vi: "Có thể có người đi bộ xuất hiện. Hãy giảm tốc và quan sát rộng.",
        en: "A pedestrian may appear. Slow down and check widely.",
        zh: "可能会有行人出现。请减速并广泛观察。",
        pt: "Pode aparecer um pedestre. Reduza a velocidade e observe amplamente.",
        id: "Pejalan kaki mungkin muncul. Perlambat dan lihat lebih lebar.",
        ne: "पैदल यात्रीहरू देखा पर्न सक्छन्। ढिलो गर्नुहोस् र फराकिलो हेर्नुहोस्।",
        my: "လမ်းသွားလမ်းလာတွေ ပေါ်လာနိုင်တယ်။ နှေးကွေးပြီး ပိုကျယ်အောင်ကြည့်ပါ။"
      }
    }
  ]
},
{
  id: 36,
  stage: 2,
  title: "高速道路での運転",
  description: "高速走行の特性を知り、高速道路において安全に運転できるようにします。",
  phraseCount: 18,

  sections: [
    {
      key: "point",
      label: "教官ワンポイント",
      japanese: "高速道路では、出発前の点検、十分な加速、安全な車間距離がとても大切です。",
translations: {
        vi: "Trên đường cao tốc, kiểm tra xe trước khi đi, tăng tốc đủ và giữ khoảng cách an toàn là rất quan trọng.",
        en: "On expressways, pre-drive inspection, sufficient acceleration and safe following distance are very important.",
        zh: "在高速公路上，出发前检查、充分加速和保持安全车距非常重要。",
        pt: "Na rodovia, a inspeção antes da saída, aceleração suficiente e distância segura são muito importantes.",
        id: "Di jalan tol, sangat penting untuk memeriksa kendaraan Anda sebelum berangkat, berakselerasi secukupnya, dan menjaga jarak aman.",
        ne: "एक्सप्रेसवेहरूमा, प्रस्थान गर्नु अघि आफ्नो गाडीको जाँच गर्न, पर्याप्त गतिमा गति, र सुरक्षित निम्न दूरी कायम राख्न धेरै महत्त्वपूर्ण छ।",
        my: "အမြန်လမ်းများတွင်၊ မထွက်ခွာမီ သင့်ယာဉ်ကို စစ်ဆေးရန်၊ လုံလောက်စွာ အရှိန်မြှင့်ရန်နှင့် နောက်အကွာအဝေးကို လုံခြုံစွာ ထိန်းသိမ်းထားရန် အလွန်အရေးကြီးပါသည်။"
      }
    },
    {
      key: "exam",
      label: "検定ポイント",
      japanese: "本線への合流では、加速車線で十分に加速し、タイミングを見て流れに合わせます。",
translations: {
        vi: "Khi nhập vào làn chính, hãy tăng tốc đủ trên làn tăng tốc và hòa vào dòng xe đúng thời điểm.",
        en: "When merging onto the main lane, accelerate enough in the acceleration lane and join at the right timing.",
        zh: "汇入主线时，在加速车道充分加速，找准时机进入车流。",
        pt: "Ao entrar na via principal, acelere bem na faixa de aceleração e entre no fluxo no momento certo.",
        id: "Saat menyatu ke jalur utama, akselerasi secukupnya di jalur akselerasi dan perhatikan waktu Anda agar mengikuti arus.",
        ne: "मुख्य लाइनमा मर्ज गर्दा, एक्सेलेरेशन लेनमा पर्याप्त गतिमा गति लिनुहोस् र प्रवाहको साथ जाने तपाईंको समय हेर्नुहोस्।",
        my: "ပင်မမျဉ်းကို ပေါင်းလိုက်သောအခါ၊ အရှိန်လမ်းကြောင်းတွင် လုံလောက်စွာ အရှိန်မြှင့်ပြီး စီးဆင်းမှုနှင့်အတူ သွားမည့် သင်၏အချိန်ကို စောင့်ကြည့်ပါ။"
      }
    },
    {
      key: "mistake",
      label: "よくある失敗",
      japanese: "加速不足で合流したり、車間距離が近すぎたり、急な進路変更をしてしまうことがあります。",
translations: {
        vi: "Lỗi thường gặp là nhập làn khi chưa đủ tốc độ, giữ khoảng cách quá gần hoặc đổi làn đột ngột.",
        en: "Common mistakes are merging without enough speed, following too closely, or changing lanes suddenly.",
        zh: "常见错误是加速不足就汇入、车距过近、突然变更车道。",
        pt: "Erros comuns são entrar sem velocidade suficiente, seguir muito perto ou mudar de faixa de repente.",
        id: "Anda mungkin akan bergabung dengan akselerasi yang tidak mencukupi, mengikuti terlalu dekat, atau membuat perubahan arah secara tiba-tiba.",
        ne: "तपाईं अपर्याप्त प्रवेग संग मर्ज गर्न सक्नुहुन्छ, धेरै नजिकबाट पछ्याउँदै, वा दिशामा अचानक परिवर्तनहरू गर्न सक्नुहुन्छ।",
        my: "မလုံလောက်သောအရှိန်ဖြင့် ပေါင်းစည်းခြင်း၊ အလွန်နီးကပ်စွာ လိုက်လျှောက်ခြင်း သို့မဟုတ် ဦးတည်ချက် ရုတ်တရက် ပြောင်းလဲခြင်းများ ပြုလုပ်နိုင်သည်။"
      }
    },
    {
      key: "remember",
      label: "覚えておきたいこと",
      japanese: "80km/hでは約80m、100km/hでは約100mを目安に、十分な車間距離を保ちましょう。",
translations: {
        vi: "Hãy giữ khoảng cách an toàn: khoảng 80m khi chạy 80km/h và khoảng 100m khi chạy 100km/h.",
        en: "Keep a safe following distance: about 80 meters at 80 km/h and about 100 meters at 100 km/h.",
        zh: "请保持安全车距：80公里/小时时约80米，100公里/小时时约100米。",
        pt: "Mantenha distância segura: cerca de 80 m a 80 km/h e cerca de 100 m a 100 km/h.",
        id: "Jaga jarak yang cukup antar kendaraan, kira-kira 80 m pada kecepatan 80 km/jam dan kira-kira 100 m pada kecepatan 100 km/jam.",
        ne: "सवारी साधनहरू बीच पर्याप्त दूरी कायम गर्नुहोस्, लगभग 80km/h मा 80m र 100km/h मा लगभग 100m।",
        my: "မော်တော်ယာဉ်များအကြား လုံလောက်သောအကွာအဝေးကို ထိန်းသိမ်းထားပါ၊ ခန့်မှန်းခြေအားဖြင့် 80km/h တွင် 80m နှင့် 100m ခန့်မှန်းခြေအားဖြင့် 100km/h တွင်ရှိပါသည်။"
      }
    },
    {
      key: "instruction",
      label: "教習で使う一言",
      japanese: "加速車線でしっかり加速してください。ミラーで確認して、安全なタイミングで合流しましょう。",
translations: {
        vi: "Hãy tăng tốc chắc chắn trên làn tăng tốc. Kiểm tra gương và nhập làn khi an toàn.",
        en: "Accelerate firmly in the acceleration lane. Check the mirrors and merge when it is safe.",
        zh: "请在加速车道充分加速。确认后视镜，在安全时机汇入。",
        pt: "Acelere bem na faixa de aceleração. Verifique os espelhos e entre quando for seguro.",
        id: "Akselerasi dengan kuat di jalur akselerasi. Periksa di cermin dan bertemu di waktu yang aman.",
        ne: "एक्सेलेरेशन लेनमा दृढतापूर्वक गति गर्नुहोस्। सुरक्षित समयमा मिरर र भेटघाट जाँच गर्नुहोस्।",
        my: "အရှိန်အဟုန်တွင် ခိုင်မြဲစွာ အရှိန်မြှင့်ပါ။ မှန်ကိုစစ်ဆေးပြီး ဘေးကင်းသောအချိန်တွင် ဆုံရပ်ပါ။"
      }
    }
  ]
},
{
  id: 37,
  stage: 2,
  title: "特別項目",
  description: "地域特性などからみて必要性の高い運転技能を修得します。",
  phraseCount: 18,

  sections: [
    {
      key: "point",
      label: "教官ワンポイント",
      japanese: "山道・雪道・都市高速では道路状況に合わせ、無理をしない運転を心掛けましょう。",
translations: {
        vi: "Khi lái xe trên đường núi, đường tuyết hoặc đường cao tốc đô thị, hãy lái xe phù hợp với điều kiện đường và không cố quá sức.",
        en: "Drive according to road conditions on mountain roads, snowy roads and urban expressways. Never push yourself.",
        zh: "在山路、雪道和城市高速公路行驶时，应根据道路状况安全驾驶，不要勉强。",
        pt: "Em estradas de montanha, com neve e vias expressas urbanas, dirija de acordo com as condições da via e sem forçar.",
        id: "Saat berkendara di jalan pegunungan, jalan yang tertutup salju, dan jalan tol perkotaan, pastikan mengemudi dengan benar tergantung pada kondisi jalan.",
        ne: "पहाडी सडकहरू, हिउँले ढाकिएका सडकहरू, र शहरी एक्सप्रेसवेहरूमा ड्राइभ गर्दा, सडकको अवस्थाको आधारमा उपयुक्त रूपमा ड्राइभ गर्न निश्चित हुनुहोस्।",
        my: "တောင်လမ်းများ၊ နှင်းဖုံးနေသောလမ်းများနှင့် မြို့ပြအမြန်လမ်းများပေါ်တွင် မောင်းနှင်သည့်အခါ လမ်းအခြေအနေပေါ်မူတည်၍ သင့်လျော်စွာမောင်းနှင်ရန် သေချာပါစေ။"
      }
    },
    {
      key: "exam",
      label: "検定ポイント",
      japanese: "カーブ手前で十分減速し、雪道では急ハンドル・急ブレーキ・急加速を避けます。",
translations: {
        vi: "Giảm tốc trước khúc cua và tránh đánh lái gấp, phanh gấp hoặc tăng tốc gấp trên đường tuyết.",
        en: "Slow down before curves and avoid sudden steering, braking or acceleration on snowy roads.",
        zh: "弯道前充分减速，在雪道避免急转向、急刹车和急加速。",
        pt: "Reduza a velocidade antes das curvas e evite movimentos bruscos em pistas com neve.",
        id: "Pelankan kecepatan secukupnya sebelum tikungan, dan hindari kemudi mendadak, pengereman, dan akselerasi mendadak di jalan bersalju.",
        ne: "कर्भ अघि पर्याप्त ढिलो गर्नुहोस्, र हिउँले भरिएका सडकहरूमा अचानक स्टेयरिङ, ब्रेकिङ, र अचानक गतिलाई बेवास्ता गर्नुहोस्।",
        my: "လမ်းကွေ့မရောက်မီ လုံလောက်စွာ နှေးကွေးပြီး နှင်းများထူထပ်သော လမ်းများပေါ်တွင် ရုတ်တရက် စတီယာရင်၊ ဘရိတ်အုပ်ခြင်းနှင့် ရုတ်တရက် အရှိန်မြှင့်ခြင်းကို ရှောင်ကြဉ်ပါ။"
      }
    },
    {
      key: "mistake",
      label: "よくある失敗",
      japanese: "速度の出し過ぎや急な操作、標識や案内表示を見落としてしまうことがあります。",
translations: {
        vi: "Lỗi thường gặp là chạy quá nhanh, thao tác đột ngột hoặc bỏ sót biển báo và biển chỉ dẫn.",
        en: "Common mistakes are excessive speed, sudden operations, and overlooking signs or guidance boards.",
        zh: "常见错误是速度过快、操作突然，以及忽视标志和指示牌。",
        pt: "Erros comuns são excesso de velocidade, manobras bruscas e não observar as placas.",
        id: "Anda mungkin mengemudi terlalu cepat, melakukan manuver tiba-tiba, atau mengabaikan rambu dan tampilan informasi.",
        ne: "तपाईं धेरै छिटो ड्राइभ गर्न सक्नुहुन्छ, अचानक चालहरू गर्न सक्नुहुन्छ, वा संकेतहरू र जानकारी प्रदर्शनहरूलाई बेवास्ता गर्न सक्नुहुन्छ।",
        my: "သင်သည် အလွန်လျင်မြန်စွာ မောင်းနှင်ခြင်း၊ ရုတ်တရက် တိမ်းရှောင်ခြင်း သို့မဟုတ် ဆိုင်းဘုတ်များနှင့် အချက်အလက်ပြသမှုများကို မေ့ထားနိုင်သည်။"
      }
    },
    {
      key: "remember",
      label: "覚えておきたいこと",
      japanese: "危険を予測し、早めの減速と十分な車間距離を心掛けることが安全運転につながります。",
translations: {
        vi: "Dự đoán nguy hiểm, giảm tốc sớm và giữ khoảng cách an toàn sẽ giúp lái xe an toàn.",
        en: "Predict hazards, slow down early and maintain a safe following distance.",
        zh: "预测危险，提前减速并保持充足车距，是安全驾驶的关键。",
        pt: "Prever os perigos, reduzir cedo a velocidade e manter distância segura garantem uma condução segura.",
        id: "Mengantisipasi bahaya, memperlambat kecepatan sejak dini, dan menjaga jarak antar kendaraan yang cukup akan menghasilkan berkendara yang aman.",
        ne: "खतराको अनुमान गर्दै, चाँडै ढिलो गर्नु, र सवारी साधनहरू बीच पर्याप्त दूरी राख्दा सुरक्षित ड्राइभिङ हुन्छ।",
        my: "အန္တရာယ်ကို ကြိုတင်ခန့်မှန်းခြင်း၊ စောစီးစွာ အရှိန်လျှော့ခြင်းနှင့် ယာဉ်များကြား လုံလောက်သော အကွာအဝေးကို ထားရှိခြင်းဖြင့် ဘေးကင်းစွာ မောင်းနှင်နိုင်မည်ဖြစ်ပါသည်။"
      }
    },
    {
      key: "instruction",
      label: "教習で使う一言",
      japanese: "速度を少し落としてください。標識を確認しながら、安全第一で進みましょう。",
translations: {
        vi: "Hãy giảm tốc độ một chút. Quan sát biển báo và tiếp tục lái xe an toàn.",
        en: "Slow down a little. Check the signs and continue safely.",
        zh: "请稍微降低速度，确认标志后安全行驶。",
        pt: "Reduza um pouco a velocidade. Observe as placas e continue com segurança.",
        id: "Tolong pelan-pelan sedikit. Silakan periksa tanda-tandanya dan lanjutkan dengan keselamatan terlebih dahulu.",
        ne: "कृपया अलि ढिलो गर्नुहोस्। कृपया संकेतहरू जाँच गर्नुहोस् र पहिले सुरक्षाको साथ अगाडि बढ्नुहोस्।",
        my: "ကျေးဇူးပြုပြီး နည်းနည်းနှေးပေးပါ။ ကျေးဇူးပြု၍ ဆိုင်းဘုတ်များကို စစ်ဆေးပြီး ဘေးကင်းစေရန် ဦးစွာဆောင်ရွက်ပါ။"
      }
    }
  ]
},
];
