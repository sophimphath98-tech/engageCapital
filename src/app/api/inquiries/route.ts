/**
 * ============================================================================
 * File: route.ts
 * Author: Atonnydev
 * Date: 2026-06-09
 * Component/Module: Inquiries API Route
 * Description: API endpoint to handle new loan inquiries submitted from the 
 *              landing page contact form. Saves the lead to the database.
 * ============================================================================
 */
import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

/**
 * Function: POST
 * Description: Validates and saves a new LoanInquiry to the database.
 * 
 * @param request - The incoming HTTP Request containing the inquiry JSON payload
 * @returns {NextResponse} JSON of the created inquiry or an error status
 */
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { 
      firstName, 
      lastName, 
      phone, 
      email, 
      loanType, 
      loanAmountRange, 
      employmentStatus, 
      message 
    } = body;

    // Basic server-side validation
    if (!firstName || !lastName || !phone || !email || !loanType) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Save inquiry to the database
    const inquiry = await prisma.loanInquiry.create({
      data: {
        firstName,
        lastName,
        phone,
        email,
        loanType,
        amountRange: loanAmountRange,
        employmentStatus,
        message,
      },
    });

    return NextResponse.json(inquiry, { status: 201 });
  } catch (error) {
    console.error("Error creating loan inquiry:", error);
    return NextResponse.json({ error: "Failed to create inquiry" }, { status: 500 });
  }
}
