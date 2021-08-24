function teste1(num) {
    if (num > 7) console.log(num)
    console.log('Final')
}

teste1(6)
teste1(8)

function teste2(num) {
    if (num > 7); // cuidado com o ;, não usar com as estruturas de controle
    {
        console.log(num) // bloco de código não associado ao if
    }
}

teste2(6)
teste2(8)
