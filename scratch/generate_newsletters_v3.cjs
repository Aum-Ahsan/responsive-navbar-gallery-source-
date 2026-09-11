const fs = require('fs');
const path = require('path');

const targetDir = path.join(__dirname, '..', 'components', 'newsletters');
if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
}

// 1. Terminal
const getTerminalJSX = () => `
    <div className="w-full max-w-3xl mx-auto p-4 sm:p-8 my-10 font-mono">
      <div className="bg-[#0c0c0c] rounded-lg shadow-2xl border border-zinc-800 overflow-hidden">
        <div className="bg-[#1a1a1a] px-4 py-2 flex items-center gap-2 border-b border-zinc-800">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
          <div className="ml-4 text-xs text-zinc-500">guest@newsletter:~</div>
        </div>
        <div className="p-6 text-green-400 min-h-[250px] flex flex-col">
          <p className="mb-2">$ ./subscribe.sh</p>
          <p className="text-zinc-300 mb-6">Initializing newsletter protocol... Ready.</p>
          
          {status === 'success' ? (
            <div className="mt-auto">
              <p className="text-blue-400 mb-1">[ OK ] Subscription active.</p>
              <p className="text-zinc-400">$ <span className="animate-pulse">_</span></p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-auto">
              <label className="block mb-2 text-zinc-400">Enter email address:</label>
              <div className="flex items-center">
                <span className="mr-2 text-zinc-500">></span>
                <input 
                  type="email" 
                  value={email} 
                  onChange={e=>setEmail(e.target.value)} 
                  autoFocus
                  required
                  className="bg-transparent border-none focus:outline-none text-green-400 w-full"
                  disabled={status==='loading'}
                />
              </div>
              {status === 'loading' && <p className="mt-4 text-yellow-400 animate-pulse">Establishing connection...</p>}
            </form>
          )}
        </div>
      </div>
    </div>`;

// 2. Chatbot
const getChatbotJSX = () => `
    <div className="w-full max-w-md mx-auto p-4 sm:p-8 my-10 font-sans">
      <div className="bg-white rounded-[2rem] shadow-xl border border-slate-100 overflow-hidden flex flex-col h-[400px]">
        <div className="bg-indigo-600 p-4 text-white font-bold flex items-center gap-3 shadow-md z-10">
          <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center"><Sparkles size={20}/></div>
          <div>NewsBot<div className="text-xs font-normal opacity-80">Online</div></div>
        </div>
        <div className="flex-1 p-6 overflow-y-auto flex flex-col gap-4 bg-slate-50">
          <div className="self-start bg-white border border-slate-200 p-3 rounded-2xl rounded-tl-sm shadow-sm max-w-[85%] text-slate-700">
            Hey! Want our best tips sent to you weekly? Drop your email below. 👇
          </div>
          {status !== 'idle' && (
            <div className="self-end bg-indigo-600 text-white p-3 rounded-2xl rounded-tr-sm shadow-sm max-w-[85%] animate-in slide-in-from-bottom-2">
              {email}
            </div>
          )}
          {status === 'loading' && (
             <div className="self-start bg-white border border-slate-200 p-3 rounded-2xl rounded-tl-sm shadow-sm flex gap-1 items-center">
               <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"></div>
               <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
               <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
             </div>
          )}
          {status === 'success' && (
             <div className="self-start bg-white border border-slate-200 p-3 rounded-2xl rounded-tl-sm shadow-sm max-w-[85%] text-slate-700 animate-in slide-in-from-bottom-2 flex items-center gap-2">
               <Check className="text-green-500" size={16}/> Got it! You're subscribed.
             </div>
          )}
        </div>
        {status === 'idle' && (
          <form onSubmit={handleSubmit} className="p-4 bg-white border-t border-slate-100 flex gap-2">
            <input type="email" value={email} onChange={e=>setEmail(e.target.value)} required placeholder="Type email..." className="flex-1 px-4 py-2 bg-slate-100 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-600" />
            <button type="submit" className="w-10 h-10 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full flex items-center justify-center shrink-0 transition-colors"><Send size={16}/></button>
          </form>
        )}
      </div>
    </div>`;

