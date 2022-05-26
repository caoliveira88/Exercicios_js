let isAtivo = false
console.log(isAtivo)//Saída - false

isAtivo = true
console.log(isAtivo)//Saída - true

isAtivo = 1
console.log(!!isAtivo)//Saída - true

isAtivo = 1
console.log(!isAtivo)//Saída - false

isAtivo = 1
console.log(!true)//Saída - false

isAtivo = 1
console.log(!false)//Saída - true

isAtivo = 1
console.log(!!true)//Saída - true

isAtivo = 1
console.log(!!false)//Saída - false

console.log("os verdadeiros...")
console.log(!!3)
console.log(!!-1)
console.log(!!" ")
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))

console.log("os falsos...")
console.log(!!0)
console.log(!!" ")
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log("pra finalizar...")
console.log(!!(" " || null || 0 || "opa"))//true

let nome = "Camila"
console.log(nome || "Desconhecido")



