// Desenvolva uma função que receba uma string como parâmetro e retorne essa string somente com as
// consoantes, ou seja, sem as vogais.

const tiraVogal = (palavra) => {
    const vogais = ['a', 'A', 'e', 'E', 'i', 'I', 'o', 'O', 'u', 'U']
    vogais.forEach((vogal) => (palavra = palavra.replace(vogal, '')))
    return console.log(palavra)
}

tiraVogal('fundamentos')
tiraVogal('Junior')
