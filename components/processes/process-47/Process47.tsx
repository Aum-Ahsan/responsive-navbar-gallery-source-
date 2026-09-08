import React from 'react';

export default function Process47() {
  const steps = [
    { title: 'Step One', desc: 'Initialize the sequence' },
    { title: 'Step Two', desc: 'Compile the assets' },
    { title: 'Step Three', desc: 'Build the framework' },
    { title: 'Step Four', desc: 'Execute the launch' }
  ];

  return (
    <div className="w-full max-w-4xl mx-auto p-8 font-sans my-10">
      <h2 className="text-3xl font-bold text-teal-900 mb-16 text-center">Diagonal Ascend</h2>

      <div className="relative h-[600px] md:h-[500px]">
        {/* Diagonal Line */}
        <div className="absolute left-1/2 md:left-[20%] top-0 bottom-0 w-1 bg-teal-100 transform -skew-x-12"></div>

        {steps.map((step, idx) => {
          // Calculate diagonal position manually
          const leftOffset = 20 + (idx * 15);
          const topOffset = idx * 25;

          return (
            <div 
              key={idx} 
              className="absolute flex items-center gap-6 group hover:z-10"
              style={{ left: `${leftOffset}%`, top: `${topOffset}%` }}
            >
              <div className="w-16 h-16 rounded-2xl bg-teal-500 text-white flex items-center justify-center shadow-xl transform rotate-12 group-hover:rotate-0 transition-transform cursor-default">
                <span className="text-2xl font-black transform -rotate-12 group-hover:rotate-0 transition-transform">0{idx + 1}</span>
              </div>
              <div className="bg-white p-4 rounded-xl shadow-lg border border-teal-50 min-w-[200px] opacity-80 group-hover:opacity-100 group-hover:-translate-y-2 transition-all cursor-default">
                <h3 className="font-bold text-teal-900">{step.title}</h3>
                <p className="text-sm text-teal-600 mt-1">{step.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
