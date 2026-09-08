// @ts-nocheck
"use client";
import React, { useState, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { CarouselShell } from "../shared/CarouselShell";

export default function Carousel25() {

  const [ref, api] = useEmblaCarousel({ loop: true });
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    if (!api) return;
    setScrollSnaps(api.scrollSnapList());
    const onScroll = () => setScrollProgress(api.scrollProgress());
    api.on('scroll', onScroll);
    onScroll();
  }, [api]);

  return (
    <CarouselShell name="Depth / Z-Axis" index={25} headerControls={<div className="flex gap-2"><button onClick={()=>api?.scrollPrev()} className="p-3 border rounded-full"><ChevronLeft/></button><button onClick={()=>api?.scrollNext()} className="p-3 border rounded-full"><ChevronRight/></button></div>}>
      <div className="overflow-hidden" ref={ref}>
        <div className="flex gap-4" style={{ perspective: '1200px' }}>
          {["https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800&q=80","https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800&q=80","https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=800&q=80","https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80","https://images.unsplash.com/photo-1473625247510-8ceb1760943f?w=800&q=80"].map((img, i) => {
            const diff = scrollSnaps[i] - scrollProgress;
            let transform = '';
            let opacity = 1;
            let zIndex = 10;
            if ('depth' === 'scale') { transform = `scale(${1 - Math.abs(diff) * 0.5})`; opacity = 1 - Math.abs(diff); }
            if ('depth' === 'coverflow') { transform = `rotateY(${diff * -60}deg) translateZ(${Math.abs(diff) * -300}px)`; zIndex = 100 - Math.abs(Math.round(diff*100)); }
            if ('depth' === 'parallax') { transform = `translateX(${diff * 200}%)`; }
            if ('depth' === 'depth') { transform = `translateZ(${Math.abs(diff) * -500}px) scale(${1 - Math.abs(diff)*0.2})`; opacity = 1 - Math.abs(diff); }
            if ('depth' === 'tunnel') { transform = `translateZ(${diff * -1000}px) rotate(${diff * 45}deg)`; opacity = 1 - Math.abs(diff); }

            return (
              <div key={i} className="flex-[0_0_60%] min-w-0 aspect-[4/3] rounded-2xl overflow-hidden relative shadow-xl transition-transform duration-100 ease-out" style={{ transform, opacity, zIndex }}>
                <img src={img} className="absolute inset-0 w-full h-full object-cover" />
              </div>
            );
          })}
        </div>
      </div>
    </CarouselShell>
  );

}
