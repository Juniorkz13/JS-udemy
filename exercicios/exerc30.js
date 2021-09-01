// 30) Escreva um algoritmo que percorre um vetor de inteiros e defina o maior e menor valor dentro do vetor.

const maiorEMenor = (vetor) => {
    let maior = vetor[0]
    let menor = vetor[0]
    for (let i = 0; i < vetor.length; i++) {
        if (vetor[i] > maior) {
            maior = vetor[i]
        }
        if (vetor[i] < menor) {
            menor = vetor[i]
        }
    }
    return [maior, menor]
}

console.log(maiorEMenor([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))
console.log(maiorEMenor([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]))
console.log(
    maiorEMenor([
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20
    ])
)
