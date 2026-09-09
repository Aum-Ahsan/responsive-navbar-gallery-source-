"use client";
import React, { useState } from 'react';
import { Calendar, Settings, CreditCard, CheckCircle } from 'lucide-react';

export default function Process25() {
  const [activePhase, setActivePhase] = useState(2);
  const phases = [
    { id: 1, title: 'Select Service', icon: Calendar },
    { id: 2, title: 'Customize', icon: Settings },
    { id: 3, title: 'Payment', icon: CreditCard },
    { id: 4, title: 'Confirm', icon: CheckCircle }
  ];

  return (
    <div className="w-full max-w-4xl mx-auto p-4 md:p-8 font-sans">
      <div className="bg-cyan-950 text-white rounded-[2rem] p-6 md:p-12 shadow-xl">
        <h2 className="text-3xl font-bold mb-10">Booking Process</h2>
        
        <div className="flex flex-col md:flex-row gap-8 mb-12">
          {phases.map(phase => {
            const Icon = phase.icon;
            const isPast = phase.id < activePhase;
            const isCurrent = phase.id === activePhase;
            
            return (
              <div key={phase.id} className="flex-1 relative">
                {phase.id !== phases.length && (
                  <div className="hidden md:block absolute top-6 left-[50%] w-full h-0.5 bg-cyan-800">
                    {isPast && <div className="h-full bg-cyan-400 w-full"></div>}
                  </div>
                )}
                
                <div className="flex flex-row md:flex-col items-center relative z-10 gap-4 md:gap-0">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 border-2 transition-colors ${
                    isPast ? 'bg-cyan-400 border-cyan-400 text-cyan-950' :
                    isCurrent ? 'bg-cyan-950 border-cyan-400 text-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.3)]' :
                    'bg-cyan-950 border-cyan-800 text-cyan-800'
                  }`}>
                    <Icon size={20} />
                  </div>
                  <span className={`md:mt-4 font-bold text-sm ${isCurrent ? 'text-white' : 'text-cyan-600'}`}>
                    {phase.title}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        <div className="bg-white text-cyan-950 p-8 rounded-2xl">
          <h3 className="text-xl font-bold mb-4">Step 2: Customize your booking</h3>
          <p className="text-gray-600 mb-6">Select the add-ons and preferences for your chosen service.</p>
          <div className="flex justify-end gap-4 mt-8 pt-6 border-t border-gray-100">
             <button onClick={() => setActivePhase(1)} className="px-6 py-2 rounded-lg font-bold text-gray-500 hover:bg-gray-100">Back</button>
             <button onClick={() => setActivePhase(3)} className="px-6 py-2 rounded-lg font-bold bg-cyan-600 text-white hover:bg-cyan-700">Next Step</button>
          </div>
        </div>
      </div>
    </div>
  );
}
