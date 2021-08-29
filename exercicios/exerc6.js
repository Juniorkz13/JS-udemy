// 06) Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
// primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
// retornará o valor da aplicação sob o regime de juros compostos.

const jurosSimples = (capital, taxa, tempo) =>
    console.log(`Juros simples -> ${capital * (1 + tempo * taxa)}`)

jurosSimples(100, 0.02, 2)

const jurosCompostos = (capital, taxa, tempo) =>
    console.log(`Juros compostos -> ${capital * (1 + taxa) ** tempo}`)

jurosCompostos(100, 0.02, 2)
