// Escreva uma função que receba dois parâmetros. O primeiro parâmetro é o elemento que repetirá, enquanto
// que o segundo será o número de vezes que haverá repetição. Um array será retornado.

const repetir = (elemento, vezes) => {
    const array = []
    for (let i = 0; i < vezes; i++) {
        array.push(elemento)
    }
    console.log(array)
}

repetir('a', 5)
repetir('palavra', 8)
repetir(true, 2)
repetir(7, 3)
