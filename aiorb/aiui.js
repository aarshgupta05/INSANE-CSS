const userInput = document.getElementById('user-input');
const sendButton = document.getElementById('send-button');
const chatArea = document.querySelector('.chat-area');
const voiceButton = document.getElementById('voice-button');
const waveContainer = document.getElementById('wave-container');

sendButton.addEventListener('click', () => {
    const message = userInput.value.trim();
    if (message) {
        addUserMessage(message);
        userInput.value = '';
        // Simulate AI response (replace with actual AI logic)
        setTimeout(() => {
            addAiMessage('I received your message: ' + message);
        }, 500);
    }
});

function addUserMessage(message) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message', 'user-message');
    messageElement.textContent = message;
    chatArea.appendChild(messageElement);
    chatArea.scrollTop = chatArea.scrollHeight;
}

function addAiMessage(message) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message', 'ai-message');
    messageElement.textContent = message;
    chatArea.appendChild(messageElement);
    chatArea.scrollTop = chatArea.scrollHeight;
}

voiceButton.addEventListener('click', () => {
    waveContainer.classList.toggle('hidden');
});