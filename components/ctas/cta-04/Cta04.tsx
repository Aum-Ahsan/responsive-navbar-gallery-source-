"use client";
import React from 'react';
import { Calendar, Video, Users, ArrowRight } from 'lucide-react';

export default function Cta04() {
  return (
    <div className="w-full max-w-6xl mx-auto p-4 sm:p-8 my-10 font-sans">
      <div className="bg-gradient-to-r from-blue-900 to-indigo-900 rounded-[2.5rem] overflow-hidden shadow-2xl relative">
        
        {/* Abstract background pattern */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>
        
        <div className="relative p-8 sm:p-16 lg:p-20 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
          
          <div className="flex-1 text-white text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur border border-white/20 px-4 py-2 rounded-full text-sm font-bold mb-8 text-blue-200">
              <Video size={16} /> Live 1-on-1 Demo
            </div>
            
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 leading-tight tracking-tight">
              See how we can <br className="hidden lg:block"/>transform your team.
            </h2>
            
            <p className="text-blue-200 text-lg sm:text-xl mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Book a personalized 30-minute walkthrough with our product experts and discover the exact ROI for your business.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <button className="w-full sm:w-auto px-8 py-4 bg-white text-blue-900 font-black rounded-xl hover:bg-blue-50 hover:scale-105 transition-all shadow-xl flex items-center justify-center gap-3 text-lg">
                <Calendar size={20} /> Schedule Demo
              </button>
              
              <div className="flex items-center gap-3 mt-4 sm:mt-0 ml-0 sm:ml-4">
                <div className="flex -space-x-3">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className={`w-10 h-10 rounded-full border-2 border-indigo-900 bg-slate-300 overflow-hidden`}>
                      <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="Avatar" className="w-full h-full object-cover" />
                    </div>
                  ))}
                  <div className="w-10 h-10 rounded-full border-2 border-indigo-900 bg-blue-100 text-blue-900 flex items-center justify-center font-bold text-xs">
                    +4k
                  </div>
                </div>
                <div className="text-sm font-medium text-blue-200 text-left leading-tight">
                  Join 4,000+ teams <br/>already onboard.
                </div>
              </div>
            </div>
          </div>
          
          {/* Calendar Widget Preview */}
          <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-6 relative transform rotate-2 hover:rotate-0 transition-transform duration-500">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-bold text-gray-900 text-lg">Select a Time</h3>
              <div className="flex gap-2">
                <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-400 cursor-pointer hover:bg-gray-200"><ArrowRight className="rotate-180" size={16}/></div>
                <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-900 cursor-pointer hover:bg-gray-200"><ArrowRight size={16}/></div>
              </div>
            </div>
            
            <div className="grid grid-cols-7 gap-2 mb-4 text-center text-xs font-bold text-gray-400">
              <div>S</div><div>M</div><div>T</div><div>W</div><div>T</div><div>F</div><div>S</div>
            </div>
            
            <div className="grid grid-cols-7 gap-2 mb-6">
              {Array.from({length: 14}).map((_, i) => (
                <div key={i} className={`h-10 rounded-lg flex items-center justify-center text-sm font-bold cursor-pointer transition-colors ${
                  i === 5 ? 'bg-blue-600 text-white shadow-md' : 
                  i < 3 ? 'text-gray-300 cursor-not-allowed' : 'bg-gray-50 text-gray-700 hover:bg-blue-100'
                }`}>
                  {i + 10}
                </div>
              ))}
            </div>
            
            <div className="space-y-3">
              <div className="text-sm font-bold text-gray-900 mb-2">Available times for 15th</div>
              <div className="grid grid-cols-2 gap-3">
                <button className="py-2.5 border border-gray-200 rounded-lg font-bold text-sm text-gray-700 hover:border-blue-600 hover:text-blue-600 transition-colors">10:00 AM</button>
                <button className="py-2.5 bg-blue-50 border border-blue-600 rounded-lg font-bold text-sm text-blue-700 shadow-sm">11:30 AM</button>
                <button className="py-2.5 border border-gray-200 rounded-lg font-bold text-sm text-gray-700 hover:border-blue-600 hover:text-blue-600 transition-colors">2:00 PM</button>
                <button className="py-2.5 border border-gray-200 rounded-lg font-bold text-sm text-gray-700 hover:border-blue-600 hover:text-blue-600 transition-colors">4:30 PM</button>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
