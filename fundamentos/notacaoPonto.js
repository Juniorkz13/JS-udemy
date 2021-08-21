console.log(Math.ceil(9.2)) // arredonda para cima
console.log(Math.floor(9.2)) // arredonda para baixo

const obj1 = {}
obj1.nome = 'Bola'
console.log(obj1.nome) // Bola

function obj(nome) {
  this.nome = nome
  this.exec = function () {
    console.log('Exec...')
  }
}

const obj2 = new obj('Cadeira')
const obj3 = new obj('Mesa')
console.log(obj2.nome) // Cadeira
console.log(obj3.nome) // Mesa
obj3.exec() // Exec...
