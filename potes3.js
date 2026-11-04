/* ================================================================
   SALADAS NO POTE QUE RESOLVEM — PREMIUM: 10 bônus
   6 Café da manhã no pote · 7 Sobremesas no pote · 8 Pastas e patês
   9 Conservas rápidas · 10 Lanches no pote · 11 Cardápio de 4 semanas
   12 Kit para vender saladas no pote · 13 Etiquetas e controle de validade
   14 Desafios extras (no jogo) · 15 Porções para a família
   Carregar DEPOIS de potes2.js. premium: "potes_premium".
   ================================================================ */
(function () {
var L = window.POTES_LIB, XI = "xilitol ou eritritol";
window.SECOES.potes = window.SECOES.potes.concat(["Bônus Premium · Café da manhã no pote", "Bônus Premium · Sobremesas no pote",
  "Bônus Premium · Pastas e patês", "Bônus Premium · Conservas rápidas", "Bônus Premium · Lanches no pote"]);
function B(sec) { return function (o) { o.sec = "Bônus Premium · " + sec; o.premium = "potes_premium"; L.simples(o); }; }
var P = function (t, timer) { return timer ? { t: t, timer: timer } : { t: t }; };

/* ======================= 6 · CAFÉ DA MANHÃ NO POTE (8) ======================= */
var c = B("Café da manhã no pote");
c({ id: "cm-overnight-banana", emoji: "🍌", nome: "Overnight oats de banana e canela", intro: "Aveia que hidrata durante a noite: de manhã é só abrir o pote.", tempo: 5, rende: "1 pote de 300 ml", tags: ["Sem fogão", "Dura 3 dias"],
  ingredientes: ["40 g de aveia em flocos", "150 ml de leite ou bebida vegetal", "1 colher de chá de chia", "1/2 banana amassada + 1/2 em rodelas", "1 pitada de canela"],
  passos: [P("No pote, misture a aveia, o leite, a chia, a banana amassada e a canela."), P("Cubra com as rodelas de banana, feche e leve à geladeira por pelo menos 6 horas."), P("Coma frio, direto do pote. Dura 3 dias na geladeira.")],
  aviso: "Leva aveia (pode ter traços de glúten) e leite (use bebida vegetal para tirar a lactose)." });
c({ id: "cm-overnight-cacau", emoji: "🍫", nome: "Overnight oats de cacau e pasta de amendoim", intro: "Gosto de sobremesa no café da manhã.", tempo: 5, rende: "1 pote de 300 ml", tags: ["Sem fogão", "Dura 3 dias"],
  ingredientes: ["40 g de aveia em flocos", "150 ml de leite ou bebida vegetal", "1 colher de sopa de cacau em pó 100%", "1 colher de sopa de pasta de amendoim", "1 colher de chá de " + XI, "1 colher de chá de chia"],
  passos: [P("Misture tudo no pote, menos a pasta de amendoim."), P("Coloque a pasta de amendoim por cima, feche e deixe na geladeira por 6 horas ou mais.")],
  aviso: "Leva amendoim, aveia e leite. Xilitol é tóxico para cães." });
c({ id: "cm-iogurte-frutas", emoji: "🍓", nome: "Iogurte em camadas com frutas vermelhas", intro: "Iogurte, fruta e granola, com a granola à parte para continuar crocante.", tempo: 5, rende: "1 pote de 300 ml", tags: ["Sem fogão", "Dura 2 dias"],
  ingredientes: ["170 g de iogurte natural", "80 g de morangos ou frutas vermelhas", "1 colher de chá de mel (opcional)", "2 colheres de sopa de granola sem açúcar, à parte"],
  passos: [P("No pote, alterne camadas de iogurte e fruta picada. Termine com fruta."), P("Granola num saquinho, por cima só na hora.")], aviso: "Contém lactose. A granola pode ter glúten." });
c({ id: "cm-chia-manga", emoji: "🥭", nome: "Pudim de chia com manga", intro: "Chia com leite de coco e manga por cima.", tempo: 5, rende: "1 pote de 300 ml", tags: ["Sem fogão", "Vegano", "Dura 3 dias"],
  ingredientes: ["3 colheres de sopa de chia (30 g)", "150 ml de leite de coco diluído (metade leite de coco, metade água)", "1 colher de chá de " + XI, "1/2 manga em cubos"],
  passos: [P("Misture a chia, o leite de coco e o adoçante. Espere 10 minutos e mexa de novo para não empelotar.", 10), P("Feche e deixe na geladeira por 4 horas. Coloque a manga por cima.")], aviso: "Xilitol é tóxico para cães." });
c({ id: "cm-overnight-maca", emoji: "🍎", nome: "Overnight oats de maçã e canela", intro: "Gosto de torta de maçã, sem forno.", tempo: 8, rende: "1 pote de 300 ml", tags: ["Sem fogão", "Dura 3 dias"],
  ingredientes: ["40 g de aveia em flocos", "150 ml de leite ou bebida vegetal", "1/2 maçã ralada", "1/2 colher de chá de canela", "1 colher de sopa de nozes picadas"],
  passos: [P("Misture a aveia, o leite, a maçã e a canela no pote."), P("Coloque as nozes por cima, feche e deixe na geladeira por 6 horas.")], aviso: "Leva aveia, leite e nozes." });
c({ id: "cm-salgado-ovo", emoji: "🥚", nome: "Pote salgado de ovo, cottage e tomate", intro: "Café da manhã salgado para quem não curte doce cedo.", tempo: 12, rende: "1 pote de 400 ml", tags: ["Proteína", "Dura 3 dias"],
  ingredientes: ["2 ovos cozidos em quartos", "3 colheres de sopa de cottage", "6 tomates-cereja", "1/2 pepino em palitos", "Sal, pimenta e orégano"],
  passos: [P("Cozinhe os ovos por 10 minutos e passe para água gelada.", 10), P("Monte: pepino e tomate no fundo, ovos no meio, cottage por cima. Tempere na hora.")], aviso: "Leva ovo e lactose." });
c({ id: "cm-tapioca-pote", emoji: "🥥", nome: "Pudim de tapioca com coco", intro: "Tapioca granulada hidratada no leite de coco, como um mingau frio.", tempo: 10, rende: "2 potes de 250 ml", tags: ["Sem glúten", "Dura 3 dias"],
  ingredientes: ["50 g de tapioca granulada", "250 ml de leite de coco diluído", "1 colher de sopa de " + XI, "Canela e coco ralado sem açúcar por cima"],
  passos: [P("Aqueça o leite de coco com o adoçante até quase ferver. Desligue, junte a tapioca e misture."), P("Tampe e deixe 20 minutos até hidratar. Divida nos potes, polvilhe canela e coco e leve à geladeira.", 20)], aviso: "Xilitol é tóxico para cães." });
c({ id: "cm-iogurte-granola-banana", emoji: "🍯", nome: "Iogurte com banana, aveia e mel", intro: "Clássico de padaria, pronto na geladeira.", tempo: 5, rende: "1 pote de 300 ml", tags: ["Sem fogão", "Dura 2 dias"],
  ingredientes: ["170 g de iogurte natural", "1 banana em rodelas com gotas de limão", "2 colheres de sopa de aveia em flocos", "1 colher de chá de mel"],
  passos: [P("Alterne iogurte, banana e aveia no pote. Mel por cima na hora.")], aviso: "Contém lactose. Leva aveia." });

/* ======================= 7 · SOBREMESAS NO POTE (8) ======================= */
var s = B("Sobremesas no pote");
s({ id: "so-mousse-cacau", emoji: "🍫", nome: "Mousse de cacau e iogurte", intro: "Cremosa, com cacau 100% e adoçada com " + XI + ".", tempo: 10, rende: "4 potinhos de 120 ml", tags: ["Sem açúcar", "Dura 3 dias"],
  ingredientes: ["340 g de iogurte natural integral (ou grego)", "3 colheres de sopa de cacau em pó 100%", "3 colheres de sopa de " + XI, "1 colher de chá de essência de baunilha"],
  passos: [P("Misture o cacau e o adoçante, junte o iogurte e a baunilha e bata com fouet até ficar liso."), P("Divida nos potinhos e leve à geladeira por 2 horas.")], aviso: "Contém lactose. Xilitol é tóxico para cães." });
s({ id: "so-pave-morango", emoji: "🍓", nome: "Pavê de morango no pote", intro: "Camadas de creme de iogurte, morango e biscoito de aveia.", tempo: 15, rende: "4 potinhos", tags: ["Sem açúcar", "Dura 2 dias"],
  ingredientes: ["340 g de iogurte grego", "2 colheres de sopa de " + XI, "200 g de morangos picados", "4 biscoitos de aveia sem açúcar triturados"],
  passos: [P("Misture o iogurte com o adoçante."), P("Monte camadas: biscoito, creme, morango. Repita e termine com morango."), P("Geladeira por 2 horas.")], aviso: "Contém lactose. Biscoito de aveia pode ter glúten. Xilitol é tóxico para cães." });
s({ id: "so-banoffee", emoji: "🍌", nome: "Banoffee de pote", intro: "Banana, creme e uma base crocante de aveia e castanha.", tempo: 15, rende: "4 potinhos", tags: ["Dura 2 dias"],
  ingredientes: ["4 colheres de sopa de aveia + 2 de castanha picada + 1 de óleo de coco (base)", "2 bananas em rodelas", "340 g de iogurte grego batido com 1 colher de sopa de " + XI, "Canela"],
  passos: [P("Toste a aveia com a castanha e o óleo de coco numa frigideira por 3 minutos."), P("Monte: base, banana, creme. Polvilhe canela e leve à geladeira.")], aviso: "Contém lactose, castanhas e aveia. Xilitol é tóxico para cães." });
s({ id: "so-manga-coco", emoji: "🥭", nome: "Creme de manga com coco", intro: "Manga batida com leite de coco: sorvete de colher sem sorveteira.", tempo: 10, rende: "4 potinhos", tags: ["Vegana", "Dura 3 dias"],
  ingredientes: ["2 mangas maduras em cubos", "200 ml de leite de coco", "Suco de 1/2 limão", "Coco em lascas tostado"],
  passos: [P("Bata a manga, o leite de coco e o limão até ficar liso."), P("Divida nos potinhos, leve à geladeira por 3 horas e finalize com coco.")] });
s({ id: "so-maracuja", emoji: "💛", nome: "Mousse de maracujá de iogurte", intro: "Azedinha e cremosa, sem leite condensado.", tempo: 10, rende: "4 potinhos", tags: ["Sem açúcar", "Dura 3 dias"],
  ingredientes: ["340 g de iogurte grego", "1/2 xícara de polpa de maracujá concentrada", "3 colheres de sopa de " + XI, "Sementes de maracujá para decorar"],
  passos: [P("Bata o iogurte, a polpa e o adoçante com fouet."), P("Divida, decore com sementes e leve à geladeira por 2 horas.")], aviso: "Contém lactose. Xilitol é tóxico para cães." });
s({ id: "so-maca-crumble", emoji: "🍎", nome: "Maçã com crumble de aveia", intro: "Maçã cozida com canela e farofa crocante à parte.", tempo: 20, rende: "4 potinhos", tags: ["Sem açúcar", "Dura 4 dias"],
  ingredientes: ["3 maçãs em cubos", "1 colher de chá de canela", "2 colheres de sopa de água", "Crumble: 6 colheres de sopa de aveia, 2 de farinha de amêndoas, 1 de óleo de coco, 1 de " + XI],
  passos: [P("Cozinhe a maçã com a canela e a água, tampado, por 8 minutos.", 8), P("Crumble: misture com a ponta dos dedos e toste na airfryer a 180 °C por 5 minutos, mexendo.", 5), P("Maçã nos potes; crumble num saquinho, por cima só na hora.")], aviso: "Leva aveia e amêndoas. Xilitol é tóxico para cães." });
s({ id: "so-chia-chocolate", emoji: "🍫", nome: "Pudim de chia com cacau", intro: "Pudim de chia com cacau e banana por cima.", tempo: 5, rende: "2 potinhos", tags: ["Vegana", "Sem açúcar", "Dura 3 dias"],
  ingredientes: ["4 colheres de sopa de chia", "250 ml de bebida vegetal", "1 colher de sopa de cacau", "1 colher de sopa de " + XI, "1 banana em rodelas"],
  passos: [P("Misture tudo menos a banana. Espere 10 minutos e mexa de novo.", 10), P("Geladeira por 4 horas. Banana por cima na hora.")], aviso: "Xilitol é tóxico para cães." });
s({ id: "so-gelatina-frutas", emoji: "🍇", nome: "Gelatina de frutas com iogurte", intro: "Gelatina incolor com suco de uva integral e frutas.", tempo: 15, rende: "4 potinhos", tags: ["Dura 4 dias"],
  ingredientes: ["1 envelope de gelatina incolor sem sabor (12 g)", "400 ml de suco de uva integral", "1 xícara de frutas picadas", "4 colheres de sopa de iogurte para cobrir"],
  passos: [P("Hidrate a gelatina em 5 colheres de água fria e dissolva no micro-ondas por 15 segundos."), P("Misture ao suco, divida nos potes com as frutas e leve à geladeira por 4 horas. Iogurte por cima.")], aviso: "Contém lactose (iogurte). Suco de uva integral tem o açúcar natural da fruta." });

/* ======================= 8 · PASTAS E PATÊS (6) ======================= */
var pt = B("Pastas e patês");
pt({ id: "pa-homus", emoji: "🫘", nome: "Homus", intro: "Pasta de grão-de-bico com tahine: vai com palitos de legume ou no pote como proteína.", tempo: 10, rende: "1 pote de 300 g", tags: ["Vegana", "Dura 5 dias"],
  ingredientes: ["2 xícaras de grão-de-bico cozido (300 g)", "3 colheres de sopa de tahine", "Suco de 1 limão", "1 dente de alho", "3 a 5 colheres de sopa de água gelada", "Sal e azeite"],
  passos: [P("Bata tudo no processador, juntando a água aos poucos, até ficar bem cremoso."), P("Guarde num pote com 1 fio de azeite por cima.")], aviso: "Leva gergelim." });
pt({ id: "pa-atum", emoji: "🐟", nome: "Patê de atum com iogurte", intro: "Para comer com palitos de cenoura ou no wrap.", tempo: 5, rende: "1 pote de 250 g", tags: ["Proteína", "Dura 3 dias"],
  ingredientes: ["1 lata de atum em água escorrido", "4 colheres de sopa de iogurte natural", "1 colher de sopa de cebola ralada", "Salsinha, limão e sal"],
  passos: [P("Amasse o atum com o garfo e misture tudo.")], aviso: "Leva peixe e lactose." });
pt({ id: "pa-ricota", emoji: "🌿", nome: "Pasta de ricota com ervas", intro: "Leve e versátil.", tempo: 5, rende: "1 pote de 250 g", tags: ["Vegetariana", "Dura 4 dias"],
  ingredientes: ["200 g de ricota", "3 colheres de sopa de iogurte", "Cebolinha, salsinha e orégano", "1 fio de azeite, sal e pimenta"],
  passos: [P("Amasse a ricota com o garfo e misture tudo até ficar cremoso.")], aviso: "Contém lactose." });
pt({ id: "pa-beterraba", emoji: "❤️", nome: "Homus de beterraba", intro: "Rosa, bonito e diferente.", tempo: 10, rende: "1 pote de 300 g", tags: ["Vegana", "Dura 5 dias"],
  ingredientes: ["1 beterraba cozida", "1 xícara de grão-de-bico cozido", "2 colheres de sopa de tahine", "Suco de 1 limão", "Sal e cominho"],
  passos: [P("Bata tudo no processador até ficar liso.")], aviso: "Leva gergelim." });
pt({ id: "pa-frango", emoji: "🍗", nome: "Pasta de frango com cenoura", intro: "Frango desfiado cremoso para wrap ou palitos.", tempo: 25, rende: "1 pote de 350 g", tags: ["Proteína", "Dura 3 dias"],
  ingredientes: ["200 g de frango cozido e desfiado", "1 cenoura ralada fina", "5 colheres de sopa de iogurte", "Cebolinha, sal e pimenta"],
  passos: [P("Cozinhe o frango em água com sal por 20 minutos e desfie frio.", 20), P("Misture tudo.")], aviso: "Contém lactose." });
pt({ id: "pa-berinjela", emoji: "🍆", nome: "Babaganuche", intro: "Pasta árabe de berinjela assada.", tempo: 35, rende: "1 pote de 250 g", tags: ["Vegana", "Dura 4 dias"],
  ingredientes: ["2 berinjelas", "2 colheres de sopa de tahine", "Suco de 1 limão", "1 dente de alho", "Sal e azeite"],
  passos: [P("Asse as berinjelas inteiras furadas a 220 °C por 30 minutos, até murcharem.", 30), P("Raspe a polpa e bata com o resto.")], aviso: "Leva gergelim." });

/* ======================= 9 · CONSERVAS RÁPIDAS (6) ======================= */
var cv = B("Conservas rápidas");
var CONS = "Feche e guarde na geladeira. Fica pronta em 1 hora e dura até 2 semanas, sempre retirando com garfo limpo.";
cv({ id: "co-cebola", emoji: "🧅", nome: "Cebola roxa em conserva", intro: "Dá cor e acidez a qualquer pote.", tempo: 10, rende: "1 vidro de 300 ml", tags: ["Dura 2 semanas"],
  ingredientes: ["1 cebola roxa em fatias finas", "120 ml de vinagre de maçã", "120 ml de água", "1 colher de chá de sal", "1 colher de chá de " + XI + " (opcional)"],
  passos: [P("Aqueça o vinagre, a água, o sal e o adoçante até dissolver."), P("Coloque a cebola no vidro e cubra com o líquido quente. " + CONS)] });
cv({ id: "co-pepino", emoji: "🥒", nome: "Picles de pepino", intro: "Pepino crocante e azedinho.", tempo: 10, rende: "1 vidro de 400 ml", tags: ["Dura 2 semanas"],
  ingredientes: ["2 pepinos em rodelas", "150 ml de vinagre de vinho branco", "150 ml de água", "1 colher de chá de sal", "Endro e 1 dente de alho"],
  passos: [P("Aqueça o vinagre, a água e o sal."), P("Arrume o pepino, o endro e o alho no vidro e cubra com o líquido. " + CONS)] });
cv({ id: "co-cenoura", emoji: "🥕", nome: "Cenoura em conserva com gengibre", intro: "Palitos crocantes para pote e lanche.", tempo: 10, rende: "1 vidro de 400 ml", tags: ["Dura 2 semanas"],
  ingredientes: ["2 cenouras em palitos", "150 ml de vinagre de arroz", "150 ml de água", "1 colher de chá de sal", "1 pedaço de gengibre em lâminas"],
  passos: [P("Aqueça o vinagre, a água e o sal."), P("Arrume a cenoura e o gengibre no vidro e cubra. " + CONS)] });
cv({ id: "co-pimentao", emoji: "🫑", nome: "Pimentão assado no azeite", intro: "Doce e defumado, deixa qualquer salada com cara de restaurante.", tempo: 30, rende: "1 vidro de 300 ml", tags: ["Dura 1 semana"],
  ingredientes: ["2 pimentões vermelhos", "Azeite para cobrir", "1 dente de alho fatiado", "Sal e orégano"],
  passos: [P("Asse os pimentões inteiros a 220 °C por 25 minutos, até a pele queimar.", 25), P("Abafe num pote fechado por 10 minutos, tire a pele e as sementes e corte em tiras.", 10), P("Coloque no vidro com alho, sal e orégano e cubra com azeite. Geladeira por até 1 semana.")] });
cv({ id: "co-beterraba", emoji: "❤️", nome: "Beterraba em conserva", intro: "Cubinhos prontos para a semana.", tempo: 40, rende: "1 vidro de 400 ml", tags: ["Dura 10 dias"],
  ingredientes: ["2 beterrabas cozidas em cubos", "150 ml de vinagre de maçã", "100 ml de água", "1 colher de chá de sal", "1 folha de louro"],
  passos: [P("Cozinhe as beterrabas com casca por 35 minutos, descasque e corte.", 35), P("Aqueça o vinagre, a água e o sal e cubra a beterraba no vidro. Geladeira por até 10 dias.")] });
cv({ id: "co-repolho", emoji: "🟣", nome: "Repolho roxo agridoce", intro: "Crocante, azedinho e muito colorido.", tempo: 10, rende: "1 vidro de 500 ml", tags: ["Dura 2 semanas"],
  ingredientes: ["1/4 de repolho roxo fatiado fino", "150 ml de vinagre de maçã", "150 ml de água", "1 colher de chá de sal", "1 colher de chá de " + XI],
  passos: [P("Aqueça o vinagre, a água, o sal e o adoçante."), P("Aperte o repolho no vidro e cubra. " + CONS)] });

/* ======================= 10 · LANCHES NO POTE (6) ======================= */
var la = B("Lanches no pote");
la({ id: "la-palitos-homus", emoji: "🥕", nome: "Palitos de legumes com homus", intro: "O lanche da tarde mais prático: homus no fundo e palitos em pé.", tempo: 10, rende: "1 pote de 300 ml", tags: ["Vegana", "Dura 4 dias"],
  ingredientes: ["4 colheres de sopa de homus", "1/2 cenoura, 1/2 pepino e 1 talo de salsão em palitos"], passos: [P("Coloque o homus no fundo do pote e os palitos em pé. Feche e leve à geladeira.")], aviso: "Leva gergelim." });
la({ id: "la-frutas-iogurte", emoji: "🍉", nome: "Salada de frutas com iogurte", intro: "Frutas firmes cortadas no domingo duram até 3 dias.", tempo: 10, rende: "1 pote de 400 ml", tags: ["Dura 3 dias"],
  ingredientes: ["Frutas firmes em cubos: maçã, uva, melão e abacaxi (1 e 1/2 xícara)", "Suco de 1/2 laranja", "Iogurte num potinho à parte"], passos: [P("Misture as frutas com o suco de laranja (segura a cor). Iogurte só na hora.")], aviso: "Contém lactose (iogurte)." });
la({ id: "la-ovo-tomate", emoji: "🥚", nome: "Ovos, tomate-cereja e queijo", intro: "Lanche salgado e proteico.", tempo: 12, rende: "1 pote de 300 ml", tags: ["Proteína", "Dura 3 dias"],
  ingredientes: ["2 ovos cozidos", "8 tomates-cereja", "40 g de queijo branco em cubos", "Orégano e sal num saquinho"], passos: [P("Cozinhe os ovos por 10 minutos.", 10), P("Monte tudo no pote. Tempere na hora.")], aviso: "Leva ovo e lactose." });
la({ id: "la-grao-crocante", emoji: "🟠", nome: "Mix de grão-de-bico tostado e castanhas", intro: "Petisco salgado para a gaveta do trabalho, fora da geladeira.", tempo: 20, rende: "5 potinhos", tags: ["Vegana", "Dura 5 dias"],
  ingredientes: ["1 receita de grão-de-bico tostado (bônus Crocantes)", "1/2 xícara de castanha-de-caju", "2 colheres de sopa de semente de abóbora"], passos: [P("Misture tudo e divida em potinhos fechados.")], aviso: "Leva castanhas." });
la({ id: "la-wrap-pote", emoji: "🌯", nome: "Wrap desmontado no pote", intro: "Recheio no pote e a tortilha à parte: monta na hora, sem ficar mole.", tempo: 15, rende: "1 pote + 1 tortilha", tags: ["Proteína", "Dura 3 dias"],
  ingredientes: ["3 colheres de sopa de pasta de frango", "Alface e cenoura ralada", "1 tortilha integral embalada à parte"], passos: [P("Pasta no fundo, cenoura e alface por cima. Monte o wrap na hora.")], aviso: "A tortilha contém glúten. A pasta contém lactose." });
la({ id: "la-uva-queijo", emoji: "🍇", nome: "Uva, queijo e nozes", intro: "O trio da tábua de frios no potinho.", tempo: 5, rende: "1 pote de 250 ml", tags: ["Vegetariana", "Dura 3 dias"],
  ingredientes: ["1 punhado de uvas", "40 g de queijo minas padrão em cubos", "1 colher de sopa de nozes"], passos: [P("Monte no pote, com as nozes por cima.")], aviso: "Contém lactose e nozes." });

/* ======================= 11 a 15 · GUIAS ======================= */
var semanas = [
  ["sp-classica-mista", "sp-frango-quinoa", "sp-atum-feijao", "sp-grao-mediterranea", "sp-repolho"],
  ["sp-grega", "sp-frango-mostarda", "sp-nicoise", "sp-lentilha", "sp-sf-palmito"],
  ["sp-caprese", "sp-frango-mexicano", "sp-ovo-grao", "sp-tabule-quinoa", "sp-arroz-grego"],
  ["sp-tropical", "sp-frango-oriental", "sp-atum-macarrao", "sp-tofu-oriental", "sp-feijao-fradinho"]
];
var DIAS = ["Segunda", "Terça", "Quarta", "Quinta", "Sexta"];
window.GUIAS.push(
  { id: "pp-cardapio", produto: "potes_premium", col: "potes", emoji: "📅", nome: "Cardápio de 4 semanas", sub: "20 almoços planejados, na ordem certa de validade",
    cardapio: semanas.reduce(function (a, w, i) { return a.concat(w.map(function (id, j) { return { id: id, tipo: "Semana " + (i + 1) + " · " + DIAS[j] }; })); }, []),
    porcoes: [{ n: "Como usar", t: "Cada semana já está na ordem: as saladas com peixe ou fruta delicada vêm no começo, as veganas e de grãos no fim. O botão abaixo coloca tudo na Lista de compras." }] },
  { id: "pp-vender", produto: "potes_premium", col: "potes", emoji: "💼", nome: "Kit para vender saladas no pote", sub: "Custo, preço, embalagem, rotulagem e divulgação",
    itens: [
      { n: "1. Calcule o custo de cada pote", t: "Some o custo de cada ingrediente na quantidade da receita, mais pote, potinho de molho, etiqueta e sacola.\nA Central PRO (inclusa no Premium) faz essa conta e guarda as fichas." },
      { n: "2. Defina o preço", t: "Um ponto de partida usado no mercado de marmitas é multiplicar o custo por 2,5 a 3, e depois comparar com quem já vende na sua região.\nO preço final é decisão sua: considere seu tempo, entrega e taxas." },
      { n: "3. Embalagem", t: "Pote de vidro com tampa (cliente devolve e ganha desconto) ou pote plástico descartável próprio para alimentos.\nPotinho de molho de 50 ml e crocantes em saquinho." },
      { n: "4. Etiqueta", t: "Nome da salada, ingredientes, data de preparo, validade, \"manter refrigerado\" e alergênicos (glúten, lactose, ovo, peixe, castanhas, amendoim, soja, gergelim).\nCada receita do app já traz os alergênicos e a validade." },
      { n: "5. Regras", t: "Quem vende comida precisa seguir as regras da vigilância sanitária do seu município. Para começar formalizado, muita gente abre MEI. Consulte a prefeitura antes de vender." },
      { n: "6. Logística", t: "Monte no dia da entrega ou na véspera. Transporte em bolsa térmica com gelo. Peça para o cliente guardar na geladeira assim que receber." },
      { n: "7. Mensagens prontas", t: "Divulgação: \"Saladas no pote da semana! Cardápio: [lista]. Pedidos até sexta, entrega no domingo.\"\nConfirmação: \"Pedido confirmado! Seus potes chegam [dia]. Guarde na geladeira e use o molho só na hora.\"\nPós-venda: \"Gostou dos potes? Me conta qual foi a favorita para eu repetir na próxima semana.\"" }
    ] },
  { id: "pp-etiquetas", produto: "potes_premium", col: "potes", emoji: "🏷️", nome: "Etiquetas e controle de validade", sub: "Modelo de etiqueta e o sistema de cores da geladeira",
    itens: [
      { n: "Modelo de etiqueta", t: "NOME DA SALADA\nFeita em: __/__   Consumir até: __/__\nManter refrigerado. Molho à parte.\nContém: ____" },
      { n: "Sistema de cores", t: "Fita vermelha: consumir em até 2 dias (peixe, camarão, fruta delicada).\nFita amarela: até 3 dias (frango, carne, ovo, queijo).\nFita verde: até 5 dias (veganas e de grãos)." },
      { n: "Na geladeira", t: "Potes vermelhos na frente, verdes atrás. Prateleira do meio, longe da porta (onde a temperatura varia mais)." }
    ] },
  { id: "pp-desafios", produto: "potes_premium", col: "potes", emoji: "🏆", nome: "Desafios extras", sub: "Semana Vegana, Proteica, Low carb e Volta ao Mundo, no Desafio da Semana",
    itens: [
      { n: "Como funciona", t: "No Desafio da Semana, a versão Premium libera 4 temas extras. Cada tema sugere 5 saladas da coleção e dá um selo próprio ao completar." },
      { n: "Os temas", t: "🌱 Semana Vegana: 5 potes sem nada de origem animal.\n💪 Semana Proteica: 5 potes com proteína em destaque.\n🥒 Semana Low carb: 5 potes sem grão nem massa.\n🌍 Volta ao Mundo: 5 saladas de 5 países." }
    ] },
  { id: "pp-familia", produto: "potes_premium", col: "potes", emoji: "👨‍👩‍👧", nome: "Porções para a família", sub: "Quanto comprar e como montar para 2, 3 ou 4 pessoas",
    itens: [
      { n: "Multiplique pelo número de potes", t: "Cada receita é 1 pote. Para o casal na semana: 10 potes = 5 receitas em dobro. Escolha no Desafio da Semana e use a Lista de compras." },
      { n: "Para crianças", t: "Pote de 500 ml, metade da proteína e molhos mais suaves (iogurte com ervas, limão). Deixe a criança escolher a camada de cima." },
      { n: "Compras para 4 pessoas (20 potes)", t: "Folhas: 4 maços ou 2 pés grandes.\nGrãos: 300 g de quinoa ou arroz cru.\nProteína: 1,2 kg de frango ou 6 latas de atum ou 12 ovos.\nLegumes firmes: 3 kg no total." }
    ] }
);
})();
