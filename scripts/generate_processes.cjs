const fs = require('fs');
const path = require('path');

const processesDir = path.join(__dirname, '..', 'components', 'processes');

if (!fs.existsSync(processesDir)) {
    fs.mkdirSync(processesDir, { recursive: true });
}

// Data for 50 processes
const processes = [
    { id: '01', name: 'Horizontal Step Timeline', type: 'timeline', dir: 'row', color: 'blue' },
    { id: '02', name: 'Vertical Step Timeline', type: 'timeline', dir: 'col', color: 'emerald' },
    { id: '03', name: 'Alternating Zig-Zag Timeline', type: 'zigzag', color: 'purple' },
    { id: '04', name: 'Process Cards', type: 'cards', color: 'orange' },
    { id: '05', name: 'Connected Card Flow', type: 'cards-connected', color: 'rose' },
    { id: '06', name: 'Accordion Process', type: 'accordion', color: 'indigo' },
    { id: '07', name: 'Tab-Based Process', type: 'tabs', color: 'cyan' },
    { id: '08', name: 'Stepper Wizard', type: 'wizard', color: 'teal' },
    { id: '09', name: 'Progress-Bar Process', type: 'progress', color: 'blue' },
    { id: '10', name: 'Circular Process', type: 'circle', color: 'violet' },
    { id: '11', name: 'Cycle / Loop Process', type: 'loop', color: 'green' },
    { id: '12', name: 'S-Curve Process', type: 'scurve', color: 'pink' },
    { id: '13', name: 'Roadmap Process', type: 'roadmap', color: 'amber' },
    { id: '14', name: 'Scroll-Reveal Process', type: 'scroll-reveal', color: 'slate' },
    { id: '15', name: 'Sticky Scroll Process', type: 'sticky-scroll', color: 'zinc' },
    { id: '16', name: 'Before → During → After', type: 'three-phase', color: 'sky' },
    { id: '17', name: 'Multi-Phase Process', type: 'multi-phase', color: 'fuchsia' },
    { id: '18', name: 'Branching Decision Process', type: 'branching', color: 'lime' },
    { id: '19', name: 'Flowchart Process', type: 'flowchart', color: 'stone' },
    { id: '20', name: 'Conditional Process', type: 'conditional', color: 'red' },
    { id: '21', name: 'Checklist Process', type: 'checklist', color: 'emerald' },
    { id: '22', name: 'Status Tracker', type: 'status', color: 'blue' },
    { id: '23', name: 'Order Tracking Process', type: 'tracking', color: 'orange' },
    { id: '24', name: 'Application Tracker', type: 'tracking-alt', color: 'purple' },
    { id: '25', name: 'Booking Process', type: 'wizard-alt', color: 'cyan' },
    { id: '26', name: 'Checkout Process', type: 'wizard', color: 'slate' },
    { id: '27', name: 'Onboarding Process', type: 'tabs-alt', color: 'indigo' },
    { id: '28', name: 'Form-Step Process', type: 'form-step', color: 'violet' },
    { id: '29', name: 'Upload Process', type: 'upload', color: 'sky' },
    { id: '30', name: 'Verification Process', type: 'verification', color: 'emerald' },
    { id: '31', name: 'Comparison Process', type: 'comparison', color: 'rose' },
    { id: '32', name: 'Split-Screen Process', type: 'split', color: 'zinc' },
    { id: '33', name: 'Image-Led Process', type: 'image-led', color: 'stone' },
    { id: '34', name: 'Video Process', type: 'video', color: 'red' },
    { id: '35', name: 'Icon Journey', type: 'icon-journey', color: 'amber' },
    { id: '36', name: 'Number Counter Process', type: 'numbers', color: 'slate' },
    { id: '37', name: 'Hover-Reveal Process', type: 'hover', color: 'fuchsia' },
    { id: '38', name: 'Carousel Process', type: 'carousel', color: 'blue' },
    { id: '39', name: 'Swipe Process', type: 'swipe', color: 'teal' },
    { id: '40', name: 'Expandable Card Process', type: 'expandable', color: 'indigo' },
    { id: '41', name: 'Stacked Card Process', type: 'stacked', color: 'purple' },
    { id: '42', name: 'Kanban Workflow', type: 'kanban', color: 'slate' },
    { id: '43', name: 'Pipeline Process', type: 'pipeline', color: 'cyan' },
    { id: '44', name: 'Funnel Process', type: 'funnel', color: 'orange' },
    { id: '45', name: 'Pyramid Process', type: 'pyramid', color: 'amber' },
    { id: '46', name: 'Radial Hub Process', type: 'hub', color: 'rose' },
    { id: '47', name: 'Ecosystem Process', type: 'ecosystem', color: 'emerald' },
    { id: '48', name: 'Parallel Process', type: 'parallel', color: 'blue' },
    { id: '49', name: 'Merge Process', type: 'merge', color: 'violet' },
    { id: '50', name: 'Interactive Process Simulator', type: 'simulator', color: 'indigo' }
];

