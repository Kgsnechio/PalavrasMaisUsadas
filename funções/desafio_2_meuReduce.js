//Meu Reduce

Array.prototype.meuReduce = function(fn, inicial){
    let acc = inicial
    for(let i = 0; i < this.length; i++){
        if(!acc  && i === 0){
            acc=this[i]
        }else{ 
            acc = fn(acc, this[i], i, this)
        }
    }

    return acc
}

const soma = (a,b) => a+b
const vetor = [3,5,6]

console.log(vetor.meuReduce(soma, 10))