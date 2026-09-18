"use client";
import React, { useState } from "react";
import { CreditCard, ArrowRight, CheckCircle2, Rocket, HeartHandshake, Zap, Crown } from "lucide-react";

type Tier = 'none' | 'backer' | 'super' | 'vip';

export default function PaymentProcess66() {
  const CURRENT_FUNDING = 42500;
  const FUNDING_GOAL = 50000;
  
  const [selectedTier, setSelectedTier] = useState<Tier>('backer');
  const [customPledge, setCustomPledge] = useState<string>('');
  
  const [isProcessing, setIsProcessing] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);

  const tiers = {
    none: { name: 'Pledge without a reward', min: 1, icon: HeartHandshake, color: 'text-slate-500', bg: 'bg-slate-100', border: 'border-slate-200' },
    backer: { name: 'Early Backer', min:1 , desc: 'Get the product at 50% off MSRP.', icon: Rocket, color: 'text-emerald-500', bg: 'bg-emerald-50', border: 'border-emerald-200' },
    super: { name: 'Super Backer', min: 1, desc: 'Product + Exclusive T-Shirt & Stickers.', icon: Zap, color: 'text-violet-500', bg: 'bg-violet-50', border: 'border-violet-200' },
    vip: { name: 'VIP Founder', min:1 , desc: 'All rewards + Name in credits + Beta Access.', icon: Crown, color: 'text-amber-500', bg: 'bg-amber-50', border: 'border-amber-200' },
  };

  let pledgeAmount = 0;
  if (selectedTier !== 'none') {
    pledgeAmount = tiers[selectedTier].min;
  } else {
    pledgeAmount = parseFloat(customPledge) || 0;
  }

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

    if (pledgeAmount < 1) {
      alert("Please pledge at least $1");
      return;
    }
    setIsProcessing(true);
    setServerError(null);
    setTimeout(() => {
      // Simulate server-side validation rejection
      if (Math.random() < 0.3) {
        setServerError("Payment declined by the server. Please check your details and try again.");
        setIsProcessing(false);
        return;
      }
      setIsProcessing(false);
      setIsSuccess(true);
    }, 2000);
  };

  // For success screen animation
  const newFunding = CURRENT_FUNDING + pledgeAmount;
  const progressPercent = Math.min(100, (CURRENT_FUNDING / FUNDING_GOAL) * 100);
  const newProgressPercent = Math.min(100, (newFunding / FUNDING_GOAL) * 100);

  return (
    <div className="w-full min-h-[700px] bg-stone-900 flex items-center justify-center font-sans p-6 text-stone-100 overflow-hidden relative">
      
      {!isSuccess ? (
        <div className="max-w-5xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 relative z-10">
          
          {/* Left Side: Campaign & Tiers */}
          <div className="flex flex-col gap-6">
            
            {/* Campaign Info */}
            <div className="bg-stone-800 rounded-3xl p-6 border border-stone-700">
              <h2 className="text-3xl font-black text-white mb-2">The Ultimate Smart Mug</h2>
              <p className="text-stone-400 mb-6 font-medium">Keep your coffee perfectly heated all day.</p>
              
              <div className="space-y-2">
                <div className="flex justify-between items-end">
                  <span className="text-2xl font-black text-emerald-400">${CURRENT_FUNDING.toLocaleString()}</span>
                  <span className="text-sm text-stone-500 font-bold uppercase tracking-widest">pledged of ${FUNDING_GOAL.toLocaleString()}</span>
                </div>
                <div className="h-3 w-full bg-stone-900 rounded-full overflow-hidden border border-stone-700">
                  <div className="h-full bg-emerald-500 rounded-full" style={{ width: `${progressPercent}%` }}></div>
                </div>
                <div className="flex justify-between text-xs font-bold text-stone-400">
                  <span>1,240 Backers</span>
                  <span>14 Days left</span>
                </div>
              </div>
            </div>

            {/* Select Reward */}
            <div className="bg-stone-800 rounded-3xl p-6 border border-stone-700 flex-1">
              <h3 className="text-lg font-black text-white mb-4">Select a Reward</h3>
              <div className="space-y-4">
                {(Object.keys(tiers) as Tier[]).map(tierKey => {
                  const t = tiers[tierKey];
                  const Icon = t.icon;
                  const isSelected = selectedTier === tierKey;
                  
                  return (
                    <label 
                      key={tierKey}
                      className={`block w-full p-4 rounded-xl border-2 cursor-pointer transition-all ${
                        isSelected ? `border-white bg-stone-700 shadow-lg scale-[1.02]` : `border-stone-700 bg-stone-900 hover:border-stone-500`
                      }`}
                    >
                      <input pattern="[a-zA-Z\\s\\-]+" title="Letters only" required 
                        type="radio" 
                        name="tier" 
                        value={tierKey}
                        checked={isSelected}
                        onChange={(e) => setSelectedTier(tierKey)}
                        className="sr-only"
                       minLength={2} maxLength={50} />
                      <div className="flex items-start gap-4">
                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${isSelected ? t.bg + ' ' + t.color : 'bg-stone-800 text-stone-500'}`}>
                          <Icon className="w-5 h-5" />
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between items-start mb-1">
                            <h4 className={`font-bold ${isSelected ? 'text-white' : 'text-stone-300'}`}>{t.name}</h4>
                            <span className={`font-black ${isSelected ? 'text-white' : 'text-stone-500'}`}>
                              {tierKey === 'none' ? 'Custom' : `$${t.min}+`}
                            </span>
                          </div>
                          {t.name && <p className="text-xs text-stone-400">{t.name}</p>}
                          
                          {/* Custom Input for 'none' */}
                          {tierKey === 'none' && isSelected && (
                            <div className="mt-3 flex items-center gap-2">
                              <span className="text-stone-400 font-bold">$</span>
                              <input required 
                                type="number" 
                                min="1"
                                placeholder="Amount" 
                                value={customPledge}
                                onChange={(e) => setCustomPledge(e.target.value)}
                                className="bg-stone-900 border border-stone-600 rounded-md px-3 py-1 text-white focus:outline-none focus:border-white w-24 text-sm font-bold"
                                onClick={(e) => e.stopPropagation()}
                               />
                            </div>
                          )}
                        </div>
                      </div>
                    </label>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Right Side: Checkout Form */}
          <div className="bg-stone-800 rounded-3xl p-8 shadow-2xl border border-stone-700 flex flex-col h-full">
            <h2 className="text-2xl font-black text-white mb-6">Payment</h2>

            <div className="bg-stone-900 rounded-2xl p-6 mb-8 border border-stone-700">
               <h3 className="text-xs font-bold text-stone-400 mb-4 uppercase tracking-widest">Pledge Summary</h3>
               
               <div className="flex justify-between items-center mb-4">
                 <span className="font-bold text-stone-300">{tiers[selectedTier].name}</span>
               </div>
               
               <div className="flex justify-between items-end pt-4 border-t border-stone-800">
                 <span className="font-bold text-stone-500">Your Pledge</span>
                 <span className="text-4xl font-black text-white">${pledgeAmount.toFixed(2)}</span>
               </div>
            </div>

            <form onSubmit={handlePay} className="space-y-4 mt-auto">
              
              <div className="relative">
                <CreditCard className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-stone-500" />
                <input onInput={(e) => { e.currentTarget.value = e.currentTarget.value.replace(/[^0-9\s]/g, "").substring(0, 19); }} pattern="[\\d\\s]{16,19}" maxLength={19} title="16 digit card number" required type="text" placeholder="Card Number" className="w-full bg-stone-900 border border-stone-700 rounded-xl pl-12 pr-4 py-4 text-white focus:outline-none focus:border-emerald-500 transition-colors font-mono tracking-widest text-sm"  minLength={16} />
              </div>
              
              <div className="flex gap-4">
                <input onInput={(e) => { e.currentTarget.value = e.currentTarget.value.replace(/[^0-9\/]/g, "").substring(0, 5); }} pattern="(0[1-9]|1[0-2])\\/?([0-9]{2})" maxLength={5} title="Format: MM/YY" required type="text" placeholder="MM/YY" className="w-1/2 bg-stone-900 border border-stone-700 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-emerald-500 transition-colors font-mono tracking-widest text-center text-sm"  minLength={5} />
                <input onInput={(e) => { e.currentTarget.value = e.currentTarget.value.replace(/[^0-9]/g, "").substring(0, 4); }} pattern="\\d{3,4}" maxLength={4} title="3 or 4 digit CVV/CVC" required type="text" placeholder="CVV" className="w-1/2 bg-stone-900 border border-stone-700 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-emerald-500 transition-colors font-mono tracking-widest text-center text-sm"  minLength={3} />
              </div>

              {serverError && (
              <div className="text-red-500 text-sm font-semibold mb-4 text-center bg-red-50 p-3 rounded-xl border border-red-200 animate-in fade-in zoom-in duration-300">
                {serverError}
              </div>
            )}
            <button 
                type="submit" 
                disabled={isProcessing || pledgeAmount < 1}
                className="w-full py-5 mt-4 bg-emerald-600 text-white rounded-xl font-black text-lg flex items-center justify-center gap-2 hover:bg-emerald-500 transition-all shadow-[0_10px_20px_rgba(16,185,129,0.2)] disabled:opacity-70 disabled:shadow-none uppercase tracking-wider"
              >
                {isProcessing ? (
                  <div className="w-6 h-6 border-4 border-white/30 border-t-white rounded-full animate-spin"></div>
                ) : (
                  <>Back this project <ArrowRight className="w-5 h-5" /></>
                )}
              </button>
              <p className="text-center text-[10px] text-stone-500 mt-4 uppercase tracking-widest font-bold">You will only be charged if the project reaches its funding goal.</p>
            </form>
          </div>

        </div>
      ) : (
        <div className="max-w-md w-full bg-stone-800 rounded-3xl p-12 shadow-2xl border border-stone-700 text-center relative z-10 animate-in zoom-in duration-500">
           
           <div className="w-24 h-24 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
             <HeartHandshake className="w-12 h-12 text-emerald-400" strokeWidth={2} />
           </div>

           <h2 className="text-3xl font-black text-white mb-2">Thank you, Backer!</h2>
           <p className="text-stone-400 mb-8 font-medium">Your pledge of ${pledgeAmount.toFixed(2)} helps bring this project to life.</p>
           
           {/* Animated progress bar updating on success */}
           <div className="bg-stone-900 p-6 rounded-2xl border border-stone-700 mb-8">
             <p className="text-sm font-bold text-emerald-400 mb-2 uppercase tracking-widest text-left">Funding Progress</p>
             <div className="flex justify-between items-end mb-2">
                <span className="text-xl font-black text-white">${newFunding.toLocaleString()}</span>
                <span className="text-xs text-stone-500 font-bold uppercase tracking-widest">Goal: ${FUNDING_GOAL.toLocaleString()}</span>
             </div>
             <div className="h-4 w-full bg-stone-800 rounded-full overflow-hidden border border-stone-700">
                <div 
                  className="h-full bg-emerald-500 rounded-full transition-all duration-[2000ms] ease-out" 
                  style={{ width: isSuccess ? `${newProgressPercent}%` : `${progressPercent}%` }}
                ></div>
             </div>
           </div>

           <button type="button" 
              onClick={() => { setIsSuccess(false); setSelectedTier('backer'); setCustomPledge(''); }}
              className="w-full py-4 bg-stone-900 hover:bg-stone-950 text-white font-bold rounded-xl transition-colors"
            >
              Back to Campaign
            </button>
        </div>
      )}

    </div>
  );
}
