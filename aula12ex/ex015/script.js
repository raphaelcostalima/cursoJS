function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano) {
        alert('[ERRO] verifique os dados novamente!')
    } else {
       var fsex = document.getElementsByName('radsex')
       var idade = ano - Number(fano.value)
       res.innerHTML = `Idade calculada: ${idade}`
       var genero = ''
       var img = document.createElement('img')
       img.setAttribute('id', 'foto')
       if (fsex[0].checked) {
           genero = 'homem'
           if (idade >= 0 && idade < 10) {
               //criança
               img.setAttribute('src', 'crianca-homem.png')
           } else if (idade < 21) {
               //jovem
               img.setAttribute('src', 'jovem-homem.png')
           } else if (idade < 50) {
               //adulto
               img.setAttribute('src', 'adulto-homem.png')
           } else {
               //idoso
               img.setAttribute('src', 'idoso-homem.png')
           }
       } else if (fsex[1].checked) {
           genero = 'mulher'
           if (idade >= 0 && idade < 10) {
               //criança
               img.setAttribute('src', 'crianca-menina.png')
           } else if (idade < 21) {
               //jovem
               img.setAttribute('src', 'jovem-mulher.png')
           } else if (idade < 50) {
               //adulto
               img.setAttribute('src', 'adulto-mulher.png')
           } else {
               //idoso
               img.setAttribute('src', 'idosa-mulher.png')
           }
       }
       res.style.textAlign = 'center'
       res.innerHTML = `Detectamos um(a) ${genero} com ${idade} anos.`
       res.appendChild(img)
    }
}
