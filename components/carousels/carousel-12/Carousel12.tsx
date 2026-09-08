// @ts-nocheck
"use client";
import React, { useState, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { CarouselShell } from "../shared/CarouselShell";

export default function Carousel12() {

  const [curr, setCurr] = useState(0);
  const images = ["https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800&q=80","https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800&q=80","https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=800&q=80","https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80","https://images.unsplash.com/photo-1473625247510-8ceb1760943f?w=800&q=80"];
  return (
    <CarouselShell name="Flip" index={12}>
      <div className="relative aspect-[21/9] w-full rounded-2xl overflow-hidden bg-black group" style={{ perspective: '1200px' }}>
        {images.map((img, i) => {
          let style: any = { opacity: i === curr ? 1 : 0, transition: 'all 1s ease-in-out', zIndex: i === curr ? 10 : 0 };
          if ('flip' === 'flip') style = { transform: `rotateY(${i === curr ? 0 : 180}deg)`, ...style };
          if ('flip' === 'zoom') style = { transform: `scale(${i === curr ? 1 : 1.5})`, ...style };
          if ('flip' === 'mask') style = { clipPath: i === curr ? 'circle(150% at 50% 50%)' : 'circle(0% at 50% 50%)', ...style, opacity: 1, zIndex: i === curr ? 10 : 5 };
          if ('flip' === 'clip') style = { clipPath: i === curr ? 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' : 'polygon(50% 50%, 50% 50%, 50% 50%, 50% 50%)', ...style, opacity: 1, zIndex: i === curr ? 10 : 5 };
          if ('flip' === 'split') style = { clipPath: i === curr ? 'inset(0 0 0 0)' : 'inset(50% 0 50% 0)', ...style };

          return <img key={i} src={img} className="absolute inset-0 w-full h-full object-cover" style={style} />;
        })}
        <button onClick={() => setCurr(c => (c - 1 + images.length) % images.length)} className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 bg-white/20 backdrop-blur text-white rounded-full"><ChevronLeft/></button>
        <button onClick={() => setCurr(c => (c + 1) % images.length)} className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 bg-white/20 backdrop-blur text-white rounded-full"><ChevronRight/></button>
      </div>
    </CarouselShell>
  );

}
