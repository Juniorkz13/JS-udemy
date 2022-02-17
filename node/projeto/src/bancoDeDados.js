const sequence = {
    _id: 1,
    get id() {
        return this._id++
    }
}

const produtos = {}

const salvarProduto = (produto) => {
    if (!produto.id) produto.id = sequence.id // se não tiver id, atribui o id da sequencia
    produtos[produto.id] = produto // adiciona o produto no array
    return produto // retorna o produto já com o id
}

const getProduto = (id) => {
    return produtos[id] || {} // se não encontrar o produto, retorna um objeto vazio
}

const getProdutos = () => {
    return Object.values(produtos) // retorna todos os produtos
}

const excluirProduto = (id) => {
    const produto = produtos[id]
    delete produtos[id]
    return produto
}

module.exports = {
    salvarProduto,
    getProduto,
    getProdutos,
    excluirProduto
}
