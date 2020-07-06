const num = [2,3,4,6]
const dobro = n => n*2
console.log(num.map(dobro))

 //o metodo map espera receber tres valores como parametros da fn
const calculo = (valor, index, array) => valor + index + array.length 
console.log(num.map(calculo))

const nomes = ['Ana', 'Bia', 'Lia', 'Gui', 'Rafa']
const primeiraLetra = texto => texto[0]
const letras = nomes.map(primeiraLetra)
console.log(nomes, letras.join())
