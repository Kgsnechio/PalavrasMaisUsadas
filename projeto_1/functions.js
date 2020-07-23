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
            return simbolos.reduce((acc, simbolo) => {
                return acc.split(simbolo).join('')
            }, el)
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

function ordenarPorAtribNumerico(attr, ordem = 'asc') {
    return function (array) {
        const asc = (obj1, obj2) => obj1[attr] - obj2[attr]
        const desc = (obj1, obj2) => obj2[attr] - obj1[attr]
        return array.sort(ordem === 'asc' ? asc : desc)
    }
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
    agruparElementos,
    ordenarPorAtribNumerico
}

// function teste1 () {
//     console.log('teste 1...')
// }

// function teste2(){
//     console.log(`teste 2...`)
// }