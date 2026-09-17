"use client";
import React, { useState } from "react";
import { Bell, Check, Mail, Clock } from "lucide-react";

export default function Cart11() {
  const [email, setEmail] = useState("");
  const [notified, setNotified] = useState(false);
  const [preordered, setPreordered] = useState(false);
  const [activeTab, setActiveTab] = useState<"notify" | "preorder">("notify");

  const handleNotify = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setNotified(true);
  };

  const handlePreorder = () => setPreordered(true);

  return (
    <div className="w-full bg-white p-6 sm:p-10 font-sans">
      <div className="max-w-xl mx-auto">
        {/* Product */}
        <div className="relative w-full h-64 bg-gradient-to-br from-slate-900 to-slate-700 rounded-3xl flex items-center justify-center text-8xl mb-6 overflow-hidden">
          🎮
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-rose-400 bg-rose-500/20 px-3 py-1 rounded-full">Out of Stock</span>
              <h2 className="text-xl font-bold text-white mt-2">Retro Pro Controller</h2>
            </div>
          </div>
        </div>

        <div className="flex gap-4 mb-1">
          <span className="text-3xl font-bold text-slate-900">$179</span>
          <span className="text-sm text-slate-400 flex items-center gap-1"><Clock size={12} /> Restocks in ~2 weeks</span>
        </div>
        <p className="text-slate-500 text-sm mb-6">Haptic feedback · Hall-effect joysticks · 40h battery</p>

        {/* Tab toggle */}
        <div className="flex gap-2 mb-6">
          <button type="button"
            onClick={() => setActiveTab("notify")}
            className={`flex-1 py-2.5 rounded-xl text-sm font-semibold transition ${
              activeTab === "notify" ? "bg-slate-900 text-white" : "bg-slate-100 text-slate-500 hover:bg-slate-200"
            }`}
          >
            <Bell size={14} className="inline mr-1.5" />Notify Me
          </button>
          <button type="button"
            onClick={() => setActiveTab("preorder")}
            className={`flex-1 py-2.5 rounded-xl text-sm font-semibold transition ${
              activeTab === "preorder" ? "bg-indigo-600 text-white" : "bg-slate-100 text-slate-500 hover:bg-slate-200"
            }`}
          >
            Pre-order Now
          </button>
        </div>

        {activeTab === "notify" ? (
          notified ? (
            <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 text-center">
              <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <Check size={24} className="text-white" />
              </div>
              <p className="font-bold text-emerald-800">You're on the list!</p>
              <p className="text-sm text-emerald-600 mt-1">We'll email {email} when it's back in stock.</p>
            </div>
          ) : (
            <form onSubmit={handleNotify} className="space-y-3">
              <p className="text-sm text-slate-600">Enter your email and we'll notify you the moment it's back.</p>
              <div className="flex gap-2">
                <div className="relative flex-1">
                  <Mail size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-slate-900 transition"
                    required
                  />
                </div>
                <button type="submit" className="bg-slate-900 hover:bg-slate-700 text-white font-bold px-5 rounded-xl transition flex items-center gap-1.5">
                  <Bell size={15} /> Notify
                </button>
              </div>
              <p className="text-xs text-slate-400">No spam. Unsubscribe anytime.</p>
            </form>
          )
        ) : (
          preordered ? (
            <div className="bg-indigo-50 border border-indigo-200 rounded-2xl p-6 text-center">
              <div className="w-12 h-12 bg-indigo-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <Check size={24} className="text-white" />
              </div>
              <p className="font-bold text-indigo-800">Pre-order Confirmed!</p>
              <p className="text-sm text-indigo-600 mt-1">Your card will be charged when it ships. Est. 2 weeks.</p>
            </div>
          ) : (
            <div className="space-y-3">
              <div className="bg-indigo-50 border border-indigo-200 rounded-2xl p-4 text-sm text-indigo-700">
                <p className="font-semibold mb-1">Pre-order Terms</p>
                <ul className="space-y-1 text-indigo-600 text-xs">
                  <li>✓ No charge until your item ships</li>
                  <li>✓ Guaranteed at today's price</li>
                  <li>✓ Priority dispatch when stock arrives</li>
                  <li>✓ Free cancellation before dispatch</li>
                </ul>
              </div>
              <button type="button"
                onClick={handlePreorder}
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 rounded-2xl transition flex items-center justify-center gap-2"
              >
                Pre-order for $179
              </button>
            </div>
          )
        )}
      </div>
    </div>
  );
}
