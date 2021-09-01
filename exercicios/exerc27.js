// 27) Construa uma função que receba como parâmetros as alturas e as taxas de crescimento anuais de duas
// crianças e calcule se existe uma criança menor, caso exista se a criança menor ultrapassará a maior e em
// quantos anos isso acontecerá. Utilize centímetros para as unidades de medida.

const crescimento = (altura1, taxa1, altura2, taxa2) => {
    if (altura1 == altura2) {
        console.log('Alturas iguais')
    } else if (altura1 > altura2) {
        let anos = 0
        let aux1 = altura1
        let aux2 = altura2
        while (aux1 > aux2 && anos <= 15) {
            aux1 += taxa1
            aux2 += taxa2
            anos++
        }
        if (anos <= 10) {
            console.log(
                `A criança de altura ${altura2.toFixed(
                    2
                )}cm passará a criança de altura ${altura1.toFixed(
                    2
                )}cm em ${anos} anos.`
            )
        } else {
            console.log(
                `A criança de altura ${altura2.toFixed(
                    2
                )}cm não passará a criança de altura ${altura1.toFixed(
                    2
                )}cm em 10 anos.`
            )
        }
    } else {
        let anos = 0
        while (aux1 < aux2 && anos <= 15) {
            aux1 += taxa1
            aux2 += taxa2
            anos++
        }
        if (anos <= 10) {
            console.log(
                `A criança de altura ${altura1.toFixed(
                    2
                )}cm passará a criança de altura ${altura2.toFixed(
                    2
                )}cm em ${anos} anos.`
            )
        } else {
            console.log(
                `A criança de altura ${altura1.toFixed(
                    2
                )}cm não passará a criança de altura ${altura2.toFixed(
                    2
                )}cm em 10 anos.`
            )
        }
    }
}

crescimento(150, 1, 130, 0.3)
crescimento(150, 0.1, 147, 1)
