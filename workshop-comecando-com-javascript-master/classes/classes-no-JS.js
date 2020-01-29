class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
    rg;

    setRg(rg) {
        this.rg = rg;
    }
    getRg() {
        return this.rg;
    }
    imprime() {
        console.log(this);
    }
}

p1 = new Pessoa("Atanes", 49);
p1.setRg("12.678.900-01")
p1.imprime();
p2 = new Pessoa("Márcia", 49);
p2.imprime();

class Carro {
    Marca;
    Modelo;
    constructor() {
        this.Marca = "Sem marca";
        this.Modelo = "Sem modelo";
    }

    DisplayMarca() {
        console.log(this.Marca);
    }
    DisplayModelo() {
        console.log(this.Modelo);
    }
    SetMarca(_marca) {
        this.Marca = _marca;
    }
    SetModelo(_modelo) {
        this.Modelo = _modelo;
    }

}
var carro = new Carro();
carro.SetMarca("Volkswagen");
carro.SetModelo("Gol GIII");
carro.DisplayMarca();
carro.DisplayModelo();

var carro2 = new Carro();
carro2.SetMarca("Mercedes-Benz");
carro2.DisplayMarca();
carro2.DisplayModelo();
