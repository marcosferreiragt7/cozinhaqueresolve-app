/* ================================================================
   SALADAS NO POTE QUE RESOLVEM — PREMIUM: +100 saladas
   Carregar DEPOIS de potes.js. premium: "potes_premium".
   Usa a mesma tabela de componentes (POTES_LIB) do Essencial.
   ================================================================ */
(function () {
var L = window.POTES_LIB, C = L.C, PREP = L.PREP, M = L.M;

/* componentes extras do Premium */
C.coalho = ["60 g de queijo coalho grelhado em cubos", 4, 3, "coalho", "al", "queijo coalho"];
C.gorgonzola = ["30 g de gorgonzola em pedaços", 4, 4, "", "al", "gorgonzola"];
C.lombo = ["100 g de lombo suíno assado em fatias", 3, 3, "lombo", "a", "lombo"];
C.frangoCurry = ["100 g de frango grelhado com curry", 3, 3, "frangoCurry", "a", "frango ao curry"];
C.figo = ["2 figos frescos em quartos", 4, 2, "", "", "figo"];
C.kiwi = ["1 kiwi em meias-luas", 4, 3, "", "", "kiwi"];
C.melancia = ["1 xícara de melancia em cubos sem semente (120 g)", 4, 2, "", "", "melancia"];
C.melao = ["1 xícara de melão em cubos (120 g)", 4, 3, "", "", "melão"];
C.mamao = ["1 xícara de mamão formosa em cubos (120 g)", 4, 2, "", "", "mamão"];
C.romaa = ["2 colheres de sopa de sementes de romã", 4, 4, "", "", "romã"];
C.damasco = ["4 damascos secos picados", 4, 5, "", "", "damasco"];
C.jilo = ["2 jilós em fatias finas grelhadas", 1, 4, "jilo", "", "jiló grelhado"];
C.quiabo = ["6 quiabos em rodelas grelhados", 1, 3, "quiabo", "", "quiabo grelhado"];
C.maxixe = ["1 tomate maduro em cubos sem semente", 1, 3, "", "", "tomate"];
C.cogumelo = ["1 xícara de cogumelo paris salteado (80 g)", 1, 3, "cogumelo", "", "cogumelos"];
C.alhoPoro = ["1/2 talo de alho-poró em rodelas finas", 1, 5, "", "", "alho-poró"];
C.erva = ["1 colher de sopa de endro ou dill picado", 4, 3, "", "", "endro"];
C.pistache = ["1 colher de sopa de pistache picado", 6, 5, "", "c", "pistache"];
C.chiaB = ["1 colher de sopa de linhaça dourada", 6, 5, "", "", "linhaça"];
C.ovoCodorna = ["6 ovos de codorna cozidos", 3, 3, "ovoCod", "ao", "ovo de codorna"];
C.carneDesf = ["100 g de carne de panela desfiada (patinho ou acém)", 3, 3, "carneDesf", "a", "carne desfiada"];
C.peixeBranco = ["100 g de tilápia assada em lascas", 3, 2, "tilapia", "ap", "tilápia"];
C.kale = ["1 xícara de couve crespa (kale) sem talo (40 g)", 5, 5, "folhas", "", "kale"];
C.endivia = ["1 xícara de radicchio ou endívia fatiada (40 g)", 5, 4, "folhas", "", "radicchio"];
C.alfafa = ["1 punhado de broto de alfafa ou de feijão", 5, 2, "", "", "brotos"];
C.abacateL = ["1/2 abacate pequeno em cubos com bastante limão", 4, 1, "", "", "abacate"];
C.cevadinha = ["1/2 xícara de cevadinha cozida (90 g)", 2, 4, "cevadinha", "g", "cevadinha"];
C.milhoV = ["1 espiga de milho verde cozida, grãos debulhados", 1, 3, "milhoV", "", "milho verde"];
C.mandioca = ["1 xícara de mandioca cozida em cubos (110 g)", 1, 4, "mandioca", "", "mandioca"];
C.inhame = ["1 inhame médio cozido em cubos (100 g)", 1, 4, "inhame", "", "inhame"];
C.couveRefog = ["1 xícara de couve refogada no alho, fria", 5, 3, "couveRef", "", "couve refogada"];

PREP.coalho = ["Doure o queijo coalho numa frigideira antiaderente sem óleo, 2 minutos de cada lado. Deixe esfriar e corte em cubos.", 5, 5];
PREP.lombo = ["Tempere o lombo com sal, alho e mostarda e asse a 200 °C por 40 minutos (ou use sobra de lombo assado). Fatie frio.", 40, 10];
PREP.frangoCurry = ["Tempere o frango com sal, 1 colher de chá de curry e limão. Grelhe 5 minutos de cada lado até cozinhar por dentro. Deixe esfriar e fatie.", 12, 15];
PREP.jilo = ["Grelhe as fatias de jiló numa frigideira com 1 fio de azeite e sal, 2 minutos de cada lado.", 6, 5];
PREP.quiabo = ["Seque bem o quiabo antes de cortar. Grelhe as rodelas em frigideira bem quente com 1 fio de azeite, sem mexer muito, até dourar (assim não baba).", 8, 5];
PREP.cogumelo = ["Salteie os cogumelos fatiados em frigideira bem quente com 1 fio de azeite e sal até dourar e secar a água.", 8, 5];
PREP.ovoCod = ["Cozinhe os ovos de codorna por 4 minutos em água fervente e passe para água gelada. Descasque.", 6, 6];
PREP.carneDesf = ["Use carne de panela cozida na pressão (40 minutos com cebola, alho e louro), escorrida do caldo, desfiada e fria.", 45, 15];
PREP.tilapia = ["Tempere a tilápia com sal e limão e asse a 200 °C por 15 minutos (ou airfryer 180 °C por 10). Deixe esfriar e solte em lascas.", 15, 15];
PREP.cevadinha = ["Cozinhe a cevadinha em bastante água com sal por 30 minutos, até ficar macia. Escorra e deixe esfriar.", 30, 15];
PREP.milhoV = ["Cozinhe a espiga em água por 15 minutos, deixe esfriar e debulhe com uma faca.", 15, 10];
PREP.mandioca = ["Cozinhe a mandioca em água com sal até ficar macia (20 minutos, ou 10 na pressão). Tire o fio central e corte em cubos frios.", 20, 15];
PREP.inhame = ["Cozinhe o inhame com casca por 20 minutos, descasque e corte em cubos frios.", 20, 15];
PREP.couveRef = ["Refogue a couve em tiras com alho e 1 fio de azeite por 1 minuto, só até murchar. Espalhe para esfriar rápido.", 4, 5];

M.curry = ["Molho de iogurte com curry", "3 colheres de sopa de iogurte natural, 1/2 colher de chá de curry, 1 colher de chá de limão, 1 colher de chá de mel e sal", "l", 3];
M.chimi = ["Chimichurri", "2 colheres de sopa de azeite, 1 colher de sopa de vinagre de vinho, salsinha e orégano picados, 1/2 dente de alho e pimenta calabresa", "", 5];
M.romesco = ["Molho de pimentão assado", "2 colheres de sopa de pimentão vermelho assado batido com 1 colher de sopa de azeite, 1 colher de chá de vinagre, 5 amêndoas e sal", "c", 4];
M.missô = ["Molho de missô", "1 colher de chá de missô, 1 colher de sopa de vinagre de arroz, 1 colher de sopa de óleo de gergelim, 1 colher de chá de mel e 1 colher de sopa de água", "js", 5];
M.mostardaA = ["Vinagrete de mostarda antiga", "2 colheres de sopa de azeite, 1 colher de sopa de vinagre de vinho branco, 1 colher de chá de mostarda em grãos e sal", "", 5];
M.mel = ["Molho de limão-siciliano e mel", "2 colheres de sopa de azeite, 1 colher de sopa de limão-siciliano, 1 colher de chá de mel, raspas de limão e sal", "", 5];

var T = {};
function S(sec, rows) {
  rows.forEach(function (x) {
    L.salada({ id: x[0], sec: sec, emoji: x[1], nome: x[2], c: x[3], m: x[4], intro: x[5], dica: x[6], premium: "potes_premium" });
  });
}

window.SECOES.potes = window.SECOES.potes.concat(["Premium · Proteicas", "Premium · Low carb", "Premium · Saladas do mundo",
  "Premium · De restaurante", "Premium · Com frutas", "Premium · Vegetarianas com queijo", "Premium · Econômicas de feira", "Premium · Bowls de grãos"]);

/* ======================= PROTEICAS (13) ======================= */
S("Premium · Proteicas", [
  ["pp-frango-ovo-grao", "💪", "Frango, ovo e grão-de-bico", ["pepino", "graobico", "frango", "ovo1", "espinafre"], "mostarda", "Três proteínas no mesmo pote, com molho de mostarda e mel."],
  ["pp-carne-quinoa", "🥩", "Carne grelhada com quinoa e chimichurri", ["pimentao", "cebola", "quinoa", "carne", "salsa", "rucula"], "chimi", "Tiras de carne grelhada, quinoa e o chimichurri argentino."],
  ["pp-atum-ovo-lentilha", "🐟", "Atum, ovo e lentilha", ["cenoura", "lentilha", "atum", "ovo1", "salsa", "mix"], "limao", "Lentilha, atum e ovo: proteína de três jeitos, sem complicação."],
  ["pp-frango-curry", "🍛", "Frango ao curry com uva-passa", ["cenoura", "salsao", "arroz", "frangoCurry", "passas", "alface", "amendoas"], "curry", "Frango ao curry, arroz integral e passas com molho de iogurte."],
  ["pp-tofu-edamame", "🫛", "Tofu com edamame e missô", ["repolho", "cenouraP", "edamame", "tofu", "gergelim", "acelga"], "missô", "Proteína vegetal em dobro, com molho de missô."],
  ["pp-salmao-grao", "🍣", "Salmão com grão-de-bico e endro", ["pepino", "rabanete", "graobico", "salmao", "erva", "rucula"], "mel", "Salmão, grão-de-bico e endro com limão-siciliano. Para comer em até 2 dias."],
  ["pp-frango-feijao", "🫘", "Frango com feijão-fradinho", ["pimentao", "cebola", "fradinho", "frangoD", "coentro", "couve"], "cebolaM", "Feijão-fradinho e frango desfiado com vinagrete. Sustenta até a noite."],
  ["pp-carne-feijao", "🖤", "Carne desfiada com feijão-preto", ["pimentao", "milho", "feijaoP", "carneDesf", "coentro", "alfaceR"], "mexicano", "Carne de panela desfiada, feijão-preto e milho, com limão e cominho."],
  ["pp-peru-ovo", "🥚", "Peito de peru, ovo e cottage", ["pepino", "tomatinho", "peru", "ovo1", "cottage", "alface"], "limao", "Sem fogão para a proteína, só o ovo cozido. Leve e saciante."],
  ["pp-camarao-quinoa", "🍤", "Camarão com quinoa e manga", ["pepino", "pimentaoA", "quinoa", "camarao", "manga", "coentro", "espinafre"], "laranjaM", "Camarão, quinoa e manga com laranja e gengibre."],
  ["pp-lombo", "🐖", "Lombo com repolho e maçã", ["repolho", "cenoura", "lombo", "maca", "salsa", "alface"], "mostardaA", "Sobra do lombo assado vira salada com repolho, maçã e mostarda em grãos."],
  ["pp-codorna", "🥚", "Ovos de codorna com grão e tomate", ["tomatinho", "pepino", "graobico", "ovoCodorna", "salsa", "mix"], "ervas", "Ovinhos de codorna inteiros: bonitos no pote e fáceis de comer."],
  ["pp-tilapia", "🐠", "Tilápia com batata e alcaparras", ["batata", "vagem", "peixeBranco", "alcaparra", "salsa", "alface"], "mel", "Tilápia assada, batata e alcaparras com limão-siciliano. Para até 2 dias."]
]);

/* ======================= LOW CARB (12) ======================= */
S("Premium · Low carb", [
  ["pl-frango-abobrinha", "🥒", "Frango com abobrinha e pesto", ["abobrinha", "tomatinho", "frango", "parmesao", "rucula"], "pesto", "Fitas de abobrinha crua no lugar da massa, com frango e pesto."],
  ["pl-cobb", "🥓", "Cobb sem bacon", ["tomatinho", "pepino", "frango", "ovo1", "gorgonzola", "alfaceR"], "mostardaA", "A cobb americana com frango, ovo e gorgonzola."],
  ["pl-couveflor-tabule", "🥦", "Tabule de couve-flor", ["couveflor", "pepino", "tomatinhoM", "salsa", "hortela", "alfaceR"], "limao", "Couve-flor picadinha no lugar do trigo. Fresca e crocante.", "Pique a couve-flor crua no processador em pulsos, até parecer arroz."],
  ["pl-atum-ovo", "🥚", "Atum, ovo e palmito", ["palmito", "pepino", "atum", "ovo1", "azeitona", "alface"], "limao", "Atum, ovo, palmito e azeitona. Simples e completa."],
  ["pl-carne-brocolis", "🥩", "Carne com brócolis e cogumelos", ["brocolis", "cogumelo", "carne", "gergelim", "espinafre"], "shoyu", "Tiras de carne, brócolis e cogumelos com molho oriental."],
  ["pl-salmao-pepino", "🍣", "Salmão com pepino e abacate", ["pepino", "rabanete", "salmao", "abacateL", "gergelim", "alface"], "shoyu", "Inspirada no poke, sem arroz. Para comer no dia seguinte.", "Abacate só aguenta 1 dia, mesmo com limão. Monte na véspera."],
  ["pl-frango-caesar", "🥬", "Caesar sem crouton com ovo", ["frango", "ovo1", "parmesao", "alfaceR", "abobora_s"], "caesar", "Caesar com ovo e semente de abóbora no lugar do pão."],
  ["pl-caprese-frango", "🍅", "Caprese com frango", ["tomatinho", "frango", "muçarela", "manjericao", "rucula"], "balsamico", "A caprese com mais proteína para o almoço."],
  ["pl-tofu-legumes", "🥢", "Tofu com legumes crocantes", ["repolho", "pimentao", "edamame", "tofu", "coentro", "acelga", "amendoim"], "amendoimM", "Vegana e low carb, com molho de amendoim."],
  ["pl-camarao-abobrinha", "🍤", "Camarão com abobrinha e limão", ["abobrinha", "tomatinho", "camarao", "salsa", "rucula"], "mel", "Camarão salteado e abobrinha com limão-siciliano."],
  ["pl-grega-frango", "🫒", "Grega com frango", ["pepino", "tomatinho", "pimentao", "cebola", "frango", "feta", "azeitona", "alfaceR"], "ervas", "A grega clássica com frango para virar refeição."],
  ["pl-peru-queijo", "🧀", "Peito de peru com queijo e nozes", ["pepino", "salsao", "peru", "queijoB", "mix", "nozes"], "mostarda", "Sem cozinhar nada, com queijo branco e nozes."]
]);

/* ======================= SALADAS DO MUNDO (13) ======================= */
S("Premium · Saladas do mundo", [
  ["pm-fattoush", "🇱🇧", "Fattoush libanesa", ["pepino", "tomatinho", "rabanete", "cebola", "salsa", "hortela", "alfaceR", "crouton"], "limao", "Pepino, rabanete, ervas e pão crocante. A salada mais fresca do Líbano.", "O original leva sumac: se achar, salpique 1 pitada no molho."],
  ["pm-tabule", "🇱🇧", "Tabule de trigo", ["pepino", "tomatinhoM", "cebola", "trigo", "salsa", "hortela", "alfaceR"], "limao", "O tabule de verdade: muito cheiro-verde, trigo, tomate e limão."],
  ["pm-thai", "🇹🇭", "Salada tailandesa de macarrão de arroz", ["repolho", "cenouraP", "pepino", "sobaS", "frango", "coentro", "hortela", "amendoim"], "amendoimM", "Macarrão de arroz, frango, ervas e amendoim no molho cremoso."],
  ["pm-mexicana", "🇲🇽", "Mexicana de feijão e milho", ["pimentao", "milho", "cebola", "feijaoP", "tomatinhoM", "coentro", "alfaceR", "chips"], "abacateM", "Feijão-preto, milho, coentro e chips com molho verde de abacate."],
  ["pm-niçoise-salmao", "🇫🇷", "Niçoise com salmão", ["vagem", "batata", "tomatinho", "salmao", "ovo1", "azeitona", "alface"], "mostardaA", "A niçoise em versão com salmão em lascas."],
  ["pm-panzanella", "🇮🇹", "Panzanella", ["tomatinhoM", "pepino", "cebola", "muçarela", "manjericao", "rucula", "crouton"], "balsamico", "A salada toscana de tomate e pão. Aqui o pão vai à parte para continuar crocante."],
  ["pm-japonesa", "🇯🇵", "Sunomono de pote", ["pepino", "cenouraP", "repolhoB", "edamame", "gergelim", "acelga"], "missô", "Pepino, repolho e edamame com missô. Leve e crocante."],
  ["pm-coreana", "🇰🇷", "Bibimbap frio", ["cenouraP", "pepino", "edamame", "arroz", "ovo1", "carne", "gergelim", "espinafre"], "shoyu", "O bibimbap coreano frio no pote: arroz, legumes, carne e ovo."],
  ["pm-marroquina", "🇲🇦", "Marroquina de cuscuz e damasco", ["cenoura", "pimentao", "cuscuz", "graobico", "damasco", "hortela", "rucula", "amendoas"], "laranjaM", "Cuscuz, grão-de-bico e damasco com laranja e hortelã."],
  ["pm-indiana", "🇮🇳", "Indiana de lentilha e curry", ["cenoura", "pimentaoA", "lentilha", "passas", "coentro", "espinafre", "castanha"], "curry", "Lentilha, passas e castanha com molho de iogurte e curry."],
  ["pm-havaiana", "🇺🇸", "Poke bowl de atum em lata", ["pepino", "cenouraP", "edamame", "arroz", "atum", "manga", "gergelim", "alface"], "shoyu", "O poke com atum em lata: prático para levar e fácil de achar."],
  ["pm-russa", "🇷🇺", "Salada russa leve", ["batata", "cenoura", "ervilha", "pepinoC", "ovo1", "salsa"], "ranch", "A salada de maionese das festas com molho de iogurte e alho."],
  ["pm-chilena", "🇨🇱", "Chilena de tomate e cebola", ["maxixe", "cebola", "pimentao", "coentro", "alface"], "limao", "Tomate, cebola e coentro. Simples e perfeita para acompanhar."]
]);

/* ======================= DE RESTAURANTE (13) ======================= */
S("Premium · De restaurante", [
  ["pr-figo-gorgonzola", "🟣", "Figo, gorgonzola e nozes", ["figo", "gorgonzola", "endivia", "rucula", "nozes"], "balsamico", "Combinação de bistrô: figo, gorgonzola e nozes com balsâmico."],
  ["pr-pera-gorgonzola", "🍐", "Pera, gorgonzola e mel", ["pera", "gorgonzola", "rucula", "nozes"], "mel", "Pera, gorgonzola e rúcula com limão-siciliano e mel."],
  ["pr-salmao-laranja", "🍊", "Salmão com laranja e erva-doce", ["salsao", "rabanete", "salmao", "laranja", "erva", "rucula"], "laranjaM", "Salmão, laranja e endro: cítrica e elegante."],
  ["pr-camarao-manga", "🍤", "Camarão, manga e coco", ["pepino", "pimentao", "camarao", "manga", "coentro", "alface", "coco"], "maracuja", "Camarão, manga e coco tostado com molho de maracujá."],
  ["pr-carne-gorgonzola", "🥩", "Carne, gorgonzola e rúcula", ["tomatinho", "cebola", "carne", "gorgonzola", "rucula", "nozes"], "balsamico", "A clássica de churrascaria em pote."],
  ["pr-burrata", "🧀", "Tomates, muçarela e pesto", ["tomatinhoM", "tomateSeco", "muçarela", "manjericao", "rucula", "pistache"], "pesto", "Tomates de dois jeitos, muçarela e pistache."],
  ["pr-cogumelos", "🍄", "Cogumelos, parmesão e rúcula", ["cogumelo", "aspargo", "parmesao", "rucula", "amendoas"], "mostardaA", "Cogumelos salteados, aspargos e parmesão."],
  ["pr-frango-damasco", "🍗", "Frango com damasco e amêndoas", ["cenoura", "quinoa", "frango", "damasco", "espinafre", "amendoas"], "mostarda", "Frango, quinoa e damasco com amêndoas."],
  ["pr-beterraba-feta", "❤️", "Beterraba assada com feta", ["beterrabaC", "feta", "laranja", "rucula", "nozes"], "laranjaM", "Beterraba, feta e laranja com nozes."],
  ["pr-caprese-morango", "🍓", "Caprese de morango", ["morango", "muçarela", "manjericao", "rucula"], "balsamico", "Morango no lugar do tomate. Para comer em até 2 dias."],
  ["pr-melancia-feta", "🍉", "Melancia com feta e hortelã", ["pepino", "melancia", "feta", "hortela", "rucula"], "limao", "Para o calor: melancia, feta e hortelã. Até 2 dias."],
  ["pr-salmao-quinoa", "🐟", "Salmão com quinoa vermelha e romã", ["pepino", "quinoa", "salmao", "romaa", "salsa", "espinafre"], "mel", "Salmão, quinoa e romã: bonita como prato de restaurante."],
  ["pr-coalho", "🧀", "Queijo coalho com melancia", ["pepino", "melancia", "coalho", "hortela", "rucula"], "limao", "Coalho grelhado com melancia: doce, salgado e refrescante."]
]);

/* ======================= COM FRUTAS (12) ======================= */
S("Premium · Com frutas", [
  ["pf-kiwi-frango", "🥝", "Frango com kiwi e espinafre", ["pepino", "frango", "kiwi", "espinafre", "abobora_s"], "mel", "Frango e kiwi com limão-siciliano e mel."],
  ["pf-melao-peru", "🍈", "Melão com peito de peru e hortelã", ["pepino", "peru", "melao", "hortela", "rucula"], "limao", "Inspirada em melão com presunto, em versão de pote."],
  ["pf-mamao-frango", "🧡", "Mamão com frango e gengibre", ["cenoura", "frangoD", "mamao", "coentro", "alface"], "laranjaM", "Frango desfiado e mamão com laranja e gengibre. Até 2 dias."],
  ["pf-uva-frango", "🍇", "Uva, frango e nozes", ["salsao", "frango", "uva", "alface", "nozes"], "iogurte", "Frango, uva e nozes com iogurte de ervas."],
  ["pf-manga-feijao", "🥭", "Manga com feijão-preto", ["pimentao", "cebola", "feijaoP", "manga", "coentro", "alfaceR"], "mexicano", "Manga e feijão-preto com limão e cominho. Vegana."],
  ["pf-abacaxi-camarao", "🍍", "Abacaxi com camarão", ["pepino", "pimentao", "camarao", "abacaxi", "coentro", "alface"], "limao", "Camarão e abacaxi com limão e coentro. Até 2 dias."],
  ["pf-laranja-frango", "🍊", "Laranja com frango e amêndoas", ["cenoura", "frango", "laranja", "espinafre", "amendoas"], "mostarda", "Frango, laranja e amêndoas com mostarda e mel."],
  ["pf-romaa-quinoa", "💎", "Quinoa com romã e hortelã", ["pepino", "quinoa", "graobico", "romaa", "hortela", "rucula", "pistache"], "mel", "Quinoa, romã, hortelã e pistache. Vegetariana e festiva."],
  ["pf-maca-repolho", "🍏", "Repolho com maçã e passas", ["repolho", "cenoura", "maca", "passas", "salsa", "girassol"], "iogurte", "O coleslaw caipira com maçã e passas."],
  ["pf-pera-frango", "🍐", "Pera com frango e queijo", ["salsao", "frango", "pera", "queijoB", "rucula", "nozes"], "balsamico", "Frango, pera e queijo branco com balsâmico."],
  ["pf-morango-espinafre", "🍓", "Morango com espinafre e chia", ["pepino", "queijoB", "morango", "espinafre", "amendoas", "chia"], "balsamico", "Morango e espinafre com amêndoas. Até 2 dias."],
  ["pf-uva-lentilha", "🍇", "Lentilha com uva e salsão", ["salsao", "cenoura", "lentilha", "uva", "salsa", "mix", "nozes"], "mostardaA", "Lentilha, uva e salsão. Vegana e diferente."]
]);

/* ======================= VEGETARIANAS COM QUEIJO (12) ======================= */
S("Premium · Vegetarianas com queijo", [
  ["pv-feta-lentilha", "🧀", "Lentilha com feta e tomate seco", ["pepino", "lentilha", "feta", "tomateSeco", "salsa", "rucula"], "limao", "Lentilha, feta e tomate seco: proteína e muito sabor."],
  ["pv-coalho-milho", "🌽", "Coalho com milho e pimentão", ["pimentao", "milhoV", "cebola", "coalho", "coentro", "alface"], "limao", "Queijo coalho grelhado e milho verde. Sabor de festa junina."],
  ["pv-ricota-abobrinha", "🥒", "Ricota com abobrinha e hortelã", ["abobrinha", "ervilha", "ricota", "hortela", "rucula", "amendoas"], "mel", "Abobrinha crua, ervilha e ricota com limão-siciliano."],
  ["pv-ovo-batata", "🥔", "Ovo, batata e vagem", ["batata", "vagem", "ovo", "salsa", "alface"], "mostardaA", "Batata, vagem e ovo com mostarda em grãos."],
  ["pv-quinoa-feta", "🌱", "Quinoa com feta e pepino", ["pepino", "tomatinho", "quinoa", "feta", "azeitona", "hortela", "alfaceR"], "ervas", "Quinoa, feta e azeitona: grega de grão."],
  ["pv-cottage-lentilha", "🥄", "Cottage com lentilha e cenoura", ["cenoura", "lentilha", "cottage", "cebolaC", "espinafre"], "limao", "Cottage cremoso com lentilha e cenoura."],
  ["pv-abobora-ricota", "🎃", "Abóbora assada com ricota", ["abobora", "ricota", "espinafre", "abobora_s"], "balsamico", "Abóbora assada, ricota e espinafre."],
  ["pv-cogumelo-parmesao", "🍄", "Cogumelos com cevadinha e parmesão", ["cogumelo", "cevadinha", "parmesao", "salsa", "rucula"], "mostardaA", "Cevadinha, cogumelos e parmesão: encorpada como um risoto frio."],
  ["pv-berinjela-feta", "🍆", "Berinjela assada com feta", ["berinjela", "tomatinho", "graobico", "feta", "hortela", "rucula"], "tahine", "Berinjela assada, grão-de-bico e feta com tahine."],
  ["pv-caprese-quinoa", "🍅", "Caprese de quinoa", ["tomatinho", "quinoa", "muçarela", "manjericao", "rucula"], "pesto", "Quinoa com caprese e pesto: vegetariana e completa."],
  ["pv-gorgonzola-maca", "🍏", "Maçã, gorgonzola e nozes", ["salsao", "maca", "gorgonzola", "mix", "nozes"], "mel", "Maçã e gorgonzola com nozes e mel."],
  ["pv-macarrao-ricota", "🍝", "Macarrão com ricota e tomate", ["tomatinho", "macarraoI", "ricota", "manjericao", "espinafre"], "ervas", "Macarrão integral, ricota e manjericão."]
]);

/* ======================= ECONÔMICAS DE FEIRA (13) ======================= */
S("Premium · Econômicas de feira", [
  ["pe-repolho-ovo", "🥬", "Repolho, cenoura e ovo", ["repolhoB", "cenoura", "ovo", "salsa", "cebolaC"], "cebolaM", "Repolho, cenoura e ovo: das saladas mais baratas e mais duráveis."],
  ["pe-chuchu", "🟢", "Chuchu, cenoura e salsinha", ["chuchu", "cenoura", "tomatinho", "salsa", "alface"], "limao", "Chuchu cozido firme com cenoura. Leve e barata."],
  ["pe-beterraba-cenoura", "❤️", "Beterraba e cenoura raladas", ["beterraba", "cenoura", "repolho", "salsa", "girassol"], "limao", "Colorida, crocante e baratíssima. Dura a semana."],
  ["pe-feijao-vinagrete", "🫘", "Feijão com vinagrete", ["maxixe", "cebola", "pimentao", "feijaoP", "salsa", "alface"], "cebolaM", "Feijão escorrido com vinagrete: o almoço brasileiro em salada."],
  ["pe-batata-ovo", "🥔", "Batata, ovo e cebolinha", ["batata", "cenoura", "ovo", "cebolaC", "salsa"], "ranch", "Batata, ovo e cebolinha com molho de iogurte e alho."],
  ["pe-sardinha-feijao", "🐟", "Sardinha com feijão-fradinho", ["cebola", "pimentao", "fradinho", "sardinha", "salsa", "couve"], "limao", "Sardinha e fradinho: proteína barata e saborosa. Até 2 dias."],
  ["pe-jilo", "🟢", "Jiló grelhado com tomate", ["jilo", "maxixe", "cebola", "salsa", "alface"], "cebolaM", "Jiló grelhado perde o amargor forte. Com vinagrete fica ótimo."],
  ["pe-quiabo", "🌿", "Quiabo grelhado com milho", ["quiabo", "milho", "pimentao", "cebola", "alface"], "limao", "Quiabo grelhado que não baba, com milho e pimentão."],
  ["pe-mandioca", "🟡", "Mandioca com frango desfiado", ["mandioca", "cebola", "frangoD", "cebolaC", "couve"], "cebolaM", "Mandioca, frango e couve: salada de comida mineira."],
  ["pe-inhame", "🤎", "Inhame com ovo e cheiro-verde", ["inhame", "cenoura", "ovo1", "salsa", "cebolaC", "alface"], "limao", "Inhame cozido, ovo e muito cheiro-verde."],
  ["pe-couve-feijao", "🥬", "Couve com feijão e ovo", ["cenoura", "feijaoP", "ovo1", "couveRefog"], "cebolaM", "Couve refogada, feijão e ovo. Quase um virado à paulista frio."],
  ["pe-acelga", "🥬", "Acelga com cenoura e gergelim", ["cenouraP", "pepino", "acelga", "gergelim"], "shoyu", "Acelga fininha, cenoura e gergelim. Barata e crocante."],
  ["pe-lentilha-arroz", "🍚", "Arroz com lentilha e cebola", ["cebola", "cenoura", "arroz", "lentilha", "salsa", "alface"], "limao", "Inspirada no mujadara: arroz, lentilha e cebola. Vegana e barata."]
]);

/* ======================= BOWLS DE GRÃOS (12) ======================= */
S("Premium · Bowls de grãos", [
  ["pb-buddha", "🧘", "Buddha bowl de grão-de-bico", ["batatadoce", "repolho", "quinoa", "grao_tost", "espinafre", "abobora_s"], "tahine", "Batata-doce, quinoa, grão-de-bico tostado e tahine."],
  ["pb-burrito", "🌯", "Burrito bowl", ["pimentao", "milho", "cebola", "arroz", "feijaoP", "frangoE", "alfaceR"], "mexicano", "O recheio do burrito sem a tortilha: arroz, feijão, milho e frango."],
  ["pb-poke-salmao", "🍣", "Poke de salmão", ["pepino", "cenouraP", "edamame", "arroz", "salmao", "manga", "gergelim"], "shoyu", "Arroz, salmão, manga e edamame. Até 2 dias."],
  ["pb-teriyaki", "🥢", "Bowl de frango com arroz negro", ["brocolis", "cenouraP", "arrozN", "frango", "gergelim", "acelga"], "shoyu", "Arroz negro, frango e brócolis com molho oriental."],
  ["pb-mediterraneo", "🫒", "Bowl mediterrâneo", ["pepino", "tomatinho", "cuscuz", "graobico", "feta", "azeitona", "rucula"], "tahine", "Cuscuz, grão-de-bico, feta e azeitona com tahine."],
  ["pb-lentilha-abobora", "🎃", "Lentilha com abóbora assada", ["abobora", "lentilha", "espinafre", "abobora_s"], "tahine", "Lentilha e abóbora assada: vegana e muito saciante."],
  ["pb-cevadinha", "🌾", "Cevadinha com legumes assados", ["berinjela", "abobrinha", "cevadinha", "feta", "hortela", "rucula"], "ervas", "Cevadinha e legumes assados com feta."],
  ["pb-quinoa-carne", "🥩", "Quinoa com carne e chimichurri", ["pimentao", "milhoV", "quinoa", "carne", "rucula"], "chimi", "Quinoa, carne grelhada e milho verde com chimichurri."],
  ["pb-arroz-tofu", "🥜", "Arroz integral com tofu e amendoim", ["repolho", "cenouraP", "arroz", "tofu", "coentro", "acelga", "amendoim"], "amendoimM", "Tofu dourado, arroz e legumes com molho de amendoim."],
  ["pb-frango-batata", "🍠", "Frango com batata-doce e brócolis", ["batatadoce", "brocolis", "frango", "couve", "girassol"], "mostardaA", "A marmita mais pedida em formato de bowl."],
  ["pb-feijao-arroz-ovo", "🍳", "Arroz, feijão e ovo", ["cenoura", "arroz", "feijaoP", "ovo1", "couve", "salsa"], "cebolaM", "O prato feito brasileiro em bowl frio, com vinagrete."],
  ["pb-atum-cuscuz", "🐟", "Cuscuz com atum e legumes", ["pimentao", "milho", "cuscuz", "atum", "salsa", "alface"], "limao", "Cuscuz marroquino com atum: pronto em 10 minutos."]
]);
})();
