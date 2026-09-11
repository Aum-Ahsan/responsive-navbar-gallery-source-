"use client";
import React from 'react';
import { ArrowRight, Code, Layers, Zap } from 'lucide-react';

export default function Cta16() {
  return (
    <div className="w-full w-full p-4 sm:p-8 my-10 font-sans">
      <div className="group relative w-full h-[200px] sm:h-[260px] lg:h-[300px] sm:h-[260px] sm:h-[340px] lg:h-[400px] lg:h-[500px] sm:h-[260px] sm:h-[340px] lg:h-[400px] bg-slate-900 rounded-[2rem] overflow-hidden cursor-pointer">
        
        {/* Default State */}
        <div className="absolute inset-0 p-8 sm:p-16 flex flex-col justify-center items-center text-center transition-all duration-500 ease-out group-hover:scale-95 group-hover:opacity-0">
          <div className="w-20 h-20 bg-slate-800 rounded-full flex items-center justify-center mb-8 border border-slate-700 shadow-xl">
            <Layers size={32} className="text-slate-300" />
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl sm:text-5xl font-black text-white mb-4 tracking-tight">Explore the Platform</h2>
          <p className="text-slate-400 text-lg sm:text-xl font-medium max-w-lg">
            Hover to discover the powerful features that await you inside.
          </p>
        </div>

        {/* Hover Reveal State */}
        <div className="absolute inset-0 bg-indigo-600 p-8 sm:p-12 lg:p-16 flex flex-col sm:flex-row items-center gap-8 lg:gap-16 opacity-0 translate-y-8 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out z-10">
          
          <div className="flex-1 text-center sm:text-left">
            <h2 className="text-3xl sm:text-5xl font-black text-white mb-6 leading-tight">
              Ready to start building?
            </h2>
            <p className="text-indigo-200 text-lg mb-8 max-w-md mx-auto sm:mx-0">
              Get instant access to our comprehensive UI kit, API documentation, and community forums.
            </p>
            <button className="px-8 py-4 bg-white text-indigo-600 font-black rounded-xl hover:bg-indigo-50 transition-colors shadow-xl flex items-center justify-center gap-2 mx-auto sm:mx-0">
              Create Free Account <ArrowRight size={20} />
            </button>
          </div>

          <div className="w-full sm:w-full sm:w-[240px] md:w-[300px] grid grid-cols-1 gap-3">
            {[
              { icon: Code, text: "Extensive API Docs" },
              { icon: Zap, text: "Serverless Deployment" },
              { icon: Layers, text: "500+ UI Components" }
            ].map((feat, i) => {
              const Icon = feat.icon;
              return (
                <div key={i} className="bg-indigo-700/50 border border-indigo-500/50 backdrop-blur rounded-xl p-4 flex items-center gap-4 text-white hover:bg-indigo-700 transition-colors">
                  <div className="w-10 h-10 bg-indigo-500/50 rounded-lg flex items-center justify-center">
                    <Icon size={18} />
                  </div>
                  <span className="font-bold">{feat.text}</span>
                </div>
              );
            })}
          </div>
          
        </div>
        
      </div>
    </div>
  );
}
