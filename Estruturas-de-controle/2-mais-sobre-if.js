// Mais exemplos sobre estruturas de controle if

function teste1(num) {
    if(num > 7)
    console.log(num) // Sentença associada ao bloco if
    console.log('Final') // Sentença fora do if, então será sempre executada
}

teste1(6) // Saída Final
teste1(8) // Saída 8 Final


// Exemplo que não pode ser utilizado

function teste2(num) {
    if(num > 7); { // Cuidado com ';'...não usar em estruturas de controle, pois é considerado como sentença.
        console.log(num)
    }
}

teste2(6) // Saída 6
teste2(8) // Saída 8 