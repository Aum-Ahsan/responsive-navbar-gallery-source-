"use client";
import React, { useState, useEffect } from "react";
import { CreditCard, CheckCircle2, ChevronDown, Pointer } from "lucide-react";

const CARDS = [
  { id: 1, type: "Visa", last4: "4242", color: "bg-blue-600" },
  { id: 2, type: "Mastercard", last4: "5555", color: "bg-orange-500" },
  { id: 3, type: "Amex", last4: "1234", color: "bg-slate-800" },
  { id: 4, type: "Discover", last4: "9999", color: "bg-orange-400" },
  { id: 5, type: "Gift Card", last4: "0000", color: "bg-fuchsia-500" },
];

export default function PaymentProcess99() {
  const TOTAL_AMOUNT = 150.00;
  
  const [isSpinning, setIsSpinning] = useState(false);
  const [selectedCardIndex, setSelectedCardIndex] = useState(0);
  const [hasSpun, setHasSpun] = useState(false);
  
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const spinReel = () => {
    if (isSpinning) return;
    setIsSpinning(true);
    setHasSpun(true);
    
    // Simulate spinning for 3 seconds
    const spinDuration = 3000;
    const interval = 100;
    let elapsed = 0;
    
    const timer = setInterval(() => {
      elapsed += interval;
      setSelectedCardIndex(Math.floor(Math.random() * CARDS.length));
      
      if (elapsed >= spinDuration) {
        clearInterval(timer);
        setIsSpinning(false);
        // Force land on a random one
        setSelectedCardIndex(Math.floor(Math.random() * CARDS.length));
      }
    }, interval);
  };

  const handlePay = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
    }, 2000);
  };

  const selectedCard = CARDS[selectedCardIndex];

  return (
    <div className="w-full min-h-[700px] bg-red-950 flex flex-col items-center justify-center font-sans p-6 text-white overflow-hidden relative">
      
      {/* Background Casino lights */}
      <div className="absolute inset-0 flex justify-around p-4 opacity-20">
        {[...Array(20)].map((_, i) => (
          <div key={i} className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse" style={{ animationDelay: `${i * 0.1}s` }}></div>
        ))}
      </div>

      {!isSuccess ? (
        <div className="max-w-md w-full relative z-10 flex flex-col items-center">
          
          <h1 className="text-4xl md:text-5xl font-black text-yellow-400 mb-2 uppercase tracking-widest text-center [text-shadow:0_4px_0_#b45309]">
            Roulette Pay
          </h1>
          <p className="text-red-200 mb-12 text-center">Spin the wheel to choose your payment method!</p>

          {/* Slot Machine UI */}
          <div className="bg-yellow-500 p-2 rounded-2xl w-full shadow-[0_10px_0_#b45309] mb-8">
            <div className="bg-slate-900 border-4 border-yellow-600 rounded-xl p-6 relative overflow-hidden h-48 flex items-center justify-center">
              
              {/* Center line indicator */}
              <div className="absolute left-0 w-full h-1 bg-red-500/50 top-1/2 -translate-y-1/2 z-20 pointer-events-none shadow-[0_0_10px_red]"></div>

              <div className="absolute top-2 animate-bounce">
                <ChevronDown className="w-8 h-8 text-yellow-400" />
              </div>

              {/* The Reel */}
              <div className={`transition-all ${isSpinning ? 'blur-sm scale-110' : 'blur-none scale-100'} z-10 w-full`}>
                <div className={`${selectedCard.color} w-full rounded-xl p-4 flex flex-col items-center justify-center border-2 border-white/20 shadow-xl`}>
                  <CreditCard className="w-8 h-8 text-white mb-2" />
                  <span className="font-bold text-lg">{selectedCard.type}</span>
                  <span className="font-mono tracking-widest">**** {selectedCard.last4}</span>
                </div>
              </div>
            </div>
          </div>

          {/* The Lever / Spin Button */}
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
      const originalHandler = spinReel;
      if (typeof originalHandler === 'function') (originalHandler as any)(e);
      else if (typeof originalHandler === 'object' && originalHandler !== null) { /* ignore event objects */ }
    }}
            disabled={isSpinning || isProcessing}
            className={`
              w-32 h-32 rounded-full border-8 border-red-900 shadow-[0_10px_0_#450a0a,0_15px_20px_rgba(0,0,0,0.5)] 
              flex flex-col items-center justify-center transition-all duration-100 mb-12
              ${isSpinning ? 'translate-y-4 shadow-[0_2px_0_#450a0a,0_5px_10px_rgba(0,0,0,0.5)] bg-red-700 text-red-900' : 'bg-red-600 text-white hover:bg-red-500 active:translate-y-4 active:shadow-[0_2px_0_#450a0a,0_5px_10px_rgba(0,0,0,0.5)]'}
            `}
          >
            <span className="font-black text-2xl uppercase tracking-widest">{isSpinning ? '...' : 'SPIN'}</span>
          </button>

          {/* Checkout Form (only enabled after spinning) */}
          <form onSubmit={handlePay} className={`w-full transition-all duration-500 ${hasSpun && !isSpinning ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}>
            <button 
              type="submit" 
              disabled={isProcessing}
              className="w-full py-5 bg-green-500 text-white rounded-xl font-black text-xl uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-green-400 transition-all shadow-[0_6px_0_#166534] active:translate-y-2 active:shadow-none disabled:opacity-50"
            >
              {isProcessing ? (
                <div className="w-6 h-6 border-4 border-white/30 border-t-white rounded-full animate-spin"></div>
              ) : (
                <>Pay ${TOTAL_AMOUNT.toFixed(2)}</>
              )}
            </button>
          </form>

        </div>
      ) : (
        <div className="max-w-md w-full bg-white rounded-3xl p-12 text-center shadow-2xl relative z-10 animate-in zoom-in duration-500 border-8 border-yellow-400">
           
           <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
             <CheckCircle2 className="w-12 h-12 text-green-500" strokeWidth={3} />
           </div>
           
           <h2 className="text-4xl font-black mb-2 text-slate-900 uppercase">Jackpot!</h2>
           <p className="text-slate-600 mb-8 font-medium">Payment of ${TOTAL_AMOUNT.toFixed(2)} was successful using your {selectedCard.type}.</p>
           
           <button type="button" 
              onClick={() => { setIsSuccess(false); setHasSpun(false); }}
              className="w-full py-4 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-xl transition-colors uppercase tracking-widest"
            >
              Play Again
            </button>
        </div>
      )}

    </div>
  );
}
