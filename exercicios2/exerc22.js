// Criar uma função que receba uma string como parâmetro e conte quantas palavras tem nela.

const contaPalavras = (frase) => {
    let contador = 0
    let palavras = frase.split(' ')
    for (let i in palavras) {
        contador++
    }
    return console.log(contador)
}

contaPalavras('Sou uma frase')
contaPalavras('Sou uma frase com mais de uma palavra')
contaPalavras('Me divirto aprendendo a programar')

// Outra forma de fazer
const contaPalavras2 = (frase) => {
    const palavras = frase.split(' ')
    return console.log(palavras.length)
}

contaPalavras2('Sou uma frase')
contaPalavras2('Sou uma frase com mais de uma palavra')
contaPalavras2('Me divirto aprendendo a programar')
