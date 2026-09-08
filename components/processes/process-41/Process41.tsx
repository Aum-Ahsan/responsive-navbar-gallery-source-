import React from 'react';

export default function Process41() {
  const steps = [
    { title: 'Idea', tooltip: 'Brainstorming phase where all concepts are gathered on the board.' },
    { title: 'Draft', tooltip: 'Initial sketches and wireframes are created for review.' },
    { title: 'Review', tooltip: 'Stakeholders provide feedback on the initial drafts.' },
    { title: 'Refine', tooltip: 'Adjustments are made based on stakeholder feedback.' },
    { title: 'Final', tooltip: 'The polished product is ready for deployment.' }
  ];

  return (
    <div className="w-full max-w-4xl mx-auto p-12 font-sans bg-gray-50 rounded-[2rem] my-10 border border-gray-200">
      <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">Hover Tooltip Process</h2>

      <div className="relative flex justify-between items-center px-4">
        {/* Connector Line */}
        <div className="absolute top-1/2 left-8 right-8 h-1 bg-gray-300 -translate-y-1/2 z-0"></div>

        {steps.map((step, idx) => (
          <div key={idx} className="relative z-10 group cursor-pointer">
            {/* Node */}
            <div className="w-12 h-12 bg-white rounded-full border-4 border-gray-300 flex items-center justify-center font-bold text-gray-500 group-hover:border-indigo-500 group-hover:text-indigo-600 transition-colors shadow-sm">
              {idx + 1}
            </div>
            
            {/* Label below */}
            <div className="absolute top-14 left-1/2 -translate-x-1/2 font-semibold text-gray-600 group-hover:text-indigo-600 transition-colors mt-2 text-sm">
              {step.title}
            </div>

            {/* Tooltip above */}
            <div className="absolute bottom-16 left-1/2 -translate-x-1/2 w-48 bg-gray-900 text-white text-xs p-3 rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 shadow-xl z-20 translate-y-2 group-hover:translate-y-0 pointer-events-none text-center">
              {step.tooltip}
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[6px] border-t-gray-900"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
