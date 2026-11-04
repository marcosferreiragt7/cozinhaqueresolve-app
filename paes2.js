/* ================================================================
   PÃES QUE RESOLVEM — Premium: +100 pães (8 seções)
   premium: "pao_premium". Carregar DEPOIS de paes.js.
   ================================================================ */
(function () {
var R = window.RECEITAS;
window.SECOES.pao = window.SECOES.pao.concat(["Premium · Pães doces e de festa", "Premium · Recheados", "Premium · Pizzas e esfihas",
  "Premium · Sem glúten avançado", "Premium · Low carb e proteicos", "Premium · Fermentação natural",
  "Premium · Pães do mundo", "Premium · Lanches e sanduíches"]);

var AV = {
  trigo: "Leva farinha de trigo (contém glúten).",
  leite: "Leva leite, manteiga ou queijo (contém lactose).",
  ovo: "Leva ovos.",
  aveia: "Leva aveia: a comum pode ter traços de glúten.",
  sgsl: "Sem glúten e sem lactose: confira no rótulo de cada ingrediente (farinhas, fermento, polvilho, psyllium) se não há glúten nem leite. Use utensílios limpos para evitar contaminação com trigo.",
  sg: "Sem glúten: confira no rótulo de farinhas, fermento e polvilho. Use utensílios limpos para evitar contaminação com trigo.",
  castanha: "Leva amêndoas, nozes ou castanhas.",
  gergelim: "Leva gergelim.",
  peixe: "Leva peixe.",
  levain: "Fermento natural: veja o bônus \"Fermento natural do zero\" para fazer e manter o seu."
};
function av() { return Array.prototype.slice.call(arguments).map(function (k) { return AV[k]; }).join(" "); }

function SOVA(min) { return { t: "Sove por cerca de " + min + " minutos, até a massa ficar lisa, elástica e não grudar nas mãos (teste da membrana: estique um pedacinho; deve formar uma película fina sem rasgar).", timer: min }; }
function CRESCE(min, o) { return { t: "Cubra e deixe crescer em lugar sem vento até " + (o || "dobrar de volume") + ", cerca de " + min + " minutos (mais tempo em dia frio).", timer: min }; }
function FORNO(temp, min, extra) { return { t: "Preaqueça o forno a " + temp + " °C por 15 minutos e asse por " + min + " minutos" + (extra ? ", " + extra : "") + ", até dourar.", timer: min }; }
var ESFRIA = { t: "Deixe esfriar sobre uma grade antes de cortar.", timer: 20 };
var ESFRIA_SG = { t: "Espere esfriar totalmente (1 hora) antes de cortar: pão sem glúten cortado quente fica grudento.", timer: 60 };
var PINCELA = { t: "Pincele com 1 gema batida com 1 colher de leite." };

/* massas-base (ingredientes + passos iniciais) */
var DOCE_I = ["500 g de farinha de trigo", "10 g de fermento biológico seco", "80 g de açúcar", "7 g de sal", "220 g de leite morno", "2 ovos", "80 g de manteiga em temperatura ambiente"];
var DOCE_P = [{ t: "Misture a farinha, o fermento e o açúcar. Junte o leite morno e os ovos, depois o sal e a manteiga aos poucos." }, SOVA(12), CRESCE(60)];
var SAL_I = ["500 g de farinha de trigo", "10 g de fermento biológico seco", "20 g de açúcar", "10 g de sal", "280 g de leite morno (ou água)", "1 ovo", "50 g de óleo ou manteiga"];
var SAL_P = [{ t: "Misture a farinha, o fermento e o açúcar. Junte o leite e o ovo, depois o sal e a gordura." }, SOVA(10), CRESCE(60)];
var PIZZA_I = ["500 g de farinha de trigo", "5 g de fermento biológico seco", "10 g de açúcar", "10 g de sal", "320 g de água fria", "30 g de azeite"];
var PIZZA_P = [{ t: "Misture a farinha, o fermento e o açúcar. Junte a água e o azeite, depois o sal." }, SOVA(8), CRESCE(60)];
function base(I, extra) { return I.concat(extra || []); }
function passos(Pb, extra) { return Pb.concat(extra); }

function P(o) { o.col = "pao"; o.premium = "pao_premium"; o.foto = o.foto || ""; R.push(o); }

/* =============== PÃES DOCES E DE FESTA (13) =============== */
var S = "Premium · Pães doces e de festa";
P({ id: "pq-brioche", sec: S, emoji: "🧈", nome: "Brioche de manteiga",
  intro: "Miolo amarelo, macio e amanteigado, que se desfaz em lâminas. A manteiga entra depois da sova, aos poucos.",
  tempo: 240, nivel: "Médio", rende: "1 pão de forma (14 fatias)", tags: ["Forno", "Café da manhã", "Para receber"],
  ingredientes: ["400 g de farinha de trigo", "8 g de fermento biológico seco", "50 g de açúcar", "7 g de sal", "4 ovos", "60 g de leite morno", "150 g de manteiga gelada em cubos", "1 gema para pincelar"],
  passos: [{ t: "Misture a farinha, o fermento e o açúcar. Junte os ovos e o leite e sove 8 minutos. Junte o sal." },
    { t: "Acrescente a manteiga em 4 vezes, sovando até cada parte sumir antes de pôr a próxima. A massa fica mole e brilhante; sove mais 6 a 8 minutos até soltar das mãos." },
    { t: "Cubra e leve à geladeira de 4 horas a uma noite: a manteiga firma e a massa fica fácil de modelar.", timer: 240 },
    { t: "Divida em 3 bolas, coloque lado a lado na forma untada." }, CRESCE(90, "chegar à borda da forma"), PINCELA, FORNO(180, 30), ESFRIA],
  aviso: av("trigo", "leite", "ovo") });

P({ id: "pq-doce-creme", sec: S, emoji: "🥐", nome: "Pão doce de padaria com creme",
  intro: "O pão doce de vitrine: massa fofinha, creme de confeiteiro no meio e coco ralado em cima.",
  tempo: 180, nivel: "Médio", rende: "10 pães", tags: ["Forno", "Café da tarde"],
  ingredientes: base(DOCE_I, ["Creme: 300 g de leite, 2 gemas, 50 g de açúcar, 25 g de amido de milho, baunilha", "Coco ralado para o topo", "1 gema para pincelar"]),
  passos: passos(DOCE_P, [{ t: "Creme: cozinhe tudo mexendo até engrossar. Cubra com filme encostado e deixe esfriar." },
    { t: "Divida a massa em 10 bolas, achate e afunde o centro com o fundo de um copo. Coloque 1 colher de creme no centro." },
    CRESCE(40), PINCELA, { t: "Polvilhe coco nas bordas." }, FORNO(180, 22), ESFRIA]),
  aviso: av("trigo", "leite", "ovo") });

P({ id: "pq-sonho-assado", sec: S, emoji: "🍩", nome: "Sonho assado",
  intro: "Sonho de padaria sem fritura: assado, recheado com creme e passado no açúcar.",
  tempo: 180, nivel: "Médio", rende: "12 sonhos", tags: ["Forno", "Sem fritura", "Café da tarde"],
  ingredientes: base(DOCE_I, ["Creme de confeiteiro (o mesmo do pão doce com creme)", "Açúcar de confeiteiro para polvilhar", "40 g de manteiga derretida"]),
  passos: passos(DOCE_P, [{ t: "Divida em 12 bolas de 75 g, boleie bem e arrume na assadeira com espaço." },
    CRESCE(45), FORNO(180, 18, "só até dourar levemente (sonho escuro fica seco)"),
    { t: "Ainda mornos, pincele manteiga e passe no açúcar. Abra um corte de lado e recheie com o creme usando saco de confeitar." }]),
  aviso: av("trigo", "leite", "ovo") });

P({ id: "pq-cinnamon", sec: S, emoji: "🌀", nome: "Rolinhos de canela",
  intro: "Massa macia enrolada com manteiga, açúcar mascavo e canela, coberta com glacê. Cheiro de domingo de manhã.",
  tempo: 180, nivel: "Médio", rende: "12 rolinhos", tags: ["Forno", "Café da manhã", "Para receber"],
  ingredientes: base(DOCE_I, ["Recheio: 80 g de manteiga mole, 120 g de açúcar mascavo, 10 g de canela", "Glacê: 100 g de açúcar de confeiteiro + 20 g de leite"]),
  passos: passos(DOCE_P, [{ t: "Abra a massa num retângulo de 45 x 30 cm. Espalhe a manteiga e polvilhe o açúcar com a canela." },
    { t: "Enrole pelo lado comprido, bem apertado. Corte com linha ou faca afiada em 12 rolos." },
    { t: "Arrume numa assadeira de 30 x 20 cm untada, encostados." }, CRESCE(45), FORNO(180, 25),
    { t: "Misture o glacê e espalhe sobre os rolinhos ainda mornos." }]),
  aviso: av("trigo", "leite", "ovo") });

P({ id: "pq-babka", sec: S, emoji: "🍫", nome: "Babka de chocolate",
  intro: "Pão trançado com camadas de chocolate que aparecem em cada fatia. Impressiona e é mais fácil do que parece.",
  tempo: 260, nivel: "Difícil", rende: "1 pão de forma (12 fatias)", tags: ["Forno", "Para receber"],
  ingredientes: ["350 g de farinha de trigo", "7 g de fermento biológico seco", "60 g de açúcar", "5 g de sal", "2 ovos", "100 g de leite morno", "80 g de manteiga", "Recheio: 100 g de chocolate meio amargo, 70 g de manteiga, 40 g de açúcar, 15 g de cacau", "Calda: 60 g de açúcar + 60 g de água fervidos 2 minutos"],
  passos: [{ t: "Faça a massa como a de brioche (manteiga depois da sova) e leve à geladeira por 3 horas.", timer: 180 },
    { t: "Derreta o chocolate com a manteiga, junte o açúcar e o cacau e deixe esfriar até virar pasta." },
    { t: "Abra a massa num retângulo de 40 x 30 cm, espalhe o recheio e enrole pelo lado comprido. Leve 15 minutos ao congelador.", timer: 15 },
    { t: "Corte o rolo ao meio no comprimento e torça as duas metades uma sobre a outra, com o corte para cima. Coloque na forma." },
    CRESCE(60, "crescer bem"), FORNO(175, 40), { t: "Pincele a calda assim que sair do forno." }, ESFRIA],
  aviso: av("trigo", "leite", "ovo") });

P({ id: "pq-rosca-coco", sec: S, emoji: "🥥", nome: "Rosca de coco",
  intro: "Rosca trançada recheada de coco úmido, com cobertura de leite condensado. Clássico de café da tarde.",
  tempo: 190, nivel: "Médio", rende: "1 rosca grande (14 pedaços)", tags: ["Forno", "Café da tarde"],
  ingredientes: base(DOCE_I, ["Recheio: 100 g de coco ralado, 100 g de leite condensado, 30 g de leite", "Cobertura: 100 g de leite condensado + coco ralado", "1 gema"]),
  passos: passos(DOCE_P, [{ t: "Misture o recheio. Abra a massa num retângulo, espalhe o recheio e enrole." },
    { t: "Corte no comprimento, trance as duas metades e una as pontas formando uma coroa." },
    CRESCE(40), PINCELA, FORNO(180, 30), { t: "Espalhe o leite condensado e o coco sobre a rosca morna." }]),
  aviso: av("trigo", "leite", "ovo") });

P({ id: "pq-tranca-goiabada", sec: S, emoji: "🍬", nome: "Trança de goiabada e queijo",
  intro: "Romeu e julieta em forma de pão: goiabada cremosa e queijo branco numa trança dourada.",
  tempo: 180, nivel: "Médio", rende: "1 trança (12 fatias)", tags: ["Forno", "Café da tarde"],
  ingredientes: base(DOCE_I, ["200 g de goiabada cremosa ou derretida com 2 colheres de água", "150 g de queijo minas padrão em cubinhos", "1 gema", "Açúcar cristal para o topo"]),
  passos: passos(DOCE_P, [{ t: "Abra a massa num retângulo de 35 x 25 cm. No terço central, coloque a goiabada e o queijo." },
    { t: "Corte as laterais em tiras diagonais de 2 cm e cruze sobre o recheio, alternando, como uma trança." },
    CRESCE(40), PINCELA, { t: "Polvilhe açúcar cristal." }, FORNO(180, 30), ESFRIA]),
  aviso: av("trigo", "leite", "ovo") });

P({ id: "pq-rosca-lc", sec: S, emoji: "🥛", nome: "Rosca de leite condensado",
  intro: "Massa feita com leite condensado: miolo úmido, doce e perfumado, sem recheio.",
  tempo: 170, nivel: "Fácil", rende: "1 rosca (12 pedaços)", tags: ["Forno", "Café da tarde"],
  ingredientes: ["500 g de farinha de trigo", "10 g de fermento biológico seco", "200 g de leite condensado", "120 g de leite morno", "1 ovo", "50 g de manteiga", "5 g de sal", "1 gema"],
  passos: [{ t: "Misture a farinha e o fermento. Junte o leite condensado, o leite e o ovo, depois o sal e a manteiga." },
    SOVA(10), CRESCE(60),
    { t: "Divida em 3 rolos de 50 cm, trance e una as pontas em círculo numa forma de buraco untada." },
    CRESCE(40), PINCELA, FORNO(180, 30), ESFRIA],
  aviso: av("trigo", "leite", "ovo") });

P({ id: "pq-doce-laranja", sec: S, emoji: "🍊", nome: "Pão doce de laranja",
  intro: "Raspas e suco de laranja na massa e uma calda brilhante por cima. Perfumado do forno à mesa.",
  tempo: 170, nivel: "Fácil", rende: "12 pãezinhos", tags: ["Forno", "Café da tarde"],
  ingredientes: ["500 g de farinha de trigo", "10 g de fermento biológico seco", "90 g de açúcar", "6 g de sal", "120 g de suco de laranja", "100 g de leite morno", "2 ovos", "70 g de manteiga", "Raspas de 2 laranjas", "Calda: 80 g de suco de laranja + 60 g de açúcar"],
  passos: [{ t: "Misture a farinha, o fermento, o açúcar e as raspas. Junte o suco, o leite e os ovos, depois o sal e a manteiga." },
    SOVA(12), CRESCE(60), { t: "Faça 12 bolinhas e arrume na assadeira encostadas." },
    CRESCE(40), FORNO(180, 22), { t: "Ferva a calda por 3 minutos e pincele nos pães quentes." }],
  aviso: av("trigo", "leite", "ovo") });

P({ id: "pq-delicia", sec: S, emoji: "🧀", nome: "Pão delícia",
  intro: "Bolinhas de massa amanteigada, pinceladas com manteiga e passadas no queijo ralado. Some na festa.",
  tempo: 150, nivel: "Fácil", rende: "30 pãezinhos", tags: ["Forno", "Festa", "Congela bem"],
  ingredientes: ["500 g de farinha de trigo", "10 g de fermento biológico seco", "40 g de açúcar", "8 g de sal", "200 g de leite morno", "2 ovos", "100 g de manteiga", "Para finalizar: 60 g de manteiga derretida + 80 g de queijo parmesão ralado fino"],
  passos: [{ t: "Misture a farinha, o fermento e o açúcar, junte o leite e os ovos, depois o sal e a manteiga." },
    SOVA(10), CRESCE(50), { t: "Faça 30 bolinhas de 30 g e arrume na assadeira encostadas." },
    CRESCE(30), FORNO(180, 18),
    { t: "Ainda quentes, pincele manteiga derretida e polvilhe o queijo ralado." }],
  aviso: av("trigo", "leite", "ovo") });

P({ id: "pq-coco-fofo", sec: S, emoji: "🥥", nome: "Pão de coco fofinho",
  intro: "Leite de coco na massa e coco por cima: um pão doce leve, com gosto de praia.",
  tempo: 170, nivel: "Fácil", rende: "1 pão de forma (14 fatias)", tags: ["Forno", "Café da manhã"],
  ingredientes: ["500 g de farinha de trigo", "10 g de fermento biológico seco", "70 g de açúcar", "6 g de sal", "200 g de leite de coco", "80 g de água morna", "1 ovo", "40 g de óleo de coco", "40 g de coco ralado (+ para o topo)"],
  passos: [{ t: "Misture a farinha, o fermento, o açúcar e o coco. Junte o leite de coco morno, a água e o ovo, depois o sal e o óleo." },
    SOVA(10), CRESCE(60), { t: "Modele um rocambole e coloque na forma. Pincele água e polvilhe coco." },
    CRESCE(45), FORNO(180, 32), ESFRIA],
  aviso: av("trigo", "ovo") });

P({ id: "pq-gotas", sec: S, emoji: "🍫", nome: "Pão de leite com gotas de chocolate",
  intro: "Pão de leite com gotas de chocolate que não derretem no forno. Lanche que as crianças pedem.",
  tempo: 170, nivel: "Fácil", rende: "12 pãezinhos", tags: ["Forno", "Lanche das crianças"],
  ingredientes: base(DOCE_I, ["120 g de gotas de chocolate forneáveis", "1 gema"]),
  passos: passos(DOCE_P, [{ t: "Abra a massa, espalhe as gotas e dobre algumas vezes para distribuir." },
    { t: "Faça 12 bolinhas e arrume na assadeira." }, CRESCE(40), PINCELA, FORNO(180, 22), ESFRIA]),
  aviso: av("trigo", "leite", "ovo") });

P({ id: "pq-maca-canela", sec: S, emoji: "🍎", nome: "Pão de maçã e canela",
  intro: "Maçã em cubos salteada com canela dentro de uma massa macia, com farofinha crocante por cima.",
  tempo: 180, nivel: "Médio", rende: "1 pão de forma (12 fatias)", tags: ["Forno", "Café da tarde"],
  ingredientes: base(DOCE_I, ["2 maçãs em cubos pequenos", "30 g de açúcar mascavo + 5 g de canela", "Farofa: 40 g de farinha, 30 g de açúcar, 30 g de manteiga gelada"]),
  passos: passos(DOCE_P, [{ t: "Refogue a maçã com o açúcar mascavo e a canela por 5 minutos e deixe esfriar." },
    { t: "Abra a massa, espalhe a maçã, enrole e coloque na forma." },
    { t: "Esfarele os ingredientes da farofa com os dedos e espalhe por cima." }, CRESCE(45), FORNO(180, 35), ESFRIA]),
  aviso: av("trigo", "leite", "ovo") });

/* =============== RECHEADOS (13) =============== */
S = "Premium · Recheados";
function REC(id, emoji, nome, intro, recheio, monta, tags, avs, rende) {
  P({ id: id, sec: S, emoji: emoji, nome: nome, intro: intro, tempo: 170, nivel: "Fácil", rende: rende || "1 pão grande (12 fatias)", tags: tags || ["Forno", "Lanche"],
    ingredientes: base(SAL_I, recheio.concat(["1 gema para pincelar"])),
    passos: passos(SAL_P, monta.concat([CRESCE(40), PINCELA, FORNO(180, 30), ESFRIA])), aviso: av.apply(null, ["trigo", "leite", "ovo"].concat(avs || [])) });
}
var ENROLA = [{ t: "Abra a massa num retângulo de 40 x 30 cm, distribua o recheio deixando 2 cm livres nas bordas e enrole pelo lado comprido, apertando bem." }, { t: "Feche as pontas e coloque na assadeira com a emenda para baixo. Faça cortes diagonais rasos em cima." }];
REC("pq-linguica", "🌭", "Pão de linguiça", "Linguiça calabresa refogada com cebola, enrolada numa massa macia. Clássico de festa e de lanche.",
  ["300 g de linguiça calabresa picada e refogada", "1 cebola picada refogada junto", "Salsinha"], ENROLA);
P({ id: "pq-calabresa-trancado", sec: S, emoji: "🥨", nome: "Pão trançado de calabresa e queijo", intro: "Recheio de calabresa e muçarela que aparece entre as tranças. Rende bonito para levar.",
  tempo: 180, nivel: "Médio", rende: "1 trança (14 fatias)", tags: ["Forno", "Para receber"],
  ingredientes: base(SAL_I, ["250 g de calabresa picada e refogada", "200 g de muçarela ralada", "Orégano", "1 gema"]),
  passos: passos(SAL_P, [{ t: "Abra a massa num retângulo, espalhe o recheio e enrole. Corte o rolo ao meio no comprimento e torça as metades com o corte para cima." }, CRESCE(40), PINCELA, FORNO(180, 30), ESFRIA]),
  aviso: av("trigo", "leite", "ovo") });
P({ id: "pq-alho-bolinhas", sec: S, emoji: "🧄", nome: "Pão de alho de bolinhas", intro: "Bolinhas de massa passadas em manteiga de alho e empilhadas na forma: cada um puxa a sua.",
  tempo: 160, nivel: "Fácil", rende: "1 forma de buraco (25 bolinhas)", tags: ["Forno", "Churrasco", "Para receber"],
  ingredientes: base(SAL_I, ["Manteiga de alho: 100 g de manteiga derretida, 4 dentes de alho ralados, salsinha, 3 g de sal", "50 g de queijo parmesão ralado"]),
  passos: passos(SAL_P, [{ t: "Faça 25 bolinhas. Passe cada uma na manteiga de alho e arrume em camadas numa forma de buraco untada, polvilhando o queijo entre elas." }, CRESCE(40), FORNO(180, 30), { t: "Desenforme morno e sirva puxando as bolinhas." }]),
  aviso: av("trigo", "leite", "ovo") });
REC("pq-frango-catupiry", "🐔", "Pão de frango com requeijão cremoso", "Frango desfiado temperado e requeijão cremoso dentro de um pão macio. Vira refeição.",
  ["300 g de frango cozido e desfiado, refogado com cebola, alho e tomate", "150 g de requeijão cremoso", "Cheiro-verde"], ENROLA);
REC("pq-presunto-queijo", "🧀", "Enroladinho de presunto e queijo", "Pão de padaria em casa: massa macia com presunto e muçarela em espiral.",
  ["200 g de presunto fatiado", "200 g de muçarela fatiada", "Orégano"], ENROLA);
REC("pq-carne", "🥩", "Pão recheado de carne moída", "Carne moída bem temperada, com azeitona e ovo cozido. Para o lanche da tarde de domingo.",
  ["300 g de carne moída refogada com cebola, alho, tomate e cheiro-verde", "2 ovos cozidos picados", "50 g de azeitonas picadas"], ENROLA);
REC("pq-espinafre-ricota", "🥬", "Pão de espinafre e ricota", "Recheio verde e leve de espinafre refogado com ricota temperada.",
  ["200 g de espinafre refogado e bem escorrido", "200 g de ricota amassada", "Noz-moscada, sal e pimenta"], ENROLA);
REC("pq-pizza-enrolado", "🍕", "Pão de pizza enrolado", "Molho de tomate, muçarela, tomate e orégano em espiral: o gosto de pizza em fatias.",
  ["100 g de molho de tomate grosso", "200 g de muçarela ralada", "1 tomate em cubos sem sementes", "Orégano"], ENROLA);
P({ id: "pq-bola-queijo", sec: S, emoji: "⚽", nome: "Pão bola recheado de queijo", intro: "Pão redondo com um coração de queijo derretido que escorre quando corta.",
  tempo: 170, nivel: "Fácil", rende: "8 pães", tags: ["Forno", "Lanche"],
  ingredientes: base(SAL_I, ["250 g de muçarela em 8 cubos", "1 gema"]),
  passos: passos(SAL_P, [{ t: "Divida em 8 partes, abra cada uma, coloque um cubo de queijo e feche bem, beliscando. Boleie com a emenda para baixo." }, CRESCE(40), PINCELA, FORNO(190, 22)]),
  aviso: av("trigo", "leite", "ovo") });
REC("pq-milho-queijo", "🌽", "Pão de milho verde com queijo", "Massa com milho batido e recheio de queijo e milho inteiro. Combina com café com leite.",
  ["200 g de milho verde (lata escorrida): metade batida com o leite da massa, metade inteira", "150 g de muçarela ralada"], ENROLA);
REC("pq-tomate-seco", "🍅", "Pão de tomate seco e rúcula", "Tomate seco picado, queijo branco e rúcula fresca adicionada depois de assado.",
  ["100 g de tomate seco picado", "150 g de queijo minas em cubos", "Rúcula para servir"], ENROLA);
REC("pq-bacon-cheddar", "🥓", "Pão de bacon e cheddar", "Bacon crocante e cheddar cremoso enrolados. Para servir quente, de preferência.",
  ["150 g de bacon em cubos frito e escorrido", "150 g de cheddar cremoso ou fatiado", "Cebolinha"], ENROLA);
REC("pq-atum", "🐟", "Pão de atum", "Atum com tomate, cebola e azeitona: recheio prático com o que tem no armário.",
  ["2 latas de atum escorrido", "1 tomate picado sem sementes", "1/2 cebola picada", "50 g de azeitonas", "2 colheres de requeijão"], ENROLA, null, ["peixe"]);

/* =============== PIZZAS E ESFIHAS (12) =============== */
S = "Premium · Pizzas e esfihas";
P({ id: "pq-pizza-margherita", sec: S, emoji: "🍕", nome: "Pizza margherita caseira", intro: "A massa base de pizza: fina, com borda que cresce e fica crocante. Rende 2 pizzas de 30 cm.",
  tempo: 120, nivel: "Fácil", rende: "2 pizzas de 30 cm", tags: ["Forno", "Pizza"],
  ingredientes: base(PIZZA_I, ["200 g de molho de tomate", "300 g de muçarela", "Tomate em rodelas, manjericão e azeite"]),
  passos: passos(PIZZA_P, [{ t: "Divida em 2 bolas e descanse 15 minutos. Abra cada uma com as mãos ou rolo, deixando a borda mais grossa.", timer: 15 },
    { t: "Preaqueça o forno no máximo (250 °C ou mais) por 30 minutos, com a assadeira dentro." },
    { t: "Espalhe o molho, o queijo e o tomate. Asse de 10 a 12 minutos na grade mais baixa, até a borda dourar. Finalize com manjericão e azeite.", timer: 12 }]),
  dica: "Assadeira bem quente desde o início é o que dá o fundo crocante sem pedra de pizza.",
  aviso: av("trigo", "leite") });
P({ id: "pq-pizza-frigideira", sec: S, emoji: "🍳", nome: "Pizza de frigideira", intro: "Sem esperar crescer e sem forno: massa de fermento químico que fica pronta em 15 minutos.",
  tempo: 20, nivel: "Fácil", rende: "2 pizzas pequenas", tags: ["Frigideira", "Rápido", "Sem forno"],
  ingredientes: ["200 g de farinha de trigo", "6 g de fermento químico", "3 g de sal", "120 g de água", "20 g de azeite", "Molho de tomate, muçarela e orégano"],
  passos: [{ t: "Misture a farinha, o fermento e o sal, junte a água e o azeite e faça uma massa lisa." },
    { t: "Abra 2 discos do tamanho da frigideira. Doure um lado em fogo baixo por 3 minutos, vire, cubra com molho e queijo, tampe e cozinhe mais 4 minutos.", timer: 7 }],
  aviso: av("trigo", "leite") });
P({ id: "pq-pizza-integral", sec: S, emoji: "🌾", nome: "Pizza de massa integral", intro: "Metade integral, com descanso longo: massa saborosa que fica leve.",
  tempo: 150, nivel: "Fácil", rende: "2 pizzas de 30 cm", tags: ["Forno", "Pizza", "Integral"],
  ingredientes: ["250 g de farinha de trigo integral", "250 g de farinha de trigo", "5 g de fermento biológico seco", "10 g de sal", "340 g de água", "30 g de azeite", "Cobertura a gosto"],
  passos: [{ t: "Misture as farinhas com a água e descanse 30 minutos. Junte o fermento, o azeite e o sal e sove 8 minutos.", timer: 30 }, CRESCE(60),
    { t: "Abra, cubra e asse como a pizza margherita: forno no máximo, 12 a 14 minutos.", timer: 14 }],
  aviso: av("trigo") });
P({ id: "pq-pizza-sg", sec: S, emoji: "🍕", nome: "Pizza sem glúten", intro: "Massa de farinha de arroz e polvilho com psyllium: abre com as mãos e fica crocante.",
  tempo: 60, nivel: "Médio", rende: "1 pizza de 30 cm", tags: ["Forno", "Pizza", "Sem glúten"],
  ingredientes: ["10 g de psyllium em pó", "200 g de água morna", "150 g de farinha de arroz", "60 g de polvilho doce", "5 g de fermento biológico seco", "5 g de sal", "20 g de azeite", "Cobertura sem glúten a gosto"],
  passos: [{ t: "Hidrate o psyllium na água por 5 minutos. Junte o resto e amasse até virar uma massa macia.", timer: 5 }, CRESCE(30, "crescer um pouco"),
    { t: "Abra sobre papel-manteiga com as mãos untadas. Pré-asse 10 minutos a 230 °C.", timer: 10 },
    { t: "Cubra e asse mais 10 minutos.", timer: 10 }],
  aviso: av("sg") });
P({ id: "pq-pizza-couveflor", sec: S, emoji: "🥦", nome: "Pizza de massa de couve-flor", intro: "Base de couve-flor com ovo e queijo, firme o suficiente para pegar com a mão.",
  tempo: 60, nivel: "Médio", rende: "1 pizza de 25 cm", tags: ["Forno", "Low carb", "Sem glúten"],
  ingredientes: ["500 g de couve-flor triturada crua", "1 ovo", "60 g de muçarela ralada", "30 g de parmesão ralado", "Orégano e sal", "Cobertura a gosto"],
  passos: [{ t: "Cozinhe a couve-flor triturada no micro-ondas por 5 minutos, esprema num pano até sair toda a água (é o segredo para não ficar mole).", timer: 5 },
    { t: "Misture com o ovo, os queijos, o orégano e o sal. Espalhe sobre papel-manteiga num disco de 1 cm." },
    { t: "Asse a 220 °C por 20 minutos, cubra e volte por mais 8.", timer: 28 }],
  aviso: av("leite", "ovo") });
P({ id: "pq-calzone", sec: S, emoji: "🥟", nome: "Calzone", intro: "A pizza dobrada ao meio, recheada de presunto, queijo e tomate. Ótimo para levar.",
  tempo: 130, nivel: "Fácil", rende: "4 calzones", tags: ["Forno", "Pizza"],
  ingredientes: base(PIZZA_I, ["Recheio: 200 g de presunto, 250 g de muçarela, 1 tomate, orégano", "1 gema"]),
  passos: passos(PIZZA_P, [{ t: "Divida em 4, abra discos de 22 cm, recheie metade e dobre. Feche a borda dobrando e apertando com garfo." }, PINCELA, FORNO(220, 20)]),
  aviso: av("trigo", "leite", "ovo") });
var ESF_I = ["500 g de farinha de trigo", "7 g de fermento biológico seco", "15 g de açúcar", "8 g de sal", "250 g de leite morno", "60 g de óleo"];
var ESF_P = [{ t: "Misture a farinha, o fermento e o açúcar, junte o leite e o óleo e depois o sal." }, SOVA(8), CRESCE(50), { t: "Divida em 20 bolinhas de 40 g e descanse 10 minutos cobertas.", timer: 10 }];
P({ id: "pq-esfiha-carne", sec: S, emoji: "🥙", nome: "Esfiha aberta de carne", intro: "Massa fina e macia com carne temperada com tomate, cebola e limão, do jeito árabe.",
  tempo: 140, nivel: "Médio", rende: "20 esfihas", tags: ["Forno", "Festa", "Congela bem"],
  ingredientes: base(ESF_I, ["Recheio (cru): 400 g de carne moída, 1 tomate e 1 cebola picados e espremidos, salsinha, suco de 1 limão, 8 g de sal, pimenta síria"]),
  passos: passos(ESF_P, [{ t: "Misture o recheio cru. Abra cada bolinha num disco fino, espalhe uma colher de recheio deixando borda e aperte as bordas para dentro." }, FORNO(220, 15)]),
  aviso: av("trigo", "leite") });
P({ id: "pq-esfiha-queijo", sec: S, emoji: "🧀", nome: "Esfiha fechada de queijo", intro: "Triangular, fechada, com queijo e zaatar ou orégano. Fica perfeita reaquecida.",
  tempo: 140, nivel: "Médio", rende: "20 esfihas", tags: ["Forno", "Festa"],
  ingredientes: base(ESF_I, ["300 g de muçarela ralada + 100 g de queijo branco", "Zaatar ou orégano", "1 gema"]),
  passos: passos(ESF_P, [{ t: "Abra os discos, coloque o queijo, levante as bordas em 3 pontos e una no centro formando um triângulo." }, PINCELA, FORNO(220, 15)]),
  aviso: av("trigo", "leite", "ovo") });
P({ id: "pq-esfiha-frango", sec: S, emoji: "🐔", nome: "Esfiha de frango", intro: "Frango desfiado com requeijão: a esfiha mais pedida nas festas.",
  tempo: 140, nivel: "Médio", rende: "20 esfihas", tags: ["Forno", "Festa"],
  ingredientes: base(ESF_I, ["300 g de frango refogado e desfiado", "120 g de requeijão", "1 gema"]),
  passos: passos(ESF_P, [{ t: "Recheie como esfiha fechada ou aberta." }, PINCELA, FORNO(220, 15)]),
  aviso: av("trigo", "leite", "ovo") });
P({ id: "pq-esfiha-escarola", sec: S, emoji: "🥬", nome: "Esfiha de escarola", intro: "Escarola refogada no alho com um pouco de queijo: opção vegetariana que surpreende.",
  tempo: 140, nivel: "Médio", rende: "20 esfihas", tags: ["Forno", "Vegetariana"],
  ingredientes: base(ESF_I, ["1 pé de escarola refogado no alho e bem escorrido", "100 g de muçarela ralada", "1 gema"]),
  passos: passos(ESF_P, [{ t: "Recheie e feche em triângulo." }, PINCELA, FORNO(220, 15)]),
  aviso: av("trigo", "leite", "ovo") });
P({ id: "pq-pizza-liquidificador", sec: S, emoji: "🌀", nome: "Pizza de liquidificador", intro: "Massa líquida batida e assada na forma, tipo pizza de padaria alta e macia.",
  tempo: 50, nivel: "Fácil", rende: "1 assadeira de 30 x 40 cm", tags: ["Liquidificador", "Forno", "Rápido"],
  ingredientes: ["2 ovos", "300 g de leite", "100 g de óleo", "200 g de farinha de trigo", "50 g de queijo ralado", "10 g de fermento químico", "5 g de sal", "Cobertura: molho, muçarela, tomate, orégano"],
  passos: [{ t: "Preaqueça o forno a 200 °C. Bata tudo menos o fermento, depois misture o fermento com colher." },
    { t: "Despeje na assadeira untada e asse 15 minutos. Cubra e asse mais 10.", timer: 25 }],
  aviso: av("trigo", "leite", "ovo") });
P({ id: "pq-mini-pizza", sec: S, emoji: "🧊", nome: "Mini pizzas para congelar", intro: "Discos pré-assados que vão do congelador ao forno em 10 minutos. Lanche da semana resolvido.",
  tempo: 120, nivel: "Fácil", rende: "16 mini pizzas", tags: ["Forno", "Congela bem", "Lanche das crianças"],
  ingredientes: base(PIZZA_I, ["Molho de tomate e muçarela para cobrir"]),
  passos: passos(PIZZA_P, [{ t: "Divida em 16 bolinhas e abra discos de 12 cm. Pré-asse a 220 °C por 6 minutos, só até firmar.", timer: 6 },
    { t: "Esfrie, cubra com molho e queijo e congele em assadeira. Depois guarde em saco." },
    { t: "Para servir: direto do congelador ao forno a 220 °C por 10 minutos ou airfryer a 180 °C por 7.", timer: 10 }]),
  aviso: av("trigo", "leite") });

/* =============== SEM GLÚTEN AVANÇADO (13) =============== */
S = "Premium · Sem glúten avançado";
var SG_I = ["20 g de psyllium em pó", "400 g de água morna", "200 g de farinha de arroz", "100 g de fécula de batata", "50 g de polvilho doce", "7 g de fermento biológico seco", "15 g de açúcar", "8 g de sal", "30 g de azeite"];
var SG_P = [{ t: "Misture o psyllium com a água e espere 5 minutos, até virar gel.", timer: 5 }, { t: "Junte as farinhas, o fermento, o açúcar, o azeite e o sal e amasse até virar uma massa macia e moldável (com as mãos untadas)." }];
function SG(id, emoji, nome, intro, tempo, rende, extraI, monta, temp, min, tags) {
  P({ id: id, sec: S, emoji: emoji, nome: nome, intro: intro, tempo: tempo, nivel: "Médio", rende: rende, tags: tags || ["Forno", "Sem glúten", "Sem lactose"],
    ingredientes: base(SG_I, extraI), passos: passos(SG_P, monta.concat([CRESCE(45, "crescer cerca de 1/3"), FORNO(temp, min), ESFRIA_SG])), aviso: av("sgsl") + (/ovo/.test(extraI.join(" ")) ? " " + AV.ovo : "") });
}
SG("pq-sg-baguete", "🥖", "Baguete sem glúten", "Casca crocante e miolo aerado, com vapor no forno igual à baguete de trigo.", 120, "2 baguetes", [],
  [{ t: "Divida em 2, modele rolos compridos sobre papel-manteiga e faça cortes diagonais. Coloque uma assadeira com água no fundo do forno." }], 220, 30);
SG("pq-sg-frances", "🥖", "Pão francês sem glúten", "Pãezinhos de casca fina para o café da manhã sem glúten, com o vapor de padaria.", 120, "8 pães", [],
  [{ t: "Divida em 8, modele como pão francês e faça um corte comprido. Use vapor (assadeira com água fervente no fundo do forno)." }], 220, 25);
SG("pq-sg-hamburguer", "🍔", "Pão de hambúrguer sem glúten", "Macio, com gergelim por cima e firme o bastante para segurar o lanche.", 120, "6 pães", ["Gergelim"],
  [{ t: "Divida em 6, boleie e achate levemente. Pincele água e polvilhe gergelim." }], 200, 25);
SG("pq-sg-focaccia", "🫒", "Focaccia sem glúten", "Alta, com azeite generoso, alecrim e tomate-cereja. Ninguém sente falta do trigo.", 110, "1 assadeira de 25 x 20 cm", ["Alecrim, tomate-cereja, sal grosso, 30 g de azeite extra"],
  [{ t: "Espalhe a massa na assadeira com azeite, faça covinhas e distribua o tomate, o alecrim e o sal grosso." }], 220, 25);
SG("pq-sg-integral", "🌾", "Pão de forma integral sem glúten", "Com farinha de arroz integral e sementes: sabor de pão integral sem trigo.", 150, "1 pão de forma (12 fatias)", ["Use 100 g de farinha de arroz integral no lugar de metade da farinha de arroz", "40 g de sementes de girassol e linhaça"],
  [{ t: "Junte as sementes, coloque na forma untada e alise com espátula molhada." }], 190, 50);
SG("pq-sg-doce", "🍬", "Pão doce sem glúten", "Pãezinhos doces e macios para o café, com raspas de laranja.", 120, "10 pãezinhos", ["Mais 50 g de açúcar", "Raspas de 1 laranja", "1 ovo"],
  [{ t: "Junte o ovo, o açúcar extra e as raspas. Faça 10 bolinhas na assadeira." }], 180, 22);
SG("pq-sg-milho", "🌽", "Pão de milho sem glúten", "Com farinha de milho flocada e fubá: amarelinho e perfumado.", 130, "1 pão de forma (12 fatias)", ["Troque 100 g da farinha de arroz por 100 g de fubá"],
  [{ t: "Coloque na forma untada e polvilhe fubá." }], 190, 45);
SG("pq-sg-sirio", "🫓", "Pão sírio sem glúten", "Discos finos que estufam no forno quente. Para wraps e para mergulhar no homus.", 90, "8 pães", [],
  [{ t: "Divida em 8 e abra discos finos entre 2 plásticos. Asse direto na assadeira bem quente." }], 250, 6);
SG("pq-sg-batata-enrolado", "🥔", "Pão de batata sem glúten recheado", "Massa de batata e polvilho recheada de frango ou queijo, assada até dourar.", 130, "12 pães", ["200 g de batata cozida amassada", "Recheio: 250 g de frango desfiado temperado"],
  [{ t: "Junte a batata à massa (ela fica mais macia). Faça 12 discos, recheie e feche." }], 200, 25);
SG("pq-sg-brioche", "🧈", "Brioche sem glúten", "Amarelinho e macio, com ovos e óleo de coco no lugar da manteiga.", 150, "1 pão de forma (12 fatias)", ["3 ovos", "60 g de açúcar a mais", "60 g de óleo de coco no lugar do azeite"],
  [{ t: "Junte os ovos, o açúcar e o óleo de coco e bata 3 minutos. Coloque na forma." }], 180, 40);
SG("pq-sg-australiano", "🍫", "Pão australiano sem glúten", "Escuro, de cacau e melado, com fubá na casca.", 130, "3 filõezinhos", ["15 g de cacau", "50 g de melado", "Fubá para empanar"],
  [{ t: "Junte o cacau e o melado, modele 3 filões e role no fubá." }], 180, 30);
SG("pq-sg-mandioquinha", "🥕", "Pão de mandioquinha", "Mandioquinha (batata-baroa) cozida dá maciez e uma cor dourada natural.", 130, "12 pãezinhos", ["200 g de mandioquinha cozida e amassada"],
  [{ t: "Junte a mandioquinha, faça 12 bolinhas e arrume na assadeira." }], 190, 25);
SG("pq-sg-tortilha", "🌮", "Tortilha sem glúten", "Discos flexíveis de frigideira para wraps e tacos.", 40, "8 tortilhas", [],
  [{ t: "Sem crescer: divida em 8, abra bem fino entre plásticos e doure em frigideira seca 1 minuto de cada lado." }], 0, 0, ["Frigideira", "Sem glúten", "Sem lactose"]);
/* tortilha não vai ao forno: corrige passos */
(function () { var t = R.find(function (r) { return r.id === "pq-sg-tortilha"; }); t.passos = SG_P.concat([{ t: "Divida em 8, abra bem fino entre 2 plásticos e doure em frigideira seca e quente por 1 minuto de cada lado." }, { t: "Empilhe dentro de um pano para ficarem flexíveis." }]); t.tempo = 30; t.nivel = "Fácil"; })();

/* =============== LOW CARB E PROTEICOS (12) =============== */
S = "Premium · Low carb e proteicos";
function LC(id, emoji, nome, intro, tempo, rende, ing, ps, avs, tags) {
  P({ id: id, sec: S, emoji: emoji, nome: nome, intro: intro, tempo: tempo, nivel: "Fácil", rende: rende, tags: tags || ["Forno", "Low carb"], ingredientes: ing, passos: ps, aviso: av.apply(null, avs) });
}
LC("pq-lc-forma", "🍞", "Pão de forma low carb de amêndoas", "Fatia firme para torrada e sanduíche, com farinha de amêndoas e claras batidas.", 70, "1 pão de forma (12 fatias)",
  ["150 g de farinha de amêndoas", "40 g de psyllium em pó", "10 g de fermento químico", "5 g de sal", "6 claras", "2 ovos", "50 g de manteiga derretida", "120 g de água morna"],
  [{ t: "Preaqueça o forno a 175 °C. Misture os secos. Bata as claras em neve." }, { t: "Junte os ovos, a manteiga e a água aos secos e depois as claras, delicadamente." }, { t: "Asse numa forma forrada por 55 minutos.", timer: 55 }, ESFRIA_SG], ["castanha", "ovo", "leite"]);
LC("pq-lc-hamburguer", "🍔", "Pão de hambúrguer low carb", "Pãozinho de psyllium e amêndoas que segura o hambúrguer sem desmanchar.", 60, "6 pães",
  ["120 g de farinha de amêndoas", "30 g de psyllium", "8 g de fermento químico", "4 g de sal", "3 claras", "10 g de vinagre", "180 g de água fervente", "Gergelim"],
  [{ t: "Misture os secos, junte claras e vinagre, depois a água fervente. Modele 6 discos, polvilhe gergelim." }, { t: "Asse a 180 °C por 45 minutos.", timer: 45 }], ["castanha", "ovo", "gergelim"]);
LC("pq-lc-frango", "🐔", "Pão de frango", "Base feita de frango e ovo: proteína pura em formato de pão para sanduíche.", 40, "4 pães",
  ["300 g de peito de frango cozido e triturado", "2 ovos", "60 g de muçarela ralada", "Sal, alho e páprica"],
  [{ t: "Misture tudo e faça 4 discos sobre papel-manteiga." }, { t: "Asse a 200 °C por 20 minutos, vire e asse mais 5.", timer: 25 }], ["ovo", "leite"]);
LC("pq-lc-bagel", "🥯", "Bagel low carb de muçarela", "A famosa massa de muçarela derretida com amêndoas: elástica, com casca brilhante.", 40, "6 bagels",
  ["200 g de muçarela ralada", "30 g de cream cheese", "120 g de farinha de amêndoas", "1 ovo", "6 g de fermento químico", "Gergelim ou mix de sementes"],
  [{ t: "Derreta a muçarela com o cream cheese no micro-ondas (1 minuto, mexendo na metade). Junte a farinha, o ovo e o fermento e amasse." }, { t: "Divida em 6 rolos, una as pontas em argola, polvilhe sementes e asse a 200 °C por 15 minutos.", timer: 15 }], ["leite", "castanha", "ovo", "gergelim"]);
LC("pq-lc-couveflor", "🥦", "Pão de couve-flor", "Pãezinhos de couve-flor espremida, ovo e parmesão: leves e salgados.", 45, "8 pães",
  ["400 g de couve-flor triturada e espremida", "2 ovos", "50 g de parmesão", "30 g de farinha de amêndoas", "Sal e ervas"],
  [{ t: "Cozinhe a couve-flor no micro-ondas 5 minutos e esprema bem num pano.", timer: 5 }, { t: "Misture tudo, faça 8 discos e asse a 200 °C por 25 minutos.", timer: 25 }], ["ovo", "leite", "castanha"]);
LC("pq-lc-atum", "🐟", "Pão proteico de atum", "Atum, ovos e aveia: lanche proteico salgado que vai na marmita.", 40, "1 pão pequeno (8 fatias)",
  ["2 latas de atum escorrido", "3 ovos", "80 g de farinha de aveia", "Cebolinha, sal e pimenta", "6 g de fermento químico"],
  [{ t: "Misture tudo, coloque numa forma pequena untada e asse a 180 °C por 30 minutos.", timer: 30 }], ["peixe", "ovo", "aveia"], ["Forno", "Proteico"]);
LC("pq-lc-sementes", "🌻", "Pão de sementes sem farinha", "Só sementes, aveia e psyllium, sem farinha nem fermento: fatias crocantes e cheias de textura.", 150, "1 pão de forma (14 fatias)",
  ["130 g de sementes de girassol", "90 g de linhaça", "60 g de castanhas picadas", "150 g de aveia em flocos", "30 g de chia", "20 g de psyllium", "6 g de sal", "20 g de mel", "40 g de azeite", "350 g de água"],
  [{ t: "Misture tudo numa forma forrada, aperte bem e deixe descansar 2 horas (ou a noite toda): as sementes viram uma massa firme.", timer: 120 }, { t: "Asse a 175 °C por 20 minutos, desenforme, vire de cabeça para baixo direto na grade e asse mais 40.", timer: 60 }, ESFRIA_SG], ["aveia", "castanha"], ["Forno", "Sem farinha", "Sementes"]);
LC("pq-lc-berinjela", "🍆", "Pão de berinjela", "Berinjela assada e amassada vira um pãozinho macio e salgado, sem farinha de trigo.", 60, "8 pães",
  ["300 g de berinjela assada e amassada", "2 ovos", "80 g de farinha de amêndoas", "40 g de parmesão", "6 g de fermento químico", "Sal e orégano"],
  [{ t: "Misture tudo, faça 8 bolinhas e asse a 190 °C por 30 minutos.", timer: 30 }], ["ovo", "castanha", "leite"]);
LC("pq-lc-chia", "⚫", "Pão de chia e ovos", "Chia hidratada e ovos batidos: miolo úmido com pontinhos escuros.", 50, "1 pão pequeno (8 fatias)",
  ["40 g de chia hidratada em 120 g de água (15 minutos)", "4 ovos", "60 g de farinha de amêndoas", "30 g de farinha de coco", "40 g de azeite", "8 g de fermento químico", "4 g de sal"],
  [{ t: "Misture tudo e asse numa forma pequena a 180 °C por 35 minutos.", timer: 35 }, ESFRIA_SG], ["ovo", "castanha"]);
LC("pq-lc-caneca-proteico", "☕", "Pão de caneca proteico", "Ovo, iogurte e farinha de amêndoas no micro-ondas: 2 minutos e pronto.", 5, "1 pão",
  ["1 ovo", "20 g de iogurte grego", "25 g de farinha de amêndoas", "2 g de fermento químico", "1 pitada de sal"],
  [{ t: "Misture tudo numa caneca untada e leve ao micro-ondas por 1 minuto e 30 segundos. Toste na frigideira.", timer: 2 }], ["ovo", "leite", "castanha"], ["Micro-ondas", "Rápido"]);
LC("pq-lc-wrap", "🌯", "Wrap de ovo", "Disco fino e flexível de ovo e cream cheese para enrolar o que quiser.", 10, "2 wraps",
  ["2 ovos", "30 g de cream cheese", "5 g de psyllium", "1 pitada de sal"],
  [{ t: "Bata tudo e espere 3 minutos. Despeje metade numa frigideira grande untada em fogo baixo, espalhe fino, tampe 2 minutos e vire.", timer: 3 }], ["ovo", "leite"], ["Frigideira", "Rápido"]);
LC("pq-lc-abobrinha", "🥒", "Pãozinho de abobrinha low carb", "Abobrinha, ovo e queijo: pãozinho de forno salgado e úmido.", 45, "8 pães",
  ["250 g de abobrinha ralada e espremida", "2 ovos", "60 g de muçarela", "60 g de farinha de amêndoas", "6 g de fermento químico", "Sal e ervas"],
  [{ t: "Misture tudo, distribua em forminhas de muffin e asse a 190 °C por 25 minutos.", timer: 25 }], ["ovo", "leite", "castanha"]);

/* =============== FERMENTAÇÃO NATURAL (12) =============== */
S = "Premium · Fermentação natural";
function FN(id, emoji, nome, intro, ing, monta, tempo, rende, tags) {
  P({ id: id, sec: S, emoji: emoji, nome: nome, intro: intro, tempo: tempo || 1440, nivel: "Difícil", rende: rende || "1 pão redondo (10 fatias)", tags: tags || ["Forno", "Fermentação natural"],
    ingredientes: ing, passos: monta, aviso: av("trigo", "levain") });
}
var FN_P = [{ t: "Na véspera de manhã, alimente o fermento natural. Use quando estiver no pico (dobrou e cheio de bolhas, 4 a 8 horas depois)." },
  { t: "Misture a farinha e a água (menos 20 g) e descanse 1 hora (autólise).", timer: 60 },
  { t: "Junte o fermento natural, o sal e os 20 g de água restantes, apertando a massa com as mãos até incorporar." },
  { t: "Faça 4 séries de dobras, a cada 30 minutos. Depois deixe a massa descansar até crescer cerca de 50% e ficar com bolhas (3 a 5 horas no total, depende da temperatura)." },
  { t: "Pré-modele uma bola, descanse 20 minutos, modele de novo bem apertado e coloque num cesto ou tigela com pano enfarinhado, com a emenda para cima." },
  { t: "Leve à geladeira de 12 a 16 horas." },
  { t: "Preaqueça o forno a 250 °C com uma panela tampada dentro por 45 minutos. Vire o pão sobre papel-manteiga, faça um corte decidido e coloque na panela." },
  { t: "Asse 20 minutos tampado a 250 °C e 20 a 25 minutos destampado a 230 °C, até ficar bem escuro.", timer: 45 },
  { t: "Espere esfriar 2 horas antes de cortar.", timer: 120 }];
FN("pq-fn-basico", "🥖", "Pão de fermentação natural básico", "O pão de levain de padaria artesanal: casca crocante, miolo aberto e acidez suave.", ["400 g de farinha de trigo", "50 g de farinha de trigo integral", "330 g de água", "90 g de fermento natural ativo", "9 g de sal"], FN_P);
FN("pq-fn-integral", "🌾", "Levain integral", "Metade integral: mais sabor, miolo um pouco mais fechado.", ["225 g de farinha de trigo", "225 g de farinha de trigo integral", "350 g de água", "90 g de fermento natural ativo", "9 g de sal"], FN_P);
FN("pq-fn-centeio", "🌑", "Levain com centeio", "Centeio dá cor e um sabor mais rústico. Ótimo com manteiga e sal.", ["350 g de farinha de trigo", "100 g de farinha de centeio", "340 g de água", "90 g de fermento natural ativo", "9 g de sal"], FN_P);
FN("pq-fn-azeitona", "🫒", "Levain de azeitona e alecrim", "Azeitonas e alecrim entram na segunda dobra. Perfeito para tábua de frios.", ["450 g de farinha de trigo", "330 g de água", "90 g de fermento natural ativo", "9 g de sal", "120 g de azeitonas secas no papel", "Alecrim picado"],
  FN_P.slice(0, 3).concat([{ t: "Na segunda série de dobras, espalhe as azeitonas e o alecrim e dobre por cima." }]).concat(FN_P.slice(3)));
FN("pq-fn-nozes", "🌰", "Levain de nozes e uvas-passas", "Doce e salgado ao mesmo tempo: passas hidratadas e nozes tostadas.", ["400 g de farinha de trigo", "50 g de farinha integral", "330 g de água", "90 g de fermento natural ativo", "9 g de sal", "80 g de nozes tostadas", "80 g de uvas-passas hidratadas e escorridas"],
  FN_P.slice(0, 3).concat([{ t: "Na segunda série de dobras, espalhe as nozes e as passas e dobre por cima." }]).concat(FN_P.slice(3)));
P(null || { id: "pq-fn-forma", sec: S, emoji: "🍞", nome: "Pão de forma de fermentação natural", intro: "Pão de forma macio para a semana, sem fermento biológico.", tempo: 900, nivel: "Médio", rende: "1 pão de forma (14 fatias)", tags: ["Forno", "Fermentação natural", "Sanduíche"],
  ingredientes: ["450 g de farinha de trigo", "250 g de leite", "100 g de fermento natural ativo", "30 g de açúcar", "40 g de manteiga", "8 g de sal"],
  passos: [{ t: "Misture tudo, sove 10 minutos e deixe crescer até quase dobrar (4 a 6 horas)." }, { t: "Modele e coloque na forma. Deixe crescer até passar a borda (3 a 5 horas, ou na geladeira de um dia para o outro)." }, FORNO(180, 40), ESFRIA],
  aviso: av("trigo", "leite", "levain") });
P({ id: "pq-fn-focaccia", sec: S, emoji: "🫒", nome: "Focaccia de fermentação natural", intro: "Bem aerada e úmida, com a acidez do levain. Uma das mais fáceis de acertar.", tempo: 1080, nivel: "Médio", rende: "1 assadeira de 30 x 20 cm", tags: ["Forno", "Fermentação natural"],
  ingredientes: ["500 g de farinha de trigo", "400 g de água", "100 g de fermento natural ativo", "10 g de sal", "60 g de azeite", "Alecrim e sal grosso"],
  passos: [{ t: "Misture tudo, faça 4 séries de dobras a cada 30 minutos e leve à geladeira de um dia para o outro." }, { t: "Passe para a assadeira com azeite e deixe crescer fora da geladeira até ficar cheia de bolhas (3 a 4 horas)." }, { t: "Faça as covinhas, regue com azeite, alecrim e sal grosso." }, FORNO(230, 25)],
  aviso: av("trigo", "levain") });
P({ id: "pq-fn-baguete", sec: S, emoji: "🥖", nome: "Baguete de fermentação natural", intro: "Baguetes finas com fermento natural e vapor: casca que canta ao esfriar.", tempo: 1100, nivel: "Difícil", rende: "3 baguetes", tags: ["Forno", "Fermentação natural"],
  ingredientes: ["450 g de farinha de trigo", "320 g de água", "90 g de fermento natural ativo", "9 g de sal"],
  passos: FN_P.slice(0, 4).concat([{ t: "Divida em 3, pré-modele cilindros, descanse 20 minutos e modele baguetes de 35 cm. Deixe na geladeira de 8 a 12 horas sobre um pano enfarinhado com dobras." }, { t: "Asse a 250 °C com vapor por 12 minutos e mais 12 a 230 °C sem vapor.", timer: 24 }]),
  aviso: av("trigo", "levain") });
P({ id: "pq-fn-pizza", sec: S, emoji: "🍕", nome: "Massa de pizza de fermentação natural", intro: "Borda aerada e crocante com sabor de pizzaria napolitana.", tempo: 1440, nivel: "Médio", rende: "3 pizzas de 30 cm", tags: ["Forno", "Pizza", "Fermentação natural"],
  ingredientes: ["500 g de farinha de trigo", "320 g de água", "100 g de fermento natural ativo", "12 g de sal", "15 g de azeite"],
  passos: [{ t: "Misture, sove 8 minutos, divida em 3 bolas e deixe na geladeira de 24 a 48 horas em potes untados." }, { t: "Tire 3 horas antes, abra com as mãos e asse no forno no máximo por 8 a 10 minutos.", timer: 10 }],
  aviso: av("trigo", "levain") });
P({ id: "pq-fn-ciabatta", sec: S, emoji: "🍞", nome: "Ciabatta de fermentação natural", intro: "Massa muito hidratada, cheia de buracos, para sanduíche italiano.", tempo: 1100, nivel: "Difícil", rende: "2 ciabattas", tags: ["Forno", "Fermentação natural"],
  ingredientes: ["450 g de farinha de trigo", "360 g de água", "90 g de fermento natural ativo", "9 g de sal", "15 g de azeite"],
  passos: [{ t: "Misture, faça 5 séries de dobras com a mão molhada a cada 30 minutos e leve à geladeira de um dia para o outro." }, { t: "Vire na bancada bem enfarinhada, corte em 2 retângulos sem modelar e deixe 1 hora sobre papel-manteiga.", timer: 60 }, FORNO(240, 25, "com vapor nos primeiros 10")],
  aviso: av("trigo", "levain") });
P({ id: "pq-fn-panqueca", sec: S, emoji: "🥞", nome: "Panquecas com descarte de fermento", intro: "O fermento que sobra ao alimentar o levain vira panqueca fofinha no café da manhã.", tempo: 20, nivel: "Fácil", rende: "8 panquecas", tags: ["Frigideira", "Aproveitamento"],
  ingredientes: ["200 g de descarte de fermento natural", "1 ovo", "100 g de leite", "60 g de farinha de trigo", "20 g de açúcar", "4 g de bicarbonato", "1 pitada de sal", "Manteiga para a frigideira"],
  passos: [{ t: "Misture tudo (o bicarbonato por último: ele reage com a acidez e deixa fofo)." }, { t: "Faça as panquecas em frigideira untada, fogo baixo, 2 minutos de cada lado.", timer: 4 }],
  aviso: av("trigo", "leite", "ovo", "levain") });
P({ id: "pq-fn-crackers", sec: S, emoji: "🧇", nome: "Crackers de descarte", intro: "Biscoitinhos finos e crocantes de descarte de fermento, com ervas e sal grosso.", tempo: 40, nivel: "Fácil", rende: "1 assadeira", tags: ["Forno", "Aproveitamento", "Petisco"],
  ingredientes: ["200 g de descarte de fermento natural", "100 g de farinha de trigo integral", "40 g de azeite", "4 g de sal", "Ervas e sal grosso"],
  passos: [{ t: "Misture e abra muito fino sobre papel-manteiga. Corte em quadrados e polvilhe ervas e sal grosso." }, FORNO(170, 25, "até ficar bem sequinho")],
  aviso: av("trigo", "levain") });

/* =============== PÃES DO MUNDO (13) =============== */
S = "Premium · Pães do mundo";
function MU(o, avs) { o.sec = S; o.nivel = o.nivel || "Médio"; o.aviso = av.apply(null, avs || ["trigo"]); P(o); }
MU({ id: "pq-baguete", emoji: "🇫🇷", nome: "Baguete", intro: "Com uma esponja simples da véspera e vapor no forno, a baguete fica com casca fina e crocante.", tempo: 900, rende: "3 baguetes", tags: ["Forno", "França"],
  ingredientes: ["Esponja: 150 g de farinha, 150 g de água, 1 g de fermento seco", "Massa: 350 g de farinha, 190 g de água, 3 g de fermento seco, 10 g de sal"],
  passos: [{ t: "Faça a esponja na véspera e deixe 12 horas fora da geladeira." }, { t: "Junte a massa, sove 8 minutos e deixe crescer 1 hora com 2 dobras." }, { t: "Divida em 3, pré-modele, descanse 20 minutos e modele baguetes de 35 cm. Cresça 45 minutos sobre pano enfarinhado com dobras.", timer: 45 }, { t: "Faça 4 cortes diagonais e asse a 240 °C com vapor por 22 minutos.", timer: 22 }] });
MU({ id: "pq-ciabatta", emoji: "🇮🇹", nome: "Ciabatta", intro: "Massa mole, de dobras, sem modelagem: buracos grandes e casca fina enfarinhada.", tempo: 300, rende: "2 ciabattas", tags: ["Forno", "Itália", "Sem sova"],
  ingredientes: ["500 g de farinha de trigo", "400 g de água", "4 g de fermento biológico seco", "10 g de sal", "20 g de azeite"],
  passos: [{ t: "Misture tudo e faça 4 séries de dobras com a mão molhada a cada 30 minutos." }, CRESCE(60), { t: "Vire numa bancada bem enfarinhada, corte em 2 retângulos sem desinflar e passe para o papel-manteiga. Descanse 30 minutos.", timer: 30 }, FORNO(230, 25, "com vapor")] });
MU({ id: "pq-naan", emoji: "🇮🇳", nome: "Naan de frigideira", intro: "Pão indiano macio de iogurte, com manteiga de alho e coentro.", tempo: 90, rende: "6 naans", tags: ["Frigideira", "Índia"],
  ingredientes: ["300 g de farinha de trigo", "4 g de fermento biológico seco", "10 g de açúcar", "5 g de sal", "120 g de iogurte natural", "80 g de água morna", "20 g de óleo", "Manteiga de alho e coentro para finalizar"],
  passos: [{ t: "Misture tudo, sove 5 minutos e deixe crescer 1 hora." }, { t: "Divida em 6, abra ovais finas e doure em frigideira bem quente, tampada, 1 minuto de cada lado." }, { t: "Pincele manteiga de alho e coentro." }] }, ["trigo", "leite"]);
MU({ id: "pq-bagel", emoji: "🥯", nome: "Bagel", intro: "Fervido antes de assar: casca brilhante e miolo denso e mastigável.", tempo: 180, nivel: "Difícil", rende: "8 bagels", tags: ["Forno", "EUA"],
  ingredientes: ["500 g de farinha de trigo", "7 g de fermento biológico seco", "20 g de açúcar", "10 g de sal", "280 g de água morna", "Para ferver: 2 litros de água + 30 g de mel ou açúcar", "Gergelim ou sementes"],
  passos: [{ t: "Faça uma massa firme, sove 10 minutos e deixe crescer 1 hora." }, { t: "Divida em 8 bolas, fure o centro com o dedo e alargue até 4 cm. Descanse 20 minutos.", timer: 20 }, { t: "Ferva cada bagel 1 minuto de cada lado na água com mel. Escorra e passe nas sementes.", timer: 2 }, FORNO(220, 20)] }, ["trigo", "gergelim"]);
MU({ id: "pq-challah", emoji: "🕯️", nome: "Challah trançada", intro: "Pão judaico de festa, com ovos e mel, em trança de 4 cordões.", tempo: 200, rende: "1 trança grande", tags: ["Forno", "Para receber"],
  ingredientes: ["500 g de farinha de trigo", "8 g de fermento biológico seco", "60 g de mel", "8 g de sal", "2 ovos + 1 gema", "160 g de água morna", "60 g de óleo", "1 ovo para pincelar"],
  passos: [{ t: "Misture tudo, sove 10 minutos e deixe crescer 1 hora e meia.", timer: 90 }, { t: "Divida em 4 cordões de 50 cm e trance. Deixe crescer 45 minutos.", timer: 45 }, { t: "Pincele com ovo duas vezes (antes e no meio do forno)." }, FORNO(180, 30)] }, ["trigo", "ovo"]);
MU({ id: "pq-pretzel", emoji: "🥨", nome: "Pretzel", intro: "O nó alemão de casca escura e sal grosso. O banho rápido em água com bicarbonato faz a cor.", tempo: 150, rende: "8 pretzels", tags: ["Forno", "Alemanha", "Petisco"],
  ingredientes: ["500 g de farinha de trigo", "7 g de fermento biológico seco", "15 g de açúcar", "10 g de sal", "300 g de água morna", "30 g de manteiga", "Banho: 1,5 litro de água + 60 g de bicarbonato", "Sal grosso"],
  passos: [{ t: "Sove 8 minutos e deixe crescer 1 hora." }, { t: "Divida em 8, role cordões de 60 cm e faça o nó." }, { t: "Mergulhe cada um por 30 segundos na água fervente com bicarbonato (cuidado: espuma). Escorra e polvilhe sal grosso." }, FORNO(220, 15, "até ficarem marrom-escuros")] }, ["trigo", "leite"]);
MU({ id: "pq-croissant", emoji: "🥐", nome: "Croissant caseiro simplificado", intro: "Massa folhada com manteiga em 3 dobras: dá trabalho, mas cabe numa tarde e numa manhã.", tempo: 1200, nivel: "Difícil", rende: "12 croissants", tags: ["Forno", "França", "Para receber"],
  ingredientes: ["500 g de farinha de trigo", "10 g de fermento biológico seco", "60 g de açúcar", "10 g de sal", "280 g de leite gelado", "30 g de manteiga mole", "250 g de manteiga gelada (para laminar)", "1 ovo para pincelar"],
  passos: [{ t: "Faça uma massa com tudo menos a manteiga de laminar, sove só 3 minutos, embrulhe e leve à geladeira por 8 horas." },
    { t: "Bata a manteiga gelada entre 2 plásticos num quadrado de 15 cm. Abra a massa num quadrado de 30 cm, coloque a manteiga em losango e feche como um envelope." },
    { t: "Abra num retângulo de 60 x 20 cm, dobre em 3 (como carta). Geladeira 30 minutos. Repita 2 vezes.", timer: 30 },
    { t: "Abra com 4 mm, corte triângulos de 10 cm de base e enrole da base para a ponta." },
    CRESCE(120, "ficarem estufados e balançarem como gelatina"), { t: "Pincele ovo." }, FORNO(200, 18)] }, ["trigo", "leite", "ovo"]);
MU({ id: "pq-tortilla", emoji: "🌮", nome: "Tortilha de trigo", intro: "Discos macios para burrito, wrap e quesadilla, sem fermento.", tempo: 40, nivel: "Fácil", rende: "10 tortilhas", tags: ["Frigideira", "México", "Rápido"],
  ingredientes: ["300 g de farinha de trigo", "5 g de sal", "4 g de fermento químico", "50 g de óleo", "170 g de água morna"],
  passos: [{ t: "Misture tudo e sove 3 minutos. Descanse 20 minutos coberta.", timer: 20 }, { t: "Divida em 10, abra discos bem finos e doure em frigideira seca 40 segundos de cada lado." }, { t: "Guarde empilhadas num pano." }] });
MU({ id: "pq-english-muffin", emoji: "🇬🇧", nome: "English muffin", intro: "Pãozinho de frigideira com fubá, para abrir ao meio e tostar. Base do café da manhã inglês.", tempo: 150, rende: "10 muffins", tags: ["Frigideira", "Café da manhã"],
  ingredientes: ["450 g de farinha de trigo", "7 g de fermento biológico seco", "15 g de açúcar", "8 g de sal", "280 g de leite morno", "25 g de manteiga", "Fubá para polvilhar"],
  passos: [{ t: "Sove 8 minutos e deixe crescer 1 hora." }, { t: "Abra com 2 cm, corte discos de 8 cm e passe no fubá. Descanse 30 minutos.", timer: 30 }, { t: "Cozinhe em frigideira em fogo baixo, 7 minutos de cada lado, tampada.", timer: 14 }] }, ["trigo", "leite"]);
MU({ id: "pq-fougasse", emoji: "🍃", nome: "Fougasse", intro: "Pão provençal em forma de folha, com cortes vazados: mais casca, mais crocância.", tempo: 180, rende: "2 fougasses", tags: ["Forno", "França", "Petisco"],
  ingredientes: ["400 g de farinha de trigo", "5 g de fermento biológico seco", "8 g de sal", "270 g de água", "30 g de azeite", "Azeitonas, ervas de Provence"],
  passos: [{ t: "Sove 8 minutos e deixe crescer 1 hora e meia.", timer: 90 }, { t: "Divida em 2, abra triângulos de 1 cm, faça um corte central e cortes diagonais vazados, abrindo com os dedos." }, CRESCE(30, "inflar"), { t: "Pincele azeite e espalhe ervas." }, FORNO(230, 18)] });
MU({ id: "pq-chapati", emoji: "🫓", nome: "Chapati integral", intro: "Pão indiano integral, sem fermento, feito em minutos na frigideira.", tempo: 30, nivel: "Fácil", rende: "8 chapatis", tags: ["Frigideira", "Integral", "Rápido"],
  ingredientes: ["250 g de farinha de trigo integral", "4 g de sal", "160 g de água morna", "15 g de óleo"],
  passos: [{ t: "Faça uma massa macia, sove 3 minutos e descanse 15 minutos.", timer: 15 }, { t: "Abra 8 discos finos e cozinhe em frigideira quente 1 minuto de cada lado, apertando com um pano para estufar." }] });
MU({ id: "pq-cornbread", emoji: "🌽", nome: "Cornbread", intro: "Pão de milho americano de frigideira de ferro: casquinha crocante e miolo úmido.", tempo: 40, nivel: "Fácil", rende: "8 pedaços", tags: ["Forno", "EUA", "Rápido"],
  ingredientes: ["150 g de fubá", "120 g de farinha de trigo", "40 g de açúcar", "10 g de fermento químico", "4 g de sal", "2 ovos", "250 g de leite", "70 g de manteiga derretida"],
  passos: [{ t: "Aqueça uma frigideira de ferro (ou forma) com 10 g da manteiga no forno a 210 °C." }, { t: "Misture os secos, junte os ovos, o leite e o resto da manteiga, só até incorporar." }, { t: "Despeje na frigideira quente e asse 22 minutos.", timer: 22 }] }, ["trigo", "leite", "ovo"]);
MU({ id: "pq-cardamomo", emoji: "🇸🇪", nome: "Nós suecos de cardamomo", intro: "Pãezinhos amanteigados torcidos em nó, perfumados de cardamomo e açúcar pérola.", tempo: 190, rende: "14 nós", tags: ["Forno", "Café da tarde"],
  ingredientes: ["450 g de farinha de trigo", "8 g de fermento biológico seco", "60 g de açúcar", "5 g de sal", "8 g de cardamomo moído", "220 g de leite morno", "70 g de manteiga", "Recheio: 80 g de manteiga mole + 60 g de açúcar + 4 g de cardamomo", "1 ovo, açúcar cristal"],
  passos: [{ t: "Sove a massa 10 minutos e deixe crescer 1 hora." }, { t: "Abra num retângulo, espalhe o recheio, dobre ao meio, corte tiras de 2 cm, torça e dê um nó em cada uma." }, CRESCE(40), { t: "Pincele ovo e polvilhe açúcar." }, FORNO(200, 14)] }, ["trigo", "leite", "ovo"]);

/* =============== LANCHES E SANDUÍCHES (12) =============== */
S = "Premium · Lanches e sanduíches";
function LA(id, emoji, nome, intro, ing, monta, rende, avs, tags, tempo) {
  P({ id: id, sec: S, emoji: emoji, nome: nome, intro: intro, tempo: tempo || 170, nivel: "Fácil", rende: rende, tags: tags || ["Forno", "Lanche"], ingredientes: ing, passos: monta, aviso: av.apply(null, avs || ["trigo", "leite", "ovo"]) });
}
LA("pq-hamb-brioche", "🍔", "Pão de hambúrguer brioche", "Macio, brilhante e firme o bastante para o suco do hambúrguer.",
  ["500 g de farinha de trigo", "10 g de fermento biológico seco", "40 g de açúcar", "9 g de sal", "200 g de leite morno", "2 ovos", "70 g de manteiga", "Gergelim e 1 gema"],
  [{ t: "Sove 12 minutos e deixe crescer 1 hora." }, { t: "Divida em 8 bolas de 100 g, boleie e achate com a palma." }, CRESCE(45), PINCELA, { t: "Polvilhe gergelim." }, FORNO(190, 16), ESFRIA], "8 pães", ["trigo", "leite", "ovo", "gergelim"]);
LA("pq-hotdog", "🌭", "Pão de cachorro-quente", "Comprido, macio e de casca fina, encostado na assadeira para as laterais ficarem macias.",
  base(SAL_I, ["1 gema"]), passos(SAL_P, [{ t: "Divida em 12 partes de 70 g, enrole como rocambole e role em cilindros de 15 cm. Arrume encostados." }, CRESCE(40), PINCELA, FORNO(180, 18), ESFRIA]), "12 pães");
LA("pq-hamb-batata", "🥔", "Pão de hambúrguer de batata", "A batata deixa o pão úmido e macio por mais tempo. Perfeito para smash burger.",
  ["200 g de batata cozida e amassada fria", "450 g de farinha de trigo", "10 g de fermento", "30 g de açúcar", "9 g de sal", "150 g de leite morno", "1 ovo", "50 g de manteiga", "1 gema"],
  [{ t: "Misture tudo, sove 10 minutos e deixe crescer 1 hora." }, { t: "Faça 8 bolas, achate e deixe crescer 40 minutos.", timer: 40 }, PINCELA, FORNO(190, 16)], "8 pães");
LA("pq-baguete-sanduiche", "🥖", "Baguete de sanduíche macia", "Baguete de casca fina e miolo macio, feita para cortar ao meio e rechear.",
  base(SAL_I, []), passos(SAL_P, [{ t: "Divida em 4, modele filões de 25 cm e faça cortes diagonais." }, CRESCE(40), FORNO(200, 20), ESFRIA]), "4 baguetes");
LA("pq-pullman", "🍞", "Pão de forma de sanduíche (forma tampada)", "Quadrado perfeito, sem casca dura, assado em forma tampada como os de mercado.",
  base(SAL_I, ["Forma de pão com tampa (ou forma comum coberta com assadeira e peso)"]),
  passos(SAL_P, [{ t: "Modele um rocambole e coloque na forma. Deixe crescer até 1 dedo abaixo da borda e tampe.", timer: 40 }, FORNO(190, 35, "tampado"), ESFRIA]), "1 pão quadrado (20 fatias)");
LA("pq-mini-festa", "🎉", "Mini pães para festa", "Pãezinhos de 25 g para mini sanduíches, hambúrgueres de festa e bem-casado salgado.",
  base(DOCE_I.map(function (x) { return x.replace("80 g de açúcar", "40 g de açúcar"); }), ["1 gema", "Gergelim ou parmesão"]),
  passos(DOCE_P, [{ t: "Divida em 40 bolinhas de 25 g, boleie e arrume na assadeira com espaço." }, CRESCE(30), PINCELA, FORNO(180, 14)]), "40 mini pães", ["trigo", "leite", "ovo"], ["Forno", "Festa", "Congela bem"]);
LA("pq-natural", "🥪", "Pão para sanduíche natural", "Pão integral leve, de miolo fechado, que não esfarela na marmita.",
  ["300 g de farinha de trigo", "200 g de farinha de trigo integral", "10 g de fermento", "25 g de mel", "9 g de sal", "320 g de água morna", "40 g de azeite"],
  [{ t: "Sove 10 minutos e deixe crescer 1 hora." }, { t: "Modele na forma e deixe crescer até a borda." }, FORNO(190, 35), ESFRIA], "1 pão de forma (16 fatias)", ["trigo"]);
LA("pq-wrap-integral", "🌯", "Wrap integral", "Discos finos de frigideira, flexíveis, para enrolar o almoço.",
  ["150 g de farinha de trigo integral", "100 g de farinha de trigo", "4 g de sal", "3 g de fermento químico", "30 g de azeite", "150 g de água morna"],
  [{ t: "Faça uma massa macia, descanse 15 minutos.", timer: 15 }, { t: "Abra 6 discos finos e doure em frigideira seca 40 segundos de cada lado." }], "6 wraps", ["trigo"], ["Frigideira", "Integral"], 35);
LA("pq-bola-lanche", "⚪", "Pão bola de lanche", "O pão redondo de lanchonete, de casca fina e miolo branco, para bauru e misto.",
  base(SAL_I, []), passos(SAL_P, [{ t: "Divida em 8 bolas de 100 g, boleie bem e achate levemente." }, CRESCE(40), FORNO(190, 18)]), "8 pães");
LA("pq-hotdog-integral", "🌭", "Pão de cachorro-quente integral", "Metade integral, macio e com mel: para o lanche de sábado.",
  ["250 g de farinha de trigo integral", "250 g de farinha de trigo", "10 g de fermento", "30 g de mel", "9 g de sal", "300 g de leite morno", "40 g de óleo"],
  [{ t: "Sove 10 minutos, deixe crescer 1 hora, modele 10 cilindros." }, CRESCE(40), FORNO(185, 18)], "10 pães", ["trigo", "leite"]);
LA("pq-hamb-integral", "🍔", "Pão de hambúrguer integral", "Integral, com sementes por cima e miolo macio.",
  ["250 g de farinha de trigo integral", "250 g de farinha de trigo", "10 g de fermento", "25 g de mel", "9 g de sal", "300 g de água morna", "1 ovo", "40 g de azeite", "Sementes"],
  [{ t: "Sove 10 minutos e deixe crescer 1 hora." }, { t: "Faça 8 bolas, achate, pincele água e polvilhe sementes." }, CRESCE(40), FORNO(190, 18)], "8 pães", ["trigo", "ovo"]);
LA("pq-hamb-vegano", "🌱", "Pão de hambúrguer vegano", "Sem ovo e sem leite: bebida vegetal e azeite, com o mesmo miolo macio.",
  ["500 g de farinha de trigo", "10 g de fermento", "30 g de açúcar", "9 g de sal", "290 g de bebida vegetal morna", "50 g de azeite", "Gergelim"],
  [{ t: "Sove 10 minutos e deixe crescer 1 hora." }, { t: "Faça 8 bolas, achate, pincele bebida vegetal e polvilhe gergelim." }, CRESCE(40), FORNO(190, 16)], "8 pães", ["trigo", "gergelim"]);

/* ================= BÔNUS PREMIUM: receitas ================= */
window.SECOES.pao.push("Bônus Premium · Manteigas e geleias para o pão");
var BM = "Bônus Premium · Manteigas e geleias para o pão";
function BMx(id, emoji, nome, intro, ing, ps, avs, tempo) { P({ id: id, sec: BM, emoji: emoji, nome: nome, intro: intro, tempo: tempo || 10, nivel: "Fácil", rende: ing.rende || "1 pote pequeno", tags: ["Sem forno", "Rápido"], ingredientes: ing, passos: ps, aviso: av.apply(null, avs || ["leite"]) || "Não leva leite, ovo nem glúten." }); }
BMx("pq-m-ervas", "🌿", "Manteiga de ervas e alho", "Para pão quente, pão de alho e para grelhar.", ["100 g de manteiga mole", "1 dente de alho ralado", "Salsinha, cebolinha e orégano picados", "1 pitada de sal"], [{ t: "Misture tudo, enrole em filme como um rolo e leve à geladeira. Dura 7 dias (ou 2 meses no congelador)." }]);
BMx("pq-m-mel", "🍯", "Manteiga de mel e canela", "Doce e salgada ao mesmo tempo, para torrada e pão de leite.", ["100 g de manteiga mole", "30 g de mel", "2 g de canela", "1 pitada de flor de sal"], [{ t: "Bata tudo com garfo até ficar cremoso. Guarde na geladeira por até 10 dias." }]);
BMx("pq-m-tomate", "🍅", "Manteiga de tomate seco", "Vermelha e intensa, ótima com pão italiano.", ["100 g de manteiga mole", "40 g de tomate seco bem picado", "Manjericão"], [{ t: "Misture e guarde na geladeira por até 7 dias." }]);
BMx("pq-g-morango", "🍓", "Geleia rápida de morango com chia", "Sem pectina e com pouco açúcar: a chia engrossa sozinha.", ["300 g de morangos", "30 g de açúcar ou mel", "20 g de chia", "Suco de 1/2 limão"], [{ t: "Cozinhe os morangos com o açúcar e o limão por 10 minutos, amassando.", timer: 10 }, { t: "Junte a chia, deixe esfriar e guarde na geladeira por até 7 dias." }], [], 25);
BMx("pq-g-laranja", "🍊", "Geleia de laranja", "Com casca em tirinhas finas, amargor suave.", ["4 laranjas", "200 g de açúcar", "200 g de água"], [{ t: "Retire a casca sem a parte branca e corte em tirinhas. Ferva 5 minutos e escorra (tira o amargo)." }, { t: "Cozinhe o suco, a polpa, as cascas, o açúcar e a água por 30 minutos, até a calda engrossar.", timer: 30 }, { t: "Guarde em pote de vidro esterilizado na geladeira por até 1 mês." }], [], 45);
BMx("pq-g-banana", "🍌", "Doce de banana de corte macio", "Banana madura, açúcar e cravo: para pão com queijo e torrada.", ["5 bananas maduras", "100 g de açúcar", "3 cravos", "1 pau de canela"], [{ t: "Amasse as bananas e cozinhe com o resto em fogo baixo, mexendo, por 25 minutos, até escurecer e soltar da panela.", timer: 25 }], [], 35);

/* ================= BÔNUS PREMIUM: guias ================= */
window.GUIAS.push(
  { id: "pq-g-levain", produto: "pao_premium", col: "pao", emoji: "🫙", nome: "Fermento natural do zero",
    sub: "Como fazer o seu levain em 7 dias e manter vivo sem trabalho",
    itens: [
      { n: "Dia 1", t: "Misture 50 g de farinha integral com 50 g de água num pote de vidro. Tampe sem apertar e deixe fora da geladeira." },
      { n: "Dias 2 a 7", t: "Uma vez por dia: descarte metade e junte 50 g de farinha (metade integral, metade branca) + 50 g de água. Marque a altura com um elástico.\nNos primeiros dias pode ter cheiro forte e bolhas que somem: é normal." },
      { n: "Quando está pronto", t: "Dobra de volume em 4 a 8 horas depois de alimentar, com bolhas por todo lado e cheiro de iogurte. Teste: uma colher na água deve boiar." },
      { n: "Manutenção", t: "Use pouco: guarde 50 g na geladeira e alimente 1 vez por semana (1:1:1 de fermento, farinha e água). Na véspera de fazer pão, tire e alimente 2 vezes." },
      { n: "Descarte", t: "O que sobra ao alimentar vira panqueca e crackers (receitas na seção Fermentação natural)." },
      { n: "Problemas", t: "Líquido escuro em cima: fome. Descarte o líquido e alimente.\nMofo colorido ou cor rosa/laranja: jogue fora e comece de novo." }
    ] },
  { id: "pq-g-semana", produto: "pao_premium", col: "pao", emoji: "📅", nome: "Plano de pães da semana",
    sub: "Um roteiro para ter pão fresco em casa sem passar o dia na cozinha",
    itens: [
      { n: "Domingo (1 hora de trabalho)", t: "Pão de forma caseiro (sanduíches de segunda a quarta) + massa de pizza para congelar em bolas." },
      { n: "Quarta (30 minutos)", t: "Pão de liquidificador ou integral de 1 crescimento para o resto da semana." },
      { n: "Todo dia de manhã", t: "Pãezinhos congelados direto do freezer: 5 minutos no forno ou 3 na airfryer." },
      { n: "Sexta", t: "Pizza com as bolas congeladas (descongele na geladeira de manhã)." },
      { n: "Sábado", t: "Um pão especial: focaccia, rolinhos de canela ou pão de linguiça." }
    ] },
  { id: "pq-g-vender", produto: "pao_premium", col: "pao", emoji: "💼", nome: "Kit para vender pães",
    sub: "Custo, preço, embalagem e como começar com encomendas",
    itens: [
      { n: "Comece pequeno", t: "Escolha 3 pães que você já acerta sempre (sugestão: pão de forma, pão de linguiça e rolinhos de canela). Venda por encomenda com 1 dia de antecedência." },
      { n: "Custo e preço", t: "Use a Central PRO: informe o preço dos ingredientes e veja o custo por pão. Some embalagem, gás/luz (10% a 15%) e defina sua margem." },
      { n: "Embalagem", t: "Saco de papel com visor para pães de casca; saco plástico grosso com fecho para pão de forma e doces. Sempre com etiqueta." },
      { n: "Mensagem pronta", t: "\"Fornada de sexta! 🍞 Pão de forma caseiro R$ __, pão de linguiça R$ __, rolinhos de canela (6 un.) R$ __. Encomendas até quinta 18h. Retirada ou entrega no bairro.\"" },
      { n: "Regras", t: "Para vender alimentos, siga as boas práticas de manipulação e as regras da sua cidade. Os resultados dependem do seu trabalho, preço e região: não prometemos ganhos." }
    ] },
  { id: "pq-g-etiquetas", produto: "pao_premium", col: "pao", emoji: "🏷️", nome: "Etiquetas e validade",
    sub: "O que colocar na etiqueta e quanto tempo cada pão dura",
    itens: [
      { n: "Na etiqueta", t: "Nome do pão, data de produção, validade, ingredientes que causam alergia (trigo/glúten, leite, ovo, castanhas, gergelim) e forma de conservar." },
      { n: "Validade sugerida", t: "Pães sem recheio: 3 dias em temperatura ambiente.\nRecheados com carne, frango ou queijo: 2 dias na geladeira.\nCongelados: 3 meses." },
      { n: "Sistema de cores", t: "Use etiquetas de cores diferentes por dia de produção: fica fácil ver o que vence primeiro." }
    ] },
  { id: "pq-g-lote", produto: "pao_premium", col: "pao", emoji: "🧊", nome: "Pães para congelar em lote",
    sub: "Como fazer 1 vez e ter pão para 1 mês",
    itens: [
      { n: "Os melhores para congelar", t: "Pão de forma fatiado, bisnaguinha, pão de batata, pão de hambúrguer, mini pizzas, esfihas e pão de linguiça." },
      { n: "Congelar assado", t: "Esfrie totalmente, congele espalhado numa assadeira por 2 horas e depois guarde em saco com a data." },
      { n: "Congelar cru", t: "Modele, congele na assadeira e guarde em saco. Na véspera, passe para a geladeira; asse depois de 1 a 2 horas fora, quando crescer." },
      { n: "Reaquecer", t: "Forno 180 °C por 6 a 8 minutos ou airfryer 160 °C por 3 a 4 minutos." }
    ] },
  { id: "pq-g-hidratacao", produto: "pao_premium", col: "pao", emoji: "💧", nome: "Hidratação e farinhas",
    sub: "Por que algumas massas são moles e como trocar de farinha sem errar",
    itens: [
      { n: "O que é hidratação", t: "É o peso da água dividido pelo peso da farinha. 300 g de água para 500 g de farinha = 60%.\n60% a 65%: massa firme (pão de forma, pão francês).\n70% a 80%: massa mole, de dobras (focaccia, ciabatta, levain)." },
      { n: "Farinhas", t: "Farinha tipo 1: a comum de pacote. Para pães de fermentação longa, prefira farinha com mais proteína (11% a 13% no rótulo).\nIntegral absorve mais água: para cada 100 g trocados, some 10 g de água." },
      { n: "Sem glúten", t: "A base que funciona: 60% farinha de arroz, 30% fécula ou polvilho, 10% outra farinha (grão-de-bico, sorgo, aveia certificada) + 4% a 6% de psyllium em pó sobre o total." }
    ] },
  { id: "pq-g-desafios", produto: "pao_premium", col: "pao", emoji: "🏆", nome: "Desafios extras",
    sub: "Semana Integral, Sem Glúten, Do Mundo e Fermentação Natural",
    itens: [
      { n: "Como funciona", t: "No desafio Semana do Pão, o Premium pode escolher um tema para a semana. Completar 3 pães do tema dá um selo próprio." },
      { n: "Semana Integral", t: "3 pães das seções Integrais e com grãos ou Lanches integrais." },
      { n: "Semana Sem Glúten", t: "3 pães das seções Sem glúten e sem lactose e Sem glúten avançado." },
      { n: "Volta ao Mundo", t: "3 pães da seção Pães do mundo." },
      { n: "Mestre do Levain", t: "3 pães da seção Fermentação natural." }
    ] },
  { id: "pq-g-cafe", produto: "pao_premium", col: "pao", emoji: "☕", nome: "Café da manhã de padaria em casa",
    sub: "Como montar a mesa de fim de semana com o que já está pronto",
    itens: [
      { n: "Na véspera", t: "Deixe uma massa de pão de leite ou rolinhos de canela modelada na geladeira, coberta. De manhã, 1 hora fora até crescer e 25 minutos de forno." },
      { n: "Para acompanhar", t: "Manteiga de ervas, manteiga de mel, geleia de morango com chia e doce de banana (receitas nos bônus), queijo, frutas e café." },
      { n: "Pão na chapa", t: "Pãozinho aberto, manteiga dos dois lados, frigideira em fogo médio, apertando com uma espátula, 2 minutos de cada lado." },
      { n: "Misto quente de padaria", t: "Pão de forma, presunto e queijo, manteiga por fora. Frigideira tampada em fogo baixo: o queijo derrete antes de o pão queimar." }
    ] },
  { id: "pq-g-familia", produto: "pao_premium", col: "pao", emoji: "👨‍👩‍👧", nome: "Pão para a família e para festas",
    sub: "Quanto fazer para 2, 4 ou 30 pessoas",
    itens: [
      { n: "Café da manhã", t: "Conte 2 fatias de pão de forma ou 1 pãozinho de 70 g por pessoa. Família de 4 por 5 dias: 1 pão de forma grande + 10 pãezinhos." },
      { n: "Festa", t: "Mini pães (25 g): 4 a 5 por pessoa. Esfihas: 3 por pessoa. Pão de alho de bolinhas: 1 forma para cada 10 pessoas." },
      { n: "Dobrar receitas", t: "Até 2 kg de farinha, multiplique tudo. Use 2 fornadas em vez de lotar o forno: o pão precisa de ar quente circulando." }
    ] }
);
})();
