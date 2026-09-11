"use client";
import React from 'react';
import { Users, Filter, Target, Handshake } from 'lucide-react';

export default function Process43() {
  const funnel = [
    { label: 'Leads Generated', val: '10,000', icon: Users, color: 'bg-indigo-500', width: 'w-full' },
    { label: 'Qualified Prospects', val: '2,500', icon: Filter, color: 'bg-indigo-600', width: 'w-full md:w-4/5' },
    { label: 'Sales Meetings', val: '500', icon: Target, color: 'bg-indigo-700', width: 'w-full md:w-3/5' },
    { label: 'Closed Deals', val: '120', icon: Handshake, color: 'bg-indigo-800', width: 'w-full md:w-2/5' }
  ];

  return (
    <div className="w-full max-w-4xl mx-auto p-6 sm:p-12 font-sans bg-slate-900 text-white rounded-3xl my-10">
      <h2 className="text-3xl font-bold text-center mb-8 sm:mb-12 lg:mb-16">Sales Pipeline Funnel</h2>

      <div className="flex flex-col items-center space-y-2">
        {funnel.map((stage, idx) => {
          const Icon = stage.icon;
          return (
            <div 
              key={idx} 
              className={`${stage.width} ${stage.color} h-24 rounded-lg flex items-center justify-between px-2 sm:px-6 md:px-12 transition-all duration-500 hover:scale-105 cursor-pointer shadow-lg`}
              style={{ clipPath: 'polygon(5% 0%, 95% 0%, 100% 100%, 0% 100%)' }} // Funnel trapzeoid shape
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center shrink-0 hidden md:flex">
                  <Icon size={20} />
                </div>
                <h3 className="font-bold md:text-lg">{stage.label}</h3>
              </div>
              <div className="text-2xl font-black bg-white/10 px-4 py-2 rounded-lg backdrop-blur">
                {stage.val}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
