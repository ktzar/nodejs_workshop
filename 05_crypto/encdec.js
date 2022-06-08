const crypto = require('crypto');

const KEY = 'thisismysecret'
const IV = 'secretiv'
const key = crypto.createHash('sha256').update(KEY).digest()
const iv = crypto.createHash('md5').update(IV).digest()

function decrypt(cryptkey, iv, encryptdata) {
    const decipher = crypto.createDecipheriv('aes-256-cbc', cryptkey, iv);
    return Buffer.concat([
        decipher.update(encryptdata),
        decipher.final()
    ]);
}

function encrypt(cryptkey, iv, cleardata) {
    const encipher = crypto.createCipheriv('aes-256-cbc', cryptkey, iv);
    return Buffer.concat([
        encipher.update(cleardata),
        encipher.final()
    ]);
}

const cryptkey = crypto.createHash('sha256').update(KEY).digest(),
    buf = Buffer.from("Here is some data for the encrypt"), // 32 chars
    enc = encrypt(cryptkey, iv, buf);
const dec = decrypt(cryptkey, iv, enc);

console.warn("encrypt length: ", enc.length);
console.warn("encrypt in Base64:", enc.toString('base64'));
console.warn("decrypt all: " + dec.toString('utf8'));
