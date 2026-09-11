"use client";
import React from 'react';

export default function Process17() {
  const phases = [
    {
      name: 'Phase 1: Foundation',
      steps: ['Domain Registration', 'Hosting Setup', 'SSL Configuration']
    },
    {
      name: 'Phase 2: Architecture',
      steps: ['Database Schema', 'API Routing', 'Auth Integration']
    },
    {
      name: 'Phase 3: Presentation',
      steps: ['UI Components', 'State Management', 'Animations']
    }
  ];

  return (
    <div className="w-full max-w-4xl mx-auto p-8 font-sans">
      <h2 className="text-3xl font-bold text-fuchsia-950 mb-10 text-center">Multi-Phase Workflow</h2>

      <div className="space-y-8">
        {phases.map((phase, pIdx) => (
          <div key={pIdx} className="bg-white border border-fuchsia-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center mb-6 pb-4 border-b border-fuchsia-50">
              <span className="bg-fuchsia-100 text-fuchsia-700 text-xs font-black uppercase px-3 py-1 rounded-full mr-4 tracking-widest">Stage {pIdx + 1}</span>
              <h3 className="text-xl font-bold text-gray-900">{phase.name}</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {phase.steps.map((step, sIdx) => (
                <div key={sIdx} className="flex items-center bg-gray-50 p-4 rounded-xl">
                  <div className="w-8 h-8 rounded-full bg-white shadow-sm border border-gray-200 flex items-center justify-center text-sm font-bold text-gray-500 mr-3 shrink-0">
                    {pIdx + 1}.{sIdx + 1}
                  </div>
                  <span className="font-semibold text-gray-700">{step}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
