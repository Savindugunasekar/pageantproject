import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import qs from "querystring";

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  try {
    // Parse the incoming body to extract the payment data
    const body = await req.json();
    const { contestantId, packageType, votes, price } = body;

    // Ensure the values are correctly received
    if (!contestantId || !packageType || !votes || !price) {
      return NextResponse.json({ error: "Missing required parameters" }, { status: 400 });
    }

    // Create a new vote record in the database
    const newVote = await prisma.votes.create({
      data: {
        PurchaseId: String(Date.now()), // You should replace this with dynamic order ID, if applicable
        Amount: price, // Assuming price is sent as a number (not multiplied by 100)
        ContestantId: Number(contestantId),
        Votes: Number(votes),
        PackageType: packageType,
      },
    });

    console.log("Database updated successfully:", newVote);
    return NextResponse.json({ message: "Payment recorded successfully" }, { status: 200 });
  } catch (error) {
    console.error("Error handling webhook:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
