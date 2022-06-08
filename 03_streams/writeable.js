const stream = require('stream')

const w = new stream.Writable()
const r = new stream.Readable()

w._write = (chunk, encoding, next) => {
    //console.log('w write', chunk.toString())
    console.log(chunk.toString())
    next()
}

setInterval(() => {
    const randomString = Math.random().toString(26).slice(2, 4)
    w.write(randomString)
    process.stdout.write(randomString)
}, 1000)

