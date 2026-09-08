import React, { useState } from 'react';

export default function Process49() {
  const [active, setActive] = useState(0);
  const cards = [
    { title: 'Card One', bg: 'bg-violet-500' },
    { title: 'Card Two', bg: 'bg-fuchsia-500' },
    { title: 'Card Three', bg: 'bg-pink-500' },
    { title: 'Card Four', bg: 'bg-rose-500' }
  ];

  return (
    <div className="w-full max-w-4xl mx-auto p-12 font-sans my-10 h-[600px] flex flex-col items-center">
      <h2 className="text-3xl font-black text-gray-900 mb-16">3D Card Stack Process</h2>

      <div className="relative w-full max-w-md h-80 perspective-[1000px]">
        {cards.map((card, idx) => {
          // Calculate 3D position based on active index
          const diff = idx - active;
          const isPast = diff < 0;
          
          let transform = '';
          let zIndex = cards.length - Math.abs(diff);
          let opacity = 1;

          if (isPast) {
            transform = `translateY(-100px) scale(0.8) rotateX(20deg)`;
            opacity = 0;
          } else {
            transform = `translateY(${diff * 30}px) translateZ(${-diff * 50}px) scale(${1 - diff * 0.05})`;
            opacity = 1 - (diff * 0.2);
          }

          return (
            <div 
              key={idx}
              onClick={() => setActive(idx)}
              className={`absolute inset-0 ${card.bg} rounded-3xl p-8 shadow-2xl transition-all duration-500 ease-out cursor-pointer flex flex-col justify-between text-white border border-white/20`}
              style={{ transform, zIndex, opacity }}
            >
              <div className="flex justify-between items-start">
                <h3 className="text-3xl font-bold">{card.title}</h3>
                <span className="text-5xl font-black opacity-30">0{idx + 1}</span>
              </div>
              <p className="font-medium text-white/80">Click to bring this card to the front of the stack. This creates a deeply layered 3D workflow effect.</p>
            </div>
          );
        })}
      </div>

      <div className="mt-16 flex gap-4">
         <button onClick={() => setActive(Math.max(0, active - 1))} className="px-6 py-2 bg-gray-100 rounded-full font-bold">Prev</button>
         <button onClick={() => setActive(Math.min(cards.length - 1, active + 1))} className="px-6 py-2 bg-gray-900 text-white rounded-full font-bold">Next</button>
      </div>
    </div>
  );
}
