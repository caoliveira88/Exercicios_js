const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3])//Saída - 7.7 9.2
console.log(valores[4])//Saída - undefined

valores[4] = 10
console.log(valores)//Saída - [ 7.7, 8.9, 6.3, 9.2, 10 ] - Adiciona valor ao array
console.log(valores.length)//Saída 5 - Quantos elementos existem no array

valores.push({id: 3}, false, null, "teste")//Saída { id: 3 },false, null,'teste' - Acrescenta outros tipos no array
console.log(valores)

console.log(valores.pop())
delete valores[0]
console.log(valores)

console.log(typeof valores)//Saída - object - Em JS array é um objeto