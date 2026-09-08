// @ts-nocheck
"use client";
import React, { useState, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { CarouselShell } from "../shared/CarouselShell";

export default function Carousel04() {

  const [ref, api] = useEmblaCarousel({ loop: true });
  
  
  return (
    <CarouselShell name="Infinite Loop" index={4} headerControls={<div className="flex gap-2"><button onClick={()=>api?.scrollPrev()} className="p-3 border rounded-full"><ChevronLeft/></button><button onClick={()=>api?.scrollNext()} className="p-3 border rounded-full"><ChevronRight/></button></div>}>
      <div className="overflow-hidden" ref={ref}>
        <div className="flex gap-4">
          {["https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800&q=80","https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800&q=80","https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=800&q=80","https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80","https://images.unsplash.com/photo-1473625247510-8ceb1760943f?w=800&q=80"].map((img, i) => (
            <div key={i} className="flex-[0_0_100%] min-w-0 aspect-video bg-gray-100 rounded-2xl overflow-hidden shadow-sm">
              <img src={img} className="w-full h-full object-cover " />
            </div>
          ))}
        </div>
      </div>
    </CarouselShell>
  );

}
