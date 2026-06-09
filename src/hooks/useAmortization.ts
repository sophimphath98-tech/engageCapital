/**
 * ============================================================================
 * File: useAmortization.ts
 * Author: Atonnydev
 * Date: 2026-06-09
 * Component/Module: Amortization Hook
 * Description: Hook that calculates monthly payments and total interest dynamically.
 * ============================================================================
 */
import { useMemo } from "react";

export function useAmortization(amount: number, months: number, interestRate: number) {
  return useMemo(() => {
    const r = interestRate / 100 / 12;
    const monthlyPayment = r === 0 
      ? amount / months 
      : (amount * r * Math.pow(1 + r, months)) / (Math.pow(1 + r, months) - 1);
    
    const totalPayable = monthlyPayment * months;
    const totalInterest = totalPayable - amount;

    return {
      monthly: Math.round(monthlyPayment),
      totalInterest: Math.round(totalInterest),
      totalPayable: Math.round(totalPayable)
    };
  }, [amount, months, interestRate]);
}
