"use client";
import React, { useState, useEffect } from 'react';
import { Mail, Send, Bell, ArrowRight, Sparkles, Check, Loader2, X } from 'lucide-react';

export default function Newsletter09() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');
  
  const [typewriterText, setTypewriterText] = useState('');
  const fullText = 'name@company.com';
  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      setTypewriterText(fullText.substring(0, i + 1));
      i++;
      if (i === fullText.length) clearInterval(timer);
    }, 150);
    return () => clearInterval(timer);
  }, []);


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus('loading');
    setTimeout(() => {
      setStatus('success');
    }, 1500);
  };

  return (

    <div className="w-full p-4 sm:p-8 my-10 font-sans">
      <div className="bg-emerald-900 rounded-[2rem] p-8 sm:p-16 flex flex-col sm:flex-row items-center gap-6 sm:gap-8 lg:gap-12 text-white shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-teal-600 rounded-full blur-[80px] opacity-30"></div>
        <div className="flex-1 relative z-10 text-center lg:text-left">
          <h2 className="text-2xl sm:text-3xl md:text-4xl sm:text-5xl font-black mb-6">Drop your email.</h2>
          <p className="text-slate-300 text-lg">Watch your inbox light up with weekly insights.</p>
        </div>
        <div className="w-full max-w-md relative z-10">
          {status === 'success' ? (
            <div className="bg-white/10 border border-white/20 p-8 rounded-2xl flex flex-col items-center text-center backdrop-blur">
              <Check size={48} className="text-emerald-50 mb-4" />
              <h3 className="text-2xl font-bold text-white">Added to list</h3>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="relative">
                <input type="email" value={email} onChange={e=>setEmail(e.target.value)} required placeholder={typewriterText} className="w-full px-6 py-5 bg-white border-2 border-transparent focus:border-teal-600 rounded-2xl text-slate-900 font-bold text-lg outline-none transition-all placeholder:text-slate-400" />
                <span className="absolute right-5 top-5 text-teal-600 animate-pulse font-black text-xl">|</span>
              </div>
              <button type="submit" disabled={status==='loading'} className="w-full py-5 bg-teal-600 hover:bg-teal-700 text-white font-black text-xl rounded-2xl shadow-xl transition-all hover:scale-[1.02] flex justify-center">
                {status === 'loading' ? <Loader2 className="animate-spin" /> : 'Subscribe'}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
