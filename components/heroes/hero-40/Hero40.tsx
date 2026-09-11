"use client";
import React, { useState, useEffect } from "react";
import { UploadCloud, FileUp, CheckCircle2, Link2, Copy, ShieldCheck, FolderSync } from "lucide-react";

export default function Hero40() {
  const [isNewTabDemo, setIsNewTabDemo] = useState<boolean>(false);
  const [dragState, setDragState] = useState<'idle' | 'dragging' | 'uploading' | 'success'>('idle');
  const [progress, setProgress] = useState<number>(0);

  // ================= 1. HASH CHECK LOGIC =================
  useEffect(() => {
    const checkHash = () => {
      if (window.location.hash === "#demo-40") {
        setIsNewTabDemo(true);
        document.body.style.overflow = "hidden";
      } else {
        setIsNewTabDemo(false);
        document.body.style.overflow = "unset";
      }
    };
    checkHash();
    window.addEventListener("hashchange", checkHash);
    return () => window.removeEventListener("hashchange", checkHash);
  }, []);

  // ================= 2. DRAG & DROP + UPLOAD SIMULATION LOGIC =================
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    if (dragState !== 'uploading' && dragState !== 'success') {
      setDragState('dragging');
    }
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    if (dragState === 'dragging') {
      setDragState('idle');
    }
  };

  const handleDrop = (e: React.DragEvent | React.MouseEvent) => {
    e.preventDefault(); // Prevents browser from opening the dropped file
    if (dragState === 'uploading' || dragState === 'success') return;
    
    simulateUpload();
  };

  const simulateUpload = () => {
    setDragState('uploading');
    setProgress(0);
    
    let currentProgress = 0;
    const interval = setInterval(() => {
      currentProgress += Math.floor(Math.random() * 15) + 5; // Add random chunk of progress
      if (currentProgress >= 100) {
        currentProgress = 100;
        clearInterval(interval);
        setTimeout(() => setDragState('success'), 500); // Small delay before showing success
      }
      setProgress(currentProgress);
    }, 300);
  };

  const resetDropzone = () => {
    setDragState('idle');
    setProgress(0);
  };

  // ================= 3. REUSABLE HERO UI (RESPONSIVE) =================
  const HeroUI = ({ isFullDemo = false }: { isFullDemo?: boolean }) => (
    <section className={`relative w-full flex flex-col items-center justify-center overflow-hidden bg-[#f8fafc] text-slate-900 transition-all duration-700 ${isFullDemo ? 'min-h-[100dvh] py-10 sm:py-14 lg:py-20 lg:py-0' : 'py-16 lg:h-[85vh] min-h-[750px] lg:min-h-[700px]'}`}>
      
      {/* Background Decorative Cloud / Blobs */}
      <div className="absolute top-[-10%] left-[-5%] w-[60%] sm:w-[40%] h-[40%] bg-blue-200/40 blur-[100px] rounded-full z-0 pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-5%] w-[50%] sm:w-[30%] h-[50%] bg-indigo-200/40 blur-[120px] rounded-full z-0 pointer-events-none" />
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/clean-textile.png')] opacity-[0.2] z-0 pointer-events-none"></div>

      {/* Floating Background Icons (Creates a Cloud Storage vibe) */}
      <div className="absolute top-20 left-10 lg:left-20 animate-[float-slow_5s_ease-in-out_infinite] opacity-20 hidden md:block">
        <FolderSync size={64} className="text-blue-500" />
      </div>
      <div className="absolute bottom-20 right-10 lg:right-32 animate-[float-slow_7s_ease-in-out_infinite_reverse] opacity-20 hidden md:block">
        <FileUp size={48} className="text-indigo-500" />
      </div>

      <div className={`relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 md:px-8 flex flex-col items-center text-center mt-4 lg:mt-0 ${isFullDemo ? 'animate-in fade-in slide-in-from-top-8 duration-1000' : ''}`}>
        
        {/* Badge */}
        <div className="mb-5 sm:mb-6 inline-flex items-center gap-1.5 sm:gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 sm:px-4 py-1.5 sm:py-2 text-[10px] sm:text-xs md:text-sm font-bold text-blue-700 shadow-sm uppercase tracking-wider">
          <ShieldCheck size={16} className="sm:w-[18px] sm:h-[18px]" /> End-to-End Encrypted
        </div>
        
        {/* <h1 className="text-2xl sm:text-3xl lg:text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] xl:text-[4.5rem] font-extrabold tracking-tight mb-4 sm:mb-5 leading-[1.1] text-slate-900 px-2 sm:px-0">
          The easiest way to <br className="hidden sm:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
            send large files.
          </span>
        </h1>
        
        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-500 max-w-[90%] sm:max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed font-medium">
          Upload and share files up to 20GB for free. No registration required. Your files are automatically deleted after 7 days.
        </p> */}

        {/* Headline */} 
<h1 className="!text-[36px] md:!text-[44px] lg:!text-[56px] max-[767px]:landscape:!text-[40px] md:max-[1279px]:landscape:!text-[48px] font-extrabold tracking-tight mb-4 sm:mb-5 leading-[1.1] text-slate-900 px-2 sm:px-0"> 
  The easiest way to <br className="hidden sm:block" /> 
  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600"> 
    send large files. 
  </span> 
</h1> 
 
{/* Description */} 
<p className="!text-[15px] md:!text-[18px] lg:!text-[20px] text-sm sm:text-base md:text-lg lg:text-xl text-slate-500 max-w-[90%] sm:max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed font-medium"> 
  Upload and share files up to 20GB for free. No registration required. Your files are automatically deleted after 7 days. 
</p>

        {/* ================= INTERACTIVE DRAG & DROP ZONE ================= */}
        <div 
          className={`w-full max-w-[95%] sm:max-w-2xl lg:max-w-3xl rounded-3xl transition-all duration-300 relative overflow-hidden backdrop-blur-xl
            ${dragState === 'idle' ? 'bg-white/80 border-2 border-dashed border-slate-300 shadow-[0_20px_50px_rgba(0,0,0,0.05)] hover:border-blue-400 hover:shadow-[0_20px_50px_rgba(59,130,246,0.1)]' : ''}
            ${dragState === 'dragging' ? 'bg-blue-50/90 border-2 border-dashed border-blue-500 scale-105 shadow-[0_30px_60px_rgba(59,130,246,0.2)]' : ''}
            ${dragState === 'uploading' ? 'bg-white/90 border-2 border-solid border-slate-200 shadow-xl' : ''}
            ${dragState === 'success' ? 'bg-emerald-50/90 border-2 border-solid border-emerald-200 shadow-[0_20px_50px_rgba(16,185,129,0.15)]' : ''}
          `}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          <div className="flex flex-col items-center justify-center p-8 sm:p-12 md:p-16 min-h-[160px] sm:h-[200px] lg:h-[250px] sm:min-h-[200px] sm:h-[260px] lg:h-[300px]">
            
            {/* STATE 1: IDLE / DRAGGING */}
            {(dragState === 'idle' || dragState === 'dragging') && (
              <div className="flex flex-col items-center pointer-events-none">
                <div className={`p-4 rounded-full mb-4 transition-all duration-300 ${dragState === 'dragging' ? 'bg-blue-600 text-white scale-110 animate-bounce' : 'bg-blue-100 text-blue-600'}`}>
                  <UploadCloud size={40} className="sm:w-12 sm:h-12" />
                </div>
                <h3 className={`text-lg sm:text-xl md:text-2xl font-bold mb-2 transition-colors ${dragState === 'dragging' ? 'text-blue-600' : 'text-slate-800'}`}>
                  {dragState === 'dragging' ? 'Drop files here!' : 'Drag & drop files here'}
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 mb-6 font-medium max-w-sm">
                  Support for images, videos, documents, and zip files up to 20GB.
                </p>
                
                {/* Fallback button for mobile users or clickers */}
                <button 
                  onClick={handleDrop} 
                  className="pointer-events-auto bg-slate-900 hover:bg-slate-800 text-white px-6 sm:px-8 py-3 rounded-xl font-bold text-xs sm:text-sm transition-all shadow-md active:scale-95"
                >
                  Or click to browse files
                </button>
              </div>
            )}

            {/* STATE 2: UPLOADING */}
            {dragState === 'uploading' && (
              <div className="flex flex-col items-center w-full max-w-md animate-in fade-in zoom-in-95 duration-300">
                <div className="relative w-16 h-16 sm:w-20 sm:h-20 mb-6">
                  {/* Circular Progress Indicator */}
                  <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="45" fill="none" stroke="#f1f5f9" strokeWidth="8" />
                    <circle 
                      cx="50" cy="50" r="45" fill="none" stroke="#3b82f6" strokeWidth="8" 
                      strokeLinecap="round"
                      strokeDasharray={`${progress * 2.83} 283`} 
                      className="transition-all duration-300 ease-out"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-sm sm:text-base font-bold text-blue-600">{progress}%</span>
                  </div>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-800 mb-1">Uploading "Project_Files.zip"</h3>
                <p className="text-xs sm:text-sm text-slate-500 font-medium">1.2 GB • About 10 seconds remaining</p>
              </div>
            )}

            {/* STATE 3: SUCCESS */}
            {dragState === 'success' && (
              <div className="flex flex-col items-center w-full max-w-md animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="bg-emerald-100 p-3 sm:p-4 rounded-full mb-4 text-emerald-600">
                  <CheckCircle2 size={40} className="sm:w-12 sm:h-12" />
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-800 mb-2">You're done!</h3>
                <p className="text-xs sm:text-sm text-slate-500 mb-6 font-medium">Your files have been successfully uploaded and are ready to be shared.</p>
                
                {/* Share Link Box */}
                <div className="w-full bg-white border border-emerald-200 p-2 rounded-xl flex items-center gap-2 shadow-sm mb-6">
                  <div className="bg-slate-50 p-2 rounded-lg text-slate-400">
                    <Link2 size={18} />
                  </div>
                  <input 
                    type="text" 
                    readOnly 
                    value="https://cloud.app/share/x8f92ma" 
                    className="flex-1 bg-transparent border-none text-xs sm:text-sm font-mono text-slate-600 focus:outline-none"
                  />
                  <button className="bg-slate-900 text-white px-4 py-2 rounded-lg text-xs sm:text-sm font-bold flex items-center gap-1.5 hover:bg-slate-800 transition-colors">
                    <Copy size={14} /> <span className="hidden sm:block">Copy</span>
                  </button>
                </div>

                <button onClick={resetDropzone} className="text-xs sm:text-sm font-bold text-emerald-600 hover:text-emerald-700 transition-colors">
                  Send another file
                </button>
              </div>
            )}

          </div>
        </div>

        {/* Custom CSS for background float */}
        <style dangerouslySetInnerHTML={{__html: `
          @keyframes float-slow {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-20px) rotate(5deg); }
          }
        `}} />
      </div>

    </section>
  );

  // ================= VIEW 1: NEW TAB (FULL DEMO) =================
  if (isNewTabDemo) {
    return (
      <div className="fixed inset-0 z-[999999] bg-[#f8fafc] w-screen h-screen overflow-y-auto">
        <HeroUI isFullDemo={true} />
      </div>
    );
  }

  // ================= VIEW 2: STATIC PREVIEW (MAIN PAGE) =================
  return (
    <div className="relative w-full py-10 sm:py-16 flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-900 px-4 sm:px-6">
      <a
        href="#demo-40"
        target="_blank"
        rel="noopener noreferrer"
        className="absolute top-4 right-4 lg:-top-[30px] lg:right-[50px] px-4 py-1.5 bg-blue-600 text-white text-[10px] sm:text-xs rounded-full font-bold hover:bg-blue-700 transition-all flex items-center gap-2 border border-blue-500 z-10 shadow-xl uppercase tracking-wider"
      >
        <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></span>
        <span className="hidden sm:block">View Drag & Drop Demo</span>
        <span className="sm:hidden">Demo</span>
      </a>

      <div className="w-full max-w-[1400px] border border-gray-200 overflow-hidden relative z-20 shadow-2xl rounded-xl bg-[#f8fafc]">
        <HeroUI isFullDemo={false} />
      </div>
    </div>
  );
}