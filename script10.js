const socket = new WebSocket('ws://127.0.0.1:5500');
const messageInput = document.getElementById('messageInput');
const sendBtn = document.getElementById('sendBtn');

socket.onopen = () => {
    console.log('Connected to server');
};

sendBtn.addEventListener('click', () => {
    const message = messageInput.value;
    
    if (socket.readyState === WebSocket.OPEN && message) {
        socket.send(message);
        messageInput.value = '';
    }
});

socket.onerror = (error) => {
    console.error('WebSocket Error:', error);
};