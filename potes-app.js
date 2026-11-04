/* ================================================================
   SALADAS NO POTE — TELA DA COLEÇÃO + DESAFIO DA SEMANA (jogo)
   O jogo é do app inteiro (XP e nível únicos). O primeiro desafio é a
   Semana do Pote: escolher 5 saladas, preparar no domingo e marcar
   1 pote por dia. Recompensas sempre dentro do app.
   Ganchos usados pelo index.html:
     window.COLVIEW[id](c)   tela própria da coleção
     window.ROTAS[path]      rota própria  (#/desafio)
     window.TRAVA(r)         trava extra (prêmios do desafio)
     window.TELA_TRAVA(r)    tela da receita travada por prêmio
     window.JOGO_HOME()      cartão do desafio na Início
     window.JOGO_XP(tipo,r)  XP por ações do app
   Tudo salvo no aparelho (localStorage), sem login.
   ================================================================ */
(function () {
var W = window;
var $,esc,store,track,toast,R,col,rec,thumb,temAcesso,colVisivel,bloqueada,cardHTML,addToList,startTimer,pnUrl,guiaOk,PROOK,route,view,origem;
W.APP_READY = (function (prev) { return function (A) { $=A.$;esc=A.esc;store=A.store;track=A.track;toast=A.toast;R=A.R;col=A.col;rec=A.rec;thumb=A.thumb;temAcesso=A.temAcesso;colVisivel=A.colVisivel;bloqueada=A.bloqueada;cardHTML=A.cardHTML;addToList=A.addToList;startTimer=A.startTimer;pnUrl=A.pnUrl;guiaOk=A.guiaOk;PROOK=A.PROOK;route=A.route;view=A.view;origem=A.origem; if (prev) prev(A); }; })(W.APP_READY);
W.COLVIEW = W.COLVIEW || {}; W.ROTAS = W.ROTAS || {};

/* ---------------- datas ---------------- */
function hoje(d) { d = d || new Date(); return d.getFullYear() + "-" + ("0" + (d.getMonth() + 1)).slice(-2) + "-" + ("0" + d.getDate()).slice(-2); }
function semanaDe(d) { d = new Date(d || new Date()); d.setHours(12, 0, 0, 0); var g = (d.getDay() + 6) % 7; d.setDate(d.getDate() - g); return hoje(d); }
function semanaAnterior(wk) { var d = new Date(wk + "T12:00:00"); d.setDate(d.getDate() - 7); return hoje(d); }

/* ---------------- estado ---------------- */
function J() { var j = store.get("jogo", null) || {}; j.xp = j.xp || 0; j.potes = j.potes || {}; j.plano = j.plano || {}; j.dom = j.dom || {}; j.selos = j.selos || []; j.log = j.log || {}; j.tema = j.tema || {}; return j; }
function salvar(j) { store.set("jogo", j); }
var NIVEIS = [[0, "Pote Iniciante"], [150, "Pote em Dia"], [400, "Cozinha Organizada"], [800, "Semana Resolvida"], [1400, "Mestre do Pote"], [2200, "Lenda do Pote"]];
function nivel(xp) { var i = 0; while (i + 1 < NIVEIS.length && xp >= NIVEIS[i + 1][0]) i++; return { n: i + 1, nome: NIVEIS[i][1], de: NIVEIS[i][0], ate: NIVEIS[i + 1] ? NIVEIS[i + 1][0] : null, prox: NIVEIS[i + 1] ? NIVEIS[i + 1][1] : null }; }

var SELOS = {
  primeiro: ["🫙", "Primeiro pote"], domingo: ["🗓️", "Domingo do Pote"], tres: ["🔥", "3 dias seguidos"], semana: ["✅", "Semana completa"],
  s2: ["🥈", "2 semanas"], s3: ["🥉", "3 semanas seguidas"], mestre: ["🏆", "Mestre do Pote"], molho: ["🥫", "5 molhos feitos"],
  vegana: ["🌱", "Semana Vegana"], proteica: ["💪", "Semana Proteica"], lowcarb: ["🥒", "Semana Low carb"], mundo: ["🌍", "Volta ao Mundo"],
  variedade: ["🌈", "20 saladas diferentes"], rd7: ["📲", "7 receitas do dia"]
};
var PREMIOS = [
  { id: "p1", sem: 1, ic: "👩‍🍳", t: "Saladas de Chef", s: "5 saladas exclusivas de restaurante" },
  { id: "p2", sem: 2, ic: "🥫", t: "Molhos secretos", s: "5 molhos que não estão em nenhuma coleção" },
  { id: "p3", sem: 3, ic: "🎁", t: "Saladas para receber + desconto", s: "5 saladas de festa e preço de recompensa na Vitrine" },
  { id: "p4", sem: 4, ic: "🏆", t: "Mestre do Pote", s: "Certificado com seu nome + 5 saladas do Mestre" }
];
function semanasCompletas(j) { var c = {}; Object.keys(j.potes).forEach(function (d) { var w = semanaDe(new Date(d + "T12:00:00")); c[w] = (c[w] || 0) + 1; }); return Object.keys(c).filter(function (w) { return c[w] >= 5; }).sort(); }
function sequencia(j) { var ok = semanasCompletas(j), w = semanaDe(), n = 0; if (ok.indexOf(w) < 0) w = semanaAnterior(w); while (ok.indexOf(w) >= 0) { n++; w = semanaAnterior(w); } return n; }
function premioOk(id) { if (temAcesso("*")) return true; var p = PREMIOS.find(function (x) { return x.id === id; }); return !!p && semanasCompletas(J()).length >= p.sem; }
W.TRAVA = function (r) { return !!r.premio && (!temAcesso("potes") || !premioOk(r.premio)); };

function ganhar(j, xp, motivo) { j.xp += xp; return '<div class="jg-xp">+' + xp + ' XP<small>' + esc(motivo) + '</small></div>'; }
function selo(j, id, out) { if (j.selos.indexOf(id) < 0) { j.selos.push(id); out.push(id); } }
function festa(titulo, corpo) {
  $("#sheetT").textContent = titulo; $("#sheetB").innerHTML = corpo; $("#sheetOk").textContent = "Continuar"; $("#sheet").classList.add("show");
}
W.JOGO_XP = function (tipo, r) {
  var j = J(), d = hoje();
  if (tipo === "feita" && r && !j.log["f:" + r.id]) { j.log["f:" + r.id] = d; j.xp += 20; if (r.sec && /Molho/.test(r.sec) && Object.keys(j.log).filter(function (k) { return k.indexOf("f:sm-") === 0 || k.indexOf("f:ms-") === 0; }).length >= 5 && j.selos.indexOf("molho") < 0) j.selos.push("molho"); salvar(j); }
  if (tipo === "rd" && !j.log["rd:" + d]) { j.log["rd:" + d] = 1; j.xp += 10; if (Object.keys(j.log).filter(function (k) { return k.indexOf("rd:") === 0; }).length >= 7 && j.selos.indexOf("rd7") < 0) j.selos.push("rd7"); salvar(j); }
};

/* ---------------- saladas disponíveis para o plano ---------------- */
function minhas() { return R.filter(function (r) { return r.col === "potes" && r.comp && !bloqueada(r); }); }
var TEMAS = {
  livre: ["🫙", "Semana livre", "Você escolhe as 5", null],
  vegana: ["🌱", "Semana Vegana", "5 potes sem nada de origem animal", function (r) { return r.vegana; }],
  proteica: ["💪", "Semana Proteica", "Proteína em destaque", function (r) { return /Proteína/.test(r.tags.join()) && !r.vegana; }],
  lowcarb: ["🥒", "Semana Low carb", "Sem grão nem massa", function (r) { return !r.comp.some(function (k) { return L.C[k] && L.C[k][1] === 2; }) && !/batata|mandioca|inhame|milho/.test(r.comp.join()); }],
  mundo: ["🌍", "Volta ao Mundo", "5 saladas de 5 países", function (r) { return /Saladas do mundo/.test(r.sec); }]
};
var L = W.POTES_LIB;
function sugestao(tema) {
  var f = TEMAS[tema] && TEMAS[tema][3], lst = minhas().filter(function (r) { return !f || f(r); }), j = J(), feitas = Object.values(j.plano).flat();
  lst.sort(function (a, b) { return (feitas.indexOf(a.id) >= 0) - (feitas.indexOf(b.id) >= 0) || Math.random() - .5; });
  var out = [], sec = {}; lst.forEach(function (r) { if (out.length < 5 && !sec[r.sec]) { out.push(r.id); sec[r.sec] = 1; } });
  lst.forEach(function (r) { if (out.length < 5 && out.indexOf(r.id) < 0) out.push(r.id); });
  return out;
}
function ordenar(ids) { return ids.slice().sort(function (a, b) { return (rec(a).dias || 5) - (rec(b).dias || 5); }); }

/* ---------------- tela do desafio ---------------- */
var DOM = ["Escolhi as 5 saladas e coloquei na lista de compras", "Liguei o que demora: grãos, ovos e proteína", "Lavei e sequei todas as folhas", "Cortei os legumes da semana", "Fiz os molhos e dividi nos potinhos", "Montei os 5 potes e etiquetei"];
var DIAS = ["SEG", "TER", "QUA", "QUI", "SEX"];

function topo(j) {
  var nv = nivel(j.xp), pct = nv.ate ? Math.round((j.xp - nv.de) / (nv.ate - nv.de) * 100) : 100, sq = sequencia(j);
  return '<section class="jg-lvl"><div class="jg-row"><small>SEU NÍVEL</small>' + (sq ? '<span class="jg-fire">🔥 ' + sq + (sq > 1 ? " semanas" : " semana") + '</span>' : "") + '</div>' +
    '<h3>Nível ' + nv.n + ' · ' + esc(nv.nome) + '</h3><div class="jg-bar"><i style="width:' + pct + '%"></i></div>' +
    '<div class="jg-row jg-s"><span>' + j.xp + (nv.ate ? " / " + nv.ate : "") + ' XP</span><span>' + (nv.prox ? "Próximo: " + esc(nv.prox) : "Nível máximo") + '</span></div></section>';
}
function potesHTML(j, wk) {
  var feitos = Object.keys(j.potes).filter(function (d) { return semanaDe(new Date(d + "T12:00:00")) === wk; }).sort();
  var hj = hoje();
  return '<div class="jg-jars">' + DIAS.map(function (d, i) { var f = feitos[i]; return '<div class="' + (f ? "f" : "") + (f === hj ? " h" : "") + '"><i></i>' + (f ? ["DOM", "SEG", "TER", "QUA", "QUI", "SEX", "SÁB"][new Date(f + "T12:00:00").getDay()] : (i + 1) + "º") + '</div>'; }).join("") + '</div>';
}
function desafio() {
  if (!colVisivel(col("potes"))) { location.replace("#/"); return ""; }
  if (!temAcesso("potes")) return '<a href="#/" class="btn" style="margin-top:6px">‹ Início</a><section class="jg-head"><small>DESAFIO DA SEMANA</small><h1>Semana do Pote</h1><p>Monte 5 saladas no domingo, coma 1 pote por dia e ganhe XP, selos e receitas exclusivas.</p></section>' + promo("desafio");
  var j = J(), wk = semanaDe(), plano = j.plano[wk], hj = hoje(), prem = temAcesso("potes_premium");
  var feitosSem = Object.keys(j.potes).filter(function (d) { return semanaDe(new Date(d + "T12:00:00")) === wk; });
  var comidos = feitosSem.map(function (d) { return j.potes[d]; });
  var h = '<div style="display:flex;justify-content:space-between;gap:8px;margin-top:6px"><a href="#/c/potes" class="btn">‹ Saladas no Pote</a><a href="#/desafio/ajuda" class="btn">❓ Como funciona</a></div>' + topo(j);
  if (!plano) {
    var tema = store.get("jg:tema", "livre"), sel = store.get("jg:sel", null) || sugestao(tema);
    store.set("jg:sel", sel);
    h += '<section class="jg-head"><small>DESAFIO DA SEMANA</small><h1>Monte sua semana</h1><p>Escolha 5 saladas. O app coloca na ordem certa de validade e junta tudo na lista de compras.</p></section>';
    if (prem) h += '<div class="sec"><h2>Tema da semana</h2><span>Premium</span></div><div class="jg-temas">' + Object.keys(TEMAS).map(function (k) { var t = TEMAS[k]; return '<button class="jg-tema' + (k === tema ? " on" : "") + '" data-tema="' + k + '"><b>' + t[0] + '</b>' + esc(t[1]) + '</button>'; }).join("") + '</div>';
    h += '<div class="sec"><h2>Suas 5 saladas</h2><span>' + sel.length + ' de 5</span></div><div class="list">' + sel.map(function (id) { var r = rec(id); return r ? '<div class="card jg-pick"><img class="thumb" src="' + thumb(r) + '" alt=""><div><h3>' + esc(r.nome) + '</h3><div class="meta"><span class="pill">Dura ' + r.dias + (r.dias > 1 ? " dias" : " dia") + '</span></div></div><button class="jg-x" data-tira="' + id + '" aria-label="Tirar">✕</button></div>' : ""; }).join("") + '</div>';
    h += '<button class="btn" id="jgSorteia" style="margin:10px 0;width:100%">🎲 Sugerir outras 5</button>';
    if (sel.length < 5) h += '<p class="note">Toque em <b>+</b> para escolher mais ' + (5 - sel.length) + '.</p>';
    h += '<button class="cta lime" id="jgFecha"' + (sel.length === 5 ? "" : " disabled") + '>Começar a semana com essas 5 →</button>';
    var f = TEMAS[tema] && TEMAS[tema][3];
    h += '<div class="sec" style="margin-top:22px"><h2>Trocar por outra</h2><span>' + (f ? esc(TEMAS[tema][1]) : "todas") + '</span></div><div class="list">' + minhas().filter(function (r) { return sel.indexOf(r.id) < 0 && (!f || f(r)); }).map(function (r) { return '<div class="card jg-pick"><img class="thumb" src="' + thumb(r) + '" alt=""><div><h3>' + esc(r.nome) + '</h3><div class="meta"><span class="pill">' + esc(r.sec.replace("Premium · ", "")) + '</span><span class="pill">' + r.dias + 'd</span></div></div><button class="jg-x add" data-poe="' + r.id + '" aria-label="Escolher">+</button></div>'; }).join("") + '</div>';
    return h;
  }
  var ordem = ordenar(plano), proxId = ordem.find(function (id) { return comidos.indexOf(id) < 0; }), prox = proxId && rec(proxId), jaHoje = !!j.potes[hj];
  var tem = j.tema[wk] && j.tema[wk] !== "livre" ? TEMAS[j.tema[wk]] : null;
  h += '<section class="jg-card"><div class="jg-row"><b class="jg-t">SUA SEMANA DE POTES' + (tem ? " · " + tem[0] + " " + esc(tem[1]).toUpperCase() : "") + '</b><span>' + feitosSem.length + ' de 5</span></div>' + potesHTML(j, wk);
  if (feitosSem.length >= 5) h += '<div class="jg-ok">🎉 Semana completa! Volte na segunda para montar a próxima.</div>';
  else if (jaHoje) h += '<div class="jg-ok">✓ Pote de hoje marcado: ' + esc(rec(j.potes[hj]).nome) + '. Amanhã tem mais.</div>';
  else if (prox) h += '<a class="jg-next" href="#/r/' + prox.id + '"><img src="' + thumb(prox) + '" alt=""><div><small>HOJE</small><b>' + esc(prox.nome) + '</b><span>Molho à parte · dura ' + prox.dias + (prox.dias > 1 ? " dias" : " dia") + '</span></div><em>+40 XP</em></a><button class="cta lime" id="jgComi" data-id="' + prox.id + '">Comi o pote de hoje ✓</button>';
  h += '</section>';
  var dom = j.dom[wk] || [];
  h += '<div class="sec"><h2>Domingo do Pote</h2><span>' + dom.length + ' de ' + DOM.length + ' · +10 XP cada</span></div><div class="box jg-dom">' + DOM.map(function (t, i) { return '<label class="chk"><input type="checkbox" data-dom="' + i + '"' + (dom.indexOf(i) >= 0 ? " checked" : "") + '><span>' + esc(t) + '</span></label>'; }).join("") + '<button class="btn" id="jgTimer" style="margin-top:8px">⏱ Timer de 40 minutos</button><a class="btn" href="#/g/sp-domingo" style="margin:8px 0 0 6px">Ver o passo a passo</a></div>';
  h += '<div class="sec"><h2>Ordem da semana</h2><span>quem dura menos primeiro</span></div><div class="list">' + ordem.map(function (id, i) { var r = rec(id), ok = comidos.indexOf(id) >= 0; return '<a class="card" href="#/r/' + id + '"><img class="thumb" src="' + thumb(r) + '" alt=""><div><h3>' + (ok ? "✓ " : (i + 1) + ". ") + esc(r.nome) + '</h3><div class="meta"><span class="pill">Dura ' + r.dias + 'd</span>' + (ok ? '<span class="pill">Feito</span>' : "") + '</div></div><span class="go">›</span></a>'; }).join("") + '</div>';
  h += '<div style="display:flex;gap:8px;margin:12px 0"><button class="btn" id="jgLista" style="flex:1">🛒 Lista de compras</button>' + (feitosSem.length ? "" : '<button class="btn" id="jgTroca" style="flex:1">↺ Trocar saladas</button>') + '</div>';
  h += recompensas(j) + selosHTML(j);
  return h;
}
function recompensas(j) {
  var n = semanasCompletas(j).length;
  return '<div class="sec"><h2>Recompensas</h2><span>' + n + (n === 1 ? " semana completa" : " semanas completas") + '</span></div><div class="jg-prem">' + PREMIOS.map(function (p) {
    var ok = n >= p.sem || temAcesso("*"), falta = p.sem - n;
    return '<a class="jg-p' + (ok ? " ok" : "") + '" href="' + (ok ? (p.id === "p4" ? "#/desafio/certificado" : p.id === "p3" ? "#/desafio/premio3" : "#/c/potes") : "#/desafio") + '"' + (ok && /p1|p2/.test(p.id) ? ' data-ir="' + p.id + '"' : "") + '><i>' + (ok ? p.ic : "🔒") + '</i><div><small>' + p.sem + 'ª SEMANA COMPLETA</small><b>' + esc(p.t) + '</b><span>' + (ok ? "Liberado! Toque para abrir" : esc(p.s) + " · falta" + (falta > 1 ? "m " + falta + " semanas" : " 1 semana")) + '</span></div></a>';
  }).join("") + '</div>';
}
function selosHTML(j) {
  var ks = Object.keys(SELOS).filter(function (k) { return temAcesso("potes_premium") || ["vegana", "proteica", "lowcarb", "mundo"].indexOf(k) < 0; });
  return '<div class="sec"><h2>Meus selos</h2><span>' + j.selos.length + ' de ' + ks.length + '</span></div><div class="jg-selos">' + ks.map(function (k) { var on = j.selos.indexOf(k) >= 0; return '<div class="' + (on ? "" : "off") + '"><i>' + SELOS[k][0] + '</i>' + esc(SELOS[k][1]) + '</div>'; }).join("") + '</div>';
}

/* ---------------- recompensa da 3ª semana: desconto na Vitrine ---------------- */
function premio3() {
  if (!premioOk("p3")) { location.replace("#/desafio"); return ""; }
  var D = W.RECOMPENSAS || [], h = '<a href="#/desafio" class="btn" style="margin-top:6px">‹ Desafio</a><section class="jg-head"><small>RECOMPENSA · 3ª SEMANA</small><h1>Preço de recompensa</h1><p>Você completou 3 semanas. Liberamos o preço de recompensa nas outras coleções: Essencial por R$ 9,90 e Premium por R$ 19,90.</p></section>';
  var lst = D.filter(function (x) { var c = col(x.id); return c && colVisivel(c) && !temAcesso(x.id); });
  if (!lst.length) h += '<p class="note">Você já tem todas as coleções. 🎉 Este prêmio vale para os próximos lançamentos.</p>';
  h += lst.map(function (x) { return '<section class="box planos"><h2>' + esc(x.nome) + '</h2><div class="plano"><small>ESSENCIAL</small><s>R$ 19,90</s> <b class="pp">R$ 9,90</b>' + (x.essencial ? '<a class="cta" href="' + esc(pnUrl(x.essencial, "recompensa_potes", x.id)) + '" target="_blank" rel="noopener">Quero o Essencial por R$ 9,90</a>' : '<p class="note">Em breve.</p>') + '</div><div class="plano top"><small>PREMIUM</small><s>R$ 29,90</s> <b class="pp">R$ 19,90</b>' + (x.premium ? '<a class="cta lime" href="' + esc(pnUrl(x.premium, "recompensa_potes", x.id)) + '" target="_blank" rel="noopener">Quero a Premium por R$ 19,90</a>' : '<p class="note">Em breve.</p>') + '</div></section>'; }).join("");
  h += '<div class="sec"><h2>Saladas para receber</h2><span>liberadas</span></div><div class="list">' + R.filter(function (r) { return r.premio === "p3"; }).map(cardHTML).join("") + '</div>';
  return h;
}

/* ---------------- certificado (4ª semana) ---------------- */
function certificado() {
  if (!premioOk("p4")) { location.replace("#/desafio"); return ""; }
  var nome = store.get("jg:nome", "");
  return '<a href="#/desafio" class="btn" style="margin-top:6px">‹ Desafio</a><section class="jg-head"><small>RECOMPENSA · 4ª SEMANA</small><h1>Mestre do Pote</h1><p>Um mês inteiro de potes. Coloque seu nome e salve o certificado para postar e marcar @cozinhaqueresolve.br.</p></section>' +
    '<label class="search" style="margin:12px 0"><span>✍️</span><input id="jgNome" value="' + esc(nome) + '" placeholder="Seu nome" maxlength="40"></label><canvas id="jgCert" width="1080" height="1350" style="width:100%;border-radius:18px;box-shadow:0 10px 30px rgba(0,0,0,.15)"></canvas>' +
    '<button class="cta lime" id="jgSalvaCert" style="margin-top:12px">⬇️ Salvar imagem</button>' +
    '<div class="sec"><h2>Saladas do Mestre</h2><span>liberadas</span></div><div class="list">' + R.filter(function (r) { return r.premio === "p4"; }).map(cardHTML).join("") + '</div>';
}
function desenhaCert() {
  var cv = $("#jgCert"); if (!cv) return; var x = cv.getContext("2d"), nome = ($("#jgNome").value || "Seu nome").trim(), j = J();
  var g = x.createLinearGradient(0, 0, 0, 1350); g.addColorStop(0, "#1D5A2C"); g.addColorStop(1, "#0F3A1B"); x.fillStyle = g; x.fillRect(0, 0, 1080, 1350);
  x.strokeStyle = "#C8F53C"; x.lineWidth = 6; x.strokeRect(50, 50, 980, 1250);
  x.textAlign = "center"; x.fillStyle = "#C8F53C"; x.font = "700 36px Arial"; x.fillText("COZINHA QUE RESOLVE", 540, 170);
  x.font = "200px Arial"; x.fillText("🏆", 540, 420);
  x.fillStyle = "#fff"; x.font = "800 64px Arial"; x.fillText("CERTIFICADO", 540, 540);
  x.font = "400 34px Arial"; x.fillStyle = "#CFE9CF"; x.fillText("Mestre do Pote é", 540, 610);
  x.fillStyle = "#fff"; x.font = "800 " + (nome.length > 22 ? 58 : 76) + "px Arial"; x.fillText(nome, 540, 730);
  x.fillStyle = "#CFE9CF"; x.font = "400 34px Arial"; x.fillText("que completou 4 semanas do Desafio", 540, 830); x.fillText("Semana do Pote: 20 saladas montadas", 540, 878); x.fillText("e comidas, uma por dia.", 540, 926);
  x.fillStyle = "#C8F53C"; x.font = "800 44px Arial"; x.fillText(j.xp + " XP · " + j.selos.length + " selos", 540, 1050);
  x.fillStyle = "#CFE9CF"; x.font = "400 30px Arial"; x.fillText(new Date().toLocaleDateString("pt-BR"), 540, 1150); x.fillText("@cozinhaqueresolve.br", 540, 1220);
}

/* ---------------- ações ---------------- */
function bindDesafio(sub) {
  if (sub === "ajuda") return;
  if (!sub) boasVindas();
  if (sub === "certificado") { desenhaCert(); var n = $("#jgNome"); if (n) n.oninput = function () { store.set("jg:nome", n.value); desenhaCert(); }; var b = $("#jgSalvaCert"); if (b) b.onclick = function () { var a = document.createElement("a"); a.download = "mestre-do-pote.png"; a.href = $("#jgCert").toDataURL("image/png"); a.click(); track("CertificadoSalvo", {}, true); }; return; }
  var j = J(), wk = semanaDe();
  view.querySelectorAll("[data-tema]").forEach(function (b) { b.onclick = function () { store.set("jg:tema", b.dataset.tema); store.set("jg:sel", sugestao(b.dataset.tema)); route(true); }; });
  view.querySelectorAll("[data-tira]").forEach(function (b) { b.onclick = function () { store.set("jg:sel", store.get("jg:sel", []).filter(function (x) { return x !== b.dataset.tira; })); route(true); }; });
  view.querySelectorAll("[data-poe]").forEach(function (b) { b.onclick = function () { var s = store.get("jg:sel", []); if (s.length >= 5) { toast("Já são 5. Tire uma para trocar."); return; } s.push(b.dataset.poe); store.set("jg:sel", s); route(); }; });
  var so = $("#jgSorteia"); if (so) so.onclick = function () { store.set("jg:sel", sugestao(store.get("jg:tema", "livre"))); route(true); };
  var fe = $("#jgFecha"); if (fe) fe.onclick = function () { var s = store.get("jg:sel", []); if (s.length !== 5) return; j.plano[wk] = s; j.tema[wk] = temAcesso("potes_premium") ? store.get("jg:tema", "livre") : "livre"; store.set("jg:sel", null); var n = addToList(s.map(rec)); salvar(j); track("DesafioMontou", { tema: j.tema[wk] }, true); toast(n + " itens na lista de compras"); route(); };
  var tr = $("#jgTroca"); if (tr) tr.onclick = function () { store.set("jg:sel", j.plano[wk]); delete j.plano[wk]; salvar(j); route(); };
  var li = $("#jgLista"); if (li) li.onclick = function () { var n = addToList(j.plano[wk].map(rec)); toast(n ? n + " itens na lista" : "Já está tudo na lista"); };
  var tm = $("#jgTimer"); if (tm) tm.onclick = function () { startTimer(40, "Domingo do Pote"); };
  view.querySelectorAll("[data-dom]").forEach(function (x) { x.onchange = function () { var jj = J(), d = jj.dom[wk] || [], i = +x.dataset.dom; if (x.checked && d.indexOf(i) < 0) { d.push(i); if (!jj.log["dom:" + wk + ":" + i]) { jj.log["dom:" + wk + ":" + i] = 1; jj.xp += 10; toast("+10 XP"); } } else if (!x.checked) d = d.filter(function (v) { return v !== i; }); jj.dom[wk] = d;
    var novos = []; if (d.length === DOM.length && !jj.log["domok:" + wk]) { jj.log["domok:" + wk] = 1; jj.xp += 50; selo(jj, "domingo", novos); salvar(jj); festa("Domingo do Pote feito! 🫙", '<div class="jg-cel">🎉</div>' + '<div class="jg-xp">+50 XP<small>preparo da semana completo</small></div>' + novosHTML(novos)); route(true); return; } salvar(jj); route(true); }; });
  var co = $("#jgComi"); if (co) co.onclick = function () {
    var jj = J(), d = hoje(); if (jj.potes[d]) { toast("O pote de hoje já foi marcado"); return; }
    jj.potes[d] = co.dataset.id; var corpo = ganhar(jj, 40, "pote do dia"), novos = [];
    selo(jj, "primeiro", novos);
    var dias = Object.keys(jj.potes).sort(), seq = 1; for (var i = dias.length - 1; i > 0; i--) { var a = new Date(dias[i] + "T12:00:00"), b = new Date(dias[i - 1] + "T12:00:00"); if ((a - b) / 864e5 === 1) seq++; else break; }
    if (seq >= 3) selo(jj, "tres", novos);
    var varias = {}; Object.values(jj.potes).forEach(function (x) { varias[x] = 1; }); if (Object.keys(varias).length >= 20) selo(jj, "variedade", novos);
    var cont = Object.keys(jj.potes).filter(function (x) { return semanaDe(new Date(x + "T12:00:00")) === wk; }).length, titulo = "Mandou bem! 🥗", desbl = "";
    if (cont === 5) {
      titulo = "Semana completa! 🎉"; corpo += ganhar(jj, 200, "5 potes de 5"); selo(jj, "semana", novos);
      var tema = jj.tema[wk]; if (tema && tema !== "livre") selo(jj, tema, novos);
      var tot = semanasCompletas(jj).length, sq = sequencia(jj);
      if (tot >= 2) selo(jj, "s2", novos); if (sq >= 3) selo(jj, "s3", novos); if (tot >= 4) selo(jj, "mestre", novos);
      var p = PREMIOS.find(function (x) { return x.sem === tot; }); if (p) desbl = '<a class="jg-p ok" href="' + (p.id === "p4" ? "#/desafio/certificado" : p.id === "p3" ? "#/desafio/premio3" : "#/c/potes") + '" onclick="document.getElementById(\'sheet\').classList.remove(\'show\')"><i>' + p.ic + '</i><div><small>RECOMPENSA DESBLOQUEADA</small><b>' + esc(p.t) + '</b><span>' + esc(p.s) + '</span></div></a>';
      track("DesafioSemanaCompleta", { semanas: tot, tema: tema || "livre" }, true);
    }
    salvar(jj); track("DesafioPote", { n: cont }, true);
    festa(titulo, '<div class="jg-cel">' + (cont === 5 ? "🏆" : "🥗") + '</div><p style="text-align:center;margin:0 0 10px">' + cont + ' de 5 potes desta semana</p>' + corpo + desbl + novosHTML(novos));
    route(true);
  };
}
function novosHTML(n) { return n.length ? '<div class="sec"><h2>Selo novo</h2></div><div class="jg-selos">' + n.map(function (k) { return '<div class="new"><i>' + SELOS[k][0] + '</i>' + esc(SELOS[k][1]) + '</div>'; }).join("") + '</div>' : ""; }


/* ---------------- como funciona (ajuda) ---------------- */
var AJUDA = [
  ["🫙", "O que é o Desafio da Semana", "Um jogo para você manter a rotina de saladas no pote. Você monta 5 potes, come 1 por dia e ganha XP, selos e receitas que só abrem jogando. Tudo fica salvo no seu celular, sem login."],
  ["1️⃣", "Monte sua semana", "Toque em Desafio da Semana e escolha 5 saladas (ou use “Sugerir outras 5”). Toque em “Começar a semana”: o app coloca as saladas na ordem certa de validade e joga todos os ingredientes na Lista de compras."],
  ["2️⃣", "Domingo do Pote", "No dia do preparo, siga o checklist de 6 etapas (+10 XP cada) e use o timer de 40 minutos. Completou tudo? +50 XP e o selo Domingo do Pote. O passo a passo completo está no guia “Domingo do Pote”."],
  ["3️⃣", "Marque 1 pote por dia", "Comeu o pote do dia? Toque em “Comi o pote de hoje ✓” e ganhe +40 XP. Dá para marcar só 1 por dia, em qualquer dia da semana (segunda a domingo). O app sempre mostra primeiro a salada que dura menos."],
  ["🏆", "Semana completa", "Marcou 5 potes na mesma semana? A semana está completa: +200 XP e o selo Semana completa. Na segunda-feira começa uma semana nova e você monta outros 5 potes."],
  ["🎁", "Recompensas", "1ª semana completa: 5 Saladas de Chef.\n2ª semana: 5 Molhos secretos.\n3ª semana: 5 Saladas para receber e preço de recompensa nas outras coleções da Vitrine (Essencial R$ 9,90 e Premium R$ 19,90).\n4ª semana: certificado Mestre do Pote com o seu nome e 5 saladas do Mestre.\nAs semanas não precisam ser seguidas: conta o total."],
  ["⭐", "XP e níveis", "Pote do dia: +40. Semana completa: +200. Cada etapa do Domingo do Pote: +10 (+50 ao completar). Marcar “Fiz essa receita!” em qualquer receita: +20.\nNíveis: Pote Iniciante, Pote em Dia, Cozinha Organizada, Semana Resolvida, Mestre do Pote e Lenda do Pote."],
  ["🔥", "Sequência e selos", "A chama mostra quantas semanas completas seguidas você tem. Os selos aparecem em “Meus selos”: os apagados ainda faltam conquistar."],
  ["🌱", "Temas da semana (Premium)", "Na versão Premium você pode escolher um tema antes de montar a semana: Vegana, Proteica, Low carb ou Volta ao Mundo. Completar a semana do tema dá um selo próprio."],
  ["↺", "Posso trocar as saladas?", "Sim, enquanto não marcar nenhum pote da semana. Depois do primeiro pote, as 5 ficam fixas até a semana acabar."],
  ["📱", "Troquei de celular ou limpei o navegador", "O progresso fica salvo neste celular e neste navegador. Se trocar de aparelho ou limpar os dados do navegador, o jogo recomeça do zero (as suas coleções continuam: é só liberar de novo pelo link do e-mail de compra)."],
  ["💬", "Ainda tem dúvida?", "Fale com a gente pelo Suporte do app ou pelo e-mail contato.cozinhaqueresolve@gmail.com."]
];
function ajuda() {
  return '<a href="#/desafio" class="btn" style="margin-top:6px">‹ Desafio</a><section class="jg-head"><small>AJUDA</small><h1>Como funciona o Desafio</h1><p>Monte 5 potes, coma 1 por dia e desbloqueie prêmios dentro do app.</p></section>' +
    AJUDA.map(function (a) { return '<div class="box"><h2>' + a[0] + ' ' + esc(a[1]) + '</h2>' + a[2].split("\n").map(function (l) { return '<p>' + esc(l) + '</p>'; }).join("") + '</div>'; }).join("") +
    '<a class="cta lime" href="#/desafio" style="margin-top:10px">Ir para o desafio →</a>';
}
function boasVindas() {
  if (store.get("jg:viuAjuda", 0) || !temAcesso("potes")) return;
  store.set("jg:viuAjuda", 1);
  festa("Boas-vindas ao Desafio! 🫙", '<div class="jg-cel">🏆</div><ol style="margin:0 0 12px;padding-left:20px;line-height:1.5"><li><b>Escolha 5 saladas</b> e o app monta a lista de compras.</li><li><b>Prepare tudo no domingo</b> com o checklist.</li><li><b>Marque 1 pote por dia</b> e ganhe XP.</li><li><b>5 potes na semana</b> = semana completa e prêmio desbloqueado.</li></ol><a class="btn" href="#/desafio/ajuda" onclick="document.getElementById(\'sheet\').classList.remove(\'show\')" style="display:block;text-align:center">❓ Ver como funciona em detalhes</a>');
}
W.ROTAS["/desafio"] = { nav: "completo", html: function (sub) { return sub === "ajuda" ? ajuda() : sub === "certificado" ? certificado() : sub === "premio3" ? premio3() : desafio(); }, bind: bindDesafio };

/* ---------------- cartão na Início ---------------- */
W.JOGO_HOME = function () {
  var c = col("potes"); if (!c || !colVisivel(c) || !temAcesso("potes")) return "";
  var j = J(), wk = semanaDe(), plano = j.plano[wk], n = Object.keys(j.potes).filter(function (d) { return semanaDe(new Date(d + "T12:00:00")) === wk; }).length, nv = nivel(j.xp), jaHoje = !!j.potes[hoje()];
  var txt = !plano ? "Monte sua semana: escolha 5 saladas" : n >= 5 ? "Semana completa! 🎉" : jaHoje ? "Pote de hoje feito ✓ · " + n + " de 5" : "Falta marcar o pote de hoje · " + n + " de 5";
  return '<a class="jg-home" href="#/desafio"><div><small>DESAFIO DA SEMANA · NÍVEL ' + nv.n + '</small><b>' + esc(txt) + '</b></div>' + potesHTML(j, wk) + '</a>';
};

/* ---------------- tela da receita-prêmio travada ---------------- */
W.TELA_TRAVA = function (r) {
  if (!r.premio) return "";
  var p = PREMIOS.find(function (x) { return x.id === r.premio; });
  return '<a href="#/c/potes" class="btn" style="margin-top:6px">‹ Saladas no Pote</a><section class="rhero ph"><img src="' + r.foto + '" alt=""><span class="free pill lockp">🔒 PRÊMIO DO DESAFIO</span><h1>' + esc(r.nome) + '</h1></section><p class="intro">' + esc(r.intro) + '</p>' +
    '<div class="box lockbox"><h2>🔒 Recompensa da ' + p.sem + 'ª semana completa</h2><p>' + (temAcesso("potes") ? "Complete " + p.sem + (p.sem > 1 ? " semanas" : " semana") + " do Desafio da Semana do Pote para abrir esta receita e o pacote <b>" + esc(p.t) + "</b>." : "Esta receita é um prêmio para quem tem a coleção <b>Saladas no Pote que Resolvem</b> e completa o Desafio da Semana.") + '</p></div>' +
    (temAcesso("potes") ? '<a class="cta lime" href="#/desafio">Ir para o desafio →</a>' : promo("premio_" + r.id));
};

/* ---------------- vendas dentro do app ---------------- */
function potesUrl(lugar) { return "/saladasnopote/?utm_source=app&utm_medium=app_" + encodeURIComponent(origem || "direto") + "&utm_campaign=potes&utm_content=" + lugar; }
function promo(lugar) {
  var c = col("potes"); if (!colVisivel(c)) return "";
  if (temAcesso("potes")) return '<a class="ceia-own" href="#/c/potes"><span>🫙</span><div><b>Saladas no Pote que Resolvem' + (temAcesso("potes_premium") ? " Premium" : "") + '</b><small>Abrir minha coleção</small></div><span class="go">›</span></a>';
  var P = W.POTES, btn = function (url, txt, plano) { return '<a class="cta ' + (plano === "premium" ? "lime" : "") + '" href="' + esc(url ? pnUrl(url, lugar, "potes") : potesUrl(lugar)) + '" ' + (url ? 'target="_blank" rel="noopener"' : "") + ' onclick="__buy(\'potes_' + plano + '\',\'' + lugar + '\')">' + txt + '</a>'; };
  return '<section class="box planos"><h2>Escolha sua coleção</h2><div class="plano"><small>PARA COMEÇAR</small><h3>Essencial</h3><p>50 saladas + 5 bônus + Desafio da Semana.</p><b class="pp">' + esc(P.preco) + '</b>' + btn(P.checkout.essencial, "Quero o Essencial", "essencial") + '</div>' +
    '<div class="plano top"><span class="flag">+ R$ 10</span><small>VERSÃO COMPLETA</small><h3>Premium</h3><p>150 saladas + 15 bônus + desafios extras + Central PRO.</p><b class="pp">' + esc(P.precoPremium) + '</b>' + btn(P.checkout.premium, "Quero a Premium", "premium") + '</div><a class="already" href="#/completo">Já comprei · liberar meu acesso →</a></section>';
}
function upgrade(lugar) {
  if (temAcesso("potes_premium") || !temAcesso("potes")) return ""; var P = W.POTES;
  return '<section class="box upg"><small>SÓ PARA QUEM JÁ TEM O ESSENCIAL</small><h2>Desbloqueie a coleção completa por + ' + esc(P.precoUpgrade) + '</h2><ul class="gl"><li>100 saladas extras: proteicas, low carb, do mundo, de restaurante, com frutas, vegetarianas, econômicas e bowls</li><li>10 bônus: café da manhã e sobremesas no pote, pastas, conservas, lanches, cardápio de 4 semanas, kit para vender, etiquetas e mais</li><li>4 desafios extras com selos próprios</li><li>Central PRO: custos, ajuste de receitas, agenda e lotes</li></ul>' +
    '<a class="cta lime" href="' + esc(P.checkout.upgrade ? pnUrl(P.checkout.upgrade, lugar, "potes") : potesUrl(lugar)) + '" ' + (P.checkout.upgrade ? 'target="_blank" rel="noopener"' : "") + ' onclick="__buy(\'potes_upgrade\',\'' + lugar + '\')">Quero a versão completa →</a></section>';
}
W.POTES_PROMO = promo; W.POTES_UPGRADE = upgrade;

W.COLVIEW.potes = function (c) {
  var rs = R.filter(function (r) { return r.col === "potes"; }), own = temAcesso("potes"), prem = temAcesso("potes_premium");
  track("ViewContent", { content_name: c.nome, content_category: "colecao" });
  var secs = W.SECOES.potes, ess = secs.filter(function (s) { return !/^(Premium|Bônus|Prêmio)/.test(s); }), bE = secs.filter(function (s) { return /^Bônus · /.test(s); }), pre = secs.filter(function (s) { return /^Premium · /.test(s); }), bP = secs.filter(function (s) { return /^Bônus Premium · /.test(s); }), pr = secs.filter(function (s) { return /^Prêmio · /.test(s); });
  var bloco = function (list) { return list.map(function (s) { var l = rs.filter(function (r) { return r.sec === s; }); return l.length ? '<div class="sec"><h2>' + esc(s.replace(/^(Bônus Premium|Premium|Bônus|Prêmio) · /, "")) + '</h2><span>' + l.length + '</span></div><div class="list">' + l.map(cardHTML).join("") + '</div>' : ""; }).join(""); };
  var gl = function (list) { return '<div class="list">' + list.map(function (g) { return '<a class="card" href="#/g/' + g.id + '"><div class="thumb em">' + g.emoji + '</div><div><h3>' + esc(g.nome) + '</h3><div class="meta">' + (guiaOk(g) ? "" : '<span class="pill lock">🔒</span>') + '<span class="pill">' + esc(g.sub) + '</span></div></div><span class="go">›</span></a>'; }).join("") + '</div>'; };
  var gE = W.GUIAS.filter(function (g) { return g.produto === "potes"; }), gP = W.GUIAS.filter(function (g) { return g.produto === "potes_premium"; });
  var n = semanasCompletas(J()).length;
  return '<a href="#/" class="btn" style="margin-top:6px">‹ Início</a>' +
    '<section class="colhero" style="--cc:' + c.cor + '"><img src="' + c.capa + '" alt=""><div><small>' + (prem ? "✓ SUA COLEÇÃO · PREMIUM" : own ? "✓ SUA COLEÇÃO · ESSENCIAL" : "COLEÇÃO") + '</small><h1>' + c.emoji + ' ' + esc(c.nome) + '</h1><p>' + (prem ? "150 saladas, 15 bônus, desafios extras e a Central PRO." : esc(c.desc)) + '</p></div></section>' +
    (own ? (W.JOGO_HOME() || "") : promo("colecao_topo")) + upgrade("colecao_topo") +
    '<a class="menu" href="#/desafio" style="margin:16px 0 8px"><span class="em">🏆</span><div><h3>Desafio da Semana do Pote</h3><p>Monte 5 potes no domingo, marque 1 por dia e ganhe XP, selos e receitas exclusivas.</p></div><span class="go">›</span></a><a class="already" href="#/desafio/ajuda" style="display:block;margin:0 0 16px">❓ Como funciona o desafio</a>' +
    '<a class="menu" href="#/pro" style="margin:0 0 16px"><span class="em">🧰</span><div><h3>Central PRO ' + (PROOK() ? "" : "🔒") + '</h3><p>Custos e preço, ajuste de receitas, agenda de pedidos e controle de lotes.</p></div><span class="go">›</span></a>' +
    '<div class="tier"><b>Essencial</b><span>50 saladas + 5 bônus</span></div>' + bloco(ess) +
    '<div class="sec"><h2>Bônus do Essencial</h2><span>5</span></div>' + bloco(bE) + gl(gE) +
    '<div class="tier pre"><b>Premium</b><span>+100 saladas + 10 bônus ' + (prem ? "" : "· 🔒") + '</span></div>' + (prem ? "" : upgrade("colecao_premium") || (!own ? '<p class="note">As receitas abaixo fazem parte da versão Premium.</p>' : "")) +
    bloco(pre) + '<div class="sec"><h2>Bônus do Premium</h2><span>10</span></div>' + bloco(bP) + gl(gP) +
    '<div class="tier pre" style="background:#1D5A2C"><b>🏆 Prêmios do Desafio</b><span>' + n + ' de 4 semanas</span></div><p class="note">Abrem conforme você completa semanas no Desafio da Semana do Pote.</p>' + bloco(pr) +
    '<p class="foot">' + esc(c.foot) + '</p>';
};

/* ---------------- estilos ---------------- */
var css = ".jg-lvl{background:linear-gradient(135deg,#1D5A2C,#2E7A3C);color:#fff;border-radius:20px;padding:16px;margin:12px 0}.jg-lvl small{font-weight:800;letter-spacing:.1em;font-size:11px;color:#C8F53C}.jg-lvl h3{font:400 26px/1 var(--display,inherit);margin:6px 0 10px;color:#fff}" +
  ".jg-row{display:flex;justify-content:space-between;align-items:center;gap:8px}.jg-s{font-size:12px;margin-top:6px;color:#DDF5E6}.jg-fire{background:#FFF0E5;color:#E5642A;font-weight:800;font-size:12px;padding:4px 9px;border-radius:99px}" +
  ".jg-bar{height:10px;background:rgba(255,255,255,.22);border-radius:99px;overflow:hidden}.jg-bar i{display:block;height:100%;background:#C8F53C;border-radius:99px}" +
  ".jg-head{background:linear-gradient(160deg,#2E7A3C,#0F3A1B);color:#fff;border-radius:20px;padding:18px;margin:12px 0}.jg-head small{color:#C8F53C;font-weight:800;letter-spacing:.1em;font-size:11px}.jg-head h1{margin:6px 0 6px;color:#fff;font-size:28px}.jg-head p{margin:0;color:#DDEFD9;font-size:14px}" +
  ".jg-card{background:var(--card,#fff);border:1px solid var(--line,#E7DDCB);border-radius:20px;padding:14px;margin:12px 0}.jg-t{font-size:13px;letter-spacing:.04em}" +
  ".jg-jars{display:flex;gap:7px;margin:12px 0 6px}.jg-jars div{flex:1;text-align:center;font-size:10.5px;font-weight:800;color:var(--muted,#66705F)}.jg-jars i{display:block;height:50px;border-radius:10px 10px 14px 14px;border:2px solid #CFC3AE;margin-bottom:4px;background:rgba(0,0,0,.03)}" +
  ".jg-jars .f i{border-color:#1D5A2C;background:linear-gradient(180deg,transparent 0 14%,#9ACD5A 14% 40%,#E8553D 40% 58%,#F2C14E 58% 76%,#3E7B3A 76%)}.jg-jars .h i{outline:3px solid #C8F53C}" +
  ".jg-next{display:flex;gap:12px;align-items:center;text-decoration:none;color:inherit;margin:10px 0}.jg-next img{width:56px;height:56px;border-radius:14px;object-fit:cover}.jg-next small{font-size:11px;font-weight:800;color:#2E7A3C}.jg-next b{display:block}.jg-next span{font-size:12px;color:var(--muted,#66705F)}.jg-next em{margin-left:auto;font-style:normal;background:#C8F53C;color:#14200a;font-weight:800;font-size:12px;padding:5px 8px;border-radius:9px;white-space:nowrap}" +
  ".jg-ok{background:#F2FBEA;color:#1D5A2C;border-radius:12px;padding:10px 12px;font-weight:700;font-size:14px;margin-top:8px}" +
  ".jg-temas{display:grid;grid-template-columns:repeat(auto-fill,minmax(96px,1fr));gap:8px}.jg-tema{border:1px solid var(--line,#E7DDCB);background:var(--card,#fff);border-radius:14px;padding:10px 6px;font-size:12px;font-weight:700;color:inherit}.jg-tema b{display:block;font-size:22px}.jg-tema.on{border:2px solid #1D5A2C;background:#F2FBEA;color:#1D5A2C}" +
  ".jg-pick{align-items:center}.jg-x{margin-left:auto;width:34px;height:34px;border-radius:50%;border:0;background:#F3EBDC;font-weight:900;font-size:16px;flex:none}.jg-x.add{background:#C8F53C;color:#14200a}" +
  ".jg-prem{display:grid;gap:8px}.jg-p{display:flex;gap:12px;align-items:center;background:var(--card,#fff);border:1px dashed #CFC3AE;border-radius:16px;padding:12px;text-decoration:none;color:inherit}.jg-p i{font-style:normal;font-size:30px}.jg-p small{font-size:10.5px;font-weight:800;letter-spacing:.06em;color:var(--muted,#66705F)}.jg-p b{display:block}.jg-p span{font-size:12.5px;color:var(--muted,#66705F)}.jg-p.ok{border:2px solid #C8F53C;background:#F8FFE9}.jg-p.ok small{color:#2E7A3C}" +
  ".jg-selos{display:grid;grid-template-columns:repeat(3,1fr);gap:8px}.jg-selos div{background:var(--card,#fff);border:1px solid var(--line,#E7DDCB);border-radius:14px;padding:10px 4px;text-align:center;font-size:11px;font-weight:700;line-height:1.2}.jg-selos i{display:block;font-style:normal;font-size:26px;margin-bottom:4px}.jg-selos .off{opacity:.38;filter:grayscale(1)}.jg-selos .new{border:2px solid #C8F53C}" +
  ".jg-xp{background:#C8F53C;color:#14200a;border-radius:14px;padding:10px;text-align:center;font-weight:900;font-size:24px;margin:8px 0}.jg-xp small{display:block;font-size:12px;font-weight:700}.jg-cel{text-align:center;font-size:64px;line-height:1.1}" +
  ".jg-home{display:block;background:linear-gradient(135deg,#1D5A2C,#2E7A3C);color:#fff;border-radius:18px;padding:14px;margin:12px 0;text-decoration:none}.jg-home small{color:#C8F53C;font-weight:800;font-size:11px;letter-spacing:.08em}.jg-home b{display:block;font-size:16px;margin-top:2px}.jg-home .jg-jars div{color:#DDF5E6}.jg-home .jg-jars i{border-color:rgba(255,255,255,.4)}" +
  ".jg-dom .chk{padding:6px 0}";
var st = document.createElement("style"); st.textContent = css; document.head.appendChild(st);
})();
