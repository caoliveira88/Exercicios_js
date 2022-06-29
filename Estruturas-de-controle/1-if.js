//1 - Exemplos de estruturas de controle

function soBoaNoticia(nota) {
    if(nota >= 7) {
        console.log('Aprovado com ' + nota) // Saída - Aprovado com 8.1

    }
}

soBoaNoticia(8.1)
soBoaNoticia(6.1)

function seForVerdadeEuFalo(valor) {
    if(valor) {
        console.log('É verdade... ' + valor)
    }
}

seForVerdadeEuFalo() //Não imprime - Considerado como false
seForVerdadeEuFalo(null) //Não imprime - Considerado como false
seForVerdadeEuFalo(undefined) //Não imprime - Considerado como false
seForVerdadeEuFalo(NaN) //Não imprime - Considerado como false
seForVerdadeEuFalo('') //String vazia - Não imprime - Considerado como false
seForVerdadeEuFalo(0) //0 é único número considerado false - Não imprime 
seForVerdadeEuFalo(-1) //Saída É verdade... - Considerado como true
seForVerdadeEuFalo(' ') //String com epaço - Saída É verdade... - Considerado como true
seForVerdadeEuFalo('?') //String com interrogação - Saída É verdade... - Considerado como true
seForVerdadeEuFalo([]) //Array vazio - Saída É verdade... - Considerado como true
seForVerdadeEuFalo([1, 2]) //Array com elementos - Saída É verdade... - Considerado como true
seForVerdadeEuFalo({}) //Objeto vazio - Saída É verdade... - Considerado como true