const $ = (id) => document.getElementById(id);
let royxat = oquvchilarniYukla();
let tahrirId = null;       // null = yangi o'quvchi
let formaRasm = "";        // formadagi joriy rasm (data URL yoki manzil)

/* ---------- Bildirishnoma ---------- */
let toastTaymer;
function xabar(matn, xato = false) {
  const t = $("toast");
  t.textContent = matn;
  t.classList.toggle("err", xato);
  t.classList.add("show");
  clearTimeout(toastTaymer);
  toastTaymer = setTimeout(() => t.classList.remove("show"), 2800);
}

/* ---------- Kirish ---------- */
function panelniOch() {
  $("login").hidden = true;
  $("panel").hidden = false;
  chiz();
}
if (sessionStorage.getItem("16portfolio_kirgan") === "1") panelniOch();

$("login-form").addEventListener("submit", (e) => {
  e.preventDefault();
  if (parolTogrimi($("parol").value)) {
    sessionStorage.setItem("16portfolio_kirgan", "1");
    panelniOch();
  } else {
    $("login-xato").textContent = "Parol noto'g'ri";
    const box = document.querySelector(".login-box");
    box.classList.remove("shake"); void box.offsetWidth; box.classList.add("shake");
    $("parol").select();
  }
});
$("chiqish").addEventListener("click", () => {
  sessionStorage.removeItem("16portfolio_kirgan");
  location.reload();
});

/* ---------- Saqlash ---------- */
function saqla(muvaffaqiyatMatni) {
  if (oquvchilarniSaqla(royxat)) {
    xabar(muvaffaqiyatMatni);
    return true;
  }
  xabar("Xotira to'ldi! Rasmlar juda ko'p. data.js ni yuklab oling yoki rasmlarni 'rasmlar' papkasiga qo'ying.", true);
  return false;
}

/* ---------- Ro'yxat ---------- */
for (let s = 1; s <= 11; s++) {
  $("a-sinf").insertAdjacentHTML("beforeend", `<option value="${s}">${s}-sinf</option>`);
  $("f-sinf").insertAdjacentHTML("beforeend", `<option value="${s}">${s}-sinf</option>`);
}

function chiz() {
  const q = $("a-qidiruv").value.trim().toLowerCase();
  const sinf = Number($("a-sinf").value);
  const harf = $("a-harf").value;
  const natija = royxat
    .filter((o) =>
      (!sinf || Number(o.sinf) === sinf) && (!harf || o.harf === harf) &&
      (!q || `${o.ism} ${o.familiya}`.toLowerCase().includes(q)))
    .sort((a, b) => a.sinf - b.sinf || a.harf.localeCompare(b.harf) || a.familiya.localeCompare(b.familiya));

  $("jadval").innerHTML = natija.map((o, i) => `
    <tr style="animation-delay:${Math.min(i, 15) * 0.03}s">
      <td><img src="${rasmManzili(o)}" alt="" data-zaxira="${avatar(o)}"></td>
      <td class="name"><b>${xavfsiz(o.ism)} ${xavfsiz(o.familiya)}</b><small>${xavfsiz((o.haqida || "").slice(0, 60))}</small></td>
      <td><span class="badge">${o.sinf}-"${xavfsiz(o.harf)}"</span></td>
      <td>${o.orttachaBaho ? "⭐ " + xavfsiz(o.orttachaBaho) : "—"}</td>
      <td><div class="row-actions">
        <button class="btn sm ghost" data-tahrir="${o.id}">✏️ Tahrirlash</button>
        <button class="btn sm danger" data-ochir="${o.id}">🗑 O'chirish</button>
      </div></td>
    </tr>`).join("");
  $("a-bosh").hidden = natija.length > 0;

  const rasmli = royxat.filter((o) => o.rasm).length;
  $("admin-stats").innerHTML = `
    <div class="stat"><small>Jami o'quvchilar</small><b>${royxat.length}</b></div>
    <div class="stat" style="animation-delay:.05s"><small>Ko'rsatilmoqda</small><b>${natija.length}</b></div>
    <div class="stat" style="animation-delay:.1s"><small>Rasmi bor</small><b>${rasmli}</b></div>
    <div class="stat" style="animation-delay:.15s"><small>Rasmsiz</small><b>${royxat.length - rasmli}</b></div>`;
}
["a-qidiruv", "a-sinf", "a-harf"].forEach((id) => $(id).addEventListener("input", chiz));

