/**
 * ============================================================================
 * File: Calculator.tsx
 * Author: Atonnydev
 * Date: 2026-06-09
 * Component/Module: Loan Calculator
 * Description: Interactive tool providing range sliders for users to estimate 
 *              monthly loan repayments and total interest dynamically.
 * ============================================================================
 */
import React, { useState, useMemo } from "react";
import { DollarSign, Landmark, TrendingUp, Sparkles, Layers, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { useAmortization } from "@/hooks/useAmortization";
import { LoanProductItem } from "@/types";

interface CalculatorProps {
  loanProducts: LoanProductItem[];
}

export default function Calculator({ loanProducts }: CalculatorProps) {
  const [selectedTypeIdx, setSelectedTypeIdx] = useState(0);
  const [amount, setAmount] = useState(5000);
  const [months, setMonths] = useState(12);
  const [interestRate, setInterestRate] = useState(14);

  const loanType = loanProducts[selectedTypeIdx];

  // Recalculate rates dynamically when user switches loan type
  const handleTypeSelect = (idx: number) => {
    setSelectedTypeIdx(idx);
    const targetType = loanProducts[idx];
    setInterestRate(targetType.defaultRate);
    // Bind amount safely within limits
    if (amount < targetType.minAmount) {
      setAmount(targetType.minAmount);
    } else if (amount > targetType.maxAmount) {
      setAmount(targetType.maxAmount);
    }
  };

  const calculations = useAmortization(amount, months, interestRate);

  const handleApplyToContact = () => {
    // Fill in elements of ContactForm dynamically
    const phoneInput = document.querySelector("#contact input[type='tel']") as HTMLInputElement;
    const typeSel = document.querySelector("#contact select:nth-of-type(1)") as HTMLSelectElement;
    const rangeSel = document.querySelector("#contact select:nth-of-type(2)") as HTMLSelectElement;
    const msgInput = document.querySelector("#contact textarea") as HTMLTextAreaElement;

    if (typeSel) {
      // Find matching range or select option that maps to loanType.name
      typeSel.value = loanType.name;
      const event = new Event('change', { bubbles: true });
      typeSel.dispatchEvent(event);
    }

    if (rangeSel) {
      if (amount <= 500) {
        rangeSel.value = "$200 – $500";
      } else if (amount <= 2000) {
        rangeSel.value = "$500 – $2,000";
      } else if (amount <= 10000) {
        rangeSel.value = "$2,000 – $10,000";
      } else {
        rangeSel.value = "$10,000 – $50,000";
      }
      const event = new Event('change', { bubbles: true });
      rangeSel.dispatchEvent(event);
    }

    if (msgInput) {
      msgInput.value = `Hello, I processed an estimation on your digital loan calculator.\n\nLoan Selected: ${loanType.name}\nRequested Sum: $${amount.toLocaleString()} USD\nTerm Duration: ${months} Months\nExpected APR: ${interestRate}%\nEstimated Monthly Return: $${calculations.monthly.toLocaleString()} USD\nTotal Bill: $${calculations.totalPayable.toLocaleString()} USD\n\nPlease initialize approval routing for my account immediately.`;
      msgInput.focus();
    }

    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="calculator" className="relative text-white py-16 md:py-24 overflow-hidden border-b border-gold/15 bg-navy">
      {/* Decorative vectors */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-gold/5 rounded-full filter blur-3xl pointer-events-none -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-navy-mid/30 rounded-full filter blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-[0.7rem] font-semibold tracking-widest text-gold uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5 text-gold-light" />
            Interactive Borrowing Portal
          </div>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-white tracking-tight leading-tight">
            Calculate Your Monthly Payments
          </h2>
          <p className="mt-4 text-xs sm:text-sm text-slate leading-relaxed">
            Configure flexible parameters to estimate your quick micro-financing. Adjust principal, term duration, and select your preferred product below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Inputs Section */}
          <div className="lg:col-span-7 bg-navy-mid/60 border border-gold/15 p-6 md:p-8 rounded-[4px] backdrop-blur-sm shadow-xl space-y-6">
            
            {/* Step 1: Select Loan Product */}
            <div>
              <label className="block text-[0.72rem] font-semibold tracking-widest text-gold uppercase mb-3 flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-gold-light" />
                1. Select Loan Product
              </label>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {loanProducts.map((type, idx) => (
                  <button
                    key={type.name}
                    onClick={() => handleTypeSelect(idx)}
                    className={`text-left p-3.5 rounded-[2px] border transition-all duration-200 flex flex-col justify-between ${
                      selectedTypeIdx === idx
                        ? "bg-navy-soft/40 border-gold/70 shadow-lg text-white"
                        : "bg-navy/40 border-gold/10 hover:border-gold/30 text-slate hover:text-white"
                    }`}
                  >
                    <div>
                      <div className="font-serif font-bold text-xs sm:text-sm leading-tight mb-1 flex items-center justify-between">
                        {type.name}
                        {selectedTypeIdx === idx && <ArrowUpRight className="w-3.5 h-3.5 text-gold" />}
                      </div>
                      <p className="text-[0.7rem] text-slate line-clamp-2 leading-relaxed mt-1">
                        {type.desc}
                      </p>
                    </div>
                    <div className="mt-3 pt-2 border-t border-gold/5 flex items-center justify-between text-[0.65rem]">
                      <span className="text-gold font-semibold font-mono">
                        ~{type.defaultRate}% APR
                      </span>
                      <span className="text-slate font-mono">
                        Max ${type.maxAmount.toLocaleString()}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Amount Selector */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="block text-[0.72rem] font-semibold tracking-widest text-gold uppercase flex items-center gap-1.5">
                  <DollarSign className="w-3.5 h-3.5 text-gold-light" />
                  2. Loan Principal (Amount)
                </label>
                <div className="font-mono text-gold-light text-sm font-bold bg-navy-soft/35 px-3 py-1 rounded-[2px] border border-gold/10">
                  ${amount.toLocaleString()} USD
                </div>
              </div>
              
              <input
                type="range"
                min={loanType.minAmount}
                max={loanType.maxAmount}
                step={amount > 2000 ? 500 : 100}
                value={amount}
                onChange={(e) => setAmount(parseInt(e.target.value))}
                className="w-full accent-gold h-1.5 bg-navy-soft rounded-lg appearance-none cursor-pointer"
              />
              <div className="flex justify-between text-[0.62rem] text-slate mt-1.5 font-mono">
                <span>Min: ${loanType.minAmount.toLocaleString()}</span>
                <span>Max: ${loanType.maxAmount.toLocaleString()}</span>
              </div>
            </div>

            {/* Step 3: Terms Slider */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="block text-[0.72rem] font-semibold tracking-widest text-gold uppercase flex items-center gap-1.5">
                  <TrendingUp className="w-3.5 h-3.5 text-gold-light" />
                  3. Term Repayment Limit
                </label>
                <div className="font-mono text-gold-light text-sm font-bold bg-navy-soft/35 px-3 py-1 rounded-[2px] border border-gold/10">
                  {months} Months
                </div>
              </div>
              
              <input
                type="range"
                min="3"
                max="36"
                step="1"
                value={months}
                onChange={(e) => setMonths(parseInt(e.target.value))}
                className="w-full accent-gold h-1.5 bg-navy-soft rounded-lg appearance-none cursor-pointer"
              />
              <div className="flex justify-between text-[0.62rem] text-slate mt-1.5 font-mono">
                <span>3 Months</span>
                <span>12 Months</span>
                <span>24 Months</span>
                <span>36 Months</span>
              </div>
            </div>

            {/* Step 4: APR Rate custom adjustment */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="block text-[0.72rem] font-semibold tracking-widest text-gold uppercase flex items-center gap-1.5">
                  <Landmark className="w-3.5 h-3.5 text-gold-light" />
                  4. Adjust Annual Interest Rate (APR)
                </label>
                <div className="font-mono text-gold-light text-sm font-bold bg-navy-soft/35 px-3 py-1 rounded-[2px] border border-gold/10">
                  {interestRate}% APR
                </div>
              </div>
              
              <input
                type="range"
                min="8"
                max="24"
                step="0.5"
                value={interestRate}
                onChange={(e) => setInterestRate(parseFloat(e.target.value))}
                className="w-full accent-gold h-1.5 bg-navy-soft rounded-lg appearance-none cursor-pointer"
              />
              <div className="flex justify-between text-[0.62rem] text-slate mt-1.5 font-mono">
                <span>8.0% APR</span>
                <span>14.0% APR</span>
                <span>24.0% APR</span>
              </div>
            </div>

          </div>

          {/* Results Side Block */}
          <div className="lg:col-span-5 flex flex-col gap-6 h-full font-sans">
            
            <div className="flex-1 bg-gradient-to-b from-navy-mid to-navy border border-gold/25 p-6 md:p-8 rounded-[4px] relative flex flex-col justify-between shadow-2xl">
              
              {/* Internal design motif */}
              <div className="absolute top-2 right-2 opacity-5 pointer-events-none">
                <Landmark className="w-32 h-32 text-gold animate-pulse" />
              </div>

              <div>
                <span className="text-[0.65rem] font-semibold tracking-widest text-gold uppercase block mb-1">
                  Amortized Estimates ({loanType.name})
                </span>
                <h3 className="font-serif text-base sm:text-lg font-bold text-white mb-6 border-b border-gold/10 pb-3">
                  Instalment Details
                </h3>

                <div className="space-y-6">
                  <div>
                    <span className="text-xs text-slate block mb-1 uppercase tracking-wider">Estimated Monthly Repayment</span>
                    <span className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-gold-light leading-none block">
                      ${calculations.monthly.toLocaleString()} <span className="text-xs sm:text-sm font-sans font-medium text-slate">USD / mo</span>
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-4 pt-1 border-t border-gold/5 mt-4">
                    <div>
                      <span className="text-[0.65rem] text-slate block mb-0.5 uppercase tracking-wide">Total Interest Cost</span>
                      <span className="font-mono text-sm sm:text-base font-bold text-stone-200">
                        ${calculations.totalInterest.toLocaleString()} USD
                      </span>
                    </div>
                    <div>
                      <span className="text-[0.65rem] text-slate block mb-0.5 uppercase tracking-wide">Total Payable Repay</span>
                      <span className="font-mono text-sm sm:text-base font-bold text-white">
                        ${calculations.totalPayable.toLocaleString()} USD
                      </span>
                    </div>
                  </div>

                  <div className="p-3 bg-gold/5 border border-gold/10 rounded-[2px] mt-4">
                    <span className="text-[0.65rem] tracking-wide font-semibold text-gold block uppercase mb-1">
                      No Security Deposit Requirement
                    </span>
                    <p className="text-[0.72rem] text-stone-300 leading-relaxed font-sans">
                      Our platform evaluates cash flow cycles natively. Verified applications request no personal collateral holdings, simplifying disbursements.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 space-y-3">
                <Button
                  onClick={handleApplyToContact}
                  className="w-full flex items-center justify-center gap-2 text-[0.82rem] font-bold text-navy bg-gold hover:bg-gold-light py-6 px-4 rounded-[2px] uppercase tracking-wider transition-all duration-150 transform hover:-translate-y-0.5 active:translate-y-0 shadow-lg cursor-pointer h-auto border-0"
                >
                  Apply Now with Settings
                  <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                </Button>
                <div className="flex items-center justify-center gap-1.5 text-[0.65rem] text-slate">
                  <CheckCircle2 className="w-3.5 h-3.5 text-gold" />
                  Estimated processing time: under 2 hours
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
