/* Fotos ilustrativas (Unsplash, licença livre) para Bolos Fitness e os 3 bumps.
   Carregar DEPOIS de bolos.js, bolos2.js, bolos3.js e bumps-bolos.js. */
(function () {
var P = {
  carrot: ["1676300186098-9b5ae9916e3c", "1618426703623-c1b335803e07"], banana: ["1569762404472-026308ba6b64", "1632931057819-4eefffa8e007"],
  chocolate: ["1700448293876-07dca826c161", "1602351447937-745cb720612f"], lemon: ["1691242720281-9269de4d9f86", "1728911296471-8c57f645a44e"],
  orange: ["1603455907761-b11099c592d4"], corn: ["1603279126476-93ce8278312c", "1664339031047-970bf639e43f"],
  coconut: ["1716579895359-e9ac8ce97461", "1716579899416-72375f69ada7"], apple: ["1562007908-17c67e878c88", "1506127946181-abb01a32593c"],
  marble: ["1567943157286-9707c2019794"], pumpkin: ["1702745100358-8379ba0e59c9"], mug: ["1511938842055-c59f750525b4"],
  yogurt: ["1559620192-032c4bc4674e", "1627308595171-d1b5d67129c4"], cassava: ["1586322619985-14611ca91dc1", "1694169862504-d78a93e54530"],
  almond: ["1771575521906-a1184137f1b4"], passion: ["1542826438-bd32f43d626f", "1488477304112-4944851de03d"],
  peanut: ["1615110250484-e8c3b151b957"], strawberry: ["1602663491496-73f07481dbea", "1622621746668-59fb299bc4d7"],
  beet: ["1586788680434-30d324b2d46f", "1602630209855-dceac223adfe"], sweetpotato: ["1590165482129-1b8b27698780"],
  bmuffin: ["1607958996333-41aef7caefaa", "1637087788449-222cf1da072a"], cmuffin: ["1611614010348-7df489604fe3", "1616151030755-76f6cd987a06"],
  cupcake: ["1614707267537-b85aaf00c4b7", "1563729784474-d77dbb933a9e"], brownie: ["1636743715220-d8f8dd900b87", "1606313564200-e75d5e30476c"],
  blondie: ["1682622110395-145cc13d5346", "1702650707411-2ad2d60e1c2c"], oatcookie: ["1598839950984-034f6dc7b495", "1607114910421-a7c2b982d497"],
  chipcookie: ["1499636136210-6f4ee915583e", "1597733153203-a54d0fbc47de"], pbcookie: ["1611082191524-1c049443f288", "1573827196605-0a95831e07f9"],
  cococookie: ["1520903366097-883405842889"], pancake: ["1528207776546-365bb710ee93", "1612182062633-9ff3b3598e96"],
  crepe: ["1656057205408-4a0a62cf2dfb", "1519676867240-f03562e64548"], jar: ["1629980173135-9b01683515f5", "1631114494725-07444d0070f2"],
  naked: ["1568827999250-3f6afff96e66", "1542007920-992d2c424d09"], birthday: ["1606983340126-99ab4feaa64a", "1558301211-0d8c8ddee6ec"],
  roll: ["1760136874870-701b323169ed", "1694449052833-57aebb388474"], cheesecake: ["1524351199678-941a58a3df50", "1676300185983-d5f242babe34"],
  mousse: ["1551578657-a7e74acb0135", "1657502096852-340a75dc56f7"], chia: ["1651256785597-4efe48fd71f9", "1552528352-59648b345866"],
  popsicle: ["1528826058331-d59e395cfe43", "1633933037611-f26e54366832"], granola: ["1559951585-645e730d3cf0", "1724441980123-aca7911329d0"],
  churros: ["1624371414361-e670edf4898d", "1669867405064-f31e8707216e"], donut: ["1646615077267-97c6088b74d9", "1551024601-bec78aea704b"],
  flan: ["1702728109878-c61a98d80491", "1653988354010-39637252a2db"], crumble: ["1567977750379-8f3550644c2b", "1706799419621-14d7f424de83"],
  bakedapple: ["1635876021223-bc7717e2b11e", "1676289869007-8ebccd8923a7"], balls: ["1596723455658-72ebb0d12edd", "1678554500191-3885a6fbf8c2"],
  truffle: ["1599599810769-bcde5a160d32", "1549007994-cb92caebd54b"], meringue: ["1711563195936-47b22ff63723"],
  cococandy: ["1676364000560-eefe24b03c45", "1676363999989-9faf306a0025"], pumpkinjam: ["1729182808229-9a688478872c"],
  quiche: ["1591985666643-1ecc67616216", "1650844010413-3f24dc1c182b"], falafel: ["1593001872095-7d5b3868fb1d", "1680990999782-ba7fe26e4d0b"],
  nuggets: ["1627662168223-7df99068099a", "1619881590738-a111d176d906"], pizza: ["1584615467033-75627d04dffe"],
  chips: ["1596097635121-14b63b7a0c23", "1596097634767-4188de39715f"], cheesebread: ["1559141680-d0bd7bc5af84"],
  oatbread: ["1534620808146-d33bb39128b2", "1626423642275-6d0df1662c96"], empanada: ["1624128082323-beb6b8b508db", "1608039783021-6116a558f0c5"],
  omelette: ["1518310532637-f5225f94f3c3"], tapioca: ["1676515231566-eb804ac487c1"], wholebread: ["1509440159596-0249088772ff"],
  spinach: ["1612731528771-2dc8134a448f"], savorypie: ["1628642585518-2d63c2beab6b", "1650917331384-1fd06afa3230"],
  acai: ["1583238620415-1e363e11aedf"], jabuticaba: ["1706307971427-0cc5ca3d1988"], pear: ["1572929773424-93549dced6d0"],
  pineapple: ["1614963366795-973eb8748ebb", "1566071732121-8f2669919fe5"], applechips: ["1598799170795-45f90ddfb662"],
  brigadeiro: ["1702982852429-e0d0b27eb990", "1702982841001-f65535a5a40b"], tart: ["1620980776848-84ac10194945", "1614174486496-344ef3e9d870"],
  lemoncurd: ["1663446783006-5db76a63b27a"], brittle: ["1772984959639-54284678b805", "1772984968637-5e2b33c81f7b"],
  cocoflakes: ["1588413333412-82148535db53"], cookiescream: ["1559622214-f8a9850965bb", "1563805042-7684c019e1cb"]
};
/* regras na ordem: a primeira que casar define a foto */
var REGRAS = [
  [/caneca/, "mug"], [/cheesecake/, "cheesecake"], [/rocambole/, "roll"], [/pote|pavê|pave/, "jar"], [/naked|floresta|aniversário|prestígio fit|festa/, "naked"],
  [/cupcake/, "cupcake"], [/muffin.*(chocolate|café|cacau)|cacau.*muffin/, "cmuffin"], [/muffin|mini bolinhos|bolinho de banana, ovo/, "bmuffin"],
  [/blondie/, "blondie"], [/brownie/, "brownie"], [/cookie.*(amendoim)|amendoim.*cookie/, "pbcookie"], [/cookie.*coco/, "cococookie"],
  [/cookie.*(aveia|passas|banana)/, "oatcookie"], [/cookies and cream/, "cookiescream"], [/cookie/, "chipcookie"],
  [/sequilho/, "cococookie"], [/espinafre/, "spinach"], [/crepioca|tapioca com coco|dadinho/, "tapioca"], [/panqueca/, "pancake"],
  [/mousse|ganache/, "mousse"], [/chia/, "chia"], [/picolé|sorvete|gelatina/, "popsicle"], [/granola/, "granola"], [/churros/, "churros"],
  [/donut|rosquinha/, "donut"], [/pudim/, "flan"], [/crumble/, "crumble"], [/maçã assada|banana assada|maçã recheada/, "bakedapple"],
  [/bolinha|barrinha/, "balls"], [/trufa|bombom/, "truffle"], [/brigadeiro|beijinho|cajuzinho/, "brigadeiro"], [/suspiro/, "meringue"],
  [/cocada/, "cococandy"], [/doce de abóbora/, "pumpkinjam"], [/quiche/, "quiche"], [/omelete/, "omelette"], [/falafel|hambúrguer/, "falafel"],
  [/nuggets|bolinho de arroz/, "nuggets"], [/pizza/, "pizza"], [/chips de batata/, "chips"], [/chips de maçã/, "applechips"], [/chips de banana/, "applechips"],
  [/pão de queijo|biscoito de polvilho|pão nuvem/, "cheesebread"], [/esfiha|coxinha|pão de batata recheado|bolinho de mandioca/, "empanada"],
  [/torta (de liquidificador|de atum)|kibe|torta.*frango/, "savorypie"], [/pão de forma|pão de aveia|pão de frigideira|pão de batata-doce/, "oatbread"],
  [/pão de mel/, "cmuffin"], [/açaí/, "acai"], [/jabuticaba/, "jabuticaba"], [/pera/, "pear"], [/abacaxi/, "pineapple"],
  [/pé de moleque|paçoca/, "brittle"], [/creme de limão|lemon curd/, "lemoncurd"], [/tortinha|mini torta/, "tart"],
  [/red velvet|beterraba/, "beet"], [/cenoura/, "carrot"], [/banana/, "banana"], [/morango|frutas vermelhas|mirtilo|framboesa/, "strawberry"],
  [/maracujá/, "passion"], [/limão/, "lemon"], [/laranja|castanha-do-pará|amêndoas/, "orange"], [/milho|fubá|cuscuz|queijo fit/, "corn"],
  [/mandioca|aipim/, "cassava"], [/batata-doce/, "sweetpotato"], [/coco/, "coconut"], [/maçã/, "apple"], [/abóbora/, "pumpkin"],
  [/mármore/, "marble"], [/cupuaçu/, "passion"], [/amendoim/, "peanut"], [/iogurte|baunilha|chia/, "yogurt"], [/chocolate|cacau|café|mocha/, "chocolate"],
  , [/geleia|calda de frutas/, "strawberry"], [/doce de leite/, "flan"]
];
REGRAS = REGRAS.filter(Boolean);
var url = function (id) { return "https://images.unsplash.com/photo-" + id + "?w=900&q=70&auto=format&fit=crop"; };
var COLS = { bolos: 1, fit3: 1, airfit: 1, salgadosfit: 1 }, n = {};
window.RECEITAS.forEach(function (r) {
  if (!COLS[r.col] || r.foto) return;
  var s = r.nome.toLowerCase().replace(/(óleo|leite|açúcar|creme) de coco/g, ""), key = "yogurt";
  for (var i = 0; i < REGRAS.length; i++) if (REGRAS[i][0].test(s)) { key = REGRAS[i][1]; break; }
  if (r.col === "salgadosfit" && key === "yogurt") key = "savorypie";
  var lst = P[key]; n[key] = (n[key] || 0) + 1; r.foto = url(lst[(n[key] - 1) % lst.length]);
});
var capas = { bolos: "1602351447937-745cb720612f", fit3: "1596723455658-72ebb0d12edd", airfit: "1624371414361-e670edf4898d", salgadosfit: "1624128082323-beb6b8b508db" };
window.COLECOES.forEach(function (c) { if (capas[c.id] && !c.capa) c.capa = url(capas[c.id]); });
})();
