// Armazenando uma função em uma variável
const imprimirSoma = function (a, b) { // função anônima, ela não tem nome definido
    console.log(a + b)
}

imprimirSoma(1, 2)

// Armazendando uma função arrow em uma variável
const soma = (a, b) => {
    return a + b
}
console.log(soma(1, 2))

// Arrow com retorno implícito
const subtracao = (a, b) => a - b
console.log(subtracao(1, 2))

const imprimir = a => console.log(a)
imprimir('Hello World')