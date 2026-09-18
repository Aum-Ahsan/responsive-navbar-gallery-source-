"use client";
import React, { useState } from "react";
import { CreditCard, ArrowRight, CheckCircle2, Building, FileText, Briefcase } from "lucide-react";

type PaymentMethod = 'cc' | 'net30';

export default function PaymentProcess70() {
  const UNIT_PRICE = 30.00;
  const QUANTITY = 500;
  const TOTAL_AMOUNT = UNIT_PRICE * QUANTITY;
  
  const [method, setMethod] = useState<PaymentMethod>('net30');
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

  return (
    <div className="w-full min-h-[700px] bg-slate-900 flex items-center justify-center font-sans p-6 text-slate-100">
      
      {!isSuccess ? (
        <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-start relative z-10">
          
          {/* Left Side: Order Summary */}
          <div className="bg-slate-800 rounded-3xl p-8 shadow-xl border border-slate-700">
            <h2 className="text-2xl font-black text-white mb-6 flex items-center gap-2">
              <Briefcase className="w-6 h-6 text-indigo-400" /> B2B Checkout
            </h2>
            
            <div className="bg-slate-900 rounded-2xl p-6 mb-8 border border-slate-700">
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Order Details</h3>
              
              <div className="space-y-4 mb-6 text-sm">
                <div className="flex justify-between items-center pb-4 border-b border-slate-800">
                  <div>
                    <p className="font-bold text-white">Enterprise Smart Hubs</p>
                    <p className="text-slate-500">SKU: ENT-SH-400</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-white">${UNIT_PRICE.toFixed(2)}</p>
                    <p className="text-slate-500">Qty: {QUANTITY}</p>
                  </div>
                </div>
              </div>

              <div className="flex justify-between items-end pt-2">
                <span className="font-bold text-slate-400">Total</span>
                <span className="text-3xl font-black text-white">${TOTAL_AMOUNT.toLocaleString('en-US', {minimumFractionDigits: 2})}</span>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest">Company Details</h3>
              <div className="bg-slate-900 border border-slate-700 p-4 rounded-xl text-sm">
                <p className="font-bold text-white">Acme Corporation</p>
                <p className="text-slate-400">Billing Dept.</p>
                <p className="text-slate-400">123 Corporate Blvd, Suite 200</p>
                <p className="text-slate-400">Austin, TX 78701</p>
              </div>
            </div>
          </div>

          {/* Right Side: Payment Form */}
          <div className="bg-slate-800 rounded-3xl p-8 shadow-xl border border-slate-700 flex flex-col">
            <h2 className="text-xl font-black text-white mb-6">Payment Method</h2>

            {/* Method Toggle */}
            <div className="flex bg-slate-900 p-1 rounded-xl mb-8 border border-slate-700">
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
      const originalHandler = () => setMethod('cc');
      if (typeof originalHandler === 'function') (originalHandler as any)(e);
      else if (typeof originalHandler === 'object' && originalHandler !== null) { /* ignore event objects */ }
    }}
                className={`flex-1 py-3 text-sm font-bold rounded-lg transition-all flex items-center justify-center gap-2 ${method === 'cc' ? 'bg-slate-700 text-white shadow-sm' : 'text-slate-400 hover:text-slate-200'}`}
              >
                <CreditCard className="w-4 h-4" /> Credit Card
              </button>
              <button
                type="button"
                onClick={() => setMethod('net30')}
                className={`flex-1 py-3 text-sm font-bold rounded-lg transition-all flex items-center justify-center gap-2 ${method === 'net30' ? 'bg-slate-700 text-white shadow-sm' : 'text-slate-400 hover:text-slate-200'}`}
              >
                <FileText className="w-4 h-4" /> Invoice (Net 30)
              </button>
            </div>

            <form onSubmit={handlePay} className="space-y-6">
              
              {method === 'cc' ? (
                <div className="space-y-4 animate-in fade-in slide-in-from-right-4 duration-300">
                  <div className="relative">
                    <CreditCard className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                    <input onInput={(e) => { e.currentTarget.value = e.currentTarget.value.replace(/[^0-9\s]/g, "").substring(0, 19); }} pattern="[\\d\\s]{16,19}" maxLength={19} title="16 digit card number" required type="text" placeholder="Card Number" className="w-full bg-slate-900 border border-slate-700 rounded-xl pl-12 pr-4 py-4 text-white focus:outline-none focus:border-indigo-500 transition-colors font-mono tracking-widest text-sm"  minLength={16} />
                  </div>
                  <div className="flex gap-4">
                    <input onInput={(e) => { e.currentTarget.value = e.currentTarget.value.replace(/[^0-9\/]/g, "").substring(0, 5); }} pattern="(0[1-9]|1[0-2])\\/?([0-9]{2})" maxLength={5} title="Format: MM/YY" required type="text" placeholder="MM/YY" className="w-1/2 bg-slate-900 border border-slate-700 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-indigo-500 transition-colors font-mono tracking-widest text-center text-sm"  minLength={5} />
                    <input onInput={(e) => { e.currentTarget.value = e.currentTarget.value.replace(/[^0-9]/g, "").substring(0, 4); }} pattern="\\d{3,4}" maxLength={4} title="3 or 4 digit CVV/CVC" required type="text" placeholder="CVV" className="w-1/2 bg-slate-900 border border-slate-700 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-indigo-500 transition-colors font-mono tracking-widest text-center text-sm"  minLength={3} />
                  </div>
                </div>
              ) : (
                <div className="space-y-4 animate-in fade-in slide-in-from-left-4 duration-300">
                  <div className="bg-indigo-500/10 border border-indigo-500/20 p-4 rounded-xl mb-4 text-sm text-indigo-300 font-medium">
                    Your account is approved for Net 30 terms. An invoice will be sent upon shipment.
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">PO Number</label>
                    <input pattern="[a-zA-Z\\s\\-]+" title="Letters only" required type="text" placeholder="e.g. PO-2023-449" className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-indigo-500 transition-colors font-mono text-sm"  minLength={2} maxLength={50} />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Accounts Payable Email</label>
                    <input pattern="[a-zA-Z\\s\\-]+" title="Letters only" required type="email" placeholder="ap@acmecorp.com" className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-indigo-500 transition-colors text-sm"  minLength={5} maxLength={100} />
                  </div>
                </div>
              )}

              <div className="pt-4 border-t border-slate-700">
                {serverError && (
              <div className="text-red-500 text-sm font-semibold mb-4 text-center bg-red-50 p-3 rounded-xl border border-red-200 animate-in fade-in zoom-in duration-300">
                {serverError}
              </div>
            )}
            <button 
                  type="submit" 
                  disabled={isProcessing}
                  className="w-full py-5 bg-indigo-600 text-white rounded-xl font-bold text-lg flex items-center justify-center gap-2 hover:bg-indigo-500 transition-all shadow-[0_4px_14px_0_rgba(79,70,229,0.39)] disabled:opacity-70 disabled:shadow-none"
                >
                  {isProcessing ? (
                    <div className="w-6 h-6 border-4 border-white/30 border-t-white rounded-full animate-spin"></div>
                  ) : (
                    <>
                      {method === 'cc' ? `Pay $${TOTAL_AMOUNT.toLocaleString()}` : 'Submit Purchase Order'} 
                      <ArrowRight className="w-5 h-5" />
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>

        </div>
      ) : (
        <div className="max-w-md w-full bg-slate-800 rounded-3xl p-12 shadow-2xl border border-slate-700 text-center animate-in zoom-in duration-500 relative z-10">
           <div className="w-24 h-24 bg-indigo-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
             <CheckCircle2 className="w-12 h-12 text-indigo-400" strokeWidth={3} />
           </div>
           
           <h2 className="text-3xl font-black text-white mb-2">
             {method === 'cc' ? 'Payment Successful' : 'PO Submitted'}
           </h2>
           
           <p className="text-slate-400 mb-8 font-medium">
             {method === 'cc' 
               ? 'Your receipt has been sent to your email.' 
               : 'Your purchase order has been received. An invoice will be issued upon shipment with Net 30 terms.'}
           </p>
           
           <div className="bg-slate-900 rounded-xl p-6 mb-8 text-sm text-slate-300 text-left border border-slate-700">
             <div className="flex justify-between mb-3 pb-3 border-b border-slate-800">
               <span className="font-bold text-slate-500">Order Ref</span>
               <span className="font-bold text-white">ORD-88294A</span>
             </div>
             <div className="flex justify-between">
               <span className="font-bold text-slate-500">Total</span>
               <span className="font-medium text-white">${TOTAL_AMOUNT.toLocaleString()}</span>
             </div>
           </div>

           <button type="button" 
              onClick={() => { setIsSuccess(false); setMethod('net30'); }}
              className="w-full py-4 bg-slate-900 hover:bg-slate-950 text-white font-bold rounded-xl transition-colors"
            >
              Back to Portal
            </button>
        </div>
      )}

    </div>
  );
}
