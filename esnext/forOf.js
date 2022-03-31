for (let letra of 'Júnior') {
    console.log(letra)
}

const assuntosEcma = ['Map', 'Set', 'Promise']

for (let i in assuntosEcma) {
    console.log(i)
} // o in retorna o indice

for (let assunto of assuntosEcma) {
    console.log(assunto)
} // o of retorna o valor

const assuntosMap = new Map([
    ['Map', { abordado: true }],
    ['Set', { abordado: true }],
    ['Promise', { abordado: false }]
])

for (let assunto of assuntosMap) {
    console.log(assunto)
}

for (let chave of assuntosMap.keys()) {
    console.log(chave)
}

for (let valor of assuntosMap.values()) {
    console.log(valor)
}

for (let [ch, vl] of assuntosMap.entries()) {
    console.log(ch, vl)
} // o destructuring do map, retornando chave e valor separados

const s = new Set(['a', 'b', 'c'])
for (let letra of s) {
    console.log(letra)
}
