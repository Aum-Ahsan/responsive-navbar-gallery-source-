"use client";
import React from 'react';
import { Briefcase, Paintbrush, ArrowRight } from 'lucide-react';

export default function Cta06() {
  return (
    <div className="w-full w-full p-4 sm:p-8 my-10 font-sans">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-5xl font-black text-slate-900 mb-4 tracking-tight">
          Who are you joining as?
        </h2>
        <p className="text-slate-600 sm:text-xl max-w-2xl mx-auto">
          Choose your path to get a tailored onboarding experience and access to the right tools.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-6 lg:gap-10">
        
        {/* Left Side - For Creators */}
        <div className="flex-1 bg-fuchsia-50 hover:bg-fuchsia-100 rounded-[2rem] p-8 sm:p-12 transition-colors border border-fuchsia-100 flex flex-col items-start group cursor-pointer">
          <div className="w-16 h-16 bg-fuchsia-200 text-fuchsia-600 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform shadow-sm">
            <Paintbrush size={32} />
          </div>
          <h3 className="text-3xl font-black text-slate-900 mb-4">For Creators</h3>
          <p className="text-slate-600 mb-8 text-lg">
            Build your portfolio, connect with top brands, and monetize your audience seamlessly.
          </p>
          <ul className="space-y-3 mb-10 text-slate-700 font-medium w-full">
            <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-fuchsia-500"></div> Zero commission fees</li>
            <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-fuchsia-500"></div> Automated invoicing</li>
            <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-fuchsia-500"></div> Brand collaboration hub</li>
          </ul>
          
          <button className="mt-auto w-full py-4 bg-fuchsia-600 hover:bg-fuchsia-700 text-white font-bold rounded-xl flex items-center justify-center gap-2 transition-colors">
            Apply as Creator <ArrowRight size={18} />
          </button>
        </div>

        {/* Right Side - For Brands */}
        <div className="flex-1 bg-blue-50 hover:bg-blue-100 rounded-[2rem] p-8 sm:p-12 transition-colors border border-blue-100 flex flex-col items-start group cursor-pointer">
          <div className="w-16 h-16 bg-blue-200 text-blue-600 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform shadow-sm">
            <Briefcase size={32} />
          </div>
          <h3 className="text-3xl font-black text-slate-900 mb-4">For Brands</h3>
          <p className="text-slate-600 mb-8 text-lg">
            Discover vetted talent, launch campaigns instantly, and track ROI in real-time.
          </p>
          <ul className="space-y-3 mb-10 text-slate-700 font-medium w-full">
            <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-blue-500"></div> Access to 50k+ creators</li>
            <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-blue-500"></div> Campaign analytics dashboard</li>
            <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-blue-500"></div> Escrow payment protection</li>
          </ul>
          
          <button className="mt-auto w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl flex items-center justify-center gap-2 transition-colors">
            Join as Brand <ArrowRight size={18} />
          </button>
        </div>
        
      </div>
    </div>
  );
}
