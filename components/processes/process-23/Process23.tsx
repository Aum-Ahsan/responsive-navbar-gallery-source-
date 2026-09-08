"use client";
import React from 'react';
import { Package, Truck, Home, CheckCircle2 } from 'lucide-react';

export default function Process23() {
  const steps = [
    { icon: Package, title: 'Order Placed', time: '10:00 AM', desc: 'We received your order', done: true },
    { icon: Package, title: 'Processing', time: '11:45 AM', desc: 'Items are being packed', done: true },
    { icon: Truck, title: 'Shipped', time: 'Yesterday', desc: 'Handed over to courier', done: true },
    { icon: Home, title: 'Out for Delivery', time: 'Today', desc: 'Courier is nearby', done: false },
    { icon: CheckCircle2, title: 'Delivered', time: 'Pending', desc: 'Package arrived', done: false }
  ];

  return (
    <div className="w-full max-w-4xl mx-auto p-8 font-sans bg-orange-50 rounded-3xl my-10 border border-orange-100">
      <div className="mb-10 flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-orange-950">Order Tracking</h2>
          <p className="text-orange-800/60 font-mono text-sm mt-1">#ORD-99382-X2</p>
        </div>
        <div className="text-right">
          <p className="text-sm font-bold text-orange-900">Estimated Delivery</p>
          <p className="text-2xl font-black text-orange-600">Today, 4:00 PM</p>
        </div>
      </div>

      <div className="relative">
        {/* Horizontal Line */}
        <div className="hidden md:block absolute top-6 left-10 right-10 h-1 bg-orange-200 -z-0"></div>
        <div className="hidden md:block absolute top-6 left-10 w-1/2 h-1 bg-orange-500 -z-0 transition-all"></div>

        <div className="flex flex-col md:flex-row justify-between gap-6 relative z-10">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div key={idx} className="flex flex-row md:flex-col items-center md:text-center gap-4 md:gap-0">
                {/* Mobile vertical line fallback */}
                <div className="md:hidden w-1 h-full bg-orange-200 absolute left-6 -z-10"></div>
                
                <div className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 border-4 border-orange-50 ${step.done ? 'bg-orange-500 text-white' : 'bg-white text-orange-300'}`}>
                  <Icon size={20} />
                </div>
                
                <div className="md:mt-4 bg-white md:bg-transparent p-4 md:p-0 rounded-xl shadow-sm md:shadow-none border border-orange-100 md:border-transparent flex-1">
                  <h4 className={`font-bold ${step.done ? 'text-orange-950' : 'text-gray-400'}`}>{step.title}</h4>
                  <p className="text-xs font-semibold text-orange-500 mt-1">{step.time}</p>
                  <p className="text-xs text-gray-500 hidden md:block mt-2">{step.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
