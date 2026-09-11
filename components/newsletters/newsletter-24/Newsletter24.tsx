"use client";
import React, { useState, useEffect } from 'react';
import { Mail, Send, Bell, ArrowRight, Sparkles, Check, Loader2, X, Zap } from 'lucide-react';

export default function Newsletter24() {
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
      <div className={`grid grid-cols-2 gap-4 transition-all duration-700 ease-[cubic-bezier(0.2,0.8,0.2,1)] ${isFocused ? 'gap-x-12 sm:gap-x-32' : 'hover:gap-6'}`}>
        {/* Left Column Images */}
        <div className="space-y-4 transition-transform duration-700 origin-right cursor-pointer" onClick={()=>setIsFocused(true)}>
          <div className="w-32 h-40 sm:w-48 sm:h-64 bg-slate-200 rounded-3xl overflow-hidden shadow-xl"><img src="https://images.unsplash.com/photo-1604871000636-074fa5117945?q=80&w=600&auto=format&fit=crop" className="w-full h-full object-cover" alt="Art"/></div>
          <div className="w-32 h-24 sm:w-48 sm:h-32 bg-slate-200 rounded-3xl overflow-hidden shadow-xl"><img src="https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?q=80&w=600&auto=format&fit=crop" className="w-full h-full object-cover" alt="Art"/></div>
        </div>
        
        {/* Hidden Form Center */}
        <div className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[240px] sm:w-[280px] md:w-[350px] transition-all duration-700 ${isFocused ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-90 pointer-events-none'}`}>
          <div className="bg-white p-8 border border-slate-100 shadow-2xl rounded-3xl text-center relative">
            <button onClick={()=>setIsFocused(false)} className="absolute top-4 right-4 text-slate-400 hover:text-slate-900"><X size={16}/></button>
            <Sparkles size={32} className="mx-auto text-pink-500 mb-4" />
            <h3 className="text-2xl font-black text-slate-900 mb-2">Art Weekly</h3>
            <p className="text-sm text-slate-500 mb-6">Curated galleries every Friday.</p>
            {status === 'success' ? (
              <div className="bg-pink-50 text-pink-700 p-4 rounded-xl font-bold animate-in zoom-in">Subscribed!</div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                <input type="email" value={email} onChange={e=>setEmail(e.target.value)} required placeholder="Email..." className="px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-pink-500" />
                <button type="submit" disabled={status==='loading'} className="py-3 bg-pink-500 hover:bg-pink-600 text-white font-bold rounded-xl flex justify-center">{status==='loading'?<Loader2 className="animate-spin"/>:'Subscribe'}</button>
              </form>
            )}
          </div>
        </div>

        {/* Right Column Images */}
        <div className="space-y-4 transition-transform duration-700 origin-left cursor-pointer" onClick={()=>setIsFocused(true)}>
          <div className="w-32 h-24 sm:w-48 sm:h-32 bg-slate-200 rounded-3xl overflow-hidden shadow-xl"><img src="https://images.unsplash.com/photo-1549490349-8643362247b5?q=80&w=600&auto=format&fit=crop" className="w-full h-full object-cover" alt="Art"/></div>
          <div className="w-32 h-40 sm:w-48 sm:h-64 bg-slate-200 rounded-3xl overflow-hidden shadow-xl"><img src="https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=600&auto=format&fit=crop" className="w-full h-full object-cover" alt="Art"/></div>
        </div>
      </div>
    </div>
  );
}
