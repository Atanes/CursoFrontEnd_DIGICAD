 console.log(dizerOla);

function dizerOi(nome) {
  console.log("Olá " + nome);
}

dizerOi("Alexandre");

var dizerOla = function (nome) {
  console.log("Olá " + nome);
};

dizerOla("Atanes");

var dizerTchau = new Function("nome", "console.log('Tchau ' + nome);");

dizerTchau("Atanes");