// 3. Mailbox (Drag & Drop illusion via hover/focus)
const getMailboxJSX = () => `
    <div className="w-full max-w-xl mx-auto p-4 sm:p-8 my-10 font-sans group">
      <div className="bg-sky-50 rounded-[3rem] p-12 flex flex-col items-center text-center relative overflow-hidden transition-all duration-500 group-focus-within:bg-white group-focus-within:shadow-2xl">
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-yellow-300 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>
        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>
        
        <div className="relative z-10 w-24 h-24 mb-6 transition-transform duration-500 group-focus-within:-translate-y-4 group-focus-within:scale-110">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full text-blue-600"><path d="M4 7V4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v3"/><rect width="20" height="14" x="2" y="7" rx="2"/><path d="M12 11v6"/><path d="M8 15h8"/></svg>
        </div>
        
        <h2 className="text-3xl font-black text-slate-900 mb-2 relative z-10">Mailbox Delivery</h2>
        <p className="text-slate-500 mb-8 relative z-10 transition-opacity duration-300 group-focus-within:opacity-0">Click to slide your email in.</p>
        
        <div className="w-full relative z-10 h-16">
          {status === 'success' ? (
            <div className="h-full flex items-center justify-center text-green-600 font-bold text-xl animate-in zoom-in"><Check size={28} className="mr-2"/> Delivered!</div>
          ) : (
            <form onSubmit={handleSubmit} className="absolute inset-0 flex items-center gap-2 transform transition-all duration-500 translate-y-4 opacity-0 group-focus-within:translate-y-0 group-focus-within:opacity-100">
              <input type="email" value={email} onChange={e=>setEmail(e.target.value)} required placeholder="Drop your email here..." className="flex-1 h-full px-6 bg-white border-2 border-blue-200 rounded-2xl focus:outline-none focus:border-blue-600 text-lg shadow-inner" />
              <button type="submit" disabled={status==='loading'} className="h-full px-8 bg-blue-600 text-white font-bold rounded-2xl hover:bg-blue-700 transition-colors">
                {status === 'loading' ? <Loader2 className="animate-spin" /> : 'Send'}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>`;

// 4. Timeline
const getTimelineJSX = () => `
    <div className="w-full max-w-md mx-auto p-4 sm:p-8 my-10 font-sans">
      <div className="bg-white rounded-3xl p-8 shadow-xl border border-slate-100">
        <h2 className="text-2xl font-black mb-8 text-slate-900">Sign Up Flow</h2>
        <div className="relative pl-8 border-l-2 border-slate-100 space-y-10">
          
          <div className="relative">
            <div className={\`absolute -left-[41px] w-5 h-5 rounded-full border-4 border-white transition-colors duration-500 \${status === 'idle' ? 'bg-indigo-500 ring-4 ring-indigo-100' : 'bg-slate-300'}\`}></div>
            <h3 className={\`font-bold \${status === 'idle' ? 'text-slate-900' : 'text-slate-400'}\`}>1. Enter Email</h3>
            {status === 'idle' && (
              <form onSubmit={handleSubmit} className="mt-3 flex gap-2 animate-in slide-in-from-left-2">
                <input type="email" value={email} onChange={e=>setEmail(e.target.value)} required placeholder="Email..." className="flex-1 border border-slate-200 px-3 py-2 rounded-lg text-sm focus:outline-none focus:border-indigo-500" />
                <button type="submit" className="bg-indigo-600 text-white px-4 rounded-lg text-sm font-bold">Next</button>
              </form>
            )}
          </div>

          <div className="relative">
            <div className={\`absolute -left-[41px] w-5 h-5 rounded-full border-4 border-white transition-colors duration-500 \${status === 'loading' ? 'bg-indigo-500 ring-4 ring-indigo-100' : 'bg-slate-300'}\`}></div>
            <h3 className={\`font-bold \${status === 'loading' ? 'text-slate-900' : 'text-slate-400'}\`}>2. Verifying</h3>
            {status === 'loading' && <div className="mt-3 text-sm text-indigo-600 flex items-center gap-2 animate-in slide-in-from-left-2"><Loader2 className="animate-spin" size={16}/> Checking database...</div>}
          </div>

          <div className="relative">
            <div className={\`absolute -left-[41px] w-5 h-5 rounded-full border-4 border-white transition-colors duration-500 \${status === 'success' ? 'bg-green-500 ring-4 ring-green-100' : 'bg-slate-300'}\`}></div>
            <h3 className={\`font-bold \${status === 'success' ? 'text-slate-900' : 'text-slate-400'}\`}>3. Complete</h3>
            {status === 'success' && <div className="mt-3 text-sm text-green-600 font-bold flex items-center gap-1 animate-in slide-in-from-left-2"><Check size={16}/> Welcome aboard!</div>}
          </div>
          
        </div>
      </div>
    </div>`;

