// @ts-nocheck
"use client";
import React, { useState, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { CarouselShell } from "../shared/CarouselShell";

export default function Carousel13() {

  const [arr, setArr] = useState(["https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=800&q=80","https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=800&q=80","https://images.unsplash.com/photo-1608248593842-8021c6a818c0?w=800&q=80","https://images.unsplash.com/photo-1617897903246-719242758050?w=800&q=80","https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=800&q=80"]);
  const swipe = () => setArr(a => [...a.slice(1), a[0]]);
  return (
    <CarouselShell name="Stack" index={13}>
      <div className="relative aspect-[4/3] w-full max-w-xl mx-auto cursor-pointer" onClick={swipe}>
        {arr.map((img, idx) => (
          <div key={img} className="absolute inset-0 rounded-2xl overflow-hidden transition-all duration-500 shadow-2xl" style={{transform: `translateY(${idx*20}px) scale(${1 - idx*0.08})`, zIndex: arr.length - idx, opacity: 1 - idx*0.2}}>
            <img src={img} className="w-full h-full object-cover" />
          </div>
        ))}
        <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 flex gap-4 text-[#7a6b5d] text-sm"><p>Click the top card to cycle</p></div>
      </div>
    </CarouselShell>
  );

}
