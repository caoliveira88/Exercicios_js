const nome = "Rebeca"
const concatenacao = "Olá " + nome + "!" //Saída - Olá Rebeca

const template = `
Olá
${nome}!`//interpolação
console.log(concatenacao, template) 
/*Saída 
Olá
Rebeca!*/

//expressoes...
console.log(`1 + 1 = ${1 + 1}`)//Saída = 1 + 1 = 2

const up = texto => texto.toUpperCase()//funcao arrow
console.log(`Ei...${up("cuidado")}!`)//Saída - Ei...CUIDADO!