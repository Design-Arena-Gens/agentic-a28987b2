'use client';

import { useState } from 'react';

interface Message {
  text: string;
  isUser: boolean;
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { text: "Hello! I'm here to help you with any questions about Shakir Clinical Laboratory. How can I assist you today?", isUser: false }
  ]);
  const [inputValue, setInputValue] = useState('');

  const handleSend = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = { text: inputValue, isUser: true };
    setMessages(prev => [...prev, userMessage]);

    // Simple bot responses
    setTimeout(() => {
      let botResponse = '';
      const lowerInput = inputValue.toLowerCase();

      if (lowerInput.includes('report') || lowerInput.includes('result')) {
        botResponse = "You can access your clinical reports online by visiting our Reports Portal. You'll need your patient ID and the access code provided when you submitted your sample.";
      } else if (lowerInput.includes('hour') || lowerInput.includes('time') || lowerInput.includes('open')) {
        botResponse = "We're open Monday to Friday: 7:00 AM - 8:00 PM, Saturday: 8:00 AM - 6:00 PM, and Sunday: 9:00 AM - 2:00 PM.";
      } else if (lowerInput.includes('test') || lowerInput.includes('service')) {
        botResponse = "We offer a wide range of clinical tests including blood tests, urine analysis, molecular diagnostics, pathology services, and more. Would you like to know about a specific test?";
      } else if (lowerInput.includes('appointment') || lowerInput.includes('book')) {
        botResponse = "To book an appointment, you can call us at +1 (555) 123-4567 or visit our facility. Walk-ins are also welcome!";
      } else if (lowerInput.includes('location') || lowerInput.includes('address')) {
        botResponse = "We're located at 123 Medical Center Drive. We have ample parking and wheelchair accessibility.";
      } else if (lowerInput.includes('price') || lowerInput.includes('cost')) {
        botResponse = "Test prices vary depending on the type of test. Please call us at +1 (555) 123-4567 for specific pricing information or to inquire about insurance coverage.";
      } else {
        botResponse = "Thank you for your question. For detailed information, please call us at +1 (555) 123-4567 or visit our Contact page. Our staff will be happy to help!";
      }

      setMessages(prev => [...prev, { text: botResponse, isUser: false }]);
    }, 500);

    setInputValue('');
  };

  return (
    <>
      {/* Chatbot Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 w-16 h-16 bg-primary text-white rounded-full shadow-lg hover:bg-accent transition-all z-50 flex items-center justify-center"
      >
        {isOpen ? (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
        )}
      </button>

      {/* Chatbot Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-80 md:w-96 h-96 bg-white rounded-lg shadow-2xl z-50 flex flex-col">
          {/* Header */}
          <div className="bg-primary text-white px-4 py-3 rounded-t-lg">
            <h3 className="font-semibold">Shakir Lab Assistant</h3>
            <p className="text-xs opacity-90">We're here to help!</p>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] px-4 py-2 rounded-lg ${
                    message.isUser
                      ? 'bg-primary text-white'
                      : 'bg-gray-200 text-gray-800'
                  }`}
                >
                  <p className="text-sm">{message.text}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="border-t p-3 flex space-x-2">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Type your message..."
              className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-sm"
            />
            <button
              onClick={handleSend}
              className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-accent transition"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
}
