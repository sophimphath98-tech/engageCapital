import React from "react";
import { motion } from "motion/react";
import { ArrowRight, Sparkles } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";

interface HeroSectionProps {
  handleSmoothScroll: (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => void;
}

export default function HeroSection({ handleSmoothScroll }: HeroSectionProps) {
  return (
    <section id="home" className="relative min-h-[100vh] flex flex-col justify-center px-6 md:px-12 lg:px-24 pt-[72px] overflow-hidden z-10 bg-navy">
      
      {/* Dynamic visual light leaks */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[20%] right-[-10%] w-[50vw] h-[50vw] bg-gold/[0.04] rounded-full filter blur-[120px]"></div>
        <div className="absolute bottom-[-10%] left-[-15%] w-[60vw] h-[60vw] bg-navy-mid/[0.8] rounded-full filter blur-[100px]"></div>
      </div>

      <div className="max-w-4xl relative z-10 mt-8 mb-12">
        
        <motion.div 
          initial={{ opacity: 0, x: -15 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-3 text-xs md:text-sm font-semibold tracking-widest text-gold uppercase mb-6 font-mono"
        >
          <span className="w-8 h-[1px] bg-gold"></span>
          Bakong Integrated · Instant Approval · Cambodia Wide
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] text-white my-6 tracking-tight"
        >
          Empowering Your <br className="hidden sm:inline" />
          <em className="text-gold italic font-normal font-serif">Financial Freedom</em> with <br />
          Instant Digital Loans
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="text-base sm:text-lg md:text-xl text-stone-300 font-light max-w-2xl leading-relaxed mb-10"
        >
          Engage Capital Cambodia delivers quick, transparent micro-financing with zero physical forms, no security collateral, and automated bank transfers in under 2 hours.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-wrap gap-4 items-center"
        >
          <a 
            href="#contact" 
            onClick={(e) => handleSmoothScroll(e, "contact")}
            className={buttonVariants({
              variant: "default",
              className: "px-8 py-6 bg-gold text-navy font-bold rounded-[2px] text-xs md:text-sm uppercase tracking-wider shadow-lg hover:bg-gold-light hover:text-navy cursor-pointer hover:no-underline"
            })}
          >
            Apply Online Now
          </a>
          <a 
            href="#calculator" 
            onClick={(e) => handleSmoothScroll(e, "calculator")}
            className={buttonVariants({
              variant: "outline",
              className: "px-8 py-6 bg-transparent text-cream border border-stone-200/20 hover:border-gold hover:text-gold font-bold rounded-[2px] text-xs md:text-sm uppercase tracking-wider cursor-pointer hover:no-underline"
            })}
          >
            Try Calculator
          </a>
        </motion.div>

      </div>

      {/* Scroll anchor */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-6 md:left-12 lg:left-24 z-10 flex items-center gap-3 text-[10px] sm:text-xs tracking-widest uppercase text-slate"
      >
        <div className="h-10 w-[1px] bg-gradient-to-b from-transparent to-gold animate-pulse"></div>
        Scroll to explore loan options
      </motion.div>

    </section>
  );
}
