const funcs = []

for (var i = 0; i < 10; i++) {
    funcs.push(function() {
        console.log(i)
    })
}

funcs[2]() // Saída - 10
funcs[8]() // Saída - 10

// Saída inesperada, pois var não tem escopo de função