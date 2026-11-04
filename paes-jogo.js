/* ================================================================
   PÃES QUE RESOLVEM — DESAFIO "SEMANA DO PÃO"
   3 pães diferentes da coleção por semana (no máximo 1 por dia).
   Prêmios: pp1..pp4 por semanas completas (não precisam ser seguidas).
   Premium: tema da semana (Integral, Sem glúten, Volta ao Mundo, Levain) com selo próprio.
   Estado em jogo.pao = { "AAAA-MM-DD": idDaReceita }, jogo.paoTema = { semana: tema }.
   Carregar DEPOIS de jogo.js.
   ================================================================ */
(function () {
var W = window, JG = W.JOGO;
var $, esc, store, track, toast, R, col, rec, thumb, temAcesso, colVisivel, bloqueada, cardHTML, pnUrl, route, view;
W.APP_READY = (function (prev) { return function (A) { $ = A.$; esc = A.esc; store = A.store; track = A.track; toast = A.toast; R = A.R; col = A.col; rec = A.rec; thumb = A.thumb; temAcesso = A.temAcesso; colVisivel = A.colVisivel; bloqueada = A.bloqueada; cardHTML = A.cardHTML; pnUrl = A.pnUrl; route = A.route; view = A.view; if (prev) prev(A); }; })(W.APP_READY);
var hoje = JG.hoje, semanaDe = JG.semanaDe, semanaAnterior = JG.semanaAnterior, J = JG.J, salvar = JG.salvar;
var META = 3;
var SELOS = { "p-primeiro": ["🍞", "Primeiro pão"], "p-semana": ["🥖", "Semana do Pão"], "p-semsova": ["🌀", "Pão sem sova"], "p-integral": ["🌾", "Pão integral"],
  "p-sg": ["🌱", "Pão sem glúten"], "p-10": ["🔟", "10 pães feitos"], "p-2sem": ["🥈", "2 semanas de pão"], "p-mestre": ["🏆", "Mestre Padeiro"],
  "pt-integral": ["🌾", "Semana Integral"], "pt-sg": ["🌱", "Semana Sem Glúten"], "pt-mundo": ["🌍", "Volta ao Mundo"], "pt-levain": ["🫙", "Mestre do Levain"] };
var TEMAS = { livre: ["🍞", "Semana livre", null], integral: ["🌾", "Semana Integral", /Integrais|integral/i], sg: ["🌱", "Semana Sem Glúten", /Sem glúten/], mundo: ["🌍", "Volta ao Mundo", /Pães do mundo/], levain: ["🫙", "Mestre do Levain", /Fermentação natural/] };
Object.keys(SELOS).forEach(function (k) { JG.SELOS[k] = SELOS[k]; });
var PREMIOS = [
  { id: "pp1", sem: 1, ic: "👨‍🍳", t: "Pães de Chef", s: "5 pães exclusivos" },
  { id: "pp2", sem: 2, ic: "🥖", t: "Recheados secretos", s: "5 pães recheados exclusivos" },
  { id: "pp3", sem: 3, ic: "🎁", t: "Pães para receber + desconto", s: "5 pães de festa e preço de recompensa na Vitrine" },
  { id: "pp4", sem: 4, ic: "🏆", t: "Mestre Padeiro", s: "Certificado com seu nome + 5 pães do Mestre" }
];
function feitosSem(j, wk) { return Object.keys(j.pao).filter(function (d) { return semanaDe(new Date(d + "T12:00:00")) === wk; }).sort(); }
function completas(j) { var c = {}; Object.keys(j.pao).forEach(function (d) { var w = semanaDe(new Date(d + "T12:00:00")); c[w] = (c[w] || 0) + 1; }); return Object.keys(c).filter(function (w) { return c[w] >= META; }).sort(); }
function sequencia(j) { var ok = completas(j), w = semanaDe(), n = 0; if (ok.indexOf(w) < 0) w = semanaAnterior(w); while (ok.indexOf(w) >= 0) { n++; w = semanaAnterior(w); } return n; }
function premioOk(id) { if (temAcesso("*")) return true; var p = PREMIOS.find(function (x) { return x.id === id; }); return !!p && completas(J()).length >= p.sem; }
function ativo() { return JG.visivel() && temAcesso("pao") && colVisivel(col("pao")); }
function temaSem(j) { return (j.paoTema || {})[semanaDe()] || "livre"; }
function meus(j) { var f = TEMAS[temaSem(j || J())][2]; return R.filter(function (r) { return r.col === "pao" && !r.premio && !bloqueada(r) && !/Bônus|Manteigas/.test(r.sec) && (!f || f.test(r.sec)); }); }
function semente(n) { var d = hoje().replace(/-/g, ""), x = +d; return function () { x = (x * 9301 + 49297) % 233280; return x / 233280; }; }
function sugestoes(j) {
  var wk = semanaDe(), ja = feitosSem(j, wk).map(function (d) { return j.pao[d]; }), L = meus(j).filter(function (r) { return ja.indexOf(r.id) < 0; }), rnd = semente();
  var rapido = L.filter(function (r) { return r.tempo <= 20; }), out = [];
  if (rapido.length) out.push(rapido[Math.floor(rnd() * rapido.length)]);
  while (out.length < 3 && L.length) { var r = L[Math.floor(rnd() * L.length)]; if (out.indexOf(r) < 0) out.push(r); if (out.length >= L.length) break; }
  return out;
}

/* marcar bolo feito (pela tela do desafio ou pelo "Fiz essa receita!") */
function marcar(id, viaReceita) {
  var j = J(), d = hoje(), wk = semanaDe(), r = rec(id);
  if (!r) return false;
  if (j.pao[d]) { if (!viaReceita) toast("Hoje você já marcou um pão. Volte amanhã!"); return false; }
  if (feitosSem(j, wk).map(function (x) { return j.pao[x]; }).indexOf(id) >= 0) { if (!viaReceita) toast("Esse já conta nesta semana. Escolha outro pão."); return false; }
  var a0 = JG.antes(j); j.pao[d] = id; var corpo = JG.ganhar(j, 60, "pão da semana"), novos = [];
  JG.selo(j, "p-primeiro", novos);
  if (/sem sova/i.test(r.sec + r.nome)) JG.selo(j, "p-semsova", novos);
  if (/Integra/.test(r.sec) || /integral/i.test(r.nome)) JG.selo(j, "p-integral", novos);
  if (/Sem glúten/.test(r.sec)) JG.selo(j, "p-sg", novos);
  if (Object.keys(j.pao).length >= 10) JG.selo(j, "p-10", novos);
  var n = feitosSem(j, wk).length, titulo = "Pão marcado! 🍞", desbl = "";
  if (n === META) {
    titulo = "Semana do Pão completa! 🎉"; corpo += JG.ganhar(j, 150, META + " pães na semana"); JG.selo(j, "p-semana", novos);
    var tm = temaSem(j); if (tm !== "livre") JG.selo(j, "pt-" + tm, novos);
    var tot = completas(j).length; if (tot >= 2) JG.selo(j, "p-2sem", novos); if (tot >= 4) JG.selo(j, "p-mestre", novos);
    var p = PREMIOS.find(function (x) { return x.sem === tot; });
    if (p) desbl = '<a class="jg-p ok" href="' + linkPremio(p) + '" onclick="document.getElementById(\'sheet\').classList.remove(\'show\')"><i>' + p.ic + '</i><div><small>RECOMPENSA DESBLOQUEADA</small><b>' + esc(p.t) + '</b><span>' + esc(p.s) + '</span></div></a>';
    track("DesafioPaoSemana", { semanas: tot }, true);
  }
  JG.registraDesfazer(j, "pao:" + d, a0); JG.salvar(j); track("DesafioPao", { n: n, via: viaReceita ? "receita" : "desafio" }, true);
  JG.festa(titulo, '<div class="jg-cel">' + (n === META ? "🏆" : "🍞") + '</div><p style="text-align:center;margin:0 0 10px">' + n + ' de ' + META + ' pães desta semana · ' + esc(r.nome) + '</p>' + corpo + desbl + JG.novosHTML(novos));
  return true;
}
function linkPremio(p) { return p.id === "pp4" ? "#/semanadopao/certificado" : p.id === "pp3" ? "#/semanadopao/premio3" : "#/c/pao"; }

/* ---------------- telas ---------------- */
function tela() {
  if (!JG.visivel() || !colVisivel(col("pao"))) { location.replace("#/"); return ""; }
  var head = '<div class="jg-row" style="margin-top:6px"><a href="#/desafios" class="btn">‹ Desafios</a><a href="#/semanadopao/ajuda" class="btn">❓ Como funciona</a></div>';
  var hdr = '<section class="jg-head" style="background:linear-gradient(160deg,#9A5B13,#2A1606)"><small style="color:#F6C98A">DESAFIO · PÃES QUE RESOLVEM</small><h1>Semana do Pão</h1><p>3 pães diferentes por semana. Fez, marcou, ganhou XP. Completa 4 semanas e vira Mestre Padeiro.</p></section>';
  if (!temAcesso("pao")) return head + hdr + '<a class="cta lime" href="/paesqueresolvem/?utm_source=app&utm_medium=app_desafios&utm_campaign=pao&utm_content=desafio" target="_blank" rel="noopener">Conhecer os Pães que Resolvem →</a>';
  var j = J(), wk = semanaDe(), fs = feitosSem(j, wk), n = fs.length, jaHoje = !!j.pao[hoje()], tm = temaSem(j);
  var h = head + JG.topo(j) + hdr;
  if (temAcesso("pao_premium") && !n) h += '<div class="sec"><h2>Tema da semana</h2><span>Premium</span></div><div class="chips">' + Object.keys(TEMAS).map(function (k) { return '<button aria-pressed="' + (k === tm) + '" data-ptema="' + k + '">' + TEMAS[k][0] + ' ' + esc(TEMAS[k][1]) + '</button>'; }).join("") + '</div>';
  else if (tm !== "livre") h += '<p class="note">Tema da semana: ' + TEMAS[tm][0] + ' ' + esc(TEMAS[tm][1]) + '</p>';
  h += '<section class="jg-card"><div class="jg-row"><b class="jg-t">PÃES DESTA SEMANA</b><span>' + n + ' de ' + META + '</span></div><div class="jg-slots">' +
    [0, 1, 2].map(function (i) { var d = fs[i], r = d && rec(j.pao[d]); return '<div class="' + (r ? "f" : "") + '">' + (r ? '<img src="' + thumb(r) + '" alt=""><b>✓</b>' : '<span>' + (i + 1) + 'º</span>') + '</div>'; }).join("") + '</div>';
  if (n >= META) h += '<div class="jg-ok">🎉 Semana completa! Na segunda começa outra.</div>';
  else if (jaHoje) h += '<div class="jg-ok">✓ Pão de hoje marcado. Amanhã tem mais.</div><button class="jg-undo" id="pqDesfaz">Marquei sem querer · desfazer</button>';
  h += '</section>';
  if (n < META && !jaHoje) {
    h += '<div class="sec"><h2>Sugestões de hoje</h2><span>toque em Fiz ✓</span></div>' + sugestoes(j).map(function (r) { return '<div class="card jg-pick"><a href="#/r/' + r.id + '" style="display:contents"><img class="thumb" src="' + thumb(r) + '" alt=""><div><h3>' + esc(r.nome) + '</h3><div class="meta"><span class="pill">⏱ ' + r.tempo + ' min</span></div></div></a><button class="jg-x add" data-pao="' + r.id + '" aria-label="Fiz">✓</button></div>'; }).join("");
    var ja = fs.map(function (d) { return j.pao[d]; });
    h += '<div class="box"><h2>Fez outro pão da coleção?</h2><select id="pqSel" style="width:100%;padding:10px;border-radius:12px;border:1px solid var(--line,#E7DDCB);font:inherit;background:var(--surface);color:inherit"><option value="">Escolha o pão…</option>' +
      meus(j).filter(function (r) { return ja.indexOf(r.id) < 0; }).map(function (r) { return '<option value="' + r.id + '">' + esc(r.nome) + '</option>'; }).join("") + '</select><button class="cta" id="pqMarca" style="margin-top:10px">Marcar como feito ✓</button><p class="note">Dica: o botão “Fiz essa receita!” no fim de cada pão também marca o pão do dia.</p></div>';
  }
  var nC = completas(j).length;
  h += '<div class="sec"><h2>Recompensas</h2><span>' + nC + (nC === 1 ? " semana completa" : " semanas completas") + '</span></div><div class="jg-prem">' + PREMIOS.map(function (p) { var ok = nC >= p.sem || temAcesso("*"), f = p.sem - nC; return '<a class="jg-p' + (ok ? " ok" : "") + '" href="' + (ok ? linkPremio(p) : "#/semanadopao") + '"><i>' + (ok ? p.ic : "🔒") + '</i><div><small>' + p.sem + 'ª SEMANA COMPLETA</small><b>' + esc(p.t) + '</b><span>' + (ok ? "Liberado! Toque para abrir" : esc(p.s) + " · falta" + (f > 1 ? "m " + f + " semanas" : " 1 semana")) + '</span></div></a>'; }).join("") + '</div>';
  h += JG.selosHTML(j, Object.keys(SELOS), "Selos da Semana do Pão");
  return h;
}
function premio3() {
  if (!premioOk("pp3")) { location.replace("#/semanadopao"); return ""; }
  var D = (W.RECOMPENSAS || []).filter(function (x) { var c = col(x.id); return x.id !== "pao" && c && colVisivel(c) && !temAcesso(x.id); });
  return '<a href="#/semanadopao" class="btn" style="margin-top:6px">‹ Desafio</a><section class="jg-head"><small>RECOMPENSA · 3ª SEMANA</small><h1>Preço de recompensa</h1><p>Você completou 3 semanas de pão. Nas outras coleções: Essencial por R$ 9,90 e Premium por R$ 19,90.</p></section>' +
    (D.length ? D.map(function (x) { return '<section class="box planos"><h2>' + esc(x.nome) + '</h2><div class="plano"><small>ESSENCIAL</small><s>R$ 19,90</s> <b class="pp">R$ 9,90</b>' + (x.essencial ? '<a class="cta" href="' + esc(pnUrl(x.essencial, "recompensa_pao", x.id)) + '" target="_blank" rel="noopener">Quero o Essencial por R$ 9,90</a>' : '<p class="note">Em breve.</p>') + '</div><div class="plano top"><small>PREMIUM</small><s>R$ 29,90</s> <b class="pp">R$ 19,90</b>' + (x.premium ? '<a class="cta lime" href="' + esc(pnUrl(x.premium, "recompensa_pao", x.id)) + '" target="_blank" rel="noopener">Quero a Premium por R$ 19,90</a>' : '<p class="note">Em breve.</p>') + '</div></section>'; }).join("") : '<p class="note">Você já tem todas as coleções. 🎉 Este prêmio vale para os próximos lançamentos.</p>') +
    '<div class="sec"><h2>Pães para receber</h2><span>liberados</span></div><div class="list">' + R.filter(function (r) { return r.premio === "pp3"; }).map(cardHTML).join("") + '</div>';
}
function cert() {
  if (!premioOk("pp4")) { location.replace("#/semanadopao"); return ""; }
  return JG.certHTML("#/semanadopao", "RECOMPENSA · 4ª SEMANA", "Mestre Padeiro", "Quatro semanas de pão caseiro. Coloque seu nome e salve o certificado para postar e marcar @cozinhaqueresolve.br.",
    '<div class="sec"><h2>Pães do Mestre</h2><span>liberados</span></div><div class="list">' + R.filter(function (r) { return r.premio === "pp4"; }).map(cardHTML).join("") + '</div>');
}
var AJ = [
  ["🍞", "Como funciona", "Faça 3 pães diferentes da coleção Pães que Resolvem na mesma semana (segunda a domingo). Dá para marcar 1 pão por dia."],
  ["✓", "Como marcar", "Na tela do desafio, toque em ✓ numa sugestão do dia ou escolha outro pão na lista. O botão “Fiz essa receita!” no fim de cada pão também marca o pão do dia automaticamente. Marcou sem querer? Toque em “Marquei sem querer · desfazer”."],
  ["⭐", "XP", "Cada pão marcado: +60 XP. Semana completa: +150 XP. Soma no mesmo nível do app."],
  ["🎨", "Temas (Premium)", "No Premium, antes de marcar o primeiro pão da semana, escolha um tema: Integral, Sem Glúten, Volta ao Mundo ou Mestre do Levain. As sugestões seguem o tema e completar a semana dá um selo próprio."],
  ["🎁", "Recompensas", "1ª semana completa: Pães de Chef.\n2ª: Recheados secretos.\n3ª: Pães para receber e preço de recompensa nas outras coleções.\n4ª: certificado Mestre Padeiro e 5 pães do Mestre.\nAs semanas não precisam ser seguidas."],
  ["🏅", "Selos", "Primeiro pão, sem sova, integral, sem glúten, 10 pães feitos, 2 semanas, Mestre Padeiro e os 4 selos de tema."]
];
function ajuda() { return '<a href="#/semanadopao" class="btn" style="margin-top:6px">‹ Semana do Pão</a><section class="jg-head" style="background:linear-gradient(160deg,#9A5B13,#2A1606)"><small style="color:#F6C98A">AJUDA</small><h1>Semana do Pão</h1><p>Regras, XP e prêmios.</p></section>' + AJ.map(function (a) { return '<div class="box"><h2>' + a[0] + ' ' + esc(a[1]) + '</h2>' + a[2].split("\n").map(function (l) { return '<p>' + esc(l) + '</p>'; }).join("") + '</div>'; }).join(""); }
function bind(sub) {
  if (sub === "certificado") { var j = J(); JG.certBind({ titulo: "Mestre Padeiro", emoji: "🍞", c1: "#9A5B13", c2: "#2A1606", c3: "#F6C98A", linhas: ["que completou 4 semanas do Desafio", "Semana do Pão: 12 pães", "diferentes feitos em casa."], rodape: j.xp + " XP · " + j.selos.length + " selos" }, "mestre-padeiro.png"); return; }
  view.querySelectorAll("[data-pao]").forEach(function (b) { b.onclick = function () { if (marcar(b.dataset.pao)) route(true); }; });
  view.querySelectorAll("[data-ptema]").forEach(function (b) { b.onclick = function () { var j = J(); j.paoTema[semanaDe()] = b.dataset.ptema; salvar(j); route(true); }; });
  var dz = $("#pqDesfaz"); if (dz) dz.onclick = function () { var j = J(), d = hoje(); if (!j.pao[d]) return; delete j.pao[d]; JG.desfazer(j, "pao:" + d); JG.salvar(j); track("DesafioPaoDesfeito", {}, true); toast("Desfeito. O XP desse pão foi devolvido."); route(true); };
  var m = $("#pqMarca"); if (m) m.onclick = function () { var v = $("#pqSel").value; if (!v) { toast("Escolha o pão na lista"); return; } if (marcar(v)) route(true); };
}
W.ROTAS["/semanadopao"] = { nav: "desafios", html: function (sub) { return sub === "ajuda" ? ajuda() : sub === "certificado" ? cert() : sub === "premio3" ? premio3() : tela(); }, bind: bind };

function status(j) { var n = feitosSem(j, semanaDe()).length, ja = !!j.pao[hoje()]; return { pct: Math.min(n, META) / META, txt: n >= META ? "Semana completa! 🎉" : n + " de " + META + " pães", tag: n >= META ? "🎉" : ja ? "Hoje ✓" : "Faça 1" }; }
function homeCard(j) {
  var s = status(j), fs = feitosSem(j, semanaDe());
  return '<a class="jg-home" href="#/semanadopao" style="background:linear-gradient(135deg,#9A5B13,#3A2008)"><div><small style="color:#F6C98A">SEMANA DO PÃO · NÍVEL ' + JG.nivel(j.xp).n + '</small><b>' + esc(s.txt) + '</b></div><div class="jg-slots sm">' + [0, 1, 2].map(function (i) { return '<div class="' + (fs[i] ? "f" : "") + '">' + (fs[i] ? "🍞" : (i + 1) + "º") + '</div>'; }).join("") + '</div></a>';
}
function trava(r) { return r.col === "pao" && !!r.premio && (!temAcesso("pao") || !premioOk(r.premio)); }
function telaTrava(r) {
  if (r.col !== "pao" || !r.premio) return ""; var p = PREMIOS.find(function (x) { return x.id === r.premio; });
  return '<a href="#/c/pao" class="btn" style="margin-top:6px">‹ Pães que Resolvem</a><section class="rhero ph"><img src="' + r.foto + '" alt=""><span class="free pill lockp">🔒 PRÊMIO DO DESAFIO</span><h1>' + esc(r.nome) + '</h1></section><p class="intro">' + esc(r.intro) + '</p>' +
    '<div class="box lockbox"><h2>🔒 Recompensa da ' + p.sem + 'ª semana completa</h2><p>Complete ' + p.sem + (p.sem > 1 ? " semanas" : " semana") + ' da Semana do Pão (3 pães por semana) para abrir esta receita e o pacote <b>' + esc(p.t) + '</b>.</p></div>' +
    (temAcesso("pao") && JG.visivel() ? '<a class="cta lime" href="#/semanadopao">Ir para o desafio →</a>' : "");
}
JG.registrar({ id: "pao", nome: "Semana do Pão", colNome: "Pães que Resolvem", emoji: "🍞", bg: "#F6E7D2", cor: "#9A5B13", href: "#/semanadopao", ajudaHref: "#/semanadopao/ajuda",
  vende: "/paesqueresolvem/?utm_source=app&utm_medium=app_desafios&utm_campaign=pao", pitch: "3 pães caseiros por semana, com prêmios",
  ativo: ativo, visivel: function () { return colVisivel(col("pao")); }, status: status, homeCard: homeCard, sequencia: sequencia, trava: trava, telaTrava: telaTrava,
  onXP: function (j, tipo, r) { if (tipo === "desfeita" && r && j.pao[hoje()] === r.id) { delete j.pao[hoje()]; JG.desfazer(j, "pao:" + hoje()); } if (tipo === "feita" && r && r.col === "pao" && !r.premio && ativo()) setTimeout(function () { marcar(r.id, true); }, 50); } });
W.PAES_JOGO = { premioOk: premioOk, PREMIOS: PREMIOS };
})();
