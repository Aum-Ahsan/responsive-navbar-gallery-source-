"use client";
import React, { useState } from "react";
import { CreditCard, AlertCircle, CheckCircle2, ArrowRight } from "lucide-react";

export default function PaymentProcess31() {
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");
  
  const [errors, setErrors] = useState({
    cardNumber: false,
    expiry: false,
    cvv: false
  });
  
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

    
    // Custom Validation
    const numClean = cardNumber.replace(/\D/g, '');
    const expClean = expiry.replace(/\D/g, '');
    const cvvClean = cvv.replace(/\D/g, '');

    const newErrors = {
      cardNumber: numClean.length < 16,
      expiry: expClean.length < 4,
      cvv: cvvClean.length < 3
    };

    setErrors(newErrors);

    // If any error exists, don't proceed. The UI will shake.
    if (Object.values(newErrors).some(Boolean)) {
      // Remove errors after animation completes so it can trigger again
      setTimeout(() => {
        setErrors({ cardNumber: false, expiry: false, cvv: false });
      }, 600); // 600ms is enough for the shake animation
      return;
    }

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

  const formatCard = (val: string) => {
    const v = val.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    const matches = v.match(/\d{4,16}/g);
    const match = matches && matches[0] || '';
    const parts = [];
    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }
    if (parts.length) {
      return parts.join(' ');
    } else {
      return val;
    }
  };

  const formatExpiry = (val: string) => {
    const v = val.replace(/\D/g, '');
    if (v.length >= 2) {
      return v.substring(0, 2) + '/' + v.substring(2, 4);
    }
    return v;
  };

  return (
    <div className="w-full min-h-screen bg-rose-50 flex items-center justify-center font-sans p-6 text-slate-800">
      
      {/* Global CSS for Shake Animation */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes shake {
          10%, 90% { transform: translate3d(-1px, 0, 0); }
          20%, 80% { transform: translate3d(2px, 0, 0); }
          30%, 50%, 70% { transform: translate3d(-4px, 0, 0); }
          40%, 60% { transform: translate3d(4px, 0, 0); }
        }
        .animate-shake {
          animation: shake 0.5s cubic-bezier(.36,.07,.19,.97) both;
        }
      `}} />

      <div className="max-w-md w-full bg-white rounded-[2rem] p-8 shadow-xl border border-rose-100 relative overflow-hidden">
        
        {!isSuccess ? (
          <div className="animate-in fade-in duration-500">
            <h2 className="text-2xl font-black text-slate-900 mb-2">Checkout</h2>
            <p className="text-slate-500 text-sm mb-8">Enter your payment details below. All fields are required.</p>

            <form onSubmit={handlePay} className="space-y-5" noValidate>
              
              <div>
                <label className={`block text-xs font-bold uppercase tracking-wider mb-2 ml-1 transition-colors ${errors.cardNumber ? 'text-red-500' : 'text-slate-500'}`}>
                  Card Number
                </label>
                <div className="relative">
                  <CreditCard className={`absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 transition-colors ${errors.cardNumber ? 'text-red-500' : 'text-slate-400'}`} />
                  <input required 
                    type="text" 
                    value={cardNumber}
                    onChange={(e) => setCardNumber(formatCard(e.target.value))}
                    maxLength={19}
                    placeholder="0000 0000 0000 0000" 
                    className={`w-full bg-slate-50 border rounded-xl pl-12 pr-10 py-4 focus:outline-none transition-all font-mono tracking-widest text-sm
                      ${errors.cardNumber ? 'border-red-500 text-red-600 bg-red-50 animate-shake focus:ring-1 focus:ring-red-500' : 'border-slate-200 text-slate-900 focus:border-rose-500 focus:ring-1 focus:ring-rose-500'}
                    `} 
                   minLength={16} />
                  {errors.cardNumber && <AlertCircle className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-red-500 animate-in fade-in" />}
                </div>
                {errors.cardNumber && <p className="text-red-500 text-xs font-medium mt-2 ml-1 animate-in slide-in-from-top-1">Please enter a valid 16-digit card number.</p>}
              </div>
              
              <div className="flex gap-4">
                <div className="w-1/2">
                  <label className={`block text-xs font-bold uppercase tracking-wider mb-2 ml-1 transition-colors ${errors.expiry ? 'text-red-500' : 'text-slate-500'}`}>
                    Expiry
                  </label>
                  <div className="relative">
                    <input required 
                      type="text" 
                      value={expiry}
                      onChange={(e) => setExpiry(formatExpiry(e.target.value))}
                      maxLength={5}
                      placeholder="MM/YY" 
                      className={`w-full bg-slate-50 border rounded-xl px-4 py-4 focus:outline-none transition-all font-mono tracking-widest text-center text-sm
                        ${errors.expiry ? 'border-red-500 text-red-600 bg-red-50 animate-shake focus:ring-1 focus:ring-red-500' : 'border-slate-200 text-slate-900 focus:border-rose-500 focus:ring-1 focus:ring-rose-500'}
                      `} 
                     minLength={5} />
                    {errors.expiry && <AlertCircle className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-red-500 animate-in fade-in" />}
                  </div>
                </div>
                
                <div className="w-1/2">
                  <label className={`block text-xs font-bold uppercase tracking-wider mb-2 ml-1 transition-colors ${errors.cvv ? 'text-red-500' : 'text-slate-500'}`}>
                    CVV
                  </label>
                  <div className="relative">
                    <input required 
                      type="text" 
                      value={cvv}
                      onChange={(e) => setCvv(e.target.value.replace(/\D/g, ''))}
                      maxLength={4}
                      placeholder="123" 
                      className={`w-full bg-slate-50 border rounded-xl px-4 py-4 focus:outline-none transition-all font-mono tracking-widest text-center text-sm
                        ${errors.cvv ? 'border-red-500 text-red-600 bg-red-50 animate-shake focus:ring-1 focus:ring-red-500' : 'border-slate-200 text-slate-900 focus:border-rose-500 focus:ring-1 focus:ring-rose-500'}
                      `} 
                     minLength={3} />
                    {errors.cvv && <AlertCircle className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-red-500 animate-in fade-in" />}
                  </div>
                </div>
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
                  className={`w-full py-5 rounded-2xl font-bold text-lg flex items-center justify-center gap-2 transition-all shadow-lg 
                    ${Object.values(errors).some(Boolean) ? 'bg-red-500 text-white shadow-red-500/30 hover:bg-red-600' : 'bg-slate-900 text-white shadow-slate-900/30 hover:bg-slate-800'}
                    disabled:opacity-70 disabled:shadow-none
                  `}
                >
                  {isProcessing ? (
                    <div className="w-6 h-6 border-4 border-white/30 border-t-white rounded-full animate-spin"></div>
                  ) : (
                    <>Pay $49.00 <ArrowRight className="w-5 h-5" /></>
                  )}
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="text-center py-8 animate-in zoom-in duration-500">
            <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-12 h-12 text-green-500" />
            </div>
            <h3 className="text-2xl font-black text-slate-900 mb-2">Payment Complete</h3>
            <p className="text-slate-500 mb-8">Thank you for your purchase.</p>
            <button type="button" 
              onClick={() => { setIsSuccess(false); setCardNumber(""); setExpiry(""); setCvv(""); }}
              className="w-full py-4 bg-slate-100 hover:bg-slate-200 text-slate-900 font-bold rounded-xl transition-colors"
            >
              Start Over
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
