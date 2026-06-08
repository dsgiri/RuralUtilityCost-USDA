import { useEffect } from 'react';

interface AdContainerProps {
  slotId?: string;
  className?: string;
  type?: 'header' | 'sidebar' | 'in-content' | 'footer';
}

export function AdContainer({ slotId = "YOUR_SLOT_ID", className = "", type = "in-content" }: AdContainerProps) {
  useEffect(() => {
    try {
      if (typeof window !== 'undefined') {
        const adsbygoogle = (window as any).adsbygoogle || [];
        // Only push if there are unfilled ins elements
        if (document.querySelectorAll('ins.adsbygoogle:empty').length > 0) {
            adsbygoogle.push({});
        }
      }
    } catch (e) {
      console.error("AdSense error:", e);
    }
  }, []);

  const getMinHeight = () => {
    switch (type) {
      case 'header': return 'min-h-[90px]';
      case 'footer': return 'min-h-[90px]';
      case 'sidebar': return 'min-h-[250px] lg:min-h-[600px]';
      default: return 'min-h-[250px]';
    }
  };

  return (
    <div 
      className={`ad-container w-full bg-[#f5f5f5] border border-[#ddd] flex flex-col justify-center items-center my-6 relative overflow-hidden ${getMinHeight()} ${className}`} 
      data-ad-status="unfilled"
    >
      <span className="text-[10px] uppercase tracking-widest text-slate-400 font-bold mb-2 z-10 block text-center mt-2">Advertisement</span>
      <div className="w-full flex-grow flex items-center justify-center">
        <ins className="adsbygoogle"
             style={{ display: 'block', width: '100%' }}
             data-ad-client="ca-PUB-YOUR_CLIENT_ID"
             data-ad-slot={slotId}
             data-ad-format="auto"
             data-full-width-responsive="true"></ins>
      </div>
    </div>
  );
}
