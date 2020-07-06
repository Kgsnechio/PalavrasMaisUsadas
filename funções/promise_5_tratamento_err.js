function funcionarOuNao (valor, chanceDeErro){
    return new Promise((resolve,reject) => {
        try{
            if(Math.random() > chanceDeErro){
                resolve(valor)
            }else{
                reject('[ERRO!]')
            }
        }catch(e){
            reject(e)
        }
    })
}

funcionarOuNao('Testanto', 0.5)
    .then(v => `Valor passado é: ${v}`)
    .then(
        v => console.log(v),
        // err => console.log(`Erro Esp.: ${err}`)
    )
    .catch(console.log)
    .then(() => console.log('Fim'))