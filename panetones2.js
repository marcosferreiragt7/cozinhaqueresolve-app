/* ================================================================
   PANETONES QUE RESOLVEM — PREMIUM (70 receitas extras)
   premium: "panetones_premium". Mesma coleção "panetones": quem tem só o
   Essencial vê estas seções com cadeado e a oferta de upgrade.
   Carregar DEPOIS de panetones.js (usa window.PN_H).
   Receitas elaboradas pela Cozinha que Resolve, sem teste de cozinha
   registrado: não anunciar como "testadas".
   ================================================================ */
(function () {
var H = window.PN_H, R = window.RECEITAS;
window.SECOES.panetones = window.SECOES.panetones.concat(["Premium · Gourmet", "Premium · Chocotones especiais", "Premium · Trufados", "Premium · Recheados",
  "Premium · Sabores brasileiros", "Premium · Frutas e castanhas", "Premium · Minis, potes e presentes", "Premium · Salgados"]);

/* ---------------- massas-base (para 2 panetones de 500 g) ---------------- */
var BASES = {
  classica: { itens: [[500, "farinha de trigo"], [175, "leite"], [100, "ovos (2 ovos médios)"], [85, "açúcar"], [90, "manteiga em temperatura ambiente"], [8, "fermento biológico seco"], [8, "sal"], [15, "mel"], [5, "raspas de laranja"], [4, "aroma de panetone"]] },
  brioche: { itens: [[500, "farinha de trigo"], [140, "leite"], [150, "ovos (3 ovos médios)"], [100, "açúcar"], [120, "manteiga em temperatura ambiente"], [9, "fermento biológico seco"], [8, "sal"], [20, "mel"], [5, "essência de baunilha"], [5, "raspas de laranja"]], lenta: true },
  cacau: { itens: [[420, "farinha de trigo"], [30, "cacau em pó 100%"], [180, "leite"], [100, "ovos (2 ovos médios)"], [90, "açúcar"], [80, "manteiga em temperatura ambiente"], [8, "fermento biológico seco"], [7, "sal"], [15, "mel"], [5, "essência de baunilha"]], cacau: true },
  salgada: { itens: [[500, "farinha de trigo"], [200, "leite"], [100, "ovos (2 ovos médios)"], [20, "açúcar"], [70, "manteiga em temperatura ambiente"], [10, "fermento biológico seco"], [10, "sal"]], salgada: true },
  fuba: { itens: [[400, "farinha de trigo"], [100, "fubá mimoso"], [190, "leite"], [100, "ovos (2 ovos médios)"], [90, "açúcar"], [90, "manteiga em temperatura ambiente"], [8, "fermento biológico seco"], [7, "sal"], [15, "mel"], [3, "erva-doce"]] }
};

/* ---------------- recheios (para 2 panetones, ~150 g em cada) ---------------- */
function brig(nome, extra) {
  return { t: nome + ": numa panela, misture o leite condensado" + extra + " e a manteiga. Cozinhe em fogo baixo, mexendo sempre, até engrossar e começar a desgrudar do fundo (cerca de 10 minutos). Desligue, junte o creme de leite e deixe esfriar com filme encostado na superfície. Ele fica mais mole que o de enrolar: ponto de bisnaga.", timer: 40 };
}
function gBranca(choc, creme, depois) {
  return { t: "Recheio: pique " + choc + ". Aqueça " + creme + " só até soltar vapor (chocolate branco queima fácil), despeje sobre o chocolate, espere 2 minutos e mexa até ficar liso." + (depois ? " " + depois : "") + " Deixe firmar até o ponto de bisnaga (cerca de 1 hora; 20 minutos na geladeira se estiver mole).", timer: 60 };
}
var REC = {
  ganache_meio: { ing: ["190 g de chocolate meio amargo", "130 g de creme de leite UHT"], passo: H.ganache("o chocolate", "o creme de leite"), pere: true },
  ganache_leite: { ing: ["210 g de chocolate ao leite", "110 g de creme de leite UHT"], passo: H.ganache("o chocolate ao leite", "o creme de leite"), pere: true },
  ganache_70: { ing: ["180 g de chocolate 70% cacau", "140 g de creme de leite UHT"], passo: H.ganache("o chocolate 70%", "o creme de leite"), pere: true },
  ganache_branca: { ing: ["230 g de chocolate branco", "100 g de creme de leite UHT"], passo: gBranca("o chocolate branco", "o creme de leite"), pere: true },
  cafe: { ing: ["200 g de chocolate meio amargo", "130 g de creme de leite UHT", "8 g de café solúvel"], passo: H.ganache("o chocolate", "o creme de leite", " com o café solúvel"), pere: true },
  brigadeiro: { ing: ["1 lata de leite condensado (395 g)", "25 g de cacau em pó 100%", "15 g de manteiga", "50 g de creme de leite UHT"], passo: brig("Brigadeiro de rechear", ", o cacau peneirado"), pere: true },
  ninho: { ing: ["1 lata de leite condensado (395 g)", "40 g de leite em pó", "15 g de manteiga", "80 g de creme de leite UHT"], passo: brig("Brigadeiro de leite em pó", " (já misturado com o leite em pó, ainda frio, para não empelotar)"), pere: true },
  beijinho: { ing: ["1 lata de leite condensado (395 g)", "50 g de coco ralado fino sem açúcar", "15 g de manteiga", "60 g de creme de leite UHT"], passo: brig("Beijinho de rechear", ", o coco"), pere: true },
  pacoca: { ing: ["1 lata de leite condensado (395 g)", "15 g de manteiga", "60 g de creme de leite UHT", "4 paçocas de rolha (cerca de 80 g)"], passo: { t: "Creme de paçoca: cozinhe o leite condensado com a manteiga em fogo baixo, mexendo sempre, até engrossar (cerca de 8 minutos). Desligue, junte o creme de leite e as paçocas esfareladas e mexa até ficar cremoso. Deixe esfriar coberto com filme.", timer: 40 }, pere: true },
  cocada: { ing: ["1 lata de leite condensado (395 g)", "100 g de coco ralado úmido", "100 ml de leite de coco", "15 g de manteiga"], passo: { t: "Cocada cremosa: cozinhe tudo em fogo baixo, mexendo sempre, até engrossar e aparecer o fundo da panela por 1 segundo ao passar a colher (cerca de 12 minutos). Deixe esfriar coberto com filme.", timer: 40 }, pere: true },
  doce_leite: { ing: ["320 g de doce de leite firme"], passo: { t: "Recheio: mexa o doce de leite para ficar liso. Se estiver muito firme, aqueça 20 segundos no micro-ondas." }, pere: false },
  doce_leite_cafe: { ing: ["300 g de doce de leite firme", "8 g de café solúvel", "10 ml de água quente"], passo: { t: "Recheio: dissolva o café na água quente e misture ao doce de leite até ficar liso." }, pere: false },
  avela: { ing: ["300 g de creme de avelã com cacau"], passo: { t: "Recheio: mexa o creme de avelã para ficar homogêneo. Se estiver firme (dia frio), aqueça 15 segundos no micro-ondas." }, pere: false, alerg: "avelã" },
  pistache: { ing: ["220 g de chocolate branco", "80 g de creme de leite UHT", "50 g de pasta de pistache pura (ou pistache sem sal moído bem fino)"], passo: gBranca("o chocolate branco", "o creme de leite", "Junte a pasta de pistache e misture bem."), pere: true, alerg: "pistache" },
  maracuja: { ing: ["230 g de chocolate branco", "60 g de creme de leite UHT", "60 g de polpa de maracujá coada"], passo: gBranca("o chocolate branco", "o creme de leite", "Junte a polpa aos poucos, mexendo, para não talhar."), pere: true },
  limao: { ing: ["230 g de chocolate branco", "70 g de creme de leite UHT", "25 ml de suco de limão-siciliano", "raspas de 1 limão-siciliano"], passo: gBranca("o chocolate branco", "o creme de leite com as raspas", "Junte o suco aos poucos, mexendo."), pere: true },
  morango: { ing: ["200 g de chocolate branco", "80 g de creme de leite UHT", "80 g de geleia de morango"], passo: gBranca("o chocolate branco", "o creme de leite", "Com a ganache ainda morna, misture a geleia."), pere: true },
  frutas_vermelhas: { ing: ["200 g de chocolate branco", "80 g de creme de leite UHT", "80 g de geleia de frutas vermelhas"], passo: gBranca("o chocolate branco", "o creme de leite", "Com a ganache ainda morna, misture a geleia."), pere: true },
  caramelo: { ing: ["150 g de açúcar", "130 g de creme de leite UHT, quente", "30 g de manteiga", "2 g de sal (uma pitada generosa)"], passo: { t: "Caramelo cremoso: derreta o açúcar em fogo médio, sem mexer, girando a panela, até ficar cor de âmbar. Desligue e junte o creme de leite quente aos poucos (cuidado: borbulha e solta vapor). Volte ao fogo baixo e mexa até dissolver; junte a manteiga e o sal. Deixe esfriar: ele engrossa.", timer: 60 }, pere: true },
  cupuacu: { ing: ["220 g de chocolate branco", "60 g de creme de leite UHT", "100 g de polpa de cupuaçu"], passo: gBranca("o chocolate branco", "o creme de leite", "Antes, cozinhe a polpa de cupuaçu 5 minutos em fogo baixo para reduzir, deixe amornar e misture à ganache."), pere: true },
  acai: { ing: ["230 g de chocolate branco", "100 g de creme de leite UHT", "15 g de açaí em pó"], passo: gBranca("o chocolate branco", "o creme de leite com o açaí em pó dissolvido"), pere: true },
  jabuticaba: { ing: ["180 g de chocolate branco", "70 g de creme de leite UHT", "120 g de geleia de jabuticaba"], passo: gBranca("o chocolate branco", "o creme de leite", "Com a ganache ainda morna, misture a geleia."), pere: true },
  goiabada: { ing: ["300 g de goiabada cascão", "80 ml de água"], passo: { t: "Goiabada cremosa: pique a goiabada e derreta com a água em fogo baixo, amassando com a colher, até virar um creme liso (cerca de 8 minutos). Deixe esfriar: ela engrossa.", timer: 30 }, pere: false },
  amendoim: { ing: ["220 g de pasta de amendoim integral", "100 g de chocolate ao leite", "40 g de creme de leite UHT"], passo: { t: "Recheio: derreta o chocolate com o creme de leite (no micro-ondas, de 30 em 30 segundos) e misture a pasta de amendoim até ficar liso." }, pere: true, alerg: "amendoim" }
};

/* ---------------- coberturas (para 2 panetones) ---------------- */
function derrete(choc, branco) {
  return "Cobertura: derreta " + choc + (branco ? " em fogo baixíssimo ou no micro-ondas de 20 em 20 segundos (tire quando ainda houver pedacinhos e mexa até derreterem)" : " no micro-ondas, de 30 em 30 segundos, mexendo") + ", e espalhe no topo de cada panetone, deixando escorrer pelas laterais.";
}
var COB = {
  meio: { ing: ["Cobertura: 180 g de chocolate meio amargo fracionado"], t: derrete("o chocolate") },
  leite: { ing: ["Cobertura: 180 g de chocolate ao leite fracionado"], t: derrete("o chocolate ao leite") },
  setenta: { ing: ["Cobertura: 180 g de chocolate 70% cacau"], t: derrete("o chocolate 70%") },
  branco: { ing: ["Cobertura: 180 g de chocolate branco fracionado"], t: derrete("o chocolate branco", true) },
  glace: { ing: ["Glacê: 150 g de açúcar de confeiteiro", "25 ml de suco de limão (ou água)"], t: "Glacê: misture o açúcar de confeiteiro com o suco até formar uma pasta grossa que escorre devagar. Espalhe no topo dos panetones frios." },
  glassa: { antes: true, ing: ["Glaçagem: 1 clara (cerca de 35 g)", "80 g de açúcar", "40 g de farinha de amêndoa", "30 g de amêndoas inteiras sem pele", "Açúcar de confeiteiro para polvilhar"],
    t: "Glaçagem: misture a clara, o açúcar e a farinha de amêndoa até formar uma pasta mole. Quando a massa estiver pronta para o forno, espalhe a glaçagem no topo com uma colher, sem apertar, distribua as amêndoas e polvilhe bem o açúcar de confeiteiro." },
  praline: { ing: ["Cobertura: 120 g de chocolate ao leite fracionado", "Pé de moleque: 100 g de açúcar", "100 g de amendoim torrado sem pele"],
    t: "Pé de moleque: derreta o açúcar em fogo médio até ficar dourado, junte o amendoim, mexa 30 segundos e espalhe num papel-manteiga. Depois de frio, quebre em pedaços. Derreta o chocolate, cubra o topo dos panetones e espete os pedaços antes de firmar." },
  confeitos: { ing: ["Cobertura: 150 g de chocolate ao leite fracionado", "30 g de confeitos coloridos"], t: derrete("o chocolate ao leite") + " Salpique os confeitos antes de firmar." }
};

/* ---------------- montador ---------------- */
var r10 = function (x) { return Math.round(x / 10) * 10; };
function make(o) {
  var B = BASES[o.base || "classica"];
  var itens = B.itens.filter(function (x) { return !(o.sem || []).some(function (s) { return x[1].indexOf(s) === 0; }); });
  itens = itens.concat(o.extras || []);
  var inc = o.inc || [];
  var total = itens.concat(inc).reduce(function (a, x) { return a + x[0]; }, 0);
  var minis = o.fmt === "minis";
  var rec = o.rec && REC[o.rec], cob = o.cob && COB[o.cob.k || o.cob];
  var cobD = (o.cob && o.cob.decor) || "", cobI = (o.cob && o.cob.ing) || [];
  var marcar = !!(rec || cob || o.recIng);
  var ing = itens.concat(inc).map(function (x, i) { return (marcar && i === 0 ? "Massa: " : "") + x[0] + " g de " + x[1]; });
  var nMinis = Math.floor(total / 100);
  if (minis) ing.push(nMinis + " forminhas de papel para mini panetone de 100 g");
  if (rec) ing = ing.concat(rec.ing.map(function (x, i) { return (i === 0 ? "Recheio: " : "") + x; }));
  if (cob) ing = ing.concat(cob.ing).concat(cobI);
  if (o.maisIng) ing = ing.concat(o.maisIng);

  var passos = [H.esponja("todo o leite", true)];
  passos.push({ t: "Junte o restante da farinha" + (B.cacau ? ", o cacau peneirado" : "") + " e os demais ingredientes da massa, menos o sal e a manteiga" + (o.sovaNota ? " (" + o.sovaNota + ")" : "") + ". Sove 8 minutos na batedeira com gancho (ou cerca de 15 minutos à mão), até a massa ficar lisa e elástica." });
  passos.push(H.gordura("a manteiga"));
  if (inc.length) passos.push({ t: o.incTxt || ("Incorpore à massa: " + inc.map(function (x) { return x[1].replace(/ \(.+\)$/, ""); }).join(", ").replace(/, ([^,]*)$/, " e $1") + ". Dobre a massa sobre eles, sem sovar mais." + (o.incNota ? " " + o.incNota : "")) });
  passos.push(B.lenta ? { t: H.CRESCE1.t.replace("Em dia frio pode passar de 2 horas", "Massa rica em manteiga e ovos cresce mais devagar: pode levar 2 horas e meia ou mais"), timer: 150 } : H.CRESCE1);

  var rende, sobra = r10(total - 1000);
  if (minis) {
    passos.push(H.divide("Divida em " + nMinis + " partes de cerca de 100 g."));
    passos.push({ t: "Cubra e deixe crescer até a massa chegar perto da borda das forminhas.", timer: 75 });
    if (cob && cob.antes) passos.push({ t: cob.t });
    passos.push({ t: "Asse em forno preaquecido a 170 °C por 18 a 22 minutos, até dourar e o palito sair seco.", timer: 20 });
    passos.push(H.ESFRIA_MINI);
    rende = nMinis + " mini panetones de 100 g";
  } else {
    var dv = sobra < 60 ? "Divida em 2 partes iguais (cerca de " + r10(total / 2) + " g cada) para formas de 500 g."
      : sobra < 160 ? "Divida em 2 partes de 500 g. A sobra (cerca de " + sobra + " g) vira 1 mini."
      : "Divida em 2 partes de 500 g. Com a sobra (cerca de " + sobra + " g), faça 2 minis de " + r10(sobra / 2) + " g.";
    passos.push(H.divide(dv)); passos.push(H.CRESCE2);
    if (cob && cob.antes) passos.push({ t: cob.t });
    passos.push(H.assar(40, sobra >= 60, cob && cob.antes ? "Não faça corte no topo." : (B.cacau ? "Faça um corte em cruz no topo. Como a massa é escura, guie-se pelo palito, não pela cor." : undefined)));
    passos.push(H.ESFRIA);
    rende = "2 panetones de 500 g" + (sobra >= 160 ? " + 2 minis" : sobra >= 60 ? " + 1 mini" : "");
  }
  if (rec) {
    passos.push(rec.passo);
    passos.push(minis ? { t: "Faça 1 furo na base de cada mini e injete cerca de 25 g de recheio com o saco de confeitar. Pare se a massa começar a rachar." }
      : H.rechear("150 g de recheio (o que sobrar serve para decorar o topo ou para servir à parte)"));
  }
  if (cob && !cob.antes) passos.push({ t: cob.t + (cobD ? " " + cobD : "") });
  else if (cobD) passos.push({ t: cobD });
  if (rec || (cob && !cob.antes)) passos.push({ t: "Deixe firmar em lugar fresco antes de embalar.", timer: 30 });

  var alerg = ["glúten (trigo)", "leite", "ovos"].concat(o.alerg || []);
  if (rec && rec.alerg) alerg.push(rec.alerg);
  alerg = alerg.filter(function (x, i) { return alerg.indexOf(x) === i; });
  var aviso = o.aviso || "Contém " + alerg.join(", ").replace(/, ([^,]*)$/, " e $1") + ". " + H.TRIGO.slice(H.TRIGO.indexOf("Os tempos")) + ((rec && rec.pere) || o.pere ? H.PERECIVEL : "");
  var tempo = (minis ? 400 : 460) + (B.lenta ? 40 : 0) + (rec ? 70 : 0) + (cob && !cob.antes ? 30 : 0);

  R.push({ id: "pp-" + o.id, col: "panetones", sec: o.sec, premium: "panetones_premium", foto: window.ceiaImg("img/ceia/" + o.foto + ".webp"),
    nome: o.nome, emoji: o.emoji || "🍞", intro: o.intro, tempo: tempo, nivel: rec || (cob && cob.antes) ? "Avançado" : "Médio", rende: rende,
    tags: o.tags || ["Forno", "Fermentação"], ingredientes: ing, passos: passos, dica: o.dica + (cob && /choc|Cobertura/.test(cob.ing[0]) && !/glacê|Glacê/.test(cob.ing[0]) ? " " + H.TEMPERAGEM : ""), aviso: aviso });
}
function custom(o) {
  o.id = "pp-" + o.id; o.col = "panetones"; o.premium = "panetones_premium"; o.foto = window.ceiaImg("img/ceia/" + o.foto + ".webp");
  R.push(o);
}

/* ================= GOURMET (10) ================= */
var S = "Premium · Gourmet";
make({ id: "veneziana", sec: S, foto: "panetone", emoji: "🌰", nome: "Veneziana com glaçagem de amêndoas", base: "brioche",
  inc: [[80, "casca de laranja cristalizada picada"]], cob: "glassa", alerg: ["amêndoas"],
  intro: "A clássica italiana: massa amanteigada com laranja, sem uvas-passas, coberta por uma casquinha crocante de amêndoas e açúcar.",
  dica: "A glaçagem doura rápido: cubra com papel-alumínio assim que ficar dourada e siga assando até o palito sair seco." });
make({ id: "pistache", sec: S, foto: "fest-pistache", emoji: "💚", nome: "Panetone de pistache com chocolate branco", base: "brioche",
  inc: [[100, "pistache sem sal picado"], [80, "gotas de chocolate branco forneáveis"]], rec: "pistache", cob: { k: "branco", decor: "Salpique pistache picado antes de firmar." }, alerg: ["pistache"],
  intro: "Massa amanteigada com pistache e chocolate branco, recheada de creme de pistache. Um dos sabores mais pedidos nas confeitarias.",
  dica: "Pasta de pistache pura é cara: dá para fazer em casa, batendo pistache sem sal no processador até virar pasta, parando para raspar as laterais." });
make({ id: "gianduia", sec: S, foto: "brigatone", emoji: "🌰", nome: "Panetone gianduia (chocolate e avelã)", base: "cacau",
  inc: [[100, "avelãs torradas e picadas"], [100, "gotas de chocolate ao leite forneáveis"]], rec: "avela", cob: { k: "leite", decor: "Salpique avelãs picadas antes de firmar." }, alerg: ["avelã"],
  intro: "Massa de cacau com avelãs tostadas, recheio de creme de avelã e cobertura de chocolate ao leite.",
  dica: "Toste as avelãs 8 minutos a 180 °C e esfregue num pano para soltar a pele, que amarga." });
make({ id: "caramelo-salgado", sec: S, foto: "fest-doce-de-leite", emoji: "🧂", nome: "Panetone de caramelo salgado", base: "brioche",
  inc: [[150, "gotas de chocolate ao leite forneáveis"]], rec: "caramelo", cob: { k: "leite", decor: "Faça fios com o caramelo que sobrou e salpique 1 pitada de flor de sal." },
  intro: "Massa amanteigada com chocolate ao leite, recheio de caramelo com um toque de sal e fios de caramelo por cima.",
  dica: "Se o caramelo endurecer antes de rechear, aqueça 10 segundos no micro-ondas." });
make({ id: "frutas-vermelhas-branco", sec: S, foto: "fest-frutas-vermelhas", emoji: "🍓", nome: "Panetone de frutas vermelhas com chocolate branco", base: "classica", sem: ["aroma de panetone", "raspas de laranja"], extras: [[5, "essência de baunilha"]],
  inc: [[120, "frutas vermelhas desidratadas (cranberry, mirtilo, morango)"], [80, "gotas de chocolate branco forneáveis"]], rec: "frutas_vermelhas", cob: "branco",
  intro: "Massa de baunilha com frutas vermelhas desidratadas e chocolate branco, recheada com ganache branca de frutas vermelhas.",
  dica: "Frutas desidratadas muito secas podem ser hidratadas 10 minutos em água morna; seque bem antes de usar." });
make({ id: "limao-siciliano", sec: S, foto: "fest-limao", emoji: "🍋", nome: "Panetone de limão-siciliano com chocolate branco", base: "brioche", sem: ["raspas de laranja"], extras: [[8, "raspas de limão-siciliano"]],
  inc: [[150, "gotas de chocolate branco forneáveis"]], rec: "limao", cob: { k: "glace", decor: "Finalize com raspas de limão-siciliano." },
  intro: "Perfumado e leve: massa com raspas de limão-siciliano, chocolate branco, recheio de ganache de limão e glacê.",
  dica: "Raspe só a parte amarela da casca. A parte branca amarga." });
make({ id: "damasco-amendoas", sec: S, foto: "panetone-liquidificador", emoji: "🍑", nome: "Panetone de damasco e amêndoas", base: "brioche",
  inc: [[120, "damasco seco picado"], [80, "amêndoas laminadas tostadas"]], cob: "glassa", alerg: ["amêndoas"],
  intro: "Damasco macio e amêndoas tostadas na massa amanteigada, com glaçagem crocante de amêndoas por cima.",
  dica: "Damasco duro? Deixe 10 minutos em água morna e seque bem antes de picar." });
make({ id: "figo-nozes", sec: S, foto: "fest-salgado", emoji: "🍂", nome: "Panetone de figo e nozes", base: "classica", sem: ["aroma de panetone"], extras: [[3, "canela em pó"]],
  inc: [[120, "figo seco picado"], [80, "nozes picadas"]], cob: { k: "glace" }, alerg: ["nozes"],
  intro: "Figo seco, nozes e um toque de canela. Um panetone de sabor adulto, ótimo com café ou vinho.",
  dica: "Corte o cabinho duro do figo antes de picar." });
make({ id: "especiarias", sec: S, foto: "biscoitos", emoji: "✨", nome: "Panetone de especiarias", base: "classica", sem: ["aroma de panetone"], extras: [[4, "canela em pó"], [2, "gengibre em pó"], [1, "cravo em pó"], [1, "noz-moscada ralada"]],
  inc: [[100, "uvas-passas escuras"], [80, "casca de laranja cristalizada picada"]], incNota: "Hidrate as passas 10 minutos em água morna e seque bem antes.", cob: "glace",
  intro: "O cheiro do Natal em forma de panetone: canela, gengibre, cravo e noz-moscada com passas e laranja.",
  dica: "Especiarias moídas perdem o aroma com o tempo. Use potes abertos há menos de 6 meses." });
make({ id: "cereja-chocolate", sec: S, foto: "chocotone", emoji: "🍒", nome: "Panetone de cereja com chocolate", base: "cacau",
  inc: [[120, "cerejas em calda bem escorridas, secas e picadas"], [100, "gotas de chocolate meio amargo forneáveis"]], cob: { k: "meio", decor: "Decore com 4 ou 5 cerejas inteiras secas." },
  intro: "Massa de cacau com cerejas e gotas de chocolate: o sabor de bombom de cereja em panetone.",
  dica: "Seque muito bem as cerejas no papel-toalha: a calda deixa a massa grudenta e tinge o miolo." });

/* ================= CHOCOTONES ESPECIAIS (8) ================= */
S = "Premium · Chocotones especiais";
make({ id: "chocotone-ao-leite", sec: S, foto: "chocotone", emoji: "🍫", nome: "Chocotone ao leite trufado", base: "classica", sem: ["raspas de laranja"],
  inc: [[180, "gotas de chocolate ao leite forneáveis"]], rec: "ganache_leite", cob: "leite",
  intro: "Para quem gosta de chocolate mais suave: gotas, recheio e cobertura de chocolate ao leite.",
  dica: "Chocolate ao leite derrete mais rápido que o meio amargo: aqueça com cuidado." });
make({ id: "chocotone-branco", sec: S, foto: "fest-coco", emoji: "🤍", nome: "Chocotone branco", base: "brioche",
  inc: [[180, "gotas de chocolate branco forneáveis"]], rec: "ganache_branca", cob: "branco",
  intro: "Massa amanteigada de baunilha, chocolate branco em tudo: na massa, no recheio e na cobertura.",
  dica: "Chocolate branco empelota se esquentar demais. Derreta devagar." });
make({ id: "chocotone-70", sec: S, foto: "brigatone", emoji: "🍫", nome: "Chocotone 70% cacau", base: "cacau",
  inc: [[180, "chocolate 70% cacau picado em pedaços pequenos"]], rec: "ganache_70", cob: "setenta",
  intro: "Intenso e menos doce: massa de cacau, pedaços de chocolate 70% e ganache amarga.",
  dica: "Chocolate 70% picado derrete um pouco no forno e cria veios no miolo. Se preferir pedaços inteiros, use gotas forneáveis amargas." });
make({ id: "mocha", sec: S, foto: "fest-cafe", emoji: "☕", nome: "Chocotone mocha (café com chocolate)", base: "cacau", extras: [[10, "café solúvel dissolvido no leite"]], sovaNota: "o café já dissolvido no leite morno da esponja também vale",
  inc: [[160, "gotas de chocolate meio amargo forneáveis"]], rec: "cafe", cob: "meio",
  intro: "Café e chocolate na massa, no recheio e na cobertura. Para quem não larga o cafezinho.",
  dica: "Use café solúvel de boa qualidade: o sabor fica mais forte que café coado." });
make({ id: "menta", sec: S, foto: "chocotone", emoji: "🌿", nome: "Chocotone de chocolate com menta", base: "cacau", extras: [[3, "essência de menta"]],
  inc: [[160, "gotas de chocolate meio amargo forneáveis"]], rec: "ganache_meio", cob: { k: "meio", decor: "Se quiser, decore com folhinhas de hortelã só na hora de servir." },
  intro: "A dupla refrescante de chocolate amargo e menta, em versão de Natal.",
  dica: "Essência de menta é forte: 3 g bastam. Prove a massa crua com a ponta do dedo e ajuste na próxima." });
make({ id: "cookies", sec: S, foto: "kit-cookies", emoji: "🍪", nome: "Chocotone de cookies", base: "classica", sem: ["raspas de laranja", "aroma de panetone"], extras: [[5, "essência de baunilha"]],
  inc: [[100, "gotas de chocolate forneáveis"], [100, "biscoito tipo cookie com gotas, quebrado em pedaços"]], cob: { k: "leite", decor: "Quebre 2 cookies por cima antes de firmar." },
  intro: "Pedaços de cookie e gotas de chocolate dentro da massa de baunilha. O preferido das crianças.",
  dica: "Pedaços grandes de cookie amolecem no forno; quebre em pedaços de 1 cm." });
make({ id: "tres-chocolates", sec: S, foto: "panetone-trufado", emoji: "🍫", nome: "Chocotone três chocolates", base: "cacau",
  inc: [[70, "gotas de chocolate meio amargo forneáveis"], [60, "gotas de chocolate ao leite forneáveis"], [60, "gotas de chocolate branco forneáveis"]], rec: "ganache_meio", cob: { k: "meio", decor: "Faça fios de chocolate branco derretido (30 g) por cima." }, alerg: [],
  intro: "Massa de cacau com três tipos de chocolate, recheio de ganache e fios de chocolate branco.",
  dica: "Para os fios, coloque o chocolate branco derretido num saquinho e corte uma pontinha." });
make({ id: "chocolate-coco", sec: S, foto: "fest-coco", emoji: "🥥", nome: "Chocotone de chocolate com coco", base: "cacau",
  inc: [[150, "gotas de chocolate meio amargo forneáveis"], [50, "coco ralado seco sem açúcar"]], rec: "beijinho", cob: { k: "meio", decor: "Salpique coco em flocos tostado antes de firmar." },
  intro: "Massa de cacau com coco, recheio de beijinho e cobertura de chocolate: um prestígio em forma de chocotone.",
  dica: "Toste o coco em flocos numa frigideira seca, mexendo sempre, até dourar." });

/* ================= TRUFADOS (10) ================= */
S = "Premium · Trufados";
make({ id: "trufado-brigadeiro", sec: S, foto: "brigadeiro", emoji: "🍫", nome: "Panetone trufado de brigadeiro", base: "classica",
  inc: [[180, "gotas de chocolate forneáveis"]], rec: "brigadeiro", cob: { k: "meio", decor: "Cubra com granulado de chocolate antes de firmar." },
  intro: "Chocotone recheado de brigadeiro cremoso e coberto com chocolate e granulado. Sabor de festa de criança.",
  dica: "Brigadeiro cozido demais fica duro para injetar: desligue quando começar a desgrudar do fundo." });
make({ id: "trufado-ninho", sec: S, foto: "pudim", emoji: "🥛", nome: "Panetone trufado de leite em pó", base: "classica", sem: ["aroma de panetone"], extras: [[5, "essência de baunilha"]],
  inc: [[150, "gotas de chocolate branco forneáveis"]], rec: "ninho", cob: { k: "branco", decor: "Polvilhe leite em pó peneirado por cima." },
  intro: "Recheio de brigadeiro de leite em pó, chocolate branco e leite em pó polvilhado. Doce e cremoso.",
  dica: "Misture o leite em pó no leite condensado ainda frio, antes de ir ao fogo: assim não empelota." });
make({ id: "trufado-avela", sec: S, foto: "panetone-trufado", emoji: "🌰", nome: "Panetone trufado de creme de avelã", base: "classica",
  inc: [[180, "gotas de chocolate forneáveis"]], rec: "avela", cob: "leite",
  intro: "Chocotone com recheio generoso de creme de avelã e cobertura de chocolate ao leite.",
  dica: "Creme de avelã de pote já vem no ponto de rechear: só mexa para ficar homogêneo." });
make({ id: "trufado-maracuja", sec: S, foto: "torta-limao", emoji: "💛", nome: "Panetone trufado de maracujá", base: "classica", sem: ["aroma de panetone"], extras: [[5, "essência de baunilha"]],
  inc: [[150, "gotas de chocolate branco forneáveis"]], rec: "maracuja", cob: { k: "branco", decor: "Se quiser, decore com sementes de maracujá secas no papel-toalha." },
  intro: "O azedinho do maracujá com chocolate branco: recheio de ganache de maracujá e cobertura branca.",
  dica: "Use polpa coada (sem sementes) no recheio, senão entope o bico de confeitar." });
make({ id: "trufado-limao", sec: S, foto: "fest-limao", emoji: "🍋", nome: "Panetone trufado de limão", base: "classica", sem: ["raspas de laranja", "aroma de panetone"], extras: [[6, "raspas de limão"]],
  inc: [[150, "gotas de chocolate branco forneáveis"]], rec: "limao", cob: { k: "branco", decor: "Finalize com raspas de limão." },
  intro: "Massa com raspas de limão, recheio de ganache de limão-siciliano e cobertura de chocolate branco.",
  dica: "Junte o suco de limão à ganache aos poucos; de uma vez, ela pode talhar." });
make({ id: "trufado-cafe", sec: S, foto: "fest-cafe", emoji: "☕", nome: "Panetone trufado de café", base: "classica",
  inc: [[180, "gotas de chocolate meio amargo forneáveis"]], rec: "cafe", cob: { k: "meio", decor: "Salpique café moído bem fino ou grãos de café cobertos com chocolate." },
  intro: "Chocotone recheado com ganache de café: para servir com um expresso.",
  dica: "Café solúvel dissolve direto no creme quente, sem deixar grãos." });
make({ id: "trufado-morango", sec: S, foto: "fest-frutas-vermelhas", emoji: "🍓", nome: "Panetone trufado de morango", base: "classica", sem: ["aroma de panetone"], extras: [[5, "essência de baunilha"]],
  inc: [[150, "gotas de chocolate branco forneáveis"]], rec: "morango", cob: "branco",
  intro: "Chocolate branco e morango: recheio de ganache branca com geleia de morango.",
  dica: "Morango fresco solta água e estraga rápido dentro do panetone: use só a geleia." });
make({ id: "trufado-caramelo", sec: S, foto: "fest-doce-de-leite", emoji: "🍮", nome: "Panetone trufado de caramelo com chocolate", base: "classica",
  inc: [[180, "gotas de chocolate forneáveis"]], rec: "caramelo", cob: { k: "meio", decor: "Faça fios com o caramelo que sobrou." },
  intro: "Chocotone recheado com caramelo cremoso e coberto com chocolate meio amargo e fios de caramelo.",
  dica: "Caramelo bom é cor de âmbar. Muito escuro, amarga; muito claro, fica só doce." });
make({ id: "trufado-70-flor-de-sal", sec: S, foto: "brigatone", emoji: "🧂", nome: "Panetone trufado 70% com flor de sal", base: "cacau",
  inc: [[180, "gotas de chocolate meio amargo forneáveis"]], rec: "ganache_70", cob: { k: "setenta", decor: "Salpique 1 pitada de flor de sal antes de firmar." },
  intro: "Chocolate intenso com um toque de sal que realça o cacau. Sofisticado e pouco doce.",
  dica: "Flor de sal vai só no topo, na hora de finalizar, para continuar crocante." });
make({ id: "trufado-ao-leite-crocante", sec: S, foto: "panetone-trufado", emoji: "🍫", nome: "Panetone trufado ao leite com crocante de arroz", base: "classica",
  inc: [[180, "gotas de chocolate ao leite forneáveis"]], rec: "ganache_leite", cob: { k: "leite", decor: "Misture 30 g de flocos de arroz crocantes ao chocolate antes de cobrir." },
  intro: "Recheio de ganache ao leite e cobertura crocante de chocolate com flocos de arroz.",
  dica: "Misture os flocos de arroz só na hora: eles amolecem se ficarem muito tempo no chocolate quente." });

/* ================= RECHEADOS (8) ================= */
S = "Premium · Recheados";
make({ id: "beijinho", sec: S, foto: "fest-coco", emoji: "🥥", nome: "Panetone recheado de beijinho", base: "classica", sem: ["aroma de panetone"], extras: [[5, "essência de baunilha"]],
  inc: [[60, "coco ralado seco sem açúcar"]], rec: "beijinho", cob: { k: "branco", decor: "Cubra com coco ralado." },
  intro: "Massa de baunilha com coco, recheio de beijinho e cobertura branca com coco ralado.",
  dica: "Coco ralado seco na massa absorve líquido: se a massa ficar dura, junte 1 colher de sopa de leite." });
make({ id: "prestigio", sec: S, foto: "kit-bombom", emoji: "🍫", nome: "Panetone prestígio", base: "cacau",
  inc: [[50, "coco ralado seco sem açúcar"]], rec: "beijinho", cob: "meio",
  intro: "Massa de cacau com recheio cremoso de coco e cobertura de chocolate meio amargo. O bombom virou panetone.",
  dica: "Deixe o beijinho esfriar totalmente antes de rechear: quente, ele escorre." });
make({ id: "pacoca", sec: S, foto: "biscoitos", emoji: "🥜", nome: "Panetone recheado de paçoca", base: "classica", sem: ["raspas de laranja", "aroma de panetone"], extras: [[5, "essência de baunilha"]],
  inc: [[120, "amendoim torrado sem sal picado"]], rec: "pacoca", cob: { k: "leite", decor: "Esfarele 2 paçocas por cima antes de firmar." }, alerg: ["amendoim"],
  intro: "Amendoim na massa, creme de paçoca no recheio e paçoca esfarelada por cima.",
  dica: "Paçoca de rolha esfarela mais fácil que a de tablete." });
make({ id: "cocada", sec: S, foto: "fest-coco", emoji: "🥥", nome: "Panetone recheado de cocada cremosa", base: "classica",
  inc: [[80, "coco em flocos"]], rec: "cocada", cob: { k: "glace", decor: "Salpique coco em flocos tostado." },
  intro: "Recheio de cocada cremosa feita com leite de coco, glacê e coco tostado por cima.",
  dica: "Coco ralado úmido (o de saquinho da geladeira) deixa a cocada mais macia que o seco." });
make({ id: "doce-de-leite-cafe", sec: S, foto: "fest-cafe", emoji: "☕", nome: "Panetone de doce de leite com café", base: "classica",
  inc: [[150, "gotas de chocolate ao leite forneáveis"]], rec: "doce_leite_cafe", cob: { k: "leite" },
  intro: "Doce de leite com café no recheio e chocolate ao leite na massa e na cobertura.",
  dica: "Doce de leite mole demais escorre: prefira o mais firme." });
make({ id: "goiabada", sec: S, foto: "fest-frutas-vermelhas", emoji: "🍬", nome: "Panetone recheado de goiabada", base: "classica", sem: ["aroma de panetone"], extras: [[5, "essência de baunilha"]],
  inc: [[120, "goiabada cascão em cubinhos"]], incNota: "Passe os cubinhos em farinha para não grudarem.", rec: "goiabada", cob: { k: "glace" },
  intro: "Goiabada em cubinhos na massa e goiabada cremosa no recheio. Clássico brasileiro em versão de Natal.",
  dica: "Corte a goiabada gelada: os cubinhos saem mais certinhos." });
make({ id: "banana-doce-de-leite", sec: S, foto: "panqueca", emoji: "🍌", nome: "Panetone de banana-passa com doce de leite", base: "classica", sem: ["raspas de laranja", "aroma de panetone"], extras: [[3, "canela em pó"]],
  inc: [[150, "banana-passa picada"]], rec: "doce_leite", cob: { k: "glace", decor: "Polvilhe canela por cima do glacê." },
  intro: "Banana-passa e canela na massa, recheio de doce de leite. Lembra banoffee.",
  dica: "Banana-passa gruda na faca: unte a faca com um fio de óleo para picar." });
make({ id: "amendoim-chocolate", sec: S, foto: "brigatone", emoji: "🥜", nome: "Panetone de amendoim com chocolate", base: "cacau",
  inc: [[100, "amendoim torrado sem sal picado"], [80, "gotas de chocolate ao leite forneáveis"]], rec: "amendoim", cob: { k: "leite", decor: "Salpique amendoim picado." }, alerg: ["amendoim"],
  intro: "Massa de cacau com amendoim, recheio de creme de amendoim com chocolate ao leite.",
  dica: "Use pasta de amendoim integral (100% amendoim) para o recheio não ficar doce demais." });

/* ================= SABORES BRASILEIROS (8) ================= */
S = "Premium · Sabores brasileiros";
make({ id: "cupuacu", sec: S, foto: "torta-limao", emoji: "🌳", nome: "Panetone de cupuaçu com chocolate", base: "cacau",
  inc: [[150, "gotas de chocolate branco forneáveis"]], rec: "cupuacu", cob: "meio",
  intro: "O azedinho perfumado do cupuaçu com chocolate: massa de cacau e recheio de ganache de cupuaçu.",
  dica: "A polpa congelada de cupuaçu é fácil de achar em supermercados; descongele na geladeira." });
make({ id: "rapadura-castanha", sec: S, foto: "panetone", emoji: "🟫", nome: "Panetone de rapadura com castanha-de-caju", base: "classica", sem: ["açúcar"], extras: [[100, "rapadura ralada (no lugar do açúcar)"]],
  inc: [[120, "castanha-de-caju torrada picada"]], cob: { k: "glace" }, alerg: ["castanha-de-caju"],
  intro: "A rapadura substitui o açúcar e deixa a massa com gosto de melado. Com castanha-de-caju.",
  dica: "Rale a rapadura no ralo fino; pedaços grandes não dissolvem na massa." });
make({ id: "acai", sec: S, foto: "fest-frutas-vermelhas", emoji: "🟣", nome: "Panetone de açaí com chocolate branco", base: "classica", sem: ["aroma de panetone", "raspas de laranja"], extras: [[15, "açaí em pó"]],
  inc: [[150, "gotas de chocolate branco forneáveis"]], rec: "acai", cob: { k: "branco", decor: "Polvilhe um pouco de açaí em pó." },
  intro: "Massa arroxeada com açaí em pó, chocolate branco e recheio de ganache de açaí.",
  dica: "Açaí em pó tem sabor suave; a cor fica mais bonita que o gosto forte. Combina com o chocolate branco." });
make({ id: "banana-canela", sec: S, foto: "panqueca", emoji: "🍌", nome: "Panetone de banana com canela", base: "classica", sem: ["aroma de panetone"], extras: [[4, "canela em pó"]],
  inc: [[130, "banana-passa picada"], [60, "nozes picadas"]], cob: { k: "glace", decor: "Polvilhe canela." }, alerg: ["nozes"],
  intro: "Banana-passa, canela e nozes: o sabor da banana caramelada da vó.",
  dica: "Para um toque de rapadura, troque metade do açúcar da massa por rapadura ralada." });
make({ id: "fuba-goiabada", sec: S, foto: "panetone-liquidificador", emoji: "🌽", nome: "Panetone de fubá com goiabada", base: "fuba",
  inc: [[150, "goiabada cascão em cubinhos"]], incNota: "Passe os cubinhos em farinha para não grudarem.", cob: { k: "glace" },
  intro: "Fubá e erva-doce na massa, cubinhos de goiabada: um panetone com cara de bolo de fubá da roça.",
  dica: "Use fubá mimoso (fininho). Fubá grosso deixa o miolo arenoso." });
make({ id: "jabuticaba", sec: S, foto: "fest-frutas-vermelhas", emoji: "🫐", nome: "Panetone de jabuticaba com chocolate branco", base: "classica", sem: ["aroma de panetone"], extras: [[5, "essência de baunilha"]],
  inc: [[150, "gotas de chocolate branco forneáveis"]], rec: "jabuticaba", cob: "branco",
  intro: "Geleia de jabuticaba e chocolate branco no recheio. Uma fruta brasileira que surpreende no Natal.",
  dica: "Sem geleia de jabuticaba? Use geleia de uva escura." });
make({ id: "pe-de-moleque", sec: S, foto: "biscoitos", emoji: "🥜", nome: "Panetone pé de moleque", base: "classica", sem: ["aroma de panetone"], extras: [[5, "essência de baunilha"]],
  inc: [[120, "amendoim torrado sem sal picado"]], rec: "doce_leite", cob: "praline", alerg: ["amendoim"],
  intro: "Amendoim na massa, doce de leite no recheio e pedaços de pé de moleque crocante por cima.",
  dica: "O pé de moleque endurece rápido: espalhe no papel-manteiga logo que juntar o amendoim." });
make({ id: "doce-de-leite-coco", sec: S, foto: "fest-doce-de-leite", emoji: "🥥", nome: "Panetone de doce de leite com coco queimado", base: "classica",
  inc: [[60, "coco em flocos tostado"]], rec: "doce_leite", cob: { k: "glace", decor: "Cubra com coco em flocos tostado." },
  intro: "Doce de leite no recheio, coco tostado na massa e por cima: lembra o doce de festa junina, no Natal.",
  dica: "Toste o coco em flocos numa frigideira seca, mexendo sempre: queima em segundos." });

/* ================= FRUTAS E CASTANHAS (8) ================= */
S = "Premium · Frutas e castanhas";
make({ id: "tropical", sec: S, foto: "fest-laranja", emoji: "🍍", nome: "Panetone de frutas tropicais", base: "classica",
  inc: [[70, "abacaxi desidratado picado"], [70, "manga desidratada picada"], [60, "mamão desidratado picado"]],
  intro: "Abacaxi, manga e mamão desidratados no lugar das frutas cristalizadas. Mais colorido e brasileiro.",
  dica: "Frutas desidratadas variam muito em umidade: se estiverem duras, hidrate 5 minutos em suco de laranja e seque bem." });
make({ id: "cranberry-laranja", sec: S, foto: "fest-laranja", emoji: "🍊", nome: "Panetone de cranberry com laranja", base: "classica", sem: ["raspas de laranja"], extras: [[8, "raspas de laranja"]],
  inc: [[120, "cranberry desidratado"], [60, "casca de laranja cristalizada picada"]], cob: { k: "glace", decor: "Use suco de laranja no glacê no lugar do limão." },
  intro: "Cranberry azedinho e bastante laranja: um panetone de frutas mais leve e perfumado.",
  dica: "Cranberry desidratado já vem adoçado e macio: não precisa hidratar." });
make({ id: "passas-rum", sec: S, foto: "panetone", emoji: "🍇", nome: "Panetone de passas ao rum", base: "classica",
  inc: [[180, "uvas-passas (pretas e brancas)"]], incTxt: "Na véspera ou 2 horas antes, deixe as passas de molho em 40 ml de rum (ou suco de uva). Escorra muito bem, seque no papel-toalha, envolva em 1 colher de farinha e incorpore à massa dobrando, sem sovar mais.",
  intro: "Passas hidratadas no rum para quem gosta de panetone de frutas com sabor marcante.",
  dica: "Quase todo o álcool evapora no forno, mas o aroma fica. Para servir crianças, troque o rum por suco de uva integral." });
make({ id: "maca-canela", sec: S, foto: "biscoitos", emoji: "🍎", nome: "Panetone de maçã com canela", base: "classica", sem: ["aroma de panetone"], extras: [[4, "canela em pó"]],
  inc: [[150, "maçã desidratada picada"], [50, "uvas-passas brancas"]], cob: { k: "glace", decor: "Polvilhe canela." },
  intro: "Maçã desidratada, passas brancas e canela: lembra torta de maçã.",
  dica: "Maçã fresca solta água e deixa o miolo cru. Use sempre a desidratada." });
make({ id: "tamaras-nozes", sec: S, foto: "fest-salgado", emoji: "🌴", nome: "Panetone de tâmaras e nozes", base: "classica",
  inc: [[120, "tâmaras sem caroço picadas"], [80, "nozes picadas"]], alerg: ["nozes"],
  intro: "Tâmaras macias e nozes: um panetone de frutas com sabor de caramelo natural.",
  dica: "Confira se as tâmaras estão mesmo sem caroço antes de picar." });
make({ id: "nozes-mel", sec: S, foto: "panetone-liquidificador", emoji: "🍯", nome: "Panetone de nozes e mel", base: "classica", sem: ["mel"], extras: [[40, "mel"]],
  inc: [[150, "nozes picadas"]], cob: { k: "glace", decor: "Regue com um fio de mel na hora de servir." }, alerg: ["nozes"],
  intro: "Mais mel na massa e muitas nozes. Simples e muito perfumado.",
  dica: "O mel a mais deixa a casca mais escura: cubra com papel-alumínio mais cedo." });
make({ id: "macadamia-branco", sec: S, foto: "kit-castanhas", emoji: "🤍", nome: "Panetone de macadâmia com chocolate branco", base: "brioche",
  inc: [[100, "macadâmias torradas picadas"], [100, "gotas de chocolate branco forneáveis"]], cob: { k: "branco", decor: "Salpique macadâmia picada." }, alerg: ["macadâmia"],
  intro: "A combinação clássica do cookie americano em panetone amanteigado.",
  dica: "Macadâmia queima fácil: toste só 5 minutos a 170 °C." });
make({ id: "castanhas-caramelizadas", sec: S, foto: "kit-castanhas", emoji: "🌰", nome: "Panetone de castanhas caramelizadas", base: "classica",
  inc: [[150, "mix de castanhas (caju, pará e amêndoas) caramelizadas e picadas"]], incNota: "Para caramelizar: derreta 50 g de açúcar até dourar, junte as castanhas, mexa 1 minuto, espalhe no papel-manteiga e pique depois de frio.",
  cob: { k: "glace" }, alerg: ["castanhas", "amêndoas"],
  intro: "Mix de castanhas caramelizadas, crocantes até dentro da massa.",
  dica: "Pique as castanhas caramelizadas em pedaços pequenos para não rasgar a massa." });

/* ================= MINIS, POTES E PRESENTES (12) ================= */
S = "Premium · Minis, potes e presentes";
make({ id: "mini-brigadeiro", sec: S, foto: "brigadeiro", emoji: "🍫", nome: "Mini panetone de brigadeiro", base: "cacau", fmt: "minis",
  inc: [[120, "gotas de chocolate forneáveis"]], rec: "brigadeiro", cob: { k: "meio", decor: "Cubra com granulado." }, tags: ["Forno", "Individual", "Recheado"],
  intro: "Minis de cacau recheados de brigadeiro e cobertos com chocolate e granulado. Ótimos para vender por unidade.",
  dica: "Minis recheados vão para a geladeira; tire 15 minutos antes de servir." });
make({ id: "mini-beijinho", sec: S, foto: "fest-coco", emoji: "🥥", nome: "Mini panetone de beijinho", base: "classica", fmt: "minis", sem: ["aroma de panetone"], extras: [[5, "essência de baunilha"]],
  inc: [[50, "coco ralado seco sem açúcar"]], rec: "beijinho", cob: { k: "branco", decor: "Passe o topo no coco ralado." }, tags: ["Forno", "Individual", "Recheado"],
  intro: "Minis de baunilha com coco, recheio de beijinho e topo de chocolate branco com coco.",
  dica: "Mergulhe o topo do mini no chocolate e logo depois no coco: fica mais caprichado do que espalhar." });
make({ id: "mini-doce-de-leite", sec: S, foto: "fest-doce-de-leite", emoji: "🍮", nome: "Mini panetone de doce de leite", base: "classica", fmt: "minis",
  inc: [[120, "gotas de chocolate ao leite forneáveis"]], rec: "doce_leite", cob: "leite", tags: ["Forno", "Individual", "Recheado"],
  intro: "Minis de chocolate ao leite recheados com doce de leite.",
  dica: "Bico perlé fino entra fácil no mini e não abre buraco grande." });
make({ id: "mini-veneziana", sec: S, foto: "mini-panetone", emoji: "🌰", nome: "Mini veneziana com amêndoas", base: "brioche", fmt: "minis",
  inc: [[80, "casca de laranja cristalizada picada"]], cob: "glassa", alerg: ["amêndoas"], tags: ["Forno", "Individual", "Presente"],
  intro: "A veneziana em versão individual, com glaçagem crocante de amêndoas. Presente elegante e barato.",
  dica: "Divida a glaçagem igualmente: 1 colher de chá rasa por mini." });
make({ id: "mini-confeitos", sec: S, foto: "chocotone", emoji: "🌈", nome: "Mini chocotone colorido", base: "classica", fmt: "minis", sem: ["raspas de laranja", "aroma de panetone"], extras: [[5, "essência de baunilha"]],
  inc: [[150, "gotas de chocolate forneáveis"]], cob: "confeitos", tags: ["Forno", "Individual", "Crianças"],
  intro: "Minis de chocolate com cobertura e confeitos coloridos. Feitos para as crianças (e para vender em festa de escola).",
  dica: "Confeitos coloridos soltam cor com umidade: salpique só depois que o chocolate começar a firmar." });
make({ id: "kit-degustacao", sec: S, foto: "kit-trufas", emoji: "🎁", nome: "Kit degustação: 3 sabores com uma massa", base: "classica", fmt: "minis",
  inc: [[60, "gotas de chocolate forneáveis"], [60, "frutas cristalizadas"], [60, "nozes picadas"]], alerg: ["nozes"], tags: ["Forno", "Individual", "Presente"],
  incTxt: "Divida a massa em 3 partes iguais. Em cada parte, incorpore um sabor dobrando a massa: gotas de chocolate numa, frutas cristalizadas na outra e nozes na terceira.",
  intro: "Uma massa só, três sabores: minis de chocolate, de frutas e de nozes para montar caixinhas de degustação.",
  dica: "Marque as forminhas de cada sabor com uma bolinha de caneta no papel por baixo para não misturar." });
custom({ id: "pote-brigadeiro", sec: S, foto: "pave-panetone", emoji: "🥄", nome: "Panetone no pote de brigadeiro",
  intro: "Camadas de chocotone, brigadeiro cremoso e chocolate. Rende potes para presentear ou vender.",
  tempo: 70, nivel: "Fácil", rende: "6 potes de 250 ml", tags: ["Sem forno", "Pote", "Presente"],
  ingredientes: ["1 chocotone de 500 g de qualquer receita da coleção (ou 400 g de sobras)", "1 lata de leite condensado (395 g)", "25 g de cacau em pó 100%", "15 g de manteiga", "200 g de creme de leite UHT", "50 g de granulado de chocolate", "6 potes de 250 ml com tampa"],
  passos: [{ t: "Brigadeiro cremoso: cozinhe o leite condensado, o cacau e a manteiga em fogo baixo, mexendo, até engrossar levemente (cerca de 7 minutos). Desligue e junte o creme de leite. Deixe amornar.", timer: 20 },
    { t: "Corte o chocotone em cubos de 2 cm." },
    { t: "Monte nos potes: cubos de chocotone, brigadeiro, mais cubos e termine com brigadeiro e granulado." },
    { t: "Tampe e leve à geladeira para firmar antes de servir.", timer: 60 }],
  dica: "Chocotone de 1 ou 2 dias fica melhor no pote: absorve o creme sem desmanchar.",
  aviso: "Contém glúten (trigo), leite e ovos. Doce de pote é perecível: mantenha na geladeira. Para vender, siga as boas práticas e as regras de rotulagem de alimentos." });
custom({ id: "pote-ninho-morango", sec: S, foto: "pave", emoji: "🍓", nome: "Panetone no pote de leite em pó com morango",
  intro: "Panetone em cubos, creme de leite em pó e morangos frescos: um pote que vende muito no Natal.",
  tempo: 70, nivel: "Fácil", rende: "6 potes de 250 ml", tags: ["Sem forno", "Pote", "Presente"],
  ingredientes: ["1 panetone de 500 g de qualquer receita da coleção", "1 lata de leite condensado (395 g)", "40 g de leite em pó", "15 g de manteiga", "200 g de creme de leite UHT", "250 g de morangos lavados, secos e picados", "6 potes de 250 ml com tampa"],
  passos: [{ t: "Creme: misture o leite em pó no leite condensado frio, junte a manteiga e cozinhe em fogo baixo, mexendo, até engrossar levemente (cerca de 7 minutos). Desligue, junte o creme de leite e deixe esfriar.", timer: 30 },
    { t: "Corte o panetone em cubos de 2 cm." },
    { t: "Monte nos potes: panetone, creme, morangos e repita, terminando com creme e um morango por cima." },
    { t: "Tampe e leve à geladeira antes de servir.", timer: 60 }],
  dica: "Seque bem os morangos depois de lavar: água deixa o creme ralo.",
  aviso: "Contém glúten (trigo), leite e ovos. Com fruta fresca e creme, é perecível: mantenha na geladeira e consuma logo. Para vender, siga as boas práticas e as regras de rotulagem de alimentos." });
custom({ id: "pote-cafe", sec: S, foto: "pave-panetone", emoji: "☕", nome: "Panetone no pote de café com creme (estilo tiramisu)",
  intro: "Panetone umedecido com café, creme de mascarpone e cacau: a sobremesa italiana com o panetone no lugar do biscoito.",
  tempo: 75, nivel: "Fácil", rende: "6 potes de 250 ml", tags: ["Sem forno", "Pote", "Café"],
  ingredientes: ["1 panetone ou chocotone de 500 g de qualquer receita da coleção", "200 ml de café forte, frio", "250 g de mascarpone (ou cream cheese)", "200 g de creme de leite fresco bem gelado", "80 g de açúcar", "Cacau em pó para polvilhar", "6 potes de 250 ml com tampa"],
  passos: [{ t: "Bata o creme de leite gelado com o açúcar até ficar em ponto de chantili mole. Junte o mascarpone e bata só até misturar." },
    { t: "Corte o panetone em cubos de 2 cm." },
    { t: "Monte nos potes: panetone, regue com café (cerca de 2 colheres de sopa por camada), creme, e repita. Termine com creme." },
    { t: "Polvilhe cacau, tampe e leve à geladeira para firmar.", timer: 60 }],
  dica: "Regue o café aos poucos: panetone encharcado desmancha.",
  aviso: "Contém glúten (trigo), leite e ovos. Creme com mascarpone é perecível: mantenha na geladeira e consuma logo. Para vender, siga as boas práticas e as regras de rotulagem de alimentos." });
custom({ id: "tranca", sec: S, foto: "pao-de-mel", emoji: "🥨", nome: "Trança natalina recheada de doce de leite",
  intro: "A massa de panetone aberta, recheada de doce de leite e nozes e trançada. Fica linda na mesa e é mais fácil que parece.",
  tempo: 330, nivel: "Médio", rende: "1 trança grande (cerca de 1,2 kg)", tags: ["Forno", "Fermentação", "Presente"],
  ingredientes: ["Massa: 500 g de farinha de trigo", "175 g de leite", "100 g de ovos (2 ovos médios)", "85 g de açúcar", "90 g de manteiga em temperatura ambiente", "8 g de fermento biológico seco", "8 g de sal", "15 g de mel", "5 g de raspas de laranja", "Recheio: 250 g de doce de leite firme", "80 g de nozes picadas", "Para pincelar: 1 gema batida com 1 colher de leite", "Para finalizar: 100 g de açúcar de confeiteiro + 20 ml de água (glacê)"],
  passos: [H.esponja("todo o leite", true),
    { t: "Junte o restante da farinha e os demais ingredientes da massa, menos o sal e a manteiga. Sove 8 minutos até ficar lisa." },
    H.gordura("a manteiga"), H.CRESCE1,
    { t: "Abra a massa num retângulo de cerca de 40 x 30 cm. Espalhe o doce de leite deixando 2 cm livres nas bordas e salpique as nozes. Enrole pelo lado comprido, como rocambole." },
    { t: "Corte o rolo ao meio no comprimento, com uma faca afiada, deixando uma ponta presa. Trance as duas metades com o recheio virado para cima e coloque numa assadeira forrada, em formato de coroa ou reta." },
    { t: "Cubra e deixe crescer até ficar bem fofa (não precisa dobrar).", timer: 60 },
    { t: "Pincele a gema e asse em forno preaquecido a 170 °C por 30 a 40 minutos, até dourar e soar oco ao bater por baixo. Se dourar rápido, cubra com papel-alumínio.", timer: 35 },
    { t: "Espere esfriar sobre uma grade e faça fios de glacê por cima.", timer: 60 }],
  dica: "O corte no comprimento deixa as camadas de recheio à mostra: é isso que faz a trança ficar bonita.",
  aviso: "Contém glúten (trigo), leite, ovos e nozes. " + H.TRIGO.slice(H.TRIGO.indexOf("Os tempos")) });
custom({ id: "guirlanda", sec: S, foto: "capa-ceia", emoji: "🎄", nome: "Guirlanda de panetone para compartilhar",
  intro: "Bolinhas de massa de panetone com frutas montadas em forma de coroa: cada um puxa a sua. Centro de mesa comestível.",
  tempo: 360, nivel: "Médio", rende: "1 guirlanda com 16 bolinhas", tags: ["Forno", "Fermentação", "Presente"],
  ingredientes: ["500 g de farinha de trigo", "175 g de leite", "100 g de ovos (2 ovos médios)", "85 g de açúcar", "90 g de manteiga em temperatura ambiente", "8 g de fermento biológico seco", "8 g de sal", "15 g de mel", "5 g de raspas de laranja", "4 g de aroma de panetone", "100 g de frutas cristalizadas", "100 g de uvas-passas", "Para pincelar: 1 gema batida com 1 colher de leite", "Para finalizar: 30 g de açúcar de confeiteiro"],
  passos: [H.esponja("todo o leite", true),
    { t: "Junte o restante da farinha e os demais ingredientes, menos o sal e a manteiga. Sove 8 minutos até ficar lisa." },
    H.gordura("a manteiga"),
    { t: "Hidrate as passas 10 minutos em água morna, seque bem e incorpore com as frutas, dobrando a massa." },
    H.CRESCE1,
    { t: "Divida em 16 bolinhas de cerca de 75 g. Unte uma forma de pudim grande (ou coloque um copo untado no centro de uma assadeira redonda) e arrume as bolinhas em duas voltas, encostadas." },
    { t: "Cubra e deixe crescer até as bolinhas se encostarem bem.", timer: 75 },
    { t: "Pincele a gema e asse em forno preaquecido a 170 °C por 30 a 35 minutos, até dourar e o palito sair seco.", timer: 35 },
    { t: "Desenforme morna e, depois de fria, polvilhe açúcar de confeiteiro.", timer: 60 }],
  dica: "Decore o centro com um laço vermelho ou ramos de alecrim só na hora de servir.",
  aviso: H.TRIGO });
custom({ id: "pao-de-panetone", sec: S, foto: "panetone-liquidificador", emoji: "🍞", nome: "Pão de panetone de forma (para fatiar)",
  intro: "A massa de panetone assada em forma de bolo inglês: fatias retas, perfeitas para torrar no café da manhã ou montar cestas.",
  tempo: 420, nivel: "Médio", rende: "2 pães de forma de 25 cm", tags: ["Forno", "Fermentação", "Café da manhã"],
  ingredientes: ["500 g de farinha de trigo", "175 g de leite", "100 g de ovos (2 ovos médios)", "85 g de açúcar", "90 g de manteiga em temperatura ambiente", "8 g de fermento biológico seco", "8 g de sal", "15 g de mel", "5 g de raspas de laranja", "4 g de aroma de panetone", "100 g de frutas cristalizadas", "100 g de uvas-passas", "2 formas de bolo inglês de 25 cm untadas"],
  passos: [H.esponja("todo o leite", true),
    { t: "Junte o restante da farinha e os demais ingredientes, menos o sal e a manteiga. Sove 8 minutos até ficar lisa." },
    H.gordura("a manteiga"),
    { t: "Hidrate as passas 10 minutos em água morna, seque bem e incorpore com as frutas, dobrando a massa." },
    H.CRESCE1,
    { t: "Divida em 2 partes. Abra cada uma num retângulo do comprimento da forma, enrole bem apertado e coloque na forma com a emenda para baixo." },
    { t: "Cubra e deixe crescer até passar 1 cm da borda da forma.", timer: 90 },
    { t: "Asse em forno preaquecido a 170 °C por 35 a 40 minutos, até dourar e soar oco ao bater na base.", timer: 38 },
    { t: "Desenforme e espere esfriar totalmente sobre uma grade antes de fatiar.", timer: 120 }],
  dica: "Fatias de pão de panetone do dia seguinte ficam ótimas na frigideira com manteiga ou como rabanada.",
  aviso: H.TRIGO });

/* ================= SALGADOS (6) ================= */
S = "Premium · Salgados";
function salgado(o) {
  o.base = "salgada"; o.sec = S; o.tags = ["Forno", "Fermentação", "Salgado"];
  o.incTxt = o.incTxt || ("Incorpore o recheio, bem frio e escorrido, dobrando a massa, sem sovar mais.");
  make(o);
}
salgado({ id: "calabresa-queijo", foto: "fest-salgado", emoji: "🧀", nome: "Panetone salgado de calabresa com queijo",
  inc: [[150, "calabresa defumada em cubinhos, dourada e escorrida"], [120, "queijo muçarela em cubinhos"], [3, "orégano"]],
  intro: "Calabresa dourada e cubinhos de queijo na massa de panetone. Lanche de Natal que agrada todo mundo.",
  dica: "Doure a calabresa e escorra bem no papel-toalha: a gordura atrapalha o crescimento." });
salgado({ id: "presunto-queijo", foto: "pao-de-alho", emoji: "🥪", nome: "Panetone salgado de presunto e queijo",
  inc: [[150, "presunto em cubinhos"], [150, "queijo prato em cubinhos"]],
  intro: "O misto quente em versão panetone: presunto e queijo em cubinhos.",
  dica: "Cubinhos de queijo gelados derretem menos e ficam como bolsinhas dentro do miolo." });
salgado({ id: "frango-requeijao", foto: "frango-assado", emoji: "🍗", nome: "Panetone salgado de frango com requeijão", pere: true,
  inc: [[200, "frango cozido e desfiado, temperado e frio"], [60, "milho-verde escorrido e seco"]], rec: null,
  incTxt: "Incorpore o frango e o milho, bem frios e secos, dobrando a massa. Depois de dividir e bolear cada parte, abra a bolinha, coloque 2 colheres de sopa de requeijão cremoso (100 g no total) no centro, feche bem e coloque na forma com a emenda para baixo.",
  maisIng: ["Para o centro: 100 g de requeijão cremoso firme"],
  aviso: "Contém glúten (trigo), leite e ovos. Com frango e requeijão, é perecível: depois de frio, guarde na geladeira e aqueça antes de servir. Para vender, siga as boas práticas e as regras de rotulagem de alimentos.",
  intro: "Frango temperado e milho na massa e um coração de requeijão. Ótimo para o lanche da tarde de Natal.",
  dica: "Requeijão de copo escorre: prefira o de bisnaga, mais firme." });
salgado({ id: "tomate-azeitona", foto: "fest-salgado", emoji: "🫒", nome: "Panetone salgado de tomate seco e azeitona",
  inc: [[100, "tomate seco escorrido e picado"], [80, "azeitonas pretas sem caroço picadas"], [5, "orégano e manjericão secos"]],
  intro: "Tomate seco, azeitonas e ervas: um panetone salgado mediterrâneo para servir com frios.",
  dica: "Seque bem o tomate seco no papel-toalha: o óleo deixa o miolo pesado." });
salgado({ id: "bacon-cheddar", foto: "pao-de-alho", emoji: "🥓", nome: "Panetone salgado de bacon com cheddar",
  inc: [[130, "bacon em cubinhos, frito e escorrido"], [130, "queijo cheddar em cubinhos"]],
  intro: "Bacon crocante e cheddar: o salgado mais pedido para festas.",
  dica: "Frite o bacon até ficar crocante: mole, ele solta gordura dentro da massa." });
salgado({ id: "alho-parmesao", foto: "pao-de-alho", emoji: "🧄", nome: "Panetone salgado de alho e parmesão",
  inc: [[120, "queijo parmesão ralado grosso"], [20, "alho picado e dourado no azeite, escorrido"], [5, "salsinha seca"]],
  intro: "Com cheiro de pão de alho: parmesão, alho dourado e salsinha. Acompanha bem a ceia salgada.",
  dica: "Doure o alho em fogo baixo: queimado, ele amarga a massa toda." });

/* ================= BÔNUS DO PREMIUM (7) ================= */
var PB = function (o) { o.produto = "panetones_premium"; o.col = "panetones"; window.GUIAS.push(o); };

PB({ id: "recheios-coberturas", emoji: "🍫", nome: "Recheios e Coberturas que Resolvem",
  sub: "6 preparações-base, como aplicar, quanto usar e como guardar",
  itens: [
    { n: "Como usar", t: "Estas são as 6 bases usadas na coleção. Cada uma rende para 2 a 3 panetones de 500 g. As quantidades por panetone são proporções de partida: comece pela menor e anote o resultado. Ganaches com creme de leite são perecíveis; aqui não há prazos de validade, porque eles dependem de como você prepara, embala e guarda." },
    { n: "1. Ganache clássica (500 g)", t: "300 g de chocolate meio amargo + 200 g de creme de leite UHT.\nPreparo: pique o chocolate. Aqueça o creme até as bordas borbulharem, despeje sobre o chocolate, espere 2 minutos e mexa do centro para fora até ficar liso e brilhante.\nPonto de rechear (bisnaga): cerca de 1 hora em temperatura ambiente.\nUso: 150 g por panetone de 500 g para começar; até 250 g se a massa aguentar." },
    { n: "2. Ganache branca (500 g)", t: "350 g de chocolate branco + 150 g de creme de leite UHT.\nPreparo: aqueça o creme só até soltar vapor (chocolate branco queima fácil) e siga como a clássica.\nÉ mais mole: se precisar, leve 15 a 20 minutos à geladeira antes de rechear.\nUso: 150 g por panetone; também serve de base para sabores (geleias, polpas, pistache, limão)." },
    { n: "3. Doce de leite com castanhas (480 g)", t: "400 g de doce de leite firme + 80 g de castanhas-de-caju torradas e picadas.\nPreparo: mexa o doce de leite até ficar liso. Para injetar, use o doce de leite puro (castanha entope o bico) e misture as castanhas só na parte que vai por cima.\nUso: 150 g injetados + 50 g no topo por panetone." },
    { n: "4. Ganache de laranja (505 g)", t: "300 g de chocolate meio amargo + 200 g de creme de leite UHT + 5 g de raspas de laranja.\nPreparo: aqueça o creme com as raspas, deixe 5 minutos tampado para perfumar e siga como a clássica (se quiser, coe as raspas).\nUso: 150 a 250 g por panetone. Combina com massas de laranja e chocolate." },
    { n: "5. Cobertura crocante (320 g)", t: "220 g de chocolate + 60 g de amêndoas torradas picadas + 40 g de castanhas-de-caju torradas picadas.\nPreparo: derreta o chocolate (fracionado não precisa temperar), misture as castanhas e aplique no topo do panetone frio.\nUso: 80 a 100 g por panetone grande; o que sobrar vira barrinha crocante no papel-manteiga." },
    { n: "6. Cobertura branca com laranja (280 g)", t: "250 g de chocolate branco + 30 g de casca de laranja cristalizada picada fininha.\nPreparo: derreta o chocolate branco devagar (de 20 em 20 segundos no micro-ondas), espalhe no topo e salpique a casca antes de firmar.\nUso: 80 a 100 g por panetone grande ou 25 g por mini." },
    { n: "Como injetar o recheio", t: "Só no panetone totalmente frio. Faça 3 ou 4 furos na base com o cabo de uma colher de pau, use saco de confeitar com bico liso fino (perlé) e distribua o recheio entre os furos, apertando devagar. Pare quando sentir resistência ou ver a massa rachar." },
    { n: "Como cobrir", t: "Coloque o panetone sobre uma grade com uma assadeira por baixo. Despeje a cobertura no centro do topo e espalhe com as costas da colher até a borda, deixando escorrer. Decore antes de firmar." },
    { n: "Controle de temperatura", t: "Creme de leite: até as bordas borbulharem (sem ferver forte).\nChocolate meio amargo derretido: até cerca de 45 °C; branco e ao leite: até cerca de 40 °C.\nTemperagem do chocolate nobre: derreta, esfrie mexendo até cerca de 30 °C (meio amargo) ou 28 °C (ao leite e branco) e use. Chocolate fracionado dispensa temperagem.\nSão referências de orientação; as embalagens dos chocolates costumam trazer as temperaturas recomendadas." },
    { n: "Escalonamento", t: "Todas as bases são proporcionais: para dobrar, dobre tudo. Exemplos: ganache clássica para 6 panetones (150 g cada = 900 g): 540 g de chocolate + 360 g de creme. Ganache branca para 6 (900 g): 630 g de chocolate branco + 270 g de creme. Faça em tigelas largas: grandes volumes demoram mais para firmar." },
    { n: "Alergênicos", t: "Ganaches e coberturas: leite (e soja, se o chocolate tiver lecitina de soja). Doce de leite: leite. Crocante: castanhas e amêndoas. Confira sempre o rótulo do chocolate: muitos têm traços de castanhas, amendoim e glúten." },
    { n: "Conservação", t: "Panetones recheados ou cobertos com ganache vão para a geladeira. Recheio com doce de leite puro e coberturas só de chocolate aguentam melhor fora, em lugar fresco e seco, mas cada caso depende da embalagem e do clima. Para vender, defina a validade com base nas boas práticas e, se possível, com orientação técnica." }
  ] });

PB({ id: "custos-preco-lucro", emoji: "💰", nome: "Como calcular custos, preços e lucro dos seus panetones",
  sub: "Ficha de custos, margem, markup e orçamento, com calculadora", calc: "preco",
  itens: [
    { n: "Antes de tudo: as palavras certas", t: "Faturamento: tudo o que entra das vendas.\nCusto: tudo o que você gasta para produzir e entregar.\nMargem bruta: preço de venda menos o custo direto do produto.\nResultado estimado: o que sobra depois de todos os custos que você consegue medir.\nLucro líquido: o que sobra de verdade depois de todos os custos, taxas e impostos. Vender muito não quer dizer lucrar muito." },
    { n: "1. Ingredientes", t: "Para cada ingrediente: (preço do pacote ÷ peso do pacote) × quantidade usada.\nExemplo: farinha de 1 kg a R$ 6,00 → R$ 0,006 por grama. A receita usa 500 g → R$ 3,00.\nSome todos os ingredientes da receita: esse é o custo da fornada. A Central PRO faz essa conta para cada receita da coleção." },
    { n: "2. Embalagem", t: "Some cada item (saco, fita, etiqueta, caixa) dividido pela quantidade do pacote. Use a calculadora do bônus Embalagens e Presentes." },
    { n: "3. Energia e gás", t: "Uma forma prática: estime o custo de 1 hora de forno (botijão ou conta de luz ÷ horas de uso) e multiplique pelas horas da fornada. Se for difícil medir, some uma porcentagem fixa (por exemplo, 5% do custo dos ingredientes) e ajuste com a experiência." },
    { n: "4. Mão de obra", t: "Seu tempo vale dinheiro. Defina quanto quer ganhar por hora e multiplique pelas horas de trabalho ativo da fornada (sova, montagem, recheio, embalagem). Se não incluir, o preço parece bom mas você trabalha de graça." },
    { n: "5. Perdas", t: "Panetone que racha, queima ou não cresce também custa. Some uma reserva de perdas (por exemplo, 5% a 10% do custo) até ter seus próprios números de perda no controle de lotes." },
    { n: "6. Taxas e impostos", t: "Maquininha, Pix com taxa, aplicativo de entrega e marketplace cobram uma porcentagem do preço. Se você for MEI ou tiver empresa, há impostos. Coloque essas porcentagens na calculadora: elas são calculadas sobre o preço de venda, não sobre o custo." },
    { n: "7. Margem e markup", t: "Margem é a porcentagem do preço que sobra depois do custo. Markup é o número pelo qual você multiplica o custo para chegar ao preço.\nExemplo: custo de R$ 20 e margem desejada de 50% → preço de R$ 40. Markup = 2.\nCuidado: markup 2 não é margem de 100%. É margem de 50%." },
    { n: "8. Exemplo completo", t: "Fornada de 2 panetones trufados: ingredientes R$ 48,00 + embalagem R$ 3,00 × 2 = R$ 6,00 + energia R$ 4,00 + mão de obra 2 h × R$ 15 = R$ 30,00 + perdas de 5% sobre ingredientes, energia e mão de obra (R$ 4,10). Total: R$ 92,10 → R$ 46,05 por panetone. São os mesmos números do exemplo da calculadora abaixo.\nCom taxa de 5% e margem de 30%, o preço sugerido fica perto de R$ 71. Os números do exemplo são ilustrativos: use os preços da sua cidade." },
    { n: "9. Compare com o mercado", t: "Depois de calcular, veja quanto se cobra por panetones parecidos na sua região. Se o seu preço ficou muito acima, revise custos e tamanho; se ficou muito abaixo, não baixe o preço: aumente o valor percebido (embalagem, recheio, personalização)." },
    { n: "10. Orçamento para encomendas", t: "Modelo: “Olá, [nome]! Segue o orçamento: [qtd] × [produto] = R$ [valor]. Embalagem para presente: R$ [valor]. Entrega: R$ [valor]. Total: R$ [valor]. Para confirmar, pedimos [sinal]% de sinal. Entrega em [data].”\nSempre coloque prazo de validade do orçamento e a data de entrega." }
  ] });

PB({ id: "checklist-producao", emoji: "✅", nome: "Checklist de Produção Natalina",
  sub: "Compras, ingredientes, formas, forno, pedidos, embalagem e entrega",
  itens: [
    { n: "Planejamento", t: "Comece pelo que você consegue entregar, não pelo que gostaria de vender. Faça uma fornada de teste, anote o tempo total e quantos panetones cabem no seu forno. Esse é o seu limite por dia." },
    { n: "Capacidade do forno", t: "Meça: quantas formas de 500 g cabem na grade do meio sem encostar? Em forno doméstico costumam caber 2 a 4. Cada fornada leva cerca de 40 minutos. Duas grades ao mesmo tempo assam de forma desigual: prefira uma de cada vez." },
    { n: "Quantidade de formas e espetos", t: "Uma forma por panetone (as de papel não se reaproveitam) e 2 espetos por panetone para esfriar. Compre 10% a mais de formas para perdas." },
    { n: "Checklist de compras", t: "☐ Farinha, açúcar, sal, fermento (confira validade)\n☐ Manteiga, leite, ovos\n☐ Frutas, gotas, castanhas da semana\n☐ Chocolate e creme de leite para recheios\n☐ Formas de papel e espetos\n☐ Sacos para alimentos, fitas, etiquetas, caixas\n☐ Gás ou energia suficiente" },
    { n: "Organização dos ingredientes", t: "Separe e pese os ingredientes de cada fornada em potes antes de começar (o famoso mise en place). Deixe manteiga e ovos fora da geladeira 1 hora antes. Etiquete os potes com o nome da receita." },
    { n: "Cronograma de um dia de produção", t: "Manhã: esponjas e sovas, uma receita depois da outra, em intervalos de 30 minutos.\nMeio do dia: fermentações e divisão.\nTarde: fornadas em sequência.\nNoite: panetones esfriando de cabeça para baixo.\nDia seguinte: recheio, cobertura, embalagem e entrega." },
    { n: "Controle de pedidos", t: "Para cada pedido anote: cliente, telefone, produto, quantidade, embalagem, data e horário de entrega, valor, sinal pago e endereço. A Agenda de Produção da Central PRO faz isso e soma os panetones por dia." },
    { n: "Checklist de produção (por fornada)", t: "☐ Ingredientes pesados\n☐ Esponja espumou\n☐ Massa no ponto de véu\n☐ 1ª fermentação: dobrou\n☐ Divisão e boleamento no peso\n☐ 2ª fermentação: 1 a 2 cm da borda\n☐ Forno preaquecido\n☐ Palito seco\n☐ Esfriando de cabeça para baixo\n☐ Lote anotado (data, receita, quantidade)" },
    { n: "Checklist de embalagem", t: "☐ Panetone totalmente frio\n☐ Saco para alimentos fechado\n☐ Etiqueta: nome, data, ingredientes alergênicos\n☐ “Manter na geladeira” nos recheados\n☐ Embalagem externa e cartão" },
    { n: "Checklist de entrega", t: "☐ Pedido conferido com o cliente\n☐ Pagamento confirmado\n☐ Recheados na geladeira até sair\n☐ Transporte na horizontal, sem peso por cima\n☐ Mensagem de entrega enviada\n☐ Mensagem de pós-venda agendada" },
    { n: "Segurança dos alimentos", t: "Cabelo preso, mãos lavadas, bancada limpa, ingredientes dentro da validade, ovos sem rachaduras, recheios com creme de leite na geladeira. Se for vender, procure o curso de boas práticas de manipulação (há opções gratuitas, como no Sebrae) e informe-se sobre as regras da sua cidade." }
  ] });

PB({ id: "kit-vendas", emoji: "📣", nome: "Kit de Vendas de Natal",
  sub: "Cardápio, mensagens de WhatsApp, legendas, stories e checklist de pré-venda",
  itens: [
    { n: "Regras do kit", t: "Use estes textos como ponto de partida e troque pelos seus dados, preços e prazos. Não prometa o que não vai conseguir entregar, não diga que o produto dura um prazo que você não verificou e não ofereça sabores que ainda não testou na sua cozinha." },
    { n: "Cardápio-modelo", t: "🎄 PANETONES DE NATAL — [SEU NOME]\nEncomendas até [data] · Entregas de [data] a [data]\n\nClássicos (500 g)\n• Tradicional de frutas — R$ ___\n• Chocotone — R$ ___\n\nTrufados (500 g)\n• Trufado de chocolate — R$ ___\n• Trufado de [sabor] — R$ ___\n\nMinis (100 g)\n• Caixa com 3 sabores — R$ ___\n\nEmbalagem para presente: R$ ___\nPedidos: [WhatsApp]" },
    { n: "WhatsApp · primeiro contato", t: "“Oi, [nome]! Tudo bem? Este ano estou fazendo panetones artesanais para o Natal 🎄 Posso te mandar o cardápio?”" },
    { n: "WhatsApp · envio do cardápio", t: "“Aqui está o cardápio! Os panetones são feitos sob encomenda, em pequenas quantidades. As encomendas vão até [data] ou até completar a minha capacidade de produção. Qual sabor te interessou?”" },
    { n: "WhatsApp · confirmação de pedido", t: "“Pedido confirmado! ✅\n[qtd] × [produto] — R$ [valor]\nEntrega: [data], [horário], [endereço]\nTotal: R$ [valor] (sinal de R$ [valor] recebido)\nQualquer mudança, me avise até [data]. Obrigada pela confiança!”" },
    { n: "WhatsApp · produto indisponível", t: "“Que pena, o [sabor] já esgotou para essa data 😕 Posso te oferecer o [alternativa] ou o mesmo sabor para entrega em [outra data]. O que prefere?”" },
    { n: "WhatsApp · instruções de conservação", t: "“Seu panetone chegou! 🎁 Os recheados com ganache devem ficar na geladeira: tire uns 15 minutos antes de servir. Os clássicos ficam bem em lugar fresco e seco, na embalagem fechada.” (Adapte ao que você definiu para cada produto.)" },
    { n: "WhatsApp · acompanhamento", t: "“Oi, [nome]! Só lembrando: seu panetone fica pronto em [data] e a entrega é às [horário]. Está tudo certo com o endereço?”" },
    { n: "WhatsApp · pós-venda", t: "“Oi, [nome]! E aí, o que acharam do panetone? 😊 Se puder, me mande uma foto ou um comentário: ajuda muito quem está começando. E se quiser repetir para o Ano Novo, ainda tenho algumas vagas.”" },
    { n: "Legendas para o Instagram", t: "1. “Massa que leva o dia inteiro para ficar pronta. Panetone de verdade não tem pressa 🎄 Encomendas no direct.”\n2. “Trufado ou tradicional? Me conta nos comentários qual é o seu time.”\n3. “Presente que se come, feito à mão e embalado com carinho. Encomendas até [data].”\n4. “Últimas vagas para entrega antes do Natal. Chama no WhatsApp: [número].”\n5. “Bastidores: 4 horas de fermentação para chegar nesse miolo.”" },
    { n: "Sequência de stories (7 dias)", t: "Dia 1: bastidores da massa (vídeo da sova e do véu).\nDia 2: enquete “trufado ou tradicional?”.\nDia 3: foto do miolo cortado + cardápio.\nDia 4: caixa de presente montada + preço.\nDia 5: caixinha de perguntas sobre sabores.\nDia 6: aviso de vagas restantes (só se for verdade).\nDia 7: foto de cliente (com autorização) + link do WhatsApp." },
    { n: "Orçamento para empresas", t: "“Olá! Segue a proposta para [empresa]: [qtd] mini panetones em caixa individual com tag personalizada, R$ [valor] cada, total R$ [valor]. Prazo de produção: [dias] dias após a confirmação. Sinal de [x]% para reservar a data.”" },
    { n: "Indicadores para acompanhar", t: "Pedidos por dia · ticket médio (total vendido ÷ número de pedidos) · sabores mais vendidos · custo por unidade × preço · quantas pessoas pediram cardápio e quantas compraram · panetones perdidos por fornada." },
    { n: "Checklist de pré-venda", t: "☐ Cardápio com preços revisados\n☐ Capacidade de produção definida (por dia)\n☐ Data-limite de encomendas\n☐ Forma de pagamento e sinal definidos\n☐ Regras de entrega e retirada\n☐ Fotos dos seus panetones (reais)\n☐ Mensagens prontas no WhatsApp\n☐ Planilha ou Agenda PRO para os pedidos" }
  ] });

PB({ id: "calendario-producao", emoji: "📅", nome: "Calendário de Produção e Entregas",
  sub: "Como distribuir pedidos nas semanas de Natal sem se sobrecarregar",
  itens: [
    { n: "Para que serve", t: "O checklist mostra o que fazer; o calendário mostra quando. Ele evita o erro mais comum de quem vende panetone: aceitar pedidos demais para a mesma semana. Use junto com a Agenda de Produção da Central PRO, que soma os panetones de cada dia." },
    { n: "1. Descubra sua capacidade", t: "Capacidade por dia = panetones por fornada × fornadas que você consegue fazer no dia.\nExemplo: 3 por fornada × 4 fornadas = 12 panetones por dia. Dias de produção na semana: 4 → 48 por semana." },
    { n: "2. Separe dias de produção e dias de entrega", t: "Produzir e entregar no mesmo dia cansa e atrasa. Um modelo que funciona: segunda a quinta produção; sexta e sábado acabamento, embalagem e entrega." },
    { n: "3. Calendário de referência", t: "Até 15/11: testes de receitas e fotos.\n15/11 a 25/11: abertura das encomendas e pedidos de empresas.\n26/11 a 10/12: produção das encomendas corporativas.\n11/12 a 21/12: pico de produção para famílias.\n22/12 e 23/12: entregas finais.\n26/12 a 30/12: Ano Novo (sabores e minis).\nAjuste as datas ao seu ritmo." },
    { n: "4. Data-limite de encomendas", t: "Feche a agenda de cada semana quando atingir a capacidade. A data-limite não é marketing: é o dia em que o seu forno lota." },
    { n: "5. Identifique a sobrecarga", t: "Sinais: pedidos do dia acima da capacidade, fornadas até tarde da noite, recheio feito às pressas. Solução: ofereça outra data, aumente o preço da semana mais procurada ou tire do cardápio os sabores que levam mais tempo." },
    { n: "6. Planejamento semanal", t: "Todo domingo: confira os pedidos da semana na Agenda, faça a lista de compras, separe formas e embalagens e defina quais receitas saem em cada dia." },
    { n: "Modelo de semana", t: "Seg: 2 fornadas de clássicos + esponjas dos trufados.\nTer: 3 fornadas de chocotones.\nQua: 2 fornadas de minis + recheios.\nQui: recheio e cobertura dos trufados.\nSex: embalagem e entregas.\nSáb: entregas e retirada.\nDom: descanso e planejamento." }
  ] });

PB({ id: "fichas-lotes", emoji: "🗂️", nome: "Fichas Técnicas e Controle de Lotes",
  sub: "Modelo de ficha técnica e como registrar cada fornada",
  itens: [
    { n: "Para que serve", t: "A ficha técnica padroniza a receita: quem fizer seguindo a ficha deve chegar ao mesmo resultado. O controle de lotes registra o que aconteceu em cada fornada. Com os dois, você sabe o custo real, o rendimento real e consegue repetir o que deu certo. A Central PRO tem o controle de lotes pronto no app." },
    { n: "Modelo de ficha técnica", t: "Nome da receita · versão · data\nIngredientes com peso em gramas\nPeso total da massa crua\nDivisão: peso por forma e número de unidades\nEquipamentos: batedeira, forma, forno\nTempos: esponja, 1ª e 2ª fermentação, forno\nTemperatura do forno\nPeso médio assado e perda (%)\nRecheio e cobertura por unidade\nAlergênicos\nCusto por unidade\nObservações" },
    { n: "Como identificar o lote", t: "Use um código simples: data + número da fornada. Exemplo: L-0512-2 = segunda fornada do dia 05/12. Escreva o código na etiqueta do panetone. Se um cliente reclamar, você sabe exatamente qual fornada foi." },
    { n: "O que registrar em cada lote", t: "Código · data · receita · quantidade · peso cru por unidade · peso assado · perda (%) · temperatura da cozinha · tempo de cada fermentação · tempo de forno · resultado (bom, ajustar, descartado) · observações." },
    { n: "Peso cru, peso final e perda", t: "Pese a massa ao colocar na forma (peso cru) e o panetone frio (peso final).\nPerda (%) = (peso cru − peso final) ÷ peso cru × 100.\nAcompanhe a perda: se ela muda muito de uma fornada para outra, alguma coisa mudou (forno, tempo, tamanho)." },
    { n: "Rendimento", t: "Rendimento real = unidades boas ÷ unidades planejadas. Se de 10 minis você vende 9, seu rendimento é 90%. Use esse número no cálculo de perdas do bônus de custos." },
    { n: "Revisão da ficha", t: "Quando mudar algo (marca da farinha, tempo de forno, peso por forma), crie uma nova versão da ficha com a data. Nunca apague a anterior: ela mostra o caminho até a receita ideal." }
  ] });

PB({ id: "montador-kits", emoji: "🧺", nome: "Montador de Cardápios e Kits Natalinos",
  sub: "Como combinar receitas em kits que vendem e quanto cobrar",
  itens: [
    { n: "A ideia", t: "Kit vende mais que produto solto: resolve o presente de uma vez e aumenta o valor de cada pedido. Aqui você monta combinações com as receitas da coleção. Para mensagens e divulgação, use o Kit de Vendas." },
    { n: "Regras para montar um kit", t: "1. Um item principal (o panetone) e 1 ou 2 complementos.\n2. Sabores que conversam (chocolate com café, frutas com especiarias).\n3. Preferir itens que se conservam do mesmo jeito (todos na geladeira ou todos fora).\n4. Embalagem que cabe tudo sem apertar." },
    { n: "Kit 1 · Café da tarde", t: "Panetone tradicional de 500 g + pão de panetone de forma fatiado + café. Bom para presente de família." },
    { n: "Kit 2 · Chocólatras", t: "Chocotone trufado + 2 minis de brigadeiro + barrinhas crocantes da cobertura que sobrou. Bom para presente de amigo-secreto." },
    { n: "Kit 3 · Degustação", t: "Caixa com 3 minis do kit degustação (chocolate, frutas, nozes) + cartão com o nome de cada sabor. Bom para empresas." },
    { n: "Kit 4 · Natal brasileiro", t: "Panetone de fubá com goiabada + mini de beijinho + panetone no pote de leite em pó com morango. Bom para quem quer fugir do tradicional." },
    { n: "Kit 5 · Ceia completa", t: "Panetone de especiarias + panetone salgado de tomate seco e azeitona para a entrada + trança natalina. Bom para quem recebe a família." },
    { n: "Kit 6 · Lembrancinha", t: "Mini panetone com tag personalizada + mensagem de Natal. Bom para professores, equipes e clientes." },
    { n: "Como calcular o preço do kit", t: "Some o custo de cada item (use a Calculadora de Custos da Central PRO) + embalagem do kit + mão de obra da montagem. Aplique a sua margem. Kits costumam ter margem igual ou um pouco maior que itens soltos, porque o cliente paga pela solução pronta." },
    { n: "Como apresentar para o cliente", t: "Dê nome ao kit, mostre uma foto real dele montado, liste o que vem dentro e o preço total. Exemplo: “Kit Chocólatras: 1 chocotone trufado + 2 minis de brigadeiro + barrinhas crocantes, em caixa com laço. R$ ___.”" },
    { n: "Monte o seu", t: "☐ Item principal: ___\n☐ Complemento 1: ___\n☐ Complemento 2: ___\n☐ Embalagem: ___\n☐ Custo total: R$ ___\n☐ Preço de venda: R$ ___\n☐ Para quem é: ___" }
  ] });
})();
