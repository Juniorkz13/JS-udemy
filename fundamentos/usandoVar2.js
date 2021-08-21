var numero = 1
{
    var numero = 2
    console.log('dentro =', numero)
}
console.log('fora =', numero)

// tanto dentro quanto fora tem o mesmo valor 2, pois o escopo é global