// 28) Ler um vetor de números inteiros e imprimir quantos são pares e quantos são ímpares.

const parEImpar = (vetor) => {
    let par = 0
    let impar = 0
    for (let i = 0; i < vetor.length; i++) {
        if (vetor[i] % 2 == 0) {
            par++
        } else {
            impar++
        }
    }
    console.log(`${par} números pares`)
    console.log(`${impar} números impares`)
}
parEImpar([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
