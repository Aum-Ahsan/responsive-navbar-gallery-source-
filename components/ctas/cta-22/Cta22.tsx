"use client";
import React from 'react';
import { User, Image as ImageIcon, Briefcase, FileText, Check, ArrowRight } from 'lucide-react';

export default function Cta22() {
  const steps = [
    { name: "Basic Info", icon: User, done: true },
    { name: "Profile Photo", icon: ImageIcon, done: true },
    { name: "Work History", icon: Briefcase, done: false },
    { name: "Resume", icon: FileText, done: false },
  ];

  const progress = 50;

  return (
    <div className="w-full w-full p-4 sm:p-8 my-10 font-sans">
      <div className="bg-indigo-50 rounded-3xl border border-indigo-100 overflow-hidden flex flex-col md:flex-row">
        
        {/* Left Side: Progress Visual */}
        <div className="w-full md:w-2/5 bg-indigo-600 p-5 sm:p-8 lg:p-10 flex flex-col items-center justify-center text-white relative">
          {/* Circular Progress */}
          <div className="relative w-48 h-48 flex items-center justify-center mb-6">
            <svg className="w-full h-full transform -rotate-90">
              <circle cx="96" cy="96" r="88" stroke="currentColor" strokeWidth="12" fill="transparent" className="text-indigo-800" />
              <circle 
                cx="96" cy="96" r="88" 
                stroke="currentColor" 
                strokeWidth="12" 
                fill="transparent" 
                strokeDasharray="552.9" 
                strokeDashoffset={552.9 - (552.9 * progress) / 100}
                className="text-emerald-400 transition-all duration-1000 ease-out" 
                strokeLinecap="round"
              />
            </svg>
            <div className="absolute flex flex-col items-center justify-center">
              <span className="text-3xl sm:text-4xl lg:text-5xl font-black">{progress}%</span>
              <span className="text-indigo-200 text-sm font-medium uppercase tracking-wider">Complete</span>
            </div>
          </div>
        </div>

        {/* Right Side: Content */}
        <div className="w-full md:w-3/5 bg-white p-8 sm:p-12">
          <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mb-2">You're almost there!</h2>
          <p className="text-gray-500 mb-8 font-medium">Profiles with complete work history receive 4x more interview requests.</p>

          <div className="space-y-4 mb-8">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div key={idx} className={`flex items-center gap-4 p-4 rounded-xl border ${step.done ? 'bg-gray-50 border-gray-100' : 'bg-white border-gray-200 shadow-sm'}`}>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${step.done ? 'bg-emerald-100 text-emerald-600' : 'bg-indigo-100 text-indigo-600'}`}>
                    {step.done ? <Check size={18} strokeWidth={3} /> : <Icon size={18} />}
                  </div>
                  <div className="flex-1">
                    <span className={`font-bold ${step.done ? 'text-gray-500 line-through' : 'text-gray-900'}`}>{step.name}</span>
                  </div>
                  {!step.done && idx === 2 && (
                    <span className="text-xs font-bold text-indigo-600 bg-indigo-50 px-2 py-1 rounded-md">Next Step</span>
                  )}
                </div>
              );
            })}
          </div>

          <button className="w-full py-4 bg-indigo-600 text-white font-bold rounded-xl hover:bg-indigo-700 transition-colors flex items-center justify-center gap-2">
            Add Work History <ArrowRight size={18} />
          </button>
        </div>
        
      </div>
    </div>
  );
}
