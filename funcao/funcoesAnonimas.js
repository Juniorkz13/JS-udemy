const soma = (x, y) => x + y
const imprimirResultado = (a, b, operacao = soma) => console.log(operacao(a, b))

imprimirResultado(3, 4)
imprimirResultado(3, 4, soma)
imprimirResultado(3, 4, (x, y) => x - y) // a função anônima é chamada como parâmetro
imprimirResultado(3, 4, (x, y) => x * y)

// o mesmo código como abaixo, mas com o uso de uma função anonima normal, sem ser arrow function
const soma2 = function (x, y) {
    return x + y
}

const imprimirResultado2 = function (a, b, operacao = soma2) {
    console.log(operacao(a, b))
}

imprimirResultado2(3, 4)
imprimirResultado2(3, 4, soma2)
imprimirResultado2(3, 4, function (x, y) {
    return x - y
})

// outros exemplos
const pessoa = {
    falar: function () {
        console.log('falando')
    }
}

const pessoa2 = {
    falar: () => console.log('falando')
}

pessoa.falar()
pessoa2.falar()
