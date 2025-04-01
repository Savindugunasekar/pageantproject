import { NextRequest, NextResponse } from "next/server";
import prisma from "@/app/lib/db";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { id } = body;

    if (!id) {
      return NextResponse.json({ error: "Missing contestant ID" }, { status: 400 });
    }

    const contestant = await prisma.contestants.findUnique({
      where: { id: Number(id) },
    });

    if (!contestant) {
      return NextResponse.json({ error: "Contestant not found" }, { status: 404 });
    }

    return NextResponse.json(contestant);
  } catch (error) {
    console.error("Error fetching contestant:", error);
    return NextResponse.json({ error: "Error fetching contestant" }, { status: 500 });
  }
}
