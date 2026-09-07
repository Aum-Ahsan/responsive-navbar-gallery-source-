// @ts-nocheck
"use client";
import React, { useState, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { CarouselShell } from "../shared/CarouselShell";

export default function Carousel38() {

  const [curr, setCurr] = useState(0);
  const images = ["https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800&q=80","https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800&q=80","https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=800&q=80","https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80","https://images.unsplash.com/photo-1473625247510-8ceb1760943f?w=800&q=80"];
  useEffect(() => { const id = setInterval(()=>setCurr(c=>(c+1)%images.length), 3000); return ()=>clearInterval(id); }, []);
  return (
    <CarouselShell name="Story / Timed Progress" index={38}>
      <div className="relative aspect-[9/16] max-w-sm mx-auto rounded-3xl overflow-hidden bg-black">
        <div className="absolute top-4 left-4 right-4 flex gap-1 z-20">
          {images.map((_, i) => (
            <div key={i} className="h-1 flex-1 bg-white/30 rounded-full overflow-hidden">
              <div className="h-full bg-white transition-all ease-linear" style={{width: i < curr ? '100%' : i === curr ? '100%' : '0%', transitionDuration: i === curr ? '3s' : '0s'}} />
            </div>
          ))}
        </div>
        {images.map((img, i) => <img key={i} src={img} className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${i===curr?'opacity-100':'opacity-0'}`} />)}
      </div>
    </CarouselShell>
  );

}
