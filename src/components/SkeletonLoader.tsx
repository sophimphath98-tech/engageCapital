import React from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { motion } from "motion/react";

export default function SkeletonLoader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="fixed inset-0 z-[200] bg-navy flex flex-col overflow-hidden select-none"
    >
      {/* Dynamic visual light leaks */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[20%] right-[-10%] w-[50vw] h-[50vw] bg-gold/[0.03] rounded-full filter blur-[120px]"></div>
        <div className="absolute bottom-[-10%] left-[-15%] w-[60vw] h-[60vw] bg-navy-mid/[0.5] rounded-full filter blur-[100px]"></div>
      </div>

      {/* Khmer Lattice Watermark Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.02] z-0 overflow-hidden">
        <svg viewBox="0 0 1600 1200" className="w-full h-full object-cover">
          <pattern id="loader-lattice" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
            <path d="M40 0 L80 40 L40 80 L0 40 Z" fill="none" stroke="#D4AF37" strokeWidth="1"/>
          </pattern>
          <rect width="100%" height="100%" fill="url(#loader-lattice)"/>
        </svg>
      </div>

      {/* Nav skeleton */}
      <header className="h-[72px] border-b border-gold/10 px-6 md:px-12 lg:px-24 flex items-center justify-between relative z-10">
        <div className="flex items-center gap-3">
          <Skeleton className="w-7 h-7 bg-gold/10 rounded-[2px]" />
          <div className="space-y-1.5">
            <Skeleton className="h-3 w-24 bg-gold/20" />
            <Skeleton className="h-2 w-16 bg-gold/15" />
          </div>
        </div>
        <div className="hidden md:flex items-center gap-6">
          <Skeleton className="h-3.5 w-14 bg-slate/15" />
          <Skeleton className="h-3.5 w-16 bg-slate/15" />
          <Skeleton className="h-3.5 w-24 bg-slate/15" />
          <Skeleton className="h-3.5 w-16 bg-slate/15" />
        </div>
        <div>
          <Skeleton className="h-8 w-24 bg-gold/10 rounded-[2px]" />
        </div>
      </header>

      {/* Main loading content resembling the page structure */}
      <div className="flex-1 overflow-y-auto px-6 md:px-12 lg:px-24 py-12 relative z-10 max-w-7xl mx-auto w-full flex flex-col justify-center">
        
        {/* Hero Area Skeleton */}
        <div className="max-w-4xl space-y-8 mb-16">
          {/* Subtag */}
          <div className="flex items-center gap-3">
            <Skeleton className="h-0.5 w-8 bg-gold/30" />
            <Skeleton className="h-4 w-60 bg-gold/25" />
          </div>

          {/* Heading lines */}
          <div className="space-y-3.5">
            <Skeleton className="h-10 md:h-14 w-[85%] bg-white/10" />
            <Skeleton className="h-10 md:h-14 w-[65%] bg-gold/20" />
            <Skeleton className="h-10 md:h-14 w-[75%] bg-white/10" />
          </div>

          {/* Body paragraph */}
          <div className="space-y-2 max-w-2xl py-2">
            <Skeleton className="h-4 w-full bg-slate/15" />
            <Skeleton className="h-4 w-[90%] bg-slate/15" />
            <Skeleton className="h-4 w-[60%] bg-slate/15" />
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 pt-4">
            <Skeleton className="h-12 w-40 bg-gold/20 rounded-[2px]" />
            <Skeleton className="h-12 w-36 bg-slate/10 border border-slate/10 rounded-[2px]" />
          </div>
        </div>

        {/* Dynamic Card / Trust indicators Skeleton at the bottom */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-gold/10">
          {[1, 2, 3].map((idx) => (
            <div key={idx} className="p-6 border border-gold/5 bg-navy-mid/20 rounded-[2px] space-y-4">
              <div className="flex justify-between items-start">
                <Skeleton className="h-10 w-10 bg-gold/15 rounded-[2px]" />
                <Skeleton className="h-6 w-8 bg-gold/5" />
              </div>
              <Skeleton className="h-4 w-[50%] bg-white/10" />
              <div className="space-y-1.5">
                <Skeleton className="h-3 w-full bg-slate/15" />
                <Skeleton className="h-3 w-[85%] bg-slate/15" />
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Progress Line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-navy-mid overflow-hidden">
        <motion.div
          initial={{ left: "-100%" }}
          animate={{ left: "100%" }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "linear" }}
          className="absolute top-0 bottom-0 w-[40%] bg-gradient-to-r from-transparent via-gold to-transparent"
        />
      </div>

    </motion.div>
  );
}
