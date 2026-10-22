/* ================================================================
   CEIA RESOLVIDA — Natal e Ano Novo sem açúcar adicionado, sem glúten e sem lactose
   Produto próprio Cozinha que Resolve. Coleções:
     ceia      -> produto principal (24 receitas + 6 bônus "Dia Seguinte")
     festival  -> order bump "Festival de Panetones" (8 sabores)
     presentes -> upsell "Kit Presente Resolvido" (10; as 5 primeiras = versão R$9,90)
   premium: "ceia" | "festival" | "presentes" | "presentes5"  (sem premium = grátis)
   Adoçante: xilitol ou eritritol (substituem o açúcar 1 para 1). Sem mel, sem açúcar
   de coco e sem frutas cristalizadas, que têm açúcar.
   ================================================================ */
(function () {
var ADO = "xilitol ou eritritol (adoçante culinário que substitui o açúcar 1 para 1)";

window.COLECOES.push(
  { id: "ceia", nome: "Ceia Resolvida", emoji: "🎄", cor: "#B3261E", capa: "img/ceia/capa-ceia.webp", produto: "ceia",
    desc: "Natal e Ano Novo completos, sem açúcar adicionado, sem glúten e sem lactose: panetones, ceia salgada, sobremesas, presentes, Ano Novo e o Dia Seguinte." },
  { id: "festival", nome: "Festival de Panetones", emoji: "🎁", cor: "#8A5A2B", capa: "img/ceia/capa-festival.webp", produto: "festival",
    desc: "8 sabores de panetone sem açúcar adicionado, sem glúten e sem lactose, mais o guia de embalagem para presente." },
  { id: "presentes", nome: "Kit Presente Resolvido", emoji: "🎀", cor: "#C2185B", capa: "img/ceia/capa-presentes.webp", produto: "presentes",
    desc: "10 lembrancinhas de cozinha para presentear no Natal, com etiquetas para imprimir e guia de embalagem." }
);

/* Ordem das seções dentro da coleção da Ceia */
window.SECOES = {
  ceia: ["Panetones", "Ceia salgada", "Sobremesas", "Para presentear", "Ano Novo", "Bônus: Dia Seguinte"],
  festival: ["Festival de Panetones"],
  presentes: ["Kit Presente"]
};

var R = [
/* ============================ PANETONES ============================ */
{
  id: "panetone-classico", col: "ceia", sec: "Panetones", premium: "ceia", foto: "img/ceia/panetone.webp",
  nome: "Panetone clássico de frutas", emoji: "🎄", tags: ["Forno", "Fermentação"], tempo: 180, rende: "1 panetone de 500 g", nivel: "Médio",
  intro: "O panetone da ceia, com raspas de laranja, essência de panetone e frutas secas sem açúcar. Massa macia, cheirosa e que corta em fatias.",
  ingredientes: [
    "1 colher de sopa de psyllium (8 g)",
    "1/2 xícara de água morna (120 ml)",
    "3 ovos em temperatura ambiente",
    "1/2 xícara de leite vegetal sem açúcar, morno (120 ml)",
    "1/3 de xícara de óleo de coco derretido ou óleo neutro (80 ml)",
    "1/2 xícara de " + ADO,
    "1 colher de sopa de essência de panetone",
    "Raspas de 1 laranja",
    "1 e 1/2 xícara de farinha de arroz (210 g)",
    "1/2 xícara de fécula de batata (75 g)",
    "1/4 de xícara de polvilho doce (35 g)",
    "1 sachê de fermento biológico seco (10 g)",
    "1/2 colher de chá de sal",
    "1 xícara de frutas secas sem açúcar picadas: uva-passa, damasco e ameixa (150 g)",
    "1 colher de sopa de farinha de arroz para envolver as frutas"
  ],
  passos: [
    { t: "Misture o psyllium com a água morna e espere virar um gel firme.", timer: 5 },
    { t: "Na batedeira, bata os ovos, o leite vegetal morno, o óleo, o adoçante, a essência e as raspas de laranja até espumar, uns 2 minutos." },
    { t: "Junte o gel de psyllium e bata mais 1 minuto." },
    { t: "Em outra tigela, misture a farinha de arroz, a fécula, o polvilho, o fermento e o sal. Acrescente à batedeira aos poucos e bata em velocidade média por 5 minutos. A massa fica grossa e pegajosa, como um bolo bem encorpado. Ela é assim mesmo: não acrescente farinha." },
    { t: "Envolva as frutas secas na colher de farinha de arroz (assim elas não afundam) e misture à massa com uma espátula." },
    { t: "Coloque na forma de panetone de 500 g, preenchendo até a metade. Alise o topo com a espátula molhada." },
    { t: "Cubra e deixe crescer em lugar morno até a massa chegar perto da borda da forma.", timer: 75 },
    { t: "Asse em forno preaquecido a 170 °C. Se o topo dourar rápido, cubra com papel-alumínio na metade do tempo. Está pronto quando o palito sair seco.", timer: 45 },
    { t: "Deixe esfriar completamente antes de cortar. Morno, o miolo ainda está terminando de firmar.", timer: 60 }
  ],
  dica: "O segredo é a massa crescer em lugar morno: dentro do forno desligado com a luz acesa funciona muito bem. Embrulhado em plástico filme, dura 4 dias fora da geladeira."
},
{
  id: "chocotone", col: "ceia", sec: "Panetones", premium: "ceia", foto: "img/ceia/chocotone.webp",
  nome: "Chocotone", emoji: "🍫", tags: ["Forno", "Fermentação"], tempo: 180, rende: "1 chocotone de 500 g", nivel: "Médio",
  intro: "Massa de chocolate com gotas de chocolate zero açúcar. É o que some primeiro da mesa.",
  ingredientes: [
    "1 colher de sopa de psyllium (8 g)",
    "1/2 xícara de água morna (120 ml)",
    "3 ovos em temperatura ambiente",
    "1/2 xícara de leite vegetal sem açúcar, morno (120 ml)",
    "1/3 de xícara de óleo de coco derretido (80 ml)",
    "2/3 de xícara de " + ADO,
    "1 colher de chá de essência de baunilha",
    "1 e 1/4 xícara de farinha de arroz (175 g)",
    "1/2 xícara de fécula de batata (75 g)",
    "1/4 de xícara de cacau em pó 100% (25 g)",
    "1 sachê de fermento biológico seco (10 g)",
    "1/2 colher de chá de sal",
    "100 g de chocolate zero açúcar e sem lactose picado (ou gotas)"
  ],
  passos: [
    { t: "Misture o psyllium com a água morna e espere formar o gel.", timer: 5 },
    { t: "Bata os ovos, o leite vegetal, o óleo, o adoçante e a baunilha até espumar. Junte o gel de psyllium e bata mais 1 minuto." },
    { t: "Misture os secos (farinha de arroz, fécula, cacau, fermento e sal) e acrescente aos poucos. Bata por 5 minutos em velocidade média." },
    { t: "Misture metade do chocolate picado à massa com uma espátula. Guarde a outra metade para o topo." },
    { t: "Coloque na forma de panetone até a metade, espalhe o restante do chocolate por cima e cubra." },
    { t: "Deixe crescer em lugar morno até chegar perto da borda.", timer: 75 },
    { t: "Asse a 170 °C até o palito sair sem massa crua (pode sair com chocolate derretido, isso é normal).", timer: 45 },
    { t: "Espere esfriar completamente antes de cortar.", timer: 60 }
  ],
  dica: "Leia o rótulo do chocolate: precisa estar escrito zero açúcar e sem lactose (ou sem leite). Muitos chocolates amargos têm açúcar."
},
{
  id: "panetone-liquidificador", col: "ceia", sec: "Panetones", premium: "ceia", foto: "img/ceia/panetone-liquidificador.webp",
  nome: "Panetone de liquidificador (o mais fácil)", emoji: "⚡", tags: ["Liquidificador", "Forno", "Sem batedeira"], tempo: 120, rende: "1 forma de bolo inglês ou 1 panetone de 500 g", nivel: "Fácil",
  intro: "Para quem nunca fez panetone: tudo no liquidificador, sem batedeira e sem sovar.",
  ingredientes: [
    "3 ovos",
    "3/4 de xícara de leite vegetal sem açúcar, morno (180 ml)",
    "1/3 de xícara de óleo (80 ml)",
    "1/2 xícara de " + ADO,
    "1 colher de sopa de essência de panetone",
    "Raspas de 1 laranja",
    "1 e 1/2 xícara de farinha de arroz (210 g)",
    "1/2 xícara de polvilho doce (70 g)",
    "1 colher de sopa de psyllium (8 g)",
    "1 sachê de fermento biológico seco (10 g)",
    "1 pitada de sal",
    "3/4 de xícara de frutas secas sem açúcar picadas (uva-passa e damasco)"
  ],
  passos: [
    { t: "Bata no liquidificador os ovos, o leite morno, o óleo, o adoçante, a essência e as raspas por 1 minuto." },
    { t: "Junte a farinha de arroz, o polvilho, o psyllium e o sal e bata até ficar liso. Se o liquidificador pesar, desligue e mexa com uma colher." },
    { t: "Acrescente o fermento e bata só alguns segundos." },
    { t: "Passe para uma tigela, misture as frutas secas e coloque na forma untada, até a metade." },
    { t: "Cubra e deixe crescer até quase dobrar.", timer: 45 },
    { t: "Asse a 180 °C até dourar e o palito sair seco.", timer: 40 },
    { t: "Deixe esfriar antes de desenformar e cortar.", timer: 40 }
  ],
  dica: "Se preferir sem frutas, troque por 1/2 xícara de chocolate zero açúcar picado e vira um chocotone fácil."
},
{
  id: "mini-panetone-airfryer", col: "ceia", sec: "Panetones", premium: "ceia", foto: "img/ceia/mini-panetone.webp",
  nome: "Mini panetones de airfryer", emoji: "🧁", tags: ["Airfryer", "Individual"], tempo: 90, rende: "6 mini panetones", nivel: "Fácil",
  intro: "Em forminhas de papel ou de silicone, prontos em 15 minutos de airfryer. Ótimos para presentear e para quem não tem forno.",
  ingredientes: [
    "2 ovos",
    "1/2 xícara de leite vegetal sem açúcar, morno (120 ml)",
    "1/4 de xícara de óleo (60 ml)",
    "1/3 de xícara de " + ADO,
    "1 colher de chá de essência de panetone",
    "Raspas de 1/2 laranja",
    "1 xícara de farinha de arroz (140 g)",
    "1/4 de xícara de polvilho doce (35 g)",
    "2 colheres de chá de psyllium (5 g)",
    "1/2 sachê de fermento biológico seco (5 g)",
    "1 pitada de sal",
    "1/2 xícara de uva-passa ou chocolate zero açúcar picado"
  ],
  passos: [
    { t: "Misture os líquidos com o adoçante, a essência e as raspas. Junte a farinha, o polvilho, o psyllium, o sal e o fermento e mexa bem até ficar uma massa grossa e lisa." },
    { t: "Misture a uva-passa ou o chocolate." },
    { t: "Divida em 6 forminhas de mini panetone (ou de muffin), até a metade de cada uma. Cubra e deixe crescer.", timer: 40 },
    { t: "Asse na airfryer preaquecida a 160 °C, em levas, até o palito sair seco.", timer: 15 },
    { t: "Espere esfriar nas forminhas." , timer: 20 }
  ],
  dica: "Airfryers variam bastante. Na primeira leva, confira com o palito aos 12 minutos."
},
{
  id: "panetone-trufado", col: "ceia", sec: "Panetones", premium: "ceia", foto: "img/ceia/panetone-trufado.webp",
  nome: "Panetone trufado de colher", emoji: "🍯", tags: ["Recheado", "Sem forno extra"], tempo: 40, rende: "1 panetone recheado", nivel: "Fácil",
  intro: "Pegue o panetone clássico ou o chocotone já assado e transforme em sobremesa: recheio cremoso de chocolate por dentro e cobertura por cima.",
  ingredientes: [
    "1 panetone clássico ou chocotone já assado e frio (receitas desta coleção)",
    "200 g de chocolate zero açúcar e sem lactose",
    "1 caixinha de creme de leite sem lactose (200 g)",
    "2 colheres de sopa de " + ADO + " (opcional, se o chocolate for muito amargo)",
    "Para a cobertura: 100 g de chocolate zero açúcar e sem lactose derretido"
  ],
  passos: [
    { t: "Derreta o chocolate em banho-maria ou no micro-ondas, de 30 em 30 segundos, mexendo entre eles." },
    { t: "Misture o creme de leite sem lactose (e o adoçante, se usar) até ficar um creme liso e brilhante. Leve à geladeira para firmar um pouco.", timer: 20 },
    { t: "Corte um círculo na base do panetone e retire o miolo com cuidado, deixando 2 cm de parede." },
    { t: "Recheie com a trufa, volte com a base cortada e vire o panetone." },
    { t: "Cubra com o chocolate derretido e leve à geladeira até firmar.", timer: 20 }
  ],
  dica: "O miolo que sobra vira o pavê de panetone do bônus Dia Seguinte. Nada se perde."
},

/* ============================ CEIA SALGADA ============================ */
{
  id: "frango-assado-natal", col: "ceia", sec: "Ceia salgada", premium: "ceia", foto: "img/ceia/frango-assado.webp",
  nome: "Frango inteiro assado com ervas e laranja", emoji: "🍗", tags: ["Forno", "Prato principal"], tempo: 150, rende: "6 a 8 porções", nivel: "Fácil",
  intro: "O prato principal que não falha: marinada de alho, laranja e ervas, pele dourada e carne suculenta. Mais barato que chester e peru.",
  ingredientes: [
    "1 frango inteiro de cerca de 2 kg",
    "Suco de 2 laranjas",
    "6 dentes de alho amassados",
    "2 colheres de chá de sal",
    "1 colher de chá de páprica defumada",
    "Folhas de 3 ramos de alecrim e 3 de tomilho",
    "3 colheres de sopa de azeite",
    "1 laranja cortada em gomos para o interior",
    "4 batatas médias em pedaços (opcional, para assar junto)"
  ],
  passos: [
    { t: "Misture o suco de laranja, o alho, o sal, a páprica, as ervas e o azeite." },
    { t: "Seque bem o frango com papel-toalha, espalhe a marinada por fora e por dentro (inclusive por baixo da pele do peito) e coloque os gomos de laranja na cavidade." },
    { t: "Cubra e deixe marinar na geladeira. O ideal é de um dia para o outro; o mínimo, 2 horas.", timer: 120 },
    { t: "Coloque numa assadeira com as batatas em volta, regue com um pouco da marinada e cubra com papel-alumínio (lado brilhante para dentro)." },
    { t: "Asse a 200 °C coberto.", timer: 60 },
    { t: "Retire o papel, regue com o caldo da assadeira e volte ao forno até dourar. Está pronto quando, ao furar a coxa, o caldo sair transparente.", timer: 30 },
    { t: "Descanse 10 minutos antes de cortar, para o caldo voltar para a carne.", timer: 10 }
  ],
  dica: "Para lombo suíno, use a mesma marinada e asse 50 minutos coberto e 20 descoberto (para 1,5 kg)."
},
{
  id: "farofa-natalina", col: "ceia", sec: "Ceia salgada", foto: "img/ceia/farofa.webp",
  nome: "Farofa natalina", emoji: "🥜", tags: ["Panela", "Grátis no app"], tempo: 25, rende: "8 porções", nivel: "Fácil",
  intro: "Farofa úmida e colorida, com castanhas e frutas secas. Farinha de mandioca não tem glúten: aqui é só caprichar no tempero.",
  ingredientes: [
    "3 colheres de sopa de azeite ou óleo de coco",
    "1 cebola picada",
    "3 dentes de alho picados",
    "1 cenoura ralada",
    "1/2 xícara de castanha-do-pará ou de caju picada",
    "1/2 xícara de uva-passa ou damasco picado (sem açúcar)",
    "2 xícaras de farinha de mandioca torrada",
    "1/2 xícara de cheiro-verde picado",
    "Sal e pimenta-do-reino a gosto",
    "Opcional: 100 g de bacon em cubos"
  ],
  passos: [
    { t: "Se usar bacon, frite primeiro até dourar e use a gordura no lugar de parte do azeite." },
    { t: "Refogue a cebola no azeite até ficar transparente, junte o alho e mexa 1 minuto." },
    { t: "Acrescente a cenoura e as castanhas e refogue por 3 minutos." },
    { t: "Junte as frutas secas e a farinha de mandioca aos poucos, mexendo sempre, até ficar soltinha e levemente úmida.", timer: 5 },
    { t: "Acerte o sal e a pimenta e finalize com o cheiro-verde." }
  ],
  dica: "Confira se a farinha de mandioca é só mandioca. As misturas prontas de farofa podem ter trigo ou leite."
},
{
  id: "arroz-natalino", col: "ceia", sec: "Ceia salgada", premium: "ceia", foto: "img/ceia/arroz-natalino.webp",
  nome: "Arroz natalino", emoji: "🍚", tags: ["Panela", "Acompanhamento"], tempo: 35, rende: "8 porções", nivel: "Fácil",
  intro: "Arroz soltinho com cenoura, ervilha, castanhas e um toque de açafrão. Fica bonito e combina com qualquer assado.",
  ingredientes: [
    "2 xícaras de arroz",
    "2 colheres de sopa de azeite",
    "1 cebola picada",
    "2 dentes de alho",
    "1 colher de chá de cúrcuma (açafrão-da-terra)",
    "4 xícaras de água fervente",
    "1 e 1/2 colher de chá de sal",
    "1 cenoura em cubinhos",
    "1 xícara de ervilha",
    "1/2 xícara de castanha de caju",
    "1/2 xícara de uva-passa sem açúcar (opcional)",
    "Salsinha picada"
  ],
  passos: [
    { t: "Refogue a cebola e o alho no azeite, junte o arroz e a cúrcuma e mexa por 2 minutos." },
    { t: "Acrescente a água fervente, o sal e a cenoura. Tampe parcialmente e cozinhe em fogo baixo.", timer: 12 },
    { t: "Junte a ervilha, tampe e cozinhe até a água secar.", timer: 5 },
    { t: "Desligue, deixe abafado e solte com um garfo. Misture as castanhas, a uva-passa e a salsinha.", timer: 5 }
  ],
  dica: "Use caldo caseiro no lugar da água para ficar mais saboroso. Caldos em cubo costumam ter glúten ou leite: leia o rótulo."
},
{
  id: "salpicao", col: "ceia", sec: "Ceia salgada", premium: "ceia", foto: "img/ceia/salpicao.webp",
  nome: "Salpicão com maionese caseira sem lactose", emoji: "🥗", tags: ["Sem fogo", "Geladeira"], tempo: 40, rende: "8 porções", nivel: "Fácil",
  intro: "O salpicão de sempre, com maionese de liquidificador (que já não leva leite) e batata palha opcional sem glúten.",
  ingredientes: [
    "500 g de peito de frango cozido e desfiado",
    "1 cenoura ralada",
    "1 maçã verde em cubinhos",
    "1/2 xícara de milho",
    "1/2 xícara de uva-passa sem açúcar",
    "1/2 xícara de salsão picado (opcional)",
    "Para a maionese: 2 ovos, 1 xícara de óleo, 1 colher de sopa de suco de limão, 1 colher de chá de mostarda, sal",
    "Batata palha sem glúten a gosto (opcional)"
  ],
  passos: [
    { t: "Maionese: bata os ovos, o limão, a mostarda e o sal no liquidificador. Com ele ligado, junte o óleo em fio até ficar cremosa." },
    { t: "Misture o frango, a cenoura, a maçã, o milho, a uva-passa e o salsão." },
    { t: "Junte a maionese aos poucos até ficar do jeito que você gosta e acerte o sal." },
    { t: "Leve à geladeira coberto até a hora de servir.", timer: 60 },
    { t: "Coloque a batata palha só na hora de servir, para ficar crocante." }
  ],
  dica: "Maionese caseira leva ovo cru: prepare no mesmo dia e mantenha na geladeira. Se preferir, use maionese pronta, conferindo no rótulo que não tem leite."
},
{
  id: "salada-natalina", col: "ceia", sec: "Ceia salgada", premium: "ceia", foto: "img/ceia/salada-natalina.webp",
  nome: "Salada natalina de folhas, manga e castanhas", emoji: "🥬", tags: ["Sem fogo", "Rápida"], tempo: 15, rende: "8 porções", nivel: "Fácil",
  intro: "Verde, vermelha e crocante: deixa a mesa mais leve e bonita. O molho de mostarda e laranja amarra tudo.",
  ingredientes: [
    "1 pé de alface americana ou mix de folhas",
    "1 maço de rúcula",
    "1 manga em cubos",
    "1 xícara de tomate-cereja cortado ao meio",
    "1/2 xícara de castanhas ou nozes",
    "Sementes de 1/2 romã (opcional)",
    "Molho: 4 colheres de sopa de azeite, suco de 1 laranja, 1 colher de chá de mostarda, sal e pimenta"
  ],
  passos: [
    { t: "Lave e seque muito bem as folhas e rasgue com as mãos." },
    { t: "Monte numa travessa com a manga, o tomate, as castanhas e a romã." },
    { t: "Bata os ingredientes do molho num pote fechado e regue só na hora de servir." }
  ],
  dica: "Folha seca é folha crocante: centrífuga de salada ou um pano limpo resolvem."
},
{
  id: "pao-de-alho", col: "ceia", sec: "Ceia salgada", premium: "ceia", foto: "img/ceia/pao-de-alho.webp",
  nome: "Pão de alho sem glúten", emoji: "🧄", tags: ["Forno", "Airfryer", "Entrada"], tempo: 45, rende: "12 unidades", nivel: "Fácil",
  intro: "Pãezinhos de polvilho com pasta de alho e ervas, para a entrada ou para acompanhar o assado.",
  ingredientes: [
    "2 xícaras de polvilho doce",
    "1/2 xícara de água",
    "1/2 xícara de leite vegetal sem açúcar",
    "1/4 de xícara de óleo",
    "1 colher de chá de sal",
    "1 ovo",
    "Pasta: 4 dentes de alho amassados, 3 colheres de sopa de azeite, salsinha e orégano"
  ],
  passos: [
    { t: "Ferva a água, o leite, o óleo e o sal e escalde o polvilho, mexendo bem. Espere amornar.", timer: 10 },
    { t: "Junte o ovo e sove até a massa ficar lisa e desgrudar das mãos untadas." },
    { t: "Faça bolinhas, abra cada uma levemente e coloque na assadeira untada." },
    { t: "Misture os ingredientes da pasta e espalhe por cima." },
    { t: "Asse a 200 °C até crescer e dourar (ou 180 °C na airfryer por 15 minutos).", timer: 25 }
  ],
  dica: "Dá para congelar cru: asse direto do congelador, com 5 minutos a mais."
},

/* ============================ SOBREMESAS ============================ */
{
  id: "rabanada-airfryer", col: "ceia", sec: "Sobremesas", foto: "img/ceia/rabanada.webp",
  nome: "Rabanada de airfryer", emoji: "🍞", tags: ["Airfryer", "Sem fritura", "Grátis no app"], tempo: 25, rende: "8 fatias", nivel: "Fácil",
  intro: "Douradinha por fora e cremosa por dentro, sem fritar e sem açúcar adicionado. Use pão sem glúten ou o panetone que sobrou.",
  ingredientes: [
    "8 fatias grossas de pão sem glúten amanhecido (ou panetone desta coleção)",
    "1 xícara de leite vegetal sem açúcar",
    "2 ovos",
    "2 colheres de sopa de " + ADO,
    "1 colher de chá de essência de baunilha",
    "Para polvilhar: 2 colheres de sopa de adoçante + 1 colher de chá de canela em pó",
    "Óleo em spray ou um pincel com óleo"
  ],
  passos: [
    { t: "Misture o leite vegetal, o adoçante e a baunilha num prato fundo. Em outro, bata os ovos." },
    { t: "Passe cada fatia rapidamente no leite (sem encharcar) e depois no ovo." },
    { t: "Coloque no cesto da airfryer forrado com papel próprio, pincele um pouco de óleo e asse a 180 °C. Vire na metade do tempo.", timer: 12 },
    { t: "Ainda quente, passe na mistura de adoçante e canela." }
  ],
  dica: "Pão amanhecido é o segredo: pão fresco desmancha no leite."
},
{
  id: "pave", col: "ceia", sec: "Sobremesas", premium: "ceia", foto: "img/ceia/pave.webp",
  nome: "Pavê de chocolate", emoji: "🍮", tags: ["Geladeira", "Sem forno"], tempo: 40, rende: "1 travessa média (10 porções)", nivel: "Fácil",
  intro: "Camadas de creme de baunilha, creme de chocolate e biscoito sem glúten. É pavê ou pa comer? Os dois.",
  ingredientes: [
    "1 litro de leite vegetal sem açúcar",
    "4 gemas",
    "5 colheres de sopa de amido de milho",
    "2/3 de xícara de " + ADO,
    "1 colher de chá de essência de baunilha",
    "3 colheres de sopa de cacau em pó 100%",
    "1 caixinha de creme de leite sem lactose (200 g)",
    "200 g de biscoito sem glúten e sem açúcar (tipo maisena) ou os biscoitos natalinos desta coleção",
    "1/2 xícara de leite vegetal para umedecer os biscoitos"
  ],
  passos: [
    { t: "Numa panela, dissolva o amido no leite frio. Junte as gemas e o adoçante e leve ao fogo médio, mexendo sempre, até engrossar.", timer: 10 },
    { t: "Desligue, junte a baunilha e o creme de leite. Divida o creme em duas partes e misture o cacau em uma delas." },
    { t: "Monte na travessa: creme branco, biscoitos umedecidos no leite, creme de chocolate, biscoitos e termine com creme." },
    { t: "Cubra e leve à geladeira até firmar.", timer: 240 }
  ],
  dica: "Cubra o creme com filme encostando na superfície enquanto esfria: assim não forma película."
},
{
  id: "pudim-coco", col: "ceia", sec: "Sobremesas", premium: "ceia", foto: "img/ceia/pudim.webp",
  nome: "Pudim de leite de coco", emoji: "🥥", tags: ["Forno", "Banho-maria"], tempo: 90, rende: "1 forma média", nivel: "Médio",
  intro: "Liso, firme e com calda dourada sem açúcar. Ninguém sente falta do leite condensado.",
  ingredientes: [
    "Calda: 1/2 xícara de xilitol e 1/4 de xícara de água",
    "400 ml de leite de coco",
    "1 xícara de leite vegetal sem açúcar",
    "4 ovos",
    "1/2 xícara de " + ADO,
    "1 colher de sopa de amido de milho",
    "1 colher de chá de essência de baunilha"
  ],
  passos: [
    { t: "Calda: leve o xilitol com a água ao fogo até dourar levemente e espalhe na forma de pudim. (O eritritol não carameliza bem; para a calda, prefira xilitol.)" },
    { t: "Bata no liquidificador todos os outros ingredientes por 2 minutos." },
    { t: "Despeje na forma, cubra com papel-alumínio e asse em banho-maria a 180 °C até firmar (balança levemente no centro).", timer: 60 },
    { t: "Espere esfriar e leve à geladeira antes de desenformar.", timer: 240 }
  ],
  dica: "Xilitol é tóxico para cães. Se tiver pet em casa, guarde bem a sobremesa."
},
{
  id: "torta-limao", col: "ceia", sec: "Sobremesas", premium: "ceia", foto: "img/ceia/torta-limao.webp",
  nome: "Torta gelada de limão", emoji: "🍋", tags: ["Geladeira", "Sem forno"], tempo: 40, rende: "1 forma de 22 cm", nivel: "Fácil",
  intro: "Base de castanhas, creme azedinho e cobertura aerada. Refrescante para o calor do Natal brasileiro.",
  ingredientes: [
    "Base: 1 e 1/2 xícara de castanhas (caju ou amêndoas), 1/2 xícara de coco ralado sem açúcar, 3 colheres de sopa de óleo de coco, 2 colheres de sopa de adoçante",
    "Creme: 400 ml de leite de coco, 1 caixinha de creme de leite sem lactose, 1/2 xícara de suco de limão, raspas de 2 limões, 1/2 xícara de " + ADO + ", 3 colheres de sopa de amido de milho",
    "Cobertura: 1 caixinha de creme de leite sem lactose gelado e 2 colheres de sopa de adoçante"
  ],
  passos: [
    { t: "Triture os ingredientes da base até formar uma farofa úmida e aperte no fundo da forma de fundo removível. Leve ao freezer.", timer: 15 },
    { t: "Creme: leve o leite de coco, o creme de leite, o adoçante e o amido ao fogo, mexendo até engrossar.", timer: 8 },
    { t: "Desligue e misture o suco e as raspas de limão. Despeje sobre a base." },
    { t: "Bata o creme de leite gelado com o adoçante até encorpar, espalhe por cima e leve à geladeira.", timer: 240 }
  ],
  dica: "Raspe só a parte verde do limão: a parte branca amarga."
},
{
  id: "mousse-chocolate", col: "ceia", sec: "Sobremesas", premium: "ceia", foto: "img/ceia/mousse.webp",
  nome: "Mousse de chocolate de 3 ingredientes", emoji: "🍫", tags: ["Geladeira", "3 ingredientes"], tempo: 20, rende: "6 taças", nivel: "Fácil",
  intro: "Cremosa e intensa, servida em taças. Rápida para fazer na véspera.",
  ingredientes: [
    "200 g de chocolate zero açúcar e sem lactose",
    "2 caixinhas de creme de leite sem lactose (400 g), sendo 1 gelada",
    "2 colheres de sopa de " + ADO + " (opcional)"
  ],
  passos: [
    { t: "Derreta o chocolate e misture 1 caixinha de creme de leite (em temperatura ambiente) até ficar liso. Espere esfriar." },
    { t: "Bata a outra caixinha de creme de leite gelada com o adoçante até encorpar." },
    { t: "Misture as duas partes delicadamente, distribua em taças e leve à geladeira.", timer: 180 }
  ],
  dica: "Decore com raspas de laranja ou frutas vermelhas na hora de servir."
},
{
  id: "brigadeiro-colher", col: "ceia", sec: "Sobremesas", premium: "ceia", foto: "img/ceia/brigadeiro.webp",
  nome: "Brigadeiro de colher de coco", emoji: "🥄", tags: ["Panela", "Rápido"], tempo: 25, rende: "6 potinhos", nivel: "Fácil",
  intro: "Feito com leite de coco reduzido no lugar do leite condensado. Para servir em potinhos ou recheio.",
  ingredientes: [
    "400 ml de leite de coco",
    "1/2 xícara de " + ADO,
    "3 colheres de sopa de cacau em pó 100%",
    "1 colher de sopa de amido de milho",
    "1 colher de sopa de óleo de coco"
  ],
  passos: [
    { t: "Misture tudo na panela ainda fria até dissolver o cacau e o amido." },
    { t: "Cozinhe em fogo baixo, mexendo sem parar, até engrossar e desgrudar levemente do fundo.", timer: 15 },
    { t: "Distribua em potinhos e espere esfriar." }
  ],
  dica: "Para enrolar, cozinhe 5 minutos a mais e leve à geladeira por 2 horas antes de modelar."
},

/* ============================ PARA PRESENTEAR ============================ */
{
  id: "biscoito-natalino", col: "ceia", sec: "Para presentear", premium: "ceia", foto: "img/ceia/biscoitos.webp",
  nome: "Biscoitos natalinos de cortador", emoji: "⭐", tags: ["Forno", "Presente"], tempo: 60, rende: "cerca de 40 biscoitos", nivel: "Fácil",
  intro: "Estrelas, árvores e bonecos que seguram o formato no forno. Perfeitos para decorar, embalar e dar de presente.",
  ingredientes: [
    "2 xícaras de farinha de arroz (280 g)",
    "1/2 xícara de amido de milho (65 g)",
    "1/2 xícara de " + ADO,
    "1/2 xícara de óleo de coco em temperatura ambiente (sólido, mas macio)",
    "1 ovo",
    "1 colher de chá de essência de baunilha",
    "1 colher de chá de canela e 1/2 de gengibre em pó (opcional)",
    "1 pitada de sal"
  ],
  passos: [
    { t: "Misture o óleo de coco com o adoçante, junte o ovo e a baunilha." },
    { t: "Acrescente os secos e amasse até formar uma massa lisa que não gruda." },
    { t: "Abra entre dois plásticos com 0,5 cm de espessura e leve à geladeira para firmar.", timer: 20 },
    { t: "Corte com os cortadores e coloque na assadeira forrada." },
    { t: "Asse a 180 °C até as bordas dourarem levemente.", timer: 12 },
    { t: "Espere esfriar na assadeira: quentes, eles ainda estão moles.", timer: 15 }
  ],
  dica: "Guardados em pote bem fechado, duram até 15 dias. Use as etiquetas do guia de presentes."
},
{
  id: "pao-de-mel", col: "ceia", sec: "Para presentear", premium: "ceia", foto: "img/ceia/pao-de-mel.webp",
  nome: "Pão de mel sem mel", emoji: "🍪", tags: ["Forno", "Presente"], tempo: 60, rende: "15 unidades", nivel: "Médio",
  intro: "Todo o sabor de especiarias do pão de mel, com cobertura de chocolate zero açúcar, e sem mel (que também é açúcar).",
  ingredientes: [
    "1 xícara de farinha de arroz (140 g)",
    "1/4 de xícara de cacau em pó 100%",
    "1/2 xícara de " + ADO,
    "1 colher de chá de canela, 1/2 de cravo em pó e 1/2 de gengibre em pó",
    "1 colher de chá de fermento químico",
    "1 colher de chá de bicarbonato",
    "1 ovo",
    "3/4 de xícara de leite vegetal sem açúcar",
    "1/4 de xícara de óleo",
    "Recheio: brigadeiro de colher desta coleção (ou pasta de amendoim)",
    "Cobertura: 250 g de chocolate zero açúcar e sem lactose"
  ],
  passos: [
    { t: "Misture os secos. Junte o ovo, o leite e o óleo e mexa até ficar liso." },
    { t: "Coloque em forminhas de pão de mel untadas (ou em assadeira para cortar depois), até a metade." },
    { t: "Asse a 180 °C até o palito sair seco.", timer: 18 },
    { t: "Depois de frios, corte ao meio e recheie." },
    { t: "Banhe no chocolate derretido e deixe secar sobre papel-manteiga.", timer: 30 }
  ],
  dica: "Para o chocolate ficar brilhante, derreta em fogo bem baixo e não deixe passar de morno."
},
{
  id: "brigatone", col: "ceia", sec: "Para presentear", premium: "ceia", foto: "img/ceia/brigatone.webp",
  nome: "Brigatone (mini chocotone recheado)", emoji: "🎀", tags: ["Presente", "Recheado"], tempo: 30, rende: "6 unidades", nivel: "Fácil",
  intro: "Mini panetone recheado com brigadeiro de coco e coberto de chocolate. O presente que mais faz sucesso.",
  ingredientes: [
    "6 mini panetones de airfryer desta coleção (versão com chocolate)",
    "1 receita de brigadeiro de colher de coco",
    "150 g de chocolate zero açúcar e sem lactose derretido"
  ],
  passos: [
    { t: "Com uma colher pequena, faça um buraco no topo de cada mini panetone, sem chegar ao fundo." },
    { t: "Recheie com o brigadeiro (um saco de confeitar ajuda)." },
    { t: "Cubra o topo com chocolate derretido e deixe firmar.", timer: 20 }
  ],
  dica: "Embale em saquinhos transparentes com fita e a etiqueta impressa."
},
{
  id: "granola-natalina", col: "ceia", sec: "Para presentear", premium: "ceia", foto: "img/ceia/granola.webp",
  nome: "Granola natalina em pote", emoji: "🫙", tags: ["Forno", "Presente", "Dura 30 dias"], tempo: 40, rende: "3 potes de 300 ml", nivel: "Fácil",
  intro: "Crocante, com canela, castanhas e frutas secas. Presente que dura e que todo mundo usa.",
  ingredientes: [
    "2 xícaras de flocos de quinoa ou de arroz (ou aveia com selo sem glúten)",
    "1 xícara de castanhas picadas",
    "1/2 xícara de coco em lascas sem açúcar",
    "2 colheres de sopa de sementes (girassol, abóbora)",
    "1 colher de chá de canela",
    "1/4 de xícara de óleo de coco derretido",
    "3 colheres de sopa de " + ADO,
    "1/2 xícara de frutas secas sem açúcar (adicionar depois de assar)"
  ],
  passos: [
    { t: "Misture tudo, menos as frutas secas, e espalhe numa assadeira forrada." },
    { t: "Asse a 160 °C, mexendo a cada 10 minutos, até dourar por igual.", timer: 25 },
    { t: "Deixe esfriar completamente (é quando fica crocante) e só então misture as frutas secas." },
    { t: "Guarde em potes de vidro bem fechados." }
  ],
  dica: "Aveia comum costuma ter contaminação com glúten. Para quem é celíaco, só a com selo sem glúten."
},

/* ============================ ANO NOVO ============================ */
{
  id: "lentilha-da-sorte", col: "ceia", sec: "Ano Novo", premium: "ceia", foto: "img/ceia/lentilha.webp",
  nome: "Lentilha da sorte", emoji: "🍀", tags: ["Panela", "Ano Novo"], tempo: 45, rende: "8 porções", nivel: "Fácil",
  intro: "A tradição da virada, temperada com calabresa, cebola dourada e cheiro-verde.",
  ingredientes: [
    "2 xícaras de lentilha",
    "2 colheres de sopa de azeite",
    "1 linguiça calabresa em cubos (opcional; confira o rótulo)",
    "1 cebola picada",
    "3 dentes de alho",
    "1 folha de louro",
    "Água para cozinhar",
    "Sal, pimenta e cheiro-verde"
  ],
  passos: [
    { t: "Deixe a lentilha de molho por 1 hora e escorra (opcional, ajuda a cozinhar por igual).", timer: 60 },
    { t: "Doure a calabresa no azeite, junte a cebola e o alho e refogue." },
    { t: "Acrescente a lentilha, o louro e água até cobrir 3 dedos. Cozinhe em fogo médio até ficar macia, mas inteira.", timer: 25 },
    { t: "Acerte o sal e a pimenta e finalize com o cheiro-verde." }
  ],
  dica: "Algumas linguiças têm leite ou trigo na composição. Se não achar uma sem, use bacon ou faça só com legumes."
},
{
  id: "salada-grao-bico-ano-novo", col: "ceia", sec: "Ano Novo", premium: "ceia", foto: "img/ceia/salada-grao.webp",
  nome: "Salada de grão-de-bico com romã", emoji: "🌟", tags: ["Sem fogo", "Ano Novo"], tempo: 15, rende: "6 porções", nivel: "Fácil",
  intro: "Fresca e colorida para a ceia da virada, com grão-de-bico, pepino, romã e hortelã.",
  ingredientes: [
    "2 xícaras de grão-de-bico cozido",
    "1 pepino em cubos",
    "1 tomate sem sementes em cubos",
    "1/2 cebola roxa picada",
    "Sementes de 1/2 romã",
    "Hortelã e salsinha picadas",
    "Molho: 4 colheres de sopa de azeite, suco de 1 limão, sal e pimenta"
  ],
  passos: [
    { t: "Misture todos os ingredientes numa travessa." },
    { t: "Tempere com o molho e deixe na geladeira por 15 minutos antes de servir.", timer: 15 }
  ],
  dica: "Pode ser montada até 1 dia antes; a hortelã entra só na hora."
},
{
  id: "ponche", col: "ceia", sec: "Ano Novo", premium: "ceia", foto: "img/ceia/ponche.webp",
  nome: "Ponche de frutas sem álcool", emoji: "🍹", tags: ["Bebida", "Sem álcool"], tempo: 15, rende: "2 litros", nivel: "Fácil",
  intro: "Para brindar com todo mundo, inclusive crianças e quem não bebe.",
  ingredientes: [
    "1 litro de água com gás gelada",
    "500 ml de suco de uva integral (sem açúcar adicionado)",
    "Suco de 2 laranjas",
    "1 maçã em cubinhos",
    "1 xícara de morangos cortados",
    "1 laranja em rodelas",
    "Folhas de hortelã e gelo"
  ],
  passos: [
    { t: "Misture as frutas e os sucos numa jarra grande e leve à geladeira.", timer: 30 },
    { t: "Na hora de servir, junte a água com gás, o gelo e a hortelã." }
  ],
  dica: "Suco de uva integral já é doce naturalmente. Se quiser mais doce, use adoçante a gosto."
},

/* ============================ BÔNUS: DIA SEGUINTE ============================ */
{
  id: "torta-sobras", col: "ceia", sec: "Bônus: Dia Seguinte", premium: "ceia", foto: "img/ceia/torta-sobras.webp",
  nome: "Torta de liquidificador com sobras da ceia", emoji: "🥧", tags: ["Sobras", "Forno"], tempo: 50, rende: "1 forma de 24 cm", nivel: "Fácil",
  intro: "O frango, o arroz e os legumes que sobraram viram recheio de uma torta de liquidificador sem glúten.",
  ingredientes: [
    "Massa: 3 ovos, 1 xícara de leite vegetal sem açúcar, 1/2 xícara de óleo, 1 xícara de farinha de arroz, 1/2 xícara de polvilho doce, 1 colher de sopa de fermento químico, 1 colher de chá de sal",
    "Recheio: 2 xícaras de sobras (frango assado desfiado, legumes, arroz natalino ou salpicão sem a batata palha)",
    "Orégano para polvilhar"
  ],
  passos: [
    { t: "Bata os ingredientes da massa (menos o fermento) no liquidificador. Junte o fermento e misture." },
    { t: "Despeje metade da massa na forma untada, espalhe o recheio e cubra com o resto." },
    { t: "Polvilhe orégano e asse a 200 °C até dourar.", timer: 35 }
  ],
  dica: "Sobras com maionese só voltam ao forno se estiverem na geladeira desde a ceia, bem guardadas."
},
{
  id: "panqueca-banana-25", col: "ceia", sec: "Bônus: Dia Seguinte", premium: "ceia", foto: "img/ceia/panqueca.webp",
  nome: "Panquecas de banana para o café do dia 25", emoji: "🥞", tags: ["Frigideira", "Café da manhã"], tempo: 15, rende: "8 panquecas pequenas", nivel: "Fácil",
  intro: "Café da manhã tranquilo depois da ceia: banana, ovo e canela, sem farinha nenhuma.",
  ingredientes: [
    "2 bananas maduras amassadas",
    "2 ovos",
    "2 colheres de sopa de farinha de arroz ou de amêndoas (opcional, deixam mais firmes)",
    "1/2 colher de chá de canela",
    "Óleo de coco para untar"
  ],
  passos: [
    { t: "Misture tudo com um garfo." },
    { t: "Em frigideira untada, em fogo baixo, coloque colheradas da massa e doure dos dois lados.", timer: 3 }
  ],
  dica: "Sirva com as frutas que sobraram da ceia."
},
{
  id: "wrap-salpicao", col: "ceia", sec: "Bônus: Dia Seguinte", premium: "ceia", foto: "img/ceia/wrap.webp",
  nome: "Wrap de tapioca com salpicão", emoji: "🌯", tags: ["Frigideira", "Sobras", "Rápido"], tempo: 10, rende: "4 wraps", nivel: "Fácil",
  intro: "O salpicão que sobrou vira almoço em 10 minutos.",
  ingredientes: [
    "8 colheres de sopa de goma de tapioca",
    "2 xícaras de salpicão da ceia",
    "Folhas de alface"
  ],
  passos: [
    { t: "Espalhe 2 colheres de goma na frigideira quente, sem óleo, até unir. Vire e espere 30 segundos." },
    { t: "Recheie com alface e salpicão e enrole." }
  ],
  dica: "Salpicão com maionese dura até 2 dias na geladeira, sempre bem fechado."
},
{
  id: "bolinho-farofa", col: "ceia", sec: "Bônus: Dia Seguinte", premium: "ceia", foto: "img/ceia/bolinho.webp",
  nome: "Bolinhos de forno de farofa e frango", emoji: "🧆", tags: ["Forno", "Airfryer", "Sobras"], tempo: 35, rende: "15 bolinhos", nivel: "Fácil",
  intro: "Farofa e frango que sobraram viram bolinhos crocantes para o lanche.",
  ingredientes: [
    "1 xícara de frango assado desfiado",
    "1 xícara de farofa natalina",
    "1 batata cozida amassada",
    "1 ovo",
    "Sal e cheiro-verde a gosto"
  ],
  passos: [
    { t: "Misture tudo até dar liga. Se estiver seca, junte 1 colher de água." },
    { t: "Modele bolinhas e coloque em assadeira untada." },
    { t: "Asse a 200 °C (ou na airfryer a 180 °C) até dourar, virando na metade.", timer: 20 }
  ],
  dica: "Ficam ótimos com a maionese caseira do salpicão."
},
{
  id: "pave-panetone", col: "ceia", sec: "Bônus: Dia Seguinte", premium: "ceia", foto: "img/ceia/pave-panetone.webp",
  nome: "Pavê de travessa com panetone", emoji: "🍰", tags: ["Geladeira", "Sobras"], tempo: 20, rende: "6 porções", nivel: "Fácil",
  intro: "O panetone (ou o miolo do trufado) que sobrou vira uma sobremesa nova.",
  ingredientes: [
    "4 fatias de panetone ou o miolo do panetone trufado",
    "1 receita do creme branco do pavê (ou o que sobrou dele)",
    "1/2 xícara de leite vegetal para umedecer",
    "Frutas vermelhas ou cacau para finalizar"
  ],
  passos: [
    { t: "Corte o panetone em cubos e umedeça levemente no leite." },
    { t: "Monte em taças ou numa travessa, alternando panetone e creme." },
    { t: "Finalize com frutas ou cacau e leve à geladeira.", timer: 60 }
  ],
  dica: "Em potinhos individuais vira sobremesa para levar em marmita."
},
{
  id: "picole-ponche", col: "ceia", sec: "Bônus: Dia Seguinte", premium: "ceia", foto: "img/ceia/picole.webp",
  nome: "Picolé de ponche de frutas", emoji: "🍭", tags: ["Freezer", "Sobras", "Crianças"], tempo: 10, rende: "8 picolés", nivel: "Fácil",
  intro: "O ponche que sobrou (sem a água com gás) vira picolé para o calor.",
  ingredientes: [
    "2 xícaras de ponche sem a água com gás (suco e frutas)",
    "Forminhas de picolé e palitos"
  ],
  passos: [
    { t: "Distribua as frutas picadas nas forminhas e complete com o suco." },
    { t: "Coloque os palitos e leve ao freezer até congelar.", timer: 360 }
  ],
  dica: "Bata metade das frutas com o suco antes, para o picolé ficar mais cremoso."
}
];

window.RECEITAS.push.apply(window.RECEITAS, R);
window.__CEIA_PARTE1 = R.length;
})();
