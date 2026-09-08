import React from 'react';

export default function Process02() {
  const steps = [
    { title: 'Application Received', date: 'Oct 12, 10:00 AM', status: 'completed', desc: 'Your application has been received securely.' },
    { title: 'Under Review', date: 'Oct 14, 2:30 PM', status: 'completed', desc: 'Our team is currently reviewing your documents.' },
    { title: 'Interview Scheduled', date: 'Oct 18, 1:00 PM', status: 'active', desc: 'Please check your email for the meeting link.' },
    { title: 'Final Decision', date: 'Pending', status: 'upcoming', desc: 'Awaiting final approval from the board.' }
  ];

  return (
    <div className="w-full max-w-2xl mx-auto p-8 font-sans">
      <h2 className="text-3xl font-bold text-gray-900 mb-10">Vertical Status Tracker</h2>
      
      <div className="relative border-l-2 border-gray-200 ml-6">
        {steps.map((step, index) => (
          <div key={index} className="mb-10 ml-10 relative group">
            <span className={`absolute -left-[49px] flex items-center justify-center w-6 h-6 rounded-full ring-8 ring-white transition-all duration-300 ${
              step.status === 'completed' ? 'bg-emerald-500' : 
              step.status === 'active' ? 'bg-blue-600 animate-pulse ring-blue-50' : 'bg-gray-200'
            }`}>
              {step.status === 'completed' && <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>}
              {step.status === 'active' && <span className="w-2 h-2 bg-white rounded-full"></span>}
            </span>
            
            <div className={`p-5 rounded-xl border transition-all duration-300 ${
              step.status === 'active' ? 'bg-blue-50 border-blue-100 shadow-md transform translate-x-2' : 
              'bg-white border-gray-100 shadow-sm hover:shadow-md'
            }`}>
              <div className="flex justify-between items-center mb-2">
                <h3 className={`text-lg font-bold ${step.status === 'upcoming' ? 'text-gray-400' : 'text-gray-900'}`}>{step.title}</h3>
                <span className="text-xs font-semibold px-2 py-1 bg-gray-100 text-gray-600 rounded-md">{step.date}</span>
              </div>
              <p className={`text-sm ${step.status === 'upcoming' ? 'text-gray-400' : 'text-gray-600'}`}>{step.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
