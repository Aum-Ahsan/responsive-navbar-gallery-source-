"use client";
import React, { useState } from 'react';
import { ShoppingCart, Package, ShieldCheck, ChevronRight } from 'lucide-react';

export default function Cta15() {
  const [color, setColor] = useState(0);
  const colors = [
    { name: 'Graphite', bg: 'bg-slate-800' },
    { name: 'Starlight', bg: 'bg-stone-200' },
    { name: 'Pacific Blue', bg: 'bg-blue-800' }
  ];

  return (
    <div className="w-full w-full p-4 sm:p-8 my-10 font-sans">
      <div className="bg-white rounded-[2rem] border border-gray-200 shadow-xl overflow-hidden flex flex-col md:flex-row">
        
        {/* Product Image Side */}
        <div className="w-full md:w-1/2 bg-gray-50 p-5 sm:p-8 lg:p-12 flex items-center justify-center border-b md:border-b-0 md:border-r border-gray-200 relative overflow-hidden min-h-[200px] sm:h-[260px] lg:h-[300px]">
          <div className="absolute top-6 left-6 inline-flex items-center gap-1.5 bg-black text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full z-10">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></span>
            Pre-order Live
          </div>
          
          <div className={`w-48 h-64 sm:w-64 sm:h-80 ${colors[color].bg} rounded-[1.5rem] sm:rounded-[2rem] lg:rounded-[3rem] shadow-2xl relative transition-colors duration-700 ease-in-out border-8 border-white`}>
            {/* Camera module mock */}
            <div className="absolute top-4 left-4 w-12 h-12 bg-black/20 rounded-2xl backdrop-blur-sm"></div>
            {/* Logo mock */}
            <div className="absolute center inset-0 flex items-center justify-center opacity-30">
              <div className="w-16 h-16 rounded-full border-4 border-white"></div>
            </div>
          </div>
        </div>

        {/* Content Side */}
        <div className="w-full md:w-1/2 p-8 sm:p-12 lg:p-16 flex flex-col justify-center">
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-2">Aura Studio Pro</h2>
          <p className="text-gray-500 mb-8 font-medium">Next-generation spatial audio engine.</p>
          
          <div className="flex items-baseline gap-2 mb-8 border-b border-gray-100 pb-8">
            <span className="text-2xl sm:text-3xl lg:text-4xl sm:text-5xl font-black text-gray-900">$299</span>
            <span className="text-gray-400 line-through font-semibold">$349</span>
          </div>

          <div className="mb-8">
            <div className="text-sm font-bold text-gray-900 mb-3 flex justify-between">
              <span>Color</span>
              <span className="text-gray-500">{colors[color].name}</span>
            </div>
            <div className="flex gap-3">
              {colors.map((c, i) => (
                <button 
                  key={i} 
                  onClick={() => setColor(i)}
                  className={`w-12 h-12 rounded-full border-2 transition-all p-1 ${color === i ? 'border-gray-900 scale-110' : 'border-transparent hover:scale-105'}`}
                >
                  <div className={`w-full h-full rounded-full ${c.bg} shadow-inner`}></div>
                </button>
              ))}
            </div>
          </div>

          <button className="w-full py-5 bg-black hover:bg-gray-800 text-white font-bold rounded-xl flex items-center justify-center gap-3 transition-colors shadow-xl mb-6">
            <ShoppingCart size={20} /> Pre-Order Now
          </button>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center gap-2 text-sm font-semibold text-gray-600 bg-gray-50 p-3 rounded-lg">
              <Package size={16} className="text-gray-400" /> Free Shipping
            </div>
            <div className="flex items-center gap-2 text-sm font-semibold text-gray-600 bg-gray-50 p-3 rounded-lg">
              <ShieldCheck size={16} className="text-gray-400" /> 2-Year Warranty
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
