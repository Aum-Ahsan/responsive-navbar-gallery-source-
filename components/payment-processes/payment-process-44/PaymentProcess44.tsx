"use client";
import React, { useState } from "react";
import { GripVertical, CreditCard, ArrowRight, CheckCircle2 } from "lucide-react";

interface CartItem {
  id: string;
  name: string;
  price: number;
  img: string;
}

const initialCart: CartItem[] = [
  { id: "1", name: "Studio Monitor Speakers", price: 399.00, img: "https://images.unsplash.com/photo-1545127398-14699f92334b?w=150&q=80" },
  { id: "2", name: "Professional Microphone", price: 249.00, img: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=150&q=80" },
  { id: "3", name: "Acoustic Panels (6-Pack)", price: 89.00, img: "https://images.unsplash.com/photo-1516223725307-6f76b9ec8742?w=150&q=80" }
];

export default function PaymentProcess44() {
  const [cart, setCart] = useState<CartItem[]>(initialCart);
  const [draggedIdx, setDraggedIdx] = useState<number | null>(null);
  const [dragOverIdx, setDragOverIdx] = useState<number | null>(null);
  
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleDragStart = (e: React.DragEvent<HTMLDivElement>, index: number) => {
    setDraggedIdx(index);
    e.dataTransfer.effectAllowed = "move";
    // Slight delay to allow UI to update class before browser snapshots it
    setTimeout(() => {
       if (e.target instanceof HTMLElement) {
         e.target.style.opacity = '0.5';
       }
    }, 0);
  };

  const handleDragEnd = (e: React.DragEvent<HTMLDivElement>) => {
    setDraggedIdx(null);
    setDragOverIdx(null);
    if (e.target instanceof HTMLElement) {
      e.target.style.opacity = '1';
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>, index: number) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
    setDragOverIdx(index);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>, dropIndex: number) => {
    e.preventDefault();
    if (draggedIdx === null) return;
    if (draggedIdx === dropIndex) return;

    const newCart = [...cart];
    const draggedItem = newCart[draggedIdx];
    
    // Remove the item from old position
    newCart.splice(draggedIdx, 1);
    // Insert at new position
    newCart.splice(dropIndex, 0, draggedItem);
    
    setCart(newCart);
  };

  const handlePay = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
    }, 2000);
  };

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="w-full min-h-[700px] bg-neutral-50 flex items-center justify-center font-sans p-6 text-neutral-800">
      
      <div className="max-w-5xl w-full grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Side: Draggable Cart */}
        <div className="lg:col-span-7 bg-white rounded-[2rem] p-8 shadow-xl border border-neutral-200">
          <div className="flex justify-between items-end mb-8">
            <div>
              <h2 className="text-2xl font-black text-neutral-900">Your Setup</h2>
              <p className="text-neutral-500 text-sm mt-1">Drag items to reorder priority</p>
            </div>
            <div className="text-neutral-400 font-medium text-sm bg-neutral-100 px-3 py-1 rounded-full">
              {cart.length} items
            </div>
          </div>
          
          <div className="space-y-3">
            {cart.map((item, idx) => (
              <div 
                key={item.id} 
                draggable
                onDragStart={(e) => handleDragStart(e, idx)}
                onDragEnd={handleDragEnd}
                onDragOver={(e) => handleDragOver(e, idx)}
                onDrop={(e) => handleDrop(e, idx)}
                className={`relative flex items-center gap-4 p-4 rounded-2xl bg-white border-2 transition-all duration-200 cursor-grab active:cursor-grabbing
                  ${draggedIdx === idx ? 'border-indigo-400 shadow-xl scale-105 z-10 bg-indigo-50/50' : 'border-neutral-100 hover:border-neutral-300'}
                  ${dragOverIdx === idx && draggedIdx !== idx ? 'border-t-4 border-t-indigo-500 pb-2 mt-4' : ''}
                `}
              >
                <div className="text-neutral-400 p-2 cursor-grab">
                  <GripVertical className="w-5 h-5" />
                </div>
                
                <img src={item.img} alt={item.name} className="w-16 h-16 rounded-xl object-cover" />
                
                <div className="flex-1">
                  <div className="text-xs font-bold text-indigo-500 uppercase tracking-widest mb-1">Priority {idx + 1}</div>
                  <h3 className="font-bold text-neutral-900">{item.name}</h3>
                </div>
                
                <div className="text-right pl-4">
                  <p className="font-black text-neutral-900">${item.price.toFixed(2)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Checkout */}
        <div className="lg:col-span-5">
          {!isSuccess ? (
            <div className="bg-neutral-900 text-white rounded-[2rem] p-8 shadow-2xl h-full flex flex-col relative overflow-hidden animate-in slide-in-from-right-8 duration-500">
              
              <h2 className="text-2xl font-black mb-8 relative z-10">Payment</h2>

              <div className="bg-neutral-800 rounded-2xl p-6 border border-neutral-700 mb-8 relative z-10">
                <div className="flex justify-between items-end mb-2">
                  <span className="font-bold text-neutral-400">Total</span>
                  <span className="text-4xl font-black text-white">${total.toFixed(2)}</span>
                </div>
              </div>

              <form onSubmit={handlePay} className="mt-auto space-y-4 relative z-10">
                
                <div className="relative">
                  <CreditCard className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-500" />
                  <input onInput={(e) => { e.currentTarget.value = e.currentTarget.value.replace(/[^0-9\s]/g, "").substring(0, 19); }} pattern="[\\d\\s]{16,19}" maxLength={19} title="16 digit card number" required type="text" placeholder="Card Number" className="w-full bg-neutral-800 border border-neutral-700 rounded-xl pl-12 pr-4 py-4 text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all font-mono tracking-widest text-sm shadow-inner" />
                </div>
                
                <div className="flex gap-4">
                  <input onInput={(e) => { e.currentTarget.value = e.currentTarget.value.replace(/[^0-9\/]/g, "").substring(0, 5); }} pattern="(0[1-9]|1[0-2])\\/?([0-9]{2})" maxLength={5} title="Format: MM/YY" required type="text" placeholder="MM/YY" className="w-1/2 bg-neutral-800 border border-neutral-700 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all font-mono tracking-widest text-center text-sm shadow-inner" />
                  <input onInput={(e) => { e.currentTarget.value = e.currentTarget.value.replace(/[^0-9]/g, "").substring(0, 4); }} pattern="\\d{3,4}" maxLength={4} title="3 or 4 digit CVV/CVC" required type="text" placeholder="CVV" className="w-1/2 bg-neutral-800 border border-neutral-700 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all font-mono tracking-widest text-center text-sm shadow-inner" />
                </div>

                <button 
                  type="submit" 
                  disabled={isProcessing}
                  className="w-full py-5 mt-4 bg-indigo-600 text-white rounded-xl font-bold text-lg flex items-center justify-center gap-2 hover:bg-indigo-500 transition-all shadow-[0_0_20px_rgba(79,70,229,0.4)] disabled:opacity-50 disabled:shadow-none"
                >
                  {isProcessing ? (
                    <div className="w-6 h-6 border-4 border-white/30 border-t-white rounded-full animate-spin"></div>
                  ) : (
                    <>Checkout <ArrowRight className="w-5 h-5" /></>
                  )}
                </button>
              </form>

            </div>
          ) : (
            <div className="bg-emerald-50 text-neutral-900 rounded-[2rem] p-8 shadow-xl h-full flex flex-col items-center justify-center text-center animate-in zoom-in duration-500 border border-emerald-100">
               <div className="w-24 h-24 bg-emerald-100 rounded-full flex items-center justify-center mb-6">
                 <CheckCircle2 className="w-12 h-12 text-emerald-600" strokeWidth={3} />
               </div>
               <h3 className="text-3xl font-black mb-2">Order Confirmed</h3>
               <p className="text-neutral-500 mb-8 font-medium">Your items will be shipped in the prioritized order.</p>
               <button type="button" 
                 onClick={() => setIsSuccess(false)}
                 className="px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl transition-colors w-full shadow-lg shadow-emerald-600/30"
               >
                 Done
               </button>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
