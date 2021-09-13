// Elabore uma função que receba um array de números e retorne um array que tenha todos os números que são
// pares e que também tenham índices pares.

/**@param {Array} array */
const retornaPar = (array) => {
    return array.filter(
        (item) => item % 2 === 0 && array.indexOf(item) % 2 === 0
    )
}

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const array2 = [0, 1, 2, 20, 5, 7]
const array3 = [10, 70, 22, 43]

console.log(retornaPar(array))
console.log(retornaPar(array2))
console.log(retornaPar(array3))
