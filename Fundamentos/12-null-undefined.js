//referencia que aponta para espaço de memória

let valor //não inicializada -  Saída - undefined
console.log(valor)

valor = null //ausência de valor - não aponta para nenhum local na memória
//console.log(valor.toString()) - Saída Erro!

const produto = {}
console.log(produto.preco)//Saída undefined
console.log(produto.preco)//Saída undefined

produto.preco = 3.50
console.log(produto)// Saída { preco: 3.5 }

produto.preco = undefined// envite atribuir undefined
console.log(!!produto.preco)// Saída false
console.log(produto)//Saída { preco: undefined }

produto.preco = null // sem preço
console.log(!!produto.preco)// Saída false
console.log(produto)//Saída { preco: null }