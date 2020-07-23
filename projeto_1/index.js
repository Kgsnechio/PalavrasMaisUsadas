const path = require('path')
const fn = require('./functions')

const caminho = path.join(__dirname, '..', 'dados', 'legendas')  // .join concatena  // __dirname é o url do index.js

const simbolos = [
    '.', '?', '-', ',', '"', '♪',
     '_', '<i>', '</i>', '\r', '[', ']',
     '(', ')'
]

fn.lerDiretorio(caminho)
    .then(fn.elementosTerminadosCom('.srt'))   //filtra os arquivos validos
    .then(fn.lerArquivos)
    .then(fn.mesclarElementos)
    .then(fn.separarTextoPor('\n'))
    .then(fn.removerSeVazio)
    .then(fn.removerSeIncluir('-->'))
    .then(fn.removerSeApenasNumero)
    .then(fn.removerSimbolos(simbolos))
    .then(fn.mesclarElementos)
    .then(fn.separarTextoPor(' '))
    .then(fn.removerSeVazio)
    .then(fn.removerSeApenasNumero)
    .then(fn.agruparElementos)
    .then(console.log)


//fn.teste1()
// fn.teste2()