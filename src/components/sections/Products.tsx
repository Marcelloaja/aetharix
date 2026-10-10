"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import GlassCard from "@/components/ui/GlassCard";

const products = [
  {
    title: "Aetharix POS",
    description: "Sistem kasir cerdas dengan sinkronisasi multi-cabang instan dan dukungan offline-first.",
    color: "from-blue/20",
    icon: "M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z",
  },
  {
    title: "Aetharix HRIS",
    description: "Automasi payroll, manajemen shift, absensi geofencing, dan evaluasi kinerja karyawan.",
    color: "from-tosca/20",
    icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
  },
  {
    title: "Aetharix ERP",
    description: "Pusat kendali rantai pasok, manajemen gudang, akuntansi, dan pengadaan barang skala enterprise.",
    color: "from-pink-500/20",
    icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10",
  },
  {
    title: "Aetharix CRM",
    description: "Lacak pipeline penjualan, interaksi pelanggan, dan maksimalkan retensi dengan analitik AI.",
    color: "from-emerald-500/20",
    icon: "M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z",
  },
  {
    title: "Aetharix Omni",
    description: "Pusat layanan pelanggan terpadu dari WhatsApp, Instagram, dan Email dalam satu dashboard.",
    color: "from-orange-500/20",
    icon: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z",
  },
  {
    title: "Aetharix Pay",
    description: "Otomatisasi tagihan, manajemen langganan, payment gateway, dan rekonsiliasi instan.",
    color: "from-indigo-500/20",
    icon: "M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z",
  },
  {
    title: "Aetharix LMS",
    description: "Platform onboarding dan e-learning interaktif untuk peningkatan kualitas tim berkelanjutan.",
    color: "from-purple-500/20",
    icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
  },
  {
    title: "Aetharix Data",
    description: "Business Intelligence dashboard yang mengubah jutaan data mentah menjadi metrik siap pakai.",
    color: "from-cyan-500/20",
    icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
  }
];

export default function Products() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);
    }

    const ctx = gsap.context(() => {
      // Memastikan efek scroll horizontal terjadi secara dinamis
      const scrollWidth = scrollRef.current?.scrollWidth || 0;
      const clientWidth = window.innerWidth;
      
      // Jika ukuran konten lebih lebar dari layar, lakukan horizontal scroll
      if (scrollWidth > clientWidth) {
        gsap.to(scrollRef.current, {
          x: -(scrollWidth - clientWidth + 100), 
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            pin: true,
            scrub: 1, // Smooth scrub
            start: "top 82px", // Pas di bawah navbar
            end: () => `+=${scrollWidth}`,
          },
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} id="produk" className="relative z-10 py-12 md:py-24 bg-void overflow-hidden flex flex-col justify-center min-h-[calc(100vh-82px)] md:min-h-0">
      <div className="max-w-7xl mx-auto px-6 mb-8 md:mb-16 w-full">
         <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tight text-chalk">
            Ekosistem <span className="bg-clip-text text-transparent bg-[image:var(--grad)]">Super-App</span> Anda.
          </h2>
          <p className="mt-4 text-mist font-body max-w-xl text-lg">
            Satu platform, puluhan solusi. Bebaskan bisnis Anda dari kerumitan berbagai macam aplikasi yang tidak saling terhubung.
          </p>
      </div>

      <div className="pl-6 md:pl-[max(1.5rem,calc((100vw-80rem)/2))]">
        <div ref={scrollRef} className="flex gap-6 md:gap-8 w-max pb-12">
          {products.map((product, i) => (
            <div key={i} className="w-[300px] md:w-[450px] shrink-0 relative rounded-3xl p-[2px] overflow-hidden group/laser">
              
              {/* Animasi Laser Berputar */}
              <div className="absolute top-1/2 left-1/2 w-[200%] h-[200%] -translate-x-1/2 -translate-y-1/2 bg-[conic-gradient(from_0deg,transparent_75%,rgba(67,196,188,1)_100%)] animate-[spin_4s_linear_infinite] opacity-60 group-hover/laser:opacity-100 transition-opacity" />
              
              {/* Card Utama (Menutupi laser, menyisakan border) */}
              <GlassCard className="h-full w-full relative z-10 p-8 md:p-10 flex flex-col justify-between group overflow-hidden bg-void/95 hover:bg-void transition-colors border-none rounded-[22px]">
                <div className={`absolute top-0 right-0 w-80 h-80 bg-gradient-to-br ${product.color} to-transparent rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`} />
                
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-10 z-10 relative shadow-xl">
                  <svg className="w-7 h-7 text-chalk" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d={product.icon} />
                  </svg>
                </div>

                <div className="z-10 relative flex flex-col flex-grow">
                  <h3 className="text-2xl font-display font-bold mb-3 text-chalk">{product.title}</h3>
                  <p className="text-mist font-body leading-relaxed mb-6 flex-grow">{product.description}</p>
                  
                  <a 
                    href={`https://wa.me/6289625976080?text=${encodeURIComponent(`Halo Tim Aetharix, saya tertarik untuk mendiskusikan implementasi ${product.title} untuk perusahaan saya. Bisa dibantu informasi lebih lanjut?`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto inline-flex items-center gap-2 text-sm font-bold text-chalk hover:text-white transition-colors group/btn w-fit"
                  >
                    Tanya via WhatsApp
                    <svg className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
              </GlassCard>
            </div>
          ))}
          {/* Jarak kosong ekstra di akhir agar card terakhir tidak terpotong saat di-scroll mentok */}
          <div className="w-[10vw] shrink-0" /> 
        </div>
      </div>
    </section>
  );
}
