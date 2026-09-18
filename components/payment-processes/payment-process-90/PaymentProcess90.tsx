"use client";
import React, { useState } from "react";
import { CreditCard, CheckCircle2, Mic, Keyboard, CornerDownLeft } from "lucide-react";

export default function PaymentProcess90() {
  const TOTAL_AMOUNT = 42.00;
  
  const [isProcessing, setIsProcessing] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isListening, setIsListening] = useState<string | null>(null); // tracks which field is "listening"

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

  const simulateVoiceInput = (field: string) => {
    setIsListening(field);
    setTimeout(() => {
      setIsListening(null);
    }, 1500);
  };

  return (
    <div className="w-full min-h-[700px] bg-emerald-50/50 flex justify-center font-sans p-4 md:p-12 text-emerald-950">
      
      {!isSuccess ? (
        <div className="w-full max-w-4xl bg-white rounded-3xl shadow-lg border border-emerald-100 flex flex-col md:flex-row overflow-hidden">
          
          {/* Summary Sidebar (Left on Desktop, Top on Mobile) */}
          <div className="w-full md:w-1/3 bg-emerald-900 text-emerald-50 p-8 flex flex-col">
            <h2 className="text-2xl md:text-xl font-bold mb-8 md:mb-12">Order Summary</h2>
            
            <div className="flex-1 space-y-4">
              <div className="flex justify-between">
                <span className="text-emerald-300">Basic Plan</span>
                <span>$40.00</span>
              </div>
              <div className="flex justify-between">
                <span className="text-emerald-300">Tax</span>
                <span>$2.00</span>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-emerald-800">
              <div className="flex justify-between items-end">
                <span className="font-medium text-emerald-300">Total</span>
                <span className="text-4xl font-black text-white">${TOTAL_AMOUNT.toFixed(2)}</span>
              </div>
            </div>

            {/* Desktop Hint */}
            <div className="hidden md:flex mt-12 bg-emerald-800/50 p-4 rounded-xl items-start gap-3">
              <Keyboard className="w-5 h-5 text-emerald-400 shrink-0" />
              <p className="text-xs text-emerald-200">
                Optimized for keyboard entry. Use <kbd className="bg-emerald-950 px-1 py-0.5 rounded text-[10px]">Tab</kbd> to navigate and <kbd className="bg-emerald-950 px-1 py-0.5 rounded text-[10px]">Enter</kbd> to submit.
              </p>
            </div>
          </div>

          {/* Form Area */}
          <div className="w-full md:w-2/3 p-6 md:p-12">
            <div className="md:hidden flex items-center justify-center gap-2 text-emerald-600 mb-8 bg-emerald-50 py-3 rounded-full font-medium">
              <Mic className="w-5 h-5 animate-pulse" /> Tap mic to speak details
            </div>

            <h3 className="text-xl font-bold mb-6 hidden md:block">Payment Information</h3>

            <form onSubmit={handlePay} className="space-y-8 md:space-y-5">
              
              <div className="space-y-2">
                <label className="text-sm font-semibold md:text-xs md:uppercase md:tracking-wider text-emerald-800">Name on Card</label>
                <div className="flex gap-2">
                  <input pattern="[a-zA-Z\\s\\-]+" title="Letters only" 
                    required 
                    type="text" 
                    className="w-full bg-white border border-emerald-200 md:border-emerald-300 rounded-2xl md:rounded-lg px-5 py-4 md:py-2.5 focus:outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 transition-all text-lg md:text-sm"  minLength={2} maxLength={50} />
                  {/* Mobile Voice Button */}
                  <button 
                    type="button" 
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
      const originalHandler = () => simulateVoiceInput('name');
      if (typeof originalHandler === 'function') (originalHandler as any)(e);
      else if (typeof originalHandler === 'object' && originalHandler !== null) { /* ignore event objects */ }
    }}
                    className={`md:hidden shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center transition-all ${isListening === 'name' ? 'bg-red-100 text-red-500' : 'bg-emerald-100 text-emerald-600'}`}
                  >
                    <Mic className={`w-6 h-6 ${isListening === 'name' ? 'animate-pulse' : ''}`} />
                  </button>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold md:text-xs md:uppercase md:tracking-wider text-emerald-800">Card Number</label>
                <div className="flex gap-2">
                  <div className="relative w-full">
                    <CreditCard className="absolute left-5 md:left-3 top-1/2 -translate-y-1/2 w-5 h-5 md:w-4 md:h-4 text-emerald-400" />
                    <input onInput={(e) => { e.currentTarget.value = e.currentTarget.value.replace(/[^0-9\s]/g, "").substring(0, 19); }} pattern="[\\d\\s]{16,19}" maxLength={19} title="16 digit card number" 
                      required 
                      type="text" 
                      placeholder="0000 0000 0000 0000"
                      className="w-full bg-white border border-emerald-200 md:border-emerald-300 rounded-2xl md:rounded-lg pl-12 md:pl-10 pr-5 md:pr-3 py-4 md:py-2.5 focus:outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 transition-all text-lg md:text-sm font-mono" 
                     minLength={16} />
                  </div>
                  {/* Mobile Voice Button */}
                  <button 
                    type="button" 
                    onClick={() => simulateVoiceInput('card')}
                    className={`md:hidden shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center transition-all ${isListening === 'card' ? 'bg-red-100 text-red-500' : 'bg-emerald-100 text-emerald-600'}`}
                  >
                    <Mic className={`w-6 h-6 ${isListening === 'card' ? 'animate-pulse' : ''}`} />
                  </button>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-8 md:gap-4">
                <div className="space-y-2 w-full md:w-1/2">
                  <label className="text-sm font-semibold md:text-xs md:uppercase md:tracking-wider text-emerald-800">Expiry (MM/YY)</label>
                  <div className="flex gap-2">
                    <input onInput={(e) => { e.currentTarget.value = e.currentTarget.value.replace(/[^0-9\/]/g, "").substring(0, 5); }} pattern="(0[1-9]|1[0-2])\\/?([0-9]{2})" maxLength={5} title="Format: MM/YY" 
                      required 
                      type="text" 
                      placeholder="MM/YY"
                      className="w-full bg-white border border-emerald-200 md:border-emerald-300 rounded-2xl md:rounded-lg px-5 md:px-3 py-4 md:py-2.5 focus:outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 transition-all text-lg md:text-sm font-mono text-center md:text-left" 
                     minLength={5} />
                    {/* Mobile Voice Button */}
                    <button 
                      type="button" 
                      onClick={() => simulateVoiceInput('exp')}
                      className={`md:hidden shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center transition-all ${isListening === 'exp' ? 'bg-red-100 text-red-500' : 'bg-emerald-100 text-emerald-600'}`}
                    >
                      <Mic className={`w-6 h-6 ${isListening === 'exp' ? 'animate-pulse' : ''}`} />
                    </button>
                  </div>
                </div>

                <div className="space-y-2 w-full md:w-1/2">
                  <label className="text-sm font-semibold md:text-xs md:uppercase md:tracking-wider text-emerald-800">Security Code</label>
                  <div className="flex gap-2">
                    <input onInput={(e) => { e.currentTarget.value = e.currentTarget.value.replace(/[^0-9]/g, "").substring(0, 4); }} pattern="\\d{3,4}" maxLength={4} title="3 or 4 digit CVV/CVC" 
                      required 
                      type="text" 
                      placeholder="CVC"
                      className="w-full bg-white border border-emerald-200 md:border-emerald-300 rounded-2xl md:rounded-lg px-5 md:px-3 py-4 md:py-2.5 focus:outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 transition-all text-lg md:text-sm font-mono text-center md:text-left" 
                     minLength={3} />
                    {/* Mobile Voice Button */}
                    <button 
                      type="button" 
                      onClick={() => simulateVoiceInput('cvc')}
                      className={`md:hidden shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center transition-all ${isListening === 'cvc' ? 'bg-red-100 text-red-500' : 'bg-emerald-100 text-emerald-600'}`}
                    >
                      <Mic className={`w-6 h-6 ${isListening === 'cvc' ? 'animate-pulse' : ''}`} />
                    </button>
                  </div>
                </div>
              </div>

              <div className="pt-8 md:pt-4">
                {/* Mobile Button */}
                {serverError && (
              <div className="text-red-500 text-sm font-semibold mb-4 text-center bg-red-50 p-3 rounded-xl border border-red-200 animate-in fade-in zoom-in duration-300">
                {serverError}
              </div>
            )}
            <button 
                  type="submit" 
                  disabled={isProcessing}
                  className="md:hidden w-full py-5 bg-emerald-600 text-white rounded-2xl font-bold text-xl flex items-center justify-center gap-2 shadow-lg shadow-emerald-200 disabled:opacity-70"
                >
                  {isProcessing ? "Processing..." : "Confirm Payment"}
                </button>
                
                {/* Desktop Button */}
                <button 
                  type="submit" 
                  disabled={isProcessing}
                  className="hidden md:flex w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg font-bold text-sm items-center justify-center gap-2 transition-colors disabled:opacity-70"
                >
                  {isProcessing ? "Processing..." : <>Pay ${TOTAL_AMOUNT.toFixed(2)} <CornerDownLeft className="w-4 h-4 ml-1 opacity-50" /></>}
                </button>
              </div>
            </form>
          </div>

        </div>
      ) : (
        <div className="w-full max-w-md bg-white rounded-3xl p-12 text-center shadow-lg border border-emerald-100 animate-in zoom-in duration-500">
           <div className="w-20 h-20 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-6">
             <CheckCircle2 className="w-10 h-10 text-emerald-500" strokeWidth={2.5} />
           </div>
           <h2 className="text-3xl font-bold mb-2 text-emerald-950">Done!</h2>
           <p className="text-emerald-600 mb-8">Payment processed successfully.</p>
           <button type="button" 
              onClick={() => setIsSuccess(false)}
              className="w-full py-4 bg-emerald-900 hover:bg-emerald-800 text-white font-medium rounded-xl transition-colors"
            >
              Back to Home
            </button>
        </div>
      )}
    </div>
  );
}
