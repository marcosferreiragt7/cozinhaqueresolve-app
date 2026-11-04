/* Fotos (Unsplash, licença livre) para Pães que Resolvem e seus bumps.
   Carregar DEPOIS de paes.js, paes2.js, paes-premios.js e bumps-paes.js. */
(function () {
var P = {
  forma: ["1598373182133-52452f7691ef", "1634598603904-0a7516ec64b2", "1549931319-a545dcf3bc73", "1663904460424-91895028aa9e", "1507638940746-7b17d6b55b8f", "1598373182308-3270495d2f58"],
  rustico: ["1613396874083-2d5fbe59ae79", "1620921592619-652411a0d01a", "1590301157172-7ba48dd1c2b2", "1597604391235-a7429b4b350c", "1675725291010-cb1020860cb2", "1767065888377-e5ffb4e39645", "1586765501019-cbe3973ef8fa", "1549413468-cd78edb7e75c", "1771160962771-00186d83364e", "1774043213144-c74be4fd335b"],
  integral: ["1509440159596-0249088772ff", "1534620808146-d33bb39128b2", "1626423642268-24cc183cbacb", "1559811814-e2c57b5e69df", "1772864463642-42c789ab5dbd"],
  focaccia: ["1767065886275-2a8ff2eaa13a", "1767065885993-b4c5a018bd3a", "1767065887015-8f368d4c689d", "1784822109223-20ceba260902", "1619452357216-e88ca8119eeb"],
  baguete: ["1691862469586-9c7c183b27b7", "1728670212431-ac192413f4b1", "1554475659-9fd915c8f156", "1677329175333-c08df2a3181d", "1568471173242-461f0a730452"],
  bolinha: ["1632552544552-3ca612a328ac", "1726418491385-9d10d2e6cc69", "1535912562650-f95ddac3f4a7", "1508616185939-efe767994166", "1552302094-91d111d7aad0", "1651604033534-e66b281f1981", "1580822642566-5138e95313d3", "1555981437-e1663bc872bc"],
  doce: ["1764281469526-e1c378515e6f", "1775582662806-2972d4878175", "1649308401368-a68b77116605", "1686207855146-c3ffe2166d40", "1693407839053-04089e33b60d", "1694632288834-17d86b340745", "1593872571314-4a735d4b27b0"],
  croissant: ["1623334044303-241021148842", "1691480162735-9b91238080f6", "1763207291707-e2cf471ed72b", "1530610476181-d83430b64dcd"],
  pizza: ["1513104890138-7c749659a591", "1565299624946-b28f40a0ae38", "1574071318508-1cdbab80d002", "1593560708920-61dd98c46a4e", "1604382354936-07c5d9983bd3", "1579751626657-72bc17010498", "1613564834361-9436948817d1"],
  bagel: ["1775911189121-e8caae0f991b", "1687175452217-e4f8e523b5b5", "1770817985811-51c1e1f3e514"],
  pretzel: ["1511951786553-1d4f975424c9", "1649507384248-8e9ce1c89795", "1727691165307-69ac64d2ebd9"],
  plano: ["1718874635150-85070e62fcf1", "1718874560784-d4164371eb38", "1600935926387-12d9b03066f0", "1697126248475-a537cc5cce28"],
  torrada: ["1584776296944-ab6fb57b0bdd", "1619095956510-24c12e2c4b9a", "1631707928780-153b053e09aa", "1643473806845-485d1f11688c", "1637376516923-e88d431a677d", "1554933054-0b679a7982ca"],
  pasta: ["1637949385162-e416fb15b2ce", "1783696072732-2ff5cec23b08", "1637949385133-3de79e927ef3", "1753364547864-679728b22c31", "1767114915974-3481fa23cbb0"],
  biscoito: ["1611082191524-1c049443f288", "1573827196605-0a95831e07f9", "1582623203765-511e04ff6948", "1608070735103-35aa01048704", "1622296999725-fd6600a7603c", "1573729405915-56f0b1a190a0"],
  manteiga: ["1744216834419-ff047cdea206", "1530590543196-9faf82fed4ea", "1662490881538-dc9419784bc3"]
};
var url = function (id) { return "https://images.unsplash.com/photo-" + id + "?w=900&q=70&auto=format&fit=crop"; };
var REGRAS = [
  [/pizza|calzone|esfiha|esfirra/, "pizza"], [/focaccia|fougasse/, "focaccia"], [/croissant|folhad/, "croissant"], [/bagel/, "bagel"], [/pretzel/, "pretzel"],
  [/baguete|filão|ciabatta|francês/, "baguete"], [/sírio|pita|naan|chapati|tortilha|tortilla|wrap|frigideira/, "plano"],
  [/canela|babka|rosca|sonho|doce|brioche|trança|delícia|cinnamon|cardamomo|chocolate|coco|maçã|laranja/, "doce"],
  [/torrad|crouton|cracker|chips/, "torrada"], [/integral|centeio|multigrãos|sementes|linhaça|aveia|chia/, "integral"],
  [/levain|rústico|italiano|fermentação|panela|soda|cerveja|azeitona/, "rustico"],
  [/bolinha|pãozinho|pãezinhos|bisnaguinha|hambúrguer|cachorro|bola|mini|leite|batata|bisnag|english/, "bolinha"],
  [/forma|sovado|sanduíche|pullman|caseiro/, "forma"]
];
var SEC = [[/Pizzas/, "pizza"], [/Fermentação natural/, "rustico"], [/Focaccias/, "rustico"], [/Pães doces/, "doce"], [/Integrais/, "integral"], [/Manteigas/, "manteiga"]];
var n = {};
function poe(r, key) { var l = P[key]; n[key] = (n[key] || 0) + 1; r.foto = url(l[(n[key] - 1) % l.length]); }
window.RECEITAS.forEach(function (r) {
  if (r.foto) return;
  var s = r.nome.toLowerCase(), key = "", i;
  if (r.col === "pao") {
    for (i = 0; i < REGRAS.length; i++) if (REGRAS[i][0].test(s)) { key = REGRAS[i][1]; break; }
    if (!key) for (i = 0; i < SEC.length; i++) if (SEC[i][0].test(r.sec)) { key = SEC[i][1]; break; }
    poe(r, key || "forma");
  } else if (r.col === "recheios") poe(r, /Recheios quentes/.test(r.sec) ? "torrada" : "pasta");
  else if (r.col === "biscoitos") poe(r, /Torradas/.test(r.sec) ? "torrada" : "biscoito");
  else if (r.col === "paodequeijo") poe(r, /pizza|esfirra|esfiha/.test(s) ? "pizza" : /folhad/.test(s) ? "croissant" : "bolinha");
});
var capas = { pao: P.forma[0], recheios: P.pasta[0], biscoitos: P.biscoito[0], paodequeijo: P.bolinha[0] };
window.COLECOES.forEach(function (c) { if (capas[c.id] && !c.capa) c.capa = url(capas[c.id]); });
window.PAES_FOTOS = P;
})();
