// A partir da notacao ponto é possível acessar membros

// Arredondamento - floor para baixo/ ceil para cima - Saída 7
console.log(Math.ceil(6.1)) //Usando a notacao ponto para acessar a funcao definida dentro desse objto

const obj1 = {} //Criar dinamicamente um atributo
obj1.nome = 'Bola'
console.log(obj1.nome) // Saída - Bola

function Obj(nome) {
    this.nome = nome // Recebe atributo nome por parametro - criar funcao publica
}

const obj2 = new Obj("cadeira")
const obj3 = new Obj("mesa")
console.log(obj2.nome) // Saída - cadeira
console.log(obj3.nome) //Saída - mesa
