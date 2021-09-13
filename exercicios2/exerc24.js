// A fim de criar um mecanismo de busca para sua aplicação, você precisa iniciar criando uma função para
// identificar palavras semelhantes.
// Escreva uma função que recebe como primeiro parâmetro uma palavra e, como segundo parâmetro, um array
// de strings. A função deverá filtrar as palavras do array que contêm nelas a string do primeiro parâmetro.

const achaPalavra = (palavra, texto) => {
    let busca = texto.filter((palavraBuscada) =>
        palavraBuscada.includes(palavra)
    )
    return console.log(busca)
}

achaPalavra('pro', ['profissional', 'mobile', 'programação'])
achaPalavra('Java', ['C++', 'Java', 'Python', 'JavaScript'])
