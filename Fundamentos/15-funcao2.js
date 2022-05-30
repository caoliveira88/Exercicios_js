// Armazenando uma funcao em uma variavel
const imprimirSoma = function (a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3)

// Armazenando uma arrow function em uma variavel

const soma = (a, b) => {
    return a + b
}

console.log(soma(2, 3)) //Saída - 5

// retorno implícito
const subtracao = (a, b) => a - b //Saída - 5
console.log(subtracao(2, 3)) //Saída -1

const imprimir2 = a => console.log(a)
imprimir2("Legal!!") //Saída Legal!!
