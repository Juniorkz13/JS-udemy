function Pessoa() {
    this.idade = 0

    const self = this // neste caso também resolve o problema, já que não importa quem esteja chamando, self sempre será o this
    setInterval(
        function () {
            self.idade++
            console.log(self.idade)
        } /*.bind(this)*/,
        1000 // a função bind resolveria o problema, mas há outras soluções
    )
}

new Pessoa()
