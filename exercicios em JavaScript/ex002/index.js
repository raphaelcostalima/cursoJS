let s1 = document.getElementById('valor1')
let s2 = document.getElementById('valor2')
let result = document.getElementById('res')
function somaNumeros(a=0, b=0) {
    if (s1.value == '') {
        s1.value = 0
    }
    if (s2.value == '') {
        s2.value = 0
    }
    var adic = Number(s1.value) + Number(s2.value)
    result.innerHTML = `A soma entre ${s1.value} e ${s2.value} é igual a ${adic}`
}
