"use client";
import React from 'react';
import { MapPin, Navigation, Phone } from 'lucide-react';

export default function Cta38() {
  return (
    <div className="w-full w-full p-4 sm:p-8 my-10 font-sans">
      <div className="relative rounded-[2rem] overflow-hidden shadow-2xl bg-slate-100 min-h-[260px] sm:h-[340px] lg:h-[400px] border border-gray-200">
        
        {/* Fake Map Background */}
        <div 
          className="absolute inset-0 opacity-40 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center"
          style={{ filter: 'grayscale(100%) contrast(120%)' }}
        ></div>
        
        {/* Overlay gradient to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent"></div>

        <div className="relative z-10 p-8 sm:p-12 lg:p-16 h-full flex items-center">
          <div className="max-w-md bg-white p-8 rounded-3xl shadow-xl border border-gray-100">
            <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center mb-6">
              <MapPin size={24} />
            </div>
            
            <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mb-2">Visit our flagship store.</h2>
            <p className="text-gray-500 font-medium mb-8">
              Experience our products in person and speak with our dedicated specialists.
            </p>

            <div className="space-y-4 mb-8">
              <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                <p className="font-bold text-gray-900 text-sm mb-1">Soho, New York</p>
                <p className="text-gray-500 text-xs font-medium">123 Mercer Street<br/>New York, NY 10012</p>
              </div>
              <div className="flex gap-4 text-xs font-bold text-gray-600">
                <div><span className="text-green-500 mr-1">●</span> Open today</div>
                <div>10:00 AM - 8:00 PM</div>
              </div>
            </div>

            <div className="flex gap-3">
              <button className="flex-1 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl flex items-center justify-center gap-2 transition-colors">
                <Navigation size={18} /> Directions
              </button>
              <button className="w-12 shrink-0 py-3 bg-gray-100 hover:bg-gray-200 text-gray-900 font-bold rounded-xl flex items-center justify-center transition-colors">
                <Phone size={18} />
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
