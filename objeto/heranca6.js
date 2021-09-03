function Aula(nome, videoID) {
    this.nome = nome
    this.videoID = videoID
}

const aula1 = new Aula('Bem vindo', 123)
const aula2 = new Aula('Até breve', 456)
console.log(aula1, aula2)

// simulando o new
function novo(f, ...params) {
    const obj = {} // cria um objeto vazio
    obj.__proto__ = f.prototype // define o protótipo do objeto como sendo o protótipo do construtor
    f.apply(obj, params) // chama o construtor passando o objeto criado e os parametros
    return obj // retorna o objeto
}

const aula3 = novo(Aula, 'Bem vindo', 123)
const aula4 = novo(Aula, 'Até breve', 456)
console.log(aula3, aula4)
