//ARROW FUNCTION
const felizNatal = () => console.log('Feliz Natal!')
felizNatal()


const saldacao = nome => `Olá, ${nome}!!!`
console.log(saldacao('Mundo'))
console.log(saldacao('André'))


const somar = (a, b) => a + b
const dobro = numero => numero*2
console.log(somar(dobro(5),8))


const adicao = array => {
    let total = 0
    for(let n of array){
        total += n
    }
    return total 
}
console.log(adicao([1,2,3,4,5,6,7,8,9,10]))


const adicaoDeParametros = (...numeros) => {
    console.log(Array.isArray(numeros))
    let total = 0
    for(let n of numeros){
        total += n
    }
    return total 
}
console.log(adicaoDeParametros(1,2,3))
console.log(adicaoDeParametros(1,2,3,4,5))
console.log(adicaoDeParametros(8,9,10,11,12,13,14))

// desafio
const potencia = base => exp => Math.pow(base, exp)
var bit8 = potencia(2)(8)
console.log(bit8)


// THIS
Array.prototype.ultimo = function() {
    console.log(this[this.length - 1])
}

Array.prototype.primeiro = () => {   //na Arrow Function o THIS não funciona
    console.log(this[0])
}

const numeros = [1,2,3,4]
numeros.ultimo()
numeros.primeiro()
