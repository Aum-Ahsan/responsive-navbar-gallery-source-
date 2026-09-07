// @ts-nocheck
"use client";
import React, { useState, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { CarouselShell } from "../shared/CarouselShell";

export default function Carousel03() {

  return (
    <CarouselShell name="Scroll Snap" index={3}>
      <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-4" style={{scrollbarWidth:'none'}}>
        {["https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=800&q=80","https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=800&q=80","https://images.unsplash.com/photo-1608248593842-8021c6a818c0?w=800&q=80","https://images.unsplash.com/photo-1617897903246-719242758050?w=800&q=80","https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=800&q=80"].map((img, i) => <img key={i} src={img} className="snap-center shrink-0 w-[80%] aspect-video object-cover rounded-2xl" />)}
      </div>
    </CarouselShell>
  );

}
