// Você está trabalhando numa aplicação pessoal de controle de despesas. Na tela principal dessa aplicação, é
// possível adicionar produtos ou serviços, informando nome, categoria e preço. Uma funcionalidade que você
// está desenvolvendo no momento é a de somar o total das despesas.
// Crie uma função que receba um array de produtos e retorne o total das despesas.

const despesa1 = [
    { nome: 'Celular', preco: 5999 },
    { nome: 'Computador', preco: 9599 }
]

const despesa2 = [
    { nome: 'Bala', preco: 2.99 },
    { nome: 'Chiclete', preco: 0.5 },
    { nome: 'Chocolate', preco: 5 }
]

const despesas = (objeto) => {
    return objeto
        .map((item) => item.preco)
        .reduce((total, atual) => total + atual)
}

console.log(despesas(despesa1))
console.log(despesas(despesa2))
