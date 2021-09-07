console.log(typeof Array, typeof new Array(), typeof [])

let aprovados = new Array('Bia', 'Carlos', 'Ana') // cria um array
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana'] // forma literal de criar um array, mais comum
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3]) // undefined, não da erro

aprovados[3] = 'Paulo' // adiciona um elemento no array, apesar de ser mais comum para substituir um elemento
aprovados.push('Abia') // adiciona um elemento no array
console.log(aprovados.length) // tamanho do array

aprovados[9] = 'Rafael' // adiciona um elemento no array, os elementos vazios são undefined
console.log(aprovados.length)
console.log(aprovados[8] === undefined) // true

console.log(aprovados)
aprovados.sort() // ordena o array
console.log(aprovados)

delete aprovados[1] // deleta um elemento do array, o elemento é undefined, o array não é reorganizado
console.log(aprovados[1])
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana']
aprovados.splice(1, 1) // remove um elemento do array, o primeiro parametro é a posição do elemento a ser removido, o segundo parametro é a quantidade de elementos a serem removidos
console.log(aprovados)
aprovados.splice(1, 0, 'Elemento1', 'Elemento2') // adiciona elementos no array, o primeiro parametro é a posição do elemento a ser adicionado, o segundo parametro é a quantidade de elementos a serem removidos, o terceiro parâmetro são os elementos a serem adicionados
console.log(aprovados)
aprovados.splice(1, 2, 'Carlos')
console.log(aprovados)
