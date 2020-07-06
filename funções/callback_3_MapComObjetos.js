const carrinho = [
    {nome: 'Caneta', qtde: 10, preco: 7.99},
    {nome: 'Impresora', qtde: 0, preco: 649.50},
    {nome: 'Caderno', qtde: 4, preco: 27.10},
    {nome: 'Lapis', qtde: 3, preco: 5.82},
    {nome: 'tesoura', qtde: 1, preco: 19.20}
]

const itensnomes = item => item.nome
const valores = item => item.qtde * item.preco
console.log(carrinho.map(itensnomes))
console.log(carrinho.map(valores))

//Criando meu map

Array.prototype.meuMap = function (fn) {
    const novoArray = []
    for(let i = 0; i < this.length; i++){
        novoArray.push(fn(this[i], i, this))
    }
    return novoArray
}

console.log(carrinho.meuMap(itensnomes))
console.log(carrinho.meuMap(valores))