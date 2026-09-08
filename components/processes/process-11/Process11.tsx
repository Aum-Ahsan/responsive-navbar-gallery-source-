import React from 'react';
import { RefreshCw, Zap, TrendingUp, ShieldCheck } from 'lucide-react';

export default function Process11() {
  const steps = [
    { id: 1, title: 'Analyze', icon: Zap, desc: 'Identify core metrics', color: 'text-amber-500', bg: 'bg-amber-100', border: 'border-amber-200' },
    { id: 2, title: 'Optimize', icon: TrendingUp, desc: 'Improve performance', color: 'text-emerald-500', bg: 'bg-emerald-100', border: 'border-emerald-200' },
    { id: 3, title: 'Secure', icon: ShieldCheck, desc: 'Fortify endpoints', color: 'text-blue-500', bg: 'bg-blue-100', border: 'border-blue-200' }
  ];

  return (
    <div className="w-full max-w-4xl mx-auto p-12 font-sans bg-slate-50 rounded-[3rem] my-10 border border-slate-200 shadow-inner">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-slate-900 mb-4">Continuous Cycle</h2>
        <p className="text-slate-600">A never-ending loop of constant improvement and refinement.</p>
      </div>

      <div className="relative w-full max-w-2xl mx-auto h-[400px]">
        {/* Central Core */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-slate-300 animate-[spin_10s_linear_infinite]">
          <RefreshCw size={120} strokeWidth={1} />
        </div>

        {/* Nodes arranged in a triangle/cycle using absolute positioning */}
        {steps.map((step, idx) => {
          const angle = (idx * 360) / 3 - 90; // Start at top (-90deg)
          const rad = angle * (Math.PI / 180);
          const radius = 160;
          const x = Math.cos(rad) * radius;
          const y = Math.sin(rad) * radius;
          const Icon = step.icon;

          return (
            <div 
              key={step.id}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center bg-white p-6 rounded-2xl shadow-xl w-48 text-center transition-transform hover:scale-110 z-10 border border-slate-100"
              style={{ transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))` }}
            >
              <div className={`w-12 h-12 ${step.bg} ${step.color} rounded-full flex items-center justify-center mb-4`}>
                <Icon size={24} />
              </div>
              <h3 className="font-bold text-slate-800">{step.title}</h3>
              <p className="text-xs text-slate-500 mt-2">{step.desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
