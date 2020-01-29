var obj = {
  nome: "Jon",
  sobrenome: "Snow",
  idade: 16,
  apresentar: apresentacao
};

function apresentacao() {
  console.log("Olá, eu sou " + this.nome + ' ' + this.sobrenome + '.');
}

console.log(obj.sobrenome);

obj.apresentar();

var carro = {
  marca: "Ford",
  modelo: "Ka",
  getDetalhes: function () {
    return this.marca + ' - ' + this.modelo;
  }
}

console.log(carro.getDetalhes());

carro.modelo = "Novo Ka";
console.log(carro.getDetalhes());


