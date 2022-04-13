gerarNumerosEntre = (min, max, tempo) => {
    if (min > max) {
        ;[max, min] = [min, max] // invertendo os valores das variaveis
    }
    return new Promise((resolve) => {
        setTimeout(() => {
            const aleatorio = parseInt(Math.random() * (max - min + 1) + min)
            resolve(aleatorio)
        }, tempo)
    })
}

gerarVariosNumeros = () => {
    return Promise.all([
        gerarNumerosEntre(1, 60, 1000),
        gerarNumerosEntre(1, 60, 2000),
        gerarNumerosEntre(1, 60, 3000),
        gerarNumerosEntre(1, 60, 4000),
        gerarNumerosEntre(1, 60, 5000)
    ])
}

console.time('gerarVariosNumeros')
gerarVariosNumeros()
    .then(console.log)
    .then(() => {
        console.timeEnd('gerarVariosNumeros')
    }) // só imprime depois que todas as promises forem resolvidas
