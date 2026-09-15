"use client";
import React, { useState } from "react";
import { Truck, MapPin, Check, AlertCircle } from "lucide-react";

export default function Checkout43() {
  const [zip, setZip] = useState("");
  const [checked, setChecked] = useState(false);
  const [eligible, setEligible] = useState(false);
  const [placed, setPlaced] = useState(false);

  const handleCheck = () => {
    setChecked(true);
    // Mock logic: zip codes starting with 9 are eligible
    setEligible(zip.startsWith("9"));
  };

  if (placed) {
    return (
      <div className="w-full bg-slate-50 p-10 flex items-center justify-center min-h-[400px]">
        <div className="text-center">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-600">
            <Check size={28} />
          </div>
          <h2 className="text-xl font-bold text-slate-900">Delivery Scheduled!</h2>
          <p className="text-slate-500 text-sm mt-2">Your mattress will arrive tomorrow between 10am and 2pm.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full bg-slate-50 p-6 sm:p-10 font-sans flex justify-center">
      <div className="w-full max-w-md bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm">
        
        <div className="flex items-center gap-4 mb-6 pb-6 border-b border-slate-100">
          <div className="w-14 h-14 bg-slate-100 rounded-xl flex items-center justify-center shrink-0">
            <Truck size={24} className="text-slate-600" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-slate-900">Local Delivery</h2>
            <p className="text-slate-500 text-sm mt-1">We deliver heavy items within a 50-mile radius of our warehouse.</p>
          </div>
        </div>

        {!checked || !eligible ? (
          <div className="mb-8">
            <label className="text-sm font-bold text-slate-700 block mb-2">Check Eligibility</label>
            <div className="flex gap-2">
              <input 
                placeholder="Enter Zip Code (Try 9xxxx)" 
                value={zip}
                onChange={e => { setZip(e.target.value); setChecked(false); }}
                className="flex-1 bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500" 
              />
              <button 
                onClick={handleCheck}
                disabled={!zip}
                className="py-3 px-6 bg-slate-900 text-white rounded-xl font-bold hover:bg-slate-800 disabled:opacity-50"
              >
                Check
              </button>
            </div>
            
            {checked && !eligible && (
              <div className="mt-4 p-3 bg-rose-50 border border-rose-200 rounded-xl flex items-start gap-3">
                <AlertCircle size={18} className="text-rose-500 shrink-0 mt-0.5" />
                <p className="text-sm text-rose-800">
                  Sorry, {zip} is outside our local delivery zone. Please choose standard freight shipping instead.
                </p>
              </div>
            )}
          </div>
        ) : (
          <div className="animate-in fade-in slide-in-from-bottom-2">
            <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl flex items-start gap-3 mb-6">
              <Check size={18} className="text-emerald-600 shrink-0 mt-0.5" />
              <p className="text-sm text-emerald-800">
                <strong>Great news!</strong> {zip} is in our local zone. You qualify for next-day delivery ($49 flat rate).
              </p>
            </div>

            <div className="space-y-4 mb-8">
              <input placeholder="Full Street Address" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500" />
              <textarea placeholder="Delivery Instructions (e.g. gate code)" className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-sm min-h-[80px]" />
            </div>

            <button 
              onClick={() => setPlaced(true)}
              className="w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white transition shadow-lg shadow-blue-500/20"
            >
              Pay $49 Delivery Fee
            </button>
            <button 
              onClick={() => { setChecked(false); setZip(""); }}
              className="w-full py-3 mt-2 text-sm font-semibold text-slate-500 hover:text-slate-800"
            >
              Change Zip Code
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
