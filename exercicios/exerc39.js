// 39) Crie uma função que receba dois vetores de igual tamanho e troque seus elementos de modo que o
// primeiro elemento do vetorA passe a ser o primeiro elemento do vetorB e vice versa e assim sucessivamente.
// Faça a troca sem utilizar uma variável auxiliar.

/**@param {Array} vetorA */
const trocaVetor = (vetorA, vetorB) => {
    let transferindo = vetorA.splice(0, vetorA.length, ...vetorB)
    vetorB.splice(0, vetorB.length, ...transferindo)

    console.log('Vetor A: ' + vetorA)
    console.log('Vetor B: ' + vetorB)
}

const vetorA = [1, 2, 3, 4, 5]
const vetorB = [6, 7, 8, 9, 10]

trocaVetor(vetorA, vetorB)
