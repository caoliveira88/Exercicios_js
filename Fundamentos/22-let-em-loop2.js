const funcs = []

for (let i = 0; i < 10; i++) {
    funcs.push(function() {
        console.log(i)
    })
}

funcs[2]() // Saída - 2
funcs[6]() // Saída - 6
funcs[8]() // Saída - 8

//Saída correta, pois let tem escopo de função e cria esse memória de i