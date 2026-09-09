"use client";
import React from 'react';
import { Smartphone, QrCode } from 'lucide-react';

export default function Cta02() {
  return (
    <div className="w-full max-w-5xl mx-auto p-4 sm:p-8 my-10 font-sans">
      <div className="bg-slate-900 rounded-[2.5rem] overflow-hidden shadow-2xl flex flex-col md:flex-row items-center border border-slate-800">
        
        {/* Left Content */}
        <div className="w-full md:w-1/2 p-10 sm:p-16 text-left flex flex-col justify-center text-white">
          <div className="inline-flex items-center gap-2 text-emerald-400 font-bold mb-6 text-sm uppercase tracking-wider">
            <Smartphone size={18} />
            Mobile App Available
          </div>
          
          <h2 className="text-4xl sm:text-5xl font-black mb-6 leading-[1.1]">
            Your entire workflow, right in your pocket.
          </h2>
          
          <p className="text-slate-400 text-lg mb-10 leading-relaxed max-w-md">
            Download our companion app to review pull requests, reply to comments, and merge code from anywhere.
          </p>
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <div className="flex flex-col gap-3">
              <button className="bg-white text-slate-900 hover:bg-slate-100 transition-colors px-6 py-3 rounded-xl font-bold flex items-center gap-3">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.04 2.26-.7 3.53-.7 1.45.05 2.53.53 3.32 1.43-2.61 1.44-2.14 4.8.46 5.88-1.03 2.15-2.14 4.54-2.39 5.56zm-4.71-13.62c-.22-2.16 1.76-4.05 3.86-4.25.32 2.37-2.06 4.31-3.86 4.25z" />
                </svg>
                <div className="text-left">
                  <div className="text-[10px] uppercase font-semibold text-slate-500">Download on the</div>
                  <div className="text-sm leading-tight">App Store</div>
                </div>
              </button>
              <button className="bg-transparent border border-slate-700 hover:bg-slate-800 transition-colors px-6 py-3 rounded-xl font-bold flex items-center gap-3 text-white">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3.6 20.57c-.1-.1-.16-.27-.16-.51V3.94c0-.24.06-.41.16-.51l10.3 10.3-10.3 6.84zm11.16-7.7L5.05 2.59c.28-.15.6-.13.88.04l13.43 7.64c.55.31.55.83 0 1.14l-13.43 7.64c-.28.17-.6.19-.88.04l9.71-6.22zm1.6 1.15l2.67-1.52c.86-.49.86-1.28 0-1.77l-2.67-1.52-1.92 1.92 1.92 1.89z" />
                </svg>
                <div className="text-left">
                  <div className="text-[10px] uppercase font-semibold text-slate-400">Get it on</div>
                  <div className="text-sm leading-tight">Google Play</div>
                </div>
              </button>
            </div>
            
            <div className="hidden sm:flex items-center gap-4 border-l border-slate-700 pl-6 h-24">
              <div className="bg-white p-2 rounded-xl">
                <QrCode className="text-slate-900" size={64} strokeWidth={1.5} />
              </div>
              <div>
                <p className="text-sm font-bold">Scan to download</p>
                <p className="text-xs text-slate-400">iOS and Android</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Image/Mockup */}
        <div className="w-full md:w-1/2 bg-slate-800 relative min-h-[400px] md:min-h-full flex items-center justify-center p-8 overflow-hidden">
          {/* Abstract glowing background */}
          <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/30 to-emerald-500/30 blur-[80px]"></div>
          
          {/* Mock Phone Frame */}
          <div className="relative w-[240px] h-[480px] bg-slate-950 rounded-[2.5rem] border-[8px] border-slate-700 shadow-2xl flex flex-col overflow-hidden rotate-12 transform hover:rotate-0 transition-transform duration-700">
            <div className="w-32 h-6 bg-slate-700 absolute top-0 left-1/2 -translate-x-1/2 rounded-b-xl z-10"></div>
            <div className="p-4 pt-10 flex flex-col gap-4">
              <div className="w-full h-24 bg-slate-800 rounded-xl"></div>
              <div className="w-full h-12 bg-slate-800 rounded-xl"></div>
              <div className="w-full h-32 bg-indigo-600/20 border border-indigo-500/50 rounded-xl"></div>
              <div className="w-full h-12 bg-slate-800 rounded-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
