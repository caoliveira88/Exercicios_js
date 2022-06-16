// Exemplos de operadores unarios

let num1 = 1
let num2 = 2

//posfixada
num1++ //2
console.log(num1)


//prefixada
--num1 //1
console.log(num1)

console.log(++num1 === num2--) // ++num foi executado antes de passar por num--, dessa forma estava com valor de 2 antes da comparação -  Saida - True
console.log(num1 === num2)