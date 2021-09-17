require('./global') // Importa o arquivo global.js

console.log(MeuApp.saudacao())

MeuApp.nome = 'Eita!' // não alterou pois o objeto global MeuApp está .freeze(), caso não seja .freeze() o objeto pode ser alterado
console.log(MeuApp.nome)
