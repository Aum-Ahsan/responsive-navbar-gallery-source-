// @ts-nocheck
"use client";
import React, { useState, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { CarouselShell } from "../shared/CarouselShell";

export default function Carousel20() {

  const [val, setVal] = useState(50);
  const imgs = ["https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=800&q=80","https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=800&q=80","https://images.unsplash.com/photo-1608248593842-8021c6a818c0?w=800&q=80","https://images.unsplash.com/photo-1617897903246-719242758050?w=800&q=80","https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=800&q=80"];
  return (
    <CarouselShell name="Before/After Drag" index={20}>
      <div className="relative aspect-video w-full rounded-2xl overflow-hidden">
        <img src={imgs[0]} className="absolute inset-0 w-full h-full object-cover" />
        <img src={imgs[1]} className="absolute inset-0 w-full h-full object-cover" style={{clipPath: `inset(0 0 0 ${val}%)`}} />
        <div className="absolute top-0 bottom-0 w-1 bg-white shadow-xl" style={{left: `${val}%`}}></div>
        <input type="range" min="0" max="100" value={val} onChange={e=>setVal(Number(e.target.value))} className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-20" />
      </div>
    </CarouselShell>
  );

}
