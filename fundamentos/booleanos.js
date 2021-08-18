let isAtivo = false // boolean
console.log(isAtivo)
isAtivo = true // boolean
console.log(isAtivo)

isAtivo = 1
console.log(!!isAtivo) // boolean também, duas negações retorna ao valor inicial, uma negação retorna o contrário

console.log("Os verdadeiros...")
console.log(!!3) // força a converção para boolean
console.log(!!-1)
console.log(!!" ") // aqui não está vazio, está com um espaço
console.log(!![]) // array
console.log(!!{}) // objeto literal
console.log(!!Infinity) // infinito
console.log(!!(isAtivo = true)) // atribuição

console.log("Os falsos...")
console.log(!!0) // 0 irá retornar false
console.log(!!'') // vazio irá retornar false
console.log(!!null) // null irá retornar false
console.log(!!NaN) // não numérico irá retornar false
console.log(!!undefined) // undefined irá retornar false
console.log(!!(isAtivo = false)) // atribuição

console.log("Para finalizar...")
console.log(('' || null || 0 || 'texto')) // só irá retornar o valor verdadeiro
console.log(!!('' || null || 0 || 'texto')) // transforma o valor em boolean

let nome = ''
console.log(nome || 'Desconhecido') // não irá retornar o valor, irá retornar o valor default
nome = 'José'
console.log(nome || 'Desconhecido') // irá retornar o valor

