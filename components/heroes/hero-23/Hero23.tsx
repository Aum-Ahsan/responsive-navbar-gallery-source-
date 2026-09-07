import React from "react";
import { Search, MapPin, Users } from "lucide-react";

export default function Hero23() {
  return (
    <section className="relative w-full overflow-hidden bg-[#fafafa] text-slate-900 py-20 lg:py-32 flex flex-col items-center justify-center">
      
      {/* Background Pattern (Subtle Grid) */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.03]" 
        style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '32px 32px' }} 
      />
      
      {/* Soft Glow effects */}
      <div className="absolute top-[-10%] left-[20%] w-[500px] h-[500px] rounded-full bg-blue-400/20 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[20%] w-[500px] h-[500px] rounded-full bg-purple-400/20 blur-[120px] pointer-events-none" />

      {/* Main Content Container */}
      <div className="relative z-10 px-4 md:px-8 w-full max-w-5xl mx-auto text-center flex flex-col items-center">
        
        {/* Eyebrow / Social Proof */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-slate-500 shadow-sm">
          <Users size={14} className="text-blue-500" /> 
          Trusted by 10,000+ Companies
        </div>

        {/* <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight mb-6 text-slate-900 leading-[1.1]">
          Find the job that <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">fits your life.</span>
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-2xl mb-10 leading-relaxed">
          Search millions of jobs and get the inside scoop on companies with employee reviews, personalized salary tools, and more.
        </p> */}

        {/* Big Heading */}
<h1 className="!text-[36px] md:!text-[44px] lg:!text-[56px] max-[767px]:landscape:!text-[40px] md:max-[1279px]:landscape:!text-[48px] font-black tracking-tight mb-6 text-slate-900 leading-[1.1]">
  Find the job that <br className="hidden md:block" />
  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">fits your life.</span>
</h1>

{/* Subtitle */}
<p className="!text-[15px] md:!text-[18px] lg:!text-[20px] text-slate-600 max-w-2xl mb-10 leading-relaxed">
  Search millions of jobs and get the inside scoop on companies with employee reviews, personalized salary tools, and more.
</p>

        {/* ================= SEARCH BAR UI ================= */}
        <div className="w-full max-w-4xl bg-white p-2 sm:p-3 rounded-2xl sm:rounded-full shadow-xl border border-gray-200 flex flex-col sm:flex-row items-center gap-2 sm:gap-0 transition-transform hover:scale-[1.01] duration-300">
          
          {/* Input 1: Job Role */}
          <div className="flex-1 flex items-center gap-3 px-4 py-3 w-full rounded-xl sm:rounded-l-full hover:bg-gray-50 transition-colors">
            <Search size={20} className="text-gray-400" />
            <input 
              type="text" 
              placeholder="Job title, keywords, or company" 
              className="w-full bg-transparent outline-none text-slate-800 placeholder:text-gray-400 font-medium"
            />
          </div>

          {/* Divider (Hidden on Mobile) */}
          <div className="hidden sm:block w-[1px] h-10 bg-gray-200 mx-2" />

          {/* Input 2: Location */}
          <div className="flex-1 flex items-center gap-3 px-4 py-3 w-full rounded-xl hover:bg-gray-50 transition-colors">
            <MapPin size={20} className="text-gray-400" />
            <input 
              type="text" 
              placeholder="City, state, or remote" 
              className="w-full bg-transparent outline-none text-slate-800 placeholder:text-gray-400 font-medium"
            />
          </div>

          {/* Search Button */}
          <button className="w-full sm:w-auto mt-2 sm:mt-0 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl sm:rounded-full font-bold transition-colors flex items-center justify-center gap-2 shadow-lg shadow-blue-500/30">
            Search Jobs
          </button>
        </div>

        {/* Filter Tags / Popular Searches */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-sm text-slate-500 font-medium">
          <span className="hidden md:block">Popular searches:</span>
          {["Remote", "Software Engineer", "Product Manager", "Marketing"].map((tag) => (
            <button key={tag} className="px-4 py-1.5 rounded-full border border-gray-200 bg-white hover:border-blue-500 hover:text-blue-600 transition-colors shadow-sm cursor-pointer">
              {tag}
            </button>
          ))}
        </div>

      </div>
    </section>
  );
}