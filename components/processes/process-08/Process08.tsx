import React, { useState } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';

export default function Process08() {
  const [step, setStep] = useState(1);
  const totalSteps = 4;

  const handleNext = () => step < totalSteps && setStep(s => s + 1);
  const handlePrev = () => step > 1 && setStep(s => s - 1);

  return (
    <div className="w-full max-w-3xl mx-auto p-8 font-sans bg-white shadow-2xl rounded-[2rem] border border-gray-100 my-10">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-2xl font-bold text-teal-950">Stepper Wizard</h2>
          <p className="text-gray-500 text-sm mt-1">Step {step} of {totalSteps}</p>
        </div>
        <div className="flex gap-2">
          {[1, 2, 3, 4].map(i => (
            <div key={i} className={`h-2 rounded-full transition-all duration-500 ${i <= step ? 'w-8 bg-teal-500' : 'w-2 bg-gray-200'}`} />
          ))}
        </div>
      </div>

      <div className="bg-teal-50 rounded-2xl p-10 min-h-[250px] flex items-center justify-center text-center mb-8 border border-teal-100">
        <div>
          <div className="w-16 h-16 bg-teal-100 text-teal-600 rounded-full flex items-center justify-center text-2xl font-black mx-auto mb-4 shadow-sm">
            {step}
          </div>
          <h3 className="text-xl font-bold text-teal-900 mb-2">
            {step === 1 && "Personal Details"}
            {step === 2 && "Company Info"}
            {step === 3 && "Payment Setup"}
            {step === 4 && "Confirmation"}
          </h3>
          <p className="text-teal-700/70">Please fill out the necessary information to proceed.</p>
        </div>
      </div>

      <div className="flex justify-between items-center pt-6 border-t border-gray-100">
        <button 
          onClick={handlePrev} 
          disabled={step === 1}
          className="flex items-center px-6 py-3 rounded-xl font-bold text-gray-600 bg-gray-100 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          <ChevronLeft size={20} className="mr-2" /> Back
        </button>
        <button 
          onClick={handleNext} 
          disabled={step === totalSteps}
          className="flex items-center px-8 py-3 rounded-xl font-bold text-white bg-teal-600 hover:bg-teal-700 shadow-md shadow-teal-500/30 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          {step === totalSteps ? 'Submit' : 'Continue'} <ChevronRight size={20} className="ml-2" />
        </button>
      </div>
    </div>
  );
}
