"use client";
import React, { useState } from "react";
import { ShoppingCart, Plus, CheckCircle2, Package, CreditCard, Trash2 } from "lucide-react";

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  color: string;
}

const PRODUCTS: Product[] = [
  { id: 'p1', name: 'Wireless Earbuds', price: 129, color: 'bg-indigo-500', image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=200&q=80' },
  { id: 'p2', name: 'Smart Watch', price: 299, color: 'bg-rose-500', image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=200&q=80' },
  { id: 'p3', name: 'Mechanical Keyboard', price: 149, color: 'bg-amber-500', image: 'https://images.unsplash.com/photo-1595225476474-87563907a212?w=200&q=80' },
  { id: 'p4', name: 'Gaming Mouse', price: 79, color: 'bg-emerald-500', image: 'https://images.unsplash.com/photo-1527814050087-379381547330?w=200&q=80' },
];

export default function PaymentProcess11() {
  const [cart, setCart] = useState<{product: Product, quantity: number}[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);
  const [draggedItemId, setDraggedItemId] = useState<string | null>(null);

  const handleDragStart = (e: React.DragEvent, id: string) => {
    e.dataTransfer.setData('productId', id);
    setDraggedItemId(id);
    setTimeout(() => setIsDragging(true), 0);
  };

  const handleDragEnd = () => {
    setIsDragging(false);
    setDraggedItemId(null);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault(); // Necessary to allow dropping
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const productId = e.dataTransfer.getData('productId');
    const product = PRODUCTS.find(p => p.id === productId);
    
    if (product) {
      setCart(prev => {
        const existing = prev.find(item => item.product.id === productId);
        if (existing) {
          return prev.map(item => item.product.id === productId ? { ...item, quantity: item.quantity + 1 } : item);
        }
        return [...prev, { product, quantity: 1 }];
      });
    }
  };

  const removeFromCart = (productId: string) => {
    setCart(prev => prev.filter(item => item.product.id !== productId));
  };

  const total = cart.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);

  const handlePay = () => {
    if (cart.length === 0) return;
    setIsProcessing(true);
    setServerError(null);
    setTimeout(() => {
      // Simulate server-side validation rejection
      if (Math.random() < 0.3) {
        setServerError("Payment declined by the server. Please check your details and try again.");
        setIsProcessing(false);
        return;
      }
      setIsProcessing(false);
      setIsSuccess(true);
    }, 2000);
  };

  if (isSuccess) {
    return (
      <div className="w-full min-h-[600px] bg-slate-900 flex items-center justify-center p-6 font-sans">
        <div className="bg-white p-12 rounded-3xl shadow-2xl text-center max-w-md w-full border border-gray-100 animate-in zoom-in-95 duration-500">
          <div className="w-24 h-24 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6 shadow-inner">
            <CheckCircle2 className="w-12 h-12 text-emerald-600" />
          </div>
          <h2 className="text-3xl font-black text-slate-900 mb-2">Payment Complete</h2>
          <p className="text-slate-500 mb-8 font-medium">Your items are on their way!</p>
          <div className="bg-slate-50 rounded-2xl p-4 mb-8">
            <div className="flex justify-between text-slate-600 mb-2">
              <span>Items</span>
              <span className="font-bold">{cart.reduce((s, i) => s + i.quantity, 0)}</span>
            </div>
            <div className="flex justify-between text-slate-900 text-xl">
              <span className="font-bold">Total Paid</span>
              <span className="font-black">${total.toFixed(2)}</span>
            </div>
          </div>
          <button type="button" onClick={() => { setIsSuccess(false); setCart([]); }} className="w-full py-4 bg-slate-900 text-white rounded-xl font-bold hover:bg-slate-800 transition-colors">
            Shop Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen bg-slate-50 font-sans p-6 md:p-12 selection:bg-indigo-100 selection:text-indigo-900 flex justify-center items-center">
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12">
        
        {/* Left Side: Products to Drag */}
        <div className="space-y-8">
          <div>
            <h2 className="text-3xl font-black text-slate-900 mb-2">Store</h2>
            <p className="text-slate-500 font-medium">Drag items to your cart to purchase.</p>
          </div>
          
          <div className="grid grid-cols-2 gap-4 md:gap-6">
            {PRODUCTS.map(product => (
              <div 
                key={product.id}
                draggable
                onDragStart={(e) => handleDragStart(e, product.id)}
                onDragEnd={handleDragEnd}
                className={`bg-white p-4 rounded-3xl shadow-sm border border-slate-200 cursor-grab hover:shadow-lg hover:-translate-y-1 transition-all duration-300 active:cursor-grabbing ${draggedItemId === product.id ? 'opacity-50 scale-95 border-indigo-500 border-2' : ''}`}
              >
                <div className={`w-full aspect-square rounded-2xl mb-4 p-4 flex items-center justify-center relative overflow-hidden ${product.color} bg-opacity-10`}>
                  <img src={product.image} alt={product.name} className="w-full h-full object-contain mix-blend-multiply drop-shadow-xl select-none pointer-events-none" />
                </div>
                <h3 className="font-bold text-slate-900 leading-tight mb-1">{product.name}</h3>
                <div className="flex justify-between items-center mt-2">
                  <span className="font-black text-lg text-slate-900">${product.price}</span>
                  <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:bg-slate-200 transition-colors">
                    <Plus className="w-4 h-4" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Dropzone Cart & Checkout */}
        <div className="flex flex-col h-full min-h-[600px]">
          <div 
            onDragOver={handleDragOver}
            onDrop={handleDrop}
            className={`flex-1 bg-white rounded-t-[2.5rem] border-2 border-dashed transition-all duration-300 p-8 flex flex-col relative overflow-hidden ${
              isDragging 
                ? 'border-indigo-500 bg-indigo-50/50 scale-[1.02] shadow-xl' 
                : cart.length > 0 ? 'border-slate-200 shadow-lg' : 'border-slate-200'
            }`}
          >
            {/* Drop Overlay (Visible when dragging) */}
            {isDragging && (
              <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-indigo-50/80 backdrop-blur-sm pointer-events-none animate-in fade-in">
                <div className="w-20 h-20 bg-indigo-100 rounded-full flex items-center justify-center mb-4 animate-bounce shadow-xl">
                  <ShoppingCart className="w-10 h-10 text-indigo-600" />
                </div>
                <h3 className="text-2xl font-black text-indigo-900">Drop here to add</h3>
              </div>
            )}

            <div className="flex justify-between items-center mb-8 relative z-0">
              <h2 className="text-2xl font-black text-slate-900 flex items-center gap-3">
                <ShoppingCart className="w-6 h-6 text-indigo-500" /> Your Cart
              </h2>
              {cart.length > 0 && (
                <span className="bg-slate-900 text-white px-3 py-1 rounded-full text-sm font-bold shadow-sm">
                  {cart.reduce((s, i) => s + i.quantity, 0)} Items
                </span>
              )}
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto space-y-4 relative z-0 pb-6 custom-scrollbar pr-2">
              {cart.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-slate-400 space-y-4">
                  <Package className="w-16 h-16 stroke-1 text-slate-300" />
                  <p className="font-medium text-lg text-slate-500">Cart is empty</p>
                  <p className="text-sm">Drag and drop items here</p>
                </div>
              ) : (
                cart.map(item => (
                  <div key={item.product.id} className="flex gap-4 items-center bg-slate-50 p-4 rounded-2xl border border-slate-100 group animate-in slide-in-from-bottom-4 fade-in">
                    <div className={`w-16 h-16 rounded-xl ${item.product.color} bg-opacity-10 p-2 flex-shrink-0`}>
                      <img src={item.product.image} alt={item.product.name} className="w-full h-full object-contain mix-blend-multiply" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-bold text-slate-900 truncate">{item.product.name}</h4>
                      <p className="text-sm font-medium text-slate-500">Qty: {item.quantity}</p>
                    </div>
                    <div className="text-right">
                      <div className="font-black text-slate-900">${item.product.price * item.quantity}</div>
                    </div>
                    <button type="button" 
                      onClick={() => removeFromCart(item.product.id)}
                      className="p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-full transition-colors opacity-0 group-hover:opacity-100 focus:opacity-100"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))
              )}
            </div>
          </div>

          {/* Checkout Footer */}
          <div className="bg-slate-900 rounded-b-[2.5rem] p-8 shadow-2xl relative z-20">
            <div className="flex justify-between items-end mb-6">
              <span className="text-slate-400 font-medium">Total</span>
              <span className="text-4xl font-black text-white">${total.toFixed(2)}</span>
            </div>

            <button type="button" 
              onClick={handlePay}
              disabled={cart.length === 0 || isProcessing}
              className="w-full py-4 bg-indigo-500 text-white rounded-2xl font-bold text-lg flex justify-center items-center gap-2 hover:bg-indigo-400 transition-all shadow-[0_0_20px_rgba(99,102,241,0.4)] disabled:opacity-50 disabled:shadow-none disabled:hover:bg-indigo-500 hover:-translate-y-1"
            >
              {isProcessing ? (
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  Processing...
                </div>
              ) : (
                <>
                  <CreditCard className="w-5 h-5" /> Checkout Now
                </>
              )}
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
