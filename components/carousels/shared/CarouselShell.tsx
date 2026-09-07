
import React from "react";
export function CarouselShell({ name, index, children, headerControls }: any) {
  return (
    <div className="relative w-full py-12 px-4 sm:px-6 flex flex-col items-center bg-[#FDFBF7] overflow-hidden">
      <div className="w-full max-w-[1200px] mx-auto">
        <div className="flex justify-between items-end mb-8 relative z-10">
          <div><h2 className="text-2xl font-bold text-[#3a2e26]">{name}</h2><p className="text-[#7a6b5d] mt-1 text-sm">Component {String(index).padStart(2, '0')} / 60</p></div>
          {headerControls}
        </div>
        <div className="relative rounded-[2rem]">{children}</div>
      </div>
    </div>
  );
}
