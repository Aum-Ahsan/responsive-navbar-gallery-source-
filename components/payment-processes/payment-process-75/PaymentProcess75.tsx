"use client";
import React, { useState } from "react";
import { ArrowRight, Check } from "lucide-react";

export default function PaymentProcess75() {
  const TOTAL_AMOUNT = 50.00;
  
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

  return (
    <div className="w-full min-h-[700px] bg-[#4b0082] flex items-center justify-center p-6 text-black" style={{ fontFamily: '"Courier New", Courier, monospace', imageRendering: 'pixelated' }}>
      
      {!isSuccess ? (
        <div 
          className="max-w-md w-full bg-[#c0c0c0] p-8 relative z-10"
          style={{
            border: '4px solid #000',
            boxShadow: '8px 8px 0 #000'
          }}
        >
          
          <div className="flex justify-between items-center mb-6 border-b-4 border-black pb-4">
            <h2 className="text-2xl font-black uppercase">Item Shop</h2>
            <div className="bg-yellow-400 border-4 border-black px-2 py-1 font-bold shadow-[4px_4px_0_#000]">
              $ {TOTAL_AMOUNT.toFixed(2)}
            </div>
          </div>

          <div className="bg-white border-4 border-black p-4 mb-8 shadow-[4px_4px_0_#000]">
             <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-[#ff00ff] border-4 border-black shadow-[4px_4px_0_#000] flex items-center justify-center font-bold text-white text-xl">
                  +1
                </div>
                <div>
                  <h3 className="font-bold uppercase">Health Potion</h3>
                  <p className="text-xs uppercase font-bold text-gray-600">Restores 100 HP</p>
                </div>
             </div>
          </div>

          <form onSubmit={handlePay} className="space-y-6">
            
            <div className="space-y-2">
              <label className="text-sm font-bold uppercase">Card Number</label>
              <input onInput={(e) => { e.currentTarget.value = e.currentTarget.value.replace(/[^0-9\s]/g, "").substring(0, 19); }} pattern="[\\d\\s]{16,19}" maxLength={19} title="16 digit card number" 
                required 
                type="text" 
                placeholder="XXXX-XXXX-XXXX-XXXX" 
                className="w-full bg-white border-4 border-black px-4 py-3 text-black focus:outline-none focus:bg-yellow-200 transition-none font-bold placeholder:text-gray-400 shadow-[4px_4px_0_#000] active:translate-y-1 active:translate-x-1 active:shadow-[0_0_0_#000]" 
               minLength={16} />
            </div>
            
            <div className="flex gap-4">
              <div className="w-1/2 space-y-2">
                <label className="text-sm font-bold uppercase">Exp</label>
                <input onInput={(e) => { e.currentTarget.value = e.currentTarget.value.replace(/[^0-9\/]/g, "").substring(0, 5); }} pattern="(0[1-9]|1[0-2])\\/?([0-9]{2})" maxLength={5} title="Format: MM/YY" 
                  required 
                  type="text" 
                  placeholder="MM/YY" 
                  className="w-full bg-white border-4 border-black px-4 py-3 text-black focus:outline-none focus:bg-yellow-200 transition-none font-bold text-center placeholder:text-gray-400 shadow-[4px_4px_0_#000] active:translate-y-1 active:translate-x-1 active:shadow-[0_0_0_#000]" 
                 minLength={5} />
              </div>
              <div className="w-1/2 space-y-2">
                <label className="text-sm font-bold uppercase">CVV</label>
                <input onInput={(e) => { e.currentTarget.value = e.currentTarget.value.replace(/[^a-zA-Z0-9\s\-\,]/g, ""); }} pattern="[a-zA-Z\\s\\-]+" title="Letters only" 
                  required 
                  type="text" 
                  placeholder="123" 
                  className="w-full bg-white border-4 border-black px-4 py-3 text-black focus:outline-none focus:bg-yellow-200 transition-none font-bold text-center placeholder:text-gray-400 shadow-[4px_4px_0_#000] active:translate-y-1 active:translate-x-1 active:shadow-[0_0_0_#000]" 
                 minLength={2} maxLength={50} />
              </div>
            </div>

            <button 
              type="submit" 
              disabled={isProcessing}
              className="w-full py-4 mt-4 bg-[#00ff00] text-black border-4 border-black font-black text-xl uppercase flex items-center justify-center gap-2 hover:bg-yellow-400 transition-none shadow-[4px_4px_0_#000] active:translate-y-1 active:translate-x-1 active:shadow-[0_0_0_#000] disabled:opacity-50"
            >
              {isProcessing ? (
                'LOADING...'
              ) : (
                <>BUY ITEM <ArrowRight className="w-6 h-6" strokeWidth={3} /></>
              )}
            </button>
          </form>

        </div>
      ) : (
        <div 
          className="max-w-sm w-full bg-[#c0c0c0] p-8 text-center"
          style={{
            border: '4px solid #000',
            boxShadow: '8px 8px 0 #000'
          }}
        >
           
           <div className="w-20 h-20 bg-yellow-400 border-4 border-black flex items-center justify-center mx-auto mb-6 shadow-[4px_4px_0_#000]">
             <Check className="w-12 h-12 text-black" strokeWidth={4} />
           </div>

           <h2 className="text-2xl font-black uppercase mb-4 text-[#ff00ff]">Level Up!</h2>
           <p className="text-black font-bold uppercase mb-8">Purchase Successful.</p>
           
           <button type="button" 
              onClick={(e) => {
      const inputs = Array.from((e.currentTarget.closest('.w-full') || document).querySelectorAll('input')).filter(i => i.offsetParent !== null);
      let isValid = true;
      for (const input of inputs) {
        if (!input.checkValidity()) {
          input.reportValidity();
          isValid = false;
          break;
        }
      }
      if (!isValid) return;
      const originalHandler = () => { setIsSuccess(false); ;
      if (typeof originalHandler === 'function') (originalHandler as any)(e);
    }}}
              className="w-full py-4 bg-white border-4 border-black text-black font-black text-xl uppercase hover:bg-yellow-400 shadow-[4px_4px_0_#000] active:translate-y-1 active:translate-x-1 active:shadow-[0_0_0_#000]"
            >
              CONTINUE
            </button>
        </div>
      )}

    </div>
  );
}
