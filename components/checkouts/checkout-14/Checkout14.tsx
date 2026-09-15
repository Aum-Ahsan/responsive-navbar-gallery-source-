"use client";
import React, { useState } from "react";
import { Building2, Check, Lock, FileText, ChevronDown } from "lucide-react";

export default function Checkout14() {
  const [form, setForm] = useState({ company: "", vatId: "", poNumber: "", billingAddress: "", contact: "", email: "", paymentTerms: "net30" });
  const [placed, setPlaced] = useState(false);
  const set = (k: string, v: string) => setForm(f => ({ ...f, [k]: v }));
  const total = 2849;

  const terms = [
    { id: "immediate", label: "Immediate (Pay now)", sub: "Invoice settled on order" },
    { id: "net15", label: "Net 15", sub: "Payment due within 15 days" },
    { id: "net30", label: "Net 30", sub: "Payment due within 30 days" },
    { id: "net60", label: "Net 60", sub: "Payment due within 60 days" },
  ];

  const handleSubmit = (e: React.FormEvent) => { e.preventDefault(); setPlaced(true); };

  if (placed) {
    return (
      <div className="w-full bg-white p-10 flex items-center justify-center min-h-[300px]">
        <div className="text-center">
          <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4"><Check size={28} className="text-emerald-600" /></div>
          <h2 className="text-xl font-bold text-slate-900">Purchase Order Submitted!</h2>
          <p className="text-slate-500 text-sm mt-1">PO #{form.poNumber || "PO-0001"} · {terms.find(t=>t.id===form.paymentTerms)?.label}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full bg-slate-50 p-6 sm:p-10 font-sans">
      <div className="max-w-xl mx-auto">
        <div className="flex items-center gap-3 mb-7">
          <div className="w-10 h-10 bg-slate-900 rounded-xl flex items-center justify-center"><Building2 size={20} className="text-white" /></div>
          <div>
            <h2 className="text-xl font-bold text-slate-900">B2B / Purchase Order Checkout</h2>
            <p className="text-slate-500 text-sm">For businesses with approved credit accounts.</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="bg-white rounded-2xl border border-slate-200 p-5 space-y-3">
            <h3 className="font-bold text-slate-800 text-sm flex items-center gap-2"><Building2 size={14} /> Company Information</h3>
            <input required value={form.company} onChange={e=>set("company",e.target.value)} placeholder="Company Name" className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900" />
            <div className="grid grid-cols-2 gap-3">
              <input value={form.vatId} onChange={e=>set("vatId",e.target.value)} placeholder="VAT / Tax ID (optional)" className="border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900" />
              <input required value={form.poNumber} onChange={e=>set("poNumber",e.target.value)} placeholder="PO Number *" className="border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900" />
            </div>
            <input required value={form.contact} onChange={e=>set("contact",e.target.value)} placeholder="Accounts Contact Name" className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900" />
            <input required type="email" value={form.email} onChange={e=>set("email",e.target.value)} placeholder="Accounts Payable Email" className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900" />
            <textarea value={form.billingAddress} onChange={e=>set("billingAddress",e.target.value)} placeholder="Company Billing Address" rows={3} className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-slate-900" />
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 p-5 space-y-3">
            <h3 className="font-bold text-slate-800 text-sm flex items-center gap-2"><FileText size={14} /> Payment Terms</h3>
            {terms.map(t => (
              <div
                key={t.id}
                onClick={() => set("paymentTerms", t.id)}
                className={`flex items-center gap-3 p-3 rounded-xl border-2 cursor-pointer transition ${form.paymentTerms === t.id ? "border-slate-900 bg-slate-50" : "border-slate-200 hover:border-slate-400"}`}
              >
                <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${form.paymentTerms === t.id ? "bg-slate-900 border-slate-900" : "border-slate-300"}`}>
                  {form.paymentTerms === t.id && <Check size={10} className="text-white" />}
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-slate-900 text-sm">{t.label}</p>
                  <p className="text-xs text-slate-400">{t.sub}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Order total */}
          <div className="bg-slate-900 rounded-2xl p-5 text-white flex justify-between items-center">
            <div>
              <p className="text-sm text-slate-400">Order Total (ex. VAT)</p>
              <p className="text-3xl font-bold">${total.toLocaleString()}</p>
            </div>
            <div className="text-right text-sm text-slate-400">
              <p>Tax (20%)</p>
              <p className="font-bold text-white">+${Math.round(total * 0.2).toLocaleString()}</p>
            </div>
          </div>

          <button type="submit" className="w-full bg-slate-900 hover:bg-slate-700 text-white font-bold py-4 rounded-2xl flex items-center justify-center gap-2 transition">
            <Lock size={16} /> Submit Purchase Order
          </button>
        </form>
      </div>
    </div>
  );
}
