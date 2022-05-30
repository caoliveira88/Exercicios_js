//Funcao é uma ação, define um bloco de código, na qual tem todas as sequências de execução.

// Funcao sem retorno
function imprimirSoma(a, b) {//Nome da função e paramêtros, nomes das variáveis
    console.log(a + b)
}

imprimirSoma(2, 3)//Saída - 5
imprimirSoma(2)//Saída - NaN
imprimirSoma(2, 10, 3, 4, 5, 6)//Saída - 12 (Soma os dois primeiros números e ignora o restante)
imprimirSoma()//Saída NaN

//Funcao com retorno
function soma(a, b = 0) { // b tem valor padrão 0
    return a + b//retorna o valor em resposta da chamada da função
}

console.log(soma(2, 3))//Chama a função dentro de console.log pq está retornando valor - Saída 5
console.log(soma(2))//Chama a função dentro de console.log pq está retornando valor - Saída 2 pq o parametro é 0, se fosse parametro 1 a saída seria 3


