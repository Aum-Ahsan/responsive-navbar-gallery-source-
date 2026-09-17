"use client";
import React, { useState } from "react";
import { CreditCard, ArrowRight, CheckCircle2, MapPin, User, ChevronDown, Check } from "lucide-react";

type Step = 1 | 2 | 3;

export default function PaymentProcess83() {
  const TOTAL_AMOUNT = 149.50;
  
  const [activeStep, setActiveStep] = useState<Step>(1);
  const [completedSteps, setCompletedSteps] = useState<Step[]>([]);
  
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const nextStep = (step: Step) => {
    setCompletedSteps([...completedSteps, activeStep]);
    setActiveStep(step);
  };

  const handlePay = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
    }, 2000);
  };

  const steps = [
    { id: 1, title: "Account", icon: User },
    { id: 2, title: "Shipping", icon: MapPin },
    { id: 3, title: "Payment", icon: CreditCard },
  ] as const;

  return (
    <div className="w-full min-h-[700px] bg-slate-100 flex items-center justify-center font-sans p-4 md:p-8 text-slate-800">
      
      {!isSuccess ? (
        <div className="w-full max-w-3xl bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden relative z-10 flex flex-col h-full md:h-auto min-h-[600px] md:min-h-0">
          
          <div className="p-6 md:p-8 border-b border-slate-100 bg-slate-50 flex justify-between items-center">
            <h2 className="text-2xl font-black text-slate-900">Checkout</h2>
            <div className="text-right">
              <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">Total</p>
              <p className="text-xl font-black">${TOTAL_AMOUNT.toFixed(2)}</p>
            </div>
          </div>

          {/* Desktop Horizontal Progress Bar (Hidden on Mobile) */}
          <div className="hidden md:flex items-center justify-between p-8 bg-white border-b border-slate-100 relative">
            {/* Connecting Line */}
            <div className="absolute top-1/2 left-16 right-16 h-1 bg-slate-100 -translate-y-1/2 z-0"></div>
            
            {steps.map((step) => {
              const Icon = step.icon;
              const isActive = activeStep === step.id;
              const isCompleted = completedSteps.includes(step.id);
              
              return (
                <div key={step.id} className="relative z-10 flex flex-col items-center gap-2 bg-white px-4">
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
      const originalHandler = () => setActiveStep(step.id);
      if (typeof originalHandler === 'function') (originalHandler as any)(e);
      else if (typeof originalHandler === 'object' && originalHandler !== null) { /* ignore event objects */ }
    }}
                    className={`w-12 h-12 rounded-full flex items-center justify-center border-4 transition-all ${
                      isActive ? 'border-blue-500 bg-blue-50 text-blue-500' : 
                      isCompleted ? 'border-green-500 bg-green-50 text-green-500' : 
                      'border-slate-200 bg-white text-slate-400'
                    }`}
                  >
                    {isCompleted && !isActive ? <Check strokeWidth={3} className="w-5 h-5" /> : <Icon className="w-5 h-5" />}
                  </button>
                  <span className={`text-xs font-bold uppercase tracking-widest ${isActive ? 'text-blue-500' : isCompleted ? 'text-green-500' : 'text-slate-400'}`}>
                    {step.title}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Main Content Area */}
          <div className="flex-1 flex flex-col md:block overflow-y-auto bg-slate-50 md:bg-white p-4 md:p-8">
            
            {/* Step 1: Account */}
            <div className="mb-4 md:mb-0">
              {/* Mobile Accordion Header */}
              <button type="button" 
                onClick={() => setActiveStep(1)}
                className={`md:hidden w-full flex items-center justify-between p-4 rounded-xl font-bold bg-white border shadow-sm transition-all ${activeStep === 1 ? 'border-blue-500 text-blue-600' : 'border-slate-200 text-slate-600'}`}
              >
                <div className="flex items-center gap-3">
                  <User className="w-5 h-5" /> 1. Account
                </div>
                <ChevronDown className={`w-5 h-5 transition-transform ${activeStep === 1 ? 'rotate-180' : ''}`} />
              </button>

              {/* Step 1 Content */}
              <div className={`mt-2 md:mt-0 bg-white md:bg-transparent p-4 md:p-0 rounded-xl md:rounded-none border md:border-0 border-slate-200 ${activeStep === 1 ? 'block animate-in fade-in slide-in-from-top-2' : 'hidden'}`}>
                <h3 className="hidden md:block text-xl font-black mb-6">Create Account</h3>
                <div className="space-y-4">
                  <input pattern="[a-zA-Z\\s\\-]+" title="Letters only" required type="email" placeholder="Email Address" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors" />
                  <input pattern="[a-zA-Z\\s\\-]+" title="Letters only" required type="password" placeholder="Password (Optional)" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors" />
                  <button type="button" onClick={(e) => {
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
      const originalHandler = () => nextStep(2);
      if (typeof originalHandler === 'function') (originalHandler as any)(e);
    }} className="w-full py-4 mt-4 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-colors">
                    Continue to Shipping
                  </button>
                </div>
              </div>
            </div>

            {/* Step 2: Shipping */}
            <div className="mb-4 md:mb-0">
              {/* Mobile Accordion Header */}
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
      const originalHandler = () => setActiveStep(2);
      if (typeof originalHandler === 'function') (originalHandler as any)(e);
      else if (typeof originalHandler === 'object' && originalHandler !== null) { /* ignore event objects */ }
    }}
                className={`md:hidden w-full flex items-center justify-between p-4 rounded-xl font-bold bg-white border shadow-sm transition-all ${activeStep === 2 ? 'border-blue-500 text-blue-600' : 'border-slate-200 text-slate-600'}`}
              >
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5" /> 2. Shipping
                </div>
                <ChevronDown className={`w-5 h-5 transition-transform ${activeStep === 2 ? 'rotate-180' : ''}`} />
              </button>

              {/* Step 2 Content */}
              <div className={`mt-2 md:mt-0 bg-white md:bg-transparent p-4 md:p-0 rounded-xl md:rounded-none border md:border-0 border-slate-200 ${activeStep === 2 ? 'block animate-in fade-in slide-in-from-top-2' : 'hidden'}`}>
                <h3 className="hidden md:block text-xl font-black mb-6">Shipping Address</h3>
                <div className="space-y-4">
                  <input onInput={(e) => { e.currentTarget.value = e.currentTarget.value.replace(/[^a-zA-Z\s\-]/g, ""); }} pattern="[a-zA-Z\\s\\-]+" title="Letters only" required type="text" placeholder="Full Name" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors" />
                  <input onInput={(e) => { e.currentTarget.value = e.currentTarget.value.replace(/[^a-zA-Z0-9\s\-\,]/g, ""); }} pattern="[a-zA-Z\\s\\-]+" title="Letters only" required type="text" placeholder="Address" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors" />
                  <div className="flex gap-4">
                    <input onInput={(e) => { e.currentTarget.value = e.currentTarget.value.replace(/[^a-zA-Z\s\-]/g, ""); }} pattern="[a-zA-Z\\s\\-]+" title="Letters only" required type="text" placeholder="City" className="w-1/2 bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors" />
                    <input onInput={(e) => { e.currentTarget.value = e.currentTarget.value.replace(/[^0-9]/g, "").substring(0, 5); }} pattern="\\d{5}" maxLength={5} title="5 digit zip code" required type="text" placeholder="ZIP" className="w-1/2 bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors" />
                  </div>
                  <button type="button" onClick={(e) => {
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
      const originalHandler = () => nextStep(3);
      if (typeof originalHandler === 'function') (originalHandler as any)(e);
    }} className="w-full py-4 mt-4 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-colors">
                    Continue to Payment
                  </button>
                </div>
              </div>
            </div>

            {/* Step 3: Payment */}
            <div>
              {/* Mobile Accordion Header */}
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
      const originalHandler = () => setActiveStep(3);
      if (typeof originalHandler === 'function') (originalHandler as any)(e);
      else if (typeof originalHandler === 'object' && originalHandler !== null) { /* ignore event objects */ }
    }}
                className={`md:hidden w-full flex items-center justify-between p-4 rounded-xl font-bold bg-white border shadow-sm transition-all ${activeStep === 3 ? 'border-blue-500 text-blue-600' : 'border-slate-200 text-slate-600'}`}
              >
                <div className="flex items-center gap-3">
                  <CreditCard className="w-5 h-5" /> 3. Payment
                </div>
                <ChevronDown className={`w-5 h-5 transition-transform ${activeStep === 3 ? 'rotate-180' : ''}`} />
              </button>

              {/* Step 3 Content */}
              <div className={`mt-2 md:mt-0 bg-white md:bg-transparent p-4 md:p-0 rounded-xl md:rounded-none border md:border-0 border-slate-200 ${activeStep === 3 ? 'block animate-in fade-in slide-in-from-top-2' : 'hidden'}`}>
                <h3 className="hidden md:block text-xl font-black mb-6">Payment Details</h3>
                <form onSubmit={handlePay} className="space-y-4">
                  <div className="relative">
                    <CreditCard className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <input onInput={(e) => { e.currentTarget.value = e.currentTarget.value.replace(/[^0-9\s]/g, "").substring(0, 19); }} pattern="[\\d\\s]{16,19}" maxLength={19} title="16 digit card number" required type="text" placeholder="Card Number" className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-12 pr-4 py-4 focus:outline-none focus:border-blue-500 transition-colors font-mono tracking-widest text-sm" />
                  </div>
                  <div className="flex gap-4">
                    <input onInput={(e) => { e.currentTarget.value = e.currentTarget.value.replace(/[^0-9\/]/g, "").substring(0, 5); }} pattern="(0[1-9]|1[0-2])\\/?([0-9]{2})" maxLength={5} title="Format: MM/YY" required type="text" placeholder="MM/YY" className="w-1/2 bg-slate-50 border border-slate-200 rounded-xl px-4 py-4 focus:outline-none focus:border-blue-500 transition-colors font-mono tracking-widest text-center text-sm" />
                    <input onInput={(e) => { e.currentTarget.value = e.currentTarget.value.replace(/[^0-9]/g, "").substring(0, 4); }} pattern="\\d{3,4}" maxLength={4} title="3 or 4 digit CVV/CVC" required type="text" placeholder="CVV" className="w-1/2 bg-slate-50 border border-slate-200 rounded-xl px-4 py-4 focus:outline-none focus:border-blue-500 transition-colors font-mono tracking-widest text-center text-sm" />
                  </div>
                  <button 
                    type="submit" 
                    disabled={isProcessing}
                    className="w-full py-5 mt-4 bg-slate-900 text-white rounded-xl font-bold text-lg flex items-center justify-center gap-2 hover:bg-slate-800 transition-all shadow-lg disabled:opacity-70"
                  >
                    {isProcessing ? (
                      <div className="w-6 h-6 border-4 border-white/30 border-t-white rounded-full animate-spin"></div>
                    ) : (
                      <>Pay ${TOTAL_AMOUNT.toFixed(2)} <ArrowRight className="w-5 h-5" /></>
                    )}
                  </button>
                </form>
              </div>
            </div>

          </div>
        </div>
      ) : (
        <div className="max-w-md w-full bg-white rounded-3xl p-12 text-center shadow-xl border border-slate-200 animate-in zoom-in duration-500">
           <div className="w-24 h-24 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6">
             <CheckCircle2 className="w-12 h-12 text-blue-500" strokeWidth={3} />
           </div>
           <h2 className="text-3xl font-black mb-2 text-slate-900">Success!</h2>
           <p className="text-slate-500 mb-8 font-medium">Your payment was processed successfully.</p>
           <button type="button" 
              onClick={() => { setIsSuccess(false); setActiveStep(1); setCompletedSteps([]); }}
              className="w-full py-4 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-xl transition-colors"
            >
              Done
            </button>
        </div>
      )}

    </div>
  );
}
