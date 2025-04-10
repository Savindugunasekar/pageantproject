import { NextResponse } from 'next/server';

// Dummy check – replace with real DB check
const ADMIN_PASSWORD = process.env.NEXT_PUBLIC_ADMIN_PASSWORD;

export async function POST(req: Request) {
  const { password } = await req.json(); // Extract password from request body

  if (password === ADMIN_PASSWORD) {
    return NextResponse.json({ success: true });
  }

  return NextResponse.json({ success: false }, { status: 401 });
}
