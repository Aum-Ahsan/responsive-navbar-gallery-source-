"use client";
import React, { useState, useEffect } from 'react';
import { Mail, Send, Bell, ArrowRight, Sparkles, Check, Loader2, X, Zap } from 'lucide-react';

export default function Newsletter17() {
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
      <div className="bg-white rounded-[2rem] shadow-xl border border-slate-100 overflow-hidden flex flex-col min-h-[220px] sm:h-[180px] sm:h-[240px] lg:h-[280px] lg:h-[320px] sm:h-[260px] sm:h-[340px] lg:h-[400px]">
        <div className="bg-indigo-600 p-4 text-white font-bold flex items-center gap-3 shadow-md z-10">
          <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center"><Sparkles size={20}/></div>
          <div>NewsBot<div className="text-xs font-normal opacity-80">Online</div></div>
        </div>
        <div className="flex-1 p-6 overflow-y-auto flex flex-col gap-4 bg-slate-50">
          <div className="self-start bg-white border border-slate-200 p-3 rounded-2xl rounded-tl-sm shadow-sm max-w-[85%] text-slate-700">
            Hey! Want our best tips sent to you weekly? Drop your email below. 👇
          </div>
          {status !== 'idle' && (
            <div className="self-end bg-indigo-600 text-white p-3 rounded-2xl rounded-tr-sm shadow-sm max-w-[85%] animate-in slide-in-from-bottom-2">
              {email}
            </div>
          )}
          {status === 'loading' && (
             <div className="self-start bg-white border border-slate-200 p-3 rounded-2xl rounded-tl-sm shadow-sm flex gap-1 items-center">
               <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"></div>
               <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
               <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
             </div>
          )}
          {status === 'success' && (
             <div className="self-start bg-white border border-slate-200 p-3 rounded-2xl rounded-tl-sm shadow-sm max-w-[85%] text-slate-700 animate-in slide-in-from-bottom-2 flex items-center gap-2">
               <Check className="text-green-500" size={16}/> Got it! You're subscribed.
             </div>
          )}
        </div>
        {status === 'idle' && (
          <form onSubmit={handleSubmit} className="p-4 bg-white border-t border-slate-100 flex gap-2">
            <input type="email" value={email} onChange={e=>setEmail(e.target.value)} required placeholder="Type email..." className="flex-1 px-4 py-2 bg-slate-100 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-600" />
            <button type="submit" className="w-10 h-10 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full flex items-center justify-center shrink-0 transition-colors"><Send size={16}/></button>
          </form>
        )}
      </div>
    </div>
  );
}
