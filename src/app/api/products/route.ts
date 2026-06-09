/**
 * ============================================================================
 * File: route.ts
 * Author: Atonnydev
 * Date: 2026-06-09
 * Component/Module: Products API Route
 * Description: API endpoint to fetch loan products via HTTP GET.
 * ============================================================================
 */
import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

/**
 * Function: GET
 * Description: Fetches all active loan products from the database.
 * 
 * @returns {NextResponse} JSON array of products or an error status
 */
export async function GET() {
  try {
    const products = await prisma.loanProduct.findMany({
      orderBy: { createdAt: 'asc' }
    });
    
    return NextResponse.json(products, { status: 200 });
  } catch (error) {
    console.error("Error fetching loan products:", error);
    return NextResponse.json({ error: "Failed to fetch loan products" }, { status: 500 });
  }
}
