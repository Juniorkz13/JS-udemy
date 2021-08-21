const prod1 = {} // prod1 é um objeto vazio
prod1.nome = 'Celular' // atribuição de nome ao objeto vazio
prod1.preco = 4998.90 // atribuição de preço ao objeto vazio
console.log(prod1)

const prod2 = {
    nome: 'Tablet',
    preco: 6998.90,
    obj1: {
        propriedade1: 1,
        obj2: {
            propriedade2: 2
        }
    }
}
console.log(prod2) // foram feitos objetos dentro de objetos