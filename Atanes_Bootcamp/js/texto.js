var texto = ' Alexandre Atanes de Jesus ';

console.log(texto.length);
console.log(texto.substring(0, 9));
console.log(texto.substr(20, 5));
console.log(texto.indexOf('d'));
console.log(texto.lastIndexOf('d'));
console.log(texto.trim());
console.log(texto.toUpperCase());
console.log(texto.trim().toLowerCase());
var textoSemEspaco = '';

for (var i = 0; i < texto.length; i++){
    
    if (texto.charAt(i) !== ' ') {
        textoSemEspaco += texto.charAt(i);
    }
}

console.log(textoSemEspaco);