// 5. Printed Receipt
const getReceiptJSX = () => `
    <div className="w-full max-w-sm mx-auto p-4 sm:p-8 my-10 font-mono">
      <div className="relative bg-zinc-900 p-4 rounded-t-xl rounded-b-md shadow-2xl z-20 flex justify-between items-center text-white">
        <span className="font-bold tracking-widest text-sm">POS_TERMINAL</span>
        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
      </div>
      <div className="relative -mt-2 z-10 flex justify-center">
        <div className={\`w-[90%] bg-[#fdfbf7] shadow-[0_20px_25px_-5px_rgba(0,0,0,0.2)] transition-all duration-1000 ease-[cubic-bezier(0.2,0.8,0.2,1)] \${status === 'success' ? 'h-[300px]' : 'h-0 overflow-hidden'}\`}>
          <div className="p-8 text-center text-zinc-800 border-b-2 border-dashed border-zinc-300">
            <h3 className="text-2xl font-bold mb-1 uppercase tracking-tighter">Receipt</h3>
            <p className="text-xs mb-6 text-zinc-500">{new Date().toLocaleDateString()} {new Date().toLocaleTimeString()}</p>
            <div className="flex justify-between text-sm mb-2"><span className="opacity-70">ITEM:</span><span className="font-bold">NEWSLETTER</span></div>
            <div className="flex justify-between text-sm mb-6"><span className="opacity-70">PRICE:</span><span className="font-bold">FREE</span></div>
            <div className="border-t-2 border-zinc-800 pt-4 font-bold uppercase tracking-widest flex justify-center"><Check className="mr-2"/> SUCCESS</div>
          </div>
          {/* Jagged bottom */}
          <div className="absolute bottom-0 w-full h-3" style={{backgroundImage: 'linear-gradient(-45deg, transparent 50%, #fdfbf7 50%), linear-gradient(45deg, transparent 50%, #fdfbf7 50%)', backgroundSize: '10px 10px', backgroundRepeat: 'repeat-x'}}></div>
        </div>
      </div>
      
      {status !== 'success' && (
        <form onSubmit={handleSubmit} className="mt-8 bg-white p-6 rounded-2xl shadow-xl flex flex-col gap-4">
          <input type="email" value={email} onChange={e=>setEmail(e.target.value)} required placeholder="Enter Email..." className="px-4 py-3 bg-zinc-100 rounded-lg text-center font-bold focus:outline-none focus:ring-2 focus:ring-zinc-900 uppercase" />
          <button type="submit" disabled={status==='loading'} className="py-4 bg-zinc-900 text-white font-bold rounded-lg uppercase tracking-widest flex justify-center">
            {status === 'loading' ? <Loader2 className="animate-spin" /> : 'PRINT TICKET'}
          </button>
        </form>
      )}
    </div>`;

