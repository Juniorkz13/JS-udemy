// função que recebe dois parametros e retorna um promise, que, quando a promise for atendida, retorna a função resolve
const falarDepoisDe = (segundos, frase) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(frase) // resolve aceita somente um único parametro
        }, segundos * 1000)
    })
}

falarDepoisDe(3, 'Que legal!')
    .then((frase) => frase.concat('?!?'))
    .then((outraFrase) => console.log(outraFrase)) // o then é executado quando a promise for atendida, e o resultado de um vai passando para o outro
    .catch((e) => console.log(e)) // o catch é executado quando a promise for rejeitada, é a forma de tratar o erro
