const valores = [93, 4.5, 3, 15, 0]
console.log(valores[0], valores[3])
console.log(valores[5]) // não gera erro, somente diz que o valor é indefinido
valores[5] = 10 // atribuição de valor
console.log(valores[5])
valores[10] = 1992
console.log(valores) // não gera erros e informa que existem índices vazios
console.log(valores.length) // informa o tamanho do array

valores.push({ id: 3 }, false, null, 'teste') // o array é heterogêneo, aceita vários tipos de dados
console.log(valores)
console.log(valores.pop()) // remove o último elemento do array
delete valores[10] // remove um elemento específico
console.log(valores)

console.log(typeof valores) // informa o tipo do array, será object
