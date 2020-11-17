/**
 * Escrever um programa em JavaScript, que leia 4 números inteiros 
 * e no final apresente o maior e o menor dos números.
 */

var vetorNumeros = [12, 33, 4, 110, 55, 80, 1, 7, 23, 11, 100, 101, 35, 9, 111];

var menor;
var maior;

maior = vetorNumeros[0];
menor = vetorNumeros[0];

for (var i = 0; i < vetorNumeros.length; i++) {
    if (maior < vetorNumeros[i]) {
        maior = vetorNumeros[i];
    }
    if (menor > vetorNumeros[i]) {
        menor = vetorNumeros[i];
    }
}


console.log('O maior número é: ', maior);
console.log('O menor número é: ', menor);