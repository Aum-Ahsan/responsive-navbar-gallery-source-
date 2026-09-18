"use client";
import React, { useState } from "react";
import { CreditCard, ArrowRight, CheckCircle2, Sparkles, Coins } from "lucide-react";

export default function PaymentProcess54() {
  const baseTotal = 150.00;
  const POINTS_BALANCE = 8500; // Total points available
  const POINTS_VALUE = 0.01; // 1 point = $0.01
  
  // Max points they can apply is either all their points, or enough points to cover the entire total
  const maxPointsApplicable = Math.min(POINTS_BALANCE, Math.ceil(baseTotal / POINTS_VALUE));
  
  const [pointsUsed, setPointsUsed] = useState(0);
  
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const discount = pointsUsed * POINTS_VALUE;
  const finalTotal = Math.max(0, baseTotal - discount);

  const handlePay = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
    }, 2000);
  };

  return (
    <div className="w-full min-h-[700px] bg-zinc-950 flex items-center justify-center font-sans p-6 text-zinc-100">
      
      {!isSuccess ? (
        <div className="max-w-md w-full bg-zinc-900 rounded-[2.5rem] p-8 shadow-2xl border border-zinc-800 animate-in fade-in duration-500">
          
          <h2 className="text-2xl font-black text-white mb-6">Payment</h2>

          {/* Loyalty Points Section */}
          <div className="bg-amber-950/30 border border-amber-900/50 rounded-2xl p-6 mb-8 relative overflow-hidden">
            <div className="absolute -right-4 -top-4 w-24 h-24 bg-amber-500/10 rounded-full blur-xl pointer-events-none"></div>
            
            <div className="flex justify-between items-start mb-4 relative z-10">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-amber-500/20 flex items-center justify-center">
                  <Coins className="w-4 h-4 text-amber-400" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-sm">Loyalty Points</h3>
                  <p className="text-xs text-amber-500 font-medium">Balance: {POINTS_BALANCE.toLocaleString()} pts</p>
                </div>
              </div>
            </div>

            <div className="relative z-10 mb-2">
              <div className="flex justify-between text-xs font-bold mb-3">
                <span className="text-zinc-400">0 pts</span>
                <span className="text-amber-400">Redeeming {pointsUsed.toLocaleString()} pts</span>
                <span className="text-zinc-400">{maxPointsApplicable.toLocaleString()} pts</span>
              </div>
              
              <input required 
                type="range" 
                min="0" 
                max={maxPointsApplicable} 
                step="100"
                value={pointsUsed}
                onChange={(e) => setPointsUsed(Number(e.target.value))}
                className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-amber-500"
               minLength={2} maxLength={50} />
            </div>
            
            <div className="text-right text-xs text-amber-500 font-bold relative z-10">
              Value: -${(pointsUsed * POINTS_VALUE).toFixed(2)}
            </div>
          </div>

          <div className="bg-zinc-800/50 rounded-2xl p-6 mb-8 border border-zinc-700/50">
            <div className="flex justify-between items-center mb-3 text-sm">
              <span className="font-medium text-zinc-400">Subtotal</span>
              <span className="font-bold text-white">${baseTotal.toFixed(2)}</span>
            </div>
            
            <div className={`flex justify-between items-center text-sm transition-all duration-300 overflow-hidden ${pointsUsed > 0 ? 'max-h-10 opacity-100 mb-4' : 'max-h-0 opacity-0 mb-0'}`}>
              <span className="font-bold text-amber-400 flex items-center gap-1"><Sparkles className="w-3 h-3" /> Points Discount</span>
              <span className="font-bold text-amber-400">-${discount.toFixed(2)}</span>
            </div>

            <div className="flex justify-between items-end pt-4 border-t border-zinc-700">
              <span className="font-bold text-zinc-300">Total</span>
              <div className="text-right">
                <span className="text-4xl font-black text-white">${finalTotal.toFixed(2)}</span>
              </div>
            </div>
          </div>

          <form onSubmit={handlePay} className="space-y-4">
            
            {finalTotal > 0 && (
              <>
                <div className="relative">
                  <CreditCard className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-500" />
                  <input onInput={(e) => { e.currentTarget.value = e.currentTarget.value.replace(/[^0-9\s]/g, "").substring(0, 19); }} pattern="[\\d\\s]{16,19}" maxLength={19} title="16 digit card number" required type="text" placeholder="Card Number" className="w-full bg-zinc-950 border border-zinc-800 rounded-xl pl-12 pr-4 py-4 text-white focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors font-mono tracking-widest text-sm"  minLength={16} />
                </div>
                
                <div className="flex gap-4">
                  <input onInput={(e) => { e.currentTarget.value = e.currentTarget.value.replace(/[^0-9\/]/g, "").substring(0, 5); }} pattern="(0[1-9]|1[0-2])\\/?([0-9]{2})" maxLength={5} title="Format: MM/YY" required type="text" placeholder="MM/YY" className="w-1/2 bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors font-mono tracking-widest text-center text-sm"  minLength={5} />
                  <input onInput={(e) => { e.currentTarget.value = e.currentTarget.value.replace(/[^0-9]/g, "").substring(0, 4); }} pattern="\\d{3,4}" maxLength={4} title="3 or 4 digit CVV/CVC" required type="text" placeholder="CVV" className="w-1/2 bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors font-mono tracking-widest text-center text-sm"  minLength={3} />
                </div>
              </>
            )}

            <button 
              type="submit" 
              disabled={isProcessing}
              className="w-full py-5 mt-4 bg-amber-500 text-amber-950 rounded-xl font-bold text-lg flex items-center justify-center gap-2 hover:bg-amber-400 transition-all shadow-[0_0_20px_rgba(245,158,11,0.2)] disabled:opacity-70 disabled:shadow-none"
            >
              {isProcessing ? (
                <div className="w-6 h-6 border-4 border-amber-950/30 border-t-amber-950 rounded-full animate-spin"></div>
              ) : (
                <>Complete Payment <ArrowRight className="w-5 h-5" /></>
              )}
            </button>
          </form>

        </div>
      ) : (
        <div className="max-w-md w-full bg-zinc-900 rounded-[2.5rem] p-12 shadow-2xl border border-zinc-800 text-center animate-in zoom-in duration-500 relative z-10">
           <div className="w-24 h-24 bg-amber-500/20 rounded-full flex items-center justify-center mx-auto mb-6 relative">
             <CheckCircle2 className="w-12 h-12 text-amber-500 relative z-10" strokeWidth={3} />
             <div className="absolute inset-0 border-2 border-amber-500/30 rounded-full animate-ping"></div>
           </div>
           <h2 className="text-3xl font-black text-white mb-2">Payment Complete</h2>
           
           <div className="bg-zinc-950 rounded-xl p-4 my-6 border border-zinc-800 text-sm">
             <div className="flex justify-between items-center text-zinc-400 mb-2">
               <span>Points Remaining:</span>
               <span className="font-bold text-white">{(POINTS_BALANCE - pointsUsed).toLocaleString()} pts</span>
             </div>
             <div className="flex justify-between items-center text-amber-500">
               <span>Points Earned Today:</span>
               <span className="font-bold">+{Math.floor(finalTotal * 10).toLocaleString()} pts</span>
             </div>
           </div>
           
           <button type="button" 
              onClick={() => { setIsSuccess(false); setPointsUsed(0); }}
              className="w-full py-4 bg-zinc-800 hover:bg-zinc-700 text-white font-bold rounded-xl transition-colors"
            >
              Done
            </button>
        </div>
      )}

    </div>
  );
}
