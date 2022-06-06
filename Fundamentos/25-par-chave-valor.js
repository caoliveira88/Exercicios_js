//par chave/valor
const saudacao = "Opa" // contexto léxico 1

function exec() { // foi definido mesma variável saudacao, mas será procurada dentro do contexto mais restrito, o 2, se nao encontrada procuto um contexto maior.
    const saudacao = "Falaaa" // contexto léxico 2
    return saudacao
}

// Objetos sao grupos aninhados de pares nome-chave/valor
const cliente = {
    nome: 'Camila',
    idade: 34,
    peso: 55,
    endereco: {
        logradouro: "Rua: Muito legal",
        numero: "123"
    }
}

console.log(saudacao) //Saída - Opa
console.log(exec()) // Saída - Falaaa
console.log(cliente) 
/* Saída
{
  nome: 'Camila',
  idade: 34,
  peso: 55,
  endereco: { logradouro: 'Rua: Muito legal', numero: '123' }
}*/