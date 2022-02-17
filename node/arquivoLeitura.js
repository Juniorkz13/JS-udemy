const fs = require('fs')

const caminho = __dirname + '/arquivo.json'

// sincrono
const conteudo = fs.readFileSync(caminho, 'utf-8') // leitura de arquivo de forma sincrona
console.log(conteudo)

// assincrono
fs.readFile(caminho, 'utf-8', (err, conteudo) => {
    // leitura de arquivo de forma assincrona
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host}:${config.db.port}`)
})

// método especifico para formato JSON
const config = require('./arquivo.json')
console.log(config.db)

// leitura de diretorio
fs.readdir(__dirname, (err, arquivos) => {
    // __dirname é o diretorio atual
    console.log('Conteúdo da pasta...')
    console.log(arquivos)
})
