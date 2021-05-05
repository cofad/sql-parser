import antlr4 from "antlr4";
import PlSqlLexer from "../antlr4-grammars/PlSqlLexer.js";
import PlSqlParser from "../antlr4-grammars/PlSqlParser.js";

export function parse(code) {
  code = code.toUpperCase();

  const chars = new antlr4.InputStream(code);
  const lexer = new PlSqlLexer(chars);
  const tokens = new antlr4.CommonTokenStream(lexer);
  const parser = new PlSqlParser(tokens);
  parser.buildParseTrees = true;
  const tree = parser.sql_script();

  return tree;
}
