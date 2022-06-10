const { Worker, isMainThread, parentPort } = require('worker_threads');
if (isMainThread) {
    // This code is executed in the main thread and not in the worker.
    const worker = new Worker(__filename);
    worker.on('message', (msg) => { console.log(msg); });
    setTimeout(() => {
        worker.postMessage('Hello child')
    }, 1000);

} else {
    parentPort.postMessage('Hi dad');
    parentPort.on('message', message => console.log('Dad says: ' + message));
}
