/* ================================================================
   PANETONES — DESAFIO "RUMO AO NATAL"
   8 missões até 24/12, do primeiro panetone à primeira entrega.
   Prêmios por missões cumpridas: 3 (n1), 6 (n2 desconto), 8 (n3).
   Estado em jogo.pan = { cont: { "AAAA-MM-DD": n }, chk: { missao: data } }.
   Carregar DEPOIS de jogo.js (e de panetones.js / panetones2.js).
   ================================================================ */
(function () {
var W = window, JG = W.JOGO, RC = W.RECEITAS;
var $, esc, store, track, toast, R, col, rec, thumb, temAcesso, colVisivel, cardHTML, pnUrl, route, view;
W.APP_READY = (function (prev) { return function (A) { $ = A.$; esc = A.esc; store = A.store; track = A.track; toast = A.toast; R = A.R; col = A.col; rec = A.rec; thumb = A.thumb; temAcesso = A.temAcesso; colVisivel = A.colVisivel; cardHTML = A.cardHTML; pnUrl = A.pnUrl; route = A.route; view = A.view; if (prev) prev(A); }; })(W.APP_READY);
var hoje = JG.hoje, J = JG.J;
var NATAL = new Date("2026-12-24T00:00:00-03:00");

/* ---------------- receitas-prêmio (variações da massa do chocotone) ---------------- */
window.SECOES.panetones = window.SECOES.panetones.concat(["Prêmio · Sabores secretos de Natal", "Prêmio · Panetones do Mestre"]);
var base = RC.find(function (r) { return r.id === "pn-chocotone-gotas"; });
function variacao(o) {
  if (!base) return;
  var ingr = base.ingredientes.slice(0, -1).concat(o.add), passos = base.passos.map(function (p) { return /^Incorpore as gotas/.test(p.t) ? { t: o.passo } : p; });
  if (o.final) passos = passos.concat([{ t: o.final }]);
  RC.push({ id: o.id, col: "panetones", premium: "panetones", premio: o.premio, sec: o.sec, emoji: o.emoji, nome: o.nome, foto: window.ceiaImg("img/ceia/" + o.foto + ".webp"),
    intro: o.intro, tempo: base.tempo + (o.mais || 0), nivel: "Médio", rende: base.rende.replace(/chocotones?/g, "panetones"), tags: ["Forno", "Fermentação", "Prêmio"],
    ingredientes: ingr, passos: passos, dica: o.dica || "A massa é a mesma do Chocotone com gotas da coleção: se você já acertou ele, acerta este.", aviso: base.aviso + (o.aviso ? " " + o.aviso : "") });
}
var S1 = "Prêmio · Sabores secretos de Natal", S3 = "Prêmio · Panetones do Mestre";
variacao({ id: "pz-frutas-vermelhas", premio: "n1", sec: S1, emoji: "🍓", foto: "fest-coco", nome: "Panetone de frutas vermelhas e chocolate branco",
  intro: "Cranberry e mirtilo desidratados com gotas de chocolate branco. Colorido por dentro.",
  add: ["100 g de cranberry desidratado", "40 g de mirtilo desidratado", "100 g de gotas de chocolate branco forneáveis"],
  passo: "Hidrate as frutas 10 minutos em água morna, escorra e seque bem. Envolva frutas e gotas em 1 colher de sopa de farinha e incorpore dobrando a massa, sem sovar mais." });
var DL = "Leva doce de leite (lactose).";
variacao({ id: "pz-doce-de-leite-nozes", premio: "n1", sec: S1, emoji: "🌰", foto: "panetone", nome: "Panetone de doce de leite com nozes",
  intro: "Nozes tostadas na massa e doce de leite recheado depois de assar.", aviso: "Leva nozes. " + DL,
  add: ["150 g de nozes tostadas e picadas", "250 g de doce de leite firme (para rechear)"],
  passo: "Envolva as nozes em 1 colher de sopa de farinha e incorpore dobrando a massa, sem sovar mais.",
  final: "Com o panetone frio, encha um saco de confeitar com bico comprido e injete o doce de leite em 5 pontos pela base." });
variacao({ id: "pz-limao-siciliano", premio: "n1", sec: S1, emoji: "🍋", foto: "fest-laranja", nome: "Panetone de limão-siciliano com chocolate branco",
  intro: "Raspas de limão-siciliano e chocolate branco: leve e muito perfumado.",
  add: ["Raspas de 2 limões-sicilianos (adicione na sova)", "150 g de gotas de chocolate branco forneáveis"],
  passo: "Incorpore as raspas de limão e as gotas de chocolate branco dobrando a massa, sem sovar mais." });
variacao({ id: "pz-pistache-trufado", premio: "n3", sec: S3, emoji: "💚", foto: "fest-coco", nome: "Panetone de pistache trufado", mais: 20,
  intro: "Pistache na massa e trufa de chocolate branco com pistache injetada. O panetone de vitrine.", aviso: "Leva pistache. Contém lactose.",
  add: ["100 g de pistache sem sal picado", "Trufa: 200 g de chocolate branco + 80 g de creme de leite + 60 g de pasta de pistache"],
  passo: "Envolva o pistache em 1 colher de sopa de farinha e incorpore dobrando a massa, sem sovar mais.",
  final: "Trufa: derreta o chocolate branco com o creme de leite, misture a pasta de pistache e deixe esfriar até virar creme. Injete pela base do panetone frio." });
variacao({ id: "pz-banana-canela", premio: "n3", sec: S3, emoji: "🍌", foto: "panetone", nome: "Panetone de banana-passa com canela e nozes",
  intro: "Banana-passa, canela e nozes: um panetone com cara de casa.", aviso: "Leva nozes.",
  add: ["120 g de banana-passa picada", "60 g de nozes picadas", "2 colheres de chá de canela (adicione na sova)"],
  passo: "Envolva a banana-passa e as nozes em 1 colher de sopa de farinha e incorpore dobrando a massa, sem sovar mais." });

/* ---------------- missões ---------------- */
function total(j) { return Object.keys(j.pan.cont).reduce(function (a, d) { return a + j.pan.cont[d]; }, 0); }
function feitasPan(j) { return Object.keys(j.log).filter(function (k) { if (k.indexOf("f:") !== 0) return false; var r = rec(k.slice(2)); return r && r.col === "panetones"; }).map(function (k) { return rec(k.slice(2)); }); }
var MIS = [
  { id: "m1", ic: "🥖", t: "Faça o seu 1º panetone", s: "Marque no contador abaixo", ok: function (j) { return total(j) >= 1; } },
  { id: "m2", ic: "📖", t: "Leia o guia Massa Perfeita", s: "O ponto do véu e da fermentação", link: "#/g/massa-perfeita", manual: "Li o guia" },
  { id: "m3", ic: "🍫", t: "Faça um chocotone", s: "Toque em “Fiz essa receita!” num chocotone", ok: function (j) { return feitasPan(j).some(function (r) { return /chocotone/i.test(r.nome); }); } },
  { id: "m4", ic: "🍓", t: "Faça 3 sabores diferentes", s: "“Fiz essa receita!” em 3 receitas da coleção", ok: function (j) { return feitasPan(j).length >= 3; }, prog: function (j) { return Math.min(feitasPan(j).length, 3) + " de 3"; } },
  { id: "m5", ic: "🎁", t: "Monte uma embalagem de presente", s: "Ideias no guia de embalagens", link: "#/g/embalagens-panetone", manual: "Montei" },
  { id: "m6", ic: "🔟", t: "Chegue a 10 panetones", s: "Some no contador", ok: function (j) { return total(j) >= 10; }, prog: function (j) { return Math.min(total(j), 10) + " de 10"; } },
  { id: "m7", ic: "💰", t: "Calcule o seu preço", s: "Na Central PRO (Premium) ou no papel", link: "#/pro", manual: "Calculei" },
  { id: "m8", ic: "🎄", t: "Entregue o primeiro", s: "Venda ou presente: entregou, marcou", manual: "Entreguei" }
];
var PREMIOS = [
  { id: "n1", n: 3, ic: "🤫", t: "Sabores secretos de Natal", s: "3 panetones exclusivos" },
  { id: "n2", n: 6, ic: "🎁", t: "Preço de recompensa", s: "Outras coleções por R$ 9,90 (Essencial) e R$ 19,90 (Premium)" },
  { id: "n3", n: 8, ic: "🏆", t: "Mestre Panetoneiro", s: "Certificado com seu nome + 2 panetones do Mestre" }
];
var SELOS = { "n-primeiro": ["🥖", "Primeiro panetone"], "n-choco": ["🍫", "Chocotone feito"], "n-3sab": ["🌈", "3 sabores"], "n-10": ["🔟", "10 panetones"], "n-entrega": ["🎄", "Primeira entrega"], "n-mestre": ["🏆", "Mestre Panetoneiro"] };
Object.keys(SELOS).forEach(function (k) { JG.SELOS[k] = SELOS[k]; });
var SELO_M = { m1: "n-primeiro", m3: "n-choco", m4: "n-3sab", m6: "n-10", m8: "n-entrega" };
function feita(j, m) { return !!j.pan.chk[m.id]; }
function cumpridas(j) { return MIS.filter(function (m) { return feita(j, m); }).length; }
/* confere missões automáticas e dá o XP uma vez só */
function conferir(j) {
  var novos = [], xp = 0, ganhas = [];
  MIS.forEach(function (m) { if (!j.pan.chk[m.id] && m.ok && m.ok(j)) { j.pan.chk[m.id] = hoje(); xp += 80; ganhas.push(m); if (SELO_M[m.id]) JG.selo(j, SELO_M[m.id], novos); } });
  if (cumpridas(j) === MIS.length) JG.selo(j, "n-mestre", novos);
  j.xp += xp; return { xp: xp, ganhas: ganhas, novos: novos };
}
function premioOk(id) { if (temAcesso("*")) return true; var p = PREMIOS.find(function (x) { return x.id === id; }); return !!p && cumpridas(J()) >= p.n; }
function ativo() { return JG.visivel() && temAcesso("panetones"); }
function dias() { return Math.max(0, Math.ceil((NATAL - new Date()) / 864e5)); }
function avisaGanho(res, extra) {
  if (!res.ganhas.length && !extra) return;
  var j = J(), n = cumpridas(j), p = PREMIOS.find(function (x) { return x.n === n; }), desbl = "";
  if (p && res.ganhas.length) desbl = '<a class="jg-p ok" href="' + link(p) + '" onclick="document.getElementById(\'sheet\').classList.remove(\'show\')"><i>' + p.ic + '</i><div><small>RECOMPENSA DESBLOQUEADA</small><b>' + esc(p.t) + '</b><span>' + esc(p.s) + '</span></div></a>';
  JG.festa(res.ganhas.length ? "Missão cumprida! 🎄" : "Mais um panetone! 🥖", '<div class="jg-cel">' + (res.ganhas.length ? "🎄" : "🥖") + '</div>' + res.ganhas.map(function (m) { return '<p style="text-align:center;margin:0 0 6px"><b>' + m.ic + ' ' + esc(m.t) + '</b></p>'; }).join("") + (extra || "") + (res.xp ? '<div class="jg-xp">+' + res.xp + ' XP<small>' + n + ' de 8 missões</small></div>' : "") + desbl + JG.novosHTML(res.novos));
}
function link(p) { return p.id === "n3" ? "#/natal/certificado" : p.id === "n2" ? "#/natal/premio" : "#/c/panetones"; }

/* ---------------- telas ---------------- */
var HDR = function () { return '<section class="jg-head" style="background:linear-gradient(160deg,#B3261E,#4A0E0B)"><small style="color:#FFD27A">DESAFIO · PANETONES</small><h1>Rumo ao Natal</h1><p>8 missões até 24/12, do primeiro panetone à primeira entrega.</p>'; };
function tela() {
  if (!JG.visivel()) { location.replace("#/"); return ""; }
  var top = '<div class="jg-row" style="margin-top:6px"><a href="#/desafios" class="btn">‹ Desafios</a><a href="#/natal/ajuda" class="btn">❓ Como funciona</a></div>';
  if (!temAcesso("panetones")) return top + HDR() + '</section><a class="cta lime" href="/panetones/?utm_source=app&utm_medium=app_desafios&utm_campaign=panetones&utm_content=desafio">Conhecer os Panetones que Resolvem →</a>';
  var j = J(), res = conferir(j); JG.salvar(j); if (res.ganhas.length) setTimeout(function () { avisaGanho(res); }, 300);
  var n = cumpridas(j), d = dias(), hj = j.pan.cont[hoje()] || 0;
  var h = top + JG.topo(j) + HDR() + '<div class="jg-cnt"><div><b>' + d + '</b><small>' + (d === 1 ? "dia" : "dias") + ' até o Natal</small></div><div><b>' + total(j) + '</b><small>panetones feitos</small></div><div><b>' + n + '/8</b><small>missões</small></div></div></section>';
  h += '<section class="jg-card"><div class="jg-row"><b class="jg-t">CONTADOR DE PANETONES</b><span>hoje: ' + hj + '</span></div><div class="jg-row" style="margin-top:10px"><button class="btn" id="pnMenos"' + (hj ? "" : " disabled") + '>− 1</button><b style="font-size:34px">' + total(j) + '</b><button class="cta lime" id="pnMais" style="width:auto;padding:12px 18px">+1 panetone feito</button></div><p class="note" style="margin:8px 0 0">Até 6 por dia · +30 XP cada</p></section>';
  h += '<div class="sec"><h2>Missões</h2><span>+80 XP cada</span></div>' + MIS.map(function (m, i) { var ok = feita(j, m), now = !ok && MIS.slice(0, i).every(function (x) { return feita(j, x); });
    return '<div class="jg-ms' + (ok ? " ok" : now ? " now" : "") + '"><i>' + m.ic + '</i><div><b>' + esc(m.t) + '</b><small>' + (m.prog && !ok ? m.prog(j) + " · " : "") + esc(m.s) + '</small>' + (m.link && !ok ? ' <a href="' + m.link + '" style="font-size:12px">abrir ›</a>' : "") + '</div>' + (ok ? '<b>✓</b>' : m.manual ? '<button data-mis="' + m.id + '">' + esc(m.manual) + '</button>' : "") + '</div>'; }).join("");
  h += '<div class="sec"><h2>Recompensas</h2><span>' + n + ' de 8 missões</span></div><div class="jg-prem">' + PREMIOS.map(function (p) { var ok = n >= p.n || temAcesso("*"), f = p.n - n; return '<a class="jg-p' + (ok ? " ok" : "") + '" href="' + (ok ? link(p) : "#/natal") + '"><i>' + (ok ? p.ic : "🔒") + '</i><div><small>' + p.n + ' MISSÕES</small><b>' + esc(p.t) + '</b><span>' + (ok ? "Liberado! Toque para abrir" : esc(p.s) + " · falta" + (f > 1 ? "m " + f + " missões" : " 1 missão")) + '</span></div></a>'; }).join("") + '</div>';
  h += JG.selosHTML(j, Object.keys(SELOS), "Selos do Rumo ao Natal");
  return h;
}
function premio() {
  if (!premioOk("n2")) { location.replace("#/natal"); return ""; }
  var D = (W.RECOMPENSAS || []).filter(function (x) { var c = col(x.id); return x.id !== "panetones" && c && colVisivel(c) && !temAcesso(x.id); });
  return '<a href="#/natal" class="btn" style="margin-top:6px">‹ Desafio</a><section class="jg-head" style="background:linear-gradient(160deg,#B3261E,#4A0E0B)"><small style="color:#FFD27A">RECOMPENSA · 6 MISSÕES</small><h1>Preço de recompensa</h1><p>Nas outras coleções: Essencial por R$ 9,90 e Premium por R$ 19,90.</p></section>' +
    (D.length ? D.map(function (x) { return '<section class="box planos"><h2>' + esc(x.nome) + '</h2><div class="plano"><small>ESSENCIAL</small><s>R$ 19,90</s> <b class="pp">R$ 9,90</b>' + (x.essencial ? '<a class="cta" href="' + esc(pnUrl(x.essencial, "recompensa_natal", x.id)) + '" target="_blank" rel="noopener">Quero o Essencial por R$ 9,90</a>' : '<p class="note">Em breve.</p>') + '</div><div class="plano top"><small>PREMIUM</small><s>R$ 29,90</s> <b class="pp">R$ 19,90</b>' + (x.premium ? '<a class="cta lime" href="' + esc(pnUrl(x.premium, "recompensa_natal", x.id)) + '" target="_blank" rel="noopener">Quero a Premium por R$ 19,90</a>' : '<p class="note">Em breve.</p>') + '</div></section>'; }).join("") : '<p class="note">Você já tem todas as coleções. 🎉 Este prêmio vale para os próximos lançamentos.</p>');
}
function cert() {
  if (!premioOk("n3")) { location.replace("#/natal"); return ""; }
  return JG.certHTML("#/natal", "RECOMPENSA · 8 MISSÕES", "Mestre Panetoneiro", "Todas as missões do Rumo ao Natal. Coloque seu nome e salve o certificado para postar e marcar @cozinhaqueresolve.br.",
    '<div class="sec"><h2>Panetones do Mestre</h2><span>liberados</span></div><div class="list">' + R.filter(function (r) { return r.premio === "n3"; }).map(cardHTML).join("") + '</div>');
}
var AJ = [
  ["🎄", "Como funciona", "São 8 missões para cumprir até 24/12. Algumas o app confere sozinho (pelo contador e pelo “Fiz essa receita!”), outras você marca no botão da missão."],
  ["🔢", "Contador de panetones", "Toque em “+1 panetone feito” a cada panetone que sair do forno (até 6 por dia). Cada um vale +30 XP e conta para a missão dos 10 panetones."],
  ["🍫", "Sabores e chocotone", "As missões do chocotone e dos 3 sabores contam quando você toca em “Fiz essa receita!” no fim de uma receita da coleção."],
  ["🎁", "Recompensas", "3 missões: Sabores secretos de Natal (3 panetones exclusivos).\n6 missões: preço de recompensa nas outras coleções da Vitrine.\n8 missões: certificado Mestre Panetoneiro e 2 panetones do Mestre."],
  ["⭐", "XP", "Cada missão: +80 XP. Cada panetone no contador: +30 XP. Soma no mesmo nível do app."]
];
function ajuda() { return '<a href="#/natal" class="btn" style="margin-top:6px">‹ Rumo ao Natal</a><section class="jg-head" style="background:linear-gradient(160deg,#B3261E,#4A0E0B)"><small style="color:#FFD27A">AJUDA</small><h1>Rumo ao Natal</h1><p>Regras, XP e prêmios.</p></section>' + AJ.map(function (a) { return '<div class="box"><h2>' + a[0] + ' ' + esc(a[1]) + '</h2>' + a[2].split("\n").map(function (l) { return '<p>' + esc(l) + '</p>'; }).join("") + '</div>'; }).join(""); }
function bind(sub) {
  if (sub === "certificado") { var jj = J(); JG.certBind({ titulo: "Mestre Panetoneiro", emoji: "🎄", c1: "#B3261E", c2: "#4A0E0B", c3: "#FFD27A", linhas: ["que cumpriu as 8 missões do", "Desafio Rumo ao Natal: " + total(jj) + " panetones", "feitos em casa."], rodape: jj.xp + " XP · " + jj.selos.length + " selos" }, "mestre-panetoneiro.png"); return; }
  if (sub) return;
  var mais = $("#pnMais"); if (mais) mais.onclick = function () { var j = J(), d = hoje(); j.pan.cont[d] = j.pan.cont[d] || 0; if (j.pan.cont[d] >= 6) { toast("Máximo de 6 por dia"); return; } j.pan.cont[d]++; j.xp += 30; var res = conferir(j); JG.salvar(j); track("NatalPanetone", { total: total(j) }, true); if (res.ganhas.length) avisaGanho(res, '<div class="jg-xp">+30 XP<small>panetone no contador</small></div>'); else toast("+30 XP · " + total(j) + " panetones"); route(true); };
  var menos = $("#pnMenos"); if (menos) menos.onclick = function () { var j = J(), d = hoje(); if (!j.pan.cont[d]) return; j.pan.cont[d]--; j.xp = Math.max(0, j.xp - 30); JG.salvar(j); route(true); };
  view.querySelectorAll("[data-mis]").forEach(function (b) { b.onclick = function () { var j = J(), m = MIS.find(function (x) { return x.id === b.dataset.mis; }); if (j.pan.chk[m.id]) return; j.pan.chk[m.id] = hoje(); var novos = []; if (SELO_M[m.id]) JG.selo(j, SELO_M[m.id], novos); var res = conferir(j); res.xp += 80; res.ganhas.unshift(m); res.novos = novos.concat(res.novos); j.xp += 80; JG.salvar(j); track("NatalMissao", { missao: m.id }, true); avisaGanho(res); route(true); }; });
}
W.ROTAS["/natal"] = { nav: "desafios", html: function (sub) { return sub === "ajuda" ? ajuda() : sub === "certificado" ? cert() : sub === "premio" ? premio() : tela(); }, bind: bind };

function status(j) { var n = cumpridas(j); return { pct: n / 8, txt: n + " de 8 missões · " + dias() + " dias", tag: n >= 8 ? "🏆" : dias() + "d" }; }
function homeCard(j) { var s = status(j); return '<a class="jg-home" href="#/natal" style="background:linear-gradient(135deg,#B3261E,#4A0E0B)"><div><small style="color:#FFD27A">RUMO AO NATAL · NÍVEL ' + JG.nivel(j.xp).n + '</small><b>' + esc(s.txt) + '</b></div><div class="jg-bar" style="margin-top:10px"><i style="width:' + Math.round(s.pct * 100) + '%;background:#FFD27A"></i></div></a>'; }
function trava(r) { return r.col === "panetones" && !!r.premio && (!temAcesso("panetones") || !premioOk(r.premio)); }
function telaTrava(r) {
  if (r.col !== "panetones" || !r.premio) return ""; var p = PREMIOS.find(function (x) { return x.id === r.premio; });
  return '<a href="#/c/panetones" class="btn" style="margin-top:6px">‹ Panetones</a><section class="rhero ph"><img src="' + r.foto + '" alt=""><span class="free pill lockp">🔒 PRÊMIO DO DESAFIO</span><h1>' + esc(r.nome) + '</h1></section><p class="intro">' + esc(r.intro) + '</p>' +
    '<div class="box lockbox"><h2>🔒 Recompensa de ' + p.n + ' missões</h2><p>Cumpra ' + p.n + ' missões do desafio Rumo ao Natal para abrir esta receita.</p></div>' + (temAcesso("panetones") && JG.visivel() ? '<a class="cta lime" href="#/natal">Ir para o desafio →</a>' : "");
}
JG.registrar({ id: "panetones", nome: "Rumo ao Natal", colNome: "Panetones", emoji: "🎄", bg: "#FBE3DF", cor: "#B3261E", href: "#/natal", ajudaHref: "#/natal/ajuda",
  vende: "/panetones/?utm_source=app&utm_medium=app_desafios&utm_campaign=panetones", pitch: "8 missões até o Natal, com prêmios",
  ativo: ativo, visivel: function () { return colVisivel(col("panetones")); }, status: status, homeCard: homeCard, trava: trava, telaTrava: telaTrava,
  onXP: function (j, tipo, r) { if (tipo === "feita" && r && r.col === "panetones" && ativo()) { var res = conferir(j); if (res.ganhas.length) setTimeout(function () { avisaGanho(res); }, 60); } } });
W.PAN_JOGO = { premioOk: premioOk };

var css = ".jg-cnt{display:flex;gap:8px;margin-top:12px}.jg-cnt div{flex:1;background:rgba(255,255,255,.14);border-radius:12px;padding:8px;text-align:center}.jg-cnt b{display:block;font:400 30px/1 var(--display,inherit);color:#FFD27A}.jg-cnt small{font-size:11px;color:#fff;letter-spacing:0}";
var st = document.createElement("style"); st.textContent = css; document.head.appendChild(st);
})();
