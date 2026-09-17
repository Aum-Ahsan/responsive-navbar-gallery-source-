"use client";
import React, { useState } from "react";
import { Box, Lock, Check } from "lucide-react";

export default function Checkout49() {
  const [placed, setPlaced] = useState(false);

  if (placed) {
    return (
      <div className="w-full bg-slate-100 p-10 flex items-center justify-center min-h-[400px]">
        <div className="text-center max-w-sm bg-white p-8 rounded-2xl shadow-sm">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Check size={28} className="text-blue-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">Unit Reserved</h2>
          <p className="text-slate-500 text-sm mt-2">Your gate access code is <strong>*4928#</strong>. You can move in starting tomorrow.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full bg-slate-100 p-6 sm:p-10 font-sans flex justify-center">
      <div className="w-full max-w-lg bg-white rounded-3xl border border-slate-200 shadow-sm p-6 sm:p-8">
        
        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center text-slate-600 shrink-0">
            <Box size={24} />
          </div>
          <div>
            <h2 className="text-xl font-bold text-slate-900">10x10 Climate Controlled</h2>
            <p className="text-slate-500 text-sm mt-1">Downtown Facility • Ground Floor Access</p>
          </div>
        </div>

        <div className="bg-slate-50 rounded-xl p-5 mb-6 border border-slate-200">
          <h3 className="font-bold text-slate-900 text-sm mb-4">Due Today</h3>
          <div className="space-y-3 mb-4">
            <div className="flex justify-between text-sm">
              <span className="text-slate-600">First Month's Rent</span>
              <span className="font-medium">$125.00</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-slate-600">Admin Fee (One-time)</span>
              <span className="font-medium">$25.00</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-slate-600">Facility Lock (Required)</span>
              <span className="font-medium">$15.00</span>
            </div>
          </div>
          <div className="flex justify-between items-center pt-3 border-t border-slate-200 font-bold text-slate-900">
            <span>Total Move-in Cost</span>
            <span className="text-2xl text-blue-600">$165.00</span>
          </div>
        </div>

        <div className="space-y-4 mb-8">
          <input placeholder="Name on Card" className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500" />
          <input placeholder="Card Number" className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3 font-mono text-sm focus:outline-none focus:border-blue-500" />
          <div className="flex gap-4">
            <input placeholder="MM/YY" className="w-1/2 bg-white border border-slate-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500" />
            <input placeholder="CVC" className="w-1/2 bg-white border border-slate-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500" />
          </div>
        </div>

        <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-xl mb-6">
          <Lock size={16} className="text-slate-500 shrink-0 mt-0.5" />
          <p className="text-xs text-slate-600">
            By paying, you agree to auto-pay $125.00 on the 1st of every month. Cancel anytime with 7 days notice.
          </p>
        </div>

        <button type="button" 
          onClick={() => setPlaced(true)}
          className="w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white transition shadow-lg shadow-blue-500/20"
        >
          Pay $165 & Get Access Code
        </button>

      </div>
    </div>
  );
}
