"use client";
import React, { useState, useEffect } from "react";
import { X, Lock, CreditCard, CheckCircle2, AlertCircle } from "lucide-react";

export default function PaymentProcess04() {
  const [isOpen, setIsOpen] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);

  // Trigger modal open manually
  // Removed auto-open to prevent scrolling issues in gallery


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

  const closeModal = () => {
    setIsOpen(false);
    setTimeout(() => {
      setIsSuccess(false);
      // Re-open not automatic anymore

    }, 300);
  };

  return (
    <div className="w-full min-h-screen bg-slate-100 font-sans relative overflow-hidden flex flex-col">
      {/* Fake Background Page */}
      <header className="bg-white p-6 shadow-sm flex justify-between items-center z-0">
        <div className="font-black text-xl tracking-tighter">LUMIÈRE</div>
        <div className="flex gap-4">
          <div className="w-24 h-4 bg-slate-200 rounded-full"></div>
          <div className="w-16 h-4 bg-slate-200 rounded-full"></div>
        </div>
      </header>
      
      <main className="flex-1 p-8 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto w-full z-0 opacity-50 blur-[2px] transition-all duration-500">
        <div className="md:col-span-2 space-y-6">
          <div className="w-full h-64 bg-slate-200 rounded-2xl animate-pulse"></div>
          <div className="w-3/4 h-8 bg-slate-200 rounded-full animate-pulse"></div>
          <div className="w-1/2 h-4 bg-slate-200 rounded-full animate-pulse"></div>
        </div>
        <div className="space-y-4 flex flex-col items-center justify-center">
          <button type="button" onClick={() => setIsOpen(true)} className="px-8 py-4 bg-slate-900 text-white rounded-xl font-bold shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all">
            Open Checkout Modal
          </button>
        </div>
      </main>

      {/* Modal Overlay */}
      <div 
        className={`absolute inset-0 z-50 flex items-center justify-center p-4 transition-all duration-500 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Dark Backdrop */}
        <div 
          className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
          onClick={closeModal}
        ></div>

        {/* Modal Content */}
        <div 
          className={`relative bg-white rounded-3xl shadow-2xl w-full max-w-md overflow-hidden transition-all duration-500 transform ${
            isOpen ? "scale-100 translate-y-0" : "scale-95 translate-y-8"
          }`}
        >
          {/* Close Button */}
          <button type="button" 
            onClick={closeModal}
            className="absolute top-4 right-4 p-2 bg-slate-100 text-slate-500 hover:text-slate-900 hover:bg-slate-200 rounded-full transition-colors z-10"
          >
            <X className="w-5 h-5" />
          </button>

          {!isSuccess ? (
            <div className="p-8">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 rotate-12 shadow-sm border border-blue-100">
                  <Lock className="w-7 h-7 -rotate-12" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">Secure Checkout</h2>
                <p className="text-slate-500 text-sm mt-1">Total amount to pay: <span className="font-bold text-slate-900">$299.00</span></p>
              </div>

              <form onSubmit={handlePay} className="space-y-5">
                <div>
                  <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Card Information</label>
                  <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500 transition-all">
                    <div className="relative border-b border-slate-200">
                      <CreditCard className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                      <input onInput={(e) => { e.currentTarget.value = e.currentTarget.value.replace(/[^0-9\s]/g, "").substring(0, 19); }} pattern="[\\d\\s]{16,19}" maxLength={19} title="16 digit card number" required type="text" placeholder="Card number" className="w-full pl-11 pr-4 py-3.5 focus:outline-none text-sm font-medium placeholder-slate-400"  minLength={16} />
                    </div>
                    <div className="flex">
                      <input onInput={(e) => { e.currentTarget.value = e.currentTarget.value.replace(/[^0-9\/]/g, "").substring(0, 5); }} pattern="(0[1-9]|1[0-2])\\/?([0-9]{2})" maxLength={5} title="Format: MM/YY" required type="text" placeholder="MM / YY" className="w-1/2 px-4 py-3.5 border-r border-slate-200 focus:outline-none text-sm font-medium placeholder-slate-400"  minLength={5} />
                      <input onInput={(e) => { e.currentTarget.value = e.currentTarget.value.replace(/[^0-9]/g, "").substring(0, 4); }} pattern="\\d{3,4}" maxLength={4} title="3 or 4 digit CVV/CVC" required type="text" placeholder="CVC" className="w-1/2 px-4 py-3.5 focus:outline-none text-sm font-medium placeholder-slate-400"  minLength={3} />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Cardholder Name</label>
                  <input pattern="[a-zA-Z\\s\\-]+" title="Letters only" required type="text" placeholder="Full name on card" className="w-full px-4 py-3.5 bg-white border border-slate-200 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all shadow-sm text-sm font-medium placeholder-slate-400"  minLength={2} maxLength={50} />
                </div>

                <div className="bg-blue-50/50 border border-blue-100 rounded-lg p-3 flex gap-3 items-start">
                  <AlertCircle className="w-5 h-5 text-blue-500 shrink-0" />
                  <p className="text-xs text-blue-700 leading-relaxed">By clicking pay, you agree to our terms of service and authorize this payment.</p>
                </div>

                {serverError && (
              <div className="text-red-500 text-sm font-semibold mb-4 text-center bg-red-50 p-3 rounded-xl border border-red-200 animate-in fade-in zoom-in duration-300">
                {serverError}
              </div>
            )}
            <button 
                  type="submit" 
                  disabled={isProcessing}
                  className="w-full py-4 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-all shadow-[0_4px_14px_0_rgb(37,99,235,0.39)] hover:shadow-[0_6px_20px_rgba(37,99,235,0.23)] hover:-translate-y-0.5 disabled:opacity-70 disabled:hover:translate-y-0 disabled:hover:shadow-none relative overflow-hidden"
                >
                  <span className={`transition-all duration-300 ${isProcessing ? 'opacity-0' : 'opacity-100'}`}>Pay $299.00</span>
                  {isProcessing && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    </div>
                  )}
                </button>
              </form>
            </div>
          ) : (
            <div className="p-10 text-center animate-in fade-in zoom-in duration-500">
              <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-10 h-10 text-emerald-500" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Payment Successful</h3>
              <p className="text-slate-500 mb-8">Your transaction ID is <span className="font-mono text-slate-700">#TRX-948274</span></p>
              <button type="button" 
                onClick={closeModal}
                className="px-8 py-3 bg-slate-100 text-slate-700 font-semibold rounded-xl hover:bg-slate-200 transition-colors"
              >
                Close Window
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
