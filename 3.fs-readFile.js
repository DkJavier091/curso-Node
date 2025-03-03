const fs = require('node:fs')

console.log('Leyendo el primer archivo...')
// Devuelve un buffer de memoria en byte --> necesario, 'utf-8'
const text = fs.readFileSync('./archivo.txt', 'utf-8')

console.log(text)

console.log('Leyendo el segundo archivo...')
const secondtext = fs.readFileSync('./archivo2.txt', 'utf-8')

console.log(secondtext)

