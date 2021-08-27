function Carro(velocidadeMaxima = 200, delta = 5) {
    // Atributos privados
    let velocidadeAtual = 0

    // Métodos públicos
    this.acelerar = () => {
        if (velocidadeAtual + delta <= velocidadeMaxima) {
            velocidadeAtual += delta
        } else {
            velocidadeAtual = velocidadeMaxima
        }
    }

    this.getVelocidadeAtual = () => {
        return velocidadeAtual
    }
}

const uno = new Carro()
console.log(uno.getVelocidadeAtual())
uno.acelerar()
console.log(uno.getVelocidadeAtual())

const ferrari = new Carro(350, 20) // Passando parâmetros para o construtor, velocidade maxima e delta
console.log(ferrari.getVelocidadeAtual())
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual())

console.log(typeof Carro) // Função construtora
console.log(typeof ferrari) // Objeto
