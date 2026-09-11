"use client";
import React, { useState, useEffect } from 'react';
import { Mail, Send, Bell, ArrowRight, Sparkles, Check, Loader2, X } from 'lucide-react';

export default function Newsletter08() {
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
      <div className="bg-white rounded-[2rem] p-6 sm:p-10 sm:p-14 shadow-xl border border-slate-100 flex flex-col items-center text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 mb-4 tracking-tight">Stay updated.</h2>
        <p className="text-slate-500 mb-10">We don't spam. Ever.</p>
        
        {status === 'success' ? (
          <div className="text-blue-600 font-bold text-xl flex items-center gap-2"><Check /> Subscribed</div>
        ) : (
          <form onSubmit={handleSubmit} className="w-full flex flex-col gap-8">
            <div className="relative w-full">
              <input 
                type="email" 
                id="floating-email"
                value={email} 
                onChange={e=>setEmail(e.target.value)} 
                required 
                className="peer w-full border-b-2 border-slate-200 bg-transparent py-3 text-lg text-slate-900 focus:outline-none focus:border-blue-600 placeholder-transparent transition-colors"
                placeholder="Email Address"
              />
              <label htmlFor="floating-email" className="absolute left-0 top-3 text-slate-400 text-lg transition-all peer-placeholder-shown:text-lg peer-placeholder-shown:top-3 peer-focus:-top-5 peer-focus:text-sm peer-focus:text-blue-600 peer-valid:-top-5 peer-valid:text-sm peer-valid:text-slate-400 font-medium">
                Email Address
              </label>
            </div>
            <button type="submit" disabled={status==='loading'} className="w-full py-4 bg-slate-900 hover:bg-black text-white font-bold rounded-full shadow-lg transition-transform hover:-translate-y-1 flex justify-center">
              {status === 'loading' ? <Loader2 className="animate-spin" /> : 'Submit'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
