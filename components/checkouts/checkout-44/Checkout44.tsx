"use client";
import React, { useState } from "react";
import { EyeOff, Shield, Wallet, Check } from "lucide-react";

export default function Checkout44() {
  const [placed, setPlaced] = useState(false);

  if (placed) {
    return (
      <div className="w-full bg-black p-10 flex items-center justify-center min-h-[400px]">
        <div className="text-center">
          <div className="w-16 h-16 bg-emerald-900 rounded-full flex items-center justify-center mx-auto mb-4">
            <Check size={28} className="text-emerald-400" />
          </div>
          <h2 className="text-xl font-bold text-white">Payment Received</h2>
          <p className="text-slate-400 text-sm mt-2">No tracking. No logs. Your VPN subscription is active.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full bg-black p-6 sm:p-10 font-sans flex items-center justify-center text-white min-h-[500px]">
      <div className="w-full max-w-md bg-[#111] rounded-2xl border border-white/10 p-8 shadow-2xl relative">
        
        <div className="flex items-center gap-3 mb-6 border-b border-white/10 pb-6">
          <EyeOff size={24} className="text-emerald-400" />
          <h2 className="text-xl font-bold">Privacy Checkout</h2>
        </div>

        <div className="bg-[#1a1a1a] rounded-xl p-4 mb-6 border border-white/5 flex items-start gap-3">
          <Shield size={18} className="text-slate-400 shrink-0 mt-0.5" />
          <p className="text-xs text-slate-400">
            We do not require your real name, address, or phone number. Provide only a temporary email to receive your account credentials.
          </p>
        </div>

        <div className="mb-6">
          <label className="text-xs font-bold text-slate-400 block mb-2 uppercase tracking-widest">Anonymous Email</label>
          <input 
            type="email"
            placeholder="e.g. protonmail.com" 
            className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-emerald-500"
          />
        </div>

        <div className="mb-8">
          <label className="text-xs font-bold text-slate-400 block mb-3 uppercase tracking-widest">Payment Method</label>
          <div className="space-y-3">
            <label className="flex items-center justify-between p-4 border border-emerald-500/50 bg-emerald-500/10 rounded-lg cursor-pointer">
              <div className="flex items-center gap-3">
                <input type="radio" name="pay" defaultChecked className="accent-emerald-500" />
                <span className="font-bold text-sm">Monero (XMR)</span>
              </div>
              <Wallet size={16} className="text-emerald-400" />
            </label>
            <label className="flex items-center justify-between p-4 border border-white/10 bg-black rounded-lg cursor-pointer hover:border-white/20">
              <div className="flex items-center gap-3">
                <input type="radio" name="pay" className="accent-emerald-500" />
                <span className="font-bold text-sm">Bitcoin (BTC)</span>
              </div>
              <Wallet size={16} className="text-slate-400" />
            </label>
          </div>
        </div>

        <button type="button" 
          onClick={() => setPlaced(true)}
          className="w-full py-4 rounded-lg font-bold flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-black transition"
        >
          Generate Payment Address
        </button>

      </div>
    </div>
  );
}
