import { NextResponse } from 'next/server';
import { auth } from '@/auth';

export default auth((req) => {
  const isLoggedIn = !!req.auth;
  const userRole = req.auth?.user?.role;
  const path = req.nextUrl.pathname;

  // Proteksi Halaman Admin
  if (path.startsWith('/admin')) {
    if (!isLoggedIn) {
      return NextResponse.redirect(new URL('/login', req.nextUrl));
    }
    if (userRole !== 'ADMIN') {
      return NextResponse.redirect(new URL('/client/dashboard', req.nextUrl));
    }
  }

  // Proteksi Halaman Client
  if (path.startsWith('/client')) {
    if (!isLoggedIn) {
      return NextResponse.redirect(new URL('/login', req.nextUrl));
    }
    // Jika Admin masuk ke /client, boleh-boleh saja atau kembalikan ke admin
    if (userRole === 'ADMIN' && path === '/client/dashboard') {
       return NextResponse.redirect(new URL('/admin/dashboard', req.nextUrl));
    }
  }

  // Jika user sudah login mencoba masuk ke /login, tendang ke dashboard masing-masing
  if (isLoggedIn && path === '/login') {
    if (userRole === 'ADMIN') {
      return NextResponse.redirect(new URL('/admin/dashboard', req.nextUrl));
    } else {
      return NextResponse.redirect(new URL('/client/dashboard', req.nextUrl));
    }
  }

  return NextResponse.next();
});

// Konfigurasi agar Middleware hanya berjalan di halaman yang tepat
export const config = {
  matcher: ['/admin/:path*', '/client/:path*', '/login'],
};
