"use client";
import React, { useState } from 'react';
import { Map, MapPin, Phone, Mail } from 'lucide-react';

export default function Cta48() {
  const [region, setRegion] = useState('NA');

  const regions = {
    'NA': { name: 'North America', rep: 'Michael Scott', phone: '+1 (555) 123-4567', email: 'na-sales@company.com' },
    'EU': { name: 'Europe', rep: 'Sarah Connor', phone: '+44 20 7123 4567', email: 'eu-sales@company.com' },
    'APAC': { name: 'Asia Pacific', rep: 'Kenji Tanaka', phone: '+81 3 1234 5678', email: 'apac-sales@company.com' }
  };

  return (
    <div className="w-full max-w-5xl mx-auto p-4 sm:p-8 my-10 font-sans">
      <div className="bg-slate-50 rounded-[2.5rem] border border-slate-200 overflow-hidden shadow-xl p-8 sm:p-12 flex flex-col lg:flex-row items-center gap-12 relative">
        
        {/* Left: Map UI */}
        <div className="w-full lg:w-1/2 relative bg-white rounded-3xl p-6 border border-slate-200 shadow-sm">
          <div className="flex items-center gap-2 text-indigo-600 font-bold text-sm uppercase tracking-widest mb-6">
            <Map size={16} /> Global Reach
          </div>
          
          <div className="relative aspect-[4/3] bg-slate-100 rounded-2xl border border-slate-200 overflow-hidden">
            {/* Fake Map Background */}
            <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#94a3b8 2px, transparent 2px)', backgroundSize: '16px 16px' }}></div>
            
            {/* Region Dots */}
            <button 
              onClick={() => setRegion('NA')}
              className={`absolute top-[30%] left-[20%] w-10 h-10 rounded-full flex items-center justify-center transition-all shadow-lg z-10 ${region === 'NA' ? 'bg-indigo-600 text-white scale-125' : 'bg-white text-slate-400 hover:bg-indigo-50 border border-slate-200'}`}
            >
              <MapPin size={20} className={region === 'NA' ? 'animate-bounce' : ''} />
            </button>

            <button 
              onClick={() => setRegion('EU')}
              className={`absolute top-[25%] left-[55%] w-10 h-10 rounded-full flex items-center justify-center transition-all shadow-lg z-10 ${region === 'EU' ? 'bg-indigo-600 text-white scale-125' : 'bg-white text-slate-400 hover:bg-indigo-50 border border-slate-200'}`}
            >
              <MapPin size={20} className={region === 'EU' ? 'animate-bounce' : ''} />
            </button>

            <button 
              onClick={() => setRegion('APAC')}
              className={`absolute top-[40%] right-[15%] w-10 h-10 rounded-full flex items-center justify-center transition-all shadow-lg z-10 ${region === 'APAC' ? 'bg-indigo-600 text-white scale-125' : 'bg-white text-slate-400 hover:bg-indigo-50 border border-slate-200'}`}
            >
              <MapPin size={20} className={region === 'APAC' ? 'animate-bounce' : ''} />
            </button>
          </div>
          
          <div className="mt-4 text-center text-xs text-slate-500 font-bold uppercase tracking-widest">
            Select a region on the map
          </div>
        </div>

        {/* Right: Contact Details */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mb-4 tracking-tight">
            Connect with your local team.
          </h2>
          <p className="text-slate-500 font-medium mb-8 max-w-sm">
            We have dedicated sales and engineering teams in every major time zone to support your enterprise.
          </p>

          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm relative overflow-hidden transition-all duration-300">
            <div className="absolute top-0 left-0 w-1 h-full bg-indigo-600"></div>
            
            <h3 className="text-xl font-black text-slate-900 mb-1">{regions[region as keyof typeof regions].name} Office</h3>
            <p className="text-sm font-medium text-slate-500 mb-6">Regional Director: {regions[region as keyof typeof regions].rep}</p>

            <div className="space-y-4">
              <a href="#" className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-full bg-slate-50 group-hover:bg-indigo-50 flex items-center justify-center text-slate-400 group-hover:text-indigo-600 transition-colors border border-slate-200">
                  <Phone size={16} />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">Phone</div>
                  <div className="font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">{regions[region as keyof typeof regions].phone}</div>
                </div>
              </a>
              
              <a href="#" className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-full bg-slate-50 group-hover:bg-indigo-50 flex items-center justify-center text-slate-400 group-hover:text-indigo-600 transition-colors border border-slate-200">
                  <Mail size={16} />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">Email</div>
                  <div className="font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">{regions[region as keyof typeof regions].email}</div>
                </div>
              </a>
            </div>
            
            <button className="w-full mt-8 py-3 bg-slate-900 hover:bg-black text-white font-bold rounded-xl transition-colors shadow-lg">
              Request a Meeting
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
