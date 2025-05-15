import { NextRequest, NextResponse } from "next/server";
import prisma from "@/app/lib/db";

export async function GET(req: NextRequest) {
  try {
   const allVotes = await prisma.$queryRaw`
      SELECT 
        c.id, 
        c.name, 
        c.image,
        COALESCE(SUM(v."Votes"), 0) AS total_votes,
        COALESCE(SUM(v."Amount"), 0) AS total_amount
      FROM "Contestants" c
      LEFT JOIN "Votes" v ON c.id = v."ContestantId" AND v."Status" = 'CONFIRMED'
      GROUP BY c.id, c.name, c.image
      ORDER BY total_votes DESC
    `;

    return NextResponse.json(allVotes);
  } catch (error) {
    console.error("Error fetching top contestants:", error);
    return NextResponse.json({ error: "Error fetching data" }, { status: 500 });
  }
}
