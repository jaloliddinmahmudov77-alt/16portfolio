/*
  Ma'lumotlarni saqlash.
  Admin paneldagi o'zgarishlar shu brauzerning xotirasida (localStorage) saqlanadi.
  Hamma uchun doimiy qilish uchun admin paneldan "data.js ni yuklab olish" tugmasini
  bosib, eski data.js faylini yangisi bilan almashtiring.
*/
const SAQLASH_KALITI = "16portfolio_oquvchilar";
const PAROL_KALITI = "16portfolio_parol";
const STANDART_PAROL = "16maktab";

function yangiId() {
  return "o" + Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
}

function idQoshish(royxat) {
  return royxat.map((o) => (o.id ? o : { ...o, id: yangiId() }));
}

function oquvchilarniYukla() {
  try {
    const s = localStorage.getItem(SAQLASH_KALITI);
    if (s) return idQoshish(JSON.parse(s));
  } catch (e) { /* buzilgan bo'lsa data.js dan olamiz */ }
  return idQoshish(typeof oquvchilar !== "undefined" ? oquvchilar : []);
}

// Xotira to'lsa xato qaytaradi (true = saqlandi)
function oquvchilarniSaqla(royxat) {
  try {
    localStorage.setItem(SAQLASH_KALITI, JSON.stringify(royxat));
    return true;
  } catch (e) {
    return false;
  }
}

function asliHolatgaQaytarish() {
  localStorage.removeItem(SAQLASH_KALITI);
}

// Oddiy xesh (parolni ochiq matnda saqlamaslik uchun)
function xesh(matn) {
  let h1 = 0xdeadbeef, h2 = 0x41c6ce57;
  for (let i = 0; i < matn.length; i++) {
    const c = matn.charCodeAt(i);
    h1 = Math.imul(h1 ^ c, 2654435761);
    h2 = Math.imul(h2 ^ c, 1597334677);
  }
  h1 = Math.imul(h1 ^ (h1 >>> 16), 2246822507) ^ Math.imul(h2 ^ (h2 >>> 13), 3266489909);
  h2 = Math.imul(h2 ^ (h2 >>> 16), 2246822507) ^ Math.imul(h1 ^ (h1 >>> 13), 3266489909);
  return (h2 >>> 0).toString(16) + (h1 >>> 0).toString(16);
}

function parolTogrimi(parol) {
  const saqlangan = localStorage.getItem(PAROL_KALITI) || xesh(STANDART_PAROL);
  return xesh(parol) === saqlangan;
}

function parolniOzgartir(yangi) {
  localStorage.setItem(PAROL_KALITI, xesh(yangi));
}

function xavfsiz(matn) {
  return String(matn ?? "").replace(/[&<>"']/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
}

const RANGLAR = ["#4f46e5", "#7c3aed", "#db2777", "#0891b2", "#059669", "#d97706", "#dc2626"];

// Rasm bo'lmasa — ism bosh harflaridan avatar
function avatar(o) {
  const harflar = ((o.ism || " ")[0] + (o.familiya || " ")[0]).toUpperCase();
  const rang = RANGLAR[((o.ism || "").length + (o.familiya || "").length) % RANGLAR.length];
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'>
    <defs><linearGradient id='g' x1='0' y1='0' x2='1' y2='1'>
      <stop offset='0' stop-color='${rang}'/><stop offset='1' stop-color='#1e1b4b'/></linearGradient></defs>
    <rect width='200' height='200' fill='url(#g)'/>
    <text x='50%' y='54%' font-family='Segoe UI,Arial' font-size='80' font-weight='700'
      fill='white' text-anchor='middle' dominant-baseline='middle'>${xavfsiz(harflar)}</text></svg>`;
  return "data:image/svg+xml;charset=utf-8," + encodeURIComponent(svg);
}

function rasmManzili(o) {
  return o.rasm ? o.rasm : avatar(o);
}
