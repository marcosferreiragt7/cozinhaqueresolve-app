/* ================================================================
   PÃES QUE RESOLVEM — TELA DA COLEÇÃO + OFERTAS DENTRO DO APP
   O desafio (Semana do Pão) fica em paes-jogo.js.
   Carregar DEPOIS de paes-jogo.js.
   ================================================================ */
(function () {
var W = window, JG = W.JOGO;
var bloqueada, $, esc, track, R, col, temAcesso, colVisivel, cardHTML, pnUrl, guiaOk, PROOK, origem;
W.APP_READY = (function (prev) { return function (A) { $ = A.$; esc = A.esc; track = A.track; R = A.R; col = A.col; temAcesso = A.temAcesso; colVisivel = A.colVisivel; cardHTML = A.cardHTML; pnUrl = A.pnUrl; guiaOk = A.guiaOk; bloqueada = A.bloqueada; PROOK = A.PROOK; origem = A.origem; if (prev) prev(A); }; })(W.APP_READY);
W.COLVIEW = W.COLVIEW || {};

function paoUrl(lugar) { return "/paesqueresolvem/?utm_source=app&utm_medium=app_" + encodeURIComponent(origem || "direto") + "&utm_campaign=pao&utm_content=" + lugar; }
function promo(lugar) {
  var c = col("pao"); if (!c || !colVisivel(c)) return "";
  if (temAcesso("pao")) return '<a class="ceia-own" href="#/c/pao"><span>🍞</span><div><b>Pães que Resolvem' + (temAcesso("pao_premium") ? " Premium" : "") + '</b><small>Abrir minha coleção</small></div><span class="go">›</span></a>';
  var P = W.PAES, btn = function (url, txt, plano) { return '<a class="cta ' + (plano === "premium" ? "lime" : "") + '" href="' + esc(url ? pnUrl(url, lugar, "pao") : paoUrl(lugar)) + '" target="_blank" rel="noopener" onclick="__buy(\'pao_' + plano + '\',\'' + lugar + '\')">' + txt + '</a>'; };
  return '<section class="box planos"><h2>Escolha sua coleção</h2><div class="plano"><small>PARA COMEÇAR</small><h3>Essencial</h3><p>50 pães + 5 bônus + Semana do Pão com prêmios.</p><b class="pp">' + esc(P.preco) + '</b>' + btn(P.checkout.essencial, "Quero o Essencial", "essencial") + '</div>' +
    '<div class="plano top"><span class="flag">+ R$ 10</span><small>VERSÃO COMPLETA</small><h3>Premium</h3><p>150 pães (com pizzas, esfihas e fermentação natural) + 15 bônus + temas extras + Central PRO.</p><b class="pp">' + esc(P.precoPremium) + '</b>' + btn(P.checkout.premium, "Quero a Premium", "premium") + '</div><a class="already" href="#/completo">Já comprei · liberar meu acesso →</a></section>';
}
function upgrade(lugar) {
  if (temAcesso("pao_premium") || !temAcesso("pao")) return ""; var P = W.PAES;
  return '<section class="box upg"><small>SÓ PARA QUEM JÁ TEM O ESSENCIAL</small><h2>Desbloqueie a coleção completa por + ' + esc(P.precoUpgrade) + '</h2><ul class="gl"><li>100 pães extras: doces e de festa, recheados, pizzas e esfihas, sem glúten avançado, low carb, fermentação natural, pães do mundo e lanches</li><li>10 bônus: fermento natural do zero, manteigas e geleias, kit para vender, etiquetas, congelar em lote e mais</li><li>4 temas extras no desafio, com selos próprios</li><li>Central PRO: custos, ajuste de receitas, agenda e lotes</li></ul>' +
    '<a class="cta lime" href="' + esc(P.checkout.upgrade ? pnUrl(P.checkout.upgrade, lugar, "pao") : paoUrl(lugar)) + '" target="_blank" rel="noopener" onclick="__buy(\'pao_upgrade\',\'' + lugar + '\')">Quero a versão completa →</a></section>';
}
W.PAES_PROMO = promo; W.PAES_UPGRADE = upgrade;

W.COLVIEW.pao = function (c) {
  var rs = R.filter(function (r) { return r.col === "pao"; }), own = temAcesso("pao"), prem = temAcesso("pao_premium");
  track("ViewContent", { content_name: c.nome, content_category: "colecao" });
  var secs = W.SECOES.pao, ess = secs.filter(function (s) { return !/^(Premium|Bônus|Prêmio)/.test(s); }), pre = secs.filter(function (s) { return /^Premium · /.test(s); }), bP = secs.filter(function (s) { return /^Bônus Premium · /.test(s); }), pr = secs.filter(function (s) { return /^Prêmio · /.test(s); });
  var bloco = function (list) { return list.map(function (s) { var l = rs.filter(function (r) { return r.sec === s; }); return l.length ? '<div class="sec"><h2>' + esc(s.replace(/^(Bônus Premium|Premium|Bônus|Prêmio) · /, "")) + '</h2><span>' + l.length + '</span></div><div class="list">' + l.map(cardHTML).join("") + '</div>' : ""; }).join(""); };
  var gl = function (list) { return '<div class="list">' + list.map(function (g) { return '<a class="card" href="#/g/' + g.id + '"><div class="thumb em">' + g.emoji + '</div><div><h3>' + esc(g.nome) + '</h3><div class="meta">' + (guiaOk(g) ? "" : '<span class="pill lock">🔒</span>') + '<span class="pill">' + esc(g.sub) + '</span></div></div><span class="go">›</span></a>'; }).join("") + '</div>'; };
  var gE = W.GUIAS.filter(function (g) { return g.produto === "pao"; }), gP = W.GUIAS.filter(function (g) { return g.produto === "pao_premium"; });
  var jogoOn = JG && JG.visivel();
  return '<a href="#/" class="btn" style="margin-top:6px">‹ Início</a>' +
    '<section class="colhero" style="--cc:' + c.cor + '"><img src="' + c.capa + '" alt=""><div><small>' + (prem ? "✓ SUA COLEÇÃO · PREMIUM" : own ? "✓ SUA COLEÇÃO · ESSENCIAL" : "COLEÇÃO") + '</small><h1>' + c.emoji + ' ' + esc(c.nome) + '</h1><p>' + (prem ? "150 pães, 15 bônus, temas extras no desafio e a Central PRO." : esc(c.desc)) + '</p></div></section>' +
    (own ? "" : (function () { var g = rs.filter(function (r) { return !r.premio && !bloqueada(r); }); return g.length ? '<div class="sec"><h2>🎁 Grátis para provar</h2><span>' + g.length + ' liberadas</span></div><div class="list">' + g.map(cardHTML).join("") + '</div>' : ""; })() + promo("colecao_topo")) + upgrade("colecao_topo") +
    (jogoOn ? '<a class="menu" href="#/semanadopao" style="margin:16px 0 8px"><span class="em">🏆</span><div><h3>Desafio Semana do Pão</h3><p>3 pães diferentes por semana, com XP, selos e receitas-prêmio.</p></div><span class="go">›</span></a><a class="already" href="#/semanadopao/ajuda" style="display:block;margin:0 0 16px">❓ Como funciona o desafio</a>' : "") +
    '<a class="menu" href="#/pro" style="margin:0 0 16px"><span class="em">🧰</span><div><h3>Central PRO ' + (PROOK() ? "" : "🔒") + '</h3><p>Custos e preço, ajuste de receitas, agenda de pedidos e controle de lotes.</p></div><span class="go">›</span></a>' +
    '<div class="tier"><b>Essencial</b><span>50 pães + 5 bônus</span></div>' + bloco(ess) +
    '<div class="sec"><h2>Bônus do Essencial</h2><span>5</span></div>' + gl(gE) +
    '<div class="tier pre"><b>Premium</b><span>+100 pães + 10 bônus ' + (prem ? "" : "· 🔒") + '</span></div>' + (prem ? "" : upgrade("colecao_premium") || (!own ? '<p class="note">As receitas abaixo fazem parte da versão Premium.</p>' : "")) +
    bloco(pre) + '<div class="sec"><h2>Bônus do Premium</h2><span>10</span></div>' + bloco(bP) + gl(gP) +
    (jogoOn ? '<div class="tier pre" style="background:#9A5B13"><b>🏆 Prêmios do Desafio</b><span>Semana do Pão</span></div><p class="note">Abrem conforme você completa semanas no desafio.</p>' + bloco(pr) : "") +
    '<p class="foot">' + esc(c.foot) + '</p>';
};
})();
