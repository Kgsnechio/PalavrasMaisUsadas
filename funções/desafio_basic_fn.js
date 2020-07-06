// criar funçõe Somar(2)(3)(4) 

function somar(x = 0){
    return function (y = 0){
        return function (z = 0){
            return console.log(x+y+z)
        }
    }
}

somar(2)(3)(4)

// Calcular(2)(4)(fn)

const ad = function (a, b){
    return console.log(a + b)
}

const sub = function(a, b){
    return console.log(a - b)
}

const mut = function(a, b){
    return console.log(a * b)
}

const div = function(a, b){
    return console.log(a / b)
}

function calcular (a = 0){
    return function (b = 0){
        return function (fn){
            if(typeof fn === 'function'){
                fn(a,b)
            }
        }
    }
}

calcular(2)(3)(ad)
calcular(2)(3)(sub)
calcular(2)(3)(mut)
calcular(2)(3)(div)