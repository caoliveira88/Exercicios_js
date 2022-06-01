var numero = 1
{
    let numero = 2
    console.log("dentro =", numero)// Saída - dentro = 2
}
console.log("fora =", numero)// Saída - fora = 1


var numero = 1
{
    let numero2 = 2
    console.log("dentro =", numero)// Saída - dentro = 1
}
console.log("fora =", numero)// Saída - fora = 1

// No exemplo acima, o programa vai buscar o valor da variável dentro do escopo menor, se não econtrar vai buscar o valor fora

// var tem escopo global 
// let tem escopo global, de função e de bloco