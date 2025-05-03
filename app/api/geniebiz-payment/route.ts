import { NextRequest, NextResponse } from "next/server";
import axios from "axios";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    console.log("Body:", body);
    

    const response = await axios.post(
      "https://api.uat.geniebiz.lk/public/v2/transactions",
      body,
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization:
          process.env.NEXT_PUBLIC_GENIE_API
        },
      }
    );

    return NextResponse.json(response.data);
  } catch (error: any) {
    console.error("Payment API error:", error.message);
    return NextResponse.json(
      { error: error.message || "Internal Server Error" },
      { status: error.response?.status || 500 }
    );
  }
}
