
let numero = document.getElementById('cx_numero')
let res = document.getElementById('res')
function calcular(a=0) {
    if (numero.value == '') {
        alert('Digite um valor!')
    } else {
        for(var cont = 1; cont <= 10; cont ++) {
            var calculo = Number(numero.value) * cont
            res.innerHTML = `${res.innerHTML}<br>${numero.value} x ${cont} = ${calculo}`
        }
    }
}
res.value = ''
