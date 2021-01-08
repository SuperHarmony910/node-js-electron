const socket = io('http://localhost:4000'); 
const messageForm = document.getElementById('send-container');
const messageInput = document.getElementById('message-input');

socket.on('chat-message', data => {
    console.log(data);
})

messageForm.addEventListener("submit", e => {
    e.preventDefault();
    const message = messageIput.value
    socket.emit('send-chat-message', message)
    messageInput.value = ''
    g
})