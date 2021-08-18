const nome = 'José'
const concatenacao = 'Olá ' + nome + '!'
const template = `
    Olá
    ${nome}!` // concatenação de forma mais simples e eficiente, considera inclusive as quebras de linhas
console.log(concatenacao, template)

// expressões:
console.log(`1 + 1 = ${1 + 1}`) // consegue realizar calculos dentro da string

// função: OBS: funções ainda serão estudadas mais à frente
const up = texto => texto.toUpperCase()
console.log(`Ei... ${up('cuidado')}!`) // função é chamada dentro da string