// 23) Escreva um algoritmo que leia o código de um aluno e suas três notas. Calcule a média ponderada do
// aluno, considerando que o peso para a maior nota seja 4 e para as duas restantes, 3. Mostre o código do
// aluno, suas três notas, a média calculada e uma mensagem "APROVADO" se a média for maior ou igual a 5 e
// "REPROVADO" se a média for menor que 5. Repita a operação até que o código lido seja negativo.

const mediaPonderada = (cod, nota1, nota2, nota3) => {
    if (cod >= 0) {
        const notas = [nota1, nota2, nota3]
        notas.sort((a, b) => a - b)
        const media = (notas[0] * 3 + notas[1] * 3 + notas[2] * 4) / 10
        if (media > 5) {
            console.log(`
        Aluno: ${cod} 
        Notas: ${nota1}, ${nota2}, ${nota3}
        Média: ${media}
        Situação: Aprovado
        `)
        } else {
            console.log(`
        Aluno: ${cod} 
        Notas: ${nota1}, ${nota2}, ${nota3}
        Média: ${media}
        Situação: Reprovado
        `)
        }
    } else {
        console.log('Código inválido')
    }
}

mediaPonderada(335, 2, 3, 4)
mediaPonderada(533, 7, 3, 5)
mediaPonderada(998, 7, 10, 4)
mediaPonderada(-998, 7, 10, 4)
