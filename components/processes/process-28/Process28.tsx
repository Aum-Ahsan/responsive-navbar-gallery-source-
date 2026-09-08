"use client";
import React, { useState } from 'react';

export default function Process28() {
  const [step, setStep] = useState(1);

  return (
    <div className="w-full max-w-2xl mx-auto p-10 font-sans bg-white border-2 border-violet-100 rounded-3xl shadow-lg my-10">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold text-violet-950">Registration</h2>
        <div className="text-sm font-bold text-violet-500 bg-violet-50 px-3 py-1 rounded-full">
          Step {step} of 3
        </div>
      </div>

      {/* Form Steps */}
      <div className="relative overflow-hidden min-h-[250px]">
        
        {step === 1 && (
          <div className="animate-in slide-in-from-right duration-500 absolute w-full">
            <label className="block text-sm font-bold text-gray-700 mb-2">Full Name</label>
            <input type="text" className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl mb-4 outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-200 transition-all" placeholder="John Doe" />
            
            <label className="block text-sm font-bold text-gray-700 mb-2">Email Address</label>
            <input type="email" className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-200 transition-all" placeholder="john@example.com" />
          </div>
        )}

        {step === 2 && (
          <div className="animate-in slide-in-from-right duration-500 absolute w-full">
            <label className="block text-sm font-bold text-gray-700 mb-2">Company Name</label>
            <input type="text" className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl mb-4 outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-200 transition-all" placeholder="Acme Corp" />
            
            <label className="block text-sm font-bold text-gray-700 mb-2">Role</label>
            <select className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-200 transition-all">
              <option>Developer</option>
              <option>Designer</option>
              <option>Manager</option>
            </select>
          </div>
        )}

      </div>

      <div className="mt-32 flex justify-between">
        <button 
          onClick={() => setStep(s => s - 1)} 
          className={`px-6 py-3 font-bold text-gray-500 ${step === 1 ? 'invisible' : 'visible'}`}
        >
          Previous
        </button>
        <button 
          onClick={() => step < 3 ? setStep(s => s + 1) : null}
          className="px-8 py-3 bg-violet-600 text-white rounded-xl font-bold shadow-md hover:bg-violet-700 transition-colors"
        >
          {step === 3 ? 'Submit' : 'Next Step'}
        </button>
      </div>
    </div>
  );
}
