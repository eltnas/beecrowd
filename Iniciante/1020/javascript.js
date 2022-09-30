var input = require('fs').readFileSync('./dev/stdin', 'utf8');
var lines = input.split('\n');

var A = parseInt(lines.shift());
var ano = 0;
var mes = 0;
var dia = 0

// Anos
while(A >= 365){
    ano++;
    A -= 365;
}

// Meses
while(A >= 30){
    mes++;
    A -= 30;
    if(mes >= 12){
        ano += 1;
        mes -= 11;
    }
}

// Dias
while(A >= 1){
    dia++;
    A -= 1;
    if(dia > 30){
        dia -= 30;
        mes += 1;
        if(mes > 12){
            ano += 1;
        }
    }
}

console.log(ano, " ano(s)");
console.log(mes, " mes(es)");
console.log(dia, " dia(s)");