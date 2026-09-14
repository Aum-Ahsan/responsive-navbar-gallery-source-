"use client";
import React from 'react';
import { FileText, Search, ThumbsUp, Landmark } from 'lucide-react';

export default function Process56() {
  const steps = [
    { title: 'Application Submitted', desc: 'Initial forms and documents received.', icon: FileText, active: true },
    { title: 'Underwriting Review', desc: 'Credit and risk assessment in progress.', icon: Search, active: true },
    { title: 'Final Approval', desc: 'Terms finalized and approved by committee.', icon: ThumbsUp, active: false },
    { title: 'Funds Disbursed', desc: 'Capital transferred to designated account.', icon: Landmark, active: false },
  ];

  return (
    <div className="w-full max-w-5xl mx-auto py-16 px-4 font-sans text-slate-800">
      <div className="border-l-4 border-slate-900 pl-6 mb-12">
        <h2 className="text-3xl font-light tracking-tight">Loan Approval Process</h2>
        <p className="text-slate-500 mt-2 text-sm uppercase tracking-widest font-semibold">Corporate Finance Division</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-0 border-y border-slate-200">
        {steps.map((step, idx) => {
          const Icon = step.icon;
          return (
            <div key={idx} className={`relative p-8 md:p-10 border-b md:border-b-0 md:border-r border-slate-200 last:border-0 transition-colors ${step.active ? 'bg-slate-50' : 'bg-white'}`}>
              <div className="flex flex-col h-full justify-between">
                <div>
                  <div className={`mb-6 p-4 rounded-none inline-block ${step.active ? 'bg-slate-900 text-white' : 'bg-slate-100 text-slate-400'}`}>
                    <Icon size={24} strokeWidth={1.5} />
                  </div>
                  <h3 className={`text-xl font-medium mb-3 ${step.active ? 'text-slate-900' : 'text-slate-400'}`}>{step.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed mb-8">{step.desc}</p>
                </div>
                
                <div className="flex items-center text-xs font-bold uppercase tracking-widest">
                  <span className={`mr-3 ${step.active ? 'text-slate-900' : 'text-slate-300'}`}>Phase 0{idx + 1}</span>
                  <div className={`h-px flex-1 ${step.active ? 'bg-slate-900' : 'bg-slate-200'}`} />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
