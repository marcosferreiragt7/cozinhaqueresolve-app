/* ================================================================
   PANETONES QUE RESOLVEM — plano Essencial (30 receitas + 3 bônus)
   Coleção própria Cozinha que Resolve, entregue no app.
   Carregar DEPOIS de ceia3.js (usa ceiaImg e GUIAS).
   premium:
     "panetones"              -> só quem comprou o Panetones que Resolvem
     "panetones_ou_festival"  -> também libera para quem já tem o Festival de Panetones
     "panetones_ou_ceia"      -> também libera para quem já tem a Ceia Resolvida
   rascunho:true  -> a coleção só aparece para quem tem o código (revisão).
   Para lançar: rascunho:false e preencher PANETONES.checkout.essencial.
   Receitas novas: formulações da Cozinha que Resolve, ainda sem teste de cozinha
   registrado. Não anunciar como "testadas".
   ================================================================ */
(function () {
var R = window.RECEITAS;

window.PANETONES = {
  preco: "R$ 19,90",
  checkout: { essencial: "" },        /* link do checkout da Cakto (preencher no lançamento) */
  pagina: ""                          /* página de vendas (preencher no lançamento) */
};

window.COLECOES.push({
  id: "panetones", nome: "Panetones que Resolvem", emoji: "🍞", cor: "#9A5B13",
  capa: window.ceiaImg("img/ceia/capa-festival.webp"), produto: "panetones", rascunho: true,
  desc: "30 panetones para fazer, presentear e vender: clássicos, trufados, minis e versões sem glúten, sem lactose ou sem açúcar adicionado.",
  foot: "Fotos ilustrativas. Cada receita mostra se leva glúten, leite, ovos ou açúcar. Receitas elaboradas pela Cozinha que Resolve; o resultado pode variar com o forno, a temperatura da cozinha e as marcas usadas."
});

window.SECOES.panetones = [
  "Clássicos",
  "Trufados e recheados",
  "Minis e presentes",
  "Versões especiais",
  "Sem açúcar, sem glúten e sem lactose",
  "Sabores sem açúcar, sem glúten e sem lactose"
];

/* ---------- passos que se repetem nas massas de trigo ---------- */
function esponja(liq, comAcucar) {
  return { t: "Esponja: numa tigela, misture 100 g da farinha, " + liq + " morno (cerca de 35 °C, morno ao toque) e o fermento" + (comAcucar ? ", mais 1 colher de chá do açúcar" : "") + ". Cubra e espere espumar e crescer.", timer: 20 };
}
function sova(junta) {
  return { t: "Junte o restante da farinha, " + junta + ". Sove 8 minutos na batedeira com gancho (ou cerca de 15 minutos à mão), até a massa ficar lisa e elástica." };
}
function gordura(g) {
  return { t: "Acrescente o sal e depois " + g + ", aos poucos: só coloque mais quando a parte anterior tiver sumido na massa. Sove até o ponto de véu: estique um pedaço fino entre os dedos e ele forma uma película quase transparente, sem rasgar. Na batedeira, são mais 8 a 12 minutos." };
}
var CRESCE1 = { t: "Cubra e deixe crescer em lugar morno (25 a 28 °C, por exemplo dentro do forno desligado só com a luz acesa) até dobrar de volume. Em dia frio pode passar de 2 horas: vale o ponto, não o relógio.", timer: 120 };
function divide(txt) {
  return { t: txt + " Boleie cada parte (dobre as bordas para baixo, girando, até ficar uma bola lisa) e coloque nas formas de papel." };
}
var CRESCE2 = { t: "Cubra e deixe crescer de novo até a massa chegar a 1 ou 2 cm da borda da forma.", timer: 120 };
function assar(min, minis, extra) {
  return { t: (extra || "Faça um corte em cruz no topo.") + " Asse em forno preaquecido a 170 °C por " + (min - 5) + " a " + (min + 5) + " minutos, até dourar bem e o palito sair seco. Se dourar rápido, cubra com papel-alumínio." + (minis ? " Os minis assam em cerca de 20 minutos." : "") + " Se tiver termômetro culinário, o centro fica perto de 92 °C quando está pronto.", timer: min };
}
var ESFRIA = { t: "Esfrie de cabeça para baixo: atravesse a base com 2 espetos de churrasco, vire e apoie os espetos entre duas panelas. Assim o panetone não murcha. Espere esfriar totalmente antes de rechear, cortar ou embalar.", timer: 180 };
var ESFRIA_MINI = { t: "Deixe os minis esfriarem totalmente sobre uma grade antes de rechear, cobrir ou embalar.", timer: 60 };
function ganache(choc, creme, extra) {
  return { t: "Ganache: pique " + choc + " e coloque numa tigela. Aqueça " + creme + (extra || "") + " até as bordas começarem a borbulhar, despeje sobre o chocolate, espere 2 minutos e mexa do centro para fora até ficar liso e brilhante. Deixe firmar até o ponto de bisnaga (cerca de 1 hora em temperatura ambiente ou 20 a 30 minutos na geladeira, mexendo de vez em quando).", timer: 60 };
}
function rechear(g) {
  return { t: "Com o panetone já frio, faça 3 ou 4 furos na base com o cabo de uma colher de pau. Coloque o recheio num saco de confeitar com bico liso fino e injete cerca de " + g + " em cada panetone, dividindo entre os furos. Se a massa começar a rachar, pare: está cheio." };
}
var TEMPERAGEM = "Chocolate fracionado (próprio para cobertura) não precisa de temperagem. Se usar chocolate nobre, derreta a 45 °C, esfrie mexendo até cerca de 30 °C e só então use: a cobertura fica brilhante e não esbranquiça.";

/* ---------- avisos ---------- */
var TRIGO = "Contém glúten (trigo), leite e ovos. Os tempos de crescimento mudam com a temperatura da cozinha: siga o ponto, não só o relógio. Receita elaborada pela Cozinha que Resolve; o resultado pode variar com o forno e as marcas usadas.";
var PERECIVEL = " Recheios e coberturas com creme de leite são perecíveis: depois de rechear, guarde na geladeira. Para vender, siga as boas práticas e as regras de rotulagem de alimentos.";

function P(o) {
  o.col = "panetones"; o.premium = "panetones"; o.foto = window.ceiaImg("img/ceia/" + o.foto + ".webp");
  R.push(o);
}

/* ================= CLÁSSICOS ================= */
P({ id: "pn-tradicional", sec: "Clássicos", foto: "panetone", emoji: "🍞",
  nome: "Panetone tradicional com frutas cristalizadas e uvas-passas",
  intro: "O panetone de sempre: massa fofa com raspas de laranja, frutas cristalizadas e uvas-passas. Feito em duas etapas, com esponja, para crescer bem.",
  tempo: 460, nivel: "Médio", rende: "2 panetones de 500 g + 2 minis", tags: ["Forno", "Fermentação", "Clássico"],
  ingredientes: ["500 g de farinha de trigo", "175 g de leite", "100 g de ovos (2 ovos médios)", "85 g de açúcar", "90 g de manteiga em temperatura ambiente", "8 g de fermento biológico seco", "8 g de sal", "15 g de mel", "5 g de raspas de laranja", "4 g de aroma de panetone", "100 g de frutas cristalizadas", "100 g de uvas-passas"],
  passos: [esponja("todo o leite", true), sova("o açúcar, os ovos, o mel, as raspas de laranja e o aroma"), gordura("a manteiga"),
    { t: "Hidrate as uvas-passas 10 minutos em água morna, escorra e seque bem no papel-toalha. Envolva as passas e as frutas cristalizadas em 1 colher de sopa de farinha e incorpore à massa dobrando, sem sovar mais." },
    CRESCE1, divide("Divida em 2 partes de 500 g. Com a sobra (cerca de 190 g), faça 2 minis de 95 g em forminhas de 100 g."), CRESCE2,
    assar(40, true, "Faça um corte em cruz no topo e coloque uma lasca de manteiga no centro."), ESFRIA],
  dica: "Frutas secas demais roubam a umidade da massa. Por isso vale hidratar as passas, e as frutas vão só no fim, para não rasgar a massa.",
  aviso: TRIGO });

P({ id: "pn-chocotone", sec: "Clássicos", foto: "chocotone", emoji: "🍫",
  nome: "Chocotone com gotas de chocolate",
  intro: "A massa clássica de panetone com gotas de chocolate no lugar das frutas. Para quem tira as frutas cristalizadas do prato.",
  tempo: 450, nivel: "Médio", rende: "2 chocotones de 500 g + 1 mini", tags: ["Forno", "Fermentação", "Chocolate"],
  ingredientes: ["450 g de farinha de trigo", "160 g de leite", "100 g de ovos (2 ovos médios)", "80 g de açúcar", "80 g de manteiga em temperatura ambiente", "7 g de fermento biológico seco", "7 g de sal", "15 g de mel", "4 g de aroma de panetone", "180 g de gotas de chocolate forneáveis"],
  passos: [esponja("todo o leite", true), sova("o açúcar, os ovos, o mel e o aroma"), gordura("a manteiga"),
    { t: "Incorpore as gotas de chocolate dobrando a massa sobre elas, sem sovar mais." },
    CRESCE1, divide("Divida em 2 partes de 500 g. A sobra (cerca de 80 g) vira 1 mini."), CRESCE2, assar(40, true), ESFRIA],
  dica: "Use gotas forneáveis: elas mantêm o formato no forno. Chocolate picado comum derrete e mancha a massa.",
  aviso: TRIGO });

P({ id: "pn-laranja-casca", sec: "Clássicos", foto: "fest-laranja", emoji: "🍊",
  nome: "Panetone de laranja, casca cristalizada e chocolate",
  intro: "Laranja em três camadas (raspas, suco e casca cristalizada) com gotas de chocolate. Perfumado e ótimo para presentear.",
  tempo: 460, nivel: "Médio", rende: "2 panetones de 500 g + 2 minis", tags: ["Forno", "Fermentação", "Chocolate"],
  ingredientes: ["450 g de farinha de trigo", "145 g de leite", "25 g de suco de laranja", "100 g de ovos (2 ovos médios)", "75 g de açúcar", "80 g de manteiga em temperatura ambiente", "8 g de fermento biológico seco", "7 g de sal", "15 g de mel", "8 g de raspas de laranja", "170 g de gotas de chocolate forneáveis", "80 g de casca de laranja cristalizada picada"],
  passos: [esponja("todo o leite", true), sova("o açúcar, os ovos, o mel, o suco e as raspas de laranja"), gordura("a manteiga"),
    { t: "Envolva a casca de laranja em 1 colher de sopa de farinha e incorpore com as gotas de chocolate, dobrando a massa, sem sovar mais." },
    CRESCE1, divide("Divida em 2 partes de 500 g. Com a sobra (cerca de 160 g), faça 2 minis de 80 g."), CRESCE2, assar(40, true), ESFRIA],
  dica: "Raspe só a parte laranja da casca: a parte branca amarga.",
  aviso: TRIGO });

P({ id: "pn-frutas-secas", sec: "Clássicos", foto: "panetone-liquidificador", emoji: "🌰",
  nome: "Panetone de frutas secas e castanha-do-pará",
  intro: "Para quem não gosta de fruta cristalizada: damasco, ameixa e castanha-do-pará na massa clássica.",
  tempo: 460, nivel: "Médio", rende: "2 panetones de 500 g + 2 minis", tags: ["Forno", "Fermentação", "Castanhas"],
  ingredientes: ["500 g de farinha de trigo", "175 g de leite", "100 g de ovos (2 ovos médios)", "85 g de açúcar", "90 g de manteiga em temperatura ambiente", "8 g de fermento biológico seco", "8 g de sal", "15 g de mel", "5 g de raspas de laranja", "4 g de aroma de panetone", "80 g de damasco seco picado", "60 g de ameixa seca sem caroço picada", "60 g de castanha-do-pará picada grosseiramente"],
  passos: [esponja("todo o leite", true), sova("o açúcar, os ovos, o mel, as raspas de laranja e o aroma"), gordura("a manteiga"),
    { t: "Toste a castanha-do-pará 5 minutos numa frigideira seca e deixe esfriar. Envolva as frutas e a castanha em 1 colher de sopa de farinha e incorpore à massa dobrando, sem sovar mais." },
    CRESCE1, divide("Divida em 2 partes de 500 g. Com a sobra (cerca de 190 g), faça 2 minis de 95 g."), CRESCE2, assar(40, true), ESFRIA],
  dica: "Se o damasco estiver muito duro, deixe 10 minutos em água morna e seque bem antes de picar.",
  aviso: "Contém glúten (trigo), leite, ovos e castanhas. " + TRIGO.slice(TRIGO.indexOf("Os tempos")) });

P({ id: "pn-duplo-chocolate", sec: "Clássicos", foto: "brigatone", emoji: "🍫",
  nome: "Panetone duplo chocolate",
  intro: "Massa de cacau com gotas de chocolate: escuro por dentro e por fora, para os fãs de chocolate.",
  tempo: 470, nivel: "Médio", rende: "2 panetones de 500 g + 1 mini", tags: ["Forno", "Fermentação", "Chocolate"],
  ingredientes: ["420 g de farinha de trigo", "30 g de cacau em pó 100%", "180 g de leite", "100 g de ovos (2 ovos médios)", "90 g de açúcar", "80 g de manteiga em temperatura ambiente", "8 g de fermento biológico seco", "7 g de sal", "15 g de mel", "5 g de essência de baunilha", "180 g de gotas de chocolate forneáveis"],
  passos: [esponja("todo o leite", true), sova("o cacau peneirado, o açúcar, os ovos, o mel e a baunilha"), gordura("a manteiga"),
    { t: "Incorpore as gotas de chocolate dobrando a massa, sem sovar mais." },
    CRESCE1, divide("Divida em 2 partes de 500 g. A sobra (cerca de 110 g) vira 1 mini."), CRESCE2,
    assar(40, true, "Faça um corte em cruz no topo. Como a massa é escura, guie-se pelo palito, não pela cor."), ESFRIA],
  dica: "O cacau deixa a massa mais firme e o crescimento um pouco mais lento. Tenha paciência na segunda fermentação.",
  aviso: TRIGO });

/* ================= TRUFADOS E RECHEADOS ================= */
P({ id: "pn-trufado", sec: "Trufados e recheados", foto: "panetone-trufado", emoji: "🍫",
  nome: "Panetone trufado",
  intro: "Chocotone recheado com ganache de chocolate e coberto com chocolate e raspas. O clássico das vitrines de Natal.",
  tempo: 560, nivel: "Avançado", rende: "2 panetones trufados de 500 g + 1 mini", tags: ["Forno", "Recheado", "Chocolate"],
  ingredientes: ["Massa: 450 g de farinha de trigo", "160 g de leite", "100 g de ovos (2 ovos médios)", "80 g de açúcar", "80 g de manteiga em temperatura ambiente", "7 g de fermento biológico seco", "7 g de sal", "15 g de mel", "4 g de aroma de panetone", "180 g de gotas de chocolate forneáveis",
    "Recheio: 360 g de chocolate meio amargo", "240 g de creme de leite UHT",
    "Cobertura: 160 g de chocolate meio amargo", "40 g de raspas de chocolate"],
  passos: [esponja("todo o leite", true), sova("o açúcar, os ovos, o mel e o aroma"), gordura("a manteiga"),
    { t: "Incorpore as gotas de chocolate dobrando a massa, sem sovar mais." },
    CRESCE1, divide("Divida em 2 partes de 500 g. A sobra (cerca de 80 g) vira 1 mini."), CRESCE2, assar(40, true), ESFRIA,
    ganache("os 360 g de chocolate", "o creme de leite"),
    rechear("150 g de ganache (na próxima fornada, se a massa aguentar bem, dá para ir até 250 g)"),
    { t: "Cobertura: derreta os 160 g de chocolate (no micro-ondas, de 30 em 30 segundos, mexendo). Espalhe no topo do panetone e salpique as raspas antes de firmar." }],
  dica: "A ganache que sobrar fica ótima servida à parte, para cada um rechear a própria fatia. " + TEMPERAGEM,
  aviso: TRIGO + PERECIVEL });

P({ id: "pn-crocante", sec: "Trufados e recheados", foto: "fest-cafe", emoji: "🥜",
  nome: "Panetone com cobertura crocante de chocolate e castanhas",
  intro: "Chocotone com uma casquinha de chocolate cheia de amêndoas e castanhas-de-caju torradas. Faz barulho na mordida.",
  tempo: 500, nivel: "Médio", rende: "2 panetones de 500 g + 1 mini", tags: ["Forno", "Chocolate", "Castanhas"],
  ingredientes: ["Massa: 450 g de farinha de trigo", "160 g de leite", "100 g de ovos (2 ovos médios)", "80 g de açúcar", "80 g de manteiga em temperatura ambiente", "7 g de fermento biológico seco", "7 g de sal", "15 g de mel", "4 g de aroma de panetone", "180 g de gotas de chocolate forneáveis",
    "Cobertura: 220 g de chocolate meio amargo (de preferência fracionado)", "60 g de amêndoas torradas e picadas", "40 g de castanhas-de-caju torradas e picadas"],
  passos: [esponja("todo o leite", true), sova("o açúcar, os ovos, o mel e o aroma"), gordura("a manteiga"),
    { t: "Incorpore as gotas de chocolate dobrando a massa, sem sovar mais." },
    CRESCE1, divide("Divida em 2 partes de 500 g. A sobra (cerca de 80 g) vira 1 mini."), CRESCE2, assar(40, true), ESFRIA,
    { t: "Cobertura: derreta o chocolate e misture as amêndoas e as castanhas. Com o panetone frio, cubra o topo com cerca de 100 g por panetone, deixando escorrer pelas laterais. Use o restante no mini e espalhe a sobra num papel-manteiga: depois de firme, vira barrinha crocante." },
    { t: "Deixe firmar em lugar fresco antes de embalar.", timer: 30 }],
  dica: TEMPERAGEM,
  aviso: "Contém glúten (trigo), leite, ovos e castanhas. " + TRIGO.slice(TRIGO.indexOf("Os tempos")) });

P({ id: "pn-ganache-laranja", sec: "Trufados e recheados", foto: "pave-panetone", emoji: "🎁",
  nome: "Panetone presenteável com ganache de laranja e chocolate",
  intro: "Panetone de laranja com chocolate, recheado de ganache perfumada com laranja e finalizado com casca cristalizada. Pensado para dar de presente.",
  tempo: 560, nivel: "Avançado", rende: "2 panetones recheados de 500 g + 2 minis", tags: ["Forno", "Recheado", "Presente"],
  ingredientes: ["Massa: 450 g de farinha de trigo", "145 g de leite", "25 g de suco de laranja", "100 g de ovos (2 ovos médios)", "75 g de açúcar", "80 g de manteiga em temperatura ambiente", "8 g de fermento biológico seco", "7 g de sal", "15 g de mel", "8 g de raspas de laranja", "170 g de gotas de chocolate forneáveis", "80 g de casca de laranja cristalizada picada",
    "Ganache: 300 g de chocolate meio amargo", "200 g de creme de leite UHT", "5 g de raspas de laranja",
    "Cobertura: 180 g de chocolate meio amargo", "40 g de casca de laranja cristalizada em tiras"],
  passos: [esponja("todo o leite", true), sova("o açúcar, os ovos, o mel, o suco e as raspas de laranja"), gordura("a manteiga"),
    { t: "Envolva a casca de laranja em 1 colher de sopa de farinha e incorpore com as gotas de chocolate, dobrando a massa, sem sovar mais." },
    CRESCE1, divide("Divida em 2 partes de 500 g. Com a sobra (cerca de 160 g), faça 2 minis de 80 g."), CRESCE2, assar(40, true), ESFRIA,
    ganache("os 300 g de chocolate", "o creme de leite", " com as raspas de laranja"),
    rechear("150 g de ganache (na próxima fornada, se a massa aguentar bem, dá para ir até 250 g)"),
    { t: "Cobertura: derreta o chocolate, cubra o topo de cada panetone (cerca de 80 g cada) e decore com as tiras de casca de laranja antes de firmar. A sobra cobre os minis." }],
  dica: "Para dar de presente, espere a cobertura firmar totalmente antes de colocar no saco, senão marca o plástico. " + TEMPERAGEM,
  aviso: TRIGO + PERECIVEL });

P({ id: "pn-doce-de-leite", sec: "Trufados e recheados", foto: "fest-doce-de-leite", emoji: "🥛",
  nome: "Panetone recheado de doce de leite com castanhas",
  intro: "Massa clássica sem frutas, recheada de doce de leite e com o topo coberto de doce de leite e castanhas-de-caju.",
  tempo: 500, nivel: "Médio", rende: "2 panetones recheados de 500 g", tags: ["Forno", "Recheado", "Castanhas"],
  ingredientes: ["Massa: 500 g de farinha de trigo", "175 g de leite", "100 g de ovos (2 ovos médios)", "85 g de açúcar", "90 g de manteiga em temperatura ambiente", "8 g de fermento biológico seco", "8 g de sal", "15 g de mel", "5 g de raspas de laranja", "4 g de aroma de panetone",
    "Recheio e cobertura: 400 g de doce de leite firme (de corte ou pastoso bem consistente)", "80 g de castanhas-de-caju torradas e picadas"],
  passos: [esponja("todo o leite", true), sova("o açúcar, os ovos, o mel, as raspas de laranja e o aroma"), gordura("a manteiga"),
    CRESCE1, divide("Divida em 2 partes iguais (cerca de 495 g cada) para formas de 500 g."), CRESCE2, assar(40, false), ESFRIA,
    rechear("150 g de doce de leite (se estiver muito firme, amoleça 20 segundos no micro-ondas e mexa)"),
    { t: "Cobertura: misture o restante do doce de leite (cerca de 100 g) com as castanhas e espalhe no topo dos dois panetones." }],
  dica: "Doce de leite mole demais escorre e encharca a massa. Prefira o mais firme que encontrar.",
  aviso: "Contém glúten (trigo), leite, ovos e castanhas. " + TRIGO.slice(TRIGO.indexOf("Os tempos")) });

P({ id: "pn-trufado-branco", sec: "Trufados e recheados", foto: "fest-coco", emoji: "🤍",
  nome: "Panetone trufado de chocolate branco",
  intro: "Massa clássica com gotas de chocolate branco, recheio de ganache branca e fios de chocolate branco por cima.",
  tempo: 560, nivel: "Avançado", rende: "2 panetones recheados de 500 g + 1 mini", tags: ["Forno", "Recheado", "Chocolate branco"],
  ingredientes: ["Massa: 500 g de farinha de trigo", "175 g de leite", "100 g de ovos (2 ovos médios)", "85 g de açúcar", "90 g de manteiga em temperatura ambiente", "8 g de fermento biológico seco", "8 g de sal", "15 g de mel", "5 g de raspas de laranja", "4 g de aroma de panetone", "150 g de gotas de chocolate branco forneáveis",
    "Ganache branca: 350 g de chocolate branco", "150 g de creme de leite UHT"],
  passos: [esponja("todo o leite", true), sova("o açúcar, os ovos, o mel, as raspas de laranja e o aroma"), gordura("a manteiga"),
    { t: "Incorpore as gotas de chocolate branco dobrando a massa, sem sovar mais." },
    CRESCE1, divide("Divida em 2 partes de 500 g. A sobra (cerca de 140 g) vira 1 mini."), CRESCE2, assar(40, true), ESFRIA,
    { t: "Ganache branca: pique o chocolate branco. Aqueça o creme de leite só até soltar vapor (chocolate branco queima fácil), despeje sobre o chocolate, espere 2 minutos e mexa até ficar liso. Deixe firmar até o ponto de bisnaga.", timer: 60 },
    rechear("150 g de ganache branca"),
    { t: "Finalize: com o restante da ganache (cerca de 200 g), faça fios sobre o topo dos panetones e do mini." }],
  dica: "A ganache branca é mais mole que a de chocolate ao leite. Se ficar líquida demais, leve 15 minutos à geladeira antes de rechear.",
  aviso: TRIGO + PERECIVEL });

/* ================= MINIS E PRESENTES ================= */
P({ id: "pn-minis", sec: "Minis e presentes", foto: "mini-panetone", emoji: "🎄",
  nome: "Mini panetones",
  intro: "Dez minis de frutas para lembrancinha, cesta de Natal ou para vender por unidade.",
  tempo: 400, nivel: "Médio", rende: "10 mini panetones de 100 g", tags: ["Forno", "Fermentação", "Individual"],
  ingredientes: ["420 g de farinha de trigo", "145 g de leite", "85 g de ovos (2 ovos pequenos)", "70 g de açúcar", "75 g de manteiga em temperatura ambiente", "7 g de fermento biológico seco", "7 g de sal", "12 g de mel", "4 g de raspas de laranja", "3 g de aroma de panetone", "90 g de frutas cristalizadas", "90 g de uvas-passas", "10 forminhas de papel para mini panetone de 100 g"],
  passos: [esponja("todo o leite", true), sova("o açúcar, os ovos, o mel, as raspas de laranja e o aroma"), gordura("a manteiga"),
    { t: "Hidrate as uvas-passas 10 minutos em água morna, escorra e seque bem. Envolva as frutas em 1 colher de sopa de farinha e incorpore dobrando a massa." },
    CRESCE1, divide("Divida em 10 partes de 100 g (use a balança: minis do mesmo peso assam por igual)."),
    { t: "Cubra e deixe crescer até a massa chegar perto da borda das forminhas.", timer: 75 },
    { t: "Asse em forno preaquecido a 170 °C por 18 a 22 minutos, até dourar e o palito sair seco.", timer: 20 }, ESFRIA_MINI],
  dica: "Coloque as forminhas numa assadeira antes de encher: depois de cheias, ficam moles para transportar.",
  aviso: TRIGO });

P({ id: "pn-mini-chocotone-recheado", sec: "Minis e presentes", foto: "kit-bombom", emoji: "🍫",
  nome: "Mini chocotone recheado",
  intro: "Minis de chocolate recheados com ganache e com o topo mergulhado no chocolate. Um presente individual pronto.",
  tempo: 480, nivel: "Avançado", rende: "10 mini chocotones recheados", tags: ["Forno", "Recheado", "Individual"],
  ingredientes: ["Massa: 420 g de farinha de trigo", "145 g de leite", "85 g de ovos (2 ovos pequenos)", "70 g de açúcar", "75 g de manteiga em temperatura ambiente", "7 g de fermento biológico seco", "7 g de sal", "12 g de mel", "4 g de raspas de laranja", "3 g de aroma de panetone", "160 g de gotas de chocolate forneáveis", "10 forminhas de papel para mini panetone de 100 g",
    "Recheio: 300 g de chocolate meio amargo", "200 g de creme de leite UHT"],
  passos: [esponja("todo o leite", true), sova("o açúcar, os ovos, o mel, as raspas de laranja e o aroma"), gordura("a manteiga"),
    { t: "Incorpore as gotas de chocolate dobrando a massa, sem sovar mais." },
    CRESCE1, divide("Divida em 10 partes de cerca de 100 g."),
    { t: "Cubra e deixe crescer até a massa chegar perto da borda das forminhas.", timer: 75 },
    { t: "Asse em forno preaquecido a 170 °C por 18 a 22 minutos, até o palito sair seco.", timer: 20 }, ESFRIA_MINI,
    ganache("o chocolate", "o creme de leite"),
    { t: "Faça 1 furo na base de cada mini e injete cerca de 30 g de ganache com o saco de confeitar. Pare se a massa começar a rachar." },
    { t: "Com o restante da ganache (cerca de 200 g), cubra o topo de cada mini e deixe firmar antes de embalar.", timer: 30 }],
  dica: "Comece com 30 g de recheio por mini. Mais que isso pode deixar o mini pesado e úmido demais; teste na sua primeira fornada.",
  aviso: TRIGO + PERECIVEL });

P({ id: "pn-mini-chocolate-laranja", sec: "Minis e presentes", foto: "kit-trufas", emoji: "🍊",
  nome: "Mini panetone de chocolate com cobertura branca e laranja",
  intro: "Minis de massa de cacau com gotas de chocolate, cobertos com chocolate branco e casca de laranja. Contraste bonito para presente.",
  tempo: 430, nivel: "Médio", rende: "11 mini panetones de 100 g", tags: ["Forno", "Chocolate", "Individual"],
  ingredientes: ["Massa: 420 g de farinha de trigo", "30 g de cacau em pó 100%", "180 g de leite", "100 g de ovos (2 ovos médios)", "90 g de açúcar", "80 g de manteiga em temperatura ambiente", "8 g de fermento biológico seco", "7 g de sal", "15 g de mel", "5 g de essência de baunilha", "180 g de gotas de chocolate forneáveis", "11 forminhas de papel para mini panetone de 100 g",
    "Cobertura: 250 g de chocolate branco", "30 g de casca de laranja cristalizada picada fininha"],
  passos: [esponja("todo o leite", true), sova("o cacau peneirado, o açúcar, os ovos, o mel e a baunilha"), gordura("a manteiga"),
    { t: "Incorpore as gotas de chocolate dobrando a massa, sem sovar mais." },
    CRESCE1, divide("Divida em 11 partes de cerca de 100 g."),
    { t: "Cubra e deixe crescer até a massa chegar perto da borda das forminhas.", timer: 80 },
    { t: "Asse em forno preaquecido a 170 °C por 18 a 22 minutos, até o palito sair seco.", timer: 20 }, ESFRIA_MINI,
    { t: "Cobertura: derreta o chocolate branco em fogo baixíssimo ou no micro-ondas de 20 em 20 segundos. Mergulhe o topo de cada mini (cerca de 25 g) e salpique a casca de laranja antes de firmar." }],
  dica: "Chocolate branco empelota se esquentar demais. Tire do calor quando ainda houver pedacinhos e mexa até derreterem.",
  aviso: TRIGO });

/* ================= VERSÕES ESPECIAIS ================= */
var SG_PASSOS = function (liquido, gord, frutas) {
  return [
    { t: "Misture o psyllium e a goma xantana com metade " + liquido + " morno e espere formar um gel.", timer: 5 },
    { t: "Na batedeira, bata os ovos, o restante " + liquido + " morno, o açúcar, o mel, " + gord + ", as raspas e o aroma por 2 minutos. Junte o gel e bata mais 1 minuto." },
    { t: "Acrescente a farinha de arroz, o polvilho, o amido e a farinha de sorgo misturados com o fermento, e por último o sal. Bata 5 minutos em velocidade média. A massa fica mole e pegajosa, mais parecida com um creme grosso: é assim mesmo, não acrescente farinha." },
    { t: frutas },
    { t: "Divida em 2 formas de 500 g e 1 forminha de 100 g, enchendo só até a metade. Alise o topo com uma colher molhada." },
    { t: "Cubra e deixe crescer em lugar morno até a massa chegar perto da borda. Massa sem glúten cresce só uma vez.", timer: 90 },
    { t: "Asse em forno preaquecido a 170 °C por 45 a 55 minutos (o mini, cerca de 25), até dourar e o palito sair seco. Depois de 20 minutos, cubra com papel-alumínio para não queimar por fora antes de assar por dentro.", timer: 50 },
    { t: "Deixe esfriar em pé, sobre uma grade. Massa sem glúten é frágil quando quente: não vire de cabeça para baixo.", timer: 120 }];
};
var SG_AVISO = "Para ser sem glúten de verdade, use ingredientes com “não contém glúten” no rótulo e utensílios bem limpos, sem resto de farinha de trigo. Esta receita é mais sensível que a de trigo: a primeira fornada serve para acertar o ponto no seu forno.";

P({ id: "pn-sem-gluten", sec: "Versões especiais", foto: "capa-festival", emoji: "🌾",
  nome: "Panetone sem glúten com frutas",
  intro: "Panetone de frutas feito com farinha de arroz, polvilho e sorgo. O psyllium e a goma xantana fazem o papel do glúten.",
  tempo: 290, nivel: "Médio", rende: "2 panetones de 500 g + 1 mini", tags: ["Forno", "Sem glúten"],
  ingredientes: ["160 g de farinha de arroz", "110 g de polvilho doce", "90 g de amido de milho", "60 g de farinha de sorgo", "12 g de psyllium em pó", "3 g de goma xantana", "235 g de leite integral", "110 g de ovos (2 ovos grandes)", "85 g de açúcar", "65 g de manteiga derretida e morna", "8 g de fermento biológico seco", "6 g de sal", "15 g de mel", "5 g de raspas de laranja", "4 g de aroma de panetone", "80 g de frutas cristalizadas", "80 g de uvas-passas"],
  passos: SG_PASSOS("do leite", "a manteiga derretida", "Envolva as frutas cristalizadas e as passas (hidratadas e bem secas) em 1 colher de sopa de farinha de arroz e misture à massa com espátula."),
  dica: "O psyllium muda de marca para marca. Se a massa ficar líquida demais, deixe descansar 5 minutos antes de dividir: ela engrossa.",
  aviso: "Sem glúten. Contém leite e ovos. " + SG_AVISO });

P({ id: "pn-chocotone-sem-lactose", sec: "Versões especiais", foto: "chocotone", emoji: "🥛",
  nome: "Chocotone sem lactose",
  intro: "Chocotone com bebida de soja, creme vegetal e chocolate sem leite. Para quem evita lactose e derivados do leite.",
  tempo: 450, nivel: "Médio", rende: "2 chocotones de 500 g + 1 mini", tags: ["Forno", "Fermentação", "Sem lactose"],
  ingredientes: ["450 g de farinha de trigo", "165 g de bebida de soja sem açúcar", "100 g de ovos (2 ovos médios)", "80 g de açúcar", "75 g de creme vegetal culinário sem derivados de leite, em temperatura ambiente", "15 g de óleo de girassol", "8 g de fermento biológico seco", "7 g de sal", "15 g de mel", "5 g de raspas de laranja", "4 g de aroma sem derivados de leite", "180 g de gotas de chocolate sem derivados de leite"],
  passos: [esponja("toda a bebida de soja", true), sova("o açúcar, os ovos, o mel, as raspas de laranja e o aroma"), gordura("o creme vegetal e o óleo"),
    { t: "Incorpore as gotas de chocolate dobrando a massa, sem sovar mais." },
    CRESCE1, divide("Divida em 2 partes de 500 g. A sobra (cerca de 100 g) vira 1 mini."), CRESCE2, assar(40, true), ESFRIA],
  dica: "Leia o rótulo do creme vegetal, do aroma e das gotas: muitos têm soro de leite. Procure “não contém leite”.",
  aviso: "Sem lactose e sem derivados de leite, se todos os rótulos confirmarem. Contém glúten (trigo), ovos e soja. Os tempos de crescimento mudam com a temperatura da cozinha: siga o ponto, não só o relógio." });

P({ id: "pn-sem-acucar-nozes", sec: "Versões especiais", foto: "fest-salgado", emoji: "🌰",
  nome: "Panetone de nozes e amêndoas sem adição de açúcar",
  intro: "Massa adoçada com eritritol, perfumada com laranja e canela e cheia de nozes e amêndoas. Sem açúcar e sem mel.",
  tempo: 480, nivel: "Médio", rende: "2 panetones de 500 g + 1 mini", tags: ["Forno", "Fermentação", "Sem açúcar adicionado"],
  ingredientes: ["450 g de farinha de trigo", "170 g de leite", "100 g de ovos (2 ovos médios)", "90 g de manteiga em temperatura ambiente", "110 g de eritritol (ou 85 g de xilitol)", "8 g de fermento biológico seco", "7 g de sal", "7 g de raspas de laranja", "4 g de aroma de panetone sem açúcar", "2 g de canela em pó", "90 g de nozes picadas", "60 g de amêndoas picadas"],
  passos: [esponja("todo o leite", false), sova("o eritritol, os ovos, as raspas de laranja, o aroma e a canela"), gordura("a manteiga"),
    { t: "Toste as nozes e as amêndoas 5 minutos numa frigideira seca, deixe esfriar e incorpore à massa dobrando, sem sovar mais." },
    { t: "Cubra e deixe crescer em lugar morno até dobrar de volume. Sem açúcar, a massa costuma crescer mais devagar: pode levar 2 horas e meia ou mais.", timer: 150 },
    divide("Divida em 2 partes de 500 g. A sobra (cerca de 100 g) vira 1 mini."),
    { t: "Cubra e deixe crescer até a massa chegar a 1 ou 2 cm da borda da forma.", timer: 150 }, assar(40, true), ESFRIA],
  dica: "Eritritol pode deixar uma leve sensação refrescante na boca. Se preferir, troque por xilitol (85 g).",
  aviso: "Sem adição de açúcar não quer dizer sem açúcares: a farinha, o leite e as castanhas têm açúcares naturais. Não é uma receita indicada especificamente para diabéticos; em caso de dieta, siga seu nutricionista ou médico. Contém glúten (trigo), leite, ovos e castanhas." });

P({ id: "pn-sem-gluten-sem-lactose", sec: "Versões especiais", foto: "fest-frutas-vermelhas", emoji: "🌱",
  nome: "Panetone sem glúten e sem lactose",
  intro: "A versão sem glúten com bebida de soja e óleo no lugar do leite e da manteiga. Com frutas cristalizadas e passas.",
  tempo: 290, nivel: "Médio", rende: "2 panetones de 500 g + 1 mini", tags: ["Forno", "Sem glúten", "Sem lactose"],
  ingredientes: ["155 g de farinha de arroz", "110 g de polvilho doce", "90 g de amido de milho", "65 g de farinha de sorgo", "12 g de psyllium em pó", "3 g de goma xantana", "245 g de bebida de soja sem açúcar", "110 g de ovos (2 ovos grandes)", "80 g de açúcar", "65 g de óleo de girassol", "8 g de fermento biológico seco", "6 g de sal", "6 g de raspas de laranja", "4 g de aroma sem derivados de leite", "85 g de frutas cristalizadas", "85 g de uvas-passas"],
  passos: SG_PASSOS("da bebida de soja", "o óleo", "Envolva as frutas cristalizadas e as passas (hidratadas e bem secas) em 1 colher de sopa de farinha de arroz e misture à massa com espátula."),
  dica: "Não tem mel nesta versão de propósito: assim ela serve também para quem evita mel.",
  aviso: "Sem glúten e sem lactose. Contém ovos e soja. " + SG_AVISO });

/* ================= RECEITAS REAPROVEITADAS (Ceia e Festival) ================= */
function clone(id, sec, premium) {
  var r = R.find(function (x) { return x.id === id; });
  if (!r) return;
  var c = JSON.parse(JSON.stringify(r));
  c.id = "pn-" + id; c.col = "panetones"; c.sec = sec; c.premium = premium; c.clone = id;
  R.push(c);
}
["panetone-classico", "chocotone", "panetone-liquidificador", "mini-panetone-airfryer", "panetone-trufado"]
  .forEach(function (id) { clone(id, "Sem açúcar, sem glúten e sem lactose", "panetones_ou_ceia"); });
R.filter(function (r) { return r.col === "festival"; }).map(function (r) { return r.id; })
  .forEach(function (id) { clone(id, "Sabores sem açúcar, sem glúten e sem lactose", "panetones_ou_festival"); });

/* ================= BÔNUS (3 do Essencial) ================= */
window.GUIAS.push(
{ id: "massa-perfeita", produto: "panetones", emoji: "📘", nome: "Guia da Massa Perfeita",
  sub: "Entenda cada ingrediente e cada etapa para acertar o panetone",
  itens: [
    { n: "Farinha", t: "É ela que forma o glúten, a rede elástica que segura o ar e deixa o panetone alto e fofo. Prefira farinha de trigo tipo 1 de boa marca; as próprias para pão (com mais proteína) dão ainda mais estrutura." },
    { n: "Fermento biológico seco", t: "Come os açúcares da massa e solta o gás que faz crescer. Água ou leite quente demais (acima de 45 °C) mata o fermento: use morno, na temperatura do dedo. Guarde o pacote aberto bem fechado na geladeira." },
    { n: "Açúcar e mel", t: "Dão sabor, cor à casca e alimentam o fermento. Em excesso deixam a massa lenta, por isso o panetone leva a esponja: o fermento começa a trabalhar antes de receber todo o açúcar e a gordura." },
    { n: "Manteiga", t: "Deixa o miolo macio e conserva o panetone por mais tempo. Entra depois do glúten formado e em temperatura ambiente (macia, não derretida), aos poucos. Se entrar cedo ou derretida, a massa fica oleosa e não cresce bem." },
    { n: "Ovos", t: "Dão cor amarela, sabor e ajudam na estrutura. Use em temperatura ambiente. Nas receitas, o peso é dos ovos sem casca: um ovo médio tem cerca de 50 g." },
    { n: "Sal", t: "Realça o sabor e firma o glúten. Entra depois da esponja e longe do contato direto com o fermento." },
    { n: "Sova e ponto de véu", t: "Sovar alinha o glúten. O ponto certo é o véu: estique um pedaço de massa entre os dedos; se formar uma película fina, quase transparente, sem rasgar, está pronto. Se rasgar, sove mais 2 minutos e teste de novo." },
    { n: "Fermentação", t: "O lugar ideal é morno, entre 25 e 28 °C, protegido de vento (forno desligado com a luz acesa funciona bem). A primeira fermentação termina quando a massa dobra de volume. Teste do dedo: aperte de leve com o dedo enfarinhado; se a marca voltar devagar, está no ponto. Se voltar rápido, espere mais." },
    { n: "Boleamento", t: "Dobre as bordas da massa para baixo, girando sobre a bancada, até formar uma bola lisa e esticada por cima. Uma superfície bem esticada faz o panetone crescer para cima, com o topo redondo." },
    { n: "Segunda fermentação", t: "Já na forma, a massa precisa chegar a 1 ou 2 cm da borda. Ir ao forno antes deixa o panetone baixo e denso; passar muito do ponto faz murchar no forno." },
    { n: "Forno", t: "Sempre preaquecido, com a grade no meio. Cada forno tem seu jeito: use o tempo da receita como guia e confirme com o palito (sai seco) ou com termômetro culinário (centro perto de 92 °C). Se a casca escurecer antes, cubra com papel-alumínio." },
    { n: "Esfriar", t: "Panetone de trigo esfria de cabeça para baixo, pendurado em espetos atravessados na base. Assim o miolo, ainda frágil, não afunda. Só embale depois de totalmente frio: o vapor preso vira umidade e encurta a vida do panetone." },
    { n: "Pese tudo", t: "Panetone é receita de precisão. Uma balança de cozinha simples evita a maior parte dos erros, principalmente no fermento, no sal e na divisão da massa." },
    { n: "Anote suas fornadas", t: "A cada fornada, anote o tempo de cada fermentação, a temperatura da cozinha, o tempo de forno, o peso da massa crua e o peso do panetone assado. Em duas ou três fornadas você descobre o ritmo exato da sua cozinha." },
    { n: "Checklist antes de começar", t: "Ingredientes pesados e em temperatura ambiente · manteiga macia · leite morno · formas de papel separadas · espetos para esfriar · forno livre por 1 hora · lugar morno para a massa crescer · tempo livre: o panetone leva o dia, mas quase todo ele é espera." }
  ] },
{ id: "sos-panetone", produto: "panetones", emoji: "🆘", nome: "SOS Panetone: 15 erros e como corrigir",
  sub: "O que deu errado e o que fazer na próxima fornada",
  itens: [
    { n: "1. A massa não cresceu", t: "Causas: fermento vencido ou morto por líquido quente, lugar frio ou pouco tempo. Correção: teste o fermento na esponja (precisa espumar em 20 minutos); use líquido morno; leve a massa para um lugar mais quente e espere o ponto, não o relógio." },
    { n: "2. Cresceu e murchou no forno", t: "Causa: fermentou demais antes de assar. Correção: na segunda fermentação, leve ao forno quando a massa estiver a 1 ou 2 cm da borda, não acima dela. Em dias quentes, isso acontece mais rápido." },
    { n: "3. Miolo pesado e denso", t: "Causas: pouca sova, pouca fermentação ou farinha a mais. Correção: sove até o ponto de véu, espere a massa dobrar e pese a farinha, sem acrescentar além da receita." },
    { n: "4. Casca queimada e miolo cru", t: "Causa: forno quente demais ou grade alta. Correção: asse a 170 °C com a grade no meio, cubra com papel-alumínio quando dourar e confirme com o palito ou termômetro." },
    { n: "5. Panetone seco e esfarelando", t: "Causas: tempo de forno a mais, farinha a mais ou frutas secas demais. Correção: tire do forno quando o palito sair seco (sem esperar mais), pese a farinha e hidrate as uvas-passas antes de usar." },
    { n: "6. Massa grudenta, impossível de sovar", t: "Massa de panetone é mesmo mais mole que a de pão. Correção: sove na batedeira com gancho ou use a técnica de bater a massa na bancada; untar as mãos com um pouco de manteiga ajuda. Evite acrescentar farinha." },
    { n: "7. A manteiga não incorpora, a massa ficou oleosa", t: "Causas: manteiga derretida ou colocada de uma vez. Correção: use manteiga macia, em pedacinhos, e só coloque mais quando a anterior sumir. Se a massa esquentar muito na batedeira, descanse 10 minutos na geladeira e continue." },
    { n: "8. As frutas afundaram", t: "Causas: frutas molhadas ou massa mole demais. Correção: seque bem as frutas, envolva em farinha e incorpore só no fim." },
    { n: "9. Rachou de lado ou estourou torto", t: "Causas: boleamento sem tensão ou massa que foi ao forno antes da hora. Correção: boleie até a superfície ficar lisa e esticada e respeite o ponto da segunda fermentação." },
    { n: "10. Cheiro e gosto forte de fermento", t: "Causas: fermento a mais ou fermentação longa demais em lugar quente. Correção: pese o fermento e não deixe a massa passar muito do ponto." },
    { n: "11. Murchou depois de esfriar", t: "Causa: esfriou em pé, ainda frágil, ou saiu do forno antes de assar por completo. Correção: esfrie de cabeça para baixo nos espetos (massas de trigo) e confirme o cozimento no centro." },
    { n: "12. O recheio vazou ou o panetone afundou", t: "Causas: recheio mole demais ou em excesso. Correção: espere a ganache firmar até o ponto de bisnaga e comece com a quantidade menor da receita. Aumente aos poucos nas próximas fornadas." },
    { n: "13. Cobertura de chocolate esbranquiçada", t: "Causa: chocolate nobre usado sem temperagem, ou guardado em lugar úmido ou quente. Correção: use chocolate fracionado (cobertura) ou faça a temperagem, e guarde em lugar fresco e seco." },
    { n: "14. Ressecou em poucos dias", t: "Causas: embalado ainda morno, embalagem mal fechada ou tempo de forno a mais. Correção: embale só depois de frio, em saco próprio para alimentos bem fechado." },
    { n: "15. Sem glúten: miolo úmido e grudento", t: "Causas: pouco tempo de forno ou cortado ainda quente. Correção: asse até o palito sair seco no centro, cobrindo com alumínio para não queimar, e espere esfriar totalmente antes de cortar." },
    { n: "Registre para acertar", t: "Anote o peso da massa crua e o peso do panetone assado em cada fornada. A diferença mostra quanto ele perde no seu forno e ajuda a acertar o ponto e o tamanho das formas." }
  ] },
{ id: "embalagens-panetone", produto: "panetones", emoji: "🎀", nome: "Embalagens e presentes de Natal",
  sub: "10 ideias de apresentação, cuidados e mensagens",
  itens: [
    { n: "Antes de tudo: o panetone frio", t: "Embale só depois de totalmente frio. O vapor preso no saco vira umidade e estraga a casca e o recheio." },
    { n: "Embalagem que encosta no alimento", t: "Use saco próprio para alimentos (de polipropileno ou celofane para alimentos), não saco de lixo, de presente ou de loja. A embalagem bonita vai por fora." },
    { n: "1. Saco transparente e laço", t: "O clássico: saco de celofane para alimentos, fechado com fita de cetim e uma etiqueta. Barato e mostra o panetone." },
    { n: "2. Caixa kraft com visor", t: "Caixa de papel kraft com janela transparente. Fica com cara de loja e protege no transporte." },
    { n: "3. Lata reaproveitada", t: "Uma lata de biscoito bem lavada e seca, forrada com papel-manteiga. O presente vira dois." },
    { n: "4. Pano de prato amarrado", t: "Embrulhe o panetone (já no saco) num pano de prato natalino e amarre as pontas. Quem recebe ganha o pano." },
    { n: "5. Mini com tag", t: "Minis no saquinho com uma tag de papel e o nome da pessoa. Ideal para lembrancinha de equipe, escola ou família grande." },
    { n: "6. Kit café da tarde", t: "Panetone, um pacote de café e uma caneca numa cesta ou caixa." },
    { n: "7. Kit Natal na mesa", t: "Panetone, um pote de geleia e um guardanapo de tecido. Bonito e útil." },
    { n: "8. Caixa com 3 minis", t: "Três minis de sabores diferentes numa caixa. Funciona como degustação e é ótimo para vender." },
    { n: "9. Fatiado para a sobremesa", t: "Para quem vai levar para a ceia: fatias em uma bandeja descartável com tampa e fita." },
    { n: "10. Prato da família", t: "Panetone num prato ou tábua que fica de presente, envolto em celofane para alimentos e laço." },
    { n: "Etiqueta", t: "Escreva o nome do panetone, a data em que foi feito e os ingredientes que podem causar alergia (trigo, leite, ovos, castanhas, soja). Se for recheado com ganache, avise: “guardar na geladeira”." },
    { n: "Quanto custa embalar", t: "Some o preço de cada item (saco, fita, etiqueta, caixa) dividido pela quantidade do pacote. Exemplo: pacote de 50 sacos a R$ 25 = R$ 0,50 por saco. Anote esse custo para incluir no preço se for vender." },
    { n: "Mensagens para o cartão", t: "“Feito em casa, com carinho, para adoçar o seu Natal.” · “Um pedacinho da nossa cozinha para a sua mesa.” · “Que o seu Natal seja tão bom quanto panetone quentinho.” · “Obrigado por estar com a gente este ano. Feliz Natal!”" },
    { n: "Checklist de entrega", t: "Panetone frio · saco para alimentos bem fechado · etiqueta com data e alergênicos · recheados na geladeira até a entrega · transporte na horizontal, sem peso por cima." }
  ] }
);
})();
