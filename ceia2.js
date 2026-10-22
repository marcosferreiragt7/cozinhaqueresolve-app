/* Festival de Panetones (order bump) e Kit Presente Resolvido (upsell). Ver ceia.js. */
(function () {
var ADO = "xilitol ou eritritol (adoçante culinário que substitui o açúcar 1 para 1)";
var BASE = [
  "1 colher de sopa de psyllium (8 g) + 1/2 xícara de água morna (120 ml)",
  "3 ovos em temperatura ambiente",
  "1/2 xícara de leite vegetal sem açúcar, morno (120 ml)",
  "1/3 de xícara de óleo de coco derretido (80 ml)",
  "1/2 xícara de " + ADO,
  "1 e 1/2 xícara de farinha de arroz (210 g)",
  "1/2 xícara de fécula de batata (75 g)",
  "1/4 de xícara de polvilho doce (35 g)",
  "1 sachê de fermento biológico seco (10 g)",
  "1/2 colher de chá de sal"
];
function base(extra) { return BASE.concat(extra); }
var PASSOS_BASE = [
  { t: "Misture o psyllium com a água morna e espere formar o gel.", timer: 5 },
  { t: "Bata os ovos, o leite, o óleo e o adoçante (com os aromas desta receita) até espumar. Junte o gel e bata 1 minuto." },
  { t: "Acrescente os secos aos poucos e bata 5 minutos em velocidade média. A massa fica grossa e pegajosa: é assim mesmo." }
];
function passos(meio, fim) {
  return PASSOS_BASE.concat(meio).concat([
    { t: "Coloque na forma de panetone de 500 g até a metade, cubra e deixe crescer em lugar morno até perto da borda.", timer: 75 },
    { t: "Asse a 170 °C até o palito sair seco. Cubra com alumínio se dourar rápido.", timer: 45 },
    { t: "Espere esfriar completamente antes de cortar.", timer: 60 }
  ]).concat(fim || []);
}
var F = function (o) { o.col = "festival"; o.sec = "Festival de Panetones"; o.premium = "festival"; o.tempo = o.tempo || 190; o.rende = o.rende || "1 panetone de 500 g"; o.nivel = o.nivel || "Médio"; o.tags = o.tags || ["Forno", "Fermentação"]; return o; };

var R = [
F({ id: "fest-frutas-vermelhas", foto: "img/ceia/fest-frutas-vermelhas.webp", nome: "Panetone de frutas vermelhas", emoji: "🍓",
  intro: "Massa de baunilha com morangos e mirtilos desidratados e cobertura de geleia de frutas vermelhas sem açúcar.",
  ingredientes: base(["1 colher de chá de essência de baunilha", "1 xícara de frutas vermelhas desidratadas sem açúcar (morango, mirtilo) ou congeladas bem escorridas e secas", "Cobertura: geleia de frutas vermelhas sem açúcar do Kit Presente (ou 1 xícara de frutas + 2 colheres de chia cozidas 5 minutos)"]),
  passos: passos([{ t: "Envolva as frutas em 1 colher de farinha de arroz e misture à massa com espátula." }], [{ t: "Espalhe a geleia por cima do panetone frio." }]),
  dica: "Frutas congeladas soltam água: descongele, seque bem no papel-toalha e use metade da quantidade." }),
F({ id: "fest-pistache", foto: "img/ceia/fest-pistache.webp", nome: "Panetone de pistache", emoji: "💚",
  intro: "O sabor mais desejado do ano: massa com pistache triturado e creme de pistache por cima.",
  ingredientes: base(["1/2 xícara de pistache sem sal triturado (60 g)", "Creme: 1/2 xícara de pistache sem sal, 1/2 xícara de leite de coco, 3 colheres de sopa de adoçante, 1 colher de sopa de óleo de coco"]),
  passos: passos([{ t: "Misture o pistache triturado à massa com espátula." }], [{ t: "Creme: processe o pistache até virar pasta, junte o leite de coco, o adoçante e o óleo e bata até ficar liso. Espalhe sobre o panetone frio." }]),
  dica: "Pistache é caro: dá para trocar metade por castanha de caju sem perder o sabor." }),
F({ id: "fest-doce-de-leite", foto: "img/ceia/fest-doce-de-leite.webp", nome: "Panetone de doce de leite de coco", emoji: "🍮",
  intro: "Recheado com doce de leite de coco feito em casa, cremoso e sem açúcar.",
  ingredientes: base(["1 colher de chá de essência de baunilha", "Doce de leite de coco: 400 ml de leite de coco, 1/2 xícara de xilitol, 1 colher de chá de bicarbonato (uma pitada), 1 colher de chá de baunilha"]),
  passos: passos([], [
    { t: "Doce: cozinhe o leite de coco com o xilitol e a pitada de bicarbonato em fogo baixo, mexendo, até reduzir à metade e dourar.", timer: 40 },
    { t: "Depois de frio, faça furos no panetone com o cabo de uma colher e recheie com o doce num saco de confeitar. Cubra o topo com o restante." }]),
  dica: "O bicarbonato ajuda o doce a ganhar cor. Use mesmo só uma pitada, senão fica com gosto." }),
F({ id: "fest-limao-siciliano", foto: "img/ceia/fest-limao.webp", nome: "Panetone de limão-siciliano", emoji: "🍋",
  intro: "Leve e perfumado, com raspas de limão-siciliano na massa e glacê de limão.",
  ingredientes: base(["Raspas de 2 limões-sicilianos", "2 colheres de sopa de suco de limão-siciliano", "Glacê: 1/2 xícara de eritritol em pó + suco de limão até dar ponto"]),
  passos: passos([{ t: "Junte as raspas e o suco junto com os líquidos, no começo." }], [{ t: "Misture o eritritol em pó com o suco de limão, gota a gota, até virar uma pasta grossa, e espalhe sobre o panetone frio." }]),
  dica: "Para o glacê, bata o eritritol no liquidificador até virar pó fino." }),
F({ id: "fest-cafe", foto: "img/ceia/fest-cafe.webp", nome: "Panetone de café com chocolate", emoji: "☕",
  intro: "Massa com café forte e pedaços de chocolate zero açúcar. Para os amantes de café.",
  ingredientes: base(["Troque o leite vegetal por 1/2 xícara de café forte morno", "100 g de chocolate zero açúcar e sem lactose picado"]),
  passos: passos([{ t: "Misture o chocolate picado à massa com espátula." }]),
  dica: "Polvilhe café solúvel moído bem fino por cima antes de servir: fica lindo e perfumado." }),
F({ id: "fest-laranja-chocolate", foto: "img/ceia/fest-laranja.webp", nome: "Panetone de laranja com chocolate", emoji: "🍊",
  intro: "A combinação clássica: raspas de laranja na massa e gotas de chocolate.",
  ingredientes: base(["Raspas de 2 laranjas", "1 colher de chá de essência de laranja (opcional)", "100 g de chocolate zero açúcar e sem lactose picado"]),
  passos: passos([{ t: "Misture o chocolate à massa com espátula." }]),
  dica: "Laranja-pera tem a casca mais perfumada." }),
F({ id: "fest-coco-queimado", foto: "img/ceia/fest-coco.webp", nome: "Panetone de coco queimado", emoji: "🥥",
  intro: "Massa com leite de coco e coco tostado por dentro e por fora.",
  ingredientes: base(["Troque o leite vegetal por leite de coco", "1 xícara de coco ralado sem açúcar, tostado na frigideira até dourar"]),
  passos: passos([{ t: "Misture 3/4 do coco tostado à massa. Guarde o resto para o topo." }], [{ t: "Antes de assar, espalhe o restante do coco por cima (cubra com alumínio se escurecer rápido)." }]),
  dica: "Toste o coco em fogo baixo, mexendo: ele passa de dourado a queimado em segundos." }),
F({ id: "fest-salgado-ervas", foto: "img/ceia/fest-salgado.webp", nome: "Panetone salgado de ervas e tomate seco", emoji: "🌿",
  intro: "Para a entrada da ceia: massa sem adoçante, com tomate seco, azeitona, queijo sem lactose e ervas.",
  ingredientes: BASE.filter(function (x) { return x.indexOf("adoçante") < 0; }).concat(["1 colher de chá a mais de sal", "1/2 xícara de tomate seco picado", "1/3 de xícara de azeitona picada", "1/2 xícara de queijo sem lactose em cubos", "2 colheres de sopa de ervas (orégano, alecrim, manjericão)"]),
  passos: passos([{ t: "Nesta versão, não use adoçante. Misture o tomate, a azeitona, o queijo e as ervas à massa com espátula." }]),
  dica: "Sirva em fatias finas com azeite, ou faça em forminhas de mini panetone para entrada individual." })
];

/* Guia de embalagem (vale para Festival e Kit Presente) */
window.GUIA_EMBALAGEM = [
  "Espere esfriar 100%: embalar morno cria umidade e mofo.",
  "Panetones: saco de celofane + fita + etiqueta. Duram 4 dias fora da geladeira.",
  "Biscoitos e granola: potes de vidro ou latas bem fechadas. Duram até 15 dias.",
  "Doces com chocolate: caixinhas com forminhas, longe do sol. Em dias muito quentes, geladeira.",
  "Sempre coloque a etiqueta com o nome e 'sem açúcar adicionado, sem glúten e sem lactose', e a data em que fez.",
  "Se for vender, informe os ingredientes completos: quem tem restrição precisa dessa informação."
];

/* ===================== KIT PRESENTE (as 5 primeiras = versão R$9,90) ===================== */
var K = function (o, cinco) { o.col = "presentes"; o.sec = "Kit Presente"; o.premium = cinco ? "presentes5" : "presentes"; o.nivel = o.nivel || "Fácil"; return o; };
R = R.concat([
K({ id: "kit-cookies", foto: "img/ceia/kit-cookies.webp", nome: "Cookies com gotas de chocolate", emoji: "🍪", tags: ["Forno", "Presente"], tempo: 35, rende: "20 cookies",
  intro: "Crocantes por fora e macios por dentro. Em saquinho com fita, é o presente mais pedido.",
  ingredientes: ["1/2 xícara de óleo de coco macio", "2/3 de xícara de " + ADO, "1 ovo", "1 colher de chá de baunilha", "1 e 1/2 xícara de farinha de arroz", "1/4 de xícara de amido de milho", "1/2 colher de chá de bicarbonato", "1 pitada de sal", "100 g de chocolate zero açúcar e sem lactose picado"],
  passos: [{ t: "Misture o óleo com o adoçante, junte o ovo e a baunilha." }, { t: "Junte os secos e o chocolate e misture até formar uma massa." }, { t: "Faça bolinhas, achate levemente e asse a 180 °C com espaço entre elas.", timer: 12 }, { t: "Espere esfriar na assadeira (firmam ao esfriar).", timer: 15 }],
  dica: "Tire do forno quando as bordas dourarem e o centro ainda parecer mole." }, true),
K({ id: "kit-brownie-pote", foto: "img/ceia/kit-brownie.webp", nome: "Mistura de brownie no pote", emoji: "🫙", tags: ["Sem forno", "Presente"], tempo: 15, rende: "1 pote de 1 litro",
  intro: "Os ingredientes secos em camadas num pote bonito, com a etiqueta do modo de preparo. Quem ganha só junta ovos e óleo.",
  ingredientes: ["1 xícara de farinha de arroz", "1/2 xícara de cacau em pó 100%", "1 xícara de " + ADO, "1 colher de chá de fermento químico", "1 pitada de sal", "100 g de chocolate zero açúcar e sem lactose picado", "Etiqueta: 'Junte 3 ovos e 1/2 xícara de óleo, misture e asse a 180 °C por 25 minutos'"],
  passos: [{ t: "Num pote de vidro seco, faça camadas: farinha com fermento e sal, adoçante, cacau e chocolate por cima." }, { t: "Feche, amarre uma fita e cole a etiqueta com o modo de preparo." }],
  dica: "Bata levemente o pote na mesa entre as camadas para ficarem retas e bonitas." }, true),
K({ id: "kit-bombom-damasco", foto: "img/ceia/kit-bombom.webp", nome: "Bombons de damasco com chocolate", emoji: "🍫", tags: ["Sem forno", "Presente"], tempo: 30, rende: "20 bombons",
  intro: "Damasco recheado com castanha e banhado em chocolate. Elegante e muito simples.",
  ingredientes: ["20 damascos secos sem açúcar", "20 castanhas de caju ou metades de nozes", "200 g de chocolate zero açúcar e sem lactose"],
  passos: [{ t: "Abra cada damasco de lado e coloque uma castanha dentro." }, { t: "Banhe metade de cada um no chocolate derretido e deixe secar sobre papel-manteiga.", timer: 30 }],
  dica: "Embale em forminhas de papel dentro de uma caixinha." }, true),
K({ id: "kit-trufa-coco", foto: "img/ceia/kit-trufas.webp", nome: "Trufas de coco", emoji: "⚪", tags: ["Sem forno", "Presente"], tempo: 30, rende: "20 trufas",
  intro: "Recheio cremoso de coco envolto em chocolate.",
  ingredientes: ["1 e 1/2 xícara de coco ralado sem açúcar", "1/2 xícara de leite de coco", "3 colheres de sopa de " + ADO, "2 colheres de sopa de óleo de coco", "200 g de chocolate zero açúcar e sem lactose"],
  passos: [{ t: "Processe o coco, o leite de coco, o adoçante e o óleo até formar uma massa que dá liga." }, { t: "Faça bolinhas e leve ao freezer.", timer: 20 }, { t: "Banhe no chocolate derretido e deixe firmar na geladeira.", timer: 20 }],
  dica: "Guarde na geladeira: com o calor, o óleo de coco amolece." }, true),
K({ id: "kit-gingerbread", foto: "img/ceia/kit-gengibre.webp", nome: "Biscoitos de gengibre (bonequinhos)", emoji: "🧑‍🎄", tags: ["Forno", "Presente", "Crianças"], tempo: 60, rende: "25 biscoitos",
  intro: "Os bonequinhos de gengibre clássicos, com especiarias. Ótimo para fazer com as crianças.",
  ingredientes: ["2 xícaras de farinha de arroz", "1/2 xícara de amido de milho", "2/3 de xícara de " + ADO, "2 colheres de chá de gengibre em pó", "1 colher de chá de canela", "1/2 colher de chá de cravo em pó", "1/2 colher de chá de bicarbonato", "1/2 xícara de óleo de coco macio", "1 ovo"],
  passos: [{ t: "Misture os secos. Junte o óleo de coco e o ovo e amasse até ficar lisa." }, { t: "Abra entre plásticos com 0,5 cm e leve à geladeira.", timer: 20 }, { t: "Corte e asse a 180 °C.", timer: 12 }, { t: "Espere esfriar antes de decorar ou embalar.", timer: 15 }],
  dica: "Para decorar sem açúcar, use eritritol em pó com gotas de água como glacê." }, true),
K({ id: "kit-pasta-amendoim", foto: "img/ceia/kit-pasta.webp", nome: "Pasta de amendoim com cacau em pote", emoji: "🥜", tags: ["Processador", "Presente"], tempo: 20, rende: "1 pote de 300 g",
  intro: "Cremosa e caseira, num pote com etiqueta. Presente útil, que dura semanas.",
  ingredientes: ["2 xícaras de amendoim torrado sem sal e sem pele", "2 colheres de sopa de cacau em pó 100%", "2 colheres de sopa de " + ADO, "1 pitada de sal"],
  passos: [{ t: "Processe o amendoim, parando para raspar as laterais, até virar pasta (leva alguns minutos).", timer: 8 }, { t: "Junte o cacau, o adoçante e o sal e processe mais 1 minuto. Envase em pote limpo e seco." }],
  dica: "Se o processador esquentar, pare e espere: a pasta fica mais lisa depois." }),
K({ id: "kit-cha-natalino", foto: "img/ceia/kit-cha.webp", nome: "Mix de chá natalino no pote", emoji: "🍵", tags: ["Sem fogo", "Presente"], tempo: 15, rende: "1 pote para 15 xícaras",
  intro: "Laranja desidratada, canela, cravo e maçã num pote de vidro. Lindo e cheiroso.",
  ingredientes: ["Rodelas de 2 laranjas desidratadas (forno a 100 °C por 2 horas)", "1 maçã em fatias finas desidratada", "5 paus de canela quebrados", "1 colher de sopa de cravo", "1 colher de sopa de erva-doce", "Etiqueta: '1 colher de sopa para 1 xícara de água fervente, abafe 5 minutos'"],
  passos: [{ t: "Desidrate as frutas no forno baixo com a porta entreaberta até ficarem secas.", timer: 120 }, { t: "Misture tudo e envase em pote bem seco." }],
  dica: "Fruta mal desidratada embolora: confira se está bem sequinha antes de fechar." }),
K({ id: "kit-castanhas-canela", foto: "img/ceia/kit-castanhas.webp", nome: "Castanhas carameladas com canela", emoji: "🌰", tags: ["Panela", "Presente"], tempo: 20, rende: "1 pote de 300 g",
  intro: "Crocantes e perfumadas, carameladas com xilitol.",
  ingredientes: ["2 xícaras de castanhas (caju, amêndoas, nozes)", "1/3 de xícara de xilitol", "2 colheres de sopa de água", "1 colher de chá de canela", "1 pitada de sal"],
  passos: [{ t: "Leve o xilitol, a água e a canela ao fogo até borbulhar." }, { t: "Junte as castanhas e mexa até a calda cristalizar e envolver tudo.", timer: 6 }, { t: "Espalhe em papel-manteiga e separe enquanto esfriam." }],
  dica: "Aqui o xilitol funciona melhor que o eritritol, que fica arenoso." }),
K({ id: "kit-geleia", foto: "img/ceia/kit-geleia.webp", nome: "Geleia de frutas vermelhas com chia", emoji: "🍓", tags: ["Panela", "Presente", "Geladeira"], tempo: 25, rende: "1 pote de 250 ml",
  intro: "Geleia sem açúcar que firma com chia. Para presentear junto com os biscoitos.",
  ingredientes: ["2 xícaras de frutas vermelhas (frescas ou congeladas)", "3 colheres de sopa de " + ADO, "2 colheres de sopa de chia", "Suco de 1/2 limão"],
  passos: [{ t: "Cozinhe as frutas com o adoçante, amassando, até desmanchar.", timer: 10 }, { t: "Desligue, junte a chia e o limão e espere engrossar.", timer: 15 }, { t: "Envase em pote limpo e guarde na geladeira (dura 10 dias)." }],
  dica: "Sem açúcar, a geleia não conserva fora da geladeira: avise quem receber." }),
K({ id: "kit-bolo-caneca-pote", foto: "img/ceia/kit-caneca.webp", nome: "Mix de bolo de caneca natalino", emoji: "☕", tags: ["Sem forno", "Presente"], tempo: 15, rende: "4 saquinhos (4 bolos)",
  intro: "Uma caneca bonita com saquinhos de mistura pronta: é só juntar ovo e leite e ir ao micro-ondas.",
  ingredientes: ["Para cada saquinho: 4 colheres de sopa de farinha de arroz, 2 colheres de sopa de " + ADO + ", 1 colher de sopa de cacau, 1/2 colher de chá de fermento químico e 1 pitada de canela", "Etiqueta: 'Misture com 1 ovo, 3 colheres de leite vegetal e 1 de óleo. Micro-ondas por 1 minuto e meio'"],
  passos: [{ t: "Misture os ingredientes de cada saquinho e feche bem." }, { t: "Coloque os saquinhos dentro de uma caneca, amarre com fita e cole a etiqueta." }],
  dica: "Canecas de loja de 1,99 ficam lindas com uma fita vermelha." })
]);

window.RECEITAS.push.apply(window.RECEITAS, R);
})();
