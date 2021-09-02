// pessoa -> 123 -> {...}
const pessoa = { nome: 'João' }
pessoa.nome = 'Pedro'
console.log(pessoa)

// pessoa -> 456 -> {...}
// pessoa = { nome: 'Ana' } // Erro! Pois pessoa é uma constante e já aponta para um objeto anterior no endereço de memória (123)

Object.freeze(pessoa) // Congela o objeto, não permitindo que seu estado seja alterado
pessoa.nome = 'Maria' // Não altera o objeto, pois o objeto está congelado, não gera erro, ignora a alteração
pessoa.end = 'Rua ABC' // Não altera o objeto, pois o objeto está congelado, não gera erro, ignora a alteração
delete pessoa.nome // Não altera o objeto, pois o objeto está congelado, não gera erro, ignora a alteração
console.log(pessoa)

const pessoaConstante = Object.freeze({ nome: 'João' })
pessoaConstante.nome = 'Maria' // Não altera o objeto, pois o objeto está congelado, não gera erro, ignora a alteração
console.log(pessoaConstante)
