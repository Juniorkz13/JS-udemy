const lanchonete = (codigo, quantidade) => {
    let total = 0

    switch (codigo) {
        case 100:
            total = quantidade * 3
            console.log(`
            Item: Cachorro Quente
            Código: ${codigo}
            Valor: R$3,00
            Quantidade: ${quantidade}
            Total: R$${total.toFixed(2).replace('.', ',')}`)
            break
        case 200:
            total = quantidade * 4
            console.log(`
            Item: Hamburguer Simples
            Código: ${codigo}
            Valor: R$4,00
            Quantidade: ${quantidade}
            Total: R$${total.toFixed(2).replace('.', ',')}`)
            break
        case 300:
            total = quantidade * 5.5
            console.log(`
            Item: Cheeseburguer
            Código: ${codigo}
            Valor: R$5,50
            Quantidade: ${quantidade}
            Total: R$${total.toFixed(2).replace('.', ',')}`)
            break
        case 400:
            total = quantidade * 7.5
            console.log(`
            Item: Bauru
            Código: ${codigo}
            Valor: R$7,50
            Quantidade: ${quantidade}
            Total: R$${total.toFixed(2).replace('.', ',')}`)
            break
        case 500:
            total = quantidade * 3.5
            console.log(`
            Item: Refrigerante
            Código: ${codigo}
            Valor: R$3,50
            Quantidade: ${quantidade}
            Total: R$${total.toFixed(2).replace('.', ',')}`)
            break
        case 600:
            total = quantidade * 2.8
            console.log(`
            Item: Suco
            Código: ${codigo}
            Valor: R$2,80
            Quantidade: ${quantidade}
            Total: R$${total.toFixed(2).replace('.', ',')}`)
            break
        default:
            console.log('Código inválido')
            break
    }
}

lanchonete(100, 2)
lanchonete(200, 1)
lanchonete(300, 3)
lanchonete(400, 1)
lanchonete(500, 5)
lanchonete(600, 2)
lanchonete(700, 1)
