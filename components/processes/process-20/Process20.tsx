"use client";
import React, { useState } from 'react';
import { ShoppingBag, Truck, CheckCircle2 } from 'lucide-react';

export default function Process20() {
  const [shippingMethod, setShippingMethod] = useState<'standard' | 'express'>('standard');

  return (
    <div className="w-full max-w-3xl mx-auto p-10 font-sans bg-white border border-gray-100 shadow-xl rounded-3xl my-10">
      <div className="flex justify-between items-end mb-10 border-b border-gray-100 pb-6">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">Delivery Process</h2>
          <p className="text-gray-500 mt-1">Select your shipping speed to see the workflow.</p>
        </div>
        <div className="bg-gray-100 p-1 rounded-xl flex gap-1">
          <button 
            onClick={() => setShippingMethod('standard')}
            className={`px-4 py-2 rounded-lg text-sm font-bold transition-colors ${shippingMethod === 'standard' ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
          >
            Standard
          </button>
          <button 
            onClick={() => setShippingMethod('express')}
            className={`px-4 py-2 rounded-lg text-sm font-bold transition-colors ${shippingMethod === 'express' ? 'bg-red-500 text-white shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
          >
            Express (1-Day)
          </button>
        </div>
      </div>

      <div className="relative">
        {/* Conditional rendering based on state */}
        <div className="flex justify-between relative z-10">
          
          <div className="flex flex-col items-center text-center w-1/3">
            <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center text-gray-700 mb-4">
              <ShoppingBag size={24} />
            </div>
            <h4 className="font-bold">Order Placed</h4>
            <p className="text-xs text-gray-500 mt-1">Today</p>
          </div>

          <div className="flex flex-col items-center text-center w-1/3">
            <div className={`w-16 h-16 rounded-full flex items-center justify-center text-white mb-4 transition-colors duration-500 ${shippingMethod === 'express' ? 'bg-red-500' : 'bg-blue-500'}`}>
              <Truck size={24} />
            </div>
            <h4 className="font-bold">Transit</h4>
            <p className="text-xs text-gray-500 mt-1">
              {shippingMethod === 'express' ? 'Priority Air Freight' : 'Ground Shipping'}
            </p>
          </div>

          <div className="flex flex-col items-center text-center w-1/3">
            <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 mb-4">
              <CheckCircle2 size={24} />
            </div>
            <h4 className="font-bold">Delivered</h4>
            <p className="text-xs text-gray-500 mt-1">
              {shippingMethod === 'express' ? 'Tomorrow by 8PM' : 'In 5-7 Business Days'}
            </p>
          </div>

        </div>

        {/* Connector Line */}
        <div className="absolute top-8 left-1/6 right-1/6 h-0.5 bg-gray-200 -z-10 w-2/3 mx-auto"></div>
      </div>
    </div>
  );
}
