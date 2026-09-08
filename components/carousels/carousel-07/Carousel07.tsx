// @ts-nocheck
"use client";
import React, { useState, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { CarouselShell } from "../shared/CarouselShell";

export default function Carousel07() {

  const [ref, api] = useEmblaCarousel({ align: 'center', loop: true });
  
  
  return (
    <CarouselShell name="Center Mode" index={7} headerControls={<div className="flex gap-2"><button onClick={()=>api?.scrollPrev()} className="p-3 border rounded-full"><ChevronLeft/></button><button onClick={()=>api?.scrollNext()} className="p-3 border rounded-full"><ChevronRight/></button></div>}>
      <div className="overflow-hidden" ref={ref}>
        <div className="flex gap-4">
          {["https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80","https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80","https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&q=80","https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&q=80","https://images.unsplash.com/photo-1499028344343-cd173ffc68a9?w=800&q=80"].map((img, i) => (
            <div key={i} className="flex-[0_0_60%] min-w-0 aspect-video bg-gray-100 rounded-2xl overflow-hidden shadow-sm">
              <img src={img} className="w-full h-full object-cover " />
            </div>
          ))}
        </div>
      </div>
    </CarouselShell>
  );

}
