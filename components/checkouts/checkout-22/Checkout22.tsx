"use client";
import React, { useState } from "react";
import { Key, Users, Check, Lock, ShieldCheck } from "lucide-react";

export default function Checkout22() {
  const [seats, setSeats] = useState(5);
  const [cycle, setCycle] = useState<"monthly" | "annual">("annual");
  const [placed, setPlaced] = useState(false);

  const pricePerSeatMonthly = 15;
  const pricePerSeatAnnual = 12; // 20% discount

  const rate = cycle === "annual" ? pricePerSeatAnnual : pricePerSeatMonthly;
  const multiplier = cycle === "annual" ? 12 : 1;
  const total = seats * rate * multiplier;

  if (placed) {
    return (
      <div className="w-full bg-slate-900 p-10 flex items-center justify-center min-h-[400px]">
        <div className="text-center max-w-sm">
          <div className="w-20 h-20 bg-indigo-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Key size={36} className="text-indigo-400" />
          </div>
          <h2 className="text-2xl font-bold text-white mb-2">License Generated!</h2>
          <p className="text-slate-400 text-sm mb-6">Your license key for {seats} seats has been sent to your email.</p>
          <div className="bg-slate-800 border border-slate-700 rounded-xl p-4 font-mono text-indigo-300 text-sm tracking-widest break-all">
            XXXX-XXXX-XXXX-XXXX
          </div>
          <p className="text-xs text-slate-500 mt-4">Keep this key safe. You can also view it in your dashboard.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full bg-slate-900 p-6 sm:p-10 font-sans text-white">
      <div className="max-w-lg mx-auto">
        <h2 className="text-2xl font-bold mb-2">DevTools Enterprise</h2>
        <p className="text-slate-400 text-sm mb-8">Purchase volume licenses for your team.</p>

        {/* License Configuration */}
        <div className="bg-slate-800 rounded-2xl border border-slate-700 p-6 mb-6">
          <h3 className="font-bold text-sm text-slate-300 mb-4 flex items-center gap-2"><Users size={16} /> License Configuration</h3>
          
          <div className="mb-6">
            <label className="text-sm font-semibold text-slate-400 block mb-2">Number of Seats (Users)</label>
            <div className="flex items-center gap-4">
              <input 
                type="range" 
                min="1" 
                max="100" 
                value={seats} 
                onChange={(e) => setSeats(Number(e.target.value))}
                className="flex-1 accent-indigo-500 h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer"
              />
              <div className="w-16 bg-slate-700 rounded-lg px-3 py-2 text-center font-bold">
                {seats}
              </div>
            </div>
          </div>

          <div>
            <label className="text-sm font-semibold text-slate-400 block mb-3">Billing Cycle</label>
            <div className="grid grid-cols-2 gap-3">
              <button 
                onClick={() => setCycle("monthly")}
                className={`py-3 px-4 rounded-xl text-sm font-bold border-2 transition ${cycle === "monthly" ? "bg-indigo-600/20 border-indigo-500 text-indigo-300" : "bg-slate-700 border-slate-600 text-slate-300"}`}
              >
                Monthly
                <div className="text-xs font-normal opacity-70 mt-1">${pricePerSeatMonthly} / seat</div>
              </button>
              <button 
                onClick={() => setCycle("annual")}
                className={`py-3 px-4 rounded-xl text-sm font-bold border-2 transition relative ${cycle === "annual" ? "bg-indigo-600/20 border-indigo-500 text-indigo-300" : "bg-slate-700 border-slate-600 text-slate-300"}`}
              >
                <span className="absolute -top-2 -right-2 bg-emerald-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">SAVE 20%</span>
                Annually
                <div className="text-xs font-normal opacity-70 mt-1">${pricePerSeatAnnual} / seat</div>
              </button>
            </div>
          </div>
        </div>

        {/* Payment */}
        <div className="bg-slate-800 rounded-2xl border border-slate-700 p-6 mb-6">
          <h3 className="font-bold text-sm text-slate-300 mb-4">Payment Information</h3>
          <div className="space-y-3">
            <input placeholder="Email Address (for license delivery)" className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-indigo-500 transition" />
            <input placeholder="Card Number" className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-sm font-mono focus:outline-none focus:border-indigo-500 transition" />
            <div className="grid grid-cols-2 gap-3">
              <input placeholder="MM / YY" className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-indigo-500 transition" />
              <input placeholder="CVC" className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-indigo-500 transition" />
            </div>
          </div>
        </div>

        {/* Order Summary */}
        <div className="bg-slate-800 rounded-2xl p-5 mb-6 text-sm">
          <div className="flex justify-between text-slate-400 mb-2">
            <span>{seats} seats × ${rate} × {multiplier} {multiplier === 1 ? "month" : "months"}</span>
            <span>${total}</span>
          </div>
          <div className="flex justify-between font-bold text-lg pt-3 border-t border-slate-700">
            <span>Total Due Today</span>
            <span>${total}</span>
          </div>
        </div>

        <button onClick={() => setPlaced(true)} className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 rounded-2xl flex items-center justify-center gap-2 transition">
          <Lock size={16} /> Pay ${total} & Generate License
        </button>
        <p className="flex justify-center items-center gap-2 text-xs text-slate-500 mt-4">
          <ShieldCheck size={14} /> Secured by Stripe · Cancel anytime
        </p>
      </div>
    </div>
  );
}
