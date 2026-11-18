/*
  O'QUVCHILAR RO'YXATI
  ====================
  Yangi o'quvchi qo'shish uchun quyidagi namunadan nusxa oling:

  {
    ism: "Ali",
    familiya: "Valiyev",
    sinf: 7,                 // 1 dan 11 gacha
    harf: "A",               // "A" yoki "B"
    rasm: "rasmlar/ali.jpg", // rasmni "rasmlar" papkasiga qo'ying. Bo'sh qoldirsangiz ("") avatar chiqadi
    tugilgan: "12.03.2013",
    orttachaBaho: 4.8,
    haqida: "O'zi haqida qisqacha ma'lumot",
    yutuqlar: ["Yutuq 1", "Yutuq 2"],
    qiziqishlar: ["Futbol", "Kitob"],
    orzu: "Kelajakdagi orzusi"
  },

  Pastdagi o'quvchilar — NAMUNA. Ularni o'z o'quvchilaringiz bilan almashtiring.
*/

const oquvchilar = [
  // ===== 1-sinf =====
  { ism: "Muhammad", familiya: "Karimov", sinf: 1, harf: "A", rasm: "", tugilgan: "05.02.2019", orttachaBaho: 5,
    haqida: "Rasm chizishni va ertak tinglashni yaxshi ko'raman.", yutuqlar: ["Maktab rasm tanlovi — 2-o'rin"],
    qiziqishlar: ["Rasm", "Ertaklar"], orzu: "Rassom bo'lish" },
  { ism: "Sevara", familiya: "Aliyeva", sinf: 1, harf: "A", rasm: "", tugilgan: "17.06.2019", orttachaBaho: 5,
    haqida: "Harflarni tez o'rgandim, she'r yodlashni yaxshi ko'raman.", yutuqlar: ["Eng yaxshi she'r o'qigan o'quvchi"],
    qiziqishlar: ["She'riyat", "Raqs"], orzu: "O'qituvchi bo'lish" },
  { ism: "Abdulloh", familiya: "Rahimov", sinf: 1, harf: "B", rasm: "", tugilgan: "11.09.2019", orttachaBaho: 5,
    haqida: "Sport bilan shug'ullanaman, futbolni yaxshi ko'raman.", yutuqlar: ["Kichik olimpiada ishtirokchisi"],
    qiziqishlar: ["Futbol", "Lego"], orzu: "Futbolchi bo'lish" },
  { ism: "Mohinur", familiya: "Yusupova", sinf: 1, harf: "B", rasm: "", tugilgan: "23.01.2019", orttachaBaho: 5,
    haqida: "Qo'shiq aytishni va rasm bo'yashni yoqtiraman.", yutuqlar: ["Bayram tadbirida qo'shiq ijrosi"],
    qiziqishlar: ["Musiqa", "Rasm"], orzu: "Xonanda bo'lish" },

  // ===== 2-sinf =====
  { ism: "Jasur", familiya: "Toshmatov", sinf: 2, harf: "A", rasm: "", tugilgan: "14.04.2018", orttachaBaho: 4.9,
    haqida: "Matematikani yaxshi ko'raman, misollarni tez yechaman.", yutuqlar: ["Mental arifmetika — 1-o'rin"],
    qiziqishlar: ["Matematika", "Shaxmat"], orzu: "Muhandis bo'lish" },
  { ism: "Madina", familiya: "Ergasheva", sinf: 2, harf: "A", rasm: "", tugilgan: "30.08.2018", orttachaBaho: 5,
    haqida: "Kitob o'qishni juda yaxshi ko'raman.", yutuqlar: ["Kitobxon bola tanlovi g'olibi"],
    qiziqishlar: ["Kitob", "Gimnastika"], orzu: "Shifokor bo'lish" },
  { ism: "Sardor", familiya: "Nazarov", sinf: 2, harf: "B", rasm: "", tugilgan: "02.12.2018", orttachaBaho: 4.7,
    haqida: "Ingliz tilini o'rganyapman, multfilmlarni inglizcha ko'raman.", yutuqlar: ["Ingliz tili to'garagi faoli"],
    qiziqishlar: ["Ingliz tili", "Suzish"], orzu: "Uchuvchi bo'lish" },
  { ism: "Zarina", familiya: "Qodirova", sinf: 2, harf: "B", rasm: "", tugilgan: "19.05.2018", orttachaBaho: 5,
    haqida: "Qo'l mehnati va origamini yaxshi ko'raman.", yutuqlar: ["Ko'rgazmada origami ishlari"],
    qiziqishlar: ["Origami", "Rasm"], orzu: "Dizayner bo'lish" },

  // ===== 3-sinf =====
  { ism: "Bekzod", familiya: "Ismoilov", sinf: 3, harf: "A", rasm: "", tugilgan: "08.03.2017", orttachaBaho: 4.8,
    haqida: "Shaxmat to'garagiga qatnayman.", yutuqlar: ["Tuman shaxmat musobaqasi — 3-o'rin"],
    qiziqishlar: ["Shaxmat", "Matematika"], orzu: "Grossmeyster bo'lish" },
  { ism: "Nilufar", familiya: "Saidova", sinf: 3, harf: "A", rasm: "", tugilgan: "21.07.2017", orttachaBaho: 5,
    haqida: "Tabiat va hayvonlar haqida o'qishni yoqtiraman.", yutuqlar: ["\"Yosh ekolog\" tanlovi ishtirokchisi"],
    qiziqishlar: ["Tabiat", "Hayvonlar"], orzu: "Veterinar bo'lish" },
  { ism: "Otabek", familiya: "Mirzayev", sinf: 3, harf: "B", rasm: "", tugilgan: "15.10.2017", orttachaBaho: 4.6,
    haqida: "Karate bilan shug'ullanaman.", yutuqlar: ["Karate — sariq kamar"],
    qiziqishlar: ["Karate", "Velosiped"], orzu: "Sportchi bo'lish" },
  { ism: "Shahzoda", familiya: "Umarova", sinf: 3, harf: "B", rasm: "", tugilgan: "04.01.2017", orttachaBaho: 4.9,
    haqida: "Pianino chalishni o'rganyapman.", yutuqlar: ["Musiqa maktabi konserti ishtirokchisi"],
    qiziqishlar: ["Pianino", "Raqs"], orzu: "Musiqachi bo'lish" },

  // ===== 4-sinf =====
  { ism: "Doniyor", familiya: "Xolmatov", sinf: 4, harf: "A", rasm: "", tugilgan: "27.02.2016", orttachaBaho: 4.9,
    haqida: "Robototexnika bilan qiziqaman.", yutuqlar: ["Robototexnika ko'rgazmasi — 2-o'rin"],
    qiziqishlar: ["Robotlar", "Kompyuter"], orzu: "Dasturchi bo'lish" },
  { ism: "Malika", familiya: "Hasanova", sinf: 4, harf: "A", rasm: "", tugilgan: "12.06.2016", orttachaBaho: 5,
    haqida: "Ona tili va adabiyot fanlarini yaxshi ko'raman.", yutuqlar: ["\"Eng yaxshi insho\" tanlovi g'olibi"],
    qiziqishlar: ["Insho yozish", "Kitob"], orzu: "Jurnalist bo'lish" },
  { ism: "Islom", familiya: "Jo'rayev", sinf: 4, harf: "B", rasm: "", tugilgan: "09.11.2016", orttachaBaho: 4.7,
    haqida: "Futbol jamoasida o'ynayman.", yutuqlar: ["Maktablararo futbol — 1-o'rin"],
    qiziqishlar: ["Futbol", "Yugurish"], orzu: "Professional futbolchi bo'lish" },
  { ism: "Gulnoza", familiya: "Abdullayeva", sinf: 4, harf: "B", rasm: "", tugilgan: "18.04.2016", orttachaBaho: 4.8,
    haqida: "Rasm chizish va tikuvchilikni yoqtiraman.", yutuqlar: ["Viloyat rasm tanlovi ishtirokchisi"],
    qiziqishlar: ["Rasm", "Tikuvchilik"], orzu: "Modelyer bo'lish" },

  // ===== 5-sinf =====
  { ism: "Azizbek", familiya: "Sobirov", sinf: 5, harf: "A", rasm: "", tugilgan: "03.05.2015", orttachaBaho: 4.8,
    haqida: "Matematika olimpiadalariga tayyorlanaman.", yutuqlar: ["Tuman matematika olimpiadasi — 1-o'rin"],
    qiziqishlar: ["Matematika", "Shaxmat"], orzu: "Olim bo'lish" },
  { ism: "Dilnoza", familiya: "Rustamova", sinf: 5, harf: "A", rasm: "", tugilgan: "26.09.2015", orttachaBaho: 5,
    haqida: "Ingliz tilini mukammal o'rganmoqchiman.", yutuqlar: ["Ingliz tili olimpiadasi — 2-o'rin"],
    qiziqishlar: ["Ingliz tili", "Sayohat"], orzu: "Tarjimon bo'lish" },
  { ism: "Shohruh", familiya: "Normatov", sinf: 5, harf: "B", rasm: "", tugilgan: "14.12.2015", orttachaBaho: 4.5,
    haqida: "Kompyuter va o'yinlar yaratishga qiziqaman.", yutuqlar: ["Scratch loyihasi taqdimoti"],
    qiziqishlar: ["Dasturlash", "Kurash"], orzu: "O'yin yaratuvchi bo'lish" },
  { ism: "Feruza", familiya: "Tursunova", sinf: 5, harf: "B", rasm: "", tugilgan: "07.03.2015", orttachaBaho: 4.9,
    haqida: "Biologiya va o'simliklarga qiziqaman.", yutuqlar: ["\"Yashil maktab\" loyihasi faoli"],
    qiziqishlar: ["Biologiya", "Bog'dorchilik"], orzu: "Biolog bo'lish" },

  // ===== 6-sinf =====
  { ism: "Javohir", familiya: "Bakirov", sinf: 6, harf: "A", rasm: "", tugilgan: "22.01.2014", orttachaBaho: 4.7,
    haqida: "Tarix fanini yaxshi ko'raman, tarixiy kitoblar o'qiyman.", yutuqlar: ["Tarix bilimdonlari — 1-o'rin"],
    qiziqishlar: ["Tarix", "Futbol"], orzu: "Tarixchi bo'lish" },
  { ism: "Kamola", familiya: "Ahmedova", sinf: 6, harf: "A", rasm: "", tugilgan: "10.08.2014", orttachaBaho: 5,
    haqida: "Sinf sardoriman, tadbirlarni tashkil qilishni yoqtiraman.", yutuqlar: ["\"Yil o'quvchisi\" nominatsiyasi"],
    qiziqishlar: ["Liderlik", "Voleybol"], orzu: "Tadbirkor bo'lish" },
  { ism: "Ulug'bek", familiya: "Haydarov", sinf: 6, harf: "B", rasm: "", tugilgan: "29.06.2014", orttachaBaho: 4.6,
    haqida: "Astronomiyaga qiziqaman, yulduzlarni kuzataman.", yutuqlar: ["\"Kosmos\" mavzusidagi loyiha"],
    qiziqishlar: ["Astronomiya", "Fizika"], orzu: "Kosmonavt bo'lish" },
  { ism: "Sabina", familiya: "Latipova", sinf: 6, harf: "B", rasm: "", tugilgan: "16.02.2014", orttachaBaho: 4.8,
    haqida: "Gimnastika bilan shug'ullanaman.", yutuqlar: ["Badiiy gimnastika — tuman 1-o'rni"],
    qiziqishlar: ["Gimnastika", "Raqs"], orzu: "Olimpiya chempioni bo'lish" },

  // ===== 7-sinf =====
  { ism: "Sherzod", familiya: "Komilov", sinf: 7, harf: "A", rasm: "", tugilgan: "05.10.2013", orttachaBaho: 4.9,
    haqida: "Python dasturlash tilini o'rganyapman.", yutuqlar: ["IT-maktab kursi sertifikati"],
    qiziqishlar: ["Dasturlash", "Matematika"], orzu: "Dasturchi bo'lish" },
  { ism: "Laylo", familiya: "Mamatova", sinf: 7, harf: "A", rasm: "", tugilgan: "13.03.2013", orttachaBaho: 5,
    haqida: "Kimyo fanidan tajribalar qilishni yaxshi ko'raman.", yutuqlar: ["Kimyo olimpiadasi — tuman 2-o'rni"],
    qiziqishlar: ["Kimyo", "Kitob"], orzu: "Farmatsevt bo'lish" },
  { ism: "Asadbek", familiya: "Yo'ldoshev", sinf: 7, harf: "B", rasm: "", tugilgan: "24.07.2013", orttachaBaho: 4.5,
    haqida: "Kurash bo'yicha mashg'ulotlarga qatnayman.", yutuqlar: ["Kurash — viloyat 3-o'rni"],
    qiziqishlar: ["Kurash", "Sport"], orzu: "Chempion bo'lish" },
  { ism: "Munisa", familiya: "Fayzullayeva", sinf: 7, harf: "B", rasm: "", tugilgan: "01.12.2013", orttachaBaho: 4.8,
    haqida: "She'r yozaman va adabiy to'garakka qatnayman.", yutuqlar: ["Yosh shoirlar tanlovi diplomi"],
    qiziqishlar: ["She'riyat", "Adabiyot"], orzu: "Yozuvchi bo'lish" },

  // ===== 8-sinf =====
  { ism: "Behruz", familiya: "Ortiqov", sinf: 8, harf: "A", rasm: "", tugilgan: "18.09.2012", orttachaBaho: 4.7,
    haqida: "Fizika va texnikaga qiziqaman.", yutuqlar: ["Fizika olimpiadasi — tuman 1-o'rni"],
    qiziqishlar: ["Fizika", "Elektronika"], orzu: "Muhandis bo'lish" },
  { ism: "Mohira", familiya: "Sultonova", sinf: 8, harf: "A", rasm: "", tugilgan: "06.04.2012", orttachaBaho: 5,
    haqida: "Rus va ingliz tillarini o'rganaman.", yutuqlar: ["IELTS ga tayyorgarlik — 6.0 (mock)"],
    qiziqishlar: ["Tillar", "Sayohat"], orzu: "Diplomat bo'lish" },
  { ism: "Temur", familiya: "Rashidov", sinf: 8, harf: "B", rasm: "", tugilgan: "11.01.2012", orttachaBaho: 4.4,
    haqida: "Basketbol jamoasining sardoriman.", yutuqlar: ["Basketbol — shahar 2-o'rni"],
    qiziqishlar: ["Basketbol", "Musiqa"], orzu: "Murabbiy bo'lish" },
  { ism: "Nodira", familiya: "Xudoyberdiyeva", sinf: 8, harf: "B", rasm: "", tugilgan: "28.05.2012", orttachaBaho: 4.9,
    haqida: "Grafik dizayn bilan shug'ullanaman.", yutuqlar: ["Maktab gazetasi dizayneri"],
    qiziqishlar: ["Dizayn", "Fotografiya"], orzu: "Grafik dizayner bo'lish" },

  // ===== 9-sinf =====
  { ism: "Firdavs", familiya: "Qosimov", sinf: 9, harf: "A", rasm: "", tugilgan: "09.02.2011", orttachaBaho: 4.8,
    haqida: "Iqtisodiyot va moliyaga qiziqaman.", yutuqlar: ["\"Yosh iqtisodchi\" tanlovi g'olibi"],
    qiziqishlar: ["Iqtisod", "Shaxmat"], orzu: "Bankir bo'lish" },
  { ism: "Shahnoza", familiya: "Ibragimova", sinf: 9, harf: "A", rasm: "", tugilgan: "20.10.2011", orttachaBaho: 5,
    haqida: "Biologiya olimpiadalarida qatnashaman.", yutuqlar: ["Biologiya — viloyat 1-o'rni"],
    qiziqishlar: ["Biologiya", "Tibbiyot"], orzu: "Jarroh bo'lish" },
  { ism: "Ozodbek", familiya: "Nurmatov", sinf: 9, harf: "B", rasm: "", tugilgan: "15.07.2011", orttachaBaho: 4.6,
    haqida: "Veb-saytlar yaratishni o'rganyapman.", yutuqlar: ["Maktab sayti uchun loyiha"],
    qiziqishlar: ["Veb-dasturlash", "Futbol"], orzu: "Frontend dasturchi bo'lish" },
  { ism: "Robiya", familiya: "Salimova", sinf: 9, harf: "B", rasm: "", tugilgan: "03.03.2011", orttachaBaho: 4.9,
    haqida: "Huquq va jamiyat fanlarini yaxshi ko'raman.", yutuqlar: ["Debat klubi — 1-o'rin"],
    qiziqishlar: ["Debat", "Huquq"], orzu: "Advokat bo'lish" },

  // ===== 10-sinf =====
  { ism: "Akmal", familiya: "Zokirov", sinf: 10, harf: "A", rasm: "", tugilgan: "25.08.2010", orttachaBaho: 4.9,
    haqida: "Matematika va informatika bo'yicha olimpiadachiman.", yutuqlar: ["Informatika — respublika bosqichi ishtirokchisi"],
    qiziqishlar: ["Algoritmlar", "Matematika"], orzu: "Xalqaro universitetda o'qish" },
  { ism: "Mushtariy", familiya: "Hamidova", sinf: 10, harf: "A", rasm: "", tugilgan: "12.12.2010", orttachaBaho: 5,
    haqida: "Ingliz tilidan IELTS 7.0 natijam bor.", yutuqlar: ["IELTS 7.0", "Volontyorlik sertifikati"],
    qiziqishlar: ["Ingliz tili", "Volontyorlik"], orzu: "Xalqaro jurnalist bo'lish" },
  { ism: "Sanjar", familiya: "Po'latov", sinf: 10, harf: "B", rasm: "", tugilgan: "07.06.2010", orttachaBaho: 4.5,
    haqida: "Boks bilan shug'ullanaman va fizikani yoqtiraman.", yutuqlar: ["Boks — viloyat 1-o'rni"],
    qiziqishlar: ["Boks", "Fizika"], orzu: "Harbiy ofitser bo'lish" },
  { ism: "Durdona", familiya: "Rahmonova", sinf: 10, harf: "B", rasm: "", tugilgan: "19.04.2010", orttachaBaho: 4.8,
    haqida: "Kimyo va biologiya yo'nalishida tayyorlanaman.", yutuqlar: ["Kimyo — viloyat 2-o'rni"],
    qiziqishlar: ["Kimyo", "Tibbiyot"], orzu: "Shifokor bo'lish" },

  // ===== 11-sinf =====
  { ism: "Bobur", familiya: "Rasulov", sinf: 11, harf: "A", rasm: "", tugilgan: "14.01.2009", orttachaBaho: 4.9,
    haqida: "Dasturlash va veb-dizayn bilan shug'ullanaman, o'z saytlarimni yarataman.",
    yutuqlar: ["Maktab sayti loyihasi muallifi", "IT-olimpiada — viloyat 2-o'rni"],
    qiziqishlar: ["Dasturlash", "Dizayn", "Futbol"], orzu: "Katta IT kompaniyada ishlash" },
  { ism: "Sitora", familiya: "Mahmudova", sinf: 11, harf: "A", rasm: "", tugilgan: "30.09.2009", orttachaBaho: 5,
    haqida: "Oliy o'quv yurtiga tibbiyot yo'nalishida tayyorlanaman.", yutuqlar: ["Biologiya — respublika 3-o'rni", "Oltin medal nomzodi"],
    qiziqishlar: ["Tibbiyot", "Kitob"], orzu: "Kardiolog bo'lish" },
  { ism: "Jahongir", familiya: "Alimov", sinf: 11, harf: "B", rasm: "", tugilgan: "08.05.2009", orttachaBaho: 4.6,
    haqida: "Iqtisodiyot yo'nalishida o'qishni rejalashtiryapman.", yutuqlar: ["Biznes-reja tanlovi g'olibi"],
    qiziqishlar: ["Biznes", "Basketbol"], orzu: "O'z kompaniyamni ochish" },
  { ism: "Zilola", familiya: "Odilova", sinf: 11, harf: "B", rasm: "", tugilgan: "22.11.2009", orttachaBaho: 4.9,
    haqida: "Filologiya va tarjimonlikka qiziqaman.", yutuqlar: ["CEFR C1 sertifikati", "Insho tanlovi — viloyat 1-o'rni"],
    qiziqishlar: ["Tillar", "Adabiyot"], orzu: "Tarjimon bo'lish" },
];
