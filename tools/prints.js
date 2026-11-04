/* Tira prints reais do app (com as fotos) para a página de vendas de um produto.
   Uso: PRODUTO=pao node tools/prints.js  → grava <pasta>/img/tela-*.jpg
   Roda pelo GitHub Actions (.github/workflows/prints.yml, botão "Run workflow"),
   porque lá o navegador consegue carregar as fotos do Unsplash. */
const { chromium } = require("playwright");
const http = require("http"), fs = require("fs"), path = require("path");
const ROOT = path.resolve(__dirname, "..");
const tipos = { ".html": "text/html", ".js": "text/javascript", ".css": "text/css", ".json": "application/json", ".webp": "image/webp", ".jpg": "image/jpeg", ".png": "image/png", ".svg": "image/svg+xml", ".woff2": "font/woff2" };
const srv = http.createServer((q, s) => { let f = path.join(ROOT, decodeURIComponent(q.url.split("?")[0])); if (f.endsWith("/")) f += "index.html";
  fs.readFile(f, (e, b) => { if (e) { s.writeHead(404); return s.end(); } s.writeHead(200, { "content-type": tipos[path.extname(f)] || "application/octet-stream" }); s.end(b); }); });

/* Para cada produto: pasta da página de vendas, acessos simulados, como semear o desafio e as telas. */
const CFG = {
  pao: {
    pasta: "paesqueresolvem", acessos: { pao: true, pao_premium: true, recheios: true, biscoitos: true, paodequeijo: true },
    jogo: "pao", ids: ["pq-forma", "pq-frig-iogurte", "pq-integral-mel", "pq-focaccia-cebola", "pq-sg-frigideira", "pq-nuvem", "pq-leite", "pq-airfryer"],
    telas: [
      ["tela-colecao", "#/c/pao", ".tier"],
      ["tela-receita", "#/r/pq-forma", "px:250"],
      ["tela-desafio", "#/semanadopao", ".jg-head"],
      ["tela-premios", "#/c/pao", "last:.tier"],
      ["tela-premium", "#/c/pao", ".tier.pre"],
      ["tela-recheios", "#/c/recheios", "px:330"],
      ["tela-biscoitos", "#/c/biscoitos", "px:330"],
      ["tela-paodequeijo", "#/c/paodequeijo", "px:330"]
    ]
  }
};
const P = process.env.PRODUTO || "pao", C = CFG[P];
if (!C) { console.error("Produto sem configuração: " + P); process.exit(1); }

(async () => {
  await new Promise(r => srv.listen(8898, r));
  const b = await chromium.launch();
  const ctx = await b.newContext({ viewport: { width: 376, height: 539 }, deviceScaleFactor: 2, locale: "pt-BR", timezoneId: "America/Sao_Paulo", serviceWorkers: "block" });
  const p = await ctx.newPage();
  await p.route(/^https?:\/\/(?!localhost|images\.unsplash\.com)/, r => r.abort());
  /* acessos + desafio com 2 semanas completas e 2 pães nesta semana */
  await p.addInitScript(([C]) => {
    const iso = d => d.toLocaleDateString("en-CA", { timeZone: "America/Sao_Paulo" });
    const hoje = new Date(), dow = (new Date(iso(hoje) + "T12:00:00Z").getUTCDay() + 6) % 7, dia = n => iso(new Date(hoje.getTime() - n * 864e5));
    const m = {}, ids = C.ids.slice();
    [dow + 14, dow + 13, dow + 12, dow + 7, dow + 6, dow + 5].forEach(n => { m[dia(n)] = ids.shift(); });
    m[dia(Math.min(dow, 1))] = ids.shift(); if (dow >= 1) m[dia(0)] = ids.shift();
    const j = { xp: 1530, selos: [], log: {} }; j[C.jogo] = m;
    localStorage.setItem("cqr:acessos", JSON.stringify(C.acessos));
    localStorage.setItem("cqr:jogo", JSON.stringify(j));
    localStorage.setItem("cqr:intro", "1");
  }, [C]);
  const out = path.join(ROOT, C.pasta, "img"); fs.mkdirSync(out, { recursive: true });
  for (const [nome, hash, alvo] of C.telas) {
    await p.goto("http://localhost:8898/" + hash); await p.waitForTimeout(800);
    if (alvo) await p.evaluate(s => { if (s.startsWith("px:")) return window.scrollTo(0, +s.slice(3)); const l = s.startsWith("last:") ? [...document.querySelectorAll(s.slice(5))].pop() : document.querySelector(s), e = l; if (e) window.scrollTo(0, e.getBoundingClientRect().top + scrollY - 128); }, alvo);
    await p.evaluate(() => Promise.all([...document.images].filter(i => i.getBoundingClientRect().top < innerHeight * 1.5).map(i => i.complete ? 0 : new Promise(r => { i.onload = i.onerror = r; setTimeout(r, 8000); }))));
    await p.waitForTimeout(600);
    await p.screenshot({ path: path.join(out, nome + ".jpg"), type: "jpeg", quality: 82 });
    console.log("ok", nome);
  }
  await b.close(); srv.close();
})();
