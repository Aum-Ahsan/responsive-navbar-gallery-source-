"use client";
import React, { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';

export default function Cta19() {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full w-full p-4 sm:p-8 my-10 font-sans relative min-h-[260px] sm:h-[340px] lg:h-[400px] bg-slate-50 rounded-3xl border border-slate-200 flex items-center justify-center overflow-hidden">
      
      <div className="text-center z-0 p-8">
        <h2 className="text-3xl font-bold text-slate-400 mb-4">Background Content</h2>
        <p className="text-slate-400">Interact with the floating button in the bottom right corner.</p>
      </div>

      {/* Floating Action Button & Expanded Form */}
      <div className={`absolute bottom-6 right-6 sm:bottom-10 sm:right-10 transition-all duration-500 ease-out z-20 ${open ? 'w-[calc(100%-3rem)] sm:w-full sm:w-full sm:w-[280px] md:w-[340px] md:w-[400px] h-[260px] sm:h-[340px] lg:h-[400px]' : 'w-16 h-16'}`}>
        
        {/* Expanded Form State */}
        <div className={`absolute inset-0 bg-white rounded-3xl shadow-2xl border border-slate-200 flex flex-col overflow-hidden transition-all duration-500 origin-bottom-right ${open ? 'scale-100 opacity-100' : 'scale-50 opacity-0 pointer-events-none'}`}>
          <div className="bg-indigo-600 text-white p-6 flex justify-between items-center">
            <div>
              <h3 className="font-bold text-lg">Send us a message</h3>
              <p className="text-indigo-200 text-xs">We typically reply in 5 minutes</p>
            </div>
            <button onClick={() => setOpen(false)} className="w-8 h-8 rounded-full bg-indigo-500 hover:bg-indigo-400 flex items-center justify-center transition-colors">
              <X size={16} />
            </button>
          </div>
          
          <div className="p-6 flex-1 flex flex-col gap-4">
            <input type="text" placeholder="Your Name" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:outline-none text-sm" />
            <textarea placeholder="How can we help?" className="w-full flex-1 px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:outline-none text-sm resize-none"></textarea>
            <button className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl flex items-center justify-center gap-2 transition-colors">
              <Send size={16} /> Send Message
            </button>
          </div>
        </div>

        {/* FAB State */}
        <button 
          onClick={() => setOpen(true)}
          className={`absolute bottom-0 right-0 w-16 h-16 bg-indigo-600 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-indigo-700 hover:scale-105 transition-all duration-500 ${open ? 'scale-0 opacity-0' : 'scale-100 opacity-100'}`}
        >
          <MessageCircle size={28} />
        </button>

      </div>
    </div>
  );
}
