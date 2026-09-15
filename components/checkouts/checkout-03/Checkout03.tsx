"use client";
import React, { useState } from "react";
import { User, Mail, Lock, ChevronRight, Check, LogIn, UserPlus } from "lucide-react";

export default function Checkout03() {
  const [mode, setMode] = useState<"choose" | "guest" | "signin" | "register" | "done">("choose");
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  if (done || mode === "done") {
    return (
      <div className="w-full bg-slate-50 p-10 flex items-center justify-center min-h-[360px]">
        <div className="text-center">
          <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Check size={28} className="text-emerald-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">Proceeding to checkout...</h2>
          <p className="text-slate-500 text-sm mt-2">
            {mode === "signin" ? "Signed in as " + email : mode === "register" ? "Account created for " + email : "Checking out as guest: " + email}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full bg-slate-50 p-6 sm:p-10 font-sans">
      <div className="max-w-md mx-auto">
        <h2 className="text-2xl font-bold text-slate-900 mb-2">How would you like to check out?</h2>
        <p className="text-slate-500 text-sm mb-7">Signing in saves your details for next time.</p>

        {mode === "choose" && (
          <div className="space-y-3">
            <button
              onClick={() => setMode("guest")}
              className="w-full flex items-center gap-4 p-5 bg-white rounded-2xl border-2 border-slate-200 hover:border-slate-400 transition text-left group"
            >
              <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center group-hover:bg-slate-900 group-hover:text-white transition">
                <User size={22} className="text-slate-600 group-hover:text-white" />
              </div>
              <div className="flex-1">
                <p className="font-bold text-slate-900">Continue as Guest</p>
                <p className="text-sm text-slate-500">No account needed. Quick and easy.</p>
              </div>
              <ChevronRight size={18} className="text-slate-400" />
            </button>

            <div className="flex items-center gap-3 my-4">
              <div className="flex-1 h-px bg-slate-200" />
              <p className="text-xs text-slate-400 font-medium">or</p>
              <div className="flex-1 h-px bg-slate-200" />
            </div>

            <button
              onClick={() => setMode("signin")}
              className="w-full flex items-center gap-4 p-5 bg-white rounded-2xl border-2 border-slate-200 hover:border-indigo-400 transition text-left group"
            >
              <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center group-hover:bg-indigo-600 transition">
                <LogIn size={22} className="text-indigo-600 group-hover:text-white" />
              </div>
              <div className="flex-1">
                <p className="font-bold text-slate-900">Sign In</p>
                <p className="text-sm text-slate-500">Use saved addresses, cards & order history.</p>
              </div>
              <ChevronRight size={18} className="text-slate-400" />
            </button>

            <button
              onClick={() => setMode("register")}
              className="w-full flex items-center gap-4 p-5 bg-white rounded-2xl border-2 border-slate-200 hover:border-emerald-400 transition text-left group"
            >
              <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center group-hover:bg-emerald-600 transition">
                <UserPlus size={22} className="text-emerald-600 group-hover:text-white" />
              </div>
              <div className="flex-1">
                <p className="font-bold text-slate-900">Create Account</p>
                <p className="text-sm text-slate-500">Earn rewards and track orders easily.</p>
              </div>
              <ChevronRight size={18} className="text-slate-400" />
            </button>
          </div>
        )}

        {(mode === "guest" || mode === "signin" || mode === "register") && (
          <div className="bg-white rounded-2xl border border-slate-200 p-6 space-y-4">
            <button onClick={() => setMode("choose")} className="text-sm text-slate-400 hover:text-slate-700 mb-2 transition">← Back</button>
            <h3 className="font-bold text-slate-900">{mode === "guest" ? "Guest Checkout" : mode === "signin" ? "Sign In" : "Create Account"}</h3>
            <div className="relative">
              <Mail size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input type="email" value={email} onChange={e=>setEmail(e.target.value)} placeholder="Email address" className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-slate-900 transition" />
            </div>
            {(mode === "signin" || mode === "register") && (
              <div className="relative">
                <Lock size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                <input type="password" placeholder="Password" className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-slate-900 transition" />
              </div>
            )}
            <button
              onClick={() => setDone(true)}
              className="w-full bg-slate-900 hover:bg-slate-700 text-white font-bold py-3.5 rounded-xl flex items-center justify-center gap-2 text-sm transition"
            >
              {mode === "guest" ? <><ChevronRight size={15} /> Continue to Checkout</> : mode === "signin" ? <><LogIn size={15} /> Sign In & Checkout</> : <><UserPlus size={15} /> Create Account & Checkout</>}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
