"use client";
import React from 'react';
import { ShieldAlert, Smartphone, Fingerprint, Lock } from 'lucide-react';

export default function Cta26() {
  return (
    <div className="w-full max-w-4xl mx-auto p-4 sm:p-8 my-10 font-sans">
      <div className="bg-red-50 rounded-3xl border border-red-200 shadow-lg p-8 sm:p-12 relative overflow-hidden flex flex-col items-center text-center">
        
        {/* Animated Background Pulse */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-red-100 rounded-full animate-pulse opacity-50 z-0"></div>

        <div className="relative z-10 w-24 h-24 bg-red-100 text-red-600 rounded-full flex items-center justify-center mb-6 shadow-inner border-[6px] border-white">
          <ShieldAlert size={48} strokeWidth={1.5} />
        </div>
        
        <h2 className="relative z-10 text-3xl font-black text-red-950 mb-3">Your account is at risk</h2>
        <p className="relative z-10 text-red-900/70 font-medium max-w-lg mx-auto mb-8">
          We strongly recommend enabling Two-Factor Authentication (2FA) to protect your sensitive billing and personal data from unauthorized access.
        </p>

        <div className="relative z-10 grid grid-cols-1 sm:grid-cols-3 gap-4 w-full mb-10">
          <div className="bg-white/80 backdrop-blur-sm border border-red-100 p-4 rounded-2xl flex flex-col items-center">
            <Smartphone className="text-red-400 mb-2" size={24} />
            <span className="text-sm font-bold text-red-950">SMS Codes</span>
          </div>
          <div className="bg-white/80 backdrop-blur-sm border border-red-100 p-4 rounded-2xl flex flex-col items-center">
            <Fingerprint className="text-red-400 mb-2" size={24} />
            <span className="text-sm font-bold text-red-950">Biometrics</span>
          </div>
          <div className="bg-white/80 backdrop-blur-sm border border-red-100 p-4 rounded-2xl flex flex-col items-center">
            <Lock className="text-red-400 mb-2" size={24} />
            <span className="text-sm font-bold text-red-950">Authenticator</span>
          </div>
        </div>

        <div className="relative z-10 flex flex-col sm:flex-row gap-4 w-full max-w-sm">
          <button className="flex-1 py-4 bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl shadow-[0_4px_20px_rgba(220,38,38,0.3)] transition-colors">
            Enable 2FA Now
          </button>
          <button className="flex-1 py-4 bg-transparent border border-red-200 text-red-800 font-bold rounded-xl hover:bg-red-100 transition-colors">
            Remind Me Later
          </button>
        </div>
        
      </div>
    </div>
  );
}
