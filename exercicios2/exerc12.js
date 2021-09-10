// Quando temos um objeto e manipulamos seus atributos, adicionando, atualizando ou removendo-os, estamos
// apenas modificando-o, mas, em essência, o objeto continua o mesmo, ou seja a sua referência de memória é a
// mesma.
// Num projeto que você está trabalhando, você foi designado a refatorar diversas funções para que façam
// cópias de objetos e manipulem os dados dessas cópias, com o intuito de evitar efeitos indesejáveis em
// algumas situações devido a referências a objetos. Abaixo, está a descrição de uma dessas funções.
// Você escreverá uma função que recebe um objeto como primeiro parâmetro e, como segundo parâmetro, o
// nome de uma propriedade contida nesse objeto. Em seguida, retorne uma cópia desse objeto sem a
// propriedade especificada no segundo parâmetro.

const pessoa1 = {
    nome: 'João',
    idade: 20
}

const removerPropriedadeComCopia = (objeto, propriedade) => {
    const copia = { ...objeto }
    delete copia[propriedade]
    return copia
}

const pessoa1Copia = removerPropriedadeComCopia(pessoa1, 'idade')
console.log('Pessoa original com todas as propriedades:')
console.log(pessoa1)
console.log('Cópia sem idade:')
console.log(pessoa1Copia)
console.log(
    Object.is(removerPropriedadeComCopia(pessoa1, 'idade'), pessoa1Copia)
)

const pessoa2 = {
    nome: 'João',
    idade: 20
}

const removerPropriedadeSemCopia = (objeto, propriedade) => {
    delete objeto[propriedade]
    return objeto
}

// aqui não está sendo feita uma cópia, mas sim a remoção da propriedade
const pessoa2SemCopia = removerPropriedadeSemCopia(pessoa2, 'nome')
console.log('Pessoa original com todas as propriedades:')
console.log(pessoa2)
console.log('Cópia sem nome:')
console.log(pessoa2SemCopia)
console.log(
    Object.is(removerPropriedadeSemCopia(pessoa2, 'nome'), pessoa2SemCopia)
)
