// operador ... rest(juntar)/spread(separar)

// usar rest com parametro de função
const total = (...numeros) => {
    let total = 0
    numeros.forEach((n) => (total += n))
    return total
}
console.log(total(1, 2, 3, 4, 5))

// usar spread com objeto
const funcionario = { nome: 'Maria', salario: 1234.5 }
const clone = { ativo: true, ...funcionario } // está recebendo TODOS os atributos do objeto funcionario
console.log(clone)

// usar spread com array
const grupoA = ['João', 'Pedro', 'Gloria']
const grupoFinal = ['Maria', 'Rafaela', ...grupoA] // está recebendo TODOS os elementos do array grupoA
console.log(grupoFinal)
