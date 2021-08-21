const a = { name: 'José' }
console.log(a)
const b = a
b.name = 'Maria'
console.log(b)
console.log(a)

// a constante a aponta para o endereço do objeto, a constante b aponta para o mesmo endereço, nesse caso, qualquer modificação afetará ambas

let c = 3
let d = c
d++
console.log(c)
console.log(d)

// no caso de tipos primitivos, o valor é copiado para o novo endereço, e não o apontamento

let valor // não inicializada, retorna undefined
console.log(valor)
// console.log(valor2) // gera erro pois essa variável sequer existe
valor = null // ausência de valor, é diferente de ser indefinido
console.log(valor)
// console.log(valor.toString()) // gera erro pois não existe um valor para ser convertido

const produto = {}
console.log(produto.preco)
console.log(produto)
produto.preco = 10.50
console.log(produto)
produto.preco = undefined // evitar atribuir undefined, não é boa prática, isso não faz com que o atributo seja excluído
// delete produto.preco // essa seria a forma correta de excluir um atributo
console.log(produto)
produto.preco = null // sem preço
console.log(produto)