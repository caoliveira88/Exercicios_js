console.log("a = ", a)
var a = 2
console.log("a =", a)

/*Saída
  a =  undefined
  a = 2*/

// Com var acontece içamento, a variável é jogada pra cima


console.log("a = ", a)
let a = 2
console.log("a =", a)

// Com let não acontece, da erro

/*Hoisting - Significa içamento, uma definição estrita de elevação sugere que as declarações de variáveis e funções são fisicamente movidas para o topo do seu código, mas isso não é realmente o que acontece. Em vez disso, as declarações de variável e função são colocadas na memória durante a fase de compilação, mas permanecem exatamente onde você as digitou no seu código. No exemplo mesmo que chamemos a função em nosso código primeiro, antes que a função seja escrita, o código ainda funciona. Isto ocorre por conta de como a execução de contexto funciona em JavaScript.*/