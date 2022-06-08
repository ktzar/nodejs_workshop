const { exec, spawn } = require('child_process');

const child = spawn('pwd');

child.on('exit', function (code, signal) {
    console.log('child process exited with ' +
        `code ${code} and signal ${signal}`);
});

child.stdout.on('data', data => {
    console.log('data: ', data.toString());
});

exec('ls -lh', (error, stdout, stderr) => {
    if (error) {
        console.error(`error: ${error.message}`);
        return;
    }

    if (stderr) {
        console.error(`stderr: ${stderr}`);
        return;
    }

    console.log(`stdout:\n${stdout}`);
});

