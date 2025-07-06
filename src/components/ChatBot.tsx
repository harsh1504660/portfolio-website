import React, { useState, useEffect, useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ReactMarkdown from 'react-markdown';

interface Message {
  sender: 'user' | 'bot';
  content: string;
}

const ChatBot = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const sessionIdRef = useRef<string>(uuidv4());
  const [sessionId, setSessionId] = useState(sessionIdRef.current); // Optional: if you display session ID somewhere  
  const [isLoading, setIsLoading] = useState(false);
  const [placeholderIndex, setPlaceholderIndex] = useState(0);
  const [animatePlaceholder, setAnimatePlaceholder] = useState(true);
  const [isInputFocused, setIsInputFocused] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const placeholders = [
    "Ask anything...",
    "Your favorite quote?",
    "Tell me about your AI projects",
    "List down your hobbies...",
    "What are your career goals?",
    "Share your favorite books...",
  ];

  // Load session + chat history
  useEffect(() => {
    setSessionId(uuidv4());

    const savedMessages = localStorage.getItem('chat_history');
    if (savedMessages) {
      try {
        const parsed = JSON.parse(savedMessages);
        if (Array.isArray(parsed)) {
          setMessages(parsed);
        }
      } catch (e) {
        console.error("Failed to parse saved chat history:", e);
      }
    }
  }, []);

  // Auto-scroll
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  // Save chat to localStorage
  useEffect(() => {
    localStorage.setItem('chat_history', JSON.stringify(messages));
  }, [messages]);

  // Placeholder animation
  useEffect(() => {
    const interval = setInterval(() => {
      setAnimatePlaceholder(false);
      setTimeout(() => {
        setPlaceholderIndex((prev) => (prev + 1) % placeholders.length);
        setAnimatePlaceholder(true);
      }, 200);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMsg: Message = { sender: 'user', content: input };
    setMessages((prev) => [...prev, userMsg]);
    setIsLoading(true);
    setInput('');

    try {
      const res = await fetch('http://localhost:8000/chat', {
      
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
  user_input: input,
  session_id: sessionIdRef.current,
}),
      });

      const data = await res.json();
      const botMsg: Message = { sender: 'bot', content: data.response };
      setMessages((prev) => [...prev, botMsg]);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

 const handleNewChat = () => {
  setMessages([]);
  setInput('');
  localStorage.removeItem('chat_history');
  const newId = uuidv4();
  sessionIdRef.current = newId;
  setSessionId(newId);  // Optional: keeps UI session state in sync
};

  return (
    <div
      className="min-h-[calc(100vh-80px)] pt-28 px-4 text-brand-slate flex items-center justify-center"
      style={{ backgroundColor: 'rgba(10, 25, 47, 1)' }}
    >
      <div className="w-full max-w-6xl h-[70vh] flex flex-col bg-[#1e293b] rounded-xl shadow-lg border border-slate-600 overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-teal-700 to-slate-700 text-white text-xl font-semibold px-6 py-4 flex items-center justify-between">
          <span>🤖 Harsh’s Personal Chatbot</span>
          <button
            onClick={handleNewChat}
            className="bg-[#282c36] text-teal-300 text-sm font-medium px-3 py-1 rounded shadow hover:bg-gray-100 transition"
          >
            New Chat
          </button>
        </div>

        {/* Chat Area */}
        <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4 bg-[#1e293b] scrollbar-thin scrollbar-thumb-teal-600 scrollbar-track-transparent">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`flex items-start ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              {msg.sender === 'bot' && (
                <div className="w-8 h-8 rounded-full bg-slate-600 text-white flex items-center justify-center mr-2 text-base">
                  🤖
                </div>
              )}
              <div
                className={`max-w-[70%] px-3 py-2 text-sm rounded-xl shadow  leading-7 ${
    msg.sender === 'user'
      ? 'bg-teal-600 text-white rounded-br-none'
      : 'bg-slate-700 text-slate-200 rounded-bl-none'
  }`}
              >
                {msg.sender === 'user' ? (
                  msg.content
                ) : (
                  <ReactMarkdown>{msg.content}</ReactMarkdown>
                )}
              </div>
              {msg.sender === 'user' && (
                <div className="w-8 h-8 rounded-full bg-teal-600 text-white flex items-center justify-center ml-2 text-base">
                  🧑
                </div>
              )}
            </div>
          ))}

          {/* Typing animation */}
          {isLoading && (
            <div className="flex items-start justify-start">
              <div className="w-8 h-8 rounded-full bg-slate-600 text-white flex items-center justify-center mr-2 text-base">
                🤖
              </div>
              <div className="bg-slate-700 text-slate-200 text-sm px-4 py-2 rounded-xl rounded-bl-none max-w-[70%] shadow">
                <span className="typing-dots flex gap-1">
                  <span className="dot one" />
                  <span className="dot two" />
                  <span className="dot three" />
                </span>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Input Bar */}
        <div className="border-t border-slate-600 px-4 py-3 bg-[#1e293b] flex gap-2 relative">
          {!isInputFocused && !input.trim() && (
            <div className="absolute left-9 top-1/2 transform -translate-y-1/2 pointer-events-none text-slate-400 text-sm transition-all duration-300 ease-in-out select-none">
              <span
                className={`transition-opacity transform duration-300 ease-in-out ${
                  animatePlaceholder ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-1'
                }`}
              >
                {placeholders[placeholderIndex]}
              </span>
            </div>
          )}
          <input
            type="text"
            className="flex-1 bg-slate-800 text-white border border-slate-600 rounded-full px-5 py-2 focus:outline-none focus:ring-2 focus:ring-teal-600 placeholder:text-transparent"
            placeholder="..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onFocus={() => setIsInputFocused(true)}
            onBlur={() => {
              if (!input.trim()) setIsInputFocused(false);
            }}
            onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
          />
          <button
            onClick={sendMessage}
            className="bg-teal-600 hover:bg-teal-500 text-white px-6 py-2 rounded-full shadow transition"
          >
            Send
          </button>
        </div>
      </div>

      {/* Typing dots animation */}
      <style>
        {`
          .dot {
            width: 6px;
            height: 6px;
            background-color: #cbd5e1;
            border-radius: 50%;
            animation: blink 1.4s infinite both;
          }

          .dot.one { animation-delay: 0s; }
          .dot.two { animation-delay: 0.2s; }
          .dot.three { animation-delay: 0.4s; }

          @keyframes blink {
            0%, 80%, 100% { opacity: 0; }
            40% { opacity: 1; }
          }
        `}
      </style>
    </div>
  );
};

export default ChatBot;
