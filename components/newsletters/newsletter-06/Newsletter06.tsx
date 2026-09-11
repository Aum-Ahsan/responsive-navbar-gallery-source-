"use client";
import React, { useState, useEffect } from 'react';
import { Mail, Send, Bell, ArrowRight, Sparkles, Check, Loader2, X } from 'lucide-react';

export default function Newsletter06() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');
  const [error, setError] = useState(false);


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
      <div className="bg-white rounded-[2rem] p-5 sm:p-8 md:p-12 shadow-2xl border border-slate-100 relative">
        <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-2">Newsletter</h2>
        <p className="text-slate-500 mb-8">We will send you a welcome email immediately.</p>
        
        {status === 'success' ? (
          <div className="bg-purple-50 text-fuchsia-600 p-6 rounded-2xl flex items-center gap-4">
            <Check size={32} /> <span className="font-bold text-lg">Thank you for subscribing!</span>
          </div>
        ) : (
          <form onSubmit={(e) => { e.preventDefault(); if(!email.includes('@')) { setError(true); setTimeout(()=>setError(false), 500); return; } setStatus('loading'); setTimeout(()=>setStatus('success'),1500); }} className="relative">
            <div className={`transition-transform duration-300 ${error ? 'translate-x-2 -translate-x-2' : ''} ${error ? 'animate-bounce' : ''}`}>
              <div className={`flex items-center border-2 rounded-2xl overflow-hidden transition-colors ${error ? 'border-red-500 bg-red-50' : email.includes('@') ? 'border-green-500 bg-white' : 'border-slate-200 bg-slate-50'}`}>
                <div className="pl-5 text-slate-400"><Mail size={20}/></div>
                <input type="email" value={email} onChange={e=>{setEmail(e.target.value); setError(false);}} placeholder="Enter valid email..." className="w-full px-4 py-5 bg-transparent focus:outline-none text-slate-900 font-medium" />
                {email.includes('@') && !error && <div className="pr-5 text-green-500"><Check size={20}/></div>}
              </div>
            </div>
            {error && <p className="text-red-500 text-sm font-bold mt-2 absolute -bottom-6 left-2 animate-in fade-in">Please enter a valid email containing '@'</p>}
            
            <button type="submit" disabled={status==='loading'} className="w-full mt-8 py-5 bg-slate-900 hover:bg-black text-white font-bold rounded-2xl shadow-lg hover:shadow-xl transition-all flex justify-center">
               {status === 'loading' ? <Loader2 className="animate-spin" /> : 'Subscribe Now'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
