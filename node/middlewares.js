// middleware pattern (chain of responsibility)
const passo1 = (ctx, next) => {
    // o contexto é o objeto que vai ser passado para o próximo passo
    ctx.valor1 = 'mid1'
    next() // chama o próximo passo
}

const passo2 = (ctx, next) => {
    ctx.valor2 = 'mid2'
    next()
}

const passo3 = (ctx) => (ctx.valor3 = 'mid3') // neste passo não quis chamar o próximo passo, não é obrigatório

const exec = (ctx, ...middlewares) => {
    // recebe um array de middlewares
    const execPasso = (indice) => {
        // recebe o índice do passo atual
        middlewares &&
            indice < middlewares.length &&
            middlewares[indice](ctx, () => execPasso(indice + 1)) // chama o próximo passo
    }
    execPasso(0) // inicia a execução
}

const ctx = {}
exec(ctx, passo1, passo2, passo3) // cada middleware (passo) será junta em um array e será executado
console.log(ctx)
