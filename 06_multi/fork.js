const { fork } = require('child_process')

const child = fork(__dirname + '/fork_child')

child.on('message', (message) => {
    console.log('Returning /total results');
    console.log(message);
    process.exit();
});

child.send('START');
