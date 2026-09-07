
import { useState, useRef, useCallback, useEffect } from "react";

export function useCarousel(options?: { autoPlay?: boolean; interval?: number; vertical?: boolean }) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);

  const checkScroll = useCallback(() => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollTop, scrollWidth, scrollHeight, clientWidth, clientHeight } = scrollContainerRef.current;
      if (options?.vertical) {
        setCanScrollPrev(scrollTop > 0);
        setCanScrollNext(scrollTop < scrollHeight - clientHeight - 1);
      } else {
        setCanScrollPrev(scrollLeft > 0);
        setCanScrollNext(scrollLeft < scrollWidth - clientWidth - 1);
      }
    }
  }, [options?.vertical]);

  const scroll = useCallback((direction: "prev" | "next") => {
    if (scrollContainerRef.current) {
      const { clientWidth, clientHeight } = scrollContainerRef.current;
      if (options?.vertical) {
        const scrollAmount = clientHeight * 0.8;
        scrollContainerRef.current.scrollBy({ top: direction === "prev" ? -scrollAmount : scrollAmount, behavior: "smooth" });
      } else {
        const scrollAmount = clientWidth * 0.8;
        scrollContainerRef.current.scrollBy({ left: direction === "prev" ? -scrollAmount : scrollAmount, behavior: "smooth" });
      }
    }
  }, [options?.vertical]);

  useEffect(() => {
    if (options?.autoPlay) {
      const id = setInterval(() => {
        if (scrollContainerRef.current) {
          scrollContainerRef.current.scrollBy({ left: 1, behavior: "auto" });
        }
      }, options.interval || 20);
      return () => clearInterval(id);
    }
  }, [options?.autoPlay, options?.interval]);

  return { scrollContainerRef, canScrollPrev, canScrollNext, checkScroll, scroll };
}
