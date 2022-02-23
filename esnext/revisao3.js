// ES8: Object.values/Object.entries
const obj = { a: 1, b: 2, c: 3 }
console.log(Object.values(obj)) // retorna os valores do objeto
console.log(Object.entries(obj)) // retorna as chaves e valores do objeto

// Melhorias na Notação Literal
const nome = 'Júnior'
const pessoa = {
    nome,
    ola() {
        return 'Olá ' + this.nome
    }
}
console.log(pessoa.nome, pessoa.ola())

// Class
class Animal {}
class Cachorro extends Animal {
    falar() {
        return 'Au au'
    }
}
console.log(new Cachorro().falar())
