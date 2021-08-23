function tratarErroELancar(erro) {
    // throw new Error('Ocorreu um erro')
    // throw 10
    // throw true
    // throw 'mensagem'
    throw {
        nome: erro.name,
        msg: erro.message,
        date: new Date()
    }
}

function imprimirNomeGritado(obj) {
    try {
        console.log(obj.name.toUpperCase() + '!!!') // utilizou NAME
    } catch (e) {
        tratarErroELancar(e)
    } finally {
        console.log('finally')
    }
}

const obj = { nome: 'José' } // utilizou NOME
imprimirNomeGritado(obj) // causa erro
