// Novo recurso do ES2015

const pessoa = { //objeto pessoa
    nome: "Camila",
    idade: "34",
    endereco: {
        logradouro: "Rua ABC",
        numero: "1000"
    }
}

const { nome, idade } = pessoa //tira de dentro do objeto pessoa os atributos nome e idade
console.log(nome, idade) // Saída -  Camila 34

const { nome: n, idade: i } = pessoa // criando variável
console.log(n, i) // Saída -  Camila 34

const { sobrenome, bemHumorada = true } = pessoa 
console.log(sobrenome, bemHumorada) // Saída - undefined true

const { endereco: { logradouro, numero, cep } } = pessoa
console.log(logradouro, numero, cep) // Saída - Rua ABC 1000 undefined - cep não existe
