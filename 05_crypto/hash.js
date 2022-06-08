const crypto = require('crypto')

const myHash = crypto.createHash('sha256')

console.log(myHash.update('Man oh man do I love node!').digest('hex'))

