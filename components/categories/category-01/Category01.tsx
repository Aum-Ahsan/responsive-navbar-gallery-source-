"use client";
import React, { useState } from "react";
import { ArrowUpRight, Camera, Headphones, Laptop, Watch, Smartphone, MonitorPlay } from "lucide-react";

export default function Category01() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const categories = [
    { title: "Audio & Sound", items: "120+ Products", icon: Headphones, color: "bg-blue-500", size: "col-span-1 md:col-span-2 row-span-2" },
    { title: "Laptops", items: "45+ Products", icon: Laptop, color: "bg-emerald-500", size: "col-span-1" },
    { title: "Wearables", items: "80+ Products", icon: Watch, color: "bg-amber-500", size: "col-span-1" },
    { title: "Photography", items: "30+ Products", icon: Camera, color: "bg-rose-500", size: "col-span-1 row-span-2" },
    { title: "Smartphones", items: "200+ Products", icon: Smartphone, color: "bg-indigo-500", size: "col-span-1 md:col-span-2" },
    { title: "Displays", items: "60+ Products", icon: MonitorPlay, color: "bg-purple-500", size: "col-span-1" },
  ];

  return (
    <div className="w-full bg-neutral-950 p-6 sm:p-12 font-sans min-h-[600px] flex items-center justify-center">
      <div className="max-w-6xl w-full">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight mb-3">Shop by Category</h2>
            <p className="text-neutral-400 max-w-xl text-lg">Explore our extensive collection of premium tech gear tailored for professionals and enthusiasts.</p>
          </div>
          <button className="text-white font-medium hover:text-indigo-400 transition-colors flex items-center gap-1 border-b border-neutral-700 hover:border-indigo-400 pb-1 self-start md:self-end">
            View All Categories <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[160px] gap-4">
          {categories.map((cat, i) => (
            <div 
              key={i}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`relative rounded-3xl overflow-hidden cursor-pointer group ${cat.size} bg-neutral-900 border border-neutral-800 transition-all duration-500`}
            >
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 ${cat.color}`} />
              
              <div className="p-6 sm:p-8 h-full flex flex-col justify-between relative z-10">
                <div className="flex justify-between items-start">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${cat.color} bg-opacity-10 text-white transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3`}>
                    <cat.icon className="w-6 h-6" />
                  </div>
                  <div className={`w-10 h-10 rounded-full bg-white text-black flex items-center justify-center transition-all duration-500 ${hoveredIndex === i ? 'opacity-100 translate-x-0 translate-y-0' : 'opacity-0 translate-x-4 -translate-y-4'}`}>
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                </div>

                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-1 group-hover:text-indigo-300 transition-colors">{cat.title}</h3>
                  <p className="text-sm font-medium text-neutral-500">{cat.items}</p>
                </div>
              </div>

              {/* Decorative gradient blur */}
              <div className={`absolute -bottom-20 -right-20 w-40 h-40 blur-[80px] rounded-full opacity-0 group-hover:opacity-30 transition-opacity duration-700 ${cat.color}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
