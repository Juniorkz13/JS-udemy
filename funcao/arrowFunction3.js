let comparaComThis = function (param) {
    console.log(this === param)
}

comparaComThis(global) // o objeto global é o mesmo que o this

const obj = {}
comparaComThis = comparaComThis.bind(obj) // sempre que a função for chamada, o this será o objeto obj e não o global
comparaComThis(global) // o objeto global não é mais o mesmo que o this
comparaComThis(obj) // o objeto obj é o mesmo que o this

// usando arrow function
let comparaComThisArrow = (param) => console.log(this === param)
comparaComThisArrow(global) // o objeto global não é o mesmo que o this, por conta da função arrow
comparaComThisArrow(module.exports) // o objeto module.exports é o mesmo que o this, por conta da função arrow

// usando arrow e bind
comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(obj) // o objeto OBJ não é o mesmo this, pois a arrow function é mais forte que o bind
