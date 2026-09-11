"use client";
import React, { useState, useEffect } from 'react';
import { Mail, Send, Bell, ArrowRight, Sparkles, Check, Loader2, X, Zap } from 'lucide-react';

export default function Newsletter25() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');
  const [isOpen, setIsOpen] = useState(false);


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus('loading');
    setTimeout(() => {
      setStatus('success');
    }, 1500);
  };

  return (

    <div className="w-full min-h-[380px] sm:h-[200px] sm:h-[260px] lg:h-[300px] sm:h-[260px] sm:h-[340px] lg:h-[400px] lg:h-[500px] relative overflow-hidden font-sans bg-slate-50 border border-black/5 rounded-[2rem] flex items-center justify-center my-10">
      
      {/* Trigger Button */}
      <button 
        onClick={() => setIsOpen(true)}
        className={`w-20 h-20 bg-rose-600 rounded-full text-white shadow-xl hover:shadow-2xl hover:scale-110 transition-all duration-300 flex items-center justify-center ${isOpen ? 'opacity-0 scale-0' : 'opacity-100'}`}
      >
        <Mail size={32} />
      </button>

      {/* Radial Overlay */}
      <div className={`absolute inset-0 bg-rose-600 text-white flex flex-col items-center justify-center transition-all duration-700 ease-[cubic-bezier(0.2,0.8,0.2,1)] ${isOpen ? 'clip-path-full' : 'clip-path-center'}`} style={{clipPath: isOpen ? 'circle(150% at 50% 50%)' : 'circle(0% at 50% 50%)'}}>
        <button onClick={() => setIsOpen(false)} className="absolute top-8 right-8 bg-white/20 hover:bg-white/40 p-3 rounded-full transition-colors"><X size={24}/></button>
        
        <div className={`max-w-md w-full text-center transition-all duration-700 delay-300 ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-2xl sm:text-3xl sm:text-5xl font-black mb-6 drop-shadow-lg tracking-tight">Don't Miss Out.</h2>
          
          {status === 'success' ? (
            <div className="bg-white text-rose-600 p-8 rounded-3xl shadow-2xl flex flex-col items-center">
              <Check size={64} className="mb-4" />
              <p className="text-2xl font-bold">You're Awesome!</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input type="email" value={email} onChange={e=>setEmail(e.target.value)} required placeholder="Enter your best email" className="px-6 py-5 bg-white/20 backdrop-blur border border-white/40 rounded-full text-xl text-white placeholder:text-white/60 focus:outline-none focus:bg-white/30 text-center" />
              <button type="submit" disabled={status==='loading'} className="px-6 py-5 bg-white text-rose-600 font-black text-xl rounded-full shadow-2xl hover:scale-105 transition-transform flex justify-center">
                {status === 'loading' ? <Loader2 className="animate-spin" /> : 'Subscribe Now'}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
