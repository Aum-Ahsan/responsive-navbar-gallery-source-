// @ts-nocheck
"use client";
import React, { useState, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { CarouselShell } from "../shared/CarouselShell";

export default function Carousel29() {

  const [ref1, api1] = useEmblaCarousel({ loop: true });
  const [ref2, api2] = useEmblaCarousel({ loop: true , axis:"y"});
  useEffect(() => {
    if (!api1 || !api2) return;
    const sync = (main: any, target: any) => { target.scrollTo(main.selectedScrollSnap()); };
    api1.on('select', () => sync(api1, api2));
    api2.on('select', () => sync(api2, api1));
  }, [api1, api2]);
  return (
    <CarouselShell name="Bidirectional Track" index={29}>
      <div className="flex gap-4 h-[260px] sm:h-[340px] lg:h-[400px]">
        <div className="overflow-hidden w-1/2 h-full" ref={ref1}>
          <div className="flex flex-col h-full">
            {["https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=800&q=80","https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=800&q=80","https://images.unsplash.com/photo-1608248593842-8021c6a818c0?w=800&q=80","https://images.unsplash.com/photo-1617897903246-719242758050?w=800&q=80","https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=800&q=80"].map((img, i) => <img key={i} src={img} className="flex-[0_0_100%] aspect-video object-cover rounded-2xl" />)}
          </div>
        </div>
        <div className="overflow-hidden w-1/2 h-full cursor-pointer" ref={ref2}>
          <div className="flex flex-col h-full gap-2">
            {["https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=800&q=80","https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=800&q=80","https://images.unsplash.com/photo-1608248593842-8021c6a818c0?w=800&q=80","https://images.unsplash.com/photo-1617897903246-719242758050?w=800&q=80","https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=800&q=80"].map((img, i) => <img key={i} src={img} className="flex-[0_0_100%] aspect-video object-cover rounded-2xl opacity-70 hover:opacity-100 transition-opacity" />)}
          </div>
        </div>
      </div>
    </CarouselShell>
  );

}
