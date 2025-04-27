import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import qs from "querystring";

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // Log the returned data for debugging
    console.log("Transaction Data:", body);
   
  } catch (error) {
    console.error("Error handling webhook:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
