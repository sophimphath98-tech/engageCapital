"use client";

import React, { useState } from "react";
import { X, CheckCircle, FileCheck2 } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StatsCounter from "@/components/StatsCounter";
import Calculator from "@/components/Calculator";
import ContactForm from "@/components/ContactForm";
import SkeletonLoader from "@/components/SkeletonLoader";

// Section imports from organized section folder
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import LoanProductsSection from "@/components/sections/LoanProductsSection";
import HowItWorksSection from "@/components/sections/HowItWorksSection";
import EligibilitySection from "@/components/sections/EligibilitySection";

import { PillarItem } from "@/types";

// Loan product modal specifications
interface LoanProductItem {
  id: string;
  num: string;
  name: string;
  desc: string;
  defaultAmount: number;
  defaultMonths: number;
  defaultRate: number;
  details: string[];
  requiredDocs: string[];
  disbursementTime: string;
}

export default function Home() {
  const loanProducts: LoanProductItem[] = [
    {
      id: "srv-personal",
      num: "01",
      name: "Personal Loan",
      desc: "Fast, reliable cash loans for medical emergencies, travel, education, or household expenditures with zero collateral required.",
      defaultAmount: 3000,
      defaultMonths: 12,
      defaultRate: 12.0,
      details: [
        "Unsecured personal credit matching your monthly income cycles",
        "No security deposits or vehicle title hold requirements",
        "Repayment schedules fixed to regular monthly calendar dates",
        "Disbursements instantly routed directly to your preferred bank account"
      ],
      requiredDocs: [
        "Valid National ID card (or passport for residents)",
        "Latest 3 months of bank statements",
        "Proof of current residential address (Utility bill or book address)"
      ],
      disbursementTime: "In under 2 Hours"
    },
    {
      id: "srv-sme",
      num: "02",
      name: "SME Business Loan",
      desc: "Working capital infusions to replenish retail inventories, finance salary payrolls, or acquire corporate machinery assets.",
      defaultAmount: 25000,
      defaultMonths: 24,
      defaultRate: 9.5,
      details: [
        "Larger capital ceilings structured specifically for registered enterprises",
        "Amortization schemes customizable around seasonal sales cycles",
        "Competitive APR starting under 10% to preserve operational cash flow",
        "Professional loan advisor provided to co-optimize balance sheet metrics"
      ],
      requiredDocs: [
        "Official business patent tax license (or equal registration certificate)",
        "Company bank ledger logs spanning the prior 6 months",
        "Simple current income statement (or standard balance sheet)"
      ],
      disbursementTime: "Within 24 Hours max"
    },
    {
      id: "srv-payroll",
      num: "03",
      name: "Payroll Loan",
      desc: "Advance salary loans designed for registered blue-collar or white-collar private sector workers experiencing immediate cash strain.",
      defaultAmount: 1200,
      defaultMonths: 6,
      defaultRate: 11.0,
      details: [
        "Direct partnership programs with trusted employers across Cambodia",
        "Simplest document screening criteria for rapid automated processing",
        "Automatic deduct structures directly connected to company payroll systems",
        "No prior credit history track record mandated for approval"
      ],
      requiredDocs: [
        "National ID card or equivalent verified passport identification",
        "Latest employment certificate or official corporate ID card",
        "Pre-authorized company automated payroll debit agreement"
      ],
      disbursementTime: "Instantly (Within 1 Hour)"
    },
    {
      id: "srv-agri",
      num: "04",
      name: "Agricultural Loan",
      desc: "Specially structured credit facilities crafted for local Cambodian farmers to acquire high-yield seeds and fertilizers.",
      defaultAmount: 8000,
      defaultMonths: 18,
      defaultRate: 8.5,
      details: [
        "Repayment installments aligned with harvesting schedules",
        "Extremely low regional rates designed to support rural communities",
        "Adaptable extensions during unseasonal climatic disasters",
        "Applicable for solar irrigation pumping systems or green equipment"
      ],
      requiredDocs: [
        "National ID identification matching land parcel owner",
        "Simple agricultural land user record certificate or lease",
        "Basic estimate of projected seasonal agricultural crop yields"
      ],
      disbursementTime: "Within 2 Business Days"
    },
    {
      id: "srv-emergency",
      num: "05",
      name: "Emergency Loan",
      desc: "Critical same-day financing for sudden medical bills, vehicle breakdowns, or urgent utility repairs, accessible 24/7.",
      defaultAmount: 800,
      defaultMonths: 3,
      defaultRate: 15.0,
      details: [
        "Minimal criteria screening prioritizing speed above all else",
        "100% web uploads with zero physical branch visits required",
        "Available for processing on weekends and traditional Khmer holidays",
        "Transparent schedule outlining exact repayments before signing"
      ],
      requiredDocs: [
        "National ID card (or verified smartphone identity)",
        "Recent 1 month of mobile money transactions ledger (Bakong, Wing, ABA)"
      ],
      disbursementTime: "In 30 Minutes"
    },
    {
      id: "srv-green",
      num: "06",
      name: "Green Loan",
      desc: "Eco-friendly low-interest financing for solar panels, electric vehicle purchases, or insulation retrofitting.",
      defaultAmount: 15000,
      defaultMonths: 24,
      defaultRate: 8.0,
      details: [
        "Bonus discounts on APR for energy-efficient materials",
        "Flexible loan repayment schedules up to 36 months",
        "Direct pre-approval on select EV models with domestic dealers",
        "Helps domestic SME operations reduce electrical utility costs"
      ],
      requiredDocs: [
        "National ID card and proof of continuous monthly income",
        "Vendor invoice statement outlining solar setup or EV quotation details"
      ],
      disbursementTime: "Within 24 Hours"
    }
  ];

  const pillars: PillarItem[] = [
    {
      id: "pil-1",
      icon: "⚡",
      title: "2-Hour Approvals",
      desc: "Our automated credit routing engine processes verified income fields instantly, transferring funds into your account the same day."
    },
    {
      id: "pil-2",
      icon: "🔒",
      title: "100% Digitally Secure",
      desc: "Data-protection rules align with Central Bank guidelines. Sensitive application logs remain securely compartmentalized."
    },
    {
      id: "pil-3",
      icon: "🤝",
      title: "No Collateral Required",
      desc: "We analyze transaction trends, salary patterns, and cash flow cycles directly, eliminating stressful property title holds."
    }
  ];

  const [activeProduct, setActiveProduct] = useState<LoanProductItem | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  React.useEffect(() => {
    if (activeProduct) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [activeProduct]);

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 72;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const handleCalculateForProduct = (prod: LoanProductItem) => {
    setActiveProduct(null);
    const calculatorSect = document.getElementById("calculator");
    if (calculatorSect) {
      calculatorSect.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-navy text-text-body font-sans relative selection:bg-gold selection:text-navy overflow-hidden min-h-screen">
      <AnimatePresence mode="wait">
        {isLoading ? (
          <SkeletonLoader key="loader" />
        ) : (
          <motion.div
            key="main-web-content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* ── BACKGROUND WATERMARK / KHMER LATTICE PATTERN ── */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.035] z-0 overflow-hidden">
              <svg viewBox="0 0 1600 1200" className="w-full h-full object-cover">
                <defs>
                  <pattern id="khmer-latt" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
                    <path d="M40 0 L80 40 L40 80 L0 40 Z" fill="none" stroke="#D4AF37" strokeWidth="1"/>
                    <path d="M40 20 L60 40 L40 60 L20 40 Z" fill="none" stroke="#D4AF37" strokeWidth="0.6"/>
                    <circle cx="40" cy="40" r="4" fill="none" stroke="#D4AF37" strokeWidth="0.8"/>
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#khmer-latt)"/>
              </svg>
            </div>

            {/* FIXED NAV */}
            <Navbar />

            {/* HERO SECTION */}
            <HeroSection handleSmoothScroll={handleSmoothScroll} />

            {/* STATS COUNT BAND */}
            <StatsCounter />

            {/* ABOUT US SECTION */}
            <AboutSection pillars={pillars} />

            {/* LOAN PRODUCTS SECTION */}
            <LoanProductsSection loanProducts={loanProducts} setActiveProduct={setActiveProduct} />

            {/* HOW IT WORKS SECTION */}
            <HowItWorksSection />

            {/* CORE FINANCIAL CALCULATOR SUITE */}
            <Calculator />

            {/* ELIGIBILITY & REQ SECTION */}
            <EligibilitySection handleSmoothScroll={handleSmoothScroll} />

            {/* CONTACT & ACCOUNT TRANSITION FORM */}
            <ContactForm />

            {/* COMPLIANT LUXURY FOOTER */}
            <Footer handleSmoothScroll={handleSmoothScroll} />

            {/* DETAIL MODAL FOR LOAN PRODUCTS */}
            <AnimatePresence>
              {activeProduct && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-navy/95 backdrop-blur-md"
                >
                  <motion.div
                    initial={{ scale: 0.95, y: 15 }}
                    animate={{ scale: 1, y: 0 }}
                    exit={{ scale: 0.95, y: 15 }}
                    transition={{ type: "spring", duration: 0.4 }}
                    className="bg-navy-mid border-2 border-gold max-w-2xl w-full rounded-[4px] overflow-hidden shadow-2xl relative flex flex-col max-h-[90vh] font-sans"
                  >
                    <button 
                      onClick={() => setActiveProduct(null)}
                      className="absolute top-4 right-4 text-slate hover:text-white p-2 focus:outline-none z-10 transition-colors cursor-pointer"
                      aria-label="Close dialog"
                    >
                      <X className="w-5 h-5" />
                    </button>

                    <div className="p-6 md:p-8 overflow-y-auto space-y-6 text-slate text-xs">
                      
                      {/* Header */}
                      <div className="border-b border-gold/15 pb-4">
                        <span className="font-serif text-3xl block text-gold/30 font-extrabold mb-1 font-mono">
                          {activeProduct.num}
                        </span>
                        <h3 className="font-serif text-xl md:text-2xl font-bold text-white leading-tight">
                          {activeProduct.name}
                        </h3>
                        <p className="text-xs mt-1 font-sans tracking-wide uppercase font-semibold text-gold">
                          Disbursement cycle: {activeProduct.disbursementTime}
                        </p>
                      </div>

                      {/* Description */}
                      <div>
                        <h4 className="font-bold text-[0.68rem] tracking-widest text-gold uppercase mb-2 font-mono">
                          Product Overview
                        </h4>
                        <p className="text-stone-300 text-sm leading-relaxed">
                          {activeProduct.desc}
                        </p>
                      </div>

                      {/* Bullet Points */}
                      <div>
                        <h4 className="font-bold text-[0.68rem] tracking-widest text-gold uppercase mb-3 font-mono">
                          Key Features
                        </h4>
                        <ul className="space-y-2.5">
                          {activeProduct.details.map((point, i) => (
                            <li key={i} className="flex gap-2.5 items-start text-xs text-stone-300">
                              <CheckCircle className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                              <span className="leading-relaxed">{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Required Documentation */}
                      <div>
                        <h4 className="font-bold text-[0.68rem] tracking-widest text-gold uppercase mb-3 font-mono">
                          Required Upload Files
                        </h4>
                        <ul className="space-y-2">
                          {activeProduct.requiredDocs.map((doc, i) => (
                            <li key={i} className="flex gap-2.5 items-center text-xs text-stone-300 bg-navy/60 p-2 border border-gold/10 rounded-[2px]">
                              <FileCheck2 className="w-4 h-4 text-gold flex-shrink-0" />
                              <span>{doc}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                    </div>

                    {/* Action Bar */}
                    <div className="bg-navy border-t border-gold/15 p-4 flex flex-col sm:flex-row justify-between items-center gap-3">
                      <span className="text-[10px] text-slate uppercase tracking-wider text-center sm:text-left font-sans">
                        Calculate and prefill this loan's criteria instantly.
                      </span>
                      <button
                        onClick={() => handleCalculateForProduct(activeProduct)}
                        className="px-5 py-2 hover:bg-gold-light hover:text-navy cursor-pointer w-full sm:w-auto text-center bg-gold text-navy font-bold text-xs uppercase tracking-wider rounded-[2px]"
                      >
                        Configure Slider & Apply →
                      </button>
                    </div>

                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
