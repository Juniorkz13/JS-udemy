// Crie uma função que receba dois números e retorne se o primeiro é maior ou igual ao segundo.

const maiorOuIgual = (a, b) => {
    if (typeof a != typeof b || a < b) {
        return false
    } else {
        return true
    }
}

console.log(maiorOuIgual(3, 2)) // true
console.log(maiorOuIgual(1, 2)) // false
console.log(maiorOuIgual(1, 1)) // true
console.log(maiorOuIgual(1, '1')) // false
console.log(maiorOuIgual('1', 1)) // false
