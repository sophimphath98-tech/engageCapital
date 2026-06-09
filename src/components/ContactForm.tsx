import React, { useState, useEffect } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle, History, Trash2, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { InquiryFormInput } from "../types";

export default function ContactForm() {
  const [form, setForm] = useState<InquiryFormInput>({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    loanType: "",
    loanAmountRange: "",
    employmentStatus: "",
    message: ""
  });

  const [errors, setErrors] = useState<Partial<InquiryFormInput>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [savedInquiries, setSavedInquiries] = useState<InquiryFormInput[]>([]);
  const [showHistory, setShowHistory] = useState(false);

  // Load submissions from LocalStorage on mount
  useEffect(() => {
    try {
      const logs = localStorage.getItem("engage_capital_inquiries");
      if (logs) {
        setSavedInquiries(JSON.parse(logs));
      }
    } catch (e) {
      console.error("Local storage fail", e);
    }
  }, []);

  const validate = (): boolean => {
    const newErrors: Partial<InquiryFormInput> = {};
    if (!form.firstName.trim()) newErrors.firstName = "First name is required";
    if (!form.lastName.trim()) newErrors.lastName = "Last name is required";
    if (!form.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (form.phone.length < 8) {
      newErrors.phone = "Please specify a valid phone number";
    }
    if (!form.email.trim()) {
      newErrors.email = "Email address is required";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Please specify a valid email address";
    }
    if (!form.loanType) newErrors.loanType = "Please select a loan type";
    if (!form.loanAmountRange) newErrors.loanAmountRange = "Please select a loan range";
    if (!form.employmentStatus) newErrors.employmentStatus = "Please select employment status";
    if (!form.message.trim()) newErrors.message = "Please tell us what you need the loan for";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      const updatedInquiries = [form, ...savedInquiries];
      setSavedInquiries(updatedInquiries);
      try {
        localStorage.setItem("engage_capital_inquiries", JSON.stringify(updatedInquiries));
      } catch (err) {
        console.error("Failed to save to local storage", err);
      }
      setIsSubmitted(true);
      
      // Auto reset form
      setForm({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        loanType: "",
        loanAmountRange: "",
        employmentStatus: "",
        message: ""
      });
      setErrors({});

      // Reset success status after some time
      setTimeout(() => {
        setIsSubmitted(false);
      }, 7000);
    }
  };

  const clearHistory = () => {
    setSavedInquiries([]);
    localStorage.removeItem("engage_capital_inquiries");
    setShowHistory(false);
  };

  return (
    <section id="contact" className="py-16 md:py-24 px-6 md:px-12 max-w-7xl mx-auto border-b border-gold/15 relative">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        
        {/* Left Side Content & Contact detail list */}
        <div className="lg:col-span-5 flex flex-col justify-between h-full">
          <div>
            <div className="inline-flex items-center gap-1.5 text-[0.7rem] font-semibold tracking-widest text-gold uppercase mb-3">
              <span className="w-6 h-[1px] bg-gold block"></span>
              Apply Now
            </div>
            
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-white tracking-tight leading-tight">
              Start Your Loan Application
            </h2>

            <div className="w-[48px] h-[2px] bg-gold my-6"></div>

            <p className="text-xs sm:text-sm text-slate leading-relaxed mb-10 max-w-md">
              Fill out the form and one of our loan officers will contact you within 2 hours to guide you through the next steps. Zero upfront fees, 100% digital verification.
            </p>

            <div className="space-y-6">
              
              <div className="flex gap-4 items-start group">
                <div className="w-11 h-11 flex-shrink-0 bg-gold/5 border border-gold/20 flex items-center justify-center rounded-[2px] text-gold group-hover:bg-gold group-hover:text-navy transition-all duration-300">
                  <MapPin className="w-4.5 h-4.5 stroke-[1.5]" />
                </div>
                <div>
                  <div className="text-[0.68rem] font-semibold tracking-widest text-gold uppercase mb-1">
                    Corporate Headquarters
                  </div>
                  <div className="text-[0.85rem] text-slate leading-relaxed">
                    12th Floor, Canadia Tower<br />
                    315 Preah Ang Doung Street<br />
                    Phnom Penh, Cambodia 12202
                  </div>
                </div>
              </div>

              <div className="flex gap-4 items-start group">
                <div className="w-11 h-11 flex-shrink-0 bg-gold/5 border border-gold/20 flex items-center justify-center rounded-[2px] text-gold group-hover:bg-gold group-hover:text-navy transition-all duration-300">
                  <Phone className="w-4.5 h-4.5 stroke-[1.5]" />
                </div>
                <div>
                  <div className="text-[0.68rem] font-semibold tracking-widest text-gold uppercase mb-1">
                    Contact Hotline
                  </div>
                  <div className="text-[0.85rem] text-slate leading-relaxed hover:text-gold transition-colors">
                    <a href="tel:+855231234567">+855 23 123 4567</a>
                  </div>
                </div>
              </div>

              <div className="flex gap-4 items-start group">
                <div className="w-11 h-11 flex-shrink-0 bg-gold/5 border border-gold/20 flex items-center justify-center rounded-[2px] text-gold group-hover:bg-gold group-hover:text-navy transition-all duration-300">
                  <Mail className="w-4.5 h-4.5 stroke-[1.5]" />
                </div>
                <div>
                  <div className="text-[0.68rem] font-semibold tracking-widest text-gold uppercase mb-1">
                    Official Message Desk
                  </div>
                  <div className="text-[0.85rem] text-slate leading-relaxed hover:text-gold transition-colors">
                    <a href="mailto:info@engagecapital.com.kh">info@engagecapital.com.kh</a>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Submissions logs / client-side persistent ledger */}
          {savedInquiries.length > 0 && (
            <div className="mt-12 p-3.5 border border-gold/15 bg-navy-mid/40 rounded-[2px] text-xs">
              <div className="flex items-center justify-between mb-2">
                <span className="font-mono text-[0.68rem] text-gold font-bold tracking-widest uppercase flex items-center gap-1">
                  <History className="w-3.5 h-3.5 text-gold-light" />
                  Local Application Ledger ({savedInquiries.length})
                </span>
                <div className="flex gap-2">
                  <button 
                    onClick={() => setShowHistory(!showHistory)}
                    className="text-gold-light hover:underline text-[0.65rem] font-semibold cursor-pointer"
                  >
                    {showHistory ? "Hide Logs" : "Show Logs"}
                  </button>
                  <button 
                    onClick={clearHistory}
                    className="text-red-400 hover:text-red-300 ml-1 cursor-pointer"
                    title="Clear history log"
                  >
                    <Trash2 className="w-3 h-3.5" />
                  </button>
                </div>
              </div>
              <p className="text-[0.7rem] text-slate leading-normal mb-1.5">
                Submissions are simulated and securely stored in your local sandbox browser storage.
              </p>

              <AnimatePresence>
                {showHistory && (
                  <motion.div 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="overflow-hidden mt-2 max-h-52 overflow-y-auto space-y-2.5 pr-1.5"
                  >
                    {savedInquiries.map((inq, idx) => (
                      <div key={idx} className="p-2 border-l-2 border-gold bg-navy/80 space-y-1">
                        <div className="flex justify-between font-mono text-[0.65rem] text-gold-light">
                          <span>{inq.firstName} {inq.lastName} ({inq.phone})</span>
                          <span className="text-slate">{inq.loanType}</span>
                        </div>
                        <div className="text-[0.65rem] text-stone-300">
                          Range: <span className="text-gold">{inq.loanAmountRange}</span> | Status: <span className="text-gold">{inq.employmentStatus}</span>
                        </div>
                        <p className="text-[0.68rem] font-sans text-stone-300 italic whitespace-pre-wrap leading-normal line-clamp-3">
                          "{inq.message}"
                        </p>
                      </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )}

        </div>

        {/* Right Side Form Panel */}
        <div className="lg:col-span-7 bg-navy-mid border border-gold/15 p-6 md:p-8 rounded-[4px] relative shadow-xl">
          
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[0.7rem] font-semibold tracking-wider text-slate uppercase mb-1.5">
                  First Name <span className="text-gold">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Sophea"
                  value={form.firstName}
                  onChange={(e) => setForm({ ...form, firstName: e.target.value })}
                  className={`bg-navy border text-white p-3 text-sm focus:outline-none transition-colors w-full rounded-[2px] ${
                    errors.firstName ? "border-rose-500/50 focus:border-rose-400" : "border-gold/25 focus:border-gold"
                  }`}
                />
                {errors.firstName && <span className="text-[0.68rem] text-rose-400 mt-1 block">{errors.firstName}</span>}
              </div>
              <div>
                <label className="block text-[0.7rem] font-semibold tracking-wider text-slate uppercase mb-1.5">
                  Last Name <span className="text-gold">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Kim"
                  value={form.lastName}
                  onChange={(e) => setForm({ ...form, lastName: e.target.value })}
                  className={`bg-navy border text-white p-3 text-sm focus:outline-none transition-colors w-full rounded-[2px] ${
                    errors.lastName ? "border-rose-500/50 focus:border-rose-400" : "border-gold/25 focus:border-gold"
                  }`}
                />
                {errors.lastName && <span className="text-[0.68rem] text-rose-400 mt-1 block">{errors.lastName}</span>}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[0.7rem] font-semibold tracking-wider text-slate uppercase mb-1.5">
                  Phone Number <span className="text-gold">*</span>
                </label>
                <input
                  type="tel"
                  placeholder="+855 12 345 678"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className={`bg-navy border text-white p-3 text-sm focus:outline-none transition-colors w-full rounded-[2px] ${
                    errors.phone ? "border-rose-500/50 focus:border-rose-400" : "border-gold/25 focus:border-gold"
                  }`}
                />
                {errors.phone && <span className="text-[0.68rem] text-rose-400 mt-1 block">{errors.phone}</span>}
              </div>
              <div>
                <label className="block text-[0.7rem] font-semibold tracking-wider text-slate uppercase mb-1.5">
                  Email Address <span className="text-gold">*</span>
                </label>
                <input
                  type="email"
                  placeholder="sophea@email.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className={`bg-navy border text-white p-3 text-sm focus:outline-none transition-colors w-full rounded-[2px] ${
                    errors.email ? "border-rose-500/50 focus:border-rose-400" : "border-gold/25 focus:border-gold"
                  }`}
                />
                {errors.email && <span className="text-[0.68rem] text-rose-400 mt-1 block">{errors.email}</span>}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[0.7rem] font-semibold tracking-wider text-slate uppercase mb-1.5">
                  Loan Type <span className="text-gold">*</span>
                </label>
                <select
                  value={form.loanType}
                  onChange={(e) => setForm({ ...form, loanType: e.target.value })}
                  className={`bg-navy border text-white p-3 text-sm focus:outline-none transition-colors w-full rounded-[2px] ${
                    errors.loanType ? "border-rose-500/50" : "border-gold/25 focus:border-gold"
                  }`}
                >
                  <option value="">Select loan type...</option>
                  <option>Personal Loan</option>
                  <option>SME Business Loan</option>
                  <option>Payroll Loan</option>
                  <option>Agricultural Loan</option>
                  <option>Emergency Loan</option>
                  <option>Green Loan</option>
                </select>
                {errors.loanType && <span className="text-[0.68rem] text-rose-400 mt-1 block">{errors.loanType}</span>}
              </div>
              <div>
                <label className="block text-[0.7rem] font-semibold tracking-wider text-slate uppercase mb-1.5">
                  Loan Amount (USD) <span className="text-gold">*</span>
                </label>
                <select
                  value={form.loanAmountRange}
                  onChange={(e) => setForm({ ...form, loanAmountRange: e.target.value })}
                  className={`bg-navy border text-white p-3 text-sm focus:outline-none transition-colors w-full rounded-[2px] ${
                    errors.loanAmountRange ? "border-rose-500/50" : "border-gold/25 focus:border-gold"
                  }`}
                >
                  <option value="">Select amount...</option>
                  <option>$200 – $500</option>
                  <option>$500 – $2,000</option>
                  <option>$2,000 – $10,000</option>
                  <option>$10,000 – $50,000</option>
                </select>
                {errors.loanAmountRange && <span className="text-[0.68rem] text-rose-400 mt-1 block">{errors.loanAmountRange}</span>}
              </div>
            </div>

            <div>
              <label className="block text-[0.7rem] font-semibold tracking-wider text-slate uppercase mb-1.5">
                Employment Status <span className="text-gold">*</span>
              </label>
              <select
                value={form.employmentStatus}
                onChange={(e) => setForm({ ...form, employmentStatus: e.target.value })}
                className={`bg-navy border text-white p-3 text-sm focus:outline-none transition-colors w-full rounded-[2px] ${
                  errors.employmentStatus ? "border-rose-500/50" : "border-gold/25 focus:border-gold"
                }`}
              >
                <option value="">Select status...</option>
                <option>Salaried Employee</option>
                <option>Self-Employed / Freelancer</option>
                <option>Business Owner</option>
                <option>Farmer / Agri-Worker</option>
                <option>Other</option>
              </select>
              {errors.employmentStatus && <span className="text-[0.68rem] text-rose-400 mt-1 block">{errors.employmentStatus}</span>}
            </div>

            <div>
              <label className="block text-[0.7rem] font-semibold tracking-wider text-slate uppercase mb-1.5">
                Additional Notes / Message <span className="text-gold">*</span>
              </label>
              <textarea
                placeholder="Briefly describe what you need the loan for..."
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className={`bg-navy border text-white p-3 text-sm focus:outline-none transition-colors w-full h-32 resize-none rounded-[2px] ${
                  errors.message ? "border-rose-500/50 focus:border-rose-400" : "border-gold/25 focus:border-gold"
                }`}
              ></textarea>
              {errors.message && <span className="text-[0.68rem] text-rose-400 mt-1 block">{errors.message}</span>}
            </div>

            <button
              type="submit"
              className="px-8 py-3.5 bg-gold text-navy font-bold rounded-[2px] text-xs tracking-wider uppercase transition-all duration-150 transform hover:-translate-y-0.5 active:translate-y-0 self-start flex items-center gap-2 group hover:bg-gold-light mt-2 cursor-pointer"
            >
              Submit Application →
            </button>
          </form>

          {/* Success Dialog overlay */}
          <AnimatePresence>
            {isSubmitted && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 bg-navy/95 backdrop-blur-sm flex flex-col items-center justify-center text-center p-6 rounded-[4px] z-20 border border-gold"
              >
                <div className="w-16 h-16 bg-gold/15 border border-gold/40 rounded-full flex items-center justify-center mb-4 text-gold">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-xl font-bold text-white mb-2">Application Received Successfully</h3>
                <p className="text-slate text-xs max-w-sm leading-relaxed mb-6">
                  Thank you! Your loan request has been securely stored in your local sandbox browser logs. One of our credit agents will reach out to verify your details in under 2 hours.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="px-6 py-2 border border-gold text-gold hover:bg-gold hover:text-navy text-xs font-semibold uppercase tracking-wider rounded-[2px] transition-all cursor-pointer"
                >
                  Return to Form
                </button>
              </motion.div>
            )}
          </AnimatePresence>

        </div>

      </div>
    </section>
  );
}
