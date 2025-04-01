import { NextRequest, NextResponse } from "next/server";
import prisma from "@/app/lib/db";

export async function GET(req: NextRequest) {
  try {
    // Fetch top 10 contestants based on total votes
    const topContestants = await prisma.$queryRaw`
      SELECT 
        c.id, 
        c.name, 
        c.image, 
        COALESCE(SUM(v."Votes"), 0) AS total_votes
      FROM "Contestants" c
      LEFT JOIN "Votes" v ON c.id = v."ContestantId"
      GROUP BY c.id, c.name, c.image
      ORDER BY total_votes DESC
      LIMIT 10;
    `;

    return NextResponse.json(topContestants);
  } catch (error) {
    console.error("Error fetching top contestants:", error);
    return NextResponse.json({ error: "Error fetching data" }, { status: 500 });
  }
}
