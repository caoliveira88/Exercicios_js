function rand([min = 0, max = 1000]) {
    if (min > max) [min, max] = [max, min]
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

console.log(rand([50, 40])) // Navega entre 40 4 50
console.log(rand([992])) // Min 992 max 100 - Navega entre 992 1000
console.log(rand([, 10]))// Navega entre 0 e 10
console.log(rand([]))// Navega entre 0 e mil
console.log(rand()) // Undefined



