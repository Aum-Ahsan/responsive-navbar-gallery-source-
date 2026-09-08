import React, { useState, useEffect } from 'react';

export default function Process15() {
  const [activeIndex, setActiveIndex] = useState(0);

  // In a real app, you would use IntersectionObserver or scroll events.
  // For the gallery component context without huge scrollable space, we simulate it
  // or use a local scroll container.
  
  const content = [
    { title: 'Concept', img: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80' },
    { title: 'Design', img: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=800&q=80' },
    { title: 'Build', img: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80' }
  ];

  return (
    <div className="w-full max-w-6xl mx-auto font-sans bg-zinc-950 text-white rounded-3xl overflow-hidden border border-zinc-800 my-10">
      <div className="flex flex-col md:flex-row h-[600px]">
        {/* Sticky Visual Side */}
        <div className="w-full md:w-1/2 relative bg-zinc-900 border-r border-zinc-800 hidden md:block">
          {content.map((item, idx) => (
            <img 
              key={idx}
              src={item.img} 
              alt={item.title}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${activeIndex === idx ? 'opacity-100' : 'opacity-0'}`}
            />
          ))}
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 to-transparent"></div>
          <div className="absolute bottom-12 left-12">
            <h2 className="text-4xl font-black">{content[activeIndex].title} Phase</h2>
            <p className="text-zinc-400 mt-2">Sticky visual dynamically updates.</p>
          </div>
        </div>

        {/* Scrollable Content Side */}
        <div 
          className="w-full md:w-1/2 h-full overflow-y-auto snap-y snap-mandatory scroll-smooth relative"
          onScroll={(e) => {
            const el = e.currentTarget;
            const idx = Math.round(el.scrollTop / el.clientHeight);
            setActiveIndex(idx);
          }}
        >
          {content.map((item, idx) => (
            <div key={idx} className="h-full w-full snap-center flex flex-col justify-center p-12 md:p-24 relative">
              {/* Mobile image fallback */}
              <div className="md:hidden w-full h-48 mb-8 rounded-2xl overflow-hidden relative">
                <img src={item.img} className="w-full h-full object-cover" alt="" />
              </div>

              <div className="text-zinc-500 font-bold tracking-widest uppercase mb-4 text-sm">Step 0{idx + 1}</div>
              <h3 className="text-3xl md:text-5xl font-bold mb-6">{item.title}</h3>
              <p className="text-zinc-400 text-lg leading-relaxed">
                Scroll within this container to see the sticky visual on the left update automatically based on your scroll position. Each section snaps into place to ensure perfect alignment and readability.
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
