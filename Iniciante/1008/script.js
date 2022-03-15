var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var funcionario = parseInt(lines.shift());
var hora = parseInt(lines.shift());
var valorHora = parseFloat(lines.shift());

var salario = valorHora * hora;
console.log("NUMBER = " + funcionario);
console.log("SALARY = U$ " + salario.toFixed(2)); 