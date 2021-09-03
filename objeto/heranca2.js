// Cadeia de protótipos (prototype chain)
const avo = { attr1: 'A' } // Objeto avo com atributo 1: A
const pai = { __proto__: avo, attr2: 'B', attr3: '3' } // Objeto pai com atributo 2: B
const filho = { __proto__: pai, attr3: 'C' } // Objeto filho com atributo 3: C

console.log(filho.attr0) // não foi encontrado o atributo 0, pois nenhum objeto da cadeia de protótipos tem o atributo 0
console.log(filho.attr1) // foi subindo na cadeia de protótipos até chegar no objeto avo
console.log(filho.attr2) // foi subindo na cadeia de protótipos até chegar no objeto pai
console.log(filho.attr3) // o objeto filho tem o atributo 3, mesmo que o objeto pai tenha o mesmo atributo, retorna o atributo do objeto filho

const carro = {
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta) {
        if (this.velAtual + delta <= this.velMax) {
            this.velAtual += delta
        } else {
            this.velAtual = this.velMax
        }
    },
    status() {
        return `${this.velAtual}Km/h de ${this.velMax}Km/h`
    }
}

const ferrari = {
    modelo: 'F40',
    velMax: 324 // shadowing
}

const volvo = {
    modelo: 'V40',
    status() {
        return `${this.modelo}: ${super.status()}` // super é uma palavra reservada que referencia o objeto pai
    }
}

Object.setPrototypeOf(ferrari, carro) // ferrari agora é um objeto de carro
Object.setPrototypeOf(volvo, carro) // volvo agora é um objeto de carro

console.log(ferrari)
console.log(volvo)

volvo.acelerarMais(100)
console.log(volvo.status()) // chamará o método status() modificado, pertencente ao objeto volvo

ferrari.acelerarMais(300)
console.log(ferrari.status()) // como no objeto ferrari não há modificação no método status(), será chamado o método status() do objeto pai, que é carro
