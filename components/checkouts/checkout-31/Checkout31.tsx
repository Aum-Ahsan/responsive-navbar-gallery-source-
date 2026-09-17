"use client";
import React, { useState } from "react";
import { Gift, Check, MessageSquare } from "lucide-react";

export default function Checkout31() {
  const [msg, setMsg] = useState("");
  const [anonymous, setAnonymous] = useState(false);
  const [placed, setPlaced] = useState(false);

  if (placed) {
    return (
      <div className="w-full bg-rose-50 p-10 flex items-center justify-center min-h-[400px]">
        <div className="text-center max-w-sm">
          <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4 text-emerald-600">
            <Check size={28} />
          </div>
          <h2 className="text-xl font-bold text-slate-900">Gift Purchased!</h2>
          <p className="text-slate-500 text-sm mt-2">
            You bought <strong>Sarah & Mark's Espresso Machine</strong>. It will be shipped directly to the couple.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full bg-rose-50 p-6 sm:p-10 font-sans flex justify-center">
      <div className="w-full max-w-md bg-white rounded-3xl p-6 sm:p-8 border border-rose-100 shadow-sm">
        
        <div className="flex items-start gap-4 mb-8">
          <div className="w-16 h-16 bg-rose-100 text-rose-500 rounded-2xl flex items-center justify-center shrink-0">
            <Gift size={24} />
          </div>
          <div>
            <p className="text-xs font-bold text-rose-500 uppercase tracking-widest mb-1">Wedding Registry</p>
            <h2 className="text-lg font-bold text-slate-900 leading-tight">Sarah & Mark's Wedding</h2>
            <p className="text-slate-500 text-sm mt-1">Purchasing: Breville Espresso Pro ($699.00)</p>
          </div>
        </div>

        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 mb-6">
          <h3 className="font-bold text-slate-900 text-sm mb-3 flex items-center gap-2">
            <MessageSquare size={16} className="text-slate-400" /> Gift Message
          </h3>
          <textarea 
            placeholder="Write a wish for the couple..."
            value={msg}
            onChange={e => setMsg(e.target.value)}
            className="w-full bg-white border border-slate-200 rounded-xl p-3 text-sm focus:outline-none focus:ring-2 focus:ring-rose-400 min-h-[100px] resize-none mb-3"
          />
          <label className="flex items-center gap-2 cursor-pointer">
            <input 
              type="checkbox" 
              checked={anonymous} 
              onChange={() => setAnonymous(!anonymous)}
              className="w-4 h-4 text-rose-500 rounded border-slate-300 focus:ring-rose-400"
            />
            <span className="text-sm font-semibold text-slate-700">Send anonymously</span>
          </label>
        </div>

        <div className="bg-rose-50 rounded-xl p-4 mb-8">
          <p className="text-xs text-rose-800 font-medium text-center">
            <strong>Shipping Info:</strong> The item will be shipped directly to the address provided by Sarah & Mark on their registry.
          </p>
        </div>

        <button type="button" 
          onClick={() => setPlaced(true)}
          className="w-full py-4 rounded-2xl font-bold flex items-center justify-center gap-2 bg-rose-500 hover:bg-rose-600 text-white transition shadow-lg shadow-rose-500/20"
        >
          Complete Purchase ($699.00)
        </button>

      </div>
    </div>
  );
}
