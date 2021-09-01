// 37) Escreva duas funções, uma para progressão aritmética e uma para progressão geométrica que recebam
// como parâmetros um número n (número de termo), a1 (o primeiro termo) e r (a razão) e escreva os n termos ,
// bem como a soma dos elementos.

const progAritimetica = (n, a1, r) => {
    let resultado = a1
    let soma = 0
    for (let i = 1; i <= n; i++) {
        console.log(resultado)
        soma += resultado
        resultado += r
    }
    console.log(`Soma dos ${n} primeiros termos: ${soma}`)
}

progAritimetica(10, 1, 2)

const progGeometrica = (n, a1, r) => {
    let resultado = a1
    let soma = 0
    for (let i = 1; i <= n; i++) {
        console.log(resultado)
        soma += resultado
        resultado *= r
    }
    console.log(`Soma dos ${n} primeiros termos: ${soma}`)
}

progGeometrica(10, 1, 2)
