"use client";
import React, { useState } from "react";
import { FileText, Download, Building, Check, ArrowRight } from "lucide-react";

export default function Checkout33() {
  const [method, setMethod] = useState<"card" | "ach">("card");
  const [paid, setPaid] = useState(false);

  if (paid) {
    return (
      <div className="w-full bg-slate-50 p-10 flex items-center justify-center min-h-[400px]">
        <div className="text-center">
          <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Check size={28} className="text-emerald-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">Invoice Paid!</h2>
          <p className="text-slate-500 text-sm mt-2">Thank you for your business. A receipt has been sent to accounting@acme.corp.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full bg-slate-50 p-6 sm:p-10 font-sans flex justify-center">
      <div className="w-full max-w-3xl bg-white rounded-3xl border border-slate-200 shadow-sm flex flex-col md:flex-row overflow-hidden">
        
        {/* Invoice Summary */}
        <div className="md:w-1/2 bg-slate-900 p-8 sm:p-10 text-white flex flex-col">
          <div className="flex justify-between items-start mb-12">
            <div>
              <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-1">Invoice</p>
              <h2 className="text-2xl font-bold">INV-2026-089</h2>
            </div>
            <div className="w-10 h-10 bg-indigo-500 rounded-lg flex items-center justify-center">
              <Building size={20} className="text-white" />
            </div>
          </div>
          
          <div className="mb-auto">
            <p className="text-slate-400 text-sm mb-1">Billed to</p>
            <p className="font-semibold mb-6">Acme Corporation</p>
            
            <p className="text-slate-400 text-sm mb-1">Description</p>
            <p className="font-semibold mb-6">Q3 Strategy Consulting & Implementation</p>
            
            <p className="text-slate-400 text-sm mb-1">Due Date</p>
            <p className="font-semibold">Oct 15, 2026</p>
          </div>

          <div className="mt-12 pt-6 border-t border-slate-700/50 flex justify-between items-end">
            <p className="text-slate-400 text-sm">Total Due</p>
            <p className="text-4xl font-bold">$12,500.00</p>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="md:w-1/2 p-8 sm:p-10 flex flex-col justify-between">
          <div>
            <h3 className="text-lg font-bold text-slate-900 mb-6">Pay Invoice</h3>
            
            <div className="flex gap-2 mb-6">
              <button type="button" 
                onClick={() => setMethod("ach")}
                className={`flex-1 py-3 px-4 rounded-xl text-sm font-bold transition border-2 ${method === "ach" ? "border-indigo-600 bg-indigo-50 text-indigo-700" : "border-slate-100 text-slate-500 hover:border-slate-200"}`}
              >
                Bank / ACH
              </button>
              <button type="button" 
                onClick={() => setMethod("card")}
                className={`flex-1 py-3 px-4 rounded-xl text-sm font-bold transition border-2 ${method === "card" ? "border-indigo-600 bg-indigo-50 text-indigo-700" : "border-slate-100 text-slate-500 hover:border-slate-200"}`}
              >
                Credit Card
              </button>
            </div>

            {method === "card" ? (
              <div className="space-y-4">
                <input placeholder="Card Number" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 font-mono text-sm focus:outline-none focus:border-indigo-500" />
                <div className="grid grid-cols-2 gap-4">
                  <input placeholder="MM/YY" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-indigo-500" />
                  <input placeholder="CVC" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-indigo-500" />
                </div>
                <p className="text-xs text-slate-500 mt-2">Note: A 2.9% processing fee applies to credit card payments.</p>
              </div>
            ) : (
              <div className="space-y-4">
                <button type="button" className="w-full py-4 rounded-xl border border-slate-200 bg-slate-50 hover:bg-slate-100 transition font-bold text-slate-700 flex justify-center items-center gap-2">
                  <Building size={18} /> Link Bank Account via Plaid
                </button>
                <div className="relative flex py-2 items-center">
                  <div className="flex-grow border-t border-slate-200"></div>
                  <span className="flex-shrink-0 mx-4 text-slate-400 text-xs font-bold uppercase">or enter manually</span>
                  <div className="flex-grow border-t border-slate-200"></div>
                </div>
                <input placeholder="Routing Number" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm font-mono focus:outline-none focus:border-indigo-500" />
                <input placeholder="Account Number" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm font-mono focus:outline-none focus:border-indigo-500" />
              </div>
            )}
          </div>

          <div className="mt-8">
            <button type="button" 
              onClick={() => setPaid(true)}
              className="w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white transition shadow-lg shadow-indigo-500/20"
            >
              Pay ${method === "card" ? "12,862.50" : "12,500.00"} <ArrowRight size={18} />
            </button>
            <button type="button" className="w-full py-3 mt-3 rounded-xl font-medium text-sm text-slate-500 hover:text-slate-800 transition flex items-center justify-center gap-2">
              <Download size={16} /> Download PDF
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