const getColors = (colorName) => {
    const map = {
        blue: { bg: 'bg-blue-50', text: 'text-blue-600', border: 'border-blue-200', activeBg: 'bg-blue-600', activeText: 'text-white' },
        emerald: { bg: 'bg-emerald-50', text: 'text-emerald-600', border: 'border-emerald-200', activeBg: 'bg-emerald-600', activeText: 'text-white' },
        purple: { bg: 'bg-purple-50', text: 'text-purple-600', border: 'border-purple-200', activeBg: 'bg-purple-600', activeText: 'text-white' },
        orange: { bg: 'bg-orange-50', text: 'text-orange-600', border: 'border-orange-200', activeBg: 'bg-orange-600', activeText: 'text-white' },
        rose: { bg: 'bg-rose-50', text: 'text-rose-600', border: 'border-rose-200', activeBg: 'bg-rose-600', activeText: 'text-white' },
        indigo: { bg: 'bg-indigo-50', text: 'text-indigo-600', border: 'border-indigo-200', activeBg: 'bg-indigo-600', activeText: 'text-white' },
        cyan: { bg: 'bg-cyan-50', text: 'text-cyan-600', border: 'border-cyan-200', activeBg: 'bg-cyan-600', activeText: 'text-white' },
        teal: { bg: 'bg-teal-50', text: 'text-teal-600', border: 'border-teal-200', activeBg: 'bg-teal-600', activeText: 'text-white' },
        violet: { bg: 'bg-violet-50', text: 'text-violet-600', border: 'border-violet-200', activeBg: 'bg-violet-600', activeText: 'text-white' },
        green: { bg: 'bg-green-50', text: 'text-green-600', border: 'border-green-200', activeBg: 'bg-green-600', activeText: 'text-white' },
        pink: { bg: 'bg-pink-50', text: 'text-pink-600', border: 'border-pink-200', activeBg: 'bg-pink-600', activeText: 'text-white' },
        amber: { bg: 'bg-amber-50', text: 'text-amber-600', border: 'border-amber-200', activeBg: 'bg-amber-600', activeText: 'text-white' },
        slate: { bg: 'bg-slate-50', text: 'text-slate-600', border: 'border-slate-200', activeBg: 'bg-slate-800', activeText: 'text-white' },
        zinc: { bg: 'bg-zinc-50', text: 'text-zinc-600', border: 'border-zinc-200', activeBg: 'bg-zinc-800', activeText: 'text-white' },
        sky: { bg: 'bg-sky-50', text: 'text-sky-600', border: 'border-sky-200', activeBg: 'bg-sky-600', activeText: 'text-white' },
        fuchsia: { bg: 'bg-fuchsia-50', text: 'text-fuchsia-600', border: 'border-fuchsia-200', activeBg: 'bg-fuchsia-600', activeText: 'text-white' },
        lime: { bg: 'bg-lime-50', text: 'text-lime-700', border: 'border-lime-200', activeBg: 'bg-lime-500', activeText: 'text-white' },
        stone: { bg: 'bg-stone-50', text: 'text-stone-600', border: 'border-stone-200', activeBg: 'bg-stone-700', activeText: 'text-white' },
        red: { bg: 'bg-red-50', text: 'text-red-600', border: 'border-red-200', activeBg: 'bg-red-600', activeText: 'text-white' },
    };
    return map[colorName] || map['blue'];
};

