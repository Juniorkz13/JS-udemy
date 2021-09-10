// Desenvolva uma função que recebe dois números inteiros não negativos (maiores ou iguais a zero) e realize a
// multiplicação deles. Porém, não utilize o operador de mutiplicação.

const multiplicacao = (a, b) => {
    let resultado = 0
    if (a < 0 || b < 0) {
        return 'Número inválido'
    } else {
        for (let i = 0; i < b; i++) {
            resultado += a
        }
        return resultado
    }
}

console.log(multiplicacao(5, 5))
console.log(multiplicacao(0, 7))
console.log(multiplicacao(5, -2))
console.log(multiplicacao(-5, 2))
console.log(multiplicacao(-5, -2))
console.log(multiplicacao(7, 0))
console.log(multiplicacao(0, 0))
console.log(multiplicacao(2, 3))
console.log(multiplicacao(3, 2))
