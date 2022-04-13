// setTimeout(() => {
//     console.log('executando callback...')
//     setTimeout(() => {
//         console.log('executando callback...')
//     }, 2000)
//     setTimeout(() => {
//         console.log('executando callback...')
//     }, 2000)
// }, 2000)

esperarPor = (tempo = 2000) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('executando promise...')
            resolve()
        }, tempo)
    })
}

// esperarPor(3000).then((texto) => {
//     console.log(texto)
// })

// para fazer igual o primeiro exemplo que usa callback, fica assim:

esperarPor()
    .then(() => esperarPor())
    .then(() => esperarPor())