// 6. Manila Folder
const getFolderJSX = () => `
    <div className="w-full max-w-xl mx-auto p-4 sm:p-8 my-10 font-sans flex flex-col items-center">
      <div className="w-full max-w-lg relative group">
        {/* Tab */}
        <div className="absolute -top-10 left-4 bg-[#e6c17a] px-6 py-2 rounded-t-xl text-[#8b6b29] font-black uppercase text-sm shadow-[inset_0_2px_4px_rgba(255,255,255,0.4)] z-0 transition-transform duration-300 group-hover:-translate-y-2">
          CONFIDENTIAL
        </div>
        
        {/* Back of folder */}
        <div className="absolute inset-0 bg-[#d9b36c] rounded-2xl rounded-tl-none shadow-xl z-10"></div>
        
        {/* Paper Inside */}
        <div className={\`absolute left-4 right-4 bg-[#fdfbf7] p-8 rounded-lg shadow-inner z-20 transition-all duration-700 ease-in-out \${status === 'success' ? '-top-24 h-[250px]' : 'top-4 h-[100px] opacity-0 group-hover:-top-16 group-hover:h-[220px] group-hover:opacity-100'}\`}>
          {status === 'success' ? (
            <div className="text-center h-full flex flex-col items-center justify-center text-slate-800">
               <Check size={48} className="text-green-600 mb-2" />
               <h3 className="font-black text-2xl uppercase tracking-widest">Filed.</h3>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="h-full flex flex-col justify-end gap-3 text-slate-800">
               <h3 className="font-bold uppercase tracking-widest border-b-2 border-slate-300 pb-2 mb-2">Sign here:</h3>
               <input type="email" value={email} onChange={e=>setEmail(e.target.value)} required placeholder="email@address.com" className="w-full border-b border-dashed border-slate-400 bg-transparent focus:outline-none px-2 py-1 font-mono text-blue-800" />
               <button type="submit" disabled={status==='loading'} className="self-end px-6 py-2 bg-slate-800 text-white font-bold rounded shadow flex justify-center w-32">
                 {status === 'loading' ? <Loader2 className="animate-spin" size={16}/> : 'STAMP'}
               </button>
            </form>
          )}
        </div>
        
        {/* Front of folder */}
        <div className="relative bg-[#f0c878] h-[250px] rounded-2xl rounded-tl-none shadow-[inset_0_-10px_20px_rgba(0,0,0,0.1),0_10px_20px_rgba(0,0,0,0.2)] z-30 flex items-center justify-center transform origin-bottom transition-transform duration-700 group-hover:rotate-x-12">
           <div className="opacity-20 border-4 border-dashed border-amber-900 rounded-xl w-[90%] h-[80%] flex items-center justify-center pointer-events-none">
             <Mail size={100} className="text-amber-900" />
           </div>
           <div className={\`absolute inset-0 flex items-center justify-center transition-opacity duration-300 \${status === 'success' ? 'opacity-0' : 'group-hover:opacity-0'}\`}>
             <p className="bg-white/50 backdrop-blur px-4 py-2 rounded-lg font-bold text-amber-900">Hover to open</p>
           </div>
        </div>
      </div>
    </div>`;

// 7. 3D Cube
const getCubeJSX = () => `
    <div className="w-full max-w-sm mx-auto p-4 sm:p-8 my-10 font-sans perspective-1000 flex justify-center">
      <div className={\`w-64 h-64 relative transform-style-3d transition-transform duration-1000 ease-[cubic-bezier(0.2,0.8,0.2,1)] \${status === 'success' ? 'rotate-y-[180deg]' : isFocused ? 'rotate-y-[-90deg]' : ''}\`}>
        
        {/* Front Face: Idle */}
        <div className="absolute inset-0 w-full h-full backface-hidden bg-gradient-to-br from-violet-600 to-indigo-700 rounded-3xl shadow-2xl flex flex-col items-center justify-center text-white cursor-pointer hover:shadow-[0_0_40px_rgba(79,70,229,0.5)] transition-shadow" onClick={() => setIsFocused(true)}>
          <Mail size={48} className="mb-4 animate-bounce" />
          <h3 className="text-2xl font-black">Subscribe</h3>
          <p className="text-sm opacity-80 mt-2">Click me</p>
        </div>

        {/* Right Face: Form */}
        <div className="absolute inset-0 w-full h-full backface-hidden bg-white border border-slate-200 rounded-3xl shadow-2xl p-6 flex flex-col justify-center origin-left rotate-y-90 translate-x-full">
          <button onClick={() => setIsFocused(false)} className="absolute top-4 right-4 text-slate-400 hover:text-slate-900"><X size={16}/></button>
          <h3 className="text-xl font-black text-slate-900 mb-4">Enter Email</h3>
          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <input type="email" value={email} onChange={e=>setEmail(e.target.value)} required placeholder="you@domain.com" className="px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-indigo-600" />
            <button type="submit" disabled={status==='loading'} className="py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl flex justify-center">
               {status === 'loading' ? <Loader2 className="animate-spin"/> : 'Send'}
            </button>
          </form>
        </div>

        {/* Back Face: Success */}
        <div className="absolute inset-0 w-full h-full backface-hidden bg-gradient-to-br from-green-400 to-emerald-600 rounded-3xl shadow-2xl flex flex-col items-center justify-center text-white rotate-y-180">
          <Check size={64} className="mb-4 opacity-90" />
          <h3 className="text-2xl font-black">Done!</h3>
        </div>

      </div>
    </div>`;

