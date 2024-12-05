// Toggle Chatbot Section
const sustainabilityBtn = document.getElementById('sustainability-btn');
const financeBtn = document.getElementById('finance-btn');
const chatbotSection = document.getElementById('chatbot-section');
const sendBtn = document.getElementById('send-btn');
const userInput = document.getElementById('user-input');
const chatbotResponse = document.getElementById('chatbot-response');

sustainabilityBtn.addEventListener('click', () => {
    chatbotSection.classList.remove('d-none');
    chatbotResponse.textContent = "Let's discuss sustainability. Ask me anything!";
});

financeBtn.addEventListener('click', () => {
    chatbotSection.classList.remove('d-none');
    chatbotResponse.textContent = "Ready to talk about financial literacy? I'm here to help!";
});

// Handle Chatbot Input
sendBtn.addEventListener('click', () => {
    const userQuestion = userInput.value.trim();
    if (userQuestion) {
        chatbotResponse.textContent = `You asked: "${userQuestion}" - I'm still learning. Stay tuned for smarter answers!`;
        userInput.value = '';
    } else {
        chatbotResponse.textContent = "Please type a question!";
    }
});
