function gerarNumerosEntre(min, max, numerosProibidos) {
    if(min > max) {[max, min] = [min, max]}  // Inverte os valores atravez de Destruction
    
    return new Promise((resolve, reject) => {
        const fator = max - min + 1
        const aleatorio = parseInt(Math.random() * fator) + min
        if(numerosProibidos.includes(aleatorio)){
            reject('Número repetido')
        }else{
            resolve(aleatorio)
        }
    })
}

// gerarNumerosEntre(1, 5, [1,2,4])
//     .then(console.log)
//     .catch(console.log)

async function gerarMega(qtdeNumeros, tentativa = 1){
    try{
        const numeros = []
        for(let _ of Array(qtdeNumeros).fill()){
            numeros.push(await gerarNumerosEntre(1, 60, numeros))
        }
    
    return numeros    
    } catch(e){
        if(tentativa > 10){
            throw 'Deu ruim!'
        }else{
            return gerarMega(qtdeNumeros, tentativa + 1)
        }
    }

}

gerarMega(6)
.then(console.log)
.catch(console.log)