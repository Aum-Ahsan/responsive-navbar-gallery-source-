"use client";
import React from 'react';
import { Check, ArrowRight, Zap, Shield, Heart } from 'lucide-react';

export default function Cta14() {
  const features = [
    { title: "Lightning Fast", desc: "Global edge CDN", icon: Zap },
    { title: "Secure Core", desc: "End-to-end encryption", icon: Shield },
    { title: "User Centric", desc: "Award-winning UX", icon: Heart }
  ];

  return (
    <div className="w-full w-full p-4 sm:p-8 my-10 font-sans">
      <div className="bg-indigo-50 rounded-3xl border border-indigo-100 p-8 sm:p-16 relative overflow-hidden">
        
        <div className="flex flex-col sm:flex-row items-center gap-8 sm:gap-12 lg:gap-16">
          
          <div className="flex-1">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl sm:text-5xl font-black text-indigo-950 mb-6 tracking-tight">
              Ready to scale?
            </h2>
            <p className="text-indigo-800/70 text-lg sm:text-xl mb-10 max-w-md">
              Upgrade your plan to unlock unlimited bandwidth and premium features.
            </p>

            <ul className="space-y-5 mb-10">
              {[
                "Unlimited API requests per month",
                "Custom domain integration",
                "Priority 24/7 technical support",
                "Advanced role-based access control",
                "99.99% uptime SLA guaranteed"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-indigo-200 text-indigo-700 flex items-center justify-center shrink-0">
                    <Check size={14} strokeWidth={3} />
                  </div>
                  <span className="text-indigo-900 font-medium">{item}</span>
                </li>
              ))}
            </ul>

            <button className="w-full sm:w-auto px-10 py-5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl shadow-lg shadow-indigo-600/30 flex items-center justify-center gap-3 transition-transform hover:-translate-y-1 text-lg">
              Upgrade Now <ArrowRight size={20} />
            </button>
          </div>

          <div className="w-full lg:w-full sm:w-full sm:w-[280px] md:w-[340px] md:w-[400px] grid grid-cols-1 gap-4 relative z-10">
            {features.map((feat, i) => {
              const Icon = feat.icon;
              return (
                <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-indigo-50 flex items-center gap-5 hover:shadow-md transition-shadow">
                  <div className="w-14 h-14 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center shrink-0">
                    <Icon size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-indigo-950 text-lg">{feat.title}</h4>
                    <p className="text-indigo-600/70 text-sm font-medium">{feat.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
          
        </div>
      </div>
    </div>
  );
}
