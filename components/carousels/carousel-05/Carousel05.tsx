// @ts-nocheck
"use client";
import React, { useState, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { CarouselShell } from "../shared/CarouselShell";

export default function Carousel05() {

  const [ref, api] = useEmblaCarousel({ loop: true });
  useEffect(() => { let id: any; const play = () => { if (api) api.scrollNext(); id = setTimeout(play, 2000); }; play(); return ()=>clearTimeout(id); }, [api]);
  
  return (
    <CarouselShell name="Autoplay" index={5} headerControls={<div className="flex gap-2"><button onClick={()=>api?.scrollPrev()} className="p-3 border rounded-full"><ChevronLeft/></button><button onClick={()=>api?.scrollNext()} className="p-3 border rounded-full"><ChevronRight/></button></div>}>
      <div className="overflow-hidden" ref={ref}>
        <div className="flex gap-4">
          {["https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=800&q=80","https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=800&q=80","https://images.unsplash.com/photo-1608248593842-8021c6a818c0?w=800&q=80","https://images.unsplash.com/photo-1617897903246-719242758050?w=800&q=80","https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=800&q=80"].map((img, i) => (
            <div key={i} className="flex-[0_0_100%] min-w-0 aspect-video bg-gray-100 rounded-2xl overflow-hidden shadow-sm">
              <img src={img} className="w-full h-full object-cover " />
            </div>
          ))}
        </div>
      </div>
    </CarouselShell>
  );

}
