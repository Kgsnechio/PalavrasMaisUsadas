const fs = require('fs') // file system é uma biblioteca node usada para ler arquivos
const path = require('path') //biblioteca node

const caminho = path.join(__dirname, 'dados.txt')  //diretório usado nesse momento + arquivo
// console.log(__dirname) 

function exibirContudo (_, conteudo){
    console.log(conteudo.toString())
}

// console.log('Inicio...')                 // essa parte usa a função callback, ele continua rodando o codigo e quando termina
fs.readFile(caminho, {}, exibirContudo)     // de ler o arquivo retorna a função...
fs.readFile(caminho, (err, conteudo) => console.log(conteudo.toString()))
// console.log('Fim...')

// console.log('Inicio Sync...')     // nessa parte não tem callback, ele aguarda ler o arquivo e depois continua o codigo
const conteudo = fs.readFileSync(caminho)
console.log(conteudo.toString())
// console.log('Fim Sync...')