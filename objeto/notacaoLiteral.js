const a = 1
const b = 2
const c = 3

const obj1 = { a: a, b: b, c: c } // essa duplicidade não é mais necessária
const obj2 = { a, b, c } // não precisa mais usar o nome da variável
console.log(obj1, obj2)

const nomeAttr = 'nota'
const valorAttr = 7.87

const obj3 = {}
obj3[nomeAttr] = valorAttr // não precisa mais usar o nome da variável
console.log(obj3)

const obj4 = { [nomeAttr]: valorAttr }
console.log(obj4)

const obj5 = {
    funcao1: function () {
        // forma antiga
        // ...
    },
    funcao2() {
        // forma nova
        // ...
    }
}

console.log(obj5)
