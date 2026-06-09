import React from "react";
import { ArrowRight, Users, Globe, Coins, Smartphone } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";
import { motion } from "motion/react";

interface EligibilitySectionProps {
  handleSmoothScroll: (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => void;
}

export default function EligibilitySection({ handleSmoothScroll }: EligibilitySectionProps) {
  const eligibilityFacts = [
    {
      icon: <Users className="w-5 h-5 text-gold" />,
      title: "Age Limit",
      body: "Applicant must be between 18 and 65 years of age during the active loan period."
    },
    {
      icon: <Globe className="w-5 h-5 text-gold" />,
      title: "Residency",
      body: "Citizens holding a Cambodian National ID Card, or residents with a valid work permit."
    },
    {
      icon: <Coins className="w-5 h-5 text-gold" />,
      title: "Income Stream",
      body: "A continuous verifiable monthly income from employment, business operations, or agricultural yields."
    },
    {
      icon: <Smartphone className="w-5 h-5 text-gold" />,
      title: "Verifiable Identity",
      body: "An active domestic phone number and valid commercial bank account or Bakong wallet address."
    }
  ];

  return (
    <section id="eligibility" className="py-20 md:py-32 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto border-b border-gold/15 relative z-10 font-sans">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        
        {/* Left Description Column */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="lg:col-span-5 lg:sticky lg:top-[112px]"
        >
          <div className="inline-flex items-center gap-1.5 text-[0.7rem] font-semibold tracking-widest text-gold uppercase mb-3 font-mono">
            <span className="w-6 h-[1px] bg-gold block"></span>
            Credit Assessment
          </div>
          
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
            Pre-Application Criteria
          </h2>

          <div className="w-[48px] h-[2px] bg-gold my-6"></div>

          <p className="text-xs sm:text-sm md:text-base text-slate leading-relaxed mb-8">
            We aim to make our micro-financing packages as inclusive as possible. Before using the digital submission channel, please verify you fulfill the standard requirements listed here.
          </p>

          <a 
            href="#contact" 
            onClick={(e) => handleSmoothScroll(e, "contact")}
            className={buttonVariants({
              variant: "default",
              className: "inline-flex items-center gap-2 px-8 py-6 bg-gold text-navy font-bold rounded-[2px] text-xs uppercase tracking-wider hover:bg-gold-light cursor-pointer hover:no-underline"
            })}
          >
            Check My score Now
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </motion.div>

        {/* Right Fact Grid Column */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {eligibilityFacts.map((fact, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: "easeOut" }}
            >
              <Card 
                className="bg-navy-mid border border-gold/15 p-6 rounded-[2px] transition-all duration-300 hover:border-gold/40 group flex flex-col justify-between shadow-none h-full"
              >
                <CardContent className="p-0">
                  <div className="w-10 h-10 rounded-[2px] bg-navy flex items-center justify-center mb-4 border border-gold/10 group-hover:bg-gold/10 transition-colors">
                    {fact.icon}
                  </div>
                  <h3 className="font-sans font-bold text-xs sm:text-sm text-white mb-2 tracking-wide group-hover:text-gold-light transition-colors">
                    {fact.title}
                  </h3>
                  <p className="text-[0.75rem] text-slate leading-relaxed">
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
