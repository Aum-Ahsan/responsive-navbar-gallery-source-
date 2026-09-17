"use client";
import React, { useState } from "react";
import { CreditCard, SplitSquareHorizontal, CheckCircle2, ArrowRight } from "lucide-react";

export default function PaymentProcess45() {
  const TOTAL_AMOUNT = 850.00;
  
  const [isSplit, setIsSplit] = useState(false);
  const [splitAmount, setSplitAmount] = useState(TOTAL_AMOUNT / 2); // Amount for Card 1
  
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const amount1 = isSplit ? splitAmount : TOTAL_AMOUNT;
  const amount2 = isSplit ? TOTAL_AMOUNT - splitAmount : 0;

  const handlePay = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
    }, 2000);
  };

  return (
    <div className="w-full min-h-[700px] bg-slate-900 flex items-center justify-center font-sans p-6 text-slate-100">
      
      {!isSuccess ? (
        <div className="max-w-2xl w-full bg-slate-800 rounded-[2rem] p-8 shadow-2xl border border-slate-700 animate-in fade-in duration-500">
          
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-black text-white">Payment</h2>
            <div className="text-right">
              <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Total Due</div>
              <div className="text-3xl font-black text-emerald-400">${TOTAL_AMOUNT.toFixed(2)}</div>
            </div>
          </div>

          <form onSubmit={handlePay} className="space-y-8">
            
            {/* Split Toggle */}
            <div className="flex items-center justify-between bg-slate-900 p-4 rounded-2xl border border-slate-700">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-slate-800 rounded-xl flex items-center justify-center text-slate-400">
                  <SplitSquareHorizontal className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-white">Split Payment</h3>
                  <p className="text-xs text-slate-400">Pay with two different cards</p>
                </div>
              </div>
              
              <label className="relative inline-flex items-center cursor-pointer">
                <input pattern="[a-zA-Z\\s\\-]+" title="Letters only" required 
                  type="checkbox" 
                  className="sr-only peer" 
                  checked={isSplit}
                  onChange={(e) => {
                    setIsSplit(e.target.checked);
                    if (e.target.checked) setSplitAmount(TOTAL_AMOUNT / 2);
                  }}
                />
                <div className="w-14 h-7 bg-slate-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-emerald-500 shadow-inner"></div>
              </label>
            </div>

            {/* Slider Interface (Only visible if split) */}
            <div className={`transition-all duration-500 overflow-hidden ${isSplit ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
              <div className="bg-slate-900 rounded-2xl p-6 border border-slate-700">
                <div className="flex justify-between text-sm font-bold mb-4">
                  <div className="text-indigo-400">Card 1: ${amount1.toFixed(2)}</div>
                  <div className="text-amber-400">Card 2: ${amount2.toFixed(2)}</div>
                </div>
                <input required 
                  type="range" 
                  min="1" 
                  max={TOTAL_AMOUNT - 1} 
                  step="1"
                  value={splitAmount}
                  onChange={(e) => setSplitAmount(Number(e.target.value))}
                  className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-indigo-500"
                />
              </div>
            </div>

            {/* Card Inputs */}
            <div className={`grid grid-cols-1 ${isSplit ? 'md:grid-cols-2 gap-6' : 'gap-0'}`}>
              
              {/* Card 1 */}
              <div className={`space-y-4 transition-all duration-500 ${isSplit ? 'bg-indigo-950/30 p-6 rounded-2xl border border-indigo-900/50' : ''}`}>
                {isSplit && <h3 className="font-bold text-indigo-400 flex items-center justify-between">Primary Card <span>${amount1.toFixed(2)}</span></h3>}
                <div className="relative">
                  <CreditCard className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                  <input onInput={(e) => { e.currentTarget.value = e.currentTarget.value.replace(/[^0-9\s]/g, "").substring(0, 19); }} pattern="[\\d\\s]{16,19}" maxLength={19} title="16 digit card number" required type="text" placeholder="Card Number" className="w-full bg-slate-900 border border-slate-700 rounded-xl pl-12 pr-4 py-4 text-white focus:outline-none focus:border-indigo-500 transition-colors font-mono tracking-widest text-sm" />
                </div>
                <div className="flex gap-4">
                  <input onInput={(e) => { e.currentTarget.value = e.currentTarget.value.replace(/[^0-9\/]/g, "").substring(0, 5); }} pattern="(0[1-9]|1[0-2])\\/?([0-9]{2})" maxLength={5} title="Format: MM/YY" required type="text" placeholder="MM/YY" className="w-1/2 bg-slate-900 border border-slate-700 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-indigo-500 transition-colors font-mono tracking-widest text-center text-sm" />
                  <input onInput={(e) => { e.currentTarget.value = e.currentTarget.value.replace(/[^0-9]/g, "").substring(0, 4); }} pattern="\\d{3,4}" maxLength={4} title="3 or 4 digit CVV/CVC" required type="text" placeholder="CVV" className="w-1/2 bg-slate-900 border border-slate-700 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-indigo-500 transition-colors font-mono tracking-widest text-center text-sm" />
                </div>
              </div>

              {/* Card 2 */}
              {isSplit && (
                <div className="space-y-4 animate-in fade-in zoom-in-95 duration-500 bg-amber-950/20 p-6 rounded-2xl border border-amber-900/30">
                  <h3 className="font-bold text-amber-400 flex items-center justify-between">Secondary Card <span>${amount2.toFixed(2)}</span></h3>
                  <div className="relative">
                    <CreditCard className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                    <input onInput={(e) => { e.currentTarget.value = e.currentTarget.value.replace(/[^0-9\s]/g, "").substring(0, 19); }} pattern="[\\d\\s]{16,19}" maxLength={19} title="16 digit card number" required type="text" placeholder="Card Number" className="w-full bg-slate-900 border border-slate-700 rounded-xl pl-12 pr-4 py-4 text-white focus:outline-none focus:border-amber-500 transition-colors font-mono tracking-widest text-sm" />
                  </div>
                  <div className="flex gap-4">
                    <input onInput={(e) => { e.currentTarget.value = e.currentTarget.value.replace(/[^0-9\/]/g, "").substring(0, 5); }} pattern="(0[1-9]|1[0-2])\\/?([0-9]{2})" maxLength={5} title="Format: MM/YY" required type="text" placeholder="MM/YY" className="w-1/2 bg-slate-900 border border-slate-700 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-amber-500 transition-colors font-mono tracking-widest text-center text-sm" />
                    <input onInput={(e) => { e.currentTarget.value = e.currentTarget.value.replace(/[^0-9]/g, "").substring(0, 4); }} pattern="\\d{3,4}" maxLength={4} title="3 or 4 digit CVV/CVC" required type="text" placeholder="CVV" className="w-1/2 bg-slate-900 border border-slate-700 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-amber-500 transition-colors font-mono tracking-widest text-center text-sm" />
                  </div>
                </div>
              )}

            </div>

            <button 
              type="submit" 
              disabled={isProcessing}
              className="w-full py-5 bg-emerald-600 text-white rounded-xl font-bold text-lg flex items-center justify-center gap-2 hover:bg-emerald-500 transition-colors shadow-[0_0_20px_rgba(16,185,129,0.3)] disabled:opacity-70 disabled:shadow-none"
            >
              {isProcessing ? (
                <div className="w-6 h-6 border-4 border-white/30 border-t-white rounded-full animate-spin"></div>
              ) : (
                <>Pay ${TOTAL_AMOUNT.toFixed(2)} <ArrowRight className="w-5 h-5" /></>
              )}
            </button>
          </form>

        </div>
      ) : (
        <div className="max-w-md w-full bg-slate-800 rounded-[2rem] p-10 shadow-2xl border border-slate-700 text-center animate-in zoom-in duration-500">
           <div className="w-24 h-24 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
             <CheckCircle2 className="w-12 h-12 text-emerald-500" strokeWidth={3} />
           </div>
           <h2 className="text-3xl font-black text-white mb-2">Payment Complete</h2>
           
           {isSplit ? (
             <div className="bg-slate-900 rounded-2xl p-4 my-6 space-y-2 border border-slate-700">
                <div className="flex justify-between text-indigo-400 font-bold text-sm">
                  <span>Card 1 Processed</span>
                  <span>${amount1.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-amber-400 font-bold text-sm">
                  <span>Card 2 Processed</span>
                  <span>${amount2.toFixed(2)}</span>
                </div>
             </div>
           ) : (
             <p className="text-slate-400 mb-8 mt-2 font-medium">Your card was successfully charged.</p>
           )}
           
           <button type="button" 
              onClick={() => { setIsSuccess(false); setIsSplit(false); setSplitAmount(TOTAL_AMOUNT/2); }}
              className="w-full py-4 bg-slate-700 hover:bg-slate-600 text-white font-bold rounded-xl transition-colors"
            >
              Done
            </button>
        </div>
      )}

    </div>
  );
}
