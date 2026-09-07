// @ts-nocheck
"use client";
import React, { useState, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { CarouselShell } from "../shared/CarouselShell";

export default function Carousel46() {

  const [curr, setCurr] = useState(0);
  const images = ["https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80","https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80","https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&q=80","https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&q=80","https://images.unsplash.com/photo-1499028344343-cd173ffc68a9?w=800&q=80"];
  return (
    <CarouselShell name="Zoom Transition" index={46}>
      <div className="relative aspect-[21/9] w-full rounded-2xl overflow-hidden bg-black group" style={{ perspective: '1200px' }}>
        {images.map((img, i) => {
          let style: any = { opacity: i === curr ? 1 : 0, transition: 'all 1s ease-in-out', zIndex: i === curr ? 10 : 0 };
          if ('zoom' === 'flip') style = { transform: `rotateY(${i === curr ? 0 : 180}deg)`, ...style };
          if ('zoom' === 'zoom') style = { transform: `scale(${i === curr ? 1 : 0.8})`, ...style };
          if ('zoom' === 'mask') style = { clipPath: i === curr ? 'circle(150% at 50% 50%)' : 'circle(0% at 50% 50%)', ...style, opacity: 1, zIndex: i === curr ? 10 : 5 };
          if ('zoom' === 'clip') style = { clipPath: i === curr ? 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' : 'polygon(50% 50%, 50% 50%, 50% 50%, 50% 50%)', ...style, opacity: 1, zIndex: i === curr ? 10 : 5 };
          if ('zoom' === 'split') style = { clipPath: i === curr ? 'inset(0 0 0 0)' : 'inset(50% 0 50% 0)', ...style };

          return <img key={i} src={img} className="absolute inset-0 w-full h-full object-cover" style={style} />;
        })}
        <button onClick={() => setCurr(c => (c - 1 + images.length) % images.length)} className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 bg-white/20 backdrop-blur text-white rounded-full"><ChevronLeft/></button>
        <button onClick={() => setCurr(c => (c + 1) % images.length)} className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 bg-white/20 backdrop-blur text-white rounded-full"><ChevronRight/></button>
      </div>
    </CarouselShell>
  );

}
