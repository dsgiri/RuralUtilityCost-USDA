import { useState } from 'react';
import { trackEvent } from '../lib/analytics';
import { AdContainer } from './AdContainer';

export function ContactView() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    
    trackEvent('submit_form', { form_name: 'contact_us' });
    
    // Simulate submission
    setTimeout(() => {
      setStatus('success');
    }, 1000);
  };

  return (
    <div className="max-w-3xl mx-auto space-y-8 animate-in fade-in duration-500">
      <div className="border-b-2 border-black pb-5">
        <h1 className="text-4xl font-black text-[#1a1a1a] tracking-tighter">Contact Us</h1>
        <p className="mt-2 text-slate-600 font-bold uppercase tracking-widest text-xs">
          Get in touch with the Rural Utility Cost team.
        </p>
      </div>

      <div className="bg-white border-2 border-black p-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
        {status === 'success' ? (
          <div className="text-center py-12">
            <h3 className="text-2xl font-black text-[#15803d] mb-4">Message Sent!</h3>
            <p className="text-slate-600 font-medium mb-8">Thank you for reaching out. We will get back to you shortly.</p>
            <button 
              onClick={() => setStatus('idle')}
              className="px-6 py-3 min-h-[48px] border-2 border-black font-bold text-xs uppercase tracking-widest bg-white text-black hover:bg-slate-100 transition-all font-medium"
            >
              Send Another Message
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="name" className="block text-xs font-bold uppercase tracking-widest text-slate-600">Full Name</label>
              <input 
                type="text" 
                id="name"
                required
                className="w-full border-2 border-black bg-white focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 py-3 px-4 font-medium text-sm min-h-[48px]"
                aria-label="Full Name"
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="email" className="block text-xs font-bold uppercase tracking-widest text-slate-600">Email Address</label>
              <input 
                type="email" 
                id="email"
                required
                className="w-full border-2 border-black bg-white focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 py-3 px-4 font-medium text-sm min-h-[48px]"
                aria-label="Email Address"
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="message" className="block text-xs font-bold uppercase tracking-widest text-slate-600">Message</label>
              <textarea 
                id="message"
                required
                rows={5}
                className="w-full border-2 border-black bg-white focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 py-3 px-4 font-medium text-sm min-h-[120px]"
                aria-label="Message"
              ></textarea>
            </div>
            
            <button 
              type="submit"
              disabled={status === 'submitting'}
              className="w-full px-6 py-4 min-h-[48px] border-2 border-black font-black text-sm uppercase tracking-widest bg-black text-white hover:bg-slate-800 transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)] active:shadow-none active:translate-x-[2px] active:translate-y-[2px] disabled:opacity-50"
            >
              {status === 'submitting' ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        )}
      </div>

      <AdContainer type="in-content" />
    </div>
  );
}
