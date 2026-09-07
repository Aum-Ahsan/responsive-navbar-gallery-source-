"use client";
import React, { useState, useEffect } from "react";
import { Terminal, ArrowRight, Code2, PlayCircle, CheckCircle2 } from "lucide-react";

export default function Hero38() {
  const [isNewTabDemo, setIsNewTabDemo] = useState<boolean>(false);
  const [typedCode, setTypedCode] = useState<string>("");
  
  // The code that will be "typed" automatically
  const codeSnippet = `// Learn modern full-stack development
function becomeDeveloper(passion) {
  const skills = ["React", "Node.js", "AI"];
  
  if (passion === true) {
    return {
      status: "Hired",
      salary: "$120k+",
      future: "Bright 🚀"
    };
  }
  
  return "Keep coding!";
}

// Start your journey today
becomeDeveloper(true);`;

  // ================= 1. HASH CHECK LOGIC =================
  useEffect(() => {
    const checkHash = () => {
      if (window.location.hash === "#demo-38") {
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

  // ================= 2. TYPING EFFECT LOGIC =================
  useEffect(() => {
    let i = 0;
    setTypedCode(""); // Reset on mount
    
    const typingInterval = setInterval(() => {
      if (i < codeSnippet.length) {
        setTypedCode((prev) => prev + codeSnippet.charAt(i));
        i++;
      } else {
        // Optional: Loop the animation after a pause
        setTimeout(() => {
          i = 0;
          setTypedCode("");
        }, 5000);
      }
    }, 50); // Speed of typing (50ms per character)

    return () => clearInterval(typingInterval);
  }, []);

  // Helper function to apply syntax highlighting (very basic simulation)
  const renderHighlightedCode = (code: string) => {
    let highlighted = code.replace(/(\/\/.*)/g, '<span class="text-gray-500">$1</span>'); // Comments
    highlighted = highlighted.replace(/\b(function|const|return|if|true)\b/g, '<span class="text-pink-500">$1</span>'); // Keywords
    highlighted = highlighted.replace(/("(.*?)")/g, '<span class="text-emerald-400">$1</span>'); // Strings
    highlighted = highlighted.replace(/(\w+)(?=\()/g, '<span class="text-blue-400">$1</span>'); // Function Names
    highlighted = highlighted.replace(/\b(\d+)\b/g, '<span class="text-amber-400">$1</span>'); // Numbers
    return highlighted;
  };

  // ================= 3. REUSABLE HERO UI (RESPONSIVE) =================
  const HeroUI = ({ isFullDemo = false }: { isFullDemo?: boolean }) => (
    <section className={`relative w-full flex items-center justify-center overflow-hidden bg-[#0d1117] text-white transition-all duration-700 ${isFullDemo ? 'min-h-[100dvh] py-20 lg:py-0' : 'py-12 sm:py-16 lg:py-0 lg:h-[85vh] min-h-[800px] lg:min-h-[650px]'}`}>
      
      {/* Background Decorative Elements */}
      <div className="absolute top-[-20%] left-[-10%] w-[60%] sm:w-[50%] h-[50%] bg-blue-600/20 blur-[100px] rounded-full z-0 pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] sm:w-[40%] h-[40%] bg-pink-600/20 blur-[100px] rounded-full z-0 pointer-events-none" />

      {/* Main Content Container */}
      <div className="relative z-10 max-w-7xl w-full px-4 sm:px-6 md:px-10 lg:px-8 xl:px-16 flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-8 xl:gap-16 mt-6 lg:mt-0">
        
        {/* LEFT COLUMN: Text Content (Animations removed for instant load) */}
        <div className="flex-1 flex flex-col items-center text-center lg:items-start lg:text-left w-full opacity-100">
          
          {/* Badge */}
          <div className="mb-5 sm:mb-6 inline-flex items-center gap-2 rounded-md border border-blue-500/30 bg-blue-500/10 px-3 sm:px-4 py-1.5 sm:py-2 text-[10px] sm:text-xs font-mono font-bold text-blue-400 backdrop-blur-md">
            <Terminal size={14} className="sm:w-4 sm:h-4" /> v2.0 Next-Gen Bootcamp
          </div>
          
          {/* <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold tracking-tight mb-4 sm:mb-6 leading-[1.15] md:leading-[1.1] text-slate-100">
            Master Code. <br className="hidden lg:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-pink-500">
              Build the Future.
            </span>
          </h1>
          
          <p className="text-sm sm:text-base md:text-lg lg:text-base xl:text-lg text-slate-400 max-w-[90%] sm:max-w-xl lg:max-w-md xl:max-w-lg mb-8 leading-relaxed font-medium">
            Go from zero to full-stack developer in 16 weeks. Learn React, Node.js, and AI integration through interactive, real-world projects. No prior experience required.
          </p> */}

          {/* Headline */} 
<h1 className="!text-[36px] md:!text-[44px] lg:!text-[56px] max-[767px]:landscape:!text-[40px] md:max-[1279px]:landscape:!text-[48px] font-bold tracking-tight mb-4 sm:mb-6 leading-[1.15] md:leading-[1.1] text-slate-100"> 
  Master Code. <br className="hidden lg:block" /> 
  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-pink-500"> 
    Build the Future. 
  </span> 
</h1> 
 
{/* Description */} 
<p className="!text-[15px] md:!text-[18px] lg:!text-[20px] text-sm sm:text-base md:text-lg lg:text-base xl:text-lg text-slate-400 max-w-[90%] sm:max-w-xl lg:max-w-md xl:max-w-lg mb-8 leading-relaxed font-medium"> 
  Go from zero to full-stack developer in 16 weeks. Learn React, Node.js, and AI integration through interactive, real-world projects. No prior experience required. 
</p>
          
          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center w-full sm:w-auto gap-3 sm:gap-4 mb-8 sm:mb-10 px-4 sm:px-0">
            <button className="w-full sm:w-auto bg-blue-600 hover:bg-blue-500 text-white px-6 sm:px-8 py-3 sm:py-3.5 rounded-lg font-bold text-sm sm:text-base transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(37,99,235,0.3)]">
              Start Coding Free <ArrowRight size={18} />
            </button>
            <button className="w-full sm:w-auto bg-white/5 hover:bg-white/10 text-white border border-white/10 px-6 sm:px-8 py-3 sm:py-3.5 rounded-lg font-bold text-sm sm:text-base transition-all flex items-center justify-center gap-2 backdrop-blur-sm">
              <PlayCircle size={18} /> Watch Syllabus
            </button>
          </div>

          {/* Feature List */}
          <div className="flex flex-col sm:flex-row items-center lg:items-start gap-3 sm:gap-6 border-t border-white/10 pt-5 sm:pt-6 w-full sm:w-auto">
            <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-slate-300">
              <CheckCircle2 size={16} className="text-emerald-400" /> 1-on-1 Mentorship
            </div>
            <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-slate-300">
              <CheckCircle2 size={16} className="text-emerald-400" /> Job Guarantee
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Terminal / Code Editor Mockup */}
        <div className="w-full max-w-sm sm:max-w-xl lg:max-w-[450px] xl:max-w-xl mx-auto lg:mx-0 relative opacity-100">
          
          {/* Floating Icon (Visual appeal) */}
          <div className="absolute -top-4 -right-2 sm:-top-6 sm:-right-6 bg-[#1e293b] p-3 sm:p-4 rounded-xl shadow-2xl border border-white/10 z-20 animate-[bounce_4s_ease-in-out_infinite]">
            <Code2 size={24} className="text-pink-500 sm:w-8 sm:h-8" />
          </div>

          {/* The Code Editor Window */}
          <div className="relative bg-[#0d1117] rounded-xl sm:rounded-2xl border border-slate-700/60 shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden z-10">
            
            {/* Mac OS Style Header Bar */}
            <div className="flex items-center justify-between px-3 sm:px-4 py-2 sm:py-3 bg-[#161b22] border-b border-slate-700/60">
              <div className="flex items-center gap-1.5 sm:gap-2">
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-rose-500"></div>
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-amber-500"></div>
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-emerald-500"></div>
              </div>
              <div className="text-[9px] sm:text-xs font-mono text-slate-500">career_path.js</div>
              <div className="w-12"></div> {/* Spacer for center alignment */}
            </div>

            {/* Code Body with Auto-typing Effect */}
            <div className="p-4 sm:p-6 h-[250px] sm:h-[300px] lg:h-[280px] xl:h-[350px] overflow-hidden text-left bg-[#0d1117]">
              
              {/* Line Numbers & Code */}
              <div className="flex font-mono text-[10px] sm:text-xs md:text-sm leading-relaxed sm:leading-loose">
                
                {/* Line Numbers */}
                <div className="flex flex-col text-slate-600 pr-3 sm:pr-4 select-none text-right border-r border-slate-700/50 mr-3 sm:mr-4">
                  {[...Array(14)].map((_, i) => (
                    <span key={i}>{i + 1}</span>
                  ))}
                </div>
                
                {/* The Typed Code with Syntax Highlighting */}
                <div className="text-slate-300 w-full overflow-hidden">
                  <pre 
                    className="whitespace-pre-wrap font-mono m-0 break-words"
                    dangerouslySetInnerHTML={{ __html: renderHighlightedCode(typedCode) + '<span class="animate-pulse inline-block w-2 sm:w-2.5 h-3 sm:h-4 bg-blue-400 align-middle ml-1"></span>' }}
                  />
                </div>
                
              </div>
            </div>
            
          </div>
          
          {/* Background Glow behind editor */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-pink-500 opacity-20 blur-2xl z-0 transform translate-y-4"></div>
        </div>

      </div>
    </section>
  );

  // ================= VIEW 1: NEW TAB (FULL DEMO) =================
  if (isNewTabDemo) {
    return (
      <div className="fixed inset-0 z-[999999] bg-[#0d1117] w-screen h-screen overflow-y-auto">
        <HeroUI isFullDemo={true} />
      </div>
    );
  }

  // ================= VIEW 2: STATIC PREVIEW (MAIN PAGE) =================
  return (
    <div className="relative w-full py-10 sm:py-16 flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-900 px-4 sm:px-6">
      
      {/* OPEN IN NEW TAB BUTTON */}
      <a
        href="#demo-38"
        target="_blank"
        rel="noopener noreferrer"
        className="absolute top-4 right-4 lg:-top-[30px] lg:right-[50px] px-4 py-1.5 bg-blue-600 text-white text-[10px] sm:text-xs rounded-md font-bold hover:bg-blue-700 transition-all flex items-center gap-2 border border-blue-500 z-10 shadow-xl uppercase tracking-wider"
      >
        <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></span>
        <span className="hidden sm:block">View Live Coding Demo</span>
        <span className="sm:hidden">Demo</span>
      </a>

      {/* STATIC HERO CONTAINER */}
      <div className="w-full max-w-[1400px] border border-gray-800 overflow-hidden relative z-20 shadow-2xl rounded-xl bg-[#0d1117]">
        <HeroUI isFullDemo={false} />
      </div>

    </div>
  );
}