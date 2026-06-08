import { ViewState } from '../types';
import { trackEvent } from '../lib/analytics';

interface NotFoundViewProps {
  onNavigate: (view: ViewState) => void;
}

export function NotFoundView({ onNavigate }: NotFoundViewProps) {
  return (
    <div className="max-w-3xl mx-auto space-y-8 animate-in fade-in duration-500 py-12 text-center flex flex-col items-center justify-center min-h-[50vh]">
      <h1 className="text-8xl font-black text-[#1a1a1a] tracking-tighter">404</h1>
      <p className="mt-4 text-slate-600 font-bold uppercase tracking-widest text-sm">
        Page Not Found
      </p>
      <p className="mt-4 text-slate-600 max-w-md mx-auto leading-relaxed">
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>
      <button 
        onClick={() => {
          trackEvent('click', { element: 'back_to_home_404' });
          onNavigate('home');
        }}
        className="mt-8 px-8 py-4 min-h-[48px] border-2 border-black font-bold text-xs uppercase tracking-widest bg-white text-black hover:bg-black hover:text-white transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:shadow-none active:translate-x-[2px] active:translate-y-[2px] inline-flex items-center justify-center"
      >
        Return to Dashboard
      </button>
    </div>
  );
}
