/**
 * ============================================================================
 * File: EligibilitySection.tsx
 * Author: Atonnydev
 * Date: 2026-06-09
 * Component/Module: Eligibility Section
 * Description: Details the pre-application criteria and user requirements.
 * ============================================================================
 */
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "motion/react";

export default function EligibilitySection() {
  const eligibilityFacts = [
    {
      icon: "🎂",
      title: "Age 18–65",
      body: "Applicants must be between 18 and 65 years old at the time of application."
    },
    {
      icon: "🪪",
      title: "Khmer National ID",
      body: "A valid Cambodian National ID card or passport is required for identity verification."
    },
    {
      icon: "📞",
      title: "Active Phone Number",
      body: "A working Cambodian mobile number is needed to receive OTP verification and loan updates."
    },
    {
      icon: "💼",
      title: "Income Source",
      body: "Salaried employees, freelancers, and business owners all qualify. No minimum salary required for smaller loans."
    },
    {
      icon: "🏦",
      title: "Bank or e-Wallet",
      body: "Must have an active ABA, ACLEDA, Wing, or other Cambodian bank account for fund disbursement."
    },
    {
      icon: "📋",
      title: "Clean Credit History",
      body: "Good standing with Cambodia Credit Bureau (CBC) required. First-time borrowers with no history are welcome to apply."
    }
  ];

  return (
    <section id="eligibility" className="py-20 md:py-32 bg-navy-mid border-b border-gold/15 relative z-10 font-sans">
      <div className="max-w-5xl mx-auto px-6 md:px-12 lg:px-24">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center justify-center gap-1.5 text-[0.7rem] font-semibold tracking-widest text-gold uppercase mb-3 font-mono">
            <span className="w-6 h-[1px] bg-gold block"></span>
            Who Can Apply
            <span className="w-6 h-[1px] bg-gold block"></span>
          </div>
          
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight mb-4">
            Eligibility Requirements
          </h2>

          <p className="text-sm md:text-base text-slate leading-relaxed max-w-[500px] mx-auto">
            Our digital loans are open to most Cambodians. Here's what you need to qualify.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {eligibilityFacts.map((fact, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: "easeOut" }}
            >
              <Card 
                className="bg-navy-mid border border-gold/15 p-6 rounded-[3px] transition-all duration-300 h-full"
              >
                <CardContent className="p-0">
                  <div className="text-2xl mb-3">
                    {fact.icon}
                  </div>
                  <h3 className="font-sans font-semibold text-sm text-white mb-1">
                    {fact.title}
                  </h3>
                  <p className="text-[0.8rem] text-slate leading-relaxed">
                    {fact.body}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
