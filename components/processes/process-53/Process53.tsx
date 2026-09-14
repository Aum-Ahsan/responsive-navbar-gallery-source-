"use client";
import React, { useState } from 'react';
import { UserPlus, CreditCard, ShieldCheck, Mail } from 'lucide-react';

export default function Process53() {
  const [activeStep, setActiveStep] = useState(2);

  const steps = [
    { title: 'Create Account', icon: UserPlus, desc: 'Sign up with email' },
    { title: 'Payment Setup', icon: CreditCard, desc: 'Add billing method' },
    { title: 'Verify Identity', icon: ShieldCheck, desc: 'Secure your account' },
    { title: 'Welcome', icon: Mail, desc: 'Start exploring' },
  ];

  return (
    <div className="w-full max-w-3xl mx-auto py-16 px-4">
      <div className="bg-[#0f172a] rounded-[2.5rem] p-8 sm:p-12 relative overflow-hidden">
        {/* Glow effect */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        
        <h2 className="text-3xl font-bold text-white mb-10 text-center relative z-10">Complete your profile</h2>

        <div className="space-y-4 relative z-10">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isPast = index < activeStep;
            const isActive = index === activeStep;
            
            return (
              <div 
                key={index} 
                onClick={() => setActiveStep(index)}
                className={`relative overflow-hidden rounded-2xl p-5 cursor-pointer transition-all duration-300 border
                  ${isActive ? 'bg-slate-800/80 border-blue-500/50 shadow-[0_0_30px_rgba(59,130,246,0.15)]' : 
                    isPast ? 'bg-slate-800/40 border-slate-700/50 hover:bg-slate-800/60' : 
                    'bg-slate-900/50 border-slate-800/50 opacity-60 hover:opacity-100'}
                `}
              >
                <div className="flex items-center gap-5">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-colors
                    ${isActive ? 'bg-blue-500 text-white' : 
                      isPast ? 'bg-emerald-500/20 text-emerald-400' : 
                      'bg-slate-800 text-slate-500'}
                  `}>
                    <Icon size={24} />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className={`font-semibold text-lg ${isActive ? 'text-white' : isPast ? 'text-slate-200' : 'text-slate-400'}`}>
                      {step.title}
                    </h3>
                    <p className={`text-sm mt-0.5 ${isActive ? 'text-blue-200' : 'text-slate-500'}`}>
                      {step.desc}
                    </p>
                  </div>

                  {/* Progress indicator for active step */}
                  {isActive && (
                    <div className="w-8 h-8 rounded-full border-2 border-slate-600 flex items-center justify-center shrink-0">
                      <div className="w-2.5 h-2.5 bg-blue-500 rounded-full animate-pulse" />
                    </div>
                  )}
                  {isPast && (
                    <div className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    </div>
                  )}
                </div>
                
                {/* Active step progress bar background */}
                {isActive && (
                  <div className="absolute bottom-0 left-0 h-1 bg-slate-700 w-full">
                    <div className="h-full bg-blue-500 w-1/3 rounded-r-full" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
