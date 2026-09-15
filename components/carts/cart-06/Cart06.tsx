"use client";
import React, { useState } from "react";
import { ShoppingCart, X, Minus, Plus, ChevronRight, Package } from "lucide-react";

interface CartItem { id: number; name: string; price: number; qty: number; emoji: string }

export default function Cart06() {
  const products = [
    { id: 1, name: "Matte Ceramic Mug", price: 28, emoji: "☕" },
    { id: 2, name: "Marble Coaster Set", price: 45, emoji: "🪨" },
    { id: 3, name: "Linen Napkins (4pk)", price: 32, emoji: "🍽️" },
    { id: 4, name: "Copper Carafe", price: 78, emoji: "🫗" },
  ];

  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [miniOpen, setMiniOpen] = useState(false);

  const addToCart = (p: typeof products[0]) => {
    setCartItems(prev => {
      const exists = prev.find(i => i.id === p.id);
      if (exists) return prev.map(i => i.id === p.id ? { ...i, qty: i.qty + 1 } : i);
      return [...prev, { ...p, qty: 1 }];
    });
    setMiniOpen(true);
  };

  const changeQty = (id: number, delta: number) => {
    setCartItems(prev =>
      prev.flatMap(i => {
        const newQty = i.qty + delta;
        if (i.id === id && newQty <= 0) return [];
        if (i.id === id) return [{ ...i, qty: newQty }];
        return [i];
      })
    );
  };

  const total = cartItems.reduce((s, i) => s + i.price * i.qty, 0);
  const itemCount = cartItems.reduce((s, i) => s + i.qty, 0);

  return (
    <div className="w-full bg-stone-50 font-sans p-6 sm:p-10 relative">
      {/* Header with mini-cart toggle */}
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-bold text-stone-900">Kitchen Goods</h2>
        <button
          onClick={() => setMiniOpen(o => !o)}
          className="relative flex items-center gap-2 bg-white border border-stone-200 hover:border-stone-400 px-4 py-2.5 rounded-xl shadow-sm transition"
        >
          <ShoppingCart size={18} className="text-stone-700" />
          <span className="text-sm font-semibold text-stone-700">Cart</span>
          {itemCount > 0 && (
            <span className="absolute -top-2 -right-2 w-5 h-5 bg-stone-900 text-white text-xs font-bold rounded-full flex items-center justify-center">
              {itemCount}
            </span>
          )}
        </button>
      </div>

      {/* Persistent Mini-Cart */}
      {miniOpen && (
        <div className="absolute top-16 right-6 sm:right-10 w-72 bg-white rounded-2xl shadow-xl border border-stone-100 z-30 overflow-hidden">
          <div className="flex items-center justify-between p-4 border-b border-stone-100">
            <p className="font-bold text-stone-900 text-sm">Cart ({itemCount})</p>
            <button onClick={() => setMiniOpen(false)}><X size={16} className="text-stone-400" /></button>
          </div>

          {cartItems.length === 0 ? (
            <div className="p-8 text-center text-stone-400">
              <Package size={32} className="mx-auto mb-2 opacity-40" />
              <p className="text-sm">Your cart is empty</p>
            </div>
          ) : (
            <>
              <div className="max-h-52 overflow-y-auto divide-y divide-stone-50">
                {cartItems.map(item => (
                  <div key={item.id} className="flex items-center gap-3 px-4 py-3">
                    <span className="text-2xl">{item.emoji}</span>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-semibold text-stone-900 truncate">{item.name}</p>
                      <p className="text-xs text-stone-500">${item.price}</p>
                    </div>
                    <div className="flex items-center gap-1">
                      <button onClick={() => changeQty(item.id, -1)} className="w-6 h-6 border border-stone-200 rounded-lg flex items-center justify-center text-xs hover:bg-stone-50">-</button>
                      <span className="text-xs font-bold w-4 text-center">{item.qty}</span>
                      <button onClick={() => changeQty(item.id, 1)} className="w-6 h-6 border border-stone-200 rounded-lg flex items-center justify-center text-xs hover:bg-stone-50">+</button>
                    </div>
                  </div>
                ))}
              </div>
              <div className="p-4 border-t border-stone-100 space-y-3">
                <div className="flex justify-between text-sm font-bold text-stone-900">
                  <span>Total</span><span>${total}</span>
                </div>
                <button className="w-full bg-stone-900 text-white text-sm font-bold py-3 rounded-xl hover:bg-stone-700 transition flex items-center justify-center gap-1">
                  Checkout <ChevronRight size={14} />
                </button>
              </div>
            </>
          )}
        </div>
      )}

      {/* Products */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {products.map(p => (
          <div key={p.id} className="bg-white rounded-2xl p-5 border border-stone-100 shadow-sm flex flex-col items-center gap-3">
            <div className="text-5xl">{p.emoji}</div>
            <div className="text-center">
              <p className="font-semibold text-stone-900 text-sm">{p.name}</p>
              <p className="text-stone-500 text-sm">${p.price}</p>
            </div>
            <button
              onClick={() => addToCart(p)}
              className="w-full bg-stone-900 hover:bg-stone-700 text-white text-sm font-semibold py-2.5 rounded-xl transition flex items-center justify-center gap-1.5"
            >
              <ShoppingCart size={14} /> Add
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
