const carrinho = [
    {nome: 'Caneta', qtde: 10, preco: 7.99},
    {nome: 'Impresora', qtde: 0, preco: 649.50},
    {nome: 'Caderno', qtde: 4, preco: 27.10},
    {nome: 'Lapis', qtde: 3, preco: 5.82},
    {nome: 'tesoura', qtde: 1, preco: 19.20}
]

const nomes = item => item.nome

const qtdeMaiorQueZero = item => item.qtde > 0

// const qtdeMaiorIgualQueZero = item => item.qtde >= 0         //Retorna o array completo 
// const qtdeMuitoGrande = item => item.qtde >= 1000            //Retorna o array vazio []
// console.log(carrinho.filter(qtdeMaiorQueZero))

const itens = carrinho
    .filter(qtdeMaiorQueZero)
    .map(nomes)                             //Após o filter é feito o map

console.log(itens.join())

//Meu filter

Array.prototype.meuFilter = function(fn) {
    const novoArray = []
    for(let i = 0; i < this.length; i++){
        if(fn(this[i],i,this)){
            novoArray.push(this[i])
        }
    }
    return novoArray
}

const itens2 = carrinho
    .meuFilter(qtdeMaiorQueZero)
    .map(nomes)                             //Após o filter é feito o map

console.log(itens2.join())