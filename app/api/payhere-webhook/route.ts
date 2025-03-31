import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import qs from "querystring";

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  try {
    // Read raw body as text
    const rawBody = await req.text();
    console.log("Raw Body:", rawBody);

    // Parse URL-encoded body
    const parsedBody = qs.parse(rawBody);
    console.log("Parsed Data:", parsedBody);

    const { merchant_id, order_id, payhere_amount, payhere_currency, status_code, md5sig, custom_1 } = parsedBody;

    if (!merchant_id || !order_id || !payhere_amount || !payhere_currency || !status_code || !md5sig) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    if (status_code !== "2") {
      return NextResponse.json({ error: "Payment not completed" }, { status: 400 });
    }

    const { ContestantId, votes, packageType } = JSON.parse(custom_1 as string);
   



    const newVote = await prisma.votes.create({
      data: {
        PurchaseId: order_id as string,
        Amount: parseFloat(payhere_amount as string),
        ContestantId: ContestantId,
        Votes:votes,
        PackageType:packageType
      },
    });

    console.log("Database updated successfully:", newVote);
    return NextResponse.json({ message: "Payment recorded successfully" }, { status: 200 });
  } catch (error) {
    console.error("Error handling webhook:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
