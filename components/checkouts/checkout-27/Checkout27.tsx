"use client";
import React, { useState } from "react";
import { Sparkles, Check, ArrowRight } from "lucide-react";

export default function Checkout27() {
  const [accepted, setAccepted] = useState<boolean | null>(null);

  if (accepted !== null) {
    return (
      <div className="w-full bg-slate-50 p-10 flex items-center justify-center min-h-[400px]">
        <div className="text-center max-w-sm">
          <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Check size={28} className="text-emerald-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">Your order is complete!</h2>
          <p className="text-slate-500 text-sm mt-1">
            {accepted ? "Your VIP Upgrade has been added to your order." : "Your original order will ship shortly."}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full bg-slate-50 p-6 sm:p-10 font-sans flex justify-center">
      <div className="w-full max-w-lg bg-white rounded-3xl p-8 border border-slate-200 shadow-xl overflow-hidden relative">
        
        {/* Progress Bar (Post-purchase flow) */}
        <div className="absolute top-0 left-0 w-full h-1.5 bg-slate-100">
          <div className="h-full bg-emerald-500 w-[80%]" />
        </div>

        <div className="text-center mb-8">
          <span className="inline-block px-3 py-1 bg-amber-100 text-amber-700 text-xs font-bold rounded-full mb-3 uppercase tracking-wider">
            Wait! Your order is not complete
          </span>
          <h2 className="text-2xl font-bold text-slate-900 leading-tight">One-Time Special Offer</h2>
          <p className="text-slate-500 text-sm mt-2">Add the VIP Accessory Kit to your order at a huge discount.</p>
        </div>

        <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl border border-indigo-100 p-6 mb-8 text-center relative">
          <div className="absolute -top-3 -right-3 w-14 h-14 bg-rose-500 text-white font-bold rounded-full flex items-center justify-center transform rotate-12 shadow-lg">
            -40%
          </div>
          <div className="w-20 h-20 bg-white rounded-full mx-auto flex items-center justify-center shadow-sm mb-4">
            <Sparkles size={32} className="text-indigo-500" />
          </div>
          <h3 className="font-bold text-lg text-slate-900">VIP Accessory Kit</h3>
          <p className="text-slate-600 text-sm mt-1 mb-4">Includes premium case, screen protector, and cleaning cloth.</p>
          <div className="flex items-center justify-center gap-2">
            <span className="text-slate-400 line-through font-semibold">$50.00</span>
            <span className="text-2xl font-bold text-slate-900">$29.00</span>
          </div>
        </div>

        <div className="space-y-3">
          <button type="button" 
            onClick={() => setAccepted(true)}
            className="w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white shadow-lg shadow-emerald-500/20 transition text-lg"
          >
            Yes, Add to My Order <ArrowRight size={18} />
          </button>
          
          <button type="button" 
            onClick={() => setAccepted(false)}
            className="w-full py-3 rounded-xl font-medium text-sm text-slate-500 hover:text-slate-800 hover:bg-slate-50 transition"
          >
            No thanks, I'll pass on this huge discount
          </button>
        </div>

        <p className="text-center text-xs text-slate-400 mt-6">
          By clicking "Yes", your card on file will be charged $29.00 automatically.
        </p>

      </div>
    </div>
  );
}
