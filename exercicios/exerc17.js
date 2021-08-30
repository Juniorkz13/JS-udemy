// 17) Um funcionário irá receber um aumento de acordo com o seu plano de
// trabalho, de acordo com a tabela abaixo:
// Plano Aumento
// A 10%
// B 15%
// C 20%
// Faça uma função que leia o plano de trabalho e o salário atual de um funcionário e calcula e imprime o seu
// novo salário. Use a estrutura switch e faça um caso default que indique que o plano é inválido.

const calculoAumento = (salario, plano) => {
    switch (plano) {
        case 'a':
            console.log(salario * 1.1)
            break
        case 'b':
            console.log(salario * 1.15)
            break
        case 'c':
            console.log(salario * 1.2)
            break
        default:
            console.log('Plano inválido')
            break
    }
}

calculoAumento(1000, 'a')
calculoAumento(1000, 'b')
calculoAumento(1000, 'c')
calculoAumento(1000, 'd')
