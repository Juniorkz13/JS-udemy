// 08) Pedro joga N jogos de basquete por temporada. Para saber como está ele está progredindo, ele mantém
// registro de todos os as pontuações feitas por jogo. Após cada jogo ele anota no novo valor e confere se o
// mesmo é maior ou menor que seu melhor e pior desempenho. Dada uma lista string = “pontuação1 pontuação2
// pontuação3 etc..”, escreva uma função que ao recebê-la irá comparar os valores um a um e irá retornar um
// vetor com o número de vezes que ele bateu seu recorde de maior número de pontos e quando fez seu pior
// jogo. (Número do pior jogo).
// Obs.: O primeiro jogo não conta como novo recorde do melhor.
// Exemplo:
// String: “10 20 20 8 25 3 0 30 1”
// Retorno: [3, 7] (Significa que ele bateu três vezes seu recorde de melhor pontuação e a pior pontuação
// aconteceu no sétimo jogo.)

function transformaArray(array) {
    let arrayInt = []
    for (let i = 0; i < array.length; i++) {
        arrayInt.push(parseInt(array[i]))
    }
    return arrayInt
}

/** @param {String} pontuacao */
const analisePontuacao = (pontuacao) => {
    let pontuacaoArray = pontuacao.split(' ')
    let pontuacaoInt = transformaArray(pontuacaoArray)

    let maior = pontuacaoInt[0]
    let menor = pontuacaoInt[0]
    let quebraRecorde = 0
    let piorPontuacao = 0

    for (let i = 0; i < pontuacaoInt.length; i++) {
        if (pontuacaoInt[i] > maior) {
            maior = pontuacaoInt[i]
            quebraRecorde++
        }
        if (pontuacaoInt[i] < menor) {
            menor = pontuacaoInt[i]
            piorPontuacao = i + 1
        }
    }

    const resutlado = [quebraRecorde, piorPontuacao]
    console.log(resutlado)
}

analisePontuacao('10 20 20 8 25 3 0 30 1')
