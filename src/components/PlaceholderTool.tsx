import { Tool } from '../types';
import { DisclaimerPanel } from './DisclaimerPanel';
import { Info } from 'lucide-react';

interface PlaceholderToolProps {
  tool: Tool;
}

export function PlaceholderTool({ tool }: PlaceholderToolProps) {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-4xl mx-auto">
      <div className="border-b-2 border-black pb-5">
        <h2 className="text-3xl font-black text-[#1a1a1a] tracking-tighter">{tool.title}</h2>
        <p className="mt-2 text-slate-600 font-bold uppercase tracking-widest text-xs">
          Module: {tool.category} Planning
        </p>
      </div>
      
      <div className="bg-white border-2 border-black p-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-center flex flex-col items-center justify-center min-h-[300px]">
        <Info className="w-12 h-12 text-[#1a1a1a] mb-4" />
        <h3 className="text-xl font-black text-[#1a1a1a] mb-2 tracking-tighter">Module Structure Initialized</h3>
        <p className="text-slate-600 max-w-md mx-auto leading-relaxed">
          The structural frame for <strong className="text-black">{tool.title}</strong> is prepared. 
          {tool.description}
        </p>
        <span className="mt-6 inline-flex items-center bg-[#e2e8f0] px-3 py-1 text-[10px] font-black text-[#1a1a1a] uppercase tracking-widest border border-black">
          Awaiting Parameter Definition
        </span>
      </div>

      <DisclaimerPanel />
    </div>
  );
}
