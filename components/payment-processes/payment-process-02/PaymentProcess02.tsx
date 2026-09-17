"use client";
import React, { useState } from "react";
import { Check, CreditCard, ChevronDown, ShoppingBag, Shield, Mail, User } from "lucide-react";

export default function PaymentProcess02() {
  const [activeAccordion, setActiveAccordion] = useState(1);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  // Data State
  const [contactInfo, setContactInfo] = useState({ email: '', phone: '' });
  const [paymentInfo, setPaymentInfo] = useState({ card: '', expiry: '', cvc: '', name: '' });

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
      <div className="w-full min-h-[600px] bg-neutral-900 flex items-center justify-center p-4">
        <div className="bg-neutral-800 rounded-2xl p-10 text-center max-w-sm w-full border border-neutral-700 shadow-2xl">
          <div className="w-20 h-20 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <Check className="w-10 h-10" />
          </div>
          <h2 className="text-2xl font-bold text-white mb-3">Payment Complete</h2>
          <p className="text-neutral-400 mb-8 text-sm">Receipt sent to {contactInfo.email || 'your email'}.</p>
          <button type="button" onClick={() => setIsSuccess(false)} className="w-full py-3 bg-white text-neutral-900 rounded-lg font-bold hover:bg-neutral-200 transition-colors">
            Done
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full min-h-[700px] bg-neutral-100 flex items-center justify-center p-4 sm:p-6 md:p-8 font-sans">
      <div className="max-w-4xl w-full grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Accordion Form */}
        <div className="lg:col-span-2 space-y-4">
          
          {/* Accordion 1: Contact */}
          <div className={`bg-white rounded-2xl border transition-all duration-300 overflow-hidden ${activeAccordion === 1 ? 'border-neutral-300 shadow-lg' : 'border-neutral-200 shadow-sm'}`}>
            <div 
              onClick={() => setActiveAccordion(1)}
              className="p-5 flex items-center justify-between cursor-pointer bg-white hover:bg-neutral-50 transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm transition-colors ${activeAccordion === 1 ? 'bg-neutral-900 text-white' : 'bg-neutral-200 text-neutral-600'}`}>1</div>
                <div>
                  <h3 className="font-bold text-neutral-900">Contact Information</h3>
                  {activeAccordion !== 1 && contactInfo.email && <p className="text-sm text-neutral-500">{contactInfo.email}</p>}
                </div>
              </div>
              <ChevronDown className={`w-5 h-5 text-neutral-400 transition-transform duration-300 ${activeAccordion === 1 ? 'rotate-180' : ''}`} />
            </div>
            
            <div className={`px-5 transition-all duration-500 ease-in-out ${activeAccordion === 1 ? 'max-h-[500px] pb-5 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
              <div className="pt-2 space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-neutral-700 mb-1.5">Email Address</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
                    <input required type="email" placeholder="you@example.com" value={contactInfo.email} onChange={(e) => setContactInfo({...contactInfo, email: e.target.value})} className="w-full pl-10 pr-4 py-2.5 bg-neutral-50 border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-900 transition-all" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-neutral-700 mb-1.5">Phone Number (Optional)</label>
                  <input required type="tel" placeholder="+1 (555) 000-0000" value={contactInfo.phone} onChange={(e) => setContactInfo({...contactInfo, phone: e.target.value})} className="w-full px-4 py-2.5 bg-neutral-50 border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-900 transition-all" />
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
      const originalHandler = () => setActiveAccordion(2);
      if (typeof originalHandler === 'function') (originalHandler as any)(e);
    }} className="mt-4 w-full py-3 bg-neutral-900 text-white font-bold rounded-lg hover:bg-neutral-800 transition-colors">
                  Continue to Payment
                </button>
              </div>
            </div>
          </div>

          {/* Accordion 2: Payment */}
          <div className={`bg-white rounded-2xl border transition-all duration-300 overflow-hidden ${activeAccordion === 2 ? 'border-neutral-300 shadow-lg' : 'border-neutral-200 shadow-sm'}`}>
            <div 
              onClick={() => setActiveAccordion(2)}
              className="p-5 flex items-center justify-between cursor-pointer bg-white hover:bg-neutral-50 transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm transition-colors ${activeAccordion === 2 ? 'bg-neutral-900 text-white' : 'bg-neutral-200 text-neutral-600'}`}>2</div>
                <div>
                  <h3 className="font-bold text-neutral-900">Payment Details</h3>
                  {activeAccordion !== 2 && paymentInfo.card && <p className="text-sm text-neutral-500">Card ending in {paymentInfo.card.slice(-4) || '****'}</p>}
                </div>
              </div>
              <ChevronDown className={`w-5 h-5 text-neutral-400 transition-transform duration-300 ${activeAccordion === 2 ? 'rotate-180' : ''}`} />
            </div>
            
            <div className={`px-5 transition-all duration-500 ease-in-out ${activeAccordion === 2 ? 'max-h-[600px] pb-5 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
              <div className="pt-2 space-y-4">
                
                {/* Credit Card Graphic */}
                <div className="w-full h-40 bg-gradient-to-br from-neutral-800 to-neutral-900 rounded-xl p-5 relative overflow-hidden text-white shadow-inner mb-6">
                  <div className="absolute top-[-20px] right-[-20px] w-32 h-32 bg-white/5 rounded-full blur-2xl"></div>
                  <div className="flex justify-between items-start mb-6">
                    <CreditCard className="w-6 h-6 text-neutral-400" />
                    <div className="w-10 h-6 bg-white/20 rounded-md"></div>
                  </div>
                  <div className="font-mono text-lg tracking-widest mb-2 opacity-90">{paymentInfo.card || '•••• •••• •••• ••••'}</div>
                  <div className="flex justify-between text-xs font-mono text-neutral-400 uppercase tracking-wider">
                    <span>{paymentInfo.name || 'CARDHOLDER NAME'}</span>
                    <span>{paymentInfo.expiry || 'MM/YY'}</span>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-neutral-700 mb-1.5">Cardholder Name</label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
                    <input onInput={(e) => { e.currentTarget.value = e.currentTarget.value.replace(/[^a-zA-Z\s\-]/g, ""); }} pattern="[a-zA-Z\\s\\-]+" title="Letters only" required type="text" placeholder="John Doe" value={paymentInfo.name} onChange={e => setPaymentInfo({...paymentInfo, name: e.target.value})} className="w-full pl-10 pr-4 py-2.5 bg-neutral-50 border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-900 transition-all" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-neutral-700 mb-1.5">Card Number</label>
                  <input onInput={(e) => { e.currentTarget.value = e.currentTarget.value.replace(/[^0-9\s]/g, "").substring(0, 19); }} pattern="[\\d\\s]{16,19}" maxLength={19} title="16 digit card number" required type="text" placeholder="0000 0000 0000 0000" value={paymentInfo.card} onChange={e => setPaymentInfo({...paymentInfo, card: e.target.value})} className="w-full px-4 py-2.5 bg-neutral-50 border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-900 transition-all font-mono" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-neutral-700 mb-1.5">Expiry</label>
                    <input onInput={(e) => { e.currentTarget.value = e.currentTarget.value.replace(/[^0-9\/]/g, "").substring(0, 5); }} pattern="(0[1-9]|1[0-2])\\/?([0-9]{2})" maxLength={5} title="Format: MM/YY" required type="text" placeholder="MM/YY" value={paymentInfo.expiry} onChange={e => setPaymentInfo({...paymentInfo, expiry: e.target.value})} className="w-full px-4 py-2.5 bg-neutral-50 border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-900 transition-all font-mono" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-neutral-700 mb-1.5">CVC</label>
                    <input onInput={(e) => { e.currentTarget.value = e.currentTarget.value.replace(/[^0-9]/g, "").substring(0, 4); }} pattern="\\d{3,4}" maxLength={4} title="3 or 4 digit CVV/CVC" required type="password" placeholder="•••" value={paymentInfo.cvc} onChange={e => setPaymentInfo({...paymentInfo, cvc: e.target.value})} className="w-full px-4 py-2.5 bg-neutral-50 border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-900 transition-all font-mono" />
                  </div>
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
      const originalHandler = () => setActiveAccordion(3);
      if (typeof originalHandler === 'function') (originalHandler as any)(e);
      else if (typeof originalHandler === 'object' && originalHandler !== null) { /* ignore event objects */ }
    }} className="mt-4 w-full py-3 bg-neutral-900 text-white font-bold rounded-lg hover:bg-neutral-800 transition-colors">
                  Review Order
                </button>
              </div>
            </div>
          </div>

          {/* Accordion 3: Review */}
          <div className={`bg-white rounded-2xl border transition-all duration-300 overflow-hidden ${activeAccordion === 3 ? 'border-neutral-300 shadow-lg' : 'border-neutral-200 shadow-sm'}`}>
            <div 
              onClick={() => setActiveAccordion(3)}
              className="p-5 flex items-center justify-between cursor-pointer bg-white hover:bg-neutral-50 transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm transition-colors ${activeAccordion === 3 ? 'bg-neutral-900 text-white' : 'bg-neutral-200 text-neutral-600'}`}>3</div>
                <div>
                  <h3 className="font-bold text-neutral-900">Review & Confirm</h3>
                </div>
              </div>
              <ChevronDown className={`w-5 h-5 text-neutral-400 transition-transform duration-300 ${activeAccordion === 3 ? 'rotate-180' : ''}`} />
            </div>
            
            <div className={`px-5 transition-all duration-500 ease-in-out ${activeAccordion === 3 ? 'max-h-[500px] pb-5 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
              <div className="pt-2 space-y-4">
                <p className="text-sm text-neutral-600">Please review your information before completing the purchase.</p>
                
                <div className="bg-neutral-50 p-4 rounded-xl border border-neutral-100 space-y-2 text-sm">
                  <div className="flex justify-between"><span className="text-neutral-500">Email:</span><span className="font-medium text-neutral-900">{contactInfo.email || '-'}</span></div>
                  <div className="flex justify-between"><span className="text-neutral-500">Phone:</span><span className="font-medium text-neutral-900">{contactInfo.phone || '-'}</span></div>
                  <div className="flex justify-between"><span className="text-neutral-500">Card:</span><span className="font-medium text-neutral-900">**** **** **** {paymentInfo.card.slice(-4) || '****'}</span></div>
                </div>

                <div className="flex items-center gap-2 text-xs text-neutral-500 mt-4">
                  <Shield className="w-4 h-4 text-green-600" /> All transactions are secure and encrypted.
                </div>

                <form onSubmit={handlePay}>
                  <button type="submit" disabled={isProcessing} className="mt-4 w-full py-4 bg-green-600 text-white font-bold rounded-xl hover:bg-green-700 transition-all shadow-md hover:shadow-lg disabled:opacity-70 flex justify-center items-center gap-2">
                    {isProcessing ? 'Processing...' : 'Pay $149.00'}
                  </button>
                </form>
              </div>
            </div>
          </div>

        </div>

        {/* Order Summary Sidebar */}
        <div className="bg-white p-6 rounded-2xl border border-neutral-200 h-fit sticky top-6 shadow-sm">
          <h3 className="text-lg font-bold text-neutral-900 mb-4 flex items-center gap-2">
            <ShoppingBag className="w-5 h-5" /> Summary
          </h3>
          <div className="space-y-4">
            <div className="flex gap-4 items-center">
              <div className="w-16 h-16 bg-neutral-100 rounded-lg flex items-center justify-center">
                <img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=100&q=80" alt="Product" className="w-12 h-12 object-cover rounded mix-blend-multiply" />
              </div>
              <div>
                <h4 className="font-semibold text-neutral-900 text-sm">Wireless Headphones</h4>
                <p className="text-neutral-500 text-xs">Qty: 1</p>
                <p className="font-bold text-neutral-900 text-sm mt-1">$129.00</p>
              </div>
            </div>
          </div>
          
          <div className="mt-6 pt-4 border-t border-neutral-100 space-y-2 text-sm">
            <div className="flex justify-between text-neutral-600"><span>Subtotal</span><span>$129.00</span></div>
            <div className="flex justify-between text-neutral-600"><span>Shipping</span><span>$10.00</span></div>
            <div className="flex justify-between text-neutral-600"><span>Taxes</span><span>$10.00</span></div>
          </div>
          
          <div className="mt-4 pt-4 border-t border-neutral-200 flex justify-between items-center">
            <span className="font-bold text-neutral-900">Total</span>
            <span className="text-2xl font-black text-neutral-900">$149.00</span>
          </div>
        </div>

      </div>
    </div>
  );
}
