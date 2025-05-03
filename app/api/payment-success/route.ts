import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { contestantId, packageType, votes, price } = body;

    if (!contestantId || !packageType || !votes || !price) {
      return NextResponse.json({ error: "Missing required parameters" }, { status: 400 });
    }

    const newVote = await prisma.votes.create({
      data: {
        PurchaseId: String(Date.now()), // Ideally, replace this with a real order ID
        Amount: price,
        ContestantId: Number(contestantId),
        Votes: Number(votes),
        PackageType: packageType,
      },
    });

    console.log("Database updated successfully:", newVote);
    return NextResponse.json({ message: "Payment recorded successfully" }, { status: 200 });
  } catch (error) {
    console.error("Error recording payment:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
