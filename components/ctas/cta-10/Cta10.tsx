"use client";
import React from 'react';
import { MapPin, Calendar, Clock, Ticket } from 'lucide-react';

export default function Cta10() {
  return (
    <div className="w-full w-full p-4 sm:p-8 my-10 font-sans">
      <div className="bg-red-50 rounded-3xl border border-red-100 overflow-hidden shadow-xl flex flex-col md:flex-row relative">
        
        {/* Abstract Background pattern */}
        <div className="absolute inset-0 opacity-[0.03] z-0" style={{ backgroundImage: 'radial-gradient(#b91c1c 2px, transparent 2px)', backgroundSize: '30px 30px' }}></div>

        {/* Content Side */}
        <div className="flex-1 p-8 sm:p-12 lg:p-16 relative z-10 flex flex-col justify-center text-center md:text-left">
          <div className="inline-block bg-red-100 text-red-800 text-xs font-bold px-3 py-1 rounded-full mb-6 w-max mx-auto md:mx-0">
            Developer Summit 2026
          </div>
          
          <h2 className="text-3xl sm:text-5xl font-black text-red-950 mb-6 tracking-tight leading-tight">
            The future of engineering, <br className="hidden lg:block" /> live in Berlin.
          </h2>
          
          <p className="text-red-900/70 text-lg mb-10 max-w-lg mx-auto md:mx-0">
            Join 2,000+ engineers for two days of deep technical dives, architectural workshops, and networking.
          </p>
          
          <button className="w-full sm:w-auto px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl flex items-center justify-center md:justify-start gap-3 transition-transform hover:scale-105 shadow-lg shadow-red-600/30">
            <Ticket size={20} /> Secure Your Ticket
          </button>
          
          <p className="text-xs font-semibold text-red-800/50 mt-4">
            Early bird pricing ends in 3 days.
          </p>
        </div>

        {/* Info Cards Side */}
        <div className="w-full md:w-1/3 bg-red-900 p-8 flex flex-col justify-center gap-4 relative z-10">
          
          <div className="bg-white/10 backdrop-blur border border-white/10 rounded-2xl p-5 text-white flex items-start gap-4 hover:bg-white/20 transition-colors">
            <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center shrink-0 text-red-200">
              <Calendar size={24} />
            </div>
            <div>
              <h4 className="font-bold text-lg leading-tight mb-1">Date</h4>
              <p className="text-red-200 text-sm font-medium">October 15 - 16, 2026</p>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur border border-white/10 rounded-2xl p-5 text-white flex items-start gap-4 hover:bg-white/20 transition-colors">
            <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center shrink-0 text-red-200">
              <MapPin size={24} />
            </div>
            <div>
              <h4 className="font-bold text-lg leading-tight mb-1">Location</h4>
              <p className="text-red-200 text-sm font-medium">Estrel Congress Center<br/>Berlin, Germany</p>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur border border-white/10 rounded-2xl p-5 text-white flex items-start gap-4 hover:bg-white/20 transition-colors">
            <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center shrink-0 text-red-200">
              <Clock size={24} />
            </div>
            <div>
              <h4 className="font-bold text-lg leading-tight mb-1">Schedule</h4>
              <p className="text-red-200 text-sm font-medium">09:00 AM - 06:00 PM<br/>Both Days</p>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
