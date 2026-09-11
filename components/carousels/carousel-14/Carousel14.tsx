// @ts-nocheck
"use client";
import React, { useState, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { CarouselShell } from "../shared/CarouselShell";

export default function Carousel14() {

  const [active, setActive] = useState(0);
  return (
    <CarouselShell name="Accordion" index={14}>
      <div className="flex w-full h-[200px] sm:h-[260px] lg:h-[300px] sm:h-[260px] sm:h-[340px] lg:h-[400px] lg:h-[500px] gap-2">
        {["https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800&q=80","https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800&q=80","https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=800&q=80","https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80","https://images.unsplash.com/photo-1473625247510-8ceb1760943f?w=800&q=80"].map((img, i) => (
          <div key={i} onClick={()=>setActive(i)} className={`cursor-pointer relative overflow-hidden rounded-2xl transition-all duration-700 ease-in-out ${i === active ? 'flex-[4]' : 'flex-[1]'}`}>
            <img src={img} className="absolute inset-0 w-full h-full object-cover" />
            <div className={`absolute inset-0 bg-black/40 transition-opacity ${i === active ? 'opacity-0' : 'opacity-100'}`}/>
          </div>
        ))}
      </div>
    </CarouselShell>
  );

}