// 8. Spotlight
const getSpotlightJSX = () => `
    <div className="w-full max-w-4xl mx-auto p-4 sm:p-8 my-10 font-sans group relative overflow-hidden bg-slate-950 rounded-[3rem] shadow-2xl border border-slate-800 min-h-[400px] flex items-center justify-center">
      {/* Spotlight element */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" style={{background: 'radial-gradient(circle 400px at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(255,255,255,0.06), transparent 80%)'}} onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        e.currentTarget.style.setProperty('--mouse-x', \`\${e.clientX - rect.left}px\`);
        e.currentTarget.style.setProperty('--mouse-y', \`\${e.clientY - rect.top}px\`);
      }}></div>
      
      <div className="relative z-10 max-w-xl text-center p-8">
        <div className="w-20 h-20 bg-slate-900/50 rounded-full border border-white/5 flex items-center justify-center mx-auto mb-8 text-slate-400 group-hover:text-white transition-colors duration-500 shadow-[0_0_20px_rgba(0,0,0,0.5)]">
           <Zap size={32} />
        </div>
        <h2 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-500 mb-6 tracking-tight">Illuminated Insights</h2>
        
        {status === 'success' ? (
          <div className="border border-green-500/30 bg-green-500/10 text-green-400 p-6 rounded-2xl backdrop-blur-md animate-in fade-in">
             <Check size={32} className="mx-auto mb-2" />
             <p className="font-bold text-lg">Subscription Active</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex gap-2 p-2 bg-white/5 border border-white/10 rounded-full backdrop-blur-sm group-hover:border-white/20 transition-colors">
            <input type="email" value={email} onChange={e=>setEmail(e.target.value)} required placeholder="Email Address" className="flex-1 bg-transparent px-6 py-3 text-white placeholder:text-slate-500 focus:outline-none" />
            <button type="submit" disabled={status==='loading'} className="px-8 py-3 bg-white text-black font-black rounded-full hover:bg-slate-200 transition-colors shadow-[0_0_15px_rgba(255,255,255,0.2)]">
              {status === 'loading' ? <Loader2 className="animate-spin"/> : 'Join'}
            </button>
          </form>
        )}
      </div>
    </div>`;

