const { Buffer } = require('node:buffer')

const empty = Buffer.alloc(10)
const fromString = Buffer.from('hello')
const fromUnicode = Buffer.from('😌 😍 🥰 😘')
const fromArray = Buffer.from([10, 20, 30, 40])

console.log({empty, fromString, fromArray, fromUnicode})

console.log(empty.toString())
console.log(fromString.toString())
console.log(fromArray.toString())
console.log(fromUnicode.toString())
console.log('to base64', fromString.toString('base64'))


empty.fill(1)
console.log('empty filled', empty)
console.log(fromString.includes(65))
console.log(fromString.includes(0x65))


