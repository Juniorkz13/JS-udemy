// Crie uma função que recebe um número (de 1 a 12) e retorne o mês correspondente como uma string. Por
// exemplo, se a entrada for 2, a função deverá retornar "fevereiro", pois este é o 2° mês.

const nomeMes = (numeroMes) => {
    const meses = [
        'Janeiro',
        'Fevereiro',
        'Março',
        'Abril',
        'Maio',
        'Junho',
        'Julho',
        'Agosto',
        'Setembro',
        'Outubro',
        'Novembro',
        'Dezembro'
    ]
    if (numeroMes <= 0 || numeroMes > 12) {
        console.log('Mês inválido')
    } else {
        console.log(meses[numeroMes - 1])
    }
}

nomeMes(3)
nomeMes(12)
nomeMes(1)
nomeMes(15)
