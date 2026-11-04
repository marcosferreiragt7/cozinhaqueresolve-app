/* ================================================================
   ORDER BUMPS DOS PÃES QUE RESOLVEM (R$ 9,90 cada), 20 receitas cada
   · Recheios e Patês que Resolvem           (produto "recheios")
   · Biscoitos e Torradas que Resolvem       (produto "biscoitos")
   · Pão de Queijo e Salgados de Forno que Resolvem (produto "paodequeijo")
   rascunho:true (aparecem só para quem comprou). Não dizer "testadas";
   "sem açúcar" só com xilitol ou eritritol.
   Carregar DEPOIS de paes2.js e ANTES de paes-fotos.js.
   ================================================================ */
(function () {
var R = window.RECEITAS;
window.BUMPS_PAES = ["recheios", "biscoitos", "paodequeijo"];
function col(id, nome, emoji, cor, desc, foot) {
  window.COLECOES.push({ id: id, nome: nome, emoji: emoji, cor: cor, capa: "", produto: id, rascunho: true, desc: desc, foot: foot });
}
function mk(c, sec) { return function (o) { o.col = c; o.premium = c; o.sec = o.sec || sec; o.foto = o.foto || ""; o.nivel = o.nivel || "Fácil";
  o.passos = o.passos.map(function (p) { return typeof p === "string" ? { t: p } : { t: p[0], timer: p[1] }; }); R.push(o); }; }

/* ======================= RECHEIOS E PATÊS (20) ======================= */
col("recheios", "Recheios e Patês que Resolvem", "🥪", "#7A5A2A", "20 patês, pastas e recheios para o pão da semana: de frango, de atum, de queijo, vegetais e doces.",
  "Patês com maionese, iogurte, frango ou peixe: geladeira por até 3 dias, em pote fechado. Pastas de legumes: até 4 dias.");
window.SECOES.recheios = ["Patês salgados", "Pastas de legumes e grãos", "Recheios quentes", "Pastas doces"];
var RS = mk("recheios", "Patês salgados"), RL = mk("recheios", "Pastas de legumes e grãos"), RQ = mk("recheios", "Recheios quentes"), RD = mk("recheios", "Pastas doces");
var GEL3 = "Guarde em pote fechado na geladeira por até 3 dias.";
RS({ id: "rc-frango", emoji: "🐔", nome: "Patê de frango com requeijão", intro: "O patê de sanduíche natural: frango desfiado, requeijão e cenoura ralada.", tempo: 10, rende: "6 sanduíches", tags: ["Sem fogão", "Sanduíche"],
  ingredientes: ["250 g de frango cozido e desfiado", "100 g de requeijão", "1 cenoura ralada fina", "Salsinha, sal e pimenta"], passos: ["Misture tudo e acerte o sal.", GEL3], aviso: "Contém lactose." });
RS({ id: "rc-atum", emoji: "🐟", nome: "Patê de atum com iogurte", intro: "Mais leve que o de maionese, pronto em 5 minutos.", tempo: 5, rende: "6 sanduíches", tags: ["Sem fogão", "Rápido"],
  ingredientes: ["2 latas de atum escorrido", "100 g de iogurte natural", "1 colher de mostarda", "Cebolinha e limão"], passos: ["Amasse o atum e misture o resto.", GEL3], aviso: "Contém peixe e lactose." });
RS({ id: "rc-ricota", emoji: "🧀", nome: "Pasta de ricota com ervas", intro: "Cremosa e leve, com ervas frescas e um fio de azeite.", tempo: 5, rende: "1 pote", tags: ["Sem fogão", "Vegetariana"],
  ingredientes: ["250 g de ricota", "40 g de iogurte", "Salsinha, cebolinha e manjericão picados", "Azeite, sal e limão"], passos: ["Amasse a ricota com o iogurte até ficar cremosa. Misture o resto.", GEL3], aviso: "Contém lactose." });
RS({ id: "rc-ovo", emoji: "🥚", nome: "Patê de ovo", intro: "Ovo cozido, maionese e mostarda: o recheio mais barato e mais pedido.", tempo: 15, rende: "4 sanduíches", tags: ["Econômico"],
  ingredientes: ["4 ovos cozidos", "2 colheres de maionese", "1 colher de chá de mostarda", "Cebolinha, sal e páprica"], passos: [["Cozinhe os ovos por 10 minutos, esfrie em água fria e descasque.", 10], "Amasse com garfo e misture o resto.", "Geladeira por até 2 dias."], aviso: "Contém ovo." });
RS({ id: "rc-presunto", emoji: "🥓", nome: "Patê de presunto", intro: "Presunto triturado com cream cheese: lanche de festa infantil.", tempo: 5, rende: "1 pote", tags: ["Sem fogão", "Festa"],
  ingredientes: ["200 g de presunto", "150 g de cream cheese", "1 colher de mostarda"], passos: ["Triture o presunto no processador e misture com o resto.", GEL3], aviso: "Contém lactose." });
RS({ id: "rc-sardinha", emoji: "🐟", nome: "Patê de sardinha", intro: "Sardinha em lata com tomate e cebola roxa: rende e é barato.", tempo: 5, rende: "1 pote", tags: ["Sem fogão", "Econômico"],
  ingredientes: ["1 lata de sardinha sem espinha", "1 tomate picado sem sementes", "1/4 de cebola roxa picada", "2 colheres de requeijão", "Limão e salsinha"], passos: ["Amasse a sardinha e misture tudo.", "Geladeira por até 2 dias."], aviso: "Contém peixe e lactose." });
RL({ id: "rc-homus", emoji: "🫘", nome: "Homus", intro: "Grão-de-bico, tahine e limão batidos até ficar liso.", tempo: 10, rende: "1 pote", tags: ["Vegano", "Sem glúten"],
  ingredientes: ["250 g de grão-de-bico cozido", "40 g de tahine", "Suco de 1 limão", "1 dente de alho", "Azeite, sal, cominho", "Água gelada para ajustar"], passos: ["Bata tudo no processador, juntando água gelada até ficar cremoso.", "Geladeira por até 4 dias."], aviso: "Leva gergelim (tahine)." });
RL({ id: "rc-berinjela", emoji: "🍆", nome: "Pasta de berinjela (babaganuche)", intro: "Berinjela assada e defumada com tahine e limão.", tempo: 40, rende: "1 pote", tags: ["Vegano", "Sem glúten"],
  ingredientes: ["2 berinjelas", "30 g de tahine", "Limão, alho, sal e azeite"], passos: [["Asse as berinjelas inteiras a 220 °C por 35 minutos, até murcharem.", 35], "Retire a polpa e amasse com o resto.", "Geladeira por até 4 dias."], aviso: "Leva gergelim." });
RL({ id: "rc-pimentao", emoji: "🫑", nome: "Pasta de pimentão assado", intro: "Vermelha, adocicada, com castanha: lembra o muhammara.", tempo: 35, rende: "1 pote", tags: ["Vegano"],
  ingredientes: ["2 pimentões vermelhos assados e sem pele", "50 g de castanha-de-caju ou nozes", "Alho, azeite, sal, páprica"], passos: [["Asse os pimentões a 220 °C por 25 minutos, tampe 10 minutos e retire a pele.", 25], "Bata tudo no processador.", "Geladeira por até 4 dias."], aviso: "Leva castanhas." });
RL({ id: "rc-guacamole", emoji: "🥑", nome: "Guacamole", intro: "Abacate amassado com tomate, cebola e limão. Faça na hora.", tempo: 10, rende: "1 tigela", tags: ["Vegano", "Sem glúten"],
  ingredientes: ["1 abacate maduro", "1 tomate em cubos", "1/4 de cebola roxa", "Coentro, limão e sal"], passos: ["Amasse o abacate com limão e sal e misture o resto.", "Consuma no dia (o abacate escurece)."], aviso: "Não leva leite, ovo nem glúten (confira o rótulo dos temperos e embutidos)." });
RL({ id: "rc-feijao-branco", emoji: "🤍", nome: "Pasta de feijão-branco com alecrim", intro: "Cremosa como homus, com alecrim e alho.", tempo: 10, rende: "1 pote", tags: ["Vegano", "Sem glúten"],
  ingredientes: ["250 g de feijão-branco cozido", "Alecrim, alho, limão, azeite e sal"], passos: ["Bata tudo, ajustando com água.", "Geladeira por até 4 dias."], aviso: "Não leva leite, ovo nem glúten (confira o rótulo dos temperos e embutidos)." });
RL({ id: "rc-cenoura", emoji: "🥕", nome: "Pasta de cenoura assada com cominho", intro: "Doce e terrosa, ótima no pão integral.", tempo: 35, rende: "1 pote", tags: ["Vegano", "Sem glúten"],
  ingredientes: ["400 g de cenoura em rodelas", "Azeite, cominho, alho, limão e sal"], passos: [["Asse a cenoura com azeite e cominho a 200 °C por 30 minutos.", 30], "Bata com alho e limão.", "Geladeira por até 4 dias."], aviso: "Não leva leite, ovo nem glúten (confira o rótulo dos temperos e embutidos)." });
RQ({ id: "rc-frango-cremoso", emoji: "🍗", nome: "Frango cremoso para pão", intro: "Recheio quente de frango com molho de tomate e requeijão para pão francês ou baguete.", tempo: 25, rende: "6 pães", tags: ["Panela"],
  ingredientes: ["400 g de frango em cubos", "1 cebola", "200 g de molho de tomate", "100 g de requeijão", "Orégano"], passos: ["Doure o frango, junte a cebola, o molho e cozinhe 10 minutos.", "Desligue e misture o requeijão. Recheie o pão quente."], aviso: "Contém lactose." });
RQ({ id: "rc-carne-louca", emoji: "🥩", nome: "Carne louca", intro: "Carne desfiada com pimentão e tomate: o recheio de festa.", tempo: 90, rende: "15 pães", tags: ["Panela de pressão", "Festa"],
  ingredientes: ["1 kg de lagarto ou acém", "2 cebolas e 2 pimentões em tiras", "3 tomates", "Vinagre, alho, sal e orégano"], passos: [["Cozinhe a carne na pressão com água e sal por 50 minutos e desfie.", 50], "Refogue cebola, pimentão e tomate, junte a carne, 2 colheres de vinagre e temperos e cozinhe 10 minutos."], aviso: "Não leva leite, ovo nem glúten (confira o rótulo dos temperos e embutidos)." });
RQ({ id: "rc-pernil", emoji: "🍖", nome: "Pernil desfiado", intro: "Pernil temperado na véspera e desfiado com caldo: sanduíche de padaria.", tempo: 180, rende: "15 pães", tags: ["Forno", "Festa"],
  ingredientes: ["1,5 kg de pernil sem osso", "Alho, limão, sal, pimenta, cebola", "Cebola em rodelas para servir"], passos: ["Tempere na véspera.", ["Asse coberto com papel-alumínio a 180 °C por 2 horas, descubra e doure 30 minutos.", 150], "Desfie e misture ao caldo da assadeira."], aviso: "Não leva leite, ovo nem glúten (confira o rótulo dos temperos e embutidos)." });
RQ({ id: "rc-calabresa", emoji: "🌭", nome: "Calabresa acebolada", intro: "Rápida, para pão francês do lanche da tarde.", tempo: 15, rende: "6 pães", tags: ["Frigideira", "Rápido"],
  ingredientes: ["2 linguiças calabresas em rodelas", "2 cebolas em rodelas", "Orégano"], passos: ["Doure a calabresa, junte a cebola e refogue até murchar."], aviso: "Não leva leite, ovo nem glúten (confira o rótulo dos temperos e embutidos)." });
RQ({ id: "rc-ovos-mexidos", emoji: "🍳", nome: "Ovos mexidos cremosos", intro: "O recheio do café da manhã: fogo baixo e um toque de requeijão.", tempo: 8, rende: "2 pães", tags: ["Frigideira", "Café da manhã"],
  ingredientes: ["3 ovos", "1 colher de requeijão", "Manteiga, sal e cebolinha"], passos: ["Bata os ovos com sal. Mexa em fogo baixo com manteiga sem parar até quase firmar. Desligue, junte o requeijão."], aviso: "Contém ovo e lactose." });
RD({ id: "rc-creme-avela", emoji: "🍫", nome: "Creme de cacau e avelã caseiro", intro: "Avelã torrada, cacau e um pouco de açúcar: menos doce que o de pote.", tempo: 20, rende: "1 pote", tags: ["Processador"],
  ingredientes: ["150 g de avelãs torradas sem pele", "30 g de cacau em pó", "50 g de açúcar de confeiteiro", "30 g de óleo de coco", "1 pitada de sal"], passos: ["Processe as avelãs até virar pasta (5 a 8 minutos, raspando as laterais).", "Junte o resto e bata até ficar liso. Fora da geladeira por até 2 semanas."], aviso: "Leva avelãs." });
RD({ id: "rc-amendoim", emoji: "🥜", nome: "Pasta de amendoim caseira", intro: "Só amendoim torrado e uma pitada de sal.", tempo: 15, rende: "1 pote", tags: ["Processador", "Vegano"],
  ingredientes: ["300 g de amendoim torrado sem casca e sem sal", "1 pitada de sal", "Mel opcional"], passos: ["Processe até soltar o óleo e ficar cremoso (8 a 10 minutos)."], aviso: "Leva amendoim." });
RD({ id: "rc-ricota-doce", emoji: "🍯", nome: "Ricota doce com mel e canela", intro: "Cremosa, para pão de leite e torrada no café.", tempo: 5, rende: "1 pote", tags: ["Sem fogão"],
  ingredientes: ["250 g de ricota", "40 g de mel", "Canela e raspas de laranja"], passos: ["Amasse até ficar cremosa e misture o resto.", GEL3], aviso: "Contém lactose." });

/* ======================= BISCOITOS E TORRADAS (20) ======================= */
col("biscoitos", "Biscoitos e Torradas que Resolvem", "🍪", "#8A6A3A", "20 biscoitos, torradas e crackers caseiros: amanteigados, de polvilho, integrais, salgados e para o café.",
  "Guarde biscoitos e torradas em pote bem fechado, longe da umidade. Duram de 7 a 15 dias.");
window.SECOES.biscoitos = ["Doces para o café", "Salgados e crackers", "Torradas", "Sem glúten"];
var BD = mk("biscoitos", "Doces para o café"), BS = mk("biscoitos", "Salgados e crackers"), BT = mk("biscoitos", "Torradas"), BG = mk("biscoitos", "Sem glúten");
var POTE = "Esfrie totalmente e guarde em pote bem fechado.";
BD({ id: "bc-amanteigado", emoji: "🧈", nome: "Biscoito amanteigado", intro: "Derrete na boca. Massa de 4 ingredientes.", tempo: 40, rende: "40 biscoitos", tags: ["Forno"],
  ingredientes: ["200 g de manteiga", "100 g de açúcar", "1 gema", "300 g de farinha de trigo", "Baunilha"], passos: ["Bata a manteiga com o açúcar, junte a gema e a baunilha e depois a farinha.", "Modele bolinhas e achate com o garfo.", ["Asse a 180 °C por 15 minutos, só até a base dourar.", 15], POTE], aviso: "Contém trigo, lactose e ovo." });
BD({ id: "bc-rosquinha", emoji: "🍩", nome: "Rosquinha de nata", intro: "A rosquinha de vó, macia por dentro, ótima no café com leite.", tempo: 45, rende: "30 rosquinhas", tags: ["Forno"],
  ingredientes: ["200 g de nata ou creme de leite", "150 g de açúcar", "2 ovos", "450 g de farinha de trigo", "10 g de fermento químico"], passos: ["Misture tudo até formar massa que não gruda.", "Faça rolinhos e una as pontas.", ["Asse a 180 °C por 20 minutos.", 20], POTE], aviso: "Contém trigo, lactose e ovo." });
BD({ id: "bc-aveia-banana", emoji: "🍌", nome: "Cookie de aveia e banana", intro: "Dois ingredientes base, adoçado pela banana.", tempo: 25, rende: "12 cookies", tags: ["Forno", "Sem açúcar adicionado"],
  ingredientes: ["2 bananas maduras", "150 g de aveia em flocos", "50 g de uvas-passas ou gotas de chocolate", "Canela"], passos: ["Amasse as bananas e misture tudo.", ["Faça montinhos achatados e asse a 180 °C por 15 minutos.", 15]], aviso: "Contém aveia." });
BD({ id: "bc-gotas", emoji: "🍪", nome: "Cookie com gotas de chocolate", intro: "Borda crocante e meio macio.", tempo: 30, rende: "16 cookies", tags: ["Forno"],
  ingredientes: ["120 g de manteiga", "100 g de açúcar mascavo", "50 g de açúcar", "1 ovo", "220 g de farinha de trigo", "4 g de bicarbonato", "150 g de gotas de chocolate"], passos: ["Bata manteiga e açúcares, junte o ovo, depois farinha e bicarbonato, e as gotas.", ["Bolas de 40 g bem espaçadas, 180 °C por 12 minutos (saem moles e firmam ao esfriar).", 12]], aviso: "Contém trigo, lactose e ovo." });
BD({ id: "bc-goiabinha", emoji: "🍬", nome: "Biscoito goiabinha", intro: "Amanteigado com goiabada no centro.", tempo: 40, rende: "30 biscoitos", tags: ["Forno"],
  ingredientes: ["Massa do biscoito amanteigado", "150 g de goiabada em cubinhos"], passos: ["Modele bolinhas, afunde o centro e coloque a goiabada.", ["Asse a 180 °C por 15 minutos.", 15]], aviso: "Contém trigo, lactose e ovo." });
BD({ id: "bc-canela", emoji: "🌀", nome: "Biscoito de canela", intro: "Crocante, com açúcar e canela por fora.", tempo: 35, rende: "30 biscoitos", tags: ["Forno"],
  ingredientes: ["Massa do biscoito amanteigado", "Açúcar com canela para empanar"], passos: ["Modele bolinhas e passe no açúcar com canela.", ["Asse a 180 °C por 15 minutos.", 15]], aviso: "Contém trigo, lactose e ovo." });
BS({ id: "bc-cracker-integral", emoji: "🌾", nome: "Cracker integral de sementes", intro: "Fininho e crocante, para queijos e patês.", tempo: 40, rende: "1 assadeira", tags: ["Forno", "Integral"],
  ingredientes: ["150 g de farinha de trigo integral", "40 g de mix de sementes", "40 g de azeite", "80 g de água", "4 g de sal"], passos: ["Faça uma massa, abra bem fino sobre papel-manteiga e corte quadrados.", ["Asse a 170 °C por 25 minutos.", 25], POTE], aviso: "Contém trigo e gergelim." });
BS({ id: "bc-polvilho", emoji: "⭕", nome: "Biscoito de polvilho assado", intro: "O de praia, oco e crocante.", tempo: 40, rende: "40 biscoitos", tags: ["Forno", "Sem glúten"],
  ingredientes: ["250 g de polvilho azedo", "100 g de leite", "100 g de água", "80 g de óleo", "1 ovo", "5 g de sal"], passos: ["Ferva o leite, a água, o óleo e o sal e escalde o polvilho. Espere amornar e junte o ovo.", "Coloque num saco e faça argolas na assadeira.", ["Asse a 200 °C por 25 minutos sem abrir o forno.", 25]], aviso: "Contém lactose e ovo. Sem glúten (confira o rótulo do polvilho)." });
BS({ id: "bc-queijo", emoji: "🧀", nome: "Biscoito de queijo parmesão", intro: "Salgadinho de festa que some.", tempo: 35, rende: "40 biscoitos", tags: ["Forno", "Festa"],
  ingredientes: ["150 g de farinha de trigo", "100 g de parmesão ralado", "100 g de manteiga gelada", "1 gema", "Pitada de sal"], passos: ["Esfarele a farinha com a manteiga, junte o queijo e a gema.", ["Modele bolinhas, achate e asse a 180 °C por 15 minutos.", 15], POTE], aviso: "Contém trigo, lactose e ovo." });
BS({ id: "bc-palito", emoji: "🥢", nome: "Palitos de massa de pão", intro: "Grissini caseiros com orégano e parmesão.", tempo: 90, rende: "30 palitos", tags: ["Forno"],
  ingredientes: ["250 g de farinha de trigo", "4 g de fermento biológico seco", "5 g de sal", "150 g de água", "20 g de azeite", "Orégano e parmesão"], passos: [["Faça a massa e deixe crescer 40 minutos.", 40], "Abra, corte tiras, torça e polvilhe orégano e queijo.", ["Asse a 190 °C por 18 minutos.", 18]], aviso: "Contém trigo e lactose." });
BS({ id: "bc-crackers-arroz", emoji: "🍘", nome: "Crackers de arroz e gergelim", intro: "Feitos com sobra de arroz cozido.", tempo: 50, rende: "1 assadeira", tags: ["Forno", "Aproveitamento", "Sem glúten"],
  ingredientes: ["300 g de arroz cozido", "30 g de gergelim", "20 g de azeite", "Sal"], passos: ["Bata o arroz até virar pasta, junte o resto e espalhe bem fino sobre papel-manteiga.", ["Asse a 170 °C por 40 minutos, até secar.", 40]], aviso: "Leva gergelim." });
BS({ id: "bc-chips-pao", emoji: "🥨", nome: "Chips de pão sírio", intro: "Triângulos crocantes com za'atar para homus.", tempo: 15, rende: "1 tigela", tags: ["Forno", "Rápido"],
  ingredientes: ["4 pães sírios", "Azeite", "Za'atar ou orégano e sal"], passos: ["Corte em triângulos, separe as camadas, pincele azeite e tempere.", ["Asse a 180 °C por 8 minutos.", 8]], aviso: "Contém trigo." });
BT({ id: "bc-torrada-alho", emoji: "🧄", nome: "Torradinha de alho", intro: "Com pão amanhecido, para sopa e petisco.", tempo: 20, rende: "1 assadeira", tags: ["Forno", "Aproveitamento"],
  ingredientes: ["1 baguete ou pão francês amanhecido em fatias finas", "60 g de manteiga com alho e salsinha"], passos: ["Pincele as fatias.", ["Asse a 170 °C por 15 minutos, virando na metade.", 15]], aviso: "Contém trigo e lactose." });
BT({ id: "bc-torrada-integral", emoji: "🍞", nome: "Torrada integral de forno", intro: "Fatias finas de pão integral bem sequinhas, para a semana.", tempo: 25, rende: "30 torradas", tags: ["Forno"],
  ingredientes: ["1 pão de forma integral fatiado fino", "Azeite e sal (opcional)"], passos: [["Arrume em assadeira e asse a 150 °C por 20 minutos, virando na metade, até ficarem secas.", 20], POTE], aviso: "Contém trigo." });
BT({ id: "bc-croutons", emoji: "🥗", nome: "Croutons de ervas", intro: "Para salada e sopa.", tempo: 10, rende: "1 pote", tags: ["Airfryer", "Aproveitamento"],
  ingredientes: ["200 g de pão amanhecido em cubos", "Azeite, alho em pó, orégano, sal"], passos: [["Misture e leve à airfryer a 180 °C por 7 minutos, sacudindo.", 7], POTE], aviso: "Contém trigo." });
BT({ id: "bc-torrada-doce", emoji: "🍬", nome: "Torrada doce de canela", intro: "Pão de leite amanhecido com manteiga, açúcar e canela.", tempo: 20, rende: "20 torradas", tags: ["Forno"],
  ingredientes: ["Pão de leite ou bisnaguinha amanhecidos em fatias", "40 g de manteiga derretida", "Açúcar e canela"], passos: ["Pincele, polvilhe.", ["Asse a 160 °C por 15 minutos.", 15]], aviso: "Contém trigo e lactose." });
BG({ id: "bc-sg-amanteigado", emoji: "🧈", nome: "Amanteigado sem glúten", intro: "Com farinha de arroz e amido: derrete na boca.", tempo: 35, rende: "30 biscoitos", tags: ["Forno", "Sem glúten"],
  ingredientes: ["150 g de farinha de arroz", "80 g de amido de milho", "100 g de manteiga (ou óleo de coco para sem lactose)", "80 g de açúcar", "1 ovo"], passos: ["Misture tudo até formar massa lisa.", ["Bolinhas achatadas, 180 °C por 15 minutos.", 15]], aviso: "Contém ovo. Sem glúten: confira o rótulo das farinhas." });
BG({ id: "bc-sg-coco", emoji: "🥥", nome: "Biscoito de coco sem glúten", intro: "Coco, ovo e açúcar: crocante por fora.", tempo: 30, rende: "20 biscoitos", tags: ["Forno", "Sem glúten"],
  ingredientes: ["200 g de coco ralado", "2 claras", "80 g de açúcar", "Pitada de sal"], passos: ["Misture tudo, faça montinhos.", ["Asse a 170 °C por 18 minutos, até dourar.", 18]], aviso: "Contém ovo." });
BG({ id: "bc-sg-amendoas", emoji: "🌰", nome: "Biscoito de amêndoas", intro: "Três ingredientes, sem farinha.", tempo: 25, rende: "16 biscoitos", tags: ["Forno", "Sem glúten"],
  ingredientes: ["150 g de farinha de amêndoas", "1 ovo", "50 g de açúcar", "Raspas de limão"], passos: ["Misture, faça bolinhas e achate.", ["Asse a 170 °C por 14 minutos.", 14]], aviso: "Contém amêndoas e ovo." });
BG({ id: "bc-sg-tapioca", emoji: "⚪", nome: "Biscoito de tapioca e queijo", intro: "Crocante, de goma de tapioca.", tempo: 30, rende: "30 biscoitos", tags: ["Forno", "Sem glúten"],
  ingredientes: ["200 g de goma de tapioca", "100 g de queijo parmesão", "1 ovo", "60 g de óleo", "80 g de leite"], passos: ["Misture até formar massa, faça palitinhos.", ["Asse a 200 °C por 20 minutos.", 20]], aviso: "Contém lactose e ovo." });

/* ======================= PÃO DE QUEIJO E SALGADOS DE FORNO (20) ======================= */
col("paodequeijo", "Pão de Queijo e Salgados de Forno que Resolvem", "🧀", "#B07A1A", "20 receitas de pão de queijo (tradicional, de liquidificador, recheado, sem lactose) e salgados assados para congelar.",
  "Pão de queijo cru congela por até 3 meses: asse direto do congelador, 5 minutos a mais. Salgados assados: congelados até 2 meses.");
window.SECOES.paodequeijo = ["Pão de queijo", "Salgados assados", "Para congelar"];
var PQ = mk("paodequeijo", "Pão de queijo"), PS = mk("paodequeijo", "Salgados assados"), PC = mk("paodequeijo", "Para congelar");
PQ({ id: "pdq-tradicional", emoji: "🧀", nome: "Pão de queijo mineiro", intro: "Polvilho escaldado, queijo meia cura: casquinha e miolo puxa-puxa.", tempo: 50, rende: "40 unidades", tags: ["Forno", "Congela bem"],
  ingredientes: ["250 g de polvilho doce", "250 g de polvilho azedo", "250 g de leite", "120 g de óleo", "8 g de sal", "2 ovos", "250 g de queijo meia cura ralado"], passos: ["Ferva o leite, o óleo e o sal e despeje sobre os polvilhos, mexendo (escaldar).", "Espere amornar, junte os ovos um a um e o queijo. Sove até ficar lisa.", ["Bolinhas de 25 g, forno a 200 °C por 25 minutos.", 25]], aviso: "Contém lactose e ovo. Sem glúten (confira o rótulo do polvilho)." });
PQ({ id: "pdq-liquidificador", emoji: "🌀", nome: "Pão de queijo de liquidificador", intro: "Massa líquida em forminha de empada: fácil e rápido.", tempo: 35, rende: "20 unidades", tags: ["Liquidificador", "Forno"],
  ingredientes: ["2 ovos", "200 g de leite", "100 g de óleo", "250 g de polvilho doce", "100 g de queijo ralado", "Sal"], passos: ["Bata tudo.", ["Distribua em forminhas untadas e asse a 200 °C por 25 minutos.", 25]], aviso: "Contém lactose e ovo." });
PQ({ id: "pdq-recheado", emoji: "🥓", nome: "Pão de queijo recheado", intro: "Com goiabada, calabresa ou requeijão no meio.", tempo: 50, rende: "30 unidades", tags: ["Forno", "Festa"],
  ingredientes: ["Massa do pão de queijo mineiro", "Recheios: requeijão de corte, goiabada, calabresa picada"], passos: ["Abra cada bolinha na mão, coloque o recheio e feche.", ["Asse a 200 °C por 25 minutos.", 25]], aviso: "Contém lactose e ovo." });
PQ({ id: "pdq-sem-lactose", emoji: "🌱", nome: "Pão de queijo sem lactose", intro: "Com mandioca cozida e azeite no lugar do queijo: cremoso e sem leite.", tempo: 45, rende: "30 unidades", tags: ["Forno", "Sem lactose"],
  ingredientes: ["300 g de polvilho azedo", "200 g de mandioca cozida amassada", "100 g de azeite", "150 g de água quente", "1 ovo", "Sal e levedura nutricional (opcional)"], passos: ["Escalde o polvilho com a água e o azeite quentes, junte a mandioca, o ovo e o sal.", ["Bolinhas, 200 °C por 25 minutos.", 25]], aviso: "Contém ovo." });
PQ({ id: "pdq-frigideira", emoji: "🍳", nome: "Pão de queijo de frigideira", intro: "Massa de tapioca e queijo que vira disco na frigideira.", tempo: 10, rende: "2 discos", tags: ["Frigideira", "Rápido"],
  ingredientes: ["1 ovo", "60 g de goma de tapioca", "30 g de queijo ralado", "40 g de leite"], passos: ["Misture, espalhe em frigideira untada, tampe e doure 3 minutos de cada lado."], aviso: "Contém lactose e ovo." });
PQ({ id: "pdq-batata-doce", emoji: "🍠", nome: "Pão de queijo de batata-doce", intro: "Laranjinha, macia e com queijo.", tempo: 45, rende: "25 unidades", tags: ["Forno"],
  ingredientes: ["250 g de batata-doce cozida", "200 g de polvilho doce", "100 g de queijo ralado", "30 g de azeite", "Sal"], passos: ["Amasse tudo até virar massa lisa.", ["Bolinhas, 200 °C por 25 minutos.", 25]], aviso: "Contém lactose." });
PQ({ id: "pdq-airfryer", emoji: "🍟", nome: "Pão de queijo de airfryer", intro: "Do congelador para a airfryer em 15 minutos.", tempo: 15, rende: "Quanto couber", tags: ["Airfryer", "Rápido"],
  ingredientes: ["Pão de queijo cru congelado (receita mineira)"], passos: [["Coloque no cesto com espaço entre eles e asse a 180 °C por 15 minutos, sem preaquecer.", 15]], aviso: "Contém lactose e ovo." });
PS({ id: "pdq-esfiha-assada", emoji: "🥙", nome: "Esfirra de carne assada para festa", intro: "Mini esfirras abertas para festa, massa macia.", tempo: 120, rende: "30 mini", tags: ["Forno", "Festa"],
  ingredientes: ["500 g de farinha de trigo", "7 g de fermento", "250 g de leite morno", "60 g de óleo", "8 g de sal", "Recheio: 400 g de carne moída crua temperada com tomate, cebola e limão"], passos: [["Faça a massa e deixe crescer 50 minutos.", 50], "Abra discos pequenos, recheie e aperte as bordas.", ["Asse a 220 °C por 12 minutos.", 12]], aviso: "Contém trigo e lactose." });
PS({ id: "pdq-enroladinho", emoji: "🌭", nome: "Enroladinho de salsicha assado", intro: "O clássico das festas, sem fritura.", tempo: 100, rende: "30 unidades", tags: ["Forno", "Festa"],
  ingredientes: ["Massa de pão salgada (500 g de farinha)", "15 salsichas cortadas ao meio", "1 gema"], passos: [["Deixe a massa crescer 50 minutos.", 50], "Envolva as salsichas com tiras de massa, pincele gema.", ["Asse a 190 °C por 20 minutos.", 20]], aviso: "Contém trigo, lactose e ovo." });
PS({ id: "pdq-empada", emoji: "🥧", nome: "Empada de frango", intro: "Massa podre que derrete e recheio cremoso.", tempo: 80, rende: "20 empadas", tags: ["Forno", "Festa"],
  ingredientes: ["Massa: 400 g de farinha, 200 g de manteiga gelada, 1 ovo, 6 g de sal, 40 g de água gelada", "Recheio: 300 g de frango desfiado cremoso", "1 gema"], passos: ["Esfarele farinha e manteiga, junte ovo, sal e água.", "Forre forminhas, recheie, tampe e pincele.", ["Asse a 190 °C por 30 minutos.", 30]], aviso: "Contém trigo, lactose e ovo." });
PS({ id: "pdq-folhado", emoji: "🥐", nome: "Folhado de queijo e presunto", intro: "Com massa folhada pronta: 20 minutos de forno.", tempo: 35, rende: "12 folhados", tags: ["Forno", "Rápido"],
  ingredientes: ["1 pacote de massa folhada", "150 g de presunto", "150 g de muçarela", "1 gema"], passos: ["Corte quadrados, recheie, feche em triângulo, pincele.", ["Asse a 200 °C por 20 minutos.", 20]], aviso: "Contém trigo, lactose e ovo." });
PS({ id: "pdq-quiche", emoji: "🥚", nome: "Mini quiche de alho-poró", intro: "Massa amanteigada e recheio cremoso de ovos.", tempo: 60, rende: "16 mini", tags: ["Forno", "Festa"],
  ingredientes: ["Massa de empada", "1 alho-poró refogado", "3 ovos", "200 g de creme de leite", "60 g de queijo ralado"], passos: ["Forre forminhas com a massa. Misture ovos, creme, queijo e alho-poró e preencha.", ["Asse a 180 °C por 25 minutos.", 25]], aviso: "Contém trigo, lactose e ovo." });
PS({ id: "pdq-trouxinha", emoji: "🧆", nome: "Trouxinha de frango com requeijão", intro: "Massa de pão macia fechada como trouxinha.", tempo: 110, rende: "20 unidades", tags: ["Forno", "Festa"],
  ingredientes: ["Massa de pão salgada (500 g de farinha)", "300 g de frango desfiado", "120 g de requeijão", "1 gema"], passos: [["Deixe a massa crescer 50 minutos.", 50], "Abra discos, recheie e feche juntando as pontas.", ["Pincele e asse a 190 °C por 20 minutos.", 20]], aviso: "Contém trigo, lactose e ovo." });
PS({ id: "pdq-pastel-forno", emoji: "🥟", nome: "Pastel de forno", intro: "Massa de requeijão que fica crocante no forno.", tempo: 60, rende: "20 pastéis", tags: ["Forno"],
  ingredientes: ["300 g de farinha", "100 g de requeijão", "80 g de manteiga", "1 ovo", "Sal", "Recheio de carne ou queijo"], passos: ["Misture a massa, abra, corte discos, recheie e feche com garfo.", ["Asse a 200 °C por 20 minutos.", 20]], aviso: "Contém trigo, lactose e ovo." });
PC({ id: "pdq-cong-paoqueijo", emoji: "🧊", nome: "Como congelar pão de queijo", intro: "Bolinhas cruas em lote para ter pão de queijo a semana toda.", tempo: 20, rende: "60 unidades", tags: ["Congela bem"],
  ingredientes: ["1 receita dupla de pão de queijo mineiro"], passos: ["Modele, arrume numa assadeira sem encostar e congele por 2 horas.", "Guarde em saco com a data. Asse direto congelado, 5 minutos a mais."], aviso: "Contém lactose e ovo." });
PC({ id: "pdq-cong-coxinha", emoji: "🍗", nome: "Coxinha de forno para congelar", intro: "Massa de batata, recheio de frango, empanada e assada.", tempo: 90, rende: "25 coxinhas", tags: ["Forno", "Congela bem"],
  ingredientes: ["500 g de batata cozida amassada", "250 g de farinha de trigo", "Caldo do frango", "300 g de frango desfiado temperado", "Farinha de rosca e ovo para empanar"], passos: ["Cozinhe a farinha com a batata e o caldo até soltar da panela. Esfrie.", "Modele as coxinhas, empane e congele cruas.", ["Para servir: forno a 200 °C por 25 minutos ou airfryer a 200 °C por 15.", 25]], aviso: "Contém trigo e ovo." });
PC({ id: "pdq-cong-esfiha", emoji: "🥙", nome: "Esfirras para congelar", intro: "Assadas e congeladas: 8 minutos no forno quando quiser.", tempo: 120, rende: "30 mini", tags: ["Congela bem"],
  ingredientes: ["Receita de esfirra de carne assada para festa"], passos: ["Asse, esfrie e congele espalhadas. Guarde em saco.", ["Reaqueça a 180 °C por 8 minutos.", 8]], aviso: "Contém trigo e lactose." });
PC({ id: "pdq-cong-pizzinha", emoji: "🍕", nome: "Pizzinhas de pão de forma", intro: "Pão de forma, molho e queijo: lanche das crianças congelado.", tempo: 20, rende: "20 pizzinhas", tags: ["Congela bem", "Rápido"],
  ingredientes: ["20 fatias de pão de forma", "Molho de tomate", "Muçarela e orégano"], passos: ["Monte e congele cruas.", ["Asse congeladas a 200 °C por 10 minutos.", 10]], aviso: "Contém trigo e lactose." });
PC({ id: "pdq-cong-bolinha", emoji: "⚪", nome: "Bolinha de queijo assada para congelar", intro: "Massa de mandioca com queijo, empanada e assada.", tempo: 60, rende: "30 bolinhas", tags: ["Forno", "Congela bem"],
  ingredientes: ["400 g de mandioca cozida amassada", "150 g de muçarela em cubos", "Farinha de rosca"], passos: ["Envolva cada cubo de queijo com a mandioca, passe na farinha e congele.", ["Asse congeladas a 200 °C por 25 minutos.", 25]], aviso: "Contém lactose e trigo (farinha de rosca)." });
PC({ id: "pdq-cong-pao-alho", emoji: "🧄", nome: "Pão de alho para congelar", intro: "Pão francês com pasta de alho, embrulhado e congelado para o churrasco.", tempo: 15, rende: "10 pães", tags: ["Congela bem", "Churrasco"],
  ingredientes: ["10 pães franceses", "150 g de manteiga", "4 dentes de alho", "100 g de muçarela ralada", "Salsinha"], passos: ["Faça cortes nos pães, recheie com a pasta e embrulhe em papel-alumínio. Congele.", ["Asse congelado na churrasqueira ou forno a 200 °C por 15 minutos.", 15]], aviso: "Contém trigo e lactose." });
})();
