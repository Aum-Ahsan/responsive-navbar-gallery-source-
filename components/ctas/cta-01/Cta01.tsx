"use client";
import React from 'react';
import { Mail, Sparkles } from 'lucide-react';

export default function Cta01() {
  return (
    <div className="w-full w-full p-4 sm:p-8 my-10 font-sans">
      <div className="relative bg-gradient-to-br from-indigo-50 to-white rounded-[2rem] border border-indigo-100 p-8 sm:p-16 overflow-hidden shadow-lg text-center flex flex-col items-center">
        
        {/* Floating Decorative Elements */}
        <div className="absolute top-10 left-10 text-indigo-200 animate-pulse">
          <Sparkles size={40} />
        </div>
        <div className="absolute bottom-10 right-10 text-indigo-200 animate-bounce">
          <Sparkles size={24} />
        </div>

        <div className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-700 px-4 py-1.5 rounded-full text-sm font-bold mb-8">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-indigo-500"></span>
          </span>
          Weekly Newsletter
        </div>

        <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight mb-4 max-w-2xl">
          Get the latest product updates directly in your inbox.
        </h2>
        
        <p className="text-slate-600 sm:text-lg mb-10 max-w-xl">
          Join 25,000+ designers and developers who receive our weekly curated insights on UI engineering and front-end architecture.
        </p>

        <form className="w-full max-w-md relative flex flex-col sm:flex-row gap-3" onSubmit={(e) => e.preventDefault()}>
          <div className="relative w-full flex-1">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
              <Mail size={20} />
            </div>
            <input 
              type="email" 
              placeholder="Enter your email address" 
              className="w-full pl-12 pr-4 py-4 bg-white border border-slate-200 rounded-xl sm:rounded-l-xl sm:rounded-r-none focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-shadow text-slate-900 placeholder:text-slate-400 font-medium"
              required
            />
          </div>
          <button 
            type="submit" 
            className="w-full sm:w-auto px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl sm:rounded-l-none sm:rounded-r-xl transition-colors shadow-md shrink-0"
          >
            Subscribe
          </button>
        </form>
        <p className="text-xs text-slate-400 mt-4 font-medium">No spam ever. Unsubscribe at any time.</p>
      </div>
    </div>
  );
}
