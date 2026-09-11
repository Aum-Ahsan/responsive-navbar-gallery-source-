"use client";
import React, { useState, useEffect } from 'react';
import { Mail, Send, Bell, ArrowRight, Sparkles, Check, Loader2, X, Zap } from 'lucide-react';

export default function Newsletter19() {
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
      <div className="bg-white rounded-3xl p-8 shadow-xl border border-slate-100">
        <h2 className="text-2xl font-black mb-8 text-slate-900">Sign Up Flow</h2>
        <div className="relative pl-8 border-l-2 border-slate-100 space-y-10">
          
          <div className="relative">
            <div className={`absolute -left-[41px] w-5 h-5 rounded-full border-4 border-white transition-colors duration-500 ${status === 'idle' ? 'bg-indigo-500 ring-4 ring-indigo-100' : 'bg-slate-300'}`}></div>
            <h3 className={`font-bold ${status === 'idle' ? 'text-slate-900' : 'text-slate-400'}`}>1. Enter Email</h3>
            {status === 'idle' && (
              <form onSubmit={handleSubmit} className="mt-3 flex gap-2 animate-in slide-in-from-left-2">
                <input type="email" value={email} onChange={e=>setEmail(e.target.value)} required placeholder="Email..." className="flex-1 border border-slate-200 px-3 py-2 rounded-lg text-sm focus:outline-none focus:border-indigo-500" />
                <button type="submit" className="bg-indigo-600 text-white px-4 rounded-lg text-sm font-bold">Next</button>
              </form>
            )}
          </div>

          <div className="relative">
            <div className={`absolute -left-[41px] w-5 h-5 rounded-full border-4 border-white transition-colors duration-500 ${status === 'loading' ? 'bg-indigo-500 ring-4 ring-indigo-100' : 'bg-slate-300'}`}></div>
            <h3 className={`font-bold ${status === 'loading' ? 'text-slate-900' : 'text-slate-400'}`}>2. Verifying</h3>
            {status === 'loading' && <div className="mt-3 text-sm text-indigo-600 flex items-center gap-2 animate-in slide-in-from-left-2"><Loader2 className="animate-spin" size={16}/> Checking database...</div>}
          </div>

          <div className="relative">
            <div className={`absolute -left-[41px] w-5 h-5 rounded-full border-4 border-white transition-colors duration-500 ${status === 'success' ? 'bg-green-500 ring-4 ring-green-100' : 'bg-slate-300'}`}></div>
            <h3 className={`font-bold ${status === 'success' ? 'text-slate-900' : 'text-slate-400'}`}>3. Complete</h3>
            {status === 'success' && <div className="mt-3 text-sm text-green-600 font-bold flex items-center gap-1 animate-in slide-in-from-left-2"><Check size={16}/> Welcome aboard!</div>}
          </div>
          
        </div>
      </div>
    </div>
  );
}
