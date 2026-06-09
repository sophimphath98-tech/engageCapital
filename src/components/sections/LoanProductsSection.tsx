import React from "react";
import { ArrowUpRight, ChevronRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "motion/react";

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

interface LoanProductsSectionProps {
  loanProducts: LoanProductItem[];
  setActiveProduct: (prod: LoanProductItem) => void;
}

export default function LoanProductsSection({ loanProducts, setActiveProduct }: LoanProductsSectionProps) {
  return (
    <section id="services" className="bg-navy-mid/80 py-20 md:py-32 relative z-10 border-b border-gold/15">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-16"
        >
          <div>
            <div className="inline-flex items-center gap-1.5 text-[0.7rem] font-semibold tracking-widest text-gold uppercase mb-3 font-mono">
              <span className="w-6 h-[1px] bg-gold block"></span>
              Select Your Need
            </div>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-2">
              Our Digital Loan Products
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate md:max-w-xs leading-relaxed">
            Transparent digital lending services explicitly optimized to fulfill personal, business, or farming investments.
          </p>
        </motion.div>

        {/* Services/Products Grid with interactive onClick */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-gold/15 border border-gold/15 overflow-hidden rounded-[2px] font-sans">
          {loanProducts.map((prod, idx) => (
            <motion.div
              key={prod.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: (idx % 3) * 0.12, ease: "easeOut" }}
              className="h-full flex"
            >
              <Card
                onClick={() => setActiveProduct(prod)}
                className="bg-navy p-8 md:p-10 relative group hover:bg-navy-soft/30 transition-all duration-300 cursor-pointer flex flex-col justify-between min-h-[250px] rounded-none border-0 shadow-none w-full"
              >
                <CardContent className="p-0 flex flex-col justify-between h-full w-full">
                  <div>
                    <div className="flex justify-between items-start mb-6">
                      <span className="font-serif text-4xl font-extrabold text-gold/10 group-hover:text-gold/20 select-none">
                        {prod.num}
                      </span>
                      <button className="text-gold/20 group-hover:text-gold group-hover:translate-x-1 group-hover:-translate-y-1 transition-all">
                        <ArrowUpRight className="w-5 h-5" />
                      </button>
                    </div>
                    <h3 className="font-serif text-base sm:text-lg font-bold text-white mb-2 group-hover:text-gold-light transition-colors">
                      {prod.name}
                    </h3>
                    <p className="text-xs sm:text-[0.78rem] text-slate group-hover:text-stone-300 line-clamp-3 leading-relaxed mb-4">
                      {prod.desc}
                    </p>
                    <div className="flex items-center justify-between text-[0.7rem] font-mono text-gold-light bg-navy-mid/60 px-2.5 py-1.5 border border-gold/5 rounded-[2px]">
                      <span>Rate: ~{prod.defaultRate}% APR</span>
                      <span>Max: ${prod.defaultAmount.toLocaleString()}</span>
                    </div>
                  </div>
                  <div className="mt-6 flex items-center gap-1 text-[0.65rem] font-bold text-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-sans tracking-widest uppercase">
                    Details & Required Docs <ChevronRight className="w-3.5 h-3.5" />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
