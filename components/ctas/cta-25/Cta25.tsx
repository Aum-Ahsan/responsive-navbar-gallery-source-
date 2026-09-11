"use client";
import React from 'react';
import { ArrowRightLeft } from 'lucide-react';

export default function Cta25() {
  return (
    <div className="w-full w-full p-4 sm:p-8 my-10 font-sans">
      <div className="bg-white rounded-[2rem] border border-gray-200 shadow-xl overflow-hidden p-8 sm:p-16 text-center relative">
        
        {/* Background Grid */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

        <div className="relative z-10 flex flex-col items-center">
          
          {/* Animated Logos Area */}
          <div className="flex items-center justify-center gap-4 sm:gap-8 mb-10">
            <div className="w-16 h-16 sm:w-24 sm:h-24 bg-white rounded-2xl shadow-lg border border-gray-100 flex items-center justify-center z-10 hover:scale-110 transition-transform">
              <img src="https://upload.wikimedia.org/wikipedia/commons/7/76/Slack_Icon.png" alt="Slack" className="w-10 sm:w-16" />
            </div>
            
            <div className="hidden sm:flex w-24 h-px bg-gradient-to-r from-gray-200 via-indigo-500 to-gray-200 relative">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-indigo-50 text-indigo-600 rounded-full flex items-center justify-center shadow-sm">
                <ArrowRightLeft size={16} />
              </div>
            </div>

            <div className="w-20 h-20 sm:w-32 sm:h-32 bg-indigo-600 rounded-3xl shadow-2xl flex items-center justify-center z-20 scale-110">
              <div className="text-white font-black text-2xl sm:text-4xl tracking-tighter">APP</div>
            </div>

            <div className="hidden sm:flex w-24 h-px bg-gradient-to-r from-gray-200 via-indigo-500 to-gray-200 relative">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-indigo-50 text-indigo-600 rounded-full flex items-center justify-center shadow-sm">
                <ArrowRightLeft size={16} />
              </div>
            </div>
            
            <div className="w-16 h-16 sm:w-24 sm:h-24 bg-white rounded-2xl shadow-lg border border-gray-100 flex items-center justify-center z-10 hover:scale-110 transition-transform">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Jira_%28Software%29_logo.svg/512px-Jira_%28Software%29_logo.svg.png" alt="Jira" className="w-10 sm:w-16" />
            </div>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-gray-900 mb-6 tracking-tight">
            Connect to the tools you already use.
          </h2>
          
          <p className="text-gray-500 text-lg sm:text-xl font-medium mb-10 max-w-2xl mx-auto">
            Sync data bi-directionally with Slack, Jira, GitHub, and 50+ other platforms in just two clicks. No code required.
          </p>
          
          <button className="px-8 py-4 bg-black text-white font-bold rounded-xl hover:bg-gray-800 transition-all shadow-xl hover:-translate-y-1 flex items-center gap-2">
            Browse All Integrations
          </button>
          
        </div>
      </div>
    </div>
  );
}
