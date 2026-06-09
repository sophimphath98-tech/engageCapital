import { useState, useMemo } from "react";
import { DollarSign, Landmark, TrendingUp, Sparkles, Layers, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface Sector {
  name: string;
  rate: number; // compound annual rate
  risk: "Low-Moderate" | "Moderate" | "Moderate-High" | "High";
  description: string;
}

export default function Calculator() {
  const sectors: Sector[] = [
    { 
      name: "Technology & Fintech", 
      rate: 0.135, // 13.5%
      risk: "Moderate-High", 
      description: "Fastest growing sector with high integration of digital payments among Cambodia's young demographic." 
    },
    { 
      name: "Infrastructure & Logistics", 
      rate: 0.088, // 8.8%
      risk: "Low-Moderate", 
      description: "Backed by multi-billion government initiatives. Solid, resilient capital appreciation with high collateral value." 
    },
    { 
      name: "Agriculture & Agro-tech", 
      rate: 0.075, // 7.5%
      risk: "Moderate", 
      description: "Modernizing crop aggregation, food security exports, and automated supply chains across the Mekong delta." 
    },
    { 
      name: "Commercial Real Estate", 
      rate: 0.092, // 9.2%
      risk: "Moderate", 
      description: "High-yield prime office spaces, mixed-use retail developments, and industrial parks in Phnom Penh & Sihanoukville." 
    },
    { 
      name: "Tourism & Boutique Hospitality", 
      rate: 0.105, // 10.5%
      risk: "High", 
      description: "Post-pandemic resurge in eco-tourism and cultural luxury stays centered in Siem Reap and the coastal islands." 
    }
  ];

  // Selected State
  const [selectedSector, setSelectedSector] = useState<number>(0);
  const [investment, setInvestment] = useState<number>(250000); // Default $250k
  const [years, setYears] = useState<number>(5);

  const sector = sectors[selectedSector];

  // Financial Calculations
  const calculations = useMemo(() => {
    const p = investment;
    const r = sector.rate;
    const t = years;
    
    // Compound interest: A = P * (1 + r)^t
    const futureValue = p * Math.pow(1 + r, t);
    const profit = futureValue - p;
    const totalROI = (profit / p) * 100;
    
    // Regional comparison rate (e.g. standard regional mature market rate at average 4.5%)
    const regionalRate = 0.045;
    const regionalFV = p * Math.pow(1 + regionalRate, t);
    const cambodiaAlpha = futureValue - regionalFV;

    return {
      futureValue: Math.round(futureValue),
      profit: Math.round(profit),
      totalROI: totalROI.toFixed(1),
      cambodiaAlpha: Math.round(cambodiaAlpha)
    };
  }, [investment, sector.rate, years]);

  const handleApplyToContact = () => {
    // Fill in values for the contact form of the website
    const msgInput = document.querySelector("#contact textarea") as HTMLTextAreaElement;
    const interestSel = document.querySelector("#contact select") as HTMLSelectElement;
    
    if (interestSel) {
      interestSel.value = "Investment Advisory";
      const event = new Event('change', { bubbles: true });
      interestSel.dispatchEvent(event);
    }
    
    if (msgInput) {
      msgInput.value = `Hello, I processed an estimation using your Growth Calculator.\n\nSector of Interest: ${sector.name}\nIntended Investment: $${investment.toLocaleString()}\nInvestment Horizon: ${years} years\nEstimated Growth Outcome: $${calculations.futureValue.toLocaleString()}\n\nI would like to receive an official PDF report and discuss actual private equity or co-investment offerings in Cambodia.`;
      msgInput.focus();
    }

    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="calculator" className="relative text-white py-14 overflow-hidden border-b border-gold/10">
      {/* Decorative vectors */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-gold/5 rounded-full filter blur-3xl pointer-events-none -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-navy-soft/20 rounded-full filter blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-[0.7rem] font-semibold tracking-widest text-gold uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5 text-gold-light" />
            Interactive Finance Suite
          </div>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-white tracking-tight leading-tight">
            Cambodian Market Growth Estimator
          </h2>
          <p className="mt-4 text-sm text-slate leading-relaxed">
            Project your potential compound returns using historical risk-adjusted yields across prime Cambodian growth sectors. Compare against mature regional markets.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Inputs Section */}
          <div className="lg:col-span-7 bg-navy-mid/60 border border-gold/15 p-6 md:p-8 rounded-[4px] backdrop-blur-sm shadow-xl">
            {/* Step 1: Sector selection */}
            <div className="mb-6">
              <label className="block text-[0.72rem] font-semibold tracking-widest text-gold uppercase mb-3.5 flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-gold-light" />
                1. Select Growth Sector
              </label>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {sectors.map((sec, idx) => (
                  <button
                    key={sec.name}
                    onClick={() => setSelectedSector(idx)}
                    className={`text-left p-3.5 rounded-[2px] border transition-all duration-300 flex flex-col justify-between ${
                      selectedSector === idx
                        ? "bg-navy-soft/40 border-gold/70 shadow-lg text-white"
                        : "bg-navy/40 border-gold/10 hover:border-gold/30 text-slate hover:text-white"
                    }`}
                  >
                    <div>
                      <div className="font-serif font-bold text-sm leading-tight mb-1 flex items-center justify-between">
                        {sec.name}
                        {selectedSector === idx && <ArrowUpRight className="w-3.5 h-3.5 text-gold" />}
                      </div>
                      <p className="text-[0.72rem] text-slate line-clamp-2 leading-relaxed mt-1">
                        {sec.description}
                      </p>
                    </div>
                    <div className="mt-3.5 pt-2 border-t border-gold/5 flex items-center justify-between text-[0.68rem]">
                      <span className="text-gold font-semibold font-mono">
                        {(sec.rate * 100).toFixed(1)}% CAGR
                      </span>
                      <span className={`px-2 py-0.5 rounded-full font-sans text-[0.62rem] ${
                        sec.risk === "Low-Moderate" ? "bg-green-500/10 text-green-400" :
                        sec.risk === "Moderate" ? "bg-blue-500/10 text-blue-400" :
                        sec.risk === "Moderate-High" ? "bg-amber-500/10 text-amber-400" :
                        "bg-rose-500/10 text-rose-400"
                      }`}>
                        {sec.risk} Risk
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Amount Selector */}
            <div className="mb-6">
              <div className="flex justify-between items-center mb-2">
                <label className="block text-[0.72rem] font-semibold tracking-widest text-gold uppercase flex items-center gap-1.5">
                  <DollarSign className="w-3.5 h-3.5 text-gold-light" />
                  2. Initial Investment
                </label>
                <div className="font-mono text-gold-light text-base font-bold bg-navy-soft/30 px-3 py-1 rounded-[2px] border border-gold/10">
                  ${investment.toLocaleString()} USD
                </div>
              </div>
              
              <input
                type="range"
                min="50000"
                max="5000000"
                step="50000"
                value={investment}
                onChange={(e) => setInvestment(parseInt(e.target.value))}
                className="w-full accent-gold h-1.5 bg-navy-soft rounded-lg appearance-none cursor-pointer"
              />
              <div className="flex justify-between text-[0.65rem] text-slate mt-1.5 font-mono">
                <span>$50,000</span>
                <span>$1,000,000</span>
                <span>$2,500,000</span>
                <span>$5,000,000</span>
              </div>
            </div>

            {/* Step 3: Years Timeline */}
            <div>
              <label className="block text-[0.72rem] font-semibold tracking-widest text-gold uppercase mb-3 flex items-center gap-1.5">
                <TrendingUp className="w-3.5 h-3.5 text-gold-light" />
                3. Timeline / Holding Period
              </label>
              
              <div className="grid grid-cols-4 gap-2">
                {[3, 5, 8, 10].map((yr) => (
                  <button
                    key={yr}
                    onClick={() => setYears(yr)}
                    className={`py-3 text-xs font-mono font-semibold tracking-wider uppercase border transition-all duration-200 rounded-[2px] ${
                      years === yr
                        ? "bg-gold text-navy font-bold border-gold"
                        : "bg-navy/40 border-gold/10 text-slate hover:text-white hover:border-gold/30"
                    }`}
                  >
                    {yr} Years
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Results Block */}
          <div className="lg:col-span-5 flex flex-col gap-6 h-full">
            
            <div className="flex-1 bg-gradient-to-b from-navy-mid to-navy/90 border border-gold/25 p-6 md:p-8 rounded-[4px] relative flex flex-col justify-between shadow-2xl">
              
              {/* Internal design motif */}
              <div className="absolute top-2 right-2 opacity-5 pointer-events-none">
                <Landmark className="w-32 h-32 text-gold" />
              </div>

              <div>
                <span className="text-[0.65rem] font-semibold tracking-widest text-gold uppercase block mb-1">
                  Compound Outcomes
                </span>
                <h3 className="font-serif text-lg font-bold text-white mb-6 border-b border-gold/10 pb-3">
                  Projected Cap Appreciation
                </h3>

                <div className="space-y-5">
                  <div>
                    <span className="text-xs text-slate block mb-1">Estimated Capital Value ({years} yrs)</span>
                    <span className="font-serif text-4xl font-bold text-gold-light leading-none block">
                      ${calculations.futureValue.toLocaleString()}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-4 pt-1 border-t border-gold/5 mt-4">
                    <div>
                      <span className="text-[0.68rem] text-slate block mb-0.5">Total Profit Gain</span>
                      <span className="font-mono text-sm font-semibold text-emerald-400">
                        +${calculations.profit.toLocaleString()}
                      </span>
                    </div>
                    <div>
                      <span className="text-[0.68rem] text-slate block mb-0.5 font-sans">Return (ROI)</span>
                      <span className="font-mono text-sm font-semibold text-emerald-400">
                        +{calculations.totalROI}%
                      </span>
                    </div>
                  </div>

                  <div className="p-3 bg-gold/5 border border-gold/10 rounded-[2px] mt-4">
                    <span className="text-[0.65rem] tracking-wide font-semibold text-gold block uppercase mb-1">
                      The Cambodia Advantage
                    </span>
                    <p className="text-[0.74rem] text-cream-tint/90 leading-relaxed font-sans">
                      Your premium yield surplus compared to mature global portfolios is estimated at <strong className="text-gold font-mono">${calculations.cambodiaAlpha.toLocaleString()} USD</strong>, enabled by higher domestic GDP leverage.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 space-y-3">
                <button
                  onClick={handleApplyToContact}
                  className="w-full flex items-center justify-center gap-2 text-[0.82rem] font-bold text-navy bg-gold hover:bg-gold-light py-3.5 px-4 rounded-[2px] uppercase tracking-wider transition-all duration-150 transform hover:-translate-y-0.5 active:translate-y-0 shadow-lg cursor-pointer"
                >
                  Apply Form with Forecast
                  <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                </button>
                <div className="flex items-center justify-center gap-1.5 text-[0.65rem] text-slate">
                  <CheckCircle2 className="w-3.5 h-3.5 text-gold" />
                  Request tailored prospectus based on these settings
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
