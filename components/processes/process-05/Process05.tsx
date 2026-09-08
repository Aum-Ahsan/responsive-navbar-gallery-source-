import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Process05() {
  const steps = ['Initialize', 'Process', 'Validate', 'Output'];

  return (
    <div className="w-full max-w-5xl mx-auto p-8 font-sans bg-gray-50 rounded-3xl">
      <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Connected Flow</h2>
      <div className="flex flex-col md:flex-row items-center justify-center gap-4 lg:gap-8">
        {steps.map((step, idx) => (
          <React.Fragment key={idx}>
            <div className="relative bg-white border border-rose-100 p-6 rounded-2xl shadow-lg w-full md:w-48 text-center group hover:border-rose-300 transition-colors cursor-pointer">
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-rose-500 text-white font-bold rounded-full flex items-center justify-center shadow-md transform group-hover:scale-110 transition-transform">
                {idx + 1}
              </div>
              <h3 className="text-lg font-bold text-gray-800 mt-2">{step}</h3>
            </div>
            
            {idx < steps.length - 1 && (
              <div className="flex items-center justify-center my-4 md:my-0 text-rose-300">
                <ArrowRight size={32} className="hidden md:block animate-pulse" />
                <svg className="md:hidden animate-bounce w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path></svg>
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
