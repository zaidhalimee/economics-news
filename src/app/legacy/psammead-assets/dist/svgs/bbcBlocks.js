"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var BBC_BLOCKS = 'PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSI0NzkiIGhlaWdodD0iMTM2IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PGcgZmlsbD0iI0Q1RDBDRCI+PGc+PHBhdGggZD0iTTQ0OS41NTYgOTEuNTUzbC0yLjMxIDEuNDFjLTExLjE2NyA2LjgxOC0yMy4zMTMgMTAuNDc0LTM0LjM0NiAxMC40Ny0yMy42MS0uMDktMzkuMTYzLTE0LjA4My0zOS4yMjctMzQuNDUzLjAzLTE5LjkxOCAxNi4yNy0zNC42NjMgMzguNjMzLTM0LjcxOCAxMS4zODcuMDEgMjEuNzAzIDIuOTU0IDMzLjk2MiA5LjY3MmwyLjI1MSAxLjI0di0xOC4xOWwtLjk2Mi0uMzc3Yy0xMy44MjQtNS40NTgtMjQuNTMtNy44OS0zNS4xMDMtNy44ODQtMTYuMzQ2LS4wMDYtMzAuNTMzIDUuMzk0LTQwLjYzNyAxNC41NTctMTAuMTA1IDkuMTYzLTE2LjEwNiAyMi4xMDItMTYuMDk5IDM2Ljk1My4wMDggMTAuMzQ4IDQuMjc5IDIyLjQ4IDEzLjQyIDMyLjEwNSA5LjEyMSA5LjYyOCAyMy4xNjUgMTYuNjQ4IDQyLjQzIDE2LjYzOWguMDYzYzE1Ljk4IDAgMjcuMDYyLTMuNTYzIDM3LjA3NC04LjQ5MmwuODUxLS40MTRWOTEuNTUzek0zMzQgMTM1LjY5N2gxNDQuMTk1VjBIMzM0djEzNS42OTd6Ii8+PHBhdGggZD0iTTI3Ni45MzcgODkuOTY4Yy4wNDEtMTIuMzMtOC4xNzEtMjEuNjk2LTIxLjMwOC0yNS4zIDMuNTQ0LTEuODA5IDYuMzUtNC4wMjMgOC40MDQtNi43MjcgMi43NS0zLjYyMiA0LjA2MS04LjA2NCA0LjA0Ni0xMy4yMzUuMDE1LTYuMzU5LTIuNDg2LTEyLjgzOS03Ljg1OC0xNy42ODctNS4zNzItNC44NDctMTMuNTI2LTcuOTk3LTI0LjY1NC03Ljk5MUgyMDQuODN2OTcuNzI4aDM2LjA3M2MxMi44NyAwIDIxLjkwNi0zLjQ4MiAyNy43MjItOC42NSA1LjgxOC01LjE1NSA4LjMyLTExLjkxIDguMzEyLTE4LjEzOHpNMTY3IDEzNS42OThoMTQ0LjE5N1YwSDE2N3YxMzUuNjk3eiIvPjxwYXRoIGQ9Ik0xMDkuOTM3IDg5Ljk2OGMuMDQxLTEyLjMzLTguMTcxLTIxLjY5Ni0yMS4zMDgtMjUuMyAzLjU0NC0xLjgwOSA2LjM1LTQuMDIzIDguNDA0LTYuNzI3IDIuNzUtMy42MjIgNC4wNjEtOC4wNjQgNC4wNDYtMTMuMjM1LjAxNS02LjM1OS0yLjQ4Ni0xMi44MzktNy44NTgtMTcuNjg3LTUuMzcyLTQuODQ3LTEzLjUyNi03Ljk5Ny0yNC42NTQtNy45OTFIMzcuODN2OTcuNzI4aDM2LjA3M2MxMi44NyAwIDIxLjkwNi0zLjQ4MiAyNy43MjItOC42NSA1LjgxOC01LjE1NSA4LjMyLTExLjkxIDguMzEyLTE4LjEzOHpNMCAxMzUuNjk4aDE0NC4xOTdWMEgwdjEzNS42OTd6Ii8+PHBhdGggZD0iTTI1OC42NjIgODguMTk4Yy0uMDEzIDMuMjI5LTEuMDA3IDYuNDc1LTMuODk2IDkuMDExLTIuODg0IDIuNTM3LTcuODczIDQuNDYzLTE2LjEzMyA0LjQ2M0gyMjJWNzVoMTUuODkzYzcuNDExIDAgMTIuNjcgMS41MDIgMTUuOTY1IDMuODUgMy4yODkgMi4zNjIgNC43NzYgNS40NjMgNC44MDQgOS4zNDgiLz48cGF0aCBkPSJNOTEuNjYyIDg4LjE5OGMtLjAxMyAzLjIyOS0xLjAwNyA2LjQ3NS0zLjg5NiA5LjAxMS0yLjg4NCAyLjUzNy03Ljg3NCA0LjQ2My0xNi4xMzMgNC40NjNINTVWNzVoMTUuODkyYzcuNDEyIDAgMTIuNjcyIDEuNTAyIDE1Ljk2NiAzLjg1IDMuMjg5IDIuMzYyIDQuNzc2IDUuNDYzIDQuODA0IDkuMzQ4Ii8+PHBhdGggZD0iTTI0NS4xODYgNTUuNzljMy4wOTYtMi4yMzcgNC41OS01LjM4NiA0LjYxMy0xMC4xMjQtLjAxNS0zLjI1LS45NDMtNi4wMzMtMy4yODEtOC4xMTEtMi4zNDYtMi4wNzgtNi4zMy0zLjU1NS0xMi43NTQtMy41NTVIMjIydjI1LjI3NWg4LjA3NmM2Ljk4OC4wMDQgMTEuOTk4LTEuMjQzIDE1LjExLTMuNDg2Ii8+PHBhdGggZD0iTTc4LjE4NiA1NS43OWMzLjA5Ni0yLjIzNyA0LjU5LTUuMzg2IDQuNjEzLTEwLjEyNC0uMDE1LTMuMjUtLjk0My02LjAzMy0zLjI4Mi04LjExMUM3Ny4xNzIgMzUuNDc3IDczLjE4OCAzNCA2Ni43NjQgMzRINTV2MjUuMjc1aDguMDc2YzYuOTg4LjAwNCAxMS45OTgtMS4yNDMgMTUuMTEtMy40ODYiLz48L2c+PC9nPjwvZz48L3N2Zz4K';
var _default = BBC_BLOCKS;
exports.default = _default;