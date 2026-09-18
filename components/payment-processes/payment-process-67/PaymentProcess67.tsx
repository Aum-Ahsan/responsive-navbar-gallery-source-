"use client";
import React, { useState } from "react";
import { ArrowRight, CheckCircle2, Wallet, Link as LinkIcon, ShieldCheck, Cpu } from "lucide-react";

type WalletType = 'metamask' | 'walletconnect' | 'coinbase' | null;
type ViewState = 'connect' | 'confirm' | 'processing' | 'success';

export default function PaymentProcess67() {
  const ETH_AMOUNT = 0.05;
  const USD_AMOUNT = 150.00;
  const NETWORK_FEE_ETH = 0.0012;
  
  const [viewState, setViewState] = useState<ViewState>('connect');
  const [wallet, setWallet] = useState<WalletType>(null);
  const [txHash, setTxHash] = useState<string>('');

  const handleConnect = (type: WalletType) => {
    setWallet(type);
    setViewState('confirm');
  };

  const handleSignAndPay = () => {
    setViewState('processing');
    
    // Simulate transaction delay
    setTimeout(() => {
      // Generate mock tx hash
      const hash = '0x' + Array.from({length: 40}, () => Math.floor(Math.random()*16).toString(16)).join('');
      setTxHash(hash);
      setViewState('success');
    }, 3000);
  };

  const totalEth = ETH_AMOUNT + NETWORK_FEE_ETH;

  return (
    <div className="w-full min-h-[700px] bg-slate-950 flex items-center justify-center font-sans p-6 text-slate-100 overflow-hidden relative">
      
      {/* Background Matrix/Crypto Effect */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/30 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/30 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-md w-full relative z-10">
        
        {/* State 1: Connect Wallet */}
        {viewState === 'connect' && (
          <div className="bg-slate-900/80 backdrop-blur-xl rounded-[2rem] p-8 shadow-2xl border border-slate-800 animate-in fade-in duration-500">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-black text-white">Web3 Checkout</h2>
              <div className="px-3 py-1 bg-slate-800 rounded-full text-xs font-bold text-slate-400 flex items-center gap-1 border border-slate-700">
                <div className="w-2 h-2 rounded-full bg-emerald-500"></div> Ethereum
              </div>
            </div>

            <div className="bg-slate-950/50 rounded-2xl p-6 mb-8 border border-slate-800 text-center">
              <p className="text-sm font-medium text-slate-400 mb-1">Total to pay</p>
              <h3 className="text-4xl font-black text-white mb-2">{ETH_AMOUNT} ETH</h3>
              <p className="text-xs text-slate-500">≈ ${USD_AMOUNT.toFixed(2)} USD</p>
            </div>

            <div className="space-y-3">
              <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">Connect a Wallet</p>
              
              <button type="button" onClick={() => handleConnect('metamask')} className="w-full flex items-center justify-between p-4 bg-slate-800 hover:bg-slate-700 rounded-xl transition-colors border border-slate-700">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/3/36/MetaMask_Fox.svg" alt="MetaMask" className="w-5 h-5" />
                  </div>
                  <span className="font-bold text-white">MetaMask</span>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-500" />
              </button>

              <button type="button" onClick={() => handleConnect('walletconnect')} className="w-full flex items-center justify-between p-4 bg-slate-800 hover:bg-slate-700 rounded-xl transition-colors border border-slate-700">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <div className="w-5 h-3 bg-blue-500 rounded-sm"></div>
                  </div>
                  <span className="font-bold text-white">WalletConnect</span>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-500" />
              </button>

              <button type="button" onClick={() => handleConnect('coinbase')} className="w-full flex items-center justify-between p-4 bg-slate-800 hover:bg-slate-700 rounded-xl transition-colors border border-slate-700">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                  <span className="font-bold text-white">Coinbase Wallet</span>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-500" />
              </button>
            </div>
          </div>
        )}

        {/* State 2: Confirm Transaction */}
        {viewState === 'confirm' && (
          <div className="bg-slate-900/80 backdrop-blur-xl rounded-[2rem] p-8 shadow-2xl border border-slate-800 animate-in slide-in-from-right duration-500">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-xl font-black text-white">Confirm Transaction</h2>
              <button type="button" onClick={() => setViewState('connect')} className="text-xs font-bold text-purple-400 hover:text-purple-300">
                Change Wallet
              </button>
            </div>

            <div className="flex items-center justify-between bg-slate-800 p-4 rounded-xl border border-slate-700 mb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-slate-700 rounded-full flex items-center justify-center relative">
                  <Wallet className="w-5 h-5 text-slate-400" />
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-500 rounded-full border-2 border-slate-800"></div>
                </div>
                <div>
                  <p className="text-sm font-bold text-white">0x71C...9A23</p>
                  <p className="text-xs text-slate-400">Balance: 1.42 ETH</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-xs text-emerald-400 font-bold">Connected</p>
              </div>
            </div>

            <div className="bg-slate-950/50 rounded-2xl p-6 mb-8 border border-slate-800">
              <div className="space-y-3 mb-4 text-sm">
                <div className="flex justify-between">
                  <span className="text-slate-400">Amount</span>
                  <span className="text-white font-medium">{ETH_AMOUNT} ETH</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Est. Network Fee (Gas)</span>
                  <span className="text-white font-medium">{NETWORK_FEE_ETH} ETH</span>
                </div>
              </div>
              <div className="flex justify-between items-end pt-4 border-t border-slate-800">
                <span className="font-bold text-slate-300">Total</span>
                <div className="text-right">
                  <span className="text-2xl font-black text-white">{totalEth.toFixed(4)} ETH</span>
                  <p className="text-xs text-slate-500">≈ ${(USD_AMOUNT + (NETWORK_FEE_ETH * 3000)).toFixed(2)} USD</p>
                </div>
              </div>
            </div>

            <button type="button" 
              onClick={(e) => {
      const inputs = Array.from((e.currentTarget.closest('.w-full') || document).querySelectorAll('input')).filter(i => i.offsetParent !== null);
      let isValid = true;
      for (const input of inputs) {
        if (!input.checkValidity()) {
          input.reportValidity();
          isValid = false;
          break;
        }
      }
      if (!isValid) return;
      const originalHandler = handleSignAndPay;
      if (typeof originalHandler === 'function') (originalHandler as any)(e);
      else if (typeof originalHandler === 'object' && originalHandler !== null) { /* ignore event objects */ }
    }}
              className="w-full py-4 bg-purple-600 text-white rounded-xl font-bold text-lg flex items-center justify-center gap-2 hover:bg-purple-500 transition-all shadow-[0_0_20px_rgba(147,51,234,0.3)]"
            >
              <ShieldCheck className="w-5 h-5" /> Sign & Pay
            </button>
          </div>
        )}

        {/* State 3: Processing */}
        {viewState === 'processing' && (
          <div className="bg-slate-900/80 backdrop-blur-xl rounded-[2rem] p-12 shadow-2xl border border-slate-800 text-center animate-in zoom-in duration-500">
            <div className="relative w-24 h-24 mx-auto mb-8">
              <div className="absolute inset-0 border-4 border-slate-800 rounded-full"></div>
              <div className="absolute inset-0 border-4 border-purple-500 rounded-full border-t-transparent animate-spin"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <Cpu className="w-8 h-8 text-purple-400 animate-pulse" />
              </div>
            </div>
            
            <h2 className="text-2xl font-black text-white mb-2">Processing Transaction</h2>
            <p className="text-slate-400 text-sm">Waiting for network confirmation. This usually takes a few seconds.</p>
          </div>
        )}

        {/* State 4: Success */}
        {viewState === 'success' && (
          <div className="bg-slate-900/80 backdrop-blur-xl rounded-[2rem] p-12 shadow-2xl border border-emerald-500/30 text-center animate-in fade-in duration-500">
            <div className="w-24 h-24 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-6 relative">
              <CheckCircle2 className="w-12 h-12 text-emerald-400 relative z-10" strokeWidth={2} />
              <div className="absolute inset-0 border-2 border-emerald-500/30 rounded-full animate-ping"></div>
            </div>
            
            <h2 className="text-3xl font-black text-white mb-2">Payment Successful</h2>
            <p className="text-slate-400 mb-8 font-medium">Your transaction has been confirmed on the blockchain.</p>
            
            <div className="bg-slate-950 rounded-xl p-4 mb-8 border border-slate-800">
              <div className="flex flex-col items-center justify-center text-sm">
                <span className="text-slate-500 mb-1">Transaction Hash</span>
                <a href="#" className="font-mono text-purple-400 hover:text-purple-300 text-xs truncate w-full flex items-center justify-center gap-1">
                  {txHash.substring(0, 10)}...{txHash.substring(34)} <LinkIcon className="w-3 h-3" />
                </a>
              </div>
            </div>

            <button type="button" 
              onClick={() => { setViewState('connect'); setWallet(null); }}
              className="w-full py-4 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded-xl transition-colors"
            >
              Return to Store
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
