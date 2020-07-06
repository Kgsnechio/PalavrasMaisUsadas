const carrinho = [
    {nome: 'Caneta', qtde: 10, preco: 7.99, fragil: true},
    {nome: 'Impresora', qtde: 1, preco: 649.50, fragil: true},
    {nome: 'Caderno', qtde: 4, preco: 27.10, fragil: false},
    {nome: 'Lapis', qtde: 3, preco: 5.82, fragil: false},
    {nome: 'tesoura', qtde: 1, preco: 19.20, fragil: true}
]

console.log(carrinho.length)

const mut = item => item.qtde * item.preco 



const media = carrinho
    .filter(item => item.fragil)
    .map(item => {
        return{
            qtde:item.qtde, 
            preco:item.qtde * item.preco
        }
    })
    .reduce((acc, el)=>{
        const newQtde =  acc.qtde + el.qtde
        const newTotal = acc.total + el.preco
        return{
        qtde: newQtde,
        total: newTotal,
        media: newTotal / newQtde
        }
    }, {qtde: 0, total:0, media:0})

console.log(media)