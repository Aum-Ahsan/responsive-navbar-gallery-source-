"use client";
import React from 'react';
import { Lightbulb, Code, TestTube, Rocket, MonitorPlay } from 'lucide-react';

export default function Process52() {
  const steps = [
    { id: 'Q1', title: 'Ideation & Research', desc: 'Market analysis and feature planning', icon: Lightbulb, color: 'bg-amber-100 text-amber-600 border-amber-200' },
    { id: 'Q2', title: 'Development', desc: 'Core architecture and feature build', icon: Code, color: 'bg-blue-100 text-blue-600 border-blue-200' },
    { id: 'Q3', title: 'QA & Testing', desc: 'Beta testing and bug squashing', icon: TestTube, color: 'bg-emerald-100 text-emerald-600 border-emerald-200' },
    { id: 'Q4', title: 'Deployment', desc: 'Production release and scaling', icon: Rocket, color: 'bg-purple-100 text-purple-600 border-purple-200' },
    { id: 'Q1+', title: 'Monitoring', desc: 'Performance tracking & updates', icon: MonitorPlay, color: 'bg-rose-100 text-rose-600 border-rose-200' },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto py-16 px-4">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-slate-800">Product Roadmap</h2>
        <p className="text-slate-500 mt-3 max-w-xl mx-auto">Our projected timeline for the upcoming major version release.</p>
      </div>

      <div className="relative group overflow-x-auto pb-8 hide-scrollbar">
        <div className="flex w-max min-w-full space-x-6 px-4">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div key={idx} className="w-72 flex-shrink-0 relative">
                {/* Connecting Line (except last) */}
                {idx < steps.length - 1 && (
                  <div className="absolute top-12 left-24 w-full h-0.5 bg-slate-200 -z-10" />
                )}
                
                <div className="flex flex-col">
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center border-2 bg-white shadow-sm transition-transform duration-300 hover:scale-110 ${step.color}`}>
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className="text-sm font-bold tracking-wider text-slate-400">{step.id}</span>
                  </div>
                  
                  <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                    <h3 className="text-lg font-bold text-slate-800 mb-2">{step.title}</h3>
                    <p className="text-sm text-slate-500 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
