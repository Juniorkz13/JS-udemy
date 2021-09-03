const obj = {
    a: 1,
    b: 2,
    c: 3,
    soma() {
        return a + b + c
    }
}
console.log(JSON.stringify(obj)) // transforma o objeto em string JSON, o resultado exclui a função soma, pois é formato de dados

console.log(JSON.parse('{"a": 1, "b": 2, "c": 3}')) // transforma a string JSON em objeto
