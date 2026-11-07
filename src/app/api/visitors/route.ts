import { NextResponse } from "next/server";
import { getVisitorStats, recordVisitor } from "@/lib/visitor";

export async function GET(request: Request) {
  try {
    // Reading request URL or headers marks the request dynamic in Next.js 16
    const { searchParams } = new URL(request.url);
    const stats = await getVisitorStats();
    return NextResponse.json(stats, {
      headers: {
        "Cache-Control": "no-store, no-cache, must-revalidate",
      },
    });
  } catch (err) {
    console.error("GET /api/visitors error:", err);
    return NextResponse.json(
      { online: 1, today: 1, thisWeek: 1, thisMonth: 1, thisYear: 1, total: 1 },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    let body: { visitorId?: string; isPing?: boolean } = {};
    try {
      body = await request.json();
    } catch {
      // empty body
    }

    const { visitorId, isPing } = body;

    if (visitorId) {
      const stats = await recordVisitor(visitorId, Boolean(isPing));
      return NextResponse.json(stats, {
        headers: {
          "Cache-Control": "no-store, no-cache, must-revalidate",
        },
      });
    }

    const stats = await getVisitorStats();
    return NextResponse.json(stats);
  } catch (err) {
    console.error("POST /api/visitors error:", err);
    return NextResponse.json(
      { online: 1, today: 1, thisWeek: 1, thisMonth: 1, thisYear: 1, total: 1 },
      { status: 500 }
    );
  }
}
