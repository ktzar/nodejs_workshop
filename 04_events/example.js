const EventEmitter = require('events');

const chatroom = new EventEmitter()
//chatroom.setMaxListeners(1)

chatroom.once('message', (data) => {
    console.log('once', data)
})

chatroom.on('message', (data) => {
    console.log('new message', data)
})

chatroom.on('join', (data) => {
    console.log(`${data} joined`)
})

chatroom.on('leave', (data) => {
    console.log(`${data} left`)
})

setInterval(() => {
    const text = 'hello ' + Math.random().toString(26).slice(2,5)
    chatroom.emit('message', { author: 'miguel', text})
}, 1500)

setInterval(() => {
    chatroom.emit('leave', 'miguel')
}, 3500)


