"use client";
import React, { useState } from 'react';
import { UploadCloud, File, Loader2, CheckCircle2 } from 'lucide-react';

export default function Process29() {
  const [status, setStatus] = useState<'idle' | 'uploading' | 'processing' | 'done'>('idle');

  const handleUpload = () => {
    setStatus('uploading');
    setTimeout(() => setStatus('processing'), 2000);
    setTimeout(() => setStatus('done'), 4000);
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-4 sm:p-10 font-sans">
      <div className="bg-white border-2 border-sky-100 rounded-3xl p-6 sm:p-10 text-center shadow-xl">
        <h2 className="text-2xl font-bold text-sky-950 mb-2">Upload Document</h2>
        <p className="text-gray-500 mb-8">Please upload your PDF for verification.</p>

        {status === 'idle' && (
          <div 
            onClick={handleUpload}
            className="border-2 border-dashed border-sky-200 bg-sky-50 rounded-2xl p-12 cursor-pointer hover:bg-sky-100 transition-colors group"
          >
            <UploadCloud size={48} className="mx-auto text-sky-400 group-hover:text-sky-600 mb-4 transition-colors" />
            <p className="font-bold text-sky-900">Click to select file</p>
            <p className="text-sm text-sky-600/70 mt-1">PDF, DOCX up to 10MB</p>
          </div>
        )}

        {(status === 'uploading' || status === 'processing') && (
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 animate-in fade-in zoom-in duration-300">
            <Loader2 size={40} className="mx-auto text-sky-500 animate-spin mb-4" />
            <h3 className="font-bold text-slate-800 text-lg">
              {status === 'uploading' ? 'Uploading document...' : 'Extracting data...'}
            </h3>
            <div className="w-full h-2 bg-slate-200 rounded-full mt-6 overflow-hidden">
              <div className="h-full bg-sky-500 animate-[pulse_1s_ease-in-out_infinite]" style={{ width: status === 'uploading' ? '40%' : '80%' }}></div>
            </div>
          </div>
        )}

        {status === 'done' && (
          <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-8 animate-in fade-in zoom-in duration-300">
            <CheckCircle2 size={48} className="mx-auto text-emerald-500 mb-4" />
            <h3 className="font-bold text-emerald-900 text-xl">Verification Complete!</h3>
            <p className="text-emerald-700 mt-2">Your document has been successfully processed.</p>
            <button onClick={() => setStatus('idle')} className="mt-6 text-sm font-bold text-emerald-600 hover:underline">Upload another</button>
          </div>
        )}

      </div>
    </div>
  );
}
