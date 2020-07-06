const fs = require('fs') // file system é uma biblioteca node usada para ler arquivos
const path = require('path') //biblioteca node

function lerArquivo(caminho){
    return new Promise(resolve => {
        fs.readFile(caminho, function(_, conteudo) {
            resolve(conteudo.toString())
        })
    })
}

const caminho = path.join(__dirname, 'dados.txt') 

lerArquivo(caminho)
    .then(conteudo => conteudo.split('\n'))
    .then(linhas => linhas.join(','))
    .then(txt => `O valor é: ${txt}`)
    .then(txt => console.log(txt))

