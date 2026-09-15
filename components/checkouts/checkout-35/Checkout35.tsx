"use client";
import React, { useState } from "react";
import { Car, MapPin, Calendar, Check, ShieldCheck } from "lucide-react";

export default function Checkout35() {
  const [insurance, setInsurance] = useState(true);
  const [placed, setPlaced] = useState(false);

  const baseRate = 65;
  const days = 3;
  const insuranceRate = 20;

  const total = (baseRate * days) + (insurance ? insuranceRate * days : 0);

  if (placed) {
    return (
      <div className="w-full bg-slate-50 p-10 flex items-center justify-center min-h-[400px]">
        <div className="text-center max-w-sm">
          <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Check size={28} className="text-emerald-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">Car Reserved!</h2>
          <p className="text-slate-500 text-sm mt-2">Your reservation #CR-9982 is confirmed. Check your email for details.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full bg-slate-50 p-6 sm:p-10 font-sans flex justify-center">
      <div className="w-full max-w-4xl bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden flex flex-col md:flex-row">
        
        {/* Details Side */}
        <div className="md:w-5/12 bg-slate-900 p-8 sm:p-10 text-white flex flex-col justify-between">
          <div>
            <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-6 border border-blue-500/30">
              <Car size={24} className="text-blue-400" />
            </div>
            <h2 className="text-2xl font-bold mb-1">Tesla Model 3</h2>
            <p className="text-slate-400 text-sm mb-8">Electric • Automatic • 5 Seats</p>

            <div className="space-y-6">
              <div>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2 flex items-center gap-1"><MapPin size={12}/> Pick-up & Drop-off</p>
                <p className="font-semibold text-sm">SFO International Airport</p>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2 flex items-center gap-1"><Calendar size={12}/> Pick-up</p>
                  <p className="font-semibold text-sm">Nov 12, 10:00 AM</p>
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2 flex items-center gap-1"><Calendar size={12}/> Drop-off</p>
                  <p className="font-semibold text-sm">Nov 15, 10:00 AM</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 pt-6 border-t border-slate-700/50 flex justify-between items-end">
            <span className="text-slate-400 font-bold">Total ({days} days)</span>
            <span className="text-3xl font-bold">${total.toFixed(2)}</span>
          </div>
        </div>

        {/* Form Side */}
        <div className="md:w-7/12 p-8 sm:p-10">
          
          <div className="mb-8">
            <h3 className="font-bold text-slate-900 text-sm mb-4">Driver Details</h3>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <input placeholder="First Name" className="bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500" />
              <input placeholder="Last Name" className="bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <input placeholder="Email" type="email" className="bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500" />
              <input placeholder="Phone" className="bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500" />
            </div>
          </div>

          <div className="mb-8">
            <h3 className="font-bold text-slate-900 text-sm mb-4 flex items-center gap-2">
              <ShieldCheck size={18} className="text-emerald-500" /> Add Protection
            </h3>
            
            <label className={`flex items-start gap-4 p-4 rounded-xl border-2 cursor-pointer transition ${insurance ? "border-emerald-500 bg-emerald-50" : "border-slate-200 hover:border-slate-300"}`}>
              <input type="checkbox" checked={insurance} onChange={() => setInsurance(!insurance)} className="mt-1" />
              <div className="flex-1">
                <div className="flex justify-between items-center mb-1">
                  <span className="font-bold text-sm text-slate-900">Loss Damage Waiver (LDW)</span>
                  <span className="font-bold text-sm text-emerald-700">+${insuranceRate}/day</span>
                </div>
                <p className="text-xs text-slate-500">Waives your financial responsibility if the car is damaged or stolen. Highly recommended.</p>
              </div>
            </label>
          </div>

          <button 
            onClick={() => setPlaced(true)}
            className="w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white transition shadow-lg shadow-blue-500/20"
          >
            Reserve Now
          </button>
          <p className="text-center text-xs text-slate-400 mt-4">Pay at pick-up. Free cancellation up to 24h before.</p>

        </div>

      </div>
    </div>
  );
}
