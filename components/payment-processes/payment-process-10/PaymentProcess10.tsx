"use client";
import React, { useState } from "react";
import { CheckCircle, ShieldCheck, Truck, Lock, User, MapPin, CreditCard, Apple } from "lucide-react";

export default function PaymentProcess10() {
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'apple'>('card');

  const handlePay = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
    }, 2000);
  };

  if (isSuccess) {
    return (
      <div className="w-full min-h-screen bg-gray-50 flex items-center justify-center p-6 font-sans">
        <div className="bg-white p-12 rounded-3xl shadow-2xl text-center max-w-lg w-full border border-gray-100">
          <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10 text-emerald-600" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Order Successful!</h2>
          <p className="text-gray-500 mb-8">Your order is confirmed. You will receive an email confirmation shortly.</p>
          <div className="bg-gray-50 p-4 rounded-xl text-left space-y-3 mb-8">
            <div className="flex justify-between">
              <span className="text-gray-500">Order Number</span>
              <span className="font-bold text-gray-900">#ORD-99382-X</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Total Paid</span>
              <span className="font-bold text-gray-900">$215.00</span>
            </div>
          </div>
          <button type="button" onClick={(e: any) => {
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
      const originalHandler = () => setIsSuccess(false);
      if (typeof originalHandler === 'function') (originalHandler as any)(e);
    }} className="w-full py-4 bg-indigo-600 text-white rounded-xl font-bold text-lg hover:bg-indigo-700 transition-colors">
            Continue Shopping
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen bg-white font-sans text-gray-900 selection:bg-indigo-100 selection:text-indigo-900">
      
      {/* Top Navigation Bar */}
      <nav className="border-b border-gray-200 bg-white sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="font-bold text-xl tracking-tight">BRAND.</div>
          <div className="flex items-center gap-2 text-sm text-gray-500 font-medium">
            <ShieldCheck className="w-4 h-4 text-green-500" /> Secure Checkout
          </div>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col lg:flex-row gap-12">
        
        {/* Left Side: Long Scrolling Form */}
        <div className="w-full lg:w-7/12 xl:w-2/3">
          <form onSubmit={handlePay} className="space-y-12">
            
            {/* Section: Contact Information */}
            <section>
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-sm">1</span> 
                Contact Information
              </h2>
              <div className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">First Name</label>
                    <input pattern="[a-zA-Z\\s\\-]+" title="Letters only" required type="text" className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all"  minLength={2} maxLength={50} />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Last Name</label>
                    <input pattern="[a-zA-Z\\s\\-]+" title="Letters only" required type="text" className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all"  minLength={2} maxLength={50} />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                  <input pattern="[a-zA-Z\\s\\-]+" title="Letters only" required type="email" className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all"  minLength={5} maxLength={100} />
                </div>
              </div>
            </section>

            {/* Section: Shipping Address */}
            <section>
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-sm">2</span> 
                Shipping Address
              </h2>
              <div className="space-y-5">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Street Address</label>
                  <input pattern="[a-zA-Z\\s\\-]+" title="Letters only" required type="text" className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all"  minLength={2} maxLength={50} />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Apartment, suite, etc. (optional)</label>
                  <input pattern="[a-zA-Z\\s\\-]+" title="Letters only" required type="text" className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all"  minLength={2} maxLength={50} />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                  <div className="md:col-span-1">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">City</label>
                    <input pattern="[a-zA-Z\\s\\-]+" title="Letters only" required type="text" className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all"  minLength={2} maxLength={50} />
                  </div>
                  <div className="md:col-span-1">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">State</label>
                    <input pattern="[a-zA-Z\\s\\-]+" title="Letters only" required type="text" className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all"  minLength={2} maxLength={50} />
                  </div>
                  <div className="md:col-span-1">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Zip Code</label>
                    <input pattern="[a-zA-Z\\s\\-]+" title="Letters only" required type="text" className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all"  minLength={2} maxLength={50} />
                  </div>
                </div>
              </div>
            </section>

            {/* Section: Shipping Method */}
            <section>
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-sm">3</span> 
                Shipping Method
              </h2>
              <div className="space-y-4">
                <label className="flex items-center justify-between p-5 border-2 border-indigo-500 bg-indigo-50/50 rounded-xl cursor-pointer">
                  <div className="flex items-center gap-4">
                    <input pattern="[a-zA-Z\\s\\-]+" title="Letters only" required type="radio" name="shipping" defaultChecked className="w-5 h-5 text-indigo-600 focus:ring-indigo-500"  minLength={2} maxLength={50} />
                    <div>
                      <div className="font-bold text-gray-900">Standard Shipping</div>
                      <div className="text-sm text-gray-500">3-5 business days</div>
                    </div>
                  </div>
                  <div className="font-bold text-gray-900">Free</div>
                </label>

                <label className="flex items-center justify-between p-5 border-2 border-gray-100 hover:border-gray-200 rounded-xl cursor-pointer transition-colors">
                  <div className="flex items-center gap-4">
                    <input pattern="[a-zA-Z\\s\\-]+" title="Letters only" required type="radio" name="shipping" className="w-5 h-5 text-indigo-600 focus:ring-indigo-500"  minLength={2} maxLength={50} />
                    <div>
                      <div className="font-bold text-gray-900">Express Shipping</div>
                      <div className="text-sm text-gray-500">1-2 business days</div>
                    </div>
                  </div>
                  <div className="font-bold text-gray-900">$15.00</div>
                </label>
              </div>
            </section>

            {/* Section: Payment */}
            <section>
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-sm">4</span> 
                Payment
              </h2>
              
              <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden">
                {/* Header: Tabs */}
                <div className="flex border-b border-gray-200">
                  <button type="button" onClick={(e: any) => {
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
      const originalHandler = () => setPaymentMethod('card');
      if (typeof originalHandler === 'function') (originalHandler as any)(e);
      else if (typeof originalHandler === 'object' && originalHandler !== null) { /* ignore event objects */ }
    }} className={`flex-1 p-4 flex justify-center items-center gap-2 font-semibold transition-colors ${paymentMethod === 'card' ? 'bg-indigo-50 text-indigo-700 border-b-2 border-indigo-600' : 'text-gray-500 hover:bg-gray-50'}`}>
                    <CreditCard className="w-5 h-5" /> Credit Card
                  </button>
                  <button type="button" onClick={() => setPaymentMethod('apple')} className={`flex-1 p-4 flex justify-center items-center gap-2 font-semibold transition-colors ${paymentMethod === 'apple' ? 'bg-gray-900 text-white border-b-2 border-gray-900' : 'text-gray-500 hover:bg-gray-50'}`}>
                    <Apple className="w-5 h-5" /> Apple Pay
                  </button>
                </div>

                {/* Content */}
                <div className="p-6 md:p-8">
                  {paymentMethod === 'card' ? (
                    <div className="space-y-6">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Card Number</label>
                        <div className="relative">
                          <CreditCard className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                          <input onInput={(e) => { e.currentTarget.value = e.currentTarget.value.replace(/[^0-9\s]/g, "").substring(0, 19); }} pattern="[\\d\\s]{16,19}" maxLength={19} title="16 digit card number" required type="text" placeholder="0000 0000 0000 0000" className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all font-mono text-sm"  minLength={16} />
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-5">
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">Expiry Date</label>
                          <input onInput={(e) => { e.currentTarget.value = e.currentTarget.value.replace(/[^0-9\/]/g, "").substring(0, 5); }} pattern="(0[1-9]|1[0-2])\\/?([0-9]{2})" maxLength={5} title="Format: MM/YY" required type="text" placeholder="MM/YY" className="w-full px-4 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all font-mono text-sm"  minLength={5} />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">CVC</label>
                          <input onInput={(e) => { e.currentTarget.value = e.currentTarget.value.replace(/[^0-9]/g, "").substring(0, 4); }} pattern="\\d{3,4}" maxLength={4} title="3 or 4 digit CVV/CVC" required type="password" placeholder="•••" className="w-full px-4 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all font-mono text-sm"  minLength={3} />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Name on Card</label>
                        <input pattern="[a-zA-Z\\s\\-]+" title="Letters only" required type="text" placeholder="Full name as it appears on card" className="w-full px-4 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all"  minLength={2} maxLength={50} />
                      </div>
                    </div>
                  ) : (
                    <div className="py-8 text-center space-y-4">
                      <Apple className="w-16 h-16 mx-auto text-gray-900" />
                      <p className="text-gray-500 max-w-sm mx-auto">You'll be redirected to Apple to complete your purchase securely.</p>
                    </div>
                  )}
                </div>
              </div>
            </section>

            {/* Mobile Submit Button (hidden on desktop) */}
            <div className="block lg:hidden mt-8">
              <button type="submit" disabled={isProcessing} className="w-full py-5 bg-indigo-600 text-white rounded-2xl font-bold text-xl flex items-center justify-center gap-3 shadow-xl shadow-indigo-600/30 hover:-translate-y-1 transition-all disabled:opacity-70 disabled:hover:translate-y-0">
                {isProcessing ? 'Processing...' : 'Pay $215.00'} <Lock className="w-5 h-5" />
              </button>
            </div>

          </form>
        </div>

        {/* Right Side: Sticky Sidebar (Order Summary) */}
        <div className="w-full lg:w-5/12 xl:w-1/3 relative">
          <div className="sticky top-24 bg-gray-50 border border-gray-200 rounded-3xl p-8 shadow-sm">
            <h3 className="text-xl font-bold mb-6">Order Summary</h3>
            
            <div className="space-y-6 mb-8">
              <div className="flex gap-4">
                <div className="w-20 h-20 bg-white rounded-xl border border-gray-200 p-2 overflow-hidden flex items-center justify-center">
                  <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=100&q=80" alt="Shoes" className="w-full h-full object-cover mix-blend-multiply" />
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-gray-900">Nike Air Max 270</h4>
                  <p className="text-sm text-gray-500">Size: 10</p>
                  <p className="font-semibold mt-1">$150.00</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-20 h-20 bg-white rounded-xl border border-gray-200 p-2 overflow-hidden flex items-center justify-center">
                  <img src="https://images.unsplash.com/photo-1584916201218-f4242ceb4809?w=100&q=80" alt="Bag" className="w-full h-full object-cover mix-blend-multiply" />
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-gray-900">Urban Backpack</h4>
                  <p className="text-sm text-gray-500">Color: Black</p>
                  <p className="font-semibold mt-1">$65.00</p>
                </div>
              </div>
            </div>

            <div className="space-y-3 pt-6 border-t border-gray-200">
              <div className="flex justify-between text-gray-600">
                <span>Subtotal</span>
                <span className="font-medium">$215.00</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Shipping</span>
                <span className="font-medium">Calculated next step</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Taxes</span>
                <span className="font-medium">Calculated next step</span>
              </div>
            </div>

            <div className="flex justify-between items-end mt-6 pt-6 border-t border-gray-200 mb-8">
              <span className="font-bold text-lg text-gray-900">Total</span>
              <div className="text-right">
                <span className="text-sm text-gray-500">USD</span>
                <span className="text-3xl font-black text-gray-900 ml-2">$215.00</span>
              </div>
            </div>

            {/* Desktop Submit Button */}
            <div className="hidden lg:block">
              <button type="button" 
                onClick={(e: any) => {
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
      const originalHandler = (e) => {
                  const form = document.querySelector('form');
                  if (form) form.requestSubmit();
                ;
      if (typeof originalHandler === 'function') (originalHandler as any)(e);
      else if (typeof originalHandler === 'object' && originalHandler !== null) { /* ignore event objects */ }
    }}}
                disabled={isProcessing} 
                className="w-full py-5 bg-indigo-600 text-white rounded-2xl font-bold text-xl flex items-center justify-center gap-3 shadow-xl shadow-indigo-600/30 hover:-translate-y-1 transition-all disabled:opacity-70 disabled:hover:translate-y-0"
              >
                {isProcessing ? 'Processing...' : 'Pay $215.00'} <Lock className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
