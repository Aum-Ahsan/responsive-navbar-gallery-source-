"use client";
import React, { useState } from 'react';
import { User, Shield, Bell, Check } from 'lucide-react';

export default function Process27() {
  const [active, setActive] = useState(1);
  const steps = [
    { id: 1, title: 'Profile', icon: User },
    { id: 2, title: 'Security', icon: Shield },
    { id: 3, title: 'Notifications', icon: Bell },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto p-8 font-sans flex flex-col md:flex-row gap-8">
      
      {/* Sidebar Navigation */}
      <div className="md:w-1/3 bg-indigo-50 p-6 rounded-3xl border border-indigo-100">
        <h2 className="text-2xl font-bold text-indigo-950 mb-8">Onboarding</h2>
        <div className="flex flex-col space-y-4">
          {steps.map((step) => {
            const Icon = step.icon;
            const isDone = active > step.id;
            const isCur = active === step.id;
            return (
              <button 
                key={step.id}
                onClick={() => setActive(step.id)}
                className={`flex items-center p-4 rounded-xl text-left transition-all ${
                  isCur ? 'bg-indigo-600 text-white shadow-lg' : 
                  isDone ? 'bg-white text-indigo-900 border border-indigo-200' : 
                  'text-indigo-400 hover:bg-indigo-100/50'
                }`}
              >
                <div className={`mr-3 ${isDone ? 'text-emerald-500' : ''}`}>
                  {isDone ? <Check size={20} /> : <Icon size={20} />}
                </div>
                <span className="font-bold">{step.title}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Form Area */}
      <div className="md:w-2/3 bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-gray-100 flex flex-col justify-between min-h-[260px] sm:h-[340px] lg:h-[400px]">
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">{steps[active-1].title} Setup</h3>
          <p className="text-gray-500 mb-8">Please configure your settings below.</p>
          
          <div className="space-y-4">
            <div className="h-12 border-2 border-dashed border-gray-200 rounded-xl flex items-center px-4 text-gray-400">Mock Input Field 1</div>
            <div className="h-12 border-2 border-dashed border-gray-200 rounded-xl flex items-center px-4 text-gray-400">Mock Input Field 2</div>
          </div>
        </div>

        <div className="flex justify-end mt-8">
          <button 
            onClick={() => active < 3 ? setActive(a => a + 1) : alert('Done!')}
            className="bg-indigo-600 text-white px-8 py-3 rounded-full font-bold hover:bg-indigo-700 transition-colors"
          >
            {active === 3 ? 'Finish' : 'Save & Continue'}
          </button>
        </div>
      </div>

    </div>
  );
}
