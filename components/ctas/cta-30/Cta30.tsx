"use client";
import React from 'react';
import { Check, X, ArrowRight } from 'lucide-react';

export default function Cta30() {
  const features = [
    { name: "Unlimited Projects", us: true, them: false },
    { name: "Custom Domains", us: true, them: false },
    { name: "24/7 Phone Support", us: true, them: false },
    { name: "Global CDN", us: true, them: true },
    { name: "SSO Integration", us: true, them: false },
  ];

  return (
    <div className="w-full w-full p-4 sm:p-8 my-10 font-sans">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-5xl font-black text-gray-900 mb-4 tracking-tight">
          Why we're the better choice.
        </h2>
        <p className="text-gray-500 sm:text-xl font-medium max-w-2xl mx-auto">
          See how our platform stacks up against the legacy alternatives, and why 10,000+ teams made the switch this year.
        </p>
      </div>

      <div className="bg-white rounded-3xl border border-gray-200 shadow-xl overflow-hidden relative">
        
        {/* Table Header */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border-b border-gray-200 bg-gray-50">
          <div className="p-6 sm:p-8 font-bold text-gray-500 uppercase tracking-widest text-xs flex items-center">Features</div>
          <div className="p-6 sm:p-8 text-center border-l border-gray-200 bg-indigo-50/50 relative">
            <div className="absolute top-0 inset-x-0 h-1 bg-indigo-600"></div>
            <div className="text-xl sm:text-2xl font-black text-indigo-900">Us</div>
          </div>
          <div className="p-6 sm:p-8 text-center border-l border-gray-200">
            <div className="text-lg sm:text-xl font-bold text-gray-400">Them</div>
          </div>
        </div>

        {/* Table Rows */}
        <div className="divide-y divide-gray-100">
          {features.map((feat, i) => (
            <div key={i} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 hover:bg-gray-50 transition-colors">
              <div className="p-4 sm:p-6 text-sm sm:text-base font-bold text-gray-900 flex items-center">{feat.name}</div>
              
              <div className="p-4 sm:p-6 text-center border-l border-gray-100 bg-indigo-50/20 flex items-center justify-center">
                {feat.us ? (
                  <div className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center mx-auto">
                    <Check size={16} strokeWidth={3} />
                  </div>
                ) : (
                  <X size={16} className="text-gray-300 mx-auto" />
                )}
              </div>
              
              <div className="p-4 sm:p-6 text-center border-l border-gray-100 flex items-center justify-center">
                {feat.them ? (
                  <Check size={16} className="text-gray-400 mx-auto" />
                ) : (
                  <X size={16} className="text-gray-300 mx-auto" />
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Table Footer / CTA */}
        <div className="p-6 sm:p-10 bg-indigo-900 text-center flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-left">
            <h3 className="text-xl font-black text-white mb-1">Ready to make the switch?</h3>
            <p className="text-indigo-200 text-sm font-medium">We offer free, white-glove migration services.</p>
          </div>
          <button className="w-full sm:w-auto px-8 py-4 bg-white hover:bg-indigo-50 text-indigo-900 font-black rounded-xl shadow-lg transition-colors flex items-center justify-center gap-2">
            Start Migration <ArrowRight size={18} />
          </button>
        </div>

      </div>
    </div>
  );
}
