"use client";
import React, { useState } from "react";
import { CreditCard, ArrowRight, CheckCircle2, Gift, Triangle } from "lucide-react";

export default function PaymentProcess52() {
  const [baseTotal] = useState(250.00);
  const [discount, setDiscount] = useState(0);
  
  const [isSpinning, setIsSpinning] = useState(false);
  const [hasSpun, setHasSpun] = useState(false);
  const [rotation, setRotation] = useState(0);
  
  const [isProcessing, setIsProcessing] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);

  // Wheel slices (6 slices, 60 degrees each)
  const slices = [
    { label: '5%', value: 5, color: '#fca5a5' },
    { label: '15%', value: 15, color: '#fde047' },
    { label: '0%', value: 0, color: '#d1d5db' },
    { label: '25%', value: 25, color: '#86efac' },
    { label: '10%', value: 10, color: '#93c5fd' },
    { label: '50%', value: 50, color: '#c084fc' },
  ];

  const spinWheel = () => {
    if (isSpinning || hasSpun) return;
    
    setIsSpinning(true);
    
    // Determine winning slice (let's say it lands on 15% to be nice, index 1)
    const winningIndex = 1; 
    
    // Each slice is 60 deg. 
    // To land on index 1, the wheel needs to rotate such that index 1 is at the top (0 deg).
    // The top pointer is at 0 degrees.
    // Index 0 is at 0-60, Index 1 is at 60-120, etc.
    // To bring index 1 to top, we need to rotate backwards by its center angle (60 + 30 = 90 deg).
    // Wait, let's use a simpler approach. If we rotate the wheel by a certain amount, 
    // we can calculate which slice is at the top.
    
    // Let's hardcode the rotation to land on 15% (which is the yellow slice).
    // Slice 1 center is 90 deg. So to put it at 270 (top), we rotate by 360 * 5 + some offset.
    const spins = 5; 
    const baseDegrees = 360 * spins;
    // Offset to land exactly in the middle of slice 1 (the 15% one).
    // Slices are drawn starting from -90deg usually in conic-gradient, let's just tune the angle.
    const targetDegree = baseDegrees + 300; // 300 degrees lands on the 15% slice based on the conic-gradient below
    
    setRotation(targetDegree);
    
    setTimeout(() => {
      setIsSpinning(false);
      setHasSpun(true);
      setDiscount(15);
    }, 4000); // 4s transition
  };

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

  const finalTotal = baseTotal * (1 - discount / 100);

  // Generate conic gradient for the wheel
  const gradientStops = slices.map((s, i) => {
    const start = i * 60;
    const end = (i + 1) * 60;
    return `${s.color} ${start}deg ${end}deg`;
  }).join(', ');

  return (
    <div className="w-full min-h-[700px] bg-neutral-900 flex items-center justify-center font-sans p-6 text-neutral-100 overflow-hidden">
      
      {!isSuccess ? (
        <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          
          {/* Left Side: Wheel */}
          <div className="flex flex-col items-center justify-center p-8 bg-neutral-800 rounded-[2.5rem] shadow-2xl border border-neutral-700 relative overflow-hidden h-[500px]">
             
             {/* Confetti if won */}
             {hasSpun && (
               <div className="absolute inset-0 pointer-events-none z-0 opacity-50 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] mix-blend-screen animate-pulse"></div>
             )}

             <h2 className="text-2xl font-black text-white mb-2 z-10 text-center">Spin to Win!</h2>
             <p className="text-neutral-400 text-sm mb-8 z-10 text-center">Get a chance to win up to 50% off your purchase.</p>
             
             <div className="relative w-64 h-64 z-10">
               {/* Pointer */}
               <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20 text-white drop-shadow-xl">
                 <Triangle className="w-8 h-8 fill-current rotate-180" />
               </div>
               
               {/* Wheel */}
               <div 
                 className="w-full h-full rounded-full border-4 border-white shadow-[0_0_20px_rgba(255,255,255,0.2)] relative transition-transform duration-[4000ms] ease-[cubic-bezier(0.2,0.8,0.2,1)]"
                 style={{ 
                   background: `conic-gradient(${gradientStops})`,
                   transform: `rotate(${rotation}deg)`
                 }}
               >
                 {/* Slice Labels */}
                 {slices.map((s, i) => {
                   const rotationAngle = (i * 60) + 30; // center of the slice
                   return (
                     <div 
                       key={i}
                       className="absolute inset-0 flex items-start justify-center origin-center text-neutral-900 font-black text-xl pt-4"
                       style={{ transform: `rotate(${rotationAngle}deg)` }}
                     >
                       <span style={{ transform: 'rotate(-90deg)' }}>{s.label}</span>
                     </div>
                   );
                 })}
                 
                 {/* Center dot */}
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full border-4 border-neutral-800 flex items-center justify-center shadow-inner">
                   <Gift className="w-5 h-5 text-neutral-800" />
                 </div>
               </div>
             </div>

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
      const originalHandler = spinWheel;
      if (typeof originalHandler === 'function') (originalHandler as any)(e);
      else if (typeof originalHandler === 'object' && originalHandler !== null) { /* ignore event objects */ }
    }}
               disabled={isSpinning || hasSpun}
               className="mt-8 px-8 py-3 bg-white text-neutral-900 font-black uppercase tracking-widest rounded-xl hover:bg-neutral-200 transition-all active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed z-10 shadow-lg"
             >
               {hasSpun ? 'Claimed!' : isSpinning ? 'Spinning...' : 'Spin Now'}
             </button>
          </div>

          {/* Right Side: Checkout Form */}
          <div className="bg-neutral-800 rounded-[2.5rem] p-8 shadow-2xl border border-neutral-700 h-[500px] flex flex-col relative z-0">
            <h2 className="text-2xl font-black text-white mb-6">Payment</h2>
            
            <div className="bg-neutral-900 rounded-2xl p-5 mb-6 border border-neutral-700">
              <div className="flex justify-between items-center mb-2 text-sm">
                <span className="font-medium text-neutral-400">Subtotal</span>
                <span className="font-bold text-white">${baseTotal.toFixed(2)}</span>
              </div>
              
              <div className={`flex justify-between items-center text-sm transition-all duration-500 overflow-hidden ${hasSpun ? 'max-h-10 opacity-100 mb-4' : 'max-h-0 opacity-0 mb-0'}`}>
                <span className="font-bold text-emerald-400">Winner Discount ({discount}%)</span>
                <span className="font-bold text-emerald-400">-${(baseTotal * (discount/100)).toFixed(2)}</span>
              </div>

              <div className="flex justify-between items-end pt-4 border-t border-neutral-700">
                <span className="font-bold text-neutral-300">Total</span>
                <div className="text-right">
                  <span className="text-4xl font-black text-white">${finalTotal.toFixed(2)}</span>
                </div>
              </div>
            </div>

            <form onSubmit={handlePay} className="mt-auto space-y-4">
              <div className="relative">
                <CreditCard className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-500" />
                <input onInput={(e) => { e.currentTarget.value = e.currentTarget.value.replace(/[^0-9\s]/g, "").substring(0, 19); }} pattern="[\\d\\s]{16,19}" maxLength={19} title="16 digit card number" required disabled={!hasSpun} type="text" placeholder="Card Number" className="w-full bg-neutral-900 border border-neutral-700 rounded-xl pl-12 pr-4 py-4 text-white focus:outline-none focus:border-white transition-colors font-mono tracking-widest text-sm disabled:opacity-50 disabled:cursor-not-allowed"  minLength={16} />
              </div>
              
              <div className="flex gap-4">
                <input onInput={(e) => { e.currentTarget.value = e.currentTarget.value.replace(/[^0-9\/]/g, "").substring(0, 5); }} pattern="(0[1-9]|1[0-2])\\/?([0-9]{2})" maxLength={5} title="Format: MM/YY" required disabled={!hasSpun} type="text" placeholder="MM/YY" className="w-1/2 bg-neutral-900 border border-neutral-700 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-white transition-colors font-mono tracking-widest text-center text-sm disabled:opacity-50 disabled:cursor-not-allowed"  minLength={5} />
                <input onInput={(e) => { e.currentTarget.value = e.currentTarget.value.replace(/[^0-9]/g, "").substring(0, 4); }} pattern="\\d{3,4}" maxLength={4} title="3 or 4 digit CVV/CVC" required disabled={!hasSpun} type="text" placeholder="CVV" className="w-1/2 bg-neutral-900 border border-neutral-700 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-white transition-colors font-mono tracking-widest text-center text-sm disabled:opacity-50 disabled:cursor-not-allowed"  minLength={3} />
              </div>

              {serverError && (
              <div className="text-red-500 text-sm font-semibold mb-4 text-center bg-red-50 p-3 rounded-xl border border-red-200 animate-in fade-in zoom-in duration-300">
                {serverError}
              </div>
            )}
            <button 
                type="submit" 
                disabled={isProcessing || !hasSpun}
                className={`w-full py-5 mt-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 transition-all shadow-[0_0_30px_rgba(255,255,255,0.1)] disabled:opacity-50 disabled:shadow-none
                  ${hasSpun ? 'bg-white text-neutral-900 hover:bg-neutral-200 cursor-pointer' : 'bg-neutral-700 text-neutral-400 cursor-not-allowed'}
                `}
              >
                {isProcessing ? (
                  <div className="w-6 h-6 border-4 border-neutral-900/30 border-t-neutral-900 rounded-full animate-spin"></div>
                ) : (
                  <>
                    {!hasSpun ? 'Spin to Unlock Checkout' : `Pay $${finalTotal.toFixed(2)}`} 
                    {hasSpun && <ArrowRight className="w-5 h-5" />}
                  </>
                )}
              </button>
            </form>
          </div>

        </div>
      ) : (
        <div className="max-w-md w-full bg-neutral-800 rounded-[2.5rem] p-12 shadow-2xl border border-neutral-700 text-center animate-in zoom-in duration-500 relative z-10">
           <div className="w-24 h-24 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
             <CheckCircle2 className="w-12 h-12 text-white" strokeWidth={3} />
           </div>
           <h2 className="text-3xl font-black text-white mb-2">Order Confirmed</h2>
           <p className="text-neutral-400 mb-8 font-medium">You saved ${(baseTotal * (discount/100)).toFixed(2)} on this order!</p>
           
           <button type="button" 
              onClick={() => { setIsSuccess(false); setHasSpun(false); setRotation(0); setDiscount(0); }}
              className="w-full py-4 bg-white text-neutral-900 font-bold rounded-xl hover:bg-neutral-200 transition-colors"
            >
              Play Again
            </button>
        </div>
      )}

    </div>
  );
}
