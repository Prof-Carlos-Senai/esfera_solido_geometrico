const rl = require('readline-sync')
const Esfera = require('./models/Esfera')

console.log('------- Sistema para Cálculo da Esfera ----------')
console.log('-------------------------------------------------\n')
const raio = Number(rl.question('Digite o valor do raio: '))

let esfera = new Esfera(raio)

let area = esfera.calcularArea()
let volume = esfera.calcularVolume()

console.log('-------------------------------------------------')
console.log(` --- O valor da área da esfera é: ${area.toFixed(5)} cm²`)
console.log(` --- O valor do volume da esfera é: ${volume.toFixed(5)} cm³`)
console.log('-------------------------------------------------\n')
