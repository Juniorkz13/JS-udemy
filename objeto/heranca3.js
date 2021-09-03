const pai = { nome: 'Pedro', corCabelo: 'preto' }

const filha1 = Object.create(pai) // filha1.__proto__ = pai
filha1.nome = 'Ana'
console.log(filha1.nome, filha1.corCabelo)

const filha2 = Object.create(pai, {
    nome: { value: 'Bia', writable: false, enumerable: true }
})
console.log(filha2.nome)
filha2.nome = 'Carla' // não altera o nome da filha2 pois o writable é false
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`)

console.log(Object.keys(filha1))
console.log(Object.keys(filha2))

for (let key in filha2) {
    filha2.hasOwnProperty(key) // se o atributo pertence a filha2
        ? console.log(key)
        : console.log(`Por herança: ${key}`) // se não, é por herança
}
