// //02) Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
// Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes.
// Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
// ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um
// triângulo).

const tipoTriangulo = (a, b, c) => {
    if (a + b > c && a + c > b && b + c > a) {
        if ((a === b) & (b === c)) {
            console.log('Equilatero')
        } else if (a === b || b === c || a === c) {
            console.log('Isosceles')
        } else {
            console.log('Escaleno')
        }
    } else {
        console.log('Não é um triângulo')
    }
}

tipoTriangulo(5, 5, 5)
tipoTriangulo(5, 5, 6)
tipoTriangulo(5, 6, 7)
tipoTriangulo(30, 6, 7)
