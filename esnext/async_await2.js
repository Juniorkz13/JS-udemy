gerarNumerosEntre = (min, max, numerosProibidos) => {
    if (min > max) {
        ;[max, min] = [min, max] // invertendo os valores das variaveis
    }

    return new Promise((resolve, reject) => {
        const aleatorio = parseInt(Math.random() * (max - min + 1) + min)
        if (numerosProibidos.includes(aleatorio)) {
            reject(`Número proibido: ${aleatorio}`)
        } else {
            resolve(aleatorio)
        }
    })
}

gerarMegaSena = async (quantidadeDeNumeros, tentativas = 1) => {
    try {
        const numeros = []
        for (let _ of Array(quantidadeDeNumeros).fill()) {
            numeros.push(await gerarNumerosEntre(1, 60, numeros))
        }
        return numeros
    } catch (e) {
        if (tentativas > 100) {
            throw 'não foi possível gerar a megasena'
        } else {
            return gerarMegaSena(quantidadeDeNumeros, tentativas + 1)
        }
    }
}

// gerarNumerosEntre(1, 10, [1, 3, 5, 7, 9]).then(console.log).catch(console.log)

gerarMegaSena(25).then(console.log).catch(console.log)
