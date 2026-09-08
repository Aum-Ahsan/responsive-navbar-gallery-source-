// @ts-nocheck
"use client";
import React, { useState, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { CarouselShell } from "../shared/CarouselShell";

export default function Carousel15() {

  const [ref1, api1] = useEmblaCarousel({ loop: true });
  const [ref2, api2] = useEmblaCarousel({ loop: true });
  useEffect(() => {
    if (!api1 || !api2) return;
    const sync = (main: any, target: any) => { target.scrollTo(main.selectedScrollSnap()); };
    api1.on('select', () => sync(api1, api2));
    api2.on('select', () => sync(api2, api1));
  }, [api1, api2]);
  return (
    <CarouselShell name="Thumbnail Controlled" index={15}>
      <div className="flex flex-col gap-4">
        <div className="overflow-hidden w-full" ref={ref1}>
          <div className="flex">
            {["https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80","https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80","https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&q=80","https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&q=80","https://images.unsplash.com/photo-1499028344343-cd173ffc68a9?w=800&q=80"].map((img, i) => <img key={i} src={img} className="flex-[0_0_100%] aspect-video object-cover rounded-2xl" />)}
          </div>
        </div>
        <div className="overflow-hidden w-full cursor-pointer" ref={ref2}>
          <div className="flex gap-2">
            {["https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80","https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80","https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&q=80","https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&q=80","https://images.unsplash.com/photo-1499028344343-cd173ffc68a9?w=800&q=80"].map((img, i) => <img key={i} src={img} onClick={() => api1?.scrollTo(i)} className="w-32 aspect-video object-cover rounded-2xl opacity-70 hover:opacity-100 transition-opacity" />)}
          </div>
        </div>
      </div>
    </CarouselShell>
  );

}
