// @ts-nocheck
"use client";
import React, { useState, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { CarouselShell } from "../shared/CarouselShell";

export default function Carousel21() {

  const [rot, setRot] = useState(0);
  const images = ["https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80","https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80","https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&q=80","https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&q=80","https://images.unsplash.com/photo-1499028344343-cd173ffc68a9?w=800&q=80"];
  return (
    <CarouselShell name="Circular / Radial" index={21}>
      <div className="relative h-[600px] w-full flex items-center justify-center overflow-hidden" style={{perspective: '1000px'}} onClick={()=>setRot(r=>r+45)}>
        <div className="relative w-64 h-64 transition-transform duration-1000" style={{transformStyle: 'preserve-3d', transform: `rotateY(${rot}deg) `}}>
          {images.map((img, i) => {
            const angle = (i / images.length) * 360;
            let transform = '';
            if ('circle' === 'circle' || 'circle' === 'cylinder') transform = `rotateY(${angle}deg) translateZ(300px)`;
            if ('circle' === 'orbit') transform = `rotateZ(${angle}deg) translateX(200px) rotateZ(-${angle}deg)`;
            if ('circle' === 'fan') transform = `rotateZ(${(i - images.length/2) * 15}deg) translateY(-${Math.abs(i - images.length/2)*10}px)`;
            return <img key={i} src={img} className="absolute inset-0 w-full h-full object-cover rounded-2xl shadow-xl" style={{transform}} />;
          })}
        </div>
        <p className="absolute bottom-8 text-sm font-bold text-gray-500">Click anywhere to spin the circle</p>
      </div>
    </CarouselShell>
  );

}
