// @ts-nocheck
"use client";
import React, { useState, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { CarouselShell } from "../shared/CarouselShell";

export default function Carousel17() {

  const [ref, api] = useEmblaCarousel();
  const [prog, setProg] = useState(0);
  useEffect(() => {
    if (!api) return;
    const fn = () => setProg(Math.max(0, Math.min(1, api.scrollProgress())));
    api.on('scroll', fn); fn();
  }, [api]);
  return (
    <CarouselShell name="Progress Controlled" index={17}>
      <div className="overflow-hidden mb-6" ref={ref}>
        <div className="flex gap-4">
          {["https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800&q=80","https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800&q=80","https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=800&q=80","https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80","https://images.unsplash.com/photo-1473625247510-8ceb1760943f?w=800&q=80"].map((img, i) => <img key={i} src={img} className="flex-[0_0_80%] aspect-video object-cover rounded-2xl" />)}
        </div>
      </div>
      <div className="w-full max-w-md mx-auto h-2 bg-gray-200 rounded-full overflow-hidden relative">
        
        <div className="h-full bg-black transition-all duration-300" style={{width: `${prog * 100}%`}} />
      </div>
    </CarouselShell>
  );

}
