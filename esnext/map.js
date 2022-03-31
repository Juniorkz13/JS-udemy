const tecnologias = new Map()
tecnologias.set('react', { framework: false })
tecnologias.set('angular', { framework: true })

console.log(tecnologias.react) // não funciona
console.log(tecnologias.get('react')) // funciona
console.log(tecnologias.get('react').framework) // funciona, retornando somente o valor do atributo framework

const chavesVariadas = new Map([
    [function () {}, 'função'],
    [{}, 'objeto'],
    [123, 'número']
])

chavesVariadas.forEach((valor, chave) => {
    console.log(chave, valor)
})

console.log(chavesVariadas.size)
console.log(chavesVariadas.has(123)) // verifica se existe o valor 123 no map
chavesVariadas.delete(123) // remove o valor 123 do map
console.log(chavesVariadas.has(123)) // verifica se existe o valor 123 no map
console.log(chavesVariadas.size) // retorna o tamanho do map

chavesVariadas.set(123, 'a') // adiciona um novo valor no map
chavesVariadas.set(123, 'b') // sobrescreve o valor 123 do map
chavesVariadas.set(456, 'b') // adiciona um novo valor no map
console.log(chavesVariadas)

// é possível repetir as chaves de um map, mas ao apontar para um novo valor, ele sobrescreve o anterior
