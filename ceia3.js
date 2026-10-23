/* Ceia Resolvida: oferta, códigos de liberação (só o hash fica aqui) e guias bônus. */
(function () {
/* Preço exibido no app conforme o calendário combinado */
function precoAgora() {
  var d = new Date(), t = d.getTime(), D = function (s) { return new Date(s + "T00:00:00-03:00").getTime(); };
  if (t < D("2026-11-01")) return { preco: "R$ 19,90", nota: "Oferta de lançamento até 31/10 · depois R$ 37" };
  if (t >= D("2026-11-23") && t < D("2026-12-01")) return { preco: "R$ 37", nota: "Black do Natal: Ceia + Festival de Panetones + Kit Presente" };
  if (t < D("2027-01-01")) return { preco: "R$ 37", nota: "Pagamento único · acesso imediato no app" };
  return { preco: "R$ 29,90", nota: "Pagamento único · acesso imediato no app" };
}
window.CEIA = {
  url: "https://ceia.cozinhaqueresolve.com/",
  ativa_ate: "2027-01-10",
  oferta: precoAgora,
  /* sha256(código) -> produto liberado. Os códigos vão no e-mail de acesso da Cakto. */
  codigos: {
    "6a5ca3492ca73a67897feb64cd9d77f55c23ee81ddceb13fa01b577e6788dec9": "ceia",
    "974f33b5df7efa42a9d77e46e6ede0abca5c283a67c7842d69dfc6e789817094": "festival",
    "94ba3206956244f0aa6af4da697a76970299dceaac7d9e274ff972c06c0469e1": "presentes",
    "b0a1401d464c2f91924141ff6b8d893b50fd7c3a529134d150313c3c65d1e937": "presentes5",
    "fa8d51201f8dfbd125dcf5f5f0d63441d8179e656e3d6973a2bb8a9973be4245": "ceia+festival+presentes"
  },
  inclui: [
    "30 receitas: 5 panetones, 6 pratos da ceia, 6 sobremesas, 4 presentes, 3 de Ano Novo e 6 bônus Dia Seguinte",
    "Cardápio da ceia para 4, 8 ou 12 pessoas, com lista de compras",
    "Cronograma Ceia sem correria (3 dias antes até a hora da ceia)",
    "Guia de substituições e etiquetas de presente para imprimir",
    "Sem açúcar adicionado, sem glúten e sem lactose. Acesso imediato, aqui no app"
  ]
};

/* ---------------- Fotos (Unsplash, licença livre; servidas direto do CDN deles) ----------------
   nome do arquivo em img/ceia/<nome>.webp  ->  id da foto no Unsplash */
var FOTOS = window.CEIA_FOTOS = {"panetone":"photo-1636394849426-39501364873c","chocotone":"photo-1636628040211-7d15f57c230e","panetone-liquidificador":"photo-1572978841267-2c2a29d7261f","mini-panetone":"photo-1545286068-9d912f3f4d80","panetone-trufado":"photo-1669385185295-a96157e05a34","frango-assado":"photo-1617636423451-0db0119c14cd","farofa":"photo-1671058844328-fecbd3d61dc0","arroz-natalino":"photo-1733414717515-d997dafb7341","salpicao":"photo-1605291535065-e1d52d2b264a","salada-natalina":"photo-1662192513841-c890cc6ff3f9","pao-de-alho":"photo-1598785244280-7a428600d053","rabanada":"photo-1595044643502-616eeebbdff3","pave":"photo-1792354912044-2db32d86cbe2","pudim":"photo-1702728109878-c61a98d80491","torta-limao":"photo-1681329142517-6daaa56d3670","mousse":"photo-1775042996147-d4d022b9634b","brigadeiro":"photo-1702982841001-f65535a5a40b","biscoitos":"photo-1616372383709-de2bc15e3dee","pao-de-mel":"photo-1777647364657-2319b02095de","brigatone":"photo-1638730393095-6bfc9f27f1d6","granola":"photo-1668723968241-4a6f1fe643d3","lentilha":"photo-1664339031004-9cfdf88b8017","salada-grao":"photo-1786573407437-743e7f7b2b1b","ponche":"photo-1613515766737-2bca4972f4e4","torta-sobras":"photo-1667804068710-c0eaa0e6e250","panqueca":"photo-1606149186228-4e5ac94a742e","wrap":"photo-1585238342107-49a3cdace47f","bolinho":"photo-1632778140142-d62dee6e124c","pave-panetone":"photo-1749280446205-93b204271142","picole":"photo-1504380790957-2616a8994f18","fest-frutas-vermelhas":"photo-1589660117682-0728d988a2d2","fest-pistache":"photo-1603379421561-6837bc0ee23d","fest-doce-de-leite":"photo-1716579895359-e9ac8ce97461","fest-limao":"photo-1652282565239-449a2ee8c558","fest-cafe":"photo-1611497406092-4bc22c54b322","fest-laranja":"photo-1574770703467-ebf0d33c0daf","fest-coco":"photo-1708410186121-7c978590c082","fest-salgado":"photo-1641621124267-fd9c1745e8b5","kit-cookies":"photo-1782852232336-feb9db2fcb03","kit-brownie":"photo-1605190557072-1fe6a230ee65","kit-bombom":"photo-1682120501920-7ce18b00237a","kit-trufas":"photo-1787788629625-d25a5087f060","kit-gengibre":"photo-1698672362756-14375dbb571c","kit-pasta":"photo-1691480208637-6ed63aac6694","kit-cha":"photo-1592227807611-dab16869a0e8","kit-castanhas":"photo-1693812879565-c0cf703dd7b6","kit-geleia":"photo-1633084426862-3a8c25aa7ce5","kit-caneca":"photo-1511938842055-c59f750525b4","capa-ceia":"photo-1669130183473-3a4c8524082f","capa-festival":"photo-1762304887845-0eef96543910","capa-presentes":"photo-1639610806386-661d00972b55"};
function urlFoto(id, w) { return "https://images.unsplash.com/" + id + "?w=" + w + "&q=70&auto=format&fit=crop"; }
window.ceiaImg = function (src, w) {
  var m = /img\/ceia\/([a-z0-9-]+?)(-t)?\.webp$/.exec(src || "");
  if (!m || !FOTOS[m[1]]) return src;
  return urlFoto(FOTOS[m[1]], w || (m[2] ? 360 : 900));
};
(window.RECEITAS || []).forEach(function (r) { if (r.foto) r.foto = window.ceiaImg(r.foto); });
(window.COLECOES || []).forEach(function (c) { if (c.capa) c.capa = window.ceiaImg(c.capa); });

/* ---------------- Guias (liberados com a Ceia) ---------------- */
window.GUIAS = [
{ id: "cardapio-ceia", produto: "ceia", emoji: "🍽️", nome: "Cardápio da ceia pronto",
  sub: "O que servir e quanto fazer para 4, 8 ou 12 pessoas",
  cardapio: [
    { tipo: "Entrada", id: "pao-de-alho" },
    { tipo: "Prato principal", id: "frango-assado-natal" },
    { tipo: "Acompanhamento", id: "arroz-natalino" },
    { tipo: "Acompanhamento", id: "farofa-natalina" },
    { tipo: "Acompanhamento", id: "salpicao" },
    { tipo: "Salada", id: "salada-natalina" },
    { tipo: "Sobremesa", id: "pave" },
    { tipo: "Sobremesa", id: "rabanada-airfryer" },
    { tipo: "Para a mesa", id: "panetone-classico" },
    { tipo: "Bebida", id: "ponche" }
  ],
  porcoes: [
    { n: "4 pessoas", t: "Faça metade das receitas salgadas (meio frango ou um frango menor, de 1,2 kg). Doces: um pavê e um panetone sobram para o dia seguinte." },
    { n: "8 pessoas", t: "Faça cada receita uma vez, como está no app. As receitas da ceia foram pensadas para 8 porções." },
    { n: "12 pessoas", t: "Dois frangos (ou frango + lombo), receita e meia de arroz, farofa e salpicão, duas sobremesas inteiras e dois panetones." }
  ] },
{ id: "cronograma", produto: "ceia", emoji: "⏰", nome: "Cronograma Ceia sem correria",
  sub: "O que fazer em cada dia para chegar na ceia tranquila",
  itens: [
    { n: "Até 7 dias antes", t: "Faça as compras secas (farinhas, frutas secas, castanhas, chocolate zero, adoçante). Asse os biscoitos natalinos e a granola: duram 15 dias." },
    { n: "3 dias antes", t: "Asse os panetones e o chocotone. Embrulhados em plástico filme, ficam perfeitos até a ceia." },
    { n: "2 dias antes", t: "Compre as frutas, folhas e o frango. Faça o pudim e a torta de limão (geladeira)." },
    { n: "1 dia antes (manhã)", t: "Coloque o frango na marinada. Faça o pavê e a mousse. Cozinhe e desfie o frango do salpicão." },
    { n: "1 dia antes (noite)", t: "Monte o salpicão (sem a batata palha). Deixe a farofa picada e separada. Prepare a massa do pão de alho e congele em bolinhas." },
    { n: "No dia, 4 horas antes", t: "Frango no forno (1h30). Enquanto assa: arroz natalino e farofa." },
    { n: "No dia, 1 hora antes", t: "Pão de alho no forno. Monte a salada (molho só na hora). Ponche na geladeira." },
    { n: "Na hora", t: "Batata palha no salpicão, molho na salada, água com gás no ponche. Rabanada na airfryer na hora da sobremesa." }
  ] },
{ id: "substituicoes", produto: "ceia", emoji: "🔄", nome: "Guia de substituições",
  sub: "Não achou um ingrediente? Use o que tem",
  itens: [
    { n: "Psyllium", t: "Não tem substituto exato para os panetones. Em pães de frigideira e tortas, troque por 1 colher de sopa de chia moída." },
    { n: "Fécula de batata", t: "Amido de milho ou polvilho doce, na mesma quantidade." },
    { n: "Farinha de arroz", t: "Mix pronto de farinhas sem glúten (confira se não tem leite). Evite farinha de aveia comum, que costuma ter glúten." },
    { n: "Xilitol ou eritritol", t: "Outro adoçante culinário que vá ao forno e substitua o açúcar 1 para 1. Adoçantes líquidos não funcionam em massas." },
    { n: "Leite vegetal", t: "Leite sem lactose, se a restrição for só à lactose. Ou água com 1 colher de óleo por xícara." },
    { n: "Creme de leite sem lactose", t: "Creme de coco ou leite de coco bem gelado (use só a parte grossa)." },
    { n: "Óleo de coco", t: "Óleo neutro (girassol, milho) nas massas. Nos biscoitos de cortador, use margarina vegetal sem leite." },
    { n: "Chocolate zero açúcar", t: "Cacau em pó 100% + adoçante na massa. Para cobertura não há troca: precisa ser chocolate." },
    { n: "Uva-passa", t: "Damasco, ameixa ou tâmara picados. Fuja das frutas cristalizadas e do cranberry, que têm açúcar." },
    { n: "Ovos", t: "Nas sobremesas de geladeira não dá para trocar. Nos biscoitos, 1 colher de sopa de chia + 3 de água substitui 1 ovo." }
  ] },
{ id: "etiquetas", produto: "ceia", emoji: "🏷️", nome: "Etiquetas de presente para imprimir",
  sub: "12 etiquetas por folha A4, com espaço para o nome e a data", etiquetas: true },
{ id: "embalagem", produto: "festival", emoji: "🎁", nome: "Guia de embalagem para presente",
  sub: "Como embalar para durar e ficar bonito", embalagem: true }
];
})();
