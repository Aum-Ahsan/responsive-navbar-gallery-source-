"use client";
import React, { useState, useEffect } from 'react';
import { Mail, Send, Bell, ArrowRight, Sparkles, Check, Loader2, X, Zap } from 'lucide-react';

export default function Newsletter20() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');
  const [receiptDate, setReceiptDate] = useState<string | null>(null);

  useEffect(() => {
    setReceiptDate(`${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}`);
  }, []);


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
      <div className="relative bg-zinc-900 p-4 rounded-t-xl rounded-b-md shadow-2xl z-20 flex justify-between items-center text-white">
        <span className="font-bold tracking-widest text-sm">POS_TERMINAL</span>
        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
      </div>
      <div className="relative -mt-2 z-10 flex justify-center">
        <div className={`w-[90%] bg-[#fdfbf7] shadow-[0_20px_25px_-5px_rgba(0,0,0,0.2)] transition-all duration-1000 ease-[cubic-bezier(0.2,0.8,0.2,1)] ${status === 'success' ? 'min-h-[260px] sm:h-[200px] sm:h-[260px] lg:h-[300px]' : 'h-0 overflow-hidden'}`}>
          <div className="p-8 text-center text-zinc-800 border-b-2 border-dashed border-zinc-300">
            <h3 className="text-2xl font-bold mb-1 uppercase tracking-tighter">Receipt</h3>
            <p className="text-xs mb-6 text-zinc-500">{receiptDate ?? '—'}</p>
            <div className="flex justify-between text-sm mb-2"><span className="opacity-70">ITEM:</span><span className="font-bold">NEWSLETTER</span></div>
            <div className="flex justify-between text-sm mb-6"><span className="opacity-70">PRICE:</span><span className="font-bold">FREE</span></div>
            <div className="border-t-2 border-zinc-800 pt-4 font-bold uppercase tracking-widest flex justify-center"><Check className="mr-2"/> SUCCESS</div>
          </div>
          {/* Jagged bottom */}
          <div className="absolute bottom-0 w-full h-3" style={{backgroundImage: 'linear-gradient(-45deg, transparent 50%, #fdfbf7 50%), linear-gradient(45deg, transparent 50%, #fdfbf7 50%)', backgroundSize: '10px 10px', backgroundRepeat: 'repeat-x'}}></div>
        </div>
      </div>
      
      {status !== 'success' && (
        <form onSubmit={handleSubmit} className="mt-8 bg-white p-6 rounded-2xl shadow-xl flex flex-col gap-4">
          <input type="email" value={email} onChange={e=>setEmail(e.target.value)} required placeholder="Enter Email..." className="px-4 py-3 bg-zinc-100 rounded-lg text-center font-bold focus:outline-none focus:ring-2 focus:ring-zinc-900 uppercase" />
          <button type="submit" disabled={status==='loading'} className="py-4 bg-zinc-900 text-white font-bold rounded-lg uppercase tracking-widest flex justify-center">
            {status === 'loading' ? <Loader2 className="animate-spin" /> : 'PRINT TICKET'}
          </button>
        </form>
      )}
    </div>
  );
}
