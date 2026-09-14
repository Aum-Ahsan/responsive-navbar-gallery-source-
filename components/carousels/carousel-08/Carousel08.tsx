// @ts-nocheck
"use client";
import React, { useState } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";
import { CarouselShell } from "../shared/CarouselShell";

export default function Carousel08() {
  const [active, setActive] = useState(0);
  const images = [
    "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800&q=80",
    "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800&q=80",
    "https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=800&q=80",
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80",
    "https://images.unsplash.com/photo-1473625247510-8ceb1760943f?w=800&q=80",
    "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?w=800&q=80",
    "https://images.unsplash.com/photo-1518182170546-076616fdfaaf?w=800&q=80",
    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800&q=80",
    "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&q=80",
    "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=800&q=80"
  ];

  return (
    <CarouselShell 
      name="Vertical Slide Accordion" 
      index={8} 
      headerControls={
        <div className="flex gap-2">
          <button onClick={() => setActive(Math.max(0, active - 1))} className="p-3 border rounded-full hover:bg-black/5 transition"><ChevronUp size={18} /></button>
          <button onClick={() => setActive(Math.min(images.length - 1, active + 1))} className="p-3 border rounded-full hover:bg-black/5 transition"><ChevronDown size={18} /></button>
        </div>
      }
    >
      <div className="flex flex-col h-[500px] @md:h-[600px] @lg:h-[700px] gap-2 overflow-hidden rounded-2xl">
        {images.map((img, i) => (
          <div 
            key={i} 
            onClick={() => setActive(i)}
            className={`relative min-w-0 bg-gray-100 rounded-2xl overflow-hidden shadow-sm cursor-pointer transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] ${
              active === i 
                ? "flex-[1_1_100%]" 
                : "flex-[0_0_24px] @md:flex-[0_0_36px] hover:flex-[0_0_40px] @md:hover:flex-[0_0_50px]"
            }`}
          >
            <img 
              src={img} 
              className={`absolute inset-0 w-full h-full object-cover transition-transform duration-700 ${active === i ? 'scale-100' : 'scale-110 opacity-70'}`} 
            />
          </div>
        ))}
      </div>
    </CarouselShell>
  );
}
