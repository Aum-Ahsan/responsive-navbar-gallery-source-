"use client";
import React, { useState, useEffect } from 'react';
import { Mail, Send, Bell, ArrowRight, Sparkles, Check, Loader2, X } from 'lucide-react';

export default function Newsletter15() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');
  const [isOpen, setIsOpen] = useState(false);


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus('loading');
    setTimeout(() => {
      setStatus('success');
    }, 1500);
  };

  return (

    <div className="w-full p-4 sm:p-8 my-10 font-sans flex justify-center">
      <button 
        onClick={() => setIsOpen(true)}
        className="px-8 py-4 bg-pink-600 hover:bg-pink-700 text-white font-bold rounded-full transition-all shadow-xl hover:shadow-2xl flex items-center gap-3 hover:-translate-y-1"
      >
        <Mail size={20} /> Subscribe to Newsletter
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-300">
          <div className="bg-white rounded-3xl shadow-2xl w-full max-w-md overflow-hidden animate-in zoom-in-95 duration-300">
            <div className="relative h-32 bg-rose-900 flex items-center justify-center">
              <button onClick={() => setIsOpen(false)} className="absolute top-4 right-4 text-white/70 hover:text-white bg-black/20 rounded-full p-2">
                <X size={20} />
              </button>
              <Mail size={48} className="text-white opacity-80" />
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-black text-slate-900 mb-2">Join the Club</h3>
              <p className="text-slate-500 mb-6">Get our weekly updates straight to your inbox.</p>
              
              {status === 'success' ? (
                <div className="bg-green-50 text-green-700 border border-green-200 rounded-xl p-4 text-center">
                  <Check className="mx-auto mb-2" size={32} />
                  <p className="font-bold">Subscription Confirmed!</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <input type="email" value={email} onChange={e=>setEmail(e.target.value)} required placeholder="you@example.com" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-600 transition-all" />
                  <button type="submit" disabled={status==='loading'} className="w-full py-3 bg-pink-600 hover:bg-pink-700 text-white font-bold rounded-xl transition-all flex justify-center">
                    {status === 'loading' ? <Loader2 className="animate-spin" /> : 'Subscribe Now'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
