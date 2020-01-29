/*
O método map(), do objeto Array, nos permite percorrer um vetor e obter um novo array cujos 
itens são o resultado de uma função de callback que recebe como parâmetro cada item original.
Por exemplo, podemos partir de um array de valores numéricos e obter um novo contendo o quadrado 
de cada item original.
Aqui é importante destacar que o método map() não modifica o array original, ele retorna um 
novo array com os itens resultantes do mapeamento. 
*/
var numeros = [1, 2, 3, 4, 5]; //vetor original
  
var quadrados = numeros.map(function(item){
   return Math.pow(item, 2); //retorna o item original elevado ao quadrado
});
  
console.log(quadrados); //imprime 1,4,9,16,25

/*
No exemplo a seguir mapeamos um array de objetos e retornamos apenas uma propriedade de cada item:
*/
var vencedores = [
    {
        nome : "Equipe Super",
        pais : "Brasil"
    },
    {
        nome : "Time Maximo",
        pais : "EUA"
    },
    {
        nome : "Mega Grupo",
        pais : "Canadá"
    }
 ];
   
 var podioPorPais = vencedores.map(function(item, indice){
    return item.pais;
 });
   
 console.log(podioPorPais);

/*
Neste próximo exemplo temos um array de produtos com seus respectivos preços de venda e desejamos 
simular a aplicação de um reajuste em todos os preços, mas sem modificar a informação original. 
*/

var produtos = [
    {
        nome : "Smartphone 5' Android",
        preco : 1200
    },
    {
        nome : "Notebook 4GB Windows 10",
        preco : 2100
    },
    {
        nome : "SmartTV 50' LED",
        preco : 8700
    }
 ];
   
 var produtosComReajuste = produtos.map(function(item){
    return {
                nome : item.nome,
                preco : item.preco * 1.15
            }
 });
   
 produtosComReajuste.forEach(function(item){
    console.log(`${item.nome.padEnd(25)} - ${item.preco.toLocaleString("pt-BR",
     { style : "currency", currency : "BRL"})}`);
 });