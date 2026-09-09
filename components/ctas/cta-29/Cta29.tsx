"use client";
import React, { useState } from 'react';
import { TrendingUp, Users, ArrowRight } from 'lucide-react';

export default function Cta29() {
  const [employees, setEmployees] = useState(50);
  const hoursSavedPerEmployee = 12; // estimated hours saved monthly
  const hourlyRate = 45; // average hourly cost
  
  const monthlySavings = employees * hoursSavedPerEmployee * hourlyRate;
  const annualSavings = monthlySavings * 12;

  return (
    <div className="w-full max-w-5xl mx-auto p-4 sm:p-8 my-10 font-sans">
      <div className="bg-emerald-950 rounded-[2rem] border border-emerald-900 overflow-hidden flex flex-col md:flex-row shadow-2xl">
        
        {/* Left Side: Calculator */}
        <div className="w-full md:w-1/2 p-8 sm:p-12 lg:p-16 border-b md:border-b-0 md:border-r border-emerald-900">
          <div className="inline-flex items-center gap-2 text-emerald-400 text-xs font-bold uppercase tracking-widest mb-6">
            <TrendingUp size={16} /> ROI Calculator
          </div>
          
          <h2 className="text-3xl font-black text-white mb-4">Calculate your savings</h2>
          <p className="text-emerald-200/70 text-sm font-medium mb-10">See how much time and money your team can recover by automating workflows.</p>

          <div className="bg-emerald-900/40 rounded-2xl p-6 border border-emerald-800">
            <div className="flex justify-between items-center mb-4">
              <label className="text-emerald-100 font-bold flex items-center gap-2"><Users size={16}/> Team Size</label>
              <span className="text-white font-black text-xl">{employees}</span>
            </div>
            
            <input 
              type="range" 
              min="5" 
              max="500" 
              value={employees} 
              onChange={(e) => setEmployees(parseInt(e.target.value))}
              className="w-full h-2 bg-emerald-950 rounded-lg appearance-none cursor-pointer accent-emerald-400"
            />
            <div className="flex justify-between text-xs text-emerald-500 font-bold mt-2">
              <span>5</span>
              <span>500+</span>
            </div>
          </div>
        </div>

        {/* Right Side: Results */}
        <div className="w-full md:w-1/2 bg-emerald-900/20 p-8 sm:p-12 lg:p-16 flex flex-col justify-center relative overflow-hidden">
          {/* Abstract glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/20 rounded-full mix-blend-screen filter blur-[80px]"></div>

          <div className="relative z-10 text-center">
            <div className="text-emerald-200 font-bold text-sm uppercase tracking-widest mb-2">Estimated Annual Savings</div>
            <div className="text-5xl sm:text-6xl font-black text-white mb-2 tracking-tighter tabular-nums">
              ${annualSavings.toLocaleString()}
            </div>
            <div className="text-emerald-400 font-medium text-sm mb-10">
              Based on {employees} employees saving 12 hours/mo.
            </div>

            <button className="w-full py-4 bg-emerald-500 hover:bg-emerald-400 text-emerald-950 font-black rounded-xl transition-all shadow-[0_0_20px_rgba(16,185,129,0.4)] flex items-center justify-center gap-2 text-lg">
              Unlock Your ROI <ArrowRight size={20} />
            </button>
            <p className="text-emerald-500/50 text-xs mt-4 font-medium">Book a demo to see a custom workflow plan.</p>
          </div>
        </div>

      </div>
    </div>
  );
}
