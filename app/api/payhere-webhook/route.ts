import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const data = await req.json();

  // Process the data (you can store the payment status or update the database)

  console.log("Payment Notification:", data);

  // Send a response to PayHere
  return NextResponse.json({ status: "success" });
}
