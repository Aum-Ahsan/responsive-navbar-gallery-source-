"use client";
import React, { useState } from "react";
import { Clock, Check, Lock, AlertCircle } from "lucide-react";

export default function Checkout19() {
  const itemPrice = 399;
  const [payMode, setPayMode] = useState<"deposit" | "full">("deposit");
  const [placed, setPlaced] = useState(false);

  const depositAmount = 50;
  const dueNow = payMode === "deposit" ? depositAmount : itemPrice;
  const dueLater = payMode === "deposit" ? itemPrice - depositAmount : 0;

  if (placed) {
    return (
      <div className="w-full bg-white p-10 flex items-center justify-center min-h-[300px]">
        <div className="text-center">
          <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4"><Check size={28} className="text-emerald-600" /></div>
          <h2 className="text-xl font-bold text-slate-900">Pre-order Confirmed!</h2>
          <p className="text-slate-500 text-sm mt-1">Paid ${dueNow}. Expected to ship: Nov 15, 2026.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full bg-slate-50 p-6 sm:p-10 font-sans">
      <div className="max-w-lg mx-auto">
        <div className="bg-amber-100 border border-amber-200 rounded-2xl p-4 mb-6 flex items-start gap-3">
          <AlertCircle size={18} className="text-amber-600 shrink-0 mt-0.5" />
          <div>
            <h3 className="font-bold text-amber-900 text-sm">This is a pre-order</h3>
            <p className="text-amber-800 text-xs mt-1">The "Lumina Smart Espresso Maker" is currently in production. Expected shipping date is <strong>November 15, 2026</strong>.</p>
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 p-5 mb-6">
          <h3 className="font-bold text-slate-800 text-sm mb-4">Payment Option</h3>
          <div className="space-y-3">
            <div
              onClick={() => setPayMode("deposit")}
              className={`p-4 rounded-xl border-2 cursor-pointer transition flex items-start gap-3 ${payMode === "deposit" ? "border-indigo-600 bg-indigo-50" : "border-slate-200"}`}
            >
              <div className={`w-5 h-5 rounded-full border-2 mt-0.5 flex items-center justify-center shrink-0 ${payMode === "deposit" ? "bg-indigo-600 border-indigo-600" : "border-slate-300"}`}>
                {payMode === "deposit" && <div className="w-2 h-2 bg-white rounded-full" />}
              </div>
              <div>
                <p className="font-bold text-slate-900">Pay ${depositAmount} Deposit Now</p>
                <p className="text-xs text-slate-500 mt-1">Pay the remaining ${dueLater} when your item is ready to ship. We will email you a secure payment link.</p>
              </div>
            </div>

            <div
              onClick={() => setPayMode("full")}
              className={`p-4 rounded-xl border-2 cursor-pointer transition flex items-start gap-3 ${payMode === "full" ? "border-indigo-600 bg-indigo-50" : "border-slate-200"}`}
            >
              <div className={`w-5 h-5 rounded-full border-2 mt-0.5 flex items-center justify-center shrink-0 ${payMode === "full" ? "bg-indigo-600 border-indigo-600" : "border-slate-300"}`}>
                {payMode === "full" && <div className="w-2 h-2 bg-white rounded-full" />}
              </div>
              <div>
                <p className="font-bold text-slate-900">Pay ${itemPrice} in Full Now</p>
                <p className="text-xs text-slate-500 mt-1">Settle the full amount today. No further action needed until it arrives.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Card info */}
        <div className="bg-white rounded-2xl border border-slate-200 p-5 mb-6 space-y-3">
          <input placeholder="Card Number" className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm font-mono focus:outline-none focus:ring-2 focus:ring-indigo-500" />
          <div className="grid grid-cols-2 gap-3">
            <input placeholder="MM / YY" className="border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500" />
            <input placeholder="CVV" className="border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500" />
          </div>
        </div>

        <div className="flex justify-between items-center mb-4 px-2">
          <span className="text-sm font-bold text-slate-700">Due Today</span>
          <span className="text-2xl font-bold text-slate-900">${dueNow}</span>
        </div>

        <button onClick={() => setPlaced(true)} className="w-full bg-slate-900 hover:bg-slate-700 text-white font-bold py-4 rounded-2xl flex items-center justify-center gap-2 transition">
          <Lock size={16} /> Pre-order now — Pay ${dueNow}
        </button>
      </div>
    </div>
  );
}
