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
  const [sessionId, setSessionId] = useState(sessionIdRef.current);
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

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  useEffect(() => {
    localStorage.setItem('chat_history', JSON.stringify(messages));
  }, [messages]);

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
      const res = await fetch('https://harsh-chatbot.onrender.com/chat', {
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
    setSessionId(newId);
  };

  return (
   <div
  className="min-h-screen pt-28 px-4 sm:px-2 text-brand-slate flex items-center justify-center bg-[#0a192f]"
>
  <div className="w-full max-w-6xl h-[80vh] sm:h-[calc(100vh-100px)] flex flex-col bg-[#1e293b] rounded-xl shadow-lg border border-slate-600 overflow-hidden">
    {/* Header */}
    <div className="bg-gradient-to-r from-teal-700 to-slate-700 text-white text-lg sm:text-base font-semibold px-4 py-3 flex items-center justify-between">
      <span>🤖 Harsh’s Personal Chatbot</span>
      <button
        onClick={handleNewChat}
        className="bg-[#282c36] text-teal-300 text-sm font-medium px-3 py-1 rounded hover:bg-gray-700 transition"
      >
        New Chat
      </button>
    </div>

    {/* Chat Area */}
    <div className="flex-1 overflow-y-auto px-4 sm:px-2 py-3 space-y-4 bg-[#1e293b] scrollbar-thin scrollbar-thumb-teal-600">
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
            className={`max-w-[75%] sm:max-w-[90%] px-3 py-2 text-sm rounded-xl shadow leading-6 ${
              msg.sender === 'user'
                ? 'bg-teal-600 text-white rounded-br-none'
                : 'bg-slate-700 text-slate-200 rounded-bl-none'
            }`}
          >
            {msg.sender === 'user' ? msg.content : <ReactMarkdown>{msg.content}</ReactMarkdown>}
          </div>
          {msg.sender === 'user' && (
            <div className="w-8 h-8 rounded-full bg-teal-600 text-white flex items-center justify-center ml-2 text-base">
              🧑
            </div>
          )}
        </div>
      ))}

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

    {/* Input */}
    <div className="border-t border-slate-600 px-4 py-3 bg-[#1e293b] flex gap-2 items-center">
      <input
        type="text"
        className="flex-1 bg-slate-800 text-white border border-slate-600 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-600 text-sm placeholder:text-slate-400"
        placeholder={placeholders[placeholderIndex]}
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
        className="bg-teal-600 hover:bg-teal-500 text-white px-5 py-2 rounded-full shadow text-sm transition"
      >
        Send
      </button>
    </div>

    {/* Animation */}
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
</div>
  );
};

export default ChatBot;
