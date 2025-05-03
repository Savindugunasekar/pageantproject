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
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6IjM2YmFmY2U3LWEyMDEtNDI5Yi1hOWUyLWM1Yjc4NTQ2Njc3YyIsImNvbXBhbnlJZCI6IjYzOTdmMzlkZjA3ZmJhMDAwODQyYTkwYiIsImlhdCI6MTY3MDkwMjY4NSwiZXhwIjo0ODI2NTc2Mjg1fQ.fy12dgFhA3iB_RCjD7y8j5HClNRZUiBZgAg-QzFpxaE",
        },
      }
    );
    const paymentUrl = response.data?.url;

    if (paymentUrl) {
      window.location.href = paymentUrl; // Redirect to GenieBiz payment page
    } else {
      console.error("No payment URL returned from API");
    }

    return NextResponse.json(response.data);
  } catch (error: any) {
    console.error("Payment API error:", error.message);
    return NextResponse.json(
      { error: error.message || "Internal Server Error" },
      { status: error.response?.status || 500 }
    );
  }
}
