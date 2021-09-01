// 34) Construa uma função que receberá duas Strings de tamanhos variados e que retornará True ou False caso
// todos os caracteres (independentemente de ser maiúsculo ou minúsculo) estejam contidos em ambas palavras.

function verificaString(string1, string2) {
    let contido = true
    for (let i = 0; i < string1.length; i++) {
        caracteresStg1 = string1.charAt(i).toLowerCase()
        for (let j = 0; j < string2.length; j++) {
            caracteresStg2 = string2.charAt(j).toLowerCase()
            if (caracteresStg1 == caracteresStg2) {
                contido = true
                break
            } else {
                contido = false
            }
        }
        if (!contido) {
            return contido
        }
    }
    return contido
}

console.log(verificaString('abc', 'abcd'))
console.log(verificaString('amor', 'roma'))
console.log(verificaString('mouse', 'rabanete'))
