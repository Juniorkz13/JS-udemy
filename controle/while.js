function getInteiroAleatorioEntre(min, max) {
    const valor = Math.floor(Math.random() * (max - min + 1)) + min
    return valor
}

let opcao = 0

while (opcao != -1) {
    opcao = getInteiroAleatorioEntre(-1, 10)
    console.log(`Opção escolhida foi ${opcao}.`)
}

console.log('Programa finalizado.')
