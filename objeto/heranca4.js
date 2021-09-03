function MeuObjeto() {}
console.log(MeuObjeto.prototype)

const obj1 = new MeuObjeto()
const obj2 = new MeuObjeto()
console.log(obj1.__proto__ === obj2.__proto__)
console.log(MeuObjeto.prototype === obj1.__proto__)

MeuObjeto.prototype.nome = 'Anônimo'
MeuObjeto.prototype.falar = function () {
    console.log(`Bom dia! Meu nome é ${this.nome}!`)
}

obj1.falar()
obj2.nome = 'Rafael'
obj2.falar()

const obj3 = {}
obj3.__proto__ = MeuObjeto.prototype // Aqui está sendo atribuido o protótipo do objeto obj3
obj3.nome = 'Obj3'
obj3.falar()

// Resumindo a loucura...
console.log(new MeuObjeto().__proto__ === MeuObjeto.prototype) // Quando um objeto é instanciado a partir de uma função, o protótipo do objeto é o protótipo da função
console.log(MeuObjeto.__proto__ === Function.prototype) // Quando uma função é instanciada, o protótipo da função é o protótipo da função Object
console.log(Function.prototype.__proto__ === Object.prototype) // O protótipo do protótipo da função é o protótipo do objeto Object
console.log(Object.prototype.__proto__ === null) // O protótipo do protótipo do objeto Object é null, pois chegou no final da cadeia de protótipos
