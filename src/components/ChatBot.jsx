import React, { useState, useRef, useEffect } from "react";

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hello 👋 I am your AI assistant. How can I help you?" },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const chatBodyRef = useRef(null);

  // Auto-scroll chat
  useEffect(() => {
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
    }
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim()) return;

    setMessages(prev => [...prev, { sender: "user", text: input }]);
    const userMessage = input;
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("http://localhost:5000/ask", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: userMessage }),
      });
      const data = await res.json();
      setMessages(prev => [...prev, { sender: "bot", text: data.text }]);
    } catch (err) {
      setMessages(prev => [
        ...prev,
        { sender: "bot", text: "⚠️ Could not reach AI backend" },
      ]);
    }

    setLoading(false);
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 w-14 h-14 flex items-center justify-center rounded-full 
                   bg-green-700 text-white shadow-lg z-[9999]"
      >
        {isOpen ? "✖" : "💬"}
      </button>

      {isOpen && (
        <div className="fixed bottom-24 right-6 w-96 h-[500px] flex flex-col bg-green-800 text-white rounded-2xl shadow-2xl overflow-hidden z-[9999]">
          <div className="flex items-center justify-between bg-green-900 px-4 py-3">
            <h2 className="font-semibold text-lg">Chatbot</h2>
            <button onClick={() => setIsOpen(false)}>⬇</button>
          </div>

          <div ref={chatBodyRef} className="flex-1 overflow-y-auto px-4 py-3 space-y-3 bg-green-700">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
                <div className={`px-4 py-2 rounded-lg max-w-[75%] whitespace-pre-line ${
                  msg.sender === "user" ? "bg-green-600 text-white rounded-br-none" : "bg-green-500 text-white rounded-bl-none"
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {loading && <p className="text-sm text-gray-200">Bot is typing...</p>}
          </div>

          <form
            className="flex p-3 bg-green-900"
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
          >
            <input
              type="text"
              className="flex-1 rounded-l-lg px-3 py-2 text-black outline-none"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a message..."
            />
            <button type="submit" className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-r-lg text-white">
              ⬆
            </button>
          </form>
        </div>
      )}
    </>
  );
}
