const ferrari = {
    modelo: 'F40',
    velMax: 324
}

const volvo = {
    modelo: 'V40',
    velMax: 200
}

console.log(ferrari.__proto__) // __proto__ é um atributo do objeto que aponta para o protótipo do objeto
console.log(ferrari.__proto__ === Object.prototype) // true
console.log(volvo.__proto__ === Object.prototype) // true
console.log(Object.prototype.__proto__) // não possui mais nenhum atributo, é null
console.log(Object.prototype.__proto__ === null) // não possui mais nenhum atributo, é null

function MeuObjeto() {}
console.log(typeof Object, typeof MeuObjeto)
console.log(Object.prototype, MeuObjeto.prototype)
