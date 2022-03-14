let valor = document.getElementById('itens')
let res = document.getElementById('res')
afazeres = []
valor.focus()


function adicionar() {
    if (valor.value.length == 0) {
        alert('Digite uma tarefa!')
    } else {
        let item = document.createElement('option')
        item.text = `${valor.value}`
        res.appendChild(item)
        valor.value = ""
    }
}
