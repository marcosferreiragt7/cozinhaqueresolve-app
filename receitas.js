/* Conteúdo do app Cozinha que Resolve.
   Para acrescentar receitas, basta incluir um novo objeto na lista da coleção.
   Para uma coleção nova (ex.: "Doces", "Cardápios"), acrescente em COLECOES.
   tempo em minutos; timer em minutos (opcional) em cada passo. */

window.CONFIG = { premium: { ativo: false, api: "/api" } }; // liga a área do produto próprio

window.COLECOES = [
  { id: "paes", nome: "Pães", emoji: "🥖", cor: "#E5642A", capa: "img/capa-paes.webp",
    desc: "10 pães sem açúcar, sem glúten e sem lactose, de liquidificador, airfryer, frigideira e forno." },
  { id: "saladas", nome: "Saladas no pote", emoji: "🥗", cor: "#1D5A2C", capa: "img/capa-saladas.webp",
    desc: "5 saladas no pote para montar no domingo e comer durante a semana." }
];

/* Vitrine de produtos (afiliado). O link leva para a sua página de vendas com rastreio. */
/* Vitrine dos produtos (afiliado). Conteúdo conforme as páginas de vendas. */
window.VITRINE = {
  paes: {
    titulo: "300 Receitas sem açúcar, sem glúten e sem lactose",
    curto: "300 Receitas",
    sub: "Pães, doces, cafés da manhã e salgados para o ano inteiro",
    preco: "R$ 29,90", garantia: "15 dias de garantia",
    img: "img/vitrine-paes.webp",
    url: "https://paes.cozinhaqueresolve.com/",
    categorias: [
      { n: "Pães artesanais e focaccias", q: 100, img: "img/v/cat-paes.webp" },
      { n: "Sobremesas, bolos e tortas", q: 80, img: "img/v/cat-doces.webp" },
      { n: "Cafés da manhã e lanches", q: 70, img: "img/v/cat-cafes.webp" },
      { n: "Pizzas, salgados e petiscos", q: 50, img: "img/v/cat-salgados.webp" }
    ],
    bonus: [ { n: "8 guias bônus", d: "Bônus", img: "img/v/bonus-guias.webp" } ],
    itens: ["Medidas caseiras e passo a passo claro", "Ingredientes de mercado comum", "PDF para celular, tablet ou impressão", "Acesso vitalício, sem mensalidade"]
  },
  saladas: {
    titulo: "70 Saladas no Pote + Molhos",
    curto: "70 Saladas",
    sub: "Combinações completas com molho e ordem das camadas",
    preco: "R$ 29,90", garantia: "7 dias de garantia",
    img: "img/vitrine-saladas.webp",
    url: "https://saladas.cozinhaqueresolve.com/",
    categorias: [
      { n: "Caprese com pesto", q: null, img: "img/v/sal-caprese.webp" },
      { n: "Caesar com frango", q: null, img: "img/v/sal-caesar.webp" },
      { n: "e mais 68 combinações", q: null, img: "img/capa-saladas.webp" }
    ],
    bonus: [
      { n: "25 molhos e vinagretes", d: "Guia de molhos", img: "img/v/bonus-molhos.webp" },
      { n: "20 smoothies", d: "Bônus 1", img: "img/v/bonus-smoothies.webp" },
      { n: "5 shots matinais", d: "Bônus 2", img: "img/v/bonus-shots.webp" },
      { n: "15 águas saborizadas", d: "Bônus 3", img: "img/v/bonus-aguas.webp" }
    ],
    itens: ["Método das 5 camadas", "Molhos que não talham", "Passo a passo e tabela de calorias", "Funciona com qualquer pote"]
  }
};

