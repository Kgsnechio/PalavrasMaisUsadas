//pasando uma função como parametro

function bomdia(){
    console.log('Bom Dia!!!')
}

function boatarde(){
    console.log('Boa Tarde!!!')
}

function executar(fn){
    if(typeof fn === 'function'){  //analisa se o valor passado no parametro é uma função
        fn()
    }
}

executar(3)
executar(boatarde)
executar(bomdia)

//retornando uma função

function potencia(base){
    return function pot(exp){
        return Math.pow(base, exp)
    }
}

var bit8 = potencia(2)(8)
console.log(bit8)