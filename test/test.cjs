(async () => {
  const Parser = await import("../src/index.js");

  const tree = Parser.parse("select * from test");
  console.log(tree);
})();
