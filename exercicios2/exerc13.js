// Desenvolva uma função que recebe como parâmetro um objeto e retorne um array de arrays, em que cada
// elemento é um array formado pelos pares chave/valor que corresponde a um atributo do objeto

const objArray = (objeto) => {
    let array = []
    for (let propriedade in objeto) {
        array.push([propriedade, objeto[propriedade]])
    }
    console.log(array)
}

const pessoa1 = {
    nome: 'José',
    profissao: 'Advogado',
    idade: 29
}

const item = {
    nome: 'Computador',
    preco: 5999.99,
    loja: 'Kabum'
}

objArray(pessoa1)
objArray(item)

// outra forma de fazer
const objArray2 = (objeto) => {
    return Object.entries(objeto)
}

console.log(objArray2(pessoa1))
console.log(objArray2(item))
