// Exemplo operador ternário

const resultado = nota => nota >=7 ? 'Aprovado' : 'Reprovado' // Operador ternario é composto por 3 partes Uma expressao/interrogacao/resultado se true/resultado se false

console.log(resultado(7.1)) // Saída - Aprovado
console.log(resultado(6.7)) // Saída - Reprovado

const status = nota >= 7 ? 'Aprovado' : 'Reprovado' // Pode armazenar em uma constante