"use client";
import React, { useState } from "react";
import { Copy, Wallet, Check, ExternalLink } from "lucide-react";

export default function Checkout26() {
  const [connected, setConnected] = useState(false);
  const [paid, setPaid] = useState(false);
  const [copied, setCopied] = useState(false);

  const priceETH = "0.045";
  const address = "0x71C...9731";
  const fullAddress = "0x71C7656EC7ab88b098defB751B7401B5f6d89731";

  const handleCopy = () => {
    navigator.clipboard.writeText(fullAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (paid) {
    return (
      <div className="w-full bg-slate-900 p-10 flex items-center justify-center min-h-[400px]">
        <div className="text-center">
          <div className="w-16 h-16 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-emerald-500/30">
            <Check size={28} className="text-emerald-400" />
          </div>
          <h2 className="text-xl font-bold text-white">Payment Confirmed</h2>
          <p className="text-slate-400 text-sm mt-1">Transaction hash: 0x8a...4b2f</p>
          <button type="button" className="mt-6 text-sm text-indigo-400 hover:text-indigo-300 flex items-center gap-1 mx-auto">
            View on Etherscan <ExternalLink size={14} />
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full bg-slate-900 p-6 sm:p-10 font-sans flex justify-center text-white">
      <div className="w-full max-w-md bg-slate-800 rounded-3xl p-6 border border-slate-700 shadow-xl">
        
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-xl font-bold">Web3 Checkout</h2>
          <div className="px-3 py-1 bg-slate-700 rounded-full text-xs font-mono text-slate-300 flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-emerald-500" />
            Ethereum Mainnet
          </div>
        </div>

        <div className="bg-slate-900 rounded-2xl p-6 mb-6 text-center border border-slate-700">
          <p className="text-sm text-slate-400 mb-1">Total Due</p>
          <p className="text-4xl font-bold font-mono text-white mb-1">
            {priceETH} <span className="text-xl text-indigo-400">ETH</span>
          </p>
          <p className="text-xs text-slate-500">≈ $124.50 USD</p>
        </div>

        {!connected ? (
          <div className="space-y-3">
            <button type="button" 
              onClick={() => setConnected(true)}
              className="w-full py-4 rounded-xl font-bold flex items-center justify-center gap-3 bg-indigo-600 hover:bg-indigo-500 transition"
            >
              <Wallet size={18} /> Connect MetaMask
            </button>
            <button type="button" 
              onClick={() => setConnected(true)}
              className="w-full py-4 rounded-xl font-bold flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-500 transition"
            >
              Connect Coinbase Wallet
            </button>
          </div>
        ) : (
          <div className="animate-in fade-in slide-in-from-bottom-2">
            <div className="bg-slate-700/50 rounded-xl p-4 mb-6 border border-slate-600">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Send exactly {priceETH} ETH to:</p>
              <div className="flex justify-between items-center bg-slate-900 p-3 rounded-lg">
                <span className="font-mono text-sm text-indigo-300">{address}</span>
                <button type="button" onClick={handleCopy} className="text-slate-400 hover:text-white transition p-1">
                  {copied ? <Check size={16} className="text-emerald-400" /> : <Copy size={16} />}
                </button>
              </div>
            </div>

            <button type="button" 
              onClick={() => setPaid(true)}
              className="w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-500 transition"
            >
              Send Payment Request
            </button>
            <p className="text-center text-xs text-slate-500 mt-4">Awaiting transaction confirmation...</p>
          </div>
        )}

      </div>
    </div>
  );
}
