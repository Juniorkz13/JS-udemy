const porta = 3003

const express = require('express')
const app = express()
const bancoDeDados = require('./bancoDeDados')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/produtos', (req, res, next) => {
    res.send(bancoDeDados.getProdutos())
})

app.get('/produtos/:id', (req, res, next) => {
    res.send(bancoDeDados.getProduto(req.params.id))
})

app.post('/produtos', (req, res, next) => {
    // cria um produto com os dados que vem do corpo da requisição
    const produto = bancoDeDados.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) // retorna o produto criado no banco de dados em formato JSON
})

app.put('/produtos/:id', (req, res, next) => {
    // atualiza o produto com o id passado na rota
    const produto = bancoDeDados.salvarProduto({
        id: req.params.id,
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto)
})

app.delete('/produtos/:id', (req, res, next) => {
    // deleta o produto com o id passado na rota
    const produto = bancoDeDados.excluirProduto(req.params.id)
    res.send(produto)
})

app.listen(porta, () => {
    console.log(`Servidor está executando na porta ${porta}.`)
})
