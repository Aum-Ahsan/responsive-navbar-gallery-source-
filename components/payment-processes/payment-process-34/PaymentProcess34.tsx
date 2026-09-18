"use client";
import React, { useState } from "react";
import { Check, X, ArrowRight, ShieldCheck } from "lucide-react";

export default function PaymentProcess34() {
  const [formData, setFormData] = useState({
    name: "",
    cardNumber: "",
    expiry: "",
    cvv: ""
  });

  const [touched, setTouched] = useState({
    name: false,
    cardNumber: false,
    expiry: false,
    cvv: false
  });

  const [isProcessing, setIsProcessing] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);

  // Validation functions
  const isValid = {
    name: formData.name.trim().length > 2,
    cardNumber: formData.cardNumber.replace(/\D/g, '').length === 16,
    expiry: formData.expiry.replace(/\D/g, '').length === 4,
    cvv: formData.cvv.replace(/\D/g, '').length >= 3
  };

  const isFormValid = Object.values(isValid).every(Boolean);

  const handleBlur = (field: keyof typeof touched) => {
    setTouched(prev => ({ ...prev, [field]: true }));
  };

  const handleChange = (field: keyof typeof formData, value: string) => {
    let formattedValue = value;
    
    if (field === 'cardNumber') {
      const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
      const matches = v.match(/\d{4,16}/g);
      const match = matches && matches[0] || '';
      const parts = [];
      for (let i = 0, len = match.length; i < len; i += 4) {
        parts.push(match.substring(i, i + 4));
      }
      formattedValue = parts.length ? parts.join(' ') : value;
    } else if (field === 'expiry') {
      const v = value.replace(/\D/g, '');
      formattedValue = v.length >= 2 ? v.substring(0, 2) + '/' + v.substring(2, 4) : v;
    } else if (field === 'cvv') {
      formattedValue = value.replace(/\D/g, '').substring(0, 4);
    }

    setFormData(prev => ({ ...prev, [field]: formattedValue }));
    // If they start typing again, we can optionally hide the error/success by setting touched to false
    // setTouched(prev => ({ ...prev, [field]: false }));
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

    if (!isFormValid) {
      // Touch all fields to show errors
      setTouched({ name: true, cardNumber: true, expiry: true, cvv: true });
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

  // Reusable component for input with validation icons
  const ValidatedInput = ({ 
    id, label, placeholder, value, isValid, isTouched, maxLength,
    onChange, onBlur 
  }: { 
    id: string; label: string; placeholder: string; value: string;
    isValid: boolean; isTouched: boolean; maxLength?: number;
    onChange: (val: string) => void; onBlur: () => void;
  }) => (
    <div>
      <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 ml-1">{label}</label>
      <div className="relative flex items-center">
        <input required 
          id={id}
          type="text" 
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onBlur={onBlur}
          maxLength={maxLength}
          placeholder={placeholder} 
          className={`w-full bg-white border-2 rounded-xl px-4 py-4 focus:outline-none transition-all font-medium text-slate-900 ${
            isTouched && !isValid 
              ? 'border-red-400 focus:border-red-500 bg-red-50' 
              : isTouched && isValid
                ? 'border-emerald-400 focus:border-emerald-500 bg-emerald-50/30'
                : 'border-slate-200 focus:border-blue-500 hover:border-slate-300'
          }`} 
         />
        
        {/* Status Icons */}
        <div className="absolute right-4 flex items-center">
          <div className={`transition-all duration-300 absolute right-0 ${isTouched && isValid ? 'opacity-100 scale-100' : 'opacity-0 scale-50 rotate-90 pointer-events-none'}`}>
            <div className="bg-emerald-100 p-1 rounded-full text-emerald-600">
              <Check className="w-4 h-4" strokeWidth={3} />
            </div>
          </div>
          <div className={`transition-all duration-300 absolute right-0 ${isTouched && !isValid ? 'opacity-100 scale-100' : 'opacity-0 scale-50 -rotate-90 pointer-events-none'}`}>
            <div className="bg-red-100 p-1 rounded-full text-red-600">
              <X className="w-4 h-4" strokeWidth={3} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="w-full min-h-screen bg-slate-100 flex items-center justify-center font-sans p-6">
      
      {!isSuccess ? (
        <div className="max-w-md w-full bg-white rounded-3xl p-8 shadow-xl border border-slate-200 animate-in fade-in duration-500">
          
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-black text-slate-900">Payment</h2>
            <div className="flex items-center gap-1.5 text-blue-600 bg-blue-50 px-3 py-1.5 rounded-full text-sm font-bold">
              <ShieldCheck className="w-4 h-4" /> Secure
            </div>
          </div>

          <form onSubmit={handlePay} className="space-y-5" noValidate>
            
            <ValidatedInput 
              id="name"
              label="Name on Card"
              placeholder="e.g. Jane Doe"
              value={formData.name}
              isValid={isValid.name}
              isTouched={touched.name}
              onChange={(v) => handleChange('name', v)}
              onBlur={() => handleBlur('name')}
            />

            <ValidatedInput 
              id="cardNumber"
              label="Card Number"
              placeholder="0000 0000 0000 0000"
              maxLength={19}
              value={formData.cardNumber}
              isValid={isValid.cardNumber}
              isTouched={touched.cardNumber}
              onChange={(v) => handleChange('cardNumber', v)}
              onBlur={() => handleBlur('cardNumber')}
            />
            
            <div className="flex gap-4">
              <div className="w-1/2">
                <ValidatedInput 
                  id="expiry"
                  label="Expiry"
                  placeholder="MM/YY"
                  maxLength={5}
                  value={formData.expiry}
                  isValid={isValid.expiry}
                  isTouched={touched.expiry}
                  onChange={(v) => handleChange('expiry', v)}
                  onBlur={() => handleBlur('expiry')}
                />
              </div>
              <div className="w-1/2">
                <ValidatedInput 
                  id="cvv"
                  label="CVV"
                  placeholder="123"
                  maxLength={4}
                  value={formData.cvv}
                  isValid={isValid.cvv}
                  isTouched={touched.cvv}
                  onChange={(v) => handleChange('cvv', v)}
                  onBlur={() => handleBlur('cvv')}
                />
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
              className={`w-full py-5 rounded-2xl font-bold text-lg flex items-center justify-center gap-2 transition-all mt-4 
                ${isFormValid 
                  ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-600/30' 
                  : 'bg-slate-100 text-slate-400 cursor-not-allowed'}
              `}
            >
              {isProcessing ? (
                <div className="w-6 h-6 border-4 border-white/30 border-t-white rounded-full animate-spin"></div>
              ) : (
                <>Complete Purchase <ArrowRight className="w-5 h-5" /></>
              )}
            </button>
          </form>

        </div>
      ) : (
        <div className="max-w-md w-full bg-white rounded-3xl p-10 shadow-xl border border-slate-200 text-center animate-in zoom-in duration-500">
           <div className="w-24 h-24 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
             <Check className="w-12 h-12 text-emerald-600" strokeWidth={3} />
           </div>
           <h2 className="text-3xl font-black text-slate-900 mb-2">Done!</h2>
           <p className="text-slate-500 mb-8">Your payment was verified and processed.</p>
           <button type="button" 
              onClick={() => { 
                setIsSuccess(false); 
                setFormData({ name: "", cardNumber: "", expiry: "", cvv: "" });
                setTouched({ name: false, cardNumber: false, expiry: false, cvv: false });
              }}
              className="px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-xl transition-colors"
            >
              Back to Dashboard
            </button>
        </div>
      )}

    </div>
  );
}