// 9. Expandable Grid
const getGridJSX = () => `
    <div className="w-full max-w-5xl mx-auto p-4 sm:p-8 my-10 font-sans flex justify-center">
      <div className={\`grid grid-cols-2 gap-4 transition-all duration-700 ease-[cubic-bezier(0.2,0.8,0.2,1)] \${isFocused ? 'gap-x-12 sm:gap-x-32' : 'hover:gap-6'}\`}>
        {/* Left Column Images */}
        <div className="space-y-4 transition-transform duration-700 origin-right cursor-pointer" onClick={()=>setIsFocused(true)}>
          <div className="w-32 h-40 sm:w-48 sm:h-64 bg-slate-200 rounded-3xl overflow-hidden shadow-xl"><img src="https://images.unsplash.com/photo-1604871000636-074fa5117945?q=80&w=600&auto=format&fit=crop" className="w-full h-full object-cover" alt="Art"/></div>
          <div className="w-32 h-24 sm:w-48 sm:h-32 bg-slate-200 rounded-3xl overflow-hidden shadow-xl"><img src="https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?q=80&w=600&auto=format&fit=crop" className="w-full h-full object-cover" alt="Art"/></div>
        </div>
        
        {/* Hidden Form Center */}
        <div className={\`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] sm:w-[350px] transition-all duration-700 \${isFocused ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-90 pointer-events-none'}\`}>
          <div className="bg-white p-8 border border-slate-100 shadow-2xl rounded-3xl text-center relative">
            <button onClick={()=>setIsFocused(false)} className="absolute top-4 right-4 text-slate-400 hover:text-slate-900"><X size={16}/></button>
            <Sparkles size={32} className="mx-auto text-pink-500 mb-4" />
            <h3 className="text-2xl font-black text-slate-900 mb-2">Art Weekly</h3>
            <p className="text-sm text-slate-500 mb-6">Curated galleries every Friday.</p>
            {status === 'success' ? (
              <div className="bg-pink-50 text-pink-700 p-4 rounded-xl font-bold animate-in zoom-in">Subscribed!</div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                <input type="email" value={email} onChange={e=>setEmail(e.target.value)} required placeholder="Email..." className="px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-pink-500" />
                <button type="submit" disabled={status==='loading'} className="py-3 bg-pink-500 hover:bg-pink-600 text-white font-bold rounded-xl flex justify-center">{status==='loading'?<Loader2 className="animate-spin"/>:'Subscribe'}</button>
              </form>
            )}
          </div>
        </div>

        {/* Right Column Images */}
        <div className="space-y-4 transition-transform duration-700 origin-left cursor-pointer" onClick={()=>setIsFocused(true)}>
          <div className="w-32 h-24 sm:w-48 sm:h-32 bg-slate-200 rounded-3xl overflow-hidden shadow-xl"><img src="https://images.unsplash.com/photo-1549490349-8643362247b5?q=80&w=600&auto=format&fit=crop" className="w-full h-full object-cover" alt="Art"/></div>
          <div className="w-32 h-40 sm:w-48 sm:h-64 bg-slate-200 rounded-3xl overflow-hidden shadow-xl"><img src="https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=600&auto=format&fit=crop" className="w-full h-full object-cover" alt="Art"/></div>
        </div>
      </div>
    </div>`;

// 10. Radial Burst
const getRadialJSX = () => `
    <div className="w-full h-[500px] relative overflow-hidden font-sans bg-slate-50 border border-black/5 rounded-[2rem] flex items-center justify-center my-10">
      
      {/* Trigger Button */}
      <button 
        onClick={() => setIsOpen(true)}
        className={\`w-20 h-20 bg-rose-600 rounded-full text-white shadow-xl hover:shadow-2xl hover:scale-110 transition-all duration-300 flex items-center justify-center \${isOpen ? 'opacity-0 scale-0' : 'opacity-100'}\`}
      >
        <Mail size={32} />
      </button>

      {/* Radial Overlay */}
      <div className={\`absolute inset-0 bg-rose-600 text-white flex flex-col items-center justify-center transition-all duration-700 ease-[cubic-bezier(0.2,0.8,0.2,1)] \${isOpen ? 'clip-path-full' : 'clip-path-center'}\`} style={{clipPath: isOpen ? 'circle(150% at 50% 50%)' : 'circle(0% at 50% 50%)'}}>
        <button onClick={() => setIsOpen(false)} className="absolute top-8 right-8 bg-white/20 hover:bg-white/40 p-3 rounded-full transition-colors"><X size={24}/></button>
        
        <div className={\`max-w-md w-full text-center transition-all duration-700 delay-300 \${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}\`}>
          <h2 className="text-5xl font-black mb-6 drop-shadow-lg tracking-tight">Don't Miss Out.</h2>
          
          {status === 'success' ? (
            <div className="bg-white text-rose-600 p-8 rounded-3xl shadow-2xl flex flex-col items-center">
              <Check size={64} className="mb-4" />
              <p className="text-2xl font-bold">You're Awesome!</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input type="email" value={email} onChange={e=>setEmail(e.target.value)} required placeholder="Enter your best email" className="px-6 py-5 bg-white/20 backdrop-blur border border-white/40 rounded-full text-xl text-white placeholder:text-white/60 focus:outline-none focus:bg-white/30 text-center" />
              <button type="submit" disabled={status==='loading'} className="px-6 py-5 bg-white text-rose-600 font-black text-xl rounded-full shadow-2xl hover:scale-105 transition-transform flex justify-center">
                {status === 'loading' ? <Loader2 className="animate-spin" /> : 'Subscribe Now'}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>`;

