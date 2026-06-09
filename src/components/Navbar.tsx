import React, { useState, useEffect } from "react";
import { Menu, X, Landmark } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 72; // Nav height
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

  return (
    <>
      <motion.nav
        initial={{ y: -72 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 sm:px-6 lg:px-12 h-[72px] border-b transition-colors duration-300 ${
          scrolled 
            ? "bg-navy/95 backdrop-blur-md border-gold/15 shadow-lg" 
            : "bg-navy/80 backdrop-blur-sm border-gold/10"
        }`}
      >
        {/* Logo */}
        <a href="#home" onClick={(e) => handleNavClick(e, "home")} className="flex items-center gap-2 sm:gap-3 group">
          <div className="relative">
            <div 
              style={{ clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)" }}
              className="w-8 h-8 sm:w-9 sm:h-9 bg-gradient-to-br from-gold to-gold-light flex items-center justify-center shadow-inner transition-transform duration-300 group-hover:scale-105"
            >
              <Landmark className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-navy stroke-[2]" />
            </div>
          </div>
          <div>
            <div className="font-serif text-[0.85rem] sm:text-[1rem] font-bold text-white tracking-wide transition-colors group-hover:text-gold-light leading-tight">
              Engage Capital
            </div>
            <div className="text-[0.55rem] sm:text-[0.6rem] font-sans font-medium text-gold tracking-widest uppercase mt-0.5">
              Cambodia Co., Ltd.
            </div>
          </div>
        </a>

        {/* Desktop Links */}
        <ul className="hidden lg:flex items-center gap-5 xl:gap-8 text-xs font-sans font-semibold tracking-wider uppercase">
          <li>
            <a 
              href="#about" 
              onClick={(e) => handleNavClick(e, "about")}
              className="text-slate hover:text-gold transition-colors duration-200"
            >
              About Us
            </a>
          </li>
          <li>
            <a 
              href="#services" 
              onClick={(e) => handleNavClick(e, "services")}
              className="text-slate hover:text-gold transition-colors duration-200"
            >
              Loan Products
            </a>
          </li>
          <li>
            <a 
              href="#how-it-works" 
              onClick={(e) => handleNavClick(e, "how-it-works")}
              className="text-slate hover:text-gold transition-colors duration-200"
            >
              How It Works
            </a>
          </li>
          <li>
            <a 
              href="#calculator" 
              onClick={(e) => handleNavClick(e, "calculator")}
              className="text-slate hover:text-gold transition-colors duration-200"
            >
              Calculator
            </a>
          </li>
          <li>
            <a 
              href="#eligibility" 
              onClick={(e) => handleNavClick(e, "eligibility")}
              className="text-slate hover:text-gold transition-colors duration-200"
            >
              Eligibility
            </a>
          </li>
          <li>
            <a 
              href="#contact" 
              onClick={(e) => handleNavClick(e, "contact")}
              className="px-4 py-2 border border-gold text-gold hover:bg-gold hover:text-navy transition-all duration-200 rounded-[2px]"
            >
              Apply Now
            </a>
          </li>
        </ul>

        {/* Mobile Hamburger toggle */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden text-gold hover:text-gold-light justify-self-end p-2 transition-colors focus:outline-none"
          aria-label="Toggle mobile menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </motion.nav>

      {/* Mobile Drawer menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed top-[72px] left-0 right-0 z-40 bg-navy/95 border-b border-gold/15 backdrop-blur-lg flex flex-col px-6 py-8 gap-6 lg:hidden max-h-[calc(100vh-72px)] overflow-y-auto"
          >
            <ul className="flex flex-col gap-5 text-sm font-sans font-semibold tracking-wider uppercase">
              <li>
                <a 
                  href="#about" 
                  onClick={(e) => handleNavClick(e, "about")}
                  className="text-slate hover:text-gold block py-1.5 transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a 
                  href="#services" 
                  onClick={(e) => handleNavClick(e, "services")}
                  className="text-slate hover:text-gold block py-1.5 transition-colors"
                >
                  Loan Products
                </a>
              </li>
              <li>
                <a 
                  href="#how-it-works" 
                  onClick={(e) => handleNavClick(e, "how-it-works")}
                  className="text-slate hover:text-gold block py-1.5 transition-colors"
                >
                  How It Works
                </a>
              </li>
              <li>
                <a 
                  href="#calculator" 
                  onClick={(e) => handleNavClick(e, "calculator")}
                  className="text-slate hover:text-gold block py-1.5 transition-colors"
                >
                  Loan Calculator
                </a>
              </li>
              <li>
                <a 
                  href="#eligibility" 
                  onClick={(e) => handleNavClick(e, "eligibility")}
                  className="text-slate hover:text-gold block py-1.5 transition-colors"
                >
                  Eligibility
                </a>
              </li>
              <li className="mt-2">
                <a 
                  href="#contact" 
                  onClick={(e) => handleNavClick(e, "contact")}
                  className="text-center block py-3 border border-gold text-gold hover:bg-gold hover:text-navy transition-all duration-200 rounded-[2px]"
                >
                  Apply Now
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
