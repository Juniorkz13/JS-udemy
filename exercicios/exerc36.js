// 36) Crie duas funções que recebem dois parâmetros, um vetor com apenas valores numéricos e um número
// inteiro. Faça com que a primeira função retorne outro vetor que será resultado da multiplicação de cada
// elemento pelo número passado como parâmetro. A segunda função fará o mesmo da primeira se e somente se
// o valor do elemento for maior que 5.

const multiplicaVetor = (vetor, numero) => {
    let vetorFinal = []
    for (let i = 0; i < vetor.length; i++) {
        vetorFinal.push(vetor[i] * numero)
    }

    console.log(`Vetor final: ${vetorFinal}`)
}

multiplicaVetor([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2)

const multiplicaVetor5 = (vetor, numero) => {
    let vetorFinal = []
    for (let i = 0; i < vetor.length; i++) {
        if (vetor[i] <= 5) {
            vetorFinal.push(vetor[i])
        } else {
            vetorFinal.push(vetor[i] * numero)
        }
    }

    console.log(`Vetor final: ${vetorFinal}`)
}

multiplicaVetor5([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2)
