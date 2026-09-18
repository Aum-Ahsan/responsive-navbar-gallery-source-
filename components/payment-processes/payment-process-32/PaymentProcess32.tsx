"use client";
import React, { useState } from "react";
import { CreditCard, Eye, EyeOff, Check, ArrowRight } from "lucide-react";

export default function PaymentProcess32() {
  const [createAccount, setCreateAccount] = useState(false);
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);

  // Evaluate password strength
  const hasLength = password.length >= 8;
  const hasUpper = /[A-Z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  const hasSpecial = /[^A-Za-z0-9]/.test(password);
  
  const score = [hasLength, hasUpper, hasNumber, hasSpecial].filter(Boolean).length;
  
  // Map score to width and color
  const strengthWidth = score === 0 ? "0%" : score === 1 ? "25%" : score === 2 ? "50%" : score === 3 ? "75%" : "100%";
  const strengthColor = score <= 1 ? "bg-red-500" : score === 2 ? "bg-yellow-500" : score === 3 ? "bg-emerald-400" : "bg-emerald-600";
  const strengthLabel = score === 0 ? "" : score <= 1 ? "Weak" : score === 2 ? "Fair" : score === 3 ? "Good" : "Strong";

  const handlePay = (e: React.FormEvent) => {
    e.preventDefault();
    const container = e.currentTarget.closest('.w-full') || document;
    const inputs = Array.from(container.querySelectorAll('input')).filter((i: any) => i.offsetParent !== null);
    let isValid = true;
    for (const input of inputs) {
      if (!input.value.trim() && input.hasAttribute('required')) {
        alert("Please fill all columns");
        input.focus();
        isValid = false;
        break;
      }
      if (!input.checkValidity()) {
        input.reportValidity();
        isValid = false;
        break;
      }
    }
    if (!isValid) return;

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

  return (
    <div className="w-full min-h-screen bg-slate-900 flex items-center justify-center font-sans p-6 text-slate-100">
      
      {!isSuccess ? (
        <div className="max-w-md w-full bg-slate-800 rounded-3xl p-8 shadow-2xl border border-slate-700 animate-in fade-in duration-500">
          
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-black tracking-tight text-white">Guest Checkout</h2>
            <div className="text-lg font-bold text-indigo-400">$89.99</div>
          </div>

          <form onSubmit={handlePay} className="space-y-6">
            
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Email Address</label>
                <input pattern="[a-zA-Z\\s\\-]+" title="Letters only" required type="email" placeholder="you@example.com" className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-indigo-500 transition-colors"  minLength={5} maxLength={100} />
              </div>
              
              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Card Details</label>
                <div className="bg-slate-900 border border-slate-700 rounded-xl overflow-hidden focus-within:border-indigo-500 transition-colors">
                  <div className="relative border-b border-slate-700">
                    <CreditCard className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                    <input onInput={(e) => { e.currentTarget.value = e.currentTarget.value.replace(/[^0-9\s]/g, "").substring(0, 19); }} pattern="[\\d\\s]{16,19}" maxLength={19} title="16 digit card number" required type="text" placeholder="Card number" className="w-full bg-transparent pl-11 pr-4 py-3 text-white focus:outline-none font-mono"  minLength={16} />
                  </div>
                  <div className="flex">
                    <input onInput={(e) => { e.currentTarget.value = e.currentTarget.value.replace(/[^0-9\/]/g, "").substring(0, 5); }} pattern="(0[1-9]|1[0-2])\\/?([0-9]{2})" maxLength={5} title="Format: MM/YY" required type="text" placeholder="MM/YY" className="w-1/2 bg-transparent px-4 py-3 border-r border-slate-700 focus:outline-none font-mono text-center"  minLength={5} />
                    <input onInput={(e) => { e.currentTarget.value = e.currentTarget.value.replace(/[^0-9]/g, "").substring(0, 4); }} pattern="\\d{3,4}" maxLength={4} title="3 or 4 digit CVV/CVC" required type="text" placeholder="CVV" className="w-1/2 bg-transparent px-4 py-3 focus:outline-none font-mono text-center"  minLength={3} />
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-700">
              <label className="flex items-center gap-3 cursor-pointer group">
                <div className="relative flex items-center justify-center">
                  <input required 
                    type="checkbox" 
                    checked={createAccount}
                    onChange={(e) => setCreateAccount(e.target.checked)}
                    className="sr-only" 
                   minLength={2} maxLength={50} />
                  <div className={`w-6 h-6 rounded border-2 transition-colors flex items-center justify-center ${createAccount ? 'bg-indigo-500 border-indigo-500' : 'border-slate-500 group-hover:border-slate-400'}`}>
                    {createAccount && <Check className="w-4 h-4 text-white" />}
                  </div>
                </div>
                <span className="font-medium text-slate-300">Save my info for next time</span>
              </label>

              {/* Collapsible Account Creation Section */}
              <div 
                className={`transition-all duration-500 ease-in-out overflow-hidden ${
                  createAccount ? 'max-h-96 opacity-100 mt-6' : 'max-h-0 opacity-0 mt-0'
                }`}
              >
                <div className="bg-slate-900/50 p-5 rounded-2xl border border-slate-700/50">
                  <h4 className="text-sm font-bold text-white mb-4">Create an account</h4>
                  
                  <div className="relative mb-3">
                    <input required 
                      type={showPassword ? "text" : "password"} 
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Enter a secure password" 
                      className="w-full bg-slate-800 border border-slate-600 rounded-xl pl-4 pr-12 py-3 text-white focus:outline-none focus:border-indigo-500 transition-colors"
                     minLength={2} maxLength={50} />
                    <button 
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white transition-colors p-1"
                    >
                      {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>

                  {/* Strength Meter UI */}
                  {password.length > 0 && (
                    <div className="space-y-2 animate-in fade-in slide-in-from-top-2 duration-300">
                      <div className="flex justify-between items-center text-xs font-bold">
                        <span className="text-slate-400">Password Strength</span>
                        <span className={`${
                          score <= 1 ? "text-red-400" : score === 2 ? "text-yellow-400" : "text-emerald-400"
                        }`}>{strengthLabel}</span>
                      </div>
                      
                      <div className="w-full h-1.5 bg-slate-700 rounded-full overflow-hidden">
                        <div 
                          className={`h-full ${strengthColor} transition-all duration-500 ease-out`} 
                          style={{ width: strengthWidth }}
                        ></div>
                      </div>

                      {/* Criteria Checklist */}
                      <div className="grid grid-cols-2 gap-2 mt-4 text-[10px] uppercase tracking-wider font-bold text-slate-500">
                        <div className={`flex items-center gap-1.5 transition-colors ${hasLength ? 'text-emerald-400' : ''}`}>
                          <div className={`w-3 h-3 rounded-full flex items-center justify-center ${hasLength ? 'bg-emerald-400/20' : 'bg-slate-700'}`}>
                            {hasLength && <Check className="w-2 h-2" />}
                          </div>
                          8+ Characters
                        </div>
                        <div className={`flex items-center gap-1.5 transition-colors ${hasUpper ? 'text-emerald-400' : ''}`}>
                          <div className={`w-3 h-3 rounded-full flex items-center justify-center ${hasUpper ? 'bg-emerald-400/20' : 'bg-slate-700'}`}>
                            {hasUpper && <Check className="w-2 h-2" />}
                          </div>
                          Uppercase
                        </div>
                        <div className={`flex items-center gap-1.5 transition-colors ${hasNumber ? 'text-emerald-400' : ''}`}>
                          <div className={`w-3 h-3 rounded-full flex items-center justify-center ${hasNumber ? 'bg-emerald-400/20' : 'bg-slate-700'}`}>
                            {hasNumber && <Check className="w-2 h-2" />}
                          </div>
                          Number (0-9)
                        </div>
                        <div className={`flex items-center gap-1.5 transition-colors ${hasSpecial ? 'text-emerald-400' : ''}`}>
                          <div className={`w-3 h-3 rounded-full flex items-center justify-center ${hasSpecial ? 'bg-emerald-400/20' : 'bg-slate-700'}`}>
                            {hasSpecial && <Check className="w-2 h-2" />}
                          </div>
                          Special Char
                        </div>
                      </div>
                    </div>
                  )}

                </div>
              </div>
            </div>

            {serverError && (
              <div className="text-red-500 text-sm font-semibold mb-4 text-center bg-red-50 p-3 rounded-xl border border-red-200 animate-in fade-in zoom-in duration-300">
                {serverError}
              </div>
            )}
            <button 
              type="submit" 
              disabled={isProcessing || (createAccount && score < 2)} // Disable if creating account with weak password
              className="w-full py-4 bg-indigo-600 text-white rounded-xl font-bold text-lg hover:bg-indigo-500 transition-colors shadow-[0_0_20px_rgba(79,70,229,0.3)] disabled:opacity-50 disabled:shadow-none flex items-center justify-center gap-2"
            >
              {isProcessing ? (
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
              ) : (
                <>Complete Purchase <ArrowRight className="w-5 h-5" /></>
              )}
            </button>
            
          </form>
        </div>
      ) : (
        <div className="max-w-md w-full bg-slate-800 rounded-3xl p-10 shadow-2xl border border-slate-700 text-center animate-in zoom-in-95 duration-500">
           <div className="w-20 h-20 bg-indigo-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
             <Check className="w-10 h-10 text-indigo-400" />
           </div>
           <h2 className="text-3xl font-black text-white mb-2">Order Success</h2>
           <p className="text-slate-400 mb-8">
             {createAccount 
               ? "Your order is confirmed and your new account has been created successfully." 
               : "Your guest order has been confirmed successfully."}
           </p>
           <button type="button" 
              onClick={() => { setIsSuccess(false); setCreateAccount(false); setPassword(""); }}
              className="px-8 py-3 bg-slate-700 hover:bg-slate-600 text-white font-bold rounded-xl transition-colors"
            >
              Back to Store
            </button>
        </div>
      )}

    </div>
  );
}
