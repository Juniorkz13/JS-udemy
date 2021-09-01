// 22) Criar uma função para calcular o valor a ser pago de anuidade de uma associação. A função recebe como
// parâmetro um inteiro que representa o mês (1 - janeiro, 2 - fevereiro…) que foi paga e o valor da anuidade. A
// anuidade deve ser paga no mês de janeiro. Por mês, é cobrado 5% de juros (sob o regime de juros
// compostos). O retorno deve ser o valor a ser pago para o respectivo mês escolhido.

const calcAnuidade = (mes, valor) => {
    let anuidade = 0
    for (let i = 1; i <= mes; i++) {
        anuidade = valor * (1 + 0.05) ** i
    }

    console.log(
        `Anuidade paga no mês ${mes} com valor de R$${anuidade.toFixed(2)}`
    )
}

calcAnuidade(3, 100)
calcAnuidade(6, 100)
calcAnuidade(12, 100)
