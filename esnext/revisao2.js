// arrow function
const soma = (a, b) => a + b
console.log(soma(2, 3))
// quando a arrow function tem corpo, precisa utilizar o return
const soma2 = (a, b) => {
    return a + b
}
console.log(soma2(2, 3))

// arrow functoion (this)
const lexico1 = () => console.log(this === exports)
const lexico2 = lexico1.bind({})
lexico1()
lexico2()

// parametros default, em cima de um atributo, é definido um valor padrão
const log = (texto = 'Node') => console.log(texto)
log()
log('substitui o valor padrão')
log(null)
log(undefined)

// operador rest (agrupar em um array)
const total = (...numeros) => {
    let total = 0
    numeros.forEach((n) => (total += n))
    return total
}
console.log(total(1, 2, 3, 4, 5))
