import { NextResponse } from 'next/server';
import prisma from '@/app/lib/db';
import bcrypt from 'bcrypt';

export async function POST(req: Request) {
  const { password } = await req.json(); // Extract password from request body

  const user = await prisma.user.findUnique({
    select: { password: true },
    where: { id: 1 },
  });

  if (!user || !user.password) {
    return NextResponse.json({ success: false, message: 'User not found' }, { status: 404 });
  }

  const isMatch = await bcrypt.compare(password, user.password);

  if (isMatch) {
    return NextResponse.json({ success: true });
  }

  return NextResponse.json({ success: false }, { status: 401 });
}
