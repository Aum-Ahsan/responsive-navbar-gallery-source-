const fs = require('fs');
const path = require('path');

const processesDir = path.join(__dirname, '..', 'components', 'payment-processes');

if (!fs.existsSync(processesDir)) {
    fs.mkdirSync(processesDir, { recursive: true });
}

// Data for 50 payment processes
const processes = [
    { id: '01', name: 'Interactive Split Payment Checkout', type: 'split', color: 'indigo' },
    { id: '02', name: 'SaaS Monthly/Annual Subscription', type: 'subscription', color: 'emerald' },
    { id: '03', name: 'Charity Donation Slider', type: 'donation', color: 'rose' },
    { id: '04', name: 'B2B Invoice Payment Link', type: 'invoice', color: 'slate' },
    { id: '05', name: 'E-commerce Installment Plan', type: 'split', color: 'blue' },
    { id: '06', name: 'Creator Patreon-style Subscription', type: 'subscription', color: 'purple' },
    { id: '07', name: 'Political Campaign Donation', type: 'donation', color: 'sky' },
    { id: '08', name: 'Freelancer Quote & Payment', type: 'invoice', color: 'amber' },
    { id: '09', name: 'Furniture Store Layaway', type: 'split', color: 'orange' },
    { id: '10', name: 'Premium App Tier Selection', type: 'subscription', color: 'zinc' },
    { id: '11', name: 'Disaster Relief Fundraiser', type: 'donation', color: 'teal' },
    { id: '12', name: 'Consulting Services Retainer', type: 'invoice', color: 'fuchsia' },
    { id: '13', name: 'Car Loan Down Payment Simulator', type: 'split', color: 'stone' },
    { id: '14', name: 'Gym Membership Signup', type: 'subscription', color: 'lime' },
    { id: '15', name: 'Twitch/Youtube Tip Jar', type: 'donation', color: 'violet' },
    { id: '16', name: 'Law Firm Retainer Payment', type: 'invoice', color: 'slate' },
    { id: '17', name: 'Student Tuition Payment Plan', type: 'split', color: 'emerald' },
    { id: '18', name: 'News Publisher Paywall', type: 'subscription', color: 'zinc' },
    { id: '19', name: 'Open Source Sponsor Tier', type: 'donation', color: 'pink' },
    { id: '20', name: 'Contractor Deposit Invoice', type: 'invoice', color: 'orange' },
    { id: '21', name: 'Medical Bill Payment Plan', type: 'split', color: 'cyan' },
    { id: '22', name: 'Software License Renewal', type: 'subscription', color: 'blue' },
    { id: '23', name: 'Animal Shelter Support', type: 'donation', color: 'emerald' },
    { id: '24', name: 'Agency Project Milestone', type: 'invoice', color: 'indigo' },
    { id: '25', name: 'Travel Booking Deposit', type: 'split', color: 'sky' },
    { id: '26', name: 'VPN Service Checkout', type: 'subscription', color: 'red' },
    { id: '27', name: 'Church Tithe & Offering', type: 'donation', color: 'purple' },
    { id: '28', name: 'Utility Bill Quick Pay', type: 'invoice', color: 'emerald' },
    { id: '29', name: 'Electronics Affirm-style Checkout', type: 'split', color: 'violet' },
    { id: '30', name: 'Cloud Storage Upgrade', type: 'subscription', color: 'blue' },
    { id: '31', name: 'School Fundraiser', type: 'donation', color: 'amber' },
    { id: '32', name: 'Tax Preparation Fee', type: 'invoice', color: 'stone' },
    { id: '33', name: 'Jewelry Financing Plan', type: 'split', color: 'rose' },
    { id: '34', name: 'Streaming Service Signup', type: 'subscription', color: 'indigo' },
    { id: '35', name: 'Museum Patron Program', type: 'donation', color: 'slate' },
    { id: '36', name: 'Property Management Rent Pay', type: 'invoice', color: 'teal' },
    { id: '37', name: 'Home Remodel Staged Payments', type: 'split', color: 'orange' },
    { id: '38', name: 'Dating App Premium', type: 'subscription', color: 'pink' },
    { id: '39', name: 'Podcast Supporter', type: 'donation', color: 'fuchsia' },
    { id: '40', name: 'Event Catering Deposit', type: 'invoice', color: 'zinc' },
    { id: '41', name: 'Wedding Venue Installments', type: 'split', color: 'rose' },
    { id: '42', name: 'Newsletter Paid Tier', type: 'subscription', color: 'emerald' },
    { id: '43', name: 'Tree Planting Initiative', type: 'donation', color: 'green' },
    { id: '44', name: 'Wholesale Order Payment', type: 'invoice', color: 'blue' },
    { id: '45', name: 'Bootcamp Tuition Split', type: 'split', color: 'indigo' },
    { id: '46', name: 'Hosting Provider Checkout', type: 'subscription', color: 'violet' },
    { id: '47', name: 'Medical Research Grant', type: 'donation', color: 'cyan' },
    { id: '48', name: 'SaaS Enterprise Invoice', type: 'invoice', color: 'slate' },
    { id: '49', name: 'Photography Package Split', type: 'split', color: 'amber' },
    { id: '50', name: 'AI Tool Pro Plan', type: 'subscription', color: 'purple' },
    { id: '51', name: 'Interactive Split Payment Checkout', type: 'split', color: 'indigo' },
    { id: '52', name: 'SaaS Monthly/Annual Subscription', type: 'subscription', color: 'emerald' },
    { id: '53', name: 'Charity Donation Slider', type: 'donation', color: 'rose' },
    { id: '54', name: 'B2B Invoice Payment Link', type: 'invoice', color: 'slate' },
    { id: '55', name: 'E-commerce Installment Plan', type: 'split', color: 'blue' },
    { id: '56', name: 'Creator Patreon-style Subscription', type: 'subscription', color: 'purple' },
    { id: '57', name: 'Political Campaign Donation', type: 'donation', color: 'sky' },
    { id: '58', name: 'Freelancer Quote & Payment', type: 'invoice', color: 'amber' },
    { id: '59', name: 'Furniture Store Layaway', type: 'split', color: 'orange' },
    { id: '60', name: 'Premium App Tier Selection', type: 'subscription', color: 'zinc' },
    { id: '61', name: 'Disaster Relief Fundraiser', type: 'donation', color: 'teal' },
    { id: '62', name: 'Consulting Services Retainer', type: 'invoice', color: 'fuchsia' },
    { id: '63', name: 'Car Loan Down Payment Simulator', type: 'split', color: 'stone' },
    { id: '64', name: 'Gym Membership Signup', type: 'subscription', color: 'lime' },
    { id: '65', name: 'Twitch/Youtube Tip Jar', type: 'donation', color: 'violet' },
    { id: '66', name: 'Law Firm Retainer Payment', type: 'invoice', color: 'slate' },
    { id: '67', name: 'Student Tuition Payment Plan', type: 'split', color: 'emerald' },
    { id: '68', name: 'News Publisher Paywall', type: 'subscription', color: 'zinc' },
    { id: '69', name: 'Open Source Sponsor Tier', type: 'donation', color: 'pink' },
    { id: '70', name: 'Contractor Deposit Invoice', type: 'invoice', color: 'orange' },
    { id: '71', name: 'Medical Bill Payment Plan', type: 'split', color: 'cyan' },
    { id: '72', name: 'Software License Renewal', type: 'subscription', color: 'blue' },
    { id: '73', name: 'Animal Shelter Support', type: 'donation', color: 'emerald' },
    { id: '74', name: 'Agency Project Milestone', type: 'invoice', color: 'indigo' },
    { id: '75', name: 'Travel Booking Deposit', type: 'split', color: 'sky' },
    { id: '76', name: 'VPN Service Checkout', type: 'subscription', color: 'red' },
    { id: '77', name: 'Church Tithe & Offering', type: 'donation', color: 'purple' },
    { id: '78', name: 'Utility Bill Quick Pay', type: 'invoice', color: 'emerald' },
    { id: '79', name: 'Electronics Affirm-style Checkout', type: 'split', color: 'violet' },
    { id: '80', name: 'Cloud Storage Upgrade', type: 'subscription', color: 'blue' },
    { id: '81', name: 'School Fundraiser', type: 'donation', color: 'amber' },
    { id: '82', name: 'Tax Preparation Fee', type: 'invoice', color: 'stone' },
    { id: '83', name: 'Jewelry Financing Plan', type: 'split', color: 'rose' },
    { id: '84', name: 'Streaming Service Signup', type: 'subscription', color: 'indigo' },
    { id: '85', name: 'Museum Patron Program', type: 'donation', color: 'slate' },
    { id: '86', name: 'Property Management Rent Pay', type: 'invoice', color: 'teal' },
    { id: '87', name: 'Home Remodel Staged Payments', type: 'split', color: 'orange' },
    { id: '88', name: 'Dating App Premium', type: 'subscription', color: 'pink' },
    { id: '89', name: 'Podcast Supporter', type: 'donation', color: 'fuchsia' },
    { id: '90', name: 'Event Catering Deposit', type: 'invoice', color: 'zinc' },
    { id: '91', name: 'Wedding Venue Installments', type: 'split', color: 'rose' },
    { id: '92', name: 'Newsletter Paid Tier', type: 'subscription', color: 'emerald' },
    { id: '93', name: 'Tree Planting Initiative', type: 'donation', color: 'green' },
    { id: '94', name: 'Wholesale Order Payment', type: 'invoice', color: 'blue' },
    { id: '95', name: 'Bootcamp Tuition Split', type: 'split', color: 'indigo' },
    { id: '96', name: 'Hosting Provider Checkout', type: 'subscription', color: 'violet' },
    { id: '97', name: 'Medical Research Grant', type: 'donation', color: 'cyan' },
    { id: '98', name: 'SaaS Enterprise Invoice', type: 'invoice', color: 'slate' },
    { id: '99', name: 'Photography Package Split', type: 'split', color: 'amber' },
    { id: '100', name: 'AI Tool Pro Plan', type: 'subscription', color: 'purple' },
];

