const primeiroElemento = array => array[0]
const letraMinuscula = letra => letra.toLowerCase()

new Promise(function(resolve){
    resolve(['Ana','Bia','Carlos'])     //Função resolve passa o valor, ou objeto
})
    .then(primeiroElemento)    //Dentro do metodo then passamos as funções, uma na sequencia da outra, 
    .then(primeiroElemento)     //e o valor é repassado de uma função a outra
    .then(letraMinuscula)
    .then(console.log)         //imprime direto o resutado

    // tbm podemos passar a new Promise como um valor para uma const e chamar o metodo then --

const p = new Promise(function(resolve){
    resolve(5)
})

p.then(valor => valor*2)
 .then(console.log)