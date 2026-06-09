import React, { useState } from "react";
import { 
  Shield, 
  Globe, 
  LineChart, 
  TrendingUp, 
  Coins, 
  Users, 
  Building2, 
  Award, 
  Scale, 
  Briefcase, 
  MapPin, 
  Phone, 
  Mail, 
  ChevronRight, 
  ArrowRight,
  X, 
  Sparkles, 
  BookOpen, 
  ArrowUpRight,
  CheckCircle,
  FileText,
  Clock,
  CheckCircle2,
  Smartphone,
  Wallet,
  FileCheck2
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import Navbar from "./components/Navbar";
import StatsCounter from "./components/StatsCounter";
import Calculator from "./components/Calculator";
import ContactForm from "./components/ContactForm";
import { ServiceItem, PillarItem, FactItem } from "./types";

// Repurposing ServiceItem as LoanProductItem
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

export default function App() {
  const loanProducts: LoanProductItem[] = [
    {
      id: "srv-personal",
      num: "01",
      name: "Personal Loan",
      desc: "Fast, reliable cash loans for medical emergencies, travel, education, or household expenditures with zero collateral required.",
      defaultAmount: 3000,
      defaultMonths: 12,
      defaultRate: 12.0,
      details: [
        "Unsecured personal credit matching your monthly income cycles",
        "No security deposits or vehicle title hold requirements",
        "Repayment schedules fixed to regular monthly calendar dates",
        "Disbursements instantly routed directly to your preferred bank account"
      ],
      requiredDocs: [
        "Valid National ID card (or passport for residents)",
        "Latest 3 months of bank statements",
        "Proof of current residential address (Utility bill or book address)"
      ],
      disbursementTime: "In under 2 Hours"
    },
    {
      id: "srv-sme",
      num: "02",
      name: "SME Business Loan",
      desc: "Working capital infusions to replenish retail inventories, finance salary payrolls, or acquire corporate machinery assets.",
      defaultAmount: 25000,
      defaultMonths: 24,
      defaultRate: 9.5,
      details: [
        "Larger capital ceilings structured specifically for registered enterprises",
        "Amortization schemes customizable around seasonal sales cycles",
        "Competitive APR starting under 10% to preserve operational cash flow",
        "Professional loan advisor provided to co-optimize balance sheet metrics"
      ],
      requiredDocs: [
        "Official business patent tax license (or equal registration certificate)",
        "Company bank ledger logs spanning the prior 6 months",
        "Simple current income statement (or standard balance sheet)"
      ],
      disbursementTime: "Within 24 Hours max"
    },
    {
      id: "srv-payroll",
      num: "03",
      name: "Payroll Loan",
      desc: "Advance salary loans designed for registered blue-collar or white-collar private sector workers experiencing immediate cash strain.",
      defaultAmount: 1200,
      defaultMonths: 6,
      defaultRate: 11.0,
      details: [
        "Direct partnership programs with trusted employers across Cambodia",
        "Simplest document screening criteria for rapid automated processing",
        "Automatic deduct structures directly connected to company payroll systems",
        "No prior credit history track record mandated for approval"
      ],
      requiredDocs: [
        "National ID card or equivalent verified passport identification",
        "Latest employment certificate or official corporate ID card",
        "Pre-authorized company automated payroll debit agreement"
      ],
      disbursementTime: "Instantly (Within 1 Hour)"
    },
    {
      id: "srv-agri",
      num: "04",
      name: "Agricultural Loan",
      desc: "Specially structured credit facilities crafted for local Cambodian farmers to acquire high-yield seeds and fertilizers.",
      defaultAmount: 8000,
      defaultMonths: 18,
      defaultRate: 8.5,
      details: [
        "Repayment installments aligned with harvesting schedules",
        "Extremely low regional rates designed to support rural communities",
        "Adaptable extensions during unseasonal climatic disasters",
        "Applicable for solar irrigation pumping systems or green equipment"
      ],
      requiredDocs: [
        "National ID identification matching land parcel owner",
        "Simple agricultural land user record certificate or lease",
        "Basic estimate of projected seasonal agricultural crop yields"
      ],
      disbursementTime: "Within 2 Business Days"
    },
    {
      id: "srv-emergency",
      num: "05",
      name: "Emergency Loan",
      desc: "Critical same-day financing for sudden medical bills, vehicle breakdowns, or urgent utility repairs, accessible 24/7.",
      defaultAmount: 800,
      defaultMonths: 3,
      defaultRate: 15.0,
      details: [
        "Minimal criteria screening prioritizing speed above all else",
        "100% web uploads with zero physical branch visits required",
        "Available for processing on weekends and traditional Khmer holidays",
        "Transparent schedule outlining exact repayments before signing"
      ],
      requiredDocs: [
        "National ID card (or verified smartphone identity)",
        "Recent 1 month of mobile money transactions ledger (Bakong, Wing, ABA)"
      ],
      disbursementTime: "In 30 Minutes"
    },
    {
      id: "srv-green",
      num: "06",
      name: "Green Loan",
      desc: "Eco-friendly low-interest financing for solar panels, electric vehicle purchases, or insulation retrofitting.",
      defaultAmount: 15000,
      defaultMonths: 24,
      defaultRate: 8.0,
      details: [
        "Bonus discounts on APR for energy-efficient materials",
        "Flexible loan repayment schedules up to 36 months",
        "Direct pre-approval on select EV models with domestic dealers",
        "Helps domestic SME operations reduce electrical utility costs"
      ],
      requiredDocs: [
        "National ID card and proof of continuous monthly income",
        "Vendor invoice statement outlining solar setup or EV quotation details"
      ],
      disbursementTime: "Within 24 Hours"
    }
  ];

  const pillars: PillarItem[] = [
    {
      id: "pil-1",
      icon: "⚡",
      title: "2-Hour Approvals",
      desc: "Our automated credit routing engine processes verified income fields instantly, transferring funds into your account the same day."
    },
    {
      id: "pil-2",
      icon: "🔒",
      title: "100% Digitally Secure",
      desc: "Data-protection rules align with Central Bank guidelines. Sensitive application logs remain securely compartmentalized."
    },
    {
      id: "pil-3",
      icon: "🤝",
      title: "No Collateral Required",
      desc: "We analyze transaction trends, salary patterns, and cash flow cycles directly, eliminating stressful property title holds."
    }
  ];

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

  const [activeProduct, setActiveProduct] = useState<LoanProductItem | null>(null);

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

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 72;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  // Prefill the loan details inside the interactive calculator
  const handleCalculateForProduct = (prod: LoanProductItem) => {
    setActiveProduct(null);
    
    // Find sliders in calculator and set them
    const calculatorSect = document.getElementById("calculator");
    if (calculatorSect) {
      // Find the range inputs and programmatically dispatch state.
      // Since it's nested in a separate component state, we can simulate the apply flow
      // or guide the user. The click helper in Calculator.tsx can handle it via prefill callback.
      // But we can trigger the scroll down and prefill via the apply form instantly too.
      // Let's scroll to the calculator as requested.
      calculatorSect.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-navy text-text-body font-sans relative selection:bg-gold selection:text-navy overflow-hidden">
      
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
              className="px-8 py-4 bg-gold text-navy font-bold rounded-[2px] text-xs md:text-sm uppercase tracking-wider shadow-lg hover:bg-gold-light hover:-translate-y-0.5 active:translate-y-0 transition-all duration-150 cursor-pointer"
            >
              Apply Online Now
            </a>
            <a 
              href="#calculator" 
              onClick={(e) => handleSmoothScroll(e, "calculator")}
              className="px-8 py-4 bg-transparent text-cream border border-stone-200/20 hover:border-gold hover:text-gold font-bold rounded-[2px] text-xs md:text-sm uppercase tracking-wider transition-all duration-150 cursor-pointer"
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

      {/* STATS COUNT BAND */}
      <StatsCounter />

      {/* ABOUT US SECTION */}
      <section id="about" className="py-20 md:py-32 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto border-b border-gold/15 relative z-10 font-sans">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Block */}
          <div>
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
              {pillars.map((pil) => (
                <div key={pil.id} className="flex gap-4 items-start group">
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
                </div>
              ))}
            </div>

          </div>

          {/* Right Visual Motif Block */}
          <div className="relative">
            
            <div className="bg-navy-mid border border-gold/20 p-8 md:p-12 rounded-[4px] relative overflow-hidden shadow-2xl">
              
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

            </div>

          </div>

        </div>
      </section>

      {/* LOAN PRODUCTS SECTION (repurposing services) */}
      <section id="services" className="bg-navy-mid/80 py-20 md:py-32 relative z-10 border-b border-gold/15">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-16">
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
          </div>

          {/* Services/Products Grid with interactive onClick */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-gold/15 border border-gold/15 overflow-hidden rounded-[2px] font-sans">
            {loanProducts.map((prod) => (
              <div
                key={prod.id}
                onClick={() => setActiveProduct(prod)}
                className="bg-navy p-8 md:p-10 relative group hover:bg-navy-soft/30 transition-all duration-300 cursor-pointer flex flex-col justify-between min-h-[250px]"
              >
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
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* HOW IT WORKS SECTION (Interactive structural flow layout) */}
      <section id="how-it-works" className="py-20 md:py-32 bg-navy border-b border-gold/15 relative z-10 font-sans">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
          
          <div className="max-w-2xl mb-16">
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
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            <div className="relative p-6 border border-gold/10 bg-navy-mid/40 rounded-[2px] group hover:border-gold/30 transition-all">
              <div className="absolute top-2 right-4 font-serif text-4xl font-extrabold text-gold/10">01</div>
              <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center text-gold mb-5">
                <Coins className="w-5 h-5" />
              </div>
              <h3 className="font-serif font-bold text-sm text-white mb-2 group-hover:text-gold-light">1. Calculate Terms</h3>
              <p className="text-[0.74rem] text-slate leading-relaxed">Choose your ideal principal amount and month repayment limits on our custom pricing sliders.</p>
            </div>

            <div className="relative p-6 border border-gold/10 bg-navy-mid/40 rounded-[2px] group hover:border-gold/30 transition-all">
              <div className="absolute top-2 right-4 font-serif text-4xl font-extrabold text-gold/10">02</div>
              <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center text-gold mb-5">
                <Smartphone className="w-5 h-5" />
              </div>
              <h3 className="font-serif font-bold text-sm text-white mb-2 group-hover:text-gold-light">2. Apply in Minutes</h3>
              <p className="text-[0.74rem] text-slate leading-relaxed font-sans">Fill out basic fields on our encrypted contact portal with zero physical paperwork or documents required.</p>
            </div>

            <div className="relative p-6 border border-gold/10 bg-navy-mid/40 rounded-[2px] group hover:border-gold/30 transition-all">
              <div className="absolute top-2 right-4 font-serif text-4xl font-extrabold text-gold/10">03</div>
              <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center text-gold mb-5">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="font-serif font-bold text-sm text-white mb-2 group-hover:text-gold-light">3. Get Approved</h3>
              <p className="text-[0.74rem] text-slate leading-relaxed">Our smart credit analysis pipelines assess and authorize your files in under 2 hours maximum.</p>
            </div>

            <div className="relative p-6 border border-gold/10 bg-navy-mid/40 rounded-[2px] group hover:border-gold/30 transition-all">
              <div className="absolute top-2 right-4 font-serif text-4xl font-extrabold text-gold/10">04</div>
              <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center text-gold mb-5">
                <Wallet className="w-5 h-5" />
              </div>
              <h3 className="font-serif font-bold text-sm text-white mb-2 group-hover:text-gold-light">4. Receive Funds</h3>
              <p className="text-[0.74rem] text-slate leading-relaxed">The allowed cash is wired directly to your commercial bank balance or mobile Bakong wallet instantly.</p>
            </div>
          </div>

        </div>
      </section>

      {/* CORE FINANCIAL CALCULATOR SUITE */}
      <Calculator />

      {/* ELIGIBILITY & REQ SECTION */}
      <section id="eligibility" className="py-20 md:py-32 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto border-b border-gold/15 relative z-10 font-sans">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start animate-fade-in">
          
          {/* Left Description Column */}
          <div className="lg:col-span-5 lg:sticky lg:top-[112px]">
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
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-gold text-navy font-bold rounded-[2px] text-xs uppercase tracking-wider hover:bg-gold-light transition-colors cursor-pointer"
            >
              Check My score Now
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Right Fact Grid Column */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {eligibilityFacts.map((fact, idx) => (
              <div 
                key={idx} 
                className="bg-navy-mid border border-gold/15 p-6 rounded-[2px] transition-all duration-300 hover:border-gold/40 group flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-[2px] bg-navy flex items-center justify-center mb-4 border border-gold/10 group-hover:bg-gold/10 transition-colors">
                    {fact.icon}
                  </div>
                  <h3 className="font-sans font-bold text-xs sm:text-sm text-white mb-2 tracking-wide group-hover:text-gold-light transition-colors">
                    {fact.title}
                  </h3>
                  <p className="text-[0.75rem] text-slate leading-relaxed">
                    {fact.body}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CONTACT & ACCOUNT TRANSITION FORM */}
      <ContactForm />

      {/* COMPLIANT LUXURY FOOTER */}
      <footer className="bg-[#030A12] border-t border-gold/15 pt-16 pb-8 text-xs relative z-10 font-sans text-slate">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          
          {/* Brand Col */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div 
                style={{ clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)" }}
                className="w-7 h-7 bg-gradient-to-br from-gold to-gold-light flex items-center justify-center font-bold text-xs"
              >
                🏛
              </div>
              <div>
                <div className="font-serif text-sm font-extrabold text-white leading-none tracking-wide">
                  Engage Capital
                </div>
                <div className="text-[0.55rem] font-sans font-medium text-gold tracking-widest uppercase mt-0.5">
                  Cambodia Co., Ltd.
                </div>
              </div>
            </div>
            <p className="leading-relaxed max-w-sm text-[0.74rem]">
              An authorized digital micro-finance provider streamlining loan principal lines, SME investments, agricultural credits, and short-term advance liquidity across the Kingdom of Cambodia.
            </p>
          </div>

          {/* Links 1 */}
          <div>
            <h4 className="font-bold text-[0.68rem] tracking-widest text-gold uppercase mb-4 font-mono">
              Loan Products
            </h4>
            <ul className="space-y-2 text-[0.74rem] font-medium">
              <li>
                <a href="#services" onClick={(e) => handleSmoothScroll(e, "services")} className="hover:text-gold transition-colors block">
                  Personal Cash Loans
                </a>
              </li>
              <li>
                <a href="#services" onClick={(e) => handleSmoothScroll(e, "services")} className="hover:text-gold transition-colors block">
                  SME Business Capital
                </a>
              </li>
              <li>
                <a href="#services" onClick={(e) => handleSmoothScroll(e, "services")} className="hover:text-gold transition-colors block">
                  Payroll Advance Line
                </a>
              </li>
              <li>
                <a href="#services" onClick={(e) => handleSmoothScroll(e, "services")} className="hover:text-gold transition-colors block">
                  Agricultural Crop Credit
                </a>
              </li>
              <li>
                <a href="#services" onClick={(e) => handleSmoothScroll(e, "services")} className="hover:text-gold transition-colors block">
                  Emergency Same-Day
                </a>
              </li>
            </ul>
          </div>

          {/* Links 2 */}
          <div>
            <h4 className="font-bold text-[0.68rem] tracking-widest text-gold uppercase mb-4 font-mono">
              Navigation Link
            </h4>
            <ul className="space-y-2 text-[0.74rem] font-medium">
              <li>
                <a href="#about" onClick={(e) => handleSmoothScroll(e, "about")} className="hover:text-gold transition-colors block">
                  About us
                </a>
              </li>
              <li>
                <a href="#how-it-works" onClick={(e) => handleSmoothScroll(e, "how-it-works")} className="hover:text-gold transition-colors block">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#calculator" onClick={(e) => handleSmoothScroll(e, "calculator")} className="hover:text-gold transition-colors block">
                  Amortized Calculator
                </a>
              </li>
              <li>
                <a href="#eligibility" onClick={(e) => handleSmoothScroll(e, "eligibility")} className="hover:text-gold transition-colors block">
                  Eligibility Criteria
                </a>
              </li>
              <li>
                <a href="#contact" onClick={(e) => handleSmoothScroll(e, "contact")} className="hover:text-gold transition-colors block">
                  Apply Online Form
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Regulatory fine-print & legal bar */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 pt-8 border-t border-stone-900 flex flex-col md:flex-row justify-between items-center gap-4 text-[0.68rem] leading-relaxed text-center md:text-left">
          <p>
            © 2026 Engage Capital Cambodia Co., Ltd. All rights reserved. Managed under state regulatory licenses and registered with the Ministry of Commerce of Cambodia as a digital microfinance advisory platform.
          </p>
          <div className="flex gap-4 flex-wrap justify-center font-medium font-mono text-[0.62rem]">
            <a href="#legal" className="hover:text-gold transition-colors">Privacy Policy</a>
            <a href="#legal" className="hover:text-gold transition-colors">Terms of Corporate Use</a>
            <a href="#legal" className="hover:text-gold transition-colors">NBC Disclaimers</a>
          </div>
        </div>

      </footer>

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

    </div>
  );
}
