const escola = [
    {
        // array de objetos, cada turma possui um array de alunos
        nome: 'Turma M1',
        alunos: [
            {
                nome: 'Gustavo',
                nota: 8.1
            },
            {
                nome: 'Ana',
                nota: 9.3
            }
        ]
    },
    {
        nome: 'Turma M2',
        alunos: [
            {
                nome: 'Rebeca',
                nota: 8.9
            },
            {
                nome: 'Roberto',
                nota: 7.3
            }
        ]
    }
]

// Retorna um array com as notas dos alunos de cada turma separadas em um array por turma
const getNotaDoAluno = (aluno) => aluno.nota
const getNotasDaTurma = (turma) => turma.alunos.map(getNotaDoAluno)

const notas1 = escola.map(getNotasDaTurma)
console.log(notas1)

// FlatMap, retorna um array com as notas dos alunos juntas
Array.prototype.flatMap = function (callback) {
    return Array.prototype.concat.apply([], this.map(callback))
}

const notas2 = escola.flatMap(getNotasDaTurma)
console.log(notas2)
