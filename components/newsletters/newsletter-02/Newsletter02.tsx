"use client";
import React, { useState, useEffect } from 'react';
import { Mail, Send, Bell, ArrowRight, Sparkles, Check, Loader2, X } from 'lucide-react';

export default function Newsletter02() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');
  const [isFocused, setIsFocused] = useState(false);


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus('loading');
    setTimeout(() => {
      setStatus('success');
    }, 1500);
  };

  return (

    <div className="w-full p-4 sm:p-8 my-10 font-sans flex justify-center">
      <div className="relative">
        <form onSubmit={handleSubmit} className={`flex items-center bg-white border border-slate-200 shadow-lg rounded-full transition-all duration-500 ease-out overflow-hidden ${isFocused || email ? 'w-[320px] sm:w-[380px] md:w-[450px]' : 'w-16 cursor-pointer hover:bg-slate-50'}`}>
          <div className="w-16 h-16 flex items-center justify-center shrink-0 text-slate-500" onClick={() => !isFocused && document.getElementById('expand-input')?.focus()}>
            <Mail size={24} />
          </div>
          <input
            id="expand-input"
            type="email"
            value={email}
            onChange={e=>setEmail(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            placeholder="Subscribe with email..."
            className={`h-16 flex-1 bg-transparent focus:outline-none text-slate-900 font-medium transition-opacity duration-300 ${isFocused || email ? 'opacity-100' : 'opacity-0'}`}
          />
          {(isFocused || email) && (
            <button type="submit" disabled={status==='loading'} className="h-12 px-6 mr-2 bg-purple-900 hover:bg-black text-white font-bold rounded-full transition-all flex items-center justify-center shrink-0">
              {status === 'loading' ? <Loader2 className="animate-spin" size={20}/> : <ArrowRight size={20}/>}
            </button>
          )}
        </form>
        {status === 'success' && (
          <div className="absolute top-20 left-0 w-full bg-green-50 text-green-700 border border-green-200 p-4 rounded-xl text-center text-sm font-bold animate-in fade-in slide-in-from-top-2">
            Success! Check your inbox.
          </div>
        )}
      </div>
    </div>
  );
}
