console.log(module.exports)
console.log(module.exports === this)
console.log(module.exports === exports)

this.a = 1 // será exportado
exports.b = 2 // será exportado
module.exports.c = 3 // será exportado

exports = null // exports só aponta para module.exports, se atribui null, ele aponta para this
console.log(module.exports)

exports = {
    nome: 'Teste'
}
console.log(module.exports) // continua apontando para o mesmo objeto

module.exports = {
    publico: true
}
