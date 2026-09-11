"use client";
import React, { useState } from 'react';

export default function Process26() {
  const [step, setStep] = useState(2);
  const steps = ['Cart', 'Details', 'Payment', 'Review'];

  return (
    <div className="w-full max-w-3xl mx-auto p-5 sm:p-8 lg:p-10 font-sans bg-gray-50 my-10 rounded-3xl border border-gray-200">
      <h2 className="text-2xl font-black text-gray-900 mb-8 uppercase tracking-tight">Checkout</h2>
      
      <div className="flex items-center justify-between mb-12 relative">
        {/* Progress Line */}
        <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-200 -translate-y-1/2 z-0"></div>
        <div 
          className="absolute top-1/2 left-0 h-1 bg-slate-900 -translate-y-1/2 z-0 transition-all duration-500"
          style={{ width: `${((step - 1) / (steps.length - 1)) * 100}%` }}
        ></div>

        {steps.map((s, idx) => {
          const num = idx + 1;
          const isActive = step === num;
          const isDone = step > num;
          
          return (
            <div key={idx} className="relative z-10 flex flex-col items-center bg-gray-50 px-2">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-colors ${
                isDone ? 'bg-slate-900 text-white' : 
                isActive ? 'bg-white border-4 border-slate-900 text-slate-900' : 
                'bg-white border-2 border-gray-300 text-gray-400'
              }`}>
                {isDone ? '✓' : num}
              </div>
              <span className={`absolute -bottom-6 text-xs font-bold whitespace-nowrap ${isActive || isDone ? 'text-slate-900' : 'text-gray-400'}`}>
                {s}
              </span>
            </div>
          );
        })}
      </div>

      <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 min-h-[200px]">
        {step === 2 && (
          <div className="animate-in fade-in duration-500">
            <h3 className="font-bold text-lg mb-4">Shipping Details</h3>
            <div className="space-y-4">
              <div className="h-10 bg-gray-100 rounded w-full"></div>
              <div className="flex gap-4">
                <div className="h-10 bg-gray-100 rounded w-1/2"></div>
                <div className="h-10 bg-gray-100 rounded w-1/2"></div>
              </div>
            </div>
            <button onClick={() => setStep(3)} className="mt-8 w-full bg-slate-900 text-white font-bold py-3 rounded-xl hover:bg-slate-800 transition-colors">
              Continue to Payment
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
