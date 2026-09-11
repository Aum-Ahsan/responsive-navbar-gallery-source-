const fs = require('fs');
const path = require('path');

const targetDir = path.join(__dirname, '..', 'components', 'newsletters');
if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
}

const themes = [
    { name: 'slate', base: 'slate-900', light: 'slate-50', primary: 'blue-600', primaryHover: 'blue-700', text: 'white' },
    { name: 'emerald', base: 'emerald-900', light: 'emerald-50', primary: 'teal-600', primaryHover: 'teal-700', text: 'white' },
    { name: 'purple', base: 'purple-900', light: 'purple-50', primary: 'fuchsia-600', primaryHover: 'fuchsia-700', text: 'white' },
    { name: 'rose', base: 'rose-900', light: 'rose-50', primary: 'pink-600', primaryHover: 'pink-700', text: 'white' },
];

const iconsList = ['Mail', 'Send', 'Bell', 'ArrowRight', 'Sparkles', 'Zap'];

// Archetype Templates
// 1. Modal
const getModalJSX = (theme) => `
    <div className="w-full max-w-4xl mx-auto p-4 sm:p-8 my-10 font-sans flex justify-center">
      <button 
        onClick={() => setIsOpen(true)}
        className="px-8 py-4 bg-${theme.primary} hover:bg-${theme.primaryHover} text-white font-bold rounded-full transition-all shadow-xl hover:shadow-2xl flex items-center gap-3 hover:-translate-y-1"
      >
        <Mail size={20} /> Subscribe to Newsletter
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-300">
          <div className="bg-white rounded-3xl shadow-2xl w-full max-w-md overflow-hidden animate-in zoom-in-95 duration-300">
            <div className="relative h-32 bg-${theme.base} flex items-center justify-center">
              <button onClick={() => setIsOpen(false)} className="absolute top-4 right-4 text-white/70 hover:text-white bg-black/20 rounded-full p-2">
                <X size={20} />
              </button>
              <Mail size={48} className="text-white opacity-80" />
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-black text-slate-900 mb-2">Join the Club</h3>
              <p className="text-slate-500 mb-6">Get our weekly updates straight to your inbox.</p>
              
              {status === 'success' ? (
                <div className="bg-green-50 text-green-700 border border-green-200 rounded-xl p-4 text-center">
                  <Check className="mx-auto mb-2" size={32} />
                  <p className="font-bold">Subscription Confirmed!</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <input type="email" value={email} onChange={e=>setEmail(e.target.value)} required placeholder="you@example.com" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-${theme.primary} transition-all" />
                  <button type="submit" disabled={status==='loading'} className="w-full py-3 bg-${theme.primary} hover:bg-${theme.primaryHover} text-white font-bold rounded-xl transition-all flex justify-center">
                    {status === 'loading' ? <Loader2 className="animate-spin" /> : 'Subscribe Now'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </div>`;

