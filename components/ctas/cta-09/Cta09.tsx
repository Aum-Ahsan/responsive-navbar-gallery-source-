"use client";
import React, { useState } from 'react';
import { Mail, User, CheckCircle2, ChevronRight, Loader2 } from 'lucide-react';

export default function Cta09() {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 1 && email) setStep(2);
    if (step === 2 && name) {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setStep(3);
      }, 1500);
    }
  };

  return (
    <div className="w-full w-full p-4 sm:p-8 my-10 font-sans">
      <div className="bg-white rounded-3xl border border-gray-200 shadow-[0_20px_60px_rgba(0,0,0,0.05)] p-8 sm:p-12 text-center overflow-hidden relative">
        
        {/* Progress Bar */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gray-100">
          <div 
            className="h-full bg-indigo-600 transition-all duration-500" 
            style={{ width: step === 1 ? '33%' : step === 2 ? '66%' : '100%' }}
          ></div>
        </div>

        <div className="max-w-md mx-auto">
          
          {step === 1 && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="w-16 h-16 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Mail size={32} />
              </div>
              <h2 className="text-3xl font-black text-gray-900 mb-4">Let's stay in touch</h2>
              <p className="text-gray-500 mb-8 font-medium">Enter your email to join our exclusive community and get the welcome package.</p>
              
              <form onSubmit={handleNext} className="flex flex-col gap-3">
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@example.com" 
                  className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:outline-none font-medium text-center text-lg"
                  required
                  autoFocus
                />
                <button type="submit" className="w-full py-4 bg-black text-white font-bold rounded-xl hover:bg-gray-800 transition-colors flex items-center justify-center gap-2">
                  Continue <ChevronRight size={18} />
                </button>
              </form>
            </div>
          )}

          {step === 2 && (
            <div className="animate-in fade-in slide-in-from-right-8 duration-500">
              <div className="w-16 h-16 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <User size={32} />
              </div>
              <h2 className="text-3xl font-black text-gray-900 mb-4">What should we call you?</h2>
              <p className="text-gray-500 mb-8 font-medium">Almost done! We like to personalize our emails.</p>
              
              <form onSubmit={handleNext} className="flex flex-col gap-3">
                <input 
                  type="text" 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your First Name" 
                  className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:outline-none font-medium text-center text-lg"
                  required
                  autoFocus
                />
                <button disabled={loading} type="submit" className="w-full py-4 bg-indigo-600 text-white font-bold rounded-xl hover:bg-indigo-700 transition-colors flex items-center justify-center gap-2 disabled:opacity-70">
                  {loading ? <Loader2 className="animate-spin" size={20} /> : 'Complete Sign Up'}
                </button>
                <button type="button" onClick={() => setStep(1)} className="text-gray-400 font-bold text-sm mt-2 hover:text-gray-600">
                  Back
                </button>
              </form>
            </div>
          )}

          {step === 3 && (
            <div className="animate-in fade-in zoom-in-95 duration-500">
              <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
                <CheckCircle2 size={40} />
              </div>
              <h2 className="text-3xl font-black text-gray-900 mb-4">You're on the list, {name}!</h2>
              <p className="text-gray-500 mb-8 font-medium">We've sent a confirmation email to <span className="font-bold text-gray-900">{email}</span>. Please check your inbox.</p>
              
              <button onClick={() => {setStep(1); setEmail(''); setName('');}} className="w-full py-4 bg-gray-100 text-gray-900 font-bold rounded-xl hover:bg-gray-200 transition-colors">
                Done
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
