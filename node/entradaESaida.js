const anonimo = process.argv.indexOf('-a') !== -1 // se o -a estiver na lista, retorna true
const os = require('os') // para substituir a quebra de linha no windows, com o \n da erro

// com o process eu consigo acessar os parametros passados na linha de comando
// console.log(anonimo)
// se o -a for digitado, chamará o anonimo, se nao for digitado, chamará para digitar o nome
if (anonimo) {
    process.stdout.write(`Fala Anônimo!${os.EOL}`)
    process.exit() // sai do programa
} else {
    process.stdout.write('Informe seu nome: ') // espera um nome
    process.stdin.on('data', (data) => {
        const nome = data.toString().replace(`${os.EOL}`, '') // remove o \n que é inserido no final da string com o enter
        process.stdout.write(`Fala ${nome}!!${os.EOL}`) // escreve na tela o nome digitado
        process.exit() // sai do programa
    })
}
