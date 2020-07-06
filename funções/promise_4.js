function gerarNumerosEntre(min, max, tempo) {
    if(min > max) {[max, min] = [min, max]}  // Inverte os valores atravez de Destruction

    return new Promise(resolve => {
        setTimeout(function() {        
            const fator = max - min + 1
            const aleatorio = parseInt(Math.random() * fator) + min
            resolve(aleatorio)
        }, tempo) 
    })
}

function gerarVariosNumeros() {
    return Promise.all([
        gerarNumerosEntre(1, 60, 3000),
        gerarNumerosEntre(1, 60, 100),
        gerarNumerosEntre(1, 60, 1000),
        gerarNumerosEntre(1, 60, 500),
        gerarNumerosEntre(1, 60, 2000),
        gerarNumerosEntre(1, 60, 800),
    ])
}

console.time('promise')
gerarVariosNumeros()
    .then(console.log)
    .then(() => {
        console.timeLog('promise')
        console.timeEnd('promise')
    })