// Função Construtora

function Produto(nome, preco, desconto = 0.15){
    this.nome = nome            // This acessa os valores interno e os instancia
    this.preco = preco
    this.desconto = desconto
    this.precoFinal = function() {
        return this.preco * (1 - this.desconto)
    }
}

const prod_1 = new Produto('Caneta', 4.50)      // Quando usamos a palavra NEW criamos uma no instancia
const prod_2 = new Produto('Caderno', 17.90)

console.log(prod_1.nome)
console.log(prod_1.preco)
console.log(prod_1.precoFinal())

console.log(prod_2.nome)
console.log(prod_2.preco)
console.log(prod_2.precoFinal())