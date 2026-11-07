"use client";

import { useEffect, useState } from "react";

interface VisitorStats {
  online: number;
  today: number;
  thisWeek: number;
  thisMonth: number;
  thisYear: number;
  total: number;
}

function getOrCreateVisitorId(): string {
  if (typeof window === "undefined") return "";
  try {
    let id = localStorage.getItem("aetharix_vid");
    if (!id) {
      id =
        typeof crypto !== "undefined" && crypto.randomUUID
          ? crypto.randomUUID()
          : "v_" + Math.random().toString(36).slice(2) + Date.now().toString(36);
      localStorage.setItem("aetharix_vid", id);
    }
    return id;
  } catch {
    return "guest_" + Math.random().toString(36).slice(2);
  }
}

function formatNumber(num: number | undefined): string {
  if (num === undefined || num === null) return "0";
  return new Intl.NumberFormat("id-ID").format(num);
}

export default function VisitorCounter() {
  const [stats, setStats] = useState<VisitorStats | null>(null);
  const [isLive, setIsLive] = useState(true);

  useEffect(() => {
    const vid = getOrCreateVisitorId();
    let isMounted = true;

    async function sendVisit(isPing = false) {
      try {
        const res = await fetch("/api/visitors", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ visitorId: vid, isPing }),
        });
        if (res.ok && isMounted) {
          const data: VisitorStats = await res.json();
          setStats(data);
          setIsLive(true);
        }
      } catch {
        if (isMounted) setIsLive(false);
      }
    }

    // Initial visit record
    sendVisit(false);

    // Heartbeat every 25 seconds for realtime accuracy
    const interval = setInterval(() => {
      sendVisit(true);
    }, 25000);

    // Refresh immediately when returning to tab
    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible") {
        sendVisit(true);
      }
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      isMounted = false;
      clearInterval(interval);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  const items = [
    {
      label: "Hari Ini",
      value: stats?.today,
      badge: "Hari berjalan",
      icon: (
        <svg className="w-4 h-4 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      accent: "from-sky-500/20 to-transparent",
    },
    {
      label: "Minggu Ini",
      value: stats?.thisWeek,
      badge: "Pekan ini",
      icon: (
        <svg className="w-4 h-4 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      accent: "from-indigo-500/20 to-transparent",
    },
    {
      label: "Bulan Ini",
      value: stats?.thisMonth,
      badge: "Bulan ini",
      icon: (
        <svg className="w-4 h-4 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      accent: "from-purple-500/20 to-transparent",
    },
    {
      label: "Tahun Ini",
      value: stats?.thisYear,
      badge: "Tahun berjalan",
      icon: (
        <svg className="w-4 h-4 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      accent: "from-teal-500/20 to-transparent",
    },
    {
      label: "Total Pengunjung",
      value: stats?.total,
      badge: "Semua waktu",
      icon: (
        <svg className="w-4 h-4 text-pink-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      accent: "from-pink-500/20 to-transparent",
      highlight: true,
    },
  ];

  return (
    <div className="mt-12 pt-10 border-t border-edge-2">
      {/* Header bar: Title & Realtime indicator */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-tosca/10 border border-tosca/20 flex items-center justify-center text-tosca">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
          </div>
          <div>
            <h4 className="text-sm font-display font-bold text-chalk tracking-tight flex items-center gap-2">
              Pengunjung Website
              <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-white/5 border border-edge text-dim">
                Analytics
              </span>
            </h4>
            <p className="text-xs text-dim">Metrik statistik lalu lintas pengunjung terverifikasi</p>
          </div>
        </div>

        {/* Realtime Live Pill */}
        <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-deep/90 border border-edge-2 shadow-inner">
          <span className="relative flex h-2 w-2">
            <span
              className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${
                isLive ? "bg-emerald-400" : "bg-amber-400"
              }`}
            />
            <span
              className={`relative inline-flex rounded-full h-2 w-2 ${
                isLive ? "bg-emerald-400" : "bg-amber-400"
              }`}
            />
          </span>
          <span className="text-xs font-mono font-medium text-mist">
            <span className="text-emerald-400 font-bold">Realtime</span>
            <span className="mx-1.5 text-dim">•</span>
            <span className="text-chalk font-semibold">{stats ? formatNumber(stats.online) : "..."}</span>
            <span className="text-dim ml-1">Online</span>
          </span>
        </div>
      </div>

      {/* Grid Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5">
        {items.map((item, idx) => (
          <div
            key={idx}
            className={`group relative overflow-hidden rounded-2xl p-4 transition-all duration-300 border ${
              item.highlight
                ? "bg-deep/70 border-tosca/30 hover:border-tosca/60 shadow-[0_0_20px_rgba(129,140,248,0.08)]"
                : "bg-deep/40 border-edge-2 hover:border-edge hover:bg-deep/70"
            }`}
          >
            {/* Top gradient glow on hover */}
            <div
              className={`absolute -top-12 -right-12 w-24 h-24 rounded-full bg-gradient-to-br ${item.accent} blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
            />

            <div className="flex items-center justify-between gap-2 mb-2 relative z-10">
              <span className="text-[11px] font-medium uppercase tracking-wider text-dim group-hover:text-mist transition-colors">
                {item.label}
              </span>
              <div className="p-1 rounded-md bg-white/5 border border-white/5 group-hover:border-white/10 transition-colors">
                {item.icon}
              </div>
            </div>

            <div className="mt-1 relative z-10">
              {stats === null ? (
                <div className="h-7 w-20 bg-white/5 rounded animate-pulse my-0.5" />
              ) : (
                <div className="font-mono text-xl sm:text-2xl font-bold tracking-tight text-chalk group-hover:text-tosca-h transition-colors">
                  {formatNumber(item.value)}
                </div>
              )}
            </div>

            <div className="mt-2 pt-2 border-t border-edge-2/50 flex items-center justify-between text-[10px] text-dim font-mono relative z-10">
              <span>{item.badge}</span>
              <span className="opacity-0 group-hover:opacity-100 transition-opacity text-tosca">●</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

