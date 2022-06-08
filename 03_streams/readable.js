const stream = require('stream')

const r = new stream.Readable({
    read(size) {
        console.log('readable string with size: ', size)
        setTimeout(() => {
            console.log('pushing data', size)
            r.push('ABCDEF')
            r.push(null)
        }, 2000)
    }
})

console.log('start')
r.on('data', (data) => {
    console.log('data', data)
})

r.pipe(process.stdout)

