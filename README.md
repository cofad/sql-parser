# Prettier SQL Oracle

A [Prettier](https://prettier.io/) plugin for Oracle PL/SQL.

## Table of Contents

1. [Prerequisites](#prerequisites)
1. [Working Notes](#working-notes)

## Prerequisites

1. [Antlr4](https://www.antlr.org/)
1. [NodeJs](nodejs.org)
1. NPM

## Working Notes

1. Install [Antlr4](https://github.com/antlr/antlr4/blob/master/doc/getting-started.md) to build lexer/parser.
1. Download PlSqlLexer.g4 and PlSqlParser.g4 from <https://github.com/antlr/grammars-v4/blob/master/sql/plsql>.

   ```cmd
   npm run download-lexer
   npm run download-parser
   ```

1. Download JavaScript modules from <https://github.com/antlr/grammars-v4/tree/master/sql/plsql/JavaScript>.

   ```cmd
   npm run download-lexer-base
   npm run download-parser-base
   ```

1. Build lexer and parser

   ```cmd
   npm run build-parser
   npm run build-lexer
   ```
