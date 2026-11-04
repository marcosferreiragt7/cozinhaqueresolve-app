/* Gera /dia/AAAA-MM-DD/index.html para os próximos 14 dias.
   Cada página tem a foto e o nome da receita do dia nas tags de pré-visualização
   (WhatsApp, Instagram, Facebook) e manda a pessoa para a receita no app.
   Roda todo dia pelo GitHub Actions (.github/workflows/receita-do-dia.yml). */
const { chromium } = require("playwright");
const http = require("http"), fs = require("fs"), path = require("path");
const ROOT = path.resolve(__dirname, ".."), BASE = "https://app.cozinhaqueresolve.com";
const tipos = { ".html": "text/html", ".js": "text/javascript", ".css": "text/css", ".json": "application/json", ".webp": "image/webp", ".jpg": "image/jpeg", ".png": "image/png", ".svg": "image/svg+xml" };
const srv = http.createServer((q, s) => { let f = path.join(ROOT, decodeURIComponent(q.url.split("?")[0])); if (f.endsWith("/")) f += "index.html";
  fs.readFile(f, (e, b) => { if (e) { s.writeHead(404); return s.end(); } s.writeHead(200, { "content-type": tipos[path.extname(f)] || "application/octet-stream" }); s.end(b); }); });
const esc = t => String(t || "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const DIAS = ["domingo", "segunda", "terça", "quarta", "quinta", "sexta", "sábado"];
(async () => {
  await new Promise(r => srv.listen(8899, r));
  const b = await chromium.launch(), p = await b.newPage();
  await p.route(/^https?:\/\/(?!localhost)/, r => r.abort());
  await p.goto("http://localhost:8899/"); await p.waitForFunction(() => window.RECEITA_DO_DIA, null, { timeout: 15000 });
  const lista = await p.evaluate(() => { const o = []; for (let i = 0; i < 14; i++) { const r = RECEITA_DO_DIA(i); const c = COLECOES.find(x => x.id === r.col) || {};
    const iso = new Date(Date.now() + i * 864e5).toLocaleDateString("en-CA", { timeZone: "America/Sao_Paulo" });
    o.push({ iso, id: r.id, nome: r.nome, intro: r.intro, foto: r.foto, tempo: r.tempo, rende: r.rende, nivel: r.nivel || "", tags: (r.tags || []).slice(0, 3), paga: !!r.premium, col: c.nome || "" }); } return o; });
  await b.close(); srv.close();
  const keep = new Set(lista.map(x => x.iso)), dir = path.join(ROOT, "dia");
  fs.mkdirSync(dir, { recursive: true });
  const hojeISO = lista[0].iso;
  for (const d of fs.readdirSync(dir)) if (/^\d{4}-\d{2}-\d{2}$/.test(d) && d < hojeISO && Date.parse(hojeISO) - Date.parse(d) > 30 * 864e5) fs.rmSync(path.join(dir, d), { recursive: true });
  for (const x of lista) {
    let img = x.foto || BASE + "/img/og-app-quadrado.jpg";
    if (!/^https?:/.test(img)) img = BASE + "/" + img.replace(/^\//, "");
    if (/images\.unsplash\.com/.test(img)) img = img.split("?")[0] + "?w=1200&h=630&q=75&fit=crop&fm=jpg";
    const [y, m, dd] = x.iso.split("-"), dow = DIAS[new Date(Date.UTC(+y, m - 1, +dd)).getUTCDay()];
    const titulo = `Receita do dia: ${x.nome}`;
    const desc = (x.paga ? `Liberada grátis só hoje (${dow}, ${dd}/${m}). ` : `Grátis no app (${dow}, ${dd}/${m}). `) + (x.intro || "");
    const html = `<!doctype html><html lang="pt-BR"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>${esc(titulo)} · Cozinha que Resolve</title>
<meta name="description" content="${esc(desc)}">
<meta property="og:type" content="article"><meta property="og:site_name" content="Cozinha que Resolve">
<meta property="og:title" content="${esc(titulo)}"><meta property="og:description" content="${esc(desc)}">
<meta property="og:url" content="${BASE}/dia/${x.iso}/">
<meta property="og:image" content="${esc(img)}"><meta property="og:image:secure_url" content="${esc(img)}"><meta property="og:image:type" content="image/jpeg"><meta property="og:image:width" content="1200"><meta property="og:image:height" content="630">
<meta name="twitter:card" content="summary_large_image"><meta name="robots" content="noindex">
<script>(function(){var h=new Date().toLocaleDateString("en-CA",{timeZone:"America/Sao_Paulo"});location.replace("/?utm_source=whatsapp&utm_medium=canal&utm_campaign=receita_do_dia"+(h==="${x.iso}"?"#/hoje":"#/r/${x.id}"));})();</script>
</head><body style="font-family:system-ui;padding:24px"><p><a href="/#/hoje">Abrir a receita do dia no app Cozinha que Resolve</a></p></body></html>
`;
    fs.mkdirSync(path.join(dir, x.iso), { recursive: true });
    fs.writeFileSync(path.join(dir, x.iso, "index.html"), html);
    fs.writeFileSync(path.join(dir, x.iso, "receita.json"), JSON.stringify({ ...x, foto_og: img, link: `${BASE}/dia/${x.iso}` }, null, 1));
  }
  console.log(lista.map(x => x.iso + " " + x.nome).join("\n"));
})().catch(e => { console.error(e); process.exit(1); });
