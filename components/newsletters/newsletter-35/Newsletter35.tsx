"use client";
import React, { useState } from 'react';
import { Mail, X } from 'lucide-react';

export default function Newsletter35() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full max-w-5xl mx-auto py-24 px-4 h-[500px] flex items-center justify-center relative overflow-hidden bg-gray-50 rounded-3xl border border-gray-200">
      
      <div className="text-center text-gray-400">
        (Scroll down on a real page to see a floating action bar)
        <br/>
        Click the floating button below.
      </div>

      {/* Floating Action / Bottom sticky style widget */}
      <div className="absolute bottom-8 right-8 z-50">
        {!isOpen ? (
          <button 
            onClick={() => setIsOpen(true)}
            className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-105 transition-transform"
          >
            <Mail size={24} />
          </button>
        ) : (
          <div className="bg-white p-6 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-gray-100 w-80 animate-in slide-in-from-bottom-5 fade-in duration-300 relative">
            <button 
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-900 transition-colors"
            >
              <X size={18} />
            </button>
            
            <h3 className="font-bold text-gray-900 text-lg mb-2">Join our Newsletter</h3>
            <p className="text-sm text-gray-500 mb-5">Get the best articles delivered to your inbox every Friday.</p>
            
            <form className="flex flex-col gap-3" onSubmit={(e) => { e.preventDefault(); setIsOpen(false); }}>
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-black text-sm"
                required
              />
              <button
                type="submit"
                className="w-full px-4 py-3 bg-black text-white rounded-xl font-bold hover:bg-gray-800 transition-colors text-sm"
              >
                Subscribe
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
