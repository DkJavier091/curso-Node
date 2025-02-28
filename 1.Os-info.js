const os = require("node:os")

console.log('Información del Sistema Operativo')
console.log('-----------------------------------')
console.log('Plataforma', os.platform())
console.log('Arquitectura', os.arch())
console.log('Cpu', os.cpus())
console.log('uptime', os.uptime() / 60 / 60 / 24)
