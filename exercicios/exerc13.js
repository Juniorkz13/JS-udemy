// 13) Crie um programa que exibe se um dia é dia útil, fim de semana ou dia inválido dado o número referente ao
// dia. Considere que domingo é o dia 1 e sábado é o dia 7. Utilize a estrutura Switch.

const diaUtil = (dia) => {
    switch (dia) {
        case 1:
            console.log('Domingo, não é dia útil')
            break
        case 2:
            console.log('Segunda-feira, é dia útil')
            break
        case 3:
            console.log('Terça-feira, é dia útil')
            break
        case 4:
            console.log('Quarta-feira, é dia útil')
            break
        case 5:
            console.log('Quinta-feira, é dia útil')
            break
        case 6:
            console.log('Sexta-feira, é dia útil')
            break
        case 7:
            console.log('Sábado, não é dia útil')
            break
        default:
            console.log('Dia inválido')
            break
    }
}

diaUtil(1)
diaUtil(4)
diaUtil(14)
