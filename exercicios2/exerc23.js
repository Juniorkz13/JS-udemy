// Desenvolva uma função que recebe um caractere e uma string como parâmetros e retorne a quantidade de
// vezes que o caractere se repete na string. A função deverá ser case-sensitive, ou seja, irá diferenciar
// maiúsculas de minúsculas.

const contaLetras = (letra, frase) => {
    let contador = 0
    for (let i in frase) {
        if (letra === frase.charAt(i)) {
            contador++
        }
    }
    return console.log(contador)
}

contaLetras('a', 'ana')
contaLetras('e', 'Meu nome é Júnior')
contaLetras('O', 'Olá, meu nome é Goku!')
contaLetras('o', 'Olá, meu nome é Goku!')

// Outra forma de fazer
const contaLetras2 = (letra, frase) => {
    let resultado = [...frase].filter(
        (letraBuscada) => letraBuscada === letra
    ).length
    return console.log(resultado)
}

contaLetras2('a', 'ana')
contaLetras2('e', 'Meu nome é Júnior')
contaLetras2('O', 'Olá, meu nome é Goku!')
contaLetras2('o', 'Olá, meu nome é Goku!')
