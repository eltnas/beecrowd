/**A fórmula para calcular a área de uma circunferência é:
 *  area = π . raio2. Considerando para este problema que
 * π = 3.14159:
 * 
 * - Efetue o cálculo da área, elevando o valor de raio ao
 * quadrado e multiplicando por π.**/

var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

var n = 3.14159;
var raio = parseFloat(lines.shift());
var area = n * (raio * raio);

console.log("A=" + area.toFixed(4));