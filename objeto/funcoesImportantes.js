const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}

console.log(Object.keys(pessoa)) // retorna todas as chaves do objeto
console.log(Object.values(pessoa)) // retorna todos os valores do objeto
console.log(Object.entries(pessoa)) // retorna todas as chaves e valores do objeto

Object.entries(pessoa).forEach((e) => {
    // forEach para percorrer todos os elementos do objeto
    console.log(`${e[0]}: ${e[1]}`)
})

Object.entries(pessoa).forEach(([chave, valor]) => {
    // forEach para percorrer todos os elementos do objeto
    console.log(`${chave}: ${valor}`)
})

Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true, // se pode ser listado
    writable: false, // se pode ser alterado
    value: '01/01/2019' // valor do atributo
})

pessoa.dataNascimento = '01/01/2017' // não foi alterado devido ao writable: false
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))

// Object.assign (ECMAScript 2015)
const dest = { a: 1 }
console.log(dest)
const o1 = { b: 2 }
const o2 = { c: 3, a: 4 }
const obj = Object.assign(dest, o1, o2) // concatena os objetos
console.log(dest)

Object.freeze(obj) // congela o objeto
obj.c = 1234 // não altera o objeto
console.log(obj)
