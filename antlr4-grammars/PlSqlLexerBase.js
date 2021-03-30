import { Lexer } from "antlr4";

export class PlSqlLexerBase extends Lexer {
  IsNewlineAtPos(pos) {
    const la = this._input.LA(pos);
    return la == -1 || String.fromCharCode(la) == "\n";
  }
}
