"use client";
import React, { useState } from "react";
import { Check, ChevronRight, Lock, Truck, CreditCard, ClipboardList } from "lucide-react";

const STEPS = [
  { id: "address", label: "Address", icon: Truck },
  { id: "shipping", label: "Shipping", icon: Truck },
  { id: "payment", label: "Payment", icon: CreditCard },
  { id: "review", label: "Review", icon: ClipboardList },
];

export default function Checkout02() {
  const [step, setStep] = useState(0);
  const [placed, setPlaced] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", address: "", city: "", zip: "", shipping: "standard", card: "", expiry: "", cvv: "" });
  const set = (k: string, v: string) => setForm(f => ({ ...f, [k]: v }));

  const shippingOptions = [
    { id: "standard", label: "Standard Delivery", sub: "5–7 business days", price: 9 },
    { id: "express", label: "Express Delivery", sub: "2–3 business days", price: 19 },
    { id: "sameday", label: "Same-Day Delivery", sub: "Order by 2 PM", price: 34 },
  ];

  const canProceed = () => {
    if (step === 0) return form.name && form.email && form.address && form.city && form.zip;
    if (step === 1) return !!form.shipping;
    if (step === 2) return form.card && form.expiry && form.cvv;
    return true;
  };

  if (placed) {
    return (
      <div className="w-full bg-white p-10 flex items-center justify-center min-h-[400px]">
        <div className="text-center">
          <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-5">
            <Check size={36} className="text-emerald-600" />
          </div>
          <h2 className="text-2xl font-bold text-slate-900 mb-2">Order Placed!</h2>
          <p className="text-slate-500">Order #ORD-{Math.floor(Math.random()*90000+10000)} confirmed. Estimated delivery in 3–5 days.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full bg-slate-50 p-4 sm:p-8 font-sans">
      <div className="max-w-xl mx-auto">
        {/* Step Indicators */}
        <div className="flex items-center mb-8">
          {STEPS.map((s, i) => (
            <React.Fragment key={s.id}>
              <button
                onClick={() => i < step && setStep(i)}
                className={`flex items-center gap-2 px-3 py-2 rounded-xl text-sm font-semibold transition ${
                  i === step ? "bg-slate-900 text-white" : i < step ? "text-emerald-600 hover:bg-emerald-50" : "text-slate-300"
                }`}
              >
                {i < step ? <Check size={16} /> : <s.icon size={16} />}
                <span className="hidden sm:inline">{s.label}</span>
              </button>
              {i < STEPS.length - 1 && <div className={`flex-1 h-0.5 mx-1 ${i < step ? "bg-emerald-400" : "bg-slate-200"}`} />}
            </React.Fragment>
          ))}
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 p-6">
          {step === 0 && (
            <div className="space-y-4">
              <h3 className="font-bold text-slate-900">Shipping Address</h3>
              <div className="grid grid-cols-2 gap-3">
                <input required value={form.name} onChange={e=>set("name",e.target.value)} placeholder="Full Name" className="col-span-2 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900" />
                <input required type="email" value={form.email} onChange={e=>set("email",e.target.value)} placeholder="Email Address" className="col-span-2 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900" />
                <input required value={form.address} onChange={e=>set("address",e.target.value)} placeholder="Street Address" className="col-span-2 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900" />
                <input required value={form.city} onChange={e=>set("city",e.target.value)} placeholder="City" className="border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900" />
                <input required value={form.zip} onChange={e=>set("zip",e.target.value)} placeholder="ZIP Code" className="border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900" />
              </div>
            </div>
          )}

          {step === 1 && (
            <div className="space-y-4">
              <h3 className="font-bold text-slate-900">Choose Shipping Method</h3>
              {shippingOptions.map(opt => (
                <div
                  key={opt.id}
                  onClick={() => set("shipping", opt.id)}
                  className={`p-4 rounded-2xl border-2 cursor-pointer transition ${form.shipping === opt.id ? "border-slate-900 bg-slate-50" : "border-slate-200 hover:border-slate-400"}`}
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-semibold text-slate-900">{opt.label}</p>
                      <p className="text-sm text-slate-500">{opt.sub}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="font-bold text-slate-900">${opt.price}</span>
                      <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${form.shipping === opt.id ? "bg-slate-900 border-slate-900" : "border-slate-300"}`}>
                        {form.shipping === opt.id && <Check size={11} className="text-white" />}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {step === 2 && (
            <div className="space-y-4">
              <h3 className="font-bold text-slate-900">Payment Details</h3>
              <input required value={form.card} onChange={e=>set("card",e.target.value)} placeholder="Card Number" className="border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900 w-full font-mono" />
              <div className="grid grid-cols-2 gap-3">
                <input required value={form.expiry} onChange={e=>set("expiry",e.target.value)} placeholder="MM / YY" className="border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900" />
                <input required value={form.cvv} onChange={e=>set("cvv",e.target.value)} placeholder="CVV" className="border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900" />
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-4">
              <h3 className="font-bold text-slate-900">Review Your Order</h3>
              {[["Name", form.name], ["Email", form.email], ["Address", `${form.address}, ${form.city} ${form.zip}`], ["Shipping", shippingOptions.find(o=>o.id===form.shipping)?.label || ""], ["Card", `**** **** **** ${form.card.slice(-4) || "****"}`]].map(([label, val]) => (
                <div key={label} className="flex justify-between text-sm border-b border-slate-50 pb-2">
                  <span className="text-slate-500 font-medium">{label}</span>
                  <span className="text-slate-900 font-semibold text-right max-w-[60%]">{val || "—"}</span>
                </div>
              ))}
              <div className="bg-slate-50 rounded-xl p-4 mt-2 flex justify-between font-bold text-slate-900">
                <span>Total</span><span>$325</span>
              </div>
            </div>
          )}
        </div>

        <div className="flex gap-3 mt-5">
          {step > 0 && (
            <button onClick={() => setStep(s => s - 1)} className="px-5 py-3.5 border border-slate-200 rounded-2xl text-sm font-semibold text-slate-600 hover:bg-slate-100 transition">
              Back
            </button>
          )}
          {step < 3 ? (
            <button
              onClick={() => canProceed() && setStep(s => s + 1)}
              disabled={!canProceed()}
              className={`flex-1 flex items-center justify-center gap-1.5 py-3.5 rounded-2xl font-bold text-sm transition ${canProceed() ? "bg-slate-900 hover:bg-slate-700 text-white" : "bg-slate-200 text-slate-400 cursor-not-allowed"}`}
            >
              Continue <ChevronRight size={16} />
            </button>
          ) : (
            <button onClick={() => setPlaced(true)} className="flex-1 flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3.5 rounded-2xl text-sm transition">
              <Lock size={15} /> Place Order — $325
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
