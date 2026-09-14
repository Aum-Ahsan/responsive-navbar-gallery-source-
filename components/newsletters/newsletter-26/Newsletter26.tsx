"use client";
import React from 'react';
import { Send } from 'lucide-react';

export default function Newsletter26() {
  return (
    <div className="w-full max-w-4xl mx-auto py-16 px-4">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-8 sm:p-16 shadow-2xl">
        {/* Glassmorphic overlay */}
        <div className="absolute inset-0 bg-white/10 backdrop-blur-md" />
        
        {/* Decorative circles */}
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-white/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-white/20 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="text-white md:w-1/2 text-center md:text-left">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4 text-white drop-shadow-sm">
              Get the latest insights.
            </h2>
            <p className="text-white/80 text-lg leading-relaxed">
              Join 10,000+ designers and developers getting our weekly design tips and resources.
            </p>
          </div>

          <div className="w-full md:w-1/2">
            <form className="relative flex flex-col gap-3" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full px-6 py-4 rounded-xl bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 focus:bg-white/30 backdrop-blur-sm transition-all"
                required
              />
              <button
                type="submit"
                className="w-full px-6 py-4 rounded-xl bg-white text-purple-600 font-bold hover:bg-white/90 transition-colors flex items-center justify-center gap-2 shadow-lg"
              >
                <span>Subscribe Now</span>
                <Send size={18} />
              </button>
            </form>
            <p className="text-white/60 text-xs text-center mt-4">
              We respect your privacy. No spam, ever.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
