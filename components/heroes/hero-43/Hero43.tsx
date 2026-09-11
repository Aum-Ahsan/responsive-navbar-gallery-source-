"use client";
import React, { useState, useEffect, useRef } from "react";
import { ArrowRightLeft, Volume2, Copy, Sparkles, Languages, Check, Mic, Globe2 } from "lucide-react";

export default function Hero43() {
  const [isNewTabDemo, setIsNewTabDemo] = useState<boolean>(false);
  const [inputText, setInputText] = useState("The future of communication is here. Break down language barriers instantly with our advanced AI neural network.");
  const [translatedText, setTranslatedText] = useState("");
  const [isTranslating, setIsTranslating] = useState(false);
  const [copied, setCopied] = useState(false);
  const [targetLang, setTargetLang] = useState("French");
  
  // Dummy dictionary to simulate translation
  const dictionary: Record<string, string> = {
    "French": "L'avenir de la communication est là. Brisez instantanément les barrières linguistiques grâce à notre réseau neuronal d'IA avancé.",
    "Spanish": "El futuro de la communication está aquí. Derriba las barreras del idioma al instante con nuestra avanzada red neuronal de IA.",
    "German": "Die Zukunft der Kommunikation ist da. Überwinden Sie Sprachbarrieren sofort mit unserem fortschrittlichen KI-Zusammenhang.",
    "Japanese": "コミュニケーションの未来がここにあります。私たちの高度なAIニューラルネットワークで、言語の壁を即座に打ち破ります。"
  };

  // ================= 1. HASH CHECK LOGIC =================
  useEffect(() => {
    const checkHash = () => {
      if (window.location.hash === "#demo-43") {
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

  // ================= 2. TRANSLATION SIMULATION =================
  useEffect(() => {
    if (!inputText) {
      setTranslatedText("");
      return;
    }

    setIsTranslating(true);
    setTranslatedText("");
    
    // Simulate API delay
    const delayTimer = setTimeout(() => {
      const fullTranslation = dictionary[targetLang] || "Simulated translation text goes here...";
      let i = 0;
      
      // Typing effect for the translated text
      const typeTimer = setInterval(() => {
        if (i < fullTranslation.length) {
          setTranslatedText((prev) => prev + fullTranslation.charAt(i));
          i++;
        } else {
          clearInterval(typeTimer);
          setIsTranslating(false);
        }
      }, 15); // Fast typing speed
      
      return () => clearInterval(typeTimer);
    }, 400);

    return () => clearTimeout(delayTimer);
  }, [inputText, targetLang]);

  const handleCopy = () => {
    navigator.clipboard.writeText(translatedText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // ================= 3. REUSABLE HERO UI (RESPONSIVE) =================
  const HeroUI = ({ isFullDemo = false }: { isFullDemo?: boolean }) => (
    <section className={`relative w-full flex flex-col items-center justify-center overflow-hidden bg-white text-slate-800 transition-all duration-700 ${isFullDemo ? 'min-h-[100dvh] py-16' : 'py-12 sm:py-16 lg:h-[85vh] min-h-[800px] lg:min-h-[650px]'}`}>
      
      {/* Background Soft Gradients */}
      <div className="absolute top-[-10%] left-[-5%] w-[40%] h-[40%] bg-blue-100/50 blur-[100px] rounded-full z-0 pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-5%] w-[30%] h-[50%] bg-violet-100/50 blur-[120px] rounded-full z-0 pointer-events-none" />

      {/* TOP CONTENT */}
      <div className={`relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 flex flex-col items-center text-center mb-8 sm:mb-12 ${isFullDemo ? 'animate-in fade-in slide-in-from-top-8 duration-1000' : ''}`}>
        <div className="mb-4 sm:mb-6 inline-flex items-center gap-1.5 sm:gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 sm:px-4 py-1.5 sm:py-2 text-[10px] sm:text-xs font-bold text-blue-700 uppercase tracking-wider">
          <Sparkles size={14} className="text-blue-500" /> Neural AI Translation
        </div>
        {/* <h1 className="text-2xl sm:text-3xl lg:text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-4 leading-[1.1] text-slate-900">
          Understand the <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600">World.</span>
        </h1>
        <p className="text-sm sm:text-base text-slate-500 max-w-2xl mx-auto font-medium">
          Accurate, nuanced translations in over 130 languages. Powered by next-generation contextual AI models.
        </p> */}
        <h1 className="!text-[36px] md:!text-[44px] lg:!text-[56px] max-[767px]:landscape:!text-[40px] md:max-[1279px]:landscape:!text-[48px] font-extrabold tracking-tight mb-4 leading-[1.1] text-slate-900"> 
  Understand the <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600">World.</span> 
</h1> 

<p className="!text-[15px] md:!text-[18px] lg:!text-[20px] text-sm sm:text-base text-slate-500 max-w-2xl mx-auto font-medium"> 
  Accurate, nuanced translations in over 130 languages. Powered by next-generation contextual AI models. 
</p>
      </div>

      {/* ================= TRANSLATOR UI WIDGET ================= */}
      <div className={`relative z-20 w-full max-w-6xl mx-auto px-4 sm:px-6 ${isFullDemo ? 'animate-in fade-in zoom-in-95 duration-1000 delay-300' : ''}`}>
        
        {/* Main Box Container */}
        <div className="w-full bg-white rounded-2xl sm:rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.08)] border border-slate-200 overflow-hidden flex flex-col">
          
          {/* Top Language Switcher Bar */}
          <div className="flex flex-col sm:flex-row items-center border-b border-slate-100 bg-slate-50/50">
            
            {/* Source Language (Left) */}
            <div className="w-full sm:w-1/2 flex items-center justify-start gap-4 p-3 sm:p-4 pl-4 sm:pl-6 border-b sm:border-b-0 sm:border-r border-slate-100">
              <span className="text-xs sm:text-sm font-bold text-blue-600 border-b-2 border-blue-600 pb-1">Detect language</span>
              <span className="text-xs sm:text-sm font-bold text-slate-400 hover:text-slate-600 cursor-pointer pb-1">English</span>
              <span className="text-xs sm:text-sm font-bold text-slate-400 hover:text-slate-600 cursor-pointer pb-1 hidden md:block">Spanish</span>
            </div>

            {/* Swap Button (Center) - Absolute on desktop, inline on mobile */}
            <button className="hidden sm:flex absolute left-1/2 top-[22px] sm:top-[26px] -translate-x-1/2 -translate-y-1/2 z-10 w-8 h-8 sm:w-10 sm:h-10 bg-white border border-slate-200 rounded-full items-center justify-center text-slate-400 hover:text-blue-600 hover:border-blue-200 hover:shadow-md transition-all">
              <ArrowRightLeft size={16} className="sm:w-[18px] sm:h-[18px]" />
            </button>

            {/* Target Language (Right) */}
            <div className="w-full sm:w-1/2 flex items-center justify-start gap-4 p-3 sm:p-4 pl-4 sm:pl-10">
              {["French", "Spanish", "German", "Japanese"].map((lang) => (
                <button 
                  key={lang}
                  onClick={() => setTargetLang(lang)}
                  className={`text-xs sm:text-sm font-bold pb-1 transition-colors ${targetLang === lang ? 'text-blue-600 border-b-2 border-blue-600' : 'text-slate-400 hover:text-slate-600'} ${lang === "Japanese" ? 'hidden md:block' : ''}`}
                >
                  {lang}
                </button>
              ))}
              <div className="ml-auto flex items-center gap-1 text-slate-400 cursor-pointer hover:text-slate-600">
                <Globe2 size={16} /> <ChevronDown size={14} />
              </div>
            </div>
          </div>

          {/* Text Areas Section (50/50 Split) */}
          <div className="flex flex-col md:flex-row min-h-[160px] sm:h-[200px] lg:h-[250px] sm:min-h-[200px] sm:h-[260px] lg:h-[300px]">
            
            {/* Input Area (Left) */}
            <div className="w-full md:w-1/2 flex flex-col p-4 sm:p-6 border-b md:border-b-0 md:border-r border-slate-100">
              <textarea 
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Type or paste text here..."
                className="flex-1 w-full resize-none outline-none text-xl sm:text-2xl text-slate-700 bg-transparent placeholder:text-slate-300 font-medium leading-relaxed"
              />
              
              {/* Left Actions */}
              <div className="flex justify-between items-center mt-4">
                <div className="flex gap-2">
                  <button className="w-8 h-8 rounded-full flex items-center justify-center text-slate-400 hover:bg-slate-100 hover:text-slate-600 transition-colors">
                    <Mic size={18} />
                  </button>
                  <button className="w-8 h-8 rounded-full flex items-center justify-center text-slate-400 hover:bg-slate-100 hover:text-slate-600 transition-colors">
                    <Volume2 size={18} />
                  </button>
                </div>
                <div className="text-[10px] sm:text-xs font-bold text-slate-300">
                  {inputText.length} / 5000
                </div>
              </div>
            </div>

            {/* Output Area (Right) */}
            <div className="w-full md:w-1/2 flex flex-col p-4 sm:p-6 bg-slate-50/30">
              <div className="flex-1 relative">
                
                {/* Typing / Loading indicator */}
                {isTranslating && translatedText.length === 0 && (
                  <div className="absolute top-2 left-2 flex gap-1">
                    <span className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"></span>
                    <span className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></span>
                    <span className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></span>
                  </div>
                )}
                
                {/* Translated Text */}
                <p className={`text-xl sm:text-2xl font-medium leading-relaxed ${isTranslating ? 'text-slate-500' : 'text-blue-900'}`}>
                  {translatedText}
                  {isTranslating && <span className="inline-block w-1.5 h-6 ml-1 bg-blue-500 animate-pulse align-middle"></span>}
                </p>
                
                {/* Empty State placeholder */}
                {!inputText && !isTranslating && (
                  <p className="text-xl sm:text-2xl text-slate-300 font-medium">Translation will appear here</p>
                )}
              </div>
              
              {/* Right Actions */}
              {translatedText && (
                <div className="flex justify-between items-center mt-4">
                  <div className="flex gap-2">
                    <button className="w-8 h-8 rounded-full flex items-center justify-center text-slate-400 hover:bg-slate-200 hover:text-blue-600 transition-colors">
                      <Volume2 size={18} />
                    </button>
                    <button 
                      onClick={handleCopy}
                      className="w-8 h-8 rounded-full flex items-center justify-center text-slate-400 hover:bg-slate-200 hover:text-blue-600 transition-colors relative"
                    >
                      {copied ? <Check size={18} className="text-emerald-500" /> : <Copy size={18} />}
                    </button>
                  </div>
                  <div className="flex gap-2">
                    <button className="bg-white border border-slate-200 text-slate-600 px-3 py-1.5 rounded-lg text-[10px] sm:text-xs font-bold shadow-sm hover:bg-slate-50 flex items-center gap-1.5">
                      <Languages size={14} /> Refine Translation
                    </button>
                  </div>
                </div>
              )}
            </div>

          </div>
        </div>

      </div>
    </section>
  );

  // Helper for ChevronDown icon
  function ChevronDown(props: any) {
    return <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
  }

  // ================= VIEW 1: NEW TAB (FULL DEMO) =================
  if (isNewTabDemo) {
    return (
      <div className="fixed inset-0 z-[999999] bg-white w-screen h-screen overflow-y-auto">
        <HeroUI isFullDemo={true} />
      </div>
    );
  }

  // ================= VIEW 2: STATIC PREVIEW (MAIN PAGE) =================
  return (
    <div className="relative w-full py-10 sm:py-16 flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-900 px-4 sm:px-6">
      
      {/* OPEN IN NEW TAB BUTTON */}
      <a
        href="#demo-43"
        target="_blank"
        rel="noopener noreferrer"
        className="absolute top-4 right-4 lg:-top-[30px] lg:right-[50px] px-4 py-1.5 bg-blue-600 text-white text-[10px] sm:text-xs rounded-full font-bold hover:bg-blue-700 transition-all flex items-center gap-2 border border-blue-500 z-10 shadow-xl uppercase tracking-wider"
      >
        <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></span>
        <span className="hidden sm:block">View Live Translation Demo</span>
        <span className="sm:hidden">Demo</span>
      </a>

      {/* STATIC HERO CONTAINER */}
      <div className="w-full max-w-[1400px] border border-gray-200 overflow-hidden relative z-20 shadow-2xl rounded-2xl bg-white">
        <HeroUI isFullDemo={false} />
      </div>
    </div>
  );
}