/* ================================================================
   BOLOS FITNESS — PRÊMIOS DA SEMANA DO BOLO FIT (20 receitas)
   Só abrem para quem tem a coleção E completou as semanas do desafio.
   b1: 1ª semana · b2: 2ª · b3: 3ª · b4: 4ª
   Carregar DEPOIS de bumps-bolos.js e ANTES de bolos-fotos.js.
   Regras: "sem açúcar" só com xilitol ou eritritol; sem promessa de saúde.
   ================================================================ */
(function () {
var R = window.RECEITAS, XI = "xilitol ou eritritol";
window.SECOES.bolos = window.SECOES.bolos.concat(["Prêmio · Bolos de vó repaginados", "Prêmio · Caldas e glacês secretos", "Prêmio · Bolos de aniversário fit", "Prêmio · Bolos do Mestre"]);
var AV = {
  aveia: "Leva aveia: a aveia comum pode ter traços de glúten.", trigo: "Leva farinha de trigo integral (contém glúten).",
  leite: "Leva leite, iogurte ou queijo (contém lactose).", ovo: "Leva ovos.", castanha: "Leva castanhas.", amendoim: "Leva amendoim.",
  xi: "Sem açúcar: adoçado só com xilitol ou eritritol. Xilitol é tóxico para cães."
};
function av() { return Array.prototype.slice.call(arguments).map(function (k) { return AV[k]; }).join(" "); }
function mk(sec, premio) { return function (o) { o.col = "bolos"; o.premium = "bolos"; o.premio = premio; o.sec = sec; o.foto = o.foto || ""; o.nivel = o.nivel || "Fácil"; o.passos = o.passos.map(function (p) { return typeof p === "string" ? { t: p } : { t: p[0], timer: p[1] }; }); R.push(o); }; }
var FORNO = "Preaqueça o forno a 180 °C por 10 minutos e unte uma forma redonda de 20 cm com óleo e farinha de aveia (ou papel-manteiga no fundo).";
var PAL = "Está pronto quando o palito sai limpo do centro. Espere 15 minutos para desenformar.";

/* ======================= b1 · BOLOS DE VÓ REPAGINADOS ======================= */
var V = mk("Prêmio · Bolos de vó repaginados", "b1");
V({ id: "bp-fuba-cremoso", emoji: "🌽", nome: "Bolo de fubá cremoso", intro: "Aquele que forma uma camada de creme no meio, com menos açúcar e leite de coco.", tempo: 60, rende: "1 forma de 20 x 30 cm (12 pedaços)", tags: ["Liquidificador", "Forno"],
  ingredientes: ["3 ovos", "500 ml de leite", "200 ml de leite de coco", "120 g de fubá", "30 g de farinha de aveia", "90 g de açúcar mascavo", "30 g de manteiga", "50 g de coco ralado sem açúcar", "10 g de fermento químico"],
  passos: [FORNO.replace("redonda de 20 cm", "retangular de 20 x 30 cm"), "Bata tudo no liquidificador, menos o fermento, por 2 minutos. A massa fica bem líquida, é assim mesmo.", "Misture o fermento com uma colher e despeje na forma.", ["Asse por 45 minutos, até dourar. O meio fica cremoso: confira o ponto pela borda firme.", 45], "Deixe esfriar totalmente antes de cortar, para o creme firmar."],
  dica: "Não abra o forno nos primeiros 30 minutos: é o vapor que forma a camada cremosa.", aviso: av("ovo", "leite", "aveia") });
V({ id: "bp-nega-maluca", emoji: "🍫", nome: "Nega maluca fit com cobertura de cacau", intro: "O bolo de chocolate de festa de criança, com cacau 100% e cobertura que endurece.", tempo: 50, rende: "1 bolo de 20 cm (10 fatias)", tags: ["Liquidificador", "Forno"],
  ingredientes: ["3 ovos", "200 ml de leite morno", "80 ml de óleo", "100 g de açúcar de coco", "150 g de farinha de aveia", "40 g de cacau em pó 100%", "10 g de fermento químico", "Cobertura: 30 g de cacau, 40 g de açúcar de coco, 60 ml de leite, 15 g de manteiga"],
  passos: [FORNO, "Bata os ovos, o leite, o óleo e o açúcar por 1 minuto. Junte a farinha e o cacau e bata só até misturar. Fermento por último, com colher.", ["Asse por 35 minutos. " + PAL, 35], "Cobertura: ferva tudo mexendo por 3 minutos e despeje sobre o bolo ainda morno."],
  aviso: av("ovo", "leite", "aveia") });
V({ id: "bp-milho-verde", emoji: "🌽", nome: "Bolo de milho verde de liquidificador", intro: "Com milho de verdade, úmido e com cara de bolo de feira.", tempo: 55, rende: "1 bolo de 22 cm com furo (12 fatias)", tags: ["Liquidificador", "Forno"],
  ingredientes: ["2 latas de milho verde escorrido (ou 2 espigas debulhadas)", "3 ovos", "200 ml de leite", "60 ml de óleo", "80 g de açúcar mascavo", "100 g de fubá", "60 g de farinha de aveia", "10 g de fermento químico"],
  passos: [FORNO.replace("redonda de 20 cm", "com furo no meio de 22 cm"), "Bata o milho, os ovos, o leite, o óleo e o açúcar por 3 minutos, até ficar bem liso.", "Junte o fubá e a aveia e bata só para misturar. Fermento por último, com colher.", ["Asse por 40 minutos. " + PAL, 40]],
  aviso: av("ovo", "leite", "aveia") });
V({ id: "bp-pao-de-lo-laranja", emoji: "🍊", nome: "Pão de ló de laranja", intro: "Fofinho sem fermento: o ar vem das claras batidas.", tempo: 45, rende: "1 bolo de 22 cm com furo", tags: ["Batedeira", "Forno"],
  ingredientes: ["5 ovos separados", "100 g de açúcar demerara", "Raspas de 1 laranja", "60 ml de suco de laranja", "120 g de farinha de arroz", "30 g de amido de milho"],
  passos: [FORNO.replace("redonda de 20 cm", "com furo no meio de 22 cm"), "Bata as claras em neve firme. Junte as gemas uma a uma, depois o açúcar, batendo até dobrar de volume.", "Desligue a batedeira. Junte o suco e as raspas e, por último, as farinhas peneiradas, misturando de baixo para cima, com cuidado.", ["Asse por 30 minutos sem abrir o forno.", 30], "Desenforme frio, passando uma faca nas bordas."],
  dica: "Misture as farinhas com delicadeza: bater depois das claras derruba o bolo.", aviso: av("ovo") + " Sem glúten e sem lactose: confira os rótulos." });
V({ id: "bp-aipim", emoji: "🥥", nome: "Bolo de aipim cremoso com coco", intro: "Mandioca crua ralada e coco: o bolo de mandioca de casa de vó, sem farinha.", tempo: 70, rende: "1 forma de 20 x 30 cm", tags: ["Forno", "Sem glúten"],
  ingredientes: ["800 g de mandioca crua ralada fina", "3 ovos", "200 ml de leite de coco", "200 ml de leite", "100 g de açúcar de coco", "50 g de coco ralado sem açúcar", "30 g de manteiga derretida", "1 pitada de sal"],
  passos: [FORNO.replace("redonda de 20 cm", "retangular de 20 x 30 cm"), "Esprema a mandioca ralada num pano para tirar o excesso de líquido.", "Misture tudo numa tigela até ficar homogêneo e despeje na forma.", ["Asse por 50 a 60 minutos, até dourar bem por cima.", 55], "Espere esfriar: ele firma e fica cremoso."],
  aviso: av("ovo", "leite") });

/* ======================= b2 · CALDAS E GLACÊS SECRETOS ======================= */
var C = mk("Prêmio · Caldas e glacês secretos", "b2");
C({ id: "bp-calda-chocolate", emoji: "🍫", nome: "Calda de chocolate sem açúcar que endurece", intro: "Brilhante e firme, para bolo de cenoura e de chocolate.", tempo: 10, rende: "Cobre 1 bolo de 20 cm", tags: ["Sem açúcar", "Fogão"],
  ingredientes: ["30 g de cacau em pó 100%", "50 g de " + XI, "60 ml de leite (ou bebida vegetal)", "20 g de manteiga (ou óleo de coco)"],
  passos: [["Leve tudo ao fogo baixo mexendo sem parar por 3 a 4 minutos, até ferver e engrossar.", 4], "Despeje sobre o bolo ainda morno. Ela firma ao esfriar."], aviso: av("xi", "leite") });
C({ id: "bp-glace-cream", emoji: "🤍", nome: "Glacê de cream cheese leve", intro: "Cremoso e levemente azedinho, para red velvet e cenoura.", tempo: 5, rende: "Cobre 1 bolo de 20 cm", tags: ["Sem açúcar", "Sem fogo"],
  ingredientes: ["150 g de cream cheese light gelado", "100 g de iogurte grego", "30 g de " + XI + " em pó (bata no liquidificador)", "1 colher de chá de baunilha"],
  passos: ["Bata o cream cheese com o adoçante por 1 minuto. Junte o iogurte e a baunilha e bata só até misturar.", ["Leve à geladeira por 20 minutos antes de cobrir.", 20]], aviso: av("xi", "leite") });
C({ id: "bp-calda-frutas", emoji: "🍓", nome: "Calda de frutas vermelhas", intro: "Só com fruta e um toque de limão: brilha em cima de naked cake.", tempo: 12, rende: "1 pote de 250 ml", tags: ["Fogão"],
  ingredientes: ["300 g de frutas vermelhas (frescas ou congeladas)", "30 g de " + XI + " (ou 1 colher de sopa de mel)", "Suco de 1/2 limão", "1 colher de chá de amido de milho com 2 colheres de água"],
  passos: [["Cozinhe as frutas com o adoçante e o limão por 8 minutos, amassando algumas.", 8], "Junte o amido dissolvido e ferva mais 1 minuto. Esfrie antes de usar. Geladeira por até 5 dias."], aviso: AV.xi });
C({ id: "bp-ganache-coco", emoji: "🥥", nome: "Ganache de cacau e leite de coco", intro: "Vegana, cremosa e boa para rechear e cobrir.", tempo: 10, rende: "Recheia e cobre 1 bolo de 20 cm", tags: ["Vegana", "Sem açúcar"],
  ingredientes: ["200 ml de leite de coco", "40 g de cacau em pó 100%", "50 g de " + XI, "1 colher de sopa de amido de milho"],
  passos: [["Misture tudo frio e leve ao fogo baixo mexendo até engrossar, cerca de 5 minutos.", 5], ["Cubra com filme encostado e deixe esfriar 30 minutos.", 30]], aviso: AV.xi });
C({ id: "bp-cobertura-amendoim", emoji: "🥜", nome: "Cobertura crocante de pasta de amendoim", intro: "Cremosa por baixo, crocante por cima.", tempo: 8, rende: "Cobre 1 bolo de 20 cm", tags: ["Sem fogo"],
  ingredientes: ["80 g de pasta de amendoim integral", "40 ml de leite morno", "1 colher de sopa de mel", "30 g de amendoim torrado picado"],
  passos: ["Misture a pasta com o leite morno e o mel até ficar lisa.", "Espalhe sobre o bolo e salpique o amendoim picado."], aviso: av("amendoim", "leite") });

/* ======================= b3 · BOLOS DE ANIVERSÁRIO FIT ======================= */
var A = mk("Prêmio · Bolos de aniversário fit", "b3");
A({ id: "bp-naked-baunilha", emoji: "🎂", nome: "Naked cake de baunilha com frutas vermelhas", intro: "Duas camadas, recheio de iogurte e calda de frutas por cima. Bonito na mesa.", tempo: 80, nivel: "Médio", rende: "1 bolo de 2 camadas de 18 cm (12 fatias)", tags: ["Forno", "Festa"],
  ingredientes: ["Massa (2 vezes): 3 ovos, 100 g de iogurte, 60 ml de óleo, 80 g de açúcar demerara, 150 g de farinha de aveia, 1 colher de chá de baunilha, 10 g de fermento", "Recheio: 400 g de iogurte grego + 30 g de " + XI, "300 g de frutas vermelhas", "1 receita de calda de frutas vermelhas"],
  passos: ["Preaqueça o forno a 180 °C e unte 2 formas de 18 cm (ou asse duas vezes).", "Misture os líquidos e o açúcar, junte a farinha e a baunilha e, por último, o fermento.", ["Asse cada camada por 25 minutos. Esfrie completamente.", 25], "Monte: camada, metade do recheio e das frutas, camada, resto do recheio. Calda e frutas por cima.", ["Geladeira por 1 hora antes de cortar.", 60]],
  aviso: av("ovo", "leite", "aveia", "xi") });
A({ id: "bp-brigadeiro-travessa", emoji: "🍫", nome: "Bolo de chocolate com brigadeiro fit de travessa", intro: "Feito na travessa, servido em quadrados: o mais pedido em aniversário.", tempo: 60, rende: "1 travessa de 20 x 30 cm (15 pedaços)", tags: ["Forno", "Festa"],
  ingredientes: ["1 receita da massa da nega maluca fit", "Brigadeiro: 400 ml de leite, 40 g de cacau, 60 g de " + XI + ", 2 colheres de sopa de amido de milho, 20 g de manteiga", "Granulado de cacau (nibs) para decorar"],
  passos: ["Asse a massa numa travessa untada a 180 °C por 30 minutos.", ["Brigadeiro: misture tudo frio e cozinhe mexendo até engrossar, cerca de 8 minutos.", 8], "Fure o bolo com um garfo e espalhe o brigadeiro morno. Finalize com os nibs.", ["Geladeira por 2 horas.", 120]],
  aviso: av("ovo", "leite", "aveia", "xi") });
A({ id: "bp-cenoura-festa", emoji: "🥕", nome: "Bolo de cenoura de aniversário", intro: "Em duas camadas com recheio e cobertura de chocolate.", tempo: 75, nivel: "Médio", rende: "1 bolo de 2 camadas de 20 cm", tags: ["Forno", "Festa"],
  ingredientes: ["2 receitas de massa de bolo de cenoura com aveia (da coleção)", "Recheio e cobertura: 2 receitas de calda de chocolate sem açúcar"],
  passos: ["Asse as duas massas em formas de 20 cm e espere esfriar.", "Recheie com metade da calda morna, sobreponha a segunda camada e cubra com o resto.", ["Geladeira por 1 hora.", 60]], aviso: av("ovo", "leite", "aveia", "xi") });
A({ id: "bp-coco-gelado", emoji: "🥥", nome: "Bolo de coco gelado", intro: "Molhado com leite de coco e coberto de coco ralado. Servido gelado.", tempo: 60, rende: "1 travessa de 20 x 30 cm", tags: ["Forno", "Gelado"],
  ingredientes: ["Massa: 4 ovos, 200 ml de leite de coco, 60 ml de óleo, 90 g de açúcar de coco, 180 g de farinha de aveia, 10 g de fermento", "Calda: 200 ml de leite de coco + 200 ml de leite + 30 g de " + XI, "50 g de coco ralado sem açúcar"],
  passos: ["Preaqueça o forno a 180 °C e unte a travessa.", "Misture os líquidos com o açúcar, junte a farinha e o fermento.", ["Asse por 30 minutos.", 30], "Fure o bolo quente e regue a calda fria aos poucos. Cubra com o coco.", ["Geladeira por 3 horas.", 180]],
  aviso: av("ovo", "leite", "aveia", "xi") });
A({ id: "bp-torta-morango", emoji: "🍓", nome: "Bolo-torta de morango com creme", intro: "Pão de ló, creme de iogurte e muito morango.", tempo: 70, nivel: "Médio", rende: "1 bolo de 22 cm", tags: ["Forno", "Festa"],
  ingredientes: ["1 pão de ló de laranja (prêmio da 1ª semana) ou massa de baunilha", "Creme: 400 g de iogurte grego + 30 g de " + XI + " + 1 colher de chá de baunilha", "400 g de morangos", "Calda: 100 ml de suco de laranja"],
  passos: ["Corte o bolo frio ao meio na horizontal e umedeça com o suco de laranja.", "Recheie com metade do creme e morangos fatiados. Feche e cubra com o resto do creme.", "Decore com morangos inteiros.", ["Geladeira por 2 horas.", 120]],
  aviso: av("ovo", "leite", "xi") });

/* ======================= b4 · BOLOS DO MESTRE ======================= */
var M = mk("Prêmio · Bolos do Mestre", "b4");
M({ id: "bp-laranja-inteira", emoji: "🍊", nome: "Bolo de laranja inteira com amêndoas", intro: "A laranja vai com casca, cozida e batida. Úmido e perfumado, sem farinha de trigo.", tempo: 110, nivel: "Médio", rende: "1 bolo de 20 cm", tags: ["Forno", "Sem glúten"],
  ingredientes: ["2 laranjas-pera inteiras", "4 ovos", "120 g de açúcar de coco", "200 g de farinha de amêndoas", "5 g de fermento químico"],
  passos: [["Cozinhe as laranjas inteiras em água por 45 minutos. Escorra, tire as sementes e deixe esfriar.", 45], FORNO, "Bata as laranjas com casca, os ovos e o açúcar até virar um creme liso. Junte a farinha de amêndoas e o fermento.", ["Asse por 50 minutos. Se dourar demais, cubra com papel-alumínio.", 50], "Desenforme frio."],
  dica: "Ele fica melhor no dia seguinte: a umidade se espalha.", aviso: av("ovo", "castanha") });
M({ id: "bp-banana-invertido", emoji: "🍌", nome: "Bolo invertido de banana caramelizada", intro: "Bananas douradas no fundo da forma, que vira cobertura quando desenforma.", tempo: 60, rende: "1 bolo de 22 cm", tags: ["Forno"],
  ingredientes: ["4 bananas-prata", "30 g de açúcar mascavo + 20 g de manteiga (caramelo)", "Massa: 2 ovos, 2 bananas amassadas, 60 ml de óleo, 60 g de açúcar mascavo, 150 g de farinha de aveia, canela, 10 g de fermento"],
  passos: ["Derreta o açúcar com a manteiga direto na forma (no fogão ou forno) e arrume as bananas cortadas ao comprido.", "Misture os ingredientes da massa, fermento por último, e despeje sobre as bananas.", ["Asse a 180 °C por 35 minutos.", 35], "Desenforme ainda morno, virando num prato."],
  aviso: av("ovo", "leite", "aveia") });
M({ id: "bp-cafe-nozes", emoji: "☕", nome: "Bolo de café com nozes", intro: "Para o café da tarde de domingo: café na massa e nozes crocantes.", tempo: 55, rende: "1 bolo de 20 cm", tags: ["Forno"],
  ingredientes: ["3 ovos", "120 ml de café forte frio", "60 ml de óleo", "100 g de açúcar mascavo", "170 g de farinha de aveia", "60 g de nozes picadas", "10 g de fermento"],
  passos: [FORNO, "Bata os ovos, o café, o óleo e o açúcar. Junte a farinha, metade das nozes e o fermento.", "Despeje na forma e espalhe o resto das nozes por cima.", ["Asse por 35 minutos. " + PAL, 35]], aviso: av("ovo", "aveia", "castanha") });
M({ id: "bp-red-velvet", emoji: "❤️", nome: "Red velvet de beterraba", intro: "A cor vem da beterraba. Com glacê de cream cheese leve.", tempo: 65, nivel: "Médio", rende: "1 bolo de 20 cm", tags: ["Forno", "Festa"],
  ingredientes: ["150 g de beterraba cozida", "3 ovos", "120 ml de leite", "60 ml de óleo", "100 g de açúcar demerara", "170 g de farinha de aveia", "10 g de cacau", "1 colher de chá de vinagre", "10 g de fermento", "1 receita de glacê de cream cheese leve"],
  passos: [FORNO, "Bata a beterraba com os ovos, o leite, o óleo, o açúcar e o vinagre até ficar liso.", "Junte a farinha e o cacau e, por último, o fermento.", ["Asse por 35 minutos. " + PAL, 35], "Cubra com o glacê depois de frio."],
  aviso: av("ovo", "leite", "aveia", "xi") });
M({ id: "bp-chocolate-sem-farinha", emoji: "🖤", nome: "Bolo de chocolate sem farinha", intro: "Denso, quase uma trufa. Para quem leva chocolate a sério.", tempo: 50, nivel: "Médio", rende: "1 bolo de 20 cm (12 fatias finas)", tags: ["Forno", "Sem glúten"],
  ingredientes: ["200 g de chocolate 70% cacau", "100 g de manteiga", "4 ovos", "80 g de açúcar de coco", "20 g de cacau em pó"],
  passos: ["Preaqueça o forno a 170 °C e forre o fundo da forma com papel-manteiga.", "Derreta o chocolate com a manteiga em banho-maria.", "Bata os ovos com o açúcar até clarear e dobrar. Misture o chocolate morno e o cacau delicadamente.", ["Asse por 25 minutos: o centro fica levemente mole.", 25], ["Esfrie na forma e leve à geladeira por 2 horas antes de cortar.", 120]],
  aviso: av("ovo", "leite") });
})();
