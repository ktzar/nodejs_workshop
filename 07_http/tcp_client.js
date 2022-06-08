const net = require('net');

const client = new net.Socket();

client.connect(80, 'google.com', function() {
    console.log('Connected');
    client.write("GET / HTTP/1.1\nHOST: google.com\n\n");
});

client.on('data', function(data) {
    console.log('Received: ' + data);
    client.destroy();
});

client.on('close', function() {
    console.log('Connection closed');
});
