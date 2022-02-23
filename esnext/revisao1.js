// Let e Const
{
    var a = 2
    let b = 3
    console.log(b)
}

console.log(a)

// Template String
const produto = 'iPad'
console.log(`${produto} não presta!`)

// Destructuring
const [l, e, ...tras] = 'Cod3r'
console.log(l, e, tras)

const [x, y] = [1, 2, 3]
console.log(x, y)
const [k, , j] = [1, 2, 3]
console.log(k, j)

const { idade, nome } = { nome: 'Ana', idade: 9 }
console.log(idade, nome)
const { idade: i, nome: n } = { nome: 'Ana', idade: 9 }
console.log(i, n)
