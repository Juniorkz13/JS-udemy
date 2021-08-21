// novo recurso do ES2015

const pessoa = {
    nome: 'José',
    idade: 29,
    endereco: {
        logradouro: 'rua',
        numero: 123
    }
}

const { nome, idade } = pessoa // destructuring o atributo nome e idade do objeto pessoa
console.log(nome, idade)

const { nome: n, idade: i } = pessoa // destructuring o atributo nome e idade do objeto pessoa
console.log(n, i) // renomeia o atributo nome para n e o atributo idade para i

const { sobrenome, genero = true } = pessoa
console.log(sobrenome, genero) // não existe o atributo sobrenome no objeto pessoa, o atributo genero também não existe, mas recebeu um valor padrão

const {
    endereco: { logradouro, numero, cep }
} = pessoa // destructuring o atributo endereco do objeto pessoa
console.log(logradouro, numero, cep)
