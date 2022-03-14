/*
let num = [5, 7, 8, 2 , 4]
for (var cont = 0; cont < num.length ; cont ++) {
    console.log(num[cont])
}
*/
/*
let valores = [3, 6, 7, 1, 9, 4, 5]
for (var pos = 0; pos < valores.length; pos ++) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
*/
let valores = [4, 6, 7, 3, 1, 2]
valores.sort()
for (pos in valores) {
    console.log(valores[pos])
}
var pos = valores.indexOf(4)
if (pos == -1) {
    console.log('O valor não foi encontrado')
} else {
    console.log(`O valor está na posição ${pos}`)
}
