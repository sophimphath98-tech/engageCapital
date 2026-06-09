/**
 * ============================================================================
 * File: productsService.ts
 * Author: Atonnydev
 * Date: 2026-06-09
 * Component/Module: Products Service
 * Description: Server-side data access layer to fetch loan products directly 
 *              from the Prisma PostgreSQL database for Server Components.
 * ============================================================================
 */
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

/**
 * Function: getLoanProducts
 * Description: Queries the database for all loan products, ordered by creation date.
 * 
 * @returns {Promise<Array>} Array of LoanProduct records or empty array on failure
 */
export const getLoanProducts = async () => {
  try {
    return await prisma.loanProduct.findMany({
      orderBy: { createdAt: 'asc' }
    });
  } catch (error) {
    console.error("Failed to fetch loan products from DB:", error);
    // Return empty array or throw, depending on your error handling strategy
    return [];
  }
};
