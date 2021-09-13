// Escreva uma função que receba um array de números e retornará a soma de todos os números desse array

const somaArray = (array) => {
    return array.reduce((a, b) => a + b, 0)
}

const array1 = [1, 2, 3, 4, 5]
const array2 = [6, 7, 8, 9, 10]
const array3 = [2, 2, 2]

console.log(somaArray(array1))
console.log(somaArray(array2))
console.log(somaArray(array3))
