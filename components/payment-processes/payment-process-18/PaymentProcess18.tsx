"use client";
import React, { useState, useRef, useEffect } from "react";
import { ArrowDown, Loader2, CheckCircle2, ChevronLeft, ShoppingBag } from "lucide-react";

export default function PaymentProcess18() {
  const [startY, setStartY] = useState(0);
  const [pullDistance, setPullDistance] = useState(0);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [discount, setDiscount] = useState(0);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  const containerRef = useRef<HTMLDivElement>(null);
  const maxPull = 120;
  const refreshThreshold = 80;

  const handlePointerDown = (e: React.PointerEvent) => {
    if (isRefreshing || isProcessing || isSuccess) return;
    
    // Only allow pull if we are at the top of the scroll container
    if (containerRef.current && containerRef.current.scrollTop > 0) return;
    
    setStartY(e.clientY);
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (startY === 0 || isRefreshing) return;
    
    const deltaY = e.clientY - startY;
    if (deltaY > 0) {
      // Add resistance to the pull
      const resistance = 0.5;
      const pull = Math.min(deltaY * resistance, maxPull);
      setPullDistance(pull);
      
      // Prevent actual scrolling while pulling
      if (e.cancelable) e.preventDefault();
    }
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    if (startY === 0) return;
    setStartY(0);
    e.currentTarget.releasePointerCapture(e.pointerId);

    if (pullDistance >= refreshThreshold) {
      setIsRefreshing(true);
      setPullDistance(refreshThreshold); // Snap to loading position
      
      // Simulate network request
      setTimeout(() => {
        // Apply a random discount
        const newDiscount = [5, 10, 15, 20][Math.floor(Math.random() * 4)];
        setDiscount(newDiscount);
        setIsRefreshing(false);
        setPullDistance(0);
      }, 1500);
    } else {
      setPullDistance(0);
    }
  };

  const handlePay = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
    }, 2000);
  };

  const baseTotal = 150.00;
  const finalTotal = baseTotal - discount;

  if (isSuccess) {
    return (
      <div className="w-full min-h-[600px] bg-slate-100 flex items-center justify-center p-6 font-sans">
        <div className="bg-white p-12 rounded-[2rem] shadow-xl text-center max-w-sm w-full animate-in fade-in zoom-in-95 duration-500">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-10 h-10 text-green-500" />
          </div>
          <h2 className="text-2xl font-bold text-slate-900 mb-2">Payment Complete</h2>
          <p className="text-slate-500 mb-8">Thank you for your purchase.</p>
          <button type="button" onClick={() => { setIsSuccess(false); setDiscount(0); }} className="w-full py-4 bg-slate-900 text-white rounded-xl font-bold hover:bg-slate-800 transition-colors">
            Return Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen bg-slate-100 flex items-center justify-center p-6 font-sans">
      
      <div className="max-w-[400px] w-full bg-white rounded-[2.5rem] shadow-2xl h-[800px] max-h-[90vh] overflow-hidden flex flex-col border-[8px] border-slate-800 relative">
        
        {/* App Header */}
        <div className="px-6 py-5 flex items-center justify-between border-b border-slate-100 bg-white z-20 relative">
          <button type="button" className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-900 hover:bg-slate-100 transition-colors">
            <ChevronLeft className="w-6 h-6" />
          </button>
          <h1 className="font-bold text-lg text-slate-900">Your Cart</h1>
          <div className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-white relative">
            <ShoppingBag className="w-5 h-5" />
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full text-[10px] font-bold flex items-center justify-center border-2 border-white">2</span>
          </div>
        </div>

        {/* Pull to Refresh Area */}
        <div className="relative flex-1 overflow-hidden bg-slate-50 z-10">
          
          {/* Refresh Indicator (Hidden behind content, revealed when pulled) */}
          <div 
            className="absolute top-0 inset-x-0 flex flex-col items-center justify-center text-indigo-500 font-medium text-sm transition-opacity"
            style={{ 
              height: `${refreshThreshold}px`,
              opacity: (pullDistance / refreshThreshold)
            }}
          >
            {isRefreshing ? (
              <Loader2 className="w-6 h-6 animate-spin mb-1" />
            ) : pullDistance >= refreshThreshold ? (
              <ArrowDown className="w-6 h-6 rotate-180 transition-transform mb-1" />
            ) : (
              <ArrowDown className="w-6 h-6 transition-transform mb-1" />
            )}
            {isRefreshing ? 'Checking for deals...' : pullDistance >= refreshThreshold ? 'Release to refresh' : 'Pull to refresh'}
          </div>

          {/* Scrollable Content that moves down */}
          <div 
            ref={containerRef}
            className="h-full overflow-y-auto custom-scrollbar touch-pan-y relative z-10 bg-white shadow-[0_-10px_20px_rgba(0,0,0,0.05)] transition-transform ease-out"
            style={{ 
              transform: `translateY(${pullDistance}px)`,
              transitionDuration: startY === 0 ? '300ms' : '0ms' // Snap back when released, follow pointer when dragging
            }}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerCancel={handlePointerUp}
          >
            <div className="p-6 space-y-6">
              
              <div className="bg-indigo-50 rounded-2xl p-4 text-center border border-indigo-100 text-indigo-700 text-sm font-medium">
                Tip: Pull down to check for today's special deals!
              </div>

              {/* Cart Items */}
              <div className="space-y-4">
                {[1, 2].map((item) => (
                  <div key={item} className="flex gap-4">
                    <div className="w-24 h-24 bg-slate-100 rounded-2xl p-2 shrink-0">
                      <img src={`https://images.unsplash.com/photo-${item === 1 ? '1505740420928-5e560c06d30e' : '1542291026-7eec264c27ff'}?w=200&q=80`} alt="Product" className="w-full h-full object-cover mix-blend-multiply rounded-xl" />
                    </div>
                    <div className="flex-1 flex flex-col justify-center">
                      <h3 className="font-bold text-slate-900">{item === 1 ? 'Sony WH-1000XM4' : 'Nike Air Max 270'}</h3>
                      <p className="text-slate-500 text-sm mb-2">{item === 1 ? 'Electronics' : 'Shoes'}</p>
                      <div className="font-bold text-slate-900">${item === 1 ? '75.00' : '75.00'}</div>
                    </div>
                  </div>
                ))}
              </div>

              <hr className="border-slate-100" />

              {/* Order Summary */}
              <div className="space-y-3">
                <div className="flex justify-between text-slate-500 font-medium">
                  <span>Subtotal</span>
                  <span>${baseTotal.toFixed(2)}</span>
                </div>
                
                {discount > 0 && (
                  <div className="flex justify-between text-indigo-600 font-bold animate-in slide-in-from-right fade-in">
                    <span>Special Discount!</span>
                    <span>-${discount.toFixed(2)}</span>
                  </div>
                )}
              </div>

            </div>
          </div>
        </div>

        {/* Footer Checkout */}
        <div className="bg-white p-6 pb-8 border-t border-slate-100 z-20 relative">
          <div className="flex justify-between items-end mb-6">
            <span className="font-bold text-slate-500">Total</span>
            <span className="text-3xl font-black text-slate-900">${finalTotal.toFixed(2)}</span>
          </div>

          <form onSubmit={handlePay}>
            <button 
              type="submit" 
              disabled={isProcessing || isRefreshing}
              className="w-full py-4 bg-indigo-600 text-white rounded-2xl font-bold text-lg hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-600/30 flex items-center justify-center disabled:opacity-70 disabled:shadow-none"
            >
              {isProcessing ? 'Processing...' : 'Place Order'}
            </button>
          </form>
        </div>

      </div>
    </div>
  );
}
