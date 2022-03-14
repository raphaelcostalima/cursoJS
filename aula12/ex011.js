var idade = 66
console.log(`Você tem ${idade} anos.`)
if (idade < 16) {
    console.log('Não votante')
} else if (idade < 18 || idade >= 65) { //código testado acima, não há necessidade de idade >= 16 &&
    console.log('Voto opcional')
    } else {
        console.log('Voto obrigatório')
    }
    