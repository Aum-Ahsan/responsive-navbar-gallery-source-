"use client";
import React from 'react';
import { Factory, Settings, Package, Plane } from 'lucide-react';

export default function Process58() {
  const steps = [
    { title: 'Raw Material Sourcing', loc: 'Global Partners', icon: Factory, color: 'border-blue-500' },
    { title: 'Manufacturing & Assembly', loc: 'Facility A, Texas', icon: Settings, color: 'border-amber-500' },
    { title: 'Quality Assurance & Packaging', loc: 'Facility B, Texas', icon: Package, color: 'border-emerald-500' },
    { title: 'Global Distribution', loc: 'Logistics Hub', icon: Plane, color: 'border-purple-500' },
  ];

  return (
    <div className="w-full max-w-3xl mx-auto py-16 px-4">
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-bold text-gray-900">Supply Chain Process</h2>
        <p className="text-gray-500 mt-2">End-to-end product lifecycle.</p>
      </div>

      <div className="relative pl-8 sm:pl-0">
        {/* Vertical Line */}
        <div className="absolute left-[39px] sm:left-1/2 top-0 bottom-0 w-1 bg-gray-200 sm:-translate-x-1/2 rounded-full" />

        <div className="space-y-12">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            const isEven = idx % 2 === 0;

            return (
              <div key={idx} className={`relative flex items-center sm:justify-between w-full group ${isEven ? 'sm:flex-row-reverse' : ''}`}>
                
                {/* Node */}
                <div className="absolute left-0 sm:left-1/2 -translate-x-2 sm:-translate-x-1/2 w-12 h-12 rounded-full bg-white border-4 border-gray-100 flex items-center justify-center z-10 shadow-sm group-hover:scale-110 transition-transform duration-300">
                  <div className={`w-3 h-3 rounded-full border-2 ${step.color} bg-white`} />
                </div>

                {/* Content */}
                <div className={`w-full sm:w-[45%] pl-16 sm:pl-0 ${isEven ? 'sm:text-left' : 'sm:text-right'}`}>
                  <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 group-hover:shadow-md transition-all hover:-translate-y-1 relative">
                    {/* Connecting dash */}
                    <div className={`hidden sm:block absolute top-1/2 -translate-y-1/2 w-8 h-0.5 bg-gray-200 ${isEven ? '-left-8' : '-right-8'}`} />
                    
                    <div className={`flex items-center gap-4 mb-3 ${isEven ? 'flex-row' : 'sm:flex-row-reverse flex-row'}`}>
                      <div className={`p-3 rounded-xl bg-gray-50 border border-gray-100`}>
                        <Icon size={20} className="text-gray-600" />
                      </div>
                      <h3 className="font-bold text-gray-800 text-lg">{step.title}</h3>
                    </div>
                    <div className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-gray-100 text-gray-600 text-xs font-semibold uppercase tracking-wider`}>
                      <div className="w-1.5 h-1.5 rounded-full bg-gray-400" />
                      {step.loc}
                    </div>
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
