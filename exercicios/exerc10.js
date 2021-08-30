//10) Crie uma função que verifica se um número inteiro passado como parêmetro é divisível por 3 e retorne true
//ou false.

const verificador = (num) => {
    if (num % 3 == 0) {
        return true
    } else {
        return false
    }
}

console.log(verificador(3))
console.log(verificador(4))
console.log(verificador(5))
console.log(verificador(6))
console.log(verificador(300))
