// setTimeout(function(){
//     console.log('Exec CallBack!')

//     setTimeout(function(){
//         console.log('Exec CallBack!')

//         setTimeout(function(){
//             console.log('Exec CallBack!')
//         },2000)
//     },2000)
// },2000)

function esperar(tempo = 2000) {
    return new Promise(function(resolve){
        setTimeout(function(){
            console.log('Exec Promesa')
            resolve('Vishhh')
        }, tempo)
    })
}

esperar(3000)
.then(esperar)
.then(esperar)
.then(console.log)