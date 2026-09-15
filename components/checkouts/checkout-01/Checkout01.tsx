"use client";
import React, { useState } from "react";
import { CreditCard, Lock, ChevronDown, Check } from "lucide-react";

export default function Checkout01() {
  const [form, setForm] = useState({ name: "", email: "", address: "", city: "", zip: "", country: "US", card: "", expiry: "", cvv: "" });
  const [placed, setPlaced] = useState(false);
  const set = (k: string, v: string) => setForm(f => ({ ...f, [k]: v }));

  const cartItems = [
    { name: "Merino Crew Neck — M / Navy", price: 120, qty: 1 },
    { name: "Slim Chinos — 32/32 / Khaki", price: 98, qty: 2 },
  ];
  const subtotal = cartItems.reduce((s, i) => s + i.price * i.qty, 0);
  const shipping = 9;
  const tax = Math.round(subtotal * 0.08);
  const total = subtotal + shipping + tax;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setPlaced(true);
  };

  if (placed) {
    return (
      <div className="w-full bg-white p-10 flex items-center justify-center min-h-[400px]">
        <div className="text-center max-w-sm">
          <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-5">
            <Check size={36} className="text-emerald-600" />
          </div>
          <h2 className="text-2xl font-bold text-slate-900 mb-2">Order Confirmed!</h2>
          <p className="text-slate-500 mb-4">Thank you, {form.name || "Customer"}. Your order #ORD-{Math.floor(Math.random()*90000+10000)} is being processed.</p>
          <p className="text-sm text-slate-400">Confirmation sent to {form.email || "your email"}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full bg-slate-50 p-4 sm:p-8 font-sans">
      <div className="max-w-2xl mx-auto">
        <div className="flex items-center gap-2 mb-7">
          <Lock size={16} className="text-slate-400" />
          <h2 className="text-xl font-bold text-slate-900">Secure Checkout</h2>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="bg-white rounded-2xl border border-slate-200 p-6 space-y-4">
            <h3 className="font-bold text-slate-800 text-sm uppercase tracking-widest">Contact</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <input required value={form.name} onChange={e=>set("name",e.target.value)} placeholder="Full Name" className="border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900 w-full" />
              <input required type="email" value={form.email} onChange={e=>set("email",e.target.value)} placeholder="Email" className="border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900 w-full" />
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 p-6 space-y-4">
            <h3 className="font-bold text-slate-800 text-sm uppercase tracking-widest">Shipping Address</h3>
            <input required value={form.address} onChange={e=>set("address",e.target.value)} placeholder="Street Address" className="border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900 w-full" />
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              <input required value={form.city} onChange={e=>set("city",e.target.value)} placeholder="City" className="col-span-2 sm:col-span-1 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900 w-full" />
              <input required value={form.zip} onChange={e=>set("zip",e.target.value)} placeholder="ZIP Code" className="border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900 w-full" />
              <div className="relative">
                <select value={form.country} onChange={e=>set("country",e.target.value)} className="appearance-none border border-slate-200 rounded-xl px-4 py-3 text-sm w-full focus:outline-none focus:ring-2 focus:ring-slate-900 bg-white">
                  <option value="US">United States</option>
                  <option value="GB">United Kingdom</option>
                  <option value="CA">Canada</option>
                  <option value="AU">Australia</option>
                </select>
                <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 p-6 space-y-4">
            <h3 className="font-bold text-slate-800 text-sm uppercase tracking-widest">Payment</h3>
            <input required value={form.card} onChange={e=>set("card",e.target.value)} placeholder="Card Number (1234 5678 9012 3456)" className="border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900 w-full font-mono" />
            <div className="grid grid-cols-2 gap-3">
              <input required value={form.expiry} onChange={e=>set("expiry",e.target.value)} placeholder="MM / YY" className="border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900 w-full" />
              <input required value={form.cvv} onChange={e=>set("cvv",e.target.value)} placeholder="CVV" className="border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900 w-full" />
            </div>
          </div>

          {/* Order Summary */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 space-y-3">
            <h3 className="font-bold text-slate-800 text-sm uppercase tracking-widest mb-2">Order Summary</h3>
            {cartItems.map((item, i) => (
              <div key={i} className="flex justify-between text-sm">
                <span className="text-slate-700">{item.name} × {item.qty}</span>
                <span className="font-medium text-slate-900">${item.price * item.qty}</span>
              </div>
            ))}
            <div className="border-t border-slate-100 pt-3 space-y-1.5 text-sm text-slate-500">
              <div className="flex justify-between"><span>Subtotal</span><span>${subtotal}</span></div>
              <div className="flex justify-between"><span>Shipping</span><span>${shipping}</span></div>
              <div className="flex justify-between"><span>Tax (8%)</span><span>${tax}</span></div>
              <div className="flex justify-between font-bold text-slate-900 text-base pt-1 border-t border-slate-100 mt-2">
                <span>Total</span><span>${total}</span>
              </div>
            </div>
          </div>

          <button type="submit" className="w-full bg-slate-900 hover:bg-slate-700 text-white font-bold py-4 rounded-2xl flex items-center justify-center gap-2 transition">
            <Lock size={16} /> Place Order — ${total}
          </button>
          <p className="text-center text-xs text-slate-400">256-bit SSL encryption · PCI DSS compliant</p>
        </form>
      </div>
    </div>
  );
}
