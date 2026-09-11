"use client";
import React, { useState, useEffect } from 'react';
import { Mail, Send, Bell, ArrowRight, Sparkles, Check, Loader2, X } from 'lucide-react';

export default function Newsletter10() {
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
      <div className="relative rounded-[1.5rem] sm:rounded-[2rem] lg:rounded-[3rem] overflow-hidden shadow-2xl p-6 sm:p-10 sm:p-20 text-center bg-slate-900 min-min-h-[380px] sm:h-[200px] sm:h-[260px] lg:h-[300px] sm:h-[260px] sm:h-[340px] lg:h-[400px] lg:h-[500px] flex items-center justify-center">
        <div className="absolute inset-0">
           <img src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2000&auto=format&fit=crop" className="w-full h-full object-cover opacity-40 mix-blend-overlay" alt="Abstract bg"/>
           <div className="absolute inset-0 bg-gradient-to-t from-purple-900/90 to-transparent"></div>
        </div>
        
        <div className="relative z-10 w-full max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-3xl sm:text-5xl sm:text-7xl font-black text-white mb-6 tracking-tight drop-shadow-xl">Discover More</h2>
          <p className="text-xl text-white/80 mb-12 drop-shadow-md font-medium">Join our exclusive mailing list today.</p>
          
          {status === 'success' ? (
            <div className="bg-white/20 backdrop-blur-xl border border-white/30 rounded-3xl p-8 animate-in zoom-in text-white shadow-[0_8px_32px_0_rgba(0,0,0,0.3)]">
              <Check size={64} className="mx-auto mb-4" />
              <p className="text-2xl sm:text-3xl font-black">Welcome!</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white/10 backdrop-blur-xl border border-white/20 p-3 rounded-[2rem] flex flex-col sm:flex-row gap-3 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)]">
              <div className="flex-1 relative flex items-center">
                <Mail className="absolute left-6 text-white/50" size={24} />
                <input type="email" value={email} onChange={e=>setEmail(e.target.value)} required placeholder="Your email..." className="w-full pl-16 pr-6 py-5 bg-transparent text-white placeholder:text-white/50 font-bold text-lg focus:outline-none" />
              </div>
              <button type="submit" disabled={status==='loading'} className="py-5 px-10 bg-white text-slate-900 hover:bg-purple-50 font-black text-lg rounded-3xl transition-colors flex justify-center items-center shadow-lg">
                {status === 'loading' ? <Loader2 className="animate-spin text-slate-900" /> : 'Subscribe'}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
