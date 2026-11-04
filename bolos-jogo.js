/* ================================================================
   BOLOS FITNESS — DESAFIO "SEMANA DO BOLO FIT"
   3 bolos diferentes da coleção por semana (no máximo 1 por dia).
   Prêmios: b1..b4 por semanas completas (não precisam ser seguidas).
   Estado em jogo.bolos = { "AAAA-MM-DD": idDaReceita }.
   Carregar DEPOIS de jogo.js.
   ================================================================ */
(function () {
var W = window, JG = W.JOGO;
var $, esc, store, track, toast, R, col, rec, thumb, temAcesso, colVisivel, bloqueada, cardHTML, pnUrl, route, view;
W.APP_READY = (function (prev) { return function (A) { $ = A.$; esc = A.esc; store = A.store; track = A.track; toast = A.toast; R = A.R; col = A.col; rec = A.rec; thumb = A.thumb; temAcesso = A.temAcesso; colVisivel = A.colVisivel; bloqueada = A.bloqueada; cardHTML = A.cardHTML; pnUrl = A.pnUrl; route = A.route; view = A.view; if (prev) prev(A); }; })(W.APP_READY);
var hoje = JG.hoje, semanaDe = JG.semanaDe, semanaAnterior = JG.semanaAnterior, J = JG.J, salvar = JG.salvar;
var META = 3;
var SELOS = { "b-primeiro": ["🍰", "Primeiro bolo"], "b-semana": ["🎂", "Semana do Bolo"], "b-semforno": ["🍳", "Bolo sem forno"], "b-semacucar": ["🍯", "Bolo sem açúcar"],
  "b-caneca": ["☕", "Bolo de caneca"], "b-10": ["🔟", "10 bolos feitos"], "b-2sem": ["🥈", "2 semanas de bolo"], "b-mestre": ["🏆", "Mestre do Bolo Fit"] };
Object.keys(SELOS).forEach(function (k) { JG.SELOS[k] = SELOS[k]; });
var PREMIOS = [
  { id: "b1", sem: 1, ic: "👵", t: "Bolos de vó repaginados", s: "5 receitas exclusivas" },
  { id: "b2", sem: 2, ic: "🍫", t: "Caldas e glacês secretos", s: "5 coberturas exclusivas" },
  { id: "b3", sem: 3, ic: "🎁", t: "Bolos de aniversário + desconto", s: "5 bolos de festa e preço de recompensa na Vitrine" },
  { id: "b4", sem: 4, ic: "🏆", t: "Mestre do Bolo Fit", s: "Certificado com seu nome + 5 bolos do Mestre" }
];
function feitosSem(j, wk) { return Object.keys(j.bolos).filter(function (d) { return semanaDe(new Date(d + "T12:00:00")) === wk; }).sort(); }
function completas(j) { var c = {}; Object.keys(j.bolos).forEach(function (d) { var w = semanaDe(new Date(d + "T12:00:00")); c[w] = (c[w] || 0) + 1; }); return Object.keys(c).filter(function (w) { return c[w] >= META; }).sort(); }
function sequencia(j) { var ok = completas(j), w = semanaDe(), n = 0; if (ok.indexOf(w) < 0) w = semanaAnterior(w); while (ok.indexOf(w) >= 0) { n++; w = semanaAnterior(w); } return n; }
function premioOk(id) { if (temAcesso("*")) return true; var p = PREMIOS.find(function (x) { return x.id === id; }); return !!p && completas(J()).length >= p.sem; }
function ativo() { return JG.visivel() && temAcesso("bolos") && colVisivel(col("bolos")); }
function meus() { return R.filter(function (r) { return r.col === "bolos" && !r.premio && !bloqueada(r) && !/Coberturas|Recheios|Docinhos|Cookies|Pães|Panquecas|Sobremesas/.test(r.sec); }); }
function semente(n) { var d = hoje().replace(/-/g, ""), x = +d; return function () { x = (x * 9301 + 49297) % 233280; return x / 233280; }; }
function sugestoes(j) {
  var wk = semanaDe(), ja = feitosSem(j, wk).map(function (d) { return j.bolos[d]; }), L = meus().filter(function (r) { return ja.indexOf(r.id) < 0; }), rnd = semente();
  var rapido = L.filter(function (r) { return r.tempo <= 20; }), out = [];
  if (rapido.length) out.push(rapido[Math.floor(rnd() * rapido.length)]);
  while (out.length < 3 && L.length) { var r = L[Math.floor(rnd() * L.length)]; if (out.indexOf(r) < 0) out.push(r); if (out.length >= L.length) break; }
  return out;
}

/* marcar bolo feito (pela tela do desafio ou pelo "Fiz essa receita!") */
function marcar(id, viaReceita) {
  var j = J(), d = hoje(), wk = semanaDe(), r = rec(id);
  if (!r) return false;
  if (j.bolos[d]) { if (!viaReceita) toast("Hoje você já marcou um bolo. Volte amanhã!"); return false; }
  if (feitosSem(j, wk).map(function (x) { return j.bolos[x]; }).indexOf(id) >= 0) { if (!viaReceita) toast("Esse já conta nesta semana. Escolha outro bolo."); return false; }
  j.bolos[d] = id; var corpo = JG.ganhar(j, 60, "bolo da semana"), novos = [];
  JG.selo(j, "b-primeiro", novos);
  if (/Sem forno/.test(r.sec)) JG.selo(j, "b-semforno", novos);
  if (/Sem açúcar/.test(r.sec)) JG.selo(j, "b-semacucar", novos);
  if (/caneca/i.test(r.nome + r.sec)) JG.selo(j, "b-caneca", novos);
  if (Object.keys(j.bolos).length >= 10) JG.selo(j, "b-10", novos);
  var n = feitosSem(j, wk).length, titulo = "Bolo marcado! 🍰", desbl = "";
  if (n === META) {
    titulo = "Semana do Bolo completa! 🎉"; corpo += JG.ganhar(j, 150, META + " bolos na semana"); JG.selo(j, "b-semana", novos);
    var tot = completas(j).length; if (tot >= 2) JG.selo(j, "b-2sem", novos); if (tot >= 4) JG.selo(j, "b-mestre", novos);
    var p = PREMIOS.find(function (x) { return x.sem === tot; });
    if (p) desbl = '<a class="jg-p ok" href="' + linkPremio(p) + '" onclick="document.getElementById(\'sheet\').classList.remove(\'show\')"><i>' + p.ic + '</i><div><small>RECOMPENSA DESBLOQUEADA</small><b>' + esc(p.t) + '</b><span>' + esc(p.s) + '</span></div></a>';
    track("DesafioBoloSemana", { semanas: tot }, true);
  }
  JG.salvar(j); track("DesafioBolo", { n: n, via: viaReceita ? "receita" : "desafio" }, true);
  JG.festa(titulo, '<div class="jg-cel">' + (n === META ? "🏆" : "🍰") + '</div><p style="text-align:center;margin:0 0 10px">' + n + ' de ' + META + ' bolos desta semana · ' + esc(r.nome) + '</p>' + corpo + desbl + JG.novosHTML(novos));
  return true;
}
function linkPremio(p) { return p.id === "b4" ? "#/bolofit/certificado" : p.id === "b3" ? "#/bolofit/premio3" : "#/c/bolos"; }

/* ---------------- telas ---------------- */
function tela() {
  if (!JG.visivel() || !colVisivel(col("bolos"))) { location.replace("#/"); return ""; }
  var head = '<div class="jg-row" style="margin-top:6px"><a href="#/desafios" class="btn">‹ Desafios</a><a href="#/bolofit/ajuda" class="btn">❓ Como funciona</a></div>';
  var hdr = '<section class="jg-head" style="background:linear-gradient(160deg,#7A4A2E,#22130C)"><small style="color:#F2B8A0">DESAFIO · BOLOS FITNESS</small><h1>Semana do Bolo Fit</h1><p>3 bolos diferentes por semana. Fez, marcou, ganhou XP. Completa 4 semanas e vira Mestre do Bolo Fit.</p></section>';
  if (!temAcesso("bolos")) return head + hdr + '<a class="cta lime" href="/bolosfitness/?utm_source=app&utm_medium=app_desafios&utm_campaign=bolos&utm_content=desafio">Conhecer os Bolos Fitness que Resolvem →</a>';
  var j = J(), wk = semanaDe(), fs = feitosSem(j, wk), n = fs.length, jaHoje = !!j.bolos[hoje()];
  var h = head + JG.topo(j) + hdr;
  h += '<section class="jg-card"><div class="jg-row"><b class="jg-t">BOLOS DESTA SEMANA</b><span>' + n + ' de ' + META + '</span></div><div class="jg-slots">' +
    [0, 1, 2].map(function (i) { var d = fs[i], r = d && rec(j.bolos[d]); return '<div class="' + (r ? "f" : "") + '">' + (r ? '<img src="' + thumb(r) + '" alt=""><b>✓</b>' : '<span>' + (i + 1) + 'º</span>') + '</div>'; }).join("") + '</div>';
  if (n >= META) h += '<div class="jg-ok">🎉 Semana completa! Na segunda começa outra.</div>';
  else if (jaHoje) h += '<div class="jg-ok">✓ Bolo de hoje marcado. Amanhã tem mais.</div>';
  h += '</section>';
  if (n < META && !jaHoje) {
    h += '<div class="sec"><h2>Sugestões de hoje</h2><span>toque em Fiz ✓</span></div>' + sugestoes(j).map(function (r) { return '<div class="card jg-pick"><a href="#/r/' + r.id + '" style="display:contents"><img class="thumb" src="' + thumb(r) + '" alt=""><div><h3>' + esc(r.nome) + '</h3><div class="meta"><span class="pill">⏱ ' + r.tempo + ' min</span></div></div></a><button class="jg-x add" data-bolo="' + r.id + '" aria-label="Fiz">✓</button></div>'; }).join("");
    var ja = fs.map(function (d) { return j.bolos[d]; });
    h += '<div class="box"><h2>Fez outro bolo da coleção?</h2><select id="bfSel" style="width:100%;padding:10px;border-radius:12px;border:1px solid var(--line,#E7DDCB);font:inherit;background:var(--card,#fff);color:inherit"><option value="">Escolha o bolo…</option>' +
      meus().filter(function (r) { return ja.indexOf(r.id) < 0; }).map(function (r) { return '<option value="' + r.id + '">' + esc(r.nome) + '</option>'; }).join("") + '</select><button class="cta" id="bfMarca" style="margin-top:10px">Marcar como feito ✓</button><p class="note">Dica: o botão “Fiz essa receita!” no fim de cada bolo também marca o bolo do dia.</p></div>';
  }
  var nC = completas(j).length;
  h += '<div class="sec"><h2>Recompensas</h2><span>' + nC + (nC === 1 ? " semana completa" : " semanas completas") + '</span></div><div class="jg-prem">' + PREMIOS.map(function (p) { var ok = nC >= p.sem || temAcesso("*"), f = p.sem - nC; return '<a class="jg-p' + (ok ? " ok" : "") + '" href="' + (ok ? linkPremio(p) : "#/bolofit") + '"><i>' + (ok ? p.ic : "🔒") + '</i><div><small>' + p.sem + 'ª SEMANA COMPLETA</small><b>' + esc(p.t) + '</b><span>' + (ok ? "Liberado! Toque para abrir" : esc(p.s) + " · falta" + (f > 1 ? "m " + f + " semanas" : " 1 semana")) + '</span></div></a>'; }).join("") + '</div>';
  h += JG.selosHTML(j, Object.keys(SELOS), "Selos da Semana do Bolo");
  return h;
}
function premio3() {
  if (!premioOk("b3")) { location.replace("#/bolofit"); return ""; }
  var D = (W.RECOMPENSAS || []).filter(function (x) { var c = col(x.id); return x.id !== "bolos" && c && colVisivel(c) && !temAcesso(x.id); });
  return '<a href="#/bolofit" class="btn" style="margin-top:6px">‹ Desafio</a><section class="jg-head"><small>RECOMPENSA · 3ª SEMANA</small><h1>Preço de recompensa</h1><p>Você completou 3 semanas de bolo. Nas outras coleções: Essencial por R$ 9,90 e Premium por R$ 19,90.</p></section>' +
    (D.length ? D.map(function (x) { return '<section class="box planos"><h2>' + esc(x.nome) + '</h2><div class="plano"><small>ESSENCIAL</small><s>R$ 19,90</s> <b class="pp">R$ 9,90</b>' + (x.essencial ? '<a class="cta" href="' + esc(pnUrl(x.essencial, "recompensa_bolos", x.id)) + '" target="_blank" rel="noopener">Quero o Essencial por R$ 9,90</a>' : '<p class="note">Em breve.</p>') + '</div><div class="plano top"><small>PREMIUM</small><s>R$ 29,90</s> <b class="pp">R$ 19,90</b>' + (x.premium ? '<a class="cta lime" href="' + esc(pnUrl(x.premium, "recompensa_bolos", x.id)) + '" target="_blank" rel="noopener">Quero a Premium por R$ 19,90</a>' : '<p class="note">Em breve.</p>') + '</div></section>'; }).join("") : '<p class="note">Você já tem todas as coleções. 🎉 Este prêmio vale para os próximos lançamentos.</p>') +
    '<div class="sec"><h2>Bolos de aniversário fit</h2><span>liberados</span></div><div class="list">' + R.filter(function (r) { return r.premio === "b3"; }).map(cardHTML).join("") + '</div>';
}
function cert() {
  if (!premioOk("b4")) { location.replace("#/bolofit"); return ""; }
  return JG.certHTML("#/bolofit", "RECOMPENSA · 4ª SEMANA", "Mestre do Bolo Fit", "Quatro semanas de bolo. Coloque seu nome e salve o certificado para postar e marcar @cozinhaqueresolve.br.",
    '<div class="sec"><h2>Bolos do Mestre</h2><span>liberados</span></div><div class="list">' + R.filter(function (r) { return r.premio === "b4"; }).map(cardHTML).join("") + '</div>');
}
var AJ = [
  ["🍰", "Como funciona", "Faça 3 bolos diferentes da coleção Bolos Fitness na mesma semana (segunda a domingo). Dá para marcar 1 bolo por dia."],
  ["✓", "Como marcar", "Na tela do desafio, toque em ✓ numa sugestão do dia ou escolha outro bolo na lista. O botão “Fiz essa receita!” no fim de cada bolo também marca o bolo do dia automaticamente."],
  ["⭐", "XP", "Cada bolo marcado: +60 XP. Semana completa: +150 XP. Soma no mesmo nível do app."],
  ["🎁", "Recompensas", "1ª semana completa: Bolos de vó repaginados.\n2ª: Caldas e glacês secretos.\n3ª: Bolos de aniversário fit e preço de recompensa nas outras coleções.\n4ª: certificado Mestre do Bolo Fit e 5 bolos do Mestre.\nAs semanas não precisam ser seguidas."],
  ["🏅", "Selos", "Primeiro bolo, bolo sem forno, sem açúcar, de caneca, 10 bolos feitos, 2 semanas e Mestre do Bolo Fit."]
];
function ajuda() { return '<a href="#/bolofit" class="btn" style="margin-top:6px">‹ Semana do Bolo Fit</a><section class="jg-head" style="background:linear-gradient(160deg,#7A4A2E,#22130C)"><small style="color:#F2B8A0">AJUDA</small><h1>Semana do Bolo Fit</h1><p>Regras, XP e prêmios.</p></section>' + AJ.map(function (a) { return '<div class="box"><h2>' + a[0] + ' ' + esc(a[1]) + '</h2>' + a[2].split("\n").map(function (l) { return '<p>' + esc(l) + '</p>'; }).join("") + '</div>'; }).join(""); }
function bind(sub) {
  if (sub === "certificado") { var j = J(); JG.certBind({ titulo: "Mestre do Bolo Fit", emoji: "🍰", c1: "#7A4A2E", c2: "#22130C", c3: "#F2B8A0", linhas: ["que completou 4 semanas do Desafio", "Semana do Bolo Fit: 12 bolos", "diferentes feitos em casa."], rodape: j.xp + " XP · " + j.selos.length + " selos" }, "mestre-do-bolo-fit.png"); return; }
  view.querySelectorAll("[data-bolo]").forEach(function (b) { b.onclick = function () { if (marcar(b.dataset.bolo)) route(true); }; });
  var m = $("#bfMarca"); if (m) m.onclick = function () { var v = $("#bfSel").value; if (!v) { toast("Escolha o bolo na lista"); return; } if (marcar(v)) route(true); };
}
W.ROTAS["/bolofit"] = { nav: "desafios", html: function (sub) { return sub === "ajuda" ? ajuda() : sub === "certificado" ? cert() : sub === "premio3" ? premio3() : tela(); }, bind: bind };

function status(j) { var n = feitosSem(j, semanaDe()).length, ja = !!j.bolos[hoje()]; return { pct: Math.min(n, META) / META, txt: n >= META ? "Semana completa! 🎉" : n + " de " + META + " bolos", tag: n >= META ? "🎉" : ja ? "Hoje ✓" : "Faça 1" }; }
function homeCard(j) {
  var s = status(j), fs = feitosSem(j, semanaDe());
  return '<a class="jg-home" href="#/bolofit" style="background:linear-gradient(135deg,#7A4A2E,#3A2214)"><div><small style="color:#F2B8A0">SEMANA DO BOLO FIT · NÍVEL ' + JG.nivel(j.xp).n + '</small><b>' + esc(s.txt) + '</b></div><div class="jg-slots sm">' + [0, 1, 2].map(function (i) { return '<div class="' + (fs[i] ? "f" : "") + '">' + (fs[i] ? "🍰" : (i + 1) + "º") + '</div>'; }).join("") + '</div></a>';
}
function trava(r) { return r.col === "bolos" && !!r.premio && (!temAcesso("bolos") || !premioOk(r.premio)); }
function telaTrava(r) {
  if (r.col !== "bolos" || !r.premio) return ""; var p = PREMIOS.find(function (x) { return x.id === r.premio; });
  return '<a href="#/c/bolos" class="btn" style="margin-top:6px">‹ Bolos Fitness</a><section class="rhero ph"><img src="' + r.foto + '" alt=""><span class="free pill lockp">🔒 PRÊMIO DO DESAFIO</span><h1>' + esc(r.nome) + '</h1></section><p class="intro">' + esc(r.intro) + '</p>' +
    '<div class="box lockbox"><h2>🔒 Recompensa da ' + p.sem + 'ª semana completa</h2><p>Complete ' + p.sem + (p.sem > 1 ? " semanas" : " semana") + ' da Semana do Bolo Fit (3 bolos por semana) para abrir esta receita e o pacote <b>' + esc(p.t) + '</b>.</p></div>' +
    (temAcesso("bolos") && JG.visivel() ? '<a class="cta lime" href="#/bolofit">Ir para o desafio →</a>' : "");
}
JG.registrar({ id: "bolos", nome: "Semana do Bolo Fit", colNome: "Bolos Fitness", emoji: "🍰", bg: "#F6E6D6", cor: "#7A4A2A", href: "#/bolofit", ajudaHref: "#/bolofit/ajuda",
  vende: "/bolosfitness/?utm_source=app&utm_medium=app_desafios&utm_campaign=bolos", pitch: "3 bolos fit por semana, com prêmios",
  ativo: ativo, visivel: function () { return colVisivel(col("bolos")); }, status: status, homeCard: homeCard, sequencia: sequencia, trava: trava, telaTrava: telaTrava,
  onXP: function (j, tipo, r) { if (tipo === "feita" && r && r.col === "bolos" && !r.premio && ativo()) setTimeout(function () { marcar(r.id, true); }, 50); } });
W.BOLOS_JOGO = { premioOk: premioOk, PREMIOS: PREMIOS };

var css = ".jg-slots{display:flex;gap:8px;margin:12px 0 4px}.jg-slots div{flex:1;height:64px;border-radius:14px;border:2px dashed #CFC3AE;display:flex;align-items:center;justify-content:center;position:relative;overflow:hidden;font-weight:800;color:var(--muted,#66705F)}.jg-slots .f{border:2px solid #7A4A2A}.jg-slots img{width:100%;height:100%;object-fit:cover}.jg-slots b{position:absolute;right:4px;top:4px;background:#C8F53C;color:#14200a;border-radius:99px;width:20px;height:20px;font-size:12px;display:flex;align-items:center;justify-content:center}.jg-slots.sm div{height:40px;border-color:rgba(255,255,255,.4);color:#F6E6D6}.jg-slots.sm .f{border-color:#F2B8A0;background:rgba(255,255,255,.12);font-size:20px}";
var st = document.createElement("style"); st.textContent = css; document.head.appendChild(st);
})();
