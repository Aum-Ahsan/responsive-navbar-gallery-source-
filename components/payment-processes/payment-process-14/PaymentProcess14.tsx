"use client";
import React, { useState } from "react";
import { Heart, CheckCircle2, ChevronRight, Share2 } from "lucide-react";

export default function PaymentProcess14() {
  const [amount, setAmount] = useState<number>(50);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const MIN_AMOUNT = 5;
  const MAX_AMOUNT = 200;

  // Calculate percentage for gradient background
  const percentage = ((amount - MIN_AMOUNT) / (MAX_AMOUNT - MIN_AMOUNT)) * 100;

  const handlePay = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
    }, 2000);
  };

  // Get emoji based on amount
  const getEmoji = () => {
    if (amount < 20) return "☕";
    if (amount < 50) return "🥪";
    if (amount < 100) return "🎉";
    if (amount < 150) return "🔥";
    return "💎";
  };

  const getImpactMessage = () => {
    if (amount < 20) return "Funds a hot meal for someone in need.";
    if (amount < 50) return "Provides a week of clean drinking water.";
    if (amount < 100) return "Supplies a classroom with books.";
    if (amount < 150) return "Sponsors a medical care package.";
    return "Transforms a community's infrastructure.";
  };

  if (isSuccess) {
    return (
      <div className="w-full min-h-screen flex items-center justify-center font-sans bg-rose-50 p-6">
        <div className="max-w-md w-full bg-white rounded-[2rem] p-8 shadow-2xl text-center border border-rose-100 animate-in zoom-in-95 duration-500">
          <div className="w-24 h-24 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Heart className="w-12 h-12 text-rose-500 fill-rose-500 animate-pulse" />
          </div>
          <h2 className="text-3xl font-black text-slate-900 mb-2">Thank You!</h2>
          <p className="text-slate-500 mb-6">Your generous donation of <strong className="text-slate-900">${amount}</strong> has been received.</p>
          <div className="bg-rose-50 rounded-xl p-4 mb-8 text-sm text-rose-800 font-medium">
            "{getImpactMessage()}"
          </div>
          <div className="flex gap-4">
            <button type="button" onClick={() => setIsSuccess(false)} className="flex-1 py-4 bg-slate-100 text-slate-700 font-bold rounded-xl hover:bg-slate-200 transition-colors">
              Close
            </button>
            <button type="button" className="flex-1 py-4 bg-rose-500 text-white font-bold rounded-xl hover:bg-rose-600 transition-colors flex items-center justify-center gap-2 shadow-lg shadow-rose-500/30">
              <Share2 className="w-4 h-4" /> Share
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen bg-slate-50 flex items-center justify-center font-sans p-6 overflow-hidden">
      
      <div className="max-w-xl w-full bg-white rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col relative border border-slate-100">
        
        {/* Dynamic Header */}
        <div 
          className="h-64 transition-colors duration-500 flex flex-col items-center justify-center relative px-8"
          style={{ 
            backgroundColor: `hsl(350, 80%, ${100 - (percentage * 0.4)}%)`, // Gets darker red as amount increases
            color: percentage > 50 ? 'white' : '#0f172a'
          }}
        >
          {/* Decorative circles */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

          <div className="relative z-10 text-center">
            <div className="text-6xl mb-4 animate-bounce" style={{ animationDuration: '2s' }}>{getEmoji()}</div>
            <div className="text-sm font-bold tracking-widest uppercase mb-2 opacity-80">You are donating</div>
            <div className="text-6xl font-black tracking-tighter">
              <span className="opacity-75 font-normal text-4xl mr-1">$</span>
              {amount}
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-8 md:p-12 relative z-20 bg-white rounded-t-[2.5rem] -mt-6">
          
          <div className="text-center mb-10">
            <h3 className="text-xl font-bold text-slate-900 mb-2">Support the Cause</h3>
            <p className="text-slate-500 font-medium h-12 flex items-center justify-center">{getImpactMessage()}</p>
          </div>

          <form onSubmit={handlePay}>
            
            {/* Slider */}
            <div className="mb-12 relative">
              <div className="flex justify-between text-xs font-bold text-slate-400 mb-4 px-2">
                <span>${MIN_AMOUNT}</span>
                <span>${MAX_AMOUNT}</span>
              </div>
              
              <div className="relative h-14 flex items-center">
                {/* Custom Track background */}
                <div className="absolute left-0 right-0 h-4 bg-slate-100 rounded-full pointer-events-none"></div>
                
                {/* Custom Track fill */}
                <div 
                  className="absolute left-0 h-4 bg-rose-500 rounded-full pointer-events-none transition-all duration-75"
                  style={{ width: `${percentage}%` }}
                ></div>

                <input required 
                  type="number" 
                  min={MIN_AMOUNT} 
                  max={MAX_AMOUNT} 
                  value={amount}
                  onChange={(e) => setAmount(Number(e.target.value))}
                  className="w-full absolute z-10 opacity-0 cursor-ew-resize h-full"
                 min={1} />

                {/* Custom Thumb */}
                <div 
                  className="w-10 h-10 bg-white border-4 border-rose-500 rounded-full shadow-lg absolute pointer-events-none flex items-center justify-center transition-all duration-75 z-20"
                  style={{ left: `calc(${percentage}% - 20px)` }} // -20px to center the 40px thumb
                >
                  <div className="w-2 h-2 bg-rose-500 rounded-full"></div>
                </div>
              </div>
            </div>

            {/* Quick Select Buttons */}
            <div className="grid grid-cols-4 gap-3 mb-10">
              {[25, 50, 100, 150].map((val) => (
                <button
                  key={val}
                  type="button"
                  onClick={() => setAmount(val)}
                  className={`py-3 rounded-xl font-bold transition-colors ${
                    amount === val 
                      ? 'bg-rose-100 text-rose-700 border-2 border-rose-500' 
                      : 'bg-slate-50 text-slate-600 border-2 border-transparent hover:bg-slate-100'
                  }`}
                >
                  ${val}
                </button>
              ))}
            </div>

            <button 
              type="submit" 
              disabled={isProcessing}
              className="w-full py-5 bg-slate-900 text-white rounded-2xl font-bold text-xl flex justify-center items-center gap-3 shadow-xl hover:-translate-y-1 hover:shadow-2xl transition-all disabled:opacity-70 disabled:hover:translate-y-0 disabled:hover:shadow-xl"
            >
              {isProcessing ? 'Processing...' : `Donate $${amount}`}
              {!isProcessing && <ChevronRight className="w-6 h-6" />}
            </button>
            
          </form>
        </div>

      </div>
    </div>
  );
}
