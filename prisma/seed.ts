/**
 * ============================================================================
 * File: seed.ts
 * Author: Atonnydev
 * Date: 2026-06-09
 * Component/Module: Prisma Seed Script
 * Description: Populates the database with initial configurations, mainly the
 *              standard Loan Products.
 * ============================================================================
 */
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const initialLoanProducts = [
  {
    id: 'srv-personal',
    name: 'Personal Loan',
    description: 'Quick cash for health, travel or household needs.',
    minAmount: 200,
    maxAmount: 10000,
    interestRate: 12.0,
    maxTermMonths: 24,
  },
  {
    id: 'srv-sme',
    name: 'SME Business Loan',
    description: 'Boost inventory, payroll, or business scaling operations.',
    minAmount: 2000,
    maxAmount: 50000,
    interestRate: 9.5,
    maxTermMonths: 36,
  },
  {
    id: 'srv-payroll',
    name: 'Payroll Loan',
    description: 'Fast approval for salaried workers using employment letters.',
    minAmount: 200,
    maxAmount: 5000,
    interestRate: 11.0,
    maxTermMonths: 12,
  },
  {
    id: 'srv-agri',
    name: 'Agricultural Loan',
    description: 'Flexible repayments adjusted around crop harvesting seasons.',
    minAmount: 500,
    maxAmount: 15000,
    interestRate: 8.5,
    maxTermMonths: 24,
  },
  {
    id: 'srv-emergency',
    name: 'Emergency Loan',
    description: 'Immediate same-day payout in hours, accessible 24/7.',
    minAmount: 200,
    maxAmount: 2000,
    interestRate: 15.0,
    maxTermMonths: 6,
  },
  {
    id: 'srv-green',
    name: 'Green Loan',
    description: 'Discounted financing for solar installations or EVs.',
    minAmount: 500,
    maxAmount: 20000,
    interestRate: 8.0,
    maxTermMonths: 36,
  }
];

async function main() {
  console.log('Seeding database with Loan Products...');
  
  for (const product of initialLoanProducts) {
    const result = await prisma.loanProduct.upsert({
      where: { id: product.id },
      update: product,
      create: product,
    });
    console.log(`Upserted Loan Product: ${result.name}`);
  }
  
  console.log('Database seeding complete!');
}

main()
  .catch((e) => {
    console.error('Error during seeding:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
