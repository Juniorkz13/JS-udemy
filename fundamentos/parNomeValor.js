// par nome/valor
const saudacao = 'Olá' // contexto léxico 1

function exec() {
  const saudacao = 'Fala' // contexto léxico 2
  return saudacao
}

// objetos são grupos aninhados de pares nome/valor
const cliente = {
  nome: 'José',
  idade: 29,
  peso: 75,
  endereco: {
    logradouro: 'Rua',
    numero: 123,
  },
}

console.log(saudacao) // Olá
console.log(exec()) // Fala
console.log(cliente) // { nome: 'José', idade: 29, peso: 75, endereco: { logradouro: 'Rua', numero: 123 } }
