// Elabore uma função que recebe dois parâmetros: o primeiro é um array de números e o segundo é um número
// que especifica uma quantidade de dígitos. Essa função deverá retornar somente aqueles números do array que
// têm a quantidade de dígitos indicada pelo segundo parâmetro.

const tamanhoNumero = (array, tamanho) => {
    let resultado = array.filter(
        (numero) => numero.toString().length === tamanho
    )
    return console.log(resultado)
}

tamanhoNumero([12, 123, 1234, 12345, 4, 5, 2], 1)
tamanhoNumero([38, 2, 365, 10, 125, 11], 2)
tamanhoNumero([5, 9, 1, 125, 11], 3)