const archetypes = [
    { name: 'terminal', fn: getTerminalJSX },
    { name: 'chatbot', fn: getChatbotJSX },
    { name: 'mailbox', fn: getMailboxJSX },
    { name: 'timeline', fn: getTimelineJSX },
    { name: 'receipt', fn: getReceiptJSX },
    { name: 'folder', fn: getFolderJSX },
    { name: 'cube', fn: getCubeJSX },
    { name: 'spotlight', fn: getSpotlightJSX },
    { name: 'grid', fn: getGridJSX },
    { name: 'radial', fn: getRadialJSX }
];

// Append to the generator
let allArchetypes = []; // We will read the old 15 and append these 10. Wait, it's easier to just write a script that generates ONLY 16-25, and doesn't overwrite 1-15.

function generateComponent(idNum) {
    const idStr = idNum.toString().padStart(2, '0');
    const compName = `Newsletter${idStr}`;
    
    // We start idNum at 16, so index = idNum - 16
    const arch = archetypes[idNum - 16];
    
    let imports = `import React, { useState, useEffect } from 'react';\nimport { Mail, Send, Bell, ArrowRight, Sparkles, Check, Loader2, X, Zap } from 'lucide-react';\n`;
    
    let extraState = '';
    if (arch.name === 'radial') {
        extraState += "const [isOpen, setIsOpen] = useState(false);\n";
    }
    if (arch.name === 'timeline') {
        extraState += ""; // status manages steps
    }
    if (arch.name === 'cube' || arch.name === 'grid') {
        extraState += "const [isFocused, setIsFocused] = useState(false);\n";
    }

    const jsx = arch.fn();

    const componentContent = `\
"use client";
${imports}
export default function ${compName}() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');
  ${extraState}

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus('loading');
    setTimeout(() => {
      setStatus('success');
    }, 1500);
  };

  return (
${jsx}
  );
}
`;

    const dirPath = path.join(targetDir, `newsletter-${idStr}`);
    if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath, { recursive: true });
    }
    fs.writeFileSync(path.join(dirPath, `${compName}.tsx`), componentContent, 'utf8');
}

// Generate 16 to 25
for (let i = 16; i <= 25; i++) {
    generateComponent(i);
}

// Read old index, append
let indexContent = fs.readFileSync(path.join(targetDir, 'index.ts'), 'utf8');
// To cleanly rebuild index.ts for 25 items:
let newIndexImports = '';
for (let i = 1; i <= 25; i++) {
    const idStr = i.toString().padStart(2, '0');
    newIndexImports += `import Newsletter${idStr} from './newsletter-${idStr}/Newsletter${idStr}';\n`;
}
let newIndexExports = '\nexport const newsletters = [\n';
for (let i = 1; i <= 25; i++) {
    const idStr = i.toString().padStart(2, '0');
    newIndexExports += `  { id: '${idStr}', name: 'Newsletter ${idStr}', Component: Newsletter${idStr} }${i === 25 ? '' : ','}\n`;
}
newIndexExports += '];\n';

fs.writeFileSync(path.join(targetDir, 'index.ts'), newIndexImports + newIndexExports, 'utf8');

console.log('Successfully generated 10 New Advanced Newsletters (16-25) and updated index.ts!');
