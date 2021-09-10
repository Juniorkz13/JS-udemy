// Crie uma função que receba uma array e retorne o primeiro e o último elemento desse array como um novo
// array:

const primeiroEUltimo = (array) => {
    const resultado = [array[0], array[array.length - 1]]
    console.log(resultado)
}

primeiroEUltimo([7, 14, 'olá'])
primeiroEUltimo([-100, 'aplicativo', 16, true])
