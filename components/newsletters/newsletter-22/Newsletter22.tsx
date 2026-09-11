"use client";
import React, { useState, useEffect } from 'react';
import { Mail, Send, Bell, ArrowRight, Sparkles, Check, Loader2, X, Zap } from 'lucide-react';

export default function Newsletter22() {
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

    <div className="w-full p-4 sm:p-8 my-10 font-sans perspective-1000 flex justify-center">
      <div className={`w-full max-w-xl h-56 sm:h-64 relative transform-style-3d transition-transform duration-1000 ease-[cubic-bezier(0.2,0.8,0.2,1)] ${status === 'success' ? 'rotate-y-[180deg]' : isFocused ? 'rotate-y-[-90deg]' : ''}`}>
        
        {/* Front Face: Idle */}
        <div className="absolute inset-0 w-full h-full backface-hidden bg-gradient-to-br from-violet-600 to-indigo-700 rounded-3xl shadow-2xl flex flex-col items-center justify-center text-white cursor-pointer hover:shadow-[0_0_40px_rgba(79,70,229,0.5)] transition-shadow" onClick={() => setIsFocused(true)}>
          <Mail size={48} className="mb-4 animate-bounce" />
          <h3 className="text-2xl font-black">Subscribe</h3>
          <p className="text-sm opacity-80 mt-2">Click me</p>
        </div>

        {/* Right Face: Form */}
        <div className="absolute inset-0 w-full h-full backface-hidden bg-white border border-slate-200 rounded-3xl shadow-2xl p-6 flex flex-col justify-center origin-left rotate-y-90 translate-x-full">
          <button onClick={() => setIsFocused(false)} className="absolute top-4 right-4 text-slate-400 hover:text-slate-900"><X size={16}/></button>
          <h3 className="text-xl font-black text-slate-900 mb-4">Enter Email</h3>
          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <input type="email" value={email} onChange={e=>setEmail(e.target.value)} required placeholder="you@domain.com" className="px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-indigo-600" />
            <button type="submit" disabled={status==='loading'} className="py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl flex justify-center">
               {status === 'loading' ? <Loader2 className="animate-spin"/> : 'Send'}
            </button>
          </form>
        </div>

        {/* Back Face: Success */}
        <div className="absolute inset-0 w-full h-full backface-hidden bg-gradient-to-br from-green-400 to-emerald-600 rounded-3xl shadow-2xl flex flex-col items-center justify-center text-white rotate-y-180">
          <Check size={64} className="mb-4 opacity-90" />
          <h3 className="text-2xl font-black">Done!</h3>
        </div>

      </div>
    </div>
  );
}
