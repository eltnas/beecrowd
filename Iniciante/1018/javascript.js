var input = require('fs').readFileSync('./dev/stdin', 'utf8');
var lines = input.split('\n');

let A = parseFloat(lines.shift());
let nota = 0;
let aux = A;

console.log(A);
// Notas de 100
while (aux >= 100){
    nota++;
    aux = aux - 100;
}
console.log(nota + " nota(s) de R$ 100,00");

nota = 0;
while (aux >= 50){
    nota++;
    aux = aux - 50;
}
console.log(nota + " nota(s) de R$ 50,00");

nota = 0;
while (aux >= 20){
    nota++;
    aux = aux - 20;
}
console.log(nota + " nota(s) de R$ 20,00");

nota = 0;
while (aux >= 10){
    nota++;
    aux = aux - 10;
}
console.log(nota + " nota(s) de R$ 10,00");

nota = 0;
while (aux >= 5){
    nota++;
    aux = aux - 5;
}
console.log(nota + " nota(s) de R$ 5,00");
nota = 0;
while (aux >= 2){
    nota++;
    aux = aux - 2;
}
console.log(nota + " nota(s) de R$ 2,00");
nota = 0;
while (aux >= 1){
    nota++;
    aux = aux - 1;
}
console.log(nota + " nota(s) de R$ 1,00");