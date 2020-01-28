var x = 10;
var y = 15;
console.log("Resultado: " + (x + y));

var textos = ['Atanes', '26',11, 'Marcos'];

console.log(textos[0]);

let meuTexto = "Alexandre Atanes de Jesus";
let meuNumero = 52;

console.log(typeof meuTexto + ", " + meuTexto);

console.log(typeof 50 + ", " + meuNumero);

switch(meuNumero){
    case 50:
        console.log("Número igual a 50");
        break;
    case 51:
        console.log("Número igual a 51");
        break;
    case 49:
        console.log("Número igual a 49");
        break;
    default:
        console.log("Outro número");
}

Nomes = new Array(3); //aqui o array foi criado
Nomes[0] = "José"; //daqui em diante, foi atribuído valores
Nomes[1] = "Maria";
Nomes[2] = "João";

console.log(Nomes);

Nomes.pop(); //Retira o ultimo elemento do vetor
console.log(Nomes);

Nomes.shift(); //Retira o primeiro elemento do vetor
console.log(Nomes);

Nomes.push("Carlos"); //Insere um elemento no final do vetor
console.log(Nomes);

Nomes.unshift("Manoel"); //Insere um elemento no inicio do vetor
console.log(Nomes);

Nome = "José Francisco Silva";
Partes = Nome.split(" ");
console.log(Partes);

let stringGeral = "Bamos verificar se podemos mudar a string diretamente";
stringGeral[0] = 'V';
console.log(stringGeral);

novaStringGeral = 'V' + stringGeral.substring(1);
console.log(novaStringGeral);

stringGeral = "Novo texto";
console.log(stringGeral);

let numero = 5;

resultado = numero > 0 ? "Positivo" : "Negativo";
console.log(resultado);

resultado = numero > 0 ? "Positivo" : numero >= -10 ? "Negativo maior que -10" : "Negativo menor -10";
console.log(resultado);
