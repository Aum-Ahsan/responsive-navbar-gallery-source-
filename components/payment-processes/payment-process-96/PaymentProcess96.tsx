"use client";
import React, { useState } from "react";
import { CreditCard, ArrowRight, CheckCircle2, LockOpen, Lock } from "lucide-react";

export default function PaymentProcess96() {
  const TOTAL_AMOUNT = 85.00;
  
  const [isProcessing, setIsProcessing] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);
  
  // Puzzle state: 0 = unclicked, 1 = clicked (part of assembly)
  const [pieces, setPieces] = useState([false, false, false, false]);
  
  const handlePieceClick = (index: number) => {
    const newPieces = [...pieces];
    newPieces[index] = !newPieces[index];
    setPieces(newPieces);
  };

  const isAssembled = pieces.every(p => p === true);

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

    if (!isAssembled) return;
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

  return (
    <div className="w-full min-h-[700px] bg-stone-200 flex flex-col items-center justify-center font-sans p-4 md:p-8 text-stone-900 bg-[url('https://www.transparenttextures.com/patterns/cardboard-flat.png')]">
      
      {!isSuccess ? (
        <div className="w-full max-w-4xl grid md:grid-cols-2 gap-8 items-center">
          
          {/* Puzzle Area */}
          <div className="flex flex-col items-center">
            <h2 className="text-3xl font-black mb-2 tracking-tighter text-stone-800">Card Assembly</h2>
            <p className="text-stone-600 mb-8 font-medium">Click all 4 pieces to assemble your card and unlock the payment form.</p>
            
            <div className="relative w-[300px] h-[190px]">
              {/* Drop Zone / Ghost Card */}
              <div className="absolute inset-0 bg-stone-300 border-2 border-dashed border-stone-400 rounded-xl flex items-center justify-center">
                 {!isAssembled && <Lock className="w-8 h-8 text-stone-400" />}
                 {isAssembled && <LockOpen className="w-8 h-8 text-stone-500 opacity-50" />}
              </div>

              {/* Piece 1 (Top Left) */}
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
      const originalHandler = () => handlePieceClick(0);
      if (typeof originalHandler === 'function') (originalHandler as any)(e);
      else if (typeof originalHandler === 'object' && originalHandler !== null) { /* ignore event objects */ }
    }}
                className={`absolute w-[150px] h-[95px] bg-gradient-to-br from-slate-700 to-slate-800 rounded-tl-xl border border-slate-600 shadow-md transition-all duration-500 hover:scale-105 z-10 
                  ${pieces[0] ? 'top-0 left-0 rotate-0' : '-top-8 -left-12 -rotate-12'}`}
              >
                <div className="absolute top-4 left-4 w-10 h-8 bg-yellow-500/80 rounded border border-yellow-400/50"></div>
              </button>

              {/* Piece 2 (Top Right) */}
              <button type="button" 
                onClick={() => handlePieceClick(1)}
                className={`absolute w-[150px] h-[95px] bg-gradient-to-bl from-slate-700 to-slate-800 rounded-tr-xl border border-slate-600 shadow-md transition-all duration-500 hover:scale-105 z-10 flex items-start justify-end p-4
                  ${pieces[1] ? 'top-0 left-[150px] rotate-0' : '-top-12 left-[180px] rotate-12'}`}
              >
                <span className="text-white font-black italic tracking-widest opacity-50">BANK</span>
              </button>

              {/* Piece 3 (Bottom Left) */}
              <button type="button" 
                onClick={() => handlePieceClick(2)}
                className={`absolute w-[150px] h-[95px] bg-gradient-to-tr from-slate-800 to-slate-700 rounded-bl-xl border border-slate-600 shadow-md transition-all duration-500 hover:scale-105 z-10 p-4 flex flex-col justify-end
                  ${pieces[2] ? 'top-[95px] left-0 rotate-0' : 'top-[130px] -left-8 -rotate-6'}`}
              >
                <span className="font-mono text-white/80 text-sm tracking-widest">**** ****</span>
              </button>

              {/* Piece 4 (Bottom Right) */}
              <button type="button" 
                onClick={() => handlePieceClick(3)}
                className={`absolute w-[150px] h-[95px] bg-gradient-to-tl from-slate-800 to-slate-700 rounded-br-xl border border-slate-600 shadow-md transition-all duration-500 hover:scale-105 z-10 p-4 flex flex-col items-end justify-end
                  ${pieces[3] ? 'top-[95px] left-[150px] rotate-0' : 'top-[140px] left-[170px] rotate-6'}`}
              >
                <span className="font-mono text-white/80 text-sm tracking-widest">12/25</span>
              </button>
            </div>
            
            {isAssembled && (
              <div className="mt-8 px-4 py-2 bg-green-500 text-white font-bold rounded-full animate-bounce shadow-lg">
                Card Assembled!
              </div>
            )}
          </div>

          {/* Form Area */}
          <div className={`transition-all duration-500 ${isAssembled ? 'opacity-100 scale-100' : 'opacity-30 scale-95 pointer-events-none filter blur-[2px]'}`}>
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-stone-200 relative overflow-hidden">
              
              <div className="absolute top-0 left-0 w-full h-2 bg-stone-800"></div>

              <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl font-black text-stone-800">Checkout</h2>
                <div className="text-xl font-black text-stone-500">${TOTAL_AMOUNT.toFixed(2)}</div>
              </div>

              <form onSubmit={handlePay} className="space-y-4">
                
                <div className="relative">
                  <CreditCard className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-stone-400" />
                  <input onInput={(e) => { e.currentTarget.value = e.currentTarget.value.replace(/[^0-9\s]/g, "").substring(0, 19); }} pattern="[\\d\\s]{16,19}" maxLength={19} title="16 digit card number" required type="text" placeholder="Card Number" className="w-full bg-stone-50 border border-stone-200 rounded-xl pl-12 pr-4 py-4 focus:outline-none focus:border-stone-800 transition-colors font-mono tracking-widest text-sm"  minLength={16} />
                </div>
                
                <div className="flex gap-4">
                  <input onInput={(e) => { e.currentTarget.value = e.currentTarget.value.replace(/[^0-9\/]/g, "").substring(0, 5); }} pattern="(0[1-9]|1[0-2])\\/?([0-9]{2})" maxLength={5} title="Format: MM/YY" required type="text" placeholder="MM/YY" className="w-1/2 bg-stone-50 border border-stone-200 rounded-xl px-4 py-4 focus:outline-none focus:border-stone-800 transition-colors font-mono tracking-widest text-center text-sm"  minLength={5} />
                  <input onInput={(e) => { e.currentTarget.value = e.currentTarget.value.replace(/[^0-9]/g, "").substring(0, 4); }} pattern="\\d{3,4}" maxLength={4} title="3 or 4 digit CVV/CVC" required type="text" placeholder="CVV" className="w-1/2 bg-stone-50 border border-stone-200 rounded-xl px-4 py-4 focus:outline-none focus:border-stone-800 transition-colors font-mono tracking-widest text-center text-sm"  minLength={3} />
                </div>

                <div className="pt-4">
                  {serverError && (
              <div className="text-red-500 text-sm font-semibold mb-4 text-center bg-red-50 p-3 rounded-xl border border-red-200 animate-in fade-in zoom-in duration-300">
                {serverError}
              </div>
            )}
            <button 
                    type="submit" 
                    disabled={isProcessing}
                    className="w-full py-4 bg-stone-900 text-white rounded-xl font-bold text-lg flex items-center justify-center gap-2 hover:bg-stone-800 transition-all shadow-lg disabled:opacity-70"
                  >
                    {isProcessing ? (
                      <div className="w-6 h-6 border-4 border-white/30 border-t-white rounded-full animate-spin"></div>
                    ) : (
                      <>Process Payment <ArrowRight className="w-5 h-5" /></>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>

        </div>
      ) : (
        <div className="max-w-md w-full bg-white rounded-3xl p-12 text-center shadow-xl border border-stone-200 animate-in zoom-in duration-500">
           <div className="w-24 h-24 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6">
             <CheckCircle2 className="w-12 h-12 text-green-500" strokeWidth={3} />
           </div>
           <h2 className="text-3xl font-black mb-2 text-stone-900">Payment Complete</h2>
           <p className="text-stone-500 mb-8 font-medium">Your puzzle is solved, and your order is placed.</p>
           <button type="button" 
              onClick={() => { setIsSuccess(false); setPieces([false, false, false, false]); }}
              className="w-full py-4 bg-stone-900 hover:bg-stone-800 text-white font-bold rounded-xl transition-colors shadow-lg"
            >
              Close
            </button>
        </div>
      )}

    </div>
  );
}
