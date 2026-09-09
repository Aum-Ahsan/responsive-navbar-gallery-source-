"use client";
import React from 'react';
import { PhoneCall, Calendar, Mail } from 'lucide-react';

export default function Cta17() {
  const reps = [
    { name: "Sarah Jenkins", role: "Enterprise Sales", img: "https://i.pravatar.cc/150?img=47" },
    { name: "Marcus Chen", role: "Technical Specialist", img: "https://i.pravatar.cc/150?img=11" }
  ];

  return (
    <div className="w-full max-w-5xl mx-auto p-4 sm:p-8 my-10 font-sans">
      <div className="bg-stone-50 rounded-[2.5rem] border border-stone-200 overflow-hidden flex flex-col lg:flex-row items-center p-8 sm:p-12 lg:p-16 gap-12 lg:gap-20 shadow-xl">
        
        <div className="flex-1 text-center lg:text-left">
          <h2 className="text-4xl sm:text-5xl font-black text-stone-900 mb-6 tracking-tight">
            Talk to a human.
          </h2>
          <p className="text-stone-600 text-lg sm:text-xl mb-10 max-w-lg mx-auto lg:mx-0">
            Our experts are here to help you design a custom implementation plan and find the perfect pricing tier for your scale.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button className="px-8 py-4 bg-stone-900 hover:bg-black text-white font-bold rounded-xl transition-colors shadow-lg flex items-center justify-center gap-3">
              <PhoneCall size={20} /> Call +1 (800) 555-0199
            </button>
            <button className="px-8 py-4 bg-white hover:bg-stone-100 border border-stone-300 text-stone-900 font-bold rounded-xl transition-colors flex items-center justify-center gap-3">
              <Mail size={20} /> Email Sales
            </button>
          </div>
        </div>

        <div className="w-full lg:w-[400px]">
          <div className="bg-white rounded-2xl shadow-xl border border-stone-100 p-6 relative">
            <div className="absolute -top-4 -right-4 w-12 h-12 bg-emerald-500 rounded-full border-4 border-stone-50 flex items-center justify-center shadow-lg text-white">
              <Calendar size={20} />
            </div>
            
            <h3 className="font-bold text-stone-900 mb-6">Book a direct meeting</h3>
            
            <div className="space-y-4">
              {reps.map((rep, i) => (
                <div key={i} className="flex items-center justify-between p-4 rounded-xl border border-stone-100 hover:border-emerald-500 hover:bg-emerald-50 transition-colors cursor-pointer group">
                  <div className="flex items-center gap-4">
                    <img src={rep.img} alt={rep.name} className="w-12 h-12 rounded-full border border-stone-200" />
                    <div>
                      <h4 className="font-bold text-stone-900 group-hover:text-emerald-700">{rep.name}</h4>
                      <p className="text-xs text-stone-500 font-medium">{rep.role}</p>
                    </div>
                  </div>
                  <div className="text-xs font-bold text-emerald-600 bg-emerald-100 px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
                    Select
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
}
