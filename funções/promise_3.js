function gerarNumerosEntre(min, max) {
    if(min > max) {
        [max, min] = [min, max]  // Inverte os valores atravez de Destruction
    }

    return new Promise(resolve => {
        const fator = max - min + 1
        const aleatorio = parseInt(Math.random() * fator) + min
        resolve(aleatorio)
    })
}

gerarNumerosEntre(1,60)
    .then(n => n*10)
    .then(nX10 => `O número gerado foi ${nX10}`)
    .then(console.log)