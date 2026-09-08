import React from 'react';
import { MapPin, Flag, Navigation } from 'lucide-react';

export default function Process13() {
  const milestones = [
    { year: 'Q1', title: 'Foundation', desc: 'Setting up the infrastructure', icon: MapPin },
    { year: 'Q2', title: 'Beta Release', desc: 'Opening to early adopters', icon: Navigation },
    { year: 'Q3', title: 'Expansion', desc: 'Adding key requested features', icon: Navigation },
    { year: 'Q4', title: 'Global Launch', desc: 'Public marketing push', icon: Flag }
  ];

  return (
    <div className="w-full bg-[#1A1A1A] p-12 md:p-20 font-sans text-white rounded-3xl overflow-hidden relative shadow-2xl">
      {/* Decorative Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:30px_30px]"></div>

      <div className="relative z-10 mb-16">
        <h2 className="text-4xl md:text-5xl font-black text-amber-500 uppercase tracking-tighter">Product Roadmap</h2>
        <p className="text-gray-400 mt-2 text-lg">Our strategic journey mapped out across the fiscal year.</p>
      </div>

      <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center mt-20 gap-8 md:gap-0">
        {/* Horizontal line for desktop */}
        <div className="hidden md:block absolute top-6 left-0 w-full h-1 bg-gradient-to-r from-amber-900 via-amber-500 to-amber-200"></div>

        {milestones.map((ms, idx) => {
          const Icon = ms.icon;
          return (
            <div key={idx} className="relative w-full md:w-1/4 flex flex-row md:flex-col items-center md:items-start group">
              {/* Vertical line for mobile */}
              <div className="md:hidden absolute left-6 top-12 bottom-[-2rem] w-1 bg-amber-900"></div>
              
              <div className="w-12 h-12 rounded-lg bg-[#2A2A2A] border-2 border-amber-500 flex items-center justify-center text-amber-500 shadow-[0_0_20px_rgba(245,158,11,0.3)] group-hover:bg-amber-500 group-hover:text-white transition-all z-10 shrink-0">
                <Icon size={20} />
              </div>
              
              <div className="ml-6 md:ml-0 md:mt-8 flex flex-col">
                <span className="text-5xl font-black text-white/10 -ml-2 -mb-5 relative z-0">{ms.year}</span>
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-white">{ms.title}</h3>
                  <p className="text-gray-400 text-sm mt-1 max-w-[200px] leading-relaxed">{ms.desc}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
