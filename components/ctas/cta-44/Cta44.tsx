"use client";
import React, { useState } from 'react';
import { Ticket, Check, Sparkles } from 'lucide-react';

export default function Cta44() {
  const [selected, setSelected] = useState(1);

  return (
    <div className="w-full w-full p-4 sm:p-8 my-10 font-sans">
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
          <Ticket size={14} /> Official Passes
        </div>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl sm:text-5xl font-black text-gray-900 mb-4 tracking-tight">
          Choose your experience.
        </h2>
        <p className="text-gray-500 text-lg font-medium max-w-xl mx-auto">
          From general admission to exclusive backstage access, select the pass that fits your style.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">
        
        {/* Standard Pass */}
        <div 
          onClick={() => setSelected(0)}
          className={`bg-white rounded-[2rem] p-8 border-2 transition-all cursor-pointer ${selected === 0 ? 'border-indigo-500 shadow-[0_20px_60px_rgba(99,102,241,0.15)] scale-[1.02]' : 'border-gray-100 hover:border-gray-200 shadow-sm'}`}
        >
          <div className="flex justify-between items-start mb-6">
            <div>
              <h3 className="text-2xl font-black text-gray-900">Standard Pass</h3>
              <p className="text-gray-500 font-medium text-sm mt-1">General Admission</p>
            </div>
            <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${selected === 0 ? 'border-indigo-500 bg-indigo-500 text-white' : 'border-gray-300'}`}>
              {selected === 0 && <Check size={14} strokeWidth={3} />}
            </div>
          </div>
          
          <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 mb-8">$199</div>
          
          <ul className="space-y-4 mb-8">
            <li className="flex items-center gap-3 text-gray-600 font-medium"><Check size={18} className="text-indigo-500" /> Full 2-day conference access</li>
            <li className="flex items-center gap-3 text-gray-600 font-medium"><Check size={18} className="text-indigo-500" /> Access to sponsor hall</li>
            <li className="flex items-center gap-3 text-gray-600 font-medium"><Check size={18} className="text-indigo-500" /> Standard seating</li>
            <li className="flex items-center gap-3 text-gray-300 font-medium"><XIcon size={18} /> VIP networking dinner</li>
            <li className="flex items-center gap-3 text-gray-300 font-medium"><XIcon size={18} /> Backstage speaker lounge</li>
          </ul>
        </div>

        {/* VIP Pass */}
        <div 
          onClick={() => setSelected(1)}
          className={`bg-slate-900 text-white rounded-[2rem] p-8 border-2 transition-all cursor-pointer relative overflow-hidden ${selected === 1 ? 'border-amber-400 shadow-[0_20px_60px_rgba(251,191,36,0.2)] scale-[1.02]' : 'border-slate-800 hover:border-slate-700 shadow-sm'}`}
        >
          {selected === 1 && (
            <div className="absolute top-0 right-0 bg-amber-400 text-amber-950 text-xs font-bold px-4 py-1.5 rounded-bl-xl uppercase tracking-widest flex items-center gap-1">
              <Sparkles size={12} /> Most Popular
            </div>
          )}
          
          <div className="flex justify-between items-start mb-6">
            <div>
              <h3 className="text-2xl font-black text-white">VIP All-Access</h3>
              <p className="text-slate-400 font-medium text-sm mt-1">The Ultimate Experience</p>
            </div>
            <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${selected === 1 ? 'border-amber-400 bg-amber-400 text-amber-950' : 'border-slate-600'}`}>
              {selected === 1 && <Check size={14} strokeWidth={3} />}
            </div>
          </div>
          
          <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-8">$599</div>
          
          <ul className="space-y-4 mb-8">
            <li className="flex items-center gap-3 text-slate-300 font-medium"><Check size={18} className="text-amber-400" /> Full 2-day conference access</li>
            <li className="flex items-center gap-3 text-slate-300 font-medium"><Check size={18} className="text-amber-400" /> Access to sponsor hall</li>
            <li className="flex items-center gap-3 text-slate-300 font-medium"><Check size={18} className="text-amber-400" /> Premium front-row seating</li>
            <li className="flex items-center gap-3 text-amber-300 font-bold"><Check size={18} className="text-amber-400" /> VIP networking dinner</li>
            <li className="flex items-center gap-3 text-amber-300 font-bold"><Check size={18} className="text-amber-400" /> Backstage speaker lounge</li>
          </ul>
        </div>
        
      </div>
      
      <div className="mt-10 flex justify-center">
        <button className="w-full sm:w-auto px-4 sm:px-8 lg:px-12 py-5 bg-indigo-600 hover:bg-indigo-700 text-white font-black rounded-xl text-lg shadow-xl transition-transform hover:-translate-y-1">
          Continue to Checkout
        </button>
      </div>
    </div>
  );
}

// Helper icon
function XIcon(props: any) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="6" x2="6" y2="18"></line>
      <line x1="6" y1="6" x2="18" y2="18"></line>
    </svg>
  );
}
