"use client";
import React, { useState } from "react";
import { CreditCard, MapPin, Package, Receipt, CheckCircle, Plus } from "lucide-react";

export default function PaymentProcess08() {
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

  if (isSuccess) {
    return (
      <div className="w-full min-h-[600px] bg-[#f4f3ef] flex items-center justify-center p-6 font-sans">
        <div className="bg-white p-12 rounded-[2rem] shadow-xl text-center max-w-md w-full border border-gray-100 animate-in zoom-in-95 duration-500">
          <div className="w-24 h-24 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-12 h-12 text-green-500" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Payment Confirmed</h2>
          <p className="text-gray-500 mb-8">Your order #ORD-84392 has been placed successfully.</p>
          <button type="button" onClick={() => setIsSuccess(false)} className="px-8 py-3 bg-gray-900 text-white rounded-full font-bold hover:bg-gray-800 transition-colors">
            Back to Dashboard
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen bg-[#f4f3ef] p-4 md:p-8 lg:p-12 font-sans flex justify-center">
      <div className="max-w-6xl w-full">
        
        <header className="mb-8 md:mb-12 flex justify-between items-end">
          <div>
            <h1 className="text-3xl md:text-5xl font-black text-gray-900 tracking-tight mb-2">Checkout</h1>
            <p className="text-gray-500 font-medium">Review and complete your order.</p>
          </div>
          <div className="hidden md:block">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>
              <span className="text-sm font-bold text-gray-700 uppercase tracking-widest">Secure Connection</span>
            </div>
          </div>
        </header>

        <form onSubmit={handlePay} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-min">
          
          {/* Card 1: Delivery Address (Tall) */}
          <div className="bg-white rounded-[2rem] p-6 sm:p-8 shadow-sm border border-gray-100 lg:row-span-2 flex flex-col hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                <MapPin className="w-6 h-6 text-indigo-500" /> Delivery
              </h2>
              <button type="button" className="text-indigo-500 hover:text-indigo-600 bg-indigo-50 p-2 rounded-full transition-colors">
                <Plus className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-1 space-y-6">
              <div className="bg-indigo-50/50 border-2 border-indigo-500 p-4 rounded-2xl relative">
                <div className="absolute top-4 right-4 w-4 h-4 rounded-full bg-indigo-500 border-4 border-white shadow-sm"></div>
                <h3 className="font-bold text-gray-900 mb-1">Home (Default)</h3>
                <p className="text-gray-600 text-sm leading-relaxed">Jane Doe<br/>123 Innovation Drive<br/>Apt 4B<br/>San Francisco, CA 94105</p>
              </div>
              
              <div className="border-2 border-gray-100 p-4 rounded-2xl hover:border-gray-300 transition-colors cursor-pointer">
                <h3 className="font-bold text-gray-900 mb-1">Office</h3>
                <p className="text-gray-600 text-sm leading-relaxed">Jane Doe<br/>456 Tech Blvd<br/>Suite 900<br/>San Francisco, CA 94107</p>
              </div>
            </div>

            <div className="mt-8">
              <label className="block text-sm font-bold text-gray-700 mb-2">Delivery Instructions (Optional)</label>
              <textarea rows={2} className="w-full bg-gray-50 rounded-xl p-4 border border-gray-200 focus:outline-none focus:border-indigo-500 resize-none text-sm placeholder-gray-400" placeholder="e.g. Leave at the front door"></textarea>
            </div>
          </div>

          {/* Card 2: Order Items (Wide) */}
          <div className="bg-white rounded-[2rem] p-6 sm:p-8 shadow-sm border border-gray-100 md:col-span-2 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                <Package className="w-6 h-6 text-amber-500" /> Your Items
              </h2>
              <span className="text-sm font-bold bg-gray-100 text-gray-600 px-3 py-1 rounded-full">2 Items</span>
            </div>

            <div className="space-y-4">
              <div className="flex gap-4 items-center bg-gray-50 p-3 rounded-2xl border border-gray-100">
                <div className="w-20 h-20 bg-white rounded-xl shadow-sm p-2 flex items-center justify-center">
                   <img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=100&q=80" alt="Item" className="w-full h-full object-cover mix-blend-multiply rounded" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-gray-900">Sony WH-1000XM4</h3>
                  <p className="text-sm text-gray-500">Wireless Headphones</p>
                </div>
                <div className="text-right px-4">
                  <div className="font-bold text-gray-900">$348.00</div>
                  <div className="text-xs text-gray-500">Qty: 1</div>
                </div>
              </div>

              <div className="flex gap-4 items-center bg-gray-50 p-3 rounded-2xl border border-gray-100">
                <div className="w-20 h-20 bg-white rounded-xl shadow-sm p-2 flex items-center justify-center">
                   <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=100&q=80" alt="Item" className="w-full h-full object-cover mix-blend-multiply rounded" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-gray-900">Nike Air Max 270</h3>
                  <p className="text-sm text-gray-500">Size 10 • Red</p>
                </div>
                <div className="text-right px-4">
                  <div className="font-bold text-gray-900">$150.00</div>
                  <div className="text-xs text-gray-500">Qty: 1</div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3: Payment Method */}
          <div className="bg-white rounded-[2rem] p-6 sm:p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2 mb-6">
              <CreditCard className="w-6 h-6 text-rose-500" /> Payment
            </h2>
            
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Card Number</label>
                <div className="relative">
                  <CreditCard className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input onInput={(e) => { e.currentTarget.value = e.currentTarget.value.replace(/[^0-9\s]/g, "").substring(0, 19); }} pattern="[\\d\\s]{16,19}" maxLength={19} title="16 digit card number" required type="text" placeholder="0000 0000 0000 0000" className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-gray-900 focus:bg-white font-mono text-sm transition-colors" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Expiry Date</label>
                  <input onInput={(e) => { e.currentTarget.value = e.currentTarget.value.replace(/[^0-9\/]/g, "").substring(0, 5); }} pattern="(0[1-9]|1[0-2])\\/?([0-9]{2})" maxLength={5} title="Format: MM/YY" required type="text" placeholder="MM/YY" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-gray-900 focus:bg-white font-mono text-sm transition-colors" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">CVC Code</label>
                  <input onInput={(e) => { e.currentTarget.value = e.currentTarget.value.replace(/[^0-9]/g, "").substring(0, 4); }} pattern="\\d{3,4}" maxLength={4} title="3 or 4 digit CVV/CVC" required type="password" placeholder="•••" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-gray-900 focus:bg-white font-mono text-sm transition-colors" />
                </div>
              </div>
            </div>
          </div>

          {/* Card 4: Summary & Pay Button */}
          <div className="bg-gray-900 text-white rounded-[2rem] p-6 sm:p-8 shadow-lg md:col-span-1 lg:col-span-1 flex flex-col justify-between">
            <div>
              <h2 className="text-xl font-bold flex items-center gap-2 mb-6">
                <Receipt className="w-6 h-6 text-emerald-400" /> Summary
              </h2>
              
              <div className="space-y-3 text-sm text-gray-400">
                <div className="flex justify-between"><span>Subtotal</span><span className="text-white">$498.00</span></div>
                <div className="flex justify-between"><span>Shipping</span><span className="text-emerald-400">Free</span></div>
                <div className="flex justify-between"><span>Taxes</span><span className="text-white">$24.90</span></div>
              </div>
              
              <div className="mt-6 pt-6 border-t border-gray-800 flex justify-between items-end mb-8">
                <span className="font-bold">Total</span>
                <span className="text-4xl font-black text-white">$522.90</span>
              </div>
            </div>

            <button 
              type="submit" 
              disabled={isProcessing}
              className="w-full py-4 bg-emerald-500 text-white rounded-xl font-bold text-lg hover:bg-emerald-400 transition-colors shadow-lg shadow-emerald-500/20 disabled:opacity-70 flex justify-center items-center"
            >
              {isProcessing ? 'Processing...' : 'Place Order'}
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}
