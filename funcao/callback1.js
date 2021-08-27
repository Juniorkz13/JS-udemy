const fabricantes = ['Mercedes', 'Audi', 'BMW']

let imprimir = (nome, indice) => console.log(`${indice + 1}. ${nome}`)

fabricantes.forEach(imprimir) // a função imprimir é chamada para cada elemento do array, por isso é chamada callback
fabricantes.forEach((fabricante) => console.log(fabricante))
