import React, { useState } from 'react';
import { Smartphone, Key, ShieldCheck } from 'lucide-react';

export default function Process30() {
  const [step, setStep] = useState(1);
  const [otp, setOtp] = useState(['', '', '', '']);

  return (
    <div className="w-full max-w-lg mx-auto p-8 font-sans">
      <div className="bg-white rounded-[2.5rem] p-10 shadow-2xl border border-gray-100 text-center relative overflow-hidden">
        
        {/* Progress header */}
        <div className="flex justify-center items-center gap-4 mb-10">
          <div className={`w-3 h-3 rounded-full transition-colors ${step >= 1 ? 'bg-emerald-500' : 'bg-gray-200'}`}></div>
          <div className={`w-10 h-1 rounded-full transition-colors ${step >= 2 ? 'bg-emerald-500' : 'bg-gray-200'}`}></div>
          <div className={`w-3 h-3 rounded-full transition-colors ${step >= 2 ? 'bg-emerald-500' : 'bg-gray-200'}`}></div>
          <div className={`w-10 h-1 rounded-full transition-colors ${step >= 3 ? 'bg-emerald-500' : 'bg-gray-200'}`}></div>
          <div className={`w-3 h-3 rounded-full transition-colors ${step >= 3 ? 'bg-emerald-500' : 'bg-gray-200'}`}></div>
        </div>

        {step === 1 && (
          <div className="animate-in fade-in slide-in-from-left-4">
            <div className="w-20 h-20 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-500 mx-auto mb-6">
              <Smartphone size={32} />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Verify Phone</h2>
            <p className="text-gray-500 mb-8">We will send a code to your registered mobile number.</p>
            <button onClick={() => setStep(2)} className="w-full bg-emerald-500 text-white font-bold py-4 rounded-xl hover:bg-emerald-600 transition-colors">
              Send SMS Code
            </button>
          </div>
        )}

        {step === 2 && (
          <div className="animate-in fade-in slide-in-from-right-4">
            <div className="w-20 h-20 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-500 mx-auto mb-6">
              <Key size={32} />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Enter OTP</h2>
            <p className="text-gray-500 mb-8">Type the 4-digit code sent to your phone.</p>
            
            <div className="flex justify-center gap-3 mb-8">
              {[0,1,2,3].map(i => (
                <input 
                  key={i} 
                  type="text" 
                  maxLength={1} 
                  className="w-14 h-16 text-center text-2xl font-bold bg-gray-50 border border-gray-200 rounded-xl focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all"
                  placeholder="-"
                />
              ))}
            </div>

            <button onClick={() => setStep(3)} className="w-full bg-emerald-500 text-white font-bold py-4 rounded-xl hover:bg-emerald-600 transition-colors">
              Verify
            </button>
          </div>
        )}

        {step === 3 && (
          <div className="animate-in fade-in zoom-in duration-500">
            <div className="w-24 h-24 bg-emerald-500 rounded-full flex items-center justify-center text-white mx-auto mb-6 shadow-lg shadow-emerald-500/40">
              <ShieldCheck size={40} />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Success!</h2>
            <p className="text-gray-500">Your account is fully verified and secure.</p>
          </div>
        )}

      </div>
    </div>
  );
}
