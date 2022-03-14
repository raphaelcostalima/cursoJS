var vel = 181
console.log(`A velocidade do seu carro é de ${vel}km/h`)
if (vel > 180) {
    var multa = (vel - 180) * 7
    console.log('você excedeu o limite de velocidade!')
    console.log(`MULTA: ${multa.toLocaleString('pt-BR',{style: `currency`, currency:`BRL`})}`)
} else {
    console.log('Tenha um bom dia! Dirija com cuidado!')
}