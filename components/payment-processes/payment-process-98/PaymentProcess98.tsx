"use client";
import React, { useState } from "react";
import { CreditCard, MapPin, Navigation, CheckCircle2, Navigation2 } from "lucide-react";

export default function PaymentProcess98() {
  const TOTAL_AMOUNT = 32.50;
  
  const [pinPos, setPinPos] = useState<{ x: number, y: number } | null>(null);
  const [step, setStep] = useState<1 | 2>(1); // 1 = Map, 2 = Payment
  
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleMapClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (step !== 1) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setPinPos({ x, y });
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
    <div className="w-full min-h-[700px] bg-slate-100 flex flex-col font-sans relative overflow-hidden text-slate-800">
      
      {!isSuccess ? (
        <>
          {/* Simulated Map Background */}
          <div 
            className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center cursor-crosshair transition-transform duration-1000 ease-in-out"
            style={step === 2 && pinPos ? {
              transform: `scale(1.5) translate(${50 - pinPos.x}%, ${50 - pinPos.y}%)`,
              filter: 'blur(4px) brightness(0.7)'
            } : {}}
            onClick={handleMapClick}
          >
            {/* The Pin */}
            {pinPos && (
              <div 
                className="absolute w-10 h-10 -ml-5 -mt-10 animate-in zoom-in bounce flex flex-col items-center justify-center transition-all duration-1000"
                style={{ left: `${pinPos.x}%`, top: `${pinPos.y}%` }}
              >
                <MapPin className="w-10 h-10 text-red-500 drop-shadow-md" strokeWidth={2.5} />
                <div className="w-4 h-1 bg-black/30 rounded-[100%] blur-[2px] mt-1"></div>
              </div>
            )}
          </div>

          {/* Top Bar */}
          <div className="relative z-10 bg-white/90 backdrop-blur-md p-4 shadow-sm flex items-center justify-between border-b border-slate-200">
            <h1 className="font-bold text-lg flex items-center gap-2">
              <Navigation className="w-5 h-5 text-blue-600" />
              Delivery Checkout
            </h1>
            <div className="font-bold bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
              ${TOTAL_AMOUNT.toFixed(2)}
            </div>
          </div>

          {/* Bottom Panel (Step 1: Confirm Location) */}
          <div className={`absolute bottom-0 left-0 w-full p-6 transition-all duration-500 ease-in-out z-20 ${step === 1 ? 'translate-y-0' : 'translate-y-full opacity-0'}`}>
            <div className="max-w-md mx-auto bg-white rounded-3xl p-6 shadow-2xl border border-slate-100">
              <div className="w-12 h-1.5 bg-slate-200 rounded-full mx-auto mb-6"></div>
              
              <h2 className="text-xl font-bold mb-2">Set Delivery Location</h2>
              <p className="text-slate-500 mb-6 text-sm">
                {pinPos ? "Location marked! Click confirm to proceed." : "Tap anywhere on the map to drop a pin."}
              </p>

              <button type="button"
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
      const originalHandler = () => setStep(2);
      if (typeof originalHandler === 'function') (originalHandler as any)(e);
      else if (typeof originalHandler === 'object' && originalHandler !== null) { /* ignore event objects */ }
    }}
                disabled={!pinPos}
                className="w-full py-4 bg-slate-900 text-white rounded-xl font-bold flex items-center justify-center gap-2 disabled:bg-slate-300 disabled:text-slate-500 transition-colors"
              >
                Confirm Location <CheckCircle2 className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Bottom Panel (Step 2: Payment) */}
          <div className={`absolute inset-0 md:inset-auto md:bottom-0 md:left-0 md:w-full md:p-6 transition-all duration-700 ease-in-out z-30 flex items-end justify-center ${step === 2 ? 'translate-y-0 opacity-100' : 'translate-y-24 opacity-0 pointer-events-none'}`}>
            
            <div className="w-full h-full md:h-auto md:max-w-md bg-white md:rounded-3xl p-6 md:p-8 shadow-2xl border border-slate-100 flex flex-col pt-12 md:pt-8">
              
              <button type="button" 
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
      const originalHandler = () => setStep(1);
      if (typeof originalHandler === 'function') (originalHandler as any)(e);
      else if (typeof originalHandler === 'object' && originalHandler !== null) { /* ignore event objects */ }
    }}
                className="absolute top-4 left-4 md:hidden p-2 bg-slate-100 rounded-full"
              >
                <CheckCircle2 className="w-5 h-5 text-slate-500 rotate-180" />
              </button>

              <div className="hidden md:block w-12 h-1.5 bg-slate-200 rounded-full mx-auto mb-6 cursor-pointer" onClick={() => setStep(1)}></div>
              
              <div className="flex items-center gap-3 bg-slate-50 p-3 rounded-xl mb-8 border border-slate-100">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Delivering To</p>
                  <p className="font-medium text-sm">Dropped Pin ({pinPos?.x.toFixed(2)}, {pinPos?.y.toFixed(2)})</p>
                </div>
                <button type="button" onClick={() => setStep(1)} className="ml-auto text-blue-600 text-sm font-bold">Edit</button>
              </div>

              <form onSubmit={handlePay} className="space-y-4 flex-1">
                <div className="relative">
                  <CreditCard className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                  <input onInput={(e) => { e.currentTarget.value = e.currentTarget.value.replace(/[^0-9\s]/g, "").substring(0, 19); }} pattern="[\\d\\s]{16,19}" maxLength={19} title="16 digit card number" required type="text" placeholder="Card Number" className="w-full bg-white border border-slate-300 rounded-xl pl-12 pr-4 py-4 focus:outline-none focus:border-slate-900 focus:ring-1 focus:ring-slate-900 transition-all font-mono text-sm" />
                </div>
                
                <div className="flex gap-4">
                  <input onInput={(e) => { e.currentTarget.value = e.currentTarget.value.replace(/[^0-9\/]/g, "").substring(0, 5); }} pattern="(0[1-9]|1[0-2])\\/?([0-9]{2})" maxLength={5} title="Format: MM/YY" required type="text" placeholder="MM/YY" className="w-1/2 bg-white border border-slate-300 rounded-xl px-4 py-4 focus:outline-none focus:border-slate-900 focus:ring-1 focus:ring-slate-900 transition-all font-mono text-center text-sm" />
                  <input onInput={(e) => { e.currentTarget.value = e.currentTarget.value.replace(/[^0-9]/g, "").substring(0, 4); }} pattern="\\d{3,4}" maxLength={4} title="3 or 4 digit CVV/CVC" required type="text" placeholder="CVC" className="w-1/2 bg-white border border-slate-300 rounded-xl px-4 py-4 focus:outline-none focus:border-slate-900 focus:ring-1 focus:ring-slate-900 transition-all font-mono text-center text-sm" />
                </div>

                <div className="pt-6 mt-auto">
                  <button 
                    type="submit" 
                    disabled={isProcessing}
                    className="w-full py-4 bg-slate-900 text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-slate-800 transition-all disabled:opacity-70"
                  >
                    {isProcessing ? (
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    ) : (
                      <>Pay ${TOTAL_AMOUNT.toFixed(2)} <Navigation2 className="w-4 h-4 ml-1 rotate-90" /></>
                    )}
                  </button>
                </div>
              </form>
            </div>

          </div>
        </>
      ) : (
        <div className="absolute inset-0 bg-white z-50 flex flex-col items-center justify-center p-6 text-center animate-in slide-in-from-bottom duration-500">
           <div className="w-24 h-24 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6 relative">
             <MapPin className="w-10 h-10 text-green-500 absolute animate-bounce" />
             <div className="w-8 h-2 bg-green-200 rounded-[100%] absolute bottom-4 blur-[2px]"></div>
           </div>
           <h2 className="text-3xl font-black mb-2">Order Dispatched!</h2>
           <p className="text-slate-500 mb-8 max-w-sm mx-auto">Your payment was successful and your delivery is on its way to the marked location.</p>
           
           <button type="button" 
              onClick={() => { setIsSuccess(false); setStep(1); setPinPos(null); }}
              className="w-full max-w-xs py-4 bg-slate-100 hover:bg-slate-200 text-slate-900 font-bold rounded-xl transition-colors"
            >
              Back to Map
            </button>
        </div>
      )}

    </div>
  );
}
