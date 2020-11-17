function retornaMenor(a, b, c, d) {
    menor = a;

    if (b < menor) {
        menor = b;
    }
    if (c < menor) {
        menor = c;
    }
    if (d < menor) {
        menor = d;
    }
    return menor;
}

function retornaMaior(a, b, c, d) {
    maior = a;

    if (b > maior) {
        maior = b;
    }
    if (c > maior) {
        maior = c;
    }
    if (d > maior) {
        maior = d;
    }
    return maior;
}

var maior = retornaMaior(17, 13, 11, 26);
var menor = retornaMenor(555, 11, 3, 10);

console.log('O maior numero é: ', maior);
console.log('O menor numero é: ', menor);