"use client";
import React, { useState } from "react";
import { CreditCard, CheckCircle2, ArrowRight } from "lucide-react";

type CardType = 'visa' | 'mastercard' | 'amex' | 'discover' | 'unknown';

export default function PaymentProcess33() {
  const [cardNumber, setCardNumber] = useState("");
  const [cardType, setCardType] = useState<CardType>('unknown');
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const getCardType = (number: string): CardType => {
    const cleanNum = number.replace(/\D/g, '');
    if (cleanNum.match(/^4/)) return 'visa';
    if (cleanNum.match(/^5[1-5]/)) return 'mastercard';
    if (cleanNum.match(/^3[47]/)) return 'amex';
    if (cleanNum.match(/^6(?:011|5)/)) return 'discover';
    return 'unknown';
  };

  const formatCardNumber = (value: string, type: CardType) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    let matches;
    
    if (type === 'amex') {
      // Amex format: 4 6 5
      matches = v.match(/^(\d{0,4})(\d{0,6})(\d{0,5})$/);
      if (matches) {
        return !matches[2] ? matches[1] : `${matches[1]} ${matches[2]}${matches[3] ? ` ${matches[3]}` : ''}`;
      }
    } else {
      // Default format: 4 4 4 4
      matches = v.match(/\d{4,16}/g);
      const match = matches && matches[0] || '';
      const parts = [];
      for (let i = 0, len = match.length; i < len; i += 4) {
        parts.push(match.substring(i, i + 4));
      }
      if (parts.length) {
        return parts.join(' ');
      }
    }
    return value;
  };

  const handleCardChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawVal = e.target.value;
    const type = getCardType(rawVal);
    setCardType(type);
    setCardNumber(formatCardNumber(rawVal, type));
  };

  const handlePay = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
    }, 2000);
  };

  return (
    <div className="w-full min-h-[700px] bg-indigo-950 flex items-center justify-center font-sans p-6 text-indigo-100">
      
      {!isSuccess ? (
        <div className="max-w-md w-full bg-white rounded-3xl p-8 shadow-2xl text-slate-800 animate-in fade-in duration-500">
          
          <h2 className="text-2xl font-black text-slate-900 mb-8">Payment Details</h2>

          <form onSubmit={handlePay} className="space-y-6">
            
            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 ml-1">Card Number</label>
              
              <div className="relative flex items-center bg-slate-50 border border-slate-200 rounded-xl overflow-hidden focus-within:border-indigo-500 focus-within:ring-1 focus-within:ring-indigo-500 transition-all">
                
                {/* Logo Morphing Container */}
                <div className="absolute left-4 w-10 h-6 flex items-center justify-center">
                  
                  {/* Default Unknown */}
                  <div className={`absolute transition-all duration-300 ${cardType === 'unknown' ? 'opacity-100 scale-100' : 'opacity-0 scale-50 rotate-90'}`}>
                    <CreditCard className="w-5 h-5 text-slate-400" />
                  </div>

                  {/* Visa */}
                  <div className={`absolute transition-all duration-300 ${cardType === 'visa' ? 'opacity-100 scale-100' : 'opacity-0 scale-50 -rotate-90'}`}>
                    <svg viewBox="0 0 38 12" className="h-4 w-auto fill-blue-600">
                      <path d="M14.6,0.3L13.1,9.8H10l1.5-9.5H14.6z M27.8,0.5c-0.6-0.2-1.7-0.4-3.1-0.4c-3.3,0-5.7,1.8-5.7,4.3c0,1.9,1.7,2.9,3,3.6 c1.3,0.7,1.8,1.1,1.8,1.7c0,0.9-1.1,1.3-2.1,1.3c-1.4,0-2.2-0.2-3.4-0.8l-0.5-0.2l-0.5,2.9c0.8,0.4,2.3,0.7,3.9,0.7 c3.6,0,5.9-1.8,5.9-4.5c0-1.5-0.9-2.6-2.9-3.5c-1.2-0.6-1.9-1-1.9-1.6c0-0.5,0.6-1.1,2-1.1c1.2,0,2,0.2,2.7,0.5l0.3,0.1L27.8,0.5z M35.3,10.2L37.8,0.3h-2.5c-0.6,0-1,0.3-1.3,0.9l-4.7,8.9h3.2l0.6-1.7h3.9L35.3,10.2z M32,5.2l1.6-4.5l0.9,4.5H32z M10.4,0.3 L7.5,6.8L7.1,5.1C6.7,3.8,5.2,2.1,3.4,1.3l2.8,8.5H9.4L13.8,0.3H10.4z"/>
                      <path d="M5.4,0.3H0.1L0,0.8C1,1.1,2.8,1.6,3.6,2.2c0.6,0.5,0.7,0.8,0.9,1.5l1.6,5.6l-2.2-8.9h2.3l1.8,4.7l0.2,0.6l-0.8-4.3C5.9,0.7,5.7,0.4,5.4,0.3z" className="fill-orange-400"/>
                    </svg>
                  </div>

                  {/* Mastercard */}
                  <div className={`absolute transition-all duration-300 flex items-center ${cardType === 'mastercard' ? 'opacity-100 scale-100' : 'opacity-0 scale-50 -rotate-90'}`}>
                    <div className="w-5 h-5 rounded-full bg-red-500 mix-blend-multiply opacity-90 absolute left-0"></div>
                    <div className="w-5 h-5 rounded-full bg-yellow-400 mix-blend-multiply opacity-90 absolute left-3"></div>
                  </div>

                  {/* Amex */}
                  <div className={`absolute transition-all duration-300 ${cardType === 'amex' ? 'opacity-100 scale-100' : 'opacity-0 scale-50 -rotate-90'}`}>
                    <div className="bg-blue-500 text-white font-black text-[8px] italic px-1 py-0.5 rounded-sm tracking-tighter">
                      AMEX
                    </div>
                  </div>

                  {/* Discover */}
                  <div className={`absolute transition-all duration-300 ${cardType === 'discover' ? 'opacity-100 scale-100' : 'opacity-0 scale-50 -rotate-90'}`}>
                     <div className="flex items-center gap-0.5 font-black text-[10px] italic tracking-tighter text-slate-800">
                       DISC<span className="w-2 h-2 rounded-full bg-orange-500 block"></span>VER
                     </div>
                  </div>

                </div>

                <input onInput={(e) => { e.currentTarget.value = e.currentTarget.value.replace(/[^0-9\s]/g, "").substring(0, 19); }} pattern="[\\d\\s]{16,19}" maxLength={19} title="16 digit card number" 
                  required 
                  type="text" 
                  value={cardNumber}
                  onChange={handleCardChange}
                 
                  placeholder="0000 0000 0000 0000" 
                  className="w-full bg-transparent pl-16 pr-4 py-4 text-slate-900 focus:outline-none font-mono tracking-widest text-sm" 
                 minLength={16} />
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-1/2">
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 ml-1">Expiry</label>
                <input onInput={(e) => { e.currentTarget.value = e.currentTarget.value.replace(/[^0-9\/]/g, "").substring(0, 5); }} pattern="(0[1-9]|1[0-2])\\/?([0-9]{2})" maxLength={5} title="Format: MM/YY" required type="text" placeholder="MM/YY" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-4 text-slate-900 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all font-mono tracking-widest text-center text-sm"  minLength={5} />
              </div>
              <div className="w-1/2">
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 ml-1">CVV</label>
                <input pattern="[a-zA-Z\\s\\-]+" title="Letters only" required type="text" maxLength={cardType === 'amex' ? 4 : 3} placeholder={cardType === 'amex' ? "1234" : "123"} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-4 text-slate-900 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all font-mono tracking-widest text-center text-sm"  minLength={2} maxLength={50} />
              </div>
            </div>

            <button 
              type="submit" 
              disabled={isProcessing}
              className="w-full py-5 bg-indigo-600 text-white rounded-xl font-bold text-lg flex items-center justify-center gap-2 hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-600/30 disabled:opacity-70 disabled:shadow-none"
            >
              {isProcessing ? (
                <div className="w-6 h-6 border-4 border-white/30 border-t-white rounded-full animate-spin"></div>
              ) : (
                <>Pay Now <ArrowRight className="w-5 h-5" /></>
              )}
            </button>
          </form>

        </div>
      ) : (
        <div className="max-w-md w-full bg-indigo-900/50 backdrop-blur border border-indigo-700/50 rounded-3xl p-10 shadow-2xl text-center animate-in zoom-in duration-500">
           <div className="w-24 h-24 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
             <CheckCircle2 className="w-12 h-12 text-emerald-400" />
           </div>
           <h2 className="text-3xl font-black text-white mb-2">Success</h2>
           <p className="text-indigo-200 mb-8">Your {cardType !== 'unknown' ? cardType.charAt(0).toUpperCase() + cardType.slice(1) : 'card'} payment was processed.</p>
           <button type="button" 
              onClick={() => { setIsSuccess(false); setCardNumber(""); setCardType('unknown'); }}
              className="px-8 py-3 bg-indigo-800 hover:bg-indigo-700 text-white font-bold rounded-xl transition-colors"
            >
              Start New Order
            </button>
        </div>
      )}

    </div>
  );
}
