var input = require('fs').readFileSync('./dev/stdin', 'utf8');
var lines = input.split('\n');

var item1 = lines.shift().split(" ");
var item2 = lines.shift().split(" ");

var total = (item1[1] * item1[2]) + (item2[1] * item2[2]);

console.log("VALOR A PAGAR: R$ " + total.toFixed(2));
