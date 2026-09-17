"use client";
import React, { useState } from "react";
import { Building2, ShieldCheck, Dumbbell, Check } from "lucide-react";

export default function Checkout47() {
  const [placed, setPlaced] = useState(false);

  if (placed) {
    return (
      <div className="w-full bg-slate-50 p-10 flex items-center justify-center min-h-[400px]">
        <div className="text-center max-w-sm">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-600">
            <Check size={28} />
          </div>
          <h2 className="text-xl font-bold text-slate-900">Benefit Activated!</h2>
          <p className="text-slate-500 text-sm mt-2">Your Corporate Wellness Membership is active. Your HR department has been billed directly.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full bg-slate-50 p-6 sm:p-10 font-sans flex justify-center">
      <div className="w-full max-w-md bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm relative overflow-hidden">
        
        {/* Banner */}
        <div className="absolute top-0 left-0 right-0 bg-blue-600 text-white text-xs font-bold py-2 text-center flex items-center justify-center gap-2">
          <Building2 size={14} /> Employer Sponsored Program
        </div>

        <div className="mt-8 mb-6 text-center">
          <div className="w-16 h-16 bg-slate-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <Dumbbell size={28} className="text-slate-700" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">FitLife Premium</h2>
          <p className="text-slate-500 text-sm mt-1">Access to 1,500+ gyms nationwide</p>
        </div>

        <div className="bg-slate-50 rounded-2xl p-5 mb-8 border border-slate-200">
          <div className="flex justify-between items-center mb-3">
            <span className="text-sm font-semibold text-slate-600">Monthly Plan</span>
            <span className="text-sm font-semibold text-slate-900 line-through">$89.00</span>
          </div>
          <div className="flex justify-between items-center mb-4">
            <span className="text-sm font-semibold text-blue-700 flex items-center gap-1">
              <ShieldCheck size={16} /> Acme Corp Discount
            </span>
            <span className="text-sm font-bold text-blue-700">- $89.00</span>
          </div>
          <div className="pt-4 border-t border-slate-200 flex justify-between items-end">
            <span className="text-sm font-bold text-slate-900">Your Cost Today</span>
            <span className="text-2xl font-bold text-emerald-600">$0.00</span>
          </div>
        </div>

        <div className="mb-6 space-y-3">
          <input placeholder="Work Email (@acme.corp)" type="email" className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
          <input placeholder="Employee ID Number" className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>

        <button type="button" 
          onClick={() => setPlaced(true)}
          className="w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white transition shadow-lg shadow-blue-500/20"
        >
          Activate Free Membership
        </button>
        <p className="text-center text-[11px] text-slate-400 mt-4">
          By activating, you authorize your employer to receive aggregated usage data for program administration.
        </p>

      </div>
    </div>
  );
}
