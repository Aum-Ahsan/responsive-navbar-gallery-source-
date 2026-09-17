"use client";
import React, { useState, useEffect } from "react";
import { CreditCard, Globe, ArrowRight, CheckCircle2 } from "lucide-react";

type Currency = 'USD' | 'EUR' | 'GBP' | 'JPY';

const rates: Record<Currency, number> = {
  USD: 1,
  EUR: 0.92,
  GBP: 0.79,
  JPY: 151.2
};

const symbols: Record<Currency, string> = {
  USD: '$',
  EUR: '€',
  GBP: '£',
  JPY: '¥'
};

export default function PaymentProcess46() {
  const baseAmount = 299.99;
  
  const [currency, setCurrency] = useState<Currency>('USD');
  const [displayAmount, setDisplayAmount] = useState(baseAmount);
  
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Animate number change when currency switches
  useEffect(() => {
    const targetAmount = baseAmount * rates[currency];
    
    let startTimestamp: number;
    const duration = 400; // ms
    const initialAmount = displayAmount;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      
      // easeOutQuart
      const easeProgress = 1 - Math.pow(1 - progress, 4); 
      
      setDisplayAmount(initialAmount + (targetAmount - initialAmount) * easeProgress);

      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currency, baseAmount]); 

  const handlePay = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
    }, 2000);
  };

  return (
    <div className="w-full min-h-[700px] bg-sky-50 flex items-center justify-center font-sans p-6 text-slate-800">
      
      {!isSuccess ? (
        <div className="max-w-md w-full bg-white rounded-3xl p-8 shadow-xl border border-sky-100 animate-in fade-in duration-500">
          
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-black text-slate-900">Checkout</h2>
            <Globe className="w-6 h-6 text-sky-500" />
          </div>

          {/* Currency Selector & Total display */}
          <div className="bg-sky-50 rounded-2xl p-6 mb-8 border border-sky-100 relative overflow-hidden">
            <div className="absolute -right-4 -top-4 w-24 h-24 bg-sky-200/50 rounded-full blur-xl pointer-events-none"></div>
            
            <div className="flex justify-between items-start relative z-10 mb-4">
              <span className="text-sm font-bold text-slate-500 uppercase tracking-widest mt-1">Total Due</span>
              
              {/* Custom Select */}
              <div className="relative">
                <select 
                  value={currency} 
                  onChange={(e) => setCurrency(e.target.value as Currency)}
                  className="appearance-none bg-white border border-sky-200 text-sky-700 text-sm font-bold rounded-lg pl-3 pr-8 py-1.5 focus:outline-none focus:border-sky-500 cursor-pointer shadow-sm"
                >
                  <option value="USD">USD ($)</option>
                  <option value="EUR">EUR (€)</option>
                  <option value="GBP">GBP (£)</option>
                  <option value="JPY">JPY (¥)</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-sky-700">
                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                </div>
              </div>
            </div>

            <div className="text-4xl font-black text-slate-900 relative z-10 flex items-baseline">
              <span className="text-2xl mr-1 text-sky-600">{symbols[currency]}</span>
              {/* JPY usually has no decimals */}
              {currency === 'JPY' ? Math.round(displayAmount).toLocaleString() : displayAmount.toFixed(2)}
            </div>
            
            {currency !== 'USD' && (
              <div className="text-xs text-sky-600 font-medium mt-2 relative z-10">
                1 USD = {rates[currency]} {currency}
              </div>
            )}
          </div>

          <form onSubmit={handlePay} className="space-y-4">
            
            <div className="relative">
              <CreditCard className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input onInput={(e) => { e.currentTarget.value = e.currentTarget.value.replace(/[^0-9\s]/g, "").substring(0, 19); }} pattern="[\\d\\s]{16,19}" maxLength={19} title="16 digit card number" required type="text" placeholder="Card Number" className="w-full bg-white border border-slate-200 rounded-xl pl-12 pr-4 py-4 text-slate-900 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-colors font-mono tracking-widest text-sm" />
            </div>
            
            <div className="flex gap-4">
              <input onInput={(e) => { e.currentTarget.value = e.currentTarget.value.replace(/[^0-9\/]/g, "").substring(0, 5); }} pattern="(0[1-9]|1[0-2])\\/?([0-9]{2})" maxLength={5} title="Format: MM/YY" required type="text" placeholder="MM/YY" className="w-1/2 bg-white border border-slate-200 rounded-xl px-4 py-4 text-slate-900 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-colors font-mono tracking-widest text-center text-sm" />
              <input onInput={(e) => { e.currentTarget.value = e.currentTarget.value.replace(/[^0-9]/g, "").substring(0, 4); }} pattern="\\d{3,4}" maxLength={4} title="3 or 4 digit CVV/CVC" required type="text" placeholder="CVV" className="w-1/2 bg-white border border-slate-200 rounded-xl px-4 py-4 text-slate-900 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-colors font-mono tracking-widest text-center text-sm" />
            </div>

            <button 
              type="submit" 
              disabled={isProcessing}
              className="w-full py-5 mt-4 bg-sky-600 text-white rounded-xl font-bold text-lg flex items-center justify-center gap-2 hover:bg-sky-700 transition-all shadow-lg shadow-sky-600/30 disabled:opacity-50 disabled:shadow-none"
            >
              {isProcessing ? (
                <div className="w-6 h-6 border-4 border-white/30 border-t-white rounded-full animate-spin"></div>
              ) : (
                <>
                  Pay {symbols[currency]}{currency === 'JPY' ? Math.round(baseAmount * rates[currency]).toLocaleString() : (baseAmount * rates[currency]).toFixed(2)} 
                  <ArrowRight className="w-5 h-5" />
                </>
              )}
            </button>
          </form>

        </div>
      ) : (
        <div className="max-w-md w-full bg-white rounded-3xl p-10 shadow-xl border border-sky-100 text-center animate-in zoom-in duration-500">
           <div className="w-24 h-24 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-6">
             <CheckCircle2 className="w-12 h-12 text-sky-500" strokeWidth={3} />
           </div>
           <h2 className="text-3xl font-black text-slate-900 mb-2">Confirmed</h2>
           <p className="text-slate-500 mb-8 font-medium">
             You paid {symbols[currency]}{currency === 'JPY' ? Math.round(baseAmount * rates[currency]).toLocaleString() : (baseAmount * rates[currency]).toFixed(2)} ({currency}).
           </p>
           
           <button type="button" 
              onClick={() => { setIsSuccess(false); setCurrency('USD'); }}
              className="w-full py-4 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-xl transition-colors"
            >
              Done
            </button>
        </div>
      )}

    </div>
  );
}
