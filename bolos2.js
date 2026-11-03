/* ================================================================
   BOLOS FITNESS QUE RESOLVEM — PREMIUM (+100 bolos)
   Carregar DEPOIS de bolos.js. premium: "bolos_premium".
   Mesmas regras: "sem açúcar" = só xilitol ou eritritol; nada de promessa
   de emagrecimento ou de saúde; receitas sem teste registrado (não dizer
   "testadas"); fotos ilustrativas.
   ================================================================ */
(function () {
var R = window.RECEITAS;
var XI = "xilitol ou eritritol";
window.SECOES.bolos = window.SECOES.bolos.concat([
  "Premium · Proteicos", "Premium · Low carb", "Premium · Bolos de pote", "Premium · Bolos de festa fit",
  "Premium · Muffins e cupcakes", "Premium · Rocamboles e bolos gelados", "Premium · Brownies e blondies", "Premium · Sabores brasileiros"]);

var AV = {
  aveia: "Leva aveia: a aveia comum pode ter traços de glúten. Para uma versão sem glúten, use aveia certificada sem glúten.",
  leite: "Leva leite, iogurte ou whey (contém lactose). Para tirar a lactose, use bebida vegetal, iogurte sem lactose e whey isolado ou proteína vegetal.",
  sgsl: "Sem glúten e sem lactose: confira no rótulo de cada ingrediente (farinhas, cacau, fermento, chocolate) se não há glúten nem leite.",
  semacucar: "Sem açúcar: adoçado só com xilitol ou eritritol. Xilitol é tóxico para cães, guarde longe dos pets.",
  amendoim: "Leva amendoim.", castanha: "Leva castanhas ou amêndoas.", ovo: "Leva ovos."
};
function av() { return Array.prototype.slice.call(arguments).map(function (k) { return AV[k] || k; }).join(" "); }
function P(o) { o.col = "bolos"; o.premium = "bolos_premium"; o.foto = o.foto || ""; R.push(o); }
function FORNO(t, forma) { return { t: "Preaqueça o forno a " + (t || 180) + " °C. Unte e forre o fundo de " + (forma || "uma forma redonda de 20 cm") + " com papel-manteiga." }; }
function ASSA(min, t) { return { t: "Asse a " + (t || 180) + " °C por " + min + " minutos. Está pronto quando o palito sai limpo do centro.", timer: min }; }
var ESFRIA = { t: "Espere amornar 15 minutos antes de desenformar.", timer: 15 };

/* ======================== PROTEICOS (15) ======================== */
/* base: 1 bolo de 15 cm (6 fatias), forno ou airfryer */
function PROT(o) {
  P({ id: o.id, sec: "Premium · Proteicos", emoji: o.emoji, nome: o.nome, intro: o.intro,
    tempo: 35, nivel: "Fácil", rende: "1 bolo de 15 cm (6 fatias)", tags: ["Proteico", "Forno ou airfryer"].concat(o.tags || []),
    ingredientes: ["2 ovos", "30 g de whey protein " + o.whey, o.liq || "100 g de iogurte natural", "20 g de óleo de coco derretido", o.doce || "20 g de mel ou de açúcar de coco"]
      .concat(o.extra || []).concat([o.farinha || "60 g de farinha de aveia", "5 g de fermento químico"]),
    passos: [FORNO(180, "uma forma de 15 cm (ou uma forma que caiba na airfryer)"),
      { t: o.mistura || "Misture os ovos, o whey, o líquido, o óleo e o adoçante com fouet até não ter grumos de whey." },
      { t: (o.passo || "Junte a farinha de aveia e misture.") + " Por último, o fermento, sem bater." },
      { t: "Forno: 180 °C por 25 minutos. Airfryer: 160 °C por 20 minutos, sem preaquecer. Confira com o palito.", timer: 25 }, ESFRIA],
    dica: o.dica || "Whey deixa a massa mais firme: não asse além do ponto, ou o bolo resseca.",
    aviso: av(o.av || "aveia", "leite") });
}
PROT({ id: "bp-prot-chocolate", emoji: "🍫", nome: "Bolo proteico de chocolate", whey: "sabor chocolate", extra: ["15 g de cacau em pó 100%"],
  intro: "Bolo de chocolate pequeno com whey e cacau, para o lanche ou o pós-treino.", dica: "Cubra com 1 colher de pasta de amendoim derretida." });
PROT({ id: "bp-prot-baunilha-frutas", emoji: "🍓", nome: "Bolo proteico de baunilha com frutas vermelhas", whey: "sabor baunilha", extra: ["80 g de frutas vermelhas (frescas ou congeladas)"],
  passo: "Junte a farinha de aveia. Envolva as frutas numa colher de farinha e misture com cuidado.", intro: "Massa de baunilha com frutas vermelhas espalhadas." });
PROT({ id: "bp-prot-banana", emoji: "🍌", nome: "Bolo proteico de banana com canela", whey: "sabor baunilha ou sem sabor", liq: "1 banana madura amassada + 50 g de leite (ou bebida vegetal)", doce: "10 g de mel (opcional)", extra: ["2 g de canela"],
  intro: "A banana adoça e deixa úmido; o whey completa.", dica: "Quanto mais madura a banana, menos mel você precisa." });
PROT({ id: "bp-prot-cenoura", emoji: "🥕", nome: "Bolo proteico de cenoura", whey: "sabor baunilha ou sem sabor", liq: "80 g de cenoura batida com 60 g de leite (ou bebida vegetal)",
  mistura: "Bata a cenoura com o leite, os ovos, o óleo e o adoçante no liquidificador. Passe para uma tigela e misture o whey.", intro: "A versão proteica do bolo de cenoura, com a cenoura batida no liquidificador." });
PROT({ id: "bp-prot-morango", emoji: "🍓", nome: "Bolo proteico de morango", whey: "sabor morango ou baunilha", extra: ["100 g de morangos picados"],
  passo: "Junte a farinha e, por último, os morangos.", intro: "Massa rosada de whey de morango com pedaços da fruta." });
PROT({ id: "bp-prot-coco", emoji: "🥥", nome: "Bolo proteico de coco", whey: "sabor baunilha ou coco", liq: "100 g de leite de coco", extra: ["20 g de coco ralado sem açúcar"],
  intro: "Com leite de coco e coco ralado, molhadinho.", dica: "Regue com 50 g de leite de coco ao sair do forno." });
PROT({ id: "bp-prot-amendoim", emoji: "🥜", nome: "Bolo proteico de pasta de amendoim", whey: "sabor chocolate ou baunilha", extra: ["30 g de pasta de amendoim integral"],
  intro: "Pasta de amendoim e whey: sabor de paçoca.", av: "aveia", dica: "Pasta de amendoim só de amendoim, sem açúcar no rótulo." });
PROT({ id: "bp-prot-cafe", emoji: "☕", nome: "Bolo proteico de café com cacau", whey: "sabor chocolate", liq: "80 g de café coado frio + 30 g de leite", extra: ["8 g de cacau"],
  intro: "Mocha em bolo: café, cacau e whey de chocolate." });
PROT({ id: "bp-prot-limao", emoji: "🍋", nome: "Bolo proteico de limão", whey: "sabor baunilha ou sem sabor", extra: ["Raspas de 1 limão + 15 g de suco"],
  intro: "Leve e cítrico, com iogurte e raspas de limão." });
PROT({ id: "bp-prot-maca", emoji: "🍎", nome: "Bolo proteico de maçã com canela", whey: "sabor baunilha", extra: ["1 maçã pequena em cubinhos", "2 g de canela"],
  passo: "Junte a farinha, a canela e a maçã.", intro: "Cubinhos de maçã e canela numa massa de whey de baunilha." });
PROT({ id: "bp-prot-red-velvet", emoji: "❤️", nome: "Bolo proteico red velvet de beterraba", whey: "sabor baunilha", liq: "60 g de beterraba crua batida com 60 g de iogurte", extra: ["5 g de cacau"],
  mistura: "Bata a beterraba com o iogurte, os ovos, o óleo e o adoçante. Misture o whey.", intro: "Vermelho da beterraba, sem corante." });
PROT({ id: "bp-prot-abobora", emoji: "🎃", nome: "Bolo proteico de abóbora com especiarias", whey: "sabor baunilha", liq: "100 g de purê de abóbora", extra: ["2 g de canela", "1 pitada de noz-moscada"],
  intro: "Abóbora, canela e noz-moscada, com whey de baunilha." });
PROT({ id: "bp-prot-cookies", emoji: "🍪", nome: "Bolo proteico cookies and cream", whey: "sabor baunilha", extra: ["2 cookies fit de cacau esfarelados (receita do bônus Cookies fit)"],
  passo: "Junte a farinha e metade dos cookies. Espalhe o resto por cima antes de assar.", intro: "Massa branca com pedaços de cookie de cacau." });
PROT({ id: "bp-prot-sem-acucar", emoji: "🍫", nome: "Bolo proteico de chocolate sem açúcar", whey: "sabor chocolate (sem açúcar no rótulo)", doce: "15 g de " + XI, extra: ["15 g de cacau"],
  intro: "A versão adoçada só com " + XI + ".", av: "aveia", dica: "Confira se o whey não tem açúcar na composição.", tags: ["Sem açúcar"] });
PROT({ id: "bp-prot-sg", emoji: "🍌", nome: "Bolo proteico sem glúten de banana e cacau", whey: "isolado sabor chocolate", liq: "1 banana amassada + 50 g de bebida vegetal", extra: ["10 g de cacau"],
  farinha: "60 g de farinha de arroz", passo: "Junte a farinha de arroz e misture.", intro: "Com farinha de arroz, bebida vegetal e whey isolado.", av: "Sem glúten: confira o rótulo do fermento e do whey.", tags: ["Sem glúten"] });

/* ======================== LOW CARB (15) ======================== */
/* base com farinha de amêndoas; adoçados com xilitol ou eritritol (também são sem açúcar) */
function LOW(o) {
  P({ id: o.id, sec: "Premium · Low carb", emoji: o.emoji, nome: o.nome, intro: o.intro,
    tempo: 45, nivel: "Fácil", rende: o.rende || "1 bolo de 18 cm (8 fatias)", tags: ["Low carb", "Sem açúcar", "Sem glúten"].concat(o.tags || []),
    ingredientes: ["3 ovos", o.liq || "80 g de iogurte natural (ou de coco)", "50 g de óleo de coco derretido (ou manteiga)", (o.xi || 70) + " g de " + XI]
      .concat(o.extra || []).concat(["120 g de farinha de amêndoas", "20 g de farinha de coco", "8 g de fermento químico"]),
    passos: [FORNO(170, "uma forma de 18 cm"),
      { t: o.mistura || "Misture os ovos, o líquido, o óleo e o adoçante até ficar homogêneo." },
      { t: (o.passo || "Junte as farinhas de amêndoas e de coco e misture.") + " Por último, o fermento." },
      ASSA(o.min || 30, 170), { t: "Espere esfriar totalmente para cortar: bolo de farinha de amêndoas firma ao esfriar.", timer: 30 }].concat(o.final ? [{ t: o.final }] : []),
    dica: o.dica || "Farinha de coco absorve muito líquido: meça certinho, 20 g fazem diferença.",
    aviso: av("semacucar", "castanha", o.av || "Sem glúten: confira o rótulo do fermento.") });
}
LOW({ id: "bp-low-chocolate", emoji: "🍫", nome: "Bolo low carb de chocolate", extra: ["25 g de cacau em pó 100%"], intro: "Escuro, úmido e sem farinha de cereal." });
LOW({ id: "bp-low-coco", emoji: "🥥", nome: "Bolo low carb de coco", liq: "100 g de leite de coco", extra: ["30 g de coco ralado sem açúcar"], intro: "Bolo branco de coco com farinha de amêndoas." });
LOW({ id: "bp-low-limao", emoji: "🍋", nome: "Bolo low carb de limão", extra: ["Raspas de 2 limões + 25 g de suco"], intro: "Cítrico, com glacê opcional de eritritol em pó e limão.",
  final: "Glacê opcional: 30 g de eritritol batido até virar pó + 10 g de suco de limão." });
LOW({ id: "bp-low-cenoura", emoji: "🥕", nome: "Bolo low carb de cenoura", liq: "120 g de cenoura ralada fina", extra: ["2 g de canela"], intro: "Cenoura ralada fina e canela.",
  final: "Cubra com a Cobertura de chocolate sem açúcar do bônus." });
LOW({ id: "bp-low-laranja", emoji: "🍊", nome: "Bolo low carb de laranja", liq: "60 g de suco de laranja + 30 g de iogurte", extra: ["Raspas de 1 laranja"], intro: "Perfumado de laranja, com casca ralada." });
LOW({ id: "bp-low-morango", emoji: "🍓", nome: "Bolo low carb de morango", extra: ["100 g de morangos picados"], passo: "Junte as farinhas e os morangos.", intro: "Massa clara com morangos." });
LOW({ id: "bp-low-canela", emoji: "🌀", nome: "Bolo low carb de canela (estilo cinnamon roll)", extra: ["Para a camada: 20 g de " + XI + " + 4 g de canela"],
  passo: "Junte as farinhas. Coloque metade da massa na forma, polvilhe metade da mistura de canela, cubra com o resto e finalize com a canela.", intro: "Camadas de canela no meio e no topo." });
LOW({ id: "bp-low-cafe", emoji: "☕", nome: "Bolo low carb de café", liq: "60 g de café forte + 30 g de leite de coco", extra: ["5 g de cacau"], intro: "Para tomar com café, feito com café." });
LOW({ id: "bp-low-amendoim", emoji: "🥜", nome: "Bolo low carb de pasta de amendoim", extra: ["60 g de pasta de amendoim integral"], intro: "Denso e úmido, sabor paçoca.", av: AV.amendoim });
LOW({ id: "bp-low-chia", emoji: "🌱", nome: "Bolo low carb de baunilha com chia", extra: ["5 g de baunilha", "10 g de sementes de chia"], intro: "Baunilha com pontinhos de chia." });
LOW({ id: "bp-low-abobrinha", emoji: "🍫", nome: "Bolo low carb de chocolate com abobrinha", liq: "120 g de abobrinha ralada e espremida", extra: ["25 g de cacau"], intro: "Abobrinha deixa o bolo de chocolate ainda mais úmido." });
LOW({ id: "bp-low-frutas", emoji: "🫐", nome: "Bolo low carb de frutas vermelhas", extra: ["100 g de frutas vermelhas"], passo: "Junte as farinhas e envolva as frutas.", intro: "Mirtilos, amoras e framboesas na massa." });
LOW({ id: "bp-low-maracuja", emoji: "💛", nome: "Bolo low carb de maracujá", liq: "60 g de suco de maracujá concentrado + 30 g de iogurte", intro: "Azedinho, com calda de polpa.",
  final: "Calda: polpa de 1 maracujá + 20 g de " + XI + ", 3 minutos no fogo." });
LOW({ id: "bp-low-cacau-laranja", emoji: "🍊", nome: "Bolo low carb de cacau com laranja", liq: "50 g de suco de laranja + 30 g de iogurte", extra: ["20 g de cacau", "Raspas de 1 laranja"], intro: "Chocolate com laranja, combinação de confeitaria." });
LOW({ id: "bp-low-brownie", emoji: "🍫", nome: "Bolo low carb vulcão de chocolate", extra: ["30 g de cacau", "60 g de chocolate 70% sem açúcar picado (para o centro)"],
  passo: "Junte as farinhas. Coloque metade da massa, espalhe o chocolate picado e cubra com o resto.", intro: "Centro de chocolate derretido." });

/* ======================== BOLOS DE POTE (15) ======================== */
var MASSA_B = "Massa branca: 4 ovos, 150 g de leite (ou bebida vegetal), 60 g de óleo, 110 g de açúcar de coco, 5 g de baunilha, 200 g de farinha de aveia, 10 g de fermento";
var MASSA_C = "Massa de chocolate: 4 ovos, 150 g de leite (ou bebida vegetal), 60 g de óleo, 120 g de açúcar de coco, 170 g de farinha de aveia, 35 g de cacau, 10 g de fermento";
function POTE(o) {
  P({ id: o.id, sec: "Premium · Bolos de pote", emoji: o.emoji, nome: o.nome, intro: o.intro,
    tempo: 90, nivel: "Fácil", rende: "6 potes de 250 ml", tags: ["Bolo de pote", "Para vender", "Geladeira"],
    ingredientes: [o.massa === "c" ? MASSA_C : MASSA_B].concat(o.creme).concat(o.final ? [o.final] : []),
    passos: [FORNO(180, "uma assadeira de 20 x 30 cm"),
      { t: "Massa: misture os líquidos, o açúcar e os ovos; junte a farinha" + (o.massa === "c" ? " e o cacau" : "") + " e, por último, o fermento. Asse por 20 a 25 minutos (massa baixa assa rápido).", timer: 22 },
      { t: "Espere esfriar e corte discos do tamanho da boca do pote (ou faça cubinhos)." },
      { t: o.prep },
      { t: "Monte: camada de massa, " + (o.camada || "camada de creme") + ", repita e termine com creme. " + (o.topo || "") },
      { t: "Tampe e leve à geladeira por pelo menos 2 horas.", timer: 120 }],
    dica: o.dica || "Para vender: pote de 250 ml com tampa, etiqueta com data e 'manter refrigerado'. Dura até 3 dias na geladeira.",
    aviso: av("aveia", o.av || "leite") });
}
POTE({ id: "bp-pote-brigadeiro", emoji: "🍫", nome: "Bolo de pote de brigadeiro fit", massa: "c",
  creme: ["Creme: 400 g de leite de coco, 70 g de açúcar de coco, 25 g de cacau, 20 g de amido de milho"], final: "Granulado de chocolate 70% para o topo",
  prep: "Creme: misture tudo na panela fria e cozinhe em fogo baixo mexendo por 8 a 10 minutos, até virar um creme mole. Esfrie.", intro: "O campeão de vendas: chocolate com creme de brigadeiro.", topo: "Finalize com granulado." });
POTE({ id: "bp-pote-ninho-morango", emoji: "🍓", nome: "Bolo de pote de creme de leite em pó com morango",
  creme: ["Creme: 400 g de leite, 40 g de leite em pó integral, 50 g de açúcar de coco, 25 g de amido", "200 g de morangos em fatias"],
  prep: "Creme: cozinhe tudo em fogo baixo mexendo até engrossar (6 a 8 minutos). Esfrie.", camada: "creme e fatias de morango",
  intro: "Branco, cremoso, com morango fresco.", av: "leite" });
POTE({ id: "bp-pote-prestigio", emoji: "🥥", nome: "Bolo de pote prestígio fit", massa: "c",
  creme: ["Creme de coco: 300 g de leite de coco, 40 g de açúcar de coco, 15 g de amido, 60 g de coco ralado"], final: "Cobertura: 50 g de chocolate 70% derretido com 30 g de leite de coco",
  prep: "Cozinhe o creme de coco até engrossar. Derreta o chocolate com o leite de coco para a cobertura.", topo: "Termine com a cobertura de chocolate.", intro: "Chocolate, coco e chocolate de novo." });
POTE({ id: "bp-pote-maracuja", emoji: "💛", nome: "Bolo de pote de maracujá",
  creme: ["Mousse: 340 g de iogurte grego natural, 100 g de suco de maracujá concentrado, 40 g de mel", "Polpa de 1 maracujá para o topo"],
  prep: "Mousse: misture o iogurte, o suco e o mel até ficar liso.", topo: "Termine com a polpa com sementes.", intro: "Massa branca e mousse azedinho de iogurte com maracujá." });
POTE({ id: "bp-pote-limao", emoji: "🍋", nome: "Bolo de pote de limão",
  creme: ["Creme: 340 g de iogurte grego, 60 g de suco de limão, raspas de 2 limões, 40 g de mel"], prep: "Misture tudo até ficar cremoso.", topo: "Raspas de limão por cima.", intro: "Fresco e cítrico." });
POTE({ id: "bp-pote-cenoura-chocolate", emoji: "🥕", nome: "Bolo de pote de cenoura com brigadeiro",
  creme: ["Massa: faça a massa branca trocando o leite por 250 g de cenoura batida com os ovos", "Creme: o creme de brigadeiro fit (do bolo de pote de brigadeiro)"],
  prep: "Prepare o creme de brigadeiro e esfrie.", intro: "O bolo de cenoura com chocolate em camadas." });
POTE({ id: "bp-pote-frutas-vermelhas", emoji: "🫐", nome: "Bolo de pote de frutas vermelhas com iogurte",
  creme: ["Creme: 340 g de iogurte grego + 30 g de mel", "Calda: 200 g de frutas vermelhas + 20 g de mel + 5 g de amido"],
  prep: "Calda: cozinhe as frutas com o mel 6 minutos, engrosse com o amido diluído e esfrie.", camada: "creme de iogurte e calda", intro: "Vermelho e branco, bonito no pote." });
POTE({ id: "bp-pote-doce-leite-coco", emoji: "🍯", nome: "Bolo de pote de doce de leite de coco",
  creme: ["Doce de leite de coco: 400 g de leite de coco + 80 g de açúcar de coco, reduzidos", "Creme: 200 g de iogurte grego"],
  prep: "Ferva o leite de coco com o açúcar de coco em fogo baixo, mexendo, por 25 a 30 minutos, até virar um creme caramelo. Esfrie.", camada: "doce de leite de coco e creme de iogurte",
  intro: "Caramelo de coco, sem leite condensado.", dica: "O doce de leite de coco engrossa ao esfriar: desligue quando ainda estiver mole." });
POTE({ id: "bp-pote-banana-canela", emoji: "🍌", nome: "Bolo de pote de banana com canela",
  creme: ["Banana: 3 bananas em rodelas + 20 g de açúcar mascavo + 2 g de canela", "Creme: 300 g de iogurte grego + 20 g de mel"],
  prep: "Caramelize as bananas com o açúcar e a canela numa frigideira por 4 minutos.", camada: "bananas caramelizadas e creme", intro: "Banana caramelizada, canela e creme." });
POTE({ id: "bp-pote-abacaxi-coco", emoji: "🍍", nome: "Bolo de pote de abacaxi com coco",
  creme: ["Doce de abacaxi: 300 g de abacaxi picado + 30 g de açúcar de coco", "Creme de coco: 300 g de leite de coco + 40 g de açúcar de coco + 20 g de amido"],
  prep: "Cozinhe o abacaxi com o açúcar por 10 minutos. Cozinhe o creme de coco até engrossar.", camada: "abacaxi e creme de coco", intro: "Tropical e geladinho." });
POTE({ id: "bp-pote-amendoim", emoji: "🥜", nome: "Bolo de pote de pasta de amendoim com chocolate", massa: "c",
  creme: ["Creme: 120 g de pasta de amendoim + 200 g de iogurte grego + 30 g de mel"], final: "Amendoim torrado picado",
  prep: "Misture o creme até ficar liso.", topo: "Amendoim picado por cima.", intro: "Chocolate com creme de amendoim.", av: "leite" });
POTE({ id: "bp-pote-tiramisu", emoji: "☕", nome: "Bolo de pote tiramisu fit",
  creme: ["Creme: 340 g de iogurte grego + 100 g de ricota + 40 g de mel", "150 g de café forte frio para molhar", "Cacau para polvilhar"],
  prep: "Bata o creme até ficar liso. Molhe cada disco de massa no café antes de montar.", topo: "Polvilhe cacau.", intro: "Café, creme e cacau, como o tiramisu." });
POTE({ id: "bp-pote-red-velvet", emoji: "❤️", nome: "Bolo de pote red velvet",
  creme: ["Massa: faça a massa branca batendo 150 g de beterraba com os líquidos e 10 g de cacau", "Creme: 340 g de iogurte grego + 100 g de cream cheese + 40 g de mel"],
  prep: "Bata o creme até ficar liso.", intro: "Massa vermelha de beterraba e creme branco." });
POTE({ id: "bp-pote-sem-acucar", emoji: "🍫", nome: "Bolo de pote de chocolate sem açúcar", massa: "c",
  creme: ["Use " + XI + " no lugar do açúcar de coco na massa (120 g)", "Creme: 400 g de leite de coco, 60 g de " + XI + ", 25 g de cacau, 20 g de amido"],
  prep: "Cozinhe o creme até engrossar e esfrie.", intro: "A versão sem açúcar, só com " + XI + ".", av: "semacucar" });
POTE({ id: "bp-pote-ninho-nutella-fit", emoji: "🌰", nome: "Bolo de pote de creme de avelã fit",
  massa: "c", creme: ["Creme de avelã fit: 100 g de avelãs torradas + 25 g de cacau + 40 g de mel + 60 g de leite de coco, batidos", "Creme branco: 300 g de iogurte grego"],
  prep: "Bata as avelãs até virar pasta, junte o resto e bata até ficar cremoso.", camada: "creme de avelã e creme branco", intro: "Creme de avelã caseiro, sem açúcar refinado.", av: "castanha" });

/* ======================== BOLOS DE FESTA FIT (10) ======================== */
function FESTA(o) {
  P({ id: o.id, sec: "Premium · Bolos de festa fit", emoji: o.emoji, nome: o.nome, intro: o.intro,
    tempo: 150, nivel: "Médio", rende: "1 bolo de 2 camadas de 20 cm (16 fatias)", tags: ["Festa", "Aniversário", "Recheado"],
    ingredientes: o.ing,
    passos: [FORNO(180, "duas formas de 20 cm (ou asse em duas vezes)")].concat(o.passos).concat([
      { t: "Monte: um disco, recheio, segundo disco. Cubra com a cobertura e decore. Leve à geladeira por 3 horas antes de cortar.", timer: 180 }]),
    dica: o.dica, aviso: av(o.av1 || "aveia", o.av2 || "leite") });
}
FESTA({ id: "bp-festa-naked-chocolate", emoji: "🍓", nome: "Naked cake de chocolate com morangos", intro: "Camadas de chocolate, brigadeiro fit e morangos, sem cobertura nas laterais.",
  ing: ["Massa (dobre o bolo de chocolate do dia a dia): 6 ovos, 300 g de leite, 100 g de café, 140 g de óleo, 220 g de açúcar de coco, 300 g de farinha de aveia, 80 g de cacau, 20 g de fermento", "Recheio (brigadeiro fit): 800 g de leite de coco, 140 g de açúcar de coco, 50 g de cacau, 40 g de amido de milho", "500 g de morangos"],
  passos: [{ t: "Prepare a massa e divida nas duas formas. Asse por 30 a 35 minutos.", timer: 32 }, { t: "Prepare o brigadeiro fit e deixe esfriar até ficar firme." }],
  dica: "Naked cake vende bem para festas pequenas: aparência caseira, bonita, sem precisar de técnica de cobertura." });
FESTA({ id: "bp-festa-baunilha-frutas", emoji: "🎂", nome: "Bolo de aniversário de baunilha com creme de iogurte e frutas", intro: "Massa branca, creme de iogurte grego e frutas frescas.",
  ing: ["Massa: 6 ovos, 300 g de leite, 120 g de óleo, 200 g de açúcar de coco, 10 g de baunilha, 360 g de farinha de aveia, 20 g de fermento", "Creme: 680 g de iogurte grego + 200 g de cream cheese + 60 g de mel", "400 g de frutas (morango, kiwi, mirtilo)"],
  passos: [{ t: "Prepare a massa e asse nas duas formas por 30 minutos.", timer: 30 }, { t: "Bata o creme até ficar firme. Pique as frutas." }],
  dica: "Escorra o iogurte grego numa peneira com pano por 2 horas antes: o creme fica mais firme para cobrir." });
FESTA({ id: "bp-festa-prestigio", emoji: "🥥", nome: "Bolo prestígio fit", intro: "Chocolate, recheio de coco cremoso e ganache.",
  ing: ["Massa de chocolate: 6 ovos, 300 g de leite (ou bebida vegetal), 100 g de café, 140 g de óleo, 220 g de açúcar de coco, 300 g de farinha de aveia, 80 g de cacau, 20 g de fermento", "Recheio: 400 g de leite de coco, 80 g de açúcar de coco, 30 g de amido, 120 g de coco ralado", "Ganache: 150 g de chocolate 70% + 120 g de creme de coco"],
  passos: [{ t: "Asse a massa nas duas formas.", timer: 32 }, { t: "Cozinhe o recheio até engrossar. Derreta o chocolate com o creme de coco para a ganache." }],
  dica: "Pode fazer todo sem lactose usando bebida vegetal na massa.", av2: "Sem lactose se usar bebida vegetal na massa." });
FESTA({ id: "bp-festa-cenoura-brigadeiro", emoji: "🥕", nome: "Bolo de cenoura com brigadeiro fit (festa)", intro: "O bolo de cenoura em versão de aniversário, recheado e coberto de brigadeiro.",
  ing: ["Massa: 500 g de cenoura picada, 6 ovos, 160 g de óleo, 200 g de açúcar de coco, 360 g de farinha de aveia, 20 g de fermento", "Recheio e cobertura (brigadeiro fit): 800 g de leite de coco, 140 g de açúcar de coco, 50 g de cacau, 40 g de amido de milho", "Granulado de chocolate 70%"],
  passos: [{ t: "Prepare a massa no liquidificador e asse nas duas formas por 35 minutos.", timer: 35 }, { t: "Prepare o brigadeiro fit, mais firme para cobrir (cozinhe 3 minutos a mais)." }],
  dica: "Cubra com o brigadeiro ainda morno: ele espalha fácil e firma na geladeira." });
FESTA({ id: "bp-festa-limao", emoji: "🍋", nome: "Bolo de limão com creme de limão", intro: "Massa de limão, creme de limão e raspas por cima.",
  ing: ["Massa: 340 g de iogurte natural, 6 ovos, 140 g de óleo, 200 g de açúcar demerara, raspas de 4 limões, 80 g de suco de limão, 360 g de farinha de aveia, 20 g de fermento", "Creme de limão: 4 gemas, 120 g de suco de limão, 80 g de mel, 40 g de óleo de coco, raspas de 2 limões", "Cobertura: 500 g de iogurte grego + 40 g de mel"],
  passos: [{ t: "Asse a massa nas duas formas.", timer: 30 }, { t: "Creme de limão: cozinhe as gemas, o suco e o mel em banho-maria mexendo até engrossar; fora do fogo, junte o óleo de coco e as raspas." }],
  dica: "O creme de limão também é recheio do bônus Recheios cremosos." });
FESTA({ id: "bp-festa-floresta-negra", emoji: "🍒", nome: "Floresta negra fit", intro: "Chocolate, creme branco e cerejas em calda caseira.",
  ing: ["Massa de chocolate: 6 ovos, 300 g de leite (ou bebida vegetal), 100 g de café, 140 g de óleo, 220 g de açúcar de coco, 300 g de farinha de aveia, 80 g de cacau, 20 g de fermento", "Cerejas: 300 g de cerejas sem caroço (frescas ou congeladas) + 40 g de açúcar de coco + 10 g de amido", "Creme: 500 g de iogurte grego + 150 g de cream cheese + 40 g de mel", "Raspas de chocolate 70%"],
  passos: [{ t: "Asse a massa.", timer: 32 }, { t: "Cozinhe as cerejas com o açúcar por 8 minutos e engrosse com o amido. Bata o creme." }],
  dica: "Sem cereja fresca, use frutas vermelhas congeladas." });
FESTA({ id: "bp-festa-red-velvet", emoji: "❤️", nome: "Red velvet fit de beterraba", intro: "Massa vermelha natural e creme de iogurte com cream cheese.",
  ing: ["Massa: 6 ovos, 300 g de beterraba crua, 120 g de óleo, 200 g de açúcar de coco, 300 g de farinha de aveia, 15 g de cacau, 20 g de fermento", "Creme: 500 g de iogurte grego + 200 g de cream cheese + 50 g de mel"],
  passos: [{ t: "Bata a beterraba com os ovos, o óleo e o açúcar. Misture os secos e asse nas duas formas.", timer: 32 }, { t: "Bata o creme." }],
  dica: "Guarde umas migalhas da massa para decorar o topo." });
FESTA({ id: "bp-festa-abacaxi-coco", emoji: "🍍", nome: "Bolo de festa de abacaxi com coco", intro: "Massa branca, doce de abacaxi e creme de coco.",
  ing: ["Massa branca: 6 ovos, 300 g de leite (ou bebida vegetal), 120 g de óleo, 200 g de açúcar de coco, 10 g de baunilha, 360 g de farinha de aveia, 20 g de fermento", "Doce de abacaxi: 500 g de abacaxi picado + 50 g de açúcar de coco", "Creme de coco: 600 g de leite de coco + 80 g de açúcar de coco + 40 g de amido", "Coco em flocos para cobrir"],
  passos: [{ t: "Asse a massa.", timer: 30 }, { t: "Cozinhe o abacaxi por 15 minutos. Cozinhe o creme até engrossar." }],
  dica: "Molhe os discos com o caldo do abacaxi antes de rechear." });
FESTA({ id: "bp-festa-chocolate-amendoim", emoji: "🥜", nome: "Bolo de chocolate com creme de amendoim", intro: "Chocolate escuro com recheio de pasta de amendoim.",
  ing: ["Massa de chocolate: 6 ovos, 300 g de leite (ou bebida vegetal), 100 g de café, 140 g de óleo, 220 g de açúcar de coco, 300 g de farinha de aveia, 80 g de cacau, 20 g de fermento", "Recheio: 200 g de pasta de amendoim + 300 g de iogurte grego + 50 g de mel", "Cobertura: ganache de chocolate 70% com creme de coco", "Amendoim torrado picado"],
  passos: [{ t: "Asse a massa.", timer: 32 }, { t: "Misture o recheio. Prepare a ganache." }],
  dica: "Fica ótimo com rodelas de banana no recheio.", av1: "aveia", av2: "Leva amendoim e iogurte (lactose)." });
FESTA({ id: "bp-festa-nozes", emoji: "🌰", nome: "Bolo de nozes com doce de leite de coco", intro: "Massa com nozes picadas e recheio de doce de leite de coco.",
  ing: ["Massa branca: 6 ovos, 300 g de leite (ou bebida vegetal), 120 g de óleo, 200 g de açúcar de coco, 10 g de baunilha, 360 g de farinha de aveia, 20 g de fermento", "100 g de nozes picadas (para a massa)", "Recheio (doce de leite de coco): 800 g de leite de coco + 160 g de açúcar de coco, reduzidos em fogo baixo por 30 a 35 minutos", "Nozes para decorar"],
  passos: [{ t: "Asse a massa com as nozes.", timer: 32 }, { t: "Prepare o doce de leite de coco e esfrie." }],
  dica: "Toste as nozes antes: o sabor muda completamente.", av2: "Leva nozes. Leite na massa (troque por bebida vegetal para tirar a lactose)." });

/* ======================== MUFFINS E CUPCAKES (15) ======================== */
function MUF(o) {
  P({ id: o.id, sec: "Premium · Muffins e cupcakes", emoji: o.emoji, nome: o.nome, intro: o.intro,
    tempo: 35, nivel: "Fácil", rende: "8 muffins", tags: ["Forno", "Lanche", "Para vender"].concat(o.tags || []),
    ingredientes: ["2 ovos", o.liq || "80 g de iogurte natural", "40 g de óleo", o.doce || "60 g de açúcar de coco"].concat(o.extra || []).concat([o.farinha || "130 g de farinha de aveia", "6 g de fermento químico"]).concat(o.cob ? [o.cob] : []),
    passos: [FORNO(180, "uma forma de muffins com 8 forminhas de papel"),
      { t: "Misture os ovos, o líquido, o óleo e o açúcar. " + (o.passo || "Junte a farinha e, por último, o fermento.") },
      { t: "Encha as forminhas até 3/4. " + (o.topo || "") },
      ASSA(o.min || 22)].concat(o.cobp ? [{ t: o.cobp }] : []),
    dica: o.dica || "Não encha demais as forminhas: o muffin cresce e derrama.",
    aviso: av(o.av || "aveia", o.av2 || "leite") });
}
MUF({ id: "bp-muf-banana-nozes", emoji: "🍌", nome: "Muffin de banana com nozes", liq: "2 bananas amassadas", doce: "30 g de açúcar mascavo", extra: ["40 g de nozes picadas", "2 g de canela"], intro: "Banana madura, nozes e canela.", av2: "Leva nozes." });
MUF({ id: "bp-muf-mirtilo", emoji: "🫐", nome: "Muffin de mirtilo", extra: ["100 g de mirtilos"], passo: "Junte a farinha e o fermento. Envolva os mirtilos numa colher de farinha e misture.", intro: "O clássico americano, com farinha de aveia." });
MUF({ id: "bp-muf-chocolate", emoji: "🍫", nome: "Muffin de chocolate com gotas", extra: ["20 g de cacau", "50 g de gotas de chocolate 70%"], topo: "Espalhe mais gotas por cima.", intro: "Duplo chocolate." });
MUF({ id: "bp-muf-cenoura", emoji: "🥕", nome: "Muffin de cenoura", liq: "100 g de cenoura ralada fina + 30 g de leite", extra: ["2 g de canela"], intro: "Bolinho de cenoura individual." });
MUF({ id: "bp-muf-maca", emoji: "🍎", nome: "Muffin de maçã com canela e crocante de aveia", extra: ["1 maçã em cubinhos", "3 g de canela"], topo: "Crocante: 20 g de aveia em flocos + 10 g de açúcar mascavo + 10 g de óleo de coco, por cima.", intro: "Com farofinha crocante no topo." });
MUF({ id: "bp-muf-limao-chia", emoji: "🍋", nome: "Muffin de limão com chia", extra: ["Raspas de 1 limão + 15 g de suco", "8 g de chia"], intro: "Limão e chia, leve e cítrico." });
MUF({ id: "bp-muf-laranja-cranberry", emoji: "🍊", nome: "Muffin de laranja com cranberry", liq: "60 g de suco de laranja + 30 g de iogurte", extra: ["Raspas de 1 laranja", "40 g de cranberry desidratado"], intro: "Laranja e cranberry." });
MUF({ id: "bp-muf-abobora", emoji: "🎃", nome: "Muffin de abóbora com especiarias", liq: "100 g de purê de abóbora", extra: ["2 g de canela", "1 pitada de gengibre"], topo: "Sementes de abóbora por cima.", intro: "Abóbora e especiarias." });
MUF({ id: "bp-muf-cafe", emoji: "☕", nome: "Muffin de café com cacau", liq: "60 g de café + 30 g de iogurte", extra: ["10 g de cacau"], intro: "Para o café da tarde." });
MUF({ id: "bp-muf-morango", emoji: "🍓", nome: "Muffin de morango", extra: ["100 g de morangos picados"], intro: "Massa clara com pedaços de morango." });
MUF({ id: "bp-muf-coco", emoji: "🥥", nome: "Muffin de coco sem glúten e sem lactose", liq: "80 g de leite de coco", farinha: "100 g de farinha de arroz + 30 g de amido de milho", extra: ["30 g de coco ralado"], intro: "Sem trigo, sem aveia e sem leite.", av: "sgsl", av2: "ovo", tags: ["Sem glúten", "Sem lactose"] });
MUF({ id: "bp-muf-amendoim", emoji: "🥜", nome: "Muffin de pasta de amendoim", extra: ["50 g de pasta de amendoim"], topo: "Um fio de pasta de amendoim por cima.", intro: "Sabor de paçoca.", av2: "Leva amendoim e iogurte (lactose)." });
MUF({ id: "bp-cup-chocolate", emoji: "🧁", nome: "Cupcake de chocolate com cobertura de iogurte", extra: ["20 g de cacau"], cob: "Cobertura: 200 g de iogurte grego escorrido + 50 g de cream cheese + 20 g de mel",
  cobp: "Bata a cobertura e, com os cupcakes frios, aplique com saco de confeitar.", intro: "Cupcake de festa, com cobertura cremosa.", tags: ["Festa"] });
MUF({ id: "bp-cup-red-velvet", emoji: "❤️", nome: "Cupcake red velvet de beterraba", liq: "80 g de beterraba batida com 40 g de iogurte", extra: ["5 g de cacau"], cob: "Cobertura: 200 g de iogurte grego escorrido + 50 g de cream cheese + 20 g de mel",
  cobp: "Aplique a cobertura com os cupcakes frios.", intro: "Vermelho natural da beterraba.", tags: ["Festa"] });
MUF({ id: "bp-cup-sem-acucar", emoji: "🧁", nome: "Cupcake de baunilha sem açúcar com frutas vermelhas", doce: "50 g de " + XI, extra: ["5 g de baunilha"], cob: "Cobertura: 200 g de iogurte grego + 15 g de " + XI + " + frutas vermelhas",
  cobp: "Cubra com o iogurte adoçado e as frutas.", intro: "A versão sem açúcar.", av: "semacucar", av2: "aveia", tags: ["Sem açúcar", "Festa"] });

/* ================== ROCAMBOLES E BOLOS GELADOS (10) ================== */
function ROC(o) {
  P({ id: o.id, sec: "Premium · Rocamboles e bolos gelados", emoji: o.emoji, nome: o.nome, intro: o.intro,
    tempo: 60, nivel: "Médio", rende: "1 rocambole (10 fatias)", tags: ["Rocambole", "Sobremesa"],
    ingredientes: ["4 ovos (claras e gemas separadas)", "60 g de açúcar de coco"].concat(o.massa).concat(["5 g de fermento químico"]).concat(o.rech),
    passos: [FORNO(200, "uma assadeira de 30 x 40 cm forrada com papel-manteiga untado"),
      { t: "Bata as claras em neve. Junte as gemas uma a uma e o açúcar, batendo. Desligue e incorpore " + o.secos + " e o fermento com uma espátula, delicadamente." },
      { t: "Espalhe numa camada fina e asse a 200 °C por 10 a 12 minutos, até a massa voltar ao ser tocada.", timer: 11 },
      { t: "Vire ainda quente sobre um pano úmido, retire o papel e enrole com o pano. Deixe esfriar enrolado por 15 minutos.", timer: 15 },
      { t: "Desenrole, espalhe o recheio e enrole de novo, firme. " + (o.final || "Leve à geladeira por 1 hora.") }],
    dica: o.dica || "Enrolar ainda quente é o segredo para não rachar.",
    aviso: av(o.av || "aveia", o.av2 || "ovo") });
}
ROC({ id: "bp-roc-chocolate-coco", emoji: "🍫", nome: "Rocambole de chocolate com creme de coco", massa: ["40 g de farinha de aveia", "15 g de cacau"], secos: "a farinha e o cacau peneirados",
  rech: ["Recheio: 300 g de leite de coco + 40 g de açúcar de coco + 25 g de amido, cozidos até engrossar e frios", "Cacau para polvilhar"], intro: "Massa de cacau e creme de coco.", av2: "Sem lactose." });
ROC({ id: "bp-roc-cenoura-brigadeiro", emoji: "🥕", nome: "Rocambole de cenoura com brigadeiro fit", massa: ["100 g de cenoura batida com as gemas", "50 g de farinha de aveia"], secos: "a farinha",
  rech: ["Recheio: creme de brigadeiro fit (receita do bolo de pote)"], intro: "Massa de cenoura enrolada com brigadeiro." });
ROC({ id: "bp-roc-limao", emoji: "🍋", nome: "Rocambole de limão", massa: ["55 g de farinha de aveia", "Raspas de 1 limão"], secos: "a farinha e as raspas",
  rech: ["Recheio: creme de limão (receita do bolo de festa de limão) ou 300 g de iogurte grego com 40 g de suco de limão e 30 g de mel"], intro: "Leve, cítrico, fácil de cortar." });
ROC({ id: "bp-roc-morango", emoji: "🍓", nome: "Rocambole de morango com iogurte", massa: ["55 g de farinha de aveia", "5 g de baunilha"], secos: "a farinha",
  rech: ["Recheio: 300 g de iogurte grego + 30 g de mel", "200 g de morangos fatiados"], intro: "Branco com morangos.", av2: "Leva iogurte (lactose)." });
ROC({ id: "bp-roc-sg", emoji: "🍫", nome: "Rocambole de chocolate sem glúten", massa: ["40 g de farinha de arroz", "15 g de cacau"], secos: "a farinha de arroz e o cacau",
  rech: ["Recheio: ganache de chocolate 70% com creme de coco"], intro: "Sem trigo e sem aveia.", av: "sgsl" });
function GEL(o) {
  P({ id: o.id, sec: "Premium · Rocamboles e bolos gelados", emoji: o.emoji, nome: o.nome, intro: o.intro,
    tempo: 60, nivel: "Fácil", rende: "1 forma de 20 x 30 cm (15 pedaços)", tags: ["Bolo gelado", "Geladeira", "Para vender"],
    ingredientes: [o.massa].concat(o.calda),
    passos: [FORNO(180, "uma forma de 20 x 30 cm"), { t: "Prepare a massa e asse por 25 a 30 minutos.", timer: 28 },
      { t: "Ainda quente, fure todo o bolo com um garfo e regue a calda aos poucos." }, { t: o.final || "Cubra e leve à geladeira por 4 horas. Sirva gelado.", timer: 240 }],
    dica: o.dica || "Bolo gelado em quadradinhos embrulhados em papel-alumínio é ótimo para vender.",
    aviso: av("aveia", o.av2 || "Sem lactose se usar bebida vegetal na massa.") });
}
GEL({ id: "bp-gel-coco", emoji: "🥥", nome: "Bolo gelado de coco (toalha felpuda fit)", massa: "Massa branca do bolo de pote (meia dose)",
  calda: ["Calda: 400 g de leite de coco + 50 g de açúcar de coco, aquecidos", "Cobertura: 60 g de coco ralado"], final: "Cubra com coco ralado e leve à geladeira por 4 horas.", intro: "O bolo toalha felpuda sem leite condensado." });
GEL({ id: "bp-gel-chocolate", emoji: "🍫", nome: "Bolo gelado de chocolate", massa: "Massa de chocolate do bolo de pote (meia dose)",
  calda: ["Calda: 300 g de leite de coco + 30 g de cacau + 50 g de açúcar de coco, aquecidos"], intro: "Chocolate molhadinho, servido gelado." });
GEL({ id: "bp-gel-abacaxi", emoji: "🍍", nome: "Bolo gelado de abacaxi com coco", massa: "Massa branca do bolo de pote (meia dose)",
  calda: ["Calda: 300 g de leite de coco + 40 g de açúcar de coco", "Doce de abacaxi: 300 g de abacaxi picado cozido com 30 g de açúcar de coco"], final: "Espalhe o doce de abacaxi por cima e leve à geladeira por 4 horas.", intro: "Abacaxi e coco, refrescante." });
GEL({ id: "bp-gel-maracuja", emoji: "💛", nome: "Bolo gelado de maracujá", massa: "Massa branca do bolo de pote (meia dose)",
  calda: ["Calda: 150 g de suco de maracujá + 150 g de leite de coco + 40 g de mel", "Cobertura: 200 g de iogurte grego + polpa de 1 maracujá"], final: "Cubra com o iogurte e a polpa. Geladeira por 4 horas.", intro: "Azedinho e gelado.", av2: "Leva iogurte (lactose)." });
GEL({ id: "bp-gel-cafe", emoji: "☕", nome: "Bolo gelado de café com cacau", massa: "Massa de chocolate do bolo de pote (meia dose)",
  calda: ["Calda: 200 g de café + 100 g de leite de coco + 30 g de mel", "Cacau para polvilhar"], final: "Polvilhe cacau e leve à geladeira.", intro: "Para quem ama café." });

/* ===================== BROWNIES E BLONDIES (10) ===================== */
function BRW(o) {
  P({ id: o.id, sec: "Premium · Brownies e blondies", emoji: o.emoji, nome: o.nome, intro: o.intro,
    tempo: 40, nivel: "Fácil", rende: "12 quadrados", tags: ["Brownie", "Para vender"].concat(o.tags || []),
    ingredientes: o.ing,
    passos: [FORNO(180, "uma forma quadrada de 20 cm")].concat(o.passos || [{ t: "Misture os ingredientes úmidos, junte os secos e misture só até incorporar." }]).concat([
      { t: "Asse a 180 °C por " + (o.min || 22) + " minutos. O centro deve ficar levemente úmido: o palito sai com migalhas, não limpo.", timer: o.min || 22 },
      { t: "Espere esfriar totalmente (de preferência 1 hora) para cortar em quadrados limpos.", timer: 60 }]),
    dica: o.dica || "Brownie assado demais vira bolo seco. Tire do forno quando o centro ainda estiver macio.",
    aviso: av.apply(null, o.av || ["aveia"]) });
}
BRW({ id: "bp-brw-cacau-aveia", emoji: "🍫", nome: "Brownie de cacau com aveia", ing: ["2 ovos", "80 g de óleo de coco derretido", "100 g de açúcar de coco", "100 g de chocolate 70% derretido", "50 g de farinha de aveia", "20 g de cacau", "1 pitada de sal", "50 g de castanhas picadas (opcional)"], intro: "O brownie de sempre, com farinha de aveia e chocolate 70%." });
BRW({ id: "bp-brw-batata-doce", emoji: "🍠", nome: "Brownie de batata-doce", ing: ["250 g de batata-doce cozida amassada", "2 ovos", "40 g de óleo de coco", "70 g de açúcar de coco", "40 g de cacau", "40 g de farinha de aveia", "4 g de fermento"], intro: "A batata-doce deixa denso e úmido." });
BRW({ id: "bp-brw-feijao", emoji: "🫘", nome: "Brownie de feijão-preto", ing: ["240 g de feijão-preto cozido e escorrido (sem tempero)", "3 ovos", "40 g de óleo de coco", "90 g de açúcar de coco", "40 g de cacau", "5 g de baunilha", "1 pitada de sal", "50 g de gotas de chocolate 70%"],
  passos: [{ t: "Bata tudo, menos as gotas, no processador ou liquidificador até ficar liso. Misture as gotas." }], intro: "Ninguém adivinha o feijão: fica cremoso como trufa.", av: ["sgsl", "ovo"], tags: ["Sem glúten"] });
BRW({ id: "bp-brw-banana", emoji: "🍌", nome: "Brownie de banana sem farinha", ing: ["2 bananas maduras", "2 ovos", "60 g de pasta de amendoim", "30 g de cacau", "20 g de mel", "3 g de fermento"], passos: [{ t: "Bata tudo no liquidificador." }], intro: "Só banana, ovo, amendoim e cacau.", av: ["sgsl", "amendoim"], tags: ["Sem glúten"] });
BRW({ id: "bp-brw-proteico", emoji: "💪", nome: "Brownie proteico", ing: ["2 ovos", "30 g de whey sabor chocolate", "40 g de óleo de coco", "60 g de açúcar de coco", "80 g de chocolate 70% derretido", "40 g de farinha de aveia", "15 g de cacau"], intro: "Com whey de chocolate.", av: ["aveia", "leite"], tags: ["Proteico"] });
BRW({ id: "bp-brw-sem-acucar", emoji: "🍫", nome: "Brownie sem açúcar", ing: ["2 ovos", "80 g de óleo de coco", "90 g de " + XI, "100 g de chocolate 70% sem açúcar (adoçado com " + XI + ")", "60 g de farinha de amêndoas", "20 g de cacau"], intro: "Adoçado só com " + XI + ".", av: ["semacucar", "castanha"], tags: ["Sem açúcar"] });
BRW({ id: "bp-bld-amendoim", emoji: "🥜", nome: "Blondie de pasta de amendoim", ing: ["2 ovos", "120 g de pasta de amendoim", "30 g de óleo de coco", "80 g de açúcar mascavo", "70 g de farinha de aveia", "3 g de fermento", "40 g de gotas de chocolate branco ou 70%"], intro: "O 'brownie branco', com amendoim.", av: ["aveia", "amendoim"] });
BRW({ id: "bp-bld-grao-de-bico", emoji: "🌰", nome: "Blondie de grão-de-bico", ing: ["240 g de grão-de-bico cozido", "80 g de pasta de amendoim", "60 g de mel", "5 g de baunilha", "3 g de fermento", "1 pitada de sal", "50 g de gotas de chocolate 70%"], passos: [{ t: "Bata tudo, menos as gotas, no processador. Misture as gotas." }],
  intro: "Sem ovo e sem farinha: cremoso e firme.", av: ["sgsl", "amendoim"], tags: ["Sem glúten", "Sem ovo"] });
BRW({ id: "bp-bld-coco-limao", emoji: "🍋", nome: "Blondie de coco com limão", ing: ["2 ovos", "60 g de óleo de coco", "90 g de açúcar de coco", "Raspas de 2 limões + 20 g de suco", "60 g de farinha de arroz", "40 g de coco ralado", "3 g de fermento"], intro: "Cítrico e tropical.", av: ["sgsl", "ovo"], tags: ["Sem glúten"] });
BRW({ id: "bp-brw-abobrinha", emoji: "🍫", nome: "Brownie de abobrinha", ing: ["150 g de abobrinha ralada e espremida", "2 ovos", "50 g de óleo de coco", "90 g de açúcar de coco", "40 g de cacau", "60 g de farinha de aveia", "3 g de fermento"], intro: "Abobrinha some e deixa o brownie úmido." });

/* ===================== SABORES BRASILEIROS (10) ===================== */
function BR(o) {
  P({ id: o.id, sec: "Premium · Sabores brasileiros", emoji: o.emoji, nome: o.nome, intro: o.intro,
    tempo: o.tempo || 55, nivel: "Fácil", rende: o.rende || "1 bolo de 20 cm (10 fatias)", tags: ["Forno", "Brasileiro"].concat(o.tags || []),
    ingredientes: o.ing, passos: [FORNO(180, o.forma)].concat(o.passos).concat([ASSA(o.min || 35), ESFRIA]).concat(o.depois || []),
    dica: o.dica, aviso: av.apply(null, o.av || ["aveia"]) });
}
BR({ id: "bp-br-pacoca", emoji: "🥜", nome: "Bolo de paçoca", ing: ["3 ovos", "150 g de leite (ou bebida vegetal)", "50 g de óleo", "100 g de açúcar mascavo", "80 g de amendoim torrado moído", "140 g de farinha de aveia", "10 g de fermento", "Cobertura: 40 g de amendoim moído + 20 g de mel"],
  passos: [{ t: "Misture os líquidos e o açúcar. Junte o amendoim moído, a farinha e o fermento." }], depois: [{ t: "Misture o amendoim com o mel e espalhe por cima." }],
  intro: "Amendoim moído na massa e farofa de amendoim por cima.", dica: "Moa o amendoim no liquidificador no pulsar, para não virar pasta.", av: ["aveia", "amendoim", "leite"] });
BR({ id: "bp-br-cupuacu", emoji: "🟤", nome: "Bolo de cupuaçu", ing: ["200 g de polpa de cupuaçu", "3 ovos", "60 g de óleo", "110 g de açúcar de coco", "180 g de farinha de aveia", "10 g de fermento", "Calda: 100 g de polpa de cupuaçu + 30 g de mel"],
  passos: [{ t: "Bata a polpa, os ovos, o óleo e o açúcar. Junte a farinha e o fermento." }], depois: [{ t: "Cozinhe a calda 4 minutos e regue o bolo." }], intro: "O sabor da Amazônia, azedinho e perfumado.", dica: "Polpa congelada de cupuaçu funciona bem: descongele antes." });
BR({ id: "bp-br-acai-banana", emoji: "🟣", nome: "Bolo de açaí com banana", ing: ["150 g de polpa de açaí sem açúcar", "1 banana madura", "3 ovos", "50 g de óleo", "100 g de açúcar de coco", "160 g de farinha de aveia", "10 g de fermento"],
  passos: [{ t: "Bata a polpa, a banana, os ovos, o óleo e o açúcar. Junte a farinha e o fermento." }], intro: "Roxo, úmido e com gosto de açaí na tigela.", dica: "Sirva com granola e rodelas de banana por cima." });
BR({ id: "bp-br-cuscuz-coco", emoji: "🌽", nome: "Bolo de cuscuz com coco", ing: ["200 g de flocão de milho", "400 g de leite de coco", "3 ovos", "80 g de açúcar de coco", "50 g de coco ralado", "40 g de óleo de coco", "8 g de fermento"],
  passos: [{ t: "Hidrate o flocão no leite de coco por 15 minutos.", timer: 15 }, { t: "Junte os ovos, o açúcar, o coco e o óleo. Por último, o fermento." }], intro: "Cuscuz doce de nordeste em forma de bolo.", forma: "uma forma de 20 x 20 cm", av: ["sgsl", "ovo"], tags: ["Sem glúten"] });
BR({ id: "bp-br-fuba-goiabada", emoji: "🍬", nome: "Bolo de fubá com goiabada zero", ing: ["3 ovos", "240 g de leite (ou bebida vegetal)", "60 g de óleo", "90 g de açúcar mascavo", "150 g de fubá mimoso", "70 g de farinha de aveia", "10 g de fermento", "150 g de goiabada sem açúcar (adoçada com xilitol ou eritritol) em cubos"],
  passos: [{ t: "Bata os líquidos e o açúcar. Junte o fubá, a farinha e o fermento. Misture os cubos de goiabada." }], forma: "uma forma com furo de 22 cm", intro: "Fubá com pedaços de goiabada derretida.", dica: "Passe a goiabada na farinha para não afundar.", av: ["aveia", "leite"] });
BR({ id: "bp-br-pe-de-moleque", emoji: "🥜", nome: "Bolo pé de moleque", ing: ["3 ovos", "150 g de leite (ou bebida vegetal)", "50 g de óleo", "100 g de rapadura ralada", "150 g de farinha de aveia", "60 g de amendoim torrado picado", "10 g de fermento", "Calda: 60 g de rapadura + 40 g de água + 40 g de amendoim"],
  passos: [{ t: "Misture tudo, deixando o fermento por último." }], depois: [{ t: "Derreta a rapadura na água, junte o amendoim e espalhe sobre o bolo." }], intro: "Rapadura e amendoim, como o doce de festa junina.", av: ["aveia", "amendoim", "leite"] });
BR({ id: "bp-br-queijo", emoji: "🧀", nome: "Bolo de queijo fit", ing: ["3 ovos", "200 g de leite", "40 g de óleo", "80 g de açúcar demerara", "100 g de queijo minas padrão ralado", "40 g de parmesão ralado", "120 g de farinha de arroz", "40 g de polvilho doce", "10 g de fermento"],
  passos: [{ t: "Bata no liquidificador os ovos, o leite, o óleo, o açúcar e os queijos. Junte a farinha, o polvilho e o fermento." }], intro: "Doce e salgadinho ao mesmo tempo, de padaria mineira.", av: ["Sem glúten (confira os rótulos).", "leite", "ovo"], tags: ["Sem glúten"] });
BR({ id: "bp-br-rapadura-banana", emoji: "🍌", nome: "Bolo de banana com rapadura", ing: ["Fundo: 3 bananas em fatias + 60 g de rapadura ralada", "3 ovos", "120 g de leite", "50 g de óleo", "50 g de rapadura ralada", "160 g de farinha de aveia", "3 g de canela", "10 g de fermento"],
  passos: [{ t: "Espalhe a rapadura do fundo na forma untada e arrume as bananas por cima." }, { t: "Misture a massa e despeje sobre as bananas." }], depois: [{ t: "Desenforme ainda morno, virando: as bananas caramelizadas ficam por cima." }], intro: "Bananada de forma, com rapadura.", av: ["aveia", "leite"] });
BR({ id: "bp-br-jabuticaba", emoji: "🟣", nome: "Bolo de jabuticaba", ing: ["3 ovos", "60 g de óleo", "110 g de açúcar de coco", "120 g de iogurte", "180 g de farinha de aveia", "10 g de fermento", "Calda: 250 g de jabuticabas + 50 g de açúcar de coco + 50 g de água"],
  passos: [{ t: "Misture a massa e asse." }], depois: [{ t: "Calda: cozinhe as jabuticabas com o açúcar e a água por 10 minutos, amassando; coe e regue o bolo." }], intro: "Massa branca com calda roxa de jabuticaba.", av: ["aveia", "leite"] });
BR({ id: "bp-br-castanha-laranja", emoji: "🌰", nome: "Bolo de castanha-do-pará com laranja", ing: ["3 ovos", "120 g de suco de laranja", "Raspas de 1 laranja", "50 g de óleo", "100 g de açúcar de coco", "80 g de castanha-do-pará moída", "120 g de farinha de arroz", "8 g de fermento"],
  passos: [{ t: "Misture os líquidos, o açúcar e as raspas. Junte a castanha, a farinha e o fermento." }], intro: "Castanha do Pará com laranja, sem trigo e sem leite.", av: ["sgsl", "castanha"], tags: ["Sem glúten", "Sem lactose"] });

})();
