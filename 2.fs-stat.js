// fs --> File System (sistema de archivos).
const fs = require('node:fs') // a partir de node16 se recomienda el uso de los dos puntos (:).

const stats = fs.statSync('./archivo.txt')

console.log(
    stats.isFile(), // si es un fichero
    stats.isDirectory(), // si es un directorio
    stats.isSymbolicLink(), // si es un enlace simbólico
    stats.size, //tamaño de fichero.
)