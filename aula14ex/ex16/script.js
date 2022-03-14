function contar() {
    var a1 = document.getElementById('txti')
    var a2 = document.getElementById('txtf')
    var a3 = document.getElementById('txtp')
    var res = document.getElementById('res')
    if (a1.value.length == 0 || a2.value.length == 0 || a3.value.length == 0) {
        //alert('[erro!] faltam dados!')
        res.innerHTML = 'Impossivél contar!'
    } else {
        res.innerHTML = `contando...`
        var ini = Number(a1.value)
        var fim = Number(a2.value)
        var passo = Number(a3.value)
        if (passo <= 0) {
            alert('Passo inválido! considerando valor 1')
            passo == 1
        }
        if (ini < fim) {
            while (ini < fim) {
                res.innerHTML += ` ${ini } \u{1f449}`
                ini += passo
            }
            } else {
                while (ini > fim) {
                    res.innerHTML += ` ${ini } \u{1f449}`
                    ini -= passo
                }
            res.innerHTML += `\u{1f3c1}`
        }
       
    }
    
}