function generateComponent(proc) {
    const { id, name, type, color } = proc;
    const colors = getColors(color);
    const compName = `Process${id}`;
    
    let reactImports = `import React, { useState } from 'react';\nimport { CheckCircle2, ArrowRight, Zap, Target, Star, ChevronDown, ChevronRight } from 'lucide-react';`;
    
    let content = '';

    if (['timeline', 'zigzag', 'progress', 'status', 'tracking'].includes(type)) {
        const isCol = proc.dir === 'col' || type === 'zigzag';
        content = `
            <div className="${colors.bg} rounded-3xl p-8 md:p-12 w-full max-w-5xl mx-auto font-sans">
                <div className="mb-10 text-center">
                    <h2 className="text-3xl font-bold text-gray-900">${name}</h2>
                    <p className="mt-4 text-gray-600 max-w-2xl mx-auto">Track our step-by-step methodology from conception to delivery.</p>
                </div>
                <div className="relative flex ${isCol ? 'flex-col space-y-8' : 'flex-col md:flex-row md:space-x-4 md:space-y-0'} items-center md:items-start justify-between">
                    {steps.map((step, index) => (
                        <div key={index} className="${isCol ? 'flex items-start w-full relative' : 'flex flex-col items-center text-center w-full relative'} z-10 group">
                            ${isCol ? `{index !== steps.length - 1 && <div className="absolute left-6 top-14 bottom-[-2rem] w-0.5 ${colors.bg} bg-opacity-50 group-hover:${colors.activeBg} transition-colors duration-500 z-[-1]"></div>}` : ''}
                            ${!isCol ? `{index !== steps.length - 1 && <div className="hidden md:block absolute top-6 left-1/2 w-full h-0.5 ${colors.bg} bg-opacity-50 group-hover:${colors.activeBg} transition-colors duration-500 z-[-1]"></div>}` : ''}
                            
                            <div className="${isCol ? 'mr-6' : 'mb-6'}">
                                <div className={\`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg shadow-lg transition-all duration-300 \${index === 0 ? '${colors.activeBg} ${colors.activeText} scale-110' : 'bg-white text-gray-500 hover:${colors.activeBg} hover:${colors.activeText}'}\`}>
                                    {index + 1}
                                </div>
                            </div>
                            <div className="${isCol ? 'flex-1 pt-2' : ''} bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{step.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        `;
    } else if (['cards', 'cards-connected', 'kanban', 'parallel', 'expandable', 'stacked'].includes(type)) {
        content = `
            <div className="${colors.bg} rounded-3xl p-8 md:p-12 w-full max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">${name}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
                    {steps.map((step, index) => (
                        <div key={index} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-gray-100 group relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                <Target size={64} className="${colors.text}" />
                            </div>
                            <div className="w-10 h-10 rounded-full ${colors.bg} ${colors.text} flex items-center justify-center font-bold mb-6 group-hover:${colors.activeBg} group-hover:${colors.activeText} transition-colors">
                                0{index + 1}
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-3 relative z-10">{step.title}</h3>
                            <p className="text-gray-600 text-sm leading-relaxed relative z-10">{step.desc}</p>
                            <div className="mt-6 pt-6 border-t border-gray-50 flex items-center text-sm font-semibold ${colors.text} group-hover:translate-x-2 transition-transform cursor-pointer">
                                Learn more <ArrowRight size={16} className="ml-2" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        `;
    } else if (['accordion', 'tabs', 'tabs-alt', 'conditional', 'branching', 'simulator'].includes(type)) {
        content = `
            <div className="${colors.bg} rounded-3xl p-8 md:p-12 w-full max-w-4xl mx-auto flex flex-col md:flex-row gap-8">
                <div className="md:w-1/3">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">${name}</h2>
                    <p className="text-gray-600 mb-8">Select a phase to view its detailed requirements and expected outcomes.</p>
                    <div className="flex flex-col space-y-3">
                        {steps.map((step, index) => (
                            <button 
                                key={index}
                                onClick={() => setActiveStep(index)}
                                className={\`text-left px-6 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-between \${activeStep === index ? '${colors.activeBg} ${colors.activeText} shadow-md' : 'bg-white text-gray-600 hover:bg-gray-50'}\`}
                            >
                                <span className="flex items-center">
                                    <span className={\`mr-3 text-sm \${activeStep === index ? 'opacity-80' : '${colors.text}'}\`}>0{index + 1}</span>
                                    {step.title}
                                </span>
                                {activeStep === index ? <ChevronDown size={18} /> : <ChevronRight size={18} />}
                            </button>
                        ))}
                    </div>
                </div>
                <div className="md:w-2/3 bg-white rounded-2xl shadow-lg p-8 md:p-10 border border-gray-100 flex flex-col justify-center min-h-[300px]">
                    <div className="inline-block px-4 py-1 rounded-full ${colors.bg} ${colors.text} text-sm font-bold mb-6 w-fit uppercase tracking-wider">
                        Phase 0{activeStep + 1}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{steps[activeStep].title}</h3>
                    <p className="text-gray-600 text-lg leading-relaxed mb-8">{steps[activeStep].desc}</p>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="p-4 rounded-xl bg-gray-50">
                            <div className="font-semibold text-gray-900 flex items-center"><CheckCircle2 size={16} className="mr-2 ${colors.text}" /> Outputs</div>
                            <ul className="mt-2 text-sm text-gray-600 space-y-1 ml-6 list-disc">
                                <li>Documentation</li>
                                <li>Design Assets</li>
                            </ul>
                        </div>
                        <div className="p-4 rounded-xl bg-gray-50">
                            <div className="font-semibold text-gray-900 flex items-center"><Zap size={16} className="mr-2 text-amber-500" /> Key Metric</div>
                            <div className="mt-2 text-sm text-gray-600 ml-6">Sign-off from stakeholders</div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    } else {
        content = `
            <div className="${colors.bg} rounded-3xl p-8 md:p-16 w-full max-w-5xl mx-auto overflow-hidden relative">
                <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full ${colors.activeBg} opacity-10 blur-3xl"></div>
                <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full ${colors.activeBg} opacity-10 blur-3xl"></div>
                
                <div className="relative z-10 text-center mb-16">
                    <span className="${colors.text} font-bold tracking-widest uppercase text-sm mb-2 block">Workflow</span>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">${name}</h2>
                </div>
                
                <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {steps.map((step, index) => (
                        <div key={index} className="relative group">
                            {index !== steps.length - 1 && (
                                <div className="hidden lg:block absolute top-8 left-1/2 w-full h-px border-t-2 border-dashed ${colors.border} z-0"></div>
                            )}
                            <div className="relative z-10 flex flex-col items-center">
                                <div className={\`w-16 h-16 rounded-2xl flex items-center justify-center font-bold text-xl mb-6 shadow-xl transition-transform duration-300 group-hover:-translate-y-2 \${index === 0 ? '${colors.activeBg} ${colors.activeText}' : 'bg-white ${colors.text}'}\`}>
                                    {index + 1}
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">{step.title}</h3>
                                <p className="text-gray-600 text-center text-sm leading-relaxed">{step.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        `;
    }

    return `
${reactImports}

export default function ${compName}() {
    const [activeStep, setActiveStep] = useState(0);

    const steps = [
        { title: 'Discovery Phase', desc: 'We start by understanding your core requirements and business goals.' },
        { title: 'Design & Planning', desc: 'Creating wireframes, user flows, and technical architecture.' },
        { title: 'Development', desc: 'Building the solution using modern, scalable technologies.' },
        { title: 'Launch & Iterate', desc: 'Deploying to production and gathering user feedback.' }
    ];

    return (
        <section className="w-full py-12">
            ${content}
        </section>
    );
}
    `;
}

// Generate the 50 files
processes.forEach((proc) => {
    const folder = path.join(processesDir, `process-${proc.id}`);
    if (!fs.existsSync(folder)) {
        fs.mkdirSync(folder, { recursive: true });
    }
    const filePath = path.join(folder, `Process${proc.id}.tsx`);
    fs.writeFileSync(filePath, generateComponent(proc).trim() + '\n');
    console.log(`Generated Process${proc.id}`);
});

// Generate index.ts
let indexContent = processes.map(p => `import Process${p.id} from './process-${p.id}/Process${p.id}';`).join('\n') + '\n\n';
indexContent += `export const processes = [\n`;
indexContent += processes.map(p => `  { id: '${p.id}', name: '${p.name}', Component: Process${p.id} }`).join(',\n');
indexContent += `\n];\n`;

fs.writeFileSync(path.join(processesDir, 'index.ts'), indexContent);
console.log('Generated index.ts');
