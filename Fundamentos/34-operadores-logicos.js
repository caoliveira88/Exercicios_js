// Exemplos de operadores lógicos

/*
Operador e 
  v e v -> v
  v e f -> f
  v e ? -> f

Operador ou  
  f ou v -> f
  f ou f -> f
  v ou ? -> v

Operador ou exclusivo  
  v xor v -> f
  v xor f -> v
  f xor v -> v
  f xor f -> f

Negacao
  !v -> f
  !f -> v
*/

function compras(trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2
    const comparTv50 = trabalho1 && trabalho2
    // const comprarTv32 = !!(trabalho1 ^ trabalho2) // bitwise xor
    const comprarTv32 = trabalho1 != trabalho2
    const manterSaudavel = !comprarSorvete // operador unário

    return { comprarSorvete, comparTv50, comprarTv32, manterSaudavel }
}

console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(true, false))

/* Saída 

{
  comprarSorvete: true,
  comparTv50: false,
  comprarTv32: true,
  manterSaudavel: false
}
 */