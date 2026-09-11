"use client";
import React from 'react';
import { Lock, Sparkles } from 'lucide-react';

export default function Cta28() {
  return (
    <div className="w-full w-full p-4 sm:p-8 my-10 font-sans relative">
      
      {/* Fake Content Background */}
      <div className="text-slate-300 select-none space-y-4 filter blur-[6px] opacity-60">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-800 mb-6">Advanced React Server Components Architecture</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <div className="h-64 bg-slate-200 rounded-xl my-6"></div>
        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
      </div>

      {/* Paywall CTA Modal */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg px-4">
        <div className="bg-white/90 backdrop-blur-xl border border-white/50 rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.1)] p-8 sm:p-12 text-center relative overflow-hidden">
          
          <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-violet-500 via-fuchsia-500 to-orange-500"></div>

          <div className="w-16 h-16 bg-gradient-to-br from-violet-100 to-fuchsia-100 text-fuchsia-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm border border-fuchsia-200/50">
            <Lock size={32} />
          </div>
          
          <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mb-3 tracking-tight">Keep reading with Premium</h2>
          <p className="text-gray-500 mb-8 font-medium">
            Unlock this article and thousands of deep-dive tutorials, system design case studies, and exclusive interviews.
          </p>

          <button className="w-full py-4 bg-gray-900 text-white font-bold rounded-xl shadow-lg hover:bg-black hover:-translate-y-1 transition-all flex items-center justify-center gap-2 mb-4">
            <Sparkles size={18} className="text-amber-400" /> Unlock Full Access
          </button>
          
          <p className="text-sm font-bold text-gray-500">
            Already a member? <a href="#" className="text-fuchsia-600 hover:underline">Sign in</a>
          </p>
        </div>
      </div>
      
    </div>
  );
}
