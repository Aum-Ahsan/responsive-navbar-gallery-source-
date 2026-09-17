"use client";
import React, { useState } from "react";
import { Sparkles, Check, Lock, ArrowRight } from "lucide-react";

export default function Checkout32() {
  const [placed, setPlaced] = useState(false);

  if (placed) {
    return (
      <div className="w-full bg-slate-900 p-10 flex items-center justify-center min-h-[400px]">
        <div className="text-center max-w-sm">
          <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <Check size={28} className="text-blue-400" />
          </div>
          <h2 className="text-xl font-bold text-white">Welcome to Pro!</h2>
          <p className="text-slate-400 text-sm mt-2">
            Your 14-day free trial has started. You won't be charged until Oct 30, 2026.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full bg-slate-50 p-6 sm:p-10 font-sans flex justify-center">
      <div className="w-full max-w-4xl bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden flex flex-col md:flex-row">
        
        {/* Left Side: Value Prop */}
        <div className="md:w-5/12 bg-slate-900 p-8 sm:p-10 text-white flex flex-col justify-center">
          <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mb-6">
            <Sparkles size={24} className="text-white" />
          </div>
          <h2 className="text-2xl font-bold mb-4">Start your 14-day free trial</h2>
          <ul className="space-y-4 mb-8">
            {["Unlimited Projects", "Custom Domains", "Team Collaboration (Up to 10)", "Priority Support"].map((f, i) => (
              <li key={i} className="flex items-center gap-3">
                <Check size={18} className="text-blue-400 shrink-0" />
                <span className="text-slate-300 text-sm">{f}</span>
              </li>
            ))}
          </ul>
          <div className="mt-auto pt-6 border-t border-slate-700/50">
            <p className="text-sm text-slate-400">
              Then <strong className="text-white">$29/month</strong>. Cancel anytime before Oct 30 to avoid being charged.
            </p>
          </div>
        </div>

        {/* Right Side: CC Capture */}
        <div className="md:w-7/12 p-8 sm:p-10">
          <h3 className="text-xl font-bold text-slate-900 mb-6">Payment Details</h3>
          
          <div className="space-y-4 mb-6">
            <div className="grid grid-cols-2 gap-4">
              <input placeholder="First Name" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500" />
              <input placeholder="Last Name" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500" />
            </div>
            <input placeholder="Card Number" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 font-mono text-sm focus:outline-none focus:border-blue-500" />
            <div className="grid grid-cols-2 gap-4">
              <input placeholder="MM/YY" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500" />
              <input placeholder="CVC" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500" />
            </div>
            <input placeholder="Zip Code" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500" />
          </div>

          <div className="flex items-start gap-2 mb-8 p-4 bg-emerald-50 text-emerald-800 rounded-xl border border-emerald-100">
            <Lock size={16} className="mt-0.5 text-emerald-600 shrink-0" />
            <p className="text-xs">
              <strong>Secure Check:</strong> We'll authorize your card for $1 to ensure it's valid, which will be refunded immediately. <strong>Today's charge: $0.00.</strong>
            </p>
          </div>

          <button type="button" 
            onClick={() => setPlaced(true)}
            className="w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white transition shadow-lg shadow-blue-500/20"
          >
            Start My Free Trial <ArrowRight size={18} />
          </button>
        </div>

      </div>
    </div>
  );
}
