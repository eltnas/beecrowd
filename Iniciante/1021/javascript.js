var input = require('fs').readFileSync('./dev/stdin', 'utf8');
var lines = input.split('\n');

var A = parseFloat(lines.shift());
var mon = 0;

function countMoney(type, value){
    mon = 0;
    while(A >= value){
        mon++;
        A -= value;
    }
    coin = Number.parseFloat(value);
    console.log("%i %s(s) de R$ %s",mon, type, coin.toFixed(2));
}

// Notas de R$ 100,00
countMoney("nota", 100);

// Notas de R$ 50,00
countMoney("nota", 50);

// Notas de R$ 20,00
countMoney("nota", 20);

// Notas de R$ 10,00
countMoney("nota", 10);

// Notas de R$ 5,00
countMoney("nota", 5);

// Notas de R$ 2,00
countMoney("nota", 2);

console.log("MOEDAS:");
// Notas de R$ 1,00
countMoney("moeda", 1);

// Notas de R$ 0,50
countMoney("moeda", 0.5);

// Notas de R$ 0,25
countMoney("moeda", 0.25);

// Notas de R$ 0,10
countMoney("moeda", 0.1);

// Notas de R$ 0,05
countMoney("moeda", 0.05);

// Notas de R$ 0,01
countMoney("moeda", 0.01);