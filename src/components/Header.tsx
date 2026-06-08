import { Tractor, Menu, X, LayoutDashboard, Calculator, Heart, Info, Scale } from 'lucide-react';
import { useState } from 'react';
import { ViewState } from '../types';
import { cn } from '../lib/utils';

interface HeaderProps {
  currentView: ViewState;
  onNavigate: (view: ViewState) => void;
}

export function Header({ currentView, onNavigate }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems: { label: string; view: ViewState }[] = [
    { label: 'Dashboard', view: 'home' },
    { label: 'Programs', view: 'tools' },
    { label: 'Favorites', view: 'favorites' },
  ];

  const handleNav = (view: ViewState) => {
    onNavigate(view);
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="h-16 border-b border-black flex items-center justify-between px-4 sm:px-8 bg-white sticky top-0 z-50">
      <div 
        className="flex items-center gap-3 cursor-pointer" 
        onClick={() => handleNav('home')}
      >
        <div className="w-8 h-8 bg-[#0369a1] flex items-center justify-center text-white font-bold text-lg">
          R
        </div>
        <div>
          <h1 className="text-xl font-black tracking-tighter leading-none flex items-center gap-1">
            USDA <span className="font-light text-slate-400">HUB</span>
          </h1>
          <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
            Part of ruralutilitycost.com
          </p>
        </div>
      </div>
      
      <nav className="hidden md:flex gap-8 items-center">
        {navItems.map((item) => (
          <button
            key={item.label}
            onClick={() => handleNav(item.view)}
            className={cn(
              "text-xs font-bold uppercase tracking-widest transition-colors min-h-[48px] flex items-center",
              currentView === item.view 
                ? "border-b-4 border-black text-black pt-1" 
                : "text-slate-400 hover:text-black border-b-4 border-transparent pt-1"
            )}
          >
            {item.label}
          </button>
        ))}
        <div className="w-10 h-10 rounded-full border border-black flex items-center justify-center ml-4 cursor-pointer hover:bg-black hover:text-white transition-all text-sm font-bold">
          JD
        </div>
      </nav>

      <div className="flex items-center md:hidden">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="text-black hover:text-slate-700 focus:outline-none"
        >
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden border-t-2 border-black border-b-2 bg-white absolute w-full left-0 top-16 z-50">
          <div className="flex flex-col">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNav(item.view)}
                className={cn(
                  "flex items-center w-full px-6 py-4 text-xs font-bold uppercase tracking-widest border-b border-slate-200",
                  currentView === item.view
                    ? "bg-slate-100 text-black"
                    : "text-slate-500 hover:text-black hover:bg-slate-50"
                )}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
