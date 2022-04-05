primeiroElemento = (array) => array[0] // função retorna o primeiro elemento do array
primeiraLetra = (string) => string[0] // função retorna a primeira letra da string
letraMinuscula = (string) => string.toLowerCase() // função retorna a string em minusculo

let p = new Promise(function (resolve) {
    resolve(['Ana', 'Bia', 'Carlos', 'Marcelo']) // a promise pode receber um unico valor, para mais valores é preciso criar um objeto ou array
})
    .then(primeiroElemento) // primeiro valor do array
    .then(primeiraLetra) // primeiro caracter do primeiro valor do array
    .then(letraMinuscula) // primeiro caracter do primeiro valor do array em minusculo
    .then(console.log) // o resultado de um then é passado para o proximo then
