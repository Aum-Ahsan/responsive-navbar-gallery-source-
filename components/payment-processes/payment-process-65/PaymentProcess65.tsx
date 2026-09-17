"use client";
import React, { useState } from "react";
import { CreditCard, ArrowRight, CheckCircle2, MapPin, Bike, Heart } from "lucide-react";

export default function PaymentProcess65() {
  const SUB_TOTAL = 35.00;
  const DELIVERY_FEE = 4.99;
  const TAXES = 3.50;
  const BASE_TOTAL = SUB_TOTAL + DELIVERY_FEE + TAXES;
  
  const [tipPercent, setTipPercent] = useState<number | null>(15);
  const [customTip, setCustomTip] = useState<string>('');
  
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  let tipAmount = 0;
  if (tipPercent !== null) {
    tipAmount = SUB_TOTAL * (tipPercent / 100);
  } else if (customTip) {
    tipAmount = parseFloat(customTip) || 0;
  }

  const finalTotal = BASE_TOTAL + tipAmount;

  const handlePay = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
    }, 2000);
  };

  return (
    <div className="w-full min-h-[700px] bg-orange-50 flex items-center justify-center font-sans p-6 text-slate-800">
      
      {!isSuccess ? (
        <div className="max-w-xl w-full bg-white rounded-[2rem] shadow-xl border border-orange-100 overflow-hidden relative z-10 animate-in fade-in duration-500">
          
          {/* Mock Map Header */}
          <div className="w-full h-48 bg-slate-200 relative overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=800&h=300" 
              alt="Map" 
              className="w-full h-full object-cover opacity-80 mix-blend-multiply" 
            />
            
            {/* Delivery Path Mock */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 400 200" preserveAspectRatio="none">
              <path d="M 100,150 Q 200,150 250,80 T 350,100" fill="none" stroke="#f97316" strokeWidth="4" strokeDasharray="8 8" className="animate-[dash_20s_linear_infinite]" />
              <circle cx="100" cy="150" r="6" fill="#f97316" />
              <circle cx="350" cy="100" r="8" fill="#1e293b" />
            </svg>
            
            <div className="absolute bottom-4 right-4 bg-white px-4 py-2 rounded-xl shadow-lg flex items-center gap-2 font-bold text-sm">
              <MapPin className="w-4 h-4 text-orange-500" />
              Est. 25-35 min
            </div>
          </div>

          <div className="p-8">
            <h2 className="text-2xl font-black text-slate-900 mb-6 flex items-center gap-2">
              <Bike className="w-6 h-6 text-orange-500" /> Delivery Details
            </h2>

            {/* Address & Instructions */}
            <div className="space-y-4 mb-8">
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                <p className="font-bold text-slate-900">123 Tech Lane, Apt 4B</p>
                <p className="text-sm text-slate-500">San Francisco, CA 94105</p>
              </div>
              <textarea 
                placeholder="Add delivery instructions (e.g. leave at door)" 
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:border-orange-500 text-sm resize-none h-20"
              />
            </div>

            {/* Summary */}
            <div className="mb-6 space-y-2 text-sm text-slate-600">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>${SUB_TOTAL.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Delivery Fee</span>
                <span>${DELIVERY_FEE.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Taxes</span>
                <span>${TAXES.toFixed(2)}</span>
              </div>
            </div>

            {/* Tip Selector */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-3">
                <label className="font-bold text-slate-900 flex items-center gap-1"><Heart className="w-4 h-4 text-rose-500 fill-rose-500" /> Add a Tip</label>
                <span className="font-bold text-slate-900">${tipAmount.toFixed(2)}</span>
              </div>
              
              <div className="flex gap-2">
                {[10, 15, 20].map(pct => (
                  <button 
                    key={pct}
                    type="button"
                    onClick={(e) => {
      const inputs = Array.from(document.querySelectorAll('input')).filter(i => i.offsetParent !== null);
      let isValid = true;
      for (const input of inputs) {
        if (!input.checkValidity()) {
          input.reportValidity();
          isValid = false;
          break;
        }
      }
      if (!isValid) return;
      const originalHandler = () => { setTipPercent(pct); setCustomTip(''); ;
      if (typeof originalHandler === 'function') (originalHandler as any)(e);
      else if (typeof originalHandler === 'object' && originalHandler !== null) { /* ignore event objects */ }
    }}}
                    className={`flex-1 py-2 rounded-lg font-bold text-sm transition-colors border-2 ${
                      tipPercent === pct 
                        ? 'border-orange-500 bg-orange-50 text-orange-600' 
                        : 'border-slate-200 text-slate-500 hover:border-orange-300'
                    }`}
                  >
                    {pct}%
                  </button>
                ))}
                <div className="flex-1 relative">
                  <input required 
                    type="number" 
                    placeholder="Custom"
                    value={customTip}
                    onChange={(e) => { setCustomTip(e.target.value); setTipPercent(null); }}
                    className={`w-full h-full py-2 px-2 rounded-lg font-bold text-sm text-center focus:outline-none border-2 transition-colors ${
                      tipPercent === null 
                        ? 'border-orange-500 bg-orange-50 text-orange-600'
                        : 'border-slate-200 text-slate-500'
                    }`}
                  />
                </div>
              </div>
            </div>

            {/* Payment Form */}
            <form onSubmit={handlePay} className="space-y-4 pt-6 border-t border-slate-100">
              
              <div className="flex justify-between items-end mb-4">
                <span className="font-bold text-slate-500">Total</span>
                <span className="text-3xl font-black text-slate-900">${finalTotal.toFixed(2)}</span>
              </div>

              <div className="relative">
                <CreditCard className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input onInput={(e) => { e.currentTarget.value = e.currentTarget.value.replace(/[^0-9\s]/g, "").substring(0, 19); }} pattern="[\\d\\s]{16,19}" maxLength={19} title="16 digit card number" required type="text" placeholder="Card Number" className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-12 pr-4 py-4 text-slate-900 focus:outline-none focus:border-orange-500 transition-colors font-mono tracking-widest text-sm" />
              </div>
              
              <div className="flex gap-4">
                <input onInput={(e) => { e.currentTarget.value = e.currentTarget.value.replace(/[^0-9\/]/g, "").substring(0, 5); }} pattern="(0[1-9]|1[0-2])\\/?([0-9]{2})" maxLength={5} title="Format: MM/YY" required type="text" placeholder="MM/YY" className="w-1/2 bg-slate-50 border border-slate-200 rounded-xl px-4 py-4 text-slate-900 focus:outline-none focus:border-orange-500 transition-colors font-mono tracking-widest text-center text-sm" />
                <input onInput={(e) => { e.currentTarget.value = e.currentTarget.value.replace(/[^0-9]/g, "").substring(0, 4); }} pattern="\\d{3,4}" maxLength={4} title="3 or 4 digit CVV/CVC" required type="text" placeholder="CVV" className="w-1/2 bg-slate-50 border border-slate-200 rounded-xl px-4 py-4 text-slate-900 focus:outline-none focus:border-orange-500 transition-colors font-mono tracking-widest text-center text-sm" />
              </div>

              <button 
                type="submit" 
                disabled={isProcessing}
                className="w-full py-5 mt-4 bg-orange-500 text-white rounded-xl font-bold text-lg flex items-center justify-center gap-2 hover:bg-orange-600 transition-all shadow-[0_10px_20px_rgba(249,115,22,0.2)] disabled:opacity-70 disabled:shadow-none"
              >
                {isProcessing ? (
                  <div className="w-6 h-6 border-4 border-white/30 border-t-white rounded-full animate-spin"></div>
                ) : (
                  <>Place Order <ArrowRight className="w-5 h-5" /></>
                )}
              </button>
            </form>
          </div>
        </div>
      ) : (
        <div className="max-w-md w-full bg-white rounded-[2rem] p-12 shadow-2xl border border-orange-100 text-center animate-in zoom-in duration-500 relative z-10">
           
           <div className="relative w-32 h-32 mx-auto mb-6">
              <div className="absolute inset-0 bg-orange-100 rounded-full animate-ping opacity-50"></div>
              <div className="absolute inset-4 bg-orange-500 rounded-full flex items-center justify-center shadow-lg z-10">
                <Bike className="w-12 h-12 text-white" strokeWidth={2} />
              </div>
           </div>

           <h2 className="text-3xl font-black text-slate-900 mb-2">Order Placed!</h2>
           <p className="text-slate-500 mb-8 font-medium">The restaurant is preparing your food. Track your delivery in the app.</p>
           
           <button type="button" 
              onClick={() => { setIsSuccess(false); setTipPercent(15); setCustomTip(''); }}
              className="w-full py-4 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-xl transition-colors"
            >
              Track Order
            </button>
        </div>
      )}

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes dash {
          to {
            stroke-dashoffset: -1000;
          }
        }
      `}} />
    </div>
  );
}
