"use client";
import React, { useState } from "react";
import { ArrowRight, CheckCircle2, Heart } from "lucide-react";

export default function PaymentProcess79() {
  const TOTAL_AMOUNT = 65.00;
  
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handlePay = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
    }, 2000);
  };

  // The CSS property that makes things look hand-drawn
  const sketchyBorder = "255px 15px 225px 15px/15px 225px 15px 255px";
  const sketchyBorderAlt = "15px 225px 15px 255px/255px 15px 225px 15px";

  return (
    <div className="w-full min-h-[700px] bg-[#fdf5e6] flex items-center justify-center font-sans p-6 text-slate-800" style={{ fontFamily: '"Comic Sans MS", "Chalkboard SE", "Marker Felt", sans-serif' }}>
      
      {!isSuccess ? (
        <div 
          className="max-w-md w-full bg-white p-8 relative z-10 animate-in fade-in duration-500"
          style={{
            border: '3px solid #2d3748',
            borderRadius: sketchyBorder,
            boxShadow: '8px 8px 0px 0px rgba(45, 55, 72, 0.4)'
          }}
        >
          
          <div className="mb-8 border-b-2 border-slate-700 pb-2" style={{ borderRadius: sketchyBorderAlt }}>
            <h2 className="text-3xl font-bold tracking-tight text-slate-800 -rotate-2 inline-block">My Cart :)</h2>
          </div>

          <div 
            className="bg-yellow-100 p-4 mb-8"
            style={{
              border: '2px solid #2d3748',
              borderRadius: sketchyBorderAlt,
            }}
          >
             <div className="flex justify-between items-center text-lg mb-2">
               <span className="font-bold rotate-1">Subtotal</span>
               <span className="font-bold -rotate-1">${TOTAL_AMOUNT.toFixed(2)}</span>
             </div>
             
             <div className="flex justify-between items-end pt-2 border-t-2 border-slate-700 border-dashed" style={{ borderRadius: sketchyBorder }}>
               <span className="font-black text-xl">Total Due:</span>
               <span className="text-4xl font-black rotate-2 text-rose-500">${TOTAL_AMOUNT.toFixed(2)}</span>
             </div>
          </div>

          <form onSubmit={handlePay} className="space-y-6">
            
            <div className="space-y-2">
              <label className="font-bold text-lg inline-block -rotate-1">Card Number *</label>
              <input onInput={(e) => { e.currentTarget.value = e.currentTarget.value.replace(/[^0-9\s]/g, "").substring(0, 19); }} pattern="[\\d\\s]{16,19}" maxLength={19} title="16 digit card number" 
                required 
                type="text" 
                placeholder="xxxx xxxx xxxx xxxx" 
                className="w-full bg-white border-2 border-slate-700 px-4 py-3 text-slate-800 focus:outline-none focus:bg-blue-50 transition-none font-bold text-lg placeholder:text-slate-400" 
                style={{ borderRadius: sketchyBorder }}
              />
            </div>
            
            <div className="flex gap-4">
              <div className="space-y-2 w-1/2">
                <label className="font-bold text-lg inline-block rotate-1">Exp Date</label>
                <input onInput={(e) => { e.currentTarget.value = e.currentTarget.value.replace(/[^0-9\/]/g, "").substring(0, 5); }} pattern="(0[1-9]|1[0-2])\\/?([0-9]{2})" maxLength={5} title="Format: MM/YY" 
                  required 
                  type="text" 
                  placeholder="mm/yy" 
                  className="w-full bg-white border-2 border-slate-700 px-4 py-3 text-slate-800 focus:outline-none focus:bg-blue-50 transition-none font-bold text-center text-lg placeholder:text-slate-400" 
                  style={{ borderRadius: sketchyBorderAlt }}
                />
              </div>
              <div className="space-y-2 w-1/2">
                <label className="font-bold text-lg inline-block -rotate-2">CVC</label>
                <input onInput={(e) => { e.currentTarget.value = e.currentTarget.value.replace(/[^0-9]/g, "").substring(0, 4); }} pattern="\\d{3,4}" maxLength={4} title="3 or 4 digit CVV/CVC" 
                  required 
                  type="text" 
                  placeholder="***" 
                  className="w-full bg-white border-2 border-slate-700 px-4 py-3 text-slate-800 focus:outline-none focus:bg-blue-50 transition-none font-bold text-center text-lg placeholder:text-slate-400" 
                  style={{ borderRadius: sketchyBorder }}
                />
              </div>
            </div>

            <button 
              type="submit" 
              disabled={isProcessing}
              className="w-full py-4 mt-4 bg-rose-400 text-white border-2 border-slate-700 font-bold text-2xl flex items-center justify-center gap-2 hover:bg-rose-500 transition-none active:translate-y-1 active:translate-x-1 active:shadow-[0_0_0_0_rgba(45,55,72,0.4)] disabled:opacity-50"
              style={{ 
                borderRadius: sketchyBorder,
                boxShadow: isProcessing ? '0 0 0 0 rgba(45,55,72,0.4)' : '6px 6px 0px 0px rgba(45, 55, 72, 0.4)',
                transform: isProcessing ? 'translate(6px, 6px)' : 'none'
              }}
            >
              {isProcessing ? (
                <span className="animate-pulse rotate-1">Hold on...</span>
              ) : (
                <><span className="-rotate-2">Pay Now!</span> <ArrowRight className="w-6 h-6 rotate-6" strokeWidth={3} /></>
              )}
            </button>
          </form>

        </div>
      ) : (
        <div 
          className="max-w-sm w-full bg-blue-100 p-12 text-center relative z-10 animate-in zoom-in duration-500"
          style={{
            border: '3px solid #2d3748',
            borderRadius: sketchyBorderAlt,
            boxShadow: '10px 10px 0px 0px rgba(45, 55, 72, 0.4)'
          }}
        >
           
           <div 
             className="w-24 h-24 bg-white border-2 border-slate-700 flex items-center justify-center mx-auto mb-6"
             style={{ borderRadius: sketchyBorder }}
           >
             <Heart className="w-12 h-12 text-rose-500 fill-rose-500 -rotate-12" strokeWidth={2} />
           </div>

           <h2 className="text-4xl font-bold text-slate-800 mb-4 -rotate-2">Woohoo!</h2>
           <p className="text-slate-700 text-xl font-bold mb-8 rotate-1">Payment went through!</p>
           
           <button type="button" 
              onClick={() => { setIsSuccess(false); }}
              className="w-full py-4 bg-white border-2 border-slate-700 text-slate-800 font-bold text-xl hover:bg-yellow-100 transition-none active:translate-y-1 active:translate-x-1 active:shadow-[0_0_0_0_rgba(45,55,72,0.4)]"
              style={{
                borderRadius: sketchyBorder,
                boxShadow: '4px 4px 0px 0px rgba(45, 55, 72, 0.4)'
              }}
            >
              <span className="rotate-2 inline-block">Back to Shop</span>
            </button>
        </div>
      )}

    </div>
  );
}
