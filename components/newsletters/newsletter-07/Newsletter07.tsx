"use client";
import React, { useState, useEffect } from 'react';
import { Mail, Send, Bell, ArrowRight, Sparkles, Check, Loader2, X } from 'lucide-react';

export default function Newsletter07() {
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

    <div className="w-full p-4 sm:p-8 my-10 font-sans">
      <div className="bg-slate-900 rounded-[1.25rem] sm:rounded-[2rem] lg:rounded-[2.5rem] p-8 sm:p-14 shadow-2xl relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tr from-pink-600/20 to-transparent blur-2xl"></div>
        <div className="relative z-10 text-center text-white">
          <div className="inline-block bg-white/10 backdrop-blur rounded-full px-4 py-2 text-sm font-bold text-rose-50 mb-6 border border-white/10">
            🎁 Unlock Free E-Book
          </div>
          <h2 className="text-2xl sm:text-3xl sm:text-5xl font-black mb-10 leading-tight">Enter your email to unlock the React Handbook.</h2>
          
          {status === 'success' ? (
            <div className="animate-in zoom-in duration-500 bg-green-500/20 border border-green-500 rounded-2xl p-8 flex flex-col items-center">
              <Check size={48} className="text-green-400 mb-4" />
              <p className="text-2xl font-bold">Unlocked!</p>
              <button className="mt-6 px-8 py-3 bg-green-500 hover:bg-green-400 text-black font-black rounded-full">Download PDF</button>
            </div>
          ) : (
            <div className="max-w-md mx-auto">
              <div className="flex justify-between text-xs font-bold text-slate-400 mb-2">
                <span>Progress</span>
                <span>{email.length > 5 && email.includes('@') ? '100%' : Math.min(email.length * 10, 80)}%</span>
              </div>
              <div className="w-full h-2 bg-slate-800 rounded-full mb-8 overflow-hidden">
                <div className="h-full bg-pink-600 transition-all duration-300" style={{ width: email.length > 5 && email.includes('@') ? '100%' : `${Math.min(email.length * 10, 80)}%` }}></div>
              </div>
              <form onSubmit={handleSubmit} className="flex gap-2 bg-slate-800/50 p-2 rounded-2xl border border-slate-700">
                <input type="email" value={email} onChange={e=>setEmail(e.target.value)} required placeholder="Email required to unlock..." className="flex-1 px-4 py-3 bg-transparent focus:outline-none text-white" />
                <button type="submit" disabled={status==='loading' || !(email.length > 5 && email.includes('@'))} className="px-6 py-3 bg-white text-black font-bold rounded-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed">
                  {status === 'loading' ? <Loader2 className="animate-spin text-black" /> : 'Unlock'}
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
