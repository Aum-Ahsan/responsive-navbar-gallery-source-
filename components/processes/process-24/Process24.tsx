"use client";
import React from 'react';
import { FileText, Search, Users, ShieldCheck } from 'lucide-react';

export default function Process24() {
  const steps = [
    { title: 'Submitted', status: 'done', icon: FileText, date: 'Oct 1' },
    { title: 'Under Review', status: 'current', icon: Search, date: 'Oct 3' },
    { title: 'Interview', status: 'upcoming', icon: Users, date: 'TBD' },
    { title: 'Decision', status: 'upcoming', icon: ShieldCheck, date: 'TBD' }
  ];

  return (
    <div className="w-full max-w-5xl mx-auto p-6 md:p-12 font-sans bg-white shadow-[0_20px_50px_rgba(0,0,0,0.05)] rounded-[2.5rem] my-10">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-0 mb-12">
        <h2 className="text-3xl font-bold text-gray-900">Application Pipeline</h2>
        <span className="bg-purple-100 text-purple-700 px-4 py-1.5 rounded-full text-sm font-bold tracking-wider uppercase">In Progress</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {steps.map((step, idx) => {
          const Icon = step.icon;
          return (
            <div key={idx} className="relative">
              {/* Connector */}
              {idx < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gray-200 z-0"></div>
              )}
              
              <div className={`relative z-10 p-6 rounded-2xl border-2 transition-all duration-300 ${
                step.status === 'done' ? 'border-purple-500 bg-purple-50' :
                step.status === 'current' ? 'border-purple-300 bg-white shadow-lg transform -translate-y-1' :
                'border-gray-100 bg-gray-50'
              }`}>
                <div className="flex justify-between items-start mb-4">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                    step.status === 'done' ? 'bg-purple-500 text-white' :
                    step.status === 'current' ? 'bg-purple-100 text-purple-600' :
                    'bg-gray-200 text-gray-400'
                  }`}>
                    <Icon size={20} />
                  </div>
                  <span className="text-xs font-semibold text-gray-500">{step.date}</span>
                </div>
                
                <h3 className={`font-bold text-lg ${step.status === 'upcoming' ? 'text-gray-400' : 'text-gray-900'}`}>{step.title}</h3>
                
                {step.status === 'current' && (
                  <div className="mt-4 text-xs text-purple-600 font-medium bg-purple-100/50 p-2 rounded-lg">
                    We are currently evaluating your portfolio.
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
