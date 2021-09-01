// 40) Faça uma função que receba como parâmetro um vetor de notas e mostre os conceitos de cada uma de
// modo que de 0,0 a 4,9 seja atribuído o conceito D, de 5,0 a 6,9 seja atribuído o conceito C, de 7,0 a 8,9 o
// conceito B e de 9,0 a 10,0 o conceito A.

const conceitos = (vetor) => {
    for (let i = 0; i < vetor.length; i++) {
        if (vetor[i] >= 0.0 && vetor[i] <= 4.9) {
            console.log(`
            Nota:${vetor[i]}
            Conceito: D`)
        } else if (vetor[i] >= 5.0 && vetor[i] <= 6.9) {
            console.log(`
            Nota:${vetor[i]}
            Conceito: C`)
        } else if (vetor[i] >= 7.0 && vetor[i] <= 8.9) {
            console.log(`
            Nota:${vetor[i]}
            Conceito: B`)
        } else if (vetor[i] >= 9.0 && vetor[i] <= 10.0) {
            console.log(`
            Nota:${vetor[i]}
            Conceito: A`)
        } else {
            console.log(`
            Nota:${vetor[i]}
            INVÁLIDA!`)
        }
    }
}

conceitos([8.1, 7.3, 9.8, 4.3, 2.7, 8.9, 9.8, 10, 6.3, 9.8, 15])
