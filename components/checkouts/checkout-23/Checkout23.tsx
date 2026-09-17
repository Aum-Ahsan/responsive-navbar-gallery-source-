"use client";
import React, { useState } from "react";
import { Pill, FileCheck, Package, Check, Lock, FileUp } from "lucide-react";

export default function Checkout23() {
  const [discrete, setDiscrete] = useState(true);
  const [rxUploaded, setRxUploaded] = useState(false);
  const [payMethod, setPayMethod] = useState<"card" | "hsa">("card");
  const [placed, setPlaced] = useState(false);
  
  const total = 45;

  if (placed) {
    return (
      <div className="w-full bg-slate-50 p-10 flex items-center justify-center min-h-[400px]">
        <div className="text-center max-w-sm">
          <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Check size={28} className="text-teal-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">Prescription Request Received!</h2>
          <p className="text-slate-500 text-sm mt-2">Our pharmacy team will review your prescription. Once verified, your order will ship in discrete packaging.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full bg-slate-50 p-6 sm:p-10 font-sans">
      <div className="max-w-lg mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 bg-teal-100 rounded-2xl flex items-center justify-center">
            <Pill size={24} className="text-teal-700" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-slate-900">Pharmacy Checkout</h2>
            <p className="text-slate-500 text-sm">Secure, verified, and confidential.</p>
          </div>
        </div>

        {/* Prescription Verification */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 mb-6">
          <h3 className="font-bold text-slate-900 text-sm mb-1 flex items-center gap-2"><FileCheck size={16} className="text-teal-600" /> Prescription Verification</h3>
          <p className="text-xs text-slate-500 mb-4">This medication requires a valid prescription from your doctor.</p>
          
          {rxUploaded ? (
            <div className="bg-teal-50 border border-teal-200 rounded-xl p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <FileCheck size={20} className="text-teal-600" />
                <div>
                  <p className="font-semibold text-teal-900 text-sm">prescription_scan.pdf</p>
                  <p className="text-xs text-teal-700">Uploaded successfully</p>
                </div>
              </div>
              <button type="button" onClick={() => setRxUploaded(false)} className="text-xs font-bold text-teal-700 hover:underline">Remove</button>
            </div>
          ) : (
            <button type="button" 
              onClick={() => setRxUploaded(true)}
              className="w-full border-2 border-dashed border-slate-300 rounded-xl p-6 flex flex-col items-center justify-center hover:bg-slate-50 hover:border-teal-400 transition"
            >
              <FileUp size={24} className="text-slate-400 mb-2" />
              <p className="font-semibold text-slate-700 text-sm">Upload Prescription</p>
              <p className="text-xs text-slate-500 mt-1">PDF, JPG, or PNG up to 10MB</p>
            </button>
          )}
        </div>

        {/* Shipping Preferences */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 mb-6">
          <h3 className="font-bold text-slate-900 text-sm mb-4 flex items-center gap-2"><Package size={16} className="text-slate-600" /> Shipping & Packaging</h3>
          <label className="flex items-start gap-3 cursor-pointer">
            <div className={`w-5 h-5 rounded border-2 mt-0.5 shrink-0 flex items-center justify-center ${discrete ? "bg-teal-600 border-teal-600" : "border-slate-300"}`}>
              {discrete && <Check size={12} className="text-white" />}
            </div>
            <input type="checkbox" checked={discrete} onChange={() => setDiscrete(!discrete)} className="hidden" />
            <div>
              <p className="font-semibold text-slate-900 text-sm">Discrete Packaging (Free)</p>
              <p className="text-xs text-slate-500 mt-1">Ship in a plain box with no pharmacy branding or medication names visible.</p>
            </div>
          </label>
        </div>

        {/* Payment */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 mb-6">
          <h3 className="font-bold text-slate-900 text-sm mb-4">Payment Method</h3>
          
          <div className="flex gap-2 mb-4 bg-slate-100 p-1 rounded-xl">
            <button type="button" 
              onClick={() => setPayMethod("card")}
              className={`flex-1 py-2 text-sm font-bold rounded-lg transition ${payMethod === "card" ? "bg-white shadow text-slate-900" : "text-slate-500"}`}
            >
              Credit Card
            </button>
            <button type="button" 
              onClick={() => setPayMethod("hsa")}
              className={`flex-1 py-2 text-sm font-bold rounded-lg transition ${payMethod === "hsa" ? "bg-white shadow text-slate-900" : "text-slate-500"}`}
            >
              HSA / FSA Card
            </button>
          </div>

          <div className="space-y-3">
            <input placeholder={payMethod === "hsa" ? "HSA/FSA Card Number" : "Card Number"} className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm font-mono focus:outline-none focus:ring-2 focus:ring-teal-500" />
            <div className="grid grid-cols-2 gap-3">
              <input placeholder="MM / YY" className="border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500" />
              <input placeholder="CVV" className="border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500" />
            </div>
          </div>
        </div>

        <button type="button" 
          onClick={() => rxUploaded && setPlaced(true)} 
          disabled={!rxUploaded}
          className={`w-full py-4 rounded-2xl font-bold flex items-center justify-center gap-2 transition ${rxUploaded ? "bg-teal-700 hover:bg-teal-800 text-white" : "bg-slate-200 text-slate-400 cursor-not-allowed"}`}
        >
          <Lock size={16} /> Pay ${total} & Submit for Review
        </button>
        {!rxUploaded && <p className="text-center text-xs text-rose-500 font-medium mt-3">Please upload your prescription to continue.</p>}
      </div>
    </div>
  );
}
