const fs = require('fs');
const path = require('path');

const targetDir = path.join(__dirname, '..', 'components', 'newsletters');
if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
}

const themes = [
    { base: 'slate', dark: 'slate-900', light: 'slate-50', text: 'slate-600', primary: 'blue-600', primaryHover: 'blue-700' },
    { base: 'blue', dark: 'blue-900', light: 'blue-50', text: 'blue-600', primary: 'indigo-600', primaryHover: 'indigo-700' },
    { base: 'emerald', dark: 'emerald-900', light: 'emerald-50', text: 'emerald-600', primary: 'teal-600', primaryHover: 'teal-700' },
    { base: 'purple', dark: 'purple-900', light: 'purple-50', text: 'purple-600', primary: 'fuchsia-600', primaryHover: 'fuchsia-700' },
    { base: 'rose', dark: 'rose-900', light: 'rose-50', text: 'rose-600', primary: 'pink-600', primaryHover: 'pink-700' },
    { base: 'amber', dark: 'amber-900', light: 'amber-50', text: 'amber-600', primary: 'orange-600', primaryHover: 'orange-700' },
    { base: 'zinc', dark: 'zinc-900', light: 'zinc-50', text: 'zinc-400', primary: 'white', primaryHover: 'zinc-200', isDark: true },
    { base: 'neutral', dark: 'neutral-900', light: 'white', text: 'neutral-500', primary: 'black', primaryHover: 'neutral-800' }
];

const layouts = ['centered', 'split-left', 'split-right', 'immersive', 'minimal', 'glass'];
const iconsList = ['Mail', 'Send', 'Bell', 'ArrowRight', 'Sparkles', 'Zap', 'Inbox', 'Newspaper'];
const titles = [
    "Subscribe to our newsletter",
    "Get the latest updates",
    "Join 10,000+ members",
    "Unlock exclusive content",
    "Never miss an update",
    "Stay in the loop",
    "Level up your inbox",
    "Weekly insights delivered"
];
const descriptions = [
    "Get a weekly dose of design inspiration, front-end tips, and free resources.",
    "Join our community and receive the best articles directly in your inbox.",
    "No spam, just high-quality content curated for professionals.",
    "Be the first to know about new features, product updates, and special offers.",
    "A hand-picked selection of the best articles, tutorials, and news.",
    "Stay ahead of the curve with our expert analysis and industry trends."
];

function getRandom(arr, id) {
    // Deterministic random based on ID
    return arr[id % arr.length];
}

