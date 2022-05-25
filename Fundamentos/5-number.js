const peso1 = 1.0
const peso2 = Number("2.0")

console.log(peso1, peso2)
console.log(Number.isInteger(peso1))
console.log(Number.isInteger(peso2))

/*Saída
1 2
true
true*/

const peso3 = 1.1
const peso4 = Number("2.2")

console.log(peso3, peso4)
console.log(Number.isInteger(peso3))
console.log(Number.isInteger(peso4))

/*Saída
1.1 2.2
false
false*/

const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 * peso2)

console.log(media)

console.log(media.toFixed(2))//tirar casas decimais - função toFixed
console.log(media.toString(2))//função converte em binario
console.log(typeof media)//tipo 
console.log(typeof Number)// N maiúsculo é função

/*Saída
11.8065
11.81
1011.110011100111011011001000101101000011100101011
number
function*/