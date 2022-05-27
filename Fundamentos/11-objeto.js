//Objeto em JS é uma coleção pares chaves/valor

const prod1 = {}//par de chaves representa objeto
prod1.nome = "Celular Ultra Mega"//"nome" é indentificador
prod1.preco = 4998.90
prod1["Desconto Legal"] = 0.40//evitar atributos com espaço

console.log(prod1)// Saída - { nome: 'Celular Ultra Mega', preco: 4998.9, 'Desconto Legal': 0.4 }

const prod2 = {
    nome: "Camiseta",
    preço: 79.90
}

console.log(prod2)// Saída - { nome: 'Camiseta', 'preço': 79.9 }