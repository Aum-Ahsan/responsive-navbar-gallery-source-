"use client";
import React from 'react';
import { GitCommit, GitPullRequest, GitMerge, CheckCircle, Terminal } from 'lucide-react';

export default function Process54() {
  const pipeline = [
    { name: 'Commit', hash: 'a1b2c3d', status: 'success', time: '12s', icon: GitCommit },
    { name: 'Build', hash: 'Docker image', status: 'success', time: '2m 14s', icon: Terminal },
    { name: 'Test', hash: '842/842 passed', status: 'success', time: '4m 05s', icon: CheckCircle },
    { name: 'Review', hash: 'PR #1024', status: 'running', time: 'In progress', icon: GitPullRequest },
    { name: 'Deploy', hash: 'Production', status: 'pending', time: '--', icon: GitMerge },
  ];

  return (
    <div className="w-full max-w-5xl mx-auto py-16 px-4 font-mono">
      <div className="bg-[#0D1117] border border-[#30363D] rounded-xl overflow-hidden shadow-2xl">
        {/* Terminal Header */}
        <div className="bg-[#161B22] border-b border-[#30363D] px-4 py-3 flex items-center justify-between">
          <div className="flex space-x-2">
            <div className="w-3 h-3 rounded-full bg-[#FF5F56]"></div>
            <div className="w-3 h-3 rounded-full bg-[#FFBD2E]"></div>
            <div className="w-3 h-3 rounded-full bg-[#27C93F]"></div>
          </div>
          <div className="text-[#8B949E] text-xs font-semibold tracking-wide">CI/CD PIPELINE</div>
          <div className="w-10"></div>
        </div>

        <div className="p-6 sm:p-10">
          <div className="flex flex-col space-y-6">
            {pipeline.map((job, idx) => {
              const Icon = job.icon;
              const isSuccess = job.status === 'success';
              const isRunning = job.status === 'running';
              const isPending = job.status === 'pending';

              return (
                <div key={idx} className="flex flex-col sm:flex-row sm:items-center relative group">
                  {/* Connecting Line */}
                  {idx !== pipeline.length - 1 && (
                    <div className="hidden sm:block absolute left-[1.15rem] top-10 w-0.5 h-10 bg-[#30363D]" />
                  )}

                  <div className="flex items-center w-full sm:w-auto z-10 bg-[#0D1117]">
                    <div className={`w-10 h-10 rounded-full border-2 flex items-center justify-center shrink-0
                      ${isSuccess ? 'border-[#238636] text-[#2EA043] bg-[#238636]/10' : 
                        isRunning ? 'border-[#D29922] text-[#E3B341] bg-[#D29922]/10 animate-pulse' : 
                        'border-[#30363D] text-[#8B949E] bg-[#161B22]'}`}>
                      <Icon size={18} />
                    </div>
                    
                    <div className="ml-4 w-40">
                      <div className={`text-sm font-bold ${isSuccess ? 'text-[#C9D1D9]' : isRunning ? 'text-[#E3B341]' : 'text-[#8B949E]'}`}>
                        {job.name}
                      </div>
                      <div className="text-xs text-[#8B949E] mt-1">{job.time}</div>
                    </div>
                  </div>

                  {/* Connecting line for mobile */}
                  {idx !== pipeline.length - 1 && (
                    <div className="sm:hidden w-0.5 h-6 bg-[#30363D] ml-5 my-1" />
                  )}

                  <div className="flex-1 mt-3 sm:mt-0 ml-14 sm:ml-6 flex items-center bg-[#161B22] border border-[#30363D] rounded-lg px-4 py-3 sm:py-2">
                    <span className={`text-xs ${isSuccess ? 'text-[#2EA043]' : isRunning ? 'text-[#E3B341]' : 'text-[#8B949E]'}`}>
                      $ {job.hash}
                    </span>
                    <div className="flex-1 border-b border-dashed border-[#30363D] mx-4 opacity-50 hidden sm:block" />
                    <span className={`text-xs ml-auto uppercase font-bold tracking-wider ${
                      isSuccess ? 'text-[#2EA043]' : 
                      isRunning ? 'text-[#E3B341]' : 
                      'text-[#8B949E]'
                    }`}>
                      {job.status}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
