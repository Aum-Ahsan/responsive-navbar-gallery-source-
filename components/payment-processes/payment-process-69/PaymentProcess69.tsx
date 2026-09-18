"use client";
import React, { useState } from "react";
import { CreditCard, ArrowRight, CheckCircle2, Heart, Shield, Globe } from "lucide-react";

export default function PaymentProcess69() {
  const [amount, setAmount] = useState<number | null>(50);
  const [customAmount, setCustomAmount] = useState<string>('');
  const [isRecurring, setIsRecurring] = useState(true);
  const [coverFees, setCoverFees] = useState(false);
  
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const presetAmounts = [25, 50, 100, 250];

  let baseAmount = 0;
  if (amount !== null) {
    baseAmount = amount;
  } else if (customAmount) {
    baseAmount = parseFloat(customAmount) || 0;
  }

  // Calculate fees (e.g., 2.9% + $0.30)
  const processingFee = (baseAmount * 0.029) + 0.30;
  const finalAmount = coverFees ? baseAmount + processingFee : baseAmount;

  const handlePay = (e: React.FormEvent) => {
    e.preventDefault();
    if (baseAmount < 1) return;
    
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
    }, 2000);
  };

  return (
    <div className="w-full min-h-[700px] bg-stone-100 flex items-center justify-center font-sans p-6 text-stone-800">
      
      {!isSuccess ? (
        <div className="max-w-4xl w-full grid grid-cols-1 lg:grid-cols-2 bg-white rounded-3xl shadow-2xl overflow-hidden relative z-10 animate-in zoom-in-95 duration-500 border border-stone-200">
          
          {/* Left Side: Impact Information */}
          <div className="bg-emerald-800 p-10 text-white flex flex-col justify-between relative overflow-hidden">
            {/* Background Image with overlay */}
            <div className="absolute inset-0 z-0">
              <img 
                src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=800&h=800" 
                alt="Charity" 
                className="w-full h-full object-cover opacity-30 mix-blend-overlay"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-900 via-emerald-800/80 to-emerald-800/40"></div>
            </div>

            <div className="relative z-10">
              <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center mb-8 border border-white/30">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-black mb-4 leading-tight">Help us plant 1 million trees this year.</h2>
              <p className="text-emerald-100 mb-8 leading-relaxed">
                Your donation directly funds reforestation projects in the Amazon. Every $1 plants one tree and supports local communities.
              </p>
            </div>

            <div className="relative z-10 space-y-4">
               <div className="flex items-center gap-3 bg-black/20 p-4 rounded-xl backdrop-blur-sm border border-white/10">
                 <Shield className="w-8 h-8 text-emerald-300 shrink-0" />
                 <div>
                   <h4 className="font-bold text-sm">Secure & Transparent</h4>
                   <p className="text-xs text-emerald-100/70">100% of your donation goes directly to the field.</p>
                 </div>
               </div>
            </div>
          </div>

          {/* Right Side: Donation Form */}
          <div className="p-10 flex flex-col justify-center">
            
            {/* Frequency Toggle */}
            <div className="flex bg-stone-100 p-1 rounded-xl mb-8">
              <button
                type="button"
                onClick={() => setIsRecurring(false)}
                className={`flex-1 py-3 text-sm font-bold rounded-lg transition-all ${!isRecurring ? 'bg-white text-stone-900 shadow-sm' : 'text-stone-500 hover:text-stone-700'}`}
              >
                Give Once
              </button>
              <button
                type="button"
                onClick={() => setIsRecurring(true)}
                className={`flex-1 py-3 text-sm font-bold rounded-lg transition-all flex items-center justify-center gap-2 ${isRecurring ? 'bg-white text-emerald-600 shadow-sm' : 'text-stone-500 hover:text-stone-700'}`}
              >
                <Heart className={`w-4 h-4 ${isRecurring ? 'fill-emerald-600' : ''}`} /> Monthly
              </button>
            </div>

            {/* Amount Selection */}
            <div className="grid grid-cols-2 gap-3 mb-6">
              {presetAmounts.map(val => (
                <button
                  key={val}
                  type="button"
                  onClick={() => { setAmount(val); setCustomAmount(''); }}
                  className={`py-4 rounded-xl font-black text-lg transition-all border-2 ${
                    amount === val 
                      ? 'border-emerald-600 bg-emerald-50 text-emerald-700' 
                      : 'border-stone-200 text-stone-600 hover:border-emerald-200'
                  }`}
                >
                  ${val}
                </button>
              ))}
              
              <div className="col-span-2 relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400 font-bold">$</span>
                <input required 
                  type="number"
                  placeholder="Custom Amount"
                  value={customAmount}
                  onChange={(e) => { setCustomAmount(e.target.value); setAmount(null); }}
                  className={`w-full py-4 pl-8 pr-4 rounded-xl font-bold text-lg focus:outline-none border-2 transition-all ${
                    amount === null 
                      ? 'border-emerald-600 bg-emerald-50 text-emerald-700' 
                      : 'border-stone-200 text-stone-600 focus:border-emerald-400'
                  }`}
                 min={1} />
              </div>
            </div>

            {/* Cover Fees */}
            <label className="flex items-start gap-3 p-4 bg-stone-50 rounded-xl cursor-pointer mb-8 border border-stone-200 hover:bg-stone-100 transition-colors">
              <input required 
                type="checkbox" 
                checked={coverFees}
                onChange={(e) => setCoverFees(e.target.checked)}
                className="mt-1 w-4 h-4 text-emerald-600 rounded border-stone-300 focus:ring-emerald-500"
               minLength={2} maxLength={50} />
              <div className="flex-1">
                <p className="text-sm font-bold text-stone-900">Cover processing fees</p>
                <p className="text-xs text-stone-500 mt-1">Add ${processingFee.toFixed(2)} so 100% of your donation goes to our mission.</p>
              </div>
            </label>

            <form onSubmit={handlePay} className="space-y-4">
              
              <div className="relative">
                <CreditCard className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-stone-400" />
                <input onInput={(e) => { e.currentTarget.value = e.currentTarget.value.replace(/[^0-9\s]/g, "").substring(0, 19); }} pattern="[\\d\\s]{16,19}" maxLength={19} title="16 digit card number" required type="text" placeholder="Card Number" className="w-full bg-white border border-stone-300 rounded-xl pl-12 pr-4 py-4 text-stone-900 focus:outline-none focus:border-emerald-500 transition-colors font-mono tracking-widest text-sm shadow-sm"  minLength={16} />
              </div>
              
              <div className="flex gap-4">
                <input onInput={(e) => { e.currentTarget.value = e.currentTarget.value.replace(/[^0-9\/]/g, "").substring(0, 5); }} pattern="(0[1-9]|1[0-2])\\/?([0-9]{2})" maxLength={5} title="Format: MM/YY" required type="text" placeholder="MM/YY" className="w-1/2 bg-white border border-stone-300 rounded-xl px-4 py-4 text-stone-900 focus:outline-none focus:border-emerald-500 transition-colors font-mono tracking-widest text-center text-sm shadow-sm"  minLength={5} />
                <input onInput={(e) => { e.currentTarget.value = e.currentTarget.value.replace(/[^0-9]/g, "").substring(0, 4); }} pattern="\\d{3,4}" maxLength={4} title="3 or 4 digit CVV/CVC" required type="text" placeholder="CVV" className="w-1/2 bg-white border border-stone-300 rounded-xl px-4 py-4 text-stone-900 focus:outline-none focus:border-emerald-500 transition-colors font-mono tracking-widest text-center text-sm shadow-sm"  minLength={3} />
              </div>

              <button 
                type="submit" 
                disabled={isProcessing || baseAmount < 1}
                className="w-full py-5 mt-4 bg-emerald-600 text-white rounded-xl font-bold text-lg flex items-center justify-center gap-2 hover:bg-emerald-700 transition-all shadow-[0_8px_20px_rgba(5,150,105,0.3)] disabled:opacity-70 disabled:shadow-none"
              >
                {isProcessing ? (
                  <div className="w-6 h-6 border-4 border-white/30 border-t-white rounded-full animate-spin"></div>
                ) : (
                  <>Donate ${finalAmount.toFixed(2)} {isRecurring ? 'Monthly' : ''} <ArrowRight className="w-5 h-5" /></>
                )}
              </button>
            </form>

          </div>

        </div>
      ) : (
        <div className="max-w-md w-full bg-white rounded-3xl p-12 shadow-2xl border border-stone-200 text-center animate-in zoom-in duration-500 relative z-10">
           
           <div className="relative w-24 h-24 mx-auto mb-6">
              <div className="absolute inset-0 bg-emerald-100 rounded-full animate-ping opacity-50"></div>
              <div className="absolute inset-0 bg-emerald-50 rounded-full flex items-center justify-center relative z-10">
                <Heart className="w-10 h-10 text-emerald-500 fill-emerald-500" />
              </div>
           </div>

           <h2 className="text-3xl font-black text-stone-900 mb-2">Thank You!</h2>
           <p className="text-stone-500 mb-8 font-medium">Your {isRecurring ? 'monthly ' : ''}donation of ${finalAmount.toFixed(2)} makes a huge difference.</p>
           
           <div className="bg-stone-50 rounded-xl p-6 text-sm text-stone-600 text-left border border-stone-100 mb-8">
             <p className="font-bold text-stone-900 mb-2">Your Impact</p>
             <p>Because of you, we can plant {Math.floor(baseAmount)} new trees this {isRecurring ? 'month' : 'year'}. A tax receipt has been emailed to you.</p>
           </div>

           <button type="button" 
              onClick={() => { setIsSuccess(false); setAmount(50); setCustomAmount(''); setIsRecurring(true); setCoverFees(false); }}
              className="w-full py-4 bg-stone-900 hover:bg-stone-800 text-white font-bold rounded-xl transition-colors"
            >
              Done
            </button>
        </div>
      )}

    </div>
  );
}
