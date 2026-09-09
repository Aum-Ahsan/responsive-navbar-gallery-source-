"use client";
import React, { useState } from 'react';
import { Heart, CheckCircle2 } from 'lucide-react';

export default function Cta39() {
  const [amount, setAmount] = useState(50);
  const [custom, setCustom] = useState(false);
  const [monthly, setMonthly] = useState(true);

  const presets = [10, 25, 50, 100];

  return (
    <div className="w-full max-w-4xl mx-auto p-4 sm:p-8 my-10 font-sans">
      <div className="bg-emerald-900 rounded-[2.5rem] p-8 sm:p-12 border border-emerald-800 shadow-2xl flex flex-col md:flex-row items-center gap-12">
        
        <div className="flex-1 text-center md:text-left">
          <div className="w-16 h-16 bg-emerald-800 rounded-full flex items-center justify-center text-emerald-300 mb-6 mx-auto md:mx-0">
            <Heart size={32} fill="currentColor" />
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4 tracking-tight">
            Your support makes a difference.
          </h2>
          <p className="text-emerald-200 font-medium mb-8 max-w-sm mx-auto md:mx-0">
            100% of your donation goes directly to funding clean water projects in developing communities.
          </p>
          
          <div className="hidden md:flex flex-col gap-3">
            <div className="flex items-center gap-2 text-emerald-300 text-sm font-bold"><CheckCircle2 size={16} /> Tax deductible</div>
            <div className="flex items-center gap-2 text-emerald-300 text-sm font-bold"><CheckCircle2 size={16} /> Secure payment</div>
            <div className="flex items-center gap-2 text-emerald-300 text-sm font-bold"><CheckCircle2 size={16} /> Cancel anytime</div>
          </div>
        </div>

        <div className="w-full md:w-auto bg-white rounded-3xl p-6 sm:p-8 shadow-xl">
          <div className="flex bg-gray-100 rounded-xl p-1 mb-6">
            <button 
              onClick={() => setMonthly(true)}
              className={`flex-1 py-2 text-sm font-bold rounded-lg transition-colors ${monthly ? 'bg-white shadow-sm text-gray-900' : 'text-gray-500'}`}
            >
              Give Monthly
            </button>
            <button 
              onClick={() => setMonthly(false)}
              className={`flex-1 py-2 text-sm font-bold rounded-lg transition-colors ${!monthly ? 'bg-white shadow-sm text-gray-900' : 'text-gray-500'}`}
            >
              Give Once
            </button>
          </div>

          <div className="grid grid-cols-2 gap-3 mb-4">
            {presets.map(preset => (
              <button 
                key={preset}
                onClick={() => { setAmount(preset); setCustom(false); }}
                className={`py-3 text-lg font-black rounded-xl border-2 transition-all ${!custom && amount === preset ? 'border-emerald-500 bg-emerald-50 text-emerald-700' : 'border-gray-200 bg-white text-gray-600 hover:border-gray-300'}`}
              >
                ${preset}
              </button>
            ))}
          </div>
          
          <button 
            onClick={() => { setCustom(true); setAmount(0); }}
            className={`w-full py-3 text-sm font-bold rounded-xl border-2 mb-6 transition-all ${custom ? 'border-emerald-500 bg-emerald-50 text-emerald-700' : 'border-gray-200 bg-white text-gray-600 hover:border-gray-300'}`}
          >
            Custom Amount
          </button>

          {custom && (
            <div className="relative mb-6">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 font-black text-xl">$</span>
              <input 
                type="number" 
                placeholder="0"
                onChange={(e) => setAmount(Number(e.target.value))}
                className="w-full pl-10 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-xl font-black text-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                autoFocus
              />
            </div>
          )}

          <button className="w-full py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-black rounded-xl shadow-lg transition-colors flex items-center justify-center gap-2">
            Donate ${amount || 0} {monthly ? 'Monthly' : ''}
          </button>
        </div>

      </div>
    </div>
  );
}
