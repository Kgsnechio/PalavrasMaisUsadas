const fs = require('fs')
const path = require('path')

function lerDiretorio(caminho){
    return new Promise((resolve, reject)=> {
        try{
            let arquivos = fs.readdirSync(caminho)   //read dir Sync le o diretorio e retorna o nome dos arquivos
            // console.log(Array.isArray(arquivos))  //retorna true ou false se o objeto é uma array ou não
            // console.log(arquivos)
            arquivos = arquivos.map(arquivo => path.join(caminho, arquivo))
            resolve(arquivos)
        }catch(err){
            reject(err)
        }
    })
}

function lerArquivo(caminho){
    return new Promise((resolve, reject) => {
        try{
           const conteudo = fs.readFileSync(caminho)
           resolve(conteudo.toString())
        }catch(err){
            reject(err)
        }
    })
}

function lerArquivos(caminhos){
    return Promise.all(caminhos.map(caminho => lerArquivo(caminho)))
}

function elementosTerminadosCom(padrao) {
    return function(array){
        return array.filter(el => el.endsWith(padrao))    //filtra os caminhos... // .endsWith(final da string)
    }
}

function removerSeVazio(array) {
    return array.filter(el => el.trim())
}

function removerSeIncluir(padraoTextual){
    return function(array){
        return array.filter(el => !el.includes(padraoTextual))
    }
}

function removerSeApenasNumero(array){
    return array.filter(el => {    
        const num = parseInt(el.trim())
        return num !== num
    })
}

function removerSimbolos(simbolos){
    return function(array) {
        return array.map(el => {
            let textoSemSimbolos = el
            simbolos.forEach(simbolo => {
                textoSemSimbolos = textoSemSimbolos.split(simbolo).join('')
            })
            return textoSemSimbolos
        })
    }
}

function mesclarElementos (conteudos) {
    return conteudos.join(' ')
}

function separarTextoPor(simbolo){
    return function(texto){
        return texto.split(simbolo)
    }
}

function agruparElementos(palavras) {
    return Object.values(palavras.reduce((acc, palavra) => {
        const el = palavra.toLowerCase()
        const qtde = acc[el] ? acc[el].qtde + 1 : 1
        acc[el] = { elemento: el, qtde }
        return acc
    }, {}))
}

module.exports = {
    lerDiretorio,
    lerArquivo,
    lerArquivos,
    elementosTerminadosCom,
    removerSeIncluir,
    removerSeVazio,
    removerSeApenasNumero,
    removerSimbolos,
    mesclarElementos,
    separarTextoPor,
    agruparElementos
}

// function teste1 () {
//     console.log('teste 1...')
// }

// function teste2(){
//     console.log(`teste 2...`)
// }