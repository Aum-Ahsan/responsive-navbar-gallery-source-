"use client";
import React, { useState } from 'react';
import { Star } from 'lucide-react';

export default function Cta21() {
  const [hoveredStar, setHoveredStar] = useState<number | null>(null);
  const [selectedStar, setSelectedStar] = useState<number | null>(null);

  const getEmoji = (rating: number | null) => {
    if (!rating) return "🤔";
    if (rating === 1) return "😭";
    if (rating === 2) return "😞";
    if (rating === 3) return "😐";
    if (rating === 4) return "😃";
    return "🤩";
  };

  const getEmojiText = (rating: number | null) => {
    if (!rating) return "Let us know!";
    if (rating === 1) return "Terrible";
    if (rating === 2) return "Bad";
    if (rating === 3) return "Okay";
    if (rating === 4) return "Good";
    return "Excellent!";
  };

  const currentRating = hoveredStar || selectedStar;

  return (
    <div className="w-full w-full p-4 sm:p-8 my-10 font-sans">
      <div className="bg-white rounded-3xl border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-8 sm:p-16 text-center">
        
        <div className="text-3xl sm:text-5xl lg:text-6xl mb-4 transition-transform duration-300 transform scale-110">
          {getEmoji(currentRating)}
        </div>
        
        <h2 className="text-3xl font-black text-gray-900 mb-2">Enjoying the app?</h2>
        <p className="text-gray-500 font-medium mb-10 text-lg">
          {getEmojiText(currentRating)}
        </p>

        <div className="flex justify-center gap-2 sm:gap-4 mb-10">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              onMouseEnter={() => setHoveredStar(star)}
              onMouseLeave={() => setHoveredStar(null)}
              onClick={() => setSelectedStar(star)}
              className="group transition-transform hover:scale-125 focus:outline-none"
            >
              <Star 
                size={48} 
                strokeWidth={1.5}
                className={`transition-colors duration-200 ${
                  (currentRating !== null && star <= currentRating) 
                    ? 'fill-amber-400 text-amber-400' 
                    : 'fill-gray-100 text-gray-200 group-hover:text-amber-200'
                }`}
              />
            </button>
          ))}
        </div>

        <div className={`transition-all duration-500 ${selectedStar ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}>
          {selectedStar && selectedStar >= 4 ? (
            <button className="px-8 py-4 bg-black text-white font-bold rounded-xl hover:bg-gray-800 transition-colors shadow-lg">
              Rate us on the App Store
            </button>
          ) : (
            <button className="px-8 py-4 bg-gray-100 text-gray-900 font-bold rounded-xl hover:bg-gray-200 transition-colors">
              Tell us how to improve
            </button>
          )}
        </div>
        
      </div>
    </div>
  );
}
