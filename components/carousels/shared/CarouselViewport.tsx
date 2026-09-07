
import React, { forwardRef } from "react";

interface CarouselViewportProps extends React.HTMLAttributes<HTMLDivElement> {
  vertical?: boolean;
}

export const CarouselViewport = forwardRef<HTMLDivElement, CarouselViewportProps>(
  ({ children, className = "", vertical = false, ...props }, ref) => {
    const defaultClasses = vertical ? "flex flex-col overflow-y-auto snap-y h-[500px]" : "flex flex-row overflow-x-auto snap-x";
    
    return (
      <>
        <style dangerouslySetInnerHTML={{ __html: `
          .hide-scrollbar::-webkit-scrollbar { display: none; }
          .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        `}} />
        <div
          ref={ref}
          className={`${defaultClasses} snap-mandatory hide-scrollbar gap-4 sm:gap-6 pb-4 cursor-grab active:cursor-grabbing ${className}`}
          {...props}
        >
          {children}
        </div>
      </>
    );
  }
);
CarouselViewport.displayName = "CarouselViewport";
