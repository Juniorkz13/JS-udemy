function criarProduto(nome, preco) {
    return {
        nome,
        preco,
        desconto: 0.1
    }
}

console.log(criarProduto('Caneta', 1.9))
console.log(criarProduto('Lápis', 0.5))

// arrow function
const criarProduto2 = (nome, preco) => {
    return {
        nome,
        preco,
        desconto: 0.1
    }
}

console.log(criarProduto2('Caderno', 10.9))
