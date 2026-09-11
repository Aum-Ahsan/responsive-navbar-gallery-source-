"use client";
import React, { useState, useRef, useEffect } from 'react';
import { Check, Loader2 } from 'lucide-react';

export default function Newsletter18() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');
  const [opened, setOpened] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (opened && status !== 'success') {
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [opened]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus('loading');
    setTimeout(() => setStatus('success'), 1500);
  };

  return (
    <div className="w-full p-4 sm:p-8 my-10 font-sans">
      <div
        className={`bg-sky-50 rounded-[1.5rem] sm:rounded-[2rem] lg:rounded-[3rem] p-6 sm:p-12 flex flex-col items-center text-center relative overflow-hidden transition-all duration-500 ${opened ? 'bg-white shadow-2xl' : 'cursor-pointer hover:shadow-lg hover:bg-sky-100'}`}
        onClick={() => !opened && setOpened(true)}
      >
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-yellow-300 rounded-full mix-blend-multiply filter blur-3xl opacity-50" />
        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-50" />

        {/* Mailbox icon */}
        <div className={`relative z-10 w-24 h-24 mb-6 transition-all duration-500 ${opened ? '-translate-y-2 scale-110' : ''}`}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full text-blue-600">
            <path d="M4 7V4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v3"/>
            <rect width="20" height="14" x="2" y="7" rx="2"/>
            <path d="M12 11v6"/>
            <path d="M8 15h8"/>
          </svg>
        </div>

        <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-2 relative z-10">Mailbox Delivery</h2>
        <p className={`text-slate-500 relative z-10 transition-all duration-300 ${opened ? 'opacity-0 h-0 mb-0 overflow-hidden' : 'mb-8'}`}>
          Click to slide your email in.
        </p>

        <div className="w-full relative z-10 h-16">
          {status === 'success' ? (
            <div className="h-full flex items-center justify-center text-green-600 font-bold text-xl animate-in zoom-in">
              <Check size={28} className="mr-2"/> Delivered!
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              onClick={e => e.stopPropagation()}
              className={`absolute inset-0 flex items-center gap-2 transition-all duration-500 ${opened ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}
            >
              <input
                ref={inputRef}
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
                placeholder="Drop your email here..."
                className="flex-1 h-full px-6 bg-white border-2 border-blue-200 rounded-2xl focus:outline-none focus:border-blue-600 text-lg shadow-inner"
              />
              <button type="submit" disabled={status === 'loading'} className="h-full px-8 bg-blue-600 text-white font-bold rounded-2xl hover:bg-blue-700 transition-colors">
                {status === 'loading' ? <Loader2 className="animate-spin" /> : 'Send'}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
