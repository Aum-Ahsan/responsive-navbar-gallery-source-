"use client";
import React, { useState } from "react";
import { CreditCard, CheckCircle2, ChevronRight, Package, ShieldCheck, Zap, Lock, CreditCard as CardIcon } from "lucide-react";

export default function Checkout51() {
  const [step, setStep] = useState(1);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Form State
  const [form, setForm] = useState({
    plan: 'pro',
    email: '',
    name: '',
    cardName: '',
    cardNumber: '',
    expiry: '',
    cvc: ''
  });

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 3) setStep(step + 1);
    else handlePayment();
  };

  const handlePayment = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
    }, 2000);
  };

  if (isSuccess) {
    return (
      <div className="w-full min-h-[500px] bg-neutral-950 flex flex-col items-center justify-center p-6 font-sans text-neutral-100">
        <div className="bg-neutral-900 border border-neutral-800 rounded-3xl p-8 sm:p-12 text-center max-w-md w-full shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-400 to-emerald-600" />
          <CheckCircle2 className="w-20 h-20 text-emerald-500 mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-3 text-white">Payment Successful</h2>
          <p className="text-neutral-400 mb-8 leading-relaxed">
            Thank you, {form.name || "Customer"}. Your subscription to the {form.plan === 'pro' ? 'Pro' : 'Basic'} plan is now active.
          </p>
          <div className="bg-neutral-950 border border-neutral-800 rounded-2xl p-4 mb-8">
            <div className="flex justify-between text-sm mb-2">
              <span className="text-neutral-500">Amount Paid</span>
              <span className="font-semibold text-white">{form.plan === 'pro' ? '$49.00' : '$19.00'}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-neutral-500">Transaction ID</span>
              <span className="font-mono text-neutral-300">TXN-{Math.floor(Math.random()*1000000)}</span>
            </div>
          </div>
          <button onClick={() => { setStep(1); setIsSuccess(false); setForm({...form, email: '', name: '', cardNumber: '', expiry: '', cvc: '', cardName: ''}) }} className="w-full py-4 bg-white text-black font-semibold rounded-xl hover:bg-neutral-200 transition-colors">
            Return to Dashboard
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full min-h-[600px] bg-neutral-950 flex items-center justify-center p-4 sm:p-8 font-sans">
      <div className="max-w-4xl w-full grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-0 bg-neutral-900 border border-neutral-800 rounded-3xl overflow-hidden shadow-2xl">
        
        {/* Left sidebar info */}
        <div className="lg:col-span-2 bg-neutral-950 p-8 sm:p-10 border-r border-neutral-800 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 text-white mb-10">
              <Zap className="w-6 h-6 text-indigo-500 fill-indigo-500" />
              <span className="text-xl font-bold tracking-tight">AcmeCorp</span>
            </div>
            
            <h3 className="text-2xl font-bold text-white mb-2">Upgrade to {form.plan === 'pro' ? 'Pro' : 'Basic'}</h3>
            <p className="text-neutral-400 text-sm mb-8">Gain access to all premium features and priority support.</p>
            
            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <div className="bg-neutral-900 p-2.5 rounded-lg border border-neutral-800">
                  <Package className="w-5 h-5 text-indigo-400" />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">Unlimited Projects</h4>
                  <p className="text-xs text-neutral-500">Create as many workspaces as you need.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="bg-neutral-900 p-2.5 rounded-lg border border-neutral-800">
                  <ShieldCheck className="w-5 h-5 text-indigo-400" />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">Advanced Security</h4>
                  <p className="text-xs text-neutral-500">Enterprise-grade encryption and access control.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-neutral-800">
            <div className="flex justify-between items-end mb-2">
              <span className="text-neutral-400">Total due today</span>
              <span className="text-3xl font-bold text-white">
                {form.plan === 'pro' ? '$49' : '$19'}
              </span>
            </div>
            <p className="text-xs text-neutral-500 text-right">Billed monthly in USD.</p>
          </div>
        </div>

        {/* Right main form */}
        <div className="lg:col-span-3 p-8 sm:p-10 lg:p-12 relative">
          
          {/* Progress Indicator */}
          <div className="flex items-center justify-between mb-10">
            {[1, 2, 3].map((s) => (
              <React.Fragment key={s}>
                <div className={`flex flex-col items-center gap-2 ${step >= s ? 'opacity-100' : 'opacity-40'}`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold transition-all duration-300 ${step === s ? 'bg-indigo-600 text-white ring-4 ring-indigo-500/20' : step > s ? 'bg-emerald-500 text-white' : 'bg-neutral-800 text-neutral-400 border border-neutral-700'}`}>
                    {step > s ? <CheckCircle2 className="w-4 h-4" /> : s}
                  </div>
                  <span className="text-xs font-medium text-neutral-400 hidden sm:block">
                    {s === 1 ? 'Plan' : s === 2 ? 'Details' : 'Payment'}
                  </span>
                </div>
                {s < 3 && (
                  <div className={`flex-1 h-px mx-4 ${step > s ? 'bg-emerald-500' : 'bg-neutral-800'}`} />
                )}
              </React.Fragment>
            ))}
          </div>

          <form onSubmit={handleNext} className="h-full min-h-[300px] flex flex-col">
            
            {/* Step 1: Plan */}
            {step === 1 && (
              <div className="flex-1 space-y-4 animate-in fade-in slide-in-from-right-4 duration-500">
                <h2 className="text-xl font-semibold text-white mb-6">Select your plan</h2>
                
                <label className={`block relative p-5 rounded-2xl border-2 cursor-pointer transition-all ${form.plan === 'basic' ? 'border-indigo-500 bg-indigo-500/5' : 'border-neutral-800 bg-neutral-950/50 hover:border-neutral-700'}`}>
                  <input type="radio" name="plan" value="basic" checked={form.plan === 'basic'} onChange={() => setForm({...form, plan: 'basic'})} className="sr-only" />
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-bold text-white text-lg">Basic</span>
                    <span className="text-xl font-bold text-white">$19<span className="text-sm font-normal text-neutral-500">/mo</span></span>
                  </div>
                  <p className="text-sm text-neutral-400">Perfect for individuals and small side projects.</p>
                  {form.plan === 'basic' && <div className="absolute top-5 right-5 w-3 h-3 bg-indigo-500 rounded-full ring-4 ring-indigo-500/20" />}
                </label>
                
                <label className={`block relative p-5 rounded-2xl border-2 cursor-pointer transition-all ${form.plan === 'pro' ? 'border-indigo-500 bg-indigo-500/5' : 'border-neutral-800 bg-neutral-950/50 hover:border-neutral-700'}`}>
                  <div className="absolute -top-3 left-4 bg-indigo-500 text-white text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wider">Most Popular</div>
                  <input type="radio" name="plan" value="pro" checked={form.plan === 'pro'} onChange={() => setForm({...form, plan: 'pro'})} className="sr-only" />
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-bold text-white text-lg">Pro</span>
                    <span className="text-xl font-bold text-white">$49<span className="text-sm font-normal text-neutral-500">/mo</span></span>
                  </div>
                  <p className="text-sm text-neutral-400">Everything you need for growing businesses and teams.</p>
                  {form.plan === 'pro' && <div className="absolute top-5 right-5 w-3 h-3 bg-indigo-500 rounded-full ring-4 ring-indigo-500/20" />}
                </label>
              </div>
            )}

            {/* Step 2: Details */}
            {step === 2 && (
              <div className="flex-1 space-y-5 animate-in fade-in slide-in-from-right-4 duration-500">
                <h2 className="text-xl font-semibold text-white mb-6">Your details</h2>
                
                <div>
                  <label className="block text-sm font-medium text-neutral-400 mb-2">Full Name</label>
                  <input 
                    required 
                    type="text" 
                    value={form.name} 
                    onChange={e => setForm({...form, name: e.target.value})} 
                    placeholder="Jane Doe" 
                    className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-3.5 text-white placeholder-neutral-600 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-colors" 
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-neutral-400 mb-2">Email Address</label>
                  <input 
                    required 
                    type="email" 
                    value={form.email} 
                    onChange={e => setForm({...form, email: e.target.value})} 
                    placeholder="jane@example.com" 
                    className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-3.5 text-white placeholder-neutral-600 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-colors" 
                  />
                </div>
              </div>
            )}

            {/* Step 3: Payment */}
            {step === 3 && (
              <div className="flex-1 space-y-5 animate-in fade-in slide-in-from-right-4 duration-500">
                <h2 className="text-xl font-semibold text-white mb-6">Payment method</h2>
                
                <div className="bg-neutral-950 border border-neutral-800 rounded-2xl p-5 mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <CardIcon className="w-5 h-5 text-indigo-400" />
                      <span className="font-medium text-white">Credit Card</span>
                    </div>
                    <div className="flex gap-1">
                      <div className="w-8 h-5 bg-neutral-800 rounded" />
                      <div className="w-8 h-5 bg-neutral-800 rounded" />
                      <div className="w-8 h-5 bg-neutral-800 rounded" />
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <input 
                        required 
                        type="text" 
                        value={form.cardNumber} 
                        onChange={e => setForm({...form, cardNumber: e.target.value})} 
                        placeholder="0000 0000 0000 0000" 
                        className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-4 py-3 text-white placeholder-neutral-600 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-colors font-mono tracking-widest text-sm" 
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <input 
                        required 
                        type="text" 
                        value={form.expiry} 
                        onChange={e => setForm({...form, expiry: e.target.value})} 
                        placeholder="MM/YY" 
                        className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-4 py-3 text-white placeholder-neutral-600 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-colors" 
                      />
                      <input 
                        required 
                        type="text" 
                        value={form.cvc} 
                        onChange={e => setForm({...form, cvc: e.target.value})} 
                        placeholder="CVC" 
                        className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-4 py-3 text-white placeholder-neutral-600 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-colors" 
                      />
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-indigo-500/10 border border-indigo-500/20 p-4 rounded-xl">
                  <Lock className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
                  <p className="text-xs text-indigo-200/70 leading-relaxed">Payments are secure and encrypted. We never store your full card details on our servers.</p>
                </div>
              </div>
            )}

            {/* Form Actions */}
            <div className="mt-10 flex gap-4">
              {step > 1 && (
                <button type="button" onClick={() => setStep(step - 1)} className="px-6 py-4 rounded-xl border border-neutral-700 text-neutral-300 font-medium hover:bg-neutral-800 hover:text-white transition-colors">
                  Back
                </button>
              )}
              <button 
                type="submit" 
                disabled={isProcessing}
                className="flex-1 bg-white text-black font-bold py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-neutral-200 transition-all disabled:opacity-70 disabled:cursor-not-allowed group"
              >
                {isProcessing ? (
                  <span className="flex items-center gap-2">
                    <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Processing...
                  </span>
                ) : (
                  <>
                    {step === 3 ? `Pay ${form.plan === 'pro' ? '$49' : '$19'}` : 'Continue'}
                    {step < 3 && <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />}
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
