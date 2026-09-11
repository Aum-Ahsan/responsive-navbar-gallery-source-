"use client";
import React, { useState, useEffect } from 'react';
import { Mail, Send, Bell, ArrowRight, Sparkles, Check, Loader2, X, Zap } from 'lucide-react';

export default function Newsletter23() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');
  

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus('loading');
    setTimeout(() => {
      setStatus('success');
    }, 1500);
  };

  return (

    <div className="w-full p-4 sm:p-8 my-10 font-sans group relative overflow-hidden bg-slate-950 rounded-[1.5rem] sm:rounded-[2rem] lg:rounded-[3rem] shadow-2xl border border-slate-800 min-min-h-[220px] sm:h-[180px] sm:h-[240px] lg:h-[280px] lg:h-[320px] sm:h-[260px] sm:h-[340px] lg:h-[400px] flex items-center justify-center">
      {/* Spotlight element */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" style={{background: 'radial-gradient(circle 400px at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(255,255,255,0.06), transparent 80%)'}} onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        e.currentTarget.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
        e.currentTarget.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
      }}></div>
      
      <div className="relative z-10 max-w-xl text-center p-8">
        <div className="w-20 h-20 bg-slate-900/50 rounded-full border border-white/5 flex items-center justify-center mx-auto mb-8 text-slate-400 group-hover:text-white transition-colors duration-500 shadow-[0_0_20px_rgba(0,0,0,0.5)]">
           <Zap size={32} />
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-500 mb-6 tracking-tight">Illuminated Insights</h2>
        
        {status === 'success' ? (
          <div className="border border-green-500/30 bg-green-500/10 text-green-400 p-6 rounded-2xl backdrop-blur-md animate-in fade-in">
             <Check size={32} className="mx-auto mb-2" />
             <p className="font-bold text-lg">Subscription Active</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex gap-2 p-2 bg-white/5 border border-white/10 rounded-full backdrop-blur-sm group-hover:border-white/20 transition-colors">
            <input type="email" value={email} onChange={e=>setEmail(e.target.value)} required placeholder="Email Address" className="flex-1 bg-transparent px-6 py-3 text-white placeholder:text-slate-500 focus:outline-none" />
            <button type="submit" disabled={status==='loading'} className="px-8 py-3 bg-white text-black font-black rounded-full hover:bg-slate-200 transition-colors shadow-[0_0_15px_rgba(255,255,255,0.2)]">
              {status === 'loading' ? <Loader2 className="animate-spin"/> : 'Join'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
