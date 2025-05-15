import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import axios from "axios";

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  try {
    const { genieReq, votes, price, contestantId, packageType, localId } = await req.json();

    if (!genieReq || !votes || !price || !contestantId || !packageType) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const response = await axios.post(
      "https://api.geniebiz.lk/public/v2/transactions",
      genieReq,
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: process.env.NEXT_PUBLIC_GENIE_API || "",
        },
      }
    );

    console.log("response after paymrnt:", response.data);
    console.log("transactionid", response.data?.transactionId);
    

    

    await prisma.votes.create({
      data: {
        PurchaseId: String(Date.now()), // Replace with a proper ID in real use
        Amount: price,
        ContestantId: Number(contestantId),
        Votes: Number(votes),
        PackageType: packageType,
        Status: "Pending",
        LocalId:localId,
        TransactionId: response.data?.id,
      },
    });

    return NextResponse.json(response.data);
  } catch (error: any) {
    console.error("Payment API error:", error.message);
    return NextResponse.json(
      { error: error.message || "Internal Server Error" },
      { status: error.response?.status || 500 }
    );
  }
}
