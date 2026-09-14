"use client";
import React from 'react';

export default function Newsletter27() {
  return (
    <div className="w-full max-w-5xl mx-auto py-20 px-4">
      <div className="border-4 border-black p-8 sm:p-12 bg-[#f4f4f0] shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] relative">
        <div className="absolute top-0 right-0 bg-black text-white px-4 py-1 text-sm font-bold uppercase tracking-widest translate-x-4 -translate-y-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hidden sm:block">
          Newsletter
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="w-full lg:w-1/2">
            <h2 className="text-5xl sm:text-7xl font-black uppercase leading-[0.9] tracking-tighter mb-6">
              STAY<br/>SHARP.
            </h2>
            <p className="text-xl font-bold border-l-4 border-black pl-4">
              Raw, unfiltered opinions on tech, design, and culture delivered weekly.
            </p>
          </div>

          <div className="w-full lg:w-1/2">
            <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-sm font-bold uppercase tracking-widest mb-2" htmlFor="email-27">
                  Email Address
                </label>
                <input
                  id="email-27"
                  type="email"
                  className="w-full border-4 border-black p-4 text-lg font-bold bg-white focus:outline-none focus:bg-[#e8e8e4] transition-colors shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
                  placeholder="YOU@EXAMPLE.COM"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-black text-white p-4 text-xl font-black uppercase tracking-wider hover:bg-gray-800 active:translate-y-1 active:translate-x-1 active:shadow-none transition-all shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] border-4 border-black hover:text-[#f4f4f0]"
              >
                Sign Me Up
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
