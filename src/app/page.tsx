/**
 * ============================================================================
 * File: page.tsx
 * Author: Atonnydev
 * Date: 2026-06-09
 * Component/Module: Root Page
 * Description: Server component that renders the main Home client component.
 * ============================================================================
 */
import { PrismaClient } from "@prisma/client";
import Home from "@/app/Home";
import { loanProducts as fallbackProducts } from "@/constants/loanProducts";
import { LoanProductItem } from "@/types";

const prisma = new PrismaClient();

export default async function Page() {
  let initialProducts: LoanProductItem[] = fallbackProducts;

  try {
    const dbProducts = await prisma.loanProduct.findMany();
    if (dbProducts && dbProducts.length > 0) {
      // Map Prisma models to the UI interface format
      initialProducts = dbProducts.map((p, idx) => ({
        id: p.id,
        num: String(idx + 1).padStart(2, "0"),
        name: p.name,
        desc: p.description,
        defaultAmount: p.minAmount, // Provide sensible UI defaults
        defaultMonths: p.maxTermMonths,
        defaultRate: p.interestRate,
        details: fallbackProducts.find(f => f.id === p.id)?.details || [],
        requiredDocs: fallbackProducts.find(f => f.id === p.id)?.requiredDocs || [],
        disbursementTime: fallbackProducts.find(f => f.id === p.id)?.disbursementTime || "In 24 Hours",
        // Pass original min/max for the calculator
        minAmount: p.minAmount,
        maxAmount: p.maxAmount,
        maxTermMonths: p.maxTermMonths,
        interestRate: p.interestRate,
      })) as any; // Cast as we're extending the original type slightly
    }
  } catch (error) {
    console.warn("Database connection failed or not configured, using static fallback data.");
  }

  return <Home initialProducts={initialProducts} />;
}
