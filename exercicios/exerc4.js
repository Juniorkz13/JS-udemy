// 04) Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado
// e o resto da divisão destes dois valores.

const divisao = (a, b) => {
    if (b === 0) {
        console.log('Divisão por 0')
    } else {
        let divisao = a / b
        console.log('divisão -> ', divisao.toFixed(2))
        let resto = a % b
        console.log('resto -> ', resto.toFixed(2))
    }
}

divisao(10, 2)
divisao(10, 3)
