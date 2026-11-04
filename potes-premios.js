/* ================================================================
   SALADAS NO POTE — PRÊMIOS DO DESAFIO DA SEMANA (20 receitas)
   Só abrem para quem tem a coleção E completou as semanas do desafio.
   p1: 1ª semana · p2: 2ª semana · p3: 3ª semana · p4: 4ª semana
   Carregar DEPOIS de potes3.js.
   ================================================================ */
(function () {
var L = window.POTES_LIB, C = L.C;
window.SECOES.potes = window.SECOES.potes.concat(["Prêmio · Saladas de Chef", "Prêmio · Molhos secretos", "Prêmio · Saladas para receber", "Prêmio · Mestre do Pote"]);
function S(sec, premio, rows) { rows.forEach(function (x) { L.salada({ id: x[0], sec: sec, emoji: x[1], nome: x[2], c: x[3], m: x[4], intro: x[5], dica: x[6], premio: premio }); }); }

S("Prêmio · Saladas de Chef", "p1", [
  ["pr1-salmao-citrico", "🍣", "Salmão cítrico com quinoa e romã", ["pepino", "rabanete", "quinoa", "salmao", "laranja", "romaa", "erva", "rucula"], "mel", "Salmão, laranja e romã: a salada mais bonita da coleção. Até 2 dias."],
  ["pr1-carne-chimi", "🥩", "Carne com chimichurri e batata-doce", ["batatadoce", "cebola", "carne", "salsa", "rucula", "abobora_s"], "chimi", "Carne grelhada, batata-doce assada e chimichurri. Almoço de domingo no meio da semana."],
  ["pr1-figo-quinoa", "🟣", "Quinoa, figo e queijo de cabra", ["quinoa", "figo", "feta", "endivia", "rucula", "pistache"], "balsamico", "Figo fresco, quinoa e pistache. Use feta se não achar queijo de cabra."],
  ["pr1-camarao-thai", "🍤", "Camarão thai com manga", ["repolho", "cenouraP", "sobaS", "camarao", "manga", "coentro", "hortela", "amendoim"], "amendoimM", "Macarrão de arroz, camarão e manga com molho de amendoim. Até 2 dias."],
  ["pr1-frango-romesco", "🌶️", "Frango com molho de pimentão assado", ["abobrinha", "graobico", "frango", "salsa", "rucula", "amendoas"], "romesco", "Frango, grão-de-bico e o romesco espanhol de pimentão e amêndoas."]
]);

S("Prêmio · Saladas para receber", "p3", [
  ["pr3-caprese-colorida", "🍅", "Caprese colorida de travessa", ["tomatinhoM", "muçarela", "manjericao", "rucula", "pistache"], "pesto", "Monte em pote grande ou travessa: a salada que todo mundo pede a receita."],
  ["pr3-mediterranea-festa", "🫒", "Mediterrânea de festa", ["pepino", "tomatinho", "pimentao", "cebola", "graobico", "feta", "azeitona", "hortela", "alfaceR"], "ervas", "Grão-de-bico, feta e azeitona para servir muita gente."],
  ["pr3-arroz-festa", "🍚", "Arroz negro de festa", ["cenouraP", "pimentaoA", "arrozN", "damasco", "salsa", "espinafre", "castanha"], "laranjaM", "Arroz negro, damasco e castanha: bonita na mesa de domingo."],
  ["pr3-melancia", "🍉", "Melancia, pepino e hortelã", ["pepino", "melancia", "feta", "hortela", "rucula"], "limao", "Para churrasco e dias quentes. Monte no dia."],
  ["pr3-maionese-verde", "🥔", "Batata com molho verde", ["batata", "vagem", "ervilha", "ovo1", "salsa", "cebolaC"], "ranch", "A salada de batata das festas, com iogurte e muito cheiro-verde."]
]);

S("Prêmio · Mestre do Pote", "p4", [
  ["pr4-poke-completo", "🏆", "Poke completo do Mestre", ["pepino", "cenouraP", "edamame", "arroz", "salmao", "manga", "gergelim", "alface"], "shoyu", "O poke mais completo da coleção. Até 2 dias."],
  ["pr4-buddha-mestre", "🧘", "Buddha bowl do Mestre", ["batatadoce", "repolho", "brocolis", "quinoa", "grao_tost", "espinafre", "abobora_s"], "tahine", "Seis componentes, todos preparados no Domingo do Pote."],
  ["pr4-cobb-mestre", "🥗", "Cobb do Mestre", ["tomatinho", "milho", "frango", "ovo1", "gorgonzola", "alfaceR", "nozes"], "mostardaA", "A cobb em fileiras, com frango, ovo, gorgonzola e nozes."],
  ["pr4-mexicana-mestre", "🌮", "Mexicana completa", ["pimentao", "milho", "cebola", "arroz", "feijaoP", "frangoE", "coentro", "alfaceR", "chips"], "abacateM", "Arroz, feijão, frango temperado e chips, com molho verde."],
  ["pr4-grega-mestre", "🫒", "Grega com cordeiro de frango", ["pepino", "tomatinho", "cebola", "cuscuz", "frangoE", "feta", "azeitona", "hortela", "rucula"], "iogurte", "Cuscuz, frango com especiarias, feta e molho de iogurte."]
]);

/* p2 · molhos secretos (receitas simples) */
function MOL(id, emoji, nome, intro, ingr, passos, dias, aviso) {
  L.simples({ id: id, sec: "Prêmio · Molhos secretos", premio: "p2", emoji: emoji, nome: nome, intro: intro, tempo: 8, rende: "6 porções",
    tags: ["Molho", "Dura " + dias + " dias"], ingredientes: ingr,
    passos: passos.map(function (t) { return { t: t }; }).concat([{ t: "Divida em potinhos de 50 ml. Geladeira por até " + dias + " dias." }]), aviso: aviso || "" });
}
MOL("ms-green", "💚", "Molho verde cremoso de ervas", "Verde, cremoso e cheio de ervas: transforma qualquer pote.",
  ["1 xícara de salsinha, cebolinha e manjericão", "170 g de iogurte natural", "1/2 abacate pequeno", "Suco de 1 limão", "1 dente de alho", "Sal"],
  ["Bata tudo no liquidificador até ficar liso e verde."], 2, "Contém lactose. Por causa do abacate, dura 2 dias.");
MOL("ms-missô-laranja", "🍊", "Missô com laranja", "Salgado, cítrico e profundo.",
  ["1 colher de sopa de missô", "100 ml de suco de laranja", "2 colheres de sopa de óleo de gergelim", "1 colher de sopa de vinagre de arroz", "1 colher de chá de gengibre"],
  ["Dissolva o missô no suco e misture o resto."], 5, "Leva soja e gergelim.");
MOL("ms-chipotle", "🔥", "Iogurte defumado com páprica", "Defumado e levemente picante.",
  ["170 g de iogurte natural", "1 colher de chá de páprica defumada", "1 pitada de pimenta caiena", "Suco de 1/2 limão", "Sal"],
  ["Misture tudo."], 3, "Contém lactose.");
MOL("ms-castanha", "🌰", "Creme de castanha e limão", "Cremoso e vegano, lembra um molho de queijo.",
  ["1/2 xícara de castanha-de-caju demolhada por 4 horas", "Suco de 1 limão", "100 ml de água", "1/2 dente de alho", "Sal"],
  ["Escorra a castanha e bata tudo no liquidificador por 2 minutos, até ficar liso."], 5, "Leva castanhas.");
MOL("ms-gengibre", "🫚", "Gengibre e cenoura (de restaurante japonês)", "O molho laranja dos restaurantes japoneses.",
  ["1 cenoura picada", "1 colher de sopa de gengibre", "2 colheres de sopa de vinagre de arroz", "1 colher de sopa de shoyu", "3 colheres de sopa de óleo", "1 colher de chá de mel"],
  ["Bata tudo no liquidificador até ficar uma pasta lisa."], 5, "Leva soja.");
})();
