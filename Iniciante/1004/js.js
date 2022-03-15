/***
 * Leia dois valores inteiros. A seguir, calcule o produto entre
 * estes dois valores e atribua esta operação à variável PROD.
 * A seguir mostre a variável PROD com mensagem correspondente.
 ***/

var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

var A = parseInt(lines.shift());
var B = parseInt(lines.shift());
var prod = A * B;

console.log("PROD = " + prod);
