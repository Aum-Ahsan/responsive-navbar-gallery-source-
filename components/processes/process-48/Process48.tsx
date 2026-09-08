import React, { useState, useEffect } from 'react';

export default function Process48() {
  const [lines, setLines] = useState<string[]>([]);
  
  const script = [
    '> npm run build',
    '✔ Validating package.json...',
    '✔ Resolving dependencies...',
    '⚡ Compiling React components...',
    '📦 Bundling assets...',
    '✨ Build successful in 2.4s!',
    '> npm run deploy',
    '🚀 Uploading to edge network...',
    '🌍 Live at https://example.com'
  ];

  useEffect(() => {
    let currentLine = 0;
    setLines([]);
    const interval = setInterval(() => {
      if (currentLine < script.length) {
        setLines(prev => {
          const nextLine = script[currentLine];
          return nextLine ? [...prev, nextLine] : prev;
        });
        currentLine++;
      } else {
        clearInterval(interval);
      }
    }, 800);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-w-3xl mx-auto p-6 font-mono my-10">
      <h2 className="text-2xl font-bold text-gray-900 mb-6 font-sans">Execution Sequence</h2>

      <div className="bg-[#1e1e1e] rounded-xl overflow-hidden shadow-2xl">
        {/* Terminal Header */}
        <div className="bg-[#323233] px-4 py-3 flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
          <div className="ml-4 text-xs text-gray-400">bash — root@server:~</div>
        </div>

        {/* Terminal Body */}
        <div className="p-6 text-green-400 min-h-[300px]">
          {lines.map((line, idx) => (
            <div key={idx} className={`mb-2 ${line?.startsWith('>') ? 'text-white font-bold mt-4' : ''} ${line?.includes('Error') ? 'text-red-500' : ''}`}>
              {line}
            </div>
          ))}
          {lines.length < script.length && (
            <div className="w-3 h-5 bg-green-400 animate-pulse mt-2 inline-block"></div>
          )}
        </div>
      </div>
    </div>
  );
}
