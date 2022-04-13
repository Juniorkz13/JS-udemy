gerarNumerosEntre = (min, max) => {
    if (min > max) {
        ;[max, min] = [min, max] // invertendo os valores das variaveis
    }

    return new Promise((resolve) => {
        const aleatorio = parseInt(Math.random() * (max - min + 1) + min)
        resolve(aleatorio)
    })
}

gerarNumerosEntre(1, 10)
    .then((num) => num * 10)
    .then((numX10) => numX10 / 2)
    .then((numDiv2) => numDiv2 + 1)
    .then((numMais1) => `O número final gerado é ${numMais1}`)
    .then(console.log)
