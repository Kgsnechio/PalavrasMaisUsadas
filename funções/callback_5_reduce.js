const carrinho = [
    {nome: 'Caneta', qtde: 10, preco: 7.99},
    {nome: 'Impresora', qtde: 0, preco: 649.50},
    {nome: 'Caderno', qtde: 4, preco: 27.10},
    {nome: 'Lapis', qtde: 3, preco: 5.82},
    {nome: 'tesoura', qtde: 1, preco: 19.20}
]


const mut = item => item.qtde*item.preco
const soma = (a,b) => a+b

const total = carrinho
    .map(mut)
    .reduce(soma)

console.log(total)