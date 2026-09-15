"use client";
import React, { useState } from "react";
import { Gamepad2, Coins, Check, CreditCard } from "lucide-react";

export default function Checkout37() {
  const [placed, setPlaced] = useState(false);

  if (placed) {
    return (
      <div className="w-full bg-slate-900 p-10 flex items-center justify-center min-h-[400px]">
        <div className="text-center">
          <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-purple-500/50">
            <Check size={28} className="text-purple-400" />
          </div>
          <h2 className="text-xl font-bold text-white uppercase tracking-widest">Transaction Successful</h2>
          <p className="text-purple-300 text-sm mt-2">1,500 V-Bucks added to your account.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full bg-slate-900 p-6 sm:p-10 font-sans flex items-center justify-center min-h-[500px] text-white">
      <div className="w-full max-w-sm bg-slate-800 rounded-[2rem] p-6 border-4 border-slate-700 shadow-2xl relative overflow-hidden">
        
        {/* Glow */}
        <div className="absolute -top-20 -left-20 w-48 h-48 bg-purple-600/30 blur-[50px] rounded-full pointer-events-none" />

        <div className="text-center mb-8 relative z-10 pt-4">
          <div className="inline-block relative">
            <Coins size={48} className="text-yellow-400 drop-shadow-[0_0_15px_rgba(250,204,21,0.5)] mb-4" />
          </div>
          <h2 className="text-3xl font-black italic tracking-tight text-white drop-shadow-md">1,500 COINS</h2>
          <p className="text-slate-400 text-sm font-bold tracking-widest mt-1">VIRTUAL CURRENCY</p>
        </div>

        <div className="bg-slate-900 rounded-2xl p-4 mb-6 border border-slate-700 relative z-10 flex justify-between items-center">
          <div>
            <p className="text-xs text-slate-400 font-bold uppercase tracking-wider mb-1">Total</p>
            <p className="text-2xl font-bold text-white">$14.99</p>
          </div>
          <div className="bg-purple-600 text-white text-xs font-bold px-2 py-1 rounded">
            + 200 BONUS
          </div>
        </div>

        <div className="space-y-3 mb-6 relative z-10">
          <button className="w-full p-4 rounded-xl border border-slate-600 bg-slate-700 hover:bg-slate-600 transition flex items-center gap-3">
            <CreditCard size={18} className="text-slate-300" />
            <div className="text-left flex-1">
              <p className="text-sm font-bold text-white">Visa ending in 4242</p>
            </div>
            <div className="w-4 h-4 rounded-full border-2 border-purple-500 bg-purple-500 flex items-center justify-center">
              <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
            </div>
          </button>
          
          <button className="w-full p-4 rounded-xl border border-slate-700 hover:border-slate-500 bg-slate-800/50 transition flex items-center gap-3">
            <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal" className="h-4 opacity-50" />
            <div className="text-left flex-1">
              <p className="text-sm font-bold text-slate-400">PayPal</p>
            </div>
          </button>
        </div>

        <button 
          onClick={() => setPlaced(true)}
          className="w-full py-4 rounded-2xl font-black italic tracking-widest flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white transition shadow-[0_0_20px_rgba(147,51,234,0.4)] relative z-10"
        >
          <Gamepad2 size={20} /> PURCHASE NOW
        </button>

      </div>
    </div>
  );
}
