const io = require('socket.io')(4000, {
    cors: {
        origin: "*",
    },
});

io.on('connection', socket => {
    socket.emit('chat-message', "Hello, World!")
    socket.on('send-chat-message', message => {
        console.log(message)
    })
})