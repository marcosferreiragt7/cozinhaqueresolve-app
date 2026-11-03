/* ================================================================
   BOLOS FITNESS QUE RESOLVEM — plano Essencial (50 receitas + 5 bônus)
   Coleção própria Cozinha que Resolve, entregue no app.
   Carregar DEPOIS de ceia3.js e panetones.js.
   premium:
     "bolos"          -> Essencial
     "bolos_premium"  -> Premium (arquivo bolos2.js)
   rascunho:true -> só aparece para quem tem o código mestre (revisão).
   Receitas novas: formulações da Cozinha que Resolve, ainda sem teste de
   cozinha registrado. Não anunciar como "testadas".
   Regras: "sem açúcar" = só xilitol ou eritritol. Nenhuma promessa de
   emagrecimento ou de saúde. Fotos sempre "foto ilustrativa".
   ================================================================ */
(function () {
var R = window.RECEITAS;

window.BOLOS = {
  preco: "R$ 19,90", precoPremium: "R$ 29,90", precoUpgrade: "R$ 10",
  checkout:{essencial:"https://pay.cakto.com.br/372k9nd",premium:"https://pay.cakto.com.br/it6u824",upgrade:"https://pay.cakto.com.br/egorkvu"},
  pagina:"https://app.cozinhaqueresolve.com/bolosfitness/"
};

window.COLECOES.push({
  id: "bolos", nome: "Bolos Fitness que Resolvem", emoji: "🍰", cor: "#7A4A2A",
  capa: "", produto: "bolos", rascunho: true,
  desc: "50 bolos para o dia a dia, sem forno, de liquidificador, sem glúten e sem lactose, e sem açúcar (com xilitol ou eritritol).",
  foot: "Cada receita mostra se leva glúten, lactose, ovos ou açúcar. Receitas elaboradas pela Cozinha que Resolve; o resultado pode variar com o forno, a airfryer e as marcas usadas."
});

window.SECOES.bolos = ["Do dia a dia", "Sem forno: frigideira, airfryer e micro-ondas", "De liquidificador",
  "Sem glúten e sem lactose", "Sem açúcar (xilitol ou eritritol)",
  "Bônus · Bolos de caneca em 5 minutos", "Bônus · Docinhos fit de festa", "Bônus · Coberturas e caldas fit"];

/* ---------- avisos (o que a receita leva) ---------- */
var AV = {
  aveia: "Leva aveia: a aveia comum pode ter traços de glúten. Para uma versão sem glúten, use aveia certificada sem glúten.",
  trigo: "Leva farinha de trigo integral (contém glúten).",
  leite: "Leva leite ou iogurte (contém lactose). Para tirar a lactose, use bebida vegetal ou iogurte sem lactose.",
  sgsl: "Sem glúten e sem lactose: confira no rótulo de cada ingrediente (farinhas, cacau, fermento, chocolate) se não há glúten nem leite.",
  semacucar: "Sem açúcar: adoçado só com xilitol ou eritritol. Xilitol é tóxico para cães, guarde longe dos pets.",
  ovo: "Leva ovos."
};
function aviso() { return Array.prototype.slice.call(arguments).map(function (k) { return AV[k]; }).join(" "); }

/* ---------- passos que se repetem ---------- */
function FORMA(t) { return { t: "Preaqueça o forno a 180 °C por 10 minutos. Unte " + (t || "uma forma redonda de 20 cm (ou de buraco no meio de 22 cm)") + " com óleo e polvilhe farinha de aveia ou cacau, ou forre o fundo com papel-manteiga." }; }
function ASSA(min, extra) { return { t: "Asse a 180 °C por " + min + " minutos, sem abrir o forno nos primeiros 20. Está pronto quando o palito sai limpo do centro." + (extra ? " " + extra : ""), timer: min }; }
var ESFRIA = { t: "Deixe amornar 15 minutos na forma antes de desenformar. Bolo fit sem açúcar refinado é mais delicado quente: desenformar cedo demais faz quebrar.", timer: 15 };
function AIR(min, temp) { return { t: "Coloque numa forma que caiba na airfryer (cerca de 15 cm), untada. Asse a " + (temp || 160) + " °C por " + min + " minutos, sem preaquecer. Confira com o palito; se ainda sair molhado, mais 3 a 5 minutos.", timer: min }; }

function B(o) {
  o.col = "bolos"; o.premium = o.premium || "bolos"; o.foto = o.foto || "";
  R.push(o);
}

/* ======================= DO DIA A DIA (12) ======================= */
B({ id: "bf-cenoura-aveia", sec: "Do dia a dia", emoji: "🥕",
  nome: "Bolo de cenoura com aveia e cobertura de cacau",
  intro: "O bolo de cenoura de sempre, com farinha de aveia no lugar da farinha branca e cobertura de cacau sem leite condensado.",
  tempo: 55, nivel: "Fácil", rende: "1 bolo de 20 cm (10 fatias)", tags: ["Forno", "Liquidificador", "Café da tarde"],
  ingredientes: ["250 g de cenoura crua picada (2 médias)", "3 ovos", "80 g de óleo de coco ou de girassol", "100 g de açúcar de coco ou mascavo", "180 g de farinha de aveia", "10 g de fermento químico (1 colher de sopa)", "Cobertura: 30 g de cacau em pó 100%, 40 g de açúcar de coco, 60 g de leite (ou bebida vegetal), 10 g de óleo de coco"],
  passos: [FORMA(),
    { t: "Bata no liquidificador a cenoura, os ovos, o óleo e o açúcar de coco por 2 minutos, até ficar liso." },
    { t: "Passe para uma tigela, junte a farinha de aveia e misture com fouet. Por último, o fermento, mexendo devagar." },
    ASSA(35), ESFRIA,
    { t: "Cobertura: leve tudo ao fogo baixo mexendo por 3 a 4 minutos, até engrossar levemente. Espalhe sobre o bolo ainda morno." }],
  dica: "Cenoura bem batida é o que dá a cor laranja forte. Se o liquidificador for fraco, rale a cenoura antes.",
  aviso: aviso("aveia", "leite") });

B({ id: "bf-banana-aveia", sec: "Do dia a dia", emoji: "🍌",
  nome: "Bolo de banana com aveia e canela",
  intro: "Doce da própria banana bem madura, com um toque de açúcar mascavo. Úmido, perfumado e fácil.",
  tempo: 50, nivel: "Fácil", rende: "1 bolo de 20 cm (10 fatias)", tags: ["Forno", "Tigela", "Café da manhã"],
  ingredientes: ["3 bananas-nanicas bem maduras (cerca de 300 g sem casca)", "2 ovos", "60 g de óleo de coco derretido", "50 g de açúcar mascavo", "150 g de farinha de aveia", "40 g de aveia em flocos", "5 g de canela em pó (2 colheres de chá)", "10 g de fermento químico", "1 banana em rodelas para o topo"],
  passos: [FORMA(),
    { t: "Amasse as bananas com um garfo até virar purê. Junte os ovos, o óleo e o açúcar mascavo e misture bem." },
    { t: "Acrescente a farinha de aveia, a aveia em flocos e a canela. Misture só até sumir a farinha. Por último, o fermento." },
    { t: "Despeje na forma e distribua as rodelas de banana por cima. Polvilhe um pouco de canela." },
    ASSA(35), ESFRIA],
  dica: "Quanto mais pintada a casca da banana, mais doce o bolo. Banana ainda amarela deixa o bolo sem gosto.",
  aviso: aviso("aveia") });

B({ id: "bf-laranja-integral", sec: "Do dia a dia", emoji: "🍊",
  nome: "Bolo de laranja com farinha integral e calda de laranja",
  intro: "Massa leve de laranja com farinha de trigo integral fina e uma calda rápida de suco que deixa o bolo molhadinho.",
  tempo: 55, nivel: "Fácil", rende: "1 bolo de 22 cm com furo (12 fatias)", tags: ["Forno", "Café da tarde"],
  ingredientes: ["3 ovos", "200 g de suco de laranja (cerca de 3 laranjas)", "Raspas de 1 laranja", "80 g de óleo", "110 g de açúcar de coco ou demerara", "200 g de farinha de trigo integral fina", "10 g de fermento químico", "Calda: 100 g de suco de laranja + 20 g de mel"],
  passos: [FORMA("uma forma com furo no meio de 22 cm"),
    { t: "Bata os ovos com o açúcar por 3 minutos com fouet ou batedeira, até clarear. Junte o óleo, o suco e as raspas." },
    { t: "Peneire a farinha integral sobre a mistura e incorpore. Por último, o fermento." },
    ASSA(35), ESFRIA,
    { t: "Calda: misture o suco com o mel. Fure o bolo com um garfo e regue a calda aos poucos." }],
  dica: "Farinha integral fina (não a grossa) é o que deixa o bolo macio. Se só tiver a grossa, peneire e use o que passar.",
  aviso: aviso("trigo") });

B({ id: "bf-limao-iogurte", sec: "Do dia a dia", emoji: "🍋",
  nome: "Bolo de limão com iogurte natural",
  intro: "Massa úmida de iogurte, perfume de raspas de limão e uma glacê leve de limão por cima.",
  tempo: 50, nivel: "Fácil", rende: "1 bolo de 20 cm (10 fatias)", tags: ["Forno", "Café da tarde"],
  ingredientes: ["170 g de iogurte natural (1 pote)", "3 ovos", "70 g de óleo", "100 g de açúcar demerara ou de coco", "Raspas de 2 limões", "40 g de suco de limão", "180 g de farinha de aveia", "10 g de fermento químico", "Glacê: 40 g de açúcar de coco batido no liquidificador até virar pó + 15 g de suco de limão"],
  passos: [FORMA(),
    { t: "Misture o iogurte, os ovos, o óleo, o açúcar, as raspas e o suco de limão até ficar homogêneo." },
    { t: "Junte a farinha de aveia e misture. Por último, o fermento." },
    ASSA(32), ESFRIA,
    { t: "Glacê: misture o açúcar em pó com o suco de limão até ficar uma pasta grossa e escorra por cima do bolo frio." }],
  dica: "Rale só a parte verde do limão: a parte branca amarga.",
  aviso: aviso("aveia", "leite") });

B({ id: "bf-fuba-erva-doce", sec: "Do dia a dia", emoji: "🌽",
  nome: "Bolo de fubá com erva-doce",
  intro: "O bolo de fubá da roça em versão mais leve, com farinha de aveia, mel e erva-doce para o café.",
  tempo: 50, nivel: "Fácil", rende: "1 bolo de 22 cm com furo (12 fatias)", tags: ["Forno", "Café da tarde", "Clássico"],
  ingredientes: ["3 ovos", "240 g de leite (ou bebida vegetal)", "70 g de óleo", "90 g de açúcar mascavo", "30 g de mel", "150 g de fubá mimoso", "80 g de farinha de aveia", "4 g de erva-doce (1 colher de chá cheia)", "10 g de fermento químico"],
  passos: [FORMA("uma forma com furo no meio de 22 cm"),
    { t: "Bata no liquidificador os ovos, o leite, o óleo, o açúcar e o mel por 1 minuto." },
    { t: "Junte o fubá e a farinha de aveia e bata só até misturar. Desligue, misture a erva-doce e o fermento com uma colher." },
    ASSA(35), ESFRIA],
  dica: "Fubá mimoso é o fino. O fubá grosso (de polenta) deixa o bolo arenoso.",
  aviso: aviso("aveia", "leite") });

B({ id: "bf-coco-fofinho", sec: "Do dia a dia", emoji: "🥥",
  nome: "Bolo de coco fofinho com leite de coco",
  intro: "Bolo branco de coco, molhadinho com leite de coco por cima. Lembra bolo gelado, sem leite condensado.",
  tempo: 55, nivel: "Fácil", rende: "1 bolo de 20 x 30 cm (15 pedaços)", tags: ["Forno", "Sobremesa"],
  ingredientes: ["4 ovos (claras e gemas separadas)", "200 g de leite de coco", "60 g de óleo de coco derretido", "110 g de açúcar de coco ou demerara", "180 g de farinha de arroz", "50 g de coco ralado sem açúcar", "10 g de fermento químico", "Para molhar: 200 g de leite de coco + 30 g de mel", "Coco ralado para cobrir"],
  passos: [FORMA("uma forma retangular de 20 x 30 cm"),
    { t: "Bata as claras em neve firme e reserve." },
    { t: "Misture as gemas, o leite de coco, o óleo e o açúcar. Junte a farinha de arroz e o coco ralado. Incorpore as claras em neve aos poucos, com movimentos de baixo para cima. Por último, o fermento." },
    ASSA(30), { t: "Ainda quente, fure todo o bolo com um garfo e regue o leite de coco misturado com o mel. Cubra com coco ralado." },
    { t: "Leve à geladeira por pelo menos 2 horas antes de cortar.", timer: 120 }],
  dica: "As claras em neve são o que deixa esse bolo fofo sem farinha de trigo. Incorpore com calma para não perder o ar.",
  aviso: aviso("ovo") + " Sem glúten e sem lactose se você confirmar o rótulo da farinha de arroz e do fermento." });

B({ id: "bf-maca-canela", sec: "Do dia a dia", emoji: "🍎",
  nome: "Bolo de maçã com canela e aveia",
  intro: "Maçã em cubinhos na massa e fatias por cima, com canela. Cheiro de bolo de vó, com aveia.",
  tempo: 55, nivel: "Fácil", rende: "1 bolo de 20 cm (10 fatias)", tags: ["Forno", "Tigela", "Café da tarde"],
  ingredientes: ["2 maçãs (1 em cubinhos, 1 em fatias finas)", "3 ovos", "70 g de óleo", "100 g de açúcar mascavo", "120 g de leite (ou bebida vegetal)", "170 g de farinha de aveia", "5 g de canela em pó", "10 g de fermento químico"],
  passos: [FORMA(),
    { t: "Misture os ovos, o óleo, o açúcar e o leite. Junte a farinha de aveia e a canela e misture. Por último, o fermento e a maçã em cubinhos." },
    { t: "Despeje na forma e arrume as fatias de maçã por cima, uma sobre a outra. Polvilhe canela." },
    ASSA(38), ESFRIA],
  dica: "Passe as fatias de maçã em gotas de limão para não escurecerem antes de ir ao forno.",
  aviso: aviso("aveia", "leite") });

B({ id: "bf-chocolate-cacau", sec: "Do dia a dia", emoji: "🍫",
  nome: "Bolo de chocolate com cacau 100%",
  intro: "Bolo escuro e úmido de cacau, com café para realçar o chocolate. Sem achocolatado.",
  tempo: 50, nivel: "Fácil", rende: "1 bolo de 20 cm (10 fatias)", tags: ["Forno", "Chocolate"],
  ingredientes: ["3 ovos", "150 g de leite (ou bebida vegetal)", "50 g de café coado forte", "70 g de óleo", "110 g de açúcar de coco ou mascavo", "150 g de farinha de aveia", "40 g de cacau em pó 100%", "10 g de fermento químico"],
  passos: [FORMA("uma forma redonda de 20 cm untada e polvilhada com cacau"),
    { t: "Misture os ovos, o leite, o café, o óleo e o açúcar." },
    { t: "Peneire a farinha de aveia e o cacau sobre a mistura e incorpore. Por último, o fermento." },
    ASSA(32), ESFRIA],
  dica: "O café não deixa gosto de café: ele só deixa o cacau com sabor mais forte. Pode usar descafeinado.",
  aviso: aviso("aveia", "leite") });

B({ id: "bf-iogurte-gotas", sec: "Do dia a dia", emoji: "🧁",
  nome: "Bolo de iogurte com gotas de chocolate 70%",
  intro: "Bolo de iogurte simples, de medir no pote, com gotas de chocolate amargo espalhadas na massa.",
  tempo: 50, nivel: "Fácil", rende: "1 bolo de 20 cm (10 fatias)", tags: ["Forno", "Tigela", "Lanche"],
  ingredientes: ["170 g de iogurte natural", "3 ovos", "70 g de óleo", "100 g de açúcar de coco", "5 g de essência de baunilha", "190 g de farinha de aveia", "10 g de fermento químico", "70 g de gotas de chocolate 70% cacau"],
  passos: [FORMA(),
    { t: "Misture o iogurte, os ovos, o óleo, o açúcar e a baunilha." },
    { t: "Junte a farinha de aveia e o fermento. Envolva as gotas de chocolate numa colher de farinha e misture à massa." },
    ASSA(33), ESFRIA],
  dica: "Passar as gotas na farinha antes impede que elas afundem todas para o fundo.",
  aviso: aviso("aveia", "leite") });

B({ id: "bf-abobora-especiarias", sec: "Do dia a dia", emoji: "🎃",
  nome: "Bolo de abóbora com especiarias",
  intro: "Purê de abóbora cabotiá, canela, gengibre e noz-moscada. Bolo úmido, de cor dourada.",
  tempo: 60, nivel: "Fácil", rende: "1 bolo de 20 cm (10 fatias)", tags: ["Forno", "Café da tarde"],
  ingredientes: ["250 g de purê de abóbora cabotiá cozida e escorrida", "3 ovos", "70 g de óleo", "100 g de açúcar mascavo", "170 g de farinha de aveia", "3 g de canela", "1 g de gengibre em pó", "1 pitada de noz-moscada", "10 g de fermento químico", "30 g de sementes de abóbora para o topo (opcional)"],
  passos: [FORMA(),
    { t: "Misture o purê de abóbora, os ovos, o óleo e o açúcar até ficar liso." },
    { t: "Junte a farinha de aveia e as especiarias. Por último, o fermento. Espalhe na forma e cubra com as sementes." },
    ASSA(38), ESFRIA],
  dica: "Escorra bem a abóbora cozida numa peneira por 10 minutos. Água demais deixa o bolo pesado no centro.",
  aviso: aviso("aveia") });

B({ id: "bf-beterraba-chocolate", sec: "Do dia a dia", emoji: "🍫",
  nome: "Bolo de beterraba com chocolate",
  intro: "A beterraba deixa o bolo de chocolate muito úmido e com cor intensa, sem sentir gosto de beterraba.",
  tempo: 55, nivel: "Fácil", rende: "1 bolo de 20 cm (10 fatias)", tags: ["Forno", "Liquidificador", "Chocolate"],
  ingredientes: ["200 g de beterraba crua picada (1 grande)", "3 ovos", "80 g de óleo", "110 g de açúcar de coco", "150 g de farinha de aveia", "35 g de cacau em pó 100%", "10 g de fermento químico"],
  passos: [FORMA(),
    { t: "Bata no liquidificador a beterraba, os ovos, o óleo e o açúcar até ficar bem liso." },
    { t: "Passe para uma tigela e junte a farinha de aveia e o cacau peneirados. Por último, o fermento." },
    ASSA(35), ESFRIA],
  dica: "Se quiser cobertura, use a de cacau do bolo de cenoura ou uma das Coberturas fit do bônus.",
  aviso: aviso("aveia") });

B({ id: "bf-marmore", sec: "Do dia a dia", emoji: "🍰",
  nome: "Bolo mármore de baunilha e cacau",
  intro: "Metade da massa branca, metade de cacau, intercaladas na forma. Bonito no corte, sem complicação.",
  tempo: 55, nivel: "Médio", rende: "1 bolo de forma inglesa (10 fatias)", tags: ["Forno", "Café da tarde"],
  ingredientes: ["3 ovos", "150 g de leite (ou bebida vegetal)", "70 g de óleo", "110 g de açúcar de coco ou demerara", "5 g de essência de baunilha", "200 g de farinha de aveia", "10 g de fermento químico", "20 g de cacau em pó 100% + 20 g de leite (para a parte escura)"],
  passos: [FORMA("uma forma de bolo inglês de 25 cm"),
    { t: "Misture os ovos, o leite, o óleo, o açúcar e a baunilha. Junte a farinha de aveia e o fermento." },
    { t: "Separe metade da massa e misture nela o cacau e os 20 g de leite." },
    { t: "Na forma, alterne colheradas das duas massas. Passe um palito em zigue-zague para fazer o desenho de mármore, sem misturar demais." },
    ASSA(40), ESFRIA],
  dica: "Duas ou três passadas do palito bastam. Mexer mais vira bolo marrom, sem o efeito mármore.",
  aviso: aviso("aveia", "leite") });

/* ========== SEM FORNO: FRIGIDEIRA, AIRFRYER E MICRO-ONDAS (12) ========== */
function FRIG(min) { return { t: "Unte uma frigideira antiaderente de 20 cm com tampa. Despeje a massa, tampe e cozinhe em fogo baixo por " + min + " minutos, até a superfície ficar firme. Vire com a ajuda de um prato e doure o outro lado por 2 a 3 minutos.", timer: min }; }

B({ id: "bf-frig-banana", sec: "Sem forno: frigideira, airfryer e micro-ondas", emoji: "🍌",
  nome: "Bolo de banana de frigideira",
  intro: "Bolo de banana sem ligar o forno, pronto em 15 minutos na frigideira tampada.",
  tempo: 15, nivel: "Fácil", rende: "1 bolo de 20 cm (6 fatias)", tags: ["Frigideira", "Rápido", "Café da manhã"],
  ingredientes: ["2 bananas maduras amassadas", "2 ovos", "20 g de óleo de coco", "20 g de mel (opcional)", "80 g de farinha de aveia", "3 g de canela", "5 g de fermento químico"],
  passos: [{ t: "Misture as bananas amassadas, os ovos, o óleo e o mel. Junte a farinha de aveia, a canela e o fermento." }, FRIG(10)],
  dica: "Fogo baixo de verdade: com fogo médio o fundo queima antes do meio cozinhar.",
  aviso: aviso("aveia") });

B({ id: "bf-frig-chocolate", sec: "Sem forno: frigideira, airfryer e micro-ondas", emoji: "🍫",
  nome: "Bolo de chocolate de frigideira",
  intro: "Bolo de cacau fofinho feito na frigideira, para quando bate a vontade de chocolate.",
  tempo: 15, nivel: "Fácil", rende: "1 bolo de 20 cm (6 fatias)", tags: ["Frigideira", "Rápido", "Chocolate"],
  ingredientes: ["2 ovos", "80 g de leite (ou bebida vegetal)", "25 g de óleo", "50 g de açúcar de coco", "70 g de farinha de aveia", "20 g de cacau em pó 100%", "5 g de fermento químico"],
  passos: [{ t: "Misture os ovos, o leite, o óleo e o açúcar. Junte a farinha, o cacau e por último o fermento." }, FRIG(10)],
  dica: "Sirva com a Calda de chocolate fit do bônus de coberturas.",
  aviso: aviso("aveia", "leite") });

B({ id: "bf-frig-maca", sec: "Sem forno: frigideira, airfryer e micro-ondas", emoji: "🍎",
  nome: "Bolo de maçã caramelizada de frigideira",
  intro: "As fatias de maçã douram no fundo da frigideira e ficam por cima quando você vira o bolo.",
  tempo: 20, nivel: "Fácil", rende: "1 bolo de 20 cm (6 fatias)", tags: ["Frigideira", "Sobremesa"],
  ingredientes: ["1 maçã em fatias finas", "15 g de açúcar mascavo + 5 g de óleo de coco (para o fundo)", "2 ovos", "80 g de leite (ou bebida vegetal)", "20 g de óleo", "30 g de açúcar mascavo", "80 g de farinha de aveia", "3 g de canela", "5 g de fermento químico"],
  passos: [{ t: "Na frigideira, derreta o óleo de coco com os 15 g de açúcar mascavo em fogo baixo. Arrume as fatias de maçã e deixe 3 minutos.", timer: 3 },
    { t: "Misture os ovos, o leite, o óleo, o açúcar, a farinha, a canela e o fermento. Despeje sobre as maçãs." },
    { t: "Tampe e cozinhe em fogo baixo por 12 minutos. Desligue, espere 2 minutos e vire num prato: as maçãs ficam por cima.", timer: 12 }],
  dica: "Não precisa dourar o segundo lado: o lado das maçãs é o de cima.",
  aviso: aviso("aveia", "leite") });

B({ id: "bf-frig-frutas-vermelhas", sec: "Sem forno: frigideira, airfryer e micro-ondas", emoji: "🍓",
  nome: "Bolo de aveia com frutas vermelhas de frigideira",
  intro: "Massa de aveia e iogurte com frutas vermelhas (podem ser congeladas) espalhadas por cima.",
  tempo: 18, nivel: "Fácil", rende: "1 bolo de 20 cm (6 fatias)", tags: ["Frigideira", "Café da manhã"],
  ingredientes: ["2 ovos", "100 g de iogurte natural", "20 g de óleo", "25 g de mel", "90 g de farinha de aveia", "5 g de fermento químico", "80 g de frutas vermelhas (morango, mirtilo, amora)"],
  passos: [{ t: "Misture os ovos, o iogurte, o óleo e o mel. Junte a farinha e o fermento." },
    { t: "Despeje na frigideira untada e espalhe as frutas por cima, apertando de leve." }, FRIG(12)],
  dica: "Frutas congeladas vão direto, sem descongelar, para não soltarem água na massa.",
  aviso: aviso("aveia", "leite") });

B({ id: "bf-frig-coco", sec: "Sem forno: frigideira, airfryer e micro-ondas", emoji: "🥥",
  nome: "Bolo de coco de frigideira sem glúten",
  intro: "Com farinha de arroz e coco ralado. Dourado por fora e macio por dentro.",
  tempo: 15, nivel: "Fácil", rende: "1 bolo de 20 cm (6 fatias)", tags: ["Frigideira", "Sem glúten", "Sem lactose"],
  ingredientes: ["2 ovos", "100 g de leite de coco", "20 g de óleo de coco", "40 g de açúcar de coco", "60 g de farinha de arroz", "30 g de coco ralado sem açúcar", "5 g de fermento químico"],
  passos: [{ t: "Misture tudo, deixando o fermento por último." }, FRIG(10)],
  dica: "Farinha de arroz absorve menos líquido: a massa fica mais mole que a de aveia, e é assim mesmo.",
  aviso: aviso("sgsl") });

B({ id: "bf-air-cenoura", sec: "Sem forno: frigideira, airfryer e micro-ondas", emoji: "🥕",
  nome: "Bolo de cenoura na airfryer",
  intro: "A receita de cenoura na medida de uma forma pequena de airfryer.",
  tempo: 35, nivel: "Fácil", rende: "1 bolo de 15 cm (6 fatias)", tags: ["Airfryer", "Liquidificador"],
  ingredientes: ["150 g de cenoura picada (1 grande)", "2 ovos", "50 g de óleo", "60 g de açúcar de coco", "110 g de farinha de aveia", "6 g de fermento químico"],
  passos: [{ t: "Bata a cenoura, os ovos, o óleo e o açúcar no liquidificador. Passe para uma tigela e misture a farinha e o fermento." }, AIR(25)],
  dica: "Se o topo dourar rápido e o meio ainda estiver cru, cubra com papel-alumínio nos últimos 10 minutos.",
  aviso: aviso("aveia") });

B({ id: "bf-air-limao", sec: "Sem forno: frigideira, airfryer e micro-ondas", emoji: "🍋",
  nome: "Bolo de limão na airfryer",
  intro: "Bolo de limão com iogurte em versão pequena, para não sobrar.",
  tempo: 30, nivel: "Fácil", rende: "1 bolo de 15 cm (6 fatias)", tags: ["Airfryer", "Café da tarde"],
  ingredientes: ["100 g de iogurte natural", "2 ovos", "40 g de óleo", "60 g de açúcar demerara", "Raspas de 1 limão + 20 g de suco", "110 g de farinha de aveia", "6 g de fermento químico"],
  passos: [{ t: "Misture o iogurte, os ovos, o óleo, o açúcar, as raspas e o suco. Junte a farinha e o fermento." }, AIR(22)],
  dica: "Cubra com o glacê de limão do bolo de limão com iogurte, na metade das quantidades.",
  aviso: aviso("aveia", "leite") });

B({ id: "bf-air-chocolate", sec: "Sem forno: frigideira, airfryer e micro-ondas", emoji: "🍫",
  nome: "Bolo de chocolate na airfryer",
  intro: "Bolo de cacau pequeno, pronto em menos de meia hora sem ligar o forno.",
  tempo: 30, nivel: "Fácil", rende: "1 bolo de 15 cm (6 fatias)", tags: ["Airfryer", "Chocolate"],
  ingredientes: ["2 ovos", "100 g de leite (ou bebida vegetal)", "40 g de óleo", "70 g de açúcar de coco", "90 g de farinha de aveia", "25 g de cacau em pó 100%", "6 g de fermento químico"],
  passos: [{ t: "Misture os ovos, o leite, o óleo e o açúcar. Junte a farinha e o cacau peneirados e o fermento." }, AIR(22)],
  dica: "Forma de silicone também vai na airfryer e facilita desenformar.",
  aviso: aviso("aveia", "leite") });

B({ id: "bf-air-laranja", sec: "Sem forno: frigideira, airfryer e micro-ondas", emoji: "🍊",
  nome: "Bolo de laranja na airfryer",
  intro: "Massa de laranja com raspas, pequena e perfumada.",
  tempo: 30, nivel: "Fácil", rende: "1 bolo de 15 cm (6 fatias)", tags: ["Airfryer", "Café da tarde"],
  ingredientes: ["2 ovos", "120 g de suco de laranja", "Raspas de 1/2 laranja", "40 g de óleo", "60 g de açúcar de coco", "120 g de farinha de aveia", "6 g de fermento químico"],
  passos: [{ t: "Misture os ovos, o suco, as raspas, o óleo e o açúcar. Junte a farinha e o fermento." }, AIR(22)],
  dica: "Regue com 50 g de suco de laranja com 10 g de mel quando sair da airfryer.",
  aviso: aviso("aveia") });

B({ id: "bf-air-banana-cacau", sec: "Sem forno: frigideira, airfryer e micro-ondas", emoji: "🍌",
  nome: "Bolo de banana com cacau na airfryer",
  intro: "Banana madura e cacau: o doce vem quase todo da fruta.",
  tempo: 30, nivel: "Fácil", rende: "1 bolo de 15 cm (6 fatias)", tags: ["Airfryer", "Chocolate"],
  ingredientes: ["2 bananas maduras amassadas", "2 ovos", "30 g de óleo de coco", "20 g de açúcar mascavo", "80 g de farinha de aveia", "15 g de cacau em pó 100%", "6 g de fermento químico"],
  passos: [{ t: "Misture a banana, os ovos, o óleo e o açúcar. Junte a farinha, o cacau e o fermento." }, AIR(22)],
  dica: "Fica ótimo com rodelas de banana e pedacinhos de chocolate 70% por cima antes de assar.",
  aviso: aviso("aveia") });

B({ id: "bf-micro-travessa-chocolate", sec: "Sem forno: frigideira, airfryer e micro-ondas", emoji: "🍫",
  nome: "Bolo de chocolate de micro-ondas na travessa",
  intro: "Bolo inteiro no micro-ondas, numa travessa de vidro, em 6 minutos.",
  tempo: 15, nivel: "Fácil", rende: "1 travessa de 20 cm (8 pedaços)", tags: ["Micro-ondas", "Rápido", "Chocolate"],
  ingredientes: ["3 ovos", "150 g de leite (ou bebida vegetal)", "50 g de óleo", "90 g de açúcar de coco", "120 g de farinha de aveia", "30 g de cacau em pó 100%", "8 g de fermento químico"],
  passos: [{ t: "Misture tudo, deixando o fermento por último. Despeje numa travessa de vidro redonda untada (até a metade da altura)." },
    { t: "Leve ao micro-ondas em potência alta por 6 minutos. Se o centro ainda estiver molhado, mais 30 segundos de cada vez.", timer: 6 },
    { t: "Deixe descansar 5 minutos antes de cortar: ele termina de firmar fora do micro-ondas.", timer: 5 }],
  dica: "Micro-ondas variam muito. Na primeira vez, comece com 5 minutos e vá aumentando.",
  aviso: aviso("aveia", "leite") });

B({ id: "bf-micro-travessa-cenoura", sec: "Sem forno: frigideira, airfryer e micro-ondas", emoji: "🥕",
  nome: "Bolo de cenoura de micro-ondas na travessa",
  intro: "O bolo de cenoura em 7 minutos, com cobertura de cacau feita no próprio micro-ondas.",
  tempo: 15, nivel: "Fácil", rende: "1 travessa de 20 cm (8 pedaços)", tags: ["Micro-ondas", "Rápido", "Liquidificador"],
  ingredientes: ["200 g de cenoura picada", "3 ovos", "60 g de óleo", "90 g de açúcar de coco", "140 g de farinha de aveia", "8 g de fermento químico", "Cobertura: 20 g de cacau, 30 g de açúcar de coco, 40 g de leite, 5 g de óleo de coco"],
  passos: [{ t: "Bata a cenoura, os ovos, o óleo e o açúcar. Misture a farinha e o fermento numa tigela." },
    { t: "Despeje na travessa de vidro untada e leve ao micro-ondas em potência alta por 7 minutos.", timer: 7 },
    { t: "Cobertura: misture tudo numa tigela e leve ao micro-ondas por 1 minuto, mexendo na metade. Espalhe sobre o bolo.", timer: 1 }],
  dica: "Travessa de vidro ou cerâmica, nunca metal.",
  aviso: aviso("aveia", "leite") });

/* ======================= DE LIQUIDIFICADOR (8) ======================= */
function LIQ(extra) { return { t: "Bata no liquidificador todos os ingredientes, menos o fermento, por 2 a 3 minutos, até ficar bem liso." + (extra ? " " + extra : "") }; }
var FERM = { t: "Desligue o liquidificador e misture o fermento com uma colher, sem bater." };

B({ id: "bf-liq-milho", sec: "De liquidificador", emoji: "🌽",
  nome: "Bolo de milho verde de latinha cremoso",
  intro: "Cremoso no meio, como bolo de milho de padaria, com milho em lata, fubá e leite de coco.",
  tempo: 60, nivel: "Fácil", rende: "1 bolo de 22 cm com furo (12 fatias)", tags: ["Liquidificador", "Forno", "Clássico"],
  ingredientes: ["1 lata de milho verde escorrido (cerca de 170 g)", "3 ovos", "200 g de leite de coco", "60 g de óleo", "90 g de açúcar demerara ou de coco", "80 g de fubá mimoso", "30 g de coco ralado sem açúcar", "8 g de fermento químico"],
  passos: [FORMA("uma forma com furo no meio de 22 cm"), LIQ(), FERM, ASSA(45), ESFRIA],
  dica: "Ele sai com o centro cremoso de propósito. Espere esfriar totalmente para cortar.",
  aviso: "Sem glúten e sem lactose se você confirmar o rótulo do fubá e do fermento. " + aviso("ovo") });

B({ id: "bf-liq-laranja-inteira", sec: "De liquidificador", emoji: "🍊",
  nome: "Bolo de laranja inteira com casca",
  intro: "A laranja vai inteira no liquidificador, com casca. Aroma forte e massa úmida.",
  tempo: 55, nivel: "Fácil", rende: "1 bolo de 22 cm com furo (12 fatias)", tags: ["Liquidificador", "Forno"],
  ingredientes: ["1 laranja-pera inteira lavada, sem sementes e sem as pontas, em pedaços", "3 ovos", "80 g de óleo", "110 g de açúcar de coco", "190 g de farinha de aveia", "10 g de fermento químico"],
  passos: [FORMA("uma forma com furo no meio de 22 cm"),
    { t: "Bata a laranja, os ovos, o óleo e o açúcar por 3 minutos, até não ter pedaços de casca." },
    { t: "Passe para uma tigela, misture a farinha de aveia e por último o fermento." }, ASSA(35), ESFRIA],
  dica: "Laranja-pera tem casca fina. Laranja-baía tem muita parte branca e pode amargar.",
  aviso: aviso("aveia") });

B({ id: "bf-liq-mandioca", sec: "De liquidificador", emoji: "🥔",
  nome: "Bolo de mandioca com coco",
  intro: "Bolo de aipim cru batido com leite de coco. Naturalmente sem farinha, com casquinha dourada.",
  tempo: 70, nivel: "Fácil", rende: "1 forma de 20 x 30 cm (15 pedaços)", tags: ["Liquidificador", "Forno", "Sem glúten"],
  ingredientes: ["500 g de mandioca crua descascada em pedaços", "3 ovos", "200 g de leite de coco", "50 g de óleo de coco", "100 g de açúcar de coco ou demerara", "50 g de coco ralado sem açúcar", "1 pitada de sal"],
  passos: [FORMA("uma forma retangular de 20 x 30 cm"), LIQ("A massa fica mole, como um mingau grosso."),
    ASSA(50, "O centro fica firme, mas úmido: ele não sai seco no palito como bolo de farinha."), ESFRIA],
  dica: "Não leva fermento: quem dá a estrutura é a própria mandioca.",
  aviso: aviso("sgsl", "ovo") });

B({ id: "bf-liq-batata-doce-coco", sec: "De liquidificador", emoji: "🍠",
  nome: "Bolo de batata-doce com coco",
  intro: "Batata-doce cozida no liquidificador deixa o bolo macio e levemente adocicado.",
  tempo: 55, nivel: "Fácil", rende: "1 bolo de 20 cm (10 fatias)", tags: ["Liquidificador", "Forno", "Café da manhã"],
  ingredientes: ["200 g de batata-doce cozida", "3 ovos", "150 g de leite de coco", "50 g de óleo de coco", "80 g de açúcar de coco", "130 g de farinha de arroz", "30 g de coco ralado sem açúcar", "10 g de fermento químico"],
  passos: [FORMA(), LIQ(), FERM, ASSA(35), ESFRIA],
  dica: "Batata-doce de polpa alaranjada deixa o bolo mais colorido.",
  aviso: aviso("sgsl", "ovo") });

B({ id: "bf-liq-chocolate-abobrinha", sec: "De liquidificador", emoji: "🍫",
  nome: "Bolo de chocolate com abobrinha",
  intro: "A abobrinha some na massa e deixa o bolo de chocolate superúmido. Ninguém adivinha.",
  tempo: 55, nivel: "Fácil", rende: "1 bolo de 20 cm (10 fatias)", tags: ["Liquidificador", "Forno", "Chocolate"],
  ingredientes: ["200 g de abobrinha crua com casca, picada", "3 ovos", "70 g de óleo", "110 g de açúcar de coco", "150 g de farinha de aveia", "35 g de cacau em pó 100%", "10 g de fermento químico"],
  passos: [FORMA(), { t: "Bata a abobrinha, os ovos, o óleo e o açúcar até ficar liso." },
    { t: "Passe para uma tigela, misture a farinha de aveia e o cacau peneirados e o fermento." }, ASSA(35), ESFRIA],
  dica: "Abobrinha italiana, a verde-clara. Não precisa descascar.",
  aviso: aviso("aveia") });

B({ id: "bf-liq-cenoura-laranja", sec: "De liquidificador", emoji: "🥕",
  nome: "Bolo de cenoura com laranja",
  intro: "Cenoura e suco de laranja juntos: mais leve e perfumado que o bolo de cenoura comum.",
  tempo: 55, nivel: "Fácil", rende: "1 bolo de 22 cm com furo (12 fatias)", tags: ["Liquidificador", "Forno"],
  ingredientes: ["200 g de cenoura picada", "120 g de suco de laranja", "Raspas de 1 laranja", "3 ovos", "70 g de óleo", "110 g de açúcar de coco", "190 g de farinha de aveia", "10 g de fermento químico"],
  passos: [FORMA("uma forma com furo no meio de 22 cm"), { t: "Bata a cenoura, o suco, os ovos, o óleo e o açúcar." },
    { t: "Numa tigela, misture as raspas, a farinha e o fermento." }, ASSA(38), ESFRIA],
  dica: "Fica ótimo sem cobertura, com uma calda de suco de laranja e mel.",
  aviso: aviso("aveia") });

B({ id: "bf-liq-coco-tapioca", sec: "De liquidificador", emoji: "🥥",
  nome: "Bolo de tapioca com coco",
  intro: "Tapioca granulada hidratada no leite de coco: textura de cuscuz doce, sem farinha.",
  tempo: 70, nivel: "Fácil", rende: "1 forma de 20 x 20 cm (12 pedaços)", tags: ["Forno", "Sem glúten", "Sem lactose"],
  ingredientes: ["200 g de tapioca granulada", "400 g de leite de coco", "200 g de água quente", "3 ovos", "80 g de açúcar de coco", "50 g de coco ralado sem açúcar", "40 g de óleo de coco", "8 g de fermento químico"],
  passos: [{ t: "Hidrate a tapioca granulada no leite de coco com a água quente por 20 minutos.", timer: 20 }, FORMA("uma forma quadrada de 20 cm"),
    { t: "Bata no liquidificador os ovos, o açúcar e o óleo. Misture à tapioca, junte o coco ralado e por último o fermento." },
    ASSA(40, "O topo fica dourado e firme."), ESFRIA],
  dica: "Fica ainda melhor no dia seguinte, gelado.",
  aviso: aviso("sgsl", "ovo") });

B({ id: "bf-liq-aveia-maca-passas", sec: "De liquidificador", emoji: "🍎",
  nome: "Bolo de aveia com maçã e uvas-passas",
  intro: "Maçã batida na massa e passas inteiras. Bolo de café da manhã, pouco doce.",
  tempo: 55, nivel: "Fácil", rende: "1 bolo de 20 cm (10 fatias)", tags: ["Liquidificador", "Forno", "Café da manhã"],
  ingredientes: ["1 maçã com casca, sem sementes", "3 ovos", "120 g de leite (ou bebida vegetal)", "60 g de óleo", "70 g de açúcar mascavo", "160 g de aveia em flocos finos", "3 g de canela", "60 g de uvas-passas", "10 g de fermento químico"],
  passos: [FORMA(), LIQ("A aveia vai junto e vira farinha no liquidificador."), { t: "Misture as passas e o fermento com uma colher." }, ASSA(35), ESFRIA],
  dica: "Passas escuras ou brancas, tanto faz. Pode trocar por damasco picado.",
  aviso: aviso("aveia", "leite") });

/* ===================== SEM GLÚTEN E SEM LACTOSE (10) ===================== */
B({ id: "bf-sg-amendoas-laranja", sec: "Sem glúten e sem lactose", emoji: "🍊",
  nome: "Bolo de amêndoas com laranja",
  intro: "Farinha de amêndoas, laranja e azeite. Úmido e denso, estilo bolo europeu.",
  tempo: 55, nivel: "Fácil", rende: "1 bolo de 20 cm (10 fatias)", tags: ["Forno", "Sem glúten", "Sem lactose"],
  ingredientes: ["4 ovos", "100 g de açúcar de coco", "Raspas de 2 laranjas + 80 g de suco", "60 g de azeite suave", "200 g de farinha de amêndoas", "40 g de farinha de arroz", "8 g de fermento químico"],
  passos: [FORMA("uma forma de 20 cm forrada com papel-manteiga no fundo"),
    { t: "Bata os ovos com o açúcar por 4 minutos, até dobrar de volume. Junte as raspas, o suco e o azeite." },
    { t: "Incorpore as farinhas e o fermento, com movimentos leves." }, ASSA(35), ESFRIA],
  dica: "Farinha de amêndoas doura rápido: se escurecer antes da hora, cubra com papel-alumínio.",
  aviso: aviso("sgsl", "ovo") });

B({ id: "bf-sg-arroz-limao", sec: "Sem glúten e sem lactose", emoji: "🍋",
  nome: "Bolo de limão com farinha de arroz",
  intro: "Fofinho, de massa clara, com bebida vegetal e bastante raspa de limão.",
  tempo: 50, nivel: "Fácil", rende: "1 bolo de 20 cm (10 fatias)", tags: ["Forno", "Sem glúten", "Sem lactose"],
  ingredientes: ["3 ovos (claras em neve)", "100 g de açúcar demerara", "120 g de bebida vegetal (aveia sem glúten, amêndoas ou coco)", "60 g de óleo", "Raspas de 2 limões + 30 g de suco", "150 g de farinha de arroz", "40 g de amido de milho", "10 g de fermento químico"],
  passos: [FORMA(), { t: "Bata as claras em neve. Em outra tigela, misture as gemas, o açúcar, a bebida vegetal, o óleo, as raspas e o suco." },
    { t: "Junte a farinha de arroz e o amido. Incorpore as claras e, por último, o fermento." }, ASSA(32), ESFRIA],
  dica: "Farinha de arroz + amido é a dupla que deixa o bolo leve. Só farinha de arroz fica arenoso.",
  aviso: aviso("sgsl", "ovo") });

B({ id: "bf-sg-chocolate-coco", sec: "Sem glúten e sem lactose", emoji: "🍫",
  nome: "Bolo de chocolate com óleo de coco e farinha de arroz",
  intro: "Bolo de chocolate escuro, sem leite e sem trigo, com café para o sabor ficar intenso.",
  tempo: 50, nivel: "Fácil", rende: "1 bolo de 20 cm (10 fatias)", tags: ["Forno", "Sem glúten", "Sem lactose", "Chocolate"],
  ingredientes: ["3 ovos", "150 g de bebida vegetal", "50 g de café coado", "70 g de óleo de coco derretido", "120 g de açúcar de coco", "120 g de farinha de arroz", "30 g de amido de milho", "40 g de cacau em pó 100%", "10 g de fermento químico"],
  passos: [FORMA(), { t: "Misture os ovos, a bebida vegetal, o café, o óleo e o açúcar." },
    { t: "Peneire a farinha, o amido e o cacau sobre a mistura e incorpore. Por último, o fermento." }, ASSA(32), ESFRIA],
  dica: "Confira se o cacau não tem leite na composição (alguns em pó têm).",
  aviso: aviso("sgsl", "ovo") });

B({ id: "bf-sg-coco-arroz", sec: "Sem glúten e sem lactose", emoji: "🥥",
  nome: "Bolo de coco com farinha de arroz",
  intro: "Bolo branco de coco, simples, para o café, sem trigo e sem leite.",
  tempo: 50, nivel: "Fácil", rende: "1 bolo de 20 cm (10 fatias)", tags: ["Forno", "Sem glúten", "Sem lactose"],
  ingredientes: ["3 ovos", "200 g de leite de coco", "50 g de óleo de coco", "100 g de açúcar de coco ou demerara", "150 g de farinha de arroz", "30 g de amido de milho", "50 g de coco ralado sem açúcar", "10 g de fermento químico"],
  passos: [FORMA(), { t: "Misture os ovos, o leite de coco, o óleo e o açúcar. Junte as farinhas, o coco e por último o fermento." }, ASSA(32), ESFRIA],
  dica: "Toste o coco ralado numa frigideira seca antes de usar: o sabor fica muito mais forte.",
  aviso: aviso("sgsl", "ovo") });

B({ id: "bf-sg-banana-amendoas", sec: "Sem glúten e sem lactose", emoji: "🍌",
  nome: "Bolo de banana com farinha de amêndoas",
  intro: "Banana, amêndoas e canela. Úmido, com pedacinhos de castanha no topo.",
  tempo: 50, nivel: "Fácil", rende: "1 bolo inglês (10 fatias)", tags: ["Forno", "Sem glúten", "Sem lactose"],
  ingredientes: ["3 bananas maduras amassadas", "3 ovos", "40 g de óleo de coco", "30 g de açúcar de coco", "150 g de farinha de amêndoas", "50 g de farinha de arroz", "3 g de canela", "8 g de fermento químico", "30 g de castanhas picadas para o topo"],
  passos: [FORMA("uma forma de bolo inglês de 25 cm"), { t: "Misture as bananas, os ovos, o óleo e o açúcar. Junte as farinhas, a canela e o fermento." },
    { t: "Despeje na forma e cubra com as castanhas." }, ASSA(38), ESFRIA],
  dica: "Leva bem pouco açúcar: o doce vem da banana. Para mais doce, use bananas bem pintadas.",
  aviso: aviso("sgsl", "ovo") });

B({ id: "bf-sg-cenoura", sec: "Sem glúten e sem lactose", emoji: "🥕",
  nome: "Bolo de cenoura sem glúten e sem lactose",
  intro: "O bolo de cenoura de liquidificador com farinha de arroz e cobertura de cacau sem leite.",
  tempo: 55, nivel: "Fácil", rende: "1 bolo de 20 cm (10 fatias)", tags: ["Forno", "Liquidificador", "Sem glúten", "Sem lactose"],
  ingredientes: ["250 g de cenoura picada", "3 ovos", "80 g de óleo", "110 g de açúcar de coco", "140 g de farinha de arroz", "40 g de amido de milho", "10 g de fermento químico", "Cobertura: 30 g de cacau, 40 g de açúcar de coco, 60 g de leite de coco, 10 g de óleo de coco"],
  passos: [FORMA(), { t: "Bata a cenoura, os ovos, o óleo e o açúcar. Numa tigela, misture a farinha, o amido e o fermento." }, ASSA(35), ESFRIA,
    { t: "Cobertura: leve tudo ao fogo baixo por 3 a 4 minutos, mexendo, e espalhe no bolo morno." }],
  dica: "Sem glúten, o bolo fica mais delicado. Corte só depois de frio.",
  aviso: aviso("sgsl", "ovo") });

B({ id: "bf-sg-fuba", sec: "Sem glúten e sem lactose", emoji: "🌽",
  nome: "Bolo de fubá com leite de coco",
  intro: "Bolo de fubá sem trigo e sem leite de vaca, com leite de coco e erva-doce.",
  tempo: 50, nivel: "Fácil", rende: "1 bolo de 22 cm com furo (12 fatias)", tags: ["Forno", "Sem glúten", "Sem lactose"],
  ingredientes: ["3 ovos", "250 g de leite de coco", "70 g de óleo", "110 g de açúcar demerara", "170 g de fubá mimoso", "50 g de farinha de arroz", "3 g de erva-doce", "10 g de fermento químico"],
  passos: [FORMA("uma forma com furo no meio de 22 cm"), LIQ(), FERM, { t: "Misture a erva-doce." }, ASSA(35), ESFRIA],
  dica: "Confira se o fubá é sem glúten no rótulo: alguns são processados junto com trigo.",
  aviso: aviso("sgsl", "ovo") });

B({ id: "bf-sg-maracuja", sec: "Sem glúten e sem lactose", emoji: "💛",
  nome: "Bolo de maracujá com calda",
  intro: "Massa leve de maracujá e uma calda de polpa com sementes por cima.",
  tempo: 55, nivel: "Fácil", rende: "1 bolo de 20 cm (10 fatias)", tags: ["Forno", "Sem glúten", "Sem lactose", "Sobremesa"],
  ingredientes: ["3 ovos", "150 g de suco de maracujá concentrado (de 2 frutas)", "60 g de óleo", "110 g de açúcar demerara", "150 g de farinha de arroz", "40 g de amido de milho", "10 g de fermento químico", "Calda: polpa de 1 maracujá + 40 g de açúcar de coco + 30 g de água"],
  passos: [FORMA(), { t: "Bata os ovos, o suco, o óleo e o açúcar. Junte a farinha, o amido e o fermento." }, ASSA(32), ESFRIA,
    { t: "Calda: ferva tudo por 4 minutos em fogo baixo e regue sobre o bolo.", timer: 4 }],
  dica: "Bata a polpa no liquidificador no pulsar e coe para fazer o suco, sem quebrar as sementes.",
  aviso: aviso("sgsl", "ovo") });

B({ id: "bf-sg-cafe-cacau", sec: "Sem glúten e sem lactose", emoji: "☕",
  nome: "Bolo de café com cacau",
  intro: "Para quem gosta de café: massa de café coado com um pouco de cacau e canela.",
  tempo: 50, nivel: "Fácil", rende: "1 bolo de 20 cm (10 fatias)", tags: ["Forno", "Sem glúten", "Sem lactose"],
  ingredientes: ["3 ovos", "150 g de café coado forte, frio", "60 g de óleo", "110 g de açúcar mascavo", "150 g de farinha de arroz", "30 g de amido de milho", "15 g de cacau", "2 g de canela", "10 g de fermento químico"],
  passos: [FORMA(), { t: "Misture os ovos, o café, o óleo e o açúcar. Junte os secos peneirados e por último o fermento." }, ASSA(32), ESFRIA],
  dica: "Polvilhe cacau e canela por cima na hora de servir.",
  aviso: aviso("sgsl", "ovo") });

B({ id: "bf-sg-tapioca-banana", sec: "Sem glúten e sem lactose", emoji: "🍌",
  nome: "Bolo de banana com farinha de tapioca",
  intro: "Bolo elástico e úmido, com goma de tapioca e banana.",
  tempo: 50, nivel: "Fácil", rende: "1 bolo de 20 cm (10 fatias)", tags: ["Forno", "Sem glúten", "Sem lactose"],
  ingredientes: ["2 bananas maduras", "3 ovos", "150 g de leite de coco", "50 g de óleo de coco", "60 g de açúcar de coco", "100 g de farinha de arroz", "60 g de polvilho doce", "3 g de canela", "10 g de fermento químico"],
  passos: [FORMA(), LIQ(), FERM, ASSA(35), ESFRIA],
  dica: "O polvilho doce dá a textura levemente elástica. Não troque por polvilho azedo.",
  aviso: aviso("sgsl", "ovo") });

/* ================== SEM AÇÚCAR: XILITOL OU ERITRITOL (8) ================== */
var XI = "xilitol ou eritritol";
B({ id: "bf-sa-chocolate", sec: "Sem açúcar (xilitol ou eritritol)", emoji: "🍫",
  nome: "Bolo de chocolate sem açúcar",
  intro: "Bolo de cacau adoçado só com " + XI + ". Sem açúcar, sem mel e sem açúcar de coco.",
  tempo: 50, nivel: "Fácil", rende: "1 bolo de 20 cm (10 fatias)", tags: ["Forno", "Sem açúcar", "Chocolate"],
  ingredientes: ["3 ovos", "150 g de leite (ou bebida vegetal)", "70 g de óleo", "90 g de " + XI, "150 g de farinha de aveia", "40 g de cacau em pó 100%", "10 g de fermento químico"],
  passos: [FORMA(), { t: "Misture os ovos, o leite, o óleo e o adoçante. Junte a farinha, o cacau e por último o fermento." }, ASSA(30), ESFRIA],
  dica: "Eritritol pode dar uma sensação refrescante na boca. O xilitol fica mais parecido com açúcar.",
  aviso: aviso("semacucar", "aveia", "leite") });

B({ id: "bf-sa-cenoura", sec: "Sem açúcar (xilitol ou eritritol)", emoji: "🥕",
  nome: "Bolo de cenoura sem açúcar",
  intro: "O bolo de cenoura de liquidificador, adoçado só com " + XI + ".",
  tempo: 55, nivel: "Fácil", rende: "1 bolo de 20 cm (10 fatias)", tags: ["Forno", "Sem açúcar", "Liquidificador"],
  ingredientes: ["250 g de cenoura picada", "3 ovos", "80 g de óleo", "100 g de " + XI, "180 g de farinha de aveia", "10 g de fermento químico"],
  passos: [FORMA(), { t: "Bata a cenoura, os ovos, o óleo e o adoçante. Numa tigela, misture a farinha e o fermento." }, ASSA(35), ESFRIA],
  dica: "Cubra com a Cobertura de chocolate sem açúcar do bônus.",
  aviso: aviso("semacucar", "aveia") });

B({ id: "bf-sa-limao", sec: "Sem açúcar (xilitol ou eritritol)", emoji: "🍋",
  nome: "Bolo de limão sem açúcar",
  intro: "Bolo de limão com iogurte, adoçado com " + XI + ".",
  tempo: 50, nivel: "Fácil", rende: "1 bolo de 20 cm (10 fatias)", tags: ["Forno", "Sem açúcar"],
  ingredientes: ["170 g de iogurte natural", "3 ovos", "60 g de óleo", "90 g de " + XI, "Raspas de 2 limões + 30 g de suco", "180 g de farinha de aveia", "10 g de fermento químico"],
  passos: [FORMA(), { t: "Misture o iogurte, os ovos, o óleo, o adoçante, as raspas e o suco. Junte a farinha e o fermento." }, ASSA(32), ESFRIA],
  dica: "Para um glacê sem açúcar: bata eritritol no liquidificador até virar pó e misture com suco de limão.",
  aviso: aviso("semacucar", "aveia", "leite") });

B({ id: "bf-sa-coco", sec: "Sem açúcar (xilitol ou eritritol)", emoji: "🥥",
  nome: "Bolo de coco sem açúcar",
  intro: "Bolo de coco molhadinho com leite de coco, adoçado com " + XI + ".",
  tempo: 55, nivel: "Fácil", rende: "1 forma de 20 x 20 cm (12 pedaços)", tags: ["Forno", "Sem açúcar", "Sem glúten", "Sem lactose"],
  ingredientes: ["3 ovos", "200 g de leite de coco", "50 g de óleo de coco", "90 g de " + XI, "130 g de farinha de arroz", "40 g de amido de milho", "50 g de coco ralado sem açúcar", "10 g de fermento químico", "Para molhar: 150 g de leite de coco + 20 g de " + XI],
  passos: [FORMA("uma forma quadrada de 20 cm"), { t: "Misture os ovos, o leite de coco, o óleo e o adoçante. Junte as farinhas, o coco e o fermento." }, ASSA(30),
    { t: "Fure o bolo ainda quente e regue o leite de coco adoçado. Leve à geladeira por 2 horas.", timer: 120 }],
  dica: "Coco ralado sem açúcar: o comum de mercado costuma ser adoçado.",
  aviso: aviso("semacucar", "sgsl") });

B({ id: "bf-sa-morango", sec: "Sem açúcar (xilitol ou eritritol)", emoji: "🍓",
  nome: "Bolo de baunilha com morangos sem açúcar",
  intro: "Massa de baunilha com morangos picados, adoçada com " + XI + ".",
  tempo: 50, nivel: "Fácil", rende: "1 bolo de 20 cm (10 fatias)", tags: ["Forno", "Sem açúcar"],
  ingredientes: ["3 ovos", "150 g de leite (ou bebida vegetal)", "60 g de óleo", "90 g de " + XI, "5 g de baunilha", "190 g de farinha de aveia", "10 g de fermento químico", "150 g de morangos picados"],
  passos: [FORMA(), { t: "Misture os ovos, o leite, o óleo, o adoçante e a baunilha. Junte a farinha e o fermento." },
    { t: "Envolva os morangos em uma colher de farinha e misture. Despeje na forma." }, ASSA(35), ESFRIA],
  dica: "Seque bem os morangos depois de lavar: água a mais deixa o bolo pesado em volta da fruta.",
  aviso: aviso("semacucar", "aveia", "leite") });

B({ id: "bf-sa-cafe", sec: "Sem açúcar (xilitol ou eritritol)", emoji: "☕",
  nome: "Bolo de café sem açúcar",
  intro: "Bolo de café coado e canela, adoçado com " + XI + ".",
  tempo: 50, nivel: "Fácil", rende: "1 bolo de 20 cm (10 fatias)", tags: ["Forno", "Sem açúcar"],
  ingredientes: ["3 ovos", "150 g de café coado forte, frio", "60 g de óleo", "90 g de " + XI, "180 g de farinha de aveia", "2 g de canela", "10 g de fermento químico"],
  passos: [FORMA(), { t: "Misture os ovos, o café, o óleo e o adoçante. Junte a farinha, a canela e o fermento." }, ASSA(32), ESFRIA],
  dica: "Café sem açúcar no preparo, claro.",
  aviso: aviso("semacucar", "aveia") });

B({ id: "bf-sa-amendoim", sec: "Sem açúcar (xilitol ou eritritol)", emoji: "🥜",
  nome: "Bolo de pasta de amendoim sem açúcar",
  intro: "Pasta de amendoim integral na massa: sabor de paçoca, adoçado com " + XI + ".",
  tempo: 50, nivel: "Fácil", rende: "1 bolo de 20 cm (10 fatias)", tags: ["Forno", "Sem açúcar"],
  ingredientes: ["3 ovos", "150 g de leite (ou bebida vegetal)", "100 g de pasta de amendoim integral (só amendoim)", "30 g de óleo", "90 g de " + XI, "150 g de farinha de aveia", "10 g de fermento químico", "30 g de amendoim torrado picado para o topo"],
  passos: [FORMA(), { t: "Misture os ovos, o leite, a pasta de amendoim, o óleo e o adoçante até ficar liso." },
    { t: "Junte a farinha e o fermento. Despeje na forma e cubra com o amendoim." }, ASSA(32), ESFRIA],
  dica: "Pasta de amendoim de verdade tem só amendoim no rótulo. As 'cremosas' costumam ter açúcar.",
  aviso: aviso("semacucar", "aveia", "leite") + " Leva amendoim." });

B({ id: "bf-sa-canela-maca", sec: "Sem açúcar (xilitol ou eritritol)", emoji: "🍎",
  nome: "Bolo de maçã com canela sem açúcar",
  intro: "O bolo de maçã com canela, adoçado com " + XI + ".",
  tempo: 55, nivel: "Fácil", rende: "1 bolo de 20 cm (10 fatias)", tags: ["Forno", "Sem açúcar"],
  ingredientes: ["2 maçãs (1 em cubos, 1 em fatias)", "3 ovos", "60 g de óleo", "90 g de " + XI, "120 g de leite (ou bebida vegetal)", "170 g de farinha de aveia", "5 g de canela", "10 g de fermento químico"],
  passos: [FORMA(), { t: "Misture os ovos, o óleo, o adoçante e o leite. Junte a farinha, a canela, o fermento e a maçã em cubos." },
    { t: "Despeje na forma e arrume as fatias por cima." }, ASSA(38), ESFRIA],
  dica: "Maçã gala é mais doce e combina melhor com bolo sem açúcar.",
  aviso: aviso("semacucar", "aveia", "leite") });

/* ================= BÔNUS 1: BOLOS DE CANECA EM 5 MINUTOS (8) ================= */
var CAN = "Bônus · Bolos de caneca em 5 minutos";
function MIC(seg) { return { t: "Leve ao micro-ondas em potência alta por " + seg + " segundos. Se o centro ainda estiver molhado, mais 15 segundos. Espere 1 minuto antes de comer.", timer: 2 }; }
function CANECA(o) { o.sec = CAN; o.tempo = o.tempo || 5; o.nivel = "Fácil"; o.rende = "1 caneca (1 porção)"; o.tags = ["Micro-ondas", "Rápido", "Caneca"].concat(o.tags || []); B(o); }
var MIST = "Numa caneca grande (de 300 ml), misture bem com um garfo todos os ingredientes, deixando o fermento por último.";
CANECA({ id: "bf-can-chocolate", emoji: "🍫", nome: "Bolo de caneca de chocolate", intro: "O clássico da vontade de doce às 10 da noite.",
  ingredientes: ["1 ovo", "30 g de leite (ou bebida vegetal)", "10 g de óleo", "15 g de açúcar de coco", "20 g de farinha de aveia", "8 g de cacau", "2 g de fermento químico (1/2 colher de chá)"],
  passos: [{ t: MIST }, MIC(90)], dica: "Coloque 3 quadradinhos de chocolate 70% no meio da massa antes de ir ao micro-ondas.", aviso: aviso("aveia", "leite") });
CANECA({ id: "bf-can-banana", emoji: "🍌", nome: "Bolo de caneca de banana com canela", intro: "Meia banana, um ovo e aveia.",
  ingredientes: ["1/2 banana madura amassada", "1 ovo", "5 g de óleo de coco", "25 g de farinha de aveia", "1 pitada de canela", "2 g de fermento químico"],
  passos: [{ t: "Amasse a banana na própria caneca. " + MIST }, MIC(90)], dica: "O doce vem da banana: quanto mais madura, mais doce.", aviso: aviso("aveia") });
CANECA({ id: "bf-can-cenoura", emoji: "🥕", nome: "Bolo de caneca de cenoura", intro: "Com cenoura ralada fina, sem precisar de liquidificador.",
  ingredientes: ["30 g de cenoura ralada fina", "1 ovo", "10 g de óleo", "15 g de açúcar de coco", "25 g de farinha de aveia", "2 g de fermento químico"],
  passos: [{ t: MIST }, MIC(100)], dica: "Use o lado mais fino do ralador.", aviso: aviso("aveia") });
CANECA({ id: "bf-can-coco", emoji: "🥥", nome: "Bolo de caneca de coco sem glúten", intro: "Com farinha de arroz e leite de coco.",
  ingredientes: ["1 ovo", "30 g de leite de coco", "10 g de óleo de coco", "15 g de açúcar de coco", "20 g de farinha de arroz", "10 g de coco ralado sem açúcar", "2 g de fermento químico"],
  passos: [{ t: MIST }, MIC(90)], dica: "Polvilhe coco ralado por cima antes de levar ao micro-ondas.", aviso: aviso("sgsl") });
CANECA({ id: "bf-can-pasta-amendoim", emoji: "🥜", nome: "Bolo de caneca de pasta de amendoim", intro: "Sabor de paçoca em 2 minutos.",
  ingredientes: ["1 ovo", "20 g de pasta de amendoim integral", "20 g de leite (ou bebida vegetal)", "15 g de açúcar de coco", "20 g de farinha de aveia", "2 g de fermento químico"],
  passos: [{ t: MIST }, MIC(80)], dica: "Fica ótimo com rodelas de banana por cima.", aviso: aviso("aveia", "leite") + " Leva amendoim." });
CANECA({ id: "bf-can-limao", emoji: "🍋", nome: "Bolo de caneca de limão", intro: "Leve e cítrico, com iogurte.",
  ingredientes: ["1 ovo", "30 g de iogurte natural", "10 g de óleo", "15 g de açúcar demerara", "Raspas de 1/2 limão", "25 g de farinha de aveia", "2 g de fermento químico"],
  passos: [{ t: MIST }, MIC(90)], dica: "Regue com uma colher de suco de limão com mel ao sair.", aviso: aviso("aveia", "leite") });
CANECA({ id: "bf-can-chocolate-sem-acucar", emoji: "🍫", nome: "Bolo de caneca de chocolate sem açúcar", intro: "A versão sem açúcar, com " + XI + ".",
  ingredientes: ["1 ovo", "30 g de leite (ou bebida vegetal)", "10 g de óleo", "15 g de " + XI, "20 g de farinha de aveia", "8 g de cacau", "2 g de fermento químico"],
  passos: [{ t: MIST }, MIC(90)], dica: "Use chocolate 70% sem açúcar no meio, se quiser recheio.", aviso: aviso("semacucar", "aveia", "leite"), tags: ["Sem açúcar"] });
CANECA({ id: "bf-can-red-velvet", emoji: "❤️", nome: "Bolo de caneca red velvet de beterraba", intro: "A cor vermelha vem da beterraba, sem corante.",
  ingredientes: ["1 ovo", "25 g de beterraba crua ralada bem fina", "20 g de iogurte natural", "10 g de óleo", "15 g de açúcar de coco", "20 g de farinha de aveia", "3 g de cacau", "2 g de fermento químico"],
  passos: [{ t: MIST }, MIC(100)], dica: "Cubra com 1 colher de iogurte grego batido com mel.", aviso: aviso("aveia", "leite") });

/* ================= BÔNUS 2: DOCINHOS FIT DE FESTA (6) ================= */
var DOC = "Bônus · Docinhos fit de festa";
function D(o) { o.sec = DOC; o.nivel = o.nivel || "Fácil"; o.tags = ["Festa", "Docinho"].concat(o.tags || []); B(o); }
D({ id: "bf-doc-brigadeiro", emoji: "🍫", nome: "Brigadeiro fit de cacau e leite de coco",
  intro: "Brigadeiro de panela sem leite condensado, com leite de coco e açúcar de coco.", tempo: 40, rende: "20 docinhos",
  ingredientes: ["400 g de leite de coco", "80 g de açúcar de coco", "30 g de cacau em pó 100%", "15 g de amido de milho", "10 g de óleo de coco", "Cacau ou granulado de chocolate 70% para enrolar"],
  passos: [{ t: "Misture o leite de coco, o açúcar, o cacau e o amido na panela, ainda fria, até dissolver." },
    { t: "Leve ao fogo baixo mexendo sempre por 15 a 20 minutos, até soltar do fundo da panela. Junte o óleo de coco.", timer: 18 },
    { t: "Passe para um prato untado e leve à geladeira por 2 horas. Enrole bolinhas de 15 g e passe no cacau.", timer: 120 }],
  dica: "O amido é o que faz o brigadeiro sem leite condensado dar ponto de enrolar.", aviso: aviso("sgsl") });
D({ id: "bf-doc-beijinho", emoji: "🥥", nome: "Beijinho fit de coco",
  intro: "Beijinho com leite de coco e coco ralado sem açúcar.", tempo: 40, rende: "20 docinhos",
  ingredientes: ["400 g de leite de coco", "70 g de açúcar demerara ou de coco", "15 g de amido de milho", "60 g de coco ralado sem açúcar", "10 g de óleo de coco", "Coco ralado para enrolar", "Cravos-da-índia para decorar (opcional)"],
  passos: [{ t: "Misture o leite de coco, o açúcar e o amido na panela fria. Leve ao fogo baixo mexendo por 15 minutos.", timer: 15 },
    { t: "Junte o coco ralado e o óleo de coco e mexa mais 5 minutos, até soltar da panela.", timer: 5 },
    { t: "Esfrie na geladeira por 2 horas, enrole e passe no coco ralado.", timer: 120 }],
  dica: "Com açúcar de coco o beijinho fica caramelo-claro; com demerara, mais branquinho.", aviso: aviso("sgsl") });
D({ id: "bf-doc-bolinha-tamara", emoji: "🌰", nome: "Bolinha de tâmara com cacau e castanha",
  intro: "Sem fogo: o doce vem da própria tâmara.", tempo: 20, rende: "15 bolinhas",
  ingredientes: ["150 g de tâmaras sem caroço", "80 g de castanha-de-caju ou amêndoas", "15 g de cacau em pó 100%", "10 g de óleo de coco", "Coco ralado ou cacau para enrolar"],
  passos: [{ t: "Se as tâmaras estiverem secas, deixe 10 minutos em água quente e escorra bem.", timer: 10 },
    { t: "Triture tudo no processador até formar uma massa que gruda quando apertada. Enrole bolinhas de 15 g e passe no coco." }],
  dica: "Sem processador: pique tudo bem fino com faca e amasse com as mãos.", aviso: aviso("sgsl") + " Leva castanhas." });
D({ id: "bf-doc-trufa-sem-acucar", emoji: "🍫", nome: "Trufa de chocolate sem açúcar",
  intro: "Ganache de chocolate sem açúcar e creme de coco, enrolada no cacau.", tempo: 30, rende: "15 trufas",
  ingredientes: ["150 g de chocolate 70% sem açúcar (adoçado com " + XI + ")", "80 g de creme de leite de coco", "Cacau em pó para enrolar"],
  passos: [{ t: "Derreta o chocolate com o creme de coco no micro-ondas, de 30 em 30 segundos, mexendo entre cada vez." },
    { t: "Leve à geladeira por 2 horas, até firmar. Faça bolinhas com uma colher e passe no cacau.", timer: 120 }],
  dica: "Confira no rótulo do chocolate se o adoçante é xilitol ou eritritol.", aviso: aviso("semacucar", "sgsl"), tags: ["Sem açúcar"] });
D({ id: "bf-doc-cajuzinho", emoji: "🥜", nome: "Cajuzinho fit de amendoim",
  intro: "Amendoim, cacau e tâmara: o sabor de cajuzinho sem leite condensado.", tempo: 25, rende: "15 docinhos",
  ingredientes: ["150 g de amendoim torrado sem sal", "100 g de tâmaras sem caroço", "10 g de cacau", "1 pitada de sal", "Amendoins inteiros para decorar"],
  passos: [{ t: "Triture o amendoim até virar farofa. Junte as tâmaras, o cacau e o sal e triture até formar massa." },
    { t: "Modele no formato de caju e coloque um amendoim no topo." }],
  dica: "Se a massa ficar seca, junte 1 colher de chá de água.", aviso: aviso("sgsl") + " Leva amendoim." });
D({ id: "bf-doc-brigadeiro-banana", emoji: "🍌", nome: "Brigadeiro de banana com cacau de colher",
  intro: "Banana cozida com cacau até virar creme: para comer de colher ou rechear bolo.", tempo: 25, rende: "1 potinho (6 porções)",
  ingredientes: ["3 bananas maduras", "20 g de cacau", "50 g de leite de coco", "1 pitada de canela"],
  passos: [{ t: "Amasse as bananas na panela e junte o cacau, o leite de coco e a canela." },
    { t: "Cozinhe em fogo baixo mexendo por 10 a 12 minutos, até engrossar.", timer: 12 }],
  dica: "Serve de recheio para os bolos de chocolate da coleção.", aviso: aviso("sgsl") });

/* ================= BÔNUS 3: COBERTURAS E CALDAS FIT (6) ================= */
var COB = "Bônus · Coberturas e caldas fit";
function C(o) { o.sec = COB; o.nivel = "Fácil"; o.tags = ["Cobertura"].concat(o.tags || []); B(o); }
C({ id: "bf-cob-chocolate", emoji: "🍫", nome: "Calda de chocolate fit", intro: "A calda escorrida de cacau para qualquer bolo.", tempo: 10, rende: "Para 1 bolo de 20 cm",
  ingredientes: ["30 g de cacau em pó 100%", "50 g de açúcar de coco", "80 g de leite (ou de coco)", "10 g de óleo de coco"],
  passos: [{ t: "Misture tudo na panela fria e leve ao fogo baixo, mexendo, por 3 a 4 minutos, até engrossar levemente.", timer: 4 }, { t: "Use morna, sobre o bolo também morno." }],
  dica: "Se engrossar demais ao esfriar, junte um pouco de leite e aqueça.", aviso: aviso("leite") });
C({ id: "bf-cob-chocolate-sem-acucar", emoji: "🍫", nome: "Cobertura de chocolate sem açúcar", intro: "Ganache rápida de chocolate sem açúcar.", tempo: 10, rende: "Para 1 bolo de 20 cm",
  ingredientes: ["100 g de chocolate 70% sem açúcar (adoçado com " + XI + ")", "80 g de creme de leite (ou de coco)"],
  passos: [{ t: "Derreta os dois juntos no micro-ondas de 30 em 30 segundos, mexendo. Espere 5 minutos e espalhe." }],
  dica: "Com creme de coco ela fica sem lactose.", aviso: aviso("semacucar"), tags: ["Sem açúcar"] });
C({ id: "bf-cob-iogurte", emoji: "🥛", nome: "Cobertura de iogurte grego com mel", intro: "Branca, cremosa e levemente azedinha.", tempo: 5, rende: "Para 1 bolo de 20 cm",
  ingredientes: ["170 g de iogurte grego natural", "20 g de mel", "Raspas de limão (opcional)"],
  passos: [{ t: "Misture tudo e espalhe sobre o bolo frio. Guarde na geladeira." }],
  dica: "Fica ótima sobre os bolos de cenoura, limão e frutas vermelhas.", aviso: aviso("leite") });
C({ id: "bf-cob-calda-laranja", emoji: "🍊", nome: "Calda de laranja", intro: "Para molhar bolos de laranja, cenoura ou fubá.", tempo: 8, rende: "Para 1 bolo",
  ingredientes: ["150 g de suco de laranja", "30 g de açúcar de coco ou mel", "Raspas de 1/2 laranja"],
  passos: [{ t: "Ferva tudo em fogo baixo por 5 minutos e regue o bolo ainda quente, furado com garfo.", timer: 5 }],
  dica: "Bolo quente + calda quente = bolo bem molhado.", aviso: aviso("sgsl") });
C({ id: "bf-cob-frutas-vermelhas", emoji: "🍓", nome: "Calda de frutas vermelhas", intro: "Calda de frutas com pedaços, sem açúcar refinado.", tempo: 12, rende: "1 potinho",
  ingredientes: ["200 g de frutas vermelhas (frescas ou congeladas)", "20 g de mel ou açúcar de coco", "10 g de suco de limão", "5 g de amido de milho + 20 g de água"],
  passos: [{ t: "Cozinhe as frutas com o mel e o limão por 6 minutos.", timer: 6 }, { t: "Junte o amido dissolvido na água e mexa por mais 1 minuto, até engrossar." }],
  dica: "Para a versão sem açúcar, troque o mel por " + XI + ".", aviso: aviso("sgsl") });
C({ id: "bf-cob-pasta-amendoim", emoji: "🥜", nome: "Cobertura de pasta de amendoim com cacau", intro: "Cremosa e com gosto de bombom.", tempo: 5, rende: "Para 1 bolo de 20 cm",
  ingredientes: ["80 g de pasta de amendoim integral", "15 g de cacau", "30 g de mel", "40 g de leite (ou bebida vegetal) morno"],
  passos: [{ t: "Misture tudo até ficar liso e espalhe sobre o bolo." }],
  dica: "Morna, ela escorre; fria, fica firme.", aviso: aviso("leite") + " Leva amendoim." });

/* ================= BÔNUS 4 e 5: GUIAS ================= */
window.GUIAS.push(
  { id: "bf-substituicoes", produto: "bolos", col: "bolos", emoji: "🔄", nome: "Guia de substituições para bolos fit",
    sub: "Farinhas, leite, ovo, açúcar e gordura: o que troca pelo quê",
    itens: [
      { n: "Farinhas", t: "Farinha de aveia ↔ farinha de trigo integral fina: troca 1 por 1.\nFarinha de aveia → sem glúten: 75% farinha de arroz + 25% amido de milho (ex.: 150 g = 112 g de arroz + 38 g de amido).\nFarinha de amêndoas: use no máximo metade do total da farinha, junto com farinha de arroz. Só amêndoas deixa o bolo pesado.\nFaça farinha de aveia em casa: bata aveia em flocos no liquidificador até virar pó." },
      { n: "Leite e iogurte", t: "Leite → bebida vegetal (aveia, amêndoas, coco) ou leite de coco diluído (metade leite de coco, metade água): troca 1 por 1.\nIogurte natural → iogurte sem lactose ou iogurte de coco." },
      { n: "Ovos", t: "Cada ovo pode ser trocado por 1 colher de sopa de linhaça dourada moída + 3 colheres de sopa de água (deixe 10 minutos).\nUse no máximo 2 ovos de linhaça por receita: o bolo fica mais baixo e mais úmido.\nNos bolos com claras em neve, não troque os ovos." },
      { n: "Açúcar", t: "Açúcar de coco ↔ açúcar mascavo ↔ demerara: troca 1 por 1.\nPara a versão sem açúcar: xilitol ou eritritol, 1 por 1 no peso.\nMel: use 80% do peso do açúcar e tire 20 g do líquido da receita.\nBanana bem madura amassada adoça muito: cada banana permite tirar uns 25 g de açúcar." },
      { n: "Gordura", t: "Óleo de girassol ↔ óleo de coco derretido ↔ azeite suave: troca 1 por 1.\nPara tirar parte do óleo: troque até metade por purê de maçã ou de banana." },
      { n: "Fermento", t: "Fermento químico sempre por último, misturado sem bater. Em bolos sem glúten, confira o rótulo do fermento." }
    ] },
  { id: "bf-sos", produto: "bolos", col: "bolos", emoji: "🆘", nome: "SOS do bolo fofinho",
    sub: "12 problemas comuns em bolo fit: a causa e como corrigir",
    itens: [
      { n: "1. Bolo solou (afundou no meio)", t: "Causa: forno aberto cedo, fermento demais ou bolo tirado antes da hora.\nComo evitar: não abra o forno nos primeiros 20 minutos, meça o fermento na colher rasa e confira com o palito no centro." },
      { n: "2. Embatumou (faixa úmida e pesada embaixo)", t: "Causa: massa batida demais depois da farinha, ou líquido demais.\nComo evitar: depois da farinha, só misture até sumir o pó. Escorra bem frutas e purês." },
      { n: "3. Ficou seco", t: "Causa: tempo demais no forno ou farinha medida a mais.\nComo evitar: pese a farinha. Confira o palito 5 minutos antes do tempo." },
      { n: "4. Ficou borrachudo", t: "Causa: bateu demais a massa ou usou só farinha de arroz.\nComo evitar: misture pouco e use farinha de arroz junto com amido." },
      { n: "5. Rachou muito em cima", t: "Causa: forno quente demais.\nComo evitar: confira a temperatura; se o seu forno esquenta muito, use 170 °C." },
      { n: "6. Queimou embaixo e ficou cru em cima", t: "Causa: forma escura ou grade muito baixa.\nComo evitar: asse na grade do meio. Forma escura: reduza 10 °C." },
      { n: "7. Grudou na forma", t: "Causa: desenformou quente ou não untou bem.\nComo evitar: forre o fundo com papel-manteiga e espere 15 minutos para desenformar." },
      { n: "8. Quebrou ao desenformar", t: "Causa: bolo sem glúten é mais frágil quente.\nComo evitar: espere esfriar mais e use forma de fundo removível." },
      { n: "9. As frutas ou gotas afundaram", t: "Causa: massa mole e pedaços pesados.\nComo evitar: envolva frutas e gotas em uma colher de farinha antes de misturar." },
      { n: "10. Ficou com gosto amargo", t: "Causa: excesso de fermento, cacau alcalino demais, ou parte branca da casca de limão/laranja.\nComo evitar: meça o fermento e rale só a casca colorida." },
      { n: "11. Frigideira: queimou embaixo, cru em cima", t: "Causa: fogo alto.\nComo evitar: fogo baixo de verdade e tampa fechada o tempo todo." },
      { n: "12. Caneca: transbordou ou ficou duro", t: "Causa: caneca pequena ou tempo demais.\nComo evitar: caneca de 300 ml, encha só até a metade e vá de 15 em 15 segundos no final." }
    ] }
);

})();
