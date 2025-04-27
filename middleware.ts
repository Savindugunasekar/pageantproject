import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname.startsWith('/admin')) {
    const isAdmin = request.cookies.get('adminAuth')?.value === 'true';

    if (!isAdmin) {
      // Still allow access to the page, but it will show modal until verified
      const res = NextResponse.next();
      res.headers.set('x-require-admin-auth', 'true');
      return res;
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*'],
};
