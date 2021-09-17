const contadorA = require('./instanciaUnica') //importa o contadorA
const contadorB = require('./instanciaUnica') //importa o contadorB

const contadorC = require('./instanciaNova')() // chamando a função factory
const contadorD = require('./instanciaNova')() // chamando a função factory

contadorA.inc()
contadorA.inc()
console.log(contadorA.valor, contadorB.valor) // o que foi feito no contador A, foi feito no contador B, pois ambos estão referenciando o mesmo objeto

contadorC.inc()
contadorC.inc()
console.log(contadorC.valor, contadorD.valor) // o que foi feito no contador C, é independente do contador D, pois ambos estão referenciando objetos diferentes
