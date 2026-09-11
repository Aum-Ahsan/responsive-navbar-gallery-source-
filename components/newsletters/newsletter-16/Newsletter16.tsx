"use client";
import React, { useState, useEffect } from 'react';
import { Mail, Send, Bell, ArrowRight, Sparkles, Check, Loader2, X, Zap } from 'lucide-react';

export default function Newsletter16() {
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

    <div className="w-full p-4 sm:p-8 my-10 font-mono">
      <div className="bg-[#0c0c0c] rounded-lg shadow-2xl border border-zinc-800 overflow-hidden">
        <div className="bg-[#1a1a1a] px-4 py-2 flex items-center gap-2 border-b border-zinc-800">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
          <div className="ml-4 text-xs text-zinc-500">guest@newsletter:~</div>
        </div>
        <div className="p-6 text-green-400 min-h-[160px] sm:h-[200px] lg:h-[250px] flex flex-col">
          <p className="mb-2">$ ./subscribe.sh</p>
          <p className="text-zinc-300 mb-6">Initializing newsletter protocol... Ready.</p>
          
          {status === 'success' ? (
            <div className="mt-auto">
              <p className="text-blue-400 mb-1">[ OK ] Subscription active.</p>
              <p className="text-zinc-400">$ <span className="animate-pulse">_</span></p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-auto">
              <label className="block mb-2 text-zinc-400">Enter email address:</label>
              <div className="flex items-center">
                <span className="mr-2 text-zinc-500">&gt;</span>
                <input 
                  type="email" 
                  value={email} 
                  onChange={e=>setEmail(e.target.value)} 
                  autoFocus
                  required
                  className="bg-transparent border-none focus:outline-none text-green-400 w-full"
                  disabled={status==='loading'}
                />
              </div>
              {status === 'loading' && <p className="mt-4 text-yellow-400 animate-pulse">Establishing connection...</p>}
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
