/**
 * Escrever um programa em JavaScript, que leia 4 números inteiros 
 * e no final apresente o maior e o menor dos números.
 */

var n1 = 100;
var n2 = 33;
var n3 = 24;
var n4 = 12;

var menor;
var maior;

menor = n1;
maior = n1;

if (n2 < menor) {
    menor = n2;
}
if (n3 < menor) {
    menor = n3;
}
if (n4 < menor) {
    menor = n4;
}

if (n2 > maior) {
    maior = n2;
}
if (n3 > maior) {
    maior = n3;
}
if (n4 > maior) {
    maior = n4;
}

console.log('O maior número é: ', maior);
console.log('O menor número é: ', menor);