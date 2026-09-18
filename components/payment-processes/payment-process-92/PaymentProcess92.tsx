"use client";
import React, { useState, useEffect, useRef } from "react";
import { Send, Bot, User, CheckCircle2, ShoppingBag } from "lucide-react";

type Message = {
  id: number;
  sender: 'bot' | 'user';
  text: string;
};

export default function PaymentProcess92() {
  const TOTAL_AMOUNT = 89.99;
  
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, sender: 'bot', text: `Hi there! Ready to complete your purchase of $${TOTAL_AMOUNT.toFixed(2)}?` },
    { id: 2, sender: 'bot', text: 'To get started, please type your 16-digit card number.' }
  ]);
  
  const [inputValue, setInputValue] = useState("");
  const [step, setStep] = useState(1); // 1 = card, 2 = exp, 3 = cvv, 4 = done
  const [isProcessing, setIsProcessing] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim() || isProcessing || isSuccess) return;

    // Add user message
    const userMsg = inputValue;
    setMessages(prev => [...prev, { id: Date.now(), sender: 'user', text: userMsg }]);
    setInputValue("");

    // Simulate bot thinking and responding
    setIsProcessing(true);
    
    setTimeout(() => {
      setIsProcessing(false);
      
      if (step === 1) {
        setMessages(prev => [...prev, { id: Date.now(), sender: 'bot', text: 'Perfect. Now, what is the expiration date? (MM/YY)' }]);
        setStep(2);
      } else if (step === 2) {
        setMessages(prev => [...prev, { id: Date.now(), sender: 'bot', text: 'Almost done. Just need the 3-digit CVV from the back of the card.' }]);
        setStep(3);
      } else if (step === 3) {
        setMessages(prev => [...prev, { id: Date.now(), sender: 'bot', text: 'Processing your payment...' }]);
        setStep(4);
        
        // Process actual payment
        setTimeout(() => {
          setIsSuccess(true);
        }, 1500);
      }
    }, 800);
  };

  return (
    <div className="w-full min-h-[700px] bg-neutral-100 flex items-center justify-center font-sans p-4">
      
      {!isSuccess ? (
        <div className="w-full max-w-lg bg-white rounded-3xl shadow-xl border border-neutral-200 overflow-hidden flex flex-col h-[600px] relative">
          
          {/* Header */}
          <div className="bg-neutral-900 text-white p-4 flex items-center gap-3">
            <div className="w-10 h-10 bg-indigo-500 rounded-full flex items-center justify-center relative">
              <Bot className="w-6 h-6 text-white" />
              <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 border-2 border-neutral-900 rounded-full"></div>
            </div>
            <div>
              <h2 className="font-bold">Checkout Assistant</h2>
              <p className="text-xs text-neutral-400">Usually replies instantly</p>
            </div>
            <div className="ml-auto text-right">
              <span className="text-xl font-black">${TOTAL_AMOUNT.toFixed(2)}</span>
            </div>
          </div>

          {/* Chat Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-neutral-50">
            
            {/* Sticky Cart Summary in chat */}
            <div className="flex justify-center mb-6">
              <div className="bg-white border border-neutral-200 rounded-xl p-3 flex items-center gap-3 shadow-sm text-sm">
                <ShoppingBag className="w-4 h-4 text-neutral-500" />
                <span className="font-medium text-neutral-700">1 Item in Cart</span>
              </div>
            </div>

            {messages.map((msg) => (
              <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'} animate-in fade-in slide-in-from-bottom-2`}>
                <div className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                  msg.sender === 'user' 
                    ? 'bg-indigo-600 text-white rounded-br-none' 
                    : 'bg-white border border-neutral-200 text-neutral-800 rounded-bl-none shadow-sm'
                }`}>
                  <p className={`${msg.sender === 'user' && (msg.text.includes('/') || msg.text.length > 5) ? 'font-mono tracking-widest' : ''}`}>
                    {msg.sender === 'user' && step !== 2 && msg.text.length > 5 ? `•••• ${msg.text.slice(-4)}` : msg.text}
                  </p>
                </div>
              </div>
            ))}
            
            {isProcessing && (
              <div className="flex justify-start animate-in fade-in">
                <div className="bg-white border border-neutral-200 rounded-2xl rounded-bl-none px-4 py-4 shadow-sm flex items-center gap-1.5">
                  <div className="w-2 h-2 bg-neutral-300 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                  <div className="w-2 h-2 bg-neutral-300 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                  <div className="w-2 h-2 bg-neutral-300 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-4 bg-white border-t border-neutral-200">
            <form onSubmit={handleSubmit} className="flex gap-2 relative">
              <input required 
                type="text" 
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                disabled={isProcessing || step === 4}
                placeholder={step === 1 ? "Enter card number..." : step === 2 ? "MM/YY" : "CVC"}
                className="flex-1 bg-neutral-100 border border-neutral-200 rounded-full pl-6 pr-12 py-3 focus:outline-none focus:border-indigo-500 focus:bg-white transition-colors disabled:opacity-50"
               minLength={3} maxLength={4} />
              <button 
                type="submit" 
                disabled={!inputValue.trim() || isProcessing || step === 4}
                className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center disabled:bg-neutral-300 transition-colors"
              >
                <Send className="w-4 h-4 ml-0.5" />
              </button>
            </form>
          </div>
          
        </div>
      ) : (
        <div className="max-w-md w-full bg-white rounded-3xl p-12 text-center shadow-xl border border-neutral-200 animate-in zoom-in duration-500">
           <div className="w-24 h-24 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6 relative">
             <CheckCircle2 className="w-12 h-12 text-green-500" strokeWidth={3} />
             <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-indigo-500 rounded-full border-4 border-white flex items-center justify-center">
                <Bot className="w-4 h-4 text-white" />
             </div>
           </div>
           
           <h2 className="text-3xl font-black mb-2 text-neutral-900">Payment Complete!</h2>
           <p className="text-neutral-500 mb-8 font-medium">"Thanks for chatting with me! Your order is confirmed."</p>
           
           <button type="button" 
              onClick={() => { 
                setIsSuccess(false); 
                setStep(1); 
                setMessages([
                  { id: 1, sender: 'bot', text: `Hi there! Ready to complete your purchase of $${TOTAL_AMOUNT.toFixed(2)}?` },
                  { id: 2, sender: 'bot', text: 'To get started, please type your 16-digit card number.' }
                ]); 
              }}
              className="w-full py-4 bg-neutral-900 hover:bg-neutral-800 text-white font-bold rounded-xl transition-colors"
            >
              Start Over
            </button>
        </div>
      )}

    </div>
  );
}
