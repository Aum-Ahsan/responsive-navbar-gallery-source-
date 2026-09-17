"use client";
import React, { useState } from "react";
import { ShoppingCart, X, Minus, Plus, ChevronRight, Package } from "lucide-react";

interface CartItem { id: number; name: string; price: number; qty: number; emoji: string }

export default function Cart03() {
  const product = { id: 1, name: "Structured Canvas Backpack", price: 185, emoji: "🎒" };
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = () => {
    setCartItems(prev => {
      const exists = prev.find(i => i.id === product.id);
      if (exists) return prev.map(i => i.id === product.id ? { ...i, qty: i.qty + 1 } : i);
      return [...prev, { ...product, qty: 1 }];
    });
    setDrawerOpen(true);
  };

  const changeQty = (id: number, delta: number) => {
    setCartItems(prev =>
      prev.map(i => i.id === id ? { ...i, qty: Math.max(1, i.qty + delta) } : i)
    );
  };

  const remove = (id: number) => setCartItems(prev => prev.filter(i => i.id !== id));
  const total = cartItems.reduce((s, i) => s + i.price * i.qty, 0);

  return (
    <div className="w-full bg-stone-50 min-h-[500px] font-sans relative overflow-hidden">
      {/* Main Product Page */}
      <div className="p-8 sm:p-12 flex flex-col sm:flex-row gap-10 items-start">
        <div className="w-full sm:w-64 h-64 bg-gradient-to-br from-stone-200 to-stone-300 rounded-3xl flex items-center justify-center text-8xl shrink-0">
          {product.emoji}
        </div>
        <div className="flex-1">
          <span className="text-xs font-bold uppercase tracking-widest text-stone-500">Accessories</span>
          <h2 className="text-3xl font-bold text-stone-900 mt-2 mb-3">{product.name}</h2>
          <p className="text-stone-500 mb-6 leading-relaxed">
            Crafted from waxed canvas with vegetable-tanned leather trim. Fits a 15" laptop with room to spare.
          </p>
          <div className="flex items-center gap-4 mb-8">
            <span className="text-3xl font-bold text-stone-900">${product.price}</span>
            <span className="text-sm text-stone-400 line-through">$220</span>
            <span className="text-xs bg-rose-100 text-rose-600 font-bold px-2 py-1 rounded-full">16% OFF</span>
          </div>
          <button type="button"
            onClick={addToCart}
            className="flex items-center gap-2 bg-stone-900 hover:bg-stone-700 text-white font-bold px-8 py-4 rounded-2xl transition-colors"
          >
            <ShoppingCart size={18} /> Add to Cart
          </button>
        </div>
      </div>

      {/* Overlay */}
      {drawerOpen && (
        <div
          className="absolute inset-0 bg-black/30 backdrop-blur-sm z-10"
          onClick={() => setDrawerOpen(false)}
        />
      )}

      {/* Slide-Out Drawer */}
      <div
        className={`absolute top-0 right-0 h-full w-full sm:w-96 bg-white shadow-2xl z-20 flex flex-col transition-transform duration-400 ease-out ${
          drawerOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-5 border-b border-stone-100">
          <div className="flex items-center gap-2">
            <ShoppingCart size={20} className="text-stone-700" />
            <h3 className="font-bold text-stone-900">Your Cart ({cartItems.reduce((s,i) => s+i.qty, 0)})</h3>
          </div>
          <button type="button" onClick={() => setDrawerOpen(false)} className="p-2 hover:bg-stone-100 rounded-full transition">
            <X size={18} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          {cartItems.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-40 text-stone-400 gap-3">
              <Package size={40} />
              <p className="text-sm">Your cart is empty</p>
            </div>
          ) : (
            cartItems.map(item => (
              <div key={item.id} className="flex gap-4 bg-stone-50 rounded-2xl p-4">
                <div className="w-16 h-16 bg-stone-200 rounded-xl flex items-center justify-center text-3xl shrink-0">{item.emoji}</div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-stone-900 text-sm leading-tight">{item.name}</p>
                  <p className="text-stone-500 text-sm">${item.price}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <button type="button" onClick={() => changeQty(item.id, -1)} className="w-7 h-7 border border-stone-200 rounded-lg flex items-center justify-center hover:bg-stone-100"><Minus size={12} /></button>
                    <span className="text-sm font-bold w-5 text-center">{item.qty}</span>
                    <button type="button" onClick={() => changeQty(item.id, 1)} className="w-7 h-7 border border-stone-200 rounded-lg flex items-center justify-center hover:bg-stone-100"><Plus size={12} /></button>
                  </div>
                </div>
                <button type="button" onClick={() => remove(item.id)} className="self-start p-1 text-stone-300 hover:text-rose-500 transition-colors"><X size={16} /></button>
              </div>
            ))
          )}
        </div>

        {cartItems.length > 0 && (
          <div className="p-5 border-t border-stone-100 space-y-3">
            <div className="flex justify-between font-bold text-stone-900 text-lg">
              <span>Total</span>
              <span>${total}</span>
            </div>
            <button type="button" className="w-full bg-stone-900 hover:bg-stone-700 text-white font-bold py-4 rounded-2xl transition flex items-center justify-center gap-2">
              Checkout <ChevronRight size={16} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
