"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function ScrollyTelling() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);
    }
    
    const ctx = gsap.context(() => {
      const steps = gsap.utils.toArray<HTMLElement>('.step-item');
      steps.forEach((step) => {
        gsap.fromTo(step,
          { opacity: 0.15, x: -20 },
          {
            opacity: 1,
            x: 0,
            duration: 0.6,
            scrollTrigger: {
              trigger: step,
              start: "top 70%",
              end: "bottom 30%",
              toggleActions: "play reverse play reverse",
            }
          }
        );
      });

      const lines = gsap.utils.toArray<HTMLElement>('.term-line');
      gsap.fromTo(lines,
        { opacity: 0, y: 15 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.1,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 30%",
            end: "bottom 60%",
            scrub: 1, 
          }
        }
      );
    }, containerRef);
    
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} id="kemampuan" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-start relative">
        
        {/* Left Side: Text Steps */}
        <div className="space-y-16 lg:space-y-[40vh] py-10 lg:py-[10vh]">
          <div className="max-w-md step-item">
            <div className="w-12 h-12 rounded-xl bg-blue/10 flex items-center justify-center mb-6 border border-blue/30 shadow-[0_0_15px_rgba(6,182,212,0.2)]">
              <span className="text-blue font-display font-bold text-xl">01</span>
            </div>
            <h3 className="text-3xl md:text-4xl font-display font-bold text-chalk tracking-tight">
              Manajemen Multi-Cabang.
            </h3>
            <p className="mt-4 text-base md:text-lg text-mist leading-relaxed font-body">
              Kendalikan puluhan hingga ratusan cabang dari satu dashboard pusat. Pantau stok barang, produktivitas karyawan, dan pergerakan kas secara real-time tanpa jeda sinkronisasi.
            </p>
          </div>
          
          <div className="max-w-md step-item">
            <div className="w-12 h-12 rounded-xl bg-tosca/10 flex items-center justify-center mb-6 border border-tosca/30 shadow-[0_0_15px_rgba(139,92,246,0.2)]">
              <span className="text-tosca-h font-display font-bold text-xl">02</span>
            </div>
            <h3 className="text-3xl md:text-4xl font-display font-bold text-chalk tracking-tight">
              Satu Data Terpusat (SSOT).
            </h3>
            <p className="mt-4 text-base md:text-lg text-mist leading-relaxed font-body">
              Tidak ada lagi data silo. Semua modul produk (POS, HRIS, CRM) terhubung ke dalam satu database utama yang terisolasi khusus untuk perusahaan Anda, menghilangkan risiko duplikasi data.
            </p>
          </div>
          
          <div className="max-w-md pb-10 lg:pb-[20vh] step-item">
            <div className="w-12 h-12 rounded-xl bg-pink-500/10 flex items-center justify-center mb-6 border border-pink-500/30 shadow-[0_0_15px_rgba(236,72,153,0.2)]">
              <span className="text-pink-400 font-display font-bold text-xl">03</span>
            </div>
            <h3 className="text-3xl md:text-4xl font-display font-bold text-chalk tracking-tight">
              Kustomisasi Alur Kerja.
            </h3>
            <p className="mt-4 text-base md:text-lg text-mist leading-relaxed font-body">
              Setiap perusahaan memiliki SOP (Standard Operating Procedure) yang unik. Sistem kami dirancang sangat fleksibel untuk mengikuti cara kerja spesifik tim Anda, bukan sebaliknya.
            </p>
          </div>
        </div>

        {/* Right Side: Sticky Terminal Mockup */}
        <div className="hidden lg:block sticky top-[15vh] w-full aspect-square rounded-3xl bg-[#09090B] border border-edge shadow-[0_0_80px_rgba(139,92,246,0.15)] overflow-hidden flex flex-col">
          {/* Terminal Window Decoration */}
          <div className="flex items-center gap-2 px-5 py-4 border-b border-edge bg-void">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-green-500/80" />
            <div className="ml-4 font-mono text-xs text-dim">aetharix@cluster-01:~</div>
          </div>
          
          <div className="p-8 flex-1 flex flex-col font-mono text-sm space-y-4 relative h-full">
            <div className="term-line text-blue">➜ <span className="text-chalk">aetharix</span> cluster --status</div>
            <div className="term-line text-mist leading-loose">
              [<span className="text-green-400">OK</span>] Database Perusahaan: Terisolasi (Ping: 4ms)<br/>
              [<span className="text-green-400">OK</span>] Modul HRIS & Payroll Aktif<br/>
              [<span className="text-green-400">OK</span>] AI Forecasting Engine Siap
            </div>
            
            <div className="term-line text-blue mt-4">➜ <span className="text-chalk">aetharix</span> monitor hq</div>
            <div className="flex flex-col space-y-3 mt-2">
              <div className="term-line flex justify-between border-b border-edge-2 pb-2">
                <span className="text-tosca-h">Cabang Sudirman: Sync 42 Transaksi</span>
                <span className="text-green-400">SUCCESS</span>
                <span>12ms</span>
              </div>
              <div className="term-line flex justify-between border-b border-edge-2 pb-2">
                <span className="text-tosca-h">HRIS: Generate Shift Jadwal Tim B</span>
                <span className="text-green-400">COMPLETED</span>
                <span>45ms</span>
              </div>
              <div className="term-line flex justify-between border-b border-edge-2 pb-2">
                <span className="text-tosca-h">CRM: Webhook Masuk dari WhatsApp</span>
                <span className="text-green-400">RECEIVED</span>
                <span>8ms</span>
              </div>
            </div>
            
            <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-tosca/10 rounded-full blur-[100px] pointer-events-none" />
          </div>
        </div>

      </div>
    </section>
  );
}
