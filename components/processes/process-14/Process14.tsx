"use client";
import React, { useEffect, useRef, useState } from 'react';

export default function Process14() {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute('data-index'));
            setVisibleItems((prev) => (prev.includes(index) ? prev : [...prev, index]));
          }
        });
      },
      { threshold: 0.5, rootMargin: "0px 0px -100px 0px" }
    );

    const elements = document.querySelectorAll('.scroll-reveal-item');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const items = [
    { title: 'The Spark', desc: 'It all begins with a simple idea that solves a complex problem.' },
    { title: 'The Blueprint', desc: 'We draft the technical requirements and architecture diagrams.' },
    { title: 'The Assembly', desc: 'Engineers start crafting the frontend and backend microservices.' },
    { title: 'The Ignition', desc: 'We deploy the application and ignite the marketing engines.' },
  ];

  return (
    <div className="w-full max-w-3xl mx-auto p-8 py-10 sm:py-14 lg:py-20 font-sans" ref={containerRef}>
      <div className="text-center mb-24">
        <h2 className="text-3xl font-bold text-slate-800">Scroll-Reveal Journey</h2>
        <p className="text-slate-500 mt-2">Scroll down to see the steps animate into view.</p>
      </div>

      <div className="space-y-32">
        {items.map((item, idx) => {
          const isVisible = visibleItems.includes(idx);
          return (
            <div 
              key={idx} 
              data-index={idx}
              className={`scroll-reveal-item flex flex-col md:flex-row items-center gap-8 transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-24'}`}
            >
              <div className="w-32 h-32 shrink-0 bg-slate-100 rounded-3xl flex items-center justify-center shadow-inner border border-slate-200">
                <span className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-300">0{idx + 1}</span>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-lg text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
