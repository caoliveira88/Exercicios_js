{
    {
        {
            { var sera = "Será???"} //Varios blocos para mostrar que não há diferença sobre isso
            console.log(sera) //var dentro de bloco de código, que não seja função, será visível - Saída - Será???
        }
    }
} 
console.log(sera) //Também estará visível fora do bloco - Saída - Será???

function teste() {
    var local = 123 // Visível apenas dentro da função - Saída - 123
    console.log(local) // 
}

teste()
console.log(local) //Saída - erro