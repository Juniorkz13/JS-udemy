// 21) Criar um programa para identificar o valor a ser pago por um plano de saúde dada a idade do conveniado
// considerando que todos pagam R$ 100 mais um adicional conforme a seguinte tabela: 1) crianças com menos
// de 10 anos pagam R$80; 2) conveniados com idade entre 10 e 30 anos pagam R$50; 3) conveniados com
// idade acima de 30 e até 60 anos pagam R$ 95; e 4) conveniados acima de 60 anos pagam R$130

const convenio = (idade) => {
    if (idade >= 0 && idade < 10) {
        console.log(`Idade até 10 anos -> R$100,00 + R$80,00 (adicional)`)
    } else if (idade >= 10 && idade <= 30) {
        console.log(
            `Idade entre 10 e 30 anos -> R$100,00 + R$50,00 (adicional)`
        )
    } else if (idade > 30 && idade <= 60) {
        console.log(
            `Idade entre 30 e 60 anos -> R$100,00 + R$95,00 (adicional)`
        )
    } else if (idade > 60) {
        console.log(`Idade acima de 60 anos -> R$100,00 + R$130,00 (adicional)`)
    } else {
        console.log(`Idade inválida`)
    }
}

convenio(7)
convenio(29)
convenio(55)
convenio(61)
convenio(-1)
