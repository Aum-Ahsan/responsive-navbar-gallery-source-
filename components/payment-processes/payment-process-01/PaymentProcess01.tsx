"use client";
import React, { useState } from "react";
import { Check, CreditCard, User, MapPin, Shield, ChevronRight, ChevronLeft } from "lucide-react";

export default function PaymentProcess01() {
  const [step, setStep] = useState(1);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Form State
  const [shippingInfo, setShippingInfo] = useState({ name: '', address: '', city: '', zip: '' });
  const [paymentInfo, setPaymentInfo] = useState({ card: '', expiry: '', cvc: '' });

  const totalSteps = 3;

  const nextStep = () => {
    if (step < totalSteps) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const handlePay = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
    }, 2000);
  };

  if (isSuccess) {
    return (
      <div className="w-full min-h-[600px] bg-slate-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-3xl p-10 text-center max-w-md w-full shadow-2xl border border-slate-100 transform transition-all animate-in fade-in zoom-in duration-500">
          <div className="w-24 h-24 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-inner">
            <Check className="w-12 h-12" />
          </div>
          <h2 className="text-3xl font-bold text-slate-900 mb-2">Order Confirmed!</h2>
          <p className="text-slate-500 mb-8">Your payment was successful. We are processing your order and will email you the receipt.</p>
          <button type="button" onClick={() => setIsSuccess(false)} className="w-full py-4 bg-slate-900 text-white rounded-xl font-semibold hover:bg-slate-800 transition-colors shadow-lg hover:shadow-xl">
            Return to Store
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full min-h-[700px] bg-slate-50 flex flex-col items-center justify-center p-4 sm:p-6 md:p-8 font-sans">
      
      {/* Wizard Container */}
      <div className="max-w-3xl w-full bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100">
        
        {/* Header & Progress */}
        <div className="bg-slate-900 px-8 pt-10 pb-12 relative overflow-hidden">
          {/* Decorative Background */}
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <div className="absolute top-[-50px] right-[-50px] w-64 h-64 rounded-full bg-indigo-500 blur-3xl"></div>
            <div className="absolute bottom-[-50px] left-[-50px] w-48 h-48 rounded-full bg-teal-500 blur-3xl"></div>
          </div>
          
          <div className="relative z-10 text-center mb-8">
            <h2 className="text-2xl font-bold text-white mb-2">Secure Checkout</h2>
            <p className="text-slate-400 text-sm">Please complete the steps below to finalize your purchase.</p>
          </div>

          {/* Progress Bar */}
          <div className="relative z-10 max-w-md mx-auto">
            <div className="flex justify-between items-center relative">
              {/* Line */}
              <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-full h-1 bg-slate-700 rounded-full -z-10"></div>
              <div 
                className="absolute left-0 top-1/2 transform -translate-y-1/2 h-1 bg-indigo-500 rounded-full transition-all duration-500 ease-out -z-10"
                style={{ width: `${((step - 1) / (totalSteps - 1)) * 100}%` }}
              ></div>

              {[
                { num: 1, label: "Shipping", icon: <MapPin className="w-4 h-4" /> },
                { num: 2, label: "Payment", icon: <CreditCard className="w-4 h-4" /> },
                { num: 3, label: "Review", icon: <Check className="w-4 h-4" /> }
              ].map((s) => (
                <div key={s.num} className="flex flex-col items-center gap-2">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold border-4 transition-colors duration-300 ${
                    step >= s.num ? 'bg-indigo-500 border-slate-900 text-white' : 'bg-slate-800 border-slate-900 text-slate-500'
                  }`}>
                    {step > s.num ? <Check className="w-5 h-5" /> : s.icon}
                  </div>
                  <span className={`text-xs font-semibold ${step >= s.num ? 'text-white' : 'text-slate-500'}`}>{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div className="p-8 sm:p-10 -mt-6 bg-white rounded-t-3xl relative z-20">
          
          {/* Step 1: Shipping */}
          <div className={`${step === 1 ? 'block animate-in fade-in slide-in-from-right-4 duration-500' : 'hidden'}`}>
            <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2"><MapPin className="w-5 h-5 text-indigo-500" /> Shipping Information</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1">Full Name</label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input onInput={(e) => { e.currentTarget.value = e.currentTarget.value.replace(/[^a-zA-Z\s\-]/g, ""); }} pattern="[a-zA-Z\\s\\-]+" title="Letters only" required type="text" placeholder="Jane Doe" className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all" value={shippingInfo.name} onChange={e => setShippingInfo({...shippingInfo, name: e.target.value})}  minLength={2} maxLength={50} />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1">Street Address</label>
                <input onInput={(e) => { e.currentTarget.value = e.currentTarget.value.replace(/[^a-zA-Z0-9\s\-\,]/g, ""); }} pattern="[a-zA-Z\\s\\-]+" title="Letters only" required type="text" placeholder="123 Innovation Drive" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all" value={shippingInfo.address} onChange={e => setShippingInfo({...shippingInfo, address: e.target.value})}  minLength={2} maxLength={50} />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1">City</label>
                  <input onInput={(e) => { e.currentTarget.value = e.currentTarget.value.replace(/[^a-zA-Z\s\-]/g, ""); }} pattern="[a-zA-Z\\s\\-]+" title="Letters only" required type="text" placeholder="San Francisco" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all" value={shippingInfo.city} onChange={e => setShippingInfo({...shippingInfo, city: e.target.value})}  minLength={2} maxLength={50} />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1">Zip Code</label>
                  <input onInput={(e) => { e.currentTarget.value = e.currentTarget.value.replace(/[^0-9]/g, "").substring(0, 5); }} pattern="\\d{5}" maxLength={10} title="5 digit zip code" required type="text" placeholder="94105" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all" value={shippingInfo.zip} onChange={e => setShippingInfo({...shippingInfo, zip: e.target.value})}  minLength={5} />
                </div>
              </div>
            </div>
          </div>

          {/* Step 2: Payment */}
          <div className={`${step === 2 ? 'block animate-in fade-in slide-in-from-right-4 duration-500' : 'hidden'}`}>
            <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2"><CreditCard className="w-5 h-5 text-indigo-500" /> Payment Details</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1">Card Number</label>
                <div className="relative">
                  <CreditCard className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input onInput={(e) => { e.currentTarget.value = e.currentTarget.value.replace(/[^0-9\s]/g, "").substring(0, 19); }} pattern="[\\d\\s]{16,19}" maxLength={19} title="16 digit card number" required type="text" placeholder="0000 0000 0000 0000" className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all font-mono" value={paymentInfo.card} onChange={e => setPaymentInfo({...paymentInfo, card: e.target.value})}  minLength={16} />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1">Expiry Date</label>
                  <input onInput={(e) => { e.currentTarget.value = e.currentTarget.value.replace(/[^0-9\/]/g, "").substring(0, 5); }} pattern="(0[1-9]|1[0-2])\\/?([0-9]{2})" maxLength={5} title="Format: MM/YY" required type="text" placeholder="MM/YY" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all font-mono" value={paymentInfo.expiry} onChange={e => setPaymentInfo({...paymentInfo, expiry: e.target.value})}  minLength={5} />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1">CVC</label>
                  <input onInput={(e) => { e.currentTarget.value = e.currentTarget.value.replace(/[^0-9]/g, "").substring(0, 4); }} pattern="\\d{3,4}" maxLength={4} title="3 or 4 digit CVV/CVC" required type="password" placeholder="•••" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all font-mono tracking-widest" value={paymentInfo.cvc} onChange={e => setPaymentInfo({...paymentInfo, cvc: e.target.value})}  minLength={3} />
                </div>
              </div>
              <div className="mt-4 bg-indigo-50 rounded-xl p-4 flex items-start gap-3">
                <Shield className="w-5 h-5 text-indigo-600 shrink-0 mt-0.5" />
                <p className="text-sm text-indigo-900">Your payment information is encrypted and securely processed. We do not store your card details.</p>
              </div>
            </div>
          </div>

          {/* Step 3: Review */}
          <div className={`${step === 3 ? 'block animate-in fade-in slide-in-from-right-4 duration-500' : 'hidden'}`}>
            <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2"><Check className="w-5 h-5 text-indigo-500" /> Order Review</h3>
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 mb-6 space-y-4">
              <div className="flex justify-between items-center pb-4 border-b border-slate-200">
                <span className="text-slate-500 font-medium">Premium Plan (Annual)</span>
                <span className="text-slate-900 font-bold">$199.00</span>
              </div>
              <div className="flex justify-between items-center pb-4 border-b border-slate-200">
                <span className="text-slate-500 font-medium">Taxes</span>
                <span className="text-slate-900 font-bold">$19.90</span>
              </div>
              <div className="flex justify-between items-center pt-2">
                <span className="text-lg text-slate-900 font-bold">Total</span>
                <span className="text-2xl text-indigo-600 font-black">$218.90</span>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                <h4 className="font-semibold text-slate-700 mb-1">Shipping To</h4>
                <p className="text-slate-500 truncate">{shippingInfo.name || 'Jane Doe'}</p>
                <p className="text-slate-500 truncate">{shippingInfo.address || '123 Main St'}</p>
              </div>
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                <h4 className="font-semibold text-slate-700 mb-1">Payment Method</h4>
                <p className="text-slate-500">Card ending in {paymentInfo.card.slice(-4) || '1234'}</p>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="mt-10 flex items-center justify-between pt-6 border-t border-slate-100">
            {step > 1 ? (
              <button type="button" onClick={prevStep} className="px-6 py-3 rounded-xl font-semibold text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition-colors flex items-center gap-2">
                <ChevronLeft className="w-4 h-4" /> Back
              </button>
            ) : <div></div>}
            
            {step < totalSteps ? (
              <button type="button" onClick={(e) => {
      e.preventDefault();
      e.stopPropagation();
      const inputs = Array.from((e.currentTarget.closest('.w-full') || document).querySelectorAll('input')).filter(i => i.offsetParent !== null);
      let isValid = true;
      for (const input of inputs) {
        if (!input.value.trim()) {
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
      const originalHandler = nextStep;
      if (typeof originalHandler === 'function') (originalHandler as any)(e);
      else if (typeof originalHandler === 'object' && originalHandler !== null) { /* ignore event objects */ }
    }} className="px-8 py-3 bg-indigo-600 text-white rounded-xl font-bold hover:bg-indigo-700 hover:shadow-lg hover:-translate-y-0.5 transition-all flex items-center gap-2">
                Continue <ChevronRight className="w-4 h-4" />
              </button>
            ) : (
              <button type="button" onClick={(e) => {
      e.preventDefault();
      e.stopPropagation();
      const inputs = Array.from((e.currentTarget.closest('.w-full') || document).querySelectorAll('input')).filter(i => i.offsetParent !== null);
      let isValid = true;
      for (const input of inputs) {
        if (!input.value.trim()) {
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
      const originalHandler = handlePay;
      if (typeof originalHandler === 'function') (originalHandler as any)(e);
      else if (typeof originalHandler === 'object' && originalHandler !== null) { /* ignore event objects */ }
    }} disabled={isProcessing} className="px-10 py-3 bg-indigo-600 text-white rounded-xl font-bold hover:bg-indigo-700 hover:shadow-lg hover:-translate-y-0.5 transition-all flex items-center gap-2 disabled:opacity-70 disabled:hover:translate-y-0">
                {isProcessing ? 'Processing...' : 'Place Order'} <Check className="w-4 h-4" />
              </button>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}
