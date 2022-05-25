const escola = "Cod3r"

console.log(escola.charAt(4))//retorna caractere que está no índice 4 - Saída será r

console.log(escola.charAt(5))//retorna valor vazio

console.log(escola.charCodeAt(3))//tabela unicode - Saída 51

console.log(escola.substring(1))//apartir do índice 1 - Saída od3r
console.log(escola.substring(0, 3))//indice 0 indo até indice 3, sem incluir o indice 3 - Saída Cod

console.log("Escola ".concat(escola).concat("!!"))//Saída Escola Cod3r!!
console.log("Escola " + escola + "!!")//Saída Escola Cod3r!!

console.log(escola.replace(3, "e"))//Substitui 3 pela lerta e - Saída Coder

console.log("Ana, Maria, Pedro".split(","))//converte string em array - Saída [ 'Ana', ' Maria', ' Pedro' ]
