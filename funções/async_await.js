function esperar(tempo = 2000) {
    return new Promise(function(resolve){
        setTimeout(() => resolve(), tempo)
    })
}

// esperar(3000)
// .then(() => console.log('Exec Promesa 1...'))
// .then(esperar())
// .then(() => console.log('Exec Promesa 2...'))
// .then(esperar())
// .then(() => console.log('Exec Promesa 3...'))

function pegarValor(){
    return new Promise(resolve => {
        setTimeout(() => resolve(10), 5000)
    })
}

async function executar(){
    let valor = await pegarValor()
    await esperar(1500)
    console.log(`Exec Promesa ${valor}...`)
    await esperar(1500)
    console.log(`Exec Promesa ${valor + 1}...`)
    await esperar(1500)
    console.log(`Exec Promesa ${valor + 2}...`)

    return valor + 3
}

// executar().then(console.log)

async function executarDeVerdade () {
    let valor = await executar()
    console.log(valor)
}

executarDeVerdade()