function generateComponent(idNum) {
    const idStr = idNum.toString().padStart(2, '0');
    const compName = `Newsletter${idStr}`;
    
    const theme = themes[idNum % themes.length];
    const layout = layouts[(idNum * 3) % layouts.length];
    const icon = iconsList[(idNum * 2) % iconsList.length];
    const title = titles[(idNum * 5) % titles.length];
    const desc = descriptions[(idNum * 7) % descriptions.length];
    
    let imports = `import React, { useState } from 'react';\nimport { ${icon}, Check, Loader2 } from 'lucide-react';\n`;
    
    let jsx = '';
    
    if (layout === 'centered' || layout === 'minimal') {
        const isMinimal = layout === 'minimal';
        jsx = `
    <div className="w-full max-w-4xl mx-auto p-4 sm:p-8 my-10 font-sans">
      <div className="\${isMinimal ? 'bg-transparent border border-'+theme.base+'-200' : 'bg-'+theme.light+' border border-'+theme.base+'-100 shadow-xl'} rounded-[2rem] p-8 sm:p-16 text-center max-w-3xl mx-auto">
        <div className="w-16 h-16 bg-${theme.primary}/10 text-${theme.primary} rounded-2xl flex items-center justify-center mx-auto mb-6">
          <${icon} size={32} />
        </div>
        <h2 className="text-3xl sm:text-5xl font-black text-${theme.base === 'zinc' && theme.isDark ? 'white' : 'slate-900'} tracking-tight mb-4">
          ${title}
        </h2>
        <p className="text-${theme.text} sm:text-lg mb-10 max-w-xl mx-auto">
          ${desc}
        </p>
        
        {status === 'success' ? (
          <div className="bg-green-50 text-green-700 border border-green-200 rounded-xl p-6 flex flex-col items-center animate-in fade-in zoom-in duration-500">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-3">
              <Check className="text-green-600" size={24} />
            </div>
            <p className="font-bold text-lg">You're all set!</p>
            <p className="text-sm opacity-80">Check your inbox for a confirmation email.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto relative flex flex-col sm:flex-row gap-3">
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address" 
              className="w-full px-6 py-4 bg-white border border-${theme.base}-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-${theme.primary} transition-all text-slate-900 placeholder:text-slate-400 font-medium"
              required
              disabled={status === 'loading'}
            />
            <button 
              type="submit" 
              disabled={status === 'loading'}
              className="w-full sm:w-auto px-8 py-4 bg-${theme.primary} hover:bg-${theme.primaryHover} text-${theme.primary === 'white' ? 'black' : 'white'} font-bold rounded-xl transition-all shadow-md shrink-0 flex items-center justify-center gap-2"
            >
              {status === 'loading' ? <Loader2 className="animate-spin" size={20} /> : 'Subscribe'}
            </button>
          </form>
        )}
      </div>
    </div>`;
    } else if (layout === 'split-left' || layout === 'split-right') {
        const orderImg = layout === 'split-left' ? 'order-1' : 'order-2';
        const orderText = layout === 'split-left' ? 'order-2' : 'order-1';
        jsx = `
    <div className="w-full max-w-6xl mx-auto p-4 sm:p-8 my-10 font-sans">
      <div className="bg-white rounded-[2.5rem] overflow-hidden shadow-2xl flex flex-col md:flex-row border border-${theme.base}-100">
        <div className="w-full md:w-1/2 bg-${theme.dark} relative min-h-[300px] md:min-h-full flex items-center justify-center p-8 overflow-hidden ${orderImg}">
          <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>
          <div className="relative z-10 w-48 h-48 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 shadow-2xl transform hover:scale-105 transition-transform duration-500">
             <${icon} size={80} className="text-white opacity-80" />
          </div>
        </div>
        <div className="w-full md:w-1/2 p-10 sm:p-16 lg:p-20 text-left flex flex-col justify-center ${orderText}">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight mb-6 leading-tight">
            ${title}
          </h2>
          <p className="text-slate-500 text-lg mb-10 leading-relaxed max-w-md">
            ${desc}
          </p>
          
          {status === 'success' ? (
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 flex items-center gap-4 animate-in slide-in-from-right duration-500">
              <div className="w-12 h-12 bg-${theme.primary}/20 rounded-full flex items-center justify-center shrink-0">
                <Check className="text-${theme.primary}" size={24} />
              </div>
              <div>
                <p className="font-bold text-slate-900">Subscription Confirmed</p>
                <p className="text-sm text-slate-500">We've sent you a welcome email.</p>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none text-slate-400">
                  <${icon} size={20} />
                </div>
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@company.com" 
                  className="w-full pl-14 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-${theme.primary} transition-all text-slate-900 font-medium"
                  required
                  disabled={status === 'loading'}
                />
              </div>
              <button 
                type="submit" 
                disabled={status === 'loading'}
                className="w-full py-4 bg-${theme.primary} hover:bg-${theme.primaryHover} text-${theme.primary === 'white' ? 'black' : 'white'} font-black rounded-xl transition-all shadow-lg flex items-center justify-center gap-2 text-lg"
              >
                {status === 'loading' ? <Loader2 className="animate-spin" size={24} /> : 'Get Started Now'}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>`;
    } else if (layout === 'immersive') {
        jsx = `
    <div className="w-full max-w-6xl mx-auto p-4 sm:p-8 my-10 font-sans">
      <div className="bg-gradient-to-br from-${theme.dark} to-${theme.base}-800 rounded-[2.5rem] overflow-hidden shadow-2xl relative p-8 sm:p-16 lg:p-24 text-center">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557683316-973673baf926?q=80&w=2000&auto=format&fit=crop')] opacity-10 bg-cover bg-center mix-blend-overlay"></div>
        
        <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-white px-4 py-1.5 rounded-full text-sm font-bold mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-${theme.light} opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-${theme.light}"></span>
            </span>
            Newsletter
          </div>
          
          <h2 className="text-4xl sm:text-6xl font-black text-white tracking-tight mb-6 leading-tight">
            ${title}
          </h2>
          <p className="text-${theme.base}-100 text-lg sm:text-xl mb-12 opacity-90 max-w-xl mx-auto">
            ${desc}
          </p>
          
          {status === 'success' ? (
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 flex flex-col items-center w-full animate-in zoom-in duration-500">
              <Check className="text-${theme.light} mb-4" size={48} />
              <p className="font-bold text-2xl text-white">Welcome aboard!</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="w-full bg-white/10 backdrop-blur-md border border-white/20 p-2 rounded-2xl flex flex-col sm:flex-row gap-2">
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email" 
                className="w-full flex-1 px-6 py-4 bg-transparent focus:outline-none text-white placeholder:text-white/60 font-medium text-lg"
                required
                disabled={status === 'loading'}
              />
              <button 
                type="submit" 
                disabled={status === 'loading'}
                className="w-full sm:w-auto px-8 py-4 bg-white text-${theme.dark} hover:bg-${theme.light} font-black rounded-xl transition-all shadow-lg flex items-center justify-center"
              >
                {status === 'loading' ? <Loader2 className="animate-spin text-${theme.dark}" size={24} /> : 'Subscribe'}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>`;
    } else if (layout === 'glass') {
        jsx = `
    <div className="w-full max-w-5xl mx-auto p-4 sm:p-8 my-10 font-sans">
      <div className="relative overflow-hidden rounded-[2.5rem] bg-${theme.light} border border-${theme.base}-200 p-8 sm:p-16">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-${theme.primary}/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-${theme.primaryHover}/20 rounded-full blur-3xl"></div>
        
        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12 justify-between">
          <div className="max-w-xl text-center lg:text-left">
            <h2 className="text-4xl sm:text-5xl font-black text-slate-900 mb-6 leading-tight">
              ${title}
            </h2>
            <p className="text-slate-600 text-lg mb-8">
              ${desc}
            </p>
            <div className="flex items-center gap-4 justify-center lg:justify-start text-sm font-bold text-slate-500">
               <span className="flex items-center gap-1"><Check size={16} className="text-${theme.primary}"/> No spam</span>
               <span className="flex items-center gap-1"><Check size={16} className="text-${theme.primary}"/> Unsubscribe anytime</span>
            </div>
          </div>
          
          <div className="w-full max-w-md">
            {status === 'success' ? (
              <div className="bg-white/60 backdrop-blur-xl border border-white rounded-3xl p-8 shadow-xl text-center animate-in fade-in slide-in-from-bottom-8 duration-500">
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-inner">
                  <Check size={40} />
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-2">Thank You!</h3>
                <p className="text-slate-600">Your subscription has been confirmed.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white/60 backdrop-blur-xl border border-white rounded-3xl p-8 shadow-xl flex flex-col gap-5">
                <div>
                  <label className="block text-sm font-bold text-slate-900 mb-2">Email Address</label>
                  <input 
                    type="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com" 
                    className="w-full px-5 py-4 bg-white/80 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-${theme.primary} transition-all text-slate-900"
                    required
                    disabled={status === 'loading'}
                  />
                </div>
                <button 
                  type="submit" 
                  disabled={status === 'loading'}
                  className="w-full py-4 bg-${theme.dark} hover:bg-slate-900 text-white font-black rounded-xl transition-all shadow-md flex items-center justify-center gap-2"
                >
                  {status === 'loading' ? <Loader2 className="animate-spin" size={20} /> : 'Join the Newsletter'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>`;
    }

    const componentContent = `\
"use client";
${imports}
export default function ${compName}() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

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

for (let i = 1; i <= 60; i++) {
    generateComponent(i);
}

// Generate index.ts
let indexContent = '';
for (let i = 1; i <= 60; i++) {
    const idStr = i.toString().padStart(2, '0');
    indexContent += `import Newsletter${idStr} from './newsletter-${idStr}/Newsletter${idStr}';\n`;
}

indexContent += '\nexport const newsletters = [\n';
for (let i = 1; i <= 60; i++) {
    const idStr = i.toString().padStart(2, '0');
    indexContent += `  { id: '${idStr}', name: 'Newsletter ${idStr}', Component: Newsletter${idStr} }${i === 60 ? '' : ','}\n`;
}
indexContent += '];\n';

fs.writeFileSync(path.join(targetDir, 'index.ts'), indexContent, 'utf8');

console.log('Successfully generated 60 Newsletters and index.ts!');
