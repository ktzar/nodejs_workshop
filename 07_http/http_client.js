const http = require('https');

const request = http.request({
    host: 'google.com',
    path: '/',
    port: 443,
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    }
}, function(response) {
    let reply = '';
    response.on('data', function(chunk) {
        reply += chunk;
    });

    response.on('end', function() {
        console.log(reply)
    });
});

request.write(JSON.stringify({hello: 'world'}));
request.end();
