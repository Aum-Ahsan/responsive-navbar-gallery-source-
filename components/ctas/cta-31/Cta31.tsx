"use client";
import React, { useState } from 'react';
import { Share2, Copy, Check, Gift } from 'lucide-react';

export default function Cta31() {
  const [copied, setCopied] = useState(false);
  const link = "https://app.example.com/ref/ac98x2";

  const handleCopy = () => {
    navigator.clipboard.writeText(link);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full w-full p-4 sm:p-8 my-10 font-sans">
      <div className="bg-pink-50 rounded-[1.25rem] sm:rounded-[2rem] lg:rounded-[2.5rem] p-8 sm:p-12 lg:p-16 text-center border border-pink-100 shadow-xl relative overflow-hidden">
        
        {/* Decorative Shapes */}
        <div className="absolute top-10 left-10 text-pink-300 transform -rotate-12">
          <Gift size={48} strokeWidth={1} />
        </div>
        <div className="absolute bottom-10 right-10 text-pink-300 transform rotate-12">
          <Share2 size={48} strokeWidth={1} />
        </div>

        <div className="relative z-10 w-20 h-20 bg-white rounded-3xl flex items-center justify-center text-pink-500 mx-auto mb-6 shadow-lg rotate-3 border border-pink-100">
          <Gift size={40} fill="currentColor" className="text-pink-100 stroke-pink-500" />
        </div>
        
        <h2 className="relative z-10 text-3xl sm:text-5xl font-black text-pink-950 mb-4 tracking-tight">
          Give $50, Get $50
        </h2>
        <p className="relative z-10 text-pink-800/80 font-medium text-lg mb-10 max-w-lg mx-auto">
          Share your personal referral link with friends. They get a $50 welcome credit, and you earn $50 when they make their first purchase.
        </p>

        <div className="relative z-10 max-w-md mx-auto">
          <div className="text-left text-sm font-bold text-pink-900 mb-2 pl-2">Your Personal Link</div>
          
          <div className="flex bg-white p-2 rounded-2xl shadow-sm border border-pink-200 focus-within:ring-2 focus-within:ring-pink-500 transition-shadow">
            <input 
              type="text" 
              readOnly 
              value={link}
              className="flex-1 bg-transparent px-4 font-mono text-pink-900 focus:outline-none"
            />
            <button 
              onClick={handleCopy}
              className={`px-6 py-3 rounded-xl font-bold flex items-center gap-2 transition-all ${
                copied 
                  ? 'bg-green-500 text-white' 
                  : 'bg-pink-600 hover:bg-pink-700 text-white'
              }`}
            >
              {copied ? <Check size={18} /> : <Copy size={18} />}
              {copied ? 'Copied!' : 'Copy'}
            </button>
          </div>
          
          <p className="text-xs text-pink-700/60 font-medium mt-4">
            You have successfully referred <span className="font-bold text-pink-900">4 friends</span> ($200 earned).
          </p>
        </div>
        
      </div>
    </div>
  );
}
