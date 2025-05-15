import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import axios from "axios";

const prisma = new PrismaClient();

function convertBigIntToString(obj: any): any {
  return JSON.parse(
    JSON.stringify(obj, (_, value) =>
      typeof value === "bigint" ? value.toString() : value
    )
  );
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { localId } = body;

    if (!localId) {
      return NextResponse.json({ error: "Missing required parameters" }, { status: 400 });
    }

    const localIdBigInt = BigInt(localId);
    const Purchasedetails = await prisma.votes.findFirst({
      where: { LocalId: localIdBigInt },
    });

    if (!Purchasedetails) {
      return NextResponse.json({ error: "No record found for localId" }, { status: 404 });
    }

    const transactionId = Purchasedetails.TransactionId;
    let transactionDetails = null;
    let isConfirmed = false;

    if (transactionId) {
      const response = await axios.get(
        `https://api.geniebiz.lk/public/v2/transactions/${transactionId}`,
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: process.env.NEXT_PUBLIC_GENIE_API || "",
          },
        }
      );

      transactionDetails = response.data;
      console.log("Transaction Details:", transactionDetails);

       isConfirmed = transactionDetails.history?.some(
        (entry: any) => entry.state === "CONFIRMED"
      );
      console.log("isConfirmed:", isConfirmed);

      if(isConfirmed) {
        await prisma.votes.updateMany({
          where: { LocalId: localIdBigInt },
          data: { Status: "CONFIRMED" },
        });
      }
      


      

    }

    return NextResponse.json(
  convertBigIntToString({
    ...Purchasedetails,
    transactionDetails,
    isConfirmed
  })
);
  } catch (error: any) {
    console.error("Error recording payment:", error?.response?.data || error.message || error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
