import React from "react";
import { Coins, Smartphone, Clock, Wallet } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "motion/react";

export default function HowItWorksSection() {
  const steps = [
    {
      num: "01",
      icon: <Coins className="w-5 h-5" />,
      title: "1. Calculate Terms",
      desc: "Choose your ideal principal amount and month repayment limits on our custom pricing sliders."
    },
    {
      num: "02",
      icon: <Smartphone className="w-5 h-5" />,
      title: "2. Apply in Minutes",
      desc: "Fill out basic fields on our encrypted contact portal with zero physical paperwork or documents required."
    },
    {
      num: "03",
      icon: <Clock className="w-5 h-5" />,
      title: "3. Get Approved",
      desc: "Our smart credit analysis pipelines assess and authorize your files in under 2 hours maximum."
    },
    {
      num: "04",
      icon: <Wallet className="w-5 h-5" />,
      title: "4. Receive Funds",
      desc: "The allowed cash is wired directly to your commercial bank balance or mobile Bakong wallet instantly."
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
          className="max-w-2xl mb-16"
        >
          <div className="inline-flex items-center gap-1.5 text-[0.7rem] font-semibold tracking-widest text-gold uppercase mb-3 font-mono">
            <span className="w-6 h-[1px] bg-gold block"></span>
            Seamless Onboarding
          </div>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
            Simple 4-Step Application
          </h2>
          <p className="mt-4 text-xs sm:text-sm text-slate leading-relaxed">
            No long queues, no stamp papers, no stressful face-to-face screenings. Everything is completed and disbursed digitally.
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
