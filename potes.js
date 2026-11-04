/* ================================================================
   SALADAS NO POTE QUE RESOLVEM — plano Essencial (50 saladas + 5 bônus)
   Coleção própria Cozinha que Resolve, entregue no app.
   Carregar DEPOIS de bolos-fotos.js.
   premium:
     "potes"          -> Essencial
     "potes_premium"  -> Premium (potes2.js e potes3.js)
   rascunho:true -> só aparece para quem tem o código (revisão).
   Cada salada é 1 pote de 750 ml (1 refeição). Ingredientes, camadas,
   passos e validade são montados a partir da tabela de componentes abaixo,
   para que todas sigam a mesma regra de ordem e de conservação.
   Regras: sem promessa de saúde, emagrecimento ou "detox"; não dizer
   "testadas"; validade conservadora (máx. 5 dias, 3 com proteína animal).
   ================================================================ */
(function () {
var R = window.RECEITAS;

window.POTES = {
  preco: "R$ 19,90", precoPremium: "R$ 29,90", precoUpgrade: "R$ 10",
  checkout: { essencial: "", premium: "", upgrade: "" },
  pagina: "https://app.cozinhaqueresolve.com/saladasnopote/"
};

/* recompensa da 3ª semana do desafio: preço especial nas outras coleções.
   Links = ofertas "recompensa" criadas na Cakto (Essencial R$ 9,90 / Premium R$ 19,90). */
window.RECOMPENSAS = [
  { id: "bolos", nome: "Bolos Fitness que Resolvem", essencial: "", premium: "" },
  { id: "panetones", nome: "Panetones que Resolvem", essencial: "", premium: "" }
];

window.COLECOES.push({
  id: "potes", nome: "Saladas no Pote que Resolvem", emoji: "🫙", cor: "#2E7A3C",
  capa: "", produto: "potes", rascunho: true,
  desc: "50 saladas no pote para montar no domingo e comer a semana toda, com molho à parte, ordem das camadas e quantos dias cada uma dura.",
  foot: "Guarde os potes bem fechados na geladeira, a 5 °C ou menos. A validade de cada salada já considera o ingrediente que estraga primeiro. Receitas elaboradas pela Cozinha que Resolve; confira sempre o rótulo dos ingredientes."
});

window.SECOES.potes = ["Clássicas", "Com frango", "Com atum, ovo e peixe", "Veganas e de grãos",
  "Sem fogão: prontas em 15 minutos", "Com massa e arroz", "Agridoces com fruta",
  "Bônus · Molhos que Resolvem", "Bônus · Crocantes caseiros"];

/* ------------------------------------------------------------------
   COMPONENTES: [texto do ingrediente, camada, dias, preparo, marcas, nome curto]
   camadas (do fundo ao topo): 1 firmes · 2 grãos · 3 proteína · 4 macios · 5 folhas · 6 crocantes
   marcas: a=animal l=lactose g=glúten o=ovo p=peixe/frutos do mar c=castanhas m=amendoim s=gergelim j=soja
   ------------------------------------------------------------------ */
var C = {
  /* 1 · firmes (aguentam umidade, vão no fundo) */
  pepino: ["1/2 pepino em cubos (80 g)", 1, 5, "", "", "pepino"],
  tomatinho: ["8 tomates-cereja inteiros (100 g)", 1, 5, "", "", "tomate-cereja inteiro"],
  tomatinhoM: ["8 tomates-cereja cortados ao meio (100 g)", 1, 3, "", "", "tomate-cereja"],
  cenoura: ["1/2 cenoura ralada grossa (60 g)", 1, 5, "", "", "cenoura"],
  cenouraP: ["1/2 cenoura em palitos finos (60 g)", 1, 5, "", "", "cenoura"],
  pimentao: ["1/4 de pimentão vermelho em tiras (40 g)", 1, 5, "", "", "pimentão"],
  pimentaoA: ["1/4 de pimentão amarelo em cubos (40 g)", 1, 5, "", "", "pimentão amarelo"],
  cebola: ["1/4 de cebola roxa em fatias finas (25 g)", 1, 5, "", "", "cebola roxa"],
  beterraba: ["1/2 beterraba crua ralada (60 g)", 1, 5, "", "", "beterraba"],
  beterrabaC: ["1/2 beterraba cozida em cubos (70 g)", 1, 4, "beterraba", "", "beterraba cozida"],
  palmito: ["2 toletes de palmito em rodelas (60 g)", 1, 4, "", "", "palmito"],
  milho: ["3 colheres de sopa de milho cozido ou em conserva escorrido (50 g)", 1, 4, "", "", "milho"],
  ervilha: ["3 colheres de sopa de ervilha (40 g)", 1, 4, "", "", "ervilha"],
  rabanete: ["3 rabanetes em rodelas finas (40 g)", 1, 5, "", "", "rabanete"],
  brocolis: ["1 xícara de floretes de brócolis (70 g)", 1, 4, "brocolis", "", "brócolis"],
  vagem: ["1 punhado de vagem em pedaços (50 g)", 1, 4, "vagem", "", "vagem"],
  repolho: ["1 xícara de repolho roxo fatiado fino (60 g)", 1, 5, "", "", "repolho roxo"],
  repolhoB: ["1 xícara de repolho branco fatiado fino (60 g)", 1, 5, "", "", "repolho"],
  abobrinha: ["1/2 abobrinha em fitas ou cubos (70 g)", 1, 4, "", "", "abobrinha"],
  abobora: ["1 xícara de abóbora-cabotiá em cubos assada (100 g)", 1, 4, "abobora", "", "abóbora assada"],
  batatadoce: ["1 batata-doce pequena em cubos assada (100 g)", 1, 4, "batatadoce", "", "batata-doce assada"],
  batata: ["1 batata média em cubos cozida (110 g)", 1, 4, "batata", "", "batata"],
  chuchu: ["1/2 chuchu em cubos cozido (80 g)", 1, 4, "chuchu", "", "chuchu"],
  couveflor: ["1 xícara de couve-flor em floretes pequenos (70 g)", 1, 4, "couveflor", "", "couve-flor"],
  aspargo: ["5 aspargos em pedaços (60 g)", 1, 4, "aspargo", "", "aspargos"],
  berinjela: ["1/2 berinjela em cubos assada (80 g)", 1, 4, "berinjela", "", "berinjela assada"],
  cebolaC: ["2 colheres de sopa de cebolinha picada", 4, 4, "", "", "cebolinha"],
  salsao: ["1 talo de salsão em fatias (40 g)", 1, 5, "", "", "salsão"],
  edamame: ["1/2 xícara de edamame descascado (60 g)", 1, 4, "", "j", "edamame"],
  /* 2 · grãos, massas, leguminosas */
  quinoa: ["1/2 xícara de quinoa cozida (90 g · 30 g crua)", 2, 5, "quinoa", "", "quinoa"],
  arroz: ["1/2 xícara de arroz integral cozido (90 g)", 2, 4, "arroz", "", "arroz integral"],
  arrozN: ["1/2 xícara de arroz negro ou vermelho cozido (90 g)", 2, 4, "arrozN", "", "arroz negro"],
  graobico: ["1/2 xícara de grão-de-bico cozido (90 g)", 2, 5, "graobico", "", "grão-de-bico"],
  lentilha: ["1/2 xícara de lentilha cozida firme (90 g)", 2, 5, "lentilha", "", "lentilha"],
  feijaoB: ["1/2 xícara de feijão-branco cozido (90 g)", 2, 5, "feijao", "", "feijão-branco"],
  feijaoP: ["1/2 xícara de feijão-preto cozido e escorrido (90 g)", 2, 5, "feijao", "", "feijão-preto"],
  fradinho: ["1/2 xícara de feijão-fradinho cozido (90 g)", 2, 5, "feijao", "", "feijão-fradinho"],
  macarrao: ["1 xícara de macarrão parafuso cozido al dente (80 g · 40 g cru)", 2, 4, "macarrao", "g", "macarrão"],
  macarraoI: ["1 xícara de macarrão integral penne cozido al dente (80 g · 40 g cru)", 2, 4, "macarrao", "g", "macarrão integral"],
  cuscuz: ["1/2 xícara de cuscuz marroquino hidratado (80 g · 35 g seco)", 2, 4, "cuscuz", "g", "cuscuz marroquino"],
  trigo: ["1/2 xícara de trigo para quibe hidratado (80 g · 35 g seco)", 2, 4, "trigo", "g", "trigo para quibe"],
  sobaS: ["1 xícara de macarrão de arroz cozido (80 g)", 2, 3, "bifum", "", "macarrão de arroz"],
  /* 3 · proteínas */
  frango: ["100 g de peito de frango grelhado em cubos", 3, 3, "frango", "a", "frango"],
  frangoD: ["100 g de frango cozido e desfiado", 3, 3, "frangoD", "a", "frango desfiado"],
  frangoE: ["100 g de frango grelhado com páprica e cominho", 3, 3, "frangoE", "a", "frango temperado"],
  atum: ["1 lata de atum em água escorrido (120 g)", 3, 3, "", "ap", "atum"],
  sardinha: ["1 lata de sardinha em água escorrida, em pedaços", 3, 2, "", "ap", "sardinha"],
  ovo: ["2 ovos cozidos em quartos", 3, 3, "ovo", "ao", "ovo cozido"],
  ovo1: ["1 ovo cozido em quartos", 3, 3, "ovo", "ao", "ovo cozido"],
  carne: ["100 g de patinho ou alcatra grelhado em tiras", 3, 3, "carne", "a", "carne grelhada"],
  salmao: ["100 g de salmão assado em lascas", 3, 2, "salmao", "ap", "salmão"],
  camarao: ["100 g de camarão limpo salteado", 3, 2, "camarao", "ap", "camarão"],
  tofu: ["100 g de tofu firme em cubos dourados", 3, 4, "tofu", "j", "tofu"],
  queijoB: ["60 g de queijo minas frescal em cubos", 4, 3, "", "al", "queijo branco"],
  muçarela: ["8 bolinhas de muçarela de búfala (60 g)", 4, 3, "", "al", "muçarela de búfala"],
  feta: ["40 g de queijo feta esfarelado", 4, 4, "", "al", "feta"],
  parmesao: ["2 colheres de sopa de parmesão em lascas (15 g)", 4, 5, "", "al", "parmesão"],
  ricota: ["60 g de ricota temperada em pedaços", 4, 3, "", "al", "ricota"],
  cottage: ["3 colheres de sopa de cottage (60 g)", 4, 3, "", "al", "cottage"],
  peru: ["60 g de peito de peru em tiras", 3, 3, "", "a", "peito de peru"],
  grao_tost: ["3 colheres de sopa de grão-de-bico tostado", 6, 5, "graoTost", "", "grão-de-bico tostado"],
  /* 4 · macios e frutas */
  manga: ["1/2 manga em cubos (100 g)", 4, 3, "", "", "manga"],
  morango: ["6 morangos em quartos (80 g)", 4, 2, "", "", "morango"],
  maca: ["1/2 maçã em cubos com gotas de limão (70 g)", 4, 3, "", "", "maçã"],
  uva: ["1 punhado de uvas sem semente cortadas ao meio (70 g)", 4, 4, "", "", "uva"],
  abacaxi: ["1 fatia de abacaxi em cubos (80 g)", 4, 3, "", "", "abacaxi"],
  laranja: ["1 laranja em gomos sem pele (100 g)", 4, 3, "", "", "laranja"],
  pera: ["1/2 pera em cubos com gotas de limão (70 g)", 4, 3, "", "", "pera"],
  passas: ["1 colher de sopa de uva-passa (15 g)", 4, 5, "", "", "uva-passa"],
  cranberry: ["1 colher de sopa de cranberry desidratado (15 g)", 4, 5, "", "", "cranberry"],
  azeitona: ["8 azeitonas pretas (30 g)", 4, 5, "", "", "azeitona"],
  azeitonaV: ["8 azeitonas verdes fatiadas (30 g)", 4, 5, "", "", "azeitona verde"],
  tomateSeco: ["4 tomates secos picados (25 g)", 4, 5, "", "", "tomate seco"],
  alcaparra: ["1 colher de chá de alcaparras", 4, 5, "", "", "alcaparras"],
  pepinoC: ["4 pepininhos em conserva em rodelas", 4, 5, "", "", "picles"],
  hortela: ["Folhas de 2 ramos de hortelã", 4, 4, "", "", "hortelã"],
  salsa: ["2 colheres de sopa de salsinha picada", 4, 4, "", "", "salsinha"],
  coentro: ["2 colheres de sopa de coentro picado", 4, 3, "", "", "coentro"],
  manjericao: ["8 folhas de manjericão", 4, 3, "", "", "manjericão"],
  /* 5 · folhas (sempre secas, perto da tampa) */
  alface: ["1 xícara cheia de alface americana picada (40 g)", 5, 4, "folhas", "", "alface americana"],
  alfaceR: ["1 xícara cheia de alface-romana picada (40 g)", 5, 4, "folhas", "", "alface-romana"],
  mix: ["1 xícara cheia de mix de folhas (40 g)", 5, 4, "folhas", "", "mix de folhas"],
  rucula: ["1 xícara cheia de rúcula (30 g)", 5, 3, "folhas", "", "rúcula"],
  espinafre: ["1 xícara cheia de espinafre baby (30 g)", 5, 4, "folhas", "", "espinafre"],
  couve: ["1 xícara de couve em tiras finas (40 g)", 5, 5, "folhas", "", "couve"],
  agriao: ["1 xícara de agrião (30 g)", 5, 3, "folhas", "", "agrião"],
  acelga: ["1 xícara de acelga fatiada fina (50 g)", 5, 4, "folhas", "", "acelga"],
  /* 6 · crocantes (vão separados ou por cima na hora) */
  castanha: ["1 colher de sopa de castanha-de-caju picada (15 g)", 6, 5, "", "c", "castanha-de-caju"],
  nozes: ["1 colher de sopa de nozes picadas (15 g)", 6, 5, "", "c", "nozes"],
  amendoas: ["1 colher de sopa de amêndoas laminadas (15 g)", 6, 5, "", "c", "amêndoas"],
  amendoim: ["1 colher de sopa de amendoim torrado sem sal (15 g)", 6, 5, "", "m", "amendoim"],
  girassol: ["1 colher de sopa de semente de girassol (10 g)", 6, 5, "", "", "semente de girassol"],
  abobora_s: ["1 colher de sopa de semente de abóbora (10 g)", 6, 5, "", "", "semente de abóbora"],
  gergelim: ["1 colher de chá de gergelim tostado", 6, 5, "", "s", "gergelim"],
  chia: ["1 colher de chá de chia", 6, 5, "", "", "chia"],
  crouton: ["1/2 xícara de croutons de pão integral (15 g)", 6, 5, "crouton", "g", "croutons"],
  granola: ["2 colheres de sopa de granola sem açúcar (15 g)", 6, 5, "", "gc", "granola"],
  coco: ["1 colher de sopa de coco em lascas tostado", 6, 5, "", "", "coco"],
  chips: ["1 punhado de chips de batata-doce assados", 6, 5, "", "", "chips"]
};

/* preparo de cada componente (aparece uma vez por receita) */
var PREP = {
  folhas: ["Lave as folhas, seque muito bem (centrífuga ou pano limpo) e rasgue com as mãos. Folha úmida é o que faz a salada murchar.", 0, 5],
  quinoa: ["Lave a quinoa numa peneira, cozinhe em 2 vezes o volume de água com uma pitada de sal por 15 minutos, até aparecer o “anelzinho”. Escorra e espalhe num prato para esfriar.", 15, 18],
  arroz: ["Use arroz integral já cozido e frio. Se for fazer agora: 1 parte de arroz para 2,5 de água, 35 minutos em fogo baixo com tampa.", 35, 5],
  arrozN: ["Use arroz negro ou vermelho já cozido e frio. Se for fazer agora: 1 parte para 3 de água, 40 minutos em fogo baixo com tampa.", 40, 5],
  graobico: ["Use grão-de-bico cozido firme (caseiro ou em conserva lavado e escorrido). Seque com papel-toalha.", 0, 3],
  lentilha: ["Cozinhe a lentilha em bastante água com sal por 18 a 20 minutos, até ficar macia mas inteira. Escorra e espalhe para esfriar.", 20, 22],
  feijao: ["Use o feijão cozido sem caldo: escorra bem numa peneira e passe uma água. Feijão com caldo deixa o pote aguado.", 0, 3],
  macarrao: ["Cozinhe o macarrão em água com sal 1 minuto a menos que a embalagem manda. Escorra, passe água fria e misture 1 fio de azeite para não grudar.", 10, 12],
  cuscuz: ["Coloque o cuscuz marroquino numa tigela, cubra com a mesma quantidade de água fervente com sal, tampe por 5 minutos e solte com um garfo.", 5, 7],
  trigo: ["Cubra o trigo para quibe com água fria por 30 minutos, escorra e aperte bem com as mãos para tirar a água.", 30, 3],
  bifum: ["Hidrate o macarrão de arroz em água quente por 5 minutos (ou como manda a embalagem), escorra, passe água fria e misture gotas de óleo de gergelim ou azeite.", 5, 7],
  frango: ["Tempere o frango com sal, alho e limão. Grelhe em frigideira quente com 1 fio de azeite, 5 minutos de cada lado, até não ter parte rosada no meio. Deixe esfriar e corte em cubos.", 12, 15],
  frangoD: ["Cozinhe o peito de frango em água com sal, louro e alho por 20 minutos. Escorra, deixe amornar e desfie com dois garfos.", 20, 25],
  frangoE: ["Tempere o frango com sal, 1 colher de chá de páprica doce e 1/2 de cominho. Grelhe 5 minutos de cada lado até cozinhar por dentro. Deixe esfriar e fatie.", 12, 15],
  ovo: ["Coloque os ovos em água fervente por 10 minutos, passe para água gelada e descasque.", 10, 13],
  carne: ["Tempere a carne com sal e pimenta-do-reino. Grelhe em frigideira bem quente, 3 a 4 minutos de cada lado. Descanse 5 minutos, deixe esfriar e corte em tiras.", 12, 15],
  salmao: ["Tempere o salmão com sal e limão e asse a 200 °C por 15 minutos (ou airfryer 180 °C por 10). Deixe esfriar e solte em lascas.", 15, 17],
  camarao: ["Salteie o camarão em frigideira quente com 1 fio de azeite e alho por 2 a 3 minutos, só até ficar rosado. Deixe esfriar.", 5, 5],
  tofu: ["Seque bem o tofu com papel-toalha, corte em cubos e doure em frigideira com 1 fio de azeite e 1 colher de chá de shoyu, mexendo, por 8 minutos.", 10, 10],
  beterraba: ["Cozinhe a beterraba com casca em água por 35 minutos (ou 12 minutos na pressão). Descasque fria e corte em cubos.", 35, 15],
  brocolis: ["Branqueie o brócolis: 2 minutos em água fervente com sal e direto para uma tigela com água e gelo. Escorra e seque bem.", 5, 4],
  vagem: ["Branqueie a vagem: 3 minutos em água fervente com sal e direto para água gelada. Escorra e seque.", 5, 5],
  couveflor: ["Branqueie a couve-flor: 3 minutos em água fervente com sal e direto para água gelada. Escorra e seque.", 5, 5],
  aspargo: ["Branqueie os aspargos: 2 minutos em água fervente com sal e direto para água gelada. Escorra e seque.", 5, 4],
  chuchu: ["Cozinhe o chuchu em cubos em água com sal por 8 minutos, até ficar macio mas firme. Escorra e deixe esfriar.", 10, 10],
  batata: ["Cozinhe a batata em cubos em água com sal por 10 a 12 minutos, até o garfo entrar fácil sem desmanchar. Escorra e deixe esfriar.", 12, 15],
  abobora: ["Misture a abóbora em cubos com 1 fio de azeite, sal e páprica e asse a 200 °C por 25 minutos (ou airfryer 180 °C por 15). Deixe esfriar.", 25, 25],
  batatadoce: ["Misture a batata-doce em cubos com 1 fio de azeite, sal e alecrim e asse a 200 °C por 25 minutos (ou airfryer 180 °C por 15). Deixe esfriar.", 25, 25],
  berinjela: ["Misture a berinjela em cubos com 1 fio de azeite e sal e asse a 200 °C por 20 minutos (ou airfryer 180 °C por 12). Deixe esfriar.", 20, 20],
  crouton: ["Croutons: corte 1 fatia de pão integral em cubos, misture com 1 fio de azeite e orégano e leve à airfryer a 180 °C por 5 minutos (ou frigideira, mexendo).", 6, 0],
  graoTost: ["Grão-de-bico tostado: seque bem o grão cozido, misture com azeite, sal e páprica e leve à airfryer a 200 °C por 15 minutos, chacoalhando no meio.", 15, 5]
};

/* ------------------------------------------------------------------
   MOLHOS (1 porção, ~4 colheres de sopa, sempre em potinho à parte)
   [nome, ingredientes, marcas, dias]
   ------------------------------------------------------------------ */
var M = {
  limao: ["Molho de limão e azeite", "2 colheres de sopa de azeite, 1 colher de sopa de suco de limão, 1 pitada de sal e orégano", "", 5],
  mostarda: ["Molho de mostarda e mel", "1 colher de sopa de mostarda, 1 colher de chá de mel, 2 colheres de sopa de azeite, 1 colher de chá de limão e sal", "", 5],
  iogurte: ["Molho de iogurte com ervas", "3 colheres de sopa de iogurte natural, 1 colher de chá de limão, salsinha, cebolinha, sal e 1 fio de azeite", "l", 3],
  balsamico: ["Vinagrete de balsâmico", "2 colheres de sopa de azeite, 1 colher de sopa de vinagre balsâmico, 1/2 colher de chá de mostarda e sal", "", 5],
  tahine: ["Molho de tahine e limão", "1 colher de sopa de tahine, 1 colher de sopa de limão, 2 colheres de sopa de água, 1/2 dente de alho ralado e sal", "s", 5],
  shoyu: ["Molho oriental de gergelim", "1 colher de sopa de shoyu, 1 colher de chá de óleo de gergelim, 1 colher de chá de vinagre de arroz, 1/2 colher de chá de gengibre ralado e 1/2 de mel", "js", 5],
  amendoimM: ["Molho de pasta de amendoim", "1 colher de sopa de pasta de amendoim integral, 1 colher de sopa de shoyu, 1 colher de sopa de limão, 2 de água morna e 1 pitada de pimenta", "mj", 5],
  pesto: ["Pesto de manjericão", "1 colher de sopa de pesto (manjericão, azeite, castanha e parmesão) + 1 colher de sopa de azeite e 1 colher de chá de limão", "lc", 4],
  caesar: ["Molho caesar leve", "2 colheres de sopa de iogurte natural, 1 colher de chá de mostarda, 1 colher de chá de limão, 1 colher de sopa de parmesão ralado, 1/2 dente de alho ralado e sal", "l", 3],
  laranjaM: ["Molho de laranja e gengibre", "2 colheres de sopa de suco de laranja, 1 colher de sopa de azeite, 1/2 colher de chá de gengibre ralado, 1 colher de chá de mostarda e sal", "", 4],
  cebolaM: ["Vinagrete de cebola roxa", "2 colheres de sopa de azeite, 1 colher de sopa de vinagre de maçã, 1 colher de sopa de cebola roxa bem picada, salsinha e sal", "", 5],
  abacateM: ["Molho verde de abacate", "1/4 de abacate amassado, 1 colher de sopa de limão, 2 colheres de sopa de água, coentro ou salsinha e sal (o limão segura a cor por 2 dias)", "", 2],
  mexicano: ["Molho de limão com cominho", "2 colheres de sopa de azeite, 1 colher de sopa de limão, 1/2 colher de chá de cominho, 1 pitada de pimenta e sal", "", 5],
  ervas: ["Azeite de ervas e alho", "2 colheres de sopa de azeite, 1 colher de chá de vinagre de vinho, 1/2 dente de alho ralado, alecrim e tomilho picados e sal", "", 5],
  ranch: ["Molho de iogurte e alho", "3 colheres de sopa de iogurte natural, 1/2 dente de alho ralado, 1 colher de chá de limão, endro ou cebolinha e sal", "l", 3],
  maracuja: ["Molho de maracujá", "1 colher de sopa de polpa de maracujá com sementes, 2 colheres de sopa de azeite, 1 colher de chá de mel e sal", "", 4]
};

var AVM = { a: "", l: "Contém lactose.", g: "Contém glúten.", o: "Leva ovo.", p: "Leva peixe ou frutos do mar.", c: "Leva castanhas.", m: "Leva amendoim.", s: "Leva gergelim.", j: "Leva soja." };
var CAM = ["", "Firmes", "Grãos", "Proteína", "Macios", "Folhas", "Crocantes"];

function lista(a) { return a.length < 2 ? a.join("") : a.slice(0, -1).join(", ") + " e " + a[a.length - 1]; }

/* monta a receita a partir dos componentes */
function salada(o) {
  var ks = o.c, comp = ks.map(function (k) { if (!C[k]) throw new Error("componente " + k + " em " + o.id); return [k].concat(C[k]); });
  var molho = M[o.m]; if (!molho) throw new Error("molho " + o.m + " em " + o.id);
  var flags = molho[2] + comp.map(function (x) { return x[5]; }).join("");
  var dias = Math.min.apply(null, [5, molho[3]].concat(comp.map(function (x) { return x[3]; })));
  var preps = [], tempo = 10, cozidos = false;
  comp.forEach(function (x) { var p = x[4]; if (p && preps.indexOf(p) < 0) { preps.push(p); tempo += PREP[p][1]; if (PREP[p][2]) cozidos = true; } });
  if (preps.indexOf("folhas") > 0) { preps.splice(preps.indexOf("folhas"), 1); preps.unshift("folhas"); }
  var porCam = {}; comp.forEach(function (x) { (porCam[x[2]] = porCam[x[2]] || []).push(x[6]); });
  var ordem = [1, 2, 3, 4, 5].filter(function (n) { return porCam[n]; });
  var croc = porCam[6] || [];
  var camadas = ordem.map(function (n) { return lista(porCam[n]).replace(/^./, function (s) { return s.toUpperCase(); }); });
  var passos = preps.map(function (p) { return { t: PREP[p][0], timer: PREP[p][1] >= 8 ? PREP[p][1] : undefined }; });
  if (cozidos) passos.push({ t: "Deixe tudo o que foi cozido ou assado esfriar por completo antes de montar. Ingrediente morno no pote solta vapor e murcha as folhas.", timer: 20 });
  passos.push({ t: "Molho: misture " + molho[1] + " num potinho de 50 ml com tampa. Ele vai à parte e só entra na hora de comer." });
  passos.push({ t: "Monte no pote de 750 ml, do fundo para a tampa: " + camadas.map(function (c, i) { return (i + 1) + ") " + c.toLowerCase(); }).join(", ") + ". Aperte de leve cada camada." });
  if (croc.length) passos.push({ t: "Coloque " + lista(croc) + " num saquinho ou potinho separado. Só vai por cima na hora, para continuar crocante." });
  passos.push({ t: "Feche bem e guarde na geladeira (5 °C ou menos), na prateleira do meio. Consuma em até " + dias + (dias > 1 ? " dias." : " dia.") });
  passos.push({ t: "Na hora de comer: despeje o molho, feche o pote e chacoalhe, ou vire tudo num prato e misture." });
  if (o.extra) passos.splice(preps.length, 0, { t: o.extra });
  var ingr = ["Molho (à parte): " + molho[1]].concat(comp.map(function (x) { return x[1]; }));
  if (o.mais) ingr = ingr.concat(o.mais);
  var marcas = []; "lgopcmsj".split("").forEach(function (f) { if (flags.indexOf(f) >= 0) marcas.push(AVM[f]); });
  var vegana = flags.indexOf("a") < 0 && flags.indexOf("l") < 0 && !/mel/.test(molho[1]) && !o.naoVegana;
  var tags = [];
  if (vegana) tags.push("Vegana"); else if (flags.indexOf("a") < 0) tags.push("Vegetariana");
  if (/frango|atum|ovo|carne|salm|camar|tofu|sardinha|peru/.test(ks.join(" ")) || ks.some(function (k) { return ["graobico", "lentilha", "feijaoB", "feijaoP", "fradinho", "edamame"].indexOf(k) >= 0; })) tags.push("Proteína");
  if (!cozidos) tags.push("Sem fogão");
  tags.push("Dura " + dias + (dias > 1 ? " dias" : " dia"));
  var r = {
    id: o.id, col: o.col || "potes", premium: o.premium || "potes", sec: o.sec, emoji: o.emoji, nome: o.nome, foto: o.foto || "",
    intro: o.intro, tempo: o.tempo || Math.min(tempo, 75), nivel: o.nivel || "Fácil", rende: "1 pote de 750 ml (1 refeição)",
    tags: o.tags || tags, camadas: camadas,
    ingredientes: ingr, passos: passos, dica: o.dica,
    aviso: (marcas.length ? marcas.join(" ") + " " : "") + "Validade: até " + dias + (dias > 1 ? " dias" : " dia") + " na geladeira a 5 °C ou menos, com o molho à parte. Na dúvida sobre cheiro ou aparência, descarte.",
    dias: dias, molho: o.m, comp: ks, vegana: vegana
  };
  if (o.premio) r.premio = o.premio;
  R.push(r); return r;
}

/* receita simples (molhos, crocantes, bônus) */
function simples(o) { o.col = o.col || "potes"; o.premium = o.premium || "potes"; o.foto = o.foto || ""; o.nivel = o.nivel || "Fácil"; R.push(o); return o; }

window.POTES_LIB = { C: C, PREP: PREP, M: M, salada: salada, simples: simples, lista: lista };

function S(sec) { return function (id, emoji, nome, comps, molho, intro, dica, extra) { return salada({ id: id, sec: sec, emoji: emoji, nome: nome, c: comps, m: molho, intro: intro, dica: dica, extra: extra }); }; }

/* ======================= CLÁSSICAS (8) ======================= */
var s = S("Clássicas");
s("sp-classica-mista", "🥗", "Salada mista de pote", ["tomatinho", "pepino", "cenoura", "cebola", "milho", "alface"], "limao",
  "A salada de todo dia, que finalmente dura a semana: tudo cortado no domingo, molho à parte e folha seca no topo.",
  "Tomate-cereja inteiro dura muito mais que tomate picado. Corte só na hora, se quiser.");
s("sp-grega", "🫒", "Salada grega", ["pepino", "tomatinho", "pimentao", "cebola", "azeitona", "feta", "alfaceR"], "ervas",
  "Pepino, tomate, azeitona e feta, com azeite de ervas. Fresca e bem temperada.",
  "Se o feta for muito salgado, deixe 10 minutos em água fria e seque antes de montar.");
s("sp-caprese", "🍅", "Caprese no pote", ["tomatinho", "muçarela", "manjericao", "rucula", "tomateSeco"], "balsamico",
  "Tomate, muçarela de búfala e manjericão, com rúcula e um toque de tomate seco.",
  "O manjericão escurece se ficar molhado: deixe ele entre a muçarela e a rúcula, longe do fundo.");
s("sp-cesar-frango", "🥬", "Caesar de frango", ["frango", "parmesao", "alfaceR", "crouton"], "caesar",
  "A caesar com molho leve de iogurte, frango grelhado e croutons de pão integral feitos na airfryer.",
  "Croutons sempre separados. No pote, eles amolecem em poucas horas.");
s("sp-tropical", "🥭", "Salada tropical de palmito", ["palmito", "cenoura", "milho", "manga", "mix", "castanha"], "laranjaM",
  "Palmito, manga e castanha com molho de laranja e gengibre. Agridoce sem exagero.");
s("sp-alface-ovo", "🥚", "Salada de alface, ovo e cenoura", ["cenoura", "pepino", "ervilha", "ovo", "alface"], "mostarda",
  "Simples, barata e completa: ovo cozido, legumes e molho de mostarda e mel.",
  "Ovo cozido dura mais com casca. Se quiser esticar, descasque só na véspera.");
s("sp-maionese-leve", "🥔", "Salada de batata com ervas", ["batata", "cenoura", "ervilha", "salsa", "cebolaC"], "ranch",
  "A salada de batata do almoço de domingo, com molho de iogurte e alho no lugar da maionese.",
  "Batata ainda morna absorve mais tempero: tempere com sal e 1 gota de vinagre logo que escorrer.");
s("sp-repolho", "🥬", "Salada crocante de repolho e cenoura", ["repolho", "repolhoB", "cenouraP", "salsa", "girassol"], "cebolaM",
  "Repolho fatiado bem fino é a folha que mais aguenta a semana. Crocante até sexta.",
  "Use a parte mais fina do ralador ou faca bem afiada: fatia fina tempera melhor.");

/* ======================= COM FRANGO (8) ======================= */
s = S("Com frango");
s("sp-frango-quinoa", "🍗", "Frango com quinoa e legumes", ["pepino", "tomatinho", "quinoa", "frango", "espinafre"], "limao",
  "Marmita completa no pote: quinoa, frango grelhado, legumes e espinafre.");
s("sp-frango-mostarda", "🍯", "Frango com mostarda e mel", ["cenoura", "milho", "frango", "uva", "alface", "nozes"], "mostarda",
  "Frango, uva e nozes com molho de mostarda e mel. Doce, salgado e crocante.");
s("sp-frango-mexicano", "🌮", "Frango à mexicana", ["pimentao", "milho", "cebola", "feijaoP", "frangoE", "tomatinhoM", "alfaceR", "coentro"], "mexicano",
  "Feijão-preto, milho, pimentão e frango com páprica e cominho. Bem temperada.",
  "Quem não gosta de coentro pode usar salsinha e cebolinha.");
s("sp-frango-caesar-grao", "🥙", "Frango com grão-de-bico e iogurte", ["pepino", "graobico", "frangoD", "hortela", "alfaceR"], "iogurte",
  "Frango desfiado, grão-de-bico e hortelã com molho de iogurte e ervas.");
s("sp-frango-oriental", "🥢", "Frango oriental com repolho", ["repolho", "cenouraP", "edamame", "frango", "coentro", "gergelim", "amendoim"], "shoyu",
  "Repolho roxo, cenoura, edamame e frango com molho de gergelim. Crocante e perfumada.");
s("sp-frango-batatadoce", "🍠", "Frango com batata-doce assada", ["batatadoce", "brocolis", "frango", "espinafre", "abobora_s"], "mostarda",
  "A marmita fit clássica virou salada: batata-doce assada, brócolis e frango.");
s("sp-frango-manga", "🥭", "Frango com manga e castanha", ["pepino", "cebola", "frango", "manga", "mix", "castanha"], "laranjaM",
  "Frango grelhado com manga e castanha-de-caju, no molho de laranja e gengibre.");
s("sp-frango-pesto", "🌿", "Frango ao pesto com macarrão", ["tomatinho", "macarrao", "frango", "manjericao", "rucula"], "pesto",
  "Salada de macarrão com frango e pesto, para os dias de mais fome.");

/* ======================= COM ATUM, OVO E PEIXE (8) ======================= */
s = S("Com atum, ovo e peixe");
s("sp-atum-feijao", "🐟", "Atum com feijão-branco", ["cebola", "pimentao", "feijaoB", "atum", "salsa", "rucula"], "limao",
  "Clássico italiano de geladeira: feijão-branco, atum e cebola roxa com limão e azeite.");
s("sp-nicoise", "🥚", "Niçoise de pote", ["vagem", "batata", "tomatinho", "atum", "ovo1", "azeitona", "alface"], "balsamico",
  "A salada francesa com atum, ovo, vagem e batata. Refeição completa.");
s("sp-atum-milho", "🌽", "Atum com milho e cenoura", ["cenoura", "milho", "ervilha", "atum", "alface"], "ranch",
  "Atum com legumes e molho de iogurte e alho. Rápida e barata.");
s("sp-ovo-grao", "🥚", "Ovo com grão-de-bico e espinafre", ["tomatinho", "pepino", "graobico", "ovo", "espinafre"], "tahine",
  "Proteína em dobro, de ovo e grão-de-bico, com molho de tahine.");
s("sp-salmao-quinoa", "🍣", "Salmão com quinoa e pepino", ["pepino", "edamame", "quinoa", "salmao", "gergelim", "espinafre"], "shoyu",
  "Salmão em lascas, quinoa e pepino com molho oriental. Feita para comer em até 2 dias.",
  "Peixe dura menos: monte esse pote para segunda ou terça.");
s("sp-sardinha", "🐟", "Sardinha com batata e salsinha", ["batata", "cebola", "tomatinho", "sardinha", "salsa", "alface"], "cebolaM",
  "Sardinha em lata, batata e cebola roxa com vinagrete. Econômica e muito saborosa.",
  "Sardinha em água pesa menos no sabor. Se usar em óleo, escorra bem.");
s("sp-atum-macarrao", "🍝", "Macarrão com atum e azeitona", ["pimentao", "macarrao", "atum", "azeitona", "salsa", "rucula"], "limao",
  "Salada de macarrão com atum, azeitona e limão. Fome resolvida.");
s("sp-camarao-manga", "🍤", "Camarão com manga e abacate", ["pepino", "cebola", "camarao", "manga", "coentro", "alfaceR"], "abacateM",
  "Camarão salteado, manga e molho verde de abacate. Para um almoço especial no meio da semana.",
  "Monte para comer em até 2 dias. O molho de abacate vai bem fechado, com filme encostado.");

/* ======================= VEGANAS E DE GRÃOS (8) ======================= */
s = S("Veganas e de grãos");
s("sp-grao-mediterranea", "🫒", "Grão-de-bico mediterrâneo", ["pepino", "tomatinho", "cebola", "graobico", "azeitona", "salsa", "rucula"], "limao",
  "Grão-de-bico, pepino, tomate e azeitona com limão e azeite. Dura a semana inteira.");
s("sp-lentilha", "🟤", "Lentilha com cenoura e hortelã", ["cenoura", "pimentaoA", "lentilha", "hortela", "salsa", "mix"], "limao",
  "Lentilha cozida firme com legumes e hortelã. Simples, barata e completa.");
s("sp-tabule-quinoa", "🌱", "Tabule de quinoa", ["pepino", "tomatinhoM", "cebola", "quinoa", "salsa", "hortela", "alfaceR"], "limao",
  "O tabule com quinoa no lugar do trigo: sem glúten e bem fresco.");
s("sp-feijao-fradinho", "🫘", "Feijão-fradinho à baiana", ["pimentao", "cebola", "tomatinhoM", "fradinho", "coentro", "couve"], "cebolaM",
  "Feijão-fradinho com vinagrete de cebola roxa e coentro. Sabor de casa.");
s("sp-tofu-oriental", "🥢", "Tofu dourado com gergelim", ["repolho", "cenouraP", "edamame", "arroz", "tofu", "gergelim", "acelga"], "shoyu",
  "Tofu dourado, arroz integral e legumes crocantes com molho oriental.");
s("sp-abobora-quinoa", "🎃", "Abóbora assada com quinoa", ["abobora", "quinoa", "graobico", "espinafre", "abobora_s"], "tahine",
  "Abóbora assada com páprica, quinoa e grão-de-bico, no molho de tahine.");
s("sp-feijao-preto", "🖤", "Feijão-preto com milho e abacate", ["pimentao", "milho", "cebola", "feijaoP", "coentro", "alfaceR"], "abacateM",
  "Feijão-preto, milho e molho verde de abacate, com limão e coentro.",
  "O molho de abacate dura 2 dias. Para o resto da semana, troque pelo de limão com cominho.");
s("sp-amendoim", "🥜", "Legumes crocantes com molho de amendoim", ["repolho", "cenouraP", "pepino", "edamame", "coentro", "acelga", "amendoim"], "amendoimM",
  "Legumes bem crocantes com molho cremoso de pasta de amendoim. Viciante.");

/* ======================= SEM FOGÃO (8) ======================= */
s = S("Sem fogão: prontas em 15 minutos");
s("sp-sf-atum", "⚡", "Atum, grão-de-bico e pepino", ["pepino", "tomatinho", "graobico", "atum", "salsa", "alface"], "limao",
  "Abriu a lata, cortou, montou. Proteína completa sem acender o fogo.");
s("sp-sf-caprese", "🧀", "Tomate, muçarela e rúcula", ["tomatinho", "pepino", "muçarela", "manjericao", "rucula"], "balsamico",
  "Caprese simplificada para os dias corridos. 10 minutos no total.");
s("sp-sf-palmito", "🌴", "Palmito, milho e ervilha", ["palmito", "milho", "ervilha", "cenoura", "alface"], "limao",
  "Tudo de lata e de geladeira: palmito, milho, ervilha e cenoura ralada.");
s("sp-sf-feijao", "🫘", "Feijão-branco com tomate seco", ["cebola", "pepino", "feijaoB", "tomateSeco", "manjericao", "rucula"], "ervas",
  "Feijão-branco de conserva, tomate seco e manjericão. Cara de restaurante, zero fogão.");
s("sp-sf-peru", "🥪", "Peito de peru, queijo e uva", ["cenoura", "pepino", "peru", "queijoB", "uva", "alface"], "mostarda",
  "Para quem gosta de salada de lanche: peito de peru, queijo branco e uva.");
s("sp-sf-beterraba", "❤️", "Beterraba crua com laranja", ["beterraba", "cenoura", "laranja", "hortela", "mix", "girassol"], "laranjaM",
  "Beterraba e cenoura raladas com gomos de laranja e hortelã. Colorida e doce.");
s("sp-sf-grao-curry", "🌶️", "Grão-de-bico com cenoura e passas", ["cenoura", "pimentaoA", "graobico", "passas", "salsa", "espinafre"], "iogurte",
  "Grão-de-bico, cenoura, passas e molho de iogurte com ervas. Doce e salgado.");
s("sp-sf-cottage", "🥒", "Cottage com pepino e rabanete", ["pepino", "rabanete", "tomatinho", "cottage", "cebolaC", "alface"], "limao",
  "Leve e refrescante: cottage, pepino e rabanete com limão.");

/* ======================= COM MASSA E ARROZ (5) ======================= */
s = S("Com massa e arroz");
s("sp-massa-primavera", "🍝", "Macarrão primavera", ["brocolis", "cenoura", "ervilha", "macarraoI", "parmesao", "rucula"], "ervas",
  "Macarrão integral com brócolis, ervilha e cenoura, no azeite de ervas e alho.");
s("sp-arroz-grego", "🍚", "Arroz grego no pote", ["cenoura", "ervilha", "pimentao", "arroz", "passas", "salsa", "alface"], "limao",
  "O arroz grego da festa em versão de salada, com arroz integral.");
s("sp-cuscuz", "🌾", "Cuscuz marroquino com legumes", ["pepino", "pimentao", "cuscuz", "graobico", "hortela", "rucula", "amendoas"], "limao",
  "Cuscuz marroquino, grão-de-bico e hortelã, com amêndoas por cima.");
s("sp-arroz-negro", "🖤", "Arroz negro com legumes e manga", ["pepino", "cenouraP", "arrozN", "manga", "coentro", "espinafre", "castanha"], "laranjaM",
  "Arroz negro, manga e castanha com molho de laranja. Bonita e diferente.");
s("sp-macarrao-frango-ervilha", "🐟", "Macarrão com ervilha e frango", ["ervilha", "milho", "macarrao", "frangoD", "cebolaC", "alface"], "ranch",
  "Salada de macarrão cremosa com frango desfiado e molho de iogurte e alho.");

/* ======================= AGRIDOCES COM FRUTA (5) ======================= */
s = S("Agridoces com fruta");
s("sp-fr-morango", "🍓", "Morango, rúcula e nozes", ["pepino", "queijoB", "morango", "rucula", "nozes"], "balsamico",
  "Morango, queijo branco e nozes com balsâmico. Para comer em até 2 dias.");
s("sp-fr-maca", "🍏", "Maçã, salsão e nozes", ["salsao", "cenoura", "maca", "uva", "alface", "nozes"], "iogurte",
  "Inspirada na salada Waldorf: maçã, salsão, uva e nozes com molho de iogurte.");
s("sp-fr-abacaxi", "🍍", "Abacaxi com frango e hortelã", ["pepino", "cebola", "frangoD", "abacaxi", "hortela", "alface"], "limao",
  "Frango desfiado, abacaxi e hortelã. Fresca, boa para dias quentes.");
s("sp-fr-pera", "🍐", "Pera, rúcula e parmesão", ["cenouraP", "pera", "parmesao", "rucula", "nozes"], "mostarda",
  "Pera, parmesão em lascas e nozes com mostarda e mel.");
s("sp-fr-laranja", "🍊", "Laranja, beterraba e grão-de-bico", ["beterrabaC", "graobico", "laranja", "hortela", "mix", "abobora_s"], "laranjaM",
  "Beterraba cozida, laranja e grão-de-bico. Doce, cítrica e muito colorida.");

/* ======================= BÔNUS 1 · MOLHOS QUE RESOLVEM (12) ======================= */
var MOL = function (id, emoji, nome, intro, ingr, passos, dias, dica, aviso) {
  simples({ id: id, sec: "Bônus · Molhos que Resolvem", emoji: emoji, nome: nome, intro: intro, tempo: 5, rende: "6 porções (1 semana de potes)",
    tags: ["Molho", "Dura " + dias + " dias"], ingredientes: ingr, passos: passos.map(function (t) { return { t: t }; }).concat([{ t: "Divida em potinhos de 50 ml, 1 por salada. Guarde na geladeira por até " + dias + " dias. Agite antes de usar." }]),
    dica: dica, aviso: aviso || "" });
};
MOL("sm-limao", "🍋", "Molho de limão e azeite da semana", "O coringa: vai bem em quase todas as saladas da coleção.",
  ["120 ml de azeite (1/2 xícara)", "60 ml de suco de limão (2 limões)", "1 colher de chá de sal", "1 colher de chá de orégano", "1 pitada de pimenta-do-reino"],
  ["Coloque tudo num vidro com tampa e chacoalhe por 30 segundos, até ficar opaco."], 5, "Azeite pode endurecer na geladeira. Tire 10 minutos antes ou passe o potinho na água morna.");
MOL("sm-mostarda-mel", "🍯", "Mostarda e mel", "Agridoce, cremoso e firme: o molho que mais combina com frango.",
  ["3 colheres de sopa de mostarda", "2 colheres de sopa de mel", "100 ml de azeite", "2 colheres de sopa de suco de limão", "1/2 colher de chá de sal"],
  ["Misture a mostarda, o mel e o limão. Junte o azeite aos poucos, mexendo com garfo, até engrossar."], 5);
MOL("sm-iogurte-ervas", "🌿", "Iogurte com ervas", "Cremoso e leve, para saladas com grão, frango e batata.",
  ["340 g de iogurte natural (2 potes)", "2 colheres de sopa de suco de limão", "3 colheres de sopa de salsinha e cebolinha picadas", "1 dente de alho ralado", "1 colher de chá de sal", "2 colheres de sopa de azeite"],
  ["Misture tudo com uma colher. Prove o sal."], 3, "Iogurte grego deixa o molho bem mais grosso; dilua com 2 colheres de água.", "Contém lactose.");
MOL("sm-balsamico", "🍇", "Vinagrete de balsâmico", "Para saladas com queijo, tomate e frutas.",
  ["100 ml de azeite", "50 ml de vinagre balsâmico", "1 colher de chá de mostarda", "1 colher de chá de mel", "1/2 colher de chá de sal"],
  ["Chacoalhe tudo num vidro fechado até emulsionar."], 5);
MOL("sm-tahine", "🫓", "Tahine e limão", "Cremoso, sem lactose, perfeito para grão-de-bico e legumes assados.",
  ["4 colheres de sopa de tahine", "4 colheres de sopa de suco de limão", "6 a 8 colheres de sopa de água", "1 dente de alho ralado", "1 colher de chá de sal"],
  ["Misture o tahine com o limão: vai talhar e engrossar, é normal.", "Junte a água aos poucos, mexendo, até ficar cremoso como iogurte."], 5, "", "Leva gergelim.");
MOL("sm-oriental", "🥢", "Oriental de gergelim", "Shoyu, gengibre e gergelim: para repolho, tofu, salmão e frango.",
  ["4 colheres de sopa de shoyu", "1 colher de sopa de óleo de gergelim", "2 colheres de sopa de vinagre de arroz", "1 colher de sopa de gengibre ralado", "1 colher de sopa de mel", "2 colheres de sopa de água"],
  ["Misture tudo até o mel dissolver."], 5, "Para sem glúten, use shoyu sem glúten ou tamari.", "Leva soja e gergelim. O shoyu comum contém glúten.");
MOL("sm-amendoim", "🥜", "Pasta de amendoim", "Cremoso e encorpado, para legumes crocantes e macarrão de arroz.",
  ["4 colheres de sopa de pasta de amendoim integral", "3 colheres de sopa de shoyu", "3 colheres de sopa de suco de limão", "6 colheres de sopa de água morna", "1 pitada de pimenta calabresa"],
  ["Misture a pasta de amendoim com a água morna até soltar. Junte o resto."], 5, "Na geladeira ele engrossa. Dilua com 1 colher de água antes de usar.", "Leva amendoim e soja.");
MOL("sm-caesar", "🥬", "Caesar leve de iogurte", "O sabor da caesar com base de iogurte.",
  ["340 g de iogurte natural", "2 colheres de sopa de mostarda", "2 colheres de sopa de suco de limão", "4 colheres de sopa de parmesão ralado", "1 dente de alho ralado", "Sal e pimenta-do-reino"],
  ["Misture tudo até ficar liso."], 3, "", "Contém lactose.");
MOL("sm-laranja", "🍊", "Laranja e gengibre", "Cítrico e perfumado, para saladas com fruta, beterraba e frango.",
  ["150 ml de suco de laranja", "60 ml de azeite", "1 colher de sopa de gengibre ralado", "1 colher de sopa de mostarda", "1/2 colher de chá de sal"],
  ["Chacoalhe tudo num vidro fechado."], 4);
MOL("sm-cebola-roxa", "🧅", "Vinagrete de cebola roxa", "Ácido e fresco, para feijão, batata e repolho.",
  ["100 ml de azeite", "60 ml de vinagre de maçã", "1/2 cebola roxa bem picada", "3 colheres de sopa de salsinha picada", "1 colher de chá de sal"],
  ["Misture tudo e deixe descansar 10 minutos para a cebola amaciar."], 5);
MOL("sm-ranch", "🧄", "Iogurte e alho", "Para quem sente falta da maionese: cremoso e alhado.",
  ["340 g de iogurte natural", "2 dentes de alho ralados", "1 colher de sopa de suco de limão", "2 colheres de sopa de endro ou cebolinha", "1 colher de chá de sal"],
  ["Misture tudo e deixe 15 minutos na geladeira antes de dividir: o alho perfuma o molho."], 3, "", "Contém lactose.");
MOL("sm-maracuja", "💛", "Maracujá", "Azedinho e doce ao mesmo tempo, ótimo com folhas e frango.",
  ["4 colheres de sopa de polpa de maracujá com sementes", "100 ml de azeite", "1 colher de sopa de mel", "1/2 colher de chá de sal"],
  ["Chacoalhe tudo num vidro fechado."], 4);

/* ======================= BÔNUS 2 · CROCANTES CASEIROS (6) ======================= */
var CR = function (id, emoji, nome, intro, ingr, passos, tempo, aviso) {
  simples({ id: id, sec: "Bônus · Crocantes caseiros", emoji: emoji, nome: nome, intro: intro, tempo: tempo, rende: "5 porções",
    tags: ["Crocante", "Airfryer"], ingredientes: ingr, passos: passos.concat([{ t: "Espere esfriar totalmente e guarde num pote bem fechado fora da geladeira, por até 5 dias. Vai por cima da salada só na hora." }]), aviso: aviso || "" });
};
CR("cc-grao-tostado", "🟠", "Grão-de-bico tostado com páprica", "Crocante como petisco e cheio de proteína.",
  ["2 xícaras de grão-de-bico cozido (300 g)", "1 colher de sopa de azeite", "1 colher de chá de páprica defumada", "1/2 colher de chá de sal"],
  [{ t: "Seque muito bem o grão-de-bico com pano limpo, tirando as peles que soltarem." }, { t: "Misture com o azeite, a páprica e o sal." }, { t: "Airfryer a 200 °C por 15 a 18 minutos, chacoalhando a cada 5 (ou forno 200 °C por 30 minutos).", timer: 18 }], 25);
CR("cc-croutons", "🍞", "Croutons de pão integral", "O aproveitamento do pão amanhecido.",
  ["3 fatias de pão integral amanhecido em cubos", "1 colher de sopa de azeite", "1/2 colher de chá de orégano", "1 pitada de sal e alho em pó"],
  [{ t: "Misture os cubos com o azeite e os temperos." }, { t: "Airfryer a 180 °C por 5 a 6 minutos, chacoalhando no meio.", timer: 6 }], 10, "Contém glúten.");
CR("cc-sementes", "🌻", "Mix de sementes tostadas com shoyu", "Girassol, abóbora e gergelim que dão crocância e sabor.",
  ["4 colheres de sopa de semente de girassol", "4 colheres de sopa de semente de abóbora", "2 colheres de sopa de gergelim", "1 colher de sopa de shoyu"],
  [{ t: "Toste as sementes numa frigideira seca em fogo médio, mexendo, por 4 minutos." }, { t: "Desligue, regue o shoyu e mexa rápido até secar." }], 8, "Leva gergelim e soja.");
CR("cc-castanhas", "🌰", "Castanhas caramelizadas sem açúcar", "Castanhas com canela e um toque salgado, adoçadas com xilitol ou eritritol.",
  ["1 xícara de castanha-de-caju ou nozes (120 g)", "1 colher de sopa de xilitol ou eritritol", "1/2 colher de chá de canela", "1 pitada de sal", "1 colher de chá de água"],
  [{ t: "Aqueça as castanhas numa frigideira por 3 minutos, mexendo." }, { t: "Junte o xilitol, a água, a canela e o sal e mexa até secar e grudar nas castanhas. Espalhe num papel-manteiga." }], 10, "Leva castanhas. Xilitol é tóxico para cães, guarde longe dos pets.");
CR("cc-chips", "🍠", "Chips de batata-doce na airfryer", "Fininhos e crocantes, para dar textura.",
  ["1 batata-doce média fatiada bem fina (use mandolina ou descascador)", "1 colher de chá de azeite", "Sal"],
  [{ t: "Seque bem as fatias e misture com o azeite." }, { t: "Airfryer a 160 °C por 15 a 20 minutos, sem empilhar, chacoalhando a cada 5. Sal só no final.", timer: 18 }], 25);
CR("cc-coco", "🥥", "Coco em lascas tostado", "Perfumado e crocante, combina com saladas de fruta e com molho oriental.",
  ["1 xícara de coco em lascas sem açúcar", "1 pitada de sal"],
  [{ t: "Toste numa frigideira seca em fogo baixo, mexendo sem parar, por 3 a 4 minutos, até dourar as bordas." }], 5);

/* ======================= BÔNUS 3, 4 e 5: GUIAS ======================= */
window.GUIAS.push(
  { id: "sp-camadas", produto: "potes", col: "potes", emoji: "🫙", nome: "Guia das camadas e da validade",
    sub: "A ordem certa no pote e quanto tempo cada ingrediente aguenta",
    itens: [
      { n: "A regra das 6 camadas", t: "Do fundo para a tampa:\n1. Firmes e úmidos: pepino, tomate-cereja inteiro, cenoura, pimentão, cebola, repolho.\n2. Grãos e massas: quinoa, arroz, grão-de-bico, lentilha, feijão, macarrão.\n3. Proteínas: frango, atum, ovo, carne, tofu.\n4. Macios: queijos, frutas, azeitonas, ervas.\n5. Folhas bem secas, perto da tampa.\n6. Crocantes e molho: sempre à parte." },
      { n: "Por que o molho vai à parte", t: "Molho no fundo funciona para comer em 1 ou 2 dias. Para a semana toda, o potinho separado é o que garante folha firme até sexta.\nUse potinhos de 40 a 50 ml com tampa de rosca." },
      { n: "Quantos dias dura cada coisa (geladeira a 5 °C)", t: "Legumes crus firmes, grãos, feijões e quinoa: até 5 dias.\nFolhas resistentes (couve, repolho, alface-romana, americana): 4 a 5 dias.\nFolhas delicadas (rúcula, agrião): até 3 dias.\nFrango, carne, ovo cozido, atum aberto e queijos frescos: até 3 dias.\nPeixe cozido, camarão e sardinha: até 2 dias.\nFrutas cortadas: 2 a 3 dias (morango é o mais sensível).\nCada receita já mostra a validade pelo ingrediente que estraga primeiro." },
      { n: "Ordem de consumo da semana", t: "Monte no domingo e coma primeiro as saladas que duram menos.\nSegunda e terça: peixe, camarão, fruta delicada, abacate.\nQuarta: frango, ovo, carne, queijo.\nQuinta e sexta: veganas e de grãos.\nQuem prefere: faça dois preparos, no domingo e na quarta, e qualquer salada serve para qualquer dia." },
      { n: "O pote certo", t: "Vidro de 750 ml com boca larga e tampa que veda. Boca larga facilita montar e comer direto no pote.\nPara quem leva na bolsa: pote de plástico sem BPA, bem vedado, e bolsa térmica com gelo reutilizável." },
      { n: "Segurança", t: "Tudo que foi cozido precisa esfriar antes de ir para o pote (no máximo 2 horas fora da geladeira).\nFora da geladeira, a salada aguenta até 2 horas. No trabalho, guarde na geladeira assim que chegar.\nCheiro estranho, folha melada ou líquido turvo no fundo: descarte." }
    ] },
  { id: "sp-domingo", produto: "potes", col: "potes", emoji: "⏱️", nome: "Domingo do Pote: preparo em 40 minutos",
    sub: "A ordem para preparar 5 potes de uma vez, sem bagunça",
    itens: [
      { n: "Antes de começar (5 min)", t: "Escolha 5 saladas no Desafio da Semana: o app junta todos os ingredientes na lista de compras.\nSeparar: 5 potes de 750 ml, 5 potinhos de molho, tábua, faca boa, centrífuga ou pano limpo." },
      { n: "1. Ligue o que demora (min 0)", t: "Coloque para cozinhar ao mesmo tempo: grãos (quinoa, arroz, lentilha), ovos e frango. Forno ou airfryer com abóbora ou batata-doce." },
      { n: "2. Folhas (min 5)", t: "Lave todas as folhas da semana de uma vez. Centrifugue ou seque em pano. Deixe espalhadas num pano enquanto faz o resto." },
      { n: "3. Corte os legumes (min 10)", t: "Corte tudo de uma vez, por tipo: pepinos, cenouras, pimentões, cebolas. Um potinho para cada um." },
      { n: "4. Molhos (min 25)", t: "Faça 2 molhos da semana e divida em potinhos. Um molho de base de azeite e um cremoso já variam bastante." },
      { n: "5. Esfrie e monte (min 30)", t: "Espalhe o que foi cozido em pratos para esfriar mais rápido. Com tudo frio, monte os 5 potes lado a lado, camada por camada, como numa linha de produção." },
      { n: "6. Etiquete (min 40)", t: "Escreva no pote o nome e o dia de comer. Os de menor validade na frente da geladeira." }
    ] },
  { id: "sp-porcoes", produto: "potes", col: "potes", emoji: "⚖️", nome: "Tabela de porções e substituições",
    sub: "Quanto colocar no pote e o que troca pelo quê",
    itens: [
      { n: "A medida de 1 pote de 750 ml", t: "Legumes firmes: 1 a 1,5 xícara (150 a 200 g).\nGrão ou massa: 1/2 xícara (80 a 90 g cozido).\nProteína: 100 g de carne, frango ou peixe, 2 ovos, 1 lata de atum ou 1/2 xícara de leguminosa.\nFolhas: 1 xícara cheia (30 a 40 g).\nMolho: 3 a 4 colheres de sopa." },
      { n: "Para mais fome", t: "Aumente o grão para 3/4 de xícara e junte 1 ovo. Use pote de 1 litro." },
      { n: "Para pote menor (500 ml, lanche)", t: "Corte tudo pela metade e dispense o grão." },
      { n: "Trocas de proteína", t: "Frango ↔ peito de peru ↔ atum ↔ ovo ↔ tofu ↔ grão-de-bico.\nCarne vermelha ↔ frango temperado.\nSalmão ↔ atum (atum dura 1 dia a mais)." },
      { n: "Trocas de grão", t: "Quinoa ↔ arroz integral ↔ cuscuz marroquino ↔ trigo para quibe ↔ macarrão.\nSem glúten: quinoa, arroz, lentilha e feijões." },
      { n: "Trocas de folha", t: "Rúcula e agrião (3 dias) ↔ couve, repolho e alface-romana (5 dias). Para o fim da semana, prefira as resistentes." }
    ] }
);
})();
