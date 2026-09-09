"use client";
import React from 'react';
import { Compass, Puzzle, Star, Download, Check } from 'lucide-react';

export default function Cta24() {
  return (
    <div className="w-full max-w-5xl mx-auto p-4 sm:p-8 my-10 font-sans">
      <div className="bg-gradient-to-b from-blue-50 to-white rounded-[2rem] border border-blue-100 shadow-xl overflow-hidden flex flex-col md:flex-row relative">
        
        {/* Left Side: Mockup */}
        <div className="w-full md:w-1/2 p-8 sm:p-12 relative flex items-center justify-center">
          {/* Browser Window Mockup */}
          <div className="w-full max-w-sm bg-white rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-gray-200 overflow-hidden transform rotate-[-2deg] hover:rotate-0 transition-transform duration-500 z-10">
            {/* Browser Header */}
            <div className="bg-gray-100 border-b border-gray-200 px-4 py-3 flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
              </div>
              <div className="ml-4 flex-1 bg-white rounded-md border border-gray-200 h-6 flex items-center px-2 text-[10px] text-gray-400">
                chromewebstore.google.com
              </div>
            </div>
            {/* Extension Page Mockup */}
            <div className="p-6">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center text-white shrink-0 shadow-md">
                  <Puzzle size={32} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg leading-tight">FocusBlocker Pro</h3>
                  <div className="flex items-center gap-1 text-amber-400 my-1">
                    <Star size={12} fill="currentColor" />
                    <Star size={12} fill="currentColor" />
                    <Star size={12} fill="currentColor" />
                    <Star size={12} fill="currentColor" />
                    <Star size={12} fill="currentColor" />
                    <span className="text-gray-400 text-[10px] ml-1">(4.9)</span>
                  </div>
                  <div className="text-xs text-gray-500 font-medium flex items-center gap-1">
                    <div className="w-3 h-3 bg-blue-100 text-blue-600 rounded flex items-center justify-center text-[8px] font-bold">✓</div>
                    Featured
                  </div>
                </div>
              </div>
              <button className="w-full bg-blue-600 text-white font-bold py-2 rounded-lg text-sm mb-4">
                Add to Browser
              </button>
              <div className="bg-gray-50 rounded-lg p-3">
                <div className="h-2 w-full bg-gray-200 rounded mb-2"></div>
                <div className="h-2 w-3/4 bg-gray-200 rounded mb-2"></div>
                <div className="h-2 w-5/6 bg-gray-200 rounded"></div>
              </div>
            </div>
          </div>
          
          {/* Abstract blobs behind */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>
          <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>
        </div>

        {/* Right Side: Content */}
        <div className="w-full md:w-1/2 p-8 sm:p-12 lg:p-16 flex flex-col justify-center">
          <div className="inline-flex items-center gap-2 text-blue-600 font-bold text-sm mb-6 uppercase tracking-widest">
            <Compass size={18} /> Browser Extension
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-6 leading-tight">
            Take your productivity everywhere you browse.
          </h2>
          
          <p className="text-gray-600 text-lg mb-8 font-medium">
            Block distractions, track time automatically, and manage tasks directly from your browser toolbar. No desktop app required.
          </p>
          
          <button className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow-[0_8px_30px_rgba(37,99,235,0.3)] flex items-center justify-center gap-3 transition-transform hover:-translate-y-1">
            <Download size={20} /> Install for Free
          </button>
          
          <div className="mt-6 flex items-center gap-6 text-sm font-semibold text-gray-500">
            <span className="flex items-center gap-1"><Check size={16} className="text-green-500" /> 100k+ Users</span>
            <span className="flex items-center gap-1"><Check size={16} className="text-green-500" /> 5-Star Rating</span>
          </div>
        </div>
        
      </div>
    </div>
  );
}
