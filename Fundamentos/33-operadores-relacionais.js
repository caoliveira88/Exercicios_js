// Exemplos de operadores relacionais

console.log('01)', '1' == 1) // igual - Saída true
console.log('02)', '1' === 1) // extritamente igual - Saída false
console.log('03)', '3' != 3) // diferente apenas o valor - Saída false
console.log('04)', '3' !== 3) // extritamente diferente - Saída true

console.log('05)', 3 < 2) // maior que - Saída false
console.log('06)', 3 > 2) // menor que - Saída true
console.log('07)', 3 <= 2) // maior igual - Saída false
console.log('08)', 3 >= 2) // menor igual - Saída true

const d1 = new Date(0)
const d2 = new Date(0)
console.log('09)', d1 === d2) // Saída false
console.log('10)', d1 == d2) // Saída false
console.log('11)', d1.getTime() === d2) // Saída false

console.log('12)', undefined == null) // Saída true
console.log('13)', undefined === null) // Saída false
