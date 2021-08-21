// Função sem retorno
function imprimirSoma(a, b){
    console.log(a+b)
}

imprimirSoma(4, 6)
imprimirSoma(4) // retorna undefined
imprimirSoma(4, 10, 7, 8, 9) // ignora o resto
imprimirSoma() // retorna undefined

// Função com retorno
function soma(a, b = 0){
    return a+b
}

console.log(soma(4, 6))
console.log(soma(4)) // como há retorno, ele retorna a soma com o valor padrão b = 0