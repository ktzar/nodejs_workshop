const { Worker, isMainThread, parentPort } = require('worker_threads');
if (isMainThread) {
    // This code is executed in the main thread and not in the worker.

    const worker = new Worker(__filename);
    worker.on('message', (msg) => { console.log(msg); });

} else {
    parentPort.postMessage('Hello world!');
}
