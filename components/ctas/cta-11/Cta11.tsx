"use client";
import React, { useState } from 'react';
import { Send, Check } from 'lucide-react';

export default function Cta11() {
  const [rating, setRating] = useState<number | null>(null);
  const [hoverRating, setHoverRating] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (rating) setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="w-full w-full p-4 sm:p-8 my-10 font-sans">
        <div className="bg-white rounded-3xl border border-gray-200 shadow-xl p-5 sm:p-8 lg:p-12 text-center flex flex-col items-center animate-in zoom-in-95 duration-500">
          <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mb-6">
            <Check size={40} strokeWidth={3} />
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mb-2">Thank you for your feedback!</h2>
          <p className="text-gray-500 font-medium">Your input helps us improve the platform for everyone.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full w-full p-4 sm:p-8 my-10 font-sans">
      <div className="bg-white rounded-3xl border border-gray-200 shadow-[0_20px_50px_rgba(0,0,0,0.06)] p-8 sm:p-12">
        <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mb-2 text-center">How was your experience?</h2>
        <p className="text-gray-500 mb-10 text-center font-medium">Please rate your recent interaction with our support team.</p>
        
        <form onSubmit={handleSubmit}>
          <div className="flex justify-between sm:justify-center sm:gap-4 mb-10">
            {[1, 2, 3, 4, 5].map((num) => (
              <button
                key={num}
                type="button"
                onClick={() => setRating(num)}
                onMouseEnter={() => setHoverRating(num)}
                onMouseLeave={() => setHoverRating(null)}
                className={`w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center text-xl sm:text-2xl font-black transition-all ${
                  (hoverRating !== null ? num <= hoverRating : rating !== null && num <= rating)
                    ? 'bg-amber-400 text-white scale-110 shadow-lg' 
                    : 'bg-gray-100 text-gray-400 hover:bg-gray-200'
                }`}
              >
                {num}
              </button>
            ))}
          </div>
          
          <div className="space-y-4">
            <label className="block text-sm font-bold text-gray-700">Additional Comments (Optional)</label>
            <textarea 
              rows={4}
              placeholder="Tell us what you liked or what we could do better..."
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:outline-none font-medium resize-none"
            ></textarea>
            
            <button 
              type="submit" 
              disabled={!rating}
              className="w-full py-4 bg-gray-900 text-white font-bold rounded-xl hover:bg-black transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Send size={18} /> Submit Feedback
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
