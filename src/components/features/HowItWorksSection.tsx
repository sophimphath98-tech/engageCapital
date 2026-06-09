/**
 * ============================================================================
 * File: HowItWorksSection.tsx
 * Author: Atonnydev
 * Date: 2026-06-09
 * Component/Module: How It Works Section
 * Description: Outlines the 4-step digital loan application process.
 * ============================================================================
 */
import React from "react";
import { Coins, Smartphone, Clock, Wallet } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "motion/react";

export default function HowItWorksSection() {
  const steps = [
    {
      num: "01",
      icon: "📱",
      title: "1. Apply Online",
      desc: "Fill out our simple digital form on the website or app. Takes less than 5 minutes."
    },
    {
      num: "02",
      icon: "🪪",
      title: "2. Verify Identity",
      desc: "Upload your National ID and a selfie. Our AI-powered KYC verifies you instantly and securely."
    },
    {
      num: "03",
      icon: "✅",
      title: "3. Get Approved",
      desc: "Our credit engine reviews your application and delivers a decision in as little as 2 hours."
    },
    {
      num: "04",
      icon: "💸",
      title: "4. Receive Funds",
      desc: "Funds are disbursed directly to your bank account or ABA/WING wallet — same day."
    }
  ];

  return (
    <section id="how-it-works" className="py-20 md:py-32 bg-navy border-b border-gold/15 relative z-10 font-sans">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-2xl mx-auto text-center mb-16"
        >
          <div className="inline-flex items-center justify-center gap-1.5 text-[0.7rem] font-semibold tracking-widest text-gold uppercase mb-3 font-mono">
            <span className="w-6 h-[1px] bg-gold block"></span>
            Simple Process
            <span className="w-6 h-[1px] bg-gold block"></span>
          </div>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight mb-4">
            Get Your Loan in 4 Easy Steps
          </h2>
          <p className="text-xs sm:text-sm text-slate leading-relaxed mx-auto max-w-[500px]">
            No branch visits. No stacks of paperwork. Just your phone and a few minutes.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {steps.map((step, idx) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.12, ease: "easeOut" }}
            >
              <Card 
                className="relative p-6 border border-gold/10 bg-navy-mid/40 rounded-[2px] group hover:border-gold/30 transition-all h-full"
              >
                <CardContent className="p-0">
                  <div className="absolute top-2 right-4 font-serif text-4xl font-extrabold text-gold/10">{step.num}</div>
                  <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center text-gold mb-5">
                    {step.icon}
                  </div>
                  <h3 className="font-serif font-bold text-sm text-white mb-2 group-hover:text-gold-light">{step.title}</h3>
                  <p className="text-[0.74rem] text-slate leading-relaxed">{step.desc}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
