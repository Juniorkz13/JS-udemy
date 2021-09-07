const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() // remove o ultimo elemento do array
console.log(pilotos)

pilotos.push('Verstappen') // adiciona um elemento no final do array
console.log(pilotos)

pilotos.shift() // remove o primeiro elemento do array
console.log(pilotos)

pilotos.unshift('Hamilton') // adiciona um elemento no inicio do array
console.log(pilotos)

// splice pode adicionar e remover elementos
// adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa') // adiciona elementos no indice 2
console.log(pilotos)
// remover
pilotos.splice(3, 1) // remove o elemento do indice 3
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) // cria um novo array a partir do indice 2
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4) // cria um novo array a partir do indice 1 ate o indice 4 (sem incluir o indice 4)
console.log(algunsPilotos2)
