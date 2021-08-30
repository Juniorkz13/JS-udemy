// 09) Construa uma função para um sistema de notas de uma instituição que possui a seguinte política de
// classificação: Todo aluno recebe uma nota de 0 a 100. Alunos com nota abaixo de 40 são reprovados. As notas
// possuem a seguinte regra de arredondamento: Se a diferença entre a nota e o próximo múltiplo de 5 for menor
// que 3, arredondar a nota para esse próximo múltiplo de 5. Se a nota for abaixo de 38, não é feito nenhum
// arredondamento pois esta nota resulta na reprovação do aluno. Por exemplo, a nota 84 será arredondada para
// 85, mas a nota 29 não será arredondada por ser abaixo de 40 e não ser possível arredondamento eficiente, ou
// seja, que evite a reprovação do aluno. No caso de a nota ser 38, o arredondamento é possível pois atingirá 40
// e o aluno será aprovado.

const arredondaNota = (nota) => {
    if (nota < 0 || nota > 100) {
        console.log('Nota inválida')
    } else if (nota < 38) {
        console.log(nota)
    } else if (nota % 5 >= 3) {
        console.log(nota + (5 - (nota % 5)))
    } else {
        console.log(nota)
    }
}

arredondaNota(99)
arredondaNota(98)
arredondaNota(97)
arredondaNota(96)
arredondaNota(95)
arredondaNota(94)
arredondaNota(101)
arredondaNota(39)
arredondaNota(38)
arredondaNota(37)
arredondaNota(10)
arredondaNota(-1)
