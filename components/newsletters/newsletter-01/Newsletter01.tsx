"use client";
import React, { useState, useEffect } from 'react';
import { Mail, Send, Bell, ArrowRight, Sparkles, Check, Loader2, X } from 'lucide-react';

export default function Newsletter01() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');
  const [step, setStep] = useState(1);


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
      <div className="bg-white rounded-[2rem] shadow-xl border border-slate-100 overflow-hidden relative min-h-[240px] sm:min-h-[260px] lg:min-h-[350px]">
        {/* Progress Bar */}
        <div className="absolute top-0 left-0 h-2 bg-teal-600 transition-all duration-500" style={{ width: `${step * 33.33}%` }}></div>
        
        <div className="p-8 sm:p-12 relative h-full flex flex-col">
          {step === 1 && (
            <div className="animate-in slide-in-from-right duration-500 flex-1">
              <div className="w-12 h-12 bg-emerald-50 text-teal-600 rounded-xl flex items-center justify-center mb-6"><Mail size={24} /></div>
              <h3 className="text-2xl sm:text-3xl font-black text-slate-900 mb-3">Step 1: Your Email</h3>
              <p className="text-slate-500 mb-8">Where should we send the updates?</p>
              <input type="email" value={email} onChange={e=>setEmail(e.target.value)} placeholder="name@company.com" className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-600 text-lg mb-6" />
              <button onClick={() => email && setStep(2)} className="w-full py-4 bg-emerald-900 hover:bg-black text-white font-bold rounded-xl flex justify-center items-center gap-2">Continue <ArrowRight size={20} /></button>
            </div>
          )}
          {step === 2 && (
            <div className="animate-in slide-in-from-right duration-500 flex-1">
              <button onClick={() => setStep(1)} className="text-slate-400 hover:text-slate-900 text-sm font-bold flex items-center gap-1 mb-6"><ArrowRight className="rotate-180" size={16}/> Back</button>
              <h3 className="text-2xl sm:text-3xl font-black text-slate-900 mb-3">Step 2: Preferences</h3>
              <p className="text-slate-500 mb-8">What are you interested in?</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {['Design', 'Engineering', 'Product', 'News'].map(topic => (
                  <label key={topic} className="flex items-center gap-3 p-4 min-h-[56px] border border-slate-200 rounded-xl cursor-pointer hover:bg-slate-50">
                    <input type="checkbox" className="w-5 h-5 shrink-0 accent-teal-600" defaultChecked={topic==='Design'} />
                    <span className="font-semibold text-slate-700 leading-tight">{topic}</span>
                  </label>
                ))}
              </div>
              <button onClick={() => { setStatus('loading'); setStep(3); setTimeout(() => setStatus('success'), 1500) }} className="w-full py-4 bg-teal-600 hover:bg-teal-700 text-white font-bold rounded-xl flex justify-center items-center gap-2">Complete Signup</button>
            </div>
          )}
          {step === 3 && (
            <div className="animate-in zoom-in duration-500 flex-1 flex flex-col items-center justify-center text-center py-10">
              {status === 'loading' ? (
                <Loader2 size={48} className="animate-spin text-teal-600 mb-6" />
              ) : (
                <>
                  <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6"><Check size={40}/></div>
                  <h3 className="text-2xl sm:text-3xl font-black text-slate-900 mb-2">You're in!</h3>
                  <p className="text-slate-500">Your preferences have been saved.</p>
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
