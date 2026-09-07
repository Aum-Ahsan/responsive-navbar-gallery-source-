// @ts-nocheck
"use client";
import React, { useState, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { CarouselShell } from "../shared/CarouselShell";

export default function Carousel26() {

  const [ref1, api1] = useEmblaCarousel({ loop: true });
  const [ref2, api2] = useEmblaCarousel({ loop: true });
  useEffect(() => {
    if (!api1 || !api2) return;
    const sync = (main: any, target: any) => { target.scrollTo(main.selectedScrollSnap()); };
    api1.on('select', () => sync(api1, api2));
    api2.on('select', () => sync(api2, api1));
  }, [api1, api2]);
  return (
    <CarouselShell name="Synced Dual Track" index={26}>
      <div className="flex flex-col gap-4">
        <div className="overflow-hidden w-full" ref={ref1}>
          <div className="flex">
            {["https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800&q=80","https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800&q=80","https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=800&q=80","https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80","https://images.unsplash.com/photo-1473625247510-8ceb1760943f?w=800&q=80"].map((img, i) => <img key={i} src={img} className="flex-[0_0_100%] aspect-video object-cover rounded-2xl" />)}
          </div>
        </div>
        <div className="overflow-hidden w-1/2 h-full cursor-pointer" ref={ref2}>
          <div className="flex gap-2">
            {["https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800&q=80","https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800&q=80","https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=800&q=80","https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80","https://images.unsplash.com/photo-1473625247510-8ceb1760943f?w=800&q=80"].map((img, i) => <img key={i} src={img} className="flex-[0_0_100%] aspect-video object-cover rounded-2xl opacity-70 hover:opacity-100 transition-opacity" />)}
          </div>
        </div>
      </div>
    </CarouselShell>
  );

}
