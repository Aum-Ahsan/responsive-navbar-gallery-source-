"use client";
import React, { useState, useEffect } from 'react';
import { Mail, Send, Bell, ArrowRight, Sparkles, Check, Loader2, X } from 'lucide-react';

export default function Newsletter04() {
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
      <div className="bg-[#f0f0f0] border-4 border-black p-5 sm:p-8 md:p-12 shadow-[12px_12px_0_0_rgba(0,0,0,1)] flex flex-col sm:flex-row gap-8 items-center">
        <div className="flex-1 text-center lg:text-left">
          <h2 className="text-2xl sm:text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tighter text-black leading-none mb-4">JOIN THE<br/>REVOLUTION.</h2>
          <p className="text-xl font-bold border-l-4 border-blue-600 pl-4 text-black">NO SPAM. JUST PURE VALUE.</p>
        </div>
        <div className="w-full lg:w-1/2">
          {status === 'success' ? (
            <div className="bg-white border-4 border-black p-6 shadow-[8px_8px_0_0_rgba(0,0,0,1)] text-center">
              <p className="text-2xl sm:text-3xl font-black uppercase">CONFIRMED!</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input type="email" value={email} onChange={e=>setEmail(e.target.value)} required placeholder="EMAIL@DOMAIN.COM" className="w-full px-6 py-5 bg-white border-4 border-black text-xl font-bold uppercase placeholder:text-black/30 focus:outline-none focus:bg-[#ffffeb]" />
              <button type="submit" disabled={status==='loading'} className="w-full py-5 bg-blue-600 hover:bg-black border-4 border-black text-white text-2xl font-black uppercase transition-colors shadow-[6px_6px_0_0_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-[2px_2px_0_0_rgba(0,0,0,1)]">
                {status === 'loading' ? 'LOADING...' : 'SUBSCRIBE'}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
