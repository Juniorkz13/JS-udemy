// Object.preventExtensions(objeto) - Não permite adicionar novos atributos ao objeto, mas permite modificar e deletar os existentes
const produto = Object.preventExtensions({
    nome: 'Qualquer',
    preco: 1.99,
    tag: 'promoção'
})
console.log('Extensível:', Object.isExtensible(produto))

produto.nome = 'Borracha'
produto.descricao = 'Borracha escolar branca'
delete produto.tag
console.log(produto) // o atributo descricao não foi adicionado, pois o objeto não é extensível

// Object.seal(objeto) - não permite adicionar novos atributos nem excluir, mas permite modificar os atributos existentes
const pessoa = { nome: 'Juliana', idade: 35 }
Object.seal(pessoa)
console.log('Selado:', Object.isSealed(pessoa))

pessoa.sobrenome = 'Silva'
delete pessoa.nome
pessoa.idade = 29
console.log(pessoa) // o atributo sobrenome não foi adicionado e o atributo nome não foi deletado, pois o objeto é selado. O atributo idade foi modificado

// Object.freeze(objeto) - não permite adicionar novos atributos, não permite deletar atributos, não permite modificar os atributos
const carro = { marca: 'Ford', modelo: 'Ka' }
Object.freeze(carro)
console.log('Congelado:', Object.isFrozen(carro))

carro.marca = 'Fiat'
delete carro.modelo
carro.ano = 2019
console.log(carro) // o atributo marca não foi alterado, o atributo modelo não foi deletado, o atributo ano não foi adicionado, pois o objeto é congelado
