// 32) Construir um algoritmo que calcule a média aritmética dos valores de um vetor de inteiros.

const media = (array) => {
    let soma = 0
    for (let i = 0; i < array.length; i++) {
        soma += array[i]
    }

    console.log(
        `A média aritmética dos valores do array é: ${soma / array.length}`
    )
}

media([1, 2, 3, 4, 5])
media([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
media([54, 12, 76, 13, 76])
