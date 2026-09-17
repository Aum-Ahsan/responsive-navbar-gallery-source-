"use client";
import React, { useState } from "react";
import { CreditCard, ArrowRight, CheckCircle2, FileText, Download, Building2 } from "lucide-react";

export default function PaymentProcess68() {
  const TOTAL_AMOUNT = 1250.00;
  
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handlePay = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
    }, 2000);
  };

  const handleDownload = () => {
    // Mock download action
    alert("Downloading Receipt_INV-2023-089.pdf...");
  };

  return (
    <div className="w-full min-h-[700px] bg-slate-100 flex items-center justify-center font-sans p-6 text-slate-800">
      
      {!isSuccess ? (
        <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-start relative z-10">
          
          {/* Left Side: Invoice Preview */}
          <div className="bg-white rounded-xl shadow-lg border border-slate-200 p-8">
            
            <div className="flex justify-between items-start mb-8 pb-8 border-b border-slate-100">
              <div>
                <div className="flex items-center gap-2 text-blue-600 font-black text-xl mb-4">
                  <Building2 className="w-6 h-6" /> ACME Corp.
                </div>
                <p className="text-sm text-slate-500">123 Business Rd.</p>
                <p className="text-sm text-slate-500">Suite 400</p>
                <p className="text-sm text-slate-500">San Francisco, CA</p>
              </div>
              <div className="text-right">
                <h2 className="text-3xl font-black text-slate-900 mb-2 uppercase tracking-widest">Invoice</h2>
                <p className="text-sm font-bold text-slate-500">#INV-2023-089</p>
                <p className="text-xs text-slate-400 mt-2">Due Date: Oct 15, 2023</p>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Billed To</h3>
              <p className="font-bold text-slate-900">John Doe Consulting</p>
              <p className="text-sm text-slate-500">john.doe@example.com</p>
            </div>

            <div className="mb-8">
              <table className="w-full text-sm text-left">
                <thead className="text-xs text-slate-400 uppercase tracking-widest border-b border-slate-200">
                  <tr>
                    <th className="pb-3 font-bold">Description</th>
                    <th className="pb-3 font-bold text-right">Amount</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr>
                    <td className="py-4 text-slate-700">Web Development Retainer (Sep)</td>
                    <td className="py-4 text-right font-medium text-slate-900">$1,000.00</td>
                  </tr>
                  <tr>
                    <td className="py-4 text-slate-700">Server Hosting & Maintenance</td>
                    <td className="py-4 text-right font-medium text-slate-900">$250.00</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="flex justify-between items-end pt-4 border-t border-slate-200">
              <span className="font-bold text-slate-500">Total Due</span>
              <span className="text-3xl font-black text-blue-600">${TOTAL_AMOUNT.toFixed(2)}</span>
            </div>

          </div>

          {/* Right Side: Checkout Form */}
          <div className="bg-white rounded-xl shadow-lg border border-slate-200 p-8 flex flex-col">
            <h2 className="text-xl font-black text-slate-900 mb-6">Payment Method</h2>

            <form onSubmit={handlePay} className="space-y-6">
              
              <div className="space-y-4">
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest">Cardholder Name</label>
                <input pattern="[a-zA-Z\\s\\-]+" title="Letters only" required type="text" placeholder="Name on Card" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors text-sm font-medium" />
              </div>

              <div className="space-y-4">
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest">Card Details</label>
                <div className="relative">
                  <CreditCard className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                  <input onInput={(e) => { e.currentTarget.value = e.currentTarget.value.replace(/[^0-9\s]/g, "").substring(0, 19); }} pattern="[\\d\\s]{16,19}" maxLength={19} title="16 digit card number" required type="text" placeholder="Card Number" className="w-full bg-slate-50 border border-slate-200 rounded-lg pl-12 pr-4 py-3 text-slate-900 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors font-mono tracking-widest text-sm" />
                </div>
                
                <div className="flex gap-4">
                  <input onInput={(e) => { e.currentTarget.value = e.currentTarget.value.replace(/[^0-9\/]/g, "").substring(0, 5); }} pattern="(0[1-9]|1[0-2])\\/?([0-9]{2})" maxLength={5} title="Format: MM/YY" required type="text" placeholder="MM/YY" className="w-1/2 bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors font-mono tracking-widest text-center text-sm" />
                  <input onInput={(e) => { e.currentTarget.value = e.currentTarget.value.replace(/[^0-9]/g, "").substring(0, 4); }} pattern="\\d{3,4}" maxLength={4} title="3 or 4 digit CVV/CVC" required type="text" placeholder="CVV" className="w-1/2 bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors font-mono tracking-widest text-center text-sm" />
                </div>
              </div>

              <div className="pt-6 border-t border-slate-100">
                <button 
                  type="submit" 
                  disabled={isProcessing}
                  className="w-full py-4 bg-blue-600 text-white rounded-lg font-bold text-base flex items-center justify-center gap-2 hover:bg-blue-700 transition-all shadow-[0_4px_14px_0_rgba(37,99,235,0.39)] disabled:opacity-70 disabled:shadow-none"
                >
                  {isProcessing ? (
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  ) : (
                    <>Pay ${TOTAL_AMOUNT.toFixed(2)} <ArrowRight className="w-4 h-4" /></>
                  )}
                </button>
                <div className="flex items-center justify-center gap-2 mt-4 text-xs text-slate-400 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" /> Payments are secure and encrypted.
                </div>
              </div>
            </form>
          </div>

        </div>
      ) : (
        <div className="max-w-md w-full bg-white rounded-xl p-12 shadow-xl border border-slate-200 text-center animate-in zoom-in duration-500 relative z-10">
           <div className="w-20 h-20 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-6">
             <CheckCircle2 className="w-10 h-10 text-emerald-600" strokeWidth={3} />
           </div>
           <h2 className="text-2xl font-black text-slate-900 mb-2">Payment Received</h2>
           <p className="text-slate-500 mb-8 font-medium">Thank you for your business.</p>
           
           <div className="bg-slate-50 rounded-lg p-6 mb-8 text-sm text-slate-700 border border-slate-100">
             <div className="flex justify-between mb-3 pb-3 border-b border-slate-200">
               <span className="font-bold text-slate-500">Amount Paid</span>
               <span className="font-bold text-slate-900">${TOTAL_AMOUNT.toFixed(2)}</span>
             </div>
             <div className="flex justify-between">
               <span className="font-bold text-slate-500">Invoice</span>
               <span className="font-medium text-slate-900">#INV-2023-089</span>
             </div>
           </div>

           <div className="flex flex-col gap-3">
             <button type="button" 
                onClick={handleDownload}
                className="w-full py-3 bg-white border-2 border-slate-200 hover:border-slate-300 text-slate-700 font-bold rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                <Download className="w-4 h-4" /> Download Receipt (PDF)
              </button>
             <button type="button" 
                onClick={() => { setIsSuccess(false); }}
                className="w-full py-3 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-lg transition-colors"
              >
                Return to Dashboard
              </button>
           </div>
        </div>
      )}

    </div>
  );
}
