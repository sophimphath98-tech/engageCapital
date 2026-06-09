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
  FileText
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import Navbar from "./components/Navbar";
import StatsCounter from "./components/StatsCounter";
import Calculator from "./components/Calculator";
import ContactForm from "./components/ContactForm";
import { ServiceItem, PillarItem, FactItem, TeamMember } from "./types";

export default function App() {
  // Services details block for interactive popups/modals
  const services: ServiceItem[] = [
    {
      id: "srv-advisory",
      num: "01",
      name: "Investment Advisory",
      desc: "Strategic guidance for institutional and private investors seeking to enter or expand within the Cambodian and broader ASEAN market.",
      details: [
        "In-depth macroeconomic research and risk assessment",
        "Target identification and cross-border partnership matching",
        "Commercial feasibility analysis and currency risk modeling",
        "Local business regulatory alignment and FDI routing setup"
      ],
      caseStudy: "Advised an East Asian sovereign wealth group on a $74M logistics terminal acquisition along the Phnom Penh autonomous port corridor."
    },
    {
      id: "srv-corp-finance",
      num: "02",
      name: "Corporate Finance",
      desc: "M&A advisory, capital restructuring, due diligence, and financial modeling for companies across all growth stages.",
      details: [
        "Sell-side and buy-side M&A transaction representation",
        "Independent valuation report generation and forensic accounting audits",
        "Strategic capital restructuring for public listings (IPO preparation)",
        "Due diligence oversight spanning tax, legal, and operational compliance"
      ],
      caseStudy: "Managed the structured merger of two leading domestic consumer retail networks, representing a combined transaction value of $42.5M."
    },
    {
      id: "srv-pe",
      num: "03",
      name: "Private Equity",
      desc: "Direct equity investments and co-investment opportunities in high-growth Cambodian businesses across real estate, agriculture, and tech.",
      details: [
        "Direct equity capital infusion in mid-market enterprises",
        "Strategic board allocation and direct corporate scaling governance",
        "Operational process streamlining & tech modernization programs",
        "Targeted multi-year exit strategy planning and execution"
      ],
      caseStudy: "Acquired a minority stake in a prominent Cambodian renewable bio-fuel refinery, facilitating expansion and a 3.4x rise in output."
    },
    {
      id: "srv-debt-capital",
      num: "04",
      name: "Debt Capital Markets",
      desc: "Bond issuance support, structured lending, and alternative debt solutions for Cambodian enterprises seeking non-dilutive funding.",
      details: [
        "Corporate bond structuring, underwriting, and listing on the CSX",
        "Mezzanine debt and dynamic high-yield convertible note generation",
        "Syndicated credit facilities coordination with local commercial banks",
        "Alternative asset-backed security (ABS) tokenization or placement"
      ],
      caseStudy: "Successfully structured and listed Cambodia's first infrastructure-backed green corporate bonds, raising $15M for solar irrigation grids."
    },
    {
      id: "srv-wealth",
      num: "05",
      name: "Wealth Management",
      desc: "Bespoke portfolio management, estate planning, and multi-asset strategies for high-net-worth individuals and family offices.",
      details: [
        "Personalized multi-asset portfolio advisory and allocation",
        "Cross-border estate legacy preparation and asset isolation structures",
        "Offshore capital management and regional real estate placement",
        "Bespoke family office infrastructure and philanthropic framework setup"
      ],
      caseStudy: "Supervise the wealth diversification strategy of a major regional family office, shifting 20% allocation to high-yield Mekong growth assets."
    },
    {
      id: "srv-market-entry",
      num: "06",
      name: "Market Entry Consulting",
      desc: "End-to-end support for foreign companies establishing a financial or operational presence in Cambodia, from licensing to local partnerships.",
      details: [
        "Comprehensive regulatory licensing with MBC, SECC, and CDC",
        "Tax incentives structuring under the new Cambodian Law on Investment",
        "Joint venture corporate governance framing and background check investigations",
        "Executive talent placement and premium local workspace provisioning"
      ],
      caseStudy: "Facilitated the compliance-checked market entry of an international fintech unicorn, securing licensed payment gateways in 4 months."
    }
  ];

  const pillars: PillarItem[] = [
    {
      id: "pil-1",
      icon: "🏛",
      title: "Regulatory Expertise",
      desc: "Licensed and fully compliant with the National Bank of Cambodia (NBC), the Securities and Exchange Regulator of Cambodia (SERC), and the Council for the Development of Cambodia (CDC)."
    },
    {
      id: "pil-2",
      icon: "🌐",
      title: "International Networks",
      desc: "Direct access pipeline to institutional private debt funds, sovereign wealth portfolios, and private equity syndicates across Asia, Europe, and the Middle East."
    },
    {
      id: "pil-3",
      icon: "📈",
      title: "Data-Driven Decisions",
      desc: "Proprietary market intelligence models and exhaustive sovereign analysis supporting every private equity investment and due diligence mandate."
    }
  ];

  const facts: FactItem[] = [
    {
      id: "fact-1",
      icon: "TrendingUp",
      title: "7%+ GDP Growth",
      body: "Cambodia has maintained some of the strongest, most resilient GDP growth rates in Southeast Asia over the past two decades."
    },
    {
      id: "fact-2",
      icon: "Globe",
      title: "ASEAN Gateway",
      body: "Strategically situated in the center of Thailand, Vietnam, and Laos - linking directly to a consumer market of over 680 million."
    },
    {
      id: "fact-3",
      icon: "Coins",
      title: "Dollarized Economy",
      body: "Domestic pricing uses USD, effectively removing foreign currency exchange volatilities and facilitating clean, rapid profit repatriation."
    },
    {
      id: "fact-4",
      icon: "Users",
      title: "Young Demographic",
      body: "70% of the population is under the age of 30, supporting a highly adaptable workforce, tech adoption, and growing consumer class."
    },
    {
      id: "fact-5",
      icon: "Building2",
      title: "Infrastructure Boom",
      body: "Billions in masterplan investments transforming deep-sea harbors, international airports, expressways, and high-speed fiber."
    },
    {
      id: "fact-6",
      icon: "Award",
      title: "Auspicious FDI Policy",
      body: "One of the world's most unrestricted foreign direct investment frameworks, authorizing 100% foreign equity ownership in most fields."
    }
  ];

  const team: TeamMember[] = [
    {
      id: "team-1",
      icon: "👔",
      name: "Sopheak Chan",
      role: "Chief Executive Officer",
      bio: "20+ years of institutional financial command. Former Managing Director at an ASEAN private equity group. Global MBA, INSEAD."
    },
    {
      id: "team-2",
      icon: "💼",
      name: "David Lim",
      role: "Head of Investment Banking",
      bio: "Over $1.2B in accomplished M&A transactions. Previously associated with Maybank Securities, DBS Singapore, and Deutsche Bank."
    },
    {
      id: "team-3",
      icon: "📊",
      name: "Ratanak Prum",
      role: "Head of Research & Markets",
      bio: "CFA Charterholder. Specialist in ASEAN fixed income and regional sovereign debt models. PhD in Economics, AIT Bangkok."
    },
    {
      id: "team-4",
      icon: "🏛",
      name: "Claire Fontaine",
      role: "Chief Compliance Officer",
      bio: "Former regulatory analyst at a French security house. 15+ years overseeing SERC & central bank compliance pipelines in Indochina."
    }
  ];

  const [activeService, setActiveService] = useState<ServiceItem | null>(null);

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

  // Icon mapper helper
  const renderFactIcon = (iconName: string) => {
    switch (iconName) {
      case "TrendingUp": return <TrendingUp className="w-6 h-6 text-gold" />;
      case "Globe": return <Globe className="w-6 h-6 text-gold" />;
      case "Coins": return <Coins className="w-6 h-6 text-gold" />;
      case "Users": return <Users className="w-6 h-6 text-gold" />;
      case "Building2": return <Building2 className="w-6 h-6 text-gold" />;
      case "Award": return <Award className="w-6 h-6 text-gold" />;
      default: return <Sparkles className="w-6 h-6 text-gold" />;
    }
  };

  return (
    <div className="bg-navy text-text-body font-sans relative selection:bg-gold selection:text-navy overflow-hidden">
      
      {/* ── BACKGROUND WATERMARK / KHMER LATTICE PATTERN ── */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] z-0 overflow-hidden">
        <svg viewBox="0 0 1600 1200" className="w-full h-full object-cover">
          <defs>
            <pattern id="khmer-latt" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
              <path d="M40 0 L80 40 L40 80 L0 40 Z" fill="none" stroke="#C9A84C" strokeWidth="1"/>
              <path d="M40 20 L60 40 L40 60 L20 40 Z" fill="none" stroke="#C9A84C" strokeWidth="0.6"/>
              <circle cx="40" cy="40" r="4" fill="none" stroke="#C9A84C" strokeWidth="0.8"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#khmer-latt)"/>
        </svg>
      </div>

      {/* FIXED NAV */}
      <Navbar />

      {/* HERO SECTION */}
      <section id="home" className="relative min-h-[100vh] flex flex-col justify-center px-6 md:px-12 lg:px-24 pt-[72px] overflow-hidden z-10">
        
        {/* Dynamic visual light leaks */}
        <div className="absolute inset-0 z-0 radial-gradient pointer-events-none">
          <div className="absolute top-[20%] right-[-10%] w-[50vw] h-[50vw] bg-gold/[0.04] rounded-full filter blur-[120px]"></div>
          <div className="absolute bottom-[-10%] left-[-15%] w-[60vw] h-[60vw] bg-navy-mid/[0.9] rounded-full filter blur-[100px]"></div>
        </div>

        <div className="max-w-4xl relative z-10 mt-8 mb-12">
          
          <motion.div 
            initial={{ opacity: 0, x: -15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-3 text-xs md:text-sm font-semibold tracking-widest text-gold uppercase mb-6"
          >
            <span className="w-8 h-[1px] bg-gold"></span>
            Phnom Penh · Cambodia · Southeast Asia
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] text-white my-6 tracking-tight"
          >
            Where <em className="text-gold italic font-normal font-serif">Capital</em> Meets<br />
            Opportunity in the<br />
            Kingdom of Wonder
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="text-base sm:text-lg md:text-xl text-stone-300 font-light max-w-2xl leading-relaxed mb-10"
          >
            Engage Capital Cambodia is a premier financial advisory and investment firm dedicated to unlocking growth across one of Southeast Asia's most dynamic emerging markets.
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
              className="px-8 py-4 bg-gold text-navy font-bold rounded-[2px] text-xs md:text-sm uppercase tracking-wide shadow-lg hover:bg-gold-light hover:-translate-y-0.5 active:translate-y-0 transition-all duration-150 cursor-pointer"
            >
              Start a Conversation
            </a>
            <a 
              href="#services" 
              onClick={(e) => handleSmoothScroll(e, "services")}
              className="px-8 py-4 bg-transparent text-cream border border-stone-200/20 hover:border-gold hover:text-gold font-bold rounded-[2px] text-xs md:text-sm uppercase tracking-wide transition-all duration-150 cursor-pointer"
            >
              Our Services
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
          Scroll to explore Cambodia
        </motion.div>

      </section>

      {/* STATS COUNT BAND */}
      <StatsCounter />

      {/* ABOUT US SECTION */}
      <section id="about" className="py-20 md:py-32 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto border-b border-gold/15 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Block */}
          <div>
            <div className="inline-flex items-center gap-1.5 text-[0.7rem] font-semibold tracking-widest text-gold uppercase mb-3">
              <span className="w-6 h-[1px] bg-gold block"></span>
              Who We Are
            </div>
            
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
              Rooted in Cambodia.<br />Connected to the World.
            </h2>

            <div className="width-[48px] h-[2px] bg-gold my-6"></div>

            <p className="text-sm md:text-base text-slate leading-relaxed mb-8">
              Engage Capital Cambodia Co., Ltd. is built on two decades of deep market expertise and trusted relationships across the Kingdom. We combine local intelligence with international standards to deliver financial solutions that are effective, compliant, and transformative.
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
                <svg className="w-full h-full text-gold" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="100" cy="100" r="95" fill="none" stroke="currentColor" strokeWidth="2" />
                  <circle cx="100" cy="100" r="70" fill="none" stroke="currentColor" strokeWidth="1.5" />
                  <circle cx="100" cy="100" r="45" fill="none" stroke="currentColor" strokeWidth="1" />
                  <circle cx="100" cy="100" r="20" fill="none" stroke="currentColor" strokeWidth="1" />
                  <line x1="100" y1="5" x2="100" y2="195" stroke="currentColor" strokeWidth="0.8" />
                  <line x1="5" y1="100" x2="195" y2="100" stroke="currentColor" strokeWidth="0.8" />
                  <line x1="33" y1="33" x2="167" y2="167" stroke="currentColor" strokeWidth="0.6" />
                  <line x1="167" y1="33" x2="33" y2="167" stroke="currentColor" strokeWidth="0.6" />
                </svg>
              </div>

              <div className="text-[0.65rem] font-bold tracking-widest text-gold uppercase mb-3">
                Corporate Mission Statement
              </div>
              
              <blockquote className="font-serif text-lg md:text-xl lg:text-2xl text-white italic leading-relaxed mb-6 font-medium">
                "To be Cambodia's most trusted bridge between capital and growth — for investors, entrepreneurs, and the communities we serve."
              </blockquote>

              <div className="w-10 h-[1px] bg-gold mb-5"></div>

              <p className="text-xs text-slate leading-relaxed">
                We measure success not only in rates of investment return, but in the resilient businesses developed, local talents placed, and economic confidence strengthened across the Kingdom.
              </p>

            </div>

          </div>

        </div>
      </section>

      {/* SERVICES SECTION */}
      <section id="services" className="bg-navy-mid/80 py-20 md:py-32 relative z-10 border-b border-gold/15">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-16">
            <div>
              <div className="inline-flex items-center gap-1.5 text-[0.7rem] font-semibold tracking-widest text-gold uppercase mb-3">
                <span className="w-6 h-[1px] bg-gold block"></span>
                What We Do
              </div>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-2">
                Our Services
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-slate md:max-w-xs leading-relaxed">
              Full-spectrum financial advisory and private equity placement structured to leverage Cambodia's evolving market architecture.
            </p>
          </div>

          {/* Services Grid with interactive onClick */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-gold/15 border border-gold/15 overflow-hidden rounded-[2px]">
            {services.map((srv) => (
              <div
                key={srv.id}
                onClick={() => setActiveService(srv)}
                className="bg-navy p-8 md:p-10 relative group hover:bg-navy-soft/30 transition-all duration-300 cursor-pointer flex flex-col justify-between min-h-[240px]"
              >
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <span className="font-serif text-4xl font-extrabold text-gold/10 group-hover:text-gold/20 select-none">
                      {srv.num}
                    </span>
                    <button className="text-gold/20 group-hover:text-gold group-hover:translate-x-1 group-hover:-translate-y-1 transition-all">
                      <ArrowUpRight className="w-5 h-5" />
                    </button>
                  </div>
                  <h3 className="font-serif text-base sm:text-lg font-bold text-white mb-3 group-hover:text-gold-light transition-colors">
                    {srv.name}
                  </h3>
                  <p className="text-xs sm:text-[0.78rem] text-slate group-hover:text-stone-300 line-clamp-3 leading-relaxed">
                    {srv.desc}
                  </p>
                </div>
                <div className="mt-6 flex items-center gap-1 text-[0.65rem] font-bold text-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-sans tracking-widest uppercase">
                  Explore Prospectus <ChevronRight className="w-3.5 h-3.5" />
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CORE FINANCIAL CALCULATOR SUITE */}
      <Calculator />

      {/* WHY INVEST IN CAMBODIA SECTION */}
      <section id="cambodia" className="py-20 md:py-32 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto border-b border-gold/15 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Description Column */}
          <div className="lg:col-span-5 lg:sticky lg:top-[112px]">
            <div className="inline-flex items-center gap-1.5 text-[0.7rem] font-semibold tracking-widest text-gold uppercase mb-3">
              <span className="w-6 h-[1px] bg-gold block"></span>
              The Opportunity
            </div>
            
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
              Why Invest in Cambodia?
            </h2>

            <div className="width-[48px] h-[2px] bg-gold my-6"></div>

            <p className="text-sm md:text-base text-slate leading-relaxed mb-8">
              Cambodia is one of Asia's fastest-growing economies. A young population segment, strategic ASEAN positioning, stable USD dollarized economy, and a pro-business government create a rare confluence of high-impact opportunities.
            </p>

            <a 
              href="#contact" 
              onClick={(e) => handleSmoothScroll(e, "contact")}
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-gold text-navy font-bold rounded-[2px] text-xs uppercase tracking-wider hover:bg-gold-light transition-colors cursor-pointer"
            >
              Explore the Market
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Right Fact Grid Column */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {facts.map((fact) => (
              <div 
                key={fact.id} 
                className="bg-navy-mid border border-gold/15 p-6 rounded-[2px] transition-all duration-300 hover:border-gold/40 group flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-[2px] bg-navy flex items-center justify-center mb-4 border border-gold/10 group-hover:bg-gold/10 transition-colors">
                    {renderFactIcon(fact.icon)}
                  </div>
                  <h3 className="font-sans font-bold text-xs sm:text-sm text-white mb-2 tracking-wide group-hover:text-gold-light transition-colors">
                    {fact.title}
                  </h3>
                  <p className="text-[0.76rem] text-slate leading-relaxed">
                    {fact.body}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* LEADERSHIP TEAM SECTION */}
      <section id="team" className="bg-navy-mid/80 py-20 md:py-32 border-b border-gold/15 relative z-10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
          
          <div className="max-w-2xl text-left mb-12">
            <div className="inline-flex items-center gap-1.5 text-[0.7rem] font-semibold tracking-widest text-gold uppercase mb-3">
              <span className="w-6 h-[1px] bg-gold block"></span>
              Our People
            </div>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight mb-4">
              Leadership Team
            </h2>
            <p className="text-xs sm:text-sm text-slate leading-relaxed">
              Our partner network combines profound domestic Cambodian intelligence with premium international financial credentials, spanning prominent institutions across Asia, Europe, and North America.
            </p>
          </div>

          {/* Team Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member) => (
              <div 
                key={member.id} 
                className="bg-navy border border-gold/10 rounded-[2px] p-6 hover:border-gold/30 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Photo surrogate slot */}
                  <div className="w-20 h-20 bg-navy-mid/80 border-2 border-gold/25 rounded-full flex items-center justify-center mx-auto mb-5 text-3xl shadow-md">
                    {member.icon}
                  </div>
                  <div className="text-center mb-4">
                    <h3 className="font-serif text-stone-100 font-bold text-base">
                      {member.name}
                    </h3>
                    <div className="text-[10px] text-gold uppercase tracking-widest font-semibold mt-1">
                      {member.role}
                    </div>
                  </div>
                  <p className="text-stone-400 text-[0.75rem] leading-relaxed text-center font-sans border-t border-gold/5 pt-3.5">
                    {member.bio}
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
      <footer className="bg-[#060E1C] border-t border-gold/10 pt-16 pb-8 text-xs relative z-10">
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
            <p className="text-slate leading-relaxed max-w-sm text-[0.74rem]">
              A leading sovereign financial advisory, M&A restructuring, and private equity investment management boutique servicing Cambodia's growing capital markets since 22 March 2009.
            </p>
          </div>

          {/* Links 1 */}
          <div>
            <h4 className="font-bold text-[0.68rem] tracking-widest text-gold uppercase mb-4">
              Our Capabilities
            </h4>
            <ul className="space-y-2 text-[0.74rem] text-slate font-medium">
              <li>
                <a href="#services" onClick={(e) => handleSmoothScroll(e, "services")} className="hover:text-gold transition-colors block">
                  Investment Advisory
                </a>
              </li>
              <li>
                <a href="#services" onClick={(e) => handleSmoothScroll(e, "services")} className="hover:text-gold transition-colors block">
                  Corporate Finance & M&A
                </a>
              </li>
              <li>
                <a href="#services" onClick={(e) => handleSmoothScroll(e, "services")} className="hover:text-gold transition-colors block">
                  Private Equity Management
                </a>
              </li>
              <li>
                <a href="#services" onClick={(e) => handleSmoothScroll(e, "services")} className="hover:text-gold transition-colors block">
                  Debt Capital Markets
                </a>
              </li>
              <li>
                <a href="#services" onClick={(e) => handleSmoothScroll(e, "services")} className="hover:text-gold transition-colors block">
                  Market Entry Licensing
                </a>
              </li>
            </ul>
          </div>

          {/* Links 2 */}
          <div>
            <h4 className="font-bold text-[0.68rem] tracking-widest text-gold uppercase mb-4">
              Company Desk
            </h4>
            <ul className="space-y-2 text-[0.74rem] text-slate font-medium">
              <li>
                <a href="#about" onClick={(e) => handleSmoothScroll(e, "about")} className="hover:text-gold transition-colors block">
                  About us
                </a>
              </li>
              <li>
                <a href="#team" onClick={(e) => handleSmoothScroll(e, "team")} className="hover:text-gold transition-colors block">
                  Leadership Key
                </a>
              </li>
              <li>
                <a href="#calculator" onClick={(e) => handleSmoothScroll(e, "calculator")} className="hover:text-gold transition-colors block">
                  Capital Estimator
                </a>
              </li>
              <li>
                <a href="#cambodia" onClick={(e) => handleSmoothScroll(e, "cambodia")} className="hover:text-gold transition-colors block">
                  The Opportunity
                </a>
              </li>
              <li>
                <a href="#contact" onClick={(e) => handleSmoothScroll(e, "contact")} className="hover:text-gold transition-colors block">
                  Contact Intake
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Regulatory fine-print & legal bar */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 pt-8 border-t border-stone-800 flex flex-col md:flex-row justify-between items-center gap-4 text-slate text-[0.68rem] leading-relaxed text-center md:text-left">
          <p>
            © 2026 Engage Capital Cambodia Co., Ltd. All rights reserved. Licensed and regulated by the Securities and Exchange Regulator of Cambodia (SERC) and registered with the Ministry of Commerce of Cambodia.
          </p>
          <div className="flex gap-4 flex-wrap justify-center font-medium">
            <a href="#legal" className="hover:text-gold transition-colors">Privacy Policy</a>
            <a href="#legal" className="hover:text-gold transition-colors">Terms of Corporate Use</a>
            <a href="#legal" className="hover:text-gold transition-colors">SERC Disclaimer</a>
          </div>
        </div>

      </footer>

      {/* PROSPECTUS DETAIL MODAL FOR SERVICES OVERLAYS */}
      <AnimatePresence>
        {activeService && (
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
              className="bg-navy-mid border-2 border-gold max-w-2xl w-full rounded-[4px] overflow-hidden shadow-2xl relative flex flex-col max-h-[90vh]"
            >
              <button 
                onClick={() => setActiveService(null)}
                className="absolute top-4 right-4 text-slate hover:text-white p-2 focus:outline-none z-10 transition-colors"
                aria-label="Close dialog"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="p-6 md:p-8 overflow-y-auto space-y-6">
                
                {/* Header */}
                <div className="border-b border-gold/15 pb-4">
                  <span className="font-serif text-4xl block text-gold/30 font-extrabold mb-1">
                    {activeService.num}
                  </span>
                  <h3 className="font-serif text-xl md:text-2xl font-bold text-white leading-tight">
                    {activeService.name}
                  </h3>
                  <p className="text-slate text-xs mt-1 font-sans tracking-wide uppercase font-semibold">
                    REGULATION CODE SEC-CAM-{activeService.num}
                  </p>
                </div>

                {/* Description */}
                <div>
                  <h4 className="font-bold text-[0.68rem] tracking-widest text-gold uppercase mb-2">
                    Scope of Capability
                  </h4>
                  <p className="text-stone-300 text-sm leading-relaxed">
                    {activeService.desc}
                  </p>
                </div>

                {/* Bullet Points */}
                <div>
                  <h4 className="font-bold text-[0.68rem] tracking-widest text-gold uppercase mb-3.5">
                    Strategic Mandate Core
                  </h4>
                  <ul className="space-y-2.5">
                    {activeService.details.map((point, i) => (
                      <li key={i} className="flex gap-2.5 items-start text-xs text-stone-400">
                        <CheckCircle className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Case Study */}
                <div className="p-4 bg-navy rounded-[2px] border border-gold/10">
                  <div className="flex items-center gap-1.5 text-gold font-bold text-[0.65rem] uppercase tracking-wider mb-2">
                    <FileText className="w-4 h-4 text-gold-light" />
                    Representative Case Study
                  </div>
                  <p className="text-xs text-stone-300 leading-relaxed italic">
                    "{activeService.caseStudy}"
                  </p>
                </div>

              </div>

              {/* Action Bar */}
              <div className="bg-navy border-t border-gold/15 p-4 flex flex-col sm:flex-row justify-between items-center gap-3">
                <span className="text-[10px] text-slate uppercase tracking-wider text-center sm:text-left">
                  Schedule direct consultation regarding this prospectus
                </span>
                <button
                  onClick={() => {
                    const msgInput = document.querySelector("#contact textarea") as HTMLTextAreaElement;
                    const interestSel = document.querySelector("#contact select") as HTMLSelectElement;
                    if (interestSel) {
                      interestSel.value = activeService.name;
                      const event = new Event('change', { bubbles: true });
                      interestSel.dispatchEvent(event);
                    }
                    if (msgInput) {
                      msgInput.value = `Hello, I reviewed the prospectus SEC-CAM-${activeService.num} for "${activeService.name}".\n\nI am particularly interested in the core mandate of: \n- ${activeService.details[0]} \n\nPlease connect me with Sopheak Chan and David Lim regarding custom investment positioning in Cambodia.`;
                      msgInput.focus();
                    }
                    setActiveService(null);
                    const contactSection = document.getElementById("contact");
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  className="px-5 py-2 hover:bg-gold-light hover:text-navy cursor-pointer w-full sm:w-auto text-center bg-gold text-navy font-bold text-xs uppercase tracking-wider rounded-[2px]"
                >
                  Request Consultation →
                </button>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
