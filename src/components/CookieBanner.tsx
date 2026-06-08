import { useState, useEffect } from 'react';
import { trackEvent } from '../lib/analytics';

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const hasConsented = localStorage.getItem('cookie-consent');
    if (!hasConsented) {
      setIsVisible(true);
    }
  }, []);

  const handleConsent = (consented: boolean) => {
    localStorage.setItem('cookie-consent', consented ? 'accepted' : 'declined');
    setIsVisible(false);
    trackEvent('cookie_consent', { status: consented ? 'accepted' : 'declined' });
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t-2 border-black p-4 md:p-6 shadow-[0_-4px_0_0_rgba(0,0,0,0.1)] z-[100] flex flex-col md:flex-row items-center justify-between gap-4">
      <div className="flex-1 max-w-4xl">
        <h3 className="text-sm font-black uppercase tracking-widest text-[#1a1a1a] mb-1">We Value Your Privacy</h3>
        <p className="text-xs text-slate-600 font-medium">
          We use cookies to enhance your browsing experience, serve personalized ads or content, and analyze our traffic. By clicking "Accept All", you consent to our use of cookies.
        </p>
      </div>
      <div className="flex gap-4 w-full md:w-auto">
        <button 
          onClick={() => handleConsent(false)}
          className="flex-1 md:flex-none px-6 py-3 min-h-[48px] border-2 border-black font-bold text-xs uppercase tracking-widest bg-white text-black hover:bg-slate-100 transition-all text-center"
        >
          Decline
        </button>
        <button 
          onClick={() => handleConsent(true)}
          className="flex-1 md:flex-none px-6 py-3 min-h-[48px] border-2 border-black font-bold text-xs uppercase tracking-widest bg-black text-white hover:bg-slate-800 transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)] active:shadow-none active:translate-x-[2px] active:translate-y-[2px] text-center"
        >
          Accept All
        </button>
      </div>
    </div>
  );
}
