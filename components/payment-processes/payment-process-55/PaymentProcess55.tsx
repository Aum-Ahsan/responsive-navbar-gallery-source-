"use client";
import React, { useState } from "react";
import { CreditCard, ArrowRight, Shield, Award, Sparkles } from "lucide-react";

export default function PaymentProcess55() {
  const TOTAL_AMOUNT = 150.00;
  
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  // State for the animation sequence on success
  const [levelUpState, setLevelUpState] = useState<'charging' | 'unlocked' | null>(null);

  const handlePay = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    
    // Simulate processing
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
      setLevelUpState('charging');
      
      // Simulate level up animation timing
      setTimeout(() => {
        setLevelUpState('unlocked');
      }, 1500); // Progress bar fills for 1.5s then boom
      
    }, 1500);
  };

  return (
    <div className="w-full min-h-[700px] bg-slate-950 flex items-center justify-center font-sans p-6 text-slate-100 overflow-hidden relative">
      
      {/* Background glow effects based on state */}
      <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-[120px] pointer-events-none transition-colors duration-1000 ${
        isSuccess && levelUpState === 'unlocked' ? 'bg-slate-400/20' : 'bg-amber-700/10'
      }`}></div>

      {!isSuccess ? (
        <div className="max-w-md w-full bg-slate-900 rounded-[2.5rem] p-8 shadow-2xl border border-slate-800 animate-in fade-in duration-500 relative z-10">
          
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-black text-white">Checkout</h2>
          </div>

          {/* Gamified Tier Progress */}
          <div className="bg-gradient-to-br from-amber-950/40 to-slate-900 border border-amber-900/50 rounded-2xl p-6 mb-8 relative overflow-hidden group">
            
            <div className="flex justify-between items-end mb-4 relative z-10">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-amber-700/20 flex items-center justify-center border border-amber-600/30">
                  <Shield className="w-5 h-5 text-amber-500" />
                </div>
                <div>
                  <h3 className="font-bold text-amber-500 text-sm">Bronze Member</h3>
                  <p className="text-xs text-slate-400 font-medium mt-0.5">Current Tier</p>
                </div>
              </div>
              <div className="text-right">
                <h3 className="font-bold text-slate-300 text-sm flex items-center gap-1"><Award className="w-4 h-4 text-slate-400" /> Silver</h3>
                <p className="text-xs text-slate-400 font-medium mt-0.5">Next Tier</p>
              </div>
            </div>

            <div className="relative z-10">
              <div className="flex justify-between text-[10px] font-bold mb-2 uppercase tracking-widest text-slate-500">
                <span>0 pts</span>
                <span className="text-amber-500">Earn +150 pts this order!</span>
                <span>500 pts</span>
              </div>
              
              <div className="w-full h-3 bg-slate-800 rounded-full overflow-hidden flex shadow-inner">
                {/* Current Progress */}
                <div className="h-full bg-amber-600 w-[70%]"></div>
                {/* Projected Progress (Blinking) */}
                <div className="h-full bg-amber-500/40 w-[30%] animate-pulse"></div>
              </div>
              
              <p className="text-xs text-center text-slate-400 mt-4 font-medium">
                This purchase will unlock <span className="text-slate-200 font-bold">Silver Status</span>!
              </p>
            </div>
          </div>

          <div className="flex justify-between items-end mb-6 px-2">
            <span className="font-bold text-slate-400">Total</span>
            <span className="text-4xl font-black text-white">${TOTAL_AMOUNT.toFixed(2)}</span>
          </div>

          <form onSubmit={handlePay} className="space-y-4">
            
            <div className="relative">
              <CreditCard className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
              <input onInput={(e) => { e.currentTarget.value = e.currentTarget.value.replace(/[^0-9\s]/g, "").substring(0, 19); }} pattern="[\\d\\s]{16,19}" maxLength={19} title="16 digit card number" required type="text" placeholder="Card Number" className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-12 pr-4 py-4 text-white focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors font-mono tracking-widest text-sm" />
            </div>
            
            <div className="flex gap-4">
              <input onInput={(e) => { e.currentTarget.value = e.currentTarget.value.replace(/[^0-9\/]/g, "").substring(0, 5); }} pattern="(0[1-9]|1[0-2])\\/?([0-9]{2})" maxLength={5} title="Format: MM/YY" required type="text" placeholder="MM/YY" className="w-1/2 bg-slate-950 border border-slate-800 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors font-mono tracking-widest text-center text-sm" />
              <input onInput={(e) => { e.currentTarget.value = e.currentTarget.value.replace(/[^0-9]/g, "").substring(0, 4); }} pattern="\\d{3,4}" maxLength={4} title="3 or 4 digit CVV/CVC" required type="text" placeholder="CVV" className="w-1/2 bg-slate-950 border border-slate-800 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors font-mono tracking-widest text-center text-sm" />
            </div>

            <button 
              type="submit" 
              disabled={isProcessing}
              className="w-full py-5 mt-4 bg-amber-600 text-white rounded-xl font-bold text-lg flex items-center justify-center gap-2 hover:bg-amber-500 transition-all shadow-[0_0_20px_rgba(217,119,6,0.2)] disabled:opacity-70 disabled:shadow-none"
            >
              {isProcessing ? (
                <div className="w-6 h-6 border-4 border-white/30 border-t-white rounded-full animate-spin"></div>
              ) : (
                <>Pay & Level Up <ArrowRight className="w-5 h-5" /></>
              )}
            </button>
          </form>

        </div>
      ) : (
        <div className="max-w-md w-full bg-slate-900 rounded-[2.5rem] p-12 shadow-2xl border border-slate-800 text-center relative z-10 overflow-hidden">
           
           {/* Level up charging state */}
           {levelUpState === 'charging' && (
             <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-900 z-20 animate-in fade-in duration-300">
               <Shield className="w-16 h-16 text-amber-600 mb-6 animate-pulse" />
               <div className="w-48 h-2 bg-slate-800 rounded-full overflow-hidden relative">
                 <div className="absolute top-0 left-0 bottom-0 bg-gradient-to-r from-amber-600 to-slate-300 w-full animate-[fillBar_1.5s_ease-out_forwards]" style={{ transformOrigin: 'left' }}></div>
               </div>
               <p className="mt-4 text-sm font-bold text-slate-400 tracking-widest uppercase animate-pulse">Calculating Points...</p>
             </div>
           )}

           {/* Unlocked State */}
           <div className={`transition-all duration-700 ease-out ${levelUpState === 'unlocked' ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
             
             {/* Sparkles behind the shield */}
             {levelUpState === 'unlocked' && (
               <div className="absolute top-12 left-1/2 -translate-x-1/2 w-48 h-48 bg-slate-400/20 rounded-full blur-2xl pointer-events-none animate-pulse"></div>
             )}

             <div className="relative w-32 h-32 mx-auto mb-6">
               <div className="absolute inset-0 bg-gradient-to-br from-slate-200 to-slate-500 rounded-full animate-spin-slow" style={{ animationDuration: '8s' }}></div>
               <div className="absolute inset-2 bg-slate-900 rounded-full flex items-center justify-center border-4 border-slate-700">
                 <Award className="w-14 h-14 text-slate-300" strokeWidth={1.5} />
               </div>
               
               {/* Animated floating sparkles */}
               <Sparkles className="w-6 h-6 text-slate-300 absolute -top-2 -right-2 animate-bounce" />
               <Sparkles className="w-4 h-4 text-slate-400 absolute -bottom-2 -left-2 animate-ping" />
             </div>

             <h2 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-slate-200 to-slate-400 mb-2 drop-shadow-sm">LEVEL UP!</h2>
             <p className="text-slate-300 mb-2 font-bold text-lg">You are now a Silver Member.</p>
             <p className="text-slate-500 mb-8 font-medium text-sm">Enjoy 5% cashback and priority shipping on all future orders.</p>
             
             <button type="button" 
                onClick={() => { setIsSuccess(false); setLevelUpState(null); }}
                className="w-full py-4 bg-gradient-to-r from-slate-700 to-slate-600 hover:from-slate-600 hover:to-slate-500 text-white font-bold rounded-xl transition-all shadow-[0_0_20px_rgba(148,163,184,0.2)]"
              >
                Claim Rewards
              </button>
           </div>
        </div>
      )}
      
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes fillBar {
          0% { transform: scaleX(0); }
          100% { transform: scaleX(1); }
        }
      `}} />
    </div>
  );
}
