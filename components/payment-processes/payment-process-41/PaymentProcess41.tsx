"use client";
import React, { useState } from "react";
import { Check, ChevronRight, ChevronLeft, CreditCard, Truck, FileText } from "lucide-react";

export default function PaymentProcess41() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    zip: "",
    cardNumber: "",
    expiry: "",
    cvv: ""
  });
  
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const updateForm = (field: keyof typeof formData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleNext = () => {
    if (step < 3) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const handlePay = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
    }, 2000);
  };

  const steps = [
    { num: 1, title: "Shipping", icon: Truck },
    { num: 2, title: "Payment", icon: CreditCard },
    { num: 3, title: "Review", icon: FileText }
  ];

  if (isSuccess) {
    return (
      <div className="w-full min-h-[700px] bg-slate-50 flex items-center justify-center p-6 font-sans">
        <div className="bg-white p-12 rounded-[2rem] shadow-xl text-center max-w-md w-full border border-slate-100 animate-in zoom-in-95 duration-500">
          <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Check className="w-12 h-12 text-green-600" strokeWidth={3} />
          </div>
          <h2 className="text-3xl font-black text-slate-900 mb-2">Order Confirmed</h2>
          <p className="text-slate-500 mb-8">
            Thank you, {formData.firstName || "Customer"}. Your order has been placed.
          </p>
          <button type="button" 
            onClick={() => {
              setIsSuccess(false);
              setStep(1);
              setFormData({ firstName: "", lastName: "", address: "", city: "", zip: "", cardNumber: "", expiry: "", cvv: "" });
            }} 
            className="w-full py-4 bg-slate-900 text-white rounded-xl font-bold hover:bg-slate-800 transition-colors"
          >
            Shop Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full min-h-[700px] bg-slate-50 flex flex-col items-center justify-center font-sans p-6">
      
      <div className="max-w-2xl w-full">
        
        {/* Progress Tracker */}
        <div className="mb-8 relative px-4">
          <div className="absolute top-1/2 left-0 w-full h-1 bg-slate-200 -translate-y-1/2 z-0 rounded-full"></div>
          <div 
            className="absolute top-1/2 left-0 h-1 bg-indigo-600 -translate-y-1/2 z-0 rounded-full transition-all duration-500 ease-in-out"
            style={{ width: `${((step - 1) / 2) * 100}%` }}
          ></div>

          <div className="flex justify-between relative z-10">
            {steps.map((s) => {
              const Icon = s.icon;
              const isActive = s.num === step;
              const isPassed = s.num < step;
              
              return (
                <div key={s.num} className="flex flex-col items-center gap-2">
                  <div 
                    className={`w-12 h-12 rounded-full flex items-center justify-center border-4 transition-all duration-300 ${
                      isActive 
                        ? 'bg-indigo-600 border-indigo-100 text-white shadow-lg shadow-indigo-600/30' 
                        : isPassed 
                          ? 'bg-indigo-600 border-indigo-600 text-white' 
                          : 'bg-white border-slate-200 text-slate-400'
                    }`}
                  >
                    {isPassed ? <Check className="w-5 h-5" /> : <Icon className="w-5 h-5" />}
                  </div>
                  <span className={`text-xs font-bold uppercase tracking-wider ${isActive ? 'text-indigo-600' : isPassed ? 'text-slate-800' : 'text-slate-400'}`}>
                    {s.title}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Form Container */}
        <div className="bg-white rounded-[2rem] shadow-xl border border-slate-200 overflow-hidden relative min-h-[400px]">
          
          <div className="p-8 md:p-10">
            {/* Step 1: Shipping */}
            {step === 1 && (
              <div className="animate-in slide-in-from-right-8 fade-in duration-500">
                <h2 className="text-2xl font-black text-slate-900 mb-6">Shipping Address</h2>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="w-1/2">
                      <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">First Name</label>
                      <input pattern="[a-zA-Z\\s\\-]+" title="Letters only" required 
                        type="text" 
                        value={formData.firstName}
                        onChange={(e) => updateForm('firstName', e.target.value)}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-indigo-500 transition-colors" 
                       minLength={2} maxLength={50} />
                    </div>
                    <div className="w-1/2">
                      <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Last Name</label>
                      <input pattern="[a-zA-Z\\s\\-]+" title="Letters only" required 
                        type="text" 
                        value={formData.lastName}
                        onChange={(e) => updateForm('lastName', e.target.value)}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-indigo-500 transition-colors" 
                       minLength={2} maxLength={50} />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Street Address</label>
                    <input required 
                      type="text" 
                      value={formData.address}
                      onChange={(e) => updateForm('address', e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-indigo-500 transition-colors" 
                     minLength={2} maxLength={50} />
                  </div>
                  <div className="flex gap-4">
                    <div className="w-2/3">
                      <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">City</label>
                      <input pattern="[a-zA-Z\\s\\-]+" title="Letters only" required 
                        type="text" 
                        value={formData.city}
                        onChange={(e) => updateForm('city', e.target.value)}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-indigo-500 transition-colors" 
                       minLength={2} maxLength={50} />
                    </div>
                    <div className="w-1/3">
                      <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">ZIP</label>
                      <input pattern="\\d{5}" maxLength={10} title="5 digit zip code" required 
                        type="text" 
                        value={formData.zip}
                        onChange={(e) => updateForm('zip', e.target.value)}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-indigo-500 transition-colors" 
                       minLength={5} />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Payment */}
            {step === 2 && (
              <div className="animate-in slide-in-from-right-8 fade-in duration-500">
                <h2 className="text-2xl font-black text-slate-900 mb-6">Payment Method</h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Card Number</label>
                    <div className="relative">
                      <CreditCard className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                      <input required 
                        type="text" 
                        maxLength={19}
                        value={formData.cardNumber}
                        onChange={(e) => {
                          const val = e.target.value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
                          const matches = val.match(/\d{4,16}/g);
                          const match = matches && matches[0] || '';
                          const parts = [];
                          for (let i = 0, len = match.length; i < len; i += 4) parts.push(match.substring(i, i + 4));
                          updateForm('cardNumber', parts.length ? parts.join(' ') : val);
                        }}
                        placeholder="0000 0000 0000 0000"
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-12 pr-4 py-3 focus:outline-none focus:border-indigo-500 transition-colors font-mono tracking-widest text-sm" 
                       minLength={16} />
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-1/2">
                      <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Expiry</label>
                      <input required 
                        type="text" 
                        maxLength={5}
                        value={formData.expiry}
                        onChange={(e) => {
                          const val = e.target.value.replace(/\D/g, '');
                          updateForm('expiry', val.length >= 2 ? val.substring(0, 2) + '/' + val.substring(2, 4) : val);
                        }}
                        placeholder="MM/YY"
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-indigo-500 transition-colors font-mono tracking-widest text-center text-sm" 
                       minLength={5} />
                    </div>
                    <div className="w-1/2">
                      <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">CVV</label>
                      <input required 
                        type="text" 
                        maxLength={4}
                        value={formData.cvv}
                        onChange={(e) => updateForm('cvv', e.target.value.replace(/\D/g, ''))}
                        placeholder="123"
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-indigo-500 transition-colors font-mono tracking-widest text-center text-sm" 
                       minLength={3} />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Review */}
            {step === 3 && (
              <div className="animate-in slide-in-from-right-8 fade-in duration-500">
                <h2 className="text-2xl font-black text-slate-900 mb-6">Review Order</h2>
                
                <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100 mb-6 space-y-4">
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 mb-1">Shipping To</h3>
                    <p className="text-sm text-slate-500">
                      {formData.firstName || "John"} {formData.lastName || "Doe"}<br/>
                      {formData.address || "123 Main St"}<br/>
                      {formData.city || "City"}, {formData.zip || "00000"}
                    </p>
                  </div>
                  <div className="border-t border-slate-200 pt-4">
                    <h3 className="text-sm font-bold text-slate-900 mb-1">Paying With</h3>
                    <p className="text-sm text-slate-500 flex items-center gap-2">
                      <CreditCard className="w-4 h-4" /> 
                      Ending in {formData.cardNumber.slice(-4) || "0000"}
                    </p>
                  </div>
                </div>

                <div className="flex justify-between items-end border-t border-slate-100 pt-4">
                  <span className="font-bold text-slate-500">Total</span>
                  <span className="text-3xl font-black text-slate-900">$199.00</span>
                </div>
              </div>
            )}
          </div>

          {/* Footer Controls */}
          <div className="bg-slate-50 border-t border-slate-100 p-6 flex justify-between items-center">
            <button type="button" 
              onClick={handleBack}
              disabled={step === 1 || isProcessing}
              className={`flex items-center gap-2 font-bold px-4 py-2 rounded-lg transition-colors ${
                step === 1 ? 'text-transparent pointer-events-none' : 'text-slate-500 hover:bg-slate-200 hover:text-slate-900'
              }`}
            >
              <ChevronLeft className="w-5 h-5" /> Back
            </button>

            {step < 3 ? (
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
      const originalHandler = handleNext;
      if (typeof originalHandler === 'function') (originalHandler as any)(e);
      else if (typeof originalHandler === 'object' && originalHandler !== null) { /* ignore event objects */ }
    }}
                className="flex items-center gap-2 font-bold bg-indigo-600 text-white px-8 py-3 rounded-xl hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-600/30"
              >
                Continue <ChevronRight className="w-5 h-5" />
              </button>
            ) : (
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
      const originalHandler = handlePay;
      if (typeof originalHandler === 'function') (originalHandler as any)(e);
      else if (typeof originalHandler === 'object' && originalHandler !== null) { /* ignore event objects */ }
    }}
                disabled={isProcessing}
                className="flex items-center gap-2 font-bold bg-slate-900 text-white px-8 py-3 rounded-xl hover:bg-slate-800 transition-colors shadow-lg disabled:opacity-70"
              >
                {isProcessing ? (
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                ) : (
                  <>Place Order <Check className="w-5 h-5" /></>
                )}
              </button>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}
