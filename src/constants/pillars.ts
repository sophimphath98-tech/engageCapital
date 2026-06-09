/**
 * ============================================================================
 * File: pillars.ts
 * Author: Atonnydev
 * Date: 2026-06-09
 * Component/Module: Company Pillars Constants
 * Description: Static definitions for the core service pillars displayed in 
 *              the About section of the landing page.
 * ============================================================================
 */
import { PillarItem } from "@/types";

export const pillars: PillarItem[] = [
  {
    id: "pil-1",
    icon: "⚡",
    title: "Instant Digital Application",
    desc: "Apply from your phone in under 5 minutes — no branch visit, no paperwork."
  },
  {
    id: "pil-2",
    icon: "🔒",
    title: "Secure & Regulated",
    desc: "Licensed by the National Bank of Cambodia (NBC). Your data and funds are fully protected."
  },
  {
    id: "pil-3",
    icon: "💚",
    title: "Fair & Transparent",
    desc: "Clear interest rates, zero hidden fees, and flexible repayment terms tailored to your needs."
  }
];
