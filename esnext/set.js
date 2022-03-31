// não aceita repetição de chaves / não é indexado

const times = new Set()
times.add('Atlético-MG')
times.add('Vasco')
times.add('Palmeiras').add('Grêmio') // adiciona mais de um valor ao set, pode ser encadeado
times.add('Atlético-MG') // não adiciona, pois não aceita repetição

console.log(times)
console.log(times.size) // retorna o tamanho do set
console.log(times.has('Vasco')) // verifica se existe o valor Vasco no set
times.delete('Grêmio') // remove o valor Grêmio do set
console.log(times.has('Grêmio')) // verifica se existe o valor Grêmio no set
console.log(times)
console.log(times.has('atlético-mg')) // verifica se existe o valor atlético-mg no set, retorna false pois é case sensitive

// outra forma de criar um set é passando um array
const times2 = new Set([
    'Atlético-MG',
    'Vasco',
    'Palmeiras',
    'Grêmio',
    'Atlético-MG'
]) // não aceita repetição
const nomeSet = new Set(times2)
console.log(nomeSet)
