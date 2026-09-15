"use client";
import React, { useState } from "react";
import { Coffee, Check, Lock, ChevronRight } from "lucide-react";

export default function Checkout24() {
  const subtotal = 42.50;
  const tax = 3.40;
  const baseTotal = subtotal + tax;

  const [tipPct, setTipPct] = useState<number | "custom">(20);
  const [customTip, setCustomTip] = useState("");
  const [placed, setPlaced] = useState(false);

  let tipAmt = 0;
  if (tipPct === "custom") {
    tipAmt = parseFloat(customTip) || 0;
  } else {
    tipAmt = (subtotal * tipPct) / 100;
  }
  
  const finalTotal = baseTotal + tipAmt;

  if (placed) {
    return (
      <div className="w-full bg-slate-50 p-10 flex items-center justify-center min-h-[400px]">
        <div className="text-center">
          <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Check size={28} className="text-emerald-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">Order Placed!</h2>
          <p className="text-slate-500 text-sm mt-1">Paid ${finalTotal.toFixed(2)} (including tip). Preparing now!</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full bg-slate-50 p-6 sm:p-10 font-sans">
      <div className="max-w-md mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 bg-amber-100 rounded-2xl flex items-center justify-center">
            <Coffee size={22} className="text-amber-700" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-slate-900">Local Roasters</h2>
            <p className="text-slate-500 text-sm">Pickup order · 3 items</p>
          </div>
        </div>

        {/* Order Summary */}
        <div className="bg-white rounded-2xl border border-slate-200 p-5 mb-6 space-y-2 text-sm">
          <div className="flex justify-between text-slate-600"><span>Subtotal</span><span>${subtotal.toFixed(2)}</span></div>
          <div className="flex justify-between text-slate-600"><span>Tax</span><span>${tax.toFixed(2)}</span></div>
          <div className="flex justify-between font-bold text-slate-900 text-base border-t border-slate-100 pt-3 mt-1">
            <span>Total before tip</span><span>${baseTotal.toFixed(2)}</span>
          </div>
        </div>

        {/* Tip Selector */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 mb-6">
          <h3 className="font-bold text-slate-900 text-sm mb-4">Show your support with a tip</h3>
          
          <div className="grid grid-cols-4 gap-2 mb-4">
            {[15, 18, 20].map(pct => (
              <button
                key={pct}
                onClick={() => setTipPct(pct)}
                className={`py-3 rounded-xl flex flex-col items-center justify-center border-2 transition ${tipPct === pct ? "border-amber-500 bg-amber-50 text-amber-900" : "border-slate-200 bg-white text-slate-600 hover:border-amber-300"}`}
              >
                <span className="font-bold text-sm">{pct}%</span>
                <span className="text-xs opacity-70">${((subtotal * pct) / 100).toFixed(2)}</span>
              </button>
            ))}
            <button
              onClick={() => setTipPct("custom")}
              className={`py-3 rounded-xl flex flex-col items-center justify-center border-2 transition ${tipPct === "custom" ? "border-amber-500 bg-amber-50 text-amber-900" : "border-slate-200 bg-white text-slate-600 hover:border-amber-300"}`}
            >
              <span className="font-bold text-sm">Custom</span>
              <span className="text-xs opacity-70">Amount</span>
            </button>
          </div>

          {tipPct === "custom" && (
            <div className="relative mb-2">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-bold">$</span>
              <input 
                type="number" 
                min={0} 
                step={0.5}
                value={customTip} 
                onChange={(e) => setCustomTip(e.target.value)}
                placeholder="Enter amount"
                className="w-full pl-8 pr-4 py-3 border border-amber-500 rounded-xl text-sm font-bold focus:outline-none focus:ring-2 focus:ring-amber-500 bg-white"
                autoFocus
              />
            </div>
          )}
          
          <button onClick={() => setTipPct("custom")} className="text-xs text-slate-400 hover:text-slate-600 underline">No tip</button>
        </div>

        {/* Payment */}
        <div className="bg-white rounded-2xl border border-slate-200 p-5 mb-6 space-y-3">
          <input placeholder="Card Number" className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm font-mono focus:outline-none focus:ring-2 focus:ring-slate-900" />
          <div className="grid grid-cols-2 gap-3">
            <input placeholder="MM / YY" className="border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900" />
            <input placeholder="CVV" className="border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900" />
          </div>
        </div>

        <button onClick={() => setPlaced(true)} className="w-full bg-slate-900 hover:bg-slate-700 text-white font-bold py-4 rounded-2xl flex items-center justify-center gap-2 transition shadow-lg shadow-slate-900/20">
          Pay ${finalTotal.toFixed(2)}
        </button>
      </div>
    </div>
  );
}
