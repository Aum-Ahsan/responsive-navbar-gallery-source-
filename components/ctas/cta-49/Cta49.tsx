"use client";
import React, { useState } from 'react';
import { Package, Star, MessageSquare } from 'lucide-react';

export default function Cta49() {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  return (
    <div className="w-full w-full p-4 sm:p-8 my-10 font-sans">
      <div className="bg-white rounded-3xl border border-gray-200 shadow-xl p-8 sm:p-12 relative overflow-hidden">
        
        <div className="absolute top-0 inset-x-0 h-2 bg-gradient-to-r from-emerald-400 to-teal-500"></div>

        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mb-2">How did we do?</h2>
          <p className="text-gray-500 font-medium text-sm">Order #ORD-8492-X</p>
        </div>

        <div className="bg-gray-50 rounded-2xl p-4 flex items-center gap-4 border border-gray-100 mb-8 max-w-sm mx-auto">
          <div className="w-16 h-16 bg-white rounded-xl border border-gray-200 shadow-sm flex items-center justify-center text-gray-400">
            <Package size={24} />
          </div>
          <div>
            <h4 className="font-bold text-gray-900 text-sm">Premium Ergonomic Chair</h4>
            <p className="text-xs text-gray-500">Delivered on Aug 14th</p>
          </div>
        </div>

        <div className="flex justify-center gap-2 mb-8">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              onMouseEnter={() => setHover(star)}
              onMouseLeave={() => setHover(0)}
              onClick={() => setRating(star)}
              className="group focus:outline-none transition-transform hover:scale-110"
            >
              <Star 
                size={40} 
                className={`transition-colors ${
                  (hover || rating) >= star 
                    ? 'fill-amber-400 text-amber-400' 
                    : 'fill-gray-100 text-gray-200'
                }`}
              />
            </button>
          ))}
        </div>

        <div className={`transition-all duration-500 overflow-hidden ${rating > 0 ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="space-y-4 max-w-md mx-auto">
            <div className="relative">
              <div className="absolute top-3 left-3 text-gray-400">
                <MessageSquare size={18} />
              </div>
              <textarea 
                placeholder="Tell us what you loved (or didn't) about this product..."
                rows={3}
                className="w-full pl-10 pr-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:outline-none font-medium resize-none shadow-sm text-sm"
              ></textarea>
            </div>
            <button className="w-full py-4 bg-emerald-500 hover:bg-emerald-600 text-white font-bold rounded-xl shadow-lg transition-colors flex items-center justify-center gap-2">
              Submit Review & Earn 50 Pts
            </button>
          </div>
        </div>
        
      </div>
    </div>
  );
}
