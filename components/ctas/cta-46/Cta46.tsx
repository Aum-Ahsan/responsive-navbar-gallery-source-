"use client";
import React, { useState } from 'react';
import { Megaphone, X, ArrowRight } from 'lucide-react';

export default function Cta46() {
  const [visible, setVisible] = useState(true);

  if (!visible) {
    return (
      <div className="w-full max-w-5xl mx-auto p-4 sm:p-8 my-10 font-sans flex items-center justify-center min-h-[200px]">
        <button onClick={() => setVisible(true)} className="text-sm font-bold text-gray-500 hover:text-gray-900 border border-gray-200 px-4 py-2 rounded-lg">
          Show Banner Demo
        </button>
      </div>
    );
  }

  return (
    <div className="w-full max-w-6xl mx-auto my-10 font-sans relative pt-20 pb-10 px-4">
      
      {/* Background context to show it's a "sticky" banner */}
      <div className="text-center opacity-30 pointer-events-none mb-10">
        <h2 className="text-4xl font-bold mb-4 text-gray-300">Website Content Here</h2>
        <p className="text-gray-300 max-w-lg mx-auto">This banner is designed to stick to the top or bottom of a viewport.</p>
      </div>

      <div className="w-full bg-indigo-600 rounded-2xl sm:rounded-full shadow-[0_10px_40px_rgba(79,70,229,0.3)] border border-indigo-500 p-2 sm:p-3 flex flex-col sm:flex-row items-center justify-between gap-4 relative overflow-hidden animate-in slide-in-from-bottom-8">
        
        {/* Glow */}
        <div className="absolute top-0 left-1/4 w-1/2 h-full bg-white/20 blur-xl rounded-full"></div>

        <div className="flex items-center gap-4 relative z-10 w-full sm:w-auto">
          <div className="hidden sm:flex w-10 h-10 rounded-full bg-indigo-800 border border-indigo-500 items-center justify-center text-indigo-200 shrink-0 shadow-inner">
            <Megaphone size={18} />
          </div>
          <div className="text-center sm:text-left flex-1 sm:flex-none">
            <p className="text-white font-bold text-sm sm:text-base">
              <span className="bg-amber-400 text-amber-950 px-2 py-0.5 rounded text-xs uppercase tracking-widest mr-2 hidden sm:inline-block">New</span>
              Introducing our new AI-powered analytics dashboard.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 relative z-10 w-full sm:w-auto px-2 sm:px-0 pb-2 sm:pb-0">
          <button className="flex-1 sm:flex-none px-6 py-2 sm:py-2.5 bg-white hover:bg-gray-50 text-indigo-900 font-bold rounded-full text-sm transition-colors shadow-sm flex items-center justify-center gap-1">
            Try it out <ArrowRight size={14} />
          </button>
          <button 
            onClick={() => setVisible(false)}
            className="w-10 h-10 sm:w-8 sm:h-8 shrink-0 rounded-full bg-indigo-700 hover:bg-indigo-800 text-indigo-300 flex items-center justify-center transition-colors"
          >
            <X size={16} />
          </button>
        </div>
        
      </div>
    </div>
  );
}
