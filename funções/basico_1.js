let a = 4
console.log(a)

//function declaretion => declera a função

function bomdia() {
    console.log('Bom Dia!')
}

bomdia()

//Expresion Function => expressão de função, passa como um valor dentro de uma variavel

const boatarde = function(){
    console.log('Boa tarde!')
}

boatarde()

function somar(a, b = 0){  // por definição, caso o parametro B não seja informado, ele recebera 0
    return a + b
}

var resultado = somar(3,4)
console.log(resultado)

resultado = somar(3,4,5,6,7)
console.log(resultado)

resultado = somar(3)
console.log(resultado)