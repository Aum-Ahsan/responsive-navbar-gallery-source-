"use client";
import React, { useState } from 'react';
import { CheckCircle2, ArrowRight } from 'lucide-react';

export default function Cta03() {
  const [annual, setAnnual] = useState(true);

  return (
    <div className="w-full max-w-5xl mx-auto p-4 sm:p-8 my-10 font-sans">
      <div className="bg-white rounded-3xl border border-gray-200 shadow-xl p-8 sm:p-16">
        
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          
          <div className="flex-1 text-center lg:text-left">
            <h2 className="text-3xl sm:text-5xl font-black text-gray-900 mb-6 tracking-tight">
              Start your 14-day free trial.
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-lg mx-auto lg:mx-0">
              Get full access to all features. No credit card required. Cancel anytime during the trial.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-8">
              <button className="w-full sm:w-auto px-8 py-4 bg-black text-white font-bold rounded-xl hover:bg-gray-800 transition-colors flex items-center justify-center gap-2">
                Start Free Trial <ArrowRight size={18} />
              </button>
              <button className="w-full sm:w-auto px-8 py-4 bg-gray-100 text-gray-900 font-bold rounded-xl hover:bg-gray-200 transition-colors">
                View Pricing
              </button>
            </div>
            
            <div className="flex items-center justify-center lg:justify-start gap-6 text-sm font-semibold text-gray-500 flex-wrap">
              <div className="flex items-center gap-2"><CheckCircle2 className="text-green-500" size={16} /> No credit card needed</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="text-green-500" size={16} /> 14-day full access</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="text-green-500" size={16} /> Cancel anytime</div>
            </div>
          </div>
          
          {/* Pricing Preview Card */}
          <div className="w-full max-w-sm bg-gray-50 rounded-2xl border border-gray-200 p-8 shadow-sm">
            <div className="flex justify-between items-center mb-6">
              <span className="font-bold text-gray-900">Pro Plan</span>
              
              <div className="flex items-center bg-gray-200 rounded-full p-1 cursor-pointer" onClick={() => setAnnual(!annual)}>
                <div className={`px-3 py-1 rounded-full text-xs font-bold transition-colors ${!annual ? 'bg-white shadow-sm text-black' : 'text-gray-500'}`}>Monthly</div>
                <div className={`px-3 py-1 rounded-full text-xs font-bold transition-colors ${annual ? 'bg-white shadow-sm text-black' : 'text-gray-500'}`}>Annually</div>
              </div>
            </div>
            
            <div className="mb-6 flex items-end gap-1">
              <span className="text-5xl font-black text-gray-900">${annual ? '24' : '39'}</span>
              <span className="text-gray-500 font-medium mb-1">/mo</span>
            </div>
            
            {annual && (
              <div className="bg-green-100 text-green-800 text-xs font-bold px-3 py-1.5 rounded-lg inline-block mb-6">
                Save $180 per year (38% discount)
              </div>
            )}
            
            <div className="space-y-4 border-t border-gray-200 pt-6">
              {['Unlimited Projects', '5 Team Members', 'Advanced Analytics', 'Priority Support'].map((feature, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 size={18} className="text-black" />
                  <span className="font-semibold text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
