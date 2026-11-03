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
  preco: "R$ 19,90", precoPremium: "R$ 29,90", precoUpgrade: "R$ 10",
  /* links dos checkouts da Cakto (preencher no lançamento) */
  checkout: { essencial: "https://pay.cakto.com.br/8ns7dei", premium: "https://pay.cakto.com.br/39npw6v", upgrade: "https://pay.cakto.com.br/38dqtaz" },
  pagina: ""                          /* página de vendas (preencher no lançamento) */
};

window.COLECOES.push({
  id: "panetones", nome: "Panetones que Resolvem", emoji: "🍞", cor: "#9A5B13",
  capa: window.ceiaImg("img/ceia/capa-festival.webp"), produto: "panetones", rascunho: false,
  desc: "30 panetones para fazer, presentear e vender: clássicos, trufados, minis e versões sem glúten, sem lactose ou sem açúcar adicionado.",
  foot: "Cada receita mostra se leva glúten, leite, ovos ou açúcar. Receitas elaboradas pela Cozinha que Resolve; o resultado pode variar com o forno, a temperatura da cozinha e as marcas usadas."
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

P({ id: "pn-chocotone-gotas", sec: "Clássicos", foto: "chocotone", emoji: "🍫",
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

/* helpers usados pelo Premium (panetones2.js) */
window.PN_H = { esponja: esponja, sova: sova, gordura: gordura, CRESCE1: CRESCE1, divide: divide, CRESCE2: CRESCE2, assar: assar,
  ESFRIA: ESFRIA, ESFRIA_MINI: ESFRIA_MINI, ganache: ganache, rechear: rechear, TEMPERAGEM: TEMPERAGEM, TRIGO: TRIGO, PERECIVEL: PERECIVEL };

/* ================= BÔNUS (3 do Essencial) ================= */
window.GUIAS.push(
{ id: "massa-perfeita", produto: "panetones", emoji: "📘", nome: "Guia da Massa Perfeita",
  sub: "Cada ingrediente e cada etapa, com o ponto certo para observar",
  itens: [
    { n: "Como usar este guia", t: "Leia uma vez antes da primeira fornada. Depois, use as etapas 6 a 13 como roteiro enquanto faz a receita: cada uma tem o que observar para saber se pode seguir." },
    { n: "1. Farinha", t: "Forma o glúten, a rede elástica que segura o gás e deixa o panetone alto e fofo. Use farinha de trigo tipo 1 de boa marca; as próprias para pão, com mais proteína (11 a 13 g por 100 g no rótulo), dão ainda mais estrutura.\nPese sempre. Uma xícara de farinha pode variar 30 g de uma pessoa para outra, e é aí que muitos panetones ficam pesados." },
    { n: "2. Líquidos", t: "Leite, bebida vegetal, suco e ovos hidratam a farinha. Pouco líquido deixa a massa dura e o panetone seco; líquido demais deixa a massa impossível de modelar.\nUse o líquido morno, perto de 35 °C (morno ao toque do pulso). Acima de 45 °C o fermento morre. Farinhas diferentes absorvem diferente: se a massa ficar muito dura na sova, junte 1 colher de sopa de leite de cada vez." },
    { n: "3. Açúcar e mel", t: "Dão sabor, cor à casca e alimentam o fermento. Em quantidade alta, deixam o fermento lento. Por isso o panetone começa pela esponja: o fermento ganha força antes de receber todo o açúcar e a gordura.\nNas versões com eritritol ou xilitol, o adoçante não alimenta o fermento: a massa cresce mais devagar e isso é normal." },
    { n: "4. Gorduras", t: "Manteiga ou creme vegetal deixam o miolo macio e conservam o panetone por mais tempo. Entram depois que o glúten já se formou, em temperatura ambiente (macia, não derretida) e aos poucos. Gordura cedo demais ou derretida deixa a massa oleosa e o panetone baixo." },
    { n: "5. Ovos, fermento e sal", t: "Ovos dão cor, sabor e estrutura; use em temperatura ambiente e lembre que as receitas pesam o ovo sem casca (um ovo médio tem cerca de 50 g).\nFermento biológico seco: guarde o pacote aberto fechado na geladeira e confira a validade.\nSal: realça o sabor e firma o glúten. Entra depois da esponja, para não atrapalhar o fermento no começo." },
    { n: "6. Esponja", t: "Parte da farinha, o líquido morno e o fermento descansam juntos por cerca de 20 minutos.\nPonto: espuma na superfície e volume maior. Se nada acontecer em 20 minutos, o fermento está fraco ou o líquido estava quente demais: recomece com fermento novo." },
    { n: "7. Desenvolvimento da massa (sova)", t: "Sovar organiza o glúten. Na batedeira com gancho, velocidade média; à mão, estique e dobre a massa sobre a bancada.\nPonto de véu: estique um pedaço fino entre os dedos. Se formar uma película quase transparente, sem rasgar, está pronto. Se rasgar, sove mais 2 minutos e teste de novo." },
    { n: "8. Incorporação de frutas e chocolate", t: "Frutas, castanhas e gotas entram só no fim, quando a massa já está pronta, dobrando a massa sobre elas. Sovar depois disso rasga o glúten.\nUvas-passas: hidrate 10 minutos em água morna e seque bem. Frutas molhadas afundam e deixam o miolo úmido. Envolver tudo em 1 colher de farinha ajuda a distribuir. Use gotas de chocolate forneáveis: chocolate comum derrete e mancha a massa." },
    { n: "9. Fermentação inicial", t: "Lugar morno, entre 25 e 28 °C e sem vento (forno desligado com a luz acesa funciona bem).\nPonto: a massa dobra de volume. Teste do dedo: aperte de leve com o dedo enfarinhado. Se a marca voltar devagar, está no ponto; se voltar rápido, espere mais; se não voltar e a massa murchar, passou do ponto." },
    { n: "10. Divisão e modelagem", t: "Pese a massa e divida no peso indicado. Para bolear, dobre as bordas para baixo, girando a massa sobre a bancada, até a superfície ficar lisa e esticada. Essa tensão faz o panetone crescer para cima, com o topo redondo." },
    { n: "11. Fermentação final", t: "Já na forma de papel. Ponto: a massa chega a 1 ou 2 cm da borda. Antes disso, o panetone fica baixo e denso; muito depois, murcha no forno. Em dias quentes, fique de olho: pode ficar pronta bem antes do tempo da receita." },
    { n: "12. Assamento", t: "Forno sempre preaquecido, grade no meio. Use o tempo da receita como guia e confirme: o palito sai seco e, se tiver termômetro culinário, o centro fica perto de 92 °C (referência, não regra). Se a casca escurecer antes do miolo assar, cubra com papel-alumínio." },
    { n: "13. Resfriamento", t: "Panetone de trigo esfria de cabeça para baixo: atravesse a base com 2 espetos e apoie entre duas panelas. O miolo quente é frágil e afundaria em pé.\nSem glúten esfria em pé, sobre uma grade. Só recheie, corte ou embale depois de totalmente frio." },
    { n: "14. Problemas frequentes", t: "Não cresceu: fermento fraco ou lugar frio. Murchou no forno: fermentou demais. Miolo pesado: pouca sova ou farinha a mais. Casca queimada e miolo cru: forno quente demais. Para cada um, veja o diagnóstico completo no bônus SOS Panetone." },
    { n: "15. Checklist de preparo", t: "☐ Ingredientes pesados e em temperatura ambiente\n☐ Manteiga macia e leite morno\n☐ Frutas hidratadas e secas, gotas forneáveis\n☐ Formas de papel e espetos separados\n☐ Lugar morno para a massa crescer\n☐ Forno livre por 1 hora\n☐ Balança e, se tiver, termômetro\n☐ Caderno para anotar tempos e pesos" }
  ] },
{ id: "sos-panetone", produto: "panetones", emoji: "🆘", nome: "SOS Panetone: 15 erros e como corrigir",
  sub: "Sintoma, causa, como investigar, como corrigir e como evitar",
  itens: [
    { n: "Como usar", t: "Ache o sintoma do seu panetone, confira as causas na ordem (da mais comum para a menos comum) e anote o que mudou na próxima fornada. As temperaturas são referências de orientação, não regras: cada forno e cada cozinha são diferentes." },
    { n: "1. A massa não cresceu", t: "Causas: fermento vencido ou morto por líquido quente; lugar frio; pouco tempo.\nComo investigar: a esponja espumou? O líquido estava acima de 45 °C? A cozinha estava abaixo de 22 °C?\nCorreção: leve a massa para um lugar mais morno e espere. Se em 3 horas nada mudar, o fermento morreu.\nPrevenção: teste o fermento na esponja e use líquido morno, não quente." },
    { n: "2. Cresceu e murchou no forno", t: "Causa: fermentação final longa demais; a estrutura esticou além do limite.\nComo investigar: a massa passou da borda da forma antes de assar?\nCorreção: na próxima, leve ao forno com a massa 1 a 2 cm abaixo da borda.\nPrevenção: em dias quentes, olhe a massa a cada 20 minutos na segunda fermentação." },
    { n: "3. Miolo pesado e denso", t: "Causas: pouca sova, pouca fermentação ou farinha a mais.\nComo investigar: a massa passou no teste do véu? Dobrou de volume na primeira fermentação? A farinha foi pesada?\nCorreção: sove até o véu e respeite o ponto de cada fermentação.\nPrevenção: pese a farinha e não acrescente além da receita." },
    { n: "4. Casca queimada e miolo cru", t: "Causas: forno quente demais, grade alta ou forno que esquenta mais que o marcado.\nComo investigar: quanto tempo levou para dourar? Um termômetro de forno ajuda a saber a temperatura real.\nCorreção: cubra com papel-alumínio quando dourar e continue assando até o palito sair seco.\nPrevenção: 170 °C, grade no meio, alumínio pronto ao lado do forno." },
    { n: "5. Seco e esfarelando", t: "Causas: tempo de forno a mais, farinha a mais, frutas secas que puxaram a umidade.\nComo investigar: assou além do palito seco? As passas foram hidratadas?\nCorreção: tire do forno assim que o palito sair seco.\nPrevenção: hidrate as passas e pese a farinha. Embale só depois de frio e bem fechado." },
    { n: "6. Massa grudenta, impossível de sovar", t: "Causa: massa de panetone é mesmo mais mole que a de pão; o glúten ainda não se formou.\nComo investigar: já sovou pelo menos 10 minutos?\nCorreção: continue sovando, de preferência na batedeira. Unte as mãos com um pouco de manteiga em vez de colocar farinha.\nPrevenção: não junte farinha no começo da sova: a massa fica lisa com o tempo." },
    { n: "7. Manteiga não incorpora, massa oleosa", t: "Causas: manteiga derretida, colocada de uma vez ou massa quente demais.\nComo investigar: a manteiga estava macia ou mole e brilhante? A massa estava quente ao toque?\nCorreção: leve a massa 10 minutos à geladeira e continue sovando.\nPrevenção: manteiga macia, em pedaços, uma parte de cada vez." },
    { n: "8. As frutas afundaram ou ficaram todas juntas", t: "Causas: frutas molhadas, massa mole demais ou frutas misturadas cedo e rasgando a massa.\nComo investigar: as frutas estavam secas? Foram envolvidas em farinha?\nCorreção: seque bem, envolva em farinha e incorpore no fim, dobrando.\nPrevenção: distribua as frutas em 3 partes, dobrando a massa entre cada uma." },
    { n: "9. Rachou de lado ou cresceu torto", t: "Causas: boleamento sem tensão, massa que foi ao forno cedo ou forno com calor de um lado só.\nComo investigar: a bola estava lisa por cima? A rachadura ficou sempre do mesmo lado do forno?\nCorreção: boleie até a superfície ficar esticada; gire a assadeira na metade do tempo se o forno for irregular.\nPrevenção: respeite o ponto da segunda fermentação." },
    { n: "10. Cheiro e gosto forte de fermento", t: "Causas: fermento a mais ou fermentação longa em lugar quente.\nComo investigar: o fermento foi pesado? A massa ficou muito acima do ponto?\nCorreção: na próxima, pese o fermento e encurte a fermentação.\nPrevenção: siga o ponto da massa, não só o relógio." },
    { n: "11. Murchou depois de esfriar", t: "Causas: esfriou em pé ainda quente ou saiu do forno sem assar por completo.\nComo investigar: foi pendurado de cabeça para baixo? O palito saiu seco no centro?\nCorreção: espete e vire assim que sair do forno.\nPrevenção: confirme o cozimento no centro antes de tirar do forno." },
    { n: "12. Miolo cru no centro", t: "Causas: forma maior que a receita, massa a mais na forma ou forno frio.\nComo investigar: quanto de massa foi em cada forma? O forno estava preaquecido?\nCorreção: asse por mais tempo coberto com alumínio.\nPrevenção: use o peso indicado para cada forma e preaqueça o forno por 15 minutos." },
    { n: "13. O recheio vazou ou o panetone afundou", t: "Causas: recheio mole demais ou em excesso; panetone recheado ainda morno.\nComo investigar: a ganache estava em ponto de bisnaga? Quanto foi injetado?\nCorreção: espere a ganache firmar e recheie só o panetone frio.\nPrevenção: comece com a quantidade menor da receita e aumente aos poucos." },
    { n: "14. Cobertura de chocolate esbranquiçada", t: "Causas: chocolate nobre sem temperagem ou guardado em lugar quente e úmido.\nComo investigar: o chocolate era fracionado ou nobre? Ficou perto do fogão ou no sol?\nCorreção: derreta de novo e aplique seguindo a temperagem, ou use chocolate fracionado.\nPrevenção: guarde em lugar fresco e seco." },
    { n: "15. Sem glúten: miolo úmido e grudento", t: "Causas: pouco tempo de forno ou cortado ainda quente.\nComo investigar: o palito saiu seco no centro? Esperou esfriar?\nCorreção: asse mais, coberto com alumínio, e espere esfriar por completo.\nPrevenção: deixe a primeira fornada servir de teste do tempo no seu forno." },
    { n: "Registro de testes", t: "Para cada fornada anote: data, receita, temperatura da cozinha, tempo da esponja, da 1ª e da 2ª fermentação, tempo de forno, peso da massa crua, peso depois de assado e o que achou do resultado." },
    { n: "Cálculo da perda de peso", t: "Perda (%) = (peso cru − peso assado) ÷ peso cru × 100.\nExemplo: 500 g de massa crua que saem com 440 g perderam 60 g, ou 12%. Compare entre fornadas: se a perda sobe muito, o panetone está assando demais e tende a ficar seco." },
    { n: "Checklist de diagnóstico", t: "☐ O fermento estava bom?\n☐ O líquido estava morno, não quente?\n☐ A massa passou no teste do véu?\n☐ Dobrou de volume na 1ª fermentação?\n☐ Foi ao forno 1 a 2 cm abaixo da borda?\n☐ O forno estava preaquecido a 170 °C?\n☐ O palito saiu seco no centro?\n☐ Esfriou de cabeça para baixo (trigo)?" }
  ] },
{ id: "embalagens-panetone", produto: "panetones", emoji: "🎀", nome: "Embalagens e presentes de Natal",
  sub: "10 ideias de apresentação, cuidados, calculadora de custo e mensagens",
  calc: "embalagem",
  itens: [
    { n: "Antes de tudo: o panetone frio", t: "Embale só depois de totalmente frio. O vapor preso vira umidade e estraga a casca e o recheio." },
    { n: "Embalagem primária (a que encosta no alimento)", t: "Use saco próprio para alimentos (polipropileno ou celofane próprio para alimentos). Saco de presente, de loja ou de lixo não serve para contato direto. A embalagem bonita vai por fora." },
    { n: "Materiais básicos", t: "Saco para alimentos do tamanho do panetone · fita de cetim ou barbante · etiqueta ou tag · caixa ou lata (opcional) · papel de seda ou palha decorativa · fita adesiva · tesoura." },
    { n: "1. Saco transparente e laço", t: "O clássico: saco de celofane para alimentos, fita de cetim e etiqueta. Barato e mostra o panetone." },
    { n: "2. Caixa kraft com visor", t: "Caixa de papel kraft com janela transparente. Com cara de loja e protege no transporte." },
    { n: "3. Lata reaproveitada", t: "Lata de biscoito lavada, bem seca e forrada com papel-manteiga. O panetone vai dentro do saco de alimento. O presente vira dois." },
    { n: "4. Pano de prato amarrado", t: "O panetone, já no saco, embrulhado num pano de prato natalino com as pontas amarradas. Quem recebe ganha o pano." },
    { n: "5. Mini com tag", t: "Minis no saquinho com uma tag de papel e o nome da pessoa. Ideal para equipe, escola ou família grande." },
    { n: "6. Kit café da tarde", t: "Panetone, um pacote de café e uma caneca numa caixa ou cesta." },
    { n: "7. Kit Natal na mesa", t: "Panetone, um pote de geleia e um guardanapo de tecido." },
    { n: "8. Caixa com 3 minis", t: "Três minis de sabores diferentes numa caixa: degustação para presentear ou vender." },
    { n: "9. Fatiado para a sobremesa", t: "Para levar à ceia: fatias numa bandeja descartável com tampa, fechada com fita." },
    { n: "10. Prato que fica de presente", t: "O panetone sobre um prato ou tábua, tudo envolto em celofane para alimentos e laço." },
    { n: "Proteção e transporte", t: "Leve na horizontal, sem peso por cima. Caixa com o tamanho certo evita que o panetone bata nas laterais. Recheados com ganache vão da geladeira para a entrega, sem ficar no carro quente." },
    { n: "Etiqueta e alergênicos", t: "Escreva o nome do panetone, a data em que foi feito e os ingredientes que podem causar alergia: trigo (glúten), leite, ovos, castanhas, soja. Se for recheado com ganache, escreva: “manter na geladeira”. Se for vender, siga as regras de rotulagem de alimentos." },
    { n: "Mensagens para o cartão", t: "“Feito em casa, com carinho, para adoçar o seu Natal.”\n“Um pedacinho da nossa cozinha para a sua mesa.”\n“Que o seu Natal seja tão bom quanto panetone quentinho.”\n“Obrigado por estar com a gente este ano. Feliz Natal!”\n“Para você, que faz parte do nosso ano. Boas festas!”" },
    { n: "Checklist de montagem", t: "☐ Panetone totalmente frio\n☐ Saco para alimentos bem fechado\n☐ Etiqueta com nome, data e alergênicos\n☐ Embalagem externa e laço\n☐ Cartão com mensagem\n☐ Recheados na geladeira até a entrega\n☐ Transporte na horizontal" }
  ] }
);
})();
