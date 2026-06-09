/**
 * ============================================================================
 * File: route.ts
 * Author: Atonnydev
 * Date: 2026-06-09
 * Component/Module: Applications API Route
 * Description: Handles the submission of new loan applications. Connects to 
 *              the PostgreSQL database via Prisma to persist user requests.
 * ============================================================================
 */
import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

/**
 * Function: POST
 * Description: Processes incoming loan application submissions. Extracts user ID,
 *              loan product ID, and terms from the request body to create a DB record.
 * 
 * @param request - The incoming HTTP Request containing the JSON payload
 * @returns NextResponse with the created application (201) or an error status (400/500)
 */
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { userId, loanProductId, requestedAmount, requestedMonths } = body;

    if (!userId || !loanProductId || !requestedAmount || !requestedMonths) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const application = await prisma.loanApplication.create({
      data: {
        userId: Number(userId),
        loanProductId,
        requestedAmount: Number(requestedAmount),
        requestedMonths: Number(requestedMonths),
      },
    });

    return NextResponse.json(application, { status: 201 });
  } catch (error) {
    console.error("Error creating loan application:", error);
    return NextResponse.json({ error: "Failed to create application" }, { status: 500 });
  }
}
