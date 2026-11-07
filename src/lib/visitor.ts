import { prisma } from "@/lib/db";

export interface JakartaDateInfo {
  todayStr: string;
  weekStartStr: string;
  monthStartStr: string;
  yearStartStr: string;
}

export function getJakartaDateInfo(date = new Date()): JakartaDateInfo {
  const formatter = new Intl.DateTimeFormat("en-US", {
    timeZone: "Asia/Jakarta",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    weekday: "short",
    hour12: false,
  });

  const parts = formatter.formatToParts(date);
  const partMap: Record<string, string> = {};
  for (const p of parts) partMap[p.type] = p.value;

  const year = partMap.year || "2026";
  const month = partMap.month || "01";
  const day = partMap.day || "01";
  const weekday = partMap.weekday || "Mon";

  const todayStr = `${year}-${month}-${day}`;
  const monthStartStr = `${year}-${month}-01`;
  const yearStartStr = `${year}-01-01`;

  const dayMap: Record<string, number> = {
    Mon: 0,
    Tue: 1,
    Wed: 2,
    Thu: 3,
    Fri: 4,
    Sat: 5,
    Sun: 6,
  };
  const diffDays = dayMap[weekday] ?? 0;

  const jakartaDateOnly = new Date(
    Date.UTC(parseInt(year, 10), parseInt(month, 10) - 1, parseInt(day, 10))
  );
  const mondayDate = new Date(
    jakartaDateOnly.getTime() - diffDays * 24 * 60 * 60 * 1000
  );

  const mYear = mondayDate.getUTCFullYear();
  const mMonth = String(mondayDate.getUTCMonth() + 1).padStart(2, "0");
  const mDay = String(mondayDate.getUTCDate()).padStart(2, "0");
  const weekStartStr = `${mYear}-${mMonth}-${mDay}`;

  return {
    todayStr,
    weekStartStr,
    monthStartStr,
    yearStartStr,
  };
}

export interface VisitorStats {
  online: number;
  today: number;
  thisWeek: number;
  thisMonth: number;
  thisYear: number;
  total: number;
}

export async function recordVisitor(
  visitorId: string,
  isPing = false
): Promise<VisitorStats> {
  if (!visitorId || typeof visitorId !== "string" || visitorId.length < 4) {
    return getVisitorStats();
  }

  const cleanVisitorId = visitorId.trim().slice(0, 100);
  const { todayStr } = getJakartaDateInfo();
  const now = new Date();

  try {
    await prisma.visitorSession.upsert({
      where: {
        visitorId_date: {
          visitorId: cleanVisitorId,
          date: todayStr,
        },
      },
      update: {
        hits: isPing ? undefined : { increment: 1 },
        lastActive: now,
      },
      create: {
        visitorId: cleanVisitorId,
        date: todayStr,
        hits: 1,
        createdAt: now,
        lastActive: now,
      },
    });
  } catch (err) {
    console.error("Error recording visitor:", err);
  }

  return getVisitorStats();
}

export async function getVisitorStats(): Promise<VisitorStats> {
  const { todayStr, weekStartStr, monthStartStr, yearStartStr } =
    getJakartaDateInfo();
  const fiveMinAgo = new Date(Date.now() - 5 * 60 * 1000);

  try {
    const [
      onlineCount,
      todayCount,
      weekCount,
      monthCount,
      yearCount,
      totalCount,
    ] = await Promise.all([
      prisma.visitorSession
        .findMany({
          where: { lastActive: { gte: fiveMinAgo } },
          distinct: ["visitorId"],
          select: { visitorId: true },
        })
        .then((r) => r.length),

      prisma.visitorSession.count({
        where: { date: todayStr },
      }),

      prisma.visitorSession
        .findMany({
          where: { date: { gte: weekStartStr } },
          distinct: ["visitorId"],
          select: { visitorId: true },
        })
        .then((r) => r.length),

      prisma.visitorSession
        .findMany({
          where: { date: { gte: monthStartStr } },
          distinct: ["visitorId"],
          select: { visitorId: true },
        })
        .then((r) => r.length),

      prisma.visitorSession
        .findMany({
          where: { date: { gte: yearStartStr } },
          distinct: ["visitorId"],
          select: { visitorId: true },
        })
        .then((r) => r.length),

      prisma.visitorSession
        .findMany({
          distinct: ["visitorId"],
          select: { visitorId: true },
        })
        .then((r) => r.length),
    ]);

    const offset = parseInt(process.env.VISITOR_COUNT_OFFSET || "0", 10) || 0;

    return {
      online: Math.max(1, onlineCount),
      today: todayCount + (offset > 0 ? Math.floor(offset / 30) : 0),
      thisWeek: weekCount + (offset > 0 ? Math.floor(offset / 10) : 0),
      thisMonth: monthCount + (offset > 0 ? Math.floor(offset / 3) : 0),
      thisYear: yearCount + offset,
      total: totalCount + offset,
    };
  } catch (err) {
    console.error("Error retrieving visitor stats:", err);
    return {
      online: 1,
      today: 1,
      thisWeek: 1,
      thisMonth: 1,
      thisYear: 1,
      total: 1,
    };
  }
}

