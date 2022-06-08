const cluster = require('node:cluster')
const http = require('node:http')
const { cpus } = require('node:os')
const process = require('node:process')

const numCPUs = cpus().length;

if (cluster.isPrimary) {
    console.log(`Primary ${process.pid} is running`);

    // Fork workers.
    for (let i = 0; i < numCPUs; i++) {
        cluster.fork();
    }

    cluster.on('exit', (worker, code, signal) => {
        console.log(`worker ${worker.process.pid} died`);
    });
} else {
    // Workers can share any TCP connection
    // In this case it is an HTTP server
    http.createServer((req, res) => {
        res.writeHead(200);
        res.end(`hello world from ${process.pid}\n`);
    }).listen(8000);

    console.log(`Worker ${process.pid} started`);
}
