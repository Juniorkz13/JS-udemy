const fs = require('fs')
const path = require('path')

lerArquivo = (caminho) => {
    return new Promise((resolve) => {
        fs.readFile(caminho, (err, conteudo) => {
            resolve(conteudo.toString())
        })
        console.log('Depois de ler o arquivo')
    })
}

const caminho = path.join(__dirname, 'dados.txt')

// lerArquivo(caminho).then((conteudo) => console.log(conteudo))

lerArquivo(caminho)
    .then((conteudo) => conteudo.split('\n'))
    .then((linhas) => linhas.join(','))
    .then((conteudo) => `O conteúdo final é: ${conteudo}`)
    .then(console.log)
