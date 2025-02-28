import { platform, arch, cpus, uptime } from "node:os"

console.log('Información del Sistema Operativo')
console.log('-----------------------------------')
console.log('Plataforma', platform())
console.log('Arquitectura', arch())
console.log('Cpu', cpus())
console.log('uptime', uptime() / 60 / 60 / 24)
