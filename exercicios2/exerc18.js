// Numa aplicação Web de investimento financeiro da qual você faz parte da equipe de desenvolvimento,
// pretende-se adicionar a funcionalidade de calcular a média de um conjunto de números informados pelo
// usuário.
// Com o intuito de realizar esse cálculo, crie uma função que receba um array com uma quantidade
// indeterminada de números e retorne a média simples desses números.

const media = (array) => {
    return (
        array.reduce((acumulador, valor) => acumulador + valor, 0) /
        array.length
    )
}

const array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const array2 = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
const array3 = [1, 2, 3, 4, 5]

console.log(media(array1))
console.log(media(array2))
console.log(media(array3))
