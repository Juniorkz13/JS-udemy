// Tagged Template - processa o template dentro de uma função
const tag = (partes, ...valores) => {
    console.log(partes)
    console.log(valores)
    return 'Outra string'
}

const aluno = 'Júnior'
const situacao = 'Aprovado'
console.log(tag`${aluno} está ${situacao}`)
