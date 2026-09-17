"use client";
import React, { useState } from "react";
import { Home, Shield, Lock, Check } from "lucide-react";

export default function Checkout38() {
  const [placed, setPlaced] = useState(false);

  if (placed) {
    return (
      <div className="w-full bg-slate-50 p-10 flex items-center justify-center min-h-[500px]">
        <div className="text-center max-w-md">
          <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Check size={32} className="text-emerald-600" />
          </div>
          <h2 className="text-2xl font-bold text-slate-900 mb-2">Deposit Secured in Escrow</h2>
          <p className="text-slate-500 mb-6">
            Your $10,000 earnest money deposit has been safely transferred to the escrow account for <strong>123 Maple Street</strong>.
          </p>
          <div className="bg-white border border-slate-200 rounded-xl p-4 text-left shadow-sm">
            <p className="text-xs text-slate-500 font-bold uppercase mb-1">Next Steps</p>
            <p className="text-sm font-semibold text-slate-900">Your agent will contact you within 24 hours to schedule the home inspection.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full bg-slate-50 p-6 sm:p-10 font-sans flex justify-center">
      <div className="w-full max-w-4xl bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden flex flex-col lg:flex-row">
        
        {/* Property Details */}
        <div className="lg:w-1/3 bg-slate-900 text-white p-8 sm:p-10 flex flex-col">
          <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-6">
            <Home size={24} />
          </div>
          <h2 className="text-2xl font-bold mb-2">123 Maple Street</h2>
          <p className="text-slate-400 text-sm mb-8">Austin, TX 78704</p>
          
          <div className="space-y-6 flex-1">
            <div>
              <p className="text-slate-500 text-xs font-bold uppercase tracking-widest mb-1">Offer Accepted</p>
              <p className="text-xl font-bold">$750,000</p>
            </div>
            <div>
              <p className="text-slate-500 text-xs font-bold uppercase tracking-widest mb-1">Earnest Money Deposit</p>
              <p className="text-3xl font-bold text-emerald-400">$10,000</p>
            </div>
          </div>

          <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700 mt-8 flex items-start gap-3">
            <Shield size={20} className="text-emerald-400 shrink-0 mt-0.5" />
            <p className="text-xs text-slate-300">
              Funds will be held in a secure escrow account managed by TitleSafe Co. until closing.
            </p>
          </div>
        </div>

        {/* Wire Transfer Form */}
        <div className="lg:w-2/3 p-8 sm:p-10">
          <div className="flex items-center gap-2 mb-8">
            <Lock size={18} className="text-slate-400" />
            <h3 className="text-lg font-bold text-slate-900">Secure Wire Transfer</h3>
          </div>

          <p className="text-sm text-slate-600 mb-6">
            Connect your bank account to initiate a secure ACH transfer for your earnest money deposit.
          </p>

          <button type="button" className="w-full py-4 rounded-xl border-2 border-slate-200 bg-slate-50 hover:bg-slate-100 transition font-bold text-slate-900 mb-8 flex justify-center items-center gap-2">
            Link Bank Account via Plaid
          </button>

          <div className="relative flex py-4 items-center mb-6">
            <div className="flex-grow border-t border-slate-200"></div>
            <span className="flex-shrink-0 mx-4 text-slate-400 text-xs font-bold uppercase tracking-widest">Or enter routing details manually</span>
            <div className="flex-grow border-t border-slate-200"></div>
          </div>

          <div className="space-y-4 mb-8">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">Routing Number</label>
                <input placeholder="9 Digit Routing" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 font-mono text-sm focus:outline-none focus:border-slate-900" />
              </div>
              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">Account Number</label>
                <input placeholder="Account Number" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 font-mono text-sm focus:outline-none focus:border-slate-900" />
              </div>
            </div>
            <div>
              <label className="text-xs font-bold text-slate-700 block mb-1">Name on Account</label>
              <input placeholder="Full Name" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-slate-900" />
            </div>
          </div>

          <button type="button" 
            onClick={() => setPlaced(true)}
            className="w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white transition shadow-lg shadow-slate-900/20"
          >
            Authorize $10,000 Transfer
          </button>
        </div>

      </div>
    </div>
  );
}