document.addEventListener("error", (e) => {
  const img = e.target;
  if (img.tagName === "IMG" && img.dataset.zaxira && img.src !== img.dataset.zaxira) img.src = img.dataset.zaxira;
}, true);

/* ---------- Forma ---------- */
function rasmKorinishi() {
  const ism = $("f-ism").value || "?", familiya = $("f-familiya").value || "?";
  $("f-rasm-korinish").src = formaRasm || avatar({ ism, familiya });
}

function formaniOch(o) {
  tahrirId = o ? o.id : null;
  $("forma-sarlavha").textContent = o ? "O'quvchini tahrirlash" : "Yangi o'quvchi";
  $("f-ism").value = o?.ism || "";
  $("f-familiya").value = o?.familiya || "";
  $("f-sinf").value = o?.sinf || ($("a-sinf").value !== "0" ? $("a-sinf").value : 1);
  $("f-harf").value = o?.harf || $("a-harf").value || "A";
  $("f-tugilgan").value = o?.tugilgan || "";
  $("f-baho").value = o?.orttachaBaho || "";
  $("f-haqida").value = o?.haqida || "";
  $("f-yutuqlar").value = (o?.yutuqlar || []).join("\n");
  $("f-qiziqishlar").value = (o?.qiziqishlar || []).join(", ");
  $("f-orzu").value = o?.orzu || "";
  formaRasm = o?.rasm || "";
  $("f-rasm").value = formaRasm.startsWith("data:") ? "" : formaRasm;
  $("f-rasm-fayl").value = "";
  rasmKorinishi();
  $("forma-modal").hidden = false;
  setTimeout(() => $("f-ism").focus(), 50);
}
function formaniYop() { $("forma-modal").hidden = true; }

$("qoshish").addEventListener("click", () => formaniOch(null));
document.querySelectorAll("[data-yop]").forEach((b) => b.addEventListener("click", formaniYop));
$("forma-modal").addEventListener("click", (e) => { if (e.target.id === "forma-modal") formaniYop(); });
document.addEventListener("keydown", (e) => { if (e.key === "Escape") formaniYop(); });
["f-ism", "f-familiya"].forEach((id) => $(id).addEventListener("input", () => { if (!formaRasm) rasmKorinishi(); }));

// Rasmni kichraytirib (400px) saqlaymiz — xotirani tejash uchun
$("f-rasm-fayl").addEventListener("change", (e) => {
  const fayl = e.target.files[0];
  if (!fayl) return;
  const o = new FileReader();
  o.onload = () => {
    const img = new Image();
    img.onload = () => {
      const MAX = 400;
      const k = Math.min(1, MAX / Math.max(img.width, img.height));
      const c = document.createElement("canvas");
      c.width = Math.round(img.width * k);
      c.height = Math.round(img.height * k);
      c.getContext("2d").drawImage(img, 0, 0, c.width, c.height);
      formaRasm = c.toDataURL("image/jpeg", 0.82);
      $("f-rasm").value = "";
      rasmKorinishi();
    };
    img.onerror = () => xabar("Bu faylni rasm sifatida ochib bo'lmadi", true);
    img.src = o.result;
  };
  o.readAsDataURL(fayl);
});
$("f-rasm").addEventListener("input", () => { formaRasm = $("f-rasm").value.trim(); rasmKorinishi(); });
$("f-rasm-ochir").addEventListener("click", () => { formaRasm = ""; $("f-rasm").value = ""; rasmKorinishi(); });

$("forma").addEventListener("submit", (e) => {
  e.preventDefault();
  const yangi = {
    id: tahrirId || yangiId(),
    ism: $("f-ism").value.trim(),
    familiya: $("f-familiya").value.trim(),
    sinf: Number($("f-sinf").value),
    harf: $("f-harf").value,
    rasm: formaRasm,
    tugilgan: $("f-tugilgan").value.trim(),
    orttachaBaho: $("f-baho").value ? Number($("f-baho").value) : "",
    haqida: $("f-haqida").value.trim(),
    yutuqlar: $("f-yutuqlar").value.split("\n").map((s) => s.trim()).filter(Boolean),
    qiziqishlar: $("f-qiziqishlar").value.split(",").map((s) => s.trim()).filter(Boolean),
    orzu: $("f-orzu").value.trim(),
  };
  const oldingi = royxat;
  royxat = tahrirId ? royxat.map((o) => (o.id === tahrirId ? yangi : o)) : [...royxat, yangi];
  if (saqla(tahrirId ? "O'zgarishlar saqlandi ✅" : `${yangi.ism} qo'shildi ✅`)) {
    formaniYop();
    chiz();
  } else {
    royxat = oldingi;
  }
});

