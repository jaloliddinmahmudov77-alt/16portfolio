// Sayt ochilganda doim birinchi sahifadan (eng tepadan) boshlansin
if ("scrollRestoration" in history) history.scrollRestoration = "manual";
if (location.hash) history.replaceState(null, "", location.pathname);
scrollTo(0, 0);

// O'quvchilar: admin panelda o'zgartirilgan bo'lsa — o'sha, aks holda data.js dagi ro'yxat
const royxat = oquvchilarniYukla();

let tanlanganSinf = 0;   // 0 = hammasi
let tanlanganHarf = "";  // "" = hammasi
const HARFLAR = ["A", "B"];
const $ = (id) => document.getElementById(id);

/* ---------- Statistika (sanab chiqadigan raqamlar) ---------- */
function statistikaniChiz() {
  $("stats").innerHTML = `
    <div class="stat"><b data-son="${royxat.length}">0</b><small>O'quvchi</small></div>
    <div class="stat"><b data-son="11">0</b><small>Sinf</small></div>
    <div class="stat"><b data-son="${11 * HARFLAR.length}">0</b><small>Guruh</small></div>`;
  document.querySelectorAll("[data-son]").forEach((el) => {
    const oxiri = Number(el.dataset.son);
    const boshi = performance.now();
    const qadam = (t) => {
      const p = Math.min((t - boshi) / 1600, 1);
      el.textContent = Math.round(oxiri * (1 - Math.pow(1 - p, 3)));
      if (p < 1) requestAnimationFrame(qadam);
    };
    setTimeout(() => requestAnimationFrame(qadam), 600);
  });
}

/* ---------- Yozuv effekti ---------- */
function yozuvEffekti() {
  const gaplar = [
    "O'quvchilarimizning yutuqlari va orzulari",
    "1-sinfdan 11-sinfgacha — bir joyda",
    "Bilim, iste'dod va kelajak",
  ];
  let g = 0, h = 0, ochirish = false;
  const el = $("yozuv");
  (function tik() {
    const gap = gaplar[g];
    el.textContent = gap.slice(0, h);
    if (!ochirish && h < gap.length) { h++; setTimeout(tik, 55); }
    else if (!ochirish) { ochirish = true; setTimeout(tik, 2200); }
    else if (h > 0) { h--; setTimeout(tik, 25); }
    else { ochirish = false; g = (g + 1) % gaplar.length; setTimeout(tik, 300); }
  })();
}

/* ---------- Zarrachalar (hero ustida suzuvchi nuqtalar) ---------- */
function zarrachalar() {
  const c = $("zarrachalar");
  const ctx = c.getContext("2d");
  let w, h, nuqtalar = [];
  function olcham() {
    w = c.width = c.offsetWidth;
    h = c.height = c.offsetHeight;
    const soni = Math.min(90, Math.floor((w * h) / 16000));
    nuqtalar = Array.from({ length: soni }, () => ({
      x: Math.random() * w, y: Math.random() * h,
      r: Math.random() * 2 + 0.6,
      vx: (Math.random() - 0.5) * 0.35, vy: (Math.random() - 0.5) * 0.35,
    }));
  }
  olcham();
  addEventListener("resize", olcham);
  (function chiz() {
    ctx.clearRect(0, 0, w, h);
    for (let i = 0; i < nuqtalar.length; i++) {
      const p = nuqtalar[i];
      p.x += p.vx; p.y += p.vy;
      if (p.x < 0 || p.x > w) p.vx *= -1;
      if (p.y < 0 || p.y > h) p.vy *= -1;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(255,255,255,0.75)";
      ctx.fill();
      for (let j = i + 1; j < nuqtalar.length; j++) {
        const q = nuqtalar[j];
        const d = Math.hypot(p.x - q.x, p.y - q.y);
        if (d < 120) {
          ctx.strokeStyle = `rgba(199,210,254,${0.18 * (1 - d / 120)})`;
          ctx.lineWidth = 1;
          ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(q.x, q.y); ctx.stroke();
        }
      }
    }
    requestAnimationFrame(chiz);
  })();
}

