const exec = (fn, a, b) => fn(a,b)
const somar = (a,b) => console.log(a+b)
const sub = (a,b) => console.log(a-b)
const subitrair = (a,b) => a-b

exec(somar, 56, 38)
exec(sub, 182, 27)

const res = subitrair(10,5)
console.log(res)

console.log(subitrair(20,10))

//Call Back, a função é chamada novamente toda vez que um evento ocorrer

console.log('inicio')
setInterval(()=>console.log('Exec...'), 3000) //Chama a função a cada 3s 
console.log('fim')