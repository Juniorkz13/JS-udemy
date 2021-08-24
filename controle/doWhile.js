function getInteiroAleatorioEntre(min, max) {
    const valor = Math.floor(Math.random() * (max - min + 1)) + min
    return valor
}

let opcao = -1

do {
    opcao = getInteiroAleatorioEntre(-1, 10)
    console.log(`Opção escolhida foi ${opcao}.`)
} while (opcao != -1)

console.log('Programa finalizado.')
