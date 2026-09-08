import React from 'react';

export default function Process22() {
  const status = 'In Progress'; // 'Pending', 'In Progress', 'Completed'
  
  const steps = [
    { title: 'Project Initiation', date: 'Aug 10', state: 'completed' },
    { title: 'Resource Allocation', date: 'Aug 12', state: 'completed' },
    { title: 'Development Phase', date: 'Aug 15 - Present', state: 'current' },
    { title: 'Quality Assurance', date: 'Upcoming', state: 'upcoming' },
    { title: 'Deployment', date: 'Upcoming', state: 'upcoming' }
  ];

  return (
    <div className="w-full max-w-4xl mx-auto p-10 font-sans">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">System Status</h2>
          <p className="text-gray-500 mt-1">Live tracking of ongoing operations.</p>
        </div>
        <div className="mt-4 md:mt-0 bg-blue-50 text-blue-700 px-4 py-2 rounded-full font-bold text-sm border border-blue-100 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-blue-500 animate-ping"></span>
          {status}
        </div>
      </div>

      <div className="relative">
        <div className="absolute top-0 bottom-0 left-[27px] w-1 bg-gray-100 rounded-full"></div>
        <div className="absolute top-0 h-[50%] left-[27px] w-1 bg-blue-500 rounded-full transition-all duration-1000"></div>

        <div className="space-y-8">
          {steps.map((step, idx) => (
            <div key={idx} className="flex items-start group">
              <div className="relative z-10 flex items-center justify-center w-14 h-14 shrink-0 bg-white">
                <div className={`w-6 h-6 rounded-full flex items-center justify-center border-[3px] ${
                  step.state === 'completed' ? 'bg-blue-500 border-blue-500' :
                  step.state === 'current' ? 'bg-white border-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]' :
                  'bg-white border-gray-200'
                }`}>
                  {step.state === 'current' && <div className="w-2 h-2 bg-blue-500 rounded-full"></div>}
                </div>
              </div>
              <div className="ml-6 pt-3 flex-1 flex flex-col md:flex-row md:items-center justify-between">
                <div>
                  <h3 className={`text-lg font-bold ${step.state === 'upcoming' ? 'text-gray-400' : 'text-gray-900'}`}>{step.title}</h3>
                  <p className="text-sm text-gray-500 md:hidden mt-1">{step.date}</p>
                </div>
                <div className="hidden md:block">
                  <span className={`text-sm font-semibold px-3 py-1 rounded-md ${
                    step.state === 'completed' ? 'bg-gray-100 text-gray-600' :
                    step.state === 'current' ? 'bg-blue-100 text-blue-700' :
                    'bg-transparent text-gray-400'
                  }`}>
                    {step.date}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
