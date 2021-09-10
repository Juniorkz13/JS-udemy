// Elabore uma função que recebe um número como parâmetro e retorne uma string com o símbolo "+" na
// quantidade especificada no parâmetro.

const simboloMais = (vezes) => {
    let resultado = ''
    for (let i = 0; i < vezes; i++) {
        resultado += '+'
    }
    console.log(resultado)
}

simboloMais(5)
simboloMais(10)
simboloMais(2)
simboloMais(1)
simboloMais(0)
simboloMais(3)
