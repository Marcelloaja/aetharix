"use client";

import MagneticButton from "@/components/ui/MagneticButton";

export default function Pricing() {
  return (
    <section id="harga" className="py-32 relative z-10 bg-void mt-10">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle,_var(--tw-gradient-stops))] from-blue/10 via-transparent to-transparent pointer-events-none blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue/30 bg-blue/10 text-blue text-xs uppercase font-bold tracking-[0.2em] mb-6">
            MODEL BISNIS BARU
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tight text-chalk">
            Hentikan Biaya Langganan. <br className="hidden md:block" />
            <span className="bg-clip-text text-transparent bg-[image:var(--grad)]">Investasikan Pada Aset.</span>
          </h2>
          <p className="mt-6 text-lg text-mist font-body leading-relaxed">
            SaaS tradisional memaksa Anda menyewa aplikasi selamanya dan membayar per-pengguna. Di Aetharix, Anda cukup berinvestasi satu kali di awal, dan sistem tersebut akan beroperasi sebagai milik Anda selamanya.
          </p>
        </div>

        {/* Pricing Layout - 2 Columns + 1 Full Width Bottom */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-8">
          
          {/* Aetharix Core */}
          <div className="p-8 md:p-10 rounded-3xl border border-edge-2 bg-deep/40 hover:bg-deep/60 transition-colors flex flex-col relative group">
            <h3 className="text-3xl font-display font-bold text-chalk tracking-tight mb-2">Aetharix Core</h3>
            <p className="text-dim text-sm font-body mb-8">Pondasi digital tangguh untuk operasional bisnis terpusat.</p>
            
            <div className="mb-10">
              <p className="text-xs font-bold tracking-widest text-mist mb-2">LISENSI SEUMUR HIDUP</p>
              <div className="flex items-start gap-1">
                <span className="text-xl font-bold text-dim mt-1">Rp</span>
                <span className="text-5xl font-display font-bold text-chalk">4,9 jt</span>
              </div>
            </div>
            
            <ul className="space-y-4 mb-12 flex-1 text-sm text-mist font-body">
              <li className="flex items-start gap-3"><span className="text-blue mt-0.5">✦</span> Pilih 3 Produk Ekosistem (Contoh: POS, HRIS, CRM)</li>
              <li className="flex items-start gap-3"><span className="text-blue mt-0.5">✦</span> Pengguna (User) Tak Terbatas</li>
              <li className="flex items-start gap-3"><span className="text-blue mt-0.5">✦</span> Dashboard Analitik Dasar & Export Laporan</li>
              <li className="flex items-start gap-3"><span className="text-blue mt-0.5">✦</span> Sesi Onboarding Tim Khusus</li>
            </ul>
            
            <a 
              href="https://wa.me/6289625976080?text=Halo%20Tim%20Aetharix,%20saya%20tertarik%20dengan%20lisensi%20AETHARIX%20CORE.%20Bisa%20berikan%20proposalnya?" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full py-4 rounded-xl font-bold border border-edge hover:bg-white/10 transition-colors text-chalk font-body text-center block"
            >
              Pilih Paket Core
            </a>
          </div>
          
          {/* Aetharix Infinity (Highlighted) */}
          <div className="p-8 md:p-10 rounded-3xl border border-tosca/50 bg-gradient-to-b from-tosca/10 to-transparent flex flex-col relative shadow-[0_0_50px_rgba(129,140,248,0.15)]">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue to-tosca-h text-void text-xs font-bold px-6 py-2 rounded-full uppercase tracking-widest shadow-lg">
              Rekomendasi Utama
            </div>
            
            <h3 className="text-3xl font-display font-bold text-chalk tracking-tight mb-2">Aetharix Infinity</h3>
            <p className="text-dim text-sm font-body mb-8">Ekosistem berskala penuh untuk korporasi multi-cabang.</p>
            
            <div className="mb-10">
              <p className="text-xs font-bold tracking-widest text-tosca-h mb-2">LISENSI SEUMUR HIDUP</p>
               <div className="flex items-start gap-1">
                <span className="text-xl font-bold text-tosca-h mt-1">Rp</span>
                <span className="text-5xl font-display font-bold text-chalk">14,9 jt</span>
              </div>
            </div>
            
            <ul className="space-y-4 mb-12 flex-1 text-sm text-mist font-body">
              <li className="flex items-start gap-3"><span className="text-tosca-h mt-0.5">✦</span> <strong>Akses Penuh ke Seluruh Produk (All-in-One)</strong></li>
              <li className="flex items-start gap-3"><span className="text-tosca-h mt-0.5">✦</span> Arsitektur Multi-Cabang & Manajemen Hak Akses Kompleks</li>
              <li className="flex items-start gap-3"><span className="text-tosca-h mt-0.5">✦</span> Kustomisasi Tampilan & White-label Lengkap</li>
              <li className="flex items-start gap-3"><span className="text-tosca-h mt-0.5">✦</span> Advanced AI Forecasting & Business Intelligence</li>
              <li className="flex items-start gap-3"><span className="text-tosca-h mt-0.5">✦</span> Dedicated Support & Maintenance 3 Bulan</li>
            </ul>
            
            <a 
              href="https://wa.me/6289625976080?text=Halo%20Tim%20Aetharix,%20saya%20tertarik%20dengan%20lisensi%20AETHARIX%20INFINITY.%20Mari%20jadwalkan%20meeting." 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <MagneticButton className="w-full !rounded-xl !py-4 font-body">
                Mulai Implementasi
              </MagneticButton>
            </a>
          </div>

        </div>

        {/* Enterprise Bottom Banner */}
        <div className="max-w-5xl mx-auto rounded-3xl border border-edge-2 bg-deep/30 p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden group hover:border-edge transition-colors">
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-mist/10 to-transparent rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
          
          <div className="flex-1">
            <h3 className="text-2xl font-display font-bold text-chalk mb-3">Enterprise Architecture</h3>
            <p className="text-mist font-body leading-relaxed text-sm max-w-2xl">
              Memiliki SOP rumit atau alur kerja spesifik yang tidak bisa diatasi oleh software mana pun? Kami akan merancang produk (sistem) Aetharix dari nol, secara eksklusif untuk korporasi Anda. Termasuk serah terima Source Code dan integrasi server mandiri (On-Premise).
            </p>
          </div>

          <div className="shrink-0 w-full md:w-auto">
            <a 
              href="https://wa.me/6289625976080?text=Halo%20Tim%20Aetharix,%20perusahaan%20kami%20membutuhkan%20arsitektur%20sistem%20kustom%20dari%20nol%20(Enterprise).%20Kapan%20bisa%20bertemu?" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-full md:w-auto gap-3 px-8 py-4 rounded-xl bg-chalk text-void font-bold hover:bg-mist transition-colors font-body"
            >
              Konsultasi Enterprise
              <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
        
        <p className="text-center text-xs text-dim mt-16 font-body max-w-xl mx-auto">
          Infrastruktur komputasi (Server/Hosting) dapat dikelola mandiri atau diserahkan kepada kami dengan biaya langganan server yang sangat transparan mulai dari Rp 150.000 / bulan sesuai traffic perusahaan Anda.
        </p>
      </div>
    </section>
  );
}