const getColors = (colorName) => {
    const map = {
        blue: { bg: 'bg-blue-50', text: 'text-blue-600', border: 'border-blue-200', activeBg: 'bg-blue-600', activeText: 'text-white', focusRing: 'focus:ring-blue-600/20 focus:border-blue-600' },
        emerald: { bg: 'bg-emerald-50', text: 'text-emerald-600', border: 'border-emerald-200', activeBg: 'bg-emerald-600', activeText: 'text-white', focusRing: 'focus:ring-emerald-600/20 focus:border-emerald-600' },
        purple: { bg: 'bg-purple-50', text: 'text-purple-600', border: 'border-purple-200', activeBg: 'bg-purple-600', activeText: 'text-white', focusRing: 'focus:ring-purple-600/20 focus:border-purple-600' },
        orange: { bg: 'bg-orange-50', text: 'text-orange-600', border: 'border-orange-200', activeBg: 'bg-orange-600', activeText: 'text-white', focusRing: 'focus:ring-orange-600/20 focus:border-orange-600' },
        rose: { bg: 'bg-rose-50', text: 'text-rose-600', border: 'border-rose-200', activeBg: 'bg-rose-600', activeText: 'text-white', focusRing: 'focus:ring-rose-600/20 focus:border-rose-600' },
        indigo: { bg: 'bg-indigo-50', text: 'text-indigo-600', border: 'border-indigo-200', activeBg: 'bg-indigo-600', activeText: 'text-white', focusRing: 'focus:ring-indigo-600/20 focus:border-indigo-600' },
        cyan: { bg: 'bg-cyan-50', text: 'text-cyan-600', border: 'border-cyan-200', activeBg: 'bg-cyan-600', activeText: 'text-white', focusRing: 'focus:ring-cyan-600/20 focus:border-cyan-600' },
        teal: { bg: 'bg-teal-50', text: 'text-teal-600', border: 'border-teal-200', activeBg: 'bg-teal-600', activeText: 'text-white', focusRing: 'focus:ring-teal-600/20 focus:border-teal-600' },
        violet: { bg: 'bg-violet-50', text: 'text-violet-600', border: 'border-violet-200', activeBg: 'bg-violet-600', activeText: 'text-white', focusRing: 'focus:ring-violet-600/20 focus:border-violet-600' },
        green: { bg: 'bg-green-50', text: 'text-green-600', border: 'border-green-200', activeBg: 'bg-green-600', activeText: 'text-white', focusRing: 'focus:ring-green-600/20 focus:border-green-600' },
        pink: { bg: 'bg-pink-50', text: 'text-pink-600', border: 'border-pink-200', activeBg: 'bg-pink-600', activeText: 'text-white', focusRing: 'focus:ring-pink-600/20 focus:border-pink-600' },
        amber: { bg: 'bg-amber-50', text: 'text-amber-600', border: 'border-amber-200', activeBg: 'bg-amber-600', activeText: 'text-white', focusRing: 'focus:ring-amber-600/20 focus:border-amber-600' },
        slate: { bg: 'bg-slate-50', text: 'text-slate-600', border: 'border-slate-200', activeBg: 'bg-slate-800', activeText: 'text-white', focusRing: 'focus:ring-slate-800/20 focus:border-slate-800' },
        zinc: { bg: 'bg-zinc-50', text: 'text-zinc-600', border: 'border-zinc-200', activeBg: 'bg-zinc-800', activeText: 'text-white', focusRing: 'focus:ring-zinc-800/20 focus:border-zinc-800' },
        sky: { bg: 'bg-sky-50', text: 'text-sky-600', border: 'border-sky-200', activeBg: 'bg-sky-600', activeText: 'text-white', focusRing: 'focus:ring-sky-600/20 focus:border-sky-600' },
        fuchsia: { bg: 'bg-fuchsia-50', text: 'text-fuchsia-600', border: 'border-fuchsia-200', activeBg: 'bg-fuchsia-600', activeText: 'text-white', focusRing: 'focus:ring-fuchsia-600/20 focus:border-fuchsia-600' },
        lime: { bg: 'bg-lime-50', text: 'text-lime-700', border: 'border-lime-200', activeBg: 'bg-lime-500', activeText: 'text-white', focusRing: 'focus:ring-lime-500/20 focus:border-lime-500' },
        stone: { bg: 'bg-stone-50', text: 'text-stone-600', border: 'border-stone-200', activeBg: 'bg-stone-700', activeText: 'text-white', focusRing: 'focus:ring-stone-700/20 focus:border-stone-700' },
        red: { bg: 'bg-red-50', text: 'text-red-600', border: 'border-red-200', activeBg: 'bg-red-600', activeText: 'text-white', focusRing: 'focus:ring-red-600/20 focus:border-red-600' },
    };
    return map[colorName] || map['indigo'];
};