/* ---------- Sinflar va guruhlar ---------- */
function sinflarniChiz() {
  let html = `<button class="grade-btn ${tanlanganSinf === 0 ? "active" : ""}" data-sinf="0">
    Hammasi<small>${royxat.length} ta</small></button>`;
  for (let s = 1; s <= 11; s++) {
    const soni = royxat.filter((o) => Number(o.sinf) === s).length;
    html += `<button class="grade-btn ${tanlanganSinf === s ? "active" : ""}" data-sinf="${s}">
      ${s}-sinf<small>${soni} ta</small></button>`;
  }
  $("sinflar").innerHTML = html;

  if (tanlanganSinf === 0) { $("harflar").innerHTML = ""; return; }
  let h = `<button class="letter-btn ${tanlanganHarf === "" ? "active" : ""}" data-harf="">Hammasi</button>`;
  HARFLAR.forEach((hf, i) => {
    const soni = royxat.filter((o) => Number(o.sinf) === tanlanganSinf && o.harf === hf).length;
    h += `<button class="letter-btn ${tanlanganHarf === hf ? "active" : ""}" data-harf="${hf}"
      style="animation-delay:${(i + 1) * 0.06}s">${tanlanganSinf}-"${hf}" <small>(${soni})</small></button>`;
  });
  $("harflar").innerHTML = h;
}

/* ---------- Kartalar ---------- */
function kartalarniChiz() {
  const q = $("qidiruv").value.trim().toLowerCase();
  const natija = royxat.filter((o) =>
    (tanlanganSinf === 0 || Number(o.sinf) === tanlanganSinf) &&
    (tanlanganHarf === "" || o.harf === tanlanganHarf) &&
    (q === "" || `${o.ism} ${o.familiya}`.toLowerCase().includes(q))
  ).sort((a, b) => a.sinf - b.sinf || a.harf.localeCompare(b.harf) || a.familiya.localeCompare(b.familiya));

  let sarlavha = "Barcha o'quvchilar";
  if (tanlanganSinf) sarlavha = `${tanlanganSinf}-sinf` + (tanlanganHarf ? ` "${tanlanganHarf}"` : "") + " o'quvchilari";
  $("sarlavha").textContent = sarlavha;

  $("kartalar").innerHTML = natija.map((o, i) => `
    <article class="card" data-id="${o.id}" style="animation-delay:${Math.min(i, 12) * 0.05}s">
      <div class="photo-wrap">
        <span class="ribbon">${o.sinf}-"${o.harf}"</span>
        <img class="photo" loading="lazy" src="${rasmManzili(o)}" alt="${xavfsiz(o.ism)}" data-zaxira="${avatar(o)}">
      </div>
      <div class="card-body">
        <h3>${xavfsiz(o.ism)} ${xavfsiz(o.familiya)}</h3>
        <p>${xavfsiz(o.haqida)}</p>
        <span class="card-more">Portfolioni ko'rish →</span>
      </div>
      <div class="glare"></div>
    </article>`).join("");
  $("bosh").hidden = natija.length > 0;
}

