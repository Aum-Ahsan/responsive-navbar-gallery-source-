"use client";
import React, { useState } from "react";
import { Check } from "lucide-react";

export default function Checkout39() {
  const [placed, setPlaced] = useState(false);

  if (placed) {
    return (
      <div className="w-full bg-white p-8 flex items-center justify-center min-h-[400px]">
        <div className="text-center max-w-md border-4 border-black p-8">
          <div className="w-20 h-20 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
            <Check size={40} className="text-white" />
          </div>
          <h2 className="text-3xl font-black text-black mb-4">Order Complete</h2>
          <p className="text-xl text-black">Your order number is #12345.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full bg-white p-4 sm:p-8 font-sans flex justify-center text-black">
      <div className="w-full max-w-2xl border-4 border-black p-6 sm:p-10">
        
        <h1 className="text-4xl font-black mb-8 border-b-4 border-black pb-4 uppercase">
          Checkout
        </h1>

        <div className="mb-10 p-6 bg-yellow-300 border-4 border-black">
          <h2 className="text-2xl font-black mb-2">Order Summary</h2>
          <div className="flex justify-between text-xl font-bold mt-4 pt-4 border-t-4 border-black">
            <span>Total to Pay:</span>
            <span>$45.00</span>
          </div>
        </div>

        <form onSubmit={(e) => { e.preventDefault(); setPlaced(true); }}>
          <fieldset className="mb-10">
            <legend className="text-2xl font-black mb-6">Shipping Address</legend>
            
            <div className="space-y-6">
              <div>
                <label htmlFor="fullName" className="block text-xl font-bold mb-2">
                  Full Name (Required)
                </label>
                <input 
                  id="fullName"
                  type="text"
                  required
                  aria-required="true"
                  className="w-full border-4 border-black p-4 text-xl focus:outline-none focus:ring-4 focus:ring-blue-600 focus:border-blue-600"
                />
              </div>

              <div>
                <label htmlFor="address" className="block text-xl font-bold mb-2">
                  Street Address (Required)
                </label>
                <input 
                  id="address"
                  type="text"
                  required
                  aria-required="true"
                  className="w-full border-4 border-black p-4 text-xl focus:outline-none focus:ring-4 focus:ring-blue-600 focus:border-blue-600"
                />
              </div>
            </div>
          </fieldset>

          <fieldset className="mb-10">
            <legend className="text-2xl font-black mb-6">Payment Details</legend>
            
            <div>
              <label htmlFor="cardNum" className="block text-xl font-bold mb-2">
                Card Number (Required)
              </label>
              <input 
                id="cardNum"
                type="text"
                required
                aria-required="true"
                className="w-full border-4 border-black p-4 text-xl focus:outline-none focus:ring-4 focus:ring-blue-600 focus:border-blue-600"
              />
            </div>
          </fieldset>

          <button 
            type="submit"
            className="w-full py-6 bg-black text-white text-2xl font-black uppercase tracking-widest hover:bg-blue-700 hover:text-white focus:outline-none focus:ring-4 focus:ring-blue-600 focus:ring-offset-4 transition-colors"
          >
            Confirm and Pay
          </button>
        </form>

      </div>
    </div>
  );
}
