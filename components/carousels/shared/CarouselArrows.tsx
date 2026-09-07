
import React from "react";
import { ChevronLeft, ChevronRight, ChevronUp, ChevronDown } from "lucide-react";

interface CarouselArrowsProps {
  onPrev: () => void;
  onNext: () => void;
  canScrollPrev: boolean;
  canScrollNext: boolean;
  vertical?: boolean;
}

export function CarouselArrows({ onPrev, onNext, canScrollPrev, canScrollNext, vertical }: CarouselArrowsProps) {
  return (
    <div className="flex gap-2">
      <button 
        onClick={onPrev} 
        disabled={!canScrollPrev}
        className="p-2 sm:p-3 rounded-full border border-[#e8b4b8] bg-[#fbf0f0] text-[#b87a7f] hover:bg-[#f4d5d3] disabled:opacity-50 transition-colors"
        aria-label="Previous"
      >
        {vertical ? <ChevronUp size={20} /> : <ChevronLeft size={20} />}
      </button>
      <button 
        onClick={onNext} 
        disabled={!canScrollNext}
        className="p-2 sm:p-3 rounded-full border border-[#e8b4b8] bg-[#fbf0f0] text-[#b87a7f] hover:bg-[#f4d5d3] disabled:opacity-50 transition-colors"
        aria-label="Next"
      >
        {vertical ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
      </button>
    </div>
  );
}
