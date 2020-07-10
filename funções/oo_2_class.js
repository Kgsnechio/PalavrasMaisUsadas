class Produto {

    constructor(nome, preco, desc = 0.15){
        this._nome = nome
        this._preco = preco
        this.desc = desc
    }

    get nome() {                               // nome passa a ser um metodo(que é uma função dentro da classe)
        return `Produto: ${this._nome}`
    }

    set nome(novoNome){
        this._nome = novoNome.toUpperCase()
    }

    get preco(){
        return this._preco
    }

    set preco(novoPreco){
        if(novoPreco >= 0){
            this._preco = novoPreco
        }
    }

    get precoFinal() {                          // GET transforma a função em atributo
        return this.preco * (1 - this.desc)
    }

}

const prod_1 = new Produto('Caneta', 4.50)      // Quando usamos a palavra NEW criamos uma no instancia
const prod_2 = new Produto('Caderno', 17.90)

prod_1.nome = 'Canetinha'
prod_1.preco = -20
console.log(prod_1.nome)
console.log(prod_1.preco)
console.log(prod_1.precoFinal)

console.log(prod_2.nome)
console.log(prod_2.preco)
console.log(prod_2.precoFinal)