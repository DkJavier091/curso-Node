// .js --> por defecto utiliza CommonJS
// .mjs -> para utilizar ES modules
// .cjs -> para utilizar CommonJs

import { suma, resta, multiplo } from './sum.mjs'

console.log(suma(1, 2))
console.log(resta(1, 3))
console.log(multiplo(2, 4))
