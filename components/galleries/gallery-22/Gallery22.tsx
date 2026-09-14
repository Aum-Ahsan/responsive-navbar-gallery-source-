"use client";
import React, { useState } from 'react';

export default function Gallery22() {
  const initialCards = [
    { id: 1, src: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff', title: 'The Kick' },
    { id: 2, src: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e', title: 'The Sound' },
    { id: 3, src: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30', title: 'The Time' },
    { id: 4, src: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085', title: 'The Code' },
  ];

  const [cards, setCards] = useState(initialCards);

  // Send top card to the back
  const cycleCards = () => {
    setCards((prev) => {
      const newCards = [...prev];
      const topCard = newCards.shift();
      if (topCard) newCards.push(topCard);
      return newCards;
    });
  };

  return (
    <div className="w-full bg-[#f4f4f4] py-24 font-sans flex flex-col md:flex-row items-center gap-12 lg:gap-24 px-4 overflow-hidden">
      
      {/* Text Info */}
      <div className="w-full md:w-1/2 flex flex-col items-center md:items-end text-center md:text-right pr-0 md:pr-12">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 mb-6 leading-none">
          Card Deck<br />Gallery.
        </h2>
        <p className="text-gray-500 text-lg max-w-sm mb-8">
          A tactile, interactive stack. Click the top card to cycle through the collection.
        </p>
        <button 
          onClick={cycleCards}
          className="px-8 py-3 bg-black text-white font-bold rounded-full hover:bg-gray-800 transition-colors shadow-xl"
        >
          Next Item
        </button>
      </div>

      {/* Card Stack */}
      <div className="w-full md:w-1/2 flex justify-center md:justify-start h-[450px] lg:h-[550px] relative perspective-1000">
        <div className="relative w-[300px] lg:w-[380px] h-[400px] lg:h-[500px]">
          {cards.map((card, idx) => {
            // Determine z-index and transformations based on array index
            const isTop = idx === 0;
            const zIndex = cards.length - idx;
            
            // Calculate offsets
            const translateY = idx * 25; // Push down
            const translateX = idx * 15; // Push right
            const scale = 1 - (idx * 0.05); // Shrink slightly
            const rotate = isTop ? 0 : (idx % 2 === 0 ? 3 : -3); // slight tilt for underlying cards

            return (
              <div 
                key={card.id}
                onClick={isTop ? cycleCards : undefined}
                className={`absolute top-0 left-0 w-full h-full rounded-[2rem] shadow-2xl overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] ${isTop ? 'cursor-pointer hover:-translate-y-4' : 'pointer-events-none'}`}
                style={{
                  zIndex,
                  transform: `translateY(${translateY}px) translateX(${translateX}px) scale(${scale}) rotate(${rotate}deg)`,
                  opacity: idx > 2 ? 0 : 1 // Hide cards too far back
                }}
              >
                <img src={card.src} alt={card.title} className="w-full h-full object-cover" />
                
                {/* Gradient overlay for depth */}
                <div className={`absolute inset-0 bg-black transition-opacity duration-700 ${isTop ? 'opacity-0' : 'opacity-30'}`}></div>
                
                {isTop && (
                  <div className="absolute bottom-6 left-6 right-6 p-4 bg-white/90 backdrop-blur-md rounded-xl text-center">
                    <h3 className="text-xl font-bold text-black">{card.title}</h3>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>

    </div>
  );
}
