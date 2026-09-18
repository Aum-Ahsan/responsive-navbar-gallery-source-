"use client";
import React, { useState } from "react";
import { CreditCard, Check, ArrowRight, Zap, Shield, Building, X } from "lucide-react";

type Plan = 'basic' | 'pro' | 'enterprise';

export default function PaymentProcess61() {
  const [selectedPlan, setSelectedPlan] = useState<Plan | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const plans = {
    basic: { name: 'Basic', price: 19, icon: Zap, color: 'text-sky-500', bg: 'bg-sky-500', features: ['1 User', '10GB Storage', 'Basic Support'] },
    pro: { name: 'Pro', price: 49, icon: Shield, color: 'text-indigo-500', bg: 'bg-indigo-500', features: ['5 Users', '100GB Storage', 'Priority Support', 'Advanced Analytics'] },
    enterprise: { name: 'Enterprise', price: 99, icon: Building, color: 'text-fuchsia-500', bg: 'bg-fuchsia-500', features: ['Unlimited Users', '1TB Storage', '24/7 Dedicated Support', 'Custom Integrations'] }
  };

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
      <div className="w-full min-h-[700px] bg-slate-50 flex items-center justify-center font-sans p-6">
        <div className="bg-white p-12 rounded-[2rem] shadow-xl text-center max-w-md w-full border border-slate-100 animate-in zoom-in-95 duration-500">
          <div className="w-24 h-24 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Check className="w-12 h-12 text-emerald-600" strokeWidth={3} />
          </div>
          <h2 className="text-3xl font-black text-slate-900 mb-2">Welcome to {selectedPlan ? plans[selectedPlan].name : ''}!</h2>
          <p className="text-slate-500 mb-8">
            Your workspace is ready. Let's get started.
          </p>
          <button type="button" 
            onClick={() => {
              setIsSuccess(false);
              setSelectedPlan(null);
            }} 
            className="w-full py-4 bg-slate-900 text-white rounded-xl font-bold hover:bg-slate-800 transition-colors"
          >
            Go to Dashboard
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full min-h-[700px] bg-slate-50 flex items-center justify-center font-sans p-6 overflow-hidden relative">
      
      <div className="max-w-5xl w-full mx-auto relative z-10">
        
        {/* Header */}
        <div className={`text-center transition-all duration-500 ${selectedPlan ? 'opacity-0 h-0 overflow-hidden' : 'opacity-100 h-auto mb-12'}`}>
          <h2 className="text-4xl font-black text-slate-900 mb-4 tracking-tight">Simple, transparent pricing</h2>
          <p className="text-slate-500 text-lg">No hidden fees. Cancel anytime.</p>
        </div>

        {/* Dynamic Layout Container */}
        <div className={`flex flex-col lg:flex-row gap-8 transition-all duration-500 items-start ${selectedPlan ? 'lg:justify-center' : 'justify-between'}`}>
          
          {/* Pricing Cards */}
          <div className={`grid gap-6 transition-all duration-700 ease-[cubic-bezier(0.175,0.885,0.32,1.275)]
            ${selectedPlan 
              ? 'grid-cols-1 w-full lg:w-1/3' 
              : 'grid-cols-1 md:grid-cols-3 w-full'
            }
          `}>
            {(Object.keys(plans) as Plan[]).map((planKey) => {
              const plan = plans[planKey];
              const Icon = plan.icon;
              const isSelected = selectedPlan === planKey;
              const isHidden = selectedPlan !== null && !isSelected;

              if (isHidden) return null; // Unmount non-selected plans

              return (
                <div 
                  key={planKey}
                  className={`bg-white rounded-3xl p-8 border-2 transition-all duration-300 relative
                    ${isSelected ? 'border-indigo-500 shadow-2xl scale-100' : 'border-slate-100 hover:border-slate-300 shadow-sm hover:shadow-xl hover:-translate-y-2'}
                  `}
                >
                  {/* Selected state overlay to go back */}
                  {isSelected && (
                    <button type="button" 
                      onClick={() => setSelectedPlan(null)}
                      className="absolute top-4 right-4 w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center text-slate-500 hover:bg-slate-200 transition-colors"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  )}

                  <div className={`w-12 h-12 rounded-xl mb-6 flex items-center justify-center bg-slate-50 ${plan.color}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{plan.name}</h3>
                  <div className="flex items-baseline gap-1 mb-6">
                    <span className="text-4xl font-black text-slate-900">${plan.price}</span>
                    <span className="text-slate-500 font-medium">/mo</span>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm text-slate-600 font-medium">
                        <Check className={`w-5 h-5 ${plan.color}`} /> {feature}
                      </li>
                    ))}
                  </ul>

                  {!isSelected && (
                    <button type="button" 
                      onClick={() => setSelectedPlan(planKey)}
                      className={`w-full py-4 rounded-xl font-bold transition-all ${
                        planKey === 'pro' ? 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-lg shadow-indigo-600/30' : 'bg-slate-100 text-slate-900 hover:bg-slate-200'
                      }`}
                    >
                      Choose {plan.name}
                    </button>
                  )}
                </div>
              );
            })}
          </div>

          {/* Checkout Form (Sliding in) */}
          {selectedPlan && (
            <div className="w-full lg:w-2/3 bg-white rounded-3xl p-8 lg:p-12 shadow-2xl border border-slate-100 animate-in slide-in-from-right-16 fade-in duration-500">
              <div className="mb-8">
                <h3 className="text-2xl font-black text-slate-900">Complete Purchase</h3>
                <p className="text-slate-500">You are subscribing to the {plans[selectedPlan].name} plan.</p>
              </div>

              <form onSubmit={handlePay} className="space-y-6">
                
                <div className="space-y-4">
                  <h4 className="text-sm font-bold text-slate-900 uppercase tracking-widest">Account Details</h4>
                  <div className="flex gap-4">
                    <input pattern="[a-zA-Z\\s\\-]+" title="Letters only" required type="text" placeholder="First Name" className="w-1/2 bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:border-indigo-500 transition-colors text-sm font-medium"  minLength={2} maxLength={50} />
                    <input pattern="[a-zA-Z\\s\\-]+" title="Letters only" required type="text" placeholder="Last Name" className="w-1/2 bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:border-indigo-500 transition-colors text-sm font-medium"  minLength={2} maxLength={50} />
                  </div>
                  <input pattern="[a-zA-Z\\s\\-]+" title="Letters only" required type="email" placeholder="Email Address" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:border-indigo-500 transition-colors text-sm font-medium"  minLength={5} maxLength={100} />
                </div>

                <div className="space-y-4 pt-4 border-t border-slate-100">
                  <h4 className="text-sm font-bold text-slate-900 uppercase tracking-widest">Payment Method</h4>
                  <div className="relative">
                    <CreditCard className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <input onInput={(e) => { e.currentTarget.value = e.currentTarget.value.replace(/[^0-9\s]/g, "").substring(0, 19); }} pattern="[\\d\\s]{16,19}" maxLength={19} title="16 digit card number" required type="text" placeholder="Card Number" className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-12 pr-4 py-4 text-slate-900 focus:outline-none focus:border-indigo-500 transition-colors font-mono tracking-widest text-sm"  minLength={16} />
                  </div>
                  
                  <div className="flex gap-4">
                    <input onInput={(e) => { e.currentTarget.value = e.currentTarget.value.replace(/[^0-9\/]/g, "").substring(0, 5); }} pattern="(0[1-9]|1[0-2])\\/?([0-9]{2})" maxLength={5} title="Format: MM/YY" required type="text" placeholder="MM/YY" className="w-1/2 bg-slate-50 border border-slate-200 rounded-xl px-4 py-4 text-slate-900 focus:outline-none focus:border-indigo-500 transition-colors font-mono tracking-widest text-center text-sm"  minLength={5} />
                    <input onInput={(e) => { e.currentTarget.value = e.currentTarget.value.replace(/[^0-9]/g, "").substring(0, 4); }} pattern="\\d{3,4}" maxLength={4} title="3 or 4 digit CVV/CVC" required type="text" placeholder="CVV" className="w-1/2 bg-slate-50 border border-slate-200 rounded-xl px-4 py-4 text-slate-900 focus:outline-none focus:border-indigo-500 transition-colors font-mono tracking-widest text-center text-sm"  minLength={3} />
                  </div>
                </div>

                <button 
                  type="submit" 
                  disabled={isProcessing}
                  className={`w-full py-5 mt-4 text-white rounded-xl font-bold text-lg flex items-center justify-center gap-2 transition-all shadow-[0_10px_30px_rgba(0,0,0,0.1)] disabled:opacity-70 disabled:shadow-none
                    ${plans[selectedPlan].bg} hover:opacity-90
                  `}
                >
                  {isProcessing ? (
                    <div className="w-6 h-6 border-4 border-white/30 border-t-white rounded-full animate-spin"></div>
                  ) : (
                    <>Subscribe for ${plans[selectedPlan].price}/mo <ArrowRight className="w-5 h-5" /></>
                  )}
                </button>
              </form>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
