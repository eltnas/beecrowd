var input = require('fs').readFileSync('./dev/stdin', 'utf8');
var lines = input.split('\n');

var funcionario = parseInt(lines.shift());
var salario = parseFloat(lines.shift());
var vendas = parseFloat(lines.shift());

var salarioTotal = (vendas * 15 / 100) + salario;
console.log("TOTAL = R$ " + salarioTotal.toFixed(2));