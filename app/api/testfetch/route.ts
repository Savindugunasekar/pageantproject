// app/api/test/route.ts
import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/app/lib/db';
export async function GET(req: NextRequest) {
  try {
    // Fetch all rows from the 'test' table
    const testData = await prisma.test.findMany(
       { select: {
            name: true,  // Only select the 'name' column
          },}
    );
    
    // Return the fetched data as JSON
    return NextResponse.json(testData);
  } catch (error) {
    console.error('Error fetching data:', error);
    return NextResponse.json({ error: 'Error fetching data' }, { status: 500 });
  }
}
