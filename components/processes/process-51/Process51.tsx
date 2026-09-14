"use client";
import React from 'react';
import { Package, Truck, CheckCircle, Home } from 'lucide-react';

export default function Process51() {
  const steps = [
    { id: 1, title: 'Order Placed', date: 'Oct 12, 09:41 AM', icon: Package, status: 'completed' },
    { id: 2, title: 'Processing', date: 'Oct 12, 11:30 AM', icon: CheckCircle, status: 'completed' },
    { id: 3, title: 'Shipped', date: 'Oct 13, 08:15 AM', icon: Truck, status: 'active' },
    { id: 4, title: 'Delivered', date: 'Pending', icon: Home, status: 'upcoming' },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto py-16 px-4">
      <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 relative overflow-hidden">
        {/* Decorative background element */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-50 rounded-bl-full opacity-50 pointer-events-none" />
        
        <div className="mb-12 relative z-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Order Tracking</h2>
          <p className="text-gray-500 text-sm">Tracking ID: #FR-49201-XYZ</p>
        </div>

        <div className="relative">
          {/* Connecting Line */}
          <div className="absolute top-8 left-6 sm:left-1/2 sm:-translate-x-1/2 h-[calc(100%-4rem)] sm:h-0.5 sm:w-[calc(100%-6rem)] sm:top-10 sm:left-[3rem] bg-gray-100 z-0" />
          
          <div className="absolute top-8 left-6 sm:left-1/2 sm:-translate-x-1/2 h-1/2 sm:h-0.5 sm:w-1/2 sm:top-10 sm:left-[3rem] bg-indigo-500 z-0 transition-all duration-1000" />

          <div className="flex flex-col sm:flex-row justify-between relative z-10 space-y-8 sm:space-y-0">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isCompleted = step.status === 'completed';
              const isActive = step.status === 'active';
              
              return (
                <div key={step.id} className="flex sm:flex-col items-center sm:items-center relative pl-16 sm:pl-0">
                  <div 
                    className={`w-12 h-12 sm:w-20 sm:h-20 rounded-full flex items-center justify-center shrink-0 mb-0 sm:mb-4 absolute sm:relative left-0 top-0
                      ${isCompleted ? 'bg-indigo-500 text-white shadow-lg shadow-indigo-200' : 
                        isActive ? 'bg-white text-indigo-500 border-4 border-indigo-500 shadow-xl shadow-indigo-100 ring-4 ring-white' : 
                        'bg-gray-50 text-gray-400 border-2 border-gray-100'}`}
                  >
                    <Icon className={isCompleted ? "w-5 h-5 sm:w-8 sm:h-8" : "w-5 h-5 sm:w-8 sm:h-8"} />
                  </div>
                  
                  <div className="text-left sm:text-center">
                    <h3 className={`font-semibold text-base sm:text-lg ${isCompleted || isActive ? 'text-gray-900' : 'text-gray-400'}`}>
                      {step.title}
                    </h3>
                    <p className={`text-xs sm:text-sm mt-1 ${isCompleted || isActive ? 'text-indigo-600 font-medium' : 'text-gray-400'}`}>
                      {step.date}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
