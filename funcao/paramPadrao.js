// estrategia 1 para gerar valor padrao
function soma1(a, b, c) {
    a = a || 1
    b = b || 1
    c = c || 1
    return a + b + c
}

console.log(soma1(), soma1(3), soma1(1, 2, 3), soma1(0, 0, 0)) // nessa estratégia o 0 retorna como falso, como o valor padrão é 1, o resultado será 3

// estrategia 2, 3 e 4 para gerar valor padrão
function soma2(a, b, c) {
    a = a !== undefined ? a : 1 // se a for diferente de undefined, a recebe a, se não, a recebe 1
    b = 1 in arguments ? b : 1 // se o indice 1 estiver presente no array arguments, b recebe b, se não, b recebe 1
    c = isNaN(c) ? 1 : c // se c for um número, c recebe c, se não, c recebe 1
    return a + b + c
}

console.log(soma2(), soma2(3), soma2(1, 2, 3), soma2(0, 0, 0)) // resolve o problema, mas são estratégias trabalhosas

// valor padrão do es2015
function soma3(a = 1, b = 1, c = 1) {
    return a + b + c
}

console.log(soma3(), soma3(3), soma3(1, 2, 3), soma3(0, 0, 0)) // estrategia mais simples e que funciona