// 2. Wizard
const getWizardJSX = (theme) => `
    <div className="w-full max-w-2xl mx-auto p-4 sm:p-8 my-10 font-sans">
      <div className="bg-white rounded-[2rem] shadow-xl border border-slate-100 overflow-hidden relative min-h-[350px]">
        {/* Progress Bar */}
        <div className="absolute top-0 left-0 h-2 bg-${theme.primary} transition-all duration-500" style={{ width: \`\${step * 33.33}%\` }}></div>
        
        <div className="p-8 sm:p-12 relative h-full flex flex-col">
          {step === 1 && (
            <div className="animate-in slide-in-from-right duration-500 flex-1">
              <div className="w-12 h-12 bg-${theme.light} text-${theme.primary} rounded-xl flex items-center justify-center mb-6"><Mail size={24} /></div>
              <h3 className="text-3xl font-black text-slate-900 mb-3">Step 1: Your Email</h3>
              <p className="text-slate-500 mb-8">Where should we send the updates?</p>
              <input type="email" value={email} onChange={e=>setEmail(e.target.value)} placeholder="name@company.com" className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-${theme.primary} text-lg mb-6" />
              <button onClick={() => email && setStep(2)} className="w-full py-4 bg-${theme.base} hover:bg-black text-white font-bold rounded-xl flex justify-center items-center gap-2">Continue <ArrowRight size={20} /></button>
            </div>
          )}
          {step === 2 && (
            <div className="animate-in slide-in-from-right duration-500 flex-1">
              <button onClick={() => setStep(1)} className="text-slate-400 hover:text-slate-900 text-sm font-bold flex items-center gap-1 mb-6"><ArrowRight className="rotate-180" size={16}/> Back</button>
              <h3 className="text-3xl font-black text-slate-900 mb-3">Step 2: Preferences</h3>
              <p className="text-slate-500 mb-8">What are you interested in?</p>
              <div className="grid grid-cols-2 gap-3 mb-8">
                {['Design', 'Engineering', 'Product', 'News'].map(topic => (
                  <label key={topic} className="flex items-center gap-3 p-4 border border-slate-200 rounded-xl cursor-pointer hover:bg-slate-50">
                    <input type="checkbox" className="w-5 h-5 accent-${theme.primary}" defaultChecked={topic==='Design'} />
                    <span className="font-semibold text-slate-700">{topic}</span>
                  </label>
                ))}
              </div>
              <button onClick={() => { setStatus('loading'); setStep(3); setTimeout(() => setStatus('success'), 1500) }} className="w-full py-4 bg-${theme.primary} hover:bg-${theme.primaryHover} text-white font-bold rounded-xl flex justify-center items-center gap-2">Complete Signup</button>
            </div>
          )}
          {step === 3 && (
            <div className="animate-in zoom-in duration-500 flex-1 flex flex-col items-center justify-center text-center py-10">
              {status === 'loading' ? (
                <Loader2 size={48} className="animate-spin text-${theme.primary} mb-6" />
              ) : (
                <>
                  <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6"><Check size={40}/></div>
                  <h3 className="text-3xl font-black text-slate-900 mb-2">You're in!</h3>
                  <p className="text-slate-500">Your preferences have been saved.</p>
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </div>`;

// 3. Expanding Input
const getExpandJSX = (theme) => `
    <div className="w-full max-w-2xl mx-auto p-4 sm:p-8 my-10 font-sans flex justify-center">
      <div className="relative">
        <form onSubmit={handleSubmit} className={\`flex items-center bg-white border border-slate-200 shadow-lg rounded-full transition-all duration-500 ease-out overflow-hidden \${isFocused || email ? 'w-[350px] sm:w-[450px]' : 'w-16 cursor-pointer hover:bg-slate-50'}\`}>
          <div className="w-16 h-16 flex items-center justify-center shrink-0 text-slate-500" onClick={() => !isFocused && document.getElementById('expand-input')?.focus()}>
            <Mail size={24} />
          </div>
          <input
            id="expand-input"
            type="email"
            value={email}
            onChange={e=>setEmail(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            placeholder="Subscribe with email..."
            className={\`h-16 flex-1 bg-transparent focus:outline-none text-slate-900 font-medium transition-opacity duration-300 \${isFocused || email ? 'opacity-100' : 'opacity-0'}\`}
          />
          {(isFocused || email) && (
            <button type="submit" disabled={status==='loading'} className="h-12 px-6 mr-2 bg-${theme.base} hover:bg-black text-white font-bold rounded-full transition-all flex items-center justify-center shrink-0">
              {status === 'loading' ? <Loader2 className="animate-spin" size={20}/> : <ArrowRight size={20}/>}
            </button>
          )}
        </form>
        {status === 'success' && (
          <div className="absolute top-20 left-0 w-full bg-green-50 text-green-700 border border-green-200 p-4 rounded-xl text-center text-sm font-bold animate-in fade-in slide-in-from-top-2">
            Success! Check your inbox.
          </div>
        )}
      </div>
    </div>`;

