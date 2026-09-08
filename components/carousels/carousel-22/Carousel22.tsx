// @ts-nocheck
"use client";
import React, { useState, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { CarouselShell } from "../shared/CarouselShell";

export default function Carousel22() {

  const [rot, setRot] = useState(0);
  const images = ["https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800&q=80","https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800&q=80","https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=800&q=80","https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80","https://images.unsplash.com/photo-1473625247510-8ceb1760943f?w=800&q=80"];
  return (
    <CarouselShell name="Orbit" index={22}>
      <div className="relative h-[600px] w-full flex items-center justify-center overflow-hidden" style={{perspective: '1000px'}} onClick={()=>setRot(r=>r+45)}>
        <div className="relative w-64 h-64 transition-transform duration-1000" style={{transformStyle: 'preserve-3d', transform: `rotateY(${rot}deg) `}}>
          {images.map((img, i) => {
            const angle = (i / images.length) * 360;
            let transform = '';
            if ('orbit' === 'circle' || 'orbit' === 'cylinder') transform = `rotateY(${angle}deg) translateZ(300px)`;
            if ('orbit' === 'orbit') transform = `rotateZ(${angle}deg) translateX(200px) rotateZ(-${angle}deg)`;
            if ('orbit' === 'fan') transform = `rotateZ(${(i - images.length/2) * 15}deg) translateY(-${Math.abs(i - images.length/2)*10}px)`;
            return <img key={i} src={img} className="absolute inset-0 w-full h-full object-cover rounded-2xl shadow-xl" style={{transform}} />;
          })}
        </div>
        <p className="absolute bottom-8 text-sm font-bold text-gray-500">Click anywhere to spin the orbit</p>
      </div>
    </CarouselShell>
  );

}
