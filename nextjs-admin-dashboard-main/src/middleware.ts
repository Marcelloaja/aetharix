import { NextResponse } from 'next/server';

// Dummy middleware to prevent Vercel Turbopack from climbing up the directory tree
// and accidentally importing the parent aetharix project's middleware.
export function middleware(request: Request) {
  return NextResponse.next();
}
