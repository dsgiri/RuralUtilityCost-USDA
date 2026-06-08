import { useState } from 'react';
import { Calculator, RotateCcw, AlertCircle } from 'lucide-react';
import { DisclaimerPanel } from './DisclaimerPanel';

export function PaymentEstimateTool() {
  const [cropType, setCropType] = useState('Corn');
  const [plantedAcres, setPlantedAcres] = useState<number | ''>(500);
  const [paymentRate, setPaymentRate] = useState<number | ''>(45.50);
  const [shareInterest, setShareInterest] = useState<number | ''>(100);

  // Derived state
  const validAcres = Number(plantedAcres) || 0;
  const validRate = Number(paymentRate) || 0;
  const validShare = Number(shareInterest) || 0;
  
  const estimatedTotal = validAcres * validRate * (validShare / 100);

  const resetForm = () => {
    setCropType('Corn');
    setPlantedAcres('');
    setPaymentRate('');
    setShareInterest(100);
  };

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      
      <div className="border-b-2 border-black pb-5">
        <h2 className="text-3xl font-black text-[#1a1a1a] flex items-center tracking-tighter">
          Acreage Payment Estimator
        </h2>
        <p className="mt-2 text-slate-600 max-w-3xl font-medium">
          Quickly project potential payment scenarios based on planted acreage bases, regional rates, and ownership shares. Use this tool to benchmark income scenarios for crop programs.
        </p>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        
        {/* Input Column */}
        <div className="xl:col-span-2 space-y-6">
          <div className="bg-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex flex-col">
            <div className="px-6 py-4 bg-slate-50 border-b-2 border-black flex justify-between items-center">
              <h3 className="text-sm font-black uppercase tracking-widest text-[#1a1a1a]">Assumption Inputs</h3>
              <button 
                onClick={resetForm}
                className="text-[10px] font-bold uppercase tracking-widest text-slate-500 hover:text-black flex items-center"
              >
                <RotateCcw className="w-3 h-3 mr-1" /> Reset
              </button>
            </div>
            
            <div className="p-6 md:p-8 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="cropType" className="block text-xs font-bold uppercase tracking-widest text-slate-600">Commodity Base</label>
                  <select 
                    id="cropType"
                    value={cropType}
                    onChange={(e) => setCropType(e.target.value)}
                    className="w-full border-2 border-black bg-white focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 py-3 px-4 font-medium text-sm"
                  >
                    <option value="Corn">Corn</option>
                    <option value="Soybeans">Soybeans</option>
                    <option value="Wheat">Wheat</option>
                    <option value="Cotton">Cotton (Seed)</option>
                    <option value="Peanuts">Peanuts</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="plantedAcres" className="block text-xs font-bold uppercase tracking-widest text-slate-600">Covered/Planted Acres</label>
                  <div className="relative">
                    <input 
                      type="number" 
                      id="plantedAcres"
                      min="0"
                      value={plantedAcres}
                      onChange={(e) => setPlantedAcres(e.target.value === '' ? '' : Number(e.target.value))}
                      className="w-full border-2 border-black bg-white focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 py-3 pl-4 pr-16 font-mono text-sm"
                      placeholder="e.g. 500"
                    />
                    <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
                      <span className="text-slate-500 font-bold text-xs uppercase tracking-widest border-l-2 border-slate-200 pl-3">acres</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="paymentRate" className="block text-xs font-bold uppercase tracking-widest text-slate-600">Est. Rate per Acre ($)</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <span className="text-[#1a1a1a] font-bold border-r-2 border-slate-200 pr-3">$</span>
                    </div>
                    <input 
                      type="number" 
                      id="paymentRate"
                      min="0"
                      step="0.01"
                      value={paymentRate}
                      onChange={(e) => setPaymentRate(e.target.value === '' ? '' : Number(e.target.value))}
                      className="w-full border-2 border-black bg-white focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 py-3 pl-14 font-mono text-sm"
                      placeholder="e.g. 45.50"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="shareInterest" className="block text-xs font-bold uppercase tracking-widest text-slate-600">Share Interest (%)</label>
                  <div className="relative">
                    <input 
                      type="number" 
                      id="shareInterest"
                      min="0"
                      max="100"
                      value={shareInterest}
                      onChange={(e) => setShareInterest(e.target.value === '' ? '' : Number(e.target.value))}
                      className="w-full border-2 border-black bg-white focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 py-3 pl-4 pr-12 font-mono text-sm"
                      placeholder="100"
                    />
                    <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
                      <span className="text-slate-500 font-bold border-l-2 border-slate-200 pl-3">%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <DisclaimerPanel />
        </div>

        {/* Output Column */}
        <div className="space-y-6">
          <div className="bg-[#0369a1] border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-white flex flex-col">
            <div className="px-6 py-4 border-b-2 border-black bg-[#025a8f]">
              <h3 className="text-sm font-black uppercase tracking-widest text-white">Scenario Output</h3>
            </div>
            
            <div className="p-6 md:p-8">
              <div className="flex flex-col mb-8">
                <span className="text-[10px] font-bold text-[#93c5fd] uppercase tracking-widest mb-1">Estimated Gross Payment</span>
                <span className="text-4xl md:text-5xl font-black tracking-tighter">
                  {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(estimatedTotal)}
                </span>
              </div>
              
              <div className="border-t border-[#0ea5e9] pt-6 space-y-4">
                <div className="flex justify-between items-center pb-2 border-b border-[#0ea5e9] border-dashed">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#bae6fd]">Commodity</span>
                  <span className="text-sm font-black">{cropType}</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-[#0ea5e9] border-dashed">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#bae6fd]">Eligible Base</span>
                  <span className="text-sm font-mono">{validAcres.toLocaleString()} ac</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-[#0ea5e9] border-dashed">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#bae6fd]">Effective Rate</span>
                  <span className="text-sm font-mono">${validRate.toFixed(2)} / ac</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#bae6fd]">Producer Share</span>
                  <span className="text-sm font-mono">{validShare}%</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white border-2 border-black p-5 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <h4 className="text-xs font-black uppercase tracking-widest text-[#1a1a1a] flex items-center mb-3">
              <span className="w-2 h-2 bg-red-500 mr-2 border border-black"></span>
              Eligibility Checklist
            </h4>
            <ul className="text-sm text-slate-600 space-y-2 list-disc pl-5 font-medium">
              <li>Requires valid FSA-578 acreage report.</li>
              <li>Must meet AGI limits ($900k benchmark typically).</li>
              <li>Calculates gross estimate before potential sequestration reductions.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
