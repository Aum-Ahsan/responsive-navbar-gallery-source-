"use client";
import React, { useState } from "react";
import { Shield, FileText, Check, ArrowRight } from "lucide-react";

export default function Checkout36() {
  const [placed, setPlaced] = useState(false);
  const [term, setTerm] = useState("annual");

  const monthlyPrice = 45;
  const annualPrice = 450; // saves $90
  const total = term === "annual" ? annualPrice : monthlyPrice;

  if (placed) {
    return (
      <div className="w-full bg-slate-50 p-10 flex items-center justify-center min-h-[400px]">
        <div className="text-center max-w-sm">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Check size={28} className="text-blue-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">Coverage Active!</h2>
          <p className="text-slate-500 text-sm mt-2">Your Renter's Insurance policy is now active. We've emailed your policy documents.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full bg-slate-50 p-6 sm:p-10 font-sans flex justify-center">
      <div className="w-full max-w-3xl bg-white rounded-3xl border border-slate-200 shadow-sm flex flex-col md:flex-row overflow-hidden">
        
        {/* Quote Details */}
        <div className="md:w-5/12 bg-blue-600 p-8 sm:p-10 text-white">
          <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-6">
            <Shield size={24} className="text-white" />
          </div>
          <h2 className="text-2xl font-bold mb-2">Renter's Insurance</h2>
          <p className="text-blue-200 text-sm mb-8">Quote #QT-992384</p>
          
          <div className="space-y-4 mb-8">
            <div className="flex justify-between items-center border-b border-blue-500/50 pb-3">
              <span className="text-sm font-medium">Personal Property</span>
              <span className="font-bold">$30,000</span>
            </div>
            <div className="flex justify-between items-center border-b border-blue-500/50 pb-3">
              <span className="text-sm font-medium">Personal Liability</span>
              <span className="font-bold">$100,000</span>
            </div>
            <div className="flex justify-between items-center border-b border-blue-500/50 pb-3">
              <span className="text-sm font-medium">Loss of Use</span>
              <span className="font-bold">$9,000</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium">Deductible</span>
              <span className="font-bold">$500</span>
            </div>
          </div>
        </div>

        {/* Payment Form */}
        <div className="md:w-7/12 p-8 sm:p-10">
          <h3 className="font-bold text-slate-900 text-lg mb-6">Complete Purchase</h3>
          
          <div className="flex gap-4 mb-6">
            <label className={`flex-1 p-4 rounded-xl border-2 cursor-pointer transition ${term === "monthly" ? "border-blue-600 bg-blue-50" : "border-slate-200"}`}>
              <input type="radio" checked={term==="monthly"} onChange={()=>setTerm("monthly")} className="hidden" />
              <div className="flex justify-between items-center mb-1">
                <span className={`text-sm font-bold ${term==="monthly"?"text-blue-900":"text-slate-700"}`}>Monthly</span>
                <span className={`text-lg font-bold ${term==="monthly"?"text-blue-600":"text-slate-900"}`}>${monthlyPrice}</span>
              </div>
            </label>
            <label className={`flex-1 p-4 rounded-xl border-2 cursor-pointer transition relative overflow-hidden ${term === "annual" ? "border-blue-600 bg-blue-50" : "border-slate-200"}`}>
              <input type="radio" checked={term==="annual"} onChange={()=>setTerm("annual")} className="hidden" />
              <div className="absolute top-0 right-0 bg-blue-600 text-white text-[10px] font-bold px-2 py-1 rounded-bl-lg">SAVE $90</div>
              <div className="flex justify-between items-center mb-1 mt-1">
                <span className={`text-sm font-bold ${term==="annual"?"text-blue-900":"text-slate-700"}`}>Annually</span>
                <span className={`text-lg font-bold ${term==="annual"?"text-blue-600":"text-slate-900"}`}>${annualPrice}</span>
              </div>
            </label>
          </div>

          <div className="space-y-4 mb-6">
            <input placeholder="Card Number" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 font-mono text-sm focus:outline-none focus:border-blue-500" />
            <div className="grid grid-cols-2 gap-4">
              <input placeholder="MM/YY" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500" />
              <input placeholder="CVC" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500" />
            </div>
          </div>

          <div className="flex items-start gap-3 mb-8">
            <input type="checkbox" defaultChecked className="mt-1" />
            <p className="text-xs text-slate-500">I have read and agree to the <a href="#" className="text-blue-600 hover:underline">Terms of Service</a> and <a href="#" className="text-blue-600 hover:underline">Insurance Fraud Warning</a>.</p>
          </div>

          <button type="button" 
            onClick={() => setPlaced(true)}
            className="w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white transition shadow-lg shadow-blue-500/20"
          >
            Pay ${total} & Bind Policy
          </button>
        </div>

      </div>
    </div>
  );
}
