"use client";
import React from 'react';

export default function Newsletter33() {
  return (
    <div className="w-full max-w-4xl mx-auto py-20 px-4">
      <div className="border-t border-b border-gray-300 py-16 flex flex-col items-center text-center">
        
        <p className="uppercase tracking-[0.3em] text-xs font-semibold text-gray-500 mb-6">
          The Weekend Read
        </p>
        
        <h2 className="text-4xl sm:text-6xl font-serif text-gray-900 mb-6 leading-tight">
          Curated culture,<br/> delivered.
        </h2>
        
        <p className="font-serif text-gray-500 text-lg italic mb-10 max-w-lg">
          "The definitive guide to modern art, literature, and slow living, straight to your inbox."
        </p>

        <form className="w-full max-w-md flex flex-col items-center gap-6" onSubmit={(e) => e.preventDefault()}>
          <input
            type="email"
            placeholder="Enter your email address"
            className="w-full bg-transparent border-b-2 border-gray-300 focus:outline-none focus:border-gray-900 py-3 text-center text-gray-800 placeholder-gray-400 transition-colors font-serif text-lg"
            required
          />
          <button
            type="submit"
            className="px-10 py-3 bg-gray-900 text-white uppercase tracking-widest text-sm hover:bg-gray-800 transition-colors"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
}
