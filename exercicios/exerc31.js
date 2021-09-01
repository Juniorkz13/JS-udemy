// 31) Escrever um algoritmo que percorre um vetor de inteiros, conta quantos números negativos há nesse vetor
// e imprime a quantidade no console.

const qtdNegativos = (array) => {
    let qtd = 0
    for (let i = 0; i < array.length; i++) {
        if (array[i] < 0) {
            qtd++
        }
    }

    console.log(`Quantidade de números negativos no array: ${qtd}`)
}

qtdNegativos([1, 25, 3, 89, -4, -1, 0, 43, -31])
