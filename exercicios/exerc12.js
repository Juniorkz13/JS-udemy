// 12) Faça um algoritmo que calcule o fatorial de um número.

const fatorial = (n) => {
    if (n == 1) {
        return 1
    } else {
        return n * fatorial(n - 1)
    }
}

console.log(fatorial(5))
console.log(fatorial(10))
console.log(fatorial(3))
