"use client";
import React, { useState, useEffect } from 'react';
import { Mail, Send, Bell, ArrowRight, Sparkles, Check, Loader2, X } from 'lucide-react';

export default function Newsletter03() {
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

    <div className="w-full p-4 sm:p-8 my-10 font-sans perspective-1000">
      <div className={`relative w-full min-h-[220px] sm:h-[180px] sm:h-[240px] lg:h-[280px] lg:h-[320px] sm:h-[260px] sm:h-[340px] lg:h-[400px] transition-transform duration-700 transform-style-3d ${status === 'success' ? 'rotate-y-180' : ''}`}>
        {/* Front */}
        <div className="absolute inset-0 backface-hidden bg-white border border-slate-200 shadow-2xl rounded-3xl p-6 sm:p-10 flex flex-col items-center text-center">
          <div className="w-16 h-16 bg-rose-50 text-pink-600 rounded-full flex items-center justify-center mb-6"><Sparkles size={32}/></div>
          <h3 className="text-2xl font-black text-slate-900 mb-3">Weekly Magic</h3>
          <p className="text-slate-500 mb-8">Exclusive tips straight to your inbox.</p>
          <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
            <input type="email" value={email} onChange={e=>setEmail(e.target.value)} required placeholder="Email address" className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-600 text-center" />
            <button type="submit" disabled={status==='loading'} className="w-full py-4 bg-pink-600 text-white font-bold rounded-xl shadow-md hover:-translate-y-1 transition-transform flex justify-center">
              {status === 'loading' ? <Loader2 className="animate-spin" size={24}/> : 'Subscribe'}
            </button>
          </form>
        </div>
        
        {/* Back */}
        <div className="absolute inset-0 backface-hidden rotate-y-180 bg-gradient-to-br from-pink-600 to-rose-900 shadow-2xl rounded-3xl p-6 sm:p-10 flex flex-col items-center justify-center text-center text-white">
          <Check size={64} className="mb-6 opacity-90" />
          <h3 className="text-2xl sm:text-3xl font-black mb-2">Awesome!</h3>
          <p className="opacity-80">You're on the list.</p>
        </div>
      </div>
    </div>
  );
}