window.RECEITAS = [
  /* ===================== PÃES ===================== */
  {
    id: "pao-liquidificador", foto: "img/r/pao-liquidificador.webp", col: "paes", nome: "Pão de liquidificador", emoji: "🍞",
    tags: ["Liquidificador", "Forno"], tempo: 70, rende: "1 forma de bolo inglês", nivel: "Fácil",
    intro: "O pão do dia a dia: bate tudo, descansa e vai ao forno. Miolo macio e casca fininha.",
    ingredientes: [
      "3 ovos",
      "1 xícara de água morna (240 ml)",
      "1/3 de xícara de óleo ou azeite",
      "1 colher de chá de sal",
      "1 e 1/2 xícara de farinha de arroz",
      "1/2 xícara de polvilho doce",
      "1 colher de sopa de psyllium",
      "1 sachê de fermento biológico seco (10 g)"
    ],
    passos: [
      { t: "Bata no liquidificador os ovos, a água morna, o óleo e o sal por 1 minuto." },
      { t: "Junte a farinha de arroz, o polvilho e o psyllium e bata até ficar uma massa lisa e grossa." },
      { t: "Acrescente o fermento e bata só mais alguns segundos, para misturar." },
      { t: "Despeje em forma de bolo inglês untada e polvilhada com farinha de arroz. Cubra e deixe crescer até quase dobrar.", timer: 40 },
      { t: "Asse em forno preaquecido a 200 °C até dourar e o palito sair seco.", timer: 35 },
      { t: "Espere amornar antes de desenformar e fatiar, assim o miolo não fica pesado.", timer: 15 }
    ],
    dica: "O psyllium é o que segura a massa no lugar do glúten. Não deixe de fora."
  },
  {
    id: "pao-queijo-liquidificador", foto: "img/r/pao-queijo-liquidificador.webp", col: "paes", nome: "Pão de queijo de liquidificador", emoji: "🧀",
    tags: ["Liquidificador", "Forno"], tempo: 35, rende: "cerca de 20 unidades", nivel: "Fácil",
    intro: "Sem sovar e sem escaldar: bate, coloca em forminhas e assa.",
    ingredientes: [
      "2 ovos",
      "1 xícara de leite vegetal sem açúcar",
      "1/2 xícara de óleo",
      "1 colher de chá de sal",
      "2 xícaras de polvilho azedo",
      "1 xícara de queijo meia cura sem lactose ralado"
    ],
    passos: [
      { t: "Bata os ovos, o leite vegetal, o óleo e o sal no liquidificador." },
      { t: "Junte o polvilho aos poucos e bata até ficar homogêneo." },
      { t: "Misture o queijo ralado com uma colher, sem bater." },
      { t: "Distribua em forminhas de empada ou de muffin pequenas, untadas, até 3/4 da altura." },
      { t: "Asse em forno preaquecido a 200 °C até crescer e dourar.", timer: 25 }
    ],
    dica: "Dá para deixar a massa pronta na geladeira de um dia para o outro. Mexa antes de usar."
  },
  {
    id: "pao-frigideira", foto: "img/r/pao-frigideira.webp", col: "paes", nome: "Pão de frigideira em 5 minutos", emoji: "🍳",
    tags: ["Frigideira", "Rápido"], tempo: 5, rende: "1 pão", nivel: "Fácil",
    intro: "Para o café com pressa: um ovo, um pouco de tapioca e a frigideira.",
    ingredientes: [
      "1 ovo",
      "2 colheres de sopa de goma de tapioca",
      "1 colher de sopa de água",
      "1 pitada de sal",
      "1/2 colher de chá de fermento químico",
      "Fio de azeite para a frigideira"
    ],
    passos: [
      { t: "Bata o ovo com um garfo e misture a tapioca, a água e o sal." },
      { t: "Acrescente o fermento e misture rapidamente." },
      { t: "Despeje em frigideira pequena untada, em fogo baixo, e tampe.", timer: 2 },
      { t: "Vire e deixe dourar do outro lado.", timer: 2 },
      { t: "Corte ao meio e recheie como quiser." }
    ],
    dica: "Tampar a frigideira é o que deixa o pão fofinho por dentro."
  },
  {
    id: "pao-batata-doce-airfryer", foto: "img/r/pao-batata-doce-airfryer.webp", col: "paes", nome: "Pãozinho de batata-doce na airfryer", emoji: "🍠",
    tags: ["Airfryer", "Sem ovo"], tempo: 30, rende: "cerca de 12 unidades", nivel: "Fácil",
    intro: "Casquinha crocante e miolo macio, com só 4 ingredientes.",
    ingredientes: [
      "1 xícara de batata-doce cozida e amassada (bem fria)",
      "1 xícara de polvilho doce",
      "2 colheres de sopa de azeite",
      "1/2 colher de chá de sal",
      "Água, se precisar"
    ],
    passos: [
      { t: "Misture a batata-doce, o azeite e o sal." },
      { t: "Junte o polvilho aos poucos, amassando com as mãos, até a massa soltar das mãos. Se ficar seca demais, pingue água." },
      { t: "Faça bolinhas do tamanho de uma noz." },
      { t: "Coloque na airfryer preaquecida a 180 °C, sem encostar umas nas outras.", timer: 18 },
      { t: "Sirva quentinho." }
    ],
    dica: "Bolinhas cruas congelam bem: asse direto do congelador, com uns 5 minutos a mais."
  },
  {
    id: "pao-caneca", foto: "img/r/pao-caneca.webp", col: "paes", nome: "Pão de caneca no micro-ondas", emoji: "☕",
    tags: ["Micro-ondas", "Rápido"], tempo: 3, rende: "1 pão", nivel: "Fácil",
    intro: "Do micro-ondas para a torradeira: vira um pão de sanduíche em 2 minutos.",
    ingredientes: [
      "1 ovo",
      "2 colheres de sopa de farinha de amêndoas (ou de arroz)",
      "1 colher de sopa de azeite",
      "1 colher de sopa de leite vegetal",
      "1 pitada de sal",
      "1 colher de chá de fermento químico"
    ],
    passos: [
      { t: "Numa caneca grande untada, misture bem o ovo, o azeite, o leite e o sal." },
      { t: "Junte a farinha e, por último, o fermento." },
      { t: "Leve ao micro-ondas em potência alta.", timer: 2 },
      { t: "Desenforme, corte em fatias e toste na frigideira ou torradeira." }
    ],
    dica: "Cada micro-ondas tem uma potência. Se ainda estiver úmido no meio, volte por mais 20 segundos."
  },
  {
    id: "focaccia", foto: "img/r/focaccia.webp", col: "paes", nome: "Focaccia de tomate e alecrim", emoji: "🍅",
    tags: ["Forno", "Para receber"], tempo: 90, rende: "1 assadeira média", nivel: "Médio",
    intro: "Aquela focaccia de padaria, cheia de azeite, sem glúten.",
    ingredientes: [
      "2 xícaras de farinha de arroz",
      "1/2 xícara de fécula de batata",
      "2 colheres de sopa de psyllium",
      "1 colher de chá de sal",
      "1 sachê de fermento biológico seco (10 g)",
      "1 e 1/2 xícara de água morna",
      "4 colheres de sopa de azeite (mais um pouco para regar)",
      "1 xícara de tomate-cereja cortado ao meio",
      "Alecrim fresco e sal grosso a gosto"
    ],
    passos: [
      { t: "Numa tigela, misture a farinha de arroz, a fécula, o psyllium, o sal e o fermento." },
      { t: "Junte a água morna e 2 colheres de azeite. Mexa até virar uma massa grudenta e uniforme." },
      { t: "Espalhe em assadeira untada com o restante do azeite, com as mãos molhadas." },
      { t: "Cubra e deixe crescer em lugar morno.", timer: 45 },
      { t: "Afunde os dedos na massa, espalhe os tomates e o alecrim, regue com azeite e salpique sal grosso." },
      { t: "Asse em forno preaquecido a 200 °C até dourar bem.", timer: 30 }
    ],
    dica: "Mãos molhadas com água ou azeite: assim a massa não gruda."
  },
  {
    id: "pao-banana", foto: "img/r/pao-banana.webp", col: "paes", nome: "Pão de banana sem açúcar", emoji: "🍌",
    tags: ["Forno", "Café da tarde"], tempo: 50, rende: "1 forma de bolo inglês", nivel: "Fácil",
    intro: "Quem adoça é a banana bem madura. Fica úmido e perfumado com canela.",
    ingredientes: [
      "3 bananas bem maduras",
      "3 ovos",
      "1/3 de xícara de óleo de coco derretido",
      "1 xícara de farinha de amêndoas",
      "1/2 xícara de farinha de arroz",
      "1 colher de chá de canela em pó",
      "1 colher de sopa de fermento químico",
      "Nozes ou castanhas picadas (opcional)"
    ],
    passos: [
      { t: "Amasse as bananas com um garfo até virar um purê." },
      { t: "Junte os ovos e o óleo de coco e misture bem." },
      { t: "Acrescente as farinhas e a canela. Por último, o fermento e as castanhas." },
      { t: "Despeje em forma untada e asse em forno preaquecido a 180 °C até o palito sair seco.", timer: 40 }
    ],
    dica: "Quanto mais pintada a casca da banana, mais doce fica o pão."
  },
  {
    id: "wrap-tapioca", foto: "img/r/wrap-tapioca.webp", col: "paes", nome: "Wrap de frigideira", emoji: "🌯",
    tags: ["Frigideira", "Rápido"], tempo: 10, rende: "2 wraps", nivel: "Fácil",
    intro: "Massa fininha e flexível, que enrola sem rasgar. Ótimo para o almoço.",
    ingredientes: [
      "1 ovo",
      "3 colheres de sopa de goma de tapioca",
      "3 colheres de sopa de leite vegetal",
      "1 pitada de sal",
      "Ervas secas a gosto (opcional)"
    ],
    passos: [
      { t: "Bata tudo com um garfo até ficar liso, como massa de panqueca." },
      { t: "Despeje metade em frigideira antiaderente grande, em fogo médio, girando para espalhar bem fino." },
      { t: "Quando soltar das bordas, vire.", timer: 1 },
      { t: "Repita com o restante da massa, recheie e enrole." }
    ],
    dica: "Mexa a massa antes de cada wrap: a tapioca assenta no fundo."
  },
  {
    id: "pao-inhame", foto: "img/r/pao-inhame.webp", col: "paes", nome: "Pão de inhame", emoji: "🥔",
    tags: ["Forno", "Sem fermento biológico"], tempo: 45, rende: "cerca de 10 pãezinhos", nivel: "Fácil",
    intro: "Pãozinho macio feito com inhame, sem precisar esperar a massa crescer.",
    ingredientes: [
      "2 xícaras de inhame cozido e amassado (frio)",
      "1 ovo",
      "2 colheres de sopa de azeite",
      "1 colher de chá de sal",
      "1 xícara de polvilho doce",
      "1 colher de sopa de fermento químico"
    ],
    passos: [
      { t: "Misture o inhame, o ovo, o azeite e o sal até ficar uniforme." },
      { t: "Junte o polvilho e o fermento e amasse até soltar das mãos. Se grudar muito, acrescente mais polvilho às colheradas." },
      { t: "Modele bolinhas, coloque em assadeira untada e pincele um pouco de azeite." },
      { t: "Asse em forno preaquecido a 200 °C até dourar.", timer: 30 }
    ],
    dica: "Também fica ótimo na airfryer: 180 °C por cerca de 18 minutos."
  },
  {
    id: "pao-forma", foto: "img/r/pao-forma.webp", col: "paes", nome: "Pão de forma sem glúten", emoji: "🥪",
    tags: ["Forno", "Congela bem"], tempo: 110, rende: "1 forma de pão (cerca de 16 fatias)", nivel: "Médio",
    intro: "Fatia sem esfarelar e serve para o sanduíche da semana inteira.",
    ingredientes: [
      "2 xícaras de farinha de arroz",
      "1 xícara de fécula de batata",
      "1/2 xícara de polvilho doce",
      "2 colheres de sopa de psyllium",
      "1 e 1/2 colher de chá de sal",
      "1 sachê de fermento biológico seco (10 g)",
      "3 ovos",
      "1/3 de xícara de óleo",
      "1 e 1/4 xícara de água morna"
    ],
    passos: [
      { t: "Misture os secos numa tigela: farinha de arroz, fécula, polvilho, psyllium, sal e fermento." },
      { t: "À parte, bata os ovos com o óleo e a água morna." },
      { t: "Junte os líquidos aos secos e bata com batedeira ou fouet até ficar uma massa lisa e pesada.", timer: 3 },
      { t: "Coloque em forma de pão untada, alise o topo com a mão molhada, cubra e deixe crescer até chegar perto da borda.", timer: 50 },
      { t: "Asse em forno preaquecido a 180 °C até dourar e soar oco ao bater no fundo.", timer: 40 },
      { t: "Desenforme e espere esfriar totalmente antes de fatiar.", timer: 60 }
    ],
    dica: "Fatie todo o pão já frio e congele em saquinho. Vai direto para a torradeira."
  },

  /* ===================== SALADAS ===================== */
  {
    id: "salada-grao-de-bico", foto: "img/r/salada-grao-de-bico.webp", col: "saladas", nome: "Mediterrânea de grão-de-bico", emoji: "🫒",
    tags: ["Vegana", "Proteína vegetal"], tempo: 15, rende: "4 potes de 500 ml", nivel: "Fácil",
    intro: "Leve, colorida e com proteína vegetal. O limão deixa tudo fresco até o último pote.",
    camadas: ["Molho", "Pepino e tomate-cereja", "Grão-de-bico", "Azeitonas e cebola roxa", "Rúcula"],
    ingredientes: [
      "Molho: 6 colheres de sopa de azeite, suco de 1 limão, 1 colher de chá de orégano e sal",
      "1 pepino em cubos",
      "1 xícara de tomate-cereja inteiro",
      "2 xícaras de grão-de-bico cozido",
      "1/2 xícara de azeitonas",
      "1/2 cebola roxa em fatias finas",
      "2 xícaras de rúcula bem seca"
    ],
    passos: [
      { t: "Misture os ingredientes do molho e divida no fundo dos 4 potes." },
      { t: "Faça a camada de pepino e tomate-cereja inteiro. Eles protegem o resto do molho." },
      { t: "Coloque o grão-de-bico, depois as azeitonas e a cebola roxa." },
      { t: "Termine com a rúcula bem seca, pressionando de leve, e feche bem os potes." },
      { t: "Na hora de comer, vire o pote num prato ou chacoalhe e coma." }
    ],
    dica: "Seque bem as folhas (centrífuga ou pano limpo). Folha molhada é o que faz a salada murchar."
  },
  {
    id: "salada-frango-mostarda", foto: "img/r/salada-frango-mostarda.webp", col: "saladas", nome: "Frango com molho de mostarda", emoji: "🍗",
    tags: ["Proteína", "Marmita"], tempo: 20, rende: "4 potes de 500 ml", nivel: "Fácil",
    intro: "A salada que sustenta até o fim da tarde. Frango, arroz integral e um molho que todo mundo gosta.",
    camadas: ["Molho", "Cenoura e milho", "Arroz integral", "Frango", "Alface"],
    ingredientes: [
      "Molho: 4 colheres de sopa de azeite, 2 colheres de sopa de mostarda, suco de 1/2 limão e sal",
      "2 cenouras raladas",
      "1 xícara de milho cozido",
      "2 xícaras de arroz integral cozido e frio",
      "2 xícaras de frango cozido e desfiado",
      "Alface americana picada e bem seca"
    ],
    passos: [
      { t: "Misture o molho e divida no fundo dos potes." },
      { t: "Coloque a cenoura e o milho." },
      { t: "Faça a camada de arroz integral frio." },
      { t: "Distribua o frango desfiado." },
      { t: "Complete com a alface e feche bem." }
    ],
    dica: "Arroz e frango precisam estar frios antes de montar. Quente no pote faz a salada estragar mais rápido."
  },
  {
    id: "salada-atum-feijao", foto: "img/r/salada-atum-feijao.webp", col: "saladas", nome: "Atum com feijão-branco", emoji: "🐟",
    tags: ["Proteína", "Sem cozinhar"], tempo: 10, rende: "4 potes de 500 ml", nivel: "Fácil",
    intro: "Montada em 10 minutos, só com abrir latas e picar.",
    camadas: ["Molho", "Pimentão e cebola roxa", "Feijão-branco", "Atum", "Espinafre"],
    ingredientes: [
      "Molho: 4 colheres de sopa de azeite, 2 colheres de sopa de vinagre de maçã e sal",
      "1 pimentão vermelho em cubinhos",
      "1/2 cebola roxa picada",
      "2 xícaras de feijão-branco cozido (ou 1 lata escorrida)",
      "2 latas de atum escorrido",
      "2 xícaras de espinafre baby bem seco",
      "Salsinha a gosto"
    ],
    passos: [
      { t: "Divida o molho no fundo dos potes." },
      { t: "Coloque o pimentão e a cebola roxa." },
      { t: "Faça a camada de feijão-branco e depois a de atum." },
      { t: "Finalize com o espinafre e a salsinha e feche bem." }
    ],
    dica: "Enxágue o feijão em lata em água corrente antes de usar."
  },
  {
    id: "salada-quinoa-colorida", foto: "img/r/salada-quinoa-colorida.webp", col: "saladas", nome: "Quinoa colorida com tahine", emoji: "🌈",
    tags: ["Vegana", "Colorida"], tempo: 25, rende: "4 potes de 500 ml", nivel: "Fácil",
    intro: "Linda no pote e cheia de textura, com molho cremoso sem leite.",
    camadas: ["Molho de tahine", "Beterraba e pepino", "Quinoa", "Grão-de-bico assado", "Folhas"],
    ingredientes: [
      "Molho: 3 colheres de sopa de tahine, suco de 1 limão, 4 colheres de sopa de água e sal",
      "1 beterraba crua ralada",
      "1 pepino em cubos",
      "2 xícaras de quinoa cozida e fria",
      "1 e 1/2 xícara de grão-de-bico assado com páprica",
      "Mix de folhas bem seco"
    ],
    passos: [
      { t: "Misture o tahine com o limão, a água e o sal até ficar cremoso. Divida nos potes." },
      { t: "Faça as camadas de beterraba e de pepino." },
      { t: "Coloque a quinoa e depois o grão-de-bico." },
      { t: "Complete com as folhas e feche." }
    ],
    dica: "Para assar o grão-de-bico: seque bem, tempere com azeite, páprica e sal e leve à airfryer a 200 °C por cerca de 15 minutos."
  },
  {
    id: "salada-macarrao-ovo", foto: "img/r/salada-macarrao-ovo.webp", col: "saladas", nome: "Macarrão de arroz com ovo e pesto", emoji: "🍝",
    tags: ["Marmita", "Sem glúten"], tempo: 25, rende: "4 potes de 500 ml", nivel: "Fácil",
    intro: "Com cara de almoço completo, e o pesto vai sem queijo.",
    camadas: ["Pesto sem queijo", "Tomate seco e brócolis", "Macarrão de arroz", "Ovo cozido", "Folhas"],
    ingredientes: [
      "Pesto: 1 xícara de manjericão, 1/2 xícara de azeite, 1/4 de xícara de castanha-de-caju, 1 dente de alho e sal (bata tudo)",
      "1/2 xícara de tomate seco picado",
      "2 xícaras de brócolis cozido al dente",
      "250 g de macarrão de arroz cozido e frio",
      "4 ovos cozidos",
      "Folhas de alface ou rúcula bem secas"
    ],
    passos: [
      { t: "Bata os ingredientes do pesto e divida no fundo dos potes." },
      { t: "Coloque o tomate seco e o brócolis." },
      { t: "Faça a camada de macarrão frio, com um fio de azeite para não grudar." },
      { t: "Coloque um ovo cozido cortado em cada pote." },
      { t: "Complete com as folhas e feche bem." }
    ],
    dica: "Cozinhe o macarrão 1 minuto a menos do que diz a embalagem. Assim ele não amolece no pote."
  }
];

window.AVISO_SALADAS = "Guarde na geladeira, bem fechado. Saladas com frango, atum ou ovo: consuma em até 3 a 4 dias. As veganas costumam durar um pouco mais.";

/* Cardápio da semana montado com as receitas grátis */
window.CARDAPIO = [
  { dia: "Domingo", cafe: "focaccia", almoco: "salada-grao-de-bico" },
  { dia: "Segunda", cafe: "pao-liquidificador", almoco: "salada-frango-mostarda" },
  { dia: "Terça", cafe: "pao-queijo-liquidificador", almoco: "salada-atum-feijao" },
  { dia: "Quarta", cafe: "pao-frigideira", almoco: "salada-quinoa-colorida" },
  { dia: "Quinta", cafe: "pao-banana", almoco: "salada-macarrao-ovo" },
  { dia: "Sexta", cafe: "pao-batata-doce-airfryer", almoco: "salada-grao-de-bico" },
  { dia: "Sábado", cafe: "pao-forma", almoco: "salada-frango-mostarda" }
];
