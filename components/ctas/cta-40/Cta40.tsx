"use client";
import React from 'react';
import { Home, Calendar, Star, ChevronRight } from 'lucide-react';

export default function Cta40() {
  return (
    <div className="w-full w-full p-4 sm:p-8 my-10 font-sans">
      <div className="bg-white rounded-[2rem] border border-gray-200 shadow-xl overflow-hidden flex flex-col sm:flex-row relative">
        
        {/* Photo Gallery Side */}
        <div className="w-full lg:w-3/5 h-64 lg:h-auto relative">
          <img src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2000&auto=format&fit=crop" alt="Luxury Home" className="w-full h-full object-cover" />
          <div className="absolute top-6 left-6 bg-white/90 backdrop-blur px-3 py-1.5 rounded-full text-xs font-bold text-gray-900 shadow-sm flex items-center gap-1">
            <Star size={14} className="text-amber-500 fill-amber-500" /> Premium Listing
          </div>
        </div>

        {/* Action Card Side */}
        <div className="w-full lg:w-2/5 p-8 sm:p-12 bg-white flex flex-col justify-center">
          <div className="text-indigo-600 text-xs font-bold uppercase tracking-widest mb-2 flex items-center gap-2">
            <Home size={14} /> Beverly Hills, CA
          </div>
          <h2 className="text-3xl font-black text-gray-900 mb-2">Modern Villa Estate</h2>
          <div className="text-2xl font-black text-gray-500 mb-8">$8,500,000</div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 border-y border-gray-100 py-6 mb-8">
            <div className="text-center">
              <div className="font-black text-gray-900 text-xl">5</div>
              <div className="text-xs text-gray-500 font-bold uppercase mt-1">Beds</div>
            </div>
            <div className="text-center border-l border-gray-100">
              <div className="font-black text-gray-900 text-xl">6</div>
              <div className="text-xs text-gray-500 font-bold uppercase mt-1">Baths</div>
            </div>
            <div className="text-center border-l border-gray-100">
              <div className="font-black text-gray-900 text-xl">8.5k</div>
              <div className="text-xs text-gray-500 font-bold uppercase mt-1">SqFt</div>
            </div>
          </div>

          <h3 className="font-bold text-gray-900 mb-4">Interested in this property?</h3>
          <p className="text-gray-500 text-sm font-medium mb-6">Schedule a private showing with one of our luxury agents.</p>

          <div className="flex flex-col sm:flex-row gap-3">
            <button className="flex-1 py-4 bg-gray-900 hover:bg-black text-white font-bold rounded-xl transition-colors flex items-center justify-center gap-2">
              <Calendar size={18} /> Book a Tour
            </button>
            <button className="sm:w-auto px-6 py-4 bg-white border border-gray-200 hover:bg-gray-50 text-gray-900 font-bold rounded-xl transition-colors flex items-center justify-center">
              View Gallery <ChevronRight size={18} className="ml-1" />
            </button>
          </div>
        </div>
        
      </div>
    </div>
  );
}
