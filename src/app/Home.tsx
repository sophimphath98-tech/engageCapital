/**
 * ============================================================================
 * File: Home.tsx
 * Author: Atonnydev
 * Date: 2026-06-09
 * Component/Module: Home Main Page
 * Description: Main client component that orchestrates and renders all landing 
 *              page sections.
 * ============================================================================
 */
"use client";

import React, { useState } from "react";
import { X, CheckCircle, FileCheck2 } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

// Layout Components
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

// Shared Components
import StatsCounter from "@/components/shared/StatsCounter";
import Calculator from "@/components/shared/Calculator";
import ContactForm from "@/components/shared/ContactForm";
import SkeletonLoader from "@/components/shared/SkeletonLoader";

// Feature Components
import HeroSection from "@/components/features/HeroSection";
import AboutSection from "@/components/features/AboutSection";
import LoanProductsSection from "@/components/features/LoanProductsSection";
import HowItWorksSection from "@/components/features/HowItWorksSection";
import EligibilitySection from "@/components/features/EligibilitySection";

// Types, Constants, Hooks
import { LoanProductItem } from "@/types";
import { loanProducts as fallbackProducts } from "@/constants/loanProducts";
import { pillars } from "@/constants/pillars";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";

interface HomeProps {
  initialProducts?: LoanProductItem[];
}

export default function Home({ initialProducts = fallbackProducts }: HomeProps) {
  const [activeProduct, setActiveProduct] = useState<LoanProductItem | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  
  const { handleSmoothScroll } = useSmoothScroll(72);

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
            <LoanProductsSection loanProducts={initialProducts} setActiveProduct={setActiveProduct} />

            {/* HOW IT WORKS SECTION */}
            <HowItWorksSection />

            {/* CORE FINANCIAL CALCULATOR SUITE */}
            <Calculator loanProducts={initialProducts} />

            {/* ELIGIBILITY & REQ SECTION */}
            <EligibilitySection />

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