// 4. Flip Card
const getFlipJSX = (theme) => `
    <div className="w-full max-w-md mx-auto p-4 sm:p-8 my-10 font-sans perspective-1000">
      <div className={\`relative w-full h-[400px] transition-transform duration-700 transform-style-3d \${status === 'success' ? 'rotate-y-180' : ''}\`}>
        {/* Front */}
        <div className="absolute inset-0 backface-hidden bg-white border border-slate-200 shadow-2xl rounded-3xl p-10 flex flex-col items-center text-center">
          <div className="w-16 h-16 bg-${theme.light} text-${theme.primary} rounded-full flex items-center justify-center mb-6"><Sparkles size={32}/></div>
          <h3 className="text-2xl font-black text-slate-900 mb-3">Weekly Magic</h3>
          <p className="text-slate-500 mb-8">Exclusive tips straight to your inbox.</p>
          <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
            <input type="email" value={email} onChange={e=>setEmail(e.target.value)} required placeholder="Email address" className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-${theme.primary} text-center" />
            <button type="submit" disabled={status==='loading'} className="w-full py-4 bg-${theme.primary} text-white font-bold rounded-xl shadow-md hover:-translate-y-1 transition-transform flex justify-center">
              {status === 'loading' ? <Loader2 className="animate-spin" size={24}/> : 'Subscribe'}
            </button>
          </form>
        </div>
        
        {/* Back */}
        <div className="absolute inset-0 backface-hidden rotate-y-180 bg-gradient-to-br from-${theme.primary} to-${theme.base} shadow-2xl rounded-3xl p-10 flex flex-col items-center justify-center text-center text-white">
          <Check size={64} className="mb-6 opacity-90" />
          <h3 className="text-3xl font-black mb-2">Awesome!</h3>
          <p className="opacity-80">You're on the list.</p>
        </div>
      </div>
    </div>`;

// 5. Brutalist
const getBrutalistJSX = (theme) => `
    <div className="w-full max-w-4xl mx-auto p-4 sm:p-8 my-10 font-sans">
      <div className="bg-[#f0f0f0] border-4 border-black p-8 sm:p-12 shadow-[12px_12px_0_0_rgba(0,0,0,1)] flex flex-col lg:flex-row gap-8 items-center">
        <div className="flex-1 text-center lg:text-left">
          <h2 className="text-5xl sm:text-6xl font-black uppercase tracking-tighter text-black leading-none mb-4">JOIN THE<br/>REVOLUTION.</h2>
          <p className="text-xl font-bold border-l-4 border-${theme.primary} pl-4 text-black">NO SPAM. JUST PURE VALUE.</p>
        </div>
        <div className="w-full lg:w-1/2">
          {status === 'success' ? (
            <div className="bg-white border-4 border-black p-6 shadow-[8px_8px_0_0_rgba(0,0,0,1)] text-center">
              <p className="text-3xl font-black uppercase">CONFIRMED!</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input type="email" value={email} onChange={e=>setEmail(e.target.value)} required placeholder="EMAIL@DOMAIN.COM" className="w-full px-6 py-5 bg-white border-4 border-black text-xl font-bold uppercase placeholder:text-black/30 focus:outline-none focus:bg-[#ffffeb]" />
              <button type="submit" disabled={status==='loading'} className="w-full py-5 bg-${theme.primary} hover:bg-black border-4 border-black text-white text-2xl font-black uppercase transition-colors shadow-[6px_6px_0_0_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-[2px_2px_0_0_rgba(0,0,0,1)]">
                {status === 'loading' ? 'LOADING...' : 'SUBSCRIBE'}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>`;

