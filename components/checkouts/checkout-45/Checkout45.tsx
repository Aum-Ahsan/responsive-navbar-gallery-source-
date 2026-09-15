"use client";
import React, { useState } from "react";
import { Rocket, Target, Users, Check } from "lucide-react";

export default function Checkout45() {
  const [placed, setPlaced] = useState(false);

  if (placed) {
    return (
      <div className="w-full bg-slate-50 p-10 flex items-center justify-center min-h-[500px]">
        <div className="text-center max-w-sm">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Check size={28} className="text-blue-600" />
          </div>
          <h2 className="text-2xl font-bold text-slate-900 mb-2">You're a Backer!</h2>
          <p className="text-slate-500">Thank you for pledging $150 to the project. Your card will only be charged if the funding goal is met on Dec 1st.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full bg-slate-50 p-6 sm:p-10 font-sans flex justify-center">
      <div className="w-full max-w-4xl bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden flex flex-col md:flex-row">
        
        {/* Campaign Info */}
        <div className="md:w-5/12 bg-slate-900 text-white p-8 sm:p-10">
          <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mb-6">
            <Rocket size={24} className="text-white" />
          </div>
          <h2 className="text-2xl font-bold mb-2">Smart Coffee Roaster</h2>
          <p className="text-slate-400 text-sm mb-8">By BrewTech</p>

          <div className="space-y-6">
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="font-bold text-blue-400">$85,000 pledged</span>
                <span className="text-slate-400">of $100,000 goal</span>
              </div>
              <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                <div className="w-[85%] h-full bg-blue-500" />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-slate-800 p-4 rounded-xl border border-slate-700">
                <Users size={16} className="text-slate-400 mb-2" />
                <p className="text-xl font-bold">1,204</p>
                <p className="text-xs text-slate-400 uppercase tracking-wider">Backers</p>
              </div>
              <div className="bg-slate-800 p-4 rounded-xl border border-slate-700">
                <Target size={16} className="text-slate-400 mb-2" />
                <p className="text-xl font-bold">14</p>
                <p className="text-xs text-slate-400 uppercase tracking-wider">Days Left</p>
              </div>
            </div>
          </div>
        </div>

        {/* Checkout Form */}
        <div className="md:w-7/12 p-8 sm:p-10">
          <div className="mb-8">
            <h3 className="font-bold text-slate-900 text-lg mb-2">Selected Reward: Early Bird Pro</h3>
            <p className="text-slate-500 text-sm">Includes 1x Smart Roaster and 3 months of green beans.</p>
            <p className="text-2xl font-bold text-slate-900 mt-4">$150.00</p>
          </div>

          <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 mb-8 text-sm text-blue-800">
            <strong>Risk-free pledge:</strong> Your card will not be charged unless the project reaches its funding goal by Dec 1, 2026.
          </div>

          <div className="space-y-4 mb-8">
            <h4 className="font-bold text-slate-900 text-sm">Payment Details</h4>
            <input placeholder="Card Number" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 font-mono text-sm focus:outline-none focus:border-blue-500" />
            <div className="grid grid-cols-2 gap-4">
              <input placeholder="MM/YY" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500" />
              <input placeholder="CVC" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500" />
            </div>
          </div>

          <button 
            onClick={() => setPlaced(true)}
            className="w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white transition shadow-lg shadow-blue-500/20"
          >
            Pledge $150
          </button>
        </div>

      </div>
    </div>
  );
}
