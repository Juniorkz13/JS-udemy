const pessoa = {
    saudacao: 'olá',
    falar() {
        console.log(this.saudacao)
    }
}

pessoa.falar()
const falar = pessoa.falar
falar() // conflito entre paradigmas: funcional e OO

const falarDePessoa = pessoa.falar.bind(pessoa) // com o bind, o this é o pessoa
falarDePessoa() // agora aponta para o objeto certo (pessoa)