// 6. Neumorphic
const getNeumorphicJSX = (theme) => `
    <div className="w-full max-w-2xl mx-auto p-4 sm:p-8 my-10 font-sans">
      <div className="bg-[#e0e5ec] rounded-[3rem] p-12 shadow-[20px_20px_60px_#bec3c9,-20px_-20px_60px_#ffffff] flex flex-col items-center text-center">
        <div className="w-24 h-24 rounded-full bg-[#e0e5ec] shadow-[10px_10px_30px_#bec3c9,-10px_-10px_30px_#ffffff] flex items-center justify-center mb-10 text-${theme.primary}">
          <Mail size={40} />
        </div>
        <h2 className="text-3xl font-bold text-slate-700 mb-4">Stay Connected</h2>
        <p className="text-slate-500 mb-10">Subscribe for the latest updates.</p>
        
        {status === 'success' ? (
          <div className="text-green-500 font-bold text-xl animate-pulse">Successfully Subscribed!</div>
        ) : (
          <form onSubmit={handleSubmit} className="w-full flex flex-col sm:flex-row gap-6 justify-center">
            <input type="email" value={email} onChange={e=>setEmail(e.target.value)} required placeholder="Your email address" className="w-full sm:w-2/3 px-6 py-4 rounded-full bg-[#e0e5ec] shadow-[inset_10px_10px_20px_#bec3c9,inset_-10px_-10px_20px_#ffffff] focus:outline-none text-slate-700" />
            <button type="submit" disabled={status==='loading'} className="w-full sm:w-1/3 py-4 rounded-full bg-[#e0e5ec] shadow-[10px_10px_20px_#bec3c9,-10px_-10px_20px_#ffffff] hover:shadow-[inset_5px_5px_10px_#bec3c9,inset_-5px_-5px_10px_#ffffff] text-${theme.primary} font-bold transition-all flex justify-center items-center">
              {status === 'loading' ? <Loader2 className="animate-spin" /> : 'Join'}
            </button>
          </form>
        )}
      </div>
    </div>`;

// 7. Shaking Error / Realtime Validator
const getValidatorJSX = (theme) => `
    <div className="w-full max-w-xl mx-auto p-4 sm:p-8 my-10 font-sans">
      <div className="bg-white rounded-[2rem] p-8 sm:p-12 shadow-2xl border border-slate-100 relative">
        <h2 className="text-3xl font-black text-slate-900 mb-2">Newsletter</h2>
        <p className="text-slate-500 mb-8">We will send you a welcome email immediately.</p>
        
        {status === 'success' ? (
          <div className="bg-${theme.light} text-${theme.primary} p-6 rounded-2xl flex items-center gap-4">
            <Check size={32} /> <span className="font-bold text-lg">Thank you for subscribing!</span>
          </div>
        ) : (
          <form onSubmit={(e) => { e.preventDefault(); if(!email.includes('@')) { setError(true); setTimeout(()=>setError(false), 500); return; } setStatus('loading'); setTimeout(()=>setStatus('success'),1500); }} className="relative">
            <div className={\`transition-transform duration-300 \${error ? 'translate-x-2 -translate-x-2' : ''} \${error ? 'animate-bounce' : ''}\`}>
              <div className={\`flex items-center border-2 rounded-2xl overflow-hidden transition-colors \${error ? 'border-red-500 bg-red-50' : email.includes('@') ? 'border-green-500 bg-white' : 'border-slate-200 bg-slate-50'}\`}>
                <div className="pl-5 text-slate-400"><Mail size={20}/></div>
                <input type="email" value={email} onChange={e=>{setEmail(e.target.value); setError(false);}} placeholder="Enter valid email..." className="w-full px-4 py-5 bg-transparent focus:outline-none text-slate-900 font-medium" />
                {email.includes('@') && !error && <div className="pr-5 text-green-500"><Check size={20}/></div>}
              </div>
            </div>
            {error && <p className="text-red-500 text-sm font-bold mt-2 absolute -bottom-6 left-2 animate-in fade-in">Please enter a valid email containing '@'</p>}
            
            <button type="submit" disabled={status==='loading'} className="w-full mt-8 py-5 bg-slate-900 hover:bg-black text-white font-bold rounded-2xl shadow-lg hover:shadow-xl transition-all flex justify-center">
               {status === 'loading' ? <Loader2 className="animate-spin" /> : 'Subscribe Now'}
            </button>
          </form>
        )}
      </div>
    </div>`;

