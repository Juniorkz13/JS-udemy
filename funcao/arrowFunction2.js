function Pessoa() {
    this.idade = 0

    // utilizando a função arrow, o this é automaticamente definido no contexto de Pessoa
    setInterval(() => {
        this.idade++
        console.log(this.idade)
    }, 1000)
}

new Pessoa()
