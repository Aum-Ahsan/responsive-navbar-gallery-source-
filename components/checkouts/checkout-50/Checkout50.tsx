"use client";
import React, { useState, useEffect, useRef } from "react";
import { Send, Bot, User, CheckCircle2 } from "lucide-react";

export default function Checkout50() {
  const [messages, setMessages] = useState([
    { role: "ai", text: "Hi! I see you want to purchase the 'Creator Bundle' for $49. Would you like to pay with the Visa ending in 4242 we have on file?" }
  ]);
  const [input, setInput] = useState("");
  const [completed, setCompleted] = useState(false);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;
    const newMsg = { role: "user", text: input };
    setMessages(prev => [...prev, newMsg]);
    setInput("");

    // Mock AI response
    setTimeout(() => {
      const lower = newMsg.text.toLowerCase();
      if (lower.includes("yes") || lower.includes("sure") || lower.includes("pay") || lower.includes("ok")) {
        setMessages(prev => [...prev, { role: "ai", text: "Processing your payment securely... 🔒" }]);
        
        setTimeout(() => {
          setMessages(prev => [...prev, { role: "ai", text: "Done! Your payment of $49 was successful. A receipt has been sent to your email. 🎉" }]);
          setCompleted(true);
        }, 1500);
      } else {
        setMessages(prev => [...prev, { role: "ai", text: "Got it. If you'd like to use a different card or cancel, just let me know!" }]);
      }
    }, 1000);
  };

  return (
    <div className="w-full bg-slate-50 p-6 sm:p-10 font-sans flex justify-center">
      <div className="w-full max-w-md bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden flex flex-col h-[500px]">
        
        {/* Header */}
        <div className="bg-slate-900 p-4 flex items-center gap-3 text-white">
          <div className="w-10 h-10 bg-indigo-500 rounded-full flex items-center justify-center">
            <Bot size={20} />
          </div>
          <div>
            <h2 className="font-bold text-sm">Checkout Assistant</h2>
            <p className="text-xs text-indigo-200 flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span> Online
            </p>
          </div>
        </div>

        {/* Chat Body */}
        <div className="flex-1 p-4 overflow-y-auto bg-slate-50 space-y-4">
          {messages.map((msg, i) => (
            <div key={i} className={`flex gap-3 max-w-[85%] ${msg.role === "user" ? "ml-auto flex-row-reverse" : ""}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${msg.role === "user" ? "bg-slate-200" : "bg-indigo-100 text-indigo-600"}`}>
                {msg.role === "user" ? <User size={14} /> : <Bot size={14} />}
              </div>
              <div className={`p-3 rounded-2xl text-sm ${msg.role === "user" ? "bg-indigo-600 text-white rounded-tr-sm" : "bg-white border border-slate-200 text-slate-700 rounded-tl-sm shadow-sm"}`}>
                {msg.text}
              </div>
            </div>
          ))}
          {completed && (
            <div className="flex justify-center mt-4">
              <div className="bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-xs font-bold flex items-center gap-2">
                <CheckCircle2 size={14} /> Order Complete
              </div>
            </div>
          )}
          <div ref={endRef} />
        </div>

        {/* Input Area */}
        <div className="p-4 bg-white border-t border-slate-200">
          <div className="flex gap-2">
            <input 
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === "Enter" && handleSend()}
              disabled={completed}
              placeholder={completed ? "Chat closed." : "Type 'yes' to pay..."}
              className="flex-1 bg-slate-100 rounded-full px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 disabled:opacity-50"
            />
            <button type="button" 
              onClick={handleSend}
              disabled={completed || !input.trim()}
              className="w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center text-white hover:bg-indigo-700 transition disabled:opacity-50 disabled:bg-slate-300"
            >
              <Send size={16} className="ml-1" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
