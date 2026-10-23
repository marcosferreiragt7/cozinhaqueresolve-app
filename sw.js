const V = "cqr-v9";
const IMG = "cqr-img-v1";
const SHELL = ["./", "index.html", "receitas.js", "manifest.webmanifest", "fonts/bebas.woff2", "icons/logo.webp", "icons/icon-192.png", "img/capa-paes.webp", "img/capa-saladas.webp", "img/r/focaccia-t.webp", "img/r/pao-banana-t.webp", "img/r/pao-batata-doce-airfryer-t.webp", "img/r/pao-caneca-t.webp", "img/r/pao-forma-t.webp", "img/r/pao-frigideira-t.webp", "img/r/pao-inhame-t.webp", "img/r/pao-liquidificador-t.webp", "img/r/pao-queijo-liquidificador-t.webp", "img/r/salada-atum-feijao-t.webp", "img/r/salada-frango-mostarda-t.webp", "img/r/salada-grao-de-bico-t.webp", "img/r/salada-macarrao-ovo-t.webp", "img/r/salada-quinoa-colorida-t.webp", "img/r/wrap-tapioca-t.webp", "img/v/bonus-aguas.webp", "img/v/bonus-guias.webp", "img/v/bonus-molhos.webp", "img/v/bonus-shots.webp", "img/v/bonus-smoothies.webp", "img/v/cat-cafes.webp", "img/v/cat-doces.webp", "img/v/cat-paes.webp", "img/v/cat-salgados.webp", "img/v/sal-caesar.webp", "img/v/sal-caprese.webp", "img/vitrine-paes.webp", "img/vitrine-saladas.webp", "ceia.js", "ceia2.js", "ceia3.js"];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(V).then(c => c.addAll(SHELL)).then(() => self.skipWaiting()));
});
self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== V && k !== IMG).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
// Rede primeiro para HTML e receitas (conteúdo novo chega na hora), cache como reserva offline.
self.addEventListener("fetch", e => {
  const u = new URL(e.request.url);
  if (e.request.method !== "GET") return;
  // Fotos da Ceia (Unsplash): cache primeiro, para abrir offline depois da 1ª vez.
  if (u.hostname === "images.unsplash.com") {
    e.respondWith(caches.open(IMG).then(c => c.match(e.request).then(r => r || fetch(e.request).then(res => { c.put(e.request, res.clone()); return res; }))));
    return;
  }
  if (u.origin !== location.origin) return;
  const fresh = e.request.mode === "navigate" || /(receitas|ceia\d?)\.js$/.test(u.pathname);
  if (fresh) {
    e.respondWith(fetch(e.request).then(r => { const cp = r.clone(); caches.open(V).then(c => c.put(e.request, cp)); return r; })
      .catch(() => caches.match(e.request).then(r => r || caches.match("index.html"))));
  } else {
    e.respondWith(caches.match(e.request).then(r => r || fetch(e.request).then(res => { const cp = res.clone(); caches.open(V).then(c => c.put(e.request, cp)); return res; })));
  }
});