// 8. Gamified Unlock
const getGamifiedJSX = (theme) => `
    <div className="w-full max-w-3xl mx-auto p-4 sm:p-8 my-10 font-sans">
      <div className="bg-slate-900 rounded-[2.5rem] p-8 sm:p-14 shadow-2xl relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tr from-${theme.primary}/20 to-transparent blur-2xl"></div>
        <div className="relative z-10 text-center text-white">
          <div className="inline-block bg-white/10 backdrop-blur rounded-full px-4 py-2 text-sm font-bold text-${theme.light} mb-6 border border-white/10">
            🎁 Unlock Free E-Book
          </div>
          <h2 className="text-3xl sm:text-5xl font-black mb-10 leading-tight">Enter your email to unlock the React Handbook.</h2>
          
          {status === 'success' ? (
            <div className="animate-in zoom-in duration-500 bg-green-500/20 border border-green-500 rounded-2xl p-8 flex flex-col items-center">
              <Check size={48} className="text-green-400 mb-4" />
              <p className="text-2xl font-bold">Unlocked!</p>
              <button className="mt-6 px-8 py-3 bg-green-500 hover:bg-green-400 text-black font-black rounded-full">Download PDF</button>
            </div>
          ) : (
            <div className="max-w-md mx-auto">
              <div className="flex justify-between text-xs font-bold text-slate-400 mb-2">
                <span>Progress</span>
                <span>{email.length > 5 && email.includes('@') ? '100%' : Math.min(email.length * 10, 80)}%</span>
              </div>
              <div className="w-full h-2 bg-slate-800 rounded-full mb-8 overflow-hidden">
                <div className="h-full bg-${theme.primary} transition-all duration-300" style={{ width: email.length > 5 && email.includes('@') ? '100%' : \`\${Math.min(email.length * 10, 80)}%\` }}></div>
              </div>
              <form onSubmit={handleSubmit} className="flex gap-2 bg-slate-800/50 p-2 rounded-2xl border border-slate-700">
                <input type="email" value={email} onChange={e=>setEmail(e.target.value)} required placeholder="Email required to unlock..." className="flex-1 px-4 py-3 bg-transparent focus:outline-none text-white" />
                <button type="submit" disabled={status==='loading' || !(email.length > 5 && email.includes('@'))} className="px-6 py-3 bg-white text-black font-bold rounded-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed">
                  {status === 'loading' ? <Loader2 className="animate-spin text-black" /> : 'Unlock'}
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>`;

// 9. Floating Label
const getFloatingLabelJSX = (theme) => `
    <div className="w-full max-w-xl mx-auto p-4 sm:p-8 my-10 font-sans">
      <div className="bg-white rounded-[2rem] p-10 sm:p-14 shadow-xl border border-slate-100 flex flex-col items-center text-center">
        <h2 className="text-4xl font-black text-slate-900 mb-4 tracking-tight">Stay updated.</h2>
        <p className="text-slate-500 mb-10">We don't spam. Ever.</p>
        
        {status === 'success' ? (
          <div className="text-${theme.primary} font-bold text-xl flex items-center gap-2"><Check /> Subscribed</div>
        ) : (
          <form onSubmit={handleSubmit} className="w-full flex flex-col gap-8">
            <div className="relative w-full">
              <input 
                type="email" 
                id="floating-email"
                value={email} 
                onChange={e=>setEmail(e.target.value)} 
                required 
                className="peer w-full border-b-2 border-slate-200 bg-transparent py-3 text-lg text-slate-900 focus:outline-none focus:border-${theme.primary} placeholder-transparent transition-colors"
                placeholder="Email Address"
              />
              <label htmlFor="floating-email" className="absolute left-0 top-3 text-slate-400 text-lg transition-all peer-placeholder-shown:text-lg peer-placeholder-shown:top-3 peer-focus:-top-5 peer-focus:text-sm peer-focus:text-${theme.primary} peer-valid:-top-5 peer-valid:text-sm peer-valid:text-slate-400 font-medium">
                Email Address
              </label>
            </div>
            <button type="submit" disabled={status==='loading'} className="w-full py-4 bg-${theme.base} hover:bg-black text-white font-bold rounded-full shadow-lg transition-transform hover:-translate-y-1 flex justify-center">
              {status === 'loading' ? <Loader2 className="animate-spin" /> : 'Submit'}
            </button>
          </form>
        )}
      </div>
    </div>`;

