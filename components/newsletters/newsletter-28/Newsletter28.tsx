"use client";
import React, { useState } from 'react';
import { Mail, CheckCircle2 } from 'lucide-react';

export default function Newsletter28() {
  const [isSubscribed, setIsSubscribed] = useState(false);

  return (
    <div className="w-full max-w-3xl mx-auto py-24 px-4">
      <div className="relative bg-white rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-gray-100 p-10 text-center overflow-hidden">
        
        {/* Envelope Flap Decoration */}
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-0 transform">
          <svg className="relative block w-full h-[100px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M600,112.77C268.63,112.77,0,65.52,0,7.23V0H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z" fill="#f8fafc"></path>
          </svg>
        </div>

        <div className="relative z-10 flex flex-col items-center mt-12">
          {!isSubscribed ? (
            <>
              <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-6">
                <Mail size={32} strokeWidth={1.5} />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-3">You've got mail!</h2>
              <p className="text-gray-500 mb-8 max-w-md">
                Well, almost. Subscribe to our newsletter and receive curated content directly in your inbox.
              </p>

              <form 
                className="w-full max-w-sm relative"
                onSubmit={(e) => {
                  e.preventDefault();
                  setIsSubscribed(true);
                }}
              >
                <input
                  type="email"
                  placeholder="Email address"
                  className="w-full pl-6 pr-32 py-4 rounded-full bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all text-gray-800"
                  required
                />
                <button
                  type="submit"
                  className="absolute right-2 top-2 bottom-2 px-6 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </>
          ) : (
            <div className="animate-in zoom-in duration-500 flex flex-col items-center py-10">
              <div className="w-20 h-20 bg-green-50 text-green-500 rounded-full flex items-center justify-center mb-6">
                <CheckCircle2 size={40} />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-3">Awesome!</h2>
              <p className="text-gray-500">
                You have successfully subscribed to our newsletter. Check your inbox for a welcome email.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
