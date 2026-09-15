"use client";
import React, { useState } from "react";
import { Heart, Bone, Check, CreditCard, ChevronRight } from "lucide-react";

export default function Checkout48() {
  const [placed, setPlaced] = useState(false);

  const fee = 150;
  const donation = 25;

  if (placed) {
    return (
      <div className="w-full bg-orange-50 p-10 flex items-center justify-center min-h-[400px]">
        <div className="text-center max-w-sm">
          <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4 text-orange-500">
            <Heart size={32} />
          </div>
          <h2 className="text-xl font-bold text-slate-900">Adoption Fee Paid!</h2>
          <p className="text-slate-500 text-sm mt-2">We're so excited for you to bring Bella home! Your receipt has been emailed.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full bg-orange-50 p-6 sm:p-10 font-sans flex justify-center">
      <div className="w-full max-w-3xl bg-white rounded-3xl border border-orange-100 shadow-sm overflow-hidden flex flex-col md:flex-row">
        
        {/* Pet Info */}
        <div className="md:w-5/12 bg-orange-100 p-8 flex flex-col">
          <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm mx-auto overflow-hidden">
            <img src="https://images.unsplash.com/photo-1543466835-00a7907e9de1?q=80&w=200&auto=format&fit=crop" alt="Dog" className="w-full h-full object-cover" />
          </div>
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-orange-900 mb-1">Bella</h2>
            <p className="text-orange-700 text-sm">Golden Retriever Mix • 2 Years</p>
          </div>

          <div className="space-y-4 mb-6">
            <div className="flex justify-between text-orange-900 font-medium border-b border-orange-200 pb-2">
              <span>Adoption Fee</span>
              <span>${fee}</span>
            </div>
            <div className="flex justify-between text-orange-900 font-medium border-b border-orange-200 pb-2">
              <span>Vaccinations & Microchip</span>
              <span className="text-xs uppercase tracking-wider bg-orange-200 px-2 py-0.5 rounded">Included</span>
            </div>
            <div className="flex justify-between text-orange-900 font-medium">
              <span>Optional Donation</span>
              <span>${donation}</span>
            </div>
          </div>
          <div className="mt-auto pt-6 border-t border-orange-200 flex justify-between items-end">
            <span className="font-bold text-orange-900">Total</span>
            <span className="text-3xl font-bold text-orange-600">${fee + donation}</span>
          </div>
        </div>

        {/* Payment */}
        <div className="md:w-7/12 p-8">
          <h3 className="font-bold text-slate-900 text-lg mb-6">Finalize Adoption</h3>
          
          <div className="mb-6 p-4 bg-emerald-50 border border-emerald-100 rounded-xl flex items-start gap-3">
            <Check size={18} className="text-emerald-600 shrink-0 mt-0.5" />
            <p className="text-sm text-emerald-800">
              Your application was approved on Oct 12, 2026. This final fee covers medical costs and helps us rescue more animals.
            </p>
          </div>

          <div className="space-y-4 mb-8">
            <div className="relative">
              <CreditCard size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
              <input placeholder="Card Number" className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-11 pr-4 py-3 font-mono text-sm focus:outline-none focus:border-orange-500" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <input placeholder="MM/YY" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-orange-500" />
              <input placeholder="CVC" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-orange-500" />
            </div>
          </div>

          <button 
            onClick={() => setPlaced(true)}
            className="w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white transition shadow-lg shadow-orange-500/20"
          >
            Pay ${fee + donation} & Adopt <ChevronRight size={18} />
          </button>
        </div>

      </div>
    </div>
  );
}