/* ---------- Tahrirlash / o'chirish ---------- */
$("jadval").addEventListener("click", (e) => {
  const t = e.target.closest("[data-tahrir]");
  const d = e.target.closest("[data-ochir]");
  if (t) formaniOch(royxat.find((o) => o.id === t.dataset.tahrir));
  if (d) {
    const o = royxat.find((x) => x.id === d.dataset.ochir);
    if (!confirm(`${o.ism} ${o.familiya} (${o.sinf}-"${o.harf}") ni o'chirasizmi?`)) return;
    royxat = royxat.filter((x) => x.id !== o.id);
    saqla(`${o.ism} o'chirildi`);
    chiz();
  }
});

/* ---------- Eksport / import ---------- */
function yuklabOl(nom, matn, tur) {
  const url = URL.createObjectURL(new Blob([matn], { type: tur }));
  const a = Object.assign(document.createElement("a"), { href: url, download: nom });
  document.body.appendChild(a); a.click(); a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

$("eksport-js").addEventListener("click", () => {
  const toza = royxat.map(({ id, ...qolgani }) => qolgani);
  const matn = `/*
  O'QUVCHILAR RO'YXATI — 16Portfolio
  Admin paneldan ${new Date().toLocaleString("uz-UZ")} da yuklab olingan.
  O'quvchi qo'shish yoki o'zgartirish uchun admin paneldan foydalaning.
*/

const oquvchilar = ${JSON.stringify(toza, null, 2)};
`;
  yuklabOl("data.js", matn, "text/javascript");
  xabar("data.js yuklab olindi. Uni sayt papkasidagi eski fayl o'rniga qo'ying.");
});

$("eksport-json").addEventListener("click", () => {
  yuklabOl(`16portfolio-zaxira-${new Date().toISOString().slice(0, 10)}.json`, JSON.stringify(royxat, null, 2), "application/json");
  xabar("Zaxira nusxa yuklab olindi 💾");
});

$("import").addEventListener("change", (e) => {
  const fayl = e.target.files[0];
  if (!fayl) return;
  fayl.text().then((matn) => {
    let data;
    try { data = JSON.parse(matn); } catch { return xabar("Fayl o'qilmadi: JSON emas", true); }
    if (!Array.isArray(data) || data.some((o) => !o.ism || !o.sinf)) return xabar("Fayl formati noto'g'ri", true);
    if (!confirm(`${data.length} ta o'quvchi yuklanadi va hozirgi ro'yxat almashtiriladi. Davom etasizmi?`)) return;
    royxat = idQoshish(data);
    saqla("Zaxiradan tiklandi ✅");
    chiz();
  });
  e.target.value = "";
});

$("tiklash").addEventListener("click", () => {
  if (!confirm("Admin paneldagi barcha o'zgarishlar o'chadi va data.js dagi ro'yxat qaytadi. Davom etasizmi?")) return;
  asliHolatgaQaytarish();
  royxat = oquvchilarniYukla();
  chiz();
  xabar("data.js holatiga qaytarildi");
});

$("parol-ozgartir").addEventListener("click", () => {
  const eski = prompt("Hozirgi parolni kiriting:");
  if (eski === null) return;
  if (!parolTogrimi(eski)) return xabar("Hozirgi parol noto'g'ri", true);
  const yangi = prompt("Yangi parol (kamida 4 ta belgi):");
  if (!yangi || yangi.length < 4) return xabar("Parol juda qisqa", true);
  if (prompt("Yangi parolni qayta kiriting:") !== yangi) return xabar("Parollar mos kelmadi", true);
  parolniOzgartir(yangi);
  xabar("Parol o'zgartirildi 🔑");
});
