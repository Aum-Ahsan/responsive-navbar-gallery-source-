"use client";
import React, { useState } from "react";
import { Video, Calendar, CreditCard, Check, User } from "lucide-react";

export default function Checkout40() {
  const [placed, setPlaced] = useState(false);

  if (placed) {
    return (
      <div className="w-full bg-slate-50 p-10 flex items-center justify-center min-h-[400px]">
        <div className="text-center max-w-sm">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Check size={28} className="text-blue-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">Consultation Booked!</h2>
          <p className="text-slate-500 text-sm mt-2">
            Your virtual visit with Dr. Sarah Jenkins is scheduled for tomorrow at 10:00 AM. A secure video link has been sent to your email.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full bg-slate-50 p-6 sm:p-10 font-sans flex justify-center">
      <div className="w-full max-w-3xl bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden flex flex-col md:flex-row">
        
        {/* Appointment Details */}
        <div className="md:w-5/12 bg-blue-50 p-8 flex flex-col border-b md:border-b-0 md:border-r border-blue-100">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm">
              <User size={20} className="text-blue-600" />
            </div>
            <div>
              <h3 className="font-bold text-slate-900">Dr. Sarah Jenkins</h3>
              <p className="text-xs text-slate-500">Dermatologist</p>
            </div>
          </div>

          <div className="space-y-4 mb-8 flex-1">
            <div className="flex items-start gap-3 bg-white p-4 rounded-xl border border-blue-100">
              <Video size={18} className="text-blue-500 shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-sm text-slate-900">Virtual Visit</p>
                <p className="text-xs text-slate-500 mt-1">Join via secure video link from your phone or computer.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3 bg-white p-4 rounded-xl border border-blue-100">
              <Calendar size={18} className="text-blue-500 shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-sm text-slate-900">Tomorrow, 10:00 AM</p>
                <p className="text-xs text-slate-500 mt-1">15 minute consultation</p>
              </div>
            </div>
          </div>

          <div className="pt-6 border-t border-blue-200 flex justify-between items-end">
            <span className="text-sm font-semibold text-slate-600">Total</span>
            <span className="text-2xl font-bold text-slate-900">$75.00</span>
          </div>
        </div>

        {/* Payment Form */}
        <div className="md:w-7/12 p-8">
          <h2 className="text-xl font-bold text-slate-900 mb-6">Payment & Intake</h2>
          
          <div className="mb-6">
            <label className="text-xs font-bold text-slate-700 block mb-2">Reason for visit</label>
            <textarea 
              placeholder="Briefly describe your symptoms..." 
              className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-sm focus:outline-none focus:border-blue-500 min-h-[80px] resize-none"
            />
          </div>

          <div className="space-y-4 mb-8">
            <label className="text-xs font-bold text-slate-700 block mb-1">Payment Method</label>
            <div className="relative">
              <CreditCard size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
              <input placeholder="Card Number" className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-11 pr-4 py-3 font-mono text-sm focus:outline-none focus:border-blue-500" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <input placeholder="MM/YY" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500" />
              <input placeholder="CVC" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500" />
            </div>
          </div>

          <button type="button" 
            onClick={() => setPlaced(true)}
            className="w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white transition shadow-lg shadow-blue-500/20"
          >
            Confirm & Pay $75.00
          </button>

          <p className="text-center text-xs text-slate-400 mt-4">If covered by insurance, you can submit a claim post-visit.</p>
        </div>

      </div>
    </div>
  );
}
