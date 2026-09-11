"use client";
import React, { useState, useEffect } from 'react';
import { Mail, Send, Bell, ArrowRight, Sparkles, Check, Loader2, X } from 'lucide-react';

export default function Newsletter05() {
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
      <div className="bg-[#e0e5ec] rounded-[1.5rem] sm:rounded-[2rem] lg:rounded-[3rem] p-6 sm:p-12 shadow-[20px_20px_60px_#bec3c9,-20px_-20px_60px_#ffffff] flex flex-col items-center text-center">
        <div className="w-24 h-24 rounded-full bg-[#e0e5ec] shadow-[10px_10px_30px_#bec3c9,-10px_-10px_30px_#ffffff] flex items-center justify-center mb-10 text-teal-600">
          <Mail size={40} />
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-700 mb-4">Stay Connected</h2>
        <p className="text-slate-500 mb-10">Subscribe for the latest updates.</p>
        
        {status === 'success' ? (
          <div className="text-green-500 font-bold text-xl animate-pulse">Successfully Subscribed!</div>
        ) : (
          <form onSubmit={handleSubmit} className="w-full flex flex-col sm:flex-row gap-6 justify-center">
            <input type="email" value={email} onChange={e=>setEmail(e.target.value)} required placeholder="Your email address" className="w-full sm:w-2/3 px-6 py-4 rounded-full bg-[#e0e5ec] shadow-[inset_10px_10px_20px_#bec3c9,inset_-10px_-10px_20px_#ffffff] focus:outline-none text-slate-700" />
            <button type="submit" disabled={status==='loading'} className="w-full sm:w-1/3 py-4 rounded-full bg-[#e0e5ec] shadow-[10px_10px_20px_#bec3c9,-10px_-10px_20px_#ffffff] hover:shadow-[inset_5px_5px_10px_#bec3c9,inset_-5px_-5px_10px_#ffffff] text-teal-600 font-bold transition-all flex justify-center items-center">
              {status === 'loading' ? <Loader2 className="animate-spin" /> : 'Join'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