// 10. Typewriter Placeholder
const getTypewriterJSX = (theme) => `
    <div className="w-full max-w-4xl mx-auto p-4 sm:p-8 my-10 font-sans">
      <div className="bg-${theme.base} rounded-[2rem] p-8 sm:p-16 flex flex-col lg:flex-row items-center gap-12 text-white shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-${theme.primary} rounded-full blur-[80px] opacity-30"></div>
        <div className="flex-1 relative z-10 text-center lg:text-left">
          <h2 className="text-4xl sm:text-5xl font-black mb-6">Drop your email.</h2>
          <p className="text-slate-300 text-lg">Watch your inbox light up with weekly insights.</p>
        </div>
        <div className="w-full max-w-md relative z-10">
          {status === 'success' ? (
            <div className="bg-white/10 border border-white/20 p-8 rounded-2xl flex flex-col items-center text-center backdrop-blur">
              <Check size={48} className="text-${theme.light} mb-4" />
              <h3 className="text-2xl font-bold text-white">Added to list</h3>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="relative">
                <input type="email" value={email} onChange={e=>setEmail(e.target.value)} required placeholder={typewriterText} className="w-full px-6 py-5 bg-white border-2 border-transparent focus:border-${theme.primary} rounded-2xl text-slate-900 font-bold text-lg outline-none transition-all placeholder:text-slate-400" />
                <span className="absolute right-5 top-5 text-${theme.primary} animate-pulse font-black text-xl">|</span>
              </div>
              <button type="submit" disabled={status==='loading'} className="w-full py-5 bg-${theme.primary} hover:bg-${theme.primaryHover} text-white font-black text-xl rounded-2xl shadow-xl transition-all hover:scale-[1.02] flex justify-center">
                {status === 'loading' ? <Loader2 className="animate-spin" /> : 'Subscribe'}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>`;

// 11. Immersive Glassmorphism
const getImmersiveJSX = (theme) => `
    <div className="w-full max-w-6xl mx-auto p-4 sm:p-8 my-10 font-sans">
      <div className="relative rounded-[3rem] overflow-hidden shadow-2xl p-10 sm:p-20 text-center bg-slate-900 min-h-[500px] flex items-center justify-center">
        <div className="absolute inset-0">
           <img src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2000&auto=format&fit=crop" className="w-full h-full object-cover opacity-40 mix-blend-overlay" alt="Abstract bg"/>
           <div className="absolute inset-0 bg-gradient-to-t from-${theme.base}/90 to-transparent"></div>
        </div>
        
        <div className="relative z-10 w-full max-w-2xl mx-auto">
          <h2 className="text-5xl sm:text-7xl font-black text-white mb-6 tracking-tight drop-shadow-xl">Discover More</h2>
          <p className="text-xl text-white/80 mb-12 drop-shadow-md font-medium">Join our exclusive mailing list today.</p>
          
          {status === 'success' ? (
            <div className="bg-white/20 backdrop-blur-xl border border-white/30 rounded-3xl p-8 animate-in zoom-in text-white shadow-[0_8px_32px_0_rgba(0,0,0,0.3)]">
              <Check size={64} className="mx-auto mb-4" />
              <p className="text-3xl font-black">Welcome!</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white/10 backdrop-blur-xl border border-white/20 p-3 rounded-[2rem] flex flex-col sm:flex-row gap-3 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)]">
              <div className="flex-1 relative flex items-center">
                <Mail className="absolute left-6 text-white/50" size={24} />
                <input type="email" value={email} onChange={e=>setEmail(e.target.value)} required placeholder="Your email..." className="w-full pl-16 pr-6 py-5 bg-transparent text-white placeholder:text-white/50 font-bold text-lg focus:outline-none" />
              </div>
              <button type="submit" disabled={status==='loading'} className="py-5 px-10 bg-white text-slate-900 hover:bg-${theme.light} font-black text-lg rounded-3xl transition-colors flex justify-center items-center shadow-lg">
                {status === 'loading' ? <Loader2 className="animate-spin text-slate-900" /> : 'Subscribe'}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>`;

