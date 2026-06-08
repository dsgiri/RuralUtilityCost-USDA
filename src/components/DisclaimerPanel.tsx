import { ShieldAlert } from 'lucide-react';

export function DisclaimerPanel() {
  return (
    <div className="bg-white border-2 border-black p-5 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
      <div className="flex items-start">
        <div className="flex-shrink-0 mt-0.5">
          <span className="w-3 h-3 bg-red-500 border border-black inline-block flex-shrink-0" />
        </div>
        <div className="ml-3">
          <h3 className="text-xs font-black uppercase tracking-widest text-[#1a1a1a]">Informational Planning Aid</h3>
          <div className="mt-2 text-[11px] font-medium text-slate-600 leading-relaxed uppercase tracking-wide">
            <p>
              This tool provides estimates based on your inputs and generalized formulas. The results are planning aids only.
              <strong className="text-black"> This is not an official USDA application.</strong> Program rules, payment rates, and eligibility criteria are subject to change.
              Always verify calculations and submit official records through your local USDA Service Center.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
