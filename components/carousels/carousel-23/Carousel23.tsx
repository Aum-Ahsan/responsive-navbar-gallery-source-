// @ts-nocheck
"use client";
import React, { useState, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { CarouselShell } from "../shared/CarouselShell";

export default function Carousel23() {

  const [rot, setRot] = useState(0);
  const images = ["https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=800&q=80","https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=800&q=80","https://images.unsplash.com/photo-1608248593842-8021c6a818c0?w=800&q=80","https://images.unsplash.com/photo-1617897903246-719242758050?w=800&q=80","https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=800&q=80"];
  return (
    <CarouselShell name="Cylinder" index={23}>
      <div className="relative h-[600px] w-full flex items-center justify-center overflow-hidden" style={{perspective: '1000px'}} onClick={()=>setRot(r=>r+45)}>
        <div className="relative w-64 h-64 transition-transform duration-1000" style={{transformStyle: 'preserve-3d', transform: `rotateY(${rot}deg) rotateX(15deg)`}}>
          {images.map((img, i) => {
            const angle = (i / images.length) * 360;
            let transform = '';
            if ('cylinder' === 'circle' || 'cylinder' === 'cylinder') transform = `rotateY(${angle}deg) translateZ(300px)`;
            if ('cylinder' === 'orbit') transform = `rotateZ(${angle}deg) translateX(200px) rotateZ(-${angle}deg)`;
            if ('cylinder' === 'fan') transform = `rotateZ(${(i - images.length/2) * 15}deg) translateY(-${Math.abs(i - images.length/2)*10}px)`;
            return <img key={i} src={img} className="absolute inset-0 w-full h-full object-cover rounded-2xl shadow-xl" style={{transform}} />;
          })}
        </div>
        <p className="absolute bottom-8 text-sm font-bold text-gray-500">Click anywhere to spin the cylinder</p>
      </div>
    </CarouselShell>
  );

}
