"use client";
import React, { useState } from "react";
import { Lock, Unlock, PlayCircle } from "lucide-react";

export default function Checkout42() {
  const [placed, setPlaced] = useState(false);

  if (placed) {
    return (
      <div className="w-full bg-black p-10 flex items-center justify-center min-h-[500px]">
        <div className="text-center">
          <div className="w-20 h-20 bg-rose-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <Unlock size={32} className="text-rose-500" />
          </div>
          <h2 className="text-2xl font-bold text-white mb-6">Access Granted</h2>
          <button className="py-3 px-6 rounded-full bg-rose-500 text-white font-bold flex items-center gap-2 mx-auto hover:bg-rose-600 transition">
            <PlayCircle size={20} /> Play Video
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full bg-slate-900 p-6 sm:p-10 font-sans flex items-center justify-center min-h-[500px] bg-[url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop')] bg-cover bg-center">
      
      {/* Overlay backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-md z-0" />

      <div className="w-full max-w-sm bg-black/50 backdrop-blur-xl border border-white/10 rounded-3xl p-8 relative z-10 text-white text-center shadow-2xl">
        
        <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6 backdrop-blur-md">
          <Lock size={24} className="text-white" />
        </div>

        <h2 className="text-2xl font-bold mb-2">Unlock Premium Content</h2>
        <p className="text-white/60 text-sm mb-8">
          "Behind the scenes: The making of the album"
        </p>

        <div className="bg-white/5 rounded-2xl p-6 mb-8 border border-white/10">
          <p className="text-sm text-white/50 mb-1 uppercase tracking-widest font-bold">One-Time Access</p>
          <p className="text-4xl font-bold text-rose-500">$4.99</p>
        </div>

        <div className="space-y-3 mb-6">
          <button 
            onClick={() => setPlaced(true)}
            className="w-full py-4 rounded-xl font-bold bg-white text-black hover:bg-slate-200 transition flex items-center justify-center gap-2"
          >
            Pay with Apple Pay
          </button>
          
          <div className="flex items-center py-2">
            <div className="flex-1 border-t border-white/10" />
            <span className="px-4 text-xs text-white/40 font-bold uppercase">or</span>
            <div className="flex-1 border-t border-white/10" />
          </div>

          <input placeholder="Card Number" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-rose-500 placeholder-white/30" />
          <button 
            onClick={() => setPlaced(true)}
            className="w-full py-4 rounded-xl font-bold bg-rose-600 hover:bg-rose-700 text-white transition mt-2"
          >
            Pay $4.99
          </button>
        </div>

      </div>
    </div>
  );
}