/* ---------- Portfolio oynasi ---------- */
function portfolioniOch(o) {
  const yutuqlar = (o.yutuqlar || []).map((y) => `<li>${xavfsiz(y)}</li>`).join("");
  const qiziqish = (o.qiziqishlar || []).map((q) => `<span class="tag">${xavfsiz(q)}</span>`).join("");
  $("modal-ichi").innerHTML = `
    <div class="modal-cover"></div>
    <div class="modal-content">
      <div class="profile">
        <img src="${rasmManzili(o)}" alt="${xavfsiz(o.ism)}" data-zaxira="${avatar(o)}">
        <div>
          <h2>${xavfsiz(o.ism)} ${xavfsiz(o.familiya)}</h2>
          <div class="meta">16-maktab · ${o.sinf}-"${xavfsiz(o.harf)}" sinf</div>
        </div>
      </div>
      <div class="info-grid">
        <div class="info-item"><small>Sinf</small><b>${o.sinf}-"${xavfsiz(o.harf)}"</b></div>
        ${o.tugilgan ? `<div class="info-item"><small>Tug'ilgan sana</small><b>${xavfsiz(o.tugilgan)}</b></div>` : ""}
        ${o.orttachaBaho ? `<div class="info-item"><small>O'rtacha baho</small><b>⭐ ${xavfsiz(o.orttachaBaho)}</b></div>` : ""}
      </div>
      ${o.haqida ? `<div class="block"><h4>O'zim haqimda</h4><p>${xavfsiz(o.haqida)}</p></div>` : ""}
      ${yutuqlar ? `<div class="block" style="animation-delay:.08s"><h4>Yutuqlar</h4><ul>${yutuqlar}</ul></div>` : ""}
      ${qiziqish ? `<div class="block" style="animation-delay:.16s"><h4>Qiziqishlar</h4><div class="tags">${qiziqish}</div></div>` : ""}
      ${o.orzu ? `<div class="block" style="animation-delay:.24s"><h4>Orzuim</h4><p>✨ ${xavfsiz(o.orzu)}</p></div>` : ""}
    </div>`;
  $("modal").hidden = false;
  document.body.style.overflow = "hidden";
}
function modalniYop() {
  $("modal").hidden = true;
  document.body.style.overflow = "";
}

/* ---------- Effektlar: scroll, parallaks, 3D egilish ---------- */
const kuzatuvchi = new IntersectionObserver((yozuvlar) => {
  yozuvlar.forEach((y) => { if (y.isIntersecting) { y.target.classList.add("visible"); kuzatuvchi.unobserve(y.target); } });
}, { threshold: 0.15 });
document.querySelectorAll(".reveal").forEach((el) => kuzatuvchi.observe(el));

addEventListener("scroll", () => {
  const y = scrollY;
  $("nav").classList.toggle("show", y > innerHeight * 0.6);
  if (y < innerHeight) $("hero-bg").style.translate = `0 ${y * 0.35}px`;
}, { passive: true });

$("kartalar").addEventListener("mousemove", (e) => {
  const k = e.target.closest(".card");
  if (!k) return;
  const r = k.getBoundingClientRect();
  const x = (e.clientX - r.left) / r.width, y = (e.clientY - r.top) / r.height;
  k.style.transform = `rotateY(${(x - 0.5) * 4}deg) rotateX(${(0.5 - y) * 4}deg) translateY(-3px)`;
  k.style.setProperty("--mx", x * 100 + "%");
  k.style.setProperty("--my", y * 100 + "%");
});
$("kartalar").addEventListener("mouseout", (e) => {
  const k = e.target.closest(".card");
  if (k && !k.contains(e.relatedTarget)) k.style.transform = "";
});

/* ---------- Hodisalar ---------- */
document.addEventListener("error", (e) => {
  const img = e.target;
  if (img.tagName === "IMG" && img.dataset.zaxira && img.src !== img.dataset.zaxira) img.src = img.dataset.zaxira;
}, true);

$("sinflar").addEventListener("click", (e) => {
  const b = e.target.closest("[data-sinf]");
  if (!b) return;
  tanlanganSinf = Number(b.dataset.sinf);
  tanlanganHarf = "";
  sinflarniChiz(); kartalarniChiz();
});
$("harflar").addEventListener("click", (e) => {
  const b = e.target.closest("[data-harf]");
  if (!b) return;
  tanlanganHarf = b.dataset.harf;
  sinflarniChiz(); kartalarniChiz();
});
$("kartalar").addEventListener("click", (e) => {
  const k = e.target.closest(".card");
  if (k) portfolioniOch(royxat.find((o) => o.id === k.dataset.id));
});
$("qidiruv").addEventListener("input", kartalarniChiz);
$("yopish").addEventListener("click", modalniYop);
$("modal").addEventListener("click", (e) => { if (e.target.id === "modal") modalniYop(); });

/* ---------- Yashirin kirish: logotipni 5 marta tez bosing ---------- */
let bosishlar = 0, bosishTaymer;
document.querySelectorAll(".secret-logo").forEach((el) => el.addEventListener("click", () => {
  el.classList.remove("secret-tap"); void el.offsetWidth; el.classList.add("secret-tap");
  bosishlar++;
  clearTimeout(bosishTaymer);
  bosishTaymer = setTimeout(() => (bosishlar = 0), 1500);
  if (bosishlar >= 5) location.href = "admin.html";
}));
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") modalniYop();
  if (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === "a") location.href = "admin.html";
});

statistikaniChiz();
yozuvEffekti();
zarrachalar();
sinflarniChiz();
kartalarniChiz();
