/* ================================================================
   PÃES QUE RESOLVEM — PRÊMIOS DO DESAFIO "SEMANA DO PÃO" (20 receitas)
   Só abrem para quem tem a coleção E completou as semanas do desafio.
   pp1: 1ª semana · pp2: 2ª · pp3: 3ª · pp4: 4ª
   Carregar DEPOIS de paes2.js.
   ================================================================ */
(function () {
var R = window.RECEITAS;
window.SECOES.pao = window.SECOES.pao.concat(["Prêmio · Pães de Chef", "Prêmio · Recheados secretos", "Prêmio · Pães para receber", "Prêmio · Mestre Padeiro"]);
function CR(min, o) { return { t: "Cubra e deixe crescer até " + (o || "dobrar") + ", cerca de " + min + " minutos.", timer: min }; }
function FO(temp, min) { return { t: "Asse em forno preaquecido a " + temp + " °C por " + min + " minutos, até dourar.", timer: min }; }
var MASSA = ["500 g de farinha de trigo", "10 g de fermento biológico seco", "40 g de açúcar", "9 g de sal", "260 g de leite morno", "1 ovo", "60 g de manteiga"];
var SOVA = { t: "Misture a farinha, o fermento e o açúcar, junte o leite e o ovo, depois o sal e a manteiga. Sove 10 minutos até ficar lisa e elástica.", timer: 10 };
function X(sec, premio, id, emoji, nome, intro, tempo, rende, ing, passos, aviso, tags) {
  R.push({ id: id, col: "pao", premium: "pao", premio: premio, sec: sec, emoji: emoji, nome: nome, intro: intro, tempo: tempo, nivel: "Médio", rende: rende, tags: tags || ["Forno", "Prêmio"], ingredientes: ing, passos: passos, aviso: aviso || "Leva farinha de trigo (contém glúten), leite e ovos.", foto: "" });
}
var S = "Prêmio · Pães de Chef";
X(S, "pp1", "pp1-milk-bread", "☁️", "Pão de leite japonês (shokupan)", "O pão de forma mais macio que existe: um mingau de farinha cozido (tangzhong) prende água e deixa o miolo de nuvem.", 200, "1 pão de forma (12 fatias)",
  ["Tangzhong: 25 g de farinha + 125 g de leite", "350 g de farinha de trigo", "7 g de fermento biológico seco", "40 g de açúcar", "6 g de sal", "100 g de leite morno", "1 ovo", "40 g de manteiga"],
  [{ t: "Cozinhe o tangzhong mexendo até virar um creme grosso (65 °C). Esfrie." }, { t: "Junte tudo e sove 12 minutos: a massa fica muito lisa e sedosa.", timer: 12 }, CR(60), { t: "Divida em 3, abra cada parte, enrole e coloque lado a lado na forma." }, CR(50, "passar a borda"), FO(170, 30)]);
X(S, "pp1", "pp1-focaccia-recheada", "🫒", "Focaccia recheada de presunto cru e queijo", "Duas camadas de focaccia com recheio no meio: vira sanduíche de festa.", 240, "1 assadeira (12 pedaços)",
  ["500 g de farinha de trigo", "400 g de água", "5 g de fermento", "10 g de sal", "60 g de azeite", "150 g de presunto cru", "200 g de muçarela", "Rúcula"],
  [{ t: "Faça a massa de focaccia com dobras e deixe crescer 1 hora.", timer: 60 }, { t: "Divida em 2. Abra metade na assadeira com azeite, recheie com o presunto e o queijo e cubra com a outra metade." }, { t: "Faça as covinhas, regue com azeite." }, FO(220, 30), { t: "Abra ao meio na hora de servir e junte a rúcula." }], "Leva farinha de trigo (contém glúten) e lactose.");
X(S, "pp1", "pp1-pao-azeitona-preta", "🫒", "Pão rústico de azeitona preta e alecrim", "Massa de fermentação longa com azeitona preta graúda.", 900, "1 pão grande",
  ["450 g de farinha de trigo", "330 g de água", "2 g de fermento", "9 g de sal", "120 g de azeitona preta", "Alecrim"],
  [{ t: "Misture, faça 4 dobras a cada 30 minutos, juntando azeitona e alecrim na segunda." }, { t: "Modele, leve à geladeira de 12 a 16 horas." }, { t: "Asse em panela tampada a 240 °C por 25 minutos e destampado mais 20.", timer: 45 }], "Leva farinha de trigo (contém glúten).");
X(S, "pp1", "pp1-brioche-chocolate", "🍫", "Brioche de chocolate em trança", "Massa de brioche com cacau e gotas, trançada.", 260, "1 trança",
  ["400 g de farinha de trigo", "20 g de cacau", "8 g de fermento", "70 g de açúcar", "6 g de sal", "4 ovos", "60 g de leite", "130 g de manteiga", "100 g de gotas de chocolate"],
  [{ t: "Faça a massa como brioche (manteiga depois), junte as gotas e leve à geladeira 3 horas.", timer: 180 }, { t: "Faça 3 cordões e trance." }, CR(80), FO(175, 30)]);
X(S, "pp1", "pp1-pao-batata-ervas", "🥔", "Pão de batata recheado de requeijão e ervas", "Pãezinhos de batata com o centro cremoso.", 180, "15 pães",
  ["Massa do pão de batata", "200 g de requeijão de corte em cubos", "Ervas finas", "1 gema"],
  [SOVA, CR(60), { t: "Divida em 15, recheie cada um com requeijão e ervas e feche." }, CR(40), FO(180, 25)]);

S = "Prêmio · Recheados secretos";
X(S, "pp2", "pp2-costela", "🍖", "Pão recheado de costela desfiada", "Costela cozida na pressão, desfiada com cebola caramelizada.", 240, "1 pão grande",
  MASSA.concat(["500 g de costela cozida e desfiada", "2 cebolas caramelizadas", "Muçarela"]), [SOVA, CR(60), { t: "Abra, recheie, enrole e coloque na assadeira." }, CR(40), FO(180, 35)]);
X(S, "pp2", "pp2-frango-cheddar", "🐔", "Pão de frango, cheddar e bacon", "Trança recheada que é sucesso em festa.", 190, "1 trança",
  MASSA.concat(["300 g de frango desfiado", "150 g de cheddar", "100 g de bacon frito"]), [SOVA, CR(60), { t: "Abra, recheie no centro, corte tiras laterais e trance por cima." }, CR(40), FO(180, 30)]);
X(S, "pp2", "pp2-camarao", "🍤", "Pão recheado de camarão com requeijão", "Para ocasião especial: camarão refogado com tomate e requeijão.", 190, "1 pão grande",
  MASSA.concat(["300 g de camarão limpo refogado com alho e tomate", "150 g de requeijão"]), [SOVA, CR(60), { t: "Abra, recheie, enrole." }, CR(40), FO(180, 30)], "Leva farinha de trigo, leite, ovos e camarão (frutos do mar).");
X(S, "pp2", "pp2-pizza-trancada", "🍕", "Pão-pizza trançado de calabresa e catupiry", "Pizza dentro de um pão trançado.", 190, "1 trança",
  MASSA.concat(["Molho de tomate", "200 g de calabresa", "200 g de muçarela", "Requeijão cremoso"]), [SOVA, CR(60), { t: "Abra, espalhe o recheio, enrole, corte ao meio no comprimento e trance." }, CR(40), FO(180, 30)]);
X(S, "pp2", "pp2-doce-leite-coco", "🍮", "Rosca de doce de leite e coco", "Rosca doce com recheio cremoso de doce de leite.", 190, "1 rosca",
  MASSA.concat(["200 g de doce de leite", "60 g de coco ralado"]), [SOVA, CR(60), { t: "Abra, recheie, enrole e una as pontas em coroa. Faça cortes por cima." }, CR(40), FO(180, 30)]);

S = "Prêmio · Pães para receber";
X(S, "pp3", "pp3-coroa", "👑", "Coroa de pãezinhos com queijo brie", "Pãezinhos em círculo ao redor de um queijo brie que derrete no forno.", 170, "1 coroa (16 pãezinhos)",
  MASSA.concat(["1 queijo brie (150 g)", "Mel e nozes para servir"]), [SOVA, CR(60), { t: "Faça 16 bolinhas e arrume em círculo em volta do brie numa assadeira." }, CR(40), FO(180, 25), { t: "Regue o brie com mel e nozes." }], "Leva farinha de trigo, leite, ovos e nozes.");
X(S, "pp3", "pp3-arvore", "🎄", "Pão árvore de pull-apart com ervas", "Bolinhas em forma de árvore, com manteiga de ervas.", 170, "1 árvore",
  MASSA.concat(["Manteiga de ervas e alho"]), [SOVA, CR(60), { t: "Faça 25 bolinhas, passe na manteiga e monte em triângulo de árvore." }, CR(40), FO(180, 25)]);
X(S, "pp3", "pp3-baguete-recheada", "🥖", "Baguete recheada para tábua", "Baguete aberta com pesto, tomate e muçarela de búfala.", 30, "2 baguetes",
  ["2 baguetes", "Pesto", "Tomate-cereja", "Muçarela de búfala"], [{ t: "Corte em leque sem separar, recheie, embrulhe em papel-alumínio." }, FO(200, 15)], "Leva farinha de trigo e leite.", ["Forno", "Para receber"]);
X(S, "pp3", "pp3-pao-cerveja-cheddar", "🍺", "Pão de cerveja e cheddar em panela", "Massa rápida assada em panela, com casca de queijo.", 60, "1 pão",
  ["400 g de farinha", "12 g de fermento químico", "350 g de cerveja", "150 g de cheddar", "40 g de manteiga"], [{ t: "Misture, coloque na panela untada, cubra com queijo e manteiga." }, FO(190, 45)], "Leva farinha de trigo e leite.");
X(S, "pp3", "pp3-mini-hamburguer", "🍔", "Mini hambúrgueres de festa", "Mini brioches e mini hambúrgueres para servir muita gente.", 180, "30 mini",
  MASSA.concat(["600 g de carne moída temperada em 30 discos", "Queijo e picles"]), [SOVA, CR(60), { t: "Faça 30 bolinhas de 30 g, achate." }, CR(30), FO(180, 14), { t: "Grelhe os mini hambúrgueres e monte." }]);

S = "Prêmio · Mestre Padeiro";
X(S, "pp4", "pp4-panetone-salgado", "🧀", "Pão de fermentação natural com queijo", "Levain recheado de queijo canastra em cubos que derretem no forno.", 1440, "1 pão grande",
  ["400 g de farinha de trigo", "50 g de farinha integral", "330 g de água", "90 g de fermento natural ativo", "9 g de sal", "150 g de queijo canastra em cubos"], [{ t: "Faça o levain básico e junte o queijo na segunda dobra." }, { t: "Geladeira 12 a 16 horas, asse em panela tampada a 250 °C por 20 minutos e destampada 25.", timer: 45 }], "Leva farinha de trigo e leite.");
X(S, "pp4", "pp4-croissant-amendoas", "🥐", "Croissant de amêndoas", "Croissant de ontem recheado com creme de amêndoas e assado de novo.", 40, "6 croissants",
  ["6 croissants", "Creme: 100 g de farinha de amêndoas, 80 g de manteiga, 80 g de açúcar, 1 ovo", "Lâminas de amêndoa"], [{ t: "Abra os croissants, recheie e cubra com creme e lâminas." }, FO(180, 18)], "Leva trigo, leite, ovos e amêndoas.");
X(S, "pp4", "pp4-baguete-tradicao", "🥖", "Baguete de tradição com poolish", "A baguete mais saborosa: pré-fermento líquido de 16 horas.", 1200, "3 baguetes",
  ["Poolish: 200 g de farinha, 200 g de água, 0,5 g de fermento", "Massa: 300 g de farinha, 130 g de água, 3 g de fermento, 10 g de sal"], [{ t: "Faça o poolish na véspera (16 horas)." }, { t: "Junte a massa, faça 3 dobras, modele as baguetes e asse com vapor a 245 °C por 22 minutos.", timer: 22 }], "Leva farinha de trigo (contém glúten).");
X(S, "pp4", "pp4-pao-centeio-alemao", "🌑", "Pão alemão de centeio e sementes", "Denso, escuro e cheio de sementes, fatiado bem fino.", 1440, "1 pão de forma",
  ["250 g de farinha de centeio", "150 g de farinha de trigo integral", "100 g de sementes de girassol", "50 g de linhaça", "100 g de fermento natural", "400 g de água", "10 g de sal", "30 g de melado"], [{ t: "Misture tudo (sem sovar) e deixe na forma, coberto, de 12 a 16 horas." }, FO(200, 60), { t: "Espere 24 horas para cortar." }], "Leva centeio e trigo (contém glúten).");
X(S, "pp4", "pp4-brioche-feuillete", "🧈", "Brioche folhado", "Massa de brioche laminada com manteiga: camadas que se abrem em espiral.", 1200, "1 pão de forma",
  ["Massa de brioche (400 g de farinha)", "150 g de manteiga gelada para laminar", "Açúcar"], [{ t: "Lamine a manteiga na massa gelada com 3 dobras simples, 30 minutos de geladeira entre elas." }, { t: "Enrole e coloque na forma." }, CR(120, "crescer bem"), FO(180, 35)]);
})();
