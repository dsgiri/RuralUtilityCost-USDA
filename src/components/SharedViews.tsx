import { DisclaimerPanel } from './DisclaimerPanel';

export function AboutView() {
  return (
    <div className="max-w-3xl mx-auto space-y-8 animate-in fade-in duration-500">
      <div className="border-b-2 border-black pb-5">
        <h1 className="text-4xl font-black text-[#1a1a1a] tracking-tighter">About This Hub</h1>
        <p className="mt-2 text-slate-600 font-bold uppercase tracking-widest text-xs">
          The USDA Planning Hub is a companion module within the broader <strong>Rural Utility Cost</strong> ecosystem.
        </p>
      </div>

      <div className="bg-white border-2 border-black p-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
        <p className="text-slate-600 leading-relaxed font-medium mb-6">
          Our goal is to help producers, managers, and consultants organize, estimate, and understand USDA-related program inputs. Government programs are often complex and require meticulous record-keeping. This hub provides simple, structural calculators and decision-support tools to project acreage scenarios, benchmark payments, and compile reporting data.
        </p>
        
        <h3 className="text-xl font-black text-[#1a1a1a] mb-4">Core Philosophy</h3>
        <ul className="space-y-3 text-slate-600 font-medium">
          <li className="flex items-start">
            <span className="w-2 h-2 bg-red-500 border border-black inline-block flex-shrink-0 mt-1.5 mr-3"></span>
            <span><strong className="text-black">Data Clarity:</strong> Surface inputs cleanly before you sit down to fill out official forms.</span>
          </li>
          <li className="flex items-start">
            <span className="w-2 h-2 bg-[#0369a1] border border-black inline-block flex-shrink-0 mt-1.5 mr-3"></span>
            <span><strong className="text-black">Scenario Benchmarking:</strong> Provide immediate calculator estimates for sharing with financial advisors or operators.</span>
          </li>
          <li className="flex items-start">
            <span className="w-2 h-2 bg-[#15803d] border border-black inline-block flex-shrink-0 mt-1.5 mr-3"></span>
            <span><strong className="text-black">Practical Direction:</strong> Connect you back to definitive resources without adding unneeded fluff.</span>
          </li>
        </ul>
      </div>

      <div className="mt-8">
        <DisclaimerPanel />
      </div>
    </div>
  );
}

export function LegalView() {
  return (
    <div className="max-w-3xl mx-auto space-y-8 animate-in fade-in duration-500">
      <div className="border-b-2 border-black pb-5">
        <h1 className="text-4xl font-black text-[#1a1a1a] tracking-tighter">Legal & Disclaimers</h1>
        <p className="mt-2 text-slate-600 font-bold uppercase tracking-widest text-xs">
          Important terms regarding the use of the USDA Planning Hub tools.
        </p>
      </div>

      <div className="bg-white border-2 border-black p-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] space-y-8">
        <section>
          <h3 className="text-xl font-black text-[#1a1a1a] mb-3 flex items-center gap-2">
            <span className="w-2 h-2 bg-[#1a1a1a]"></span>
            1. Informational Use Only
          </h3>
          <p className="text-slate-600 font-medium leading-relaxed">
            All calculators, data hubs, and program guidance found on this subdomain are strictly for informational and planning purposes. They do not constitute financial, legal, or official agricultural advice.
          </p>
        </section>

        <section>
          <h3 className="text-xl font-black text-[#1a1a1a] mb-3 flex items-center gap-2">
            <span className="w-2 h-2 bg-[#1a1a1a]"></span>
            2. No Government Affiliation
          </h3>
          <p className="text-slate-600 font-medium leading-relaxed">
            This website is part of the private Rural Utility Cost ecosystem. It is <strong className="text-black">NOT</strong> affiliated with, endorsed by, or an official product of the United States Department of Agriculture (USDA), the Farm Service Agency (FSA), Rural Development (RD), or any state or federal government agency.
          </p>
        </section>

        <section>
          <h3 className="text-xl font-black text-[#1a1a1a] mb-3 flex items-center gap-2">
            <span className="w-2 h-2 bg-[#1a1a1a]"></span>
            3. Accuracy of Estimates
          </h3>
          <p className="text-slate-600 font-medium leading-relaxed">
            Program rules, payment rates, base acre formulations, and eligibility benchmarks change frequently through legislation and agency rulemaking. While we strive to provide accurate estimating parameters, you should always verify absolute figures and program requirements with your local USDA Service Center and qualified advisors. Outputs from these tools are estimates and should not be relied upon for committing to financial outlays or loan documents. 
          </p>
        </section>
      </div>
    </div>
  );
}
