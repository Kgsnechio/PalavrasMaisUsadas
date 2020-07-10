// Função Construtora

function Produto(nome, preco, desconto = 0.15){
    this.nome = nome            // This acessa os valores interno e os instancia
    this.preco = preco
    this._desconto = desconto
    this.precoFinal = function() {
        return this.preco * (1 - this._desconto)
    }
}

Produto.prototype.log = function(){
    return console.log(`Nome: ${this.nome}, preço: ${this.preco}`)
}
Object.defineProperty(Produto.prototype, 'desconto', {
    get: function(){
        return this._desconto
    },
    set: function(novoDesconto){
        if(novoDesconto >= 0 && novoDesconto < 1){
            return this._desconto = novoDesconto
        }
    }
})
Object.defineProperty(Produto.prototype, 'descString', {
    get: function(){
        return `com ${this._desconto * 100}% de desonto`
    }
})
const prod_1 = new Produto('Caneta', 4.50)      // Quando usamos a palavra NEW criamos uma no instancia
const prod_2 = new Produto('Caderno', 17.90)

// console.log(prod_1.nome)
// console.log(prod_1.preco)
prod_1.log()

prod_1.desconto = 0.7
console.log(prod_1.precoFinal())
console.log(prod_1.descString)

console.log(prod_2.nome)
console.log(prod_2.preco)
console.log(prod_2.precoFinal())

