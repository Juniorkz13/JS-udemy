// Desenvolva uma função que recebe um objeto como parâmetro e retorne um outro objeto que corresponde ao
// ao objeto recebido como parâmetro, porém com as posições das chaves e valores invertidas, conforme
// exemplo a seguir:

const inverter = (objeto) => {
    const objetoInvertido = Object.entries(objeto).map((chaveValor) =>
        chaveValor.reverse()
    )
    return console.log(Object.fromEntries(objetoInvertido))
}

const objeto = { a: 1, b: 2, c: 3, d: 4, e: 5, f: 6 }
inverter(objeto)
