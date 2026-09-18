"use client";
import React, { useState } from "react";
import { CreditCard, Flame, ArrowRight, CheckCircle2, Star } from "lucide-react";

export default function PaymentProcess57() {
  const TOTAL_AMOUNT = 80.00;
  const BASE_POINTS = Math.floor(TOTAL_AMOUNT * 10); // 10 points per dollar
  
  const [streakCount, setStreakCount] = useState(5);
  const streakMultiplier = 1 + (streakCount * 0.1); // 1.5x for 5 days
  const earnedPoints = Math.floor(BASE_POINTS * streakMultiplier);

  const [isProcessing, setIsProcessing] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);
  const [showAnimation, setShowAnimation] = useState(false);

  const handlePay = (e: React.FormEvent) => {
    e.preventDefault();
    const container = e.currentTarget.closest('.w-full') || document;
    const inputs = Array.from(container.querySelectorAll('input')).filter((i: any) => i.offsetParent !== null);
    let isValid = true;
    for (const input of inputs) {
      if (!input.value.trim() && input.hasAttribute('required')) {
        alert("Please fill all columns");
        input.focus();
        isValid = false;
        break;
      }
      if (!input.checkValidity()) {
        input.reportValidity();
        isValid = false;
        break;
      }
    }
    if (!isValid) return;

    setIsProcessing(true);
    setServerError(null);
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
      setShowAnimation(true);
      
      // Increment streak after a short delay for dramatic effect
      setTimeout(() => {
        setStreakCount(c => c + 1);
      }, 800);
      
    }, 2000);
  };

  return (
    <div className="w-full min-h-[700px] bg-slate-900 flex items-center justify-center font-sans p-6 text-slate-100 overflow-hidden relative">
      
      {!isSuccess ? (
        <div className="max-w-md w-full bg-slate-800 rounded-3xl p-8 shadow-2xl border border-slate-700 relative z-10 animate-in fade-in duration-500">
          
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-black text-white">Checkout</h2>
          </div>

          {/* Daily Streak Widget */}
          <div className="bg-gradient-to-r from-orange-500/20 to-rose-500/20 border border-orange-500/30 rounded-2xl p-6 mb-8 relative overflow-hidden group">
            
            <div className="absolute right-0 top-0 w-32 h-32 bg-orange-500/20 rounded-full blur-2xl pointer-events-none group-hover:bg-orange-500/30 transition-colors"></div>

            <div className="flex justify-between items-center relative z-10 mb-4">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="absolute inset-0 bg-orange-500 rounded-full blur-md opacity-50 animate-pulse"></div>
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-rose-500 rounded-full flex items-center justify-center relative z-10 shadow-lg">
                    <Flame className="w-6 h-6 text-white fill-white" />
                  </div>
                </div>
                <div>
                  <h3 className="font-black text-white text-lg">{streakCount} Day Streak!</h3>
                  <p className="text-xs text-orange-200 font-medium">Keep it up for more points.</p>
                </div>
              </div>
              <div className="text-right">
                <div className="text-2xl font-black text-orange-400">{streakMultiplier.toFixed(1)}x</div>
                <div className="text-[10px] font-bold text-orange-300 uppercase tracking-widest">Multiplier</div>
              </div>
            </div>

            <div className="bg-slate-900/50 rounded-xl p-3 flex justify-between items-center border border-orange-500/20 relative z-10">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Points to earn</span>
              <span className="font-black text-orange-400 flex items-center gap-1">
                <Star className="w-4 h-4 fill-current" /> {earnedPoints}
              </span>
            </div>
          </div>

          <div className="flex justify-between items-end mb-6 px-2">
             <span className="font-bold text-slate-400">Total</span>
             <span className="text-4xl font-black text-white">${TOTAL_AMOUNT.toFixed(2)}</span>
          </div>

          <form onSubmit={handlePay} className="space-y-4">
            
            <div className="relative">
              <CreditCard className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
              <input onInput={(e) => { e.currentTarget.value = e.currentTarget.value.replace(/[^0-9\s]/g, "").substring(0, 19); }} pattern="[\\d\\s]{16,19}" maxLength={19} title="16 digit card number" required type="text" placeholder="Card Number" className="w-full bg-slate-900 border border-slate-700 rounded-xl pl-12 pr-4 py-4 text-white focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors font-mono tracking-widest text-sm"  minLength={16} />
            </div>
            
            <div className="flex gap-4">
              <input onInput={(e) => { e.currentTarget.value = e.currentTarget.value.replace(/[^0-9\/]/g, "").substring(0, 5); }} pattern="(0[1-9]|1[0-2])\\/?([0-9]{2})" maxLength={5} title="Format: MM/YY" required type="text" placeholder="MM/YY" className="w-1/2 bg-slate-900 border border-slate-700 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors font-mono tracking-widest text-center text-sm"  minLength={5} />
              <input onInput={(e) => { e.currentTarget.value = e.currentTarget.value.replace(/[^0-9]/g, "").substring(0, 4); }} pattern="\\d{3,4}" maxLength={4} title="3 or 4 digit CVV/CVC" required type="text" placeholder="CVV" className="w-1/2 bg-slate-900 border border-slate-700 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors font-mono tracking-widest text-center text-sm"  minLength={3} />
            </div>

            {serverError && (
              <div className="text-red-500 text-sm font-semibold mb-4 text-center bg-red-50 p-3 rounded-xl border border-red-200 animate-in fade-in zoom-in duration-300">
                {serverError}
              </div>
            )}
            <button 
              type="submit" 
              disabled={isProcessing}
              className="w-full py-5 mt-4 bg-gradient-to-r from-orange-500 to-rose-500 text-white rounded-xl font-bold text-lg flex items-center justify-center gap-2 hover:from-orange-400 hover:to-rose-400 transition-all shadow-[0_0_20px_rgba(249,115,22,0.3)] disabled:opacity-70 disabled:shadow-none"
            >
              {isProcessing ? (
                <div className="w-6 h-6 border-4 border-white/30 border-t-white rounded-full animate-spin"></div>
              ) : (
                <>Pay & Keep Streak <ArrowRight className="w-5 h-5" /></>
              )}
            </button>
          </form>

        </div>
      ) : (
        <div className="max-w-md w-full bg-slate-800 rounded-3xl p-12 shadow-2xl border border-slate-700 text-center relative z-10">
           
           {/* Success animation for streak */}
           <div className="relative w-32 h-32 mx-auto mb-8">
             {showAnimation && (
               <>
                 <div className="absolute inset-0 bg-orange-500 rounded-full animate-ping opacity-50"></div>
                 <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-rose-500 rounded-full blur-xl animate-pulse"></div>
               </>
             )}
             
             <div className={`absolute inset-0 bg-gradient-to-br from-orange-400 to-rose-500 rounded-full flex flex-col items-center justify-center shadow-2xl z-10 transition-transform duration-500 ${showAnimation ? 'scale-110' : 'scale-100'}`}>
               <Flame className="w-10 h-10 text-white fill-white mb-1" />
               <span className="font-black text-2xl text-white leading-none" key={streakCount}>{streakCount}</span>
               <span className="text-[10px] font-bold text-white/80 uppercase tracking-widest">Days</span>
             </div>
           </div>

           <h2 className="text-3xl font-black text-white mb-2">Streak Extended!</h2>
           <p className="text-slate-400 mb-8 font-medium">You earned <span className="text-orange-400 font-bold">{earnedPoints} points</span> on this order.</p>
           
           <button type="button" 
              onClick={() => { setIsSuccess(false); setShowAnimation(false); setStreakCount(5); }}
              className="w-full py-4 bg-slate-900 hover:bg-slate-950 text-white font-bold rounded-xl transition-colors"
            >
              Done
            </button>
        </div>
      )}

    </div>
  );
}
