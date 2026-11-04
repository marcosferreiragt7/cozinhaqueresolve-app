/* ================================================================
   JOGO DO APP — motor único dos desafios (XP, nível, selos, prêmios)
   Cada coleção registra o seu desafio com JOGO.registrar({...}).
   Estado salvo no aparelho em localStorage "cqr:jogo" (sem login).
   Ganchos usados pelo index.html: TRAVA, TELA_TRAVA, JOGO_HOME,
   JOGO_XP, ROTAS["/desafios"], APP_READY.
   Carregar ANTES de potes-app.js, bolos-jogo.js e panetones-jogo.js.
   JOGO_PUBLICO=false: a Central de Desafios só aparece para o acesso
   mestre (revisão). true: aparece para todo mundo.
   ================================================================ */
(function () {
var W = window;
W.JOGO_PUBLICO = true;
var $, esc, store, track, toast, R, col, temAcesso, colVisivel, route, view;
W.APP_READY = (function (prev) { return function (A) { $ = A.$; esc = A.esc; store = A.store; track = A.track; toast = A.toast; R = A.R; col = A.col; temAcesso = A.temAcesso; colVisivel = A.colVisivel; route = A.route; view = A.view; if (prev) prev(A); navDesafios(); }; })(W.APP_READY);
W.ROTAS = W.ROTAS || {};

function hoje(d) { d = d || new Date(); return d.getFullYear() + "-" + ("0" + (d.getMonth() + 1)).slice(-2) + "-" + ("0" + d.getDate()).slice(-2); }
function semanaDe(d) { d = new Date(d || new Date()); d.setHours(12, 0, 0, 0); var g = (d.getDay() + 6) % 7; d.setDate(d.getDate() - g); return hoje(d); }
function semanaAnterior(wk) { var d = new Date(wk + "T12:00:00"); d.setDate(d.getDate() - 7); return hoje(d); }
function J() { var j = store.get("jogo", null) || {}; j.xp = j.xp || 0; j.potes = j.potes || {}; j.plano = j.plano || {}; j.dom = j.dom || {}; j.selos = j.selos || []; j.log = j.log || {}; j.tema = j.tema || {}; j.bolos = j.bolos || {}; j.pan = j.pan || { cont: {}, chk: {} }; return j; }
function salvar(j) { store.set("jogo", j); }
var NIVEIS = [[0, "Iniciante"], [150, "Pegando o Jeito"], [400, "Cozinha Organizada"], [800, "Semana Resolvida"], [1400, "Chef da Casa"], [2200, "Lenda da Cozinha"]];
function nivel(xp) { var i = 0; while (i + 1 < NIVEIS.length && xp >= NIVEIS[i + 1][0]) i++; return { n: i + 1, nome: NIVEIS[i][1], de: NIVEIS[i][0], ate: NIVEIS[i + 1] ? NIVEIS[i + 1][0] : null, prox: NIVEIS[i + 1] ? NIVEIS[i + 1][1] : null }; }
var SELOS = { rd7: ["📲", "7 receitas do dia"], feitas10: ["👩‍🍳", "10 receitas feitas"] };
function ganhar(j, xp, motivo) { j.xp += xp; return '<div class="jg-xp">+' + xp + ' XP<small>' + esc(motivo) + '</small></div>'; }
/* desfazer: guarda o que uma marcação deu (XP e selos) para poder devolver se foi sem querer */
function antes(j) { return { xp: j.xp, sel: j.selos.slice() }; }
function registraDesfazer(j, chave, a) { j.log["u:" + chave] = { xp: j.xp - a.xp, sel: j.selos.filter(function (s) { return a.sel.indexOf(s) < 0; }) }; }
function desfazer(j, chave) { var u = j.log["u:" + chave]; if (!u) return false; j.xp = Math.max(0, j.xp - u.xp); j.selos = j.selos.filter(function (s) { return u.sel.indexOf(s) < 0; }); delete j.log["u:" + chave]; return true; }
function selo(j, id, out) { if (j.selos.indexOf(id) < 0) { j.selos.push(id); if (out) out.push(id); } }
function festa(titulo, corpo) { $("#sheetT").textContent = titulo; $("#sheetB").innerHTML = corpo; $("#sheetOk").textContent = "Continuar"; $("#sheet").classList.add("show"); }
function novosHTML(n) { return n.length ? '<div class="sec"><h2>Selo novo</h2></div><div class="jg-selos">' + n.map(function (k) { var s = SELOS[k] || ["🏅", k]; return '<div class="new"><i>' + s[0] + '</i>' + esc(s[1]) + '</div>'; }).join("") + '</div>' : ""; }
function selosHTML(j, ids, titulo) { var on = ids.filter(function (k) { return j.selos.indexOf(k) >= 0; }).length; return '<div class="sec"><h2>' + (titulo || "Meus selos") + '</h2><span>' + on + ' de ' + ids.length + '</span></div><div class="jg-selos">' + ids.map(function (k) { var s = SELOS[k] || ["🏅", k]; return '<div class="' + (j.selos.indexOf(k) >= 0 ? "" : "off") + '"><i>' + s[0] + '</i>' + esc(s[1]) + '</div>'; }).join("") + '</div>'; }
function chama(j) { var n = 0; DES.forEach(function (d) { if (d.sequencia && d.ativo()) n = Math.max(n, d.sequencia(j)); }); return n; }
function topo(j) {
  var nv = nivel(j.xp), pct = nv.ate ? Math.round((j.xp - nv.de) / (nv.ate - nv.de) * 100) : 100, sq = chama(j);
  return '<section class="jg-lvl"><div class="jg-row"><small>SEU NÍVEL NO APP</small>' + (sq ? '<span class="jg-fire">🔥 ' + sq + (sq > 1 ? " semanas" : " semana") + '</span>' : "") + '</div>' +
    '<h3>Nível ' + nv.n + ' · ' + esc(nv.nome) + '</h3><div class="jg-bar"><i style="width:' + pct + '%"></i></div>' +
    '<div class="jg-row jg-s"><span>' + j.xp + (nv.ate ? " / " + nv.ate : "") + ' XP</span><span>' + (nv.prox ? "Próximo: " + esc(nv.prox) : "Nível máximo") + '</span></div></section>';
}
function visivel() { if (W.JOGO_PUBLICO) return true; var a = store.get("acessos", {}); return !!a["*"]; }

/* certificado em canvas (1080x1350) */
function certificado(cv, o) {
  var x = cv.getContext("2d"), g = x.createLinearGradient(0, 0, 0, 1350); g.addColorStop(0, o.c1 || "#1D5A2C"); g.addColorStop(1, o.c2 || "#0F3A1B");
  x.fillStyle = g; x.fillRect(0, 0, 1080, 1350); x.strokeStyle = o.c3 || "#C8F53C"; x.lineWidth = 6; x.strokeRect(50, 50, 980, 1250);
  x.textAlign = "center"; x.fillStyle = o.c3 || "#C8F53C"; x.font = "700 36px Arial"; x.fillText("COZINHA QUE RESOLVE", 540, 170);
  x.font = "200px Arial"; x.fillText(o.emoji || "🏆", 540, 420);
  x.fillStyle = "#fff"; x.font = "800 64px Arial"; x.fillText("CERTIFICADO", 540, 540);
  x.font = "400 34px Arial"; x.fillStyle = "#E7E7E7"; x.fillText(o.titulo + " é", 540, 610);
  var nome = o.nome || "Seu nome"; x.fillStyle = "#fff"; x.font = "800 " + (nome.length > 22 ? 58 : 76) + "px Arial"; x.fillText(nome, 540, 730);
  x.fillStyle = "#E7E7E7"; x.font = "400 34px Arial"; (o.linhas || []).forEach(function (l, i) { x.fillText(l, 540, 830 + i * 48); });
  x.fillStyle = o.c3 || "#C8F53C"; x.font = "800 44px Arial"; x.fillText(o.rodape || "", 540, 1050);
  x.fillStyle = "#E7E7E7"; x.font = "400 30px Arial"; x.fillText(new Date().toLocaleDateString("pt-BR"), 540, 1150); x.fillText("@cozinhaqueresolve.br", 540, 1220);
}
function certHTML(voltar, sub, titulo, texto, extra) {
  var nome = store.get("jg:nome", "");
  return '<a href="' + voltar + '" class="btn" style="margin-top:6px">‹ Desafio</a><section class="jg-head"><small>' + esc(sub) + '</small><h1>' + esc(titulo) + '</h1><p>' + esc(texto) + '</p></section>' +
    '<label class="search" style="margin:12px 0"><span>✍️</span><input id="jgNome" value="' + esc(nome) + '" placeholder="Seu nome" maxlength="40"></label><canvas id="jgCert" width="1080" height="1350" style="width:100%;border-radius:18px;box-shadow:0 10px 30px rgba(0,0,0,.15)"></canvas>' +
    '<button class="cta lime" id="jgSalvaCert" style="margin-top:12px">⬇️ Salvar imagem</button>' + (extra || "");
}
function certBind(o, arquivo) {
  var desenha = function () { o.nome = ($("#jgNome").value || "").trim(); certificado($("#jgCert"), o); };
  desenha(); $("#jgNome").oninput = function () { store.set("jg:nome", $("#jgNome").value); desenha(); };
  $("#jgSalvaCert").onclick = function () { var a = document.createElement("a"); a.download = arquivo; a.href = $("#jgCert").toDataURL("image/png"); a.click(); track("CertificadoSalvo", { arquivo: arquivo }, true); };
}

/* ---------------- registro dos desafios ---------------- */
var DES = [];
function registrar(d) { DES.push(d); }
W.TRAVA = function (r) { for (var i = 0; i < DES.length; i++) if (DES[i].trava && DES[i].trava(r)) return true; return false; };
W.TELA_TRAVA = function (r) { for (var i = 0; i < DES.length; i++) if (DES[i].telaTrava) { var h = DES[i].telaTrava(r); if (h) return h; } return ""; };
W.JOGO_XP = function (tipo, r) {
  var j = J(), d = hoje(), novos = [];
  if (tipo === "feita" && r && !j.log["f:" + r.id]) { var a = antes(j); j.log["f:" + r.id] = d; j.xp += 20; if (Object.keys(j.log).filter(function (k) { return k.indexOf("f:") === 0; }).length >= 10) selo(j, "feitas10", novos); registraDesfazer(j, "f:" + r.id, a); }
  if (tipo === "desfeita" && r && j.log["f:" + r.id]) { if (!desfazer(j, "f:" + r.id)) j.xp = Math.max(0, j.xp - 20); delete j.log["f:" + r.id]; }
  if (tipo === "rd" && !j.log["rd:" + d]) { j.log["rd:" + d] = 1; j.xp += 10; if (Object.keys(j.log).filter(function (k) { return k.indexOf("rd:") === 0; }).length >= 7) selo(j, "rd7", novos); }
  DES.forEach(function (x) { if (x.onXP) x.onXP(j, tipo, r, novos); });
  salvar(j);
};
W.JOGO_HOME = function () {
  if (!visivel()) return "";
  var ativos = DES.filter(function (d) { return d.ativo(); }), j = J();
  if (!ativos.length) return "";
  if (ativos.length === 1) return ativos[0].homeCard(j);
  return '<a class="jg-home" href="#/desafios"><div class="jg-row"><small>MEUS DESAFIOS · NÍVEL ' + nivel(j.xp).n + '</small><small>ver todos ›</small></div>' +
    ativos.map(function (d) { var s = d.status(j); return '<div class="jg-hl"><i>' + d.emoji + '</i><div><b>' + esc(d.nome) + '</b><span>' + esc(s.txt) + '</span></div><em style="width:' + Math.round(s.pct * 100) + '%"></em></div>'; }).join("") + '</a>';
};

/* ---------------- Central de Desafios ---------------- */
function central() {
  var j = J(), ativos = DES.filter(function (d) { return d.ativo(); }), outros = DES.filter(function (d) { return !d.ativo() && d.visivel(); });
  var h = '<div class="jg-row" style="margin-top:6px"><a href="#/" class="btn">‹ Início</a><a href="#/desafios/ajuda" class="btn">❓ Como funciona</a></div>' + topo(j);
  h += '<div class="sec"><h2>Em andamento</h2><span>' + ativos.length + (ativos.length === 1 ? " desafio" : " desafios") + '</span></div>';
  if (!ativos.length) h += '<p class="note">Os desafios vêm junto com as coleções. Escolha uma na Vitrine para começar.</p>';
  h += ativos.map(function (d) { var s = d.status(j); return '<a class="jg-dc" href="' + d.href + '"><i style="background:' + d.bg + '">' + d.emoji + '</i><div><b>' + esc(d.nome) + '</b><span>' + esc(d.colNome + " · " + s.txt) + '</span><div class="jg-mini"><em style="width:' + Math.round(s.pct * 100) + '%;background:' + d.cor + '"></em></div></div>' + (s.tag ? '<u>' + esc(s.tag) + '</u>' : '') + '</a>'; }).join("");
  if (outros.length) h += '<div class="sec"><h2>Para desbloquear</h2><span>na Vitrine</span></div>' + outros.map(function (d) { return '<a class="jg-dc lock" href="' + d.vende + '"><i style="background:#EEE6D6">' + d.emoji + '</i><div><b>' + esc(d.nome) + '</b><span>' + esc(d.pitch) + '</span></div><u>🔒</u></a>'; }).join("");
  var todos = Object.keys(SELOS).filter(function (k) { return j.selos.indexOf(k) >= 0; });
  h += '<div class="sec"><h2>Todos os meus selos</h2><span>' + todos.length + '</span></div>' + (todos.length ? '<div class="jg-selos">' + todos.map(function (k) { return '<div><i>' + SELOS[k][0] + '</i>' + esc(SELOS[k][1]) + '</div>'; }).join("") + '</div>' : '<p class="note">Complete desafios para ganhar selos.</p>');
  h += '<a class="menu" href="#/cardapio" style="margin:18px 0"><span class="em">📅</span><div><h3>Cardápio da semana</h3><p>Um pão no café e uma salada no almoço, todos os dias.</p></div><span class="go">›</span></a>';
  return h;
}
var AJ = [
  ["🏆", "O que são os desafios", "Cada coleção da Cozinha que Resolve vem com um desafio. Você cozinha, marca no app e ganha XP, selos e receitas que só abrem jogando. Tudo fica salvo no seu celular, sem login."],
  ["⭐", "XP e nível", "O XP de todos os desafios soma no mesmo nível do app: Iniciante, Pegando o Jeito, Cozinha Organizada, Semana Resolvida, Chef da Casa e Lenda da Cozinha.\nMarcar “Fiz essa receita!” em qualquer receita também dá +20 XP (uma vez por receita)."],
  ["🫙", "Saladas no Pote · Semana do Pote", "Escolha 5 saladas, prepare no domingo e marque 1 pote por dia. 5 potes na semana = semana completa."],
  ["🍰", "Bolos Fitness · Semana do Bolo Fit", "Faça 3 bolos diferentes da coleção na semana (1 por dia, no máximo). 3 bolos = semana completa."],
  ["🎄", "Panetones · Rumo ao Natal", "8 missões até 24/12: do primeiro panetone à primeira entrega. Cada missão tem XP, e os prêmios abrem com 3, 6 e 8 missões."],
  ["↩️", "Marquei sem querer", "Dá para desfazer no mesmo dia: toque em “Marquei sem querer · desfazer” no desafio, desmarque o item do checklist ou toque de novo em “Fiz essa receita!”. O XP (e o selo, se veio dessa marcação) é devolvido. Marcou de novo, ganha de novo."],
  ["🎁", "Prêmios", "Receitas exclusivas que só abrem no desafio, preço de recompensa nas outras coleções da Vitrine (Essencial R$ 9,90 e Premium R$ 19,90) e certificado com o seu nome para postar."],
  ["📱", "Troquei de celular ou limpei o navegador", "O progresso fica salvo neste celular e neste navegador. Em outro aparelho o jogo recomeça do zero; as suas coleções continuam, é só liberar de novo pelo link do e-mail de compra."],
  ["💬", "Ainda tem dúvida?", "Fale com a gente pelo Suporte do app ou pelo e-mail contato.cozinhaqueresolve@gmail.com."]
];
function ajuda() {
  return '<a href="#/desafios" class="btn" style="margin-top:6px">‹ Desafios</a><section class="jg-head"><small>AJUDA</small><h1>Como funcionam os desafios</h1><p>Cozinhe, marque no app e desbloqueie prêmios.</p></section>' +
    AJ.map(function (a) { return '<div class="box"><h2>' + a[0] + ' ' + esc(a[1]) + '</h2>' + a[2].split("\n").map(function (l) { return '<p>' + esc(l) + '</p>'; }).join("") + '</div>'; }).join("") +
    DES.filter(function (d) { return d.ativo() && d.ajudaHref; }).map(function (d) { return '<a class="already" href="' + d.ajudaHref + '" style="display:block">' + d.emoji + ' Regras completas: ' + esc(d.nome) + ' →</a>'; }).join("");
}
W.ROTAS["/desafios"] = { nav: "desafios", html: function (sub) { if (!visivel()) { location.replace("#/"); return ""; } return sub === "ajuda" ? ajuda() : central(); } };

/* troca a aba Cardápio por Desafios quando o jogo está visível */
function navDesafios() {
  if (!visivel()) return; var a = document.querySelector('nav a[data-nav="cardapio"]'); if (!a) return;
  a.setAttribute("href", "#/desafios"); a.dataset.nav = "desafios"; a.innerHTML = "<i>🏆</i>Desafios";
}

W.JOGO = { antes: antes, registraDesfazer: registraDesfazer, desfazer: desfazer, J: J, salvar: salvar, hoje: hoje, semanaDe: semanaDe, semanaAnterior: semanaAnterior, nivel: nivel, SELOS: SELOS, ganhar: ganhar, selo: selo, festa: festa, novosHTML: novosHTML, selosHTML: selosHTML, topo: topo, registrar: registrar, visivel: visivel, certHTML: certHTML, certBind: certBind, DES: DES };

var css = ".jg-lvl{background:linear-gradient(135deg,#B8441A,#EA7A2E);color:#fff;border-radius:20px;padding:16px;margin:12px 0}.jg-lvl small{font-weight:800;letter-spacing:.1em;font-size:11px;color:#FFE9C2}.jg-lvl h3{font:400 26px/1 var(--display,inherit);margin:6px 0 10px;color:#fff}" +
  ".jg-row{display:flex;justify-content:space-between;align-items:center;gap:8px}.jg-s{font-size:12px;margin-top:6px;color:#FFE9D6}.jg-fire{background:#FFF3E6;color:#B8441A;font-weight:800;font-size:12px;padding:4px 9px;border-radius:99px}" +
  ".jg-bar{height:10px;background:rgba(255,255,255,.22);border-radius:99px;overflow:hidden}.jg-bar i{display:block;height:100%;background:#FFE08A;border-radius:99px}" +
  ".jg-head{background:linear-gradient(160deg,#D9622B,#6E260B);color:#fff;border-radius:20px;padding:18px;margin:12px 0}.jg-head small{color:#FFE9C2;font-weight:800;letter-spacing:.1em;font-size:11px}.jg-head h1{margin:6px 0 6px;color:#fff;font-size:28px}.jg-head p{margin:0;color:#FFE9D6;font-size:14px}.jg-head.pt{background:linear-gradient(160deg,#2E7A3C,#0F3A1B)}.jg-head.pt small{color:#C8F53C}.jg-head.pt p{color:#DDEFD9}" +
  ".jg-card{background:var(--surface);border:1px solid var(--line,#E7DDCB);border-radius:20px;padding:14px;margin:12px 0}.jg-t{font-size:13px;letter-spacing:.04em}" +
  ".jg-ok{background:#F2FBEA;color:#1D5A2C;border-radius:12px;padding:10px 12px;font-weight:700;font-size:14px;margin-top:8px}" +
  ".jg-undo{display:block;margin:8px auto 0;background:none;border:0;color:var(--muted,#8a8076);font:600 13px/1.2 var(--body,inherit);text-decoration:underline;cursor:pointer;padding:6px}" +
  ".jg-prem{display:grid;gap:8px}.jg-p{display:flex;gap:12px;align-items:center;background:var(--surface);border:1px dashed #CFC3AE;border-radius:16px;padding:12px;text-decoration:none;color:inherit}.jg-p i{font-style:normal;font-size:30px}.jg-p small{font-size:10.5px;font-weight:800;letter-spacing:.06em;color:var(--muted,#66705F)}.jg-p b{display:block}.jg-p span{font-size:12.5px;color:var(--muted,#66705F)}.jg-p.ok{border:2px solid #C8F53C;background:#F8FFE9;color:#14200a}.jg-p.ok small{color:#2E7A3C}" +
  ".jg-selos{display:grid;grid-template-columns:repeat(3,1fr);gap:8px}.jg-selos div{background:var(--surface);border:1px solid var(--line,#E7DDCB);border-radius:14px;padding:10px 4px;text-align:center;font-size:11px;font-weight:700;line-height:1.2}.jg-selos i{display:block;font-style:normal;font-size:26px;margin-bottom:4px}.jg-selos .off{opacity:.38;filter:grayscale(1)}.jg-selos .new{border:2px solid #C8F53C}" +
  ".jg-xp{background:#C8F53C;color:#14200a;border-radius:14px;padding:10px;text-align:center;font-weight:900;font-size:24px;margin:8px 0}.jg-xp small{display:block;font-size:12px;font-weight:700}.jg-cel{text-align:center;font-size:64px;line-height:1.1}" +
  ".jg-home{display:block;background:linear-gradient(135deg,#B8441A,#EA7A2E);color:#fff;border-radius:18px;padding:14px;margin:12px 0;text-decoration:none}.jg-home small{color:#FFE9C2;font-weight:800;font-size:11px;letter-spacing:.08em}.jg-home b{display:block;font-size:16px;margin-top:2px;color:#fff}" +
  ".jg-hl{display:flex;gap:10px;align-items:center;margin-top:10px;position:relative;padding-bottom:6px}.jg-hl i{font-style:normal;font-size:24px}.jg-hl b{font-size:14px!important;margin:0!important}.jg-hl span{font-size:12px;color:#FFE9D6}.jg-hl em{position:absolute;left:34px;bottom:0;height:3px;background:#FFE08A;border-radius:9px}" +
  ".jg-dc{display:flex;gap:12px;align-items:center;background:var(--surface);border:1px solid var(--line,#E7DDCB);border-radius:18px;padding:12px;margin-bottom:10px;text-decoration:none;color:inherit}.jg-dc>i{font-style:normal;font-size:26px;width:48px;height:48px;border-radius:14px;display:flex;align-items:center;justify-content:center;flex:none}.jg-dc>div{flex:1;min-width:0}.jg-dc b{display:block;font-size:16px}.jg-dc span{font-size:12.5px;color:var(--muted,#66705F)}.jg-dc u{text-decoration:none;font-weight:800;font-size:12px;background:#C8F53C;color:#14200a;padding:5px 8px;border-radius:9px;white-space:nowrap}.jg-dc.lock{opacity:.8}.jg-dc.lock u{background:#F3EBDC;color:#7A6A50}" +
  ".jg-mini{height:6px;background:rgba(0,0,0,.08);border-radius:99px;overflow:hidden;margin-top:6px}.jg-mini em{display:block;height:100%;border-radius:99px}" +
  ".jg-ms{display:flex;gap:10px;align-items:center;background:var(--surface);border:1px solid var(--line,#E7DDCB);border-radius:14px;padding:10px 12px;margin-bottom:8px}.jg-ms>i{font-style:normal;font-size:22px}.jg-ms>div{flex:1}.jg-ms b{display:block;font-size:14.5px}.jg-ms small{color:var(--muted,#66705F);font-size:12px}.jg-ms.ok{background:#F2FBEA;border-color:#9BD37A;color:#14200a}.jg-ms.now{border:2px solid #B3261E}.jg-ms button{border:0;background:#C8F53C;color:#14200a;font-weight:800;border-radius:10px;padding:7px 10px}";
var st = document.createElement("style"); st.textContent = css; document.head.appendChild(st);
})();
