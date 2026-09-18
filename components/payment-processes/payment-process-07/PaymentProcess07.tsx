"use client";
import React, { useState } from "react";
import { ArrowRight, Check, X, ShieldCheck } from "lucide-react";

export default function PaymentProcess07() {
  const [step, setStep] = useState(1);
  const [isProcessing, setIsProcessing] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);

  // Form State
  const [email, setEmail] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvc, setCvc] = useState("");

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

  if (isSuccess) {
    return (
      <div className="w-full min-h-screen bg-black text-white flex flex-col items-center justify-center p-6 font-sans">
        <div className="animate-in slide-in-from-bottom-8 duration-700 ease-out flex flex-col items-center">
          <div className="w-32 h-32 mb-8 rounded-full border border-white/20 flex items-center justify-center">
            <Check className="w-12 h-12 text-white" />
          </div>
          <h1 className="text-5xl md:text-7xl font-light tracking-tighter mb-6">Payment Secured.</h1>
          <p className="text-xl text-white/50 mb-12 max-w-lg text-center font-light leading-relaxed">
            Your transaction was completed successfully. We have sent the details to {email || 'your email'}.
          </p>
          <button type="button" 
            onClick={() => setIsSuccess(false)}
            className="group flex items-center gap-4 text-xl font-light hover:text-white/70 transition-colors"
          >
            <span className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:border-white/50 transition-colors">
              <X className="w-5 h-5" />
            </span>
            Close Checkout
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen bg-white text-black flex flex-col font-sans selection:bg-black selection:text-white">
      
      {/* Immersive Header */}
      <header className="p-8 md:p-12 flex justify-between items-start">
        <div className="text-2xl font-bold tracking-tighter">MINIMAL.</div>
        <div className="text-right">
          <div className="text-sm font-semibold uppercase tracking-widest text-black/40 mb-1">Total Due</div>
          <div className="text-3xl md:text-4xl font-light tracking-tighter">$840.00</div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col items-center justify-center p-8 w-full max-w-3xl mx-auto">
        
        <form onSubmit={handlePay} className="w-full relative min-h-[400px] flex flex-col justify-center">
          
          {/* Step Indicator */}
          <div className="absolute top-0 left-0 w-full flex items-center gap-4 mb-16 opacity-30">
            <div className={`h-1 flex-1 transition-all duration-700 ${step >= 1 ? 'bg-black' : 'bg-black/10'}`}></div>
            <div className={`h-1 flex-1 transition-all duration-700 ${step >= 2 ? 'bg-black' : 'bg-black/10'}`}></div>
          </div>

          {/* Step 1: Identity */}
          <div className={`transition-all duration-700 absolute w-full ${step === 1 ? 'opacity-100 translate-x-0 pointer-events-auto' : 'opacity-0 -translate-x-20 pointer-events-none'}`}>
            <h2 className="text-4xl md:text-6xl font-light tracking-tighter mb-12">Who is completing this purchase?</h2>
            
            <div className="group">
              <input 
                type="email" 
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address" 
                className="w-full text-2xl md:text-4xl font-light py-4 bg-transparent border-b-2 border-black/10 focus:border-black outline-none placeholder-black/20 transition-colors"
                autoFocus
               minLength={5} maxLength={100} />
            </div>

            <div className="mt-16 flex justify-end">
              <button 
                type="button"
                onClick={() => { if(email) setStep(2) }}
                className={`group flex items-center gap-4 text-xl font-light transition-all ${email ? 'text-black hover:opacity-70' : 'text-black/20 cursor-not-allowed'}`}
                disabled={!email}
              >
                Next Step
                <span className={`w-14 h-14 rounded-full border flex items-center justify-center transition-all ${email ? 'border-black group-hover:bg-black group-hover:text-white' : 'border-black/20'}`}>
                  <ArrowRight className="w-6 h-6" />
                </span>
              </button>
            </div>
          </div>

          {/* Step 2: Payment */}
          <div className={`transition-all duration-700 absolute w-full ${step === 2 ? 'opacity-100 translate-x-0 pointer-events-auto' : 'opacity-0 translate-x-20 pointer-events-none'}`}>
            <h2 className="text-4xl md:text-6xl font-light tracking-tighter mb-12">How would you like to pay?</h2>
            
            <div className="space-y-8">
              <div>
                <input 
                  type="text" 
                  required
                  maxLength={19}
                  value={cardNumber}
                  onChange={(e) => setCardNumber(e.target.value)}
                  placeholder="Card Number" 
                  className="w-full text-2xl md:text-4xl font-light py-4 bg-transparent border-b-2 border-black/10 focus:border-black outline-none placeholder-black/20 transition-colors font-mono tracking-tight"
                 minLength={16} />
              </div>
              
              <div className="flex gap-8">
                <div className="flex-1">
                  <input 
                    type="text" 
                    required
                    maxLength={5}
                    value={expiry}
                    onChange={(e) => setExpiry(e.target.value)}
                    placeholder="MM/YY" 
                    className="w-full text-2xl md:text-4xl font-light py-4 bg-transparent border-b-2 border-black/10 focus:border-black outline-none placeholder-black/20 transition-colors font-mono tracking-tight"
                   minLength={5} />
                </div>
                <div className="flex-1">
                  <input 
                    type="text" 
                    required
                    maxLength={4}
                    value={cvc}
                    onChange={(e) => setCvc(e.target.value)}
                    placeholder="CVC" 
                    className="w-full text-2xl md:text-4xl font-light py-4 bg-transparent border-b-2 border-black/10 focus:border-black outline-none placeholder-black/20 transition-colors font-mono tracking-tight"
                   minLength={3} />
                </div>
              </div>
            </div>

            <div className="mt-16 flex justify-between items-center">
              <button 
                type="button"
                onClick={() => setStep(1)}
                className="text-black/40 hover:text-black transition-colors font-semibold tracking-widest uppercase text-sm"
              >
                Go Back
              </button>

              {serverError && (
              <div className="text-red-500 text-sm font-semibold mb-4 text-center bg-red-50 p-3 rounded-xl border border-red-200 animate-in fade-in zoom-in duration-300">
                {serverError}
              </div>
            )}
            <button 
                type="submit"
                disabled={isProcessing || !cardNumber || !expiry || !cvc}
                className="group flex items-center gap-4 text-xl font-bold transition-all disabled:opacity-30 disabled:cursor-not-allowed"
              >
                {isProcessing ? 'Authorizing...' : 'Pay Now'}
                {!isProcessing && (
                  <span className="w-14 h-14 rounded-full bg-black text-white flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Check className="w-6 h-6" />
                  </span>
                )}
              </button>
            </div>
          </div>

        </form>
      </main>

      <footer className="p-8 flex justify-center text-black/30 items-center gap-2 text-sm font-semibold tracking-widest uppercase">
        <ShieldCheck className="w-5 h-5" /> 256-bit Secure Connection
      </footer>

    </div>
  );
}
