// Criar uma função que receba um array de números e retorne o menor número desse array.

const menorNumero = (array) => {
    let menor = array[0]
    for (let i in array) {
        if (array[i] < menor) {
            menor = array[i]
        }
    }
    return console.log(menor)
}

const array = [10, 5, 35, 65]
const array2 = [10, 5, 35, 65, -10]

menorNumero(array)
menorNumero(array2)

// Outra forma de fazer
const menorNumero2 = (array) => {
    return console.log(Math.min(...array))
}

menorNumero2(array)
menorNumero2(array2)
