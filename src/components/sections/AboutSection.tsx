import React from "react";
import { PillarItem } from "../../types";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "motion/react";

interface AboutSectionProps {
  pillars: PillarItem[];
}

export default function AboutSection({ pillars }: AboutSectionProps) {
  // Animation presets
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.7, ease: "easeOut" }
  } as const;

  const scaleUp = {
    initial: { opacity: 0, scale: 0.95 },
    whileInView: { opacity: 1, scale: 1 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.8, ease: "easeOut" }
  } as const;

  return (
    <section id="about" className="py-20 md:py-32 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto border-b border-gold/15 relative z-10 font-sans">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        
        {/* Left Block */}
        <motion.div {...fadeInUp}>
          <div className="inline-flex items-center gap-1.5 text-[0.7rem] font-semibold tracking-widest text-gold uppercase mb-3 font-mono">
            <span className="w-6 h-[1px] bg-gold block"></span>
            Fast & Secure Lending
          </div>
          
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
            Micro-Financing Reimagined for Cambodia
          </h2>

          <div className="w-[48px] h-[2px] bg-gold my-6"></div>

          <p className="text-sm md:text-base text-slate leading-relaxed mb-8">
            At Engage Capital Cambodia, we are committed to making financial inclusion simple, dignified, and instant. Our advanced underwriting analytics help individuals, farmers, and small business owners secure quick disbursements without traditional bureaucratic burdens.
          </p>

          {/* Pillars */}
          <div className="space-y-6">
            {pillars.map((pil, idx) => (
              <motion.div 
                key={pil.id} 
                className="flex gap-4 items-start group"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: idx * 0.15, ease: "easeOut" }}
              >
                <div className="w-11 h-11 bg-gold/5 border border-gold/25 text-base flex items-center justify-center rounded-[2px] flex-shrink-0 group-hover:bg-gold/10 transition-colors">
                  {pil.icon}
                </div>
                <div>
                  <h3 className="font-serif font-bold text-sm text-white group-hover:text-gold-light transition-colors mb-1">
                    {pil.title}
                  </h3>
                  <p className="text-[0.78rem] text-slate leading-relaxed">
                    {pil.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </motion.div>

        {/* Right Visual Motif Block */}
        <motion.div {...scaleUp} className="relative">
          
          <Card className="bg-navy-mid border border-gold/20 p-8 md:p-12 rounded-[4px] relative overflow-hidden shadow-2xl">
            <CardContent className="p-0">
              <div className="absolute top-0 left-0 w-[4px] h-full bg-gradient-to-b from-gold to-transparent"></div>

              {/* Circular Mandala Vector Motif */}
              <div className="absolute bottom-[-15%] right-[-15%] pointer-events-none opacity-10 w-[70%] max-w-[280px]">
                <svg className="w-full h-full text-gold animate-spin-slow" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="100" cy="100" r="95" fill="none" stroke="currentColor" strokeWidth="2" />
                  <circle cx="100" cy="100" r="70" fill="none" stroke="currentColor" strokeWidth="1.5" />
                  <circle cx="100" cy="100" r="45" fill="none" stroke="currentColor" strokeWidth="1" />
                  <circle cx="100" cy="100" r="20" fill="none" stroke="currentColor" strokeWidth="1" />
                  <line x1="100" y1="5" x2="100" y2="195" stroke="currentColor" strokeWidth="0.8" />
                  <line x1="5" y1="100" x2="195" y2="100" stroke="currentColor" strokeWidth="0.8" />
                </svg>
              </div>

              <div className="text-[0.65rem] font-bold tracking-widest text-gold uppercase mb-3 font-mono">
                Platform Safety Guarantee
              </div>
              
              <blockquote className="font-serif text-lg md:text-xl lg:text-2xl text-white italic leading-relaxed mb-6 font-medium">
                "Our platform processes loan transactions using standard state-level encryption templates, giving Cambodian families safe access to fair credit anytime."
              </blockquote>

              <div className="w-10 h-[1px] bg-gold mb-5"></div>

              <p className="text-xs text-slate leading-relaxed">
                By integrating micro-finance pipelines directly with modern digital banking rails, we prevent debt spirals and offer completely custom and elastic credit terms.
              </p>
            </CardContent>
          </Card>

        </motion.div>

      </div>
    </section>
  );
}
