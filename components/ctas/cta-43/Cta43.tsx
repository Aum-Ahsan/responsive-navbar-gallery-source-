"use client";
import React, { useState } from 'react';
import { ShoppingBag, Minus, Plus, Star } from 'lucide-react';

export default function Cta43() {
  const [qty, setQty] = useState(1);
  const [size, setSize] = useState(1); // 0: Small, 1: Medium, 2: Large

  const price = size === 0 ? 12.99 : size === 1 ? 16.99 : 20.99;

  return (
    <div className="w-full max-w-4xl mx-auto p-4 sm:p-8 my-10 font-sans">
      <div className="bg-orange-50 rounded-[2.5rem] border border-orange-100 shadow-xl overflow-hidden flex flex-col md:flex-row">
        
        {/* Left: Image Background */}
        <div 
          className="w-full md:w-1/2 h-64 md:h-auto bg-cover bg-center"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=1500&auto=format&fit=crop")' }}
        ></div>

        {/* Right: Content & Form */}
        <div className="w-full md:w-1/2 p-8 sm:p-12 flex flex-col justify-center bg-white relative">
          
          <div className="absolute top-6 right-6 bg-green-100 text-green-700 text-xs font-bold px-2 py-1 rounded-md flex items-center gap-1">
            <div className="w-2 h-2 rounded-full bg-green-500"></div> Available Now
          </div>

          <div className="flex items-center gap-1 text-amber-500 mb-2">
            <Star size={16} fill="currentColor" />
            <span className="text-gray-900 font-bold text-sm ml-1">4.9</span>
            <span className="text-gray-400 text-sm font-medium">(128 Reviews)</span>
          </div>
          
          <h2 className="text-3xl font-black text-gray-900 mb-2">Spicy Pepperoni Artisan</h2>
          <p className="text-gray-500 mb-8 font-medium">Hand-tossed dough, San Marzano tomato sauce, double pepperoni, hot honey drizzle.</p>

          <div className="mb-6">
            <h3 className="font-bold text-gray-900 mb-3 text-sm uppercase tracking-wider">Select Size</h3>
            <div className="flex bg-gray-50 rounded-xl p-1 border border-gray-100">
              {['10" Small', '14" Medium', '18" Large'].map((s, i) => (
                <button 
                  key={i}
                  onClick={() => setSize(i)}
                  className={`flex-1 py-2 text-sm font-bold rounded-lg transition-colors ${size === i ? 'bg-white shadow-sm text-orange-600 border border-gray-200' : 'text-gray-500 hover:text-gray-700'}`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-4 mb-8">
            <div className="flex items-center bg-gray-50 rounded-xl border border-gray-200 h-14 w-32">
              <button 
                onClick={() => setQty(Math.max(1, qty - 1))}
                className="w-10 h-full flex items-center justify-center text-gray-500 hover:text-gray-900 transition-colors"
              >
                <Minus size={16} />
              </button>
              <div className="flex-1 text-center font-black text-gray-900 text-lg">{qty}</div>
              <button 
                onClick={() => setQty(qty + 1)}
                className="w-10 h-full flex items-center justify-center text-gray-500 hover:text-gray-900 transition-colors"
              >
                <Plus size={16} />
              </button>
            </div>
            
            <div className="text-3xl font-black text-gray-900">
              ${(price * qty).toFixed(2)}
            </div>
          </div>

          <button className="w-full py-4 bg-orange-500 hover:bg-orange-600 text-white font-black rounded-xl transition-all shadow-[0_8px_20px_rgba(249,115,22,0.3)] hover:-translate-y-1 flex items-center justify-center gap-2 text-lg">
            <ShoppingBag size={20} /> Add to Order
          </button>
          
        </div>
      </div>
    </div>
  );
}
