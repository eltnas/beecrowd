var input = require("fs").readFileSync("stdin", "utf8");
var valores = input.split("\n");
var A = parseFloat(valores.shift());
var B = parseFloat(valores.shift());
var media = (A * 3.5 + B * 7.5) / (3.5 + 7.5);

console.log("MEDIA = " + media.toFixed(5));