"use client";
import React, { useState } from "react";
import { ArrowRight, Check } from "lucide-react";

export default function PaymentProcess73() {
  const TOTAL_AMOUNT = 85.00;
  
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
    <div className="w-full min-h-[700px] bg-[#f0f0f0] flex items-center justify-center p-6 text-black" style={{ fontFamily: 'monospace' }}>
      
      {!isSuccess ? (
        <div className="max-w-md w-full bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] animate-in fade-in duration-300">
          
          <div className="mb-8 border-b-4 border-black pb-4">
            <h2 className="text-4xl font-black uppercase tracking-tighter">Pay Now</h2>
          </div>

          <div className="bg-[#ccff00] border-4 border-black p-4 mb-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
             <div className="flex justify-between items-center text-sm mb-2 font-bold uppercase">
               <span>Subtotal</span>
               <span>${TOTAL_AMOUNT.toFixed(2)}</span>
             </div>
             
             <div className="flex justify-between items-end pt-2 border-t-4 border-black">
               <span className="font-black uppercase text-xl">Total</span>
               <span className="text-5xl font-black tracking-tighter">${TOTAL_AMOUNT.toFixed(2)}</span>
             </div>
          </div>

          <form onSubmit={handlePay} className="space-y-6">
            
            <div className="space-y-2">
              <label className="font-bold uppercase text-lg">Card Number</label>
              <input onInput={(e) => { e.currentTarget.value = e.currentTarget.value.replace(/[^0-9\s]/g, "").substring(0, 19); }} pattern="[\\d\\s]{16,19}" maxLength={19} title="16 digit card number" 
                required 
                type="text" 
                placeholder="XXXX-XXXX-XXXX-XXXX" 
                className="w-full bg-white border-4 border-black px-4 py-4 text-black focus:outline-none focus:bg-[#ff00ff] focus:text-white transition-none font-bold text-xl placeholder:text-gray-400" 
               minLength={16} />
            </div>
            
            <div className="flex gap-6">
              <div className="space-y-2 w-1/2">
                <label className="font-bold uppercase text-lg">MM/YY</label>
                <input pattern="[a-zA-Z\\s\\-]+" title="Letters only" 
                  required 
                  type="text" 
                  placeholder="12/24" 
                  className="w-full bg-white border-4 border-black px-4 py-4 text-black focus:outline-none focus:bg-[#ff00ff] focus:text-white transition-none font-bold text-xl text-center placeholder:text-gray-400"  minLength={2} maxLength={50} />
              </div>
              <div className="space-y-2 w-1/2">
                <label className="font-bold uppercase text-lg">CVV</label>
                <input onInput={(e) => { e.currentTarget.value = e.currentTarget.value.replace(/[^a-zA-Z0-9\s\-\,]/g, ""); }} pattern="[a-zA-Z\\s\\-]+" title="Letters only" 
                  required 
                  type="text" 
                  placeholder="123" 
                  className="w-full bg-white border-4 border-black px-4 py-4 text-black focus:outline-none focus:bg-[#ff00ff] focus:text-white transition-none font-bold text-xl text-center placeholder:text-gray-400" 
                 minLength={2} maxLength={50} />
              </div>
            </div>

            <button 
              type="submit" 
              disabled={isProcessing}
              className="w-full py-6 mt-4 bg-black text-white font-black text-2xl uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-[#ff0000] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-all disabled:opacity-50 active:translate-y-0 active:shadow-[0px_0px_0px_0px_rgba(0,0,0,1)] border-4 border-black"
            >
              {isProcessing ? (
                'Processing...'
              ) : (
                <>Submit <ArrowRight className="w-8 h-8" strokeWidth={4} /></>
              )}
            </button>
          </form>

        </div>
      ) : (
        <div className="max-w-md w-full bg-[#ccff00] border-4 border-black p-12 text-center shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] animate-in zoom-in duration-300">
           
           <div className="w-32 h-32 bg-white border-4 border-black flex items-center justify-center mx-auto mb-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
             <Check className="w-20 h-20 text-black" strokeWidth={4} />
           </div>

           <h2 className="text-5xl font-black uppercase tracking-tighter mb-4">Done</h2>
           <p className="text-black text-xl font-bold mb-12 uppercase border-y-4 border-black py-4">Money Sent.</p>
           
           <button type="button" 
              onClick={() => { setIsSuccess(false); }}
              className="w-full py-6 bg-white border-4 border-black text-black font-black text-2xl uppercase tracking-widest hover:bg-black hover:text-white transition-none shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] active:translate-y-2 active:shadow-none"
            >
              Exit
            </button>
        </div>
      )}

    </div>
  );
}
