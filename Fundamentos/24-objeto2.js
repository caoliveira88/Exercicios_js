console.log(typeof Object) // Saída - function
console.log(typeof new Object) //Instanciando uma funcao, pode passar parenteses ou omitir, o resultado será o mesmo ex:console.log(typeof new Object()) Saída - object

const Cliente = function() {}
console.log(typeof Cliente) // Saída - function
console.log(typeof new Cliente) // Saída - object

class Produto {} //ES 2015 (ES6) - Criar instancia apartir de uma classe
console.log(typeof Produto) // Saída - function
console.log(typeof new Produto()) // Saída - object