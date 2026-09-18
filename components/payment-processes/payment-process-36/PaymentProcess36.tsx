"use client";
import React, { useState } from "react";
import { CreditCard, Info, CheckCircle2, ArrowRight } from "lucide-react";

export default function PaymentProcess36() {
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);

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

  // Reusable input component with tooltip support
  const TooltipInput = ({ 
    id, label, placeholder, tooltipText, type = "text", maxLength 
  }: { 
    id: string; label: string; placeholder: string; tooltipText: string; type?: string; maxLength?: number;
  }) => {
    const isActive = activeTooltip === id;
    
    return (
      <div className="relative">
        <div className="flex justify-between items-center mb-2">
          <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">
            {label}
          </label>
          <button 
            type="button"
            onMouseEnter={() => setActiveTooltip(id)}
            onMouseLeave={() => setActiveTooltip(null)}
            className="text-slate-400 hover:text-cyan-500 transition-colors"
          >
            <Info className="w-4 h-4" />
          </button>
        </div>
        
        <input required 
          id={id}
          type={type}
          maxLength={maxLength}
          placeholder={placeholder}
          onFocus={() => setActiveTooltip(id)}
          onBlur={() => setActiveTooltip(null)}
          className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-4 text-slate-900 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all font-medium"
         />

        {/* Tooltip Overlay */}
        <div 
          className={`absolute z-20 left-1/2 -translate-x-1/2 -top-12 px-3 py-2 bg-slate-800 text-white text-xs font-medium rounded-lg shadow-xl whitespace-nowrap transition-all duration-300 pointer-events-none ${
            isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
          }`}
        >
          {tooltipText}
          <div className="absolute left-1/2 -bottom-1 -translate-x-1/2 w-2 h-2 bg-slate-800 rotate-45"></div>
        </div>
      </div>
    );
  };

  return (
    <div className="w-full min-h-screen bg-cyan-950 flex items-center justify-center font-sans p-6 text-slate-100">
      
      {!isSuccess ? (
        <div className="max-w-md w-full bg-white rounded-3xl p-8 shadow-2xl text-slate-800 animate-in fade-in duration-500">
          
          <div className="flex items-center gap-3 mb-8 pb-6 border-b border-slate-100">
            <div className="w-12 h-12 bg-cyan-100 rounded-2xl flex items-center justify-center">
              <CreditCard className="w-6 h-6 text-cyan-600" />
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 leading-tight">Payment</h2>
              <p className="text-sm font-medium text-slate-500">Total: $299.00</p>
            </div>
          </div>

          <form onSubmit={handlePay} className="space-y-6">
            
            <TooltipInput 
              id="name" 
              label="Cardholder Name" 
              placeholder="e.g. Jane Doe" 
              tooltipText="Exact name as it appears on your card" 
            />

            <div className="relative">
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">
                  Card Number
                </label>
                <button 
                  type="button"
                  onMouseEnter={() => setActiveTooltip('cardNumber')}
                  onMouseLeave={() => setActiveTooltip(null)}
                  className="text-slate-400 hover:text-cyan-500 transition-colors"
                >
                  <Info className="w-4 h-4" />
                </button>
              </div>
              
              <div className="relative">
                <CreditCard className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input onInput={(e) => { e.currentTarget.value = e.currentTarget.value.replace(/[^0-9\s]/g, "").substring(0, 19); }} pattern="[\\d\\s]{16,19}" maxLength={19} title="16 digit card number" 
                  required 
                  type="text" 
                 
                  placeholder="0000 0000 0000 0000" 
                  onFocus={() => setActiveTooltip('cardNumber')}
                  onBlur={() => setActiveTooltip(null)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-12 pr-4 py-4 text-slate-900 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all font-mono tracking-widest text-sm" 
                 minLength={16} />
              </div>

              {/* Tooltip Overlay */}
              <div 
                className={`absolute z-20 left-1/2 -translate-x-1/2 -top-12 px-3 py-2 bg-slate-800 text-white text-xs font-medium rounded-lg shadow-xl whitespace-nowrap transition-all duration-300 pointer-events-none ${
                  activeTooltip === 'cardNumber' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
                }`}
              >
                The 16-digit number on the front
                <div className="absolute left-1/2 -bottom-1 -translate-x-1/2 w-2 h-2 bg-slate-800 rotate-45"></div>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-1/2 relative">
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">
                    Expiry
                  </label>
                  <button 
                    type="button"
                    onMouseEnter={() => setActiveTooltip('expiry')}
                    onMouseLeave={() => setActiveTooltip(null)}
                    className="text-slate-400 hover:text-cyan-500 transition-colors"
                  >
                    <Info className="w-4 h-4" />
                  </button>
                </div>
                
                <input onInput={(e) => { e.currentTarget.value = e.currentTarget.value.replace(/[^0-9\/]/g, "").substring(0, 5); }} pattern="(0[1-9]|1[0-2])\\/?([0-9]{2})" maxLength={5} title="Format: MM/YY" 
                  required 
                  type="text" 
                 
                  placeholder="MM/YY" 
                  onFocus={() => setActiveTooltip('expiry')}
                  onBlur={() => setActiveTooltip(null)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-4 text-slate-900 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all font-mono tracking-widest text-center text-sm" 
                 minLength={5} />

                <div 
                  className={`absolute z-20 left-1/2 -translate-x-1/2 -top-12 px-3 py-2 bg-slate-800 text-white text-xs font-medium rounded-lg shadow-xl whitespace-nowrap transition-all duration-300 pointer-events-none ${
                    activeTooltip === 'expiry' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
                  }`}
                >
                  Valid thru date (MM/YY)
                  <div className="absolute left-1/2 -bottom-1 -translate-x-1/2 w-2 h-2 bg-slate-800 rotate-45"></div>
                </div>
              </div>

              <div className="w-1/2 relative">
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">
                    CVV
                  </label>
                  <button 
                    type="button"
                    onMouseEnter={() => setActiveTooltip('cvv')}
                    onMouseLeave={() => setActiveTooltip(null)}
                    className="text-slate-400 hover:text-cyan-500 transition-colors"
                  >
                    <Info className="w-4 h-4" />
                  </button>
                </div>
                
                <input onInput={(e) => { e.currentTarget.value = e.currentTarget.value.replace(/[^a-zA-Z0-9\s\-\,]/g, ""); }} 
                  required 
                  type="text" 
                  maxLength={4}
                  placeholder="123" 
                  onFocus={() => setActiveTooltip('cvv')}
                  onBlur={() => setActiveTooltip(null)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-4 text-slate-900 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all font-mono tracking-widest text-center text-sm" 
                 minLength={3} />

                <div 
                  className={`absolute z-20 right-0 -top-12 px-3 py-2 bg-slate-800 text-white text-xs font-medium rounded-lg shadow-xl whitespace-nowrap transition-all duration-300 pointer-events-none ${
                    activeTooltip === 'cvv' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
                  }`}
                >
                  3 digits on the back of card
                  <div className="absolute right-4 -bottom-1 w-2 h-2 bg-slate-800 rotate-45"></div>
                </div>
              </div>
            </div>

            {serverError && (
              <div className="text-red-500 text-sm font-semibold mb-4 text-center bg-red-50 p-3 rounded-xl border border-red-200 animate-in fade-in zoom-in duration-300">
                {serverError}
              </div>
            )}
            <button 
              type="submit" 
              disabled={isProcessing}
              className="w-full py-5 mt-2 bg-cyan-600 text-white rounded-xl font-bold text-lg flex items-center justify-center gap-2 hover:bg-cyan-700 transition-all shadow-lg shadow-cyan-600/30 disabled:opacity-70 disabled:shadow-none"
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
        <div className="max-w-md w-full bg-cyan-900/50 backdrop-blur border border-cyan-800 rounded-3xl p-10 shadow-2xl text-center animate-in zoom-in duration-500">
           <div className="w-24 h-24 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
             <CheckCircle2 className="w-12 h-12 text-cyan-400" />
           </div>
           <h2 className="text-3xl font-black text-white mb-2">Thank You</h2>
           <p className="text-cyan-200 mb-8">Your payment was completed successfully.</p>
           <button type="button" 
              onClick={() => setIsSuccess(false)}
              className="px-8 py-4 bg-cyan-800 hover:bg-cyan-700 text-white font-bold rounded-xl transition-colors"
            >
              Return Home
            </button>
        </div>
      )}

    </div>
  );
}
