esperarPor = (tempo = 2000) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve()
        }, tempo)
    })
}

// esperarPor()
//     .then(() => console.log('executando promise...'))
//     .then(esperarPor)
//     .then(() => console.log('executando promise...'))
//     .then(esperarPor)
//     .then(() => console.log('executando promise...'))

// usando async/await

retornarValor = () => {
    return new Promise((resolve) => {
        setTimeout(() => resolve(10), 5000)
    })
}

executar = async () => {
    let valor = await retornarValor()

    await esperarPor()
    console.log(`Async/Await ${valor}...`)

    await esperarPor()
    console.log(`Async/Await ${valor + 1}...`)

    await esperarPor()
    console.log(`Async/Await ${valor + 2}...`)

    return valor + 3
}

executarDeVerdade = async () => {
    const valor = await executar()
    console.log(valor)
}

// executar().then(console.log) // quando retorna o sincrono, só é possível acessar utilizando o THEN, pois é necessário esperar que todo o código seja executado

executarDeVerdade() // neste caso não é preciso utilizar o THEN, pois o código é executado de forma assíncrona
