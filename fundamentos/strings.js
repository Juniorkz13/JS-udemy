const escola = "Curso"
console.log(escola.charAt(4)) // retorna o caractere 4
console.log(escola.charAt(5)) // não gera erro, retorna valor vazio
console.log(escola.charCodeAt(3)) // unicode da tabela ASCII
console.log(escola.indexOf("r")) // retorna o índice do caractere
console.log(escola.substring(1)) // retorna a parte do texto a partir do indice 1
console.log(escola.substring(1, 4)) // retorna a parte do texto entre o indice 1 e o indice 4
console.log('Escola '.concat(escola).concat('!')) // concatena o texto com a string
console.log('Escola ' + escola + '!') // concatena o texto com a string usando o +
console.log(escola.replace('o', 'a')) // substitui o caractere 'o' por 'a'
console.log('José,Sarah,Maria'.split(',')) // divide a string exatamente no caractere especificado e transforma em um array