import React from "react";

interface FooterProps {
  handleSmoothScroll: (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => void;
}

export default function Footer({ handleSmoothScroll }: FooterProps) {
  return (
    <footer className="bg-[#030A12] border-t border-gold/15 pt-16 pb-8 text-xs relative z-10 font-sans text-slate">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
        
        {/* Brand Col */}
        <div className="md:col-span-2">
          <div className="flex items-center gap-3 mb-4">
            <div 
              style={{ clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)" }}
              className="w-7 h-7 bg-gradient-to-br from-gold to-gold-light flex items-center justify-center font-bold text-xs"
            >
              🏛
            </div>
            <div>
              <div className="font-serif text-sm font-extrabold text-white leading-none tracking-wide">
                Engage Capital
              </div>
              <div className="text-[0.55rem] font-sans font-medium text-gold tracking-widest uppercase mt-0.5">
                Cambodia Co., Ltd.
              </div>
            </div>
          </div>
          <p className="leading-relaxed max-w-sm text-[0.74rem]">
            An authorized digital micro-finance provider streamlining loan principal lines, SME investments, agricultural credits, and short-term advance liquidity across the Kingdom of Cambodia.
          </p>
        </div>

        {/* Links 1 */}
        <div>
          <h4 className="font-bold text-[0.68rem] tracking-widest text-gold uppercase mb-4 font-mono">
            Loan Products
          </h4>
          <ul className="space-y-2 text-[0.74rem] font-medium">
            <li>
              <a href="#services" onClick={(e) => handleSmoothScroll(e, "services")} className="hover:text-gold transition-colors block">
                Personal Cash Loans
              </a>
            </li>
            <li>
              <a href="#services" onClick={(e) => handleSmoothScroll(e, "services")} className="hover:text-gold transition-colors block">
                SME Business Capital
              </a>
            </li>
            <li>
              <a href="#services" onClick={(e) => handleSmoothScroll(e, "services")} className="hover:text-gold transition-colors block">
                Payroll Advance Line
              </a>
            </li>
            <li>
              <a href="#services" onClick={(e) => handleSmoothScroll(e, "services")} className="hover:text-gold transition-colors block">
                Agricultural Crop Credit
              </a>
            </li>
            <li>
              <a href="#services" onClick={(e) => handleSmoothScroll(e, "services")} className="hover:text-gold transition-colors block">
                Emergency Same-Day
              </a>
            </li>
          </ul>
        </div>

        {/* Links 2 */}
        <div>
          <h4 className="font-bold text-[0.68rem] tracking-widest text-gold uppercase mb-4 font-mono">
            Navigation Link
          </h4>
          <ul className="space-y-2 text-[0.74rem] font-medium">
            <li>
              <a href="#about" onClick={(e) => handleSmoothScroll(e, "about")} className="hover:text-gold transition-colors block">
                About us
              </a>
            </li>
            <li>
              <a href="#how-it-works" onClick={(e) => handleSmoothScroll(e, "how-it-works")} className="hover:text-gold transition-colors block">
                How It Works
              </a>
            </li>
            <li>
              <a href="#calculator" onClick={(e) => handleSmoothScroll(e, "calculator")} className="hover:text-gold transition-colors block">
                Amortized Calculator
              </a>
            </li>
            <li>
              <a href="#eligibility" onClick={(e) => handleSmoothScroll(e, "eligibility")} className="hover:text-gold transition-colors block">
                Eligibility Criteria
              </a>
            </li>
            <li>
              <a href="#contact" onClick={(e) => handleSmoothScroll(e, "contact")} className="hover:text-gold transition-colors block">
                Apply Online Form
              </a>
            </li>
          </ul>
        </div>

      </div>

      {/* Regulatory fine-print & legal bar */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 pt-8 border-t border-stone-900 flex flex-col md:flex-row justify-between items-center gap-4 text-[0.68rem] leading-relaxed text-center md:text-left">
        <p>
          © 2026 Engage Capital Cambodia Co., Ltd. All rights reserved. Managed under state regulatory licenses and registered with the Ministry of Commerce of Cambodia as a digital microfinance advisory platform.
        </p>
        <div className="flex gap-4 flex-wrap justify-center font-medium font-mono text-[0.62rem]">
          <a href="#legal" className="hover:text-gold transition-colors">Privacy Policy</a>
          <a href="#legal" className="hover:text-gold transition-colors">Terms of Corporate Use</a>
          <a href="#legal" className="hover:text-gold transition-colors">NBC Disclaimers</a>
        </div>
      </div>

    </footer>
  );
}