function generateComponent(proc) {
    const { id, name, type, color } = proc;
    const colors = getColors(color);
    const compName = 'PaymentProcess' + id;
    
    let reactImports = `"use client";
import React, { useState } from "react";
import { Check, CreditCard, Shield, Zap, Lock, ChevronRight, Apple, Heart, FileText, ArrowRight } from "lucide-react";`;
    
    let content = '';

    if (type === 'split') {
        content = `
    const [paymentMode, setPaymentMode] = useState<"upfront" | "split">("upfront");
    const [splitMonths, setSplitMonths] = useState<number>(3);
    const [isProcessing, setIsProcessing] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const totalAmount = 1200;
    const splitAmount = Math.ceil((totalAmount * 1.05) / splitMonths);

    const handlePay = (e: React.FormEvent) => {
      e.preventDefault();
      setIsProcessing(true);
      setTimeout(() => {
        setIsProcessing(false);
        setIsSuccess(true);
      }, 2000);
    };

    if (isSuccess) {
      return (
        <div className="w-full min-h-[600px] bg-gray-50 flex items-center justify-center p-4 sm:p-6 md:p-8 font-sans">
          <div className="bg-white rounded-3xl p-8 sm:p-10 text-center max-w-md w-full shadow-xl border border-gray-100">
            <div className="w-20 h-20 sm:w-24 sm:h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <Check className="w-8 h-8 sm:w-10 sm:h-10" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Payment Confirmed</h2>
            <p className="text-sm sm:text-base text-gray-500 mb-8">Your payment has been processed successfully. A receipt has been sent to your email.</p>
            <button onClick={() => setIsSuccess(false)} className="${colors.text} font-semibold hover:opacity-80 transition-opacity text-sm sm:text-base">
              Return to Dashboard
            </button>
          </div>
        </div>
      );
    }

    return (
      <div className="w-full min-h-[700px] bg-gray-50 flex items-center justify-center p-4 sm:p-6 md:p-8 font-sans">
        <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-start">
          <div className="space-y-6 md:space-y-8">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full ${colors.bg} ${colors.text} text-[10px] sm:text-xs font-bold tracking-widest uppercase mb-3 sm:mb-4">
                <Zap className="w-3 h-3" /> ${name}
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 tracking-tight">Complete your purchase</h2>
              <p className="text-sm sm:text-base md:text-lg text-gray-500 leading-relaxed">Choose how you want to pay. Pay upfront to save, or split it into manageable monthly payments.</p>
            </div>

            <div className="bg-white rounded-3xl p-1.5 shadow-sm border border-gray-100 flex flex-col sm:flex-row gap-1.5 sm:gap-0">
              <button onClick={() => setPaymentMode("upfront")} className={\`flex-1 py-3 px-6 rounded-2xl text-xs sm:text-sm font-semibold transition-all \${paymentMode === "upfront" ? "${colors.activeBg} ${colors.activeText} shadow-md" : "text-gray-500 hover:bg-gray-50"}\`}>Pay in full</button>
              <button onClick={() => setPaymentMode("split")} className={\`flex-1 py-3 px-6 rounded-2xl text-xs sm:text-sm font-semibold transition-all \${paymentMode === "split" ? "${colors.activeBg} ${colors.activeText} shadow-md" : "text-gray-500 hover:bg-gray-50"}\`}>Split payment</button>
            </div>

            <div className="bg-white rounded-3xl p-5 sm:p-6 md:p-8 border border-gray-100 shadow-sm transition-all">
              {paymentMode === "upfront" ? (
                <div className="space-y-6">
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-2 sm:gap-0">
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-gray-900">Total Payment</h3>
                      <p className="text-gray-500 text-xs sm:text-sm mt-1">One-time payment</p>
                    </div>
                    <div className="text-3xl sm:text-4xl font-bold text-gray-900">\${totalAmount}</div>
                  </div>
                </div>
              ) : (
                <div className="space-y-6">
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-2 sm:gap-0">
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-gray-900">Monthly Split</h3>
                      <p className="text-gray-500 text-xs sm:text-sm mt-1">Includes 5% fee</p>
                    </div>
                    <div className="text-3xl sm:text-4xl font-bold text-gray-900">\${splitAmount}<span className="text-base sm:text-lg text-gray-400 font-normal">/mo</span></div>
                  </div>
                  <div className="pt-4 border-t border-gray-100">
                    <input type="range" min="2" max="6" step="1" value={splitMonths} onChange={(e) => setSplitMonths(Number(e.target.value))} className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer" />
                    <div className="flex justify-between text-[10px] sm:text-xs text-gray-400 mt-2 font-medium">
                      <span>2 mos</span>
                      <span>6 mos</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="bg-white rounded-[2rem] p-6 sm:p-8 md:p-10 shadow-xl border border-gray-100 relative overflow-hidden">
            <form onSubmit={handlePay} className="space-y-4 sm:space-y-5 relative z-10">
              <div>
                <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5">Email Address</label>
                <input required type="email" placeholder="you@example.com" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 sm:py-3.5 text-sm sm:text-base text-gray-900 placeholder-gray-400 focus:outline-none transition-all ${colors.focusRing}" />
              </div>
              <div>
                <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5">Card Information</label>
                <div className="bg-gray-50 border border-gray-200 rounded-xl overflow-hidden transition-all focus-within:ring-2 focus-within:border-transparent">
                  <input required type="text" placeholder="0000 0000 0000 0000" className="w-full bg-transparent px-4 py-3 sm:py-3.5 border-b border-gray-200 focus:outline-none font-mono text-sm sm:text-base" />
                  <div className="flex">
                    <input required type="text" placeholder="MM/YY" className="w-1/2 bg-transparent px-4 py-3 sm:py-3.5 focus:outline-none border-r border-gray-200 font-mono text-sm sm:text-base" />
                    <input required type="text" placeholder="CVC" className="w-1/2 bg-transparent px-4 py-3 sm:py-3.5 focus:outline-none font-mono text-sm sm:text-base" />
                  </div>
                </div>
              </div>
              <div className="pt-2 sm:pt-4">
                <button type="submit" disabled={isProcessing} className="w-full ${colors.activeBg} ${colors.activeText} font-bold py-3.5 sm:py-4 rounded-xl flex items-center justify-center gap-2 transition-all disabled:opacity-70 disabled:cursor-not-allowed text-sm sm:text-base">
                  {isProcessing ? 'Processing...' : \`Pay \$\${paymentMode === "upfront" ? totalAmount : splitAmount} Now\`}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
        `;
    } else if (type === 'subscription') {
        content = `
    const [billingMode, setBillingMode] = useState<"monthly" | "annually">("annually");
    const [selectedTier, setSelectedTier] = useState<number>(1);
    const [isProcessing, setIsProcessing] = useState(false);

    const tiers = [
      { name: 'Starter', monthly: 15, annual: 12 },
      { name: 'Professional', monthly: 49, annual: 39 },
      { name: 'Enterprise', monthly: 99, annual: 79 },
    ];

    const currentPrice = billingMode === 'monthly' ? tiers[selectedTier].monthly : tiers[selectedTier].annual;
    
    const handlePay = (e: React.FormEvent) => {
      e.preventDefault();
      setIsProcessing(true);
      setTimeout(() => setIsProcessing(false), 2000);
    };

    return (
      <div className="w-full min-h-[700px] bg-white flex items-center justify-center p-4 sm:p-6 md:p-8 font-sans">
        <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 rounded-[2rem] md:rounded-3xl overflow-hidden border border-gray-200 shadow-2xl">
          <div className="bg-gray-50 p-6 sm:p-8 md:p-12 border-b md:border-b-0 md:border-r border-gray-200 flex flex-col justify-between">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">${name}</h2>
              <p className="text-sm sm:text-base text-gray-500 mb-6 md:mb-8">Upgrade your account to unlock premium features.</p>
              
              <div className="flex flex-col sm:flex-row bg-gray-200/50 rounded-xl p-1 mb-6 md:mb-8 w-full sm:w-fit gap-1 sm:gap-0">
                <button onClick={() => setBillingMode("monthly")} className={\`w-full sm:w-auto px-4 py-2.5 md:py-2 rounded-lg text-sm font-semibold \${billingMode === "monthly" ? 'bg-white shadow text-gray-900' : 'text-gray-500'}\`}>Monthly</button>
                <button onClick={() => setBillingMode("annually")} className={\`w-full sm:w-auto px-4 py-2.5 md:py-2 rounded-lg text-sm font-semibold \${billingMode === "annually" ? 'bg-white shadow text-gray-900' : 'text-gray-500'}\`}>Annually (Save 20%)</button>
              </div>

              <div className="space-y-3 md:space-y-4">
                {tiers.map((tier, i) => (
                  <div key={i} onClick={() => setSelectedTier(i)} className={\`cursor-pointer p-4 md:p-5 rounded-2xl border-2 transition-all \${selectedTier === i ? '${colors.border} ${colors.bg}' : 'border-gray-200 bg-white hover:border-gray-300'}\`}>
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-bold text-gray-900 text-sm md:text-base">{tier.name}</span>
                      <div className="text-right">
                        <span className="text-lg md:text-xl font-bold text-gray-900">\$\${billingMode === 'monthly' ? tier.monthly : tier.annual}</span>
                        <span className="text-gray-500 text-xs md:text-sm">/mo</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="mt-8 md:mt-12 pt-6 border-t border-gray-200 flex flex-col sm:flex-row sm:justify-between items-start sm:items-center gap-2 sm:gap-0">
              <span className="font-semibold text-gray-600 text-sm md:text-base">Total due today</span>
              <span className="text-2xl md:text-3xl font-bold text-gray-900">\$\${billingMode === 'monthly' ? currentPrice : currentPrice * 12}</span>
            </div>
          </div>
          
          <div className="p-6 sm:p-8 md:p-12 bg-white">
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">Payment Details</h3>
            <form onSubmit={handlePay} className="space-y-4 sm:space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5">First Name</label>
                  <input required type="text" className="w-full bg-white border border-gray-300 rounded-xl px-4 py-3 focus:outline-none text-sm sm:text-base ${colors.focusRing}" />
                </div>
                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5">Last Name</label>
                  <input required type="text" className="w-full bg-white border border-gray-300 rounded-xl px-4 py-3 focus:outline-none text-sm sm:text-base ${colors.focusRing}" />
                </div>
              </div>
              <div>
                <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5">Card Number</label>
                <div className="relative">
                  <CreditCard className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
                  <input required type="text" placeholder="0000 0000 0000 0000" className="w-full pl-10 sm:pl-12 bg-white border border-gray-300 rounded-xl px-4 py-3 focus:outline-none font-mono text-sm sm:text-base ${colors.focusRing}" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5">Expiry</label>
                  <input required type="text" placeholder="MM/YY" className="w-full bg-white border border-gray-300 rounded-xl px-4 py-3 focus:outline-none font-mono text-sm sm:text-base ${colors.focusRing}" />
                </div>
                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5">CVC</label>
                  <input required type="text" placeholder="123" className="w-full bg-white border border-gray-300 rounded-xl px-4 py-3 focus:outline-none font-mono text-sm sm:text-base ${colors.focusRing}" />
                </div>
              </div>
              <button type="submit" disabled={isProcessing} className="w-full mt-4 sm:mt-6 ${colors.activeBg} ${colors.activeText} font-bold py-3.5 sm:py-4 rounded-xl flex items-center justify-center gap-2 transition-all disabled:opacity-70 text-sm sm:text-base hover:shadow-lg hover:-translate-y-0.5">
                {isProcessing ? 'Processing...' : 'Subscribe Now'}
              </button>
            </form>
          </div>
        </div>
      </div>
    );
        `;
    } else if (type === 'donation') {
        content = `
    const presets = [10, 25, 50, 100];
    const [amount, setAmount] = useState<number>(50);
    const [isCustom, setIsCustom] = useState(false);
    const [isProcessing, setIsProcessing] = useState(false);

    const handlePay = (e: React.FormEvent) => {
      e.preventDefault();
      setIsProcessing(true);
      setTimeout(() => setIsProcessing(false), 2000);
    };

    return (
      <div className="w-full min-h-[600px] ${colors.bg} flex items-center justify-center p-4 sm:p-6 md:p-8 font-sans">
        <div className="max-w-md w-full bg-white rounded-[2rem] md:rounded-3xl p-6 sm:p-8 md:p-10 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1.5 sm:h-2 ${colors.activeBg}" />
          
          <div className="w-14 h-14 sm:w-16 sm:h-16 ${colors.bg} rounded-2xl flex items-center justify-center mb-6 mx-auto">
            <Heart className="w-7 h-7 sm:w-8 sm:h-8 ${colors.text}" fill="currentColor" />
          </div>
          
          <div className="text-center mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">${name}</h2>
            <p className="text-gray-500 text-xs sm:text-sm">Your contribution makes a direct impact. Select an amount to give today.</p>
          </div>

          <div className="grid grid-cols-2 gap-2 sm:gap-3 mb-4 sm:mb-6">
            {presets.map(a => (
              <button key={a} onClick={() => { setAmount(a); setIsCustom(false); }} className={\`py-3 sm:py-4 rounded-xl font-bold text-base sm:text-lg transition-all \${!isCustom && amount === a ? '${colors.activeBg} ${colors.activeText} shadow-md' : 'bg-gray-50 text-gray-700 hover:bg-gray-100'}\`}>
                \$\${a}
              </button>
            ))}
          </div>
          
          <button onClick={() => setIsCustom(true)} className={\`w-full py-3 sm:py-4 rounded-xl font-bold mb-6 sm:mb-8 transition-all \${isCustom ? '${colors.activeBg} ${colors.activeText} shadow-md' : 'bg-gray-50 text-gray-700 hover:bg-gray-100'}\`}>
            Custom Amount
          </button>

          {isCustom && (
            <div className="mb-6 sm:mb-8 relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 font-bold text-lg sm:text-xl">$</span>
              <input type="number" value={amount} onChange={(e) => setAmount(Number(e.target.value))} className="w-full text-xl sm:text-2xl font-bold text-gray-900 pl-10 pr-4 py-3 sm:py-4 bg-gray-50 rounded-xl focus:outline-none ${colors.focusRing}" />
            </div>
          )}

          <form onSubmit={handlePay} className="space-y-3 sm:space-y-4">
            <input required type="email" placeholder="Email Address" className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 sm:py-3.5 focus:outline-none text-sm sm:text-base ${colors.focusRing}" />
            <input required type="text" placeholder="Card Number" className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 sm:py-3.5 focus:outline-none text-sm sm:text-base ${colors.focusRing}" />
            
            <button type="submit" disabled={isProcessing} className="w-full ${colors.activeBg} ${colors.activeText} font-bold py-3.5 sm:py-4 rounded-xl flex items-center justify-center gap-2 mt-4 transition-all hover:opacity-90 text-sm sm:text-base">
              {isProcessing ? 'Processing...' : \`Donate \$\${amount}\`}
              {!isProcessing && <Heart className="w-4 h-4 ml-1" />}
            </button>
          </form>
        </div>
      </div>
    );
        `;
    } else {
        content = `
    const [isProcessing, setIsProcessing] = useState(false);

    const handlePay = (e: React.FormEvent) => {
      e.preventDefault();
      setIsProcessing(true);
      setTimeout(() => setIsProcessing(false), 2000);
    };

    return (
      <div className="w-full min-h-[600px] bg-neutral-900 flex items-center justify-center p-4 sm:p-6 md:p-8 font-sans">
        <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 rounded-[2rem] overflow-hidden shadow-2xl bg-white">
          <div className="${colors.activeBg} p-8 sm:p-10 flex flex-col justify-between ${colors.activeText}">
            <div>
              <FileText className="w-8 h-8 sm:w-10 sm:h-10 mb-6 sm:mb-8 opacity-80" />
              <h2 className="text-2xl sm:text-3xl font-bold mb-2">Invoice Payment</h2>
              <p className="opacity-80 mb-6 sm:mb-8 text-sm sm:text-base">${name}</p>
              
              <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                <div className="flex justify-between text-xs sm:text-sm opacity-90 border-b border-white/20 pb-2">
                  <span>Invoice #</span>
                  <span className="font-mono">INV-2026</span>
                </div>
                <div className="flex justify-between text-xs sm:text-sm opacity-90 border-b border-white/20 pb-2">
                  <span>Due Date</span>
                  <span>Oct 1, 2026</span>
                </div>
              </div>
            </div>
            
            <div className="mt-8 md:mt-0">
              <p className="text-xs sm:text-sm opacity-80 mb-1">Amount Due</p>
              <p className="text-4xl sm:text-5xl font-bold tracking-tight">$4,500.00</p>
            </div>
          </div>
          
          <div className="p-8 sm:p-10 flex flex-col justify-center">
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-6">Payment Method</h3>
            <form onSubmit={handlePay} className="space-y-4">
              <div>
                <label className="block text-[10px] sm:text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Name on Card</label>
                <input required type="text" className="w-full bg-gray-50 border-none rounded-xl px-4 py-3 sm:py-4 focus:ring-2 focus:ring-gray-200 transition-shadow text-sm sm:text-base" />
              </div>
              <div>
                <label className="block text-[10px] sm:text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Card Details</label>
                <div className="bg-gray-50 rounded-xl overflow-hidden flex flex-col">
                  <input required type="text" placeholder="Card Number" className="w-full bg-transparent px-4 py-3 sm:py-4 border-b border-gray-200 focus:outline-none text-sm sm:text-base" />
                  <div className="flex">
                    <input required type="text" placeholder="MM/YY" className="w-1/2 bg-transparent px-4 py-3 sm:py-4 border-r border-gray-200 focus:outline-none text-sm sm:text-base" />
                    <input required type="text" placeholder="CVC" className="w-1/2 bg-transparent px-4 py-3 sm:py-4 focus:outline-none text-sm sm:text-base" />
                  </div>
                </div>
              </div>
              <button type="submit" disabled={isProcessing} className="w-full bg-gray-900 text-white font-bold py-3.5 sm:py-4 rounded-xl mt-4 sm:mt-6 hover:bg-black transition-colors flex items-center justify-center text-sm sm:text-base">
                {isProcessing ? 'Processing...' : 'Pay Invoice'}
                {!isProcessing && <ArrowRight className="w-4 h-4 ml-2" />}
              </button>
            </form>
          </div>
        </div>
      </div>
    );
        `;
    }

    return `
${reactImports}

export default function ${compName}() {
${content}
}
    `;
}

// Generate the 50 files
processes.forEach((proc) => {
    const folder = path.join(processesDir, 'payment-process-' + proc.id);
    if (!fs.existsSync(folder)) {
        fs.mkdirSync(folder, { recursive: true });
    }
    const filePath = path.join(folder, 'PaymentProcess' + proc.id + '.tsx');
    fs.writeFileSync(filePath, generateComponent(proc).trim() + '\n');
    console.log('Generated PaymentProcess' + proc.id);
});

// Generate index.ts
let indexContent = processes.map(p => 'import PaymentProcess' + p.id + ' from "./payment-process-' + p.id + '/PaymentProcess' + p.id + '";').join('\n') + '\n\n';
indexContent += 'export const paymentProcesses = [\n';
indexContent += processes.map(p => '  { id: "' + p.id + '", name: "' + p.name + '", Component: PaymentProcess' + p.id + ' }').join(',\n');
indexContent += '\n];\n';

fs.writeFileSync(path.join(processesDir, 'index.ts'), indexContent);
console.log('Generated index.ts');
