function rand({ min = 0, max = 1000}) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

//parametros padroes
const obj = { max: 50, min: 40}
console.log(rand(obj))//Numeros randomicos entre 40 e 50
console.log(rand({ min: 955 }))//Numeros randomicos minimo 955
console.log(rand({}))//Numeros randomicos de 0 a 100
console.log(rand()) //Erro