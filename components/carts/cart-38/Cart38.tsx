"use client";
import React, { useState } from "react";
import { Upload, FileText, Check, ShoppingCart } from "lucide-react";

export default function Cart38() {
  const [uploaded, setUploaded] = useState(false);
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="w-full bg-slate-50 p-6 sm:p-10 font-sans flex justify-center">
      <div className="w-full max-w-md bg-white rounded-3xl p-6 shadow-sm border border-slate-200">
        
        <div className="mb-6 text-center">
          <h2 className="text-xl font-bold text-slate-900">B2B Bulk Order</h2>
          <p className="text-slate-500 text-sm mt-1">Upload a CSV or Excel file to instantly map SKUs and quantities to your cart.</p>
        </div>

        {/* Upload Dropzone */}
        {!uploaded ? (
          <div 
            onClick={() => setUploaded(true)}
            className="w-full h-40 rounded-2xl border-2 border-dashed border-slate-300 hover:border-blue-500 bg-slate-50 hover:bg-blue-50 transition cursor-pointer flex flex-col items-center justify-center text-slate-500 hover:text-blue-600 mb-6"
          >
            <Upload size={24} className="mb-3" />
            <p className="font-semibold text-sm">Click to upload order file</p>
            <p className="text-xs mt-1 opacity-70">Supports .csv, .xlsx (Max 5MB)</p>
          </div>
        ) : (
          <div className="bg-blue-50 border border-blue-200 rounded-2xl p-4 mb-6 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm">
                <FileText size={20} className="text-blue-600" />
              </div>
              <div>
                <p className="font-semibold text-blue-900 text-sm">po_q3_order.csv</p>
                <p className="text-xs text-blue-600 mt-0.5">24 SKUs mapped • 1,250 units</p>
              </div>
            </div>
            <button type="button" onClick={() => setUploaded(false)} className="text-xs font-bold text-blue-600 hover:underline">Replace</button>
          </div>
        )}

        <button type="button" 
          onClick={handleAdd}
          disabled={!uploaded || added}
          className={`w-full py-4 rounded-2xl font-bold flex items-center justify-center gap-2 transition ${!uploaded ? "bg-slate-100 text-slate-400 cursor-not-allowed" : added ? "bg-emerald-500 text-white" : "bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-500/20"}`}
        >
          {added ? <Check size={18} /> : <ShoppingCart size={18} />}
          {added ? "Bulk Order Added" : "Add Uploaded Items to Cart"}
        </button>

        <p className="text-center text-xs text-slate-400 mt-4">Need help? <a href="#" className="text-blue-500 hover:underline">Download template</a></p>
      </div>
    </div>
  );
}
