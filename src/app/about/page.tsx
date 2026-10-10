import RevealText from "@/components/animations/RevealText";
import GlassCard from "@/components/ui/GlassCard";

export const metadata = {
  title: "Tentang Kami | AETHARIX",
  description: "Mengenal lebih dekat visi Aetharix dalam merevolusi infrastruktur perangkat lunak bisnis modern.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-[120px] pb-24">
      {/* Background Ambience */}
      <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-blue/10 to-transparent pointer-events-none -z-10" />
      
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="max-w-3xl mb-24 mt-12">
          <RevealText delay={0.2}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-tosca/30 bg-tosca/10 text-tosca-h text-xs uppercase font-bold tracking-[0.2em] mb-8">
              Misi Kami
            </div>
          </RevealText>
          <RevealText delay={0.4}>
            <h1 className="text-5xl md:text-7xl font-display font-bold text-chalk tracking-tight mb-8 leading-[1.1]">
              Membangun Sistem <br />
              <span className="text-mist">Untuk Ambisi Besar.</span>
            </h1>
          </RevealText>
          <RevealText delay={0.6}>
            <p className="text-lg md:text-xl text-mist font-body leading-relaxed max-w-2xl">
              Kami melihat ribuan perusahaan terjebak pada langganan perangkat lunak yang kaku dan biaya lisensi "per-pengguna" yang menghukum pertumbuhan mereka. Aetharix lahir untuk mengembalikan kendali teknologi ke tangan Anda.
            </p>
          </RevealText>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-32">
          <RevealText delay={0.8}>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-tr from-blue/20 to-tosca/20 rounded-3xl blur-2xl opacity-50" />
              <GlassCard className="relative p-10 bg-deep/80 border-edge-2">
                <h2 className="text-3xl font-display font-bold text-chalk mb-6">Paradigma Baru SaaS</h2>
                <p className="text-mist font-body leading-relaxed mb-6">
                  Di Aetharix, kami percaya bahwa software inti bisnis Anda harus menjadi sebuah <strong>Aset Digital</strong>, bukan liabilitas yang biaya sewanya terus membengkak setiap bulan.
                </p>
                <p className="text-mist font-body leading-relaxed">
                  Itulah mengapa kami merancang arsitektur "Sekali Bayar". Kami merakit, menyesuaikan, dan mendeploy ekosistem digital untuk Anda, dan setelah itu, sistem tersebut sepenuhnya beroperasi untuk Anda—tanpa batasan jumlah karyawan maupun transaksi.
                </p>
              </GlassCard>
            </div>
          </RevealText>
          
          <div className="space-y-8">
            <RevealText delay={1.0}>
              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 rounded-2xl bg-blue/10 border border-blue/20 flex items-center justify-center shrink-0">
                  <span className="text-blue font-bold text-xl">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-display font-bold text-chalk mb-2">Desain Kustom</h3>
                  <p className="text-dim font-body text-sm leading-relaxed">Sistem disesuaikan dengan Alur Kerja (SOP) perusahaan Anda yang unik, bukan sebaliknya.</p>
                </div>
              </div>
            </RevealText>

            <RevealText delay={1.2}>
              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 rounded-2xl bg-tosca/10 border border-tosca/20 flex items-center justify-center shrink-0">
                  <span className="text-tosca-h font-bold text-xl">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-display font-bold text-chalk mb-2">Performa Enterprise</h3>
                  <p className="text-dim font-body text-sm leading-relaxed">Dibangun di atas teknologi modern (Edge Computing & AI) yang mampu menangani jutaan baris data dalam hitungan milidetik.</p>
                </div>
              </div>
            </RevealText>
            
            <RevealText delay={1.4}>
              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 rounded-2xl bg-pink-500/10 border border-pink-500/20 flex items-center justify-center shrink-0">
                  <span className="text-pink-400 font-bold text-xl">3</span>
                </div>
                <div>
                  <h3 className="text-xl font-display font-bold text-chalk mb-2">Keamanan Privasi Tingkat Tinggi</h3>
                  <p className="text-dim font-body text-sm leading-relaxed">Database Anda terisolasi. Tidak ada pencampuran data dengan klien lain layaknya SaaS tradisional.</p>
                </div>
              </div>
            </RevealText>
          </div>
        </div>
        
        {/* CTA */}
        <RevealText delay={1.6}>
          <div className="text-center bg-deep/40 border border-edge-2 rounded-3xl p-16 relative overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue/20 rounded-full blur-3xl pointer-events-none" />
            <h2 className="text-3xl md:text-5xl font-display font-bold text-chalk mb-6 relative z-10">Siap Mendominasi Industri?</h2>
            <p className="text-mist font-body max-w-xl mx-auto mb-10 relative z-10">
              Jangan biarkan kompetitor menyalip Anda hanya karena perangkat lunak mereka lebih canggih. Mari bangun fondasi masa depan Anda hari ini.
            </p>
            <a 
              href="https://wa.me/6289625976080?text=Halo%20Tim%20Aetharix,%20saya%20ingin%20berkonsultasi%20mengenai%20infrastruktur%20IT%20perusahaan%20saya." 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-chalk text-void font-bold hover:bg-mist transition-colors font-body relative z-10"
            >
              Jadwalkan Konsultasi Gratis
              <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </RevealText>

      </div>
    </main>
  );
}
