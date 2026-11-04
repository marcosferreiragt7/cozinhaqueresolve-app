/* Fotos ilustrativas (Unsplash, licença livre) para Saladas no Pote.
   Carregar DEPOIS de potes.js, potes2.js, potes3.js e potes-premios.js. */
(function () {
var P = {
  jar: ["1505576399279-565b52d4ac71", "1573130437697-c375ce1355d5", "1573130447734-0b5a799d27a6", "1621427017740-9f3ede33f915", "1543352632-5a4b24e4d2a6", "1569420077790-afb136b3bb8c", "1621427016316-03ec01e90936"],
  pastajar: ["1621427016981-25b2381f5538"],
  homus: ["1637949385162-e416fb15b2ce", "1697126248475-a537cc5cce28", "1603133872497-f29809b750bf", "1637949385133-3de79e927ef3"],
  fruta: ["1519996529931-28324d5a630e", "1490474418585-ba9bad8fd0ea", "1774041877283-a3aaad1f2ad2", "1641642400143-6be68f1a0918", "1641642399576-487909d0ddbc", "1659821638991-c43fc142ec14"],
  chia: ["1651256785597-4efe48fd71f9", "1552528352-59648b345866", "1490474504059-bf2db5ab2348", "1459162141474-3bd9d0fb079d", "1757450981154-af0f85502925"],
  massa: ["1473093295043-cdd812d0e601", "1630492782892-74f99406dc59", "1555949258-eb67b1ef0ceb", "1757625620914-1f686e8d15b5", "1597393353365-9d4366392fe9", "1621427016981-25b2381f5538"],
  mousse: ["1590080875852-ba44f83ff2db", "1673551494277-92204546b504", "1775042996147-d4d022b9634b", "1621792907526-e69888069079"],
  frango: ["1546069901-ba9599a7e63c", "1546793665-c74683f339c1", "1757625768432-101f24b1a9ed", "1604909052743-94e838986d24", "1760888549075-0b9727e07735", "1599021419847-d8a7a6aba5b4"],
  camarao: ["1551248429-40975aa4de74", "1614098026096-f69b76d1eabc", "1659415402156-711521b67ebe", "1628669444755-79160b1013cd", "1659415402220-91d0f830064d", "1729292836660-1bd9884457dc"],
  poke: ["1602881917445-0b1ba001addf", "1602881916963-5daf2d97c06e", "1768326119231-bf064c1b8fdf", "1604259597308-5321e8e4789c", "1597958792579-bd3517df6399"],
  batata: ["1593895648796-9139c6bee45c", "1760445530539-0cf729cc9dd1"],
  caprese: ["1623855244697-5d8fbe9c7892", "1592417817098-8fd3d9eb14a5", "1769458313937-b5ad8f84942e", "1595587870672-c79b47875c6a", "1623855244183-52fd8d3ce2f7", "1769458313860-3c8db667d990", "1610817153377-e54299ffdb1e"],
  caesar: ["1546793665-c74683f339c1", "1550304943-4f24f54ddde9", "1746211108786-ca20c8f80ecd", "1599021419847-d8a7a6aba5b4"],
  repolho: ["1537784969314-05a37106f68e", "1573403707491-38a4ea19edc1", "1779176954426-54d02bbd9637", "1790578815382-09895d6d9515"],
  carne: ["1623556299550-e806c0c1f1e8", "1648995293978-8b33ec0b7aa0", "1758157835950-ceeda86f4693"],
  quinoa: ["1623428187969-5da2dcea5ebf", "1505576633757-0ac1084af824", "1656853834420-51980b12a920", "1623428188495-89c064ee061a", "1762631882502-c16fa08c9e14", "1615865417491-9941019fbc00"],
  grao: ["1688807462845-a06bc0abcadb", "1688807450144-9d10de5eb913", "1511690656952-34342bb7c2f2", "1688923130941-889a41f4439c", "1568803776598-57e3cf2f90fc", "1702650657375-934239d8b472"],
  lentilha: ["1623489254660-db5b367881d9", "1667390034698-c2369cd1668b", "1702650657375-934239d8b472"],
  buddha: ["1542354255-839e272e3408", "1675092789086-4bd2b93ffc69", "1599020792689-9fde458e7e17", "1589442305595-62647c1514f9", "1649531794884-b8bb1de72e68", "1505576633757-0ac1084af824"],
  salmao: ["1667657682263-86e924b34fd9", "1611599537845-1c7aca0091c0", "1676300186673-615bcc8d5d68", "1646487793655-bbf280273d2f", "1679744034783-818531344257"],
  tabule: ["1702650657375-934239d8b472", "1647714013867-f62bc1cc2039", "1786174044919-c2119725afa1", "1788601988655-4c8807a1b827"],
  atum: ["1604909052743-94e838986d24", "1604497181015-76590d828b75", "1769830644804-0ede2ee32a62", "1604909052583-bb464043e050", "1757625768432-101f24b1a9ed"],
  marmita: ["1667499745120-f9bcef8f584e", "1666819691716-827f78d892f3", "1762361572897-3debc28f6e84"],
  cobb: ["1667499745169-2271c018a4ee"],
  noodle: ["1604497181015-76590d828b75", "1584913394604-47399f277ad4", "1616176673711-1673690c021f"],
  feijao: ["1662743086910-38419bbf7f34", "1662743234719-d893bd7e6b61"],
  mexicana: ["1543339308-43e59d6b73a6", "1708184528305-33ce7daced65", "1559317996-d154e05c76fb", "1542814880-7e62cf14b7c8", "1533606117812-0783e8e690f1", "1716392976013-66d90cac4411", "1668665771757-4d42737d295a"],
  pepino: ["1627981906592-ae3f0ee9486d", "1679735107918-15112296e28d", "1599448191905-7bedab8ced59", "1652088083542-dae1576b7232"],
  ovo: ["1482049016688-2d3e1b311543", "1589960178430-4c300b6a2212", "1625536059909-84924b9899ea", "1593898710828-935576df601d"],
  grega: ["1505253716362-afaea1d3d1af", "1769481614068-47cfb4d1f125", "1606735584785-1848fdcaea57", "1778449532114-430396ada55b", "1592417817098-8fd3d9eb14a5"],
  verde: ["1607532941433-304659e8198a"],
  tofu: ["1546069901-d5bfd2cbfb1f", "1546069901-5ec6a79120b0", "1544519685-86ccb2dab444", "1680173073730-852e0ec93bec", "1664681340334-5e45eae48e4e", "1664681340329-b391e602d432"],
  molho: ["1649509857226-b6f8ab4e6384"],
  morango: ["1570197571499-166b36435e9f", "1538580435064-835156580e22", "1605291535356-3ff47e120bc4", "1582572358586-7cd1c5dbfa9e"],
  aveia: ["1490371475955-4cb3bfc72f71", "1681150405668-cd5b2a37195d", "1757592797141-d41e1bfe6b0e", "1638777742192-3cccddaea89f"],
  manga: ["1631860744320-ef87b26e7a33", "1562629609-49c10e58c2a6", "1562629601-9ae7f60f9153", "1544510807-d0289d40b17c"],
  melancia: ["1690921349852-7694d2b2c447", "1649825319037-f30ea5b611c7"],
  beterraba: ["1561043433-aaf687c4cf04", "1631311309788-9a37722d05f6", "1608032076946-23d89c6d6d0b"],
  conserva: ["1610602925036-1d81bb50065a", "1612151387873-c8ac8578d4cb", "1773306255915-921ea95858aa"],
  parfait: ["1567769541495-338ee7203e3c", "1550594645-25c5bd703258", "1552320764-9fc870798a3f", "1649118173382-dad295004282"]
};
/* por seção (bônus) */
var SEC = [[/Molhos/, "molho"], [/Conservas/, "conserva"], [/Pastas/, "homus"]];
/* pelo nome (primeira regra que bate) */
var REGRAS = [
  [/overnight|aveia/, "aveia"], [/chia|tapioca/, "chia"], [/mousse|cacau/, "mousse"], [/iogurte|pavê|banoffee|gelatina|crumble/, "parfait"],
  [/homus|babaganuche|palitos/, "homus"], [/patê de atum/, "atum"], [/frutas/, "fruta"],
  [/poke|bibimbap/, "poke"], [/buddha|bowl/, "buddha"], [/burrito|mexic/, "mexicana"], [/tabule|fattoush|marroquina/, "tabule"],
  [/caprese|panzanella|tomates|muçarela/, "caprese"], [/caesar/, "caesar"], [/cobb/, "cobb"], [/grega|mediterr/, "grega"],
  [/tailandesa|thai/, "noodle"], [/salmão|tilápia/, "salmao"], [/camarão/, "camarao"], [/niçoise|atum|sardinha/, "atum"],
  [/macarrão|massa/, "massa"], [/tofu|oriental|sunomono|acelga|amendoim/, "tofu"], [/quinoa/, "quinoa"], [/lentilha/, "lentilha"],
  [/grão-de-bico/, "grao"], [/feijão/, "feijao"], [/carne|bife/, "carne"], [/melancia|melão/, "melancia"], [/morango/, "morango"],
  [/manga/, "manga"], [/beterraba/, "beterraba"], [/repolho|coleslaw/, "repolho"], [/batata|mandioca|inhame|russa/, "batata"],
  [/ovo/, "ovo"], [/pepino|chilena/, "pepino"], [/frango|peru|lombo/, "frango"], [/arroz/, "buddha"], [/cuscuz|cevadinha/, "tabule"]
];
var url = function (id) { return "https://images.unsplash.com/photo-" + id + "?w=900&q=70&auto=format&fit=crop"; };
var n = {};
window.RECEITAS.forEach(function (r) {
  if (r.col !== "potes" || r.foto) return;
  var key = "jar", s = r.nome.toLowerCase(), i;
  for (i = 0; i < SEC.length; i++) if (SEC[i][0].test(r.sec)) { key = SEC[i][1]; break; }
  if (key === "jar") for (i = 0; i < REGRAS.length; i++) if (REGRAS[i][0].test(s)) { key = REGRAS[i][1]; break; }
  if (key === "jar" && /Crocantes/.test(r.sec)) key = "buddha";
  var lst = P[key]; n[key] = (n[key] || 0) + 1; r.foto = url(lst[(n[key] - 1) % lst.length]);
});
window.COLECOES.forEach(function (c) { if (c.id === "potes" && !c.capa) c.capa = url(P.jar[0]); });
window.POTES_FOTOS = P;
/* order bumps: marmitas, wraps, sucos */
var B = {
  wrap: ["1585238342107-49a3cdace47f", "1584947897804-408958123f1d", "1679744034962-c0650a2a20b3", "1665469222949-3de88d37ee5a", "1719282431565-3b30bb7d2658", "1664455248787-bed872761fa2", "1666493243525-cd8ad9d26a86", "1788538397125-8fef2bf2af0b", "1604908816649-c8bdfc3ca68b", "1666493243549-7fa15d99f451"],
  sanduiche: ["1553909489-cd47e0907980", "1785960072671-adedfa5d9fc8", "1539252554453-80ab65ce3586", "1655279562015-047c3da9a271", "1619096252214-ef06c45683e3"],
  crepe: ["1734056650036-7002ede7b8f8", "1587131791788-ec0cb04e0a52"],
  suco: ["1600271886742-f049cd451bba", "1603569283847-aa295f0d016a", "1621506289937-a8e4df240d0b", "1497534446932-c925b458314e"],
  agua: ["1759692586961-af88fb3b55c7", "1783286972642-17d6609d1738", "1523677011781-c91d1bbe2f9e", "1623084921164-4a8c5c37a912", "1575596510825-f748919a2bf7"],
  cha: ["1556679343-c7306c1976bc", "1533007716222-4b465613a984", "1499638673689-79a0b5115d87", "1656936637945-571e3f0893f9", "1769737184213-af66b3637edb"],
  verdeS: ["1610622930110-3c076902312a", "1610970881699-44a5587cabec", "1610622929850-77f505c3ce5a"],
  curry: ["1603894584373-5ac82b2ae398", "1708782344490-9026aaa5eec7", "1631292784640-2b24be784d5d", "1603496987351-f84a3ba5ec85"],
  almondega: ["1529042410759-befb1204b468", "1515516969-d4008cc6241a", "1625242661157-e9e5708ffe5e"],
  ensopado: ["1664741662725-bd131742b7b7", "1608500218987-0f2b3be34b47", "1608500218861-01091cdc501e", "1759392773285-0f86affdf1df", "1596797038530-2c107229654b"],
  moqueca: ["1730112696140-19e61bb43d36", "1621174438159-6a9a82405498", "1776651993696-a7e4fb747f52"],
  omelete: ["1510693206972-df098062cb71", "1668283653825-37b80f055b05", "1780704664094-1595bf7c9a46"],
  salteado: ["1512058564366-18510be2db19", "1601226809816-b8c32440158a", "1758979690131-11e2aa0b142b", "1768326119244-6b7055143e5f", "1564834724105-918b73d1b9e0"],
  chili: ["1666819632298-fe15dc7d4c34", "1658308766948-01c85ade2737", "1591266798549-32fa7cd32f45", "1591386767153-987783380885", "1790701909034-6c7b45c7b58a"],
  lentilhaM: ["1648455320791-a667c8aab7e4", "1664339031004-9cfdf88b8017", "1714062108809-7ca61cb88045", "1714062105941-144a2b6565f1", "1714062105876-1756a22c4caf", "1714062105923-5cb2a3a07499"],
  strog: ["1644592219048-5c070fd3c91c"],
  peixe: ["1665401015549-712c0dc5ef85", "1656389863341-1dfd38ee6edc", "1716816211582-ef70b1cd2e70"],
  prep: ["1543352632-5a4b24e4d2a6", "1667499745120-f9bcef8f584e", "1543352632-fea6d4f83e78", "1569420077790-afb136b3bb8c"]
};
var RB = [
  [/curry/, "curry"], [/almôndega/, "almondega"], [/strogonoff/, "strog"], [/xadrez|tofu|salteado|shoyu/, "salteado"], [/chili|feijoada/, "chili"],
  [/lentilha|grão-de-bico|abóbora/, "lentilhaM"], [/moqueca/, "moqueca"], [/tilápia|salmão|peixe/, "peixe"], [/omelete/, "omelete"],
  [/carne|picadinho/, "ensopado"], [/atum|frango|escondidinho/, "prep"]
];
var CB = { wraps: function (r) { return r.sec === "Wraps" ? "wrap" : r.sec === "Sanduíches" ? "sanduiche" : "crepe"; },
  sucos: function (r) { return r.sec === "Chás gelados" ? "cha" : r.sec === "Águas saborizadas" ? "agua" : /verde/.test(r.nome.toLowerCase()) ? "verdeS" : "suco"; },
  marmitas: function (r) { var s = r.nome.toLowerCase(); for (var i = 0; i < RB.length; i++) if (RB[i][0].test(s)) return RB[i][1]; return "prep"; } };
var nb = {};
window.RECEITAS.forEach(function (r) { if (!CB[r.col] || r.foto) return; var k = CB[r.col](r), l = B[k]; nb[k] = (nb[k] || 0) + 1; r.foto = url(l[(nb[k] - 1) % l.length]); });
var capasB = { marmitas: B.prep[1], wraps: B.wrap[0], sucos: B.suco[1] };
window.COLECOES.forEach(function (c) { if (capasB[c.id] && !c.capa) c.capa = url(capasB[c.id]); });

})();
