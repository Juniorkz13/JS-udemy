// função normal
let dobro = function (a) {
    return a * 2
}

// função arrow
dobro = (a) => {
    return a * 2
}

dobro = (a) => 2 * a
// dobro = a => 2 * a // caso tenha somente 1 parâmetro, não precisa de parenteses, sem as chaves o retorno é implicito

console.log(dobro(2))

// função normal
let ola = function () {
    return 'Olá'
}

// função arrow
ola = () => 'Olá'
// ola = _ => 'Olá' // com somente 1 parâmetro, pode ser escrito com o underline

console.log(ola())
