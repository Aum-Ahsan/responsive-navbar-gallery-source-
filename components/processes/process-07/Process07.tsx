"use client";
import React, { useState } from 'react';
import { Layers, Box, Cpu } from 'lucide-react';

export default function Process07() {
  const [activeTab, setActiveTab] = useState(0);
  const tabs = [
    { icon: Layers, title: 'Structure', content: 'We build the skeleton of your application using robust HTML5 semantics.' },
    { icon: Box, title: 'Styling', content: 'Applying modern CSS architectures to ensure responsive, stunning visuals.' },
    { icon: Cpu, title: 'Logic', content: 'Wiring up React components with state, effects, and API integrations.' }
  ];

  return (
    <div className="w-full max-w-4xl mx-auto p-8 font-sans">
      <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Tab-Based Process</h2>
      
      <div className="flex flex-col md:flex-row bg-white rounded-3xl overflow-hidden border border-gray-200 shadow-xl">
        <div className="md:w-1/3 bg-gray-50 border-r border-gray-200 flex flex-col p-4 space-y-2">
          {tabs.map((tab, idx) => {
            const Icon = tab.icon;
            const isActive = activeTab === idx;
            return (
              <button
                key={idx}
                onClick={() => setActiveTab(idx)}
                className={`flex items-center p-4 rounded-2xl transition-all duration-300 text-left ${isActive ? 'bg-cyan-500 text-white shadow-md transform scale-[1.02]' : 'hover:bg-gray-100 text-gray-600'}`}
              >
                <Icon size={20} className={`mr-3 ${isActive ? 'text-white' : 'text-cyan-600'}`} />
                <span className="font-bold">{tab.title}</span>
              </button>
            )
          })}
        </div>
        <div className="md:w-2/3 p-10 flex flex-col justify-center min-h-[300px]">
          <h3 className="text-2xl font-black text-cyan-950 mb-4">{tabs[activeTab].title} Phase</h3>
          <p className="text-gray-600 text-lg leading-relaxed">{tabs[activeTab].content}</p>
          <div className="mt-8 pt-8 border-t border-gray-100 flex gap-2">
             <span className="w-2 h-2 rounded-full bg-cyan-500"></span>
             <span className="w-2 h-2 rounded-full bg-cyan-500 opacity-30"></span>
             <span className="w-2 h-2 rounded-full bg-cyan-500 opacity-30"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