// We'll create a mapping to distribute these archetypes
const archetypes = [
    { name: 'modal', fn: getModalJSX },
    { name: 'wizard', fn: getWizardJSX },
    { name: 'expand', fn: getExpandJSX },
    { name: 'flip', fn: getFlipJSX },
    { name: 'brutalist', fn: getBrutalistJSX },
    { name: 'neumorphic', fn: getNeumorphicJSX },
    { name: 'validator', fn: getValidatorJSX },
    { name: 'gamified', fn: getGamifiedJSX },
    { name: 'floating-label', fn: getFloatingLabelJSX },
    { name: 'typewriter', fn: getTypewriterJSX },
    { name: 'immersive', fn: getImmersiveJSX },
    // Reuse some with different variations
    { name: 'modal-alt', fn: getModalJSX },
    { name: 'wizard-alt', fn: getWizardJSX },
    { name: 'brutalist-alt', fn: getBrutalistJSX },
    { name: 'flip-alt', fn: getFlipJSX }
];

function generateComponent(idNum) {
    const idStr = idNum.toString().padStart(2, '0');
    const compName = `Newsletter${idStr}`;
    
    const theme = themes[idNum % themes.length];
    const arch = archetypes[idNum % archetypes.length];
    
    let imports = `import React, { useState, useEffect } from 'react';\nimport { Mail, Send, Bell, ArrowRight, Sparkles, Check, Loader2, X } from 'lucide-react';\n`;
    
    let extraState = '';
    if (arch.name === 'modal' || arch.name === 'modal-alt') {
        extraState += "const [isOpen, setIsOpen] = useState(false);\n";
    }
    if (arch.name === 'wizard' || arch.name === 'wizard-alt') {
        extraState += "const [step, setStep] = useState(1);\n";
    }
    if (arch.name === 'expand') {
        extraState += "const [isFocused, setIsFocused] = useState(false);\n";
    }
    if (arch.name === 'validator') {
        extraState += "const [error, setError] = useState(false);\n";
    }
    if (arch.name === 'typewriter') {
        extraState += `
  const [typewriterText, setTypewriterText] = useState('');
  const fullText = 'name@company.com';
  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      setTypewriterText(fullText.substring(0, i + 1));
      i++;
      if (i === fullText.length) clearInterval(timer);
    }, 150);
    return () => clearInterval(timer);
  }, []);
`;
    }

    const jsx = arch.fn(theme);

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

// Generate all 15
for (let i = 1; i <= 15; i++) {
    generateComponent(i);
}

// Generate index.ts
let indexContent = '';
for (let i = 1; i <= 15; i++) {
    const idStr = i.toString().padStart(2, '0');
    indexContent += `import Newsletter${idStr} from './newsletter-${idStr}/Newsletter${idStr}';\n`;
}

indexContent += '\nexport const newsletters = [\n';
for (let i = 1; i <= 15; i++) {
    const idStr = i.toString().padStart(2, '0');
    indexContent += `  { id: '${idStr}', name: 'Newsletter ${idStr}', Component: Newsletter${idStr} }${i === 15 ? '' : ','}\n`;
}
indexContent += '];\n';

fs.writeFileSync(path.join(targetDir, 'index.ts'), indexContent, 'utf8');

console.log('Successfully generated 15 Advanced Newsletters and index.ts!');
