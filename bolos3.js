/* ================================================================
   BOLOS FITNESS QUE RESOLVEM — PREMIUM: 10 bônus
   6 Cookies fit · 7 Pães fit de café da manhã · 8 Panquecas e crepiocas
   proteicas · 9 Sobremesas geladas fit · 10 Recheios cremosos fit
   11 Mix de farinhas sem glúten · 12 Cardápio da semana · 13 Lista de
   compras automática · 14 Calculadora de preço · 15 Kit bolo no pote.
   Carregar DEPOIS de bolos2.js. premium: "bolos_premium".
   ================================================================ */
(function () {
var R = window.RECEITAS, XI = "xilitol ou eritritol";
window.SECOES.bolos = window.SECOES.bolos.concat(["Bônus Premium · Cookies fit", "Bônus Premium · Pães fit de café da manhã",
  "Bônus Premium · Panquecas e crepiocas proteicas", "Bônus Premium · Sobremesas geladas fit", "Bônus Premium · Recheios cremosos fit"]);
var AV = {
  aveia: "Leva aveia: a aveia comum pode ter traços de glúten. Para uma versão sem glúten, use aveia certificada sem glúten.",
  leite: "Leva leite, iogurte, queijo ou whey (contém lactose).",
  sgsl: "Sem glúten e sem lactose: confira no rótulo de cada ingrediente.",
  semacucar: "Sem açúcar: adoçado só com xilitol ou eritritol. Xilitol é tóxico para cães.",
  amendoim: "Leva amendoim.", castanha: "Leva castanhas.", ovo: "Leva ovos."
};
function av() { return Array.prototype.slice.call(arguments).map(function (k) { return AV[k] || k; }).join(" "); }
function B(sec, o) { o.col = "bolos"; o.premium = "bolos_premium"; o.sec = sec; o.foto = o.foto || ""; o.nivel = o.nivel || "Fácil"; R.push(o); }

/* ---------------- 6. COOKIES FIT (8) ---------------- */
var CK = "Bônus Premium · Cookies fit";
function COOKIE(o) {
  B(CK, { id: o.id, emoji: o.emoji, nome: o.nome, intro: o.intro, tempo: o.tempo || 25, rende: o.rende || "12 cookies", tags: ["Cookie", "Forno", "Lanche"].concat(o.tags || []),
    ingredientes: o.ing,
    passos: [{ t: "Preaqueça o forno a 180 °C e forre uma assadeira com papel-manteiga." }, { t: o.mistura }, { t: "Faça bolinhas de 25 g, coloque na assadeira com espaço entre elas e achate com a palma da mão." },
      { t: "Asse a 180 °C por " + (o.min || 12) + " minutos. Eles saem macios e firmam ao esfriar.", timer: o.min || 12 }],
    dica: o.dica || "Cookie fit não espalha sozinho no forno: achate antes de assar, no tamanho que você quer.", aviso: av.apply(null, o.av) });
}
COOKIE({ id: "bb-cookie-banana-aveia", emoji: "🍌", nome: "Cookie de banana e aveia (3 ingredientes)", intro: "Banana, aveia e gotas de chocolate. Só isso.", ing: ["2 bananas maduras amassadas", "160 g de aveia em flocos", "50 g de gotas de chocolate 70%", "1 pitada de canela (opcional)"], mistura: "Amasse as bananas e misture com a aveia e as gotas.", min: 15, av: ["aveia"], tags: ["Sem ovo"] });
COOKIE({ id: "bb-cookie-cacau", emoji: "🍫", nome: "Cookie de cacau com gotas", intro: "Escuro e macio por dentro.", ing: ["1 ovo", "40 g de óleo de coco", "60 g de açúcar de coco", "100 g de farinha de aveia", "20 g de cacau", "3 g de fermento", "50 g de gotas de chocolate 70%"], mistura: "Misture o ovo, o óleo e o açúcar. Junte a farinha, o cacau, o fermento e as gotas.", av: ["aveia", "ovo"] });
COOKIE({ id: "bb-cookie-amendoim", emoji: "🥜", nome: "Cookie de pasta de amendoim (3 ingredientes)", intro: "Pasta de amendoim, ovo e açúcar de coco.", ing: ["200 g de pasta de amendoim integral", "1 ovo", "70 g de açúcar de coco"], mistura: "Misture tudo até formar uma massa. Achate as bolinhas com um garfo, fazendo o risco cruzado.", min: 10, av: ["amendoim", "ovo", "Sem glúten e sem lactose."], tags: ["Sem glúten"] });
COOKIE({ id: "bb-cookie-coco", emoji: "🥥", nome: "Cookie de coco", intro: "Crocante por fora, macio por dentro.", ing: ["1 ovo", "40 g de óleo de coco", "60 g de açúcar de coco", "80 g de coco ralado", "60 g de farinha de arroz", "3 g de fermento"], mistura: "Misture tudo até formar uma massa.", av: ["sgsl", "ovo"], tags: ["Sem glúten"] });
COOKIE({ id: "bb-cookie-aveia-passas", emoji: "🍇", nome: "Cookie de aveia com uvas-passas", intro: "O clássico de aveia com canela e passas.", ing: ["1 ovo", "40 g de óleo de coco", "60 g de açúcar mascavo", "100 g de aveia em flocos", "40 g de farinha de aveia", "3 g de canela", "3 g de fermento", "50 g de uvas-passas"], mistura: "Misture o ovo, o óleo e o açúcar. Junte o resto.", av: ["aveia", "ovo"] });
COOKIE({ id: "bb-cookie-laranja-chocolate", emoji: "🍊", nome: "Cookie de laranja com chocolate", intro: "Raspas de laranja e pedaços de chocolate.", ing: ["1 ovo", "40 g de óleo de coco", "60 g de açúcar de coco", "Raspas de 1 laranja", "120 g de farinha de aveia", "3 g de fermento", "50 g de chocolate 70% picado"], mistura: "Misture o ovo, o óleo, o açúcar e as raspas. Junte o resto.", av: ["aveia", "ovo"] });
COOKIE({ id: "bb-cookie-sem-acucar", emoji: "🍫", nome: "Cookie de cacau sem açúcar", intro: "Adoçado só com " + XI + ".", ing: ["1 ovo", "40 g de óleo de coco", "60 g de " + XI, "100 g de farinha de amêndoas", "20 g de cacau", "3 g de fermento", "40 g de chocolate 70% sem açúcar picado"], mistura: "Misture tudo até formar uma massa.", av: ["semacucar", "castanha", "ovo"], tags: ["Sem açúcar", "Sem glúten"] });
COOKIE({ id: "bb-cookie-proteico", emoji: "💪", nome: "Cookie proteico", intro: "Com whey, para o lanche.", ing: ["1 ovo", "30 g de pasta de amendoim", "30 g de whey sabor baunilha ou chocolate", "40 g de açúcar de coco", "60 g de farinha de aveia", "30 g de leite (ou bebida vegetal)", "3 g de fermento", "30 g de gotas de chocolate 70%"], mistura: "Misture tudo até formar uma massa que não grude nas mãos.", av: ["aveia", "leite", "amendoim", "ovo"], tags: ["Proteico"] });

/* ---------------- 7. PÃES FIT DE CAFÉ DA MANHÃ (6) ---------------- */
var PF = "Bônus Premium · Pães fit de café da manhã";
B(PF, { id: "bb-pao-aveia-liq", emoji: "🍞", nome: "Pão de aveia de liquidificador", intro: "Pão de forma rápido, sem sova e sem fermento biológico.", tempo: 50, rende: "1 pão de forma (12 fatias)", tags: ["Liquidificador", "Forno", "Salgado"],
  ingredientes: ["3 ovos", "200 g de iogurte natural", "40 g de azeite", "200 g de aveia em flocos", "5 g de sal", "10 g de fermento químico", "Sementes para o topo (gergelim, linhaça)"],
  passos: [{ t: "Preaqueça o forno a 180 °C e unte uma forma de pão de 25 cm." }, { t: "Bata os ovos, o iogurte, o azeite, a aveia e o sal até ficar liso. Misture o fermento com uma colher." }, { t: "Despeje na forma, cubra com as sementes e asse por 35 minutos.", timer: 35 }, { t: "Espere esfriar para fatiar.", timer: 30 }],
  dica: "Fica ótimo na torradeira no dia seguinte.", aviso: av("aveia", "leite", "ovo") });
B(PF, { id: "bb-pao-frigideira-proteico", emoji: "🍳", nome: "Pão de frigideira proteico", intro: "Pronto em 5 minutos, para sanduíche.", tempo: 5, rende: "1 pão (2 metades)", tags: ["Frigideira", "Rápido", "Proteico"],
  ingredientes: ["1 ovo", "30 g de iogurte natural ou requeijão", "20 g de farinha de aveia", "10 g de whey sem sabor (opcional)", "1 pitada de sal", "2 g de fermento"],
  passos: [{ t: "Misture tudo com um garfo." }, { t: "Despeje numa frigideira pequena untada, tampe e cozinhe em fogo baixo por 3 minutos. Vire e doure 1 minuto.", timer: 4 }, { t: "Corte ao meio e recheie." }],
  dica: "Recheie com ovo, queijo branco ou frango desfiado.", aviso: av("aveia", "leite", "ovo") });
B(PF, { id: "bb-pao-batata-doce", emoji: "🍠", nome: "Pão de batata-doce", intro: "Macio, com batata-doce na massa e fermento biológico.", tempo: 120, rende: "8 pãezinhos", nivel: "Médio", tags: ["Forno", "Fermentação", "Salgado"],
  ingredientes: ["200 g de batata-doce cozida e amassada", "1 ovo", "30 g de azeite", "60 g de água morna", "250 g de farinha de trigo integral", "5 g de fermento biológico seco", "5 g de sal", "10 g de mel"],
  passos: [{ t: "Misture a batata, o ovo, o azeite, a água, o mel e o fermento. Junte a farinha e o sal e sove por 8 minutos." }, { t: "Cubra e deixe crescer 1 hora, até dobrar.", timer: 60 }, { t: "Divida em 8 bolinhas, coloque na assadeira e deixe crescer mais 20 minutos.", timer: 20 }, { t: "Asse a 180 °C por 25 minutos.", timer: 25 }],
  dica: "A massa é um pouco grudenta: unte as mãos com azeite em vez de pôr mais farinha.", aviso: "Leva farinha de trigo integral (glúten). " + av("ovo") });
B(PF, { id: "bb-pao-forma-aveia", emoji: "🍞", nome: "Pão de forma de aveia com fermento biológico", intro: "Pão de forma macio para a semana, com aveia e farinha integral.", tempo: 150, rende: "1 pão de forma (14 fatias)", nivel: "Médio", tags: ["Forno", "Fermentação", "Salgado"],
  ingredientes: ["280 g de água morna", "30 g de azeite", "15 g de mel", "7 g de fermento biológico seco", "100 g de aveia em flocos finos", "300 g de farinha de trigo integral", "8 g de sal"],
  passos: [{ t: "Misture a água, o azeite, o mel e o fermento. Junte a aveia, a farinha e o sal e sove por 10 minutos." }, { t: "Deixe crescer 1 hora.", timer: 60 }, { t: "Modele um rolo, coloque na forma untada e deixe crescer 40 minutos.", timer: 40 }, { t: "Asse a 190 °C por 35 minutos.", timer: 35 }],
  dica: "Fatie só frio e congele em fatias para a semana.", aviso: av("aveia") + " Leva farinha de trigo integral (glúten)." });
B(PF, { id: "bb-pao-nuvem", emoji: "☁️", nome: "Pão nuvem", intro: "Leve como uma nuvem, sem farinha: ovos e cream cheese.", tempo: 35, rende: "6 pães", tags: ["Forno", "Sem glúten", "Low carb"],
  ingredientes: ["3 ovos (claras e gemas separadas)", "60 g de cream cheese", "1 pitada de sal", "2 g de fermento químico"],
  passos: [{ t: "Preaqueça o forno a 150 °C." }, { t: "Bata as claras em neve firme com o fermento. Misture as gemas com o cream cheese e o sal. Incorpore as claras delicadamente." }, { t: "Faça 6 discos na assadeira com papel-manteiga e asse por 25 minutos.", timer: 25 }],
  dica: "Forno baixo: a 150 °C ele cresce sem dourar demais.", aviso: av("leite", "ovo", "Sem glúten.") });
B(PF, { id: "bb-pao-queijo-iogurte", emoji: "🧀", nome: "Pão de queijo de frigideira com iogurte", intro: "Massa de tapioca com iogurte e queijo, feito na frigideira.", tempo: 10, rende: "1 disco grande", tags: ["Frigideira", "Rápido", "Sem glúten"],
  ingredientes: ["1 ovo", "50 g de iogurte natural", "40 g de goma de tapioca", "30 g de queijo minas ralado", "1 pitada de sal"],
  passos: [{ t: "Misture tudo." }, { t: "Despeje na frigideira antiaderente untada, tampe e cozinhe em fogo baixo por 4 minutos. Vire e doure 1 minuto.", timer: 5 }],
  dica: "Fica com textura de pão de queijo: elástico por dentro.", aviso: av("leite", "ovo", "Sem glúten.") });

/* ------------- 8. PANQUECAS E CREPIOCAS PROTEICAS (8) ------------- */
var PQ = "Bônus Premium · Panquecas e crepiocas proteicas";
function PAN(o) { B(PQ, { id: o.id, emoji: o.emoji, nome: o.nome, intro: o.intro, tempo: o.tempo || 15, rende: o.rende || "4 panquecas pequenas", tags: ["Frigideira", "Café da manhã", "Rápido"].concat(o.tags || []),
  ingredientes: o.ing, passos: [{ t: o.mistura }, { t: o.cozinha || "Aqueça uma frigideira antiaderente untada em fogo baixo. Coloque porções de 2 colheres de sopa e cozinhe até aparecerem bolhinhas (2 minutos). Vire e cozinhe mais 1 minuto.", timer: 3 }].concat(o.extra ? [{ t: o.extra }] : []),
  dica: o.dica, aviso: av.apply(null, o.av) }); }
PAN({ id: "bb-pan-banana-aveia", emoji: "🍌", nome: "Panqueca de banana e aveia", intro: "Banana, ovo e aveia. Doce da fruta.", ing: ["1 banana madura", "2 ovos", "40 g de aveia em flocos", "1 pitada de canela", "2 g de fermento"], mistura: "Bata tudo no liquidificador.", dica: "Sirva com mel e frutas.", av: ["aveia", "ovo"] });
PAN({ id: "bb-pan-whey", emoji: "💪", nome: "Panqueca proteica de whey", intro: "Com whey de baunilha ou chocolate.", ing: ["2 ovos", "30 g de whey", "50 g de leite (ou bebida vegetal)", "30 g de farinha de aveia", "2 g de fermento"], mistura: "Misture tudo até não ter grumos.", dica: "Cubra com pasta de amendoim e banana.", av: ["aveia", "leite", "ovo"], tags: ["Proteico"] });
PAN({ id: "bb-pan-americana", emoji: "🥞", nome: "Panqueca americana fit", intro: "Fofinha, de pilha, com iogurte.", ing: ["1 ovo", "120 g de iogurte natural", "30 g de leite", "15 g de mel", "80 g de farinha de aveia", "4 g de fermento"], mistura: "Misture os líquidos e o mel, junte a farinha e o fermento. Deixe a massa descansar 5 minutos.", dica: "Massa mais grossa = panqueca mais alta.", av: ["aveia", "leite", "ovo"] });
PAN({ id: "bb-pan-cacau", emoji: "🍫", nome: "Panqueca de cacau", intro: "Panqueca de chocolate para o café da manhã de domingo.", ing: ["2 ovos", "1 banana madura", "30 g de farinha de aveia", "10 g de cacau", "2 g de fermento"], mistura: "Bata tudo no liquidificador.", dica: "Sirva com morangos e iogurte.", av: ["aveia", "ovo"] });
PAN({ id: "bb-crep-frango", emoji: "🍗", nome: "Crepioca de frango com requeijão", intro: "Salgada, para o almoço rápido ou o jantar.", rende: "1 crepioca", ing: ["1 ovo", "20 g de goma de tapioca", "1 pitada de sal", "Recheio: 60 g de frango desfiado + 20 g de requeijão"], mistura: "Misture o ovo, a tapioca e o sal.",
  cozinha: "Despeje numa frigideira untada, espalhe e cozinhe em fogo baixo por 2 minutos. Vire, coloque o recheio em metade, dobre e cozinhe mais 1 minuto.", av: ["leite", "ovo", "Sem glúten."], tags: ["Salgado", "Sem glúten"] });
PAN({ id: "bb-crep-banana-canela", emoji: "🍌", nome: "Crepioca doce de banana com canela", intro: "Doce, com banana caramelizada.", rende: "1 crepioca", ing: ["1 ovo", "20 g de goma de tapioca", "1/2 banana em rodelas", "5 g de mel", "Canela a gosto"], mistura: "Misture o ovo e a tapioca. Doure as rodelas de banana com o mel na frigideira.",
  cozinha: "Despeje a massa sobre as bananas, cozinhe 2 minutos, vire e cozinhe mais 1. Polvilhe canela.", av: ["ovo", "Sem glúten e sem lactose."], tags: ["Sem glúten"] });
PAN({ id: "bb-crep-queijo", emoji: "🧀", nome: "Crepioca de queijo e orégano", intro: "Lembra uma pizza fininha.", rende: "1 crepioca", ing: ["1 ovo", "20 g de goma de tapioca", "30 g de queijo muçarela ou minas", "1 tomate em rodelas", "Orégano"], mistura: "Misture o ovo e a tapioca.",
  cozinha: "Cozinhe a massa 2 minutos, vire, cubra com o queijo e o tomate, tampe até o queijo derreter. Finalize com orégano.", av: ["leite", "ovo", "Sem glúten."], tags: ["Salgado", "Sem glúten"] });
PAN({ id: "bb-pan-sem-acucar", emoji: "🥞", nome: "Panqueca de baunilha sem açúcar", intro: "Adoçada com " + XI + ".", ing: ["2 ovos", "50 g de iogurte natural", "10 g de " + XI, "40 g de farinha de amêndoas", "5 g de baunilha", "2 g de fermento"], mistura: "Misture tudo.", dica: "Cubra com a Geleia de morango sem açúcar dos Recheios cremosos.", av: ["semacucar", "castanha", "leite", "ovo"], tags: ["Sem açúcar"] });

/* ---------------- 9. SOBREMESAS GELADAS FIT (8) ---------------- */
var SG = "Bônus Premium · Sobremesas geladas fit";
function GEL(o) { B(SG, { id: o.id, emoji: o.emoji, nome: o.nome, intro: o.intro, tempo: o.tempo || 20, rende: o.rende || "4 porções", tags: ["Geladeira", "Sobremesa", "Sem forno"].concat(o.tags || []),
  ingredientes: o.ing, passos: o.passos, dica: o.dica, aviso: av.apply(null, o.av) }); }
GEL({ id: "bb-gel-mousse-abacate", emoji: "🥑", nome: "Mousse de chocolate com abacate", intro: "Cremoso como mousse de verdade; o abacate não aparece no sabor.", ing: ["1 abacate maduro (cerca de 250 g de polpa)", "30 g de cacau", "50 g de mel ou açúcar de coco", "60 g de leite de coco", "5 g de baunilha"],
  passos: [{ t: "Bata tudo no liquidificador ou processador até ficar bem liso." }, { t: "Divida em potinhos e leve à geladeira por 2 horas.", timer: 120 }], dica: "Abacate bem maduro é o que deixa liso.", av: ["sgsl"] });
GEL({ id: "bb-gel-mousse-maracuja", emoji: "💛", nome: "Mousse de maracujá de iogurte", intro: "Azedinho e leve, sem leite condensado e sem creme de leite.", ing: ["340 g de iogurte grego natural", "120 g de suco de maracujá concentrado", "40 g de mel", "Polpa de 1 maracujá"],
  passos: [{ t: "Misture o iogurte, o suco e o mel até ficar liso." }, { t: "Distribua em potes, cubra com a polpa e gele por 2 horas.", timer: 120 }], dica: "Iogurte grego escorrido deixa a mousse mais firme.", av: ["leite"] });
GEL({ id: "bb-gel-pudim-chia", emoji: "🥥", nome: "Pudim de chia com coco e manga", intro: "Prepare à noite, coma de manhã.", ing: ["40 g de chia", "250 g de leite de coco", "15 g de mel", "1 manga picada"],
  passos: [{ t: "Misture a chia, o leite de coco e o mel. Mexa de novo depois de 10 minutos." }, { t: "Leve à geladeira por pelo menos 4 horas.", timer: 240 }, { t: "Sirva com a manga por cima." }], dica: "Mexer de novo depois de 10 minutos evita que a chia empelote.", av: ["sgsl"] });
GEL({ id: "bb-gel-nice-cream", emoji: "🍨", nome: "Sorvete de banana com cacau (nice cream)", intro: "Banana congelada batida vira sorvete cremoso.", ing: ["3 bananas maduras em rodelas, congeladas", "15 g de cacau", "30 g de leite (ou bebida vegetal), se precisar"],
  passos: [{ t: "Bata as bananas congeladas no processador, raspando as laterais, até virar creme (3 a 5 minutos)." }, { t: "Junte o cacau. Sirva na hora, ou congele 1 hora para ficar mais firme.", timer: 60 }], dica: "Sem processador potente, deixe a banana 5 minutos fora do freezer antes.", av: ["Sem glúten. Sem lactose se usar bebida vegetal."] });
GEL({ id: "bb-gel-picole-frutas", emoji: "🍓", nome: "Picolé de frutas vermelhas com iogurte", intro: "Camadas de iogurte e frutas.", rende: "6 picolés", ing: ["300 g de iogurte natural", "30 g de mel", "200 g de frutas vermelhas batidas"],
  passos: [{ t: "Misture o iogurte com metade do mel; bata as frutas com o resto do mel." }, { t: "Alterne as duas misturas nas forminhas, coloque os palitos e congele por 6 horas.", timer: 360 }], dica: "Passe a forminha em água morna por 10 segundos para desenformar.", av: ["leite"] });
GEL({ id: "bb-gel-gelatina-agar", emoji: "🍇", nome: "Gelatina de suco de uva com ágar-ágar", intro: "Gelatina de suco integral, firmada com ágar-ágar (de alga).", ing: ["500 g de suco de uva integral", "2 g de ágar-ágar em pó", "Frutas picadas (opcional)"],
  passos: [{ t: "Misture o ágar no suco frio e ferva por 2 minutos, mexendo.", timer: 2 }, { t: "Despeje em potinhos (com as frutas, se quiser) e gele por 1 hora.", timer: 60 }], dica: "Ágar firma até em temperatura ambiente: trabalhe rápido.", av: ["sgsl"] });
GEL({ id: "bb-gel-cheesecake-pote", emoji: "🍰", nome: "Cheesecake de pote fit", intro: "Base de aveia, creme de iogurte e calda de frutas.", rende: "4 potes", ing: ["Base: 60 g de aveia + 20 g de óleo de coco + 10 g de mel", "Creme: 300 g de iogurte grego + 100 g de cream cheese + 30 g de mel", "Calda de frutas vermelhas (do bônus de coberturas)"],
  passos: [{ t: "Misture a base e aperte no fundo dos potes." }, { t: "Bata o creme e distribua por cima. Termine com a calda." }, { t: "Gele por 3 horas.", timer: 180 }], dica: "Leve a base 5 minutos ao forno antes, se quiser crocante.", av: ["aveia", "leite"] });
GEL({ id: "bb-gel-pave-banana", emoji: "🍌", nome: "Pavê fit de banana", intro: "Camadas de bolo, banana e creme de iogurte.", rende: "1 travessa (8 porções)", ing: ["Massa branca do bolo de pote (meia dose), em fatias", "4 bananas em rodelas", "Creme: 500 g de iogurte grego + 40 g de mel + 2 g de canela", "Cacau para polvilhar"],
  passos: [{ t: "Numa travessa, alterne fatias de bolo, banana e creme. Termine com creme." }, { t: "Polvilhe cacau e gele por 4 horas.", timer: 240 }], dica: "Use o bolo do dia anterior: absorve melhor o creme.", av: ["aveia", "leite"] });

/* ---------------- 10. RECHEIOS CREMOSOS FIT (6) ---------------- */
var RC = "Bônus Premium · Recheios cremosos fit";
function RE(o) { B(RC, { id: o.id, emoji: o.emoji, nome: o.nome, intro: o.intro, tempo: o.tempo || 15, rende: o.rende || "Para 1 bolo de 20 cm", tags: ["Recheio"].concat(o.tags || []),
  ingredientes: o.ing, passos: o.passos, dica: o.dica, aviso: av.apply(null, o.av) }); }
RE({ id: "bb-rec-iogurte-firme", emoji: "🥛", nome: "Creme de iogurte firme para rechear", intro: "Iogurte grego escorrido: firme para rechear e cobrir.", tempo: 10, ing: ["500 g de iogurte natural integral", "100 g de cream cheese", "40 g de mel", "5 g de baunilha"],
  passos: [{ t: "Escorra o iogurte numa peneira forrada com pano, na geladeira, por 4 horas (vira cerca de 300 g).", timer: 240 }, { t: "Bata com o cream cheese, o mel e a baunilha." }], dica: "Quanto mais tempo escorrendo, mais firme.", av: ["leite"] });
RE({ id: "bb-rec-ganache-coco", emoji: "🍫", nome: "Ganache de cacau com leite de coco", intro: "Ganache sem creme de leite.", ing: ["150 g de chocolate 70%", "120 g de creme de coco"], passos: [{ t: "Aqueça o creme de coco até quase ferver e despeje sobre o chocolate picado. Espere 2 minutos e misture até ficar brilhante." }, { t: "Para rechear, deixe esfriar até ficar firme (30 minutos).", timer: 30 }], dica: "Confira se o chocolate 70% não leva leite.", av: ["sgsl"] });
RE({ id: "bb-rec-amendoim", emoji: "🥜", nome: "Creme de pasta de amendoim", intro: "Sabor de bombom de amendoim.", ing: ["150 g de pasta de amendoim", "150 g de iogurte grego", "30 g de mel"], passos: [{ t: "Misture tudo até ficar liso." }], dica: "Para sem lactose, troque o iogurte por leite de coco (60 g).", av: ["amendoim", "leite"] });
RE({ id: "bb-rec-doce-leite-coco", emoji: "🍯", nome: "Doce de leite de coco", intro: "Caramelo de coco, sem leite condensado.", tempo: 40, ing: ["400 g de leite de coco", "80 g de açúcar de coco", "1 pitada de sal"], passos: [{ t: "Ferva em fogo baixo, mexendo de vez em quando, por 30 a 35 minutos, até reduzir e ficar cor de caramelo.", timer: 35 }, { t: "Desligue ainda mole: ele engrossa ao esfriar." }], dica: "Panela larga reduz mais rápido.", av: ["sgsl"] });
RE({ id: "bb-rec-geleia-morango", emoji: "🍓", nome: "Geleia de morango sem açúcar com chia", intro: "Adoçada com " + XI + " e firmada com chia.", tempo: 15, ing: ["300 g de morangos picados", "30 g de " + XI, "15 g de chia", "10 g de suco de limão"], passos: [{ t: "Cozinhe os morangos com o adoçante e o limão por 8 minutos, amassando.", timer: 8 }, { t: "Desligue, junte a chia e deixe esfriar: ela engrossa." }], dica: "Dura 7 dias na geladeira.", av: ["semacucar", "sgsl"], tags: ["Sem açúcar"] });
RE({ id: "bb-rec-creme-limao", emoji: "🍋", nome: "Creme de limão (lemon curd fit)", intro: "Creme amarelo, azedinho e liso.", tempo: 15, ing: ["4 gemas", "120 g de suco de limão", "80 g de mel", "Raspas de 2 limões", "40 g de óleo de coco"], passos: [{ t: "Cozinhe as gemas, o suco e o mel em banho-maria, mexendo sempre, até engrossar (8 a 10 minutos).", timer: 9 }, { t: "Fora do fogo, junte o óleo de coco e as raspas. Esfrie coberto com plástico encostado." }], dica: "Banho-maria evita que as gemas cozinhem demais.", av: ["ovo", "Sem glúten e sem lactose."] });

/* ---------------- 11 a 15. GUIAS E FERRAMENTAS ---------------- */
var DIAS = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];
var CARD = [
  ["bb-pan-banana-aveia", "bf-frig-chocolate"], ["bb-pao-aveia-liq", "bp-muf-banana-nozes"], ["bb-crep-queijo", "bf-can-chocolate"],
  ["bb-pan-americana", "bp-prot-banana"], ["bb-pao-frigideira-proteico", "bb-cookie-banana-aveia"], ["bb-crep-banana-canela", "bf-air-cenoura"], ["bb-pan-cacau", "bb-gel-mousse-maracuja"]];
window.GUIAS.push(
  { id: "bb-mix-farinhas", produto: "bolos_premium", col: "bolos", emoji: "🌾", nome: "Mix de farinhas sem glúten caseiro",
    sub: "4 misturas para trocar a farinha de aveia nos bolos, em gramas",
    itens: [
      { n: "Mix 1 · Bolo fofinho (o mais usado)", t: "600 g de farinha de arroz + 200 g de amido de milho + 200 g de fécula de batata.\nTroca 1 por 1 a farinha de aveia de qualquer bolo da coleção." },
      { n: "Mix 2 · Bolo úmido e nutritivo", t: "500 g de farinha de arroz + 300 g de farinha de amêndoas + 200 g de amido de milho.\nBom para bolos de frutas, cenoura e chocolate." },
      { n: "Mix 3 · Bolo elástico (tipo pão de ló)", t: "500 g de farinha de arroz + 300 g de polvilho doce + 200 g de amido de milho.\nBom para rocamboles e bolos de pote." },
      { n: "Mix 4 · Sem amido (mais fibras)", t: "500 g de farinha de arroz integral + 300 g de farinha de grão-de-bico + 200 g de farinha de coco.\nUse 10% menos que a receita pede: absorve mais líquido." },
      { n: "Como guardar", t: "Misture bem num pote fechado, etiquete com a data e guarde em local seco por até 3 meses.\nAntes de usar, mexa o pote: o amido assenta no fundo." }
    ] },
  { id: "bb-cardapio", produto: "bolos_premium", col: "bolos", emoji: "📅", nome: "Cardápio da semana fit", sub: "Café da manhã e lanche da tarde de domingo a sábado, com receitas da coleção",
    cardapio: DIAS.reduce(function (a, d, i) { return a.concat([{ id: CARD[i][0], tipo: d + " · café da manhã" }, { id: CARD[i][1], tipo: d + " · lanche da tarde" }]); }, []),
    porcoes: [{ n: "Como usar", t: "Toque numa receita para abrir. O botão abaixo coloca todos os ingredientes da semana na Lista de compras do app." }] },
  { id: "bb-lista", produto: "bolos_premium", col: "bolos", emoji: "🛒", nome: "Lista de compras automática", sub: "Os ingredientes da semana numa lista só, para levar ao mercado",
    cardapio: DIAS.reduce(function (a, d, i) { return a.concat([{ id: CARD[i][0], tipo: d }, { id: CARD[i][1], tipo: d }]); }, []),
    porcoes: [{ n: "Como funciona", t: "Toque em 'Colocar tudo na lista de compras'. A lista fica na aba Lista, embaixo, e você marca o que já comprou. Também dá para mandar a lista pelo WhatsApp." },
      { n: "Em qualquer receita", t: "Dentro de cada receita tem o botão '+ Lista de compras', para montar a sua própria lista." }] },
  { id: "bb-preco", produto: "bolos_premium", col: "bolos", emoji: "💰", nome: "Calculadora de preço para vender", sub: "Custo de cada receita e preço sugerido, com a Central PRO",
    calc: "preco",
    itens: [{ n: "Como calcular", t: "Some o custo dos ingredientes, da embalagem e do gás, divida pelo número de unidades e aplique a sua margem.\nNa Central PRO (incluída no Premium) a calculadora faz isso por receita e guarda os preços dos ingredientes." },
      { n: "Referência para bolo no pote", t: "Ingredientes + pote + colher + etiqueta = custo por pote.\nPreço de venda: custo x 2,5 a 3, conferindo o preço da sua região." }] },
  { id: "bb-kit-pote", produto: "bolos_premium", col: "bolos", emoji: "🎁", nome: "Kit bolo no pote para vender", sub: "Embalagem, etiqueta, validade, preço e mensagens de WhatsApp",
    itens: [
      { n: "Embalagem", t: "Pote de 250 ml com tampa (de plástico PP ou de vidro), colher pequena, adesivo na tampa.\nUm pote de 250 ml leva cerca de 50 g de massa e 120 g de creme." },
      { n: "Etiqueta", t: "Nome do bolo, data de fabricação, 'consumir em até 3 dias', 'manter refrigerado' e os ingredientes que pedem atenção (leite, ovos, amendoim, glúten)." },
      { n: "Validade e conservação", t: "Até 3 dias na geladeira (de 0 a 5 °C). Não congele bolos de pote com creme de iogurte: ele solta água." },
      { n: "Os 5 sabores que mais vendem", t: "Brigadeiro, prestígio, morango com creme branco, maracujá e cenoura com chocolate. Comece com 3 e teste." },
      { n: "Mensagens para o WhatsApp", t: "Divulgação: \"🍫 Bolo de pote fit fresquinho! Sabores de hoje: brigadeiro, prestígio e maracujá. R$ __ cada. Peça até __h para retirar hoje.\"\nEncomenda: \"Oi! Anotei seu pedido: __ potes de __. Total R$ __. Retirada/entrega dia __ às __h. Posso confirmar?\"\nPós-venda: \"Oi, tudo bem? O que achou do bolo de pote? Sua opinião me ajuda muito 💛\"" },
      { n: "Antes de vender", t: "Confira as regras da prefeitura da sua cidade para venda de alimentos feitos em casa. Os resultados de vendas dependem do seu trabalho, preço e região." }
    ] }
);
})();
