import { Heart, ChevronRight } from 'lucide-react';
import { Tool } from '../types';
import { cn } from '../lib/utils';

interface ToolCardProps {
  tool: Tool;
  isFavorite: boolean;
  onToggleFavorite: (e: React.MouseEvent, id: string) => void;
  onSelect: (tool: Tool) => void;
}

export function ToolCard({ tool, isFavorite, onToggleFavorite, onSelect }: ToolCardProps) {
  return (
    <div 
      onClick={() => onSelect(tool)}
      className="group bg-white border-2 border-black p-6 flex flex-col hover:bg-slate-50 transition-colors relative cursor-pointer min-h-[250px]"
    >
      <div className="flex justify-between items-start mb-4">
        <span className="px-2 py-1 bg-[#15803d] text-white text-[10px] font-bold uppercase tracking-widest">
          {tool.category}
        </span>
        <button
          onClick={(e) => onToggleFavorite(e, tool.id)}
          className="transition-colors focus:outline-none"
          aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
        >
          <Heart 
            className={cn(
              "w-5 h-5", 
              isFavorite 
                ? "text-red-500 fill-red-500 hover:text-slate-400 hover:fill-transparent" 
                : "text-slate-300 hover:text-red-500"
            )} 
          />
        </button>
      </div>
      
      <h4 className="text-xl font-black mb-2 text-[#1a1a1a]">
        {tool.title}
      </h4>
      
      <p className="text-xs text-slate-500 mb-6 leading-relaxed">
        {tool.description}
      </p>
      
      <div className="mt-auto flex items-end justify-between gap-4">
        <div>
          <p className="text-[10px] uppercase font-bold text-slate-400 tracking-widest">Primary Outcome</p>
          <p className="text-base font-bold text-[#1a1a1a]">{tool.primaryOutcome}</p>
        </div>
        <button 
          className="flex-shrink-0 w-10 h-10 border-2 border-black flex items-center justify-center font-black group-hover:bg-black group-hover:text-white transition-all text-[#1a1a1a]"
          aria-hidden="true"
        >
          →
        </button>
      </div>
    </div>
  );
}
