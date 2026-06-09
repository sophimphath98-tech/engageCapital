import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "motion/react";

interface CounterProps {
  value: string;
  numericValue: number;
  suffix: string;
  label: string;
  key?: string;
}

function StatCounterItem({ value, numericValue, suffix, label }: CounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = numericValue;
    const duration = 2000; // 2 seconds
    const startTime = performance.now();

    const animateCount = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Ease out quad
      const easeProgress = progress * (2 - progress);
      const currentVal = Math.floor(easeProgress * (end - start) + start);
      
      setCount(currentVal);

      if (progress < 1) {
        requestAnimationFrame(animateCount);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(animateCount);
  }, [isInView, numericValue]);

  // If the number actually contains a decimal value in the visual presentation (like 2.4B+)
  // We can format it cleanly. If value contains a decimal or has custom formatting, we display it, otherwise counts as standard integer
  const renderValue = () => {
    if (value.includes(".")) {
      // For things like 2.4, if count has completed, show full value, otherwise count first part or format nicely
      const currentWithDecimal = (count / (numericValue / parseFloat(value))).toFixed(1);
      return `${parseFloat(currentWithDecimal) >= parseFloat(value) ? value : currentWithDecimal + suffix}`;
    }
    return `${count}${suffix}`;
  };

  return (
    <div ref={ref} className="text-center group p-4 border border-transparent hover:border-gold/10 hover:bg-navy-soft/10 transition-all duration-300 rounded-[2px]">
      <motion.div 
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-gold group-hover:text-gold-light group-hover:scale-105 transition-all duration-300"
      >
        {renderValue()}
      </motion.div>
      <div className="mt-1.5 text-[0.65rem] md:text-[0.7rem] font-sans font-semibold tracking-widest uppercase text-slate group-hover:text-white transition-colors duration-300">
        {label}
      </div>
    </div>
  );
}

export default function StatsCounter() {
  const stats = [
    { id: "1", value: "2.4", numericValue: 24, suffix: "B+", label: "Capital Deployed" },
    { id: "2", value: "180", numericValue: 180, suffix: "+", label: "Transactions Completed" },
    { id: "3", value: "15", numericValue: 15, suffix: "+", label: "Years in Cambodia" },
    { id: "4", value: "40", numericValue: 40, suffix: "+", label: "Portfolio Companies" },
    { id: "5", value: "98", numericValue: 98, suffix: "%", label: "Client Retention" }
  ];

  return (
    <div className="bg-navy-mid border-t border-b border-gold/15 py-10 md:py-14 px-6 md:px-12 relative overflow-hidden">
      {/* Visual background lines */}
      <div className="absolute inset-0 opacity-10 pointer-events-none flex justify-between pr-20 pl-20">
        <div className="h-full w-[1px] bg-gold"></div>
        <div className="hidden md:block h-full w-[1px] bg-gold"></div>
        <div className="hidden lg:block h-full w-[1px] bg-gold"></div>
        <div className="h-full w-[1px] bg-gold"></div>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-4 relative z-10">
        {stats.map((stat) => (
          <StatCounterItem 
            key={stat.id}
            value={stat.value}
            numericValue={stat.numericValue}
            suffix={stat.suffix}
            label={stat.label}
          />
        ))}
      </div>
    </div>
  );
}
