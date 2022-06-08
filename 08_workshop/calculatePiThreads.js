const { Worker, isMainThread, parentPort } = require('worker_threads');
const { cpus } = require('node:os')
const { calculatePi } = require('./calculatePi')

const results = []
const numCPUs = cpus().length;
const processMsg = (msg) => {
    console.log(msg)
    results.push(msg)
    if (results.length === numCPUs) {
        const avg = results.reduce((ac, v) => ac+v, 0) / numCPUs
        console.log(`Average calculated on ${numCPUs} CPUs is ${avg}`)
    }
}

const totalAttempts = Math.pow(10, 10)

if (isMainThread) {
    for (let i = 0 ; i < numCPUs ; i++) {
        const worker = new Worker(__filename);
        worker.on('message', processMsg);
    }
} else {
    parentPort.postMessage(calculatePi(Math.floor(totalAttempts / numCPUs)))
}
