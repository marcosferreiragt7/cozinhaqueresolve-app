/* ================================================================
   PÃES QUE RESOLVEM — plano Essencial (50 pães + 5 bônus)
   Coleção própria Cozinha que Resolve, entregue no app.
   Carregar DEPOIS de potes-fotos.js.
   premium:
     "pao"          -> Essencial
     "pao_premium"  -> Premium (paes2.js e paes3.js)
   rascunho:true -> só aparece para quem tem o código (revisão).
   Receitas elaboradas pela Cozinha que Resolve, em gramas.
   Regras: não dizer "testadas"; sem promessa de saúde/emagrecimento;
   "sem açúcar" só com xilitol/eritritol.
   ================================================================ */
(function () {
var R = window.RECEITAS;

window.PAES = {
  preco: "R$ 19,90", precoPremium: "R$ 29,90", precoUpgrade: "R$ 10",
  checkout: { essencial: "", premium: "", upgrade: "" },
  pagina: "https://app.cozinhaqueresolve.com/paesqueresolvem/"
};

window.COLECOES.push({
  id: "pao", nome: "Pães que Resolvem", emoji: "🍞", cor: "#9A5B13",
  capa: "", produto: "pao", rascunho: true,
  desc: "50 pães caseiros em gramas: do dia a dia, rápidos sem sova, integrais, sem glúten e sem lactose, fit e proteicos, focaccias e rústicos.",
  foot: "Pese os ingredientes: em pão, 20 g de farinha a mais ou a menos mudam a massa. O tempo de crescer depende da temperatura da sua cozinha; siga o ponto descrito, não só o relógio. Receitas elaboradas pela Cozinha que Resolve; o resultado pode variar com o forno e as marcas usadas."
});

window.SECOES.pao = ["Do dia a dia", "Rápidos sem sova", "Integrais e com grãos", "Sem glúten e sem lactose",
  "Fit e proteicos", "Focaccias e rústicos"];

/* ---------- avisos ---------- */
var AV = {
  trigo: "Leva farinha de trigo (contém glúten).",
  leite: "Leva leite, manteiga ou queijo (contém lactose). Para tirar a lactose, use bebida vegetal e margarina sem leite ou azeite.",
  ovo: "Leva ovos.",
  aveia: "Leva aveia: a comum pode ter traços de glúten. Para servir a quem não pode comer glúten, use aveia certificada sem glúten.",
  sgsl: "Sem glúten e sem lactose: confira no rótulo de cada ingrediente (farinhas, fermento, polvilho, psyllium) se não há glúten nem leite. Use utensílios limpos para evitar contaminação com trigo.",
  castanha: "Leva amêndoas ou castanhas.",
  gergelim: "Leva gergelim."
};
function av() { return Array.prototype.slice.call(arguments).map(function (k) { return AV[k]; }).join(" "); }

/* ---------- passos que se repetem ---------- */
function SOVA(min) { return { t: "Sove por cerca de " + min + " minutos, esticando a massa com a base da mão e dobrando de volta. Está no ponto quando fica lisa, elástica e não gruda mais na mão. Teste: estique um pedacinho; se formar uma película fina sem rasgar, pode parar.", timer: min * 60 > 0 ? min : undefined }; }
function CRESCE(min, o) { return { t: "Cubra com um pano ou filme e deixe crescer em lugar sem vento até " + (o || "dobrar de volume") + ", cerca de " + min + " minutos. Em dia frio, deixe dentro do forno desligado com a luz acesa.", timer: min }; }
function FORNO(temp, min, extra) { return { t: "Preaqueça o forno a " + temp + " °C por 15 minutos e asse por " + min + " minutos" + (extra ? ", " + extra : "") + ". Está pronto quando a casca está dourada e, ao bater embaixo, o som é oco.", timer: min }; }
var ESFRIA = { t: "Desenforme e deixe esfriar sobre uma grade por pelo menos 30 minutos antes de cortar: o miolo ainda está terminando de cozinhar com o calor.", timer: 30 };
var ESFRIA_SG = { t: "Espere esfriar totalmente (1 hora) antes de cortar. Pão sem glúten cortado quente fica com o miolo grudento.", timer: 60 };
function FORMA(t) { return { t: "Unte " + (t || "uma forma de bolo inglês de cerca de 25 x 10 cm") + " com óleo e polvilhe farinha, ou forre com papel-manteiga." }; }
var ATIVA = { t: "Numa tigela grande, misture a farinha, o fermento biológico seco e o açúcar. O sal entra depois, para não encostar direto no fermento." };

function P(o) { o.col = "pao"; o.premium = o.premium || "pao"; o.foto = o.foto || ""; R.push(o); }

/* ======================= DO DIA A DIA (9) ======================= */
var S = "Do dia a dia";
P({ id: "pq-forma", sec: S, emoji: "🍞", nome: "Pão de forma caseiro",
  intro: "Macio, de casca fina e miolo fechado, para o sanduíche e a torrada da semana. Rende uma forma grande.",
  tempo: 180, nivel: "Fácil", rende: "1 pão de forma (16 fatias)", tags: ["Forno", "Sanduíche", "Café da manhã"],
  ingredientes: ["500 g de farinha de trigo", "7 g de fermento biológico seco (1 colher de sopa rasa)", "20 g de açúcar", "10 g de sal (2 colheres de chá)", "280 g de leite morno", "1 ovo", "40 g de manteiga em temperatura ambiente"],
  passos: [ATIVA,
    { t: "Junte o leite morno (quente demais mata o fermento: deve estar como água de banho) e o ovo. Misture até virar uma massa grossa, junte o sal e a manteiga." },
    SOVA(10), CRESCE(60),
    { t: "Abra a massa num retângulo do comprimento da forma, enrole bem apertado como um rocambole e feche a emenda beliscando." },
    FORMA(), { t: "Coloque na forma com a emenda para baixo." }, CRESCE(45, "a massa passar 1 dedo da borda da forma"),
    FORNO(180, 35, "na grade do meio"), ESFRIA],
  dica: "Para a casca ficar macia, passe um pouco de manteiga por cima assim que sair do forno e cubra com um pano enquanto esfria.",
  aviso: av("trigo", "leite", "ovo") });

P({ id: "pq-frances", sec: S, emoji: "🥖", nome: "Pão francês caseiro",
  intro: "Casca fininha e crocante e miolo aerado. O vapor no forno é o segredo de padaria que dá para fazer em casa.",
  tempo: 200, nivel: "Médio", rende: "8 pães", tags: ["Forno", "Café da manhã", "Fermentação"],
  ingredientes: ["500 g de farinha de trigo", "5 g de fermento biológico seco", "10 g de açúcar", "10 g de sal", "320 g de água gelada", "15 g de óleo"],
  passos: [ATIVA,
    { t: "Junte a água gelada e o óleo, misture e acrescente o sal. Água gelada deixa a massa crescer devagar e ganhar mais sabor." },
    SOVA(12), CRESCE(90),
    { t: "Divida em 8 partes de cerca de 105 g. Abra cada uma num retângulo, enrole apertado e afine as pontas rolando sob as mãos." },
    { t: "Coloque numa assadeira com papel-manteiga, com espaço entre eles. Cubra e deixe crescer até quase dobrar, cerca de 50 minutos.", timer: 50 },
    { t: "Coloque uma assadeira vazia no fundo do forno e preaqueça a 230 °C por 20 minutos. Faça um corte de 1 cm de profundidade ao longo de cada pão com lâmina ou faca bem afiada." },
    { t: "Coloque os pães e jogue 1 copo de água fervente na assadeira de baixo (cuidado com o vapor). Feche rápido. Asse 10 minutos, abra 5 segundos para sair o vapor e asse mais 10 a 12 minutos, até dourar.", timer: 22 },
    { t: "Esfrie numa grade. Em 15 minutos a casca começa a estalar." }],
  dica: "Sem vapor o pão não abre a \"pestana\". Se não quiser usar água fervente, borrife bastante água nos pães e nas paredes do forno logo antes de fechar.",
  aviso: av("trigo") });

P({ id: "pq-leite", sec: S, emoji: "🥛", nome: "Pão de leite fofinho",
  intro: "Aquele pãozinho macio de padaria, levemente adocicado, que puxa em fios. Bom puro, com manteiga ou recheado.",
  tempo: 170, nivel: "Fácil", rende: "12 pãezinhos", tags: ["Forno", "Café da manhã", "Lanche das crianças"],
  ingredientes: ["500 g de farinha de trigo", "7 g de fermento biológico seco", "60 g de açúcar", "8 g de sal", "250 g de leite morno", "2 ovos (1 para a massa e 1 para pincelar)", "60 g de manteiga em temperatura ambiente"],
  passos: [ATIVA,
    { t: "Junte o leite morno e 1 ovo, misture, acrescente o sal e a manteiga aos poucos." },
    SOVA(12), CRESCE(60),
    { t: "Divida em 12 bolinhas de cerca de 75 g. Boleie cada uma rolando na bancada com a mão em concha, até a superfície ficar lisa." },
    { t: "Arrume numa assadeira untada de 30 x 20 cm, encostadas umas nas outras. Cubra e deixe crescer até dobrar, cerca de 45 minutos.", timer: 45 },
    { t: "Pincele com o outro ovo batido." }, FORNO(180, 25), ESFRIA],
  dica: "Bolinhas encostadas crescem para cima e ficam com as laterais macias, sem casca: é o que dá o \"puxa\" do pão de leite.",
  aviso: av("trigo", "leite", "ovo") });

P({ id: "pq-batata", sec: S, emoji: "🥔", nome: "Pão de batata",
  intro: "A batata cozida deixa o miolo úmido e macio por mais dias. Bom para lanche e para recheio.",
  tempo: 180, nivel: "Fácil", rende: "15 pãezinhos", tags: ["Forno", "Lanche", "Congela bem"],
  ingredientes: ["250 g de batata cozida e espremida, já fria", "500 g de farinha de trigo", "10 g de fermento biológico seco", "30 g de açúcar", "10 g de sal", "200 g de leite morno", "1 ovo", "50 g de manteiga", "1 gema para pincelar"],
  passos: [{ t: "Cozinhe a batata com casca até ficar macia, descasque e esprema ainda quente. Espere esfriar: batata quente mata o fermento." },
    ATIVA,
    { t: "Junte a batata, o leite morno e o ovo. Misture, acrescente o sal e a manteiga." },
    SOVA(10), CRESCE(60),
    { t: "Divida em 15 bolinhas de cerca de 75 g e boleie. Arrume na assadeira untada com espaço entre elas." },
    CRESCE(40), { t: "Pincele com a gema." }, FORNO(180, 25), ESFRIA],
  dica: "A massa é mais mole que a de pão comum, por causa da batata. Se grudar demais, unte as mãos com óleo em vez de jogar mais farinha.",
  aviso: av("trigo", "leite", "ovo") });

P({ id: "pq-milho", sec: S, emoji: "🌽", nome: "Pão de milho com fubá",
  intro: "Amarelinho, com gosto de broa e textura de pão. Combina com café e com manteiga derretendo.",
  tempo: 170, nivel: "Fácil", rende: "1 pão redondo grande (12 fatias)", tags: ["Forno", "Café da tarde"],
  ingredientes: ["150 g de fubá mimoso", "250 g de leite fervente", "350 g de farinha de trigo", "7 g de fermento biológico seco", "40 g de açúcar", "8 g de sal", "1 ovo", "40 g de manteiga", "Erva-doce a gosto (opcional)"],
  passos: [{ t: "Escalde o fubá: despeje o leite fervente sobre ele, mexa até virar um creme grosso e deixe amornar (uns 20 minutos). Isso hidrata o fubá e deixa o pão macio.", timer: 20 },
    { t: "Junte a farinha, o fermento e o açúcar, depois o ovo, o sal, a manteiga e a erva-doce." },
    SOVA(8), CRESCE(60),
    { t: "Modele uma bola, coloque numa assadeira untada e faça 3 cortes rasos em cima." },
    CRESCE(40), FORNO(180, 35), ESFRIA],
  dica: "Polvilhe um pouco de fubá na assadeira antes de colocar o pão: dá uma base crocante.",
  aviso: av("trigo", "leite", "ovo") });

P({ id: "pq-cenoura", sec: S, emoji: "🥕", nome: "Pão de cenoura",
  intro: "Cor laranja bonita sem corante e miolo macio. As crianças comem sem perceber o legume.",
  tempo: 170, nivel: "Fácil", rende: "1 pão de forma (16 fatias)", tags: ["Forno", "Liquidificador", "Lanche das crianças"],
  ingredientes: ["200 g de cenoura crua picada", "180 g de leite morno", "1 ovo", "40 g de óleo", "40 g de açúcar", "10 g de fermento biológico seco", "8 g de sal", "500 g de farinha de trigo"],
  passos: [{ t: "Bata no liquidificador a cenoura, o leite morno, o ovo, o óleo e o açúcar até ficar liso." },
    { t: "Numa tigela, misture a farinha e o fermento. Despeje o creme de cenoura, misture e acrescente o sal." },
    SOVA(10), CRESCE(60),
    { t: "Abra num retângulo, enrole apertado e coloque na forma untada com a emenda para baixo." },
    CRESCE(45, "passar a borda da forma"), FORNO(180, 35), ESFRIA],
  dica: "A mesma receita vale para abóbora cozida ou beterraba crua: troque os 200 g de cenoura.",
  aviso: av("trigo", "leite", "ovo") });

P({ id: "pq-sovado", sec: S, emoji: "🫓", nome: "Pão sovado de padaria",
  intro: "Miolo branquinho, fechado e levemente doce, com a crosta brilhante e o corte em cima. O clássico das padarias antigas.",
  tempo: 180, nivel: "Médio", rende: "2 pães médios", tags: ["Forno", "Café da manhã"],
  ingredientes: ["500 g de farinha de trigo", "7 g de fermento biológico seco", "70 g de açúcar", "8 g de sal", "230 g de leite morno", "1 ovo", "50 g de manteiga", "1 gema + 1 colher de leite para pincelar"],
  passos: [ATIVA,
    { t: "Junte o leite e o ovo, misture e acrescente o sal e a manteiga." },
    SOVA(15), { t: "Massa de pão sovado é mais firme: sove bem até ficar lisa e acetinada. Se tiver um rolo, passe a massa dobrando várias vezes, como faziam as padarias." },
    CRESCE(60),
    { t: "Divida em 2, abra cada parte, enrole como rocambole e coloque na assadeira untada. Faça um corte comprido em cima." },
    CRESCE(45), { t: "Pincele com a gema misturada ao leite." }, FORNO(180, 30), ESFRIA],
  dica: "O brilho vem da gema com leite. Pincele com delicadeza para não murchar o pão crescido.",
  aviso: av("trigo", "leite", "ovo") });

P({ id: "pq-caseiro", sec: S, emoji: "🏡", nome: "Pão caseiro de fazenda",
  intro: "Pão grande, de forma redonda e casca firme, do jeito de vó: farinha, água, um pouco de óleo e paciência.",
  tempo: 200, nivel: "Fácil", rende: "1 pão grande (14 fatias)", tags: ["Forno", "Café da manhã", "Econômico"],
  ingredientes: ["600 g de farinha de trigo", "8 g de fermento biológico seco", "30 g de açúcar", "12 g de sal", "370 g de água morna", "40 g de óleo"],
  passos: [ATIVA,
    { t: "Junte a água morna e o óleo, misture e acrescente o sal." },
    SOVA(10), CRESCE(75),
    { t: "Desinfle a massa, modele uma bola apertando bem a superfície e coloque numa assadeira untada e polvilhada com farinha." },
    CRESCE(50), { t: "Polvilhe farinha por cima e faça um corte em cruz." },
    FORNO(200, 40), ESFRIA],
  dica: "Para a casca ficar mais grossa e crocante, deixe o pão 5 minutos dentro do forno desligado com a porta entreaberta.",
  aviso: av("trigo") });

P({ id: "pq-bisnaguinha", sec: S, emoji: "🥯", nome: "Bisnaguinha caseira",
  intro: "Macia, doce na medida e do tamanho da mão da criança. Rende bastante e congela muito bem.",
  tempo: 160, nivel: "Fácil", rende: "24 bisnaguinhas", tags: ["Forno", "Lanche das crianças", "Congela bem"],
  ingredientes: ["500 g de farinha de trigo", "10 g de fermento biológico seco", "70 g de açúcar", "8 g de sal", "220 g de leite morno", "1 ovo", "60 g de manteiga", "1 gema para pincelar"],
  passos: [ATIVA, { t: "Junte o leite e o ovo, depois o sal e a manteiga." },
    SOVA(10), CRESCE(50),
    { t: "Divida em 24 partes de cerca de 35 g. Role cada uma num cilindro de 12 cm." },
    { t: "Arrume na assadeira untada, encostadas de lado, em fileiras." },
    CRESCE(35), { t: "Pincele com a gema." }, FORNO(180, 18), ESFRIA],
  dica: "Para congelar: espere esfriar, guarde em saco fechado e aqueça 1 minuto na airfryer ou 20 segundos no micro-ondas.",
  aviso: av("trigo", "leite", "ovo") });

/* ======================= RÁPIDOS SEM SOVA (9) ======================= */
S = "Rápidos sem sova";
P({ id: "pq-frig-iogurte", sec: S, emoji: "🍳", nome: "Pão de frigideira de iogurte",
  intro: "Três ingredientes, sem fermento biológico e sem forno. Em 20 minutos tem pão quente para o café.",
  tempo: 20, nivel: "Fácil", rende: "4 pães médios", tags: ["Frigideira", "Sem forno", "Rápido"],
  ingredientes: ["170 g de iogurte natural integral (1 pote)", "200 g de farinha de trigo", "6 g de fermento químico (2 colheres de chá)", "3 g de sal", "Azeite para a frigideira"],
  passos: [{ t: "Misture a farinha, o fermento químico e o sal. Junte o iogurte e misture com a mão até formar uma massa macia que não gruda. Se grudar, mais 1 colher de farinha." },
    { t: "Divida em 4 bolinhas e abra cada uma com as mãos ou rolo, com 1 cm de espessura." },
    { t: "Aqueça uma frigideira antiaderente em fogo médio-baixo com um fio de azeite. Doure os pães por 3 a 4 minutos de cada lado, com a frigideira tampada, até crescerem e dourarem.", timer: 8 }],
  dica: "Pincele com manteiga de alho e salsinha assim que sair da frigideira para virar um pão de alho rápido.",
  aviso: av("trigo", "leite") });

P({ id: "pq-liquidificador", sec: S, emoji: "🌀", nome: "Pão de liquidificador na forma",
  intro: "Massa mole batida no liquidificador, sem sovar e sem sujar a bancada. Vai direto para a forma.",
  tempo: 100, nivel: "Fácil", rende: "1 pão de forma (14 fatias)", tags: ["Liquidificador", "Forno", "Sem sova"],
  ingredientes: ["300 g de leite morno", "2 ovos", "60 g de óleo", "40 g de açúcar", "10 g de fermento biológico seco", "7 g de sal", "450 g de farinha de trigo", "Queijo ralado para polvilhar (opcional)"],
  passos: [{ t: "Bata no liquidificador o leite morno, os ovos, o óleo, o açúcar, o fermento e o sal por 1 minuto." },
    { t: "Passe para uma tigela e junte a farinha aos poucos, mexendo com colher até virar uma massa grossa e pegajosa. Não precisa sovar." },
    FORMA(), { t: "Espalhe a massa na forma com uma colher untada. Polvilhe o queijo, se quiser." },
    CRESCE(45, "chegar perto da borda"), FORNO(180, 35), ESFRIA],
  dica: "A massa fica mole mesmo, quase como massa de bolo grossa. Não acrescente farinha além da receita.",
  aviso: av("trigo", "leite", "ovo") });

P({ id: "pq-caneca-ovo", sec: S, emoji: "☕", nome: "Pão de caneca de micro-ondas",
  intro: "Um pão individual em 3 minutos, sem farinha de trigo. Para quando a fome chega antes da padaria abrir.",
  tempo: 5, nivel: "Fácil", rende: "1 pão (2 fatias)", tags: ["Micro-ondas", "Rápido", "Sem trigo"],
  ingredientes: ["1 ovo", "20 g de farinha de aveia (2 colheres de sopa)", "15 g de requeijão ou iogurte", "2 g de fermento químico (1/2 colher de chá)", "1 pitada de sal", "Orégano a gosto"],
  passos: [{ t: "Numa caneca grande (300 ml) untada, bata o ovo com garfo. Junte o requeijão, a farinha de aveia, o sal e o orégano e misture bem. Por último, o fermento." },
    { t: "Leve ao micro-ondas por 1 minuto e 30 segundos. Se ainda estiver úmido em cima, mais 15 segundos.", timer: 2 },
    { t: "Desenforme, corte ao meio na horizontal e toste na frigideira ou sanduicheira." }],
  dica: "Fica ainda melhor tostado: a superfície seca e o pão ganha textura de torrada por fora.",
  aviso: av("ovo", "leite", "aveia") });

P({ id: "pq-airfryer", sec: S, emoji: "🍟", nome: "Pãozinho de airfryer",
  intro: "Massa simples que cresce enquanto a airfryer esquenta. Casquinha dourada e miolo macio sem ligar o forno.",
  tempo: 75, nivel: "Fácil", rende: "6 pãezinhos", tags: ["Airfryer", "Sem forno", "Rápido"],
  ingredientes: ["250 g de farinha de trigo", "5 g de fermento biológico seco", "10 g de açúcar", "5 g de sal", "150 g de água morna", "15 g de azeite"],
  passos: [{ t: "Misture a farinha, o fermento e o açúcar. Junte a água morna e o azeite, misture e acrescente o sal. Mexa com colher até virar uma massa pegajosa (2 minutos), sem sovar." },
    CRESCE(40),
    { t: "Com as mãos untadas, divida em 6 bolinhas e coloque sobre papel-manteiga no cesto da airfryer, com espaço entre elas. Deixe descansar 15 minutos.", timer: 15 },
    { t: "Asse a 170 °C por 12 a 14 minutos, sem preaquecer, até dourar.", timer: 14 }],
  dica: "Pincele azeite e sal grosso antes de assar para lembrar pão de restaurante.",
  aviso: av("trigo") });

P({ id: "pq-panela", sec: S, emoji: "🍲", nome: "Pão de panela sem sova",
  intro: "A massa fica na geladeira de um dia para o outro e assa dentro de uma panela tampada: casca de padaria artesanal sem esforço.",
  tempo: 840, nivel: "Fácil", rende: "1 pão redondo (10 fatias)", tags: ["Forno", "Sem sova", "Fermentação longa"],
  ingredientes: ["450 g de farinha de trigo", "3 g de fermento biológico seco (1 colher de chá rasa)", "9 g de sal", "350 g de água fria"],
  passos: [{ t: "Misture tudo numa tigela com uma colher até não ter farinha seca. É uma massa bem úmida e grudenta, é assim mesmo." },
    { t: "Tampe e deixe 2 horas fora da geladeira e depois de 10 a 16 horas na geladeira.", timer: 120 },
    { t: "Na hora de assar, vire a massa numa bancada enfarinhada, dobre as bordas para o centro formando uma bola e coloque sobre papel-manteiga com a dobra para baixo. Descanse 45 minutos.", timer: 45 },
    { t: "Enquanto isso, coloque uma panela de ferro ou de vidro com tampa (que possa ir ao forno) dentro do forno e preaqueça a 240 °C por 30 minutos." },
    { t: "Faça um corte em cima, coloque o pão com o papel dentro da panela quente, tampe e asse 30 minutos. Tire a tampa e asse mais 15, até ficar bem dourado.", timer: 45 },
    ESFRIA],
  dica: "A panela tampada prende o vapor que sai da massa: é o que dá a casca brilhante e crocante.",
  aviso: av("trigo") });

P({ id: "pq-soda", sec: S, emoji: "🥛", nome: "Pão de soda irlandês",
  intro: "Pão sem fermento biológico: cresce com bicarbonato e iogurte. Do pote ao forno em 10 minutos.",
  tempo: 55, nivel: "Fácil", rende: "1 pão redondo (10 fatias)", tags: ["Forno", "Sem sova", "Rápido"],
  ingredientes: ["400 g de farinha de trigo (pode ser metade integral)", "6 g de bicarbonato de sódio (1 colher de chá)", "6 g de sal", "350 g de iogurte natural (ou leite com 2 colheres de sopa de limão, descansado 5 minutos)"],
  passos: [{ t: "Preaqueça o forno a 200 °C. Misture a farinha, o bicarbonato e o sal." },
    { t: "Faça um buraco no meio, despeje o iogurte e misture com a mão em garra, rápido, só até juntar. Massa trabalhada demais fica dura." },
    { t: "Modele uma bola achatada sobre papel-manteiga e faça um corte em cruz profundo." },
    { t: "Asse por 35 minutos, até dourar e soar oco ao bater embaixo.", timer: 35 }, ESFRIA],
  dica: "Coma no mesmo dia ou no seguinte, de preferência torrado. Ele não tem o miolo elástico do pão com fermento.",
  aviso: av("trigo", "leite") });

P({ id: "pq-pita", sec: S, emoji: "🫓", nome: "Pão sírio de frigideira",
  intro: "O pão que estufa e forma o bolso para rechear. Feito na frigideira, em minutos, depois que a massa cresce.",
  tempo: 90, nivel: "Médio", rende: "8 pães", tags: ["Frigideira", "Sem forno", "Lanche"],
  ingredientes: ["400 g de farinha de trigo", "5 g de fermento biológico seco", "8 g de açúcar", "8 g de sal", "250 g de água morna", "20 g de azeite"],
  passos: [ATIVA, { t: "Junte a água e o azeite, misture e acrescente o sal." },
    SOVA(6), CRESCE(50),
    { t: "Divida em 8 bolinhas e descanse 10 minutos cobertas. Abra cada uma com rolo num disco de 18 cm e 4 mm de espessura, sem furos.", timer: 10 },
    { t: "Aqueça bem uma frigideira de fundo grosso, sem óleo, em fogo médio-alto. Coloque o disco: em 30 segundos aparecem bolhas, vire; em mais 1 minuto ele estufa. Vire de novo por 30 segundos." },
    { t: "Empilhe os pães prontos dentro de um pano de prato para ficarem macios." }],
  dica: "Se não estufar, a frigideira está fria ou o disco ficou grosso ou furado. Abra bem fino e por igual.",
  aviso: av("trigo") });

P({ id: "pq-minuto", sec: S, emoji: "⏱️", nome: "Pão de minuto",
  intro: "Pãozinho sem fermento biológico, de massa amanteigada, que vai do pote ao forno sem esperar crescer.",
  tempo: 35, nivel: "Fácil", rende: "12 pãezinhos", tags: ["Forno", "Rápido", "Café da tarde"],
  ingredientes: ["300 g de farinha de trigo", "60 g de açúcar", "12 g de fermento químico (1 colher de sopa)", "3 g de sal", "60 g de manteiga gelada em cubos", "1 ovo", "120 g de leite", "1 gema para pincelar"],
  passos: [{ t: "Preaqueça o forno a 200 °C. Misture a farinha, o açúcar, o fermento e o sal. Junte a manteiga e esfarele com as pontas dos dedos até virar uma farofa." },
    { t: "Junte o ovo e o leite e misture só até formar uma massa macia. Não sove." },
    { t: "Faça 12 bolinhas, arrume na assadeira, pincele a gema." },
    { t: "Asse por 18 a 20 minutos, até dourar.", timer: 20 }],
  dica: "Manteiga gelada e massa pouco mexida são o que deixa o pão de minuto fofo. Quanto menos mexer, melhor.",
  aviso: av("trigo", "leite", "ovo") });

P({ id: "pq-iogurte-forma", sec: S, emoji: "🥣", nome: "Pão de iogurte de forma sem sova",
  intro: "Massa de colher que vai para a forma: fica com miolo de pão e casca dourada, sem sovar nada.",
  tempo: 110, nivel: "Fácil", rende: "1 pão de forma (12 fatias)", tags: ["Forno", "Sem sova"],
  ingredientes: ["170 g de iogurte natural", "150 g de água morna", "30 g de azeite", "20 g de mel ou açúcar", "7 g de fermento biológico seco", "7 g de sal", "420 g de farinha de trigo", "Sementes para o topo (opcional)"],
  passos: [{ t: "Misture o iogurte, a água, o azeite, o mel e o fermento. Junte a farinha e o sal e mexa com colher por 2 minutos, até a massa ficar lisa e grudenta." },
    FORMA(), { t: "Espalhe na forma com a colher untada e polvilhe as sementes." },
    CRESCE(60, "chegar à borda da forma"), FORNO(190, 35), ESFRIA],
  aviso: av("trigo", "leite") });

/* ======================= INTEGRAIS E COM GRÃOS (8) ======================= */
S = "Integrais e com grãos";
P({ id: "pq-integral", sec: S, emoji: "🌾", nome: "Pão 100% integral macio",
  intro: "Só farinha integral e mesmo assim macio: o descanso antes de sovar hidrata o farelo e deixa o miolo leve.",
  tempo: 200, nivel: "Médio", rende: "1 pão de forma (14 fatias)", tags: ["Forno", "Integral", "Sanduíche"],
  ingredientes: ["500 g de farinha de trigo integral", "380 g de água morna", "30 g de mel", "30 g de azeite", "7 g de fermento biológico seco", "10 g de sal"],
  passos: [{ t: "Misture a farinha integral com 350 g da água até não ter farinha seca. Cubra e deixe descansar 30 minutos: o farelo absorve a água e a massa fica mais fácil de trabalhar.", timer: 30 },
    { t: "Junte o restante da água com o mel, o azeite e o fermento dissolvidos, e por último o sal." },
    SOVA(10), CRESCE(75),
    { t: "Modele um rocambole apertado e coloque na forma untada." },
    CRESCE(50, "passar 1 dedo da borda"), FORNO(190, 40), ESFRIA],
  dica: "Massa integral é mais pegajosa que a branca. Resista à vontade de pôr mais farinha: pão integral seco é pão integral duro.",
  aviso: av("trigo") });

P({ id: "pq-integral-mel", sec: S, emoji: "🍯", nome: "Pão integral com mel e aveia",
  intro: "Metade integral, metade branca: o equilíbrio entre o sabor do grão e a maciez. Com aveia por cima.",
  tempo: 180, nivel: "Fácil", rende: "1 pão de forma (16 fatias)", tags: ["Forno", "Integral", "Café da manhã"],
  ingredientes: ["250 g de farinha de trigo integral", "250 g de farinha de trigo", "40 g de aveia em flocos (+ um pouco para o topo)", "7 g de fermento biológico seco", "40 g de mel", "10 g de sal", "320 g de leite morno (ou água)", "30 g de óleo"],
  passos: [{ t: "Misture as farinhas, a aveia e o fermento. Junte o leite, o mel e o óleo, misture e acrescente o sal." },
    SOVA(10), CRESCE(60),
    { t: "Modele um rocambole, pincele com água e role sobre aveia em flocos. Coloque na forma untada." },
    CRESCE(45), FORNO(180, 38), ESFRIA],
  aviso: av("trigo", "aveia", "leite") });

P({ id: "pq-multigraos", sec: S, emoji: "🌻", nome: "Pão multigrãos com sementes",
  intro: "Linhaça, girassol, gergelim e chia hidratados antes: crocância em cada fatia sem quebrar os dentes.",
  tempo: 200, nivel: "Médio", rende: "1 pão de forma (16 fatias)", tags: ["Forno", "Integral", "Sementes"],
  ingredientes: ["60 g de mix de sementes (linhaça, girassol, gergelim, chia)", "60 g de água fervente (para as sementes)", "250 g de farinha de trigo integral", "250 g de farinha de trigo", "7 g de fermento biológico seco", "20 g de mel", "10 g de sal", "310 g de água morna", "25 g de azeite"],
  passos: [{ t: "Cubra as sementes com a água fervente e deixe 20 minutos: elas incham e não roubam água da massa.", timer: 20 },
    { t: "Misture as farinhas e o fermento, junte a água morna, o mel, o azeite e as sementes hidratadas. Acrescente o sal." },
    SOVA(10), CRESCE(70),
    { t: "Modele um rocambole e coloque na forma untada. Pincele água e jogue mais sementes por cima." },
    CRESCE(50), FORNO(190, 40), ESFRIA],
  aviso: av("trigo", "gergelim") });

P({ id: "pq-aveia", sec: S, emoji: "🥣", nome: "Pão de aveia",
  intro: "Miolo úmido e levemente adocicado com bastante aveia na massa. Rende torradas ótimas.",
  tempo: 180, nivel: "Fácil", rende: "1 pão de forma (14 fatias)", tags: ["Forno", "Café da manhã"],
  ingredientes: ["100 g de aveia em flocos", "200 g de leite fervente", "350 g de farinha de trigo", "7 g de fermento biológico seco", "30 g de açúcar mascavo", "8 g de sal", "100 g de água morna", "30 g de óleo"],
  passos: [{ t: "Despeje o leite fervente sobre a aveia, misture e deixe amornar (20 minutos).", timer: 20 },
    { t: "Junte a farinha, o fermento, o açúcar, a água e o óleo. Acrescente o sal." },
    SOVA(8), CRESCE(60),
    { t: "Modele e coloque na forma untada. Polvilhe aveia por cima." },
    CRESCE(45), FORNO(180, 35), ESFRIA],
  aviso: av("trigo", "aveia", "leite") });

P({ id: "pq-centeio", sec: S, emoji: "🌑", nome: "Pão de centeio misto",
  intro: "Sabor mais intenso e miolo escuro, com cominho opcional. Combina com queijo, pastas e conservas.",
  tempo: 210, nivel: "Médio", rende: "1 pão redondo (12 fatias)", tags: ["Forno", "Integral"],
  ingredientes: ["150 g de farinha de centeio", "300 g de farinha de trigo", "7 g de fermento biológico seco", "20 g de melado de cana ou açúcar mascavo", "9 g de sal", "300 g de água morna", "15 g de óleo", "5 g de sementes de cominho (opcional)"],
  passos: [{ t: "Misture as farinhas, o fermento e o cominho. Junte a água com o melado dissolvido e o óleo, depois o sal." },
    SOVA(8), { t: "Massa com centeio fica mais pegajosa e menos elástica que a de trigo: é normal. Sove com as mãos levemente molhadas." },
    CRESCE(75),
    { t: "Modele uma bola, coloque na assadeira polvilhada com farinha e faça cortes em xadrez por cima." },
    CRESCE(50), FORNO(200, 40), ESFRIA],
  aviso: av("trigo") });

P({ id: "pq-linhaca", sec: S, emoji: "🟤", nome: "Pão integral de linhaça",
  intro: "Linhaça dourada moída na massa e inteira por cima. Fatia firme, boa para sanduíche que vai na marmita.",
  tempo: 190, nivel: "Fácil", rende: "1 pão de forma (16 fatias)", tags: ["Forno", "Integral", "Sanduíche"],
  ingredientes: ["300 g de farinha de trigo integral", "200 g de farinha de trigo", "40 g de linhaça dourada moída", "20 g de linhaça inteira (topo)", "7 g de fermento biológico seco", "20 g de açúcar mascavo", "10 g de sal", "350 g de água morna", "25 g de azeite"],
  passos: [{ t: "Misture as farinhas, a linhaça moída, o fermento e o açúcar. Junte a água e o azeite, depois o sal." },
    SOVA(10), CRESCE(70),
    { t: "Modele, pincele com água, passe na linhaça inteira e coloque na forma." },
    CRESCE(45), FORNO(190, 38), ESFRIA],
  aviso: av("trigo") });

P({ id: "pq-abobora", sec: S, emoji: "🎃", nome: "Pão de abóbora integral",
  intro: "Abóbora cabotiá assada no lugar de parte do líquido: cor dourada, miolo úmido e um adocicado natural.",
  tempo: 200, nivel: "Fácil", rende: "12 pãezinhos", tags: ["Forno", "Integral", "Lanche"],
  ingredientes: ["250 g de abóbora cabotiá cozida ou assada e amassada", "250 g de farinha de trigo integral", "200 g de farinha de trigo", "7 g de fermento biológico seco", "30 g de açúcar mascavo", "9 g de sal", "120 g de água morna", "30 g de azeite", "Sementes de abóbora para o topo"],
  passos: [{ t: "Misture as farinhas, o fermento e o açúcar. Junte a abóbora fria, a água e o azeite. Acrescente o sal." },
    SOVA(10), CRESCE(60),
    { t: "Divida em 12 bolinhas, pincele água e coloque uma semente de abóbora em cada. Arrume na assadeira untada." },
    CRESCE(40), FORNO(190, 22), ESFRIA],
  dica: "Abóbora mais aguada pede mais farinha. Ajuste de colher em colher até a massa soltar das mãos.",
  aviso: av("trigo") });

P({ id: "pq-integral-forma-rapido", sec: S, emoji: "🍞", nome: "Pão integral de forma com 1 crescimento",
  intro: "Integral para a semana em menos de 2 horas: a massa cresce uma vez só, já na forma.",
  tempo: 110, nivel: "Fácil", rende: "1 pão de forma (14 fatias)", tags: ["Forno", "Integral", "Rápido"],
  ingredientes: ["300 g de farinha de trigo integral", "150 g de farinha de trigo", "10 g de fermento biológico seco", "25 g de mel", "9 g de sal", "340 g de água morna", "30 g de azeite"],
  passos: [{ t: "Misture tudo, deixando o sal por último, e sove por 8 minutos (é uma massa macia)." },
    { t: "Modele um rocambole e coloque direto na forma untada." },
    CRESCE(50, "passar a borda da forma"), FORNO(190, 35), ESFRIA],
  aviso: av("trigo") });

/* ======================= SEM GLÚTEN E SEM LACTOSE (8) ======================= */
S = "Sem glúten e sem lactose";
P({ id: "pq-sg-forma", sec: S, emoji: "🍞", nome: "Pão de forma sem glúten com psyllium",
  intro: "Fatia que dobra sem quebrar. O psyllium faz o papel do glúten e segura o miolo.",
  tempo: 150, nivel: "Médio", rende: "1 pão de forma (14 fatias)", tags: ["Forno", "Sem glúten", "Sem lactose"],
  ingredientes: ["20 g de psyllium em pó", "420 g de água morna", "200 g de farinha de arroz", "100 g de fécula de batata", "50 g de polvilho doce", "7 g de fermento biológico seco", "20 g de açúcar", "8 g de sal", "2 ovos", "40 g de azeite", "5 g de vinagre de maçã"],
  passos: [{ t: "Misture o psyllium com a água morna e espere 5 minutos, até virar um gel.", timer: 5 },
    { t: "Numa tigela, misture as farinhas, o polvilho, o fermento e o açúcar. Junte o gel de psyllium, os ovos, o azeite, o vinagre e o sal." },
    { t: "Bata com batedeira ou colher por 4 minutos: a massa fica como um purê grosso e brilhante.", timer: 4 },
    FORMA(), { t: "Despeje na forma e alise a superfície com uma espátula molhada." },
    CRESCE(50, "crescer cerca de 1/3"), FORNO(190, 50, "cobrindo com papel-alumínio nos últimos 15 minutos se dourar demais"), ESFRIA_SG],
  dica: "Psyllium em pó (não em casca) é essencial aqui. Em casca, a massa não liga do mesmo jeito.",
  aviso: av("sgsl", "ovo") });

P({ id: "pq-sg-frigideira", sec: S, emoji: "🍳", nome: "Pão de frigideira sem glúten",
  intro: "Disco macio de tapioca e ovo, dourado na frigideira. Faz as vezes de pão de hambúrguer ou de torrada.",
  tempo: 15, nivel: "Fácil", rende: "2 pães", tags: ["Frigideira", "Sem glúten", "Rápido"],
  ingredientes: ["2 ovos", "30 g de goma de tapioca", "20 g de farinha de arroz", "30 g de iogurte vegetal ou água", "3 g de fermento químico", "1 pitada de sal", "Azeite para a frigideira"],
  passos: [{ t: "Bata os ovos com garfo, junte a tapioca, a farinha de arroz, o iogurte e o sal. Por último, o fermento." },
    { t: "Aqueça uma frigideira pequena com um fio de azeite em fogo baixo. Despeje metade da massa, tampe e cozinhe 3 minutos. Vire e doure mais 2 minutos.", timer: 5 },
    { t: "Repita com o restante." }],
  aviso: av("sgsl", "ovo") });

P({ id: "pq-mandioca", sec: S, emoji: "🌿", nome: "Pão de mandioca",
  intro: "Mandioca cozida e polvilho: casquinha crocante e miolo elástico, sem glúten e sem leite.",
  tempo: 60, nivel: "Fácil", rende: "15 pãezinhos", tags: ["Forno", "Sem glúten", "Sem lactose"],
  ingredientes: ["300 g de mandioca cozida e espremida ainda quente", "200 g de polvilho azedo", "100 g de polvilho doce", "1 ovo", "60 g de azeite", "6 g de sal", "80 a 120 g de água"],
  passos: [{ t: "Preaqueça o forno a 200 °C. Misture a mandioca espremida, os polvilhos, o ovo, o azeite e o sal." },
    { t: "Junte a água aos poucos e amasse até virar uma massa que não gruda nas mãos levemente untadas." },
    { t: "Faça bolinhas do tamanho de uma noz grande e arrume na assadeira com espaço entre elas." },
    { t: "Asse por 25 a 30 minutos, até dourar e firmar.", timer: 30 }],
  aviso: av("sgsl", "ovo") });

P({ id: "pq-grao-bico", sec: S, emoji: "🫘", nome: "Pão de grão-de-bico",
  intro: "Feito com farinha de grão-de-bico, mais proteína e sabor marcante. Fica ótimo com ervas e azeitona.",
  tempo: 60, nivel: "Fácil", rende: "1 pão de forma pequeno (10 fatias)", tags: ["Forno", "Sem glúten", "Sem lactose"],
  ingredientes: ["200 g de farinha de grão-de-bico", "50 g de fécula de batata", "3 ovos", "200 g de água", "40 g de azeite", "10 g de fermento químico", "5 g de sal", "Alecrim ou orégano a gosto", "40 g de azeitonas picadas (opcional)"],
  passos: [{ t: "Preaqueça o forno a 180 °C e unte uma forma pequena (20 x 10 cm)." },
    { t: "Bata os ovos com a água e o azeite. Junte a farinha de grão-de-bico, a fécula, o sal e as ervas e misture até ficar liso. Acrescente as azeitonas e por último o fermento." },
    { t: "Despeje na forma e asse por 40 minutos, até o palito sair limpo.", timer: 40 }, ESFRIA_SG],
  aviso: av("sgsl", "ovo") });

P({ id: "pq-batata-doce-sg", sec: S, emoji: "🍠", nome: "Pão de batata-doce sem glúten",
  intro: "Pãozinho macio, com batata-doce e polvilho, que dá para rechear como pão de hambúrguer.",
  tempo: 60, nivel: "Fácil", rende: "8 pães", tags: ["Forno", "Sem glúten", "Sem lactose"],
  ingredientes: ["250 g de batata-doce cozida e amassada", "150 g de polvilho doce", "50 g de farinha de arroz", "1 ovo", "40 g de azeite", "5 g de sal", "6 g de fermento químico", "Gergelim para o topo (opcional)"],
  passos: [{ t: "Preaqueça o forno a 190 °C. Misture a batata-doce, o polvilho, a farinha de arroz, o ovo, o azeite e o sal até virar uma massa lisa. Junte o fermento." },
    { t: "Divida em 8 bolinhas, achate levemente, pincele água e polvilhe gergelim." },
    { t: "Asse por 25 minutos, até dourar.", timer: 25 }],
  aviso: av("sgsl", "ovo", "gergelim") });

P({ id: "pq-quinoa", sec: S, emoji: "🌱", nome: "Pão de quinoa e chia",
  intro: "Pão de forma sem glúten com quinoa cozida na massa: miolo úmido, bastante textura e sem ovo.",
  tempo: 140, nivel: "Médio", rende: "1 pão de forma (12 fatias)", tags: ["Forno", "Sem glúten", "Sem lactose", "Sem ovo"],
  ingredientes: ["15 g de psyllium em pó", "20 g de chia", "380 g de água morna", "150 g de quinoa cozida e fria", "180 g de farinha de arroz", "80 g de fécula de batata", "7 g de fermento biológico seco", "15 g de açúcar mascavo", "7 g de sal", "30 g de azeite"],
  passos: [{ t: "Misture o psyllium e a chia com a água morna e espere 10 minutos, até formar um gel.", timer: 10 },
    { t: "Junte a farinha de arroz, a fécula, o fermento e o açúcar. Acrescente a quinoa, o azeite e o sal. Bata com colher por 3 minutos." },
    FORMA(), { t: "Despeje e alise com espátula molhada." },
    CRESCE(50, "crescer cerca de 1/3"), FORNO(190, 55), ESFRIA_SG],
  aviso: av("sgsl") });

P({ id: "pq-aveia-sg", sec: S, emoji: "🥣", nome: "Pão de aveia sem glúten de liquidificador",
  intro: "Feito com aveia certificada sem glúten, batido no liquidificador. Macio e com cara de pão de padaria.",
  tempo: 60, nivel: "Fácil", rende: "1 pão de forma pequeno (10 fatias)", tags: ["Liquidificador", "Forno", "Sem glúten"],
  ingredientes: ["200 g de aveia em flocos certificada sem glúten", "3 ovos", "200 g de água ou bebida vegetal", "40 g de azeite", "5 g de sal", "10 g de fermento químico", "Sementes para o topo"],
  passos: [{ t: "Preaqueça o forno a 180 °C e unte uma forma pequena." },
    { t: "Bata no liquidificador a aveia, os ovos, a água, o azeite e o sal por 2 minutos. Junte o fermento e pulse 3 vezes." },
    { t: "Despeje na forma, polvilhe as sementes e asse por 40 minutos.", timer: 40 }, ESFRIA_SG],
  aviso: av("sgsl", "ovo", "aveia") });

P({ id: "pq-broa-sg", sec: S, emoji: "🌽", nome: "Broa de fubá sem glúten e sem leite",
  intro: "Broa de padaria mineira com bebida vegetal e óleo: fofinha, perfumada de erva-doce.",
  tempo: 50, nivel: "Fácil", rende: "12 broinhas", tags: ["Forno", "Sem glúten", "Sem lactose", "Café da tarde"],
  ingredientes: ["200 g de fubá mimoso", "100 g de polvilho doce", "100 g de açúcar", "3 ovos", "100 g de óleo", "200 g de bebida vegetal morna", "10 g de fermento químico", "1 colher de chá de erva-doce", "1 pitada de sal"],
  passos: [{ t: "Preaqueça o forno a 180 °C. Bata os ovos com o açúcar até clarear, junte o óleo e a bebida vegetal." },
    { t: "Acrescente o fubá, o polvilho, a erva-doce e o sal. Por último, o fermento." },
    { t: "Distribua em forminhas de muffin untadas (3/4 da altura) e polvilhe fubá por cima." },
    { t: "Asse por 25 minutos, até dourar e o palito sair limpo.", timer: 25 }],
  aviso: av("sgsl", "ovo") });

/* ======================= FIT E PROTEICOS (8) ======================= */
S = "Fit e proteicos";
P({ id: "pq-nuvem", sec: S, emoji: "☁️", nome: "Pão nuvem",
  intro: "Feito só com ovos e cream cheese: leve, sem farinha e pronto em 30 minutos.",
  tempo: 35, nivel: "Médio", rende: "6 pães", tags: ["Forno", "Sem farinha", "Low carb"],
  ingredientes: ["3 ovos separados (claras e gemas)", "60 g de cream cheese em temperatura ambiente", "1 g de cremor tártaro ou 3 gotas de limão", "1 pitada de sal", "Orégano ou gergelim para o topo"],
  passos: [{ t: "Preaqueça o forno a 150 °C e forre uma assadeira com papel-manteiga." },
    { t: "Bata as gemas com o cream cheese e o sal até ficar liso. À parte, bata as claras com o cremor tártaro em neve firme." },
    { t: "Incorpore as claras às gemas com espátula, em 3 vezes, de baixo para cima, sem bater." },
    { t: "Faça 6 discos de 10 cm com uma colher grande, polvilhe o orégano e asse por 25 minutos, até dourar.", timer: 25 },
    { t: "Espere esfriar na assadeira: fica mais firme e fácil de soltar." }],
  dica: "Guardado em pote fechado na geladeira, fica mais macio no dia seguinte.",
  aviso: av("ovo", "leite") });

P({ id: "pq-amendoas", sec: S, emoji: "🌰", nome: "Pão de farinha de amêndoas",
  intro: "Sem farinha de trigo, com bastante amêndoa e ovo. Fatia densa e saborosa, ótima tostada.",
  tempo: 55, nivel: "Fácil", rende: "1 pão de forma pequeno (10 fatias)", tags: ["Forno", "Sem glúten", "Low carb"],
  ingredientes: ["200 g de farinha de amêndoas", "20 g de psyllium em pó", "4 ovos", "60 g de azeite", "100 g de água", "10 g de fermento químico", "4 g de sal", "10 g de vinagre de maçã"],
  passos: [{ t: "Preaqueça o forno a 180 °C e forre uma forma pequena com papel-manteiga." },
    { t: "Misture a farinha de amêndoas, o psyllium, o sal e o fermento. Junte os ovos, o azeite, a água e o vinagre e misture até ficar homogêneo." },
    { t: "Deixe a massa descansar 5 minutos para engrossar, coloque na forma e asse por 40 minutos.", timer: 40 }, ESFRIA_SG],
  aviso: av("castanha", "ovo") });

P({ id: "pq-cottage", sec: S, emoji: "🧀", nome: "Pão proteico de cottage",
  intro: "Cottage, ovos e aveia batidos: pão de forma com mais proteína para o café da manhã.",
  tempo: 55, nivel: "Fácil", rende: "1 pão de forma pequeno (10 fatias)", tags: ["Liquidificador", "Forno", "Proteico"],
  ingredientes: ["200 g de queijo cottage", "4 ovos", "160 g de farinha de aveia", "10 g de fermento químico", "4 g de sal", "Ervas a gosto"],
  passos: [{ t: "Preaqueça o forno a 180 °C e unte uma forma pequena." },
    { t: "Bata o cottage com os ovos no liquidificador até ficar liso. Junte a farinha de aveia, o sal e as ervas e bata mais um pouco. Misture o fermento com colher." },
    { t: "Asse por 40 minutos, até o palito sair limpo.", timer: 40 }, ESFRIA],
  aviso: av("leite", "ovo", "aveia") });

P({ id: "pq-linhaca-lowcarb", sec: S, emoji: "🟫", nome: "Pão low carb de linhaça e coco",
  intro: "Farinha de linhaça e de coco com ovos: miolo escuro, macio e sem amido.",
  tempo: 45, nivel: "Fácil", rende: "1 pão de forma pequeno (10 fatias)", tags: ["Forno", "Low carb", "Sem glúten"],
  ingredientes: ["100 g de farinha de linhaça dourada", "40 g de farinha de coco", "5 ovos", "60 g de óleo de coco derretido", "80 g de água", "8 g de fermento químico", "4 g de sal"],
  passos: [{ t: "Preaqueça o forno a 180 °C e forre uma forma pequena." },
    { t: "Bata os ovos com o óleo e a água. Junte as farinhas e o sal e misture bem. Descanse 5 minutos (a farinha de coco absorve muito líquido) e junte o fermento." },
    { t: "Asse por 35 minutos.", timer: 35 }, ESFRIA_SG],
  aviso: av("ovo") });

P({ id: "pq-abobrinha", sec: S, emoji: "🥒", nome: "Pão de abobrinha e queijo",
  intro: "Abobrinha ralada e parmesão numa massa leve de forma. Salgado, úmido e cheio de sabor.",
  tempo: 60, nivel: "Fácil", rende: "1 pão de forma (12 fatias)", tags: ["Forno", "Legumes", "Lanche"],
  ingredientes: ["300 g de abobrinha ralada e bem espremida", "3 ovos", "60 g de azeite", "60 g de parmesão ralado", "200 g de farinha de trigo integral", "10 g de fermento químico", "5 g de sal", "Pimenta-do-reino a gosto"],
  passos: [{ t: "Preaqueça o forno a 180 °C. Esprema bem a abobrinha num pano para tirar a água." },
    { t: "Bata os ovos com o azeite, junte a abobrinha, o parmesão, a farinha, o sal e a pimenta. Por último, o fermento." },
    { t: "Coloque na forma untada e asse por 45 minutos.", timer: 45 }, ESFRIA],
  aviso: av("trigo", "leite", "ovo") });

P({ id: "pq-iogurte-aveia", sec: S, emoji: "💪", nome: "Pão proteico de iogurte e aveia",
  intro: "Pãozinho de iogurte grego e aveia que fica pronto em 30 minutos. Bom para o pré-treino.",
  tempo: 30, nivel: "Fácil", rende: "6 pãezinhos", tags: ["Forno", "Airfryer", "Proteico", "Rápido"],
  ingredientes: ["170 g de iogurte grego natural", "1 ovo", "150 g de farinha de aveia", "5 g de fermento químico", "3 g de sal"],
  passos: [{ t: "Preaqueça o forno a 200 °C (ou a airfryer a 180 °C)." },
    { t: "Misture o iogurte e o ovo, junte a farinha de aveia e o sal e depois o fermento. Com as mãos úmidas, faça 6 bolinhas." },
    { t: "Asse por 18 a 20 minutos no forno (ou 12 a 14 na airfryer), até dourar.", timer: 20 }],
  aviso: av("leite", "ovo", "aveia") });

P({ id: "pq-ovo-frigideira", sec: S, emoji: "🥚", nome: "Pão de ovo de frigideira",
  intro: "O \"pão\" de 2 minutos para quem quer um sanduíche sem farinha: ovo, queijo e um toque de aveia.",
  tempo: 8, nivel: "Fácil", rende: "1 sanduíche", tags: ["Frigideira", "Rápido", "Low carb"],
  ingredientes: ["2 ovos", "20 g de queijo muçarela ralado", "10 g de farelo de aveia", "1 pitada de sal", "Orégano"],
  passos: [{ t: "Bata tudo com garfo." },
    { t: "Aqueça uma frigideira pequena untada em fogo baixo, despeje e tampe. Cozinhe 3 minutos, vire e doure mais 1 minuto.", timer: 4 },
    { t: "Corte ao meio e use como as duas fatias do sanduíche." }],
  aviso: av("ovo", "leite", "aveia") });

P({ id: "pq-coco-psyllium", sec: S, emoji: "🥥", nome: "Pãozinho de coco e psyllium",
  intro: "Pãozinho de \"padaria\" low carb, com casquinha e miolo aerado, sem trigo e sem amido.",
  tempo: 60, nivel: "Médio", rende: "6 pãezinhos", tags: ["Forno", "Low carb", "Sem glúten"],
  ingredientes: ["100 g de farinha de amêndoas", "30 g de farinha de coco", "25 g de psyllium em pó", "8 g de fermento químico", "4 g de sal", "3 claras", "10 g de vinagre de maçã", "200 g de água fervente"],
  passos: [{ t: "Preaqueça o forno a 180 °C. Misture as farinhas, o psyllium, o fermento e o sal." },
    { t: "Junte as claras e o vinagre e misture. Despeje a água fervente e mexa até virar uma massa firme e moldável." },
    { t: "Com as mãos molhadas, faça 6 bolinhas e coloque na assadeira com papel-manteiga." },
    { t: "Asse por 50 minutos, até soar oco ao bater embaixo.", timer: 50 }],
  aviso: av("castanha", "ovo") });

/* ======================= FOCACCIAS E RÚSTICOS (8) ======================= */
S = "Focaccias e rústicos";
P({ id: "pq-focaccia-cebola", sec: S, emoji: "🧅", nome: "Focaccia de cebola roxa",
  intro: "Alta, aerada e cheia de azeite, com cebola roxa que carameliza no forno. Massa sem sova, de dobras.",
  tempo: 240, nivel: "Fácil", rende: "1 assadeira de 30 x 20 cm (12 pedaços)", tags: ["Forno", "Sem sova", "Petisco"],
  ingredientes: ["500 g de farinha de trigo", "400 g de água", "5 g de fermento biológico seco", "10 g de sal", "60 g de azeite (dividido)", "1 cebola roxa em fatias", "Sal grosso e alecrim"],
  passos: [{ t: "Misture a farinha, a água e o fermento com uma colher. Junte o sal e mexa até não ter farinha seca. É uma massa bem mole." },
    { t: "Faça 4 séries de dobras, com 20 minutos entre elas: com a mão molhada, puxe uma borda da massa para cima e dobre sobre ela mesma, girando a tigela. 4 dobras por série.", timer: 80 },
    CRESCE(60),
    { t: "Despeje 30 g de azeite na assadeira, coloque a massa e vire para untar dos dois lados. Deixe descansar 30 minutos e espalhe até os cantos com os dedos.", timer: 30 },
    { t: "Afunde os dedos na massa toda, formando covinhas. Espalhe a cebola, o alecrim, o sal grosso e o resto do azeite." },
    FORNO(220, 25)],
  dica: "As covinhas seguram o azeite e evitam que a focaccia infle como um pão comum.",
  aviso: av("trigo") });

P({ id: "pq-focaccia-batata", sec: S, emoji: "🥔", nome: "Focaccia de batata e alecrim",
  intro: "Lâminas finas de batata que ficam crocantes por cima de uma massa macia. Vira refeição com uma salada.",
  tempo: 240, nivel: "Fácil", rende: "1 assadeira de 30 x 20 cm (12 pedaços)", tags: ["Forno", "Sem sova"],
  ingredientes: ["500 g de farinha de trigo", "400 g de água", "5 g de fermento biológico seco", "10 g de sal", "60 g de azeite", "2 batatas pequenas em lâminas bem finas", "Alecrim, alho picado e sal grosso"],
  passos: [{ t: "Prepare a massa como na focaccia de cebola: misture, faça 4 séries de dobras a cada 20 minutos e deixe crescer 1 hora.", timer: 140 },
    { t: "Passe para a assadeira com azeite, descanse 30 minutos e abra até os cantos. Faça as covinhas.", timer: 30 },
    { t: "Misture as lâminas de batata com azeite, alho, alecrim e sal e distribua por cima, levemente sobrepostas." },
    FORNO(220, 30)],
  aviso: av("trigo") });

P({ id: "pq-rustico-geladeira", sec: S, emoji: "🥖", nome: "Pão rústico de fermentação na geladeira",
  intro: "Pouco fermento e muito tempo: a massa descansa na geladeira e ganha sabor de pão artesanal, sem fermento natural.",
  tempo: 1080, nivel: "Médio", rende: "1 pão redondo (10 fatias)", tags: ["Forno", "Fermentação longa", "Sem sova"],
  ingredientes: ["400 g de farinha de trigo", "100 g de farinha de trigo integral", "375 g de água", "2 g de fermento biológico seco", "10 g de sal"],
  passos: [{ t: "Misture as farinhas e a água e descanse 30 minutos. Junte o fermento e o sal e aperte a massa com as mãos até incorporar.", timer: 30 },
    { t: "Faça 4 séries de dobras com 30 minutos entre elas." },
    { t: "Modele uma bola apertada, coloque numa tigela forrada com pano enfarinhado, cubra e leve à geladeira por 12 a 16 horas." },
    { t: "Preaqueça o forno com uma panela tampada dentro a 240 °C por 40 minutos. Vire o pão gelado sobre papel-manteiga, faça um corte e coloque na panela." },
    { t: "Asse 25 minutos tampado e mais 20 destampado.", timer: 45 }, ESFRIA],
  dica: "O pão vai direto da geladeira para o forno: a massa fria mantém a forma e abre melhor o corte.",
  aviso: av("trigo") });

P({ id: "pq-italiano", sec: S, emoji: "🇮🇹", nome: "Pão italiano",
  intro: "Casca grossa, miolo com buracos irregulares e aquele aroma de padaria. Feito com uma esponja na véspera.",
  tempo: 960, nivel: "Médio", rende: "1 pão grande (12 fatias)", tags: ["Forno", "Fermentação longa"],
  ingredientes: ["Esponja: 150 g de farinha de trigo, 150 g de água, 1 g de fermento biológico seco", "Massa: 350 g de farinha de trigo, 200 g de água, 3 g de fermento biológico seco, 11 g de sal"],
  passos: [{ t: "Na véspera, misture os ingredientes da esponja, cubra e deixe 12 horas fora da geladeira (ou até borbulhar)." },
    { t: "No dia, junte a esponja com a farinha, a água e o fermento da massa. Descanse 20 minutos, junte o sal e sove por 8 minutos.", timer: 20 },
    CRESCE(90),
    { t: "Modele uma bola apertada e deixe crescer sobre papel-manteiga polvilhado, coberta, por cerca de 50 minutos.", timer: 50 },
    { t: "Preaqueça o forno a 240 °C com uma assadeira vazia embaixo. Faça os cortes, coloque o pão e jogue 1 copo de água fervente na assadeira de baixo." },
    { t: "Asse 15 minutos com vapor e mais 25 minutos a 220 °C, até ficar bem escuro.", timer: 40 }, ESFRIA],
  aviso: av("trigo") });

P({ id: "pq-azeitona", sec: S, emoji: "🫒", nome: "Filão de azeitona e orégano",
  intro: "Pão comprido, de casca dourada, com azeitona em toda fatia. Para tábua de frios e para acompanhar sopa.",
  tempo: 180, nivel: "Fácil", rende: "2 filões", tags: ["Forno", "Petisco"],
  ingredientes: ["500 g de farinha de trigo", "7 g de fermento biológico seco", "10 g de açúcar", "8 g de sal", "300 g de água morna", "30 g de azeite", "120 g de azeitonas sem caroço picadas e secas no papel", "5 g de orégano"],
  passos: [ATIVA, { t: "Junte a água e o azeite, depois o sal e o orégano." },
    SOVA(8), { t: "Abra a massa e espalhe as azeitonas. Dobre e amasse por 1 minuto para distribuir." },
    CRESCE(60),
    { t: "Divida em 2, modele filões compridos e coloque na assadeira. Faça cortes diagonais." },
    CRESCE(40), FORNO(200, 30), ESFRIA],
  aviso: av("trigo") });

P({ id: "pq-australiano", sec: S, emoji: "🍫", nome: "Pão australiano",
  intro: "O pão escuro de restaurante, de cacau e melado, levemente adocicado. Com manteiga é difícil parar.",
  tempo: 170, nivel: "Fácil", rende: "4 filõezinhos", tags: ["Forno", "Café da tarde"],
  ingredientes: ["250 g de farinha de trigo", "150 g de farinha de centeio ou integral", "15 g de cacau em pó", "10 g de café solúvel", "7 g de fermento biológico seco", "60 g de melado de cana", "8 g de sal", "230 g de água morna", "30 g de manteiga", "Fubá para polvilhar"],
  passos: [{ t: "Dissolva o café e o melado na água morna. Misture as farinhas, o cacau e o fermento, junte o líquido e depois o sal e a manteiga." },
    SOVA(10), CRESCE(60),
    { t: "Divida em 4, modele filões pequenos e role cada um no fubá. Coloque na assadeira." },
    CRESCE(40), FORNO(180, 25), ESFRIA],
  aviso: av("trigo", "leite") });

P({ id: "pq-ervas", sec: S, emoji: "🌿", nome: "Pão de ervas trançado",
  intro: "Massa macia recheada com manteiga de ervas e alho, trançada: bonito na mesa, puxa em gomos.",
  tempo: 190, nivel: "Médio", rende: "1 trança grande (12 pedaços)", tags: ["Forno", "Para receber"],
  ingredientes: ["500 g de farinha de trigo", "7 g de fermento biológico seco", "20 g de açúcar", "9 g de sal", "280 g de leite morno", "1 ovo", "40 g de manteiga", "Recheio: 60 g de manteiga mole, 2 dentes de alho ralados, salsinha, cebolinha e orégano picados"],
  passos: [ATIVA, { t: "Junte o leite, o ovo, o sal e a manteiga." },
    SOVA(10), CRESCE(60),
    { t: "Abra a massa num retângulo de 40 x 30 cm e espalhe a manteiga de ervas. Enrole pelo lado comprido." },
    { t: "Corte o rolo ao meio no comprimento, deixando 2 cm unidos numa ponta. Torça uma metade sobre a outra com o corte para cima e una as pontas." },
    CRESCE(40), FORNO(180, 30), ESFRIA],
  aviso: av("trigo", "leite", "ovo") });

P({ id: "pq-cerveja", sec: S, emoji: "🍺", nome: "Pão de cerveja e queijo",
  intro: "Sem fermento biológico: a cerveja e o fermento químico fazem o pão crescer. Casca crocante de queijo.",
  tempo: 60, nivel: "Fácil", rende: "1 pão de forma (10 fatias)", tags: ["Forno", "Rápido", "Sem sova"],
  ingredientes: ["400 g de farinha de trigo", "12 g de fermento químico", "20 g de açúcar", "6 g de sal", "350 g de cerveja em temperatura ambiente", "100 g de queijo cheddar ou muçarela ralado", "40 g de manteiga derretida"],
  passos: [{ t: "Preaqueça o forno a 190 °C e unte a forma." },
    { t: "Misture a farinha, o fermento, o açúcar, o sal e 2/3 do queijo. Junte a cerveja e mexa só até não ter farinha seca." },
    { t: "Despeje na forma, regue com a manteiga e cubra com o resto do queijo." },
    { t: "Asse por 45 minutos, até dourar e o palito sair limpo.", timer: 45 }, ESFRIA],
  dica: "Durante o forno, o álcool evapora quase todo, mas o pão ainda leva cerveja. Para uma versão sem álcool, use cerveja sem álcool.",
  aviso: av("trigo", "leite") });

/* ================= BÔNUS DO ESSENCIAL: 5 GUIAS ================= */
window.GUIAS.push(
  { id: "pq-guia-massa", produto: "pao", col: "pao", emoji: "📏", nome: "Guia da massa e do ponto",
    sub: "Fermento, água, sova, crescimento e forno: como saber que está certo",
    itens: [
      { n: "Pese tudo", t: "Pão é proporção. 1 xícara de farinha pode ter de 120 g a 150 g, dependendo de como você enche. Uma balança de cozinha resolve 80% dos pães que dão errado." },
      { n: "Fermento", t: "Fermento biológico seco instantâneo: 1 sachê = 10 g. Use de 1% a 2% do peso da farinha (5 a 10 g para 500 g).\nFermento fresco: use 3 vezes o peso do seco (10 g de seco = 30 g de fresco).\nO sal mata o fermento se encostar direto: misture o fermento com a farinha primeiro." },
      { n: "Temperatura da água", t: "Morna é como água de banho (até 37 °C). Água quente demais mata o fermento.\nNo verão, use água fria: a massa cresce mais devagar e não passa do ponto." },
      { n: "Sova e teste da membrana", t: "Sovar desenvolve o glúten. Ponto: massa lisa, elástica, que não gruda. Estique um pedaço: se formar uma película fina, translúcida, sem rasgar, está pronta." },
      { n: "Crescimento", t: "\"Dobrar de volume\" é o ponto, não o relógio. Em cozinha fria leva o dobro do tempo.\nTeste do dedo: aperte a massa com o dedo enfarinhado. Se a marca volta devagar e fica um pouco, está no ponto. Se volta rápido, espere mais. Se não volta, passou: asse logo." },
      { n: "Forno", t: "Sempre preaquecido (15 a 20 minutos). Pão de forma na grade do meio.\nPão pronto: casca dourada, som oco ao bater embaixo. Com termômetro, o miolo marca 92 a 96 °C." }
    ] },
  { id: "pq-guia-sos", produto: "pao", col: "pao", emoji: "🆘", nome: "SOS do pão",
    sub: "12 problemas comuns: a causa e como corrigir",
    itens: [
      { n: "1. Não cresceu", t: "Causa: fermento vencido, água quente demais ou sal direto no fermento.\nComo evitar: teste o fermento numa colher de água morna com açúcar (deve espumar em 10 minutos)." },
      { n: "2. Cresceu e murchou no forno", t: "Causa: passou do ponto de crescimento.\nComo evitar: use o teste do dedo e asse quando a marca volta devagar." },
      { n: "3. Ficou pesado e embatumado", t: "Causa: farinha a mais, sova curta ou pouco crescimento.\nComo evitar: pese a farinha, faça o teste da membrana e espere o volume dobrar." },
      { n: "4. Rachou de lado", t: "Causa: não fez corte ou cresceu pouco antes do forno.\nComo evitar: faça um corte decidido e espere o segundo crescimento." },
      { n: "5. Casca dura demais", t: "Causa: forno longo sem gordura na massa.\nComo evitar: pincele manteiga ao sair do forno e cubra com pano." },
      { n: "6. Miolo cru no centro", t: "Causa: forno quente demais por fora ou tirou cedo.\nComo evitar: abaixe 10 °C, asse mais tempo e confira o som oco." },
      { n: "7. Gosto forte de fermento", t: "Causa: fermento demais.\nComo evitar: use menos fermento e deixe crescer mais tempo." },
      { n: "8. Grudou na forma", t: "Causa: forma mal untada.\nComo evitar: unte e enfarinhe, ou use papel-manteiga." },
      { n: "9. Ficou achatado (pão redondo)", t: "Causa: modelagem frouxa.\nComo evitar: ao modelar, puxe a superfície para baixo até ficar esticada como um balão." },
      { n: "10. Sem glúten esfarelou", t: "Causa: pouco psyllium ou cortou quente.\nComo evitar: use psyllium em pó na quantidade da receita e espere 1 hora para cortar." },
      { n: "11. Frigideira: queimou fora, cru dentro", t: "Causa: fogo alto.\nComo evitar: fogo baixo e tampa." },
      { n: "12. Pão sírio não estufou", t: "Causa: frigideira fria ou disco grosso/furado.\nComo evitar: frigideira bem quente e disco fino e por igual." }
    ] },
  { id: "pq-guia-conservar", produto: "pao", col: "pao", emoji: "❄️", nome: "Congelar e conservar",
    sub: "Quanto dura, como congelar e como deixar o pão de ontem macio de novo",
    itens: [
      { n: "Quanto dura", t: "Pão caseiro sem conservante: 2 a 3 dias em saco fechado ou pote, fora da geladeira.\nNa geladeira o pão resseca mais rápido. Prefira congelar." },
      { n: "Congelar", t: "Espere esfriar totalmente, fatie, separe as fatias com papel-manteiga e congele em saco bem fechado. Dura 3 meses.\nPãezinhos: congele inteiros." },
      { n: "Descongelar", t: "Fatias: direto na torradeira, frigideira ou airfryer (2 a 3 minutos a 160 °C).\nPãezinhos: 5 minutos no forno a 180 °C ou 3 minutos na airfryer, como saídos da padaria." },
      { n: "Congelar a massa crua", t: "Depois do primeiro crescimento, modele, congele em assadeira e depois guarde em saco. Dura 1 mês.\nPara assar: deixe na geladeira de um dia para o outro, depois 1 a 2 horas fora até crescer, e asse." },
      { n: "Pão de ontem", t: "Borrife água na casca e leve 5 minutos ao forno a 180 °C: a casca volta crocante e o miolo amolece." }
    ] },
  { id: "pq-guia-sobras", produto: "pao", col: "pao", emoji: "♻️", nome: "Sobras que viram outra coisa",
    sub: "Torrada, crouton, farinha de rosca, rabanada salgada e pudim de pão",
    itens: [
      { n: "Torradas", t: "Fatias finas, pincele azeite, sal e ervas. Forno a 160 °C por 15 a 20 minutos, virando na metade, ou airfryer a 160 °C por 6 minutos." },
      { n: "Croutons", t: "Cubos de 2 cm com azeite, alho e orégano. Airfryer a 180 °C por 6 a 8 minutos, sacudindo. Guarde em pote fechado por 1 semana." },
      { n: "Farinha de rosca", t: "Pão bem seco (deixe 2 dias aberto) batido no liquidificador. Peneire e guarde em pote fechado." },
      { n: "Rabanada salgada de forno", t: "Fatias passadas em ovo batido com leite, sal e queijo ralado. Forno a 200 °C por 15 minutos." },
      { n: "Pudim de pão", t: "300 g de pão amanhecido, 500 ml de leite, 3 ovos, 100 g de açúcar e baunilha batidos. Forma caramelizada, banho-maria a 180 °C por 50 minutos." }
    ] },
  { id: "pq-guia-porcoes", produto: "pao", col: "pao", emoji: "⚖️", nome: "Porções e substituições",
    sub: "Como dobrar a receita e o que troca pelo quê",
    itens: [
      { n: "Dobrar ou reduzir", t: "Multiplique todos os ingredientes, inclusive o fermento. Para receitas muito grandes, o fermento pode ser 20% menor.\nMeia receita de pão de forma cabe numa forma de 20 x 10 cm." },
      { n: "Farinha integral", t: "Pode trocar até metade da farinha branca por integral sem mudar nada. Acima disso, acrescente 10% de água a mais e deixe a massa descansar 30 minutos antes de sovar." },
      { n: "Leite e manteiga", t: "Leite → água ou bebida vegetal (o pão fica menos macio). Manteiga → óleo ou azeite (use 80% do peso)." },
      { n: "Açúcar e mel", t: "Açúcar → mel ou melado, mesmo peso, tirando 10 g de água da receita. Em pão salgado, o açúcar pode ser zero; o crescimento só fica um pouco mais lento." },
      { n: "Ovo", t: "Em pão de massa sovada, o ovo pode ser trocado por 50 g de água + 10 g de óleo." },
      { n: "Fermento", t: "Biológico seco 10 g = fresco 30 g. Pães com fermento químico (soda, cerveja, minuto) não usam fermento biológico." }
    ] }
);

})();
