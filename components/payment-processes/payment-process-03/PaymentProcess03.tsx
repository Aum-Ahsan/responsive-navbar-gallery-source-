"use client";
import React, { useState } from "react";
import { Check, CreditCard, ArrowLeft, ArrowRight, Apple, Lock, ShieldCheck } from "lucide-react";

export default function PaymentProcess03() {
  const [isProcessing, setIsProcessing] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'apple'>('card');

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
      <div className="w-full h-screen bg-rose-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-3xl p-12 text-center max-w-lg w-full shadow-[0_20px_50px_rgba(8,_112,_184,_0.07)] border border-rose-100">
          <div className="w-24 h-24 bg-rose-100 text-rose-600 rounded-full flex items-center justify-center mx-auto mb-8">
            <Check className="w-12 h-12" />
          </div>
          <h2 className="text-3xl font-black text-slate-900 mb-4 tracking-tight">Payment Successful</h2>
          <p className="text-slate-500 mb-10 text-lg leading-relaxed">Thank you for your purchase! We've sent a confirmation email with your receipt and order details.</p>
          <button type="button" onClick={() => setIsSuccess(false)} className="w-full py-4 bg-slate-900 text-white rounded-xl font-bold text-lg hover:bg-slate-800 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            Back to Shop
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen flex flex-col md:flex-row font-sans">
      
      {/* Left Side: Summary & Brand */}
      <div className="w-full md:w-2/5 lg:w-1/2 bg-slate-900 text-white p-8 md:p-12 lg:p-16 flex flex-col justify-between relative overflow-hidden">
        {/* Background Decorative Pattern */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
        <div className="absolute -top-[20%] -left-[10%] w-[70%] h-[70%] bg-rose-500 rounded-full blur-[120px] opacity-30 mix-blend-screen pointer-events-none"></div>

        <div className="relative z-10">
          <button type="button" className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-12 w-fit font-medium">
            <ArrowLeft className="w-4 h-4" /> Return to store
          </button>
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight mb-4">Complete<br/>your order.</h1>
          <p className="text-slate-400 text-lg mb-12">You're just one step away from getting your items.</p>

          <div className="space-y-6">
            {/* Cart Items */}
            <div className="flex items-center gap-4 bg-white/5 p-4 rounded-2xl border border-white/10 backdrop-blur-sm">
              <div className="w-16 h-16 bg-white/10 rounded-xl overflow-hidden">
                <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=200&q=80" alt="Watch" className="w-full h-full object-cover mix-blend-overlay" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-lg">Smart Watch Pro</h3>
                <p className="text-slate-400">Space Gray • 44mm</p>
              </div>
              <div className="text-right">
                <div className="font-bold text-lg">$399</div>
                <div className="text-slate-400 text-sm">Qty: 1</div>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-white/5 p-4 rounded-2xl border border-white/10 backdrop-blur-sm">
              <div className="w-16 h-16 bg-white/10 rounded-xl overflow-hidden">
                <img src="https://images.unsplash.com/photo-1606220838315-056192d5e927?w=200&q=80" alt="Pods" className="w-full h-full object-cover mix-blend-overlay" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-lg">Wireless Pods</h3>
                <p className="text-slate-400">Matte Black</p>
              </div>
              <div className="text-right">
                <div className="font-bold text-lg">$149</div>
                <div className="text-slate-400 text-sm">Qty: 1</div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative z-10 mt-12 pt-8 border-t border-white/10">
          <div className="space-y-3 text-slate-300 text-lg">
            <div className="flex justify-between"><span>Subtotal</span><span>$548.00</span></div>
            <div className="flex justify-between"><span>Shipping</span><span>Free</span></div>
            <div className="flex justify-between text-rose-400"><span>Discount (10%)</span><span>-$54.80</span></div>
          </div>
          <div className="flex justify-between items-end mt-6 pt-6 border-t border-white/10">
            <span className="text-xl font-medium text-slate-300">Total</span>
            <span className="text-4xl lg:text-5xl font-black">$493.20</span>
          </div>
        </div>
      </div>

      {/* Right Side: Form */}
      <div className="w-full md:w-3/5 lg:w-1/2 bg-white flex items-center justify-center p-8 md:p-12 lg:p-20">
        <div className="w-full max-w-md">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">Payment Method</h2>
          
          <div className="grid grid-cols-2 gap-4 mb-8">
            <button type="button" 
              onClick={() => setPaymentMethod('card')}
              className={`flex flex-col items-center justify-center gap-3 p-4 rounded-2xl border-2 transition-all ${paymentMethod === 'card' ? 'border-rose-500 bg-rose-50 text-rose-600' : 'border-slate-200 hover:border-slate-300 text-slate-500'}`}
            >
              <CreditCard className="w-6 h-6" />
              <span className="font-semibold">Credit Card</span>
            </button>
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
      const originalHandler = () => setPaymentMethod('apple');
      if (typeof originalHandler === 'function') (originalHandler as any)(e);
      else if (typeof originalHandler === 'object' && originalHandler !== null) { /* ignore event objects */ }
    }}
              className={`flex flex-col items-center justify-center gap-3 p-4 rounded-2xl border-2 transition-all ${paymentMethod === 'apple' ? 'border-slate-900 bg-slate-900 text-white' : 'border-slate-200 hover:border-slate-300 text-slate-500'}`}
            >
              <Apple className="w-6 h-6" />
              <span className="font-semibold">Apple Pay</span>
            </button>
          </div>

          <form onSubmit={handlePay} className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            
            {paymentMethod === 'card' ? (
              <>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Card Information</label>
                  <div className="border border-slate-200 rounded-xl overflow-hidden focus-within:ring-2 focus-within:ring-rose-500 focus-within:border-transparent transition-all shadow-sm">
                    <input onInput={(e) => { e.currentTarget.value = e.currentTarget.value.replace(/[^0-9\s]/g, "").substring(0, 19); }} pattern="[\\d\\s]{16,19}" maxLength={19} title="16 digit card number" required type="text" placeholder="Card number" className="w-full p-4 border-b border-slate-200 focus:outline-none font-mono"  minLength={16} />
                    <div className="flex">
                      <input onInput={(e) => { e.currentTarget.value = e.currentTarget.value.replace(/[^0-9\/]/g, "").substring(0, 5); }} pattern="(0[1-9]|1[0-2])\\/?([0-9]{2})" maxLength={5} title="Format: MM/YY" required type="text" placeholder="MM / YY" className="w-1/2 p-4 border-r border-slate-200 focus:outline-none font-mono"  minLength={5} />
                      <input onInput={(e) => { e.currentTarget.value = e.currentTarget.value.replace(/[^0-9]/g, "").substring(0, 4); }} pattern="\\d{3,4}" maxLength={4} title="3 or 4 digit CVV/CVC" required type="text" placeholder="CVC" className="w-1/2 p-4 focus:outline-none font-mono"  minLength={3} />
                    </div>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Name on Card</label>
                  <input pattern="[a-zA-Z\\s\\-]+" title="Letters only" required type="text" placeholder="Name on card" className="w-full p-4 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all shadow-sm"  minLength={2} maxLength={50} />
                </div>
              </>
            ) : (
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 text-center space-y-4">
                <Apple className="w-12 h-12 mx-auto text-slate-900" />
                <p className="text-slate-600">You will be redirected to Apple to complete your purchase securely.</p>
              </div>
            )}

            {serverError && (
              <div className="text-red-500 text-sm font-semibold mb-4 text-center bg-red-50 p-3 rounded-xl border border-red-200 animate-in fade-in zoom-in duration-300">
                {serverError}
              </div>
            )}
            <button type="submit" disabled={isProcessing} className="w-full py-4 mt-4 bg-rose-500 text-white rounded-xl font-bold text-lg hover:bg-rose-600 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 flex items-center justify-center gap-2 disabled:opacity-70 disabled:hover:translate-y-0 disabled:hover:shadow-lg">
              {isProcessing ? 'Processing...' : 'Pay $493.20'}
              {!isProcessing && <ArrowRight className="w-5 h-5" />}
            </button>
            
            <div className="flex items-center justify-center gap-2 text-sm text-slate-500 pt-4">
              <ShieldCheck className="w-4 h-4 text-green-500" /> SSL Encrypted Checkout
            </div>
          </form>

        </div>
      </div>
    </div>
  );
}
