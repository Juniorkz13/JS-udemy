// Crie uma função que recebe um array de números e retorna o segundo maior número presente nesse array.

const segundoMaior = (array) => {
    array.sort((a, b) => b - a)
    return console.log(array[1])
}

segundoMaior([12, 16, 1, 5])
segundoMaior([8, 4, 6, 